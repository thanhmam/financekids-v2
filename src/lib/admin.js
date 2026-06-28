"use client";

// Lớp dữ liệu cho Admin: ưu tiên Firestore, fallback localStorage để demo
// được kể cả khi chưa cấu hình Firebase.
import { db, isFirebaseConfigured } from "@/lib/firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  deleteDoc,
  query,
  orderBy,
  limit as fbLimit,
  serverTimestamp,
} from "firebase/firestore";

const useFirestore = () => isFirebaseConfigured && !!db;

// ---------- localStorage helpers ----------
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
  localStorage.setItem(key, JSON.stringify(value));
};

// ========== 1. NỘI DUNG: trạng thái duyệt bài học ==========
// status: 'published' | 'hidden' | 'draft'
const OVERRIDE_KEY = "fk_admin_lesson_overrides";

export async function getLessonOverrides() {
  if (useFirestore()) {
    try {
      const snap = await getDocs(collection(db, "lesson_overrides"));
      const map = {};
      snap.forEach((d) => (map[d.id] = d.data()));
      return map;
    } catch (e) {
      console.warn("getLessonOverrides Firestore lỗi, dùng local:", e.message);
    }
  }
  return lsGet(OVERRIDE_KEY, {});
}

export async function setLessonStatus(lessonId, status) {
  if (useFirestore()) {
    try {
      await setDoc(
        doc(db, "lesson_overrides", lessonId),
        { status, updatedAt: serverTimestamp() },
        { merge: true }
      );
      return;
    } catch (e) {
      console.warn("setLessonStatus Firestore lỗi, dùng local:", e.message);
    }
  }
  const all = lsGet(OVERRIDE_KEY, {});
  all[lessonId] = { status, updatedAt: Date.now() };
  lsSet(OVERRIDE_KEY, all);
}

// Bài học do AI tạo, chờ duyệt (Firestore: generated_lessons)
export async function listDraftLessons() {
  if (useFirestore()) {
    try {
      const snap = await getDocs(collection(db, "generated_lessons"));
      return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
    } catch (e) {
      console.warn("listDraftLessons lỗi:", e.message);
    }
  }
  return lsGet("fk_admin_drafts", []);
}

export async function saveDraftLesson(lesson) {
  const id = lesson.id || `ai-${Date.now()}`;
  const record = { ...lesson, id, status: "draft", createdAt: Date.now() };
  if (useFirestore()) {
    try {
      await setDoc(doc(db, "generated_lessons", id), {
        ...lesson,
        status: "draft",
        createdAt: serverTimestamp(),
      });
      return record;
    } catch (e) {
      console.warn("saveDraftLesson lỗi:", e.message);
    }
  }
  const all = lsGet("fk_admin_drafts", []);
  all.push(record);
  lsSet("fk_admin_drafts", all);
  return record;
}

export async function removeDraftLesson(id) {
  if (useFirestore()) {
    try {
      await deleteDoc(doc(db, "generated_lessons", id));
      return;
    } catch (e) {
      console.warn("removeDraftLesson lỗi:", e.message);
    }
  }
  lsSet(
    "fk_admin_drafts",
    lsGet("fk_admin_drafts", []).filter((d) => d.id !== id)
  );
}

// ========== 2. NGƯỜI DÙNG ==========
export async function listUsers() {
  if (useFirestore()) {
    try {
      const snap = await getDocs(
        query(collection(db, "users"), fbLimit(200))
      );
      return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
    } catch (e) {
      console.warn("listUsers lỗi:", e.message);
    }
  }
  return [];
}

// ========== 3. CƠ CHẾ TÍNH ĐIỂM / THƯỞNG ==========
export const DEFAULT_SCORING = {
  xpPerCorrect: 50, // XP mặc định mỗi câu đúng (nếu bài không định nghĩa)
  perfectBonus: 50, // thưởng khi đúng 100%
  star3Threshold: 100, // % đúng để đạt 3 sao
  star2Threshold: 66,
  star1Threshold: 33,
  streakBonus: 20, // XP thưởng giữ streak mỗi ngày
  dailyGoal: 2, // số bài / ngày
};

