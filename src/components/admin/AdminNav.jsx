"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/admin", label: "Tổng quan", emoji: "📊", exact: true },
  { href: "/admin/content", label: "Nội dung bài học", emoji: "📚" },
  { href: "/admin/ai", label: "AI tạo bài học", emoji: "🤖" },
  { href: "/admin/users", label: "Người dùng", emoji: "👥" },
  { href: "/admin/books", label: "Cửa hàng sách", emoji: "📚" },
  { href: "/admin/mechanics", label: "Cơ chế điểm thưởng", emoji: "🎯" },
  { href: "/admin/notifications", label: "Thông báo", emoji: "🔔" },
];

export default function AdminNav() {
  const pathname = usePathname();
  const isActive = (item) =>
    item.exact ? pathname === item.href : pathname.startsWith(item.href);

  return (
    <aside className="w-full md:w-60 md:min-h-screen bg-white border-r border-gray-100 md:fixed md:left-0 md:top-0 z-10">
      <div className="px-5 py-5 border-b border-gray-100">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🐷</span>
          <span className="font-black text-gray-800">FinanceKids</span>
        </Link>
        <p className="text-xs text-gray-400 mt-1 font-bold">Bảng quản trị</p>
      </div>
      <nav className="p-3 flex md:flex-col gap-1 overflow-x-auto">
        {NAV.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 px-4 py-2.5 rounded-xl font-bold text-sm whitespace-nowrap transition-colors ${
              isActive(item)
                ? "bg-orange-500 text-white"
                : "text-gray-600 hover:bg-orange-50"
            }`}
          >
            <span className="text-lg">{item.emoji}</span>
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="hidden md:block px-5 py-4 mt-auto">
        <Link
          href="/"
          className="text-xs font-bold text-gray-400 hover:text-orange-500"
        >
          ← Về ứng dụng
        </Link>
      </div>
    </aside>
  );
}
