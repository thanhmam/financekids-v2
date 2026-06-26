import React from "react";

/**
 * QuizOption — a single answer button in the multiple-choice mini-game.
 * Shows a numbered badge + label. The `state` prop drives the reveal
 * styling: idle · selected · correct · wrong · dimmed. Uses the brand's
 * 4px bottom border so options feel pressable.
 */
const STYLES = {
  idle:     { border: "var(--xu-line, #ECF1E6)", bg: "#fff", badge: { border: "2px solid var(--xu-line-subtle, #DDE6D6)", color: "var(--xu-caption, #9AA89E)", background: "transparent" }, label: "var(--xu-ink-soft, #34453B)", weight: 700, opacity: 1 },
  selected: { border: "var(--xu-green, #16C172)", bg: "var(--xu-green-50, #EAFBF1)", badge: { background: "var(--xu-green, #16C172)", color: "#fff" }, label: "var(--xu-green-dark, #0E9E5C)", weight: 700, opacity: 1 },
  correct:  { border: "var(--xu-green, #16C172)", bg: "var(--xu-green-50, #EAFBF1)", badge: { background: "var(--xu-green, #16C172)", color: "#fff" }, label: "var(--xu-green-dark, #0E9E5C)", weight: 800, opacity: 1 },
  wrong:    { border: "var(--xu-life, #FF5366)", bg: "var(--xu-life-50, #FFE3E7)", badge: { background: "var(--xu-life, #FF5366)", color: "#fff" }, label: "#C0283A", weight: 700, opacity: 1 },
  dimmed:   { border: "var(--xu-line, #ECF1E6)", bg: "#fff", badge: { border: "2px solid var(--xu-line-subtle, #DDE6D6)", color: "var(--xu-caption, #9AA89E)", background: "transparent" }, label: "var(--xu-caption, #9AA89E)", weight: 700, opacity: 0.55 },
};

export function QuizOption({ index = 0, children, state = "idle", onClick, style }) {
  const s = STYLES[state] || STYLES.idle;
  const mark = state === "correct" ? "✓" : state === "wrong" ? "✗" : index + 1;
  return (
    <button
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        border: `2px solid ${s.border}`,
        borderBottomWidth: 4,
        background: s.bg,
        opacity: s.opacity,
        borderRadius: 16,
        padding: "13px 14px",
        cursor: onClick ? "pointer" : "default",
        transition: "border-color .15s, background .15s",
        textAlign: "left",
        width: "100%",
        ...style,
      }}
    >
      <div
        style={{
          width: 26,
          height: 26,
          borderRadius: 8,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          font: "800 12px 'Baloo 2'",
          flexShrink: 0,
          ...s.badge,
        }}
      >
        {mark}
      </div>
      <span style={{ font: `${s.weight} 14px 'Nunito'`, color: s.label }}>{children}</span>
    </button>
  );
}
