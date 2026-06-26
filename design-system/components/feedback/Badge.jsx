import React from "react";

/**
 * Badge — an achievement tile: a big rounded square holding an emoji,
 * with a caption beneath. Locked badges render greyed with a 🔒 and a
 * "Bí ẩn" (mystery) label. Used in the profile badges grid.
 *
 * tone presets tint earned badges; pass earned={false} for the locked state.
 */
const TONES = {
  green:  { bg: "var(--xu-green-100, #E3F7EC)", border: "var(--xu-green-border, #BFEBD2)" },
  gold:   { bg: "var(--xu-gold-50, #FFF8E6)", border: "#FFE8A3" },
  streak: { bg: "var(--xu-streak-100, #FFF3DC)", border: "#FFE0B8" },
  violet: { bg: "var(--xu-gems-50, #F1E9FF)", border: "#DCC9FB" },
  info:   { bg: "var(--xu-info-50, #E9F3FF)", border: "#C3DFF8" },
  life:   { bg: "var(--xu-life-50, #FFE3E7)", border: "#FFBCC4" },
};

export function Badge({ emoji = "🌟", label, tone = "gold", earned = true, size = 56, style }) {
  const t = TONES[tone] || TONES.gold;
  return (
    <div style={{ textAlign: "center", ...style }}>
      <div
        style={{
          width: size,
          height: size,
          borderRadius: 18,
          margin: "0 auto",
          background: earned ? t.bg : "var(--xu-bg, #F4F8EF)",
          border: `2px solid ${earned ? t.border : "var(--xu-line, #ECF1E6)"}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: earned ? Math.round(size * 0.43) : Math.round(size * 0.39),
          opacity: earned ? 1 : 0.5,
          filter: earned ? "none" : "grayscale(1)",
        }}
      >
        {earned ? emoji : "🔒"}
      </div>
      {label !== undefined && (
        <div
          style={{
            font: "600 9px 'Nunito'",
            color: earned ? "var(--xu-muted, #5B7065)" : "var(--xu-faint, #C2CDBA)",
            marginTop: 5,
            lineHeight: 1.2,
          }}
        >
          {earned ? label : "Bí ẩn"}
        </div>
      )}
    </div>
  );
}
