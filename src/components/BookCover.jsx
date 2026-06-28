"use client";

// Bìa sách: dùng ảnh thật nếu có coverUrl, ngược lại vẽ bìa CSS theo màu book.cover.
export default function BookCover({ book, width = 120, radius = 10 }) {
  const height = Math.round(width * 1.45);
  const c = book.cover || { from: "#DDE6D6", to: "#9AA89E", ink: "#15392A" };

  if (book.coverUrl) {
    return (
      <div style={{ width, height, borderRadius: radius, overflow: "hidden", boxShadow: "0 8px 22px rgba(20,50,30,.22)", flexShrink: 0, position: "relative" }}>
        <img src={book.coverUrl} alt={book.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      </div>
    );
  }

  return (
    <div
      style={{
        width, height, borderRadius: radius, flexShrink: 0, position: "relative",
        background: `linear-gradient(150deg, ${c.from}, ${c.to})`,
        boxShadow: "0 8px 22px rgba(20,50,30,.22)",
        overflow: "hidden",
        display: "flex", flexDirection: "column", justifyContent: "space-between",
        padding: width * 0.1,
      }}
    >
      {/* spine highlight */}
      <div style={{ position: "absolute", top: 0, bottom: 0, left: width * 0.07, width: 2, background: "rgba(255,255,255,.3)" }} />
      {/* emoji badge */}
      <div style={{ alignSelf: "flex-end", fontSize: width * 0.22 }}>{book.emoji}</div>
      {/* title + author */}
      <div>
        <div style={{ font: `800 ${Math.max(11, width * 0.115)}px 'Baloo 2'`, color: c.ink, lineHeight: 1.15 }}>
          {book.title}
        </div>
        <div style={{ font: `700 ${Math.max(8, width * 0.075)}px 'Nunito'`, color: c.ink, opacity: 0.75, marginTop: width * 0.03 }}>
          {book.author}
        </div>
      </div>
    </div>
  );
}
