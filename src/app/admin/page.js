"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LESSONS, AGE_GROUPS, CATEGORIES } from "@/data/lessons";
import { listUsers, listDraftLessons, useFirestore } from "@/lib/admin";

function StatCard({ emoji, label, value, href }) {
  const inner = (
    <div className="bg-white rounded-3xl shadow-sm p-5 hover:shadow-md transition-shadow">
      <div className="text-3xl mb-2">{emoji}</div>
      <div className="text-2xl font-black text-gray-800">{value}</div>
      <div className="text-sm text-gray-500 font-bold">{label}</div>
    </div>
  );
  return href ? <Link href={href}>{inner}</Link> : inner;
}

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [drafts, setDrafts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      setUsers(await listUsers());
      setDrafts(await listDraftLessons());
      setLoaded(true);
    })();
  }, []);

  const byAge = AGE_GROUPS.filter((g) => g.value !== "all").map((g) => ({
    ...g,
    count: LESSONS.filter((l) => l.ageGroup === g.value).length,
  }));

  return (
    <div className="max-w-5xl">
      <h1 className="text-2xl font-black text-gray-800 mb-1">📊 Tổng quan</h1>
      <p className="text-sm text-gray-500 mb-6">
        Bảng điều khiển quản trị FinanceKids
      </p>

      {!useFirestore() && (
        <div className="mb-6 bg-amber-50 border border-amber-200 rounded-2xl p-4 text-sm text-amber-800">
          ⚠️ <b>Chế độ demo</b> — Firebase chưa được cấu hình. Dữ liệu người dùng
          trống và các thay đổi lưu tạm trên trình duyệt (localStorage). Thêm biến
          môi trường Firebase trên Vercel để bật đầy đủ.
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <StatCard
          emoji="📚"
          label="Bài học"
          value={LESSONS.length}
          href="/admin/content"
        />
        <StatCard
          emoji="🤖"
          label="Bản nháp chờ duyệt"
          value={loaded ? drafts.length : "…"}
          href="/admin/content"
        />
        <StatCard
          emoji="👥"
          label="Người dùng"
          value={loaded ? users.length : "…"}
          href="/admin/users"
        />
        <StatCard
          emoji="🎯"
          label="Nhóm tuổi"
          value={byAge.length}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-white rounded-3xl shadow-sm p-5">
          <h2 className="font-black text-gray-800 mb-3">Bài học theo cấp độ</h2>
          <div className="space-y-2">
            {byAge.map((g) => (
              <div key={g.value} className="flex items-center justify-between">
                <span className="text-sm font-bold text-gray-600">
                  {g.emoji} {g.label}
                </span>
                <span className="text-sm font-black text-gray-800">
                  {g.count} bài
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-sm p-5">
          <h2 className="font-black text-gray-800 mb-3">Bài học theo loại</h2>
          <div className="space-y-2">
            {Object.entries(CATEGORIES).map(([key, cat]) => (
              <div key={key} className="flex items-center justify-between">
                <span className="text-sm font-bold text-gray-600">
                  {cat.emoji} {cat.label}
                </span>
                <span className="text-sm font-black text-gray-800">
                  {LESSONS.filter((l) => l.category === key).length} bài
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href="/admin/ai"
          className="px-5 py-3 rounded-2xl font-black text-white bg-orange-500 active:scale-95 transition-transform"
        >
          🤖 Tạo bài học bằng AI
        </Link>
        <Link
          href="/admin/notifications"
          className="px-5 py-3 rounded-2xl font-black text-gray-700 bg-white shadow-sm active:scale-95 transition-transform"
        >
          🔔 Gửi thông báo
        </Link>
      </div>
    </div>
  );
}
