import React from "react";

/**
 * ProgressBar — rounded track with a green fill and the signature inset
 * white "shine" highlight along the top of the fill. Used for lesson
 * progress, daily goals, task completion.
 *
 * tone: green (default) · streak · gems · onDark (for use on dark cards)
 */
const FILLS = {
  green:  "var(--xu-green, #16C172)",
  streak: "var(--xu-streak, #FF8A3D)",
  gems:   "var(--xu-gems, #8B5CF6)",
  onDark: "var(--xu-green, #16C172)",
};

export function ProgressBar({ value = 0, height = 12, tone = "green", track, style }) {
  const pct = Math.max(0, Math.min(100, value));
  const trackBg =
    track || (tone === "onDark" ? "rgba(255,255,255,.18)" : "var(--xu-line, #ECF1E6)");
  return (
    <div
      style={{
        height,
        borderRadius: Math.round(height * 0.7),
        background: trackBg,
        overflow: "hidden",
        ...style,
      }}
    >
      <div
        style={{
          width: `${pct}%`,
          height: "100%",
          background: FILLS[tone] || FILLS.green,
          boxShadow: "inset 0 3px 0 rgba(255,255,255,.35)",
          borderRadius: Math.round(height * 0.7),
          transition: "width .6s ease",
        }}
      />
    </div>
  );
}
