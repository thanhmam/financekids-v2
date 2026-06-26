"use client";

export default function ProBadge({ size = "sm" }) {
  const isSmall = size === "sm";
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 3,
      background: "#8B5CF6", color: "#fff",
      borderRadius: isSmall ? 8 : 10,
      padding: isSmall ? "2px 8px" : "4px 10px",
      font: `800 ${isSmall ? 11 : 13}px 'Baloo 2'`,
      flexShrink: 0,
      boxShadow: "0 2px 0 #7C4DEC",
      letterSpacing: "0.02em",
    }}>
      ◆ PRO
    </span>
  );
}
