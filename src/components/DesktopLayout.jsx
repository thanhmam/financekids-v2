"use client";

import { useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { useProgress } from "@/hooks/useProgress";
import XuXuMascot from "@/components/XuXuMascot";
import UpgradeModal from "@/components/UpgradeModal";

const NAV_ITEMS = [
  { icon: "⌂", label: "Học",       path: "/learn" },
  { icon: "◆", label: "Khám phá",  path: "/explore" },
  { icon: "▲", label: "Nhiệm vụ",  path: "/tasks" },
  { icon: "♛", label: "Xếp hạng", path: "/leaderboard" },
  { icon: "◉", label: "Cửa hàng", path: "/shop" },
  { icon: "☺", label: "Hồ sơ",    path: "/profile" },
];

const TIPS = [
  { icon: "◆", iconBg: "#E3F7EC", iconColor: "#16C172", title: "Tiết kiệm trước, tiêu sau:", body: "Để dành ngay khi nhận tiền, đừng đợi cuối tháng." },
  { icon: null, title: "Quy tắc 50/30/20:", body: "Chia tiền thành 50% thiết yếu, 30% mong muốn, 20% tiết kiệm." },
];

const LEADERBOARD_MOCK = [
  { rank: 1, name: "Bảo Nam",  xp: "3.120", avatarBg: "#FFC93C", avatarBorder: "#E8A317", rankColor: "#E8A317" },
  { rank: 2, name: "Thu Hà",   xp: "2.890", avatarBg: "#C9D2C0", avatarBorder: "#AEB8A4", rankColor: "#9AA89E" },
  { rank: 3, name: "Đức Anh", xp: "2.640", avatarBg: "#E6B98A", avatarBorder: "#CD9A6B", rankColor: "#CD7F32" },
];

const DAILY_GOAL = 3;
const DAYS = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];

