"use client";

import { useEffect, useState } from "react";
import { LESSONS, AGE_GROUPS, CATEGORIES } from "@/data/lessons";
import {
  getLessonOverrides,
  setLessonStatus,
  listDraftLessons,
  removeDraftLesson,
  useFirestore,
} from "@/lib/admin";

const AGES = AGE_GROUPS.filter((g) => g.value !== "all");

export default function AdminContentPage() {
  const [overrides, setOverrides] = useState({});
  const [drafts, setDrafts] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loaded, setLoaded] = useState(false);

  const refresh = async () => {
    setOverrides(await getLessonOverrides());
    setDrafts(await listDraftLessons());
    setLoaded(true);
  };
  useEffect(() => {
    refresh();
  }, []);

  const statusOf = (id) => overrides[id]?.status || "published";

  const toggle = async (id) => {
    const next = statusOf(id) === "hidden" ? "published" : "hidden";
    await setLessonStatus(id, next);
    setOverrides((o) => ({ ...o, [id]: { status: next } }));
  };

  const approveDraft = async (d) => {
    // "Duyệt" = đánh dấu published (bản nháp vẫn cần export vào lessons.js để lên app)
    await setLessonStatus(d.id, "published");
    await removeDraftLesson(d.id);
    await refresh();
  };
  const rejectDraft = async (d) => {
    await removeDraftLesson(d.id);
    setDrafts((arr) => arr.filter((x) => x.id !== d.id));
  };

  const filtered =
    filter === "all"
      ? LESSONS
      : LESSONS.filter((l) => l.ageGroup === filter);

  return (
    <div className="max-w-5xl">
      <h1 className="text-2xl font-black text-gray-800 mb-1">
        📚 Nội dung bài học
      </h1>
      <p className="text-sm text-gray-500 mb-6">
        Quản lý khóa học, cấp độ và các bài quiz. Duyệt hoặc ẩn bài khi cần.
      </p>

      {/* Bản nháp do AI tạo, chờ duyệt */}
      {loaded && drafts.length > 0 && (
        <div className="mb-8">
          <h2 className="font-black text-gray-800 mb-3">
            🤖 Bản nháp chờ duyệt ({drafts.length})
          </h2>
          <div className="space-y-2">
            {drafts.map((d) => (
              <div
                key={d.id}
                className="bg-white rounded-2xl shadow-sm p-4 flex items-center justify-between gap-3"
              >
                <div className="min-w-0">
                  <div className="font-bold text-gray-800 truncate">
                    {d.icon} {d.title}
                  </div>
                  <div className="text-xs text-gray-400">
                    {d.ageGroup} · {d.questions?.length || 0} câu hỏi · do AI tạo
                  </div>
                </div>
                <div className="flex gap-2 shrink-0">
                  <button
                    onClick={() => approveDraft(d)}
                    className="text-sm font-bold px-3 py-1.5 rounded-xl bg-green-500 text-white"
                  >
                    Duyệt
                  </button>
                  <button
                    onClick={() => rejectDraft(d)}
                    className="text-sm font-bold px-3 py-1.5 rounded-xl bg-gray-100 text-gray-600"
                  >
                    Gỡ
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Lọc theo cấp độ */}
      <div className="flex gap-2 flex-wrap mb-4">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded-full font-bold text-sm ${
            filter === "all" ? "bg-orange-500 text-white" : "bg-white text-gray-600"
          }`}
        >
          Tất cả ({LESSONS.length})
        </button>
        {AGES.map((g) => (
          <button
            key={g.value}
            onClick={() => setFilter(g.value)}
            className={`px-4 py-2 rounded-full font-bold text-sm ${
              filter === g.value
                ? "bg-orange-500 text-white"
                : "bg-white text-gray-600"
            }`}
          >
            {g.emoji} {g.label} (
            {LESSONS.filter((l) => l.ageGroup === g.value).length})
          </button>
        ))}
      </div>

      {/* Danh sách bài học */}
      <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
        {filtered.map((l, i) => {
          const status = statusOf(l.id);
          const cat = CATEGORIES[l.category];
          return (
            <div
              key={l.id}
              className={`flex items-center gap-3 p-4 ${
                i > 0 ? "border-t border-gray-50" : ""
              } ${status === "hidden" ? "opacity-50" : ""}`}
            >
              <div className="text-2xl shrink-0">{l.icon}</div>
              <div className="min-w-0 flex-1">
                <div className="font-bold text-gray-800 truncate">{l.title}</div>
                <div className="text-xs text-gray-400 flex items-center gap-2 flex-wrap">
                  <span>{l.ageGroup}</span>
                  {cat && (
                    <span className={`px-2 py-0.5 rounded-full ${cat.color}`}>
                      {cat.emoji} {cat.label}
                    </span>
                  )}
                  <span>{l.questions.length} câu</span>
                  <span>⭐ {l.xp} XP</span>
                </div>
              </div>
              <span
                className={`text-xs font-bold px-2 py-1 rounded-full shrink-0 ${
                  status === "hidden"
                    ? "bg-gray-100 text-gray-500"
                    : "bg-green-100 text-green-700"
                }`}
              >
                {status === "hidden" ? "Đã ẩn" : "Hiển thị"}
              </span>
              <button
                onClick={() => toggle(l.id)}
                className="text-sm font-bold px-3 py-1.5 rounded-xl bg-orange-50 text-orange-600 shrink-0"
              >
                {status === "hidden" ? "Hiện" : "Ẩn"}
              </button>
            </div>
          );
        })}
      </div>

      {!useFirestore() && (
        <p className="text-xs text-gray-400 mt-4">
          * Trạng thái duyệt/ẩn đang lưu tạm trên trình duyệt. Cấu hình Firebase
          để lưu vĩnh viễn cho mọi quản trị viên.
        </p>
      )}
    </div>
  );
}
