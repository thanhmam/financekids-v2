import React from "react";

/**
 * BottomNav — the mobile 5-tab bottom navigation. Tabs use unicode glyph
 * icons; the active tab fills with its accent color (home/explore green,
 * tasks orange, leaderboard violet) and the profile tab is the gold coin
 * avatar with a green ring when active.
 */
const DEFAULT_TABS = [
  { id: "home", icon: "⌂", activeBg: "var(--xu-green, #16C172)" },
  { id: "explore", icon: "◆", activeBg: "var(--xu-green, #16C172)" },
  { id: "tasks", icon: "▲", activeBg: "var(--xu-streak, #FF8A3D)" },
  { id: "leaderboard", icon: "♛", activeBg: "var(--xu-gems, #8B5CF6)" },
  { id: "profile", icon: "profile" },
];

export function BottomNav({ tabs = DEFAULT_TABS, active = "home", onSelect, style }) {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        background: "#fff",
        borderTop: "2px solid var(--xu-line, #ECF1E6)",
        padding: "10px 0 14px",
        zIndex: 40,
        ...style,
      }}
    >
      {tabs.map((tab) => {
        const isActive = active === tab.id;
        if (tab.icon === "profile") {
          return (
            <button key={tab.id} onClick={() => onSelect?.(tab.id)} style={{ background: "none", border: "none", cursor: "pointer", padding: "0 10px" }}>
              <div
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: "50%",
                  background: "var(--xu-gold, #FFC93C)",
                  border: isActive ? "2.5px solid var(--xu-gold-dark, #E8A317)" : "2.5px dashed #FFB877",
                  boxShadow: isActive ? "0 0 0 2.5px var(--xu-green, #16C172)" : "none",
                  transition: "all .15s",
                }}
              />
            </button>
          );
        }
        return (
          <button key={tab.id} onClick={() => onSelect?.(tab.id)} style={{ background: "none", border: "none", cursor: "pointer", padding: "0 10px" }}>
            <div
              style={{
                width: 30,
                height: 30,
                borderRadius: 9,
                background: isActive ? tab.activeBg : "transparent",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: isActive ? "#fff" : "var(--xu-faint, #C2CDBA)",
                font: "800 16px 'Baloo 2'",
                transition: "all .15s",
              }}
            >
              {tab.icon}
            </div>
          </button>
        );
      })}
    </div>
  );
}
