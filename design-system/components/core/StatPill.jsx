import React from "react";
import { XuCoin } from "../brand/XuCoin.jsx";

/**
 * StatPill — the rounded stat chip in headers: streak (orange ▲), xu coin
 * balance, or XP star. Pass `kind` for a preset, or a custom icon + tint.
 */
const PRESETS = {
  streak: { icon: "▲", iconColor: "var(--xu-streak, #FF8A3D)", bg: "var(--xu-gold-100, #FFF3DC)", border: "transparent" },
  xu:     { icon: "coin", bg: "var(--xu-gold-50, #FFF8E6)", border: "var(--xu-gold, #FFC93C)" },
  xp:     { icon: "★", iconColor: "var(--xu-gold, #FFC93C)", bg: "#fff", border: "var(--xu-line, #ECF1E6)" },
};

export function StatPill({ kind = "streak", value, icon, iconColor, bg, border, style }) {
  const p = PRESETS[kind] || PRESETS.streak;
  const useIcon = icon || p.icon;
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        background: bg || p.bg,
        border: `1.5px solid ${border || p.border}`,
        borderRadius: 999,
        padding: "5px 12px",
        ...style,
      }}
    >
      {useIcon === "coin" ? (
        <XuCoin size={20} />
      ) : (
        <span style={{ color: iconColor || p.iconColor, font: "800 15px 'Baloo 2'" }}>{useIcon}</span>
      )}
      <span style={{ font: "800 15px 'Baloo 2'", color: "var(--xu-ink, #15392A)" }}>
        {typeof value === "number" ? value.toLocaleString("vi-VN") : value}
      </span>
    </div>
  );
}
