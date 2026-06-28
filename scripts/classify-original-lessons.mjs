#!/usr/bin/env node
/**
 * Gán topic + level cho các bài CHƯA có (45 bài gốc), giữ nguyên bài kho.
 * Heuristic theo từ khóa tiêu đề/mô tả. Có thể chỉnh tay sau qua Admin.
 */
import { readFileSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dir = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dir, "..");
const FILE = join(ROOT, "src", "data", "lessons.js");

// thứ tự ưu tiên: cụ thể trước
const RULES = [
  ["stocks", /cổ phiếu|chứng khoán|trái phiếu/i],
  ["digital-assets", /crypto|tài sản số|tiền điện tử|tiền mã hóa|thanh toán điện tử|ví điện tử|mua sắm online|online/i],
  ["borrowing", /\bvay\b|cho vay|\bnợ\b|tín dụng/i],
  ["investing", /đầu tư|lãi kép|lãi suất kép|bất động sản/i],
  ["saving", /tiết kiệm|heo đất|\bquỹ\b|khẩn cấp|dự phòng/i],
  ["personal-finance", /ngân sách|kế hoạch|quản l[ýy]|thu[ếe]|l[ưu]ơng|bảo hiểm|mục tiêu|nghỉ hưu|khởi nghiệp|5 năm|chỉ số|tài sản|tiêu sản|học phí|chi tiêu/i],
  ["money-basics", /.*/],
];

function classifyTopic(l) {
  const hay = `${l.title} ${l.subtitle || ""} ${l.description || ""}`;
  for (const [topic, re] of RULES) if (re.test(hay)) return topic;
  return "money-basics";
}

const mod = await import(FILE + "?v=" + Date.now());
const lessons = mod.LESSONS.map((l) => {
  if (l.topic && l.level) return l; // bài kho đã có
  return {
    ...l,
    topic: l.topic || classifyTopic(l),
    level: l.level || (l.ageGroup === "13-16" ? "advanced" : "foundation"),
  };
});

const body = `/**
 * FinanceKids — Lesson data (đã phân loại topic + level cho toàn bộ)
 * Mỗi bài: topic, level (foundation|advanced). Bài kho có fromLibrary + câu hỏi kèm skills/bookRefs/marketingHook.
 */
export const LESSONS = ${JSON.stringify(lessons, null, 2)};

export const getLessonsByAgeGroup = (ageGroup) => {
  if (ageGroup === "all") return LESSONS;
  return LESSONS.filter((l) => l.ageGroup === ageGroup);
};

export const getLessonById = (id) => LESSONS.find((l) => l.id === id);

export const getLessonsByTopic = (topic) =>
  topic === "all" ? LESSONS : LESSONS.filter((l) => l.topic === topic);

export const AGE_GROUPS = ${JSON.stringify(mod.AGE_GROUPS, null, 2)};

export const CATEGORIES = ${JSON.stringify(mod.CATEGORIES, null, 2)};

export const LEVELS = ${JSON.stringify(mod.LEVELS, null, 2)};

export const TOPICS = ${JSON.stringify(mod.TOPICS, null, 2)};
`;

writeFileSync(FILE, body, "utf8");

const byTopic = {};
lessons.forEach((l) => (byTopic[l.topic] = (byTopic[l.topic] || 0) + 1));
const byLevel = {};
lessons.forEach((l) => (byLevel[l.level] = (byLevel[l.level] || 0) + 1));
console.log(`✅ Phân loại ${lessons.length} bài.`);
console.log("   Theo chủ đề:", JSON.stringify(byTopic));
console.log("   Theo cấp độ:", JSON.stringify(byLevel));
