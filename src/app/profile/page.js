"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { useProgress } from "@/hooks/useProgress";
import { BADGES, getBadgeById } from "@/lib/badges";
import XuXuMascot from "@/components/XuXuMascot";
import LoginModal from "@/components/LoginModal";
import { useState } from "react";
import BottomNav from "@/components/BottomNav";

const BADGE_ICONS = {
  first_lesson: { bg: "#FFF3DC", border: "#FFE0B8", color: "#FF8A3D" },
  five_lessons:  { bg: "#E3F7EC", border: "#BFEBD2", color: "#16C172" },
  ten_lessons:   { bg: "#F1E9FF", border: "#DCC9FB", color: "#8B5CF6" },
  twenty_lessons:{ bg: "#E9F3FF", border: "#C3DFF8", color: "#2BA3FF" },
  xp_500:        { bg: "#FFF8E6", border: "#FFE8A3", color: "#FFC93C" },
  xp_1000:       { bg: "#FFF3DC", border: "#FFE0B8", color: "#FF8A3D" },
  xp_2000:       { bg: "#F1E9FF", border: "#DCC9FB", color: "#8B5CF6" },
  all_ages:      { bg: "#FFE3E7", border: "#FFBCC4", color: "#FF5366" },
};

function StatCard({ icon, iconColor, value, label }) {
  return (
    <div style={{
      background: "#fff", border: "2px solid #ECF1E6", borderRadius: 16,
      padding: 12, display: "flex", alignItems: "center", gap: 10,
    }}>
      <span style={{ color: iconColor, font: "800 22px 'Baloo 2'" }}>{icon}</span>
      <div>
        <div style={{ font: "800 18px 'Baloo 2'", color: "#15392A" }}>{value}</div>
        <div style={{ font: "600 11px 'Nunito'", color: "#9AA89E" }}>{label}</div>
      </div>
    </div>
  );
}