const SCORING_KEY = "fk_admin_scoring";

export async function getScoringConfig() {
  if (useFirestore()) {
    try {
      const snap = await getDoc(doc(db, "config", "scoring"));
      if (snap.exists()) return { ...DEFAULT_SCORING, ...snap.data() };
    } catch (e) {
      console.warn("getScoringConfig lỗi:", e.message);
    }
  }
  return { ...DEFAULT_SCORING, ...lsGet(SCORING_KEY, {}) };
}

export async function saveScoringConfig(config) {
  if (useFirestore()) {
    try {
      await setDoc(
        doc(db, "config", "scoring"),
        { ...config, updatedAt: serverTimestamp() },
        { merge: true }
      );
      return;
    } catch (e) {
      console.warn("saveScoringConfig lỗi:", e.message);
    }
  }
  lsSet(SCORING_KEY, config);
}

// ========== 4. THÔNG BÁO ==========
// target: { type: 'all' | 'ageGroup' | 'user', value?: string }
const NOTIF_KEY = "fk_admin_notifications";

export async function listNotifications() {
  if (useFirestore()) {
    try {
      const snap = await getDocs(
        query(
          collection(db, "notifications"),
          orderBy("createdAt", "desc"),
          fbLimit(50)
        )
      );
      return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
    } catch (e) {
      console.warn("listNotifications lỗi:", e.message);
    }
  }
  return lsGet(NOTIF_KEY, []);
}

export async function sendNotification({ title, message, target }) {
  const id = `notif-${Date.now()}`;
  const record = {
    id,
    title,
    message,
    target,
    createdAt: Date.now(),
    sentBy: "admin",
  };
  if (useFirestore()) {
    try {
      await setDoc(doc(db, "notifications", id), {
        title,
        message,
        target,
        createdAt: serverTimestamp(),
        sentBy: "admin",
      });
      return record;
    } catch (e) {
      console.warn("sendNotification lỗi:", e.message);
    }
  }
  const all = lsGet(NOTIF_KEY, []);
  all.unshift(record);
  lsSet(NOTIF_KEY, all);
  return record;
}

// ========== 5. SỬA NỘI DUNG CÂU HỎI / BÀI HỌC (override) ==========
// Override lưu đè lên dữ liệu tĩnh; app đọc và áp khi render.
const Q_OVERRIDE_KEY = "fk_admin_question_overrides"; // { "lessonId::questionId": {patch} }
const L_META_KEY = "fk_admin_lesson_meta"; // { lessonId: {category, level, topic, title...} }

export async function getQuestionOverrides() {
  if (useFirestore()) {
    try {
      const snap = await getDocs(collection(db, "question_overrides"));
      const map = {};
      snap.forEach((d) => (map[d.id.replace("__", "::")] = d.data()));
      return map;
    } catch (e) {
      console.warn("getQuestionOverrides lỗi:", e.message);
    }
  }
  return lsGet(Q_OVERRIDE_KEY, {});
}

export async function saveQuestionOverride(lessonId, questionId, patch) {
  if (useFirestore()) {
    try {
      await setDoc(
        doc(db, "question_overrides", `${lessonId}__${questionId}`),
        { ...patch, updatedAt: serverTimestamp() },
        { merge: true }
      );
      return;
    } catch (e) {
      console.warn("saveQuestionOverride lỗi:", e.message);
    }
  }
  const all = lsGet(Q_OVERRIDE_KEY, {});
  all[`${lessonId}::${questionId}`] = { ...(all[`${lessonId}::${questionId}`] || {}), ...patch };
  lsSet(Q_OVERRIDE_KEY, all);
}

export async function getLessonMeta() {
  if (useFirestore()) {
    try {
      const snap = await getDocs(collection(db, "lesson_meta"));
      const map = {};
      snap.forEach((d) => (map[d.id] = d.data()));
      return map;
    } catch (e) {
      console.warn("getLessonMeta lỗi:", e.message);
    }
  }
  return lsGet(L_META_KEY, {});
}

