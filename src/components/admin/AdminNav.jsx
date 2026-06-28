"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/admin", label: "Tổng quan", emoji: "📊", exact: true },
  { href: "/admin/content", label: "Nội dung bài học", emoji: "📚" },
  { href: "/admin/ai", label: "AI tạo bài học", emoji: "🤖" },
  { href: "/admin/books", label: "Cửa hàng sách", emoji: "🛒" },
  { href: "/admin/users", label: "Người dùng", emoji: "👥" },
  { href: "/admin/mechanics", label: "Cơ chế điểm thưởng", emoji: "🎯" },
  { href: "/admin/notifications", label: "Thông báo", emoji: "🔔" },
];

// Logo coin XuXu (CSS, đồng bộ design system)
function XuLogo() {
  return (
    <span style={{ position: "relative", display: "inline-block", width: 30, height: 30, borderRadius: "50%", background: "radial-gradient(circle at 38% 32%,#FFE594,#FFC93C 58%,#F2B01E)", border: "2.5px solid #E8A317", boxShadow: "0 2px 0 #C98A12", flexShrink: 0 }}>
      <span style={{ position: "absolute", top: 11, left: 8, width: 4, height: 6, background: "#3A2A00", borderRadius: "50%" }} />
      <span style={{ position: "absolute", top: 11, right: 8, width: 4, height: 6, background: "#3A2A00", borderRadius: "50%" }} />
      <span style={{ position: "absolute", top: 18, left: "50%", transform: "translateX(-50%)", width: 9, height: 5, border: "2px solid #3A2A00", borderTop: "none", borderRadius: "0 0 12px 12px" }} />
    </span>
  );
}

export default function AdminNav() {
  const pathname = usePathname();
  const isActive = (item) =>
    item.exact ? pathname === item.href : pathname.startsWith(item.href);

  return (
    <aside className="w-full md:w-60 md:min-h-screen bg-white border-r-2 border-[#ECF1E6] md:fixed md:left-0 md:top-0 z-10">
      <div className="px-5 py-5 border-b-2 border-[#ECF1E6]">
        <Link href="/" className="flex items-center gap-2.5">
          <XuLogo />
          <span style={{ font: "800 22px 'Baloo 2'", color: "#16C172", letterSpacing: "-.5px" }}>XuXu</span>
        </Link>
        <p className="mt-1.5" style={{ font: "700 11px 'Nunito'", color: "#9AA89E" }}>Bảng quản trị</p>
      </div>
      <nav className="p-3 flex md:flex-col gap-1 overflow-x-auto">
        {NAV.map((item) => {
          const active = isActive(item);
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-4 py-2.5 rounded-[14px] whitespace-nowrap transition-colors"
              style={{
                font: "800 14px 'Baloo 2'",
                background: active ? "#EAFBF1" : "transparent",
                border: active ? "2px solid #BFEBD2" : "2px solid transparent",
                color: active ? "#0E9E5C" : "#5B7065",
              }}
            >
              <span className="text-lg">{item.emoji}</span>
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="hidden md:block px-5 py-4 mt-auto">
        <Link href="/" style={{ font: "700 12px 'Nunito'", color: "#9AA89E" }} className="hover:text-[#16C172]">
          ← Về ứng dụng
        </Link>
      </div>
    </aside>
  );
}
