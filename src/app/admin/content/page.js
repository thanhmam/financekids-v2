"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LESSONS, TOPICS, LEVELS, CATEGORIES } from "@/data/lessons";
import {
  getLessonOverrides,
  setLessonStatus,
  listDraftLessons,
  removeDraftLesson,
  useFirestore,
} from "@/lib/admin";

const baloo = (size) => ({ font: `800 ${size}px 'Baloo 2'` });
const TOPIC_LIST = Object.entries(TOPICS); // [key, label]

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
    await setLessonStatus(d.id, "published");
    await removeDraftLesson(d.id);
    await refresh();
  };
  const rejectDraft = async (d) => {
    await removeDraftLesson(d.id);
    setDrafts((arr) => arr.filter((x) => x.id !== d.id));
  };

  const filtered =
    filter === "all" ? LESSONS : LESSONS.filter((l) => l.topic === filter);

  const FilterBtn = ({ value, children }) => {
    const active = filter === value;
    return (
      <button
        onClick={() => setFilter(value)}
        className="px-4 py-2 rounded-full text-sm transition-all"
        style={{
          font: "800 13px 'Baloo 2'",
          background: active ? "#16C172" : "#fff",
          color: active ? "#fff" : "#5B7065",
          border: active ? "none" : "2px solid #ECF1E6",
          boxShadow: active ? "0 3px 0 #0E9E5C" : "none",
        }}
      >
        {children}
      </button>
    );
  };

  return (
    <div className="max-w-5xl">
      <h1 style={baloo(26)} className="text-[#15392A] mb-1">📚 Nội dung bài học</h1>
      <p style={{ font: "600 14px 'Nunito'" }} className="text-[#9AA89E] mb-6">
        Quản lý khóa học theo chủ đề & cấp độ. Duyệt hoặc ẩn bài khi cần.
      </p>

      {/* Bản nháp do AI tạo, chờ duyệt */}
      {loaded && drafts.length > 0 && (
        <div className="mb-8">
          <h2 style={baloo(16)} className="text-[#15392A] mb-3">
            🤖 Bản nháp chờ duyệt ({drafts.length})
          </h2>
          <div className="space-y-2">
            {drafts.map((d) => (
              <div key={d.id} className="bg-white rounded-[18px] border-2 border-[#ECF1E6] p-4 flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <div style={{ font: "700 15px 'Nunito'" }} className="text-[#15392A] truncate">
                    {d.icon} {d.title}
                  </div>
                  <div style={{ font: "600 12px 'Nunito'" }} className="text-[#9AA89E]">
                    {TOPICS[d.topic] || d.topic || "—"} · {LEVELS[d.level]?.label || ""} · {d.questions?.length || 0} câu · do AI tạo
                  </div>
                </div>
                <div className="flex gap-2 shrink-0">
                  <button onClick={() => approveDraft(d)} style={baloo(13)} className="px-3 py-1.5 rounded-xl bg-[#16C172] text-white shadow-[0_3px_0_#0E9E5C]">Duyệt</button>
                  <button onClick={() => rejectDraft(d)} style={baloo(13)} className="px-3 py-1.5 rounded-xl bg-[#F4F8EF] text-[#5B7065]">Gỡ</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Lọc theo chủ đề */}
      <div className="flex gap-2 flex-wrap mb-4">
        <FilterBtn value="all">Tất cả ({LESSONS.length})</FilterBtn>
        {TOPIC_LIST.map(([key, label]) => {
          const count = LESSONS.filter((l) => l.topic === key).length;
          if (!count) return null;
          return (
            <FilterBtn key={key} value={key}>
              {label} ({count})
            </FilterBtn>
          );
        })}
      </div>

      {/* Danh sách bài học */}
      <div className="bg-white rounded-[18px] border-2 border-[#ECF1E6] overflow-hidden">
        {filtered.map((l, i) => {
          const status = statusOf(l.id);
          const cat = CATEGORIES[l.category];
          const lvl = LEVELS[l.level];
          return (
            <div
              key={l.id}
              className={`flex items-center gap-3 p-4 ${i > 0 ? "border-t border-[#F1F5EC]" : ""} ${status === "hidden" ? "opacity-50" : ""}`}
            >
              <div className="text-2xl shrink-0">{l.icon}</div>
              <div className="min-w-0 flex-1">
                <div style={{ font: "700 15px 'Nunito'" }} className="text-[#15392A] truncate">{l.title}</div>
                <div className="text-xs flex items-center gap-2 flex-wrap mt-0.5">
                  {TOPICS[l.topic] && (
                    <span style={{ font: "700 11px 'Nunito'" }} className="px-2 py-0.5 rounded-full bg-[#EAFBF1] text-[#0E7A4E]">
                      {TOPICS[l.topic]}
                    </span>
                  )}
                  {lvl && (
                    <span style={{ font: "700 11px 'Nunito'" }} className="px-2 py-0.5 rounded-full bg-[#F1E9FF] text-[#7C4DEC]">
                      {lvl.emoji} {lvl.label}
                    </span>
                  )}
                  {cat && (
                    <span style={{ font: "700 11px 'Nunito'" }} className={`px-2 py-0.5 rounded-full ${cat.color}`}>
                      {cat.emoji} {cat.label}
                    </span>
                  )}
                  <span style={{ font: "600 11px 'Nunito'" }} className="text-[#9AA89E]">{l.questions.length} câu · ⭐ {l.xp} XP</span>
                </div>
              </div>
              <span
                style={{ font: "700 11px 'Nunito'" }}
                className={`px-2 py-1 rounded-full shrink-0 ${status === "hidden" ? "bg-[#F4F8EF] text-[#9AA89E]" : "bg-[#EAFBF1] text-[#0E9E5C]"}`}
              >
                {status === "hidden" ? "Đã ẩn" : "Hiển thị"}
              </span>
              <Link href={`/admin/content/${l.id}`} style={baloo(13)} className="px-3 py-1.5 rounded-xl bg-[#EAF1FF] text-[#3457B2] shrink-0">Sửa</Link>
              <button onClick={() => toggle(l.id)} style={baloo(13)} className="px-3 py-1.5 rounded-xl bg-[#FFF3DC] text-[#C25E18] shrink-0">
                {status === "hidden" ? "Hiện" : "Ẩn"}
              </button>
            </div>
          );
        })}
      </div>

      {!useFirestore() && (
        <p style={{ font: "600 12px 'Nunito'" }} className="text-[#9AA89E] mt-4">
          * Trạng thái duyệt/ẩn đang lưu tạm trên trình duyệt. Cấu hình Firebase để lưu vĩnh viễn cho mọi quản trị viên.
        </p>
      )}
    </div>
  );
}
