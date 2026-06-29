"use client";

import Link from "next/link";

/* Logo coin XuXu (CSS) — dùng chung cho footer */
function FooterCoin() {
  return (
    <div style={{ position: "relative", width: 32, height: 32, borderRadius: "50%", background: "radial-gradient(circle at 38% 32%,#FFE594,#FFC93C 58%,#F2B01E)", border: "2.5px solid #E8A317" }}>
      <div style={{ position: "absolute", top: 12, left: 8, width: 4, height: 6, background: "#3A2A00", borderRadius: "50%" }} />
      <div style={{ position: "absolute", top: 12, right: 8, width: 4, height: 6, background: "#3A2A00", borderRadius: "50%" }} />
      <div style={{ position: "absolute", top: 20, left: "50%", transform: "translateX(-50%)", width: 10, height: 5, border: "2px solid #3A2A00", borderTop: "none", borderRadius: "0 0 12px 12px" }} />
    </div>
  );
}

const linkStyle = { font: "700 13px 'Nunito'", color: "rgba(255,255,255,.75)", textDecoration: "none", cursor: "pointer" };
const colTitle = { font: "800 13px 'Nunito'", color: "rgba(255,255,255,.4)", letterSpacing: ".5px", marginBottom: 12 };

export default function SiteFooter() {
  return (
    <div style={{ background: "#0F2A1C", padding: "48px 0 30px" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 28px", display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 32 }}>
        {/* Brand */}
        <div style={{ maxWidth: 280 }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 10, textDecoration: "none" }}>
            <FooterCoin />
            <span style={{ font: "800 20px 'Baloo 2'", color: "#fff" }}>XuXu</span>
          </Link>
          <p style={{ font: "600 13px 'Nunito'", color: "rgba(255,255,255,.5)", lineHeight: 1.6 }}>
            Học tài chính — vui, đơn giản, mỗi ngày. Để bạn không bao giờ "0 xu".
          </p>
        </div>

        {/* Khám phá */}
        <div>
          <div style={colTitle}>KHÁM PHÁ</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
            <Link href="/journey" style={linkStyle}>🌱 Hành trình xây dựng XuXu</Link>
            <Link href="/changelog" style={linkStyle}>📝 Nhật ký cập nhật</Link>
          </div>
        </div>

        {/* Liên hệ */}
        <div>
          <div style={colTitle}>LIÊN HỆ</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
            <span style={{ font: "700 13px 'Nunito'", color: "rgba(255,255,255,.75)" }}>👤 Thành Mắm</span>
            <a href="mailto:i.thanhnt@gmail.com" style={linkStyle}>✉ i.thanhnt@gmail.com</a>
            <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
              <a href="https://tiktok.com/@thanhmam.com" target="_blank" rel="noopener noreferrer" style={{ background: "rgba(255,255,255,.08)", borderRadius: 9, padding: "6px 11px", font: "700 12px 'Nunito'", color: "rgba(255,255,255,.7)", textDecoration: "none" }}>TikTok @thanhmam</a>
              <a href="https://facebook.com/i.thanhmam" target="_blank" rel="noopener noreferrer" style={{ background: "rgba(255,255,255,.08)", borderRadius: 9, padding: "6px 11px", font: "700 12px 'Nunito'", color: "rgba(255,255,255,.7)", textDecoration: "none" }}>Facebook i.thanhmam</a>
            </div>
          </div>
        </div>
      </div>
      <div style={{ textAlign: "center", font: "600 12px 'Nunito'", color: "rgba(255,255,255,.32)", marginTop: 34, borderTop: "1px solid rgba(255,255,255,.08)", paddingTop: 20 }}>
        © {new Date().getFullYear()} XuXu · Made with 💚 by Thành Mắm
      </div>
    </div>
  );
}
