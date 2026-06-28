"use client";

import { usePathname, useRouter } from "next/navigation";

const TABS = [
  { icon: "⌂", path: "/learn", activeBg: "#16C172", shape: "square" },
  { icon: "◆", path: "/explore", activeBg: "#16C172", shape: "square" },
  { icon: "▲", path: "/tasks", activeBg: "#FF8A3D", shape: "square" },
  { icon: "♛", path: "/leaderboard", activeBg: "#8B5CF6", shape: "square" },
  { icon: "profile", path: "/profile", shape: "circle" },
];

export default function BottomNav() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div style={{
      position: "fixed", bottom: 0, left: 0, right: 0,
      display: "flex", justifyContent: "space-around", alignItems: "center",
      background: "#fff", borderTop: "2px solid #ECF1E6",
      padding: "10px 0 14px", zIndex: 40,
    }}>
      {TABS.map(tab => {
        const isActive = pathname === tab.path || (tab.path === "/learn" && pathname === "/");
        if (tab.icon === "profile") {
          return (
            <button key={tab.path} onClick={() => router.push(tab.path)}
              style={{ background: "none", border: "none", cursor: "pointer", padding: "0 10px" }}>
              <div style={{
                width: 30, height: 30, borderRadius: "50%",
                background: "#FFC93C",
                border: isActive ? "2.5px solid #E8A317" : "2.5px dashed #FFB877",
                boxShadow: isActive ? "0 0 0 2.5px #16C172" : "none",
                transition: "all .15s",
              }} />
            </button>
          );
        }
        return (
          <button key={tab.path} onClick={() => router.push(tab.path)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: "0 10px" }}>
            <div style={{
              width: 30, height: 30, borderRadius: 9,
              background: isActive ? tab.activeBg : "transparent",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: isActive ? "#fff" : "#C2CDBA",
              font: "800 16px 'Baloo 2'",
              transition: "all .15s",
            }}>
              {tab.icon}
            </div>
          </button>
        );
      })}
    </div>
  );
}