export async function saveLessonMeta(lessonId, patch) {
  if (useFirestore()) {
    try {
      await setDoc(
        doc(db, "lesson_meta", lessonId),
        { ...patch, updatedAt: serverTimestamp() },
        { merge: true }
      );
      return;
    } catch (e) {
      console.warn("saveLessonMeta lỗi:", e.message);
    }
  }
  const all = lsGet(L_META_KEY, {});
  all[lessonId] = { ...(all[lessonId] || {}), ...patch };
  lsSet(L_META_KEY, all);
}

// ========== 6. CỬA HÀNG SÁCH (book store) ==========
// Admin quản lý: bìa, tên, tác giả, giá, giảm giá, link Shopee affiliate.
// Lưu dạng ghi đè/bổ sung lên catalog tĩnh trong data/books.js.
//   overrides: { [bookId]: {patch} }  — sửa sách có sẵn hoặc ẩn (hidden:true)
//   extras:    [ {book} ]             — sách mới do admin thêm
const BOOK_OVERRIDE_KEY = "fk_admin_book_overrides";
const BOOK_EXTRA_KEY = "fk_admin_book_extras";

export async function getBookOverrides() {
  if (useFirestore()) {
    try {
      const snap = await getDocs(collection(db, "book_overrides"));
      const map = {};
      snap.forEach((d) => (map[d.id] = d.data()));
      return map;
    } catch (e) {
      console.warn("getBookOverrides lỗi:", e.message);
    }
  }
  return lsGet(BOOK_OVERRIDE_KEY, {});
}

export async function saveBookOverride(bookId, patch) {
  if (useFirestore()) {
    try {
      await setDoc(
        doc(db, "book_overrides", bookId),
        { ...patch, updatedAt: serverTimestamp() },
        { merge: true }
      );
      return;
    } catch (e) {
      console.warn("saveBookOverride lỗi:", e.message);
    }
  }
  const all = lsGet(BOOK_OVERRIDE_KEY, {});
  all[bookId] = { ...(all[bookId] || {}), ...patch };
  lsSet(BOOK_OVERRIDE_KEY, all);
}

export async function getBookExtras() {
  if (useFirestore()) {
    try {
      const snap = await getDocs(collection(db, "book_extras"));
      return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
    } catch (e) {
      console.warn("getBookExtras lỗi:", e.message);
    }
  }
  return lsGet(BOOK_EXTRA_KEY, []);
}

export async function saveBookExtra(book) {
  const id = book.id || `book-${Date.now()}`;
  const record = { ...book, id };
  if (useFirestore()) {
    try {
      await setDoc(doc(db, "book_extras", id), { ...book, updatedAt: serverTimestamp() }, { merge: true });
      return record;
    } catch (e) {
      console.warn("saveBookExtra lỗi:", e.message);
    }
  }
  const all = lsGet(BOOK_EXTRA_KEY, []);
  const idx = all.findIndex((b) => b.id === id);
  if (idx >= 0) all[idx] = record;
  else all.push(record);
  lsSet(BOOK_EXTRA_KEY, all);
  return record;
}

export async function removeBookExtra(id) {
  if (useFirestore()) {
    try {
      await deleteDoc(doc(db, "book_extras", id));
      return;
    } catch (e) {
      console.warn("removeBookExtra lỗi:", e.message);
    }
  }
  lsSet(BOOK_EXTRA_KEY, lsGet(BOOK_EXTRA_KEY, []).filter((b) => b.id !== id));
}

// Hợp nhất catalog tĩnh + override + extra → danh sách sách hiển thị
export function mergeBooks(staticBooks, overrides = {}, extras = []) {
  const merged = staticBooks
    .map((b) => ({ ...b, ...(overrides[b.id] || {}) }))
    .filter((b) => !b.hidden);
  return [...merged, ...extras.filter((b) => !b.hidden)];
}

// Áp override lên 1 lesson (dùng ở app ngoài lẫn admin)
export function applyLessonOverrides(lesson, qOverrides = {}, lMeta = {}) {
  const meta = lMeta[lesson.id] || {};
  return {
    ...lesson,
    ...meta,
    questions: lesson.questions.map((q) => ({
      ...q,
      ...(qOverrides[`${lesson.id}::${q.id}`] || {}),
    })),
  };
}

export { useFirestore };
