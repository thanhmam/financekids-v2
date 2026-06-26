import React from "react";

/**
 * XuCoin — the "xu" currency token: a small gold disc with a white "X".
 * Used inline next to balances and reward amounts across the app.
 */
export function XuCoin({ size = 20, style }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
        borderRadius: "50%",
        background: "var(--xu-gold, #FFC93C)",
        border: "2px solid var(--xu-gold-dark, #E8A317)",
        color: "#7A4E00",
        font: `800 ${Math.round(size * 0.58)}px 'Baloo 2'`,
        flexShrink: 0,
        ...style,
      }}
    >
      X
    </span>
  );
}
