import React, { useState } from "react";

/**
 * Button — the signature XuXu "chunky 3D" button.
 * A solid colored drop-shadow sits directly below the button; pressing
 * sinks the button into its shadow (translateY + reduced shadow).
 *
 * variants: primary (green) · streak (orange) · gold · white (on color bg)
 *           · secondary (outline) · ghost (text only)
 * sizes:    sm · md · lg · block (full-width lg)
 */
const PALETTE = {
  primary: { bg: "var(--xu-green, #16C172)", fg: "#fff", depth: "var(--xu-green-dark, #0E9E5C)" },
  streak:  { bg: "var(--xu-streak, #FF8A3D)", fg: "#fff", depth: "var(--xu-streak-dark, #E0631C)" },
  gold:    { bg: "var(--xu-gold, #FFC93C)", fg: "#7A4E00", depth: "var(--xu-gold-shadow, #D99312)" },
  white:   { bg: "#fff", fg: "var(--xu-green, #16C172)", depth: "rgba(0,0,0,.18)" },
};

const SIZES = {
  sm: { padding: "8px 14px", fontSize: 12, radius: 11, depth: 3 },
  md: { padding: "11px 18px", fontSize: 14, radius: 13, depth: 4 },
  lg: { padding: "15px 22px", fontSize: 16, radius: 16, depth: 5 },
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  block = false,
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const [pressed, setPressed] = useState(false);
  const sz = SIZES[size] || SIZES.md;

  // Outline / ghost variants don't use the 3D shadow
  if (variant === "secondary" || variant === "ghost") {
    const isGhost = variant === "ghost";
    return (
      <button
        onClick={disabled ? undefined : onClick}
        disabled={disabled}
        style={{
          width: block ? "100%" : undefined,
          padding: sz.padding,
          borderRadius: sz.radius,
          font: `800 ${sz.fontSize}px 'Baloo 2'`,
          letterSpacing: 0.3,
          color: isGhost ? "var(--xu-muted, #5B7065)" : "var(--xu-muted, #5B7065)",
          background: isGhost ? "transparent" : "#fff",
          border: isGhost ? "none" : "2px solid var(--xu-line-subtle, #DDE6D6)",
          cursor: disabled ? "not-allowed" : "pointer",
          opacity: disabled ? 0.5 : 1,
          transition: "transform .1s ease, background .15s",
          transform: pressed ? "scale(.96)" : "none",
          ...style,
        }}
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
        onMouseLeave={() => setPressed(false)}
        onTouchStart={() => setPressed(true)}
        onTouchEnd={() => setPressed(false)}
        {...rest}
      >
        {children}
      </button>
    );
  }

  const p = PALETTE[variant] || PALETTE.primary;
  const depth = sz.depth;
  return (
    <button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      style={{
        width: block ? "100%" : undefined,
        padding: sz.padding,
        borderRadius: sz.radius,
        font: `800 ${sz.fontSize}px 'Baloo 2'`,
        letterSpacing: 0.5,
        color: disabled ? "var(--xu-caption, #9AA89E)" : p.fg,
        background: disabled ? "var(--xu-line, #ECF1E6)" : p.bg,
        border: "none",
        boxShadow: disabled ? "none" : `0 ${pressed ? Math.max(1, depth - 3) : depth}px 0 ${p.depth}`,
        transform: pressed && !disabled ? `translateY(${depth - Math.max(1, depth - 3)}px)` : "none",
        cursor: disabled ? "not-allowed" : "pointer",
        transition: "box-shadow .1s ease, transform .1s ease",
        ...style,
      }}
      onMouseDown={() => !disabled && setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      onTouchStart={() => !disabled && setPressed(true)}
      onTouchEnd={() => setPressed(false)}
      {...rest}
    >
      {children}
    </button>
  );
}
