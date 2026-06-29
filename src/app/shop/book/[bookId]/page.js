"use client";

import { useParams, useRouter } from "next/navigation";
import { useBooks } from "@/hooks/useBooks";
import { formatVND, discountPercent } from "@/data/books";
import BookCover from "@/components/BookCover";
import BottomNav from "@/components/BottomNav";

const NAV_ITEMS = [
  { icon: "⌂", label: "Học",      path: "/learn" },
  { icon: "◆", label: "Khám phá", path: "/explore" },
  { icon: "▲", label: "Nhiệm vụ", path: "/tasks" },
  { icon: "♛", label: "Xếp hạng", path: "/leaderboard" },
  { icon: "◉", label: "Cửa hàng", path: "/shop" },
  { icon: "☺", label: "Hồ sơ",   path: "/profile" },
];

export default function BookDetailPage() {
  const { bookId } = useParams();
  const router = useRouter();
  const { books, loaded } = useBooks();

  const book = books.find((b) => b.id === bookId);

  if (loaded && !book) {
    return (
      <div style={{ minHeight: "100vh", background: "#F4F8EF", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 14, padding: 24 }}>
        <div style={{ fontSize: 48 }}>📚</div>
        <div style={{ font: "800 18px 'Baloo 2'", color: "#15392A" }}>Không tìm thấy sách này</div>
        <button onClick={() => router.push("/shop")} style={{ background: "#16C172", color: "#fff", border: "none", borderRadius: 12, padding: "11px 20px", font: "800 14px 'Baloo 2'", boxShadow: "0 4px 0 #0E9E5C", cursor: "pointer" }}>
          ← Về cửa hàng
        </button>
      </div>
    );
  }

  if (!book) return <div style={{ minHeight: "100vh", background: "#F4F8EF" }} />;

  const pct = discountPercent(book);
  const buy = () => {
    if (book.shopeeUrl) window.open(book.shopeeUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div style={{ minHeight: "100vh", background: "#F4F8EF", display: "flex", fontFamily: "'Nunito', sans-serif" }}>

      {/* ── Left nav (desktop only) ── */}
      <aside className="hidden md:flex flex-col" style={{
        width: 236, minHeight: "100vh", background: "#fff",
        borderRight: "2px solid #ECF1E6", padding: "22px 16px",
        position: "sticky", top: 0, height: "100vh",
        overflowY: "auto", flexShrink: 0,
      }}>
        <div
          onClick={() => router.push("/shop")}
          style={{ display: "flex", alignItems: "center", gap: 10, padding: "0 6px 22px", cursor: "pointer" }}
        >
          <span style={{ fontSize: 26 }}>◉</span>
          <span style={{ font: "800 20px 'Baloo 2'", color: "#16C172" }}>Cửa hàng</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {NAV_ITEMS.map((item) => {
            const active = item.path === "/shop";
            return (
              <button
                key={item.path}
                onClick={() => router.push(item.path)}
                style={{
                  display: "flex", alignItems: "center", gap: 13,
                  background: active ? "#EAFBF1" : "transparent",
                  border: active ? "2px solid #BFEBD2" : "2px solid transparent",
                  borderRadius: 14, padding: "11px 14px",
                  cursor: "pointer", textAlign: "left", width: "100%",
                }}
              >
                <span style={{ color: active ? "#0E9E5C" : "#9AA89E", font: "800 18px 'Baloo 2'", width: 22, textAlign: "center" }}>{item.icon}</span>
                <span style={{ font: "800 15px 'Baloo 2'", color: active ? "#0E9E5C" : "#5B7065" }}>{item.label}</span>
              </button>
            );
          })}
        </div>
      </aside>

      {/* ── Main content ── */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>

        {/* Mobile header */}
        <div className="md:hidden" style={{ background: "#fff", borderBottom: "2px solid #ECF1E6", padding: "14px 20px", display: "flex", alignItems: "center", gap: 12, position: "sticky", top: 0, zIndex: 20 }}>
          <button onClick={() => router.back()} style={{ background: "#F4F8EF", border: "none", borderRadius: 12, width: 38, height: 38, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", font: "800 18px 'Baloo 2'", color: "#15392A" }}>‹</button>
          <div style={{ font: "800 18px 'Baloo 2'", color: "#15392A" }}>Chi tiết sách</div>
        </div>

        {/* Desktop breadcrumb */}
        <div className="hidden md:flex" style={{ alignItems: "center", gap: 8, padding: "20px 32px 0", font: "700 13px 'Nunito'", color: "#9AA89E" }}>
          <button onClick={() => router.push("/shop")} style={{ background: "none", border: "none", cursor: "pointer", font: "700 13px 'Nunito'", color: "#9AA89E" }} className="hover:text-[#16C172]">Cửa hàng</button>
          <span>›</span>
          <span style={{ color: "#15392A" }}>{book.title}</span>
        </div>

        <div style={{ maxWidth: 760, width: "100%", margin: "0 auto", padding: "24px 20px 60px" }}>

          {/* Cover + meta */}
          <div style={{ display: "flex", gap: 28, flexWrap: "wrap", marginBottom: 28 }}>
            <div style={{ position: "relative", flexShrink: 0 }}>
              <BookCover book={book} width={160} radius={14} />
              {pct > 0 && (
                <span style={{ position: "absolute", top: -10, left: -10, background: "#FF5366", color: "#fff", borderRadius: 12, padding: "5px 11px", font: "800 13px 'Baloo 2'", boxShadow: "0 3px 0 #D63A4D" }}>-{pct}%</span>
              )}
            </div>
            <div style={{ flex: "1 1 240px", minWidth: 0 }}>
              <h1 style={{ font: "800 24px/1.2 'Baloo 2'", color: "#15392A", marginBottom: 6 }}>{book.title}</h1>
              <div style={{ font: "700 14px 'Nunito'", color: "#9AA89E", marginBottom: 14 }}>✍️ {book.author}</div>
              {book.tagline && (
                <div style={{ display: "inline-block", background: "#EAFBF1", color: "#0E7A4E", borderRadius: 12, padding: "6px 12px", font: "700 13px 'Nunito'", marginBottom: 16 }}>
                  {book.tagline}
                </div>
              )}

              {/* Pricing */}
              <div style={{ display: "flex", alignItems: "baseline", gap: 10, flexWrap: "wrap", marginBottom: 20 }}>
                <span style={{ font: "800 28px 'Baloo 2'", color: "#16C172" }}>{formatVND(book.price)}</span>
                {pct > 0 && <span style={{ font: "600 15px 'Nunito'", color: "#C2CDBA", textDecoration: "line-through" }}>{formatVND(book.originalPrice)}</span>}
                {pct > 0 && <span style={{ background: "#FFF3DC", color: "#C25E18", borderRadius: 10, padding: "3px 9px", font: "800 12px 'Baloo 2'" }}>Tiết kiệm {formatVND(book.originalPrice - book.price)}</span>}
              </div>

              {/* Buy button (desktop: inline here) */}
              <div className="hidden md:block">
                <button
                  className="btn-press"
                  onClick={buy}
                  style={{ background: "#EE4D2D", color: "#fff", border: "none", borderRadius: 14, padding: "15px 28px", font: "800 16px 'Baloo 2'", boxShadow: "0 5px 0 #C13A1E", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 8 }}
                >
                  🛒 Mua sách
                </button>
                <div style={{ font: "600 11px 'Nunito'", color: "#9AA89E", marginTop: 8 }}>
                  Giá chỉ mang tính tham khảo, có thể thay đổi tùy theo voucher của bạn và sàn tại thời điểm mua.
                </div>
              </div>
            </div>
          </div>

          {/* Summary */}
          {book.summary && (
            <div style={{ background: "#fff", border: "2px solid #ECF1E6", borderRadius: 18, padding: "18px 20px", marginBottom: 16 }}>
              <div style={{ font: "800 15px 'Baloo 2'", color: "#15392A", marginBottom: 8 }}>Giới thiệu</div>
              <p style={{ font: "600 14px/1.65 'Nunito'", color: "#5B7065" }}>{book.summary}</p>
            </div>
          )}

          {/* Highlights */}
          {book.highlights?.length > 0 && (
            <div style={{ background: "#fff", border: "2px solid #ECF1E6", borderRadius: 18, padding: "18px 20px", marginBottom: 16 }}>
              <div style={{ font: "800 15px 'Baloo 2'", color: "#15392A", marginBottom: 10 }}>Bạn sẽ học được</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {book.highlights.map((h, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <span style={{ flexShrink: 0, width: 22, height: 22, borderRadius: "50%", background: "#E3F7EC", color: "#0E9E5C", display: "flex", alignItems: "center", justifyContent: "center", font: "800 11px 'Baloo 2'" }}>✓</span>
                    <span style={{ font: "600 14px/1.5 'Nunito'", color: "#34453B" }}>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Affiliate note (mobile only — desktop shown above) */}
          <div className="md:hidden" style={{ font: "600 12px 'Nunito'", color: "#9AA89E", textAlign: "center", padding: "6px 0 4px" }}>
            Giá chỉ mang tính tham khảo, có thể thay đổi tùy theo voucher của bạn và sàn tại thời điểm mua.
          </div>

          {/* Buy button — mobile inline */}
          <div className="md:hidden" style={{ marginTop: 16 }}>
            <button
              className="btn-press"
              onClick={buy}
              style={{ width: "100%", background: "#EE4D2D", color: "#fff", border: "none", borderRadius: 14, padding: "15px 0", font: "800 16px 'Baloo 2'", boxShadow: "0 5px 0 #C13A1E", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}
            >
              🛒 Mua sách
            </button>
          </div>
        </div>

        {/* Bottom nav — mobile only */}
        <div className="md:hidden">
          <BottomNav />
        </div>
      </div>
    </div>
  );
}
