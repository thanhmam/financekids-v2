import React from "react";

/**
 * Chip — a small rounded tag/label. Used for age groups, categories,
 * "Bài 3/45" counters, and filter pills. Pass a tone preset or custom colors.
 */
const TONES = {
  green:   { bg: "var(--xu-green-100, #E3F7EC)", color: "var(--xu-green-dark, #0E9E5C)" },
  indigo:  { bg: "#EEF2FF", color: "#4F46E5" },
  violet:  { bg: "var(--xu-gems-50, #F1E9FF)", color: "#7C4DEC" },
  gold:    { bg: "var(--xu-gold-50, #FFF8E6)", color: "var(--xu-gold-dark, #E8A317)" },
  streak:  { bg: "var(--xu-streak-50, #FFEEDD)", color: "var(--xu-streak, #FF8A3D)" },
  neutral: { bg: "var(--xu-bg, #F4F8EF)", color: "var(--xu-muted, #5B7065)" },
};

export function Chip({ children, tone = "green", solid = false, style }) {
  const t = TONES[tone] || TONES.green;
  return (
    <span
      style={{
        display: "inline-block",
        background: solid ? t.color : t.bg,
        color: solid ? "#fff" : t.color,
        borderRadius: 999,
        padding: "3px 9px",
        font: "700 11px 'Nunito'",
        whiteSpace: "nowrap",
        ...style,
      }}
    >
      {children}
    </span>
  );
}
