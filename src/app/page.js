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

function BackIcon({ color = "#15392A" }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M11.5 15L6 9L11.5 3" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
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

  const displayName = profile?.displayName || (user ? "Bạn nhỏ" : "XuXu");

  const AgeFilterBar = ({ cols = false }) => (
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
  );

  return (
    <>
      {/* ═══════════════════════════════════════════════
          MOBILE LAYOUT  (hidden on lg+)
      ═══════════════════════════════════════════════ */}
      <main className="lg:hidden" style={{ minHeight: "100vh", background: "#F4F8EF", paddingBottom: 80 }}>

        {/* TOP HEADER */}
        <div style={{ position: "sticky", top: 0, zIndex: 30, background: "#F4F8EF", padding: "12px 16px 8px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <div style={{ font: "600 12px 'Nunito'", color: "#9AA89E" }}>{getGreeting()}</div>
              <div style={{ font: "800 20px 'Baloo 2'", color: "#15392A", lineHeight: 1.1 }}>{displayName}!</div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 4, background: "#FFF3DC", borderRadius: 16, padding: "4px 10px" }}>
                <span style={{ color: "#FF8A3D", font: "800 13px 'Baloo 2'" }}>▲</span>
                <span style={{ font: "800 13px 'Baloo 2'", color: "#15392A" }}>{streak}</span>
              </div>
              <button onClick={() => user ? setShowUserMenu(!showUserMenu) : setShowLogin(true)} style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}>
                <XuXuMascot size={40} />
              </button>
            </div>
          </div>
        </div>

        {/* CONTENT */}
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

          {!continueLesson && completed.length > 0 && (
            <div style={{ background: "#E3F7EC", border: "2px solid #16C172", borderRadius: 20, padding: "16px 14px", marginBottom: 11, textAlign: "center" }}>
              <div style={{ font: "800 20px 'Baloo 2'", color: "#15392A" }}>🎉 Hoàn thành tất cả!</div>
              <div style={{ font: "600 13px 'Nunito'", color: "#5B7065", marginTop: 4 }}>Bạn đã học hết {LESSONS.length} bài. Thử chơi lại nhé!</div>
            </div>
          )}

          {/* Challenge + Streak tiles */}
          <div style={{ display: "flex", gap: 11, marginBottom: 11 }}>
            <button className="btn-press" onClick={() => router.push("/leaderboard")} style={{ flex: 1, background: "#F1E9FF", borderRadius: 18, padding: 13, border: "none", cursor: "pointer", textAlign: "left" }}>
              <div style={{ color: "#8B5CF6", font: "800 19px 'Baloo 2'" }}>◆</div>
              <div style={{ font: "800 13px 'Baloo 2'", color: "#5B2EC4", marginTop: 5 }}>Thử thách</div>
              <div style={{ font: "600 11px 'Nunito'", color: "#8B6FD0" }}>Đố vui · +50 xu</div>
            </button>
            <button className="btn-press" style={{ flex: 1, background: "#FFEEDD", borderRadius: 18, padding: 13, border: "none", cursor: "pointer", textAlign: "left" }}>
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
            <AgeFilterBar />
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

          <div style={{ textAlign: "center", padding: "20px 0 4px", font: "600 11px 'Nunito'", color: "#C2CDBA" }}>
            XuXu ✨ · {LESSONS.length} bài học · 3 nhóm tuổi
          </div>
        </div>

        {/* BOTTOM NAV */}
        <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, display: "flex", justifyContent: "space-around", alignItems: "center", background: "#fff", borderTop: "2px solid #ECF1E6", padding: "10px 0 14px", zIndex: 40 }}>
          <button onClick={() => setActiveTab("home")} style={{ background: "none", border: "none", cursor: "pointer", padding: "0 10px" }}>
            <div style={{ width: 30, height: 30, borderRadius: 9, background: activeTab === "home" ? "#16C172" : "transparent", display: "flex", alignItems: "center", justifyContent: "center", color: activeTab === "home" ? "#fff" : "#C2CDBA", font: "800 16px 'Baloo 2'", transition: "all .15s" }}>⌂</div>
          </button>
          <button onClick={() => router.push("/leaderboard")} style={{ background: "none", border: "none", cursor: "pointer", padding: "0 10px" }}>
            <div style={{ color: "#C2CDBA", font: "800 18px 'Baloo 2'" }}>◆</div>
          </button>
          <button onClick={() => setShowBadges(!showBadges)} style={{ background: "none", border: "none", cursor: "pointer", padding: "0 10px" }}>
            <div style={{ color: showBadges ? "#FF8A3D" : "#C2CDBA", font: "800 18px 'Baloo 2'", transition: "color .15s" }}>▲</div>
          </button>
          <button onClick={() => router.push("/leaderboard")} style={{ background: "none", border: "none", cursor: "pointer", padding: "0 10px" }}>
            <div style={{ color: "#C2CDBA", font: "800 18px 'Baloo 2'" }}>♛</div>
          </button>
          <button onClick={() => user ? setShowUserMenu(!showUserMenu) : setShowLogin(true)} style={{ background: "none", border: "none", cursor: "pointer", padding: "0 10px" }}>
            <div style={{ width: 30, height: 30, borderRadius: "50%", background: "#FFC93C", border: user ? "2.5px solid #E8A317" : "2.5px dashed #FFB877", boxShadow: user ? "0 0 0 2.5px #16C172" : "none", transition: "all .15s" }} />
          </button>
        </div>

        {/* USER MENU */}
        {showUserMenu && (
          <>
            <div style={{ position: "fixed", inset: 0, zIndex: 40 }} onClick={() => setShowUserMenu(false)} />
            <div style={{ position: "fixed", bottom: 76, right: 16, zIndex: 50, background: "#fff", borderRadius: 20, boxShadow: "0 8px 32px rgba(21,57,42,.14)", border: "2px solid #ECF1E6", overflow: "hidden", minWidth: 185, animation: "slideUp .25s ease" }}>
              <div style={{ padding: "12px 14px 10px", borderBottom: "1px solid #ECF1E6" }}>
                <div style={{ font: "800 15px 'Baloo 2'", color: "#15392A" }}>{profile?.displayName}</div>
                <div style={{ font: "600 12px 'Nunito'", color: "#FF8A3D", marginTop: 2 }}>⭐ {totalXP} XP</div>
              </div>
              <button onClick={() => { setShowBadges(!showBadges); setShowUserMenu(false); }} style={{ width: "100%", textAlign: "left", padding: "10px 14px", font: "700 13px 'Nunito'", color: "#15392A", background: "none", border: "none", cursor: "pointer" }}>
                🏅 Huy hiệu
              </button>
              <button onClick={() => { logout(); setShowUserMenu(false); }} style={{ width: "100%", textAlign: "left", padding: "10px 14px", font: "700 13px 'Nunito'", color: "#FF5366", background: "none", border: "none", cursor: "pointer", borderTop: "1px solid #ECF1E6" }}>
                🚪 Đăng xuất
              </button>
            </div>
          </>
        )}
      </main>

      {/* ═══════════════════════════════════════════════
          DESKTOP LAYOUT  (hidden on mobile)
      ═══════════════════════════════════════════════ */}
      <div className="hidden lg:flex" style={{ height: "100vh", background: "#F4F8EF", overflow: "hidden" }}>

        {/* ── LEFT SIDEBAR ── */}
        <div style={{ width: 236, flexShrink: 0, background: "#fff", borderRight: "2px solid #ECF1E6", padding: "22px 16px", display: "flex", flexDirection: "column", height: "100vh", overflowY: "auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "0 6px 22px" }}>
            <XuXuMascot size={40} />
            <div style={{ font: "800 24px 'Baloo 2'", color: "#16C172" }}>XuXu</div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {[
              { icon: "⌂", label: "Học", active: true, action: null },
              { icon: "◆", label: "Khám phá", action: () => router.push("/leaderboard") },
              { icon: "▲", label: "Nhiệm vụ", action: null },
              { icon: "♛", label: "Xếp hạng", action: () => router.push("/leaderboard") },
              { icon: "◉", label: "Cửa hàng", action: null },
              { icon: "☺", label: "Hồ sơ", action: () => user ? setShowUserMenu(!showUserMenu) : setShowLogin(true) },
            ].map(item => (
              <button
                key={item.label}
                onClick={item.action || undefined}
                style={{
                  display: "flex", alignItems: "center", gap: 13,
                  background: item.active ? "#EAFBF1" : "transparent",
                  border: item.active ? "2px solid #BFEBD2" : "2px solid transparent",
                  borderRadius: 14, padding: "11px 14px",
                  cursor: item.action ? "pointer" : "default",
                  textAlign: "left", width: "100%",
                }}
              >
                <span style={{ color: item.active ? "#16C172" : "#9AA89E", font: "800 18px 'Baloo 2'", width: 22, textAlign: "center" }}>{item.icon}</span>
                <span style={{ font: "800 15px 'Baloo 2'", color: item.active ? "#0E9E5C" : "#5B7065" }}>{item.label}</span>
              </button>
            ))}
          </div>

          <div style={{ marginTop: "auto", background: "#15392A", borderRadius: 16, padding: 14, color: "#fff" }}>
            <div style={{ font: "800 15px 'Baloo 2'" }}>XuXu Pro</div>
            <div style={{ font: "600 11px 'Nunito'", color: "rgba(255,255,255,.72)", margin: "3px 0 10px" }}>Tim vô hạn · không quảng cáo</div>
            <div style={{ background: "#FFC93C", color: "#7A4E00", borderRadius: 11, padding: "9px 0", textAlign: "center", font: "800 13px 'Baloo 2'", boxShadow: "0 4px 0 #D99312" }}>DÙNG THỬ</div>
          </div>
        </div>

        {/* ── MAIN ── */}
        <div style={{ flex: 1, height: "100vh", overflowY: "auto", padding: "24px 28px" }}>

          {/* Greeting + stats */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
            <div>
              <div style={{ font: "700 13px 'Nunito'", color: "#9AA89E" }}>{getGreeting()}</div>
              <div style={{ font: "800 26px 'Baloo 2'", color: "#15392A" }}>{displayName}!</div>
            </div>
            <div style={{ display: "flex", gap: 9 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, background: "#FFF3DC", borderRadius: 18, padding: "7px 13px" }}>
                <span style={{ color: "#FF8A3D", font: "800 16px 'Baloo 2'" }}>▲</span>
                <span style={{ font: "800 15px 'Baloo 2'", color: "#15392A" }}>{streak}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6, background: "#fff", border: "1.5px solid #ECF1E6", borderRadius: 18, padding: "7px 13px" }}>
                <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 20, height: 20, borderRadius: "50%", background: "#FFC93C", border: "2px solid #E8A317", color: "#7A4E00", font: "800 11px 'Baloo 2'" }}>X</span>
                <span style={{ font: "800 15px 'Baloo 2'", color: "#15392A" }}>{totalXP}</span>
              </div>
            </div>
          </div>

          {/* Daily goal wide */}
          <div style={{ background: "#15392A", borderRadius: 22, padding: "20px 24px", color: "#fff", display: "flex", alignItems: "center", gap: 22, marginBottom: 18 }}>
            <div style={{ position: "relative", width: 74, height: 74, flexShrink: 0 }}>
              <div style={{ width: 74, height: 74, borderRadius: "50%", background: `conic-gradient(#16C172 ${dailyPct}%, rgba(255,255,255,.15) 0)` }} />
              <div style={{ position: "absolute", inset: 9, borderRadius: "50%", background: "#15392A", display: "flex", alignItems: "center", justifyContent: "center", font: "800 18px 'Baloo 2'" }}>{dailyPct}%</div>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ font: "800 19px 'Baloo 2'" }}>Mục tiêu hôm nay</div>
              <div style={{ font: "600 13px 'Nunito'", color: "rgba(255,255,255,.72)", marginTop: 2 }}>
                Hoàn thành {dailyDone}/{DAILY_GOAL} bài · còn +{(DAILY_GOAL - dailyDone) * 10} xu là đạt mục tiêu
              </div>
            </div>
            {continueLesson && (
              <button
                onClick={() => router.push(`/game/${continueLesson.id}`)}
                style={{ background: "#16C172", color: "#fff", borderRadius: 14, boxShadow: "0 5px 0 #0B7A48", padding: "13px 22px", font: "800 15px 'Baloo 2'", border: "none", cursor: "pointer", flexShrink: 0 }}
              >
                HỌC TIẾP
              </button>
            )}
          </div>

          {/* Continue + tiles */}
          {continueLesson && (
            <div style={{ display: "flex", gap: 16, marginBottom: 18 }}>
              <div style={{ flex: "1.4 1 0", background: "#fff", border: "2px solid #ECF1E6", borderRadius: 20, padding: 18 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                  <span style={{ font: "800 17px 'Baloo 2'", color: "#15392A" }}>Tiếp tục: {continueLesson.title}</span>
                  <span style={{ background: "#E3F7EC", color: "#0E9E5C", borderRadius: 12, padding: "4px 11px", font: "700 12px 'Nunito'", flexShrink: 0, marginLeft: 8 }}>
                    Bài {completed.length + 1}/{LESSONS.length}
                  </span>
                </div>
                <div style={{ height: 14, borderRadius: 9, background: "#ECF1E6", overflow: "hidden", marginBottom: 14 }}>
                  <div style={{ width: `${completedPct}%`, height: "100%", background: "#16C172", boxShadow: "inset 0 3px 0 rgba(255,255,255,.35)" }} />
                </div>
                <button
                  onClick={() => router.push(`/game/${continueLesson.id}`)}
                  style={{ width: "100%", background: "#16C172", color: "#fff", borderRadius: 13, boxShadow: "0 4px 0 #0E9E5C", padding: "12px 0", font: "800 14px 'Baloo 2'", border: "none", cursor: "pointer" }}
                >
                  VÀO HỌC
                </button>
              </div>
              <div style={{ flex: "1 1 0", display: "flex", flexDirection: "column", gap: 12 }}>
                <button onClick={() => router.push("/leaderboard")} style={{ flex: 1, background: "#F1E9FF", borderRadius: 18, padding: 14, border: "none", cursor: "pointer", textAlign: "left" }}>
                  <div style={{ color: "#8B5CF6", font: "800 20px 'Baloo 2'" }}>◆</div>
                  <div style={{ font: "800 14px 'Baloo 2'", color: "#5B2EC4", marginTop: 4 }}>Thử thách</div>
                  <div style={{ font: "600 11px 'Nunito'", color: "#8B6FD0" }}>Đố vui · +50 xu</div>
                </button>
                <div style={{ flex: 1, background: "#FFEEDD", borderRadius: 18, padding: 14 }}>
                  <div style={{ color: "#FF8A3D", font: "800 20px 'Baloo 2'" }}>▲</div>
                  <div style={{ font: "800 14px 'Baloo 2'", color: "#C25E18", marginTop: 4 }}>Streak {streak}</div>
                  <div style={{ font: "600 11px 'Nunito'", color: "#D98A4D" }}>Giữ phong độ!</div>
                </div>
              </div>
            </div>
          )}

          {/* Lessons section */}
          <div>
            <div style={{ font: "800 16px 'Baloo 2'", color: "#15392A", marginBottom: 12 }}>Lộ trình của bạn</div>
            <AgeFilterBar />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
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
        </div>

        {/* ── RIGHT RAIL ── */}
        <div style={{ width: 288, flexShrink: 0, background: "#fff", borderLeft: "2px solid #ECF1E6", padding: "24px 20px", height: "100vh", overflowY: "auto" }}>

          {/* League widget */}
          <div style={{ border: "2px solid #ECF1E6", borderRadius: 18, padding: 16, marginBottom: 16 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
              <span style={{ font: "800 15px 'Baloo 2'", color: "#15392A" }}>Hạng Vàng</span>
              <span style={{ color: "#FFC93C", font: "800 22px 'Baloo 2'" }}>♛</span>
            </div>
            <button
              onClick={() => router.push("/leaderboard")}
              style={{ width: "100%", background: "#EAFBF1", border: "2px solid #BFEBD2", borderRadius: 12, padding: "11px 0", font: "800 13px 'Baloo 2'", color: "#0E9E5C", cursor: "pointer" }}
            >
              Xem bảng xếp hạng →
            </button>
            <div style={{ font: "600 11px 'Nunito'", color: "#9AA89E", textAlign: "center", marginTop: 10 }}>
              Top 7 thăng hạng tuần này
            </div>
          </div>

          {/* Streak card */}
          <div style={{ background: "linear-gradient(160deg, #FF9A4D, #FF7A2E)", borderRadius: 18, padding: 16, color: "#fff", marginBottom: 16, boxShadow: "0 5px 0 #E0631C" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ font: "800 30px 'Baloo 2'" }}>{streak}</span>
              <div>
                <div style={{ font: "800 14px 'Baloo 2'" }}>ngày streak</div>
                <div style={{ font: "600 11px 'Nunito'", color: "rgba(255,255,255,.85)" }}>Học hôm nay để giữ lửa!</div>
              </div>
            </div>
          </div>

          {/* Tip */}
          <div style={{ border: "2px dashed #DDE6D6", borderRadius: 18, padding: 14, display: "flex", gap: 11, alignItems: "flex-start" }}>
            <XuXuMascot size={34} />
            <div style={{ font: "600 12px 'Nunito'", color: "#34453B", lineHeight: 1.5 }}>
              <b>Mẹo của XuXu:</b> {tip}
            </div>
          </div>
        </div>
      </div>

      {/* ── SHARED MODALS ── */}
      {showUserMenu && (
        <>
          <div style={{ position: "fixed", inset: 0, zIndex: 40 }} onClick={() => setShowUserMenu(false)} />
          <div style={{ position: "fixed", bottom: 76, right: 16, zIndex: 50, background: "#fff", borderRadius: 20, boxShadow: "0 8px 32px rgba(21,57,42,.14)", border: "2px solid #ECF1E6", overflow: "hidden", minWidth: 185, animation: "slideUp .25s ease" }}
            className="lg:bottom-auto lg:top-16 lg:right-6">
            <div style={{ padding: "12px 14px 10px", borderBottom: "1px solid #ECF1E6" }}>
              <div style={{ font: "800 15px 'Baloo 2'", color: "#15392A" }}>{profile?.displayName}</div>
              <div style={{ font: "600 12px 'Nunito'", color: "#FF8A3D", marginTop: 2 }}>⭐ {totalXP} XP</div>
            </div>
            <button onClick={() => { setShowBadges(!showBadges); setShowUserMenu(false); }} style={{ width: "100%", textAlign: "left", padding: "10px 14px", font: "700 13px 'Nunito'", color: "#15392A", background: "none", border: "none", cursor: "pointer" }}>
              🏅 Huy hiệu
            </button>
            <button onClick={() => { logout(); setShowUserMenu(false); }} style={{ width: "100%", textAlign: "left", padding: "10px 14px", font: "700 13px 'Nunito'", color: "#FF5366", background: "none", border: "none", cursor: "pointer", borderTop: "1px solid #ECF1E6" }}>
              🚪 Đăng xuất
            </button>
          </div>
        </>
      )}
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
    </>
  );
}
