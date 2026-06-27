#!/usr/bin/env node
/**
 * Gom câu hỏi đã duyệt trong data/question-bank.json thành bài học,
 * ghép vào src/data/lessons.js (giữ nguyên 45 bài cũ + export cũ).
 * Mỗi ô (topic × level) → 1 bài học.
 */
import { readFileSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dir = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dir, "..");
const BANK = join(ROOT, "data", "question-bank.json");
const LESSONS_FILE = join(ROOT, "src", "data", "lessons.js");

const TOPIC_META = {
  "money-basics": { label: "Cơ bản về tiền", icon: "💰", color: "#16C172", bgColor: "#EAFBF1" },
  saving: { label: "Tiết kiệm", icon: "🐷", color: "#3B82F6", bgColor: "#EFF6FF" },
  "personal-finance": { label: "Quản lý tài chính cá nhân", icon: "📒", color: "#0EA5E9", bgColor: "#F0F9FF" },
  borrowing: { label: "Vay", icon: "🤝", color: "#EF4444", bgColor: "#FEF2F2" },
  investing: { label: "Đầu tư", icon: "📈", color: "#8B5CF6", bgColor: "#F5F3FF" },
  stocks: { label: "Chứng khoán", icon: "📊", color: "#6366F1", bgColor: "#EEF2FF" },
  "digital-assets": { label: "Tài sản số", icon: "🪙", color: "#F59E0B", bgColor: "#FFFBEB" },
};
const LEVEL_META = {
  foundation: { label: "Khởi đầu", emoji: "🌱" },
  advanced: { label: "Vững vàng", emoji: "🌳" },
};
// ageGroup hiển thị (để lọt bộ lọc tuổi sẵn có); audience vẫn giữ ở từng câu
const LEVEL_AGE = { foundation: "9-12", advanced: "13-16" };

function deriveCategory(qs) {
  const types = qs.map((q) => q.type);
  if (types.includes("transaction")) return "transaction";
  if (types.filter((t) => t === "ab").length >= 2) return "choice";
  if (types.includes("ab")) return "compare";
  return "concept";
}

const bank = JSON.parse(readFileSync(BANK, "utf8"));
const published = bank.filter((q) => q.status !== "rejected");

// nhóm theo topic+level
const cells = {};
for (const q of published) {
  const key = `${q.topic}__${q.level}`;
  (cells[key] ||= []).push(q);
}

const libLessons = Object.entries(cells).map(([key, qs]) => {
  const [topic, level] = key.split("__");
  const tm = TOPIC_META[topic];
  const lm = LEVEL_META[level];
  return {
    id: `lib-${topic}-${level}`,
    title: `${tm.label} · ${lm.label}`,
    subtitle: `${qs.length} câu từ kho thư viện ${lm.emoji}`,
    ageGroup: LEVEL_AGE[level],
    category: deriveCategory(qs),
    topic,
    level,
    icon: tm.icon,
    color: tm.color,
    bgColor: tm.bgColor,
    xp: qs.length * 20,
    description: `Bộ câu hỏi ${tm.label} cấp ${lm.label}.`,
    fromLibrary: true,
    questions: qs.map((q, i) => ({
      id: q.id || `q${i + 1}`,
      type: q.type,
      question: q.question,
      image: q.image || "💡",
      ...(q.type === "quiz" ? { options: q.options, correct: q.correct } : {}),
      ...(q.type === "ab"
        ? { optionA: q.optionA, optionB: q.optionB, bestChoice: q.bestChoice }
        : {}),
      ...(q.type === "transaction"
        ? {
            scenario: q.scenario,
            startBalance: q.startBalance,
            currency: q.currency || "đ",
            steps: q.steps,
            correctAnswer: q.correctAnswer,
          }
        : {}),
      explanation: q.explanation,
      skills: q.skills || [],
      bookRefs: q.bookRefs || [],
      marketingHook: q.marketingHook || "",
      difficulty: q.difficulty || 2,
    })),
  };
});

// đọc dữ liệu hiện có qua import động
const mod = await import(LESSONS_FILE + "?v=" + Date.now());
const existing = mod.LESSONS.filter((l) => !l.fromLibrary); // tránh nhân đôi nếu chạy lại
const merged = [...existing, ...libLessons];

const TOPICS = Object.fromEntries(
  Object.entries(TOPIC_META).map(([k, v]) => [k, v.label])
);

const body = `/**
 * FinanceKids — Lesson data (45 bài gốc + bài từ kho thư viện)
 * Bài kho thư viện có: topic, level, fromLibrary; câu hỏi kèm skills, bookRefs, marketingHook.
 */
export const LESSONS = ${JSON.stringify(merged, null, 2)};

export const getLessonsByAgeGroup = (ageGroup) => {
  if (ageGroup === "all") return LESSONS;
  return LESSONS.filter((l) => l.ageGroup === ageGroup);
};

export const getLessonById = (id) => LESSONS.find((l) => l.id === id);

export const getLessonsByTopic = (topic) =>
  LESSONS.filter((l) => l.topic === topic);

export const AGE_GROUPS = ${JSON.stringify(mod.AGE_GROUPS, null, 2)};

export const CATEGORIES = ${JSON.stringify(mod.CATEGORIES, null, 2)};

export const LEVELS = ${JSON.stringify(LEVEL_META, null, 2)};

export const TOPICS = ${JSON.stringify(TOPICS, null, 2)};
`;

writeFileSync(LESSONS_FILE, body, "utf8");
console.log(
  `✅ Ghép ${libLessons.length} bài kho (${published.length} câu) → tổng ${merged.length} bài.`
);
libLessons.forEach((l) =>
  console.log(`   ${l.id}: ${l.title} (${l.questions.length} câu)`)
);
