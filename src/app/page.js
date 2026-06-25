"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { LESSONS, AGE_GROUPS, getLessonsByAgeGroup } from "@/data/lessons";
import LessonCard from "@/components/LessonCard";
import BadgesPanel from "@/components/BadgesPanel";
import LoginModal from "@/components/LoginModal";
import XuXuMascot from "@/components/XuXuMascot";
import { useAuth } from "@/contexts/AuthContext";
import { useProgress } from "@/hooks/useProgress";

const DAILY_GOAL = 3;

const TIPS = [
  "Để dành 10% mỗi khi nhận tiền nhé!",
  "Tiết kiệm nhỏ mỗi ngày, lớn lên giàu to!",
  "Chi tiêu có kế hoạch = không bao giờ \"0 xu\".",
  "Quy tắc 50/30/20: thử áp dụng ngay hôm nay!",
  "Đầu tư sớm 1 ngày, hưởng lợi cả đời!",
];

function getGreeting() {
  const h = new Date().getHours();
  if (h < 12) return "Chào buổi sáng,";
  if (h < 18) return "Chào buổi chiều,";
  return "Chào buổi tối,";
}

export default function Home() {
  const router = useRouter();
  const { user, profile, logout } = useAuth();
  const { completed, totalXP } = useProgress();

  const [selectedAgeGroup, setSelectedAgeGroup] = useState("all");
  const [showLogin, setShowLogin] = useState(false);
  const [showBadges, setShowBadges] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

  const tip = useMemo(() => TIPS[Math.floor(Math.random() * TIPS.length)], []);

  const filteredLessons = getLessonsByAgeGroup(selectedAgeGroup);
  const continueLesson = LESSONS.find(l => !completed.includes(l.id));
  const streak = profile?.streak || 0;
  const dailyDone = Math.min(completed.length, DAILY_GOAL);
  const dailyPct = Math.round((dailyDone / DAILY_GOAL) * 100);
  const completedPct = LESSONS.length > 0 ? Math.round(completed.length / LESSONS.length * 100) : 0;

  return (
    <main style={{ minHeight: "100vh", background: "#F4F8EF", paddingBottom: 80 }}>

      {/* ── TOP HEADER ── */}
      <div style={{ position: "sticky", top: 0, zIndex: 30, background: "#F4F8EF", padding: "12px 16px 8px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div style={{ font: "600 12px 'Nunito'", color: "#9AA89E" }}>{getGreeting()}</div>
            <div style={{ font: "800 20px 'Baloo 2'", color: "#15392A", lineHeight: 1.1 }}>
              {profile?.displayName || (user ? "Bạn nhỏ" : "XuXu")}!
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 4, background: "#FFF3DC", borderRadius: 16, padding: "4px 10px" }}>
              <span style={{ color: "#FF8A3D", font: "800 13px 'Baloo 2'" }}>▲</span>
              <span style={{ font: "800 13px 'Baloo 2'", color: "#15392A" }}>{streak}</span>
            </div>
            <button
              onClick={() => user ? setShowUserMenu(!showUserMenu) : setShowLogin(true)}
              style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
            >
              <XuXuMascot size={40} />
            </button>
          </div>
        </div>
      </div>

      {/* ── CONTENT ── */}
      <div style={{ padding: "4px 16px 0" }}>

        {/* Daily goal */}
        <div style={{ background: "#15392A", borderRadius: 20, padding: "15px 16px", color: "#fff", display: "flex", alignItems: "center", gap: 15, marginBottom: 11 }}>
          <div style={{ position: "relative", width: 60, height: 60, flexShrink: 0 }}>
            <div style={{ width: 60, height: 60, borderRadius: "50%", background: `conic-gradient(#16C172 ${dailyPct}%, rgba(255,255,255,.15) 0)` }} />
            <div style={{ position: "absolute", inset: 7, borderRadius: "50%", background: "#15392A", display: "flex", alignItems: "center", justifyContent: "center", font: "800 14px 'Baloo 2'", color: "#fff" }}>
              {dailyPct}%
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ font: "800 16px 'Baloo 2'" }}>Mục tiêu hôm nay</div>
            <div style={{ font: "600 12px 'Nunito'", color: "rgba(255,255,255,.7)", marginTop: 2 }}>
              {dailyDone}/{DAILY_GOAL} bài · còn +{(DAILY_GOAL - dailyDone) * 10} xu
            </div>
          </div>
        </div>

        {/* Continue lesson */}
        {continueLesson && (
          <div style={{ background: "#fff", border: "2px solid #ECF1E6", borderRadius: 20, padding: 14, marginBottom: 11 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 9 }}>
              <span style={{ font: "800 15px 'Baloo 2'", color: "#15392A" }}>Tiếp tục: {continueLesson.title}</span>
              <span style={{ background: "#E3F7EC", color: "#0E9E5C", borderRadius: 12, padding: "3px 9px", font: "700 11px 'Nunito'" }}>
                Bài {completed.length + 1}/{LESSONS.length}
              </span>
            </div>
            <div style={{ height: 12, borderRadius: 8, background: "#ECF1E6", overflow: "hidden", marginBottom: 11 }}>
              <div style={{ width: `${completedPct}%`, height: "100%", background: "#16C172", boxShadow: "inset 0 3px 0 rgba(255,255,255,.35)", transition: "width .6s ease" }} />
            </div>
            <button
              className="btn-press"
              onClick={() => router.push(`/game/${continueLesson.id}`)}
              style={{ background: "#16C172", color: "#fff", borderRadius: 13, boxShadow: "0 4px 0 #0E9E5C", padding: "11px 0", textAlign: "center", font: "800 14px 'Baloo 2'", width: "100%", border: "none", cursor: "pointer" }}
            >
              HỌC TIẾP
            </button>
          </div>
        )}

        {/* All done */}
        {!continueLesson && completed.length > 0 && (
          <div style={{ background: "#E3F7EC", border: "2px solid #16C172", borderRadius: 20, padding: "16px 14px", marginBottom: 11, textAlign: "center" }}>
            <div style={{ font: "800 20px 'Baloo 2'", color: "#15392A" }}>🎉 Hoàn thành tất cả!</div>
            <div style={{ font: "600 13px 'Nunito'", color: "#5B7065", marginTop: 4 }}>Bạn đã học hết {LESSONS.length} bài. Thử chơi lại nhé!</div>
          </div>
        )}

        {/* Challenge + Streak tiles */}
        <div style={{ display: "flex", gap: 11, marginBottom: 11 }}>
          <button
            className="btn-press"
            onClick={() => router.push("/leaderboard")}
            style={{ flex: 1, background: "#F1E9FF", borderRadius: 18, padding: 13, border: "none", cursor: "pointer", textAlign: "left" }}
          >
            <div style={{ color: "#8B5CF6", font: "800 19px 'Baloo 2'" }}>◆</div>
            <div style={{ font: "800 13px 'Baloo 2'", color: "#5B2EC4", marginTop: 5 }}>Thử thách</div>
            <div style={{ font: "600 11px 'Nunito'", color: "#8B6FD0" }}>Đố vui · +50 xu</div>
          </button>
          <button
            className="btn-press"
            style={{ flex: 1, background: "#FFEEDD", borderRadius: 18, padding: 13, border: "none", cursor: "pointer", textAlign: "left" }}
          >
            <div style={{ color: "#FF8A3D", font: "800 19px 'Baloo 2'" }}>▲</div>
            <div style={{ font: "800 13px 'Baloo 2'", color: "#C25E18", marginTop: 5 }}>Streak {streak}</div>
            <div style={{ font: "600 11px 'Nunito'", color: "#D98A4D" }}>Giữ phong độ!</div>
          </button>
        </div>

        {/* XuXu tip */}
        <div style={{ background: "#fff", border: "2px dashed #DDE6D6", borderRadius: 18, padding: "11px 13px", display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
          <XuXuMascot size={32} />
          <div style={{ font: "600 12px 'Nunito'", color: "#34453B", lineHeight: 1.45 }}>
            <b>Mẹo của XuXu:</b> {tip}
          </div>
        </div>

        {/* Badges panel (collapsible) */}
        {showBadges && (
          <div style={{ marginBottom: 14 }}>
            <BadgesPanel earnedIds={profile?.badges || []} />
          </div>
        )}

        {/* Lessons section */}
        <div style={{ marginBottom: 4 }}>
          <h2 style={{ font: "800 18px 'Baloo 2'", color: "#15392A", marginBottom: 10 }}>📚 Tất cả bài học</h2>

          {/* Age group filter */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 14 }}>
            {AGE_GROUPS.map(group => (
              <button
                key={group.value}
                className="btn-press"
                onClick={() => setSelectedAgeGroup(group.value)}
                style={{
                  display: "flex", alignItems: "center", gap: 6,
                  padding: "7px 14px", borderRadius: 20,
                  font: "700 13px 'Nunito'", border: "none", cursor: "pointer",
                  background: selectedAgeGroup === group.value ? "#16C172" : "#fff",
                  color: selectedAgeGroup === group.value ? "#fff" : "#5B7065",
                  boxShadow: selectedAgeGroup === group.value ? "0 4px 0 #0E9E5C" : "0 2px 8px rgba(21,57,42,.07)",
                  transform: selectedAgeGroup === group.value ? "translateY(-1px)" : "none",
                  transition: "all .15s ease",
                }}
              >
                <span>{group.emoji}</span>
                <span>{group.label}</span>
              </button>
            ))}
          </div>

          {/* Lesson grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {filteredLessons.map(lesson => (
              <LessonCard key={lesson.id} lesson={lesson} isCompleted={completed.includes(lesson.id)} />
            ))}
          </div>

          {filteredLessons.length === 0 && (
            <div style={{ textAlign: "center", padding: "40px 0", color: "#9AA89E", font: "700 14px 'Nunito'" }}>
              <div style={{ fontSize: 40, marginBottom: 8 }}>🔍</div>
              Không có bài học nào
            </div>
          )}
        </div>

        {/* Footer */}
        <div style={{ textAlign: "center", padding: "20px 0 4px", font: "600 11px 'Nunito'", color: "#C2CDBA" }}>
          XuXu ✨ · {LESSONS.length} bài học · 3 nhóm tuổi
        </div>
      </div>

      {/* ── BOTTOM NAV ── */}
      <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, display: "flex", justifyContent: "space-around", alignItems: "center", background: "#fff", borderTop: "2px solid #ECF1E6", padding: "10px 0 14px", zIndex: 40 }}>
        <button
          onClick={() => setActiveTab("home")}
          style={{ background: "none", border: "none", cursor: "pointer", padding: "0 10px" }}
        >
          <div style={{ width: 30, height: 30, borderRadius: 9, background: activeTab === "home" ? "#16C172" : "transparent", display: "flex", alignItems: "center", justifyContent: "center", color: activeTab === "home" ? "#fff" : "#C2CDBA", font: "800 16px 'Baloo 2'", transition: "all .15s" }}>⌂</div>
        </button>

        <button
          onClick={() => router.push("/leaderboard")}
          style={{ background: "none", border: "none", cursor: "pointer", padding: "0 10px" }}
        >
          <div style={{ color: "#C2CDBA", font: "800 18px 'Baloo 2'" }}>◆</div>
        </button>

        <button
          onClick={() => setShowBadges(!showBadges)}
          style={{ background: "none", border: "none", cursor: "pointer", padding: "0 10px" }}
        >
          <div style={{ color: showBadges ? "#FF8A3D" : "#C2CDBA", font: "800 18px 'Baloo 2'", transition: "color .15s" }}>▲</div>
        </button>

        <button
          onClick={() => router.push("/leaderboard")}
          style={{ background: "none", border: "none", cursor: "pointer", padding: "0 10px" }}
        >
          <div style={{ color: "#C2CDBA", font: "800 18px 'Baloo 2'" }}>♛</div>
        </button>

        <button
          onClick={() => user ? setShowUserMenu(!showUserMenu) : setShowLogin(true)}
          style={{ background: "none", border: "none", cursor: "pointer", padding: "0 10px" }}
        >
          <div style={{ width: 30, height: 30, borderRadius: "50%", background: "#FFC93C", border: user ? "2.5px solid #E8A317" : "2.5px dashed #FFB877", boxShadow: user ? "0 0 0 2.5px #16C172" : "none", transition: "all .15s" }} />
        </button>
      </div>

      {/* ── USER MENU ── */}
      {showUserMenu && (
        <>
          <div style={{ position: "fixed", inset: 0, zIndex: 40 }} onClick={() => setShowUserMenu(false)} />
          <div style={{ position: "fixed", bottom: 76, right: 16, zIndex: 50, background: "#fff", borderRadius: 20, boxShadow: "0 8px 32px rgba(21,57,42,.14)", border: "2px solid #ECF1E6", overflow: "hidden", minWidth: 185, animation: "slideUp .25s ease" }}>
            <div style={{ padding: "12px 14px 10px", borderBottom: "1px solid #ECF1E6" }}>
              <div style={{ font: "800 15px 'Baloo 2'", color: "#15392A" }}>{profile?.displayName}</div>
              <div style={{ font: "600 12px 'Nunito'", color: "#FF8A3D", marginTop: 2 }}>⭐ {totalXP} XP</div>
            </div>
            <button
              onClick={() => { setShowBadges(!showBadges); setShowUserMenu(false); }}
              style={{ width: "100%", textAlign: "left", padding: "10px 14px", font: "700 13px 'Nunito'", color: "#15392A", background: "none", border: "none", cursor: "pointer" }}
            >
              🏅 Huy hiệu
            </button>
            <button
              onClick={() => { logout(); setShowUserMenu(false); }}
              style={{ width: "100%", textAlign: "left", padding: "10px 14px", font: "700 13px 'Nunito'", color: "#FF5366", background: "none", border: "none", cursor: "pointer", borderTop: "1px solid #ECF1E6" }}
            >
              🚪 Đăng xuất
            </button>
          </div>
        </>
      )}

      {/* ── LOGIN MODAL ── */}
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
    </main>
  );
}
