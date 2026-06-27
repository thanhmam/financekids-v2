#!/usr/bin/env node
/**
 * Orchestrator sinh KHO THƯ VIỆN câu hỏi (3-agent).
 *
 * Dùng:
 *   node scripts/generate-library.mjs --pilot          # 3 ô đại diện (~24 câu)
 *   node scripts/generate-library.mjs --cell money-basics:foundation --n 10
 *   node scripts/generate-library.mjs --full           # toàn bộ ma trận ~500
 *
 * Cần ANTHROPIC_API_KEY (đọc từ .env.local hoặc biến môi trường).
 * Kết quả lưu vào data/question-bank.json (cộng dồn, chống trùng).
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import {
  LIB_CONTENT_PROMPT,
  LIB_REVIEW_PROMPT,
  LIB_TAG_PROMPT,
  TOPICS,
  LEVELS,
} from "../src/lib/agents/library-prompts.js";

const __dir = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dir, "..");
const OUT = join(ROOT, "data", "question-bank.json");

// ---- load API key ----
function loadKey() {
  if (process.env.ANTHROPIC_API_KEY) return process.env.ANTHROPIC_API_KEY;
  const envPath = join(ROOT, ".env.local");
  if (existsSync(envPath)) {
    const m = readFileSync(envPath, "utf8").match(/ANTHROPIC_API_KEY=(.+)/);
    if (m) return m[1].trim();
  }
  throw new Error("Thiếu ANTHROPIC_API_KEY (đặt trong .env.local hoặc biến môi trường)");
}

// ---- ma trận phân bổ (~500) ----
const MATRIX = {
  "money-basics": { foundation: 50, advanced: 20 },
  saving: { foundation: 45, advanced: 30 },
  "personal-finance": { foundation: 45, advanced: 40 },
  borrowing: { foundation: 30, advanced: 35 },
  investing: { foundation: 25, advanced: 50 },
  stocks: { foundation: 20, advanced: 50 },
  "digital-assets": { foundation: 20, advanced: 40 },
};
const PILOT = [
  ["money-basics", "foundation", 8],
  ["investing", "advanced", 8],
  ["digital-assets", "advanced", 8],
];
const TYPE_RATIO = [
  ["quiz", 0.55],
  ["ab", 0.3],
  ["transaction", 0.15],
];
const BATCH = 8;

// ---- helpers ----
const norm = (s) =>
  (s || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/đ/g, "d")
    .replace(/[^a-z0-9]/g, "");

function parseJSON(text) {
  const t = text.trim();
  const fence = t.match(/```(?:json)?\s*([\s\S]*?)\s*```/);
  return JSON.parse(fence ? fence[1] : t);
}

function loadBank() {
  if (existsSync(OUT)) return JSON.parse(readFileSync(OUT, "utf8"));
  return [];
}
function saveBank(items) {
  mkdirSync(dirname(OUT), { recursive: true });
  writeFileSync(OUT, JSON.stringify(items, null, 2), "utf8");
}

let totalIn = 0,
  totalOut = 0;

async function callClaude(client, { model, system, user }) {
  const r = await client.messages.create({
    model,
    max_tokens: 4096,
    system: [{ type: "text", text: system, cache_control: { type: "ephemeral" } }],
    messages: [{ role: "user", content: user }],
  });
  totalIn += r.usage.input_tokens + (r.usage.cache_read_input_tokens || 0);
  totalOut += r.usage.output_tokens;
  return parseJSON(r.content[0].text);
}

function pickType(i) {
  // phân bổ type theo tỷ lệ trong 1 lô
  let acc = 0;
  const r = (i % BATCH) / BATCH;
  for (const [t, p] of TYPE_RATIO) {
    acc += p;
    if (r < acc) return t;
  }
  return "quiz";
}

async function generateCell(client, topic, level, count, bank) {
  const existing = bank.filter((q) => q.topic === topic && q.level === level);
  const seen = new Set(existing.map((q) => norm(q.question)));
  let made = 0;
  const cellItems = [];

  while (made < count) {
    const n = Math.min(BATCH, count - made);
    const types = Array.from({ length: n }, (_, i) => pickType(made + i));
    const typeSummary = types.reduce((a, t) => ((a[t] = (a[t] || 0) + 1), a), {});
    const avoidList = [...existing, ...cellItems]
      .slice(-40)
      .map((q) => "- " + q.question);

    // AGENT 1
    const userMsg =
      `Chủ đề: ${TOPICS[topic]} (${topic})\n` +
      `Cấp độ: ${LEVELS[level]}\n` +
      `Số lượng: ${n} câu, phân loại type: ${JSON.stringify(typeSummary)}\n` +
      `avoidList (KHÔNG trùng):\n${avoidList.join("\n") || "(trống)"}`;
    let draft;
    try {
      draft = await callClaude(client, {
        model: "claude-haiku-4-5-20251001",
        system: LIB_CONTENT_PROMPT,
        user: userMsg,
      });
    } catch (e) {
      console.log(`   ⚠️ content lỗi: ${e.status || ""} ${e.message?.slice(0, 80)}`);
      break;
    }
    if (!Array.isArray(draft)) draft = draft.items || [];

    // AGENT 2
    let reviews;
    try {
      reviews = await callClaude(client, {
        model: "claude-sonnet-4-6",
        system: LIB_REVIEW_PROMPT,
        user: JSON.stringify({
          items: draft,
          existing: [...seen].slice(-60),
        }),
      });
    } catch (e) {
      console.log(`   ⚠️ review lỗi: ${e.message?.slice(0, 80)}`);
      reviews = draft.map(() => ({ approved: true, score: 80, revisedItem: null }));
    }
    if (!Array.isArray(reviews)) reviews = reviews.reviews || [];

    let approved = draft
      .map((item, i) => {
        const rv = reviews[i] || {};
        if (rv.approved === false) return null;
        const it = rv.revisedItem || item;
        if (seen.has(norm(it.question))) return null;
        it._score = rv.score || 80;
        return it;
      })
      .filter(Boolean);

    if (approved.length === 0) {
      console.log(`   (lô không có câu đạt, thử lại)`);
      continue;
    }

    // AGENT 3
    let tagged;
    try {
      tagged = await callClaude(client, {
        model: "claude-sonnet-4-6",
        system: LIB_TAG_PROMPT,
        user: JSON.stringify({ items: approved }),
      });
    } catch (e) {
      console.log(`   ⚠️ tag lỗi: ${e.message?.slice(0, 80)}`);
      tagged = approved;
    }
    if (!Array.isArray(tagged)) tagged = tagged.items || approved;

    for (let i = 0; i < tagged.length && made < count; i++) {
      const it = tagged[i];
      if (!it.question || seen.has(norm(it.question))) continue;
      seen.add(norm(it.question));
      const seq = String(existing.length + cellItems.length + 1).padStart(4, "0");
      cellItems.push({
        id: `qb-${topic}-${level}-${seq}`,
        topic,
        level,
        type: it.type,
        question: it.question,
        image: it.image || "💡",
        ...it,
        skills: it.skills || [],
        bookRefs: it.bookRefs || [],
        difficulty: it.difficulty || (level === "foundation" ? 2 : 4),
        vnContext: true,
        source: "agent",
        status: "draft",
        reviewScore: it._score || 80,
        createdAt: Date.now(),
      });
      made++;
    }
    process.stdout.write(`   ${topic}/${level}: ${made}/${count}\r`);
  }
  console.log(`   ✅ ${topic}/${level}: ${cellItems.length} câu`);
  return cellItems;
}

async function main() {
  const args = process.argv.slice(2);
  const key = loadKey();
  const Anthropic = (await import("@anthropic-ai/sdk")).default;
  const client = new Anthropic({ apiKey: key });

  let cells = [];
  if (args.includes("--pilot")) {
    cells = PILOT;
  } else if (args.includes("--cell")) {
    const spec = args[args.indexOf("--cell") + 1];
    const [topic, level] = spec.split(":");
    const n = args.includes("--n") ? +args[args.indexOf("--n") + 1] : 8;
    cells = [[topic, level, n]];
  } else if (args.includes("--full")) {
    for (const [topic, levels] of Object.entries(MATRIX))
      for (const [level, n] of Object.entries(levels)) cells.push([topic, level, n]);
  } else {
    console.log("Chọn chế độ: --pilot | --cell topic:level [--n N] | --full");
    process.exit(0);
  }

  const bank = loadBank();
  console.log(`📚 Kho hiện có: ${bank.length} câu. Bắt đầu sinh ${cells.length} ô...\n`);

  for (const [topic, level, n] of cells) {
    const items = await generateCell(client, topic, level, n, bank);
    bank.push(...items);
    saveBank(bank); // lưu sau mỗi ô (an toàn nếu gián đoạn)
  }

  const cost = (totalIn / 1e6) * 1.5 + (totalOut / 1e6) * 8; // ước tính trộn haiku/sonnet
  console.log(`\n🎉 Xong. Kho: ${bank.length} câu.`);
  console.log(
    `   Tokens: in=${totalIn.toLocaleString()} out=${totalOut.toLocaleString()} | ước tính ~$${cost.toFixed(2)}`
  );
  console.log(`   File: data/question-bank.json`);
}

main().catch((e) => {
  console.error("LỖI:", e.message);
  process.exit(1);
});
