"use client";

import { useEffect, useState } from "react";
import {
  sendNotification,
  listNotifications,
  listUsers,
  useFirestore,
} from "@/lib/admin";

const AGE_OPTIONS = [
  { value: "6-8", label: "6-8 tuổi" },
  { value: "9-12", label: "9-12 tuổi" },
  { value: "13-16", label: "13-16 tuổi" },
];

function targetLabel(t, users) {
  if (!t) return "—";
  if (t.type === "all") return "🌍 Tất cả người dùng";
  if (t.type === "ageGroup") return `🎯 Nhóm ${t.value}`;
  if (t.type === "user") {
    const u = users.find((x) => x.id === t.value);
    return `👤 ${u?.displayName || t.value}`;
  }
  return "—";
}

export default function AdminNotificationsPage() {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [targetType, setTargetType] = useState("all");
  const [targetValue, setTargetValue] = useState("");
  const [users, setUsers] = useState([]);
  const [history, setHistory] = useState([]);
  const [sent, setSent] = useState(false);

  const refresh = async () => setHistory(await listNotifications());
  useEffect(() => {
    (async () => {
      setUsers(await listUsers());
      await refresh();
    })();
  }, []);

  const canSend =
    title.trim() &&
    message.trim() &&
    (targetType !== "user" || targetValue) &&
    (targetType !== "ageGroup" || targetValue);

  const send = async () => {
    if (!canSend) return;
    const target =
      targetType === "all"
        ? { type: "all" }
        : { type: targetType, value: targetValue };
    await sendNotification({ title: title.trim(), message: message.trim(), target });
    setSent(true);
    setTitle("");
    setMessage("");
    await refresh();
    setTimeout(() => setSent(false), 2000);
  };

  return (
    <div className="max-w-3xl">
      <h1 className="text-2xl font-black text-gray-800 mb-1">🔔 Thông báo</h1>
      <p className="text-sm text-gray-500 mb-6">
        Gửi thông báo tới một người, tất cả, hoặc theo nhóm tuổi.
      </p>

      <div className="bg-white rounded-3xl shadow-sm p-5 space-y-4">
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">
            Gửi tới
          </label>
          <div className="flex gap-2 flex-wrap">
            {[
              { v: "all", l: "🌍 Tất cả" },
              { v: "ageGroup", l: "🎯 Theo nhóm tuổi" },
              { v: "user", l: "👤 Một người" },
            ].map((o) => (
              <button
                key={o.v}
                onClick={() => {
                  setTargetType(o.v);
                  setTargetValue("");
                }}
                className={`px-4 py-2 rounded-full font-bold text-sm ${
                  targetType === o.v
                    ? "bg-orange-500 text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {o.l}
              </button>
            ))}
          </div>

          {targetType === "ageGroup" && (
            <select
              value={targetValue}
              onChange={(e) => setTargetValue(e.target.value)}
              className="mt-3 w-full px-4 py-2.5 rounded-2xl border border-gray-200 outline-none"
            >
              <option value="">— Chọn nhóm tuổi —</option>
              {AGE_OPTIONS.map((a) => (
                <option key={a.value} value={a.value}>
                  {a.label}
                </option>
              ))}
            </select>
          )}

          {targetType === "user" && (
            <select
              value={targetValue}
              onChange={(e) => setTargetValue(e.target.value)}
              className="mt-3 w-full px-4 py-2.5 rounded-2xl border border-gray-200 outline-none"
            >
              <option value="">
                {users.length ? "— Chọn người dùng —" : "Chưa có người dùng"}
              </option>
              {users.map((u) => (
                <option key={u.id} value={u.id}>
                  {u.displayName || u.id}
                </option>
              ))}
            </select>
          )}
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">
            Tiêu đề
          </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="VD: Bài học mới đã sẵn sàng!"
            className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-orange-400 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">
            Nội dung
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={3}
            placeholder="Nội dung thông báo…"
            className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-orange-400 outline-none resize-none"
          />
        </div>

        <button
          onClick={send}
          disabled={!canSend}
          className="w-full py-4 rounded-2xl font-black text-white text-lg bg-orange-500 disabled:bg-gray-300 active:scale-95 transition-transform"
        >
          {sent ? "✓ Đã gửi" : "Gửi thông báo ▶"}
        </button>
      </div>

      {/* Lịch sử */}
      <h2 className="font-black text-gray-800 mt-8 mb-3">Lịch sử thông báo</h2>
      {history.length === 0 ? (
        <p className="text-sm text-gray-400">Chưa gửi thông báo nào.</p>
      ) : (
        <div className="space-y-2">
          {history.map((n) => (
            <div key={n.id} className="bg-white rounded-2xl shadow-sm p-4">
              <div className="flex items-center justify-between gap-2">
                <span className="font-bold text-gray-800">{n.title}</span>
                <span className="text-xs text-gray-400 shrink-0">
                  {targetLabel(n.target, users)}
                </span>
              </div>
              <p className="text-sm text-gray-500 mt-1">{n.message}</p>
            </div>
          ))}
        </div>
      )}

      {!useFirestore() && (
        <p className="text-xs text-gray-400 mt-4">
          * Chế độ demo: thông báo lưu tạm trên trình duyệt, chưa thực sự gửi tới
          thiết bị người dùng. Cần Firebase (+ Cloud Messaging) để gửi thật.
        </p>
      )}
    </div>
  );
}
