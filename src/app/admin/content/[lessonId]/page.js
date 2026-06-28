"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { getLessonById, CATEGORIES, TOPICS, LEVELS } from "@/data/lessons";
import {
  getQuestionOverrides,
  getLessonMeta,
  saveQuestionOverride,
  saveLessonMeta,
  applyLessonOverrides,
  useFirestore,
} from "@/lib/admin";

const inputCls =
  "w-full px-3 py-2 rounded-xl border border-gray-200 focus:border-[#16C172] outline-none text-sm";

export default function LessonEditorPage() {
  const params = useParams();
  const router = useRouter();
  const base = getLessonById(params.lessonId);

  const [lesson, setLesson] = useState(null);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (!base) return;
    (async () => {
      const [qo, lm] = [await getQuestionOverrides(), await getLessonMeta()];
      setLesson(JSON.parse(JSON.stringify(applyLessonOverrides(base, qo, lm))));
    })();
  }, [params.lessonId]);

  if (!base) return <p className="text-gray-500">Không tìm thấy bài học.</p>;
  if (!lesson) return <p className="text-gray-400">Đang tải…</p>;

  const setMeta = (k, v) => setLesson((l) => ({ ...l, [k]: v }));
  const setQ = (qi, patch) =>
    setLesson((l) => {
      const qs = [...l.questions];
      qs[qi] = { ...qs[qi], ...patch };
      return { ...l, questions: qs };
    });

  const saveAll = async () => {
    await saveLessonMeta(lesson.id, {
      title: lesson.title,
      category: lesson.category,
      level: lesson.level || null,
      topic: lesson.topic || null,
    });
    for (const q of lesson.questions) {
      const patch = {
        question: q.question,
        explanation: q.explanation,
        marketingHook: q.marketingHook || "",
        skills: q.skills || [],
        bookRefs: q.bookRefs || [],
      };
      if (q.type === "quiz") {
        patch.options = q.options;
        patch.correct = q.correct;
      } else if (q.type === "ab") {
        patch.optionA = q.optionA;
        patch.optionB = q.optionB;
        patch.bestChoice = q.bestChoice;
      } else if (q.type === "transaction") {
        patch.scenario = q.scenario;
        patch.correctAnswer = q.correctAnswer;
      }
      await saveQuestionOverride(lesson.id, q.id, patch);
    }
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="max-w-3xl">
      <button
        onClick={() => router.push("/admin/content")}
        className="text-sm font-bold text-gray-400 hover:text-[#16C172] mb-3"
      >
        ← Danh sách bài học
      </button>
      <h1 className="text-xl font-black text-gray-800 mb-1">
        ✏️ Sửa: {lesson.icon} {lesson.title}
      </h1>
      <p className="text-sm text-gray-500 mb-5">
        Chỉnh sửa câu hỏi, đáp án, phân loại và thẻ. Lưu sẽ áp dụng ngay trên app.
      </p>

      {/* Meta bài học */}
      <div className="bg-white rounded-2xl shadow-sm p-4 mb-5 space-y-3">
        <div>
          <label className="text-xs font-bold text-gray-500">Tiêu đề</label>
          <input
            className={inputCls}
            value={lesson.title}
            onChange={(e) => setMeta("title", e.target.value)}
          />
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div>
            <label className="text-xs font-bold text-gray-500">Phân loại</label>
            <select
              className={inputCls}
              value={lesson.category || ""}
              onChange={(e) => setMeta("category", e.target.value)}
            >
              {Object.entries(CATEGORIES).map(([k, v]) => (
                <option key={k} value={k}>
                  {v.emoji} {v.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-xs font-bold text-gray-500">Cấp độ</label>
            <select
              className={inputCls}
              value={lesson.level || ""}
              onChange={(e) => setMeta("level", e.target.value || null)}
            >
              <option value="">—</option>
              {Object.entries(LEVELS || {}).map(([k, v]) => (
                <option key={k} value={k}>
                  {v.emoji} {v.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-xs font-bold text-gray-500">Chủ đề</label>
            <select
              className={inputCls}
              value={lesson.topic || ""}
              onChange={(e) => setMeta("topic", e.target.value || null)}
            >
              <option value="">—</option>
              {Object.entries(TOPICS || {}).map(([k, v]) => (
                <option key={k} value={k}>
                  {v}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Câu hỏi */}
      {lesson.questions.map((q, qi) => (
        <div key={q.id} className="bg-white rounded-2xl shadow-sm p-4 mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-black text-[#0E9E5C]">
              Câu {qi + 1} · {q.type}
            </span>
          </div>

          <label className="text-xs font-bold text-gray-500">Câu hỏi</label>
          <textarea
            className={inputCls}
            rows={2}
            value={q.question || ""}
            onChange={(e) => setQ(qi, { question: e.target.value })}
          />

          {q.type === "quiz" && (
            <div className="mt-2 space-y-1.5">
              <label className="text-xs font-bold text-gray-500">
                Đáp án (chọn nút radio = đáp án đúng)
              </label>
              {(q.options || []).map((opt, oi) => (
                <div key={oi} className="flex items-center gap-2">
                  <input
                    type="radio"
                    checked={q.correct === oi}
                    onChange={() => setQ(qi, { correct: oi })}
                  />
                  <input
                    className={inputCls}
                    value={opt.text}
                    onChange={(e) => {
                      const options = q.options.map((o, i) =>
                        i === oi ? { ...o, text: e.target.value } : o
                      );
                      setQ(qi, { options });
                    }}
                  />
                </div>
              ))}
            </div>
          )}

          {q.type === "ab" && (
            <div className="mt-2 grid grid-cols-2 gap-3">
              {["optionA", "optionB"].map((key) => (
                <div key={key} className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-500 flex items-center gap-2">
                    <input
                      type="radio"
                      checked={q.bestChoice === (key === "optionA" ? "A" : "B")}
                      onChange={() =>
                        setQ(qi, { bestChoice: key === "optionA" ? "A" : "B" })
                      }
                    />
                    {key === "optionA" ? "Lựa chọn A" : "Lựa chọn B"} (radio = nên chọn)
                  </label>
                  <input
                    className={inputCls}
                    placeholder="Tiêu đề"
                    value={q[key]?.title || ""}
                    onChange={(e) =>
                      setQ(qi, { [key]: { ...q[key], title: e.target.value } })
                    }
                  />
                  <input
                    className={inputCls}
                    placeholder="Mô tả"
                    value={q[key]?.description || ""}
                    onChange={(e) =>
                      setQ(qi, {
                        [key]: { ...q[key], description: e.target.value },
                      })
                    }
                  />
                </div>
              ))}
            </div>
          )}

          {q.type === "transaction" && (
            <div className="mt-2 space-y-1.5">
              <label className="text-xs font-bold text-gray-500">Tình huống</label>
              <textarea
                className={inputCls}
                rows={2}
                value={q.scenario || ""}
                onChange={(e) => setQ(qi, { scenario: e.target.value })}
              />
              <label className="text-xs font-bold text-gray-500">
                Đáp án đúng (số dư)
              </label>
              <input
                type="number"
                className={inputCls}
                value={q.correctAnswer ?? 0}
                onChange={(e) =>
                  setQ(qi, { correctAnswer: Number(e.target.value) })
                }
              />
            </div>
          )}

          <label className="text-xs font-bold text-gray-500 block mt-2">
            Giải thích
          </label>
          <textarea
            className={inputCls}
            rows={2}
            value={q.explanation || ""}
            onChange={(e) => setQ(qi, { explanation: e.target.value })}
          />

          <label className="text-xs font-bold text-gray-500 block mt-2">
            Bạn có biết? (marketing hook)
          </label>
          <input
            className={inputCls}
            value={q.marketingHook || ""}
            onChange={(e) => setQ(qi, { marketingHook: e.target.value })}
          />

          <div className="grid grid-cols-2 gap-3 mt-2">
            <div>
              <label className="text-xs font-bold text-gray-500">
                Kỹ năng (cách nhau dấu phẩy)
              </label>
              <input
                className={inputCls}
                value={(q.skills || []).join(", ")}
                onChange={(e) =>
                  setQ(qi, {
                    skills: e.target.value
                      .split(",")
                      .map((s) => s.trim())
                      .filter(Boolean),
                  })
                }
              />
            </div>
            <div>
              <label className="text-xs font-bold text-gray-500">
                Sách liên quan (bookRefs)
              </label>
              <input
                className={inputCls}
                value={(q.bookRefs || []).join(", ")}
                onChange={(e) =>
                  setQ(qi, {
                    bookRefs: e.target.value
                      .split(",")
                      .map((s) => s.trim())
                      .filter(Boolean),
                  })
                }
              />
            </div>
          </div>
        </div>
      ))}

      {/* Save bar */}
      <div className="sticky bottom-0 bg-[#FFF9F0] py-3">
        <button
          onClick={saveAll}
          className="w-full py-3 rounded-2xl font-black text-white bg-[#16C172] shadow-[0_4px_0_#0E9E5C] active:translate-y-[3px] active:shadow-none transition-all"
        >
          {saved ? "✓ Đã lưu — áp dụng trên app" : "Lưu tất cả thay đổi"}
        </button>
        {!useFirestore() && (
          <p className="text-xs text-gray-400 mt-2 text-center">
            * Demo: lưu trên trình duyệt này. Cấu hình Firebase để áp dụng cho mọi
            người dùng.
          </p>
        )}
      </div>
    </div>
  );
}
