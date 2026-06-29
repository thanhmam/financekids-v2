"use client";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { RELEASES, TAG_STYLES, formatReleaseDate } from "@/data/changelog";

export default function ChangelogPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#fff", fontFamily: "'Nunito', sans-serif" }}>
      <SiteHeader />

      {/* Hero */}
      <div style={{ background: "linear-gradient(180deg,#F4FBF4 0%,#FFFFFF 100%)", padding: "56px 0 40px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "#E3F7EC", borderRadius: 30, padding: "7px 15px", marginBottom: 18 }}>
            <span style={{ color: "#0E9E5C", font: "800 13px 'Baloo 2'" }}>📝</span>
            <span style={{ font: "800 13px 'Nunito'", color: "#0E9E5C", letterSpacing: ".3px" }}>Change Log</span>
          </div>
          <h1 style={{ font: "800 42px/1.12 'Baloo 2'", color: "#15392A", letterSpacing: -1, marginBottom: 14 }}>
            Nhật ký <span style={{ color: "#16C172" }}>cập nhật</span>
          </h1>
          <p style={{ font: "600 17px/1.6 'Nunito'", color: "#5B7065", maxWidth: 480, margin: "0 auto" }}>
            Những thay đổi quan trọng của XuXu — tính năng mới, cải thiện và sửa lỗi.
          </p>
        </div>
      </div>

      {/* Timeline */}
      <div style={{ maxWidth: 680, margin: "0 auto", padding: "16px 24px 72px" }}>
        <div style={{ position: "relative", paddingLeft: 28 }}>
          {/* đường dọc */}
          <div style={{ position: "absolute", left: 6, top: 8, bottom: 8, width: 2, background: "#ECF1E6" }} />

          {RELEASES.map((r) => {
            const tag = TAG_STYLES[r.tag] || TAG_STYLES["Mới"];
            return (
              <div key={r.version} style={{ position: "relative", marginBottom: 28 }}>
                {/* chấm */}
                <div style={{ position: "absolute", left: -28, top: 6, width: 14, height: 14, borderRadius: "50%", background: "#16C172", border: "3px solid #fff", boxShadow: "0 0 0 2px #16C172" }} />

                <div style={{ background: "#fff", border: "2px solid #ECF1E6", borderBottomWidth: 4, borderRadius: 18, padding: "18px 20px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 4 }}>
                    <span style={{ background: tag.bg, color: tag.color, borderRadius: 20, padding: "4px 11px", font: "800 12px 'Baloo 2'" }}>{r.tag}</span>
                    <span style={{ font: "700 12px 'Nunito'", color: "#9AA89E" }}>v{r.version} · {formatReleaseDate(r.date)}</span>
                  </div>
                  <div style={{ font: "800 19px 'Baloo 2'", color: "#15392A", marginBottom: 10 }}>{r.title}</div>
                  <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                    {r.items.map((it, i) => (
                      <li key={i} style={{ display: "flex", gap: 9, font: "600 15px/1.55 'Nunito'", color: "#3A4A40" }}>
                        <span style={{ color: "#16C172", fontWeight: 800, flexShrink: 0 }}>•</span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
