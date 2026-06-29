"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { getArticle, formatArticleDate } from "@/data/journey";

/* Render inline **đậm** / *nghiêng* trong 1 chuỗi text */
function inline(text) {
  return String(text)
    .split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g)
    .filter(Boolean)
    .map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**"))
        return <b key={i} style={{ color: "#15392A", fontWeight: 800 }}>{part.slice(2, -2)}</b>;
      if (part.startsWith("*") && part.endsWith("*"))
        return <i key={i}>{part.slice(1, -1)}</i>;
      return part;
    });
}

function Block({ block }) {
  switch (block.type) {
    case "h2":
      return <h2 style={{ font: "800 26px 'Baloo 2'", color: "#15392A", margin: "34px 0 12px" }}>{block.text}</h2>;
    case "quote":
      return (
        <blockquote style={{ margin: "26px 0", padding: "16px 22px", borderLeft: "4px solid #16C172", background: "#F4FBF4", borderRadius: "0 14px 14px 0", font: "700 18px/1.5 'Nunito'", color: "#0E5A38" }}>
          {inline(block.text)}
        </blockquote>
      );
    case "list":
      return (
        <ul style={{ margin: "14px 0", paddingLeft: 4, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
          {block.items.map((it, i) => (
            <li key={i} style={{ display: "flex", gap: 10, font: "600 17px/1.6 'Nunito'", color: "#3A4A40" }}>
              <span style={{ color: "#16C172", fontWeight: 800, flexShrink: 0 }}>✓</span>
              <span>{inline(it)}</span>
            </li>
          ))}
        </ul>
      );
    case "img":
      return (
        <figure style={{ margin: "26px 0" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={block.src} alt={block.caption || ""} style={{ width: "100%", borderRadius: 16, border: "2px solid #ECF1E6" }} />
          {block.caption && <figcaption style={{ font: "600 13px 'Nunito'", color: "#9AA89E", textAlign: "center", marginTop: 8 }}>{block.caption}</figcaption>}
        </figure>
      );
    default:
      return <p style={{ font: "600 17px/1.75 'Nunito'", color: "#3A4A40", margin: "14px 0" }}>{inline(block.text)}</p>;
  }
}

export default function ArticlePage() {
  const { slug } = useParams();
  const article = getArticle(slug);

  return (
    <div style={{ minHeight: "100vh", background: "#fff", fontFamily: "'Nunito', sans-serif" }}>
      <SiteHeader />

      {!article ? (
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "80px 24px", textAlign: "center" }}>
          <div style={{ fontSize: 44, marginBottom: 12 }}>🤔</div>
          <h1 style={{ font: "800 26px 'Baloo 2'", color: "#15392A", marginBottom: 10 }}>Không tìm thấy bài viết</h1>
          <Link href="/journey" style={{ font: "800 14px 'Baloo 2'", color: "#16C172", textDecoration: "none" }}>← Về Hành trình XuXu</Link>
        </div>
      ) : (
        <article style={{ maxWidth: 720, margin: "0 auto", padding: "32px 24px 72px" }}>
          <Link href="/journey" style={{ display: "inline-block", font: "800 13px 'Baloo 2'", color: "#16C172", textDecoration: "none", marginBottom: 20 }}>← Hành trình XuXu</Link>

          <div style={{ display: "flex", alignItems: "center", gap: 10, font: "700 13px 'Nunito'", color: "#9AA89E", marginBottom: 12 }}>
            <span style={{ fontSize: 20 }}>{article.emoji || "🌱"}</span>
            <span>{formatArticleDate(article.date)}</span>
            {article.readMinutes && (<><span>·</span><span>{article.readMinutes} phút đọc</span></>)}
          </div>

          <h1 style={{ font: "800 38px/1.15 'Baloo 2'", color: "#15392A", letterSpacing: -0.5, marginBottom: 10 }}>{article.title}</h1>
          {article.excerpt && (
            <p style={{ font: "600 19px/1.6 'Nunito'", color: "#5B7065", marginBottom: 8 }}>{article.excerpt}</p>
          )}
          <div style={{ height: 2, background: "#ECF1E6", margin: "24px 0" }} />

          {article.content.map((block, i) => <Block key={i} block={block} />)}

          <div style={{ marginTop: 48, padding: "28px 24px", background: "linear-gradient(160deg,#16C172,#0C8A50)", borderRadius: 20, textAlign: "center" }}>
            <div style={{ font: "800 22px 'Baloo 2'", color: "#fff", marginBottom: 6 }}>Bắt đầu hành trình của bạn 💚</div>
            <div style={{ font: "700 14px 'Nunito'", color: "rgba(255,255,255,.9)", marginBottom: 18 }}>Học tài chính cùng XuXu — miễn phí, chỉ 5 phút/ngày.</div>
            <Link href="/learn" className="btn-press" style={{ display: "inline-block", background: "#fff", color: "#16C172", borderRadius: 14, padding: "13px 28px", font: "800 15px 'Baloo 2'", textDecoration: "none", boxShadow: "0 5px 0 rgba(0,0,0,.18)" }}>BẮT ĐẦU HỌC →</Link>
          </div>
        </article>
      )}

      <SiteFooter />
    </div>
  );
}
