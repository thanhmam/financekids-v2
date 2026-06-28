"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LESSONS, TOPICS, LEVELS, CATEGORIES } from "@/data/lessons";
import { listUsers, listDraftLessons, useFirestore } from "@/lib/admin";

const baloo = (size) => ({ font: `800 ${size}px 'Baloo 2'` });

function StatCard({ emoji, label, value, href }) {
  const inner = (
    <div className="bg-white rounded-[18px] border-2 border-[#ECF1E6] p-5 hover:shadow-[0_8px_24px_rgba(21,57,42,.10)] transition-shadow h-full">
      <div className="text-3xl mb-2">{emoji}</div>
      <div style={baloo(26)} className="text-[#15392A]">{value}</div>
      <div style={{ font: "700 13px 'Nunito'" }} className="text-[#9AA89E]">{label}</div>
    </div>
  );
  return href ? <Link href={href}>{inner}</Link> : inner;
}

function BreakdownCard({ title, rows }) {
  return (
    <div className="bg-white rounded-[18px] border-2 border-[#ECF1E6] p-5">
      <h2 style={baloo(16)} className="text-[#15392A] mb-3">{title}</h2>
      <div className="space-y-2.5">
        {rows.map((r) => (
          <div key={r.key} className="flex items-center gap-3">
            <span style={{ font: "700 13px 'Nunito'" }} className="text-[#5B7065] flex-1">
              {r.emoji} {r.label}
            </span>
            <div className="w-28 h-2.5 rounded-full bg-[#ECF1E6] overflow-hidden">
              <div className="h-full bg-[#16C172]" style={{ width: `${r.pct}%` }} />
            </div>
            <span style={baloo(14)} className="text-[#15392A] w-10 text-right">{r.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
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

  const total = LESSONS.length;
  const byLevel = Object.entries(LEVELS).map(([key, v]) => {
    const count = LESSONS.filter((l) => l.level === key).length;
    return { key, emoji: v.emoji, label: v.label, count, pct: total ? (count / total) * 100 : 0 };
  });
  const byTopic = Object.entries(TOPICS).map(([key, label]) => {
    const count = LESSONS.filter((l) => l.topic === key).length;
    return { key, emoji: "📁", label, count, pct: total ? (count / total) * 100 : 0 };
  });
  const byCategory = Object.entries(CATEGORIES).map(([key, cat]) => {
    const count = LESSONS.filter((l) => l.category === key).length;
    return { key, emoji: cat.emoji, label: cat.label, count, pct: total ? (count / total) * 100 : 0 };
  });

  return (
    <div className="max-w-5xl">
      <h1 style={baloo(26)} className="text-[#15392A] mb-1">📊 Tổng quan</h1>
      <p style={{ font: "600 14px 'Nunito'" }} className="text-[#9AA89E] mb-6">
        Bảng điều khiển quản trị XuXu
      </p>

      {!useFirestore() && (
        <div className="mb-6 bg-amber-50 border-2 border-amber-200 rounded-[18px] p-4 text-sm text-amber-800">
          ⚠️ <b>Chế độ demo</b> — Firebase chưa được cấu hình. Dữ liệu người dùng
          trống và các thay đổi lưu tạm trên trình duyệt (localStorage). Thêm biến
          môi trường Firebase trên Vercel để bật đầy đủ.
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <StatCard emoji="📚" label="Bài học" value={total} href="/admin/content" />
        <StatCard emoji="🤖" label="Bản nháp chờ duyệt" value={loaded ? drafts.length : "…"} href="/admin/content" />
        <StatCard emoji="👥" label="Người dùng" value={loaded ? users.length : "…"} href="/admin/users" />
        <StatCard emoji="📁" label="Chủ đề" value={Object.keys(TOPICS).length} href="/admin/content" />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <BreakdownCard title="Bài học theo cấp độ" rows={byLevel} />
        <BreakdownCard title="Bài học theo loại" rows={byCategory} />
      </div>

      <div className="mt-4">
        <BreakdownCard title="Bài học theo chủ đề" rows={byTopic} />
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link href="/admin/ai" style={baloo(14)} className="px-5 py-3 rounded-[14px] text-white bg-[#16C172] shadow-[0_4px_0_#0E9E5C] active:translate-y-[3px] active:shadow-none transition-all">
          🤖 Tạo bài học bằng AI
        </Link>
        <Link href="/admin/books" style={baloo(14)} className="px-5 py-3 rounded-[14px] text-[#15392A] bg-white border-2 border-[#ECF1E6] active:scale-95 transition-transform">
          🛒 Quản lý cửa hàng sách
        </Link>
        <Link href="/admin/notifications" style={baloo(14)} className="px-5 py-3 rounded-[14px] text-[#15392A] bg-white border-2 border-[#ECF1E6] active:scale-95 transition-transform">
          🔔 Gửi thông báo
        </Link>
      </div>
    </div>
  );
}