export default function ProfilePage() {
  const router = useRouter();
  const { user, profile, logout } = useAuth();
  const { completed, totalXP } = useProgress();
  const [showLogin, setShowLogin] = useState(false);

  const streak = profile?.streak || 0;
  const xu = profile?.xu || 0;
  const displayName = profile?.displayName || (user ? "Bạn nhỏ" : "Khách");
  const earnedBadgeIds = profile?.badges || [];
  const joinedDate = profile?.createdAt?.toDate?.()?.toLocaleDateString("vi-VN", { month: "2-digit", year: "numeric" }) || "03/2026";

  if (!user) {
    return (
      <div style={{ minHeight: "100vh", background: "#F4F8EF", paddingBottom: 80 }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "70vh", padding: "0 24px", textAlign: "center" }}>
          <XuXuMascot size={90} />
          <div style={{ font: "800 22px 'Baloo 2'", color: "#15392A", marginTop: 20 }}>
            Đăng nhập để lưu tiến độ
          </div>
          <div style={{ font: "600 13px 'Nunito'", color: "#5B7065", marginTop: 6, lineHeight: 1.5 }}>
            Đăng nhập để lưu XP, streak và huy hiệu của bạn.
          </div>
          <button
            className="btn-press"
            onClick={() => setShowLogin(true)}
            style={{ marginTop: 24, padding: "14px 32px", borderRadius: 16, font: "800 15px 'Baloo 2'", color: "#fff", background: "#16C172", border: "none", boxShadow: "0 4px 0 #0E9E5C", cursor: "pointer" }}
          >
            ĐĂNG NHẬP
          </button>
          <button onClick={() => router.push("/")} style={{ marginTop: 12, background: "none", border: "none", font: "700 13px 'Nunito'", color: "#9AA89E", cursor: "pointer" }}>
            Tiếp tục không đăng nhập
          </button>
        </div>
        <BottomNav />
        {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "#F4F8EF", paddingBottom: 80 }}>

      {/* Header */}
      <div style={{
        background: "#fff", borderBottom: "2px solid #ECF1E6",
        padding: "14px 20px 16px", display: "flex", alignItems: "center", gap: 14,
        position: "sticky", top: 0, zIndex: 20,
      }}>
        <button
          onClick={() => router.push("/")}
          style={{ width: 40, height: 40, borderRadius: 12, background: "#F4F8EF", border: "2px solid #ECF1E6", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", padding: 0, flexShrink: 0 }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M11.5 15L6 9L11.5 3" stroke="#15392A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <div style={{ flex: 1, font: "800 20px 'Baloo 2'", color: "#15392A" }}>Hồ sơ</div>
        <button
          onClick={async () => { await logout(); router.push("/"); }}
          style={{ background: "none", border: "none", font: "700 13px 'Nunito'", color: "#FF5366", cursor: "pointer" }}
        >
          Đăng xuất
        </button>
      </div>

      <div style={{ padding: "16px 18px 0" }}>

        {/* User info */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
          <XuXuMascot size={66} />
          <div>
            <div style={{ font: "800 20px 'Baloo 2'", color: "#15392A" }}>{displayName}</div>
            <div style={{ font: "700 13px 'Nunito'", color: "#9AA89E" }}>
              Tham gia {joinedDate}
            </div>
          </div>
        </div>

        {/* Stats grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 20 }}>
          <StatCard icon="▲" iconColor="#FF8A3D" value={streak} label="ngày streak" />
          <StatCard icon="★" iconColor="#FFC93C" value={totalXP.toLocaleString()} label="tổng XP" />
          <div style={{ background: "#fff", border: "2px solid #ECF1E6", borderRadius: 16, padding: 12, display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 26, height: 26, borderRadius: "50%", background: "#FFC93C", border: "2px solid #E8A317", color: "#7A4E00", font: "800 13px 'Baloo 2'" }}>X</span>
            <div>
              <div style={{ font: "800 18px 'Baloo 2'", color: "#15392A" }}>{xu.toLocaleString()}</div>
              <div style={{ font: "600 11px 'Nunito'", color: "#9AA89E" }}>xu tích luỹ</div>
            </div>
          </div>
          <StatCard icon="♛" iconColor="#8B5CF6" value="Vàng" label="hạng đấu" />
        </div>

        {/* Progress */}
        <div style={{ background: "#fff", border: "2px solid #ECF1E6", borderRadius: 18, padding: 14, marginBottom: 18 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
            <span style={{ font: "800 15px 'Baloo 2'", color: "#15392A" }}>Tiến độ học</span>
            <span style={{ font: "700 12px 'Nunito'", color: "#0E9E5C" }}>{completed.length}/45 bài</span>
          </div>
          <div style={{ height: 12, borderRadius: 8, background: "#ECF1E6", overflow: "hidden" }}>
            <div style={{
              width: `${Math.round((completed.length / 45) * 100)}%`,
              height: "100%", background: "#16C172",
              boxShadow: "inset 0 3px 0 rgba(255,255,255,.35)",
              transition: "width .6s ease",
            }} />
          </div>
        </div>

        {/* Badges */}
        <div style={{ font: "800 16px 'Baloo 2'", color: "#15392A", marginBottom: 10 }}>Huy hiệu</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10, marginBottom: 20 }}>
          {BADGES.map(badge => {
            const earned = earnedBadgeIds.includes(badge.id);
            const style = BADGE_ICONS[badge.id] || { bg: "#F4F8EF", border: "#ECF1E6", color: "#9AA89E" };
            return (
              <div key={badge.id} style={{ textAlign: "center" }}>
                <div style={{
                  width: 56, height: 56, borderRadius: 18, margin: "0 auto",
                  background: earned ? style.bg : "#F4F8EF",
                  border: `2px solid ${earned ? style.border : "#ECF1E6"}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: earned ? 24 : 22,
                  opacity: earned ? 1 : 0.5,
                  filter: earned ? "none" : "grayscale(1)",
                }}>
                  {earned ? badge.emoji : "🔒"}
                </div>
                <div style={{ font: "600 9px 'Nunito'", color: earned ? "#5B7065" : "#C2CDBA", marginTop: 5, lineHeight: 1.2 }}>
                  {earned ? badge.name : "Bí ẩn"}
                </div>
              </div>
            );
          })}
        </div>

        {/* League card */}
        <div style={{
          background: "#15392A", borderRadius: 18, padding: "14px 16px",
          display: "flex", alignItems: "center", justifyContent: "space-between", color: "#fff",
        }}>
          <div>
            <div style={{ font: "800 15px 'Baloo 2'" }}>Hạng Vàng</div>
            <div style={{ font: "600 11px 'Nunito'", color: "rgba(255,255,255,.7)" }}>Top 12 · còn 3 ngày</div>
          </div>
          <button
            onClick={() => router.push("/leaderboard")}
            style={{ background: "none", border: "none", cursor: "pointer", color: "#FFC93C", font: "800 30px 'Baloo 2'" }}
          >
            ♛
          </button>
        </div>
      </div>

      <BottomNav />
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
    </div>
  );
}
