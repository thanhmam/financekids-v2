"use client";

import { useState } from "react";
import { saveDraftLesson } from "@/lib/admin";
import { TOPICS, LEVELS } from "@/data/lessons";

const baloo = (size) => ({ font: `800 ${size}px 'Baloo 2'` });

export default function AdminAiPage() {
  const [level, setLevel] = useState("foundation");
  const [topicKey, setTopicKey] = useState("money-basics");
  const [detail, setDetail] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);

  const saveDraft = async () => {
    await saveDraftLesson({ ...result, level, topic: topicKey });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const run = async () => {
    if (!detail.trim()) return;
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const audience =
        level === "advanced" ? "Vững vàng (đã có nền tảng tài chính)" : "Khởi đầu (người mới bắt đầu)";
      const res = await fetch("/api/agents/orchestrate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ageGroup: audience,
          topic: `${TOPICS[topicKey]} — ${detail.trim()}`,
        }),
      });
      const data = await res.json();
      if (!res.ok || data.success === false) {
        setError(data.error || JSON.stringify(data.issues || data));
      } else {
        setResult(data.lesson || data);
      }
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const copyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(result, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div>
      <div className="max-w-2xl mx-auto">
        <h1 style={baloo(26)} className="text-[#15392A] mb-1">🤖 AI Pipeline tạo bài học</h1>
        <p style={{ font: "600 14px 'Nunito'" }} className="text-[#9AA89E] mb-6">
          3-agent: Content → Review → Design. Kết quả là JSON theo schema bài học.
        </p>

        <div className="bg-white rounded-[18px] border-2 border-[#ECF1E6] p-5 space-y-4">
          {/* Cấp độ */}
          <div>
            <label style={baloo(13)} className="block text-[#15392A] mb-2">Cấp độ</label>
            <div className="flex gap-2 flex-wrap">
              {Object.entries(LEVELS).map(([key, v]) => {
                const active = level === key;
                return (
                  <button
                    key={key}
                    onClick={() => setLevel(key)}
                    className="px-4 py-2 rounded-full text-sm transition-all"
                    style={{
                      font: "800 13px 'Baloo 2'",
                      background: active ? "#16C172" : "#F4F8EF",
                      color: active ? "#fff" : "#5B7065",
                      boxShadow: active ? "0 3px 0 #0E9E5C" : "none",
                    }}
                  >
                    {v.emoji} {v.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Chủ đề */}
          <div>
            <label style={baloo(13)} className="block text-[#15392A] mb-2">Chủ đề</label>
            <select
              value={topicKey}
              onChange={(e) => setTopicKey(e.target.value)}
              style={{ font: "700 14px 'Nunito'" }}
              className="w-full px-4 py-3 rounded-[14px] border-2 border-[#ECF1E6] text-[#15392A] focus:border-[#16C172] outline-none bg-white"
            >
              {Object.entries(TOPICS).map(([key, label]) => (
                <option key={key} value={key}>{label}</option>
              ))}
            </select>
          </div>

          {/* Nội dung cụ thể */}
          <div>
            <label style={baloo(13)} className="block text-[#15392A] mb-2">Nội dung cụ thể của bài</label>
            <input
              value={detail}
              onChange={(e) => setDetail(e.target.value)}
              placeholder="VD: Tiết kiệm tiền mừng tuổi"
              style={{ font: "700 14px 'Nunito'" }}
              className="w-full px-4 py-3 rounded-[14px] border-2 border-[#ECF1E6] focus:border-[#16C172] outline-none"
            />
          </div>

          <button
            onClick={run}
            disabled={loading || !detail.trim()}
            style={baloo(17)}
            className="w-full py-4 rounded-[16px] text-white bg-[#16C172] shadow-[0_5px_0_#0E9E5C] disabled:bg-gray-300 disabled:shadow-none active:translate-y-[3px] active:shadow-none transition-all"
          >
            {loading ? "Đang chạy pipeline…" : "Chạy 3-Agent Pipeline ▶"}
          </button>
        </div>

        {error && (
          <div className="mt-4 bg-red-50 border-2 border-red-200 rounded-[18px] p-4 text-sm text-red-700 whitespace-pre-wrap">
            ❌ {error}
          </div>
        )}

        {result && (
          <div className="mt-4 bg-white rounded-[18px] border-2 border-[#ECF1E6] p-5">
            <div className="flex items-center justify-between mb-3">
              <span style={baloo(16)} className="text-[#15392A]">{result.icon} {result.title}</span>
              <div className="flex gap-2">
                <button onClick={saveDraft} style={baloo(13)} className="px-3 py-1.5 rounded-xl bg-[#EAFBF1] text-[#0E9E5C]">
                  {saved ? "✓ Đã lưu nháp" : "Lưu vào nháp →"}
                </button>
                <button onClick={copyJson} style={baloo(13)} className="px-3 py-1.5 rounded-xl bg-[#FFF3DC] text-[#C25E18]">
                  {copied ? "✓ Đã copy" : "Copy JSON"}
                </button>
              </div>
            </div>
            <p style={{ font: "600 12px 'Nunito'" }} className="text-[#9AA89E] mb-2">
              Bài lưu nháp sẽ xuất hiện ở mục <b>Nội dung bài học</b> để duyệt.
            </p>
            <pre className="text-xs bg-[#F4F8EF] rounded-[14px] p-4 overflow-auto max-h-96">
              {JSON.stringify(result, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