export default function DesktopLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const { profile, isPro, activateTrial } = useAuth();
  const { completed, totalXP } = useProgress();
  const [showUpgrade, setShowUpgrade] = useState(false);

  const streak = profile?.streak || 0;
  const xu = profile?.xu || 1250;
  const displayName = profile?.displayName || "Bạn";

  const dailyDone = Math.min(completed.length, DAILY_GOAL);
  const dailyPct = Math.round((dailyDone / DAILY_GOAL) * 100);

  const tip = useMemo(() => TIPS[Math.floor(Math.random() * TIPS.length)], []);

  // Build 7-day streak bars: filled days = min(streak, 6), last slot = today star/check
  const streakBars = DAYS.map((_, i) => {
    if (i < 6) return i < Math.min(streak, 6) ? "done" : "empty";
    return streak >= 7 ? "done" : "today";
  });

  return (
    <div className="hidden lg:flex" style={{ height: "100vh", background: "#F4F8EF", overflow: "hidden" }}>

      {/* ── LEFT SIDEBAR ── */}
      <div style={{
        width: 250, flexShrink: 0, background: "#fff",
        borderRight: "2px solid #ECF1E6", padding: "22px 16px",
        display: "flex", flexDirection: "column", height: "100vh", overflowY: "auto",
      }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "0 6px 24px" }}>
          <XuXuMascot size={40} />
          <div style={{ font: "800 26px 'Baloo 2'", color: "#16C172" }}>XuXu</div>
        </div>

        {/* Nav items */}
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {NAV_ITEMS.map(item => {
            const isActive = pathname === item.path || (item.path === "/learn" && pathname === "/");
            return (
              <button
                key={item.path}
                onClick={() => router.push(item.path)}
                style={{
                  display: "flex", alignItems: "center", gap: 13,
                  background: isActive ? "#EAFBF1" : "transparent",
                  border: isActive ? "2px solid #BFEBD2" : "2px solid transparent",
                  borderRadius: 14, padding: "11px 14px",
                  cursor: "pointer", textAlign: "left", width: "100%",
                }}
              >
                <span style={{ color: isActive ? "#16C172" : "#9AA89E", font: "800 18px 'Baloo 2'", width: 22, textAlign: "center" }}>
                  {item.icon}
                </span>
                <span style={{ font: "800 15px 'Baloo 2'", color: isActive ? "#0E9E5C" : "#5B7065" }}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* XuXu Pro card */}
        {isPro ? (
          <div style={{ marginTop: "auto", background: "linear-gradient(145deg, #7C4DEC, #8B5CF6)", borderRadius: 16, padding: 16, color: "#fff" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
              <span style={{ font: "800 16px 'Baloo 2'" }}>XuXu Pro</span>
              <span style={{ font: "800 10px 'Baloo 2'", background: "rgba(255,255,255,.22)", borderRadius: 6, padding: "2px 6px" }}>ACTIVE</span>
            </div>
            <div style={{ font: "600 11px 'Nunito'", color: "rgba(255,255,255,.8)" }}>Tim vô hạn · 2× XP · 2× xu</div>
            {profile?.proExpiry?.toDate?.() && (
              <div style={{ font: "600 10px 'Nunito'", color: "rgba(255,255,255,.55)", marginTop: 4 }}>
                Hết hạn: {profile.proExpiry.toDate().toLocaleDateString("vi-VN")}
              </div>
            )}
          </div>
        ) : (
          <div style={{ marginTop: "auto", background: "#15392A", borderRadius: 16, padding: 16, color: "#fff" }}>
            <div style={{ font: "800 16px 'Baloo 2'" }}>XuXu Pro</div>
            <div style={{ font: "600 11px 'Nunito'", color: "rgba(255,255,255,.72)", margin: "4px 0 12px" }}>
              Tim vô hạn · không quảng cáo · x2 xu
            </div>
            <button
              onClick={() => setShowUpgrade(true)}
              style={{
                background: "#FFC93C", color: "#7A4E00", borderRadius: 11,
                padding: 10, textAlign: "center", font: "800 13px 'Baloo 2'",
                boxShadow: "0 4px 0 #D99312", border: "none", cursor: "pointer", width: "100%",
              }}
            >
              DÙNG THỬ MIỄN PHÍ
            </button>
          </div>
        )}
      </div>

      {/* ── MAIN (children) ── */}
      <div style={{ flex: 1, height: "100vh", overflowY: "auto" }}>
        {children}
      </div>

      {/* ── RIGHT PANEL ── */}
      <div style={{
        width: 320, flexShrink: 0, background: "#fff",
        borderLeft: "2px solid #ECF1E6", padding: "24px 20px",
        height: "100vh", overflowY: "auto",
      }}>

        {/* Mini Leaderboard */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
          <span style={{ font: "800 17px 'Baloo 2'", color: "#15392A" }}>Bảng xếp hạng</span>
          <span style={{ background: "#FFF8E6", color: "#9A6A0E", borderRadius: 11, padding: "4px 10px", font: "700 11px 'Nunito'" }}>
            Hạng Vàng
          </span>
        </div>
        <div style={{ border: "2px solid #ECF1E6", borderRadius: 18, padding: 14, marginBottom: 18 }}>
          {LEADERBOARD_MOCK.map(entry => (
            <div key={entry.rank} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 9 }}>
              <span style={{ width: 18, font: "800 14px 'Baloo 2'", color: entry.rankColor }}>{entry.rank}</span>
              <div style={{ width: 30, height: 30, borderRadius: "50%", background: entry.avatarBg, border: `2px solid ${entry.avatarBorder}`, flexShrink: 0 }} />
              <span style={{ flex: 1, font: "700 13px 'Nunito'", color: "#34453B" }}>{entry.name}</span>
              <span style={{ font: "800 13px 'Baloo 2'", color: "#5B7065" }}>{entry.xp}</span>
            </div>
          ))}
          {/* "You" row highlighted */}
          <div style={{
            display: "flex", alignItems: "center", gap: 10,
            background: "#EAFBF1", borderRadius: 11, padding: "7px 8px", margin: "0 -8px",
          }}>
            <span style={{ width: 18, font: "800 14px 'Baloo 2'", color: "#16C172" }}>4</span>
            <XuXuMascot size={30} />
            <span style={{ flex: 1, font: "800 13px 'Nunito'", color: "#0E9E5C" }}>{displayName} (Bạn)</span>
            <span style={{ font: "800 13px 'Baloo 2'", color: "#0E9E5C" }}>{totalXP.toLocaleString("de-DE")}</span>
          </div>
          <div style={{ font: "600 11px 'Nunito'", color: "#9AA89E", textAlign: "center", marginTop: 12 }}>
            Top 7 thăng hạng · còn 3 ngày
          </div>
        </div>

        {/* Daily goal */}
        <div style={{ font: "800 17px 'Baloo 2'", color: "#15392A", marginBottom: 12 }}>Mục tiêu hôm nay</div>
        <div style={{ border: "2px solid #ECF1E6", borderRadius: 18, padding: 16, marginBottom: 18 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 12 }}>
            <div style={{ position: "relative", width: 58, height: 58, flexShrink: 0 }}>
              <div style={{ width: 58, height: 58, borderRadius: "50%", background: `conic-gradient(#16C172 ${dailyPct}%, #ECF1E6 0)` }} />
              <div style={{
                position: "absolute", inset: 7, borderRadius: "50%", background: "#fff",
                display: "flex", alignItems: "center", justifyContent: "center",
                font: "800 15px 'Baloo 2'", color: "#15392A",
              }}>
                {dailyPct}%
              </div>
            </div>
            <div>
              <div style={{ font: "800 15px 'Baloo 2'", color: "#15392A" }}>{dailyDone} / {DAILY_GOAL} bài học</div>
              <div style={{ font: "600 11px 'Nunito'", color: "#9AA89E", marginTop: 2 }}>
                Còn {DAILY_GOAL - dailyDone} bài · +{(DAILY_GOAL - dailyDone) * 10} xu là đạt
              </div>
            </div>
          </div>
          <div style={{ height: 10, borderRadius: 7, background: "#ECF1E6", overflow: "hidden" }}>
            <div style={{ width: `${dailyPct}%`, height: "100%", background: "#16C172", transition: "width .5s ease" }} />
          </div>
        </div>

        {/* Streak card with 7-day bars */}
        <div style={{
          background: "linear-gradient(160deg, #FF9A4D, #FF7A2E)",
          borderRadius: 18, padding: 18, color: "#fff",
          marginBottom: 18, boxShadow: "0 5px 0 #E0631C",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
            <span style={{ font: "800 40px 'Baloo 2'", lineHeight: 1, textShadow: "0 3px 0 rgba(0,0,0,.15)" }}>
              {streak}
            </span>
            <div>
              <div style={{ font: "800 16px 'Baloo 2'" }}>ngày streak!</div>
              <div style={{ font: "600 11px 'Nunito'", color: "rgba(255,255,255,.88)", marginTop: 2 }}>
                Học hôm nay để giữ lửa nhé
              </div>
            </div>
          </div>
          {/* 7-day bars */}
          <div style={{ display: "flex", gap: 5 }}>
            {streakBars.map((state, i) => (
              <div key={i} style={{
                flex: 1, height: 26, borderRadius: 8,
                background: state === "done" ? "rgba(255,255,255,.85)" : "rgba(255,255,255,.3)",
                border: state === "today" ? "2px dashed rgba(255,255,255,.7)" : "none",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: state === "done" ? "#FF7A2E" : "#fff",
                font: `800 ${state === "today" ? 11 : 12}px 'Baloo 2'`,
              }}>
                {state === "done" ? "✓" : state === "today" ? "★" : DAYS[i]}
              </div>
            ))}
          </div>
        </div>

        {/* Tips */}
        <div style={{ font: "800 15px 'Baloo 2'", color: "#15392A", marginBottom: 10 }}>Mẹo của XuXu</div>
        {TIPS.map((t, i) => (
          <div key={i} style={{
            border: "2px dashed #DDE6D6", borderRadius: 18, padding: 15,
            display: "flex", gap: 12, alignItems: "flex-start",
            marginBottom: i < TIPS.length - 1 ? 12 : 0,
          }}>
            {t.icon ? (
              <div style={{
                width: 36, height: 36, borderRadius: "50%",
                background: t.iconBg, flexShrink: 0,
                display: "flex", alignItems: "center", justifyContent: "center",
                color: t.iconColor, font: "800 16px 'Baloo 2'",
              }}>
                {t.icon}
              </div>
            ) : (
              <XuXuMascot size={36} />
            )}
            <div style={{ font: "600 12px 'Nunito'", color: "#34453B", lineHeight: 1.5 }}>
              <b>{t.title}</b> {t.body}
            </div>
          </div>
        ))}
      </div>

      {showUpgrade && (
        <UpgradeModal
          onClose={() => setShowUpgrade(false)}
          onActivate={activateTrial}
        />
      )}
    </div>
  );
}
