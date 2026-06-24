"use client";

import { useState } from "react";

const AGE_GROUPS = [
  { value: "6-8", label: "6-8 tuổi 🌱" },
  { value: "9-12", label: "9-12 tuổi 🌿" },
  { value: "13-16", label: "13-16 tuổi 🌳" },
];

export default function AdminPage() {
  const [ageGroup, setAgeGroup] = useState("6-8");
  const [topic, setTopic] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);

  const run = async () => {
    if (!topic.trim()) return;
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const res = await fetch("/api/agents/orchestrate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ageGroup, topic: topic.trim() }),
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
    <div className="min-h-screen bg-[#FFF9F0] px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-black text-gray-800 mb-1">🤖 AI Pipeline tạo bài học</h1>
        <p className="text-sm text-gray-500 mb-6">
          3-agent: Content → Review → Design. Kết quả là JSON theo schema bài học.
        </p>

        <div className="bg-white rounded-3xl shadow-sm p-5 space-y-4">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Độ tuổi</label>
            <div className="flex gap-2 flex-wrap">
              {AGE_GROUPS.map((g) => (
                <button
                  key={g.value}
                  onClick={() => setAgeGroup(g.value)}
                  className={`px-4 py-2 rounded-full font-bold text-sm transition-all ${
                    ageGroup === g.value
                      ? "bg-orange-500 text-white"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {g.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Chủ đề bài học</label>
            <input
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="VD: Tiết kiệm tiền mừng tuổi"
              className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-orange-400 outline-none"
            />
          </div>

          <button
            onClick={run}
            disabled={loading || !topic.trim()}
            className="w-full py-4 rounded-2xl font-black text-white text-lg bg-orange-500 disabled:bg-gray-300 active:scale-95 transition-transform"
          >
            {loading ? "Đang chạy pipeline…" : "Chạy 3-Agent Pipeline ▶"}
          </button>
        </div>

        {error && (
          <div className="mt-4 bg-red-50 border border-red-200 rounded-2xl p-4 text-sm text-red-700 whitespace-pre-wrap">
            ❌ {error}
          </div>
        )}

        {result && (
          <div className="mt-4 bg-white rounded-3xl shadow-sm p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="font-black text-gray-800">
                {result.icon} {result.title}
              </span>
              <button
                onClick={copyJson}
                className="text-sm font-bold px-3 py-1.5 rounded-xl bg-orange-50 text-orange-600"
              >
                {copied ? "✓ Đã copy" : "Copy JSON"}
              </button>
            </div>
            <pre className="text-xs bg-gray-50 rounded-2xl p-4 overflow-auto max-h-96">
              {JSON.stringify(result, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
