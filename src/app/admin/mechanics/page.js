"use client";

import { useEffect, useState } from "react";
import {
  getScoringConfig,
  saveScoringConfig,
  DEFAULT_SCORING,
  useFirestore,
} from "@/lib/admin";

const FIELDS = [
  { key: "xpPerCorrect", label: "XP mỗi câu đúng", suffix: "XP", hint: "Áp dụng khi bài học không tự định nghĩa XP" },
  { key: "perfectBonus", label: "Thưởng khi đúng 100%", suffix: "XP" },
  { key: "streakBonus", label: "Thưởng giữ streak / ngày", suffix: "XP" },
  { key: "star3Threshold", label: "Ngưỡng 3 sao", suffix: "% đúng" },
  { key: "star2Threshold", label: "Ngưỡng 2 sao", suffix: "% đúng" },
  { key: "star1Threshold", label: "Ngưỡng 1 sao", suffix: "% đúng" },
  { key: "dailyGoal", label: "Mục tiêu mỗi ngày", suffix: "bài" },
];

export default function AdminMechanicsPage() {
  const [config, setConfig] = useState(DEFAULT_SCORING);
  const [loaded, setLoaded] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    (async () => {
      setConfig(await getScoringConfig());
      setLoaded(true);
    })();
  }, []);

  const set = (key, val) =>
    setConfig((c) => ({ ...c, [key]: Number(val) || 0 }));

  const save = async () => {
    await saveScoringConfig(config);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const reset = () => setConfig(DEFAULT_SCORING);

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-black text-gray-800 mb-1">
        🎯 Cơ chế điểm thưởng
      </h1>
      <p className="text-sm text-gray-500 mb-6">
        Tinh chỉnh cách tính XP, thưởng và ngưỡng sao cho toàn ứng dụng.
      </p>

      {!loaded ? (
        <p className="text-gray-400 text-sm">Đang tải…</p>
      ) : (
        <div className="bg-white rounded-3xl shadow-sm p-5 space-y-4">
          {FIELDS.map((f) => (
            <div key={f.key} className="flex items-center justify-between gap-4">
              <div>
                <div className="font-bold text-gray-700 text-sm">{f.label}</div>
                {f.hint && (
                  <div className="text-xs text-gray-400">{f.hint}</div>
                )}
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <input
                  type="number"
                  value={config[f.key]}
                  onChange={(e) => set(f.key, e.target.value)}
                  className="w-24 px-3 py-2 rounded-xl border border-gray-200 focus:border-[#16C172] outline-none text-right font-bold"
                />
                <span className="text-xs text-gray-400 w-14">{f.suffix}</span>
              </div>
            </div>
          ))}

          <div className="flex gap-3 pt-2">
            <button
              onClick={save}
              className="flex-1 py-3 rounded-2xl font-black text-white bg-[#16C172] shadow-[0_4px_0_#0E9E5C] active:translate-y-[3px] active:shadow-none transition-all"
            >
              {saved ? "✓ Đã lưu" : "Lưu cấu hình"}
            </button>
            <button
              onClick={reset}
              className="px-5 py-3 rounded-2xl font-black text-gray-600 bg-gray-100"
            >
              Mặc định
            </button>
          </div>
        </div>
      )}

      {!useFirestore() && (
        <p className="text-xs text-gray-400 mt-4">
          * Đang lưu tạm trên trình duyệt. Cấu hình Firebase để áp dụng cho toàn
          hệ thống.
        </p>
      )}
    </div>
  );
}
