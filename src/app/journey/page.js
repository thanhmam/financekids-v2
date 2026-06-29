"use client";

import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { ARTICLES, formatArticleDate } from "@/data/journey";

export default function JourneyPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#fff", fontFamily: "'Nunito', sans-serif" }}>
      <SiteHeader />

      {/* Hero */}
      <div style={{ background: "linear-gradient(180deg,#F4FBF4 0%,#FFFFFF 100%)", padding: "56px 0 40px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "#E3F7EC", borderRadius: 30, padding: "7px 15px", marginBottom: 18 }}>
            <span style={{ color: "#0E9E5C", font: "800 13px 'Baloo 2'" }}>🌱</span>
            <span style={{ font: "800 13px 'Nunito'", color: "#0E9E5C", letterSpacing: ".3px" }}>Hậu trường</span>
          </div>
          <h1 style={{ font: "800 42px/1.12 'Baloo 2'", color: "#15392A", letterSpacing: -1, marginBottom: 14 }}>
            Hành trình xây dựng <span style={{ color: "#16C172" }}>XuXu</span>
          </h1>
          <p style={{ font: "600 17px/1.6 'Nunito'", color: "#5B7065", maxWidth: 520, margin: "0 auto" }}>
            Những bài viết chia sẻ về quá trình tạo ra XuXu — ý tưởng, quyết định, thử nghiệm và cả những lần làm sai.
          </p>
        </div>
      </div>

      {/* Danh sách bài viết */}
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "16px 24px 72px" }}>
        {ARTICLES.length === 0 ? (
          <div style={{ textAlign: "center", padding: "48px 0", border: "2px dashed #DDE6D6", borderRadius: 18 }}>
            <div style={{ fontSize: 40, marginBottom: 10 }}>✍️</div>
            <div style={{ font: "800 18px 'Baloo 2'", color: "#15392A", marginBottom: 6 }}>Sắp có bài viết đầu tiên</div>
            <div style={{ font: "600 14px 'Nunito'", color: "#9AA89E" }}>Quay lại sau nhé!</div>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {ARTICLES.map((a) => (
              <Link
                key={a.slug}
                href={`/journey/${a.slug}`}
                className="btn-press"
                style={{ display: "flex", gap: 18, alignItems: "center", background: "#fff", border: "2px solid #ECF1E6", borderBottomWidth: 4, borderRadius: 18, padding: 18, textDecoration: "none" }}
              >
                <div style={{ width: 72, height: 72, flexShrink: 0, borderRadius: 16, background: `${a.accent || "#16C172"}1A`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36 }}>
                  {a.emoji || "🌱"}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, font: "700 12px 'Nunito'", color: "#9AA89E", marginBottom: 5 }}>
                    <span>{formatArticleDate(a.date)}</span>
                    {a.readMinutes && (<><span>·</span><span>{a.readMinutes} phút đọc</span></>)}
                  </div>
                  <div style={{ font: "800 19px 'Baloo 2'", color: "#15392A", lineHeight: 1.25, marginBottom: 6 }}>{a.title}</div>
                  <div style={{ font: "600 14px/1.5 'Nunito'", color: "#5B7065" }}>{a.excerpt}</div>
                </div>
                <span style={{ color: "#16C172", font: "800 20px 'Baloo 2'", flexShrink: 0 }}>→</span>
              </Link>
            ))}
          </div>
        )}
      </div>

      <SiteFooter />
    </div>
  );
}
