"use client";

// Logic sinh lộ trình cá nhân hóa (rule-based) + lưu/đọc (Firestore-or-localStorage).
import { db, isFirebaseConfigured } from "@/lib/firebase";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { LESSONS, TOPICS, LEVELS } from "@/data/lessons";
import { QUESTIONS, GOAL_LABEL } from "@/data/personalize";

const useFirestore = () => isFirebaseConfigured && !!db;
const GUEST_KEY = "fk_personalize_guest";

const lsGet = (key, fallback) => {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
};
const lsSet = (key, value) => {
  if (typeof window === "undefined") return;
  try { localStorage.setItem(key, JSON.stringify(value)); } catch {}
};

const MAX_PATH = 12; // số bài tối đa trong 1 lộ trình

// answers = { goal, level, pace } (value của từng câu)
export function buildPath(answers, lessons = LESSONS) {
  const goalOpt = QUESTIONS[0].options.find((o) => o.value === answers.goal) || QUESTIONS[0].options[0];
  const levelOpt = QUESTIONS[1].options.find((o) => o.value === answers.level) || QUESTIONS[1].options[0];
  const targetTopics = goalOpt.topics;
  const chosenLevel = levelOpt.level; // "foundation" | "advanced"

  const inTopics = lessons.filter((l) => targetTopics.includes(l.topic));

  // foundation trước, advanced sau (giữ thứ tự mảng gốc trong từng nhóm)
  const foundation = inTopics.filter((l) => l.level === "foundation");
  const advanced = inTopics.filter((l) => l.level === "advanced");

  let ordered;
  if (chosenLevel === "advanced") {
    // Đã có nền tảng: gồm cả 2, foundation làm khởi động ngắn rồi tới advanced
    ordered = [...foundation, ...advanced];
  } else {
    // Mới bắt đầu: ưu tiên foundation; bổ sung advanced nếu chưa đủ
    ordered = [...foundation, ...advanced];
  }

  const picked = ordered.slice(0, MAX_PATH);
  const lessonIds = picked.map((l) => l.id);

  const goalLabel = GOAL_LABEL[answers.goal] || goalOpt.label;
  const levelLabel = LEVELS[chosenLevel]?.label || levelOpt.label;
  const summaryText = `Vì bạn muốn **${goalLabel}** và đang **${levelLabel}**, XuXu gợi ý lộ trình ${lessonIds.length} bài này 👇`;

  return { lessonIds, summaryText, topics: targetTopics, level: chosenLevel };
}

// Nhãn chủ đề (để hiển thị chip tóm tắt)
export const topicLabels = (topics = []) => topics.map((t) => TOPICS[t]).filter(Boolean);

// ---------- Lưu / đọc lộ trình ----------
// data = { answers, lessonIds, redesignsUsed, updatedAt }

export async function getPersonalize(user) {
  if (user && useFirestore()) {
    try {
      const snap = await getDoc(doc(db, "users", user.uid, "personalize", "path"));
      if (snap.exists()) return snap.data();
      return null;
    } catch (e) {
      console.warn("getPersonalize Firestore lỗi, dùng local:", e.message);
    }
  }
  return lsGet(user ? `fk_personalize_${user.uid}` : GUEST_KEY, null);
}

export async function savePersonalize(user, data) {
  const payload = { ...data, updatedAt: Date.now() };
  if (user && useFirestore()) {
    try {
      await setDoc(
        doc(db, "users", user.uid, "personalize", "path"),
        { ...data, updatedAt: serverTimestamp() },
        { merge: true }
      );
      return payload;
    } catch (e) {
      console.warn("savePersonalize Firestore lỗi, dùng local:", e.message);
    }
  }
  lsSet(user ? `fk_personalize_${user.uid}` : GUEST_KEY, payload);
  return payload;
}
