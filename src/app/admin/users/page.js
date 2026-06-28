"use client";

import { useEffect, useState } from "react";
import { listUsers, useFirestore } from "@/lib/admin";
import { BADGES } from "@/lib/badges";

function fmtDate(ts) {
  if (!ts) return "—";
  const d = ts.seconds ? new Date(ts.seconds * 1000) : new Date(ts);
  return isNaN(d) ? "—" : d.toLocaleDateString("vi-VN");
}

export default function AdminUsersPage() {
  const [users, setUsers] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [q, setQ] = useState("");

  useEffect(() => {
    (async () => {
      setUsers(await listUsers());
      setLoaded(true);
    })();
  }, []);

  const filtered = users.filter((u) =>
    (u.displayName || "").toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div className="max-w-5xl">
      <h1 style={{ font: "800 26px 'Baloo 2'" }} className="text-[#15392A] mb-1">👥 Người dùng</h1>
      <p style={{ font: "600 14px 'Nunito'" }} className="text-[#9AA89E] mb-6">
        Tên, cách đăng nhập, hoạt động và thành tích của người dùng.
      </p>

      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="🔍 Tìm theo tên…"
        className="w-full max-w-sm mb-4 px-4 py-2.5 rounded-[14px] border-2 border-[#ECF1E6] focus:border-[#16C172] outline-none text-sm"
      />

      {!loaded ? (
        <p className="text-gray-400 text-sm">Đang tải…</p>
      ) : filtered.length === 0 ? (
        <div className="bg-white rounded-3xl shadow-sm p-8 text-center">
          <div className="text-4xl mb-2">🫥</div>
          <p className="font-bold text-gray-600">Chưa có người dùng nào</p>
          {!useFirestore() && (
            <p className="text-sm text-gray-400 mt-1">
              Cấu hình Firebase trên Vercel để bật đăng nhập và đồng bộ người dùng.
            </p>
          )}
        </div>
      ) : (
        <div className="bg-white rounded-3xl shadow-sm overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-400 border-b border-gray-100">
                <th className="p-4 font-bold">Người dùng</th>
                <th className="p-4 font-bold">Đăng nhập</th>
                <th className="p-4 font-bold">Streak</th>
                <th className="p-4 font-bold">XP</th>
                <th className="p-4 font-bold">Đã học</th>
                <th className="p-4 font-bold">Huy hiệu</th>
                <th className="p-4 font-bold">Hoạt động cuối</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((u) => (
                <tr key={u.id} className="border-b border-gray-50">
                  <td className="p-4 font-bold text-gray-800">
                    <span className="mr-1">{u.avatar || "🙂"}</span>
                    {u.displayName || "Bạn nhỏ"}
                  </td>
                  <td className="p-4 text-gray-500">
                    {u.isAnonymous ? "Ẩn danh" : "Google"}
                  </td>
                  <td className="p-4 text-gray-500">🔥 {u.streak || 0}</td>
                  <td className="p-4 font-black text-[#0E9E5C]">
                    {u.totalXP || 0}
                  </td>
                  <td className="p-4 text-gray-600">
                    {(u.completedLessons || []).length} bài
                  </td>
                  <td className="p-4">
                    {(u.badges || []).length > 0
                      ? (u.badges || [])
                          .map((b) => BADGES.find((x) => x.id === b)?.emoji || "🏅")
                          .join(" ")
                      : "—"}
                  </td>
                  <td className="p-4 text-gray-400">{fmtDate(u.lastActiveAt)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
