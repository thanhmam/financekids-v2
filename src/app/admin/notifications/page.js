"use client";

import { useEffect, useState } from "react";
import {
  sendNotification,
  listNotifications,
  listUsers,
  useFirestore,
} from "@/lib/admin";
import { LEVELS } from "@/data/lessons";

const baloo = (size) => ({ font: `800 ${size}px 'Baloo 2'` });
const LEVEL_OPTIONS = Object.entries(LEVELS).map(([value, v]) => ({ value, label: `${v.emoji} ${v.label}` }));

function targetLabel(t, users) {
  if (!t) return "—";
  if (t.type === "all") return "🌍 Tất cả người dùng";
  if (t.type === "level") return `🎯 ${LEVELS[t.value]?.label || t.value}`;
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
    (targetType !== "level" || targetValue);

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
      <h1 style={baloo(26)} className="text-[#15392A] mb-1">🔔 Thông báo</h1>
      <p style={{ font: "600 14px 'Nunito'" }} className="text-[#9AA89E] mb-6">
        Gửi thông báo tới một người, tất cả, hoặc theo cấp độ.
      </p>

      <div className="bg-white rounded-[18px] border-2 border-[#ECF1E6] p-5 space-y-4">
        <div>
          <label style={baloo(13)} className="block text-[#15392A] mb-2">
            Gửi tới
          </label>
          <div className="flex gap-2 flex-wrap">
            {[
              { v: "all", l: "🌍 Tất cả" },
              { v: "level", l: "🎯 Theo cấp độ" },
              { v: "user", l: "👤 Một người" },
            ].map((o) => {
              const active = targetType === o.v;
              return (
                <button
                  key={o.v}
                  onClick={() => {
                    setTargetType(o.v);
                    setTargetValue("");
                  }}
                  className="px-4 py-2 rounded-full text-sm"
                  style={{
                    font: "800 13px 'Baloo 2'",
                    background: active ? "#16C172" : "#F4F8EF",
                    color: active ? "#fff" : "#5B7065",
                    boxShadow: active ? "0 3px 0 #0E9E5C" : "none",
                  }}
                >
                  {o.l}
                </button>
              );
            })}
          </div>

          {targetType === "level" && (
            <select
              value={targetValue}
              onChange={(e) => setTargetValue(e.target.value)}
              className="mt-3 w-full px-4 py-2.5 rounded-[14px] border-2 border-[#ECF1E6] outline-none focus:border-[#16C172]"
            >
              <option value="">— Chọn cấp độ —</option>
              {LEVEL_OPTIONS.map((a) => (
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
              className="mt-3 w-full px-4 py-2.5 rounded-[14px] border-2 border-[#ECF1E6] outline-none focus:border-[#16C172]"
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
          <label style={baloo(13)} className="block text-[#15392A] mb-2">
            Tiêu đề
          </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="VD: Bài học mới đã sẵn sàng!"
            className="w-full px-4 py-3 rounded-[14px] border-2 border-[#ECF1E6] focus:border-[#16C172] outline-none"
          />
        </div>

        <div>
          <label style={baloo(13)} className="block text-[#15392A] mb-2">
            Nội dung
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={3}
            placeholder="Nội dung thông báo…"
            className="w-full px-4 py-3 rounded-[14px] border-2 border-[#ECF1E6] focus:border-[#16C172] outline-none resize-none"
          />
        </div>

        <button
          onClick={send}
          disabled={!canSend}
          style={baloo(17)}
          className="w-full py-4 rounded-[16px] text-white bg-[#16C172] shadow-[0_5px_0_#0E9E5C] disabled:bg-gray-300 disabled:shadow-none active:translate-y-[3px] active:shadow-none transition-all"
        >
          {sent ? "✓ Đã gửi" : "Gửi thông báo ▶"}
        </button>
      </div>

      {/* Lịch sử */}
      <h2 style={baloo(16)} className="text-[#15392A] mt-8 mb-3">Lịch sử thông báo</h2>
      {history.length === 0 ? (
        <p style={{ font: "600 14px 'Nunito'" }} className="text-[#9AA89E]">Chưa gửi thông báo nào.</p>
      ) : (
        <div className="space-y-2">
          {history.map((n) => (
            <div key={n.id} className="bg-white rounded-[18px] border-2 border-[#ECF1E6] p-4">
              <div className="flex items-center justify-between gap-2">
                <span style={{ font: "700 15px 'Nunito'" }} className="text-[#15392A]">{n.title}</span>
                <span style={{ font: "600 12px 'Nunito'" }} className="text-[#9AA89E] shrink-0">
                  {targetLabel(n.target, users)}
                </span>
              </div>
              <p style={{ font: "600 14px 'Nunito'" }} className="text-[#5B7065] mt-1">{n.message}</p>
            </div>
          ))}
        </div>
      )}

      {!useFirestore() && (
        <p style={{ font: "600 12px 'Nunito'" }} className="text-[#9AA89E] mt-4">
          * Chế độ demo: thông báo lưu tạm trên trình duyệt, chưa thực sự gửi tới
          thiết bị người dùng. Cần Firebase (+ Cloud Messaging) để gửi thật.
        </p>
      )}
    </div>
  );
}
