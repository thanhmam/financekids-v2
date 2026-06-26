import React from "react";

/**
 * IconTile — the rounded square that holds an emoji/glyph icon, used on
 * lesson cards, shop items, task rows. Tint the background and icon color.
 */
export function IconTile({ children, size = 46, bg = "var(--xu-bg, #F4F8EF)", color, radius = 14, fontSize, style }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: radius,
        background: bg,
        color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        font: `800 ${fontSize || Math.round(size * 0.46)}px 'Baloo 2'`,
        flexShrink: 0,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
