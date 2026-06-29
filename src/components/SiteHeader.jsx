"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

/* Header công khai dùng chung cho các trang phụ (Hành trình, Nhật ký cập nhật).
   Logo → về trang chủ; nút BẮT ĐẦU → vào app. */
export default function SiteHeader() {
  const router = useRouter();
  return (
    <div style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(255,255,255,.88)", backdropFilter: "blur(10px)", borderBottom: "1px solid #EEF3E9" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", height: 64, padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <div style={{ position: "relative", width: 36, height: 36, borderRadius: "50%", background: "radial-gradient(circle at 38% 32%,#FFE594,#FFC93C 58%,#F2B01E)", border: "3px solid #E8A317", boxShadow: "0 3px 0 #C98A12", flexShrink: 0 }}>
            <div style={{ position: "absolute", top: 13, left: 9, width: 5, height: 7, background: "#3A2A00", borderRadius: "50%" }} />
            <div style={{ position: "absolute", top: 13, right: 9, width: 5, height: 7, background: "#3A2A00", borderRadius: "50%" }} />
            <div style={{ position: "absolute", top: 22, left: "50%", transform: "translateX(-50%)", width: 12, height: 6, border: "2.5px solid #3A2A00", borderTop: "none", borderRadius: "0 0 14px 14px" }} />
          </div>
          <span style={{ font: "800 23px 'Baloo 2'", color: "#16C172", letterSpacing: "-.5px" }}>XuXu</span>
        </Link>
        <button className="btn-press" onClick={() => router.push("/learn")} style={{ background: "#16C172", color: "#fff", border: "none", borderRadius: 13, boxShadow: "0 4px 0 #0E9E5C", padding: "11px 20px", font: "800 13px 'Baloo 2'", letterSpacing: ".4px", cursor: "pointer" }}>BẮT ĐẦU</button>
      </div>
    </div>
  );
}
