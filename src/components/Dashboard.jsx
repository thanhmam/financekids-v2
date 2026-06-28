"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { LESSONS, TOPICS, LEVELS } from "@/data/lessons";

// Chip chủ đề (nhãn ngắn + emoji) — khớp phân tích taxonomy
const TOPIC_CHIPS = [
  { value: "all", emoji: "🌈", label: "Tất cả" },
  { value: "money-basics", emoji: "💰", label: "Tiền cơ bản" },
  { value: "saving", emoji: "🐷", label: "Tiết kiệm" },
  { value: "personal-finance", emoji: "📒", label: "Quản lý tài chính" },
  { value: "borrowing", emoji: "🤝", label: "Vay" },
  { value: "investing", emoji: "📈", label: "Đầu tư" },
  { value: "stocks", emoji: "📊", label: "Chứng khoán" },
  { value: "digital-assets", emoji: "🪙", label: "Tài sản số" },
];
const LEVEL_CHIPS = [
  { value: "all", emoji: "✨", label: "Mọi cấp độ" },
  { value: "foundation", emoji: "🌱", label: "Khởi đầu" },
  { value: "advanced", emoji: "🌳", label: "Vững vàng" },
];
import LessonCard from "@/components/LessonCard";
import BadgesPanel from "@/components/BadgesPanel";
import LoginModal from "@/components/LoginModal";
import XuXuMascot from "@/components/XuXuMascot";
import BottomNav from "@/components/BottomNav";
import { useAuth } from "@/contexts/AuthContext";
import { useProgress } from "@/hooks/useProgress";
import UpgradeModal from "@/components/UpgradeModal";

const DAILY_GOAL = 3;
const STREAK_DAYS = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];
const LEADERBOARD = [
  { rank: 1, name: "Bảo Nam", xp: "3.120", avatarBg: "#FFC93C", avatarBorder: "#E8A317", rankColor: "#E8A317" },
  { rank: 2, name: "Thu Hà",  xp: "2.890", avatarBg: "#C9D2C0", avatarBorder: "#AEB8A4", rankColor: "#9AA89E" },
  { rank: 3, name: "Đức Anh", xp: "2.640", avatarBg: "#E6B98A", avatarBorder: "#CD9A6B", rankColor: "#CD7F32" },
];

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

export default function Dashboard({ guest = false }) {
  const router = useRouter();
  const { user, profile, isPro, activateTrial } = useAuth();
  const { completed, totalXP } = useProgress();

  const [selectedTopic, setSelectedTopic] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [showLogin, setShowLogin] = useState(false);
  const [showBadges, setShowBadges] = useState(false);
  const [showUpgrade, setShowUpgrade] = useState(false);

  // Chế độ xem trước (khách): chặn vào bài học, yêu cầu đăng nhập
  const requireLogin = () => setShowLogin(true);
  const openLesson = (lessonId) => {
    if (guest) { requireLogin(); return; }
    router.push(`/game/${lessonId}`);
  };

  const tip = useMemo(() => TIPS[Math.floor(Math.random() * TIPS.length)], []);

  const filteredLessons = LESSONS.filter(
    (l) =>
      (selectedTopic === "all" || l.topic === selectedTopic) &&
      (selectedLevel === "all" || l.level === selectedLevel)
  );
  const continueLesson = LESSONS.find(l => !completed.includes(l.id));
  const streak = profile?.streak || 0;
  const dailyDone = Math.min(completed.length, DAILY_GOAL);
  const dailyPct = Math.round((dailyDone / DAILY_GOAL) * 100);
  const completedPct = LESSONS.length > 0 ? Math.round(completed.length / LESSONS.length * 100) : 0;

  const displayName = profile?.displayName || (user ? "Bạn nhỏ" : "XuXu");

  const AgeFilterBar = () => (
    <div style={{ marginBottom: 14 }}>
      {/* Chủ đề */}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 8 }}>
        {TOPIC_CHIPS.map(t => {
          const active = selectedTopic === t.value;
          return (
            <button
              key={t.value}
              className="btn-press"
              onClick={() => setSelectedTopic(t.value)}
              style={{
                display: "flex", alignItems: "center", gap: 6,
                padding: "7px 14px", borderRadius: 20,
                font: "700 13px 'Nunito'", border: "none", cursor: "pointer",
                background: active ? "#16C172" : "#fff",
                color: active ? "#fff" : "#5B7065",
                boxShadow: active ? "0 4px 0 #0E9E5C" : "0 2px 8px rgba(21,57,42,.07)",
                transform: active ? "translateY(-1px)" : "none",
                transition: "all .15s ease",
              }}
            >
              <span>{t.emoji}</span>
              <span>{t.label}</span>
            </button>
          );
        })}
      </div>
      {/* Cấp độ */}
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
        {LEVEL_CHIPS.map(lv => {
          const active = selectedLevel === lv.value;
          return (
            <button
              key={lv.value}
              className="btn-press"
              onClick={() => setSelectedLevel(lv.value)}
              style={{
                display: "flex", alignItems: "center", gap: 5,
                padding: "5px 12px", borderRadius: 16,
                font: "700 12px 'Nunito'", border: "1.5px solid", cursor: "pointer",
                background: active ? "#EAFBF1" : "transparent",
                borderColor: active ? "#16C172" : "#E0E8E2",
                color: active ? "#0E7A4E" : "#9AA89E",
                transition: "all .15s ease",
              }}
            >
              <span>{lv.emoji}</span>
              <span>{lv.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );

  // CTA "Cá nhân hóa" — khung 3 cách học (chủ đề · cấp độ · cá nhân hóa)
  const PersonalizeCTA = () => (
    <button
      onClick={() => router.push("/personalize")}
      className="btn-press"
      style={{
        width: "100%", textAlign: "left", display: "flex", alignItems: "center", gap: 12,
        background: "linear-gradient(135deg, #8B5CF6, #7C4DEC)", border: "none", borderRadius: 16,
        padding: "13px 16px", marginBottom: 12, cursor: "pointer", boxShadow: "0 4px 0 #6B30C9",
      }}
    >
      <span style={{ fontSize: 24, flexShrink: 0 }}>✨</span>
      <span style={{ flex: 1 }}>
        <span style={{ display: "flex", alignItems: "center", gap: 7 }}>
          <span style={{ font: "800 15px 'Baloo 2'", color: "#fff" }}>Cá nhân hóa lộ trình</span>
          <span style={{ background: "rgba(255,255,255,.25)", color: "#fff", borderRadius: 7, padding: "1px 7px", font: "800 10px 'Baloo 2'" }}>MỚI</span>
        </span>
        <span style={{ display: "block", font: "600 12px 'Nunito'", color: "rgba(255,255,255,.85)", marginTop: 2 }}>
          Trả lời 3 câu, XuXu thiết kế lộ trình riêng cho bạn
        </span>
      </span>
      <span style={{ color: "#fff", font: "800 18px 'Baloo 2'", flexShrink: 0 }}>→</span>
    </button>
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
              <button onClick={() => user ? router.push("/profile") : setShowLogin(true)} style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}>
                <XuXuMascot size={40} />
              </button>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div style={{ padding: "4px 16px 0" }}>

          {/* Guest preview banner */}
          {guest && (
            <button
              onClick={requireLogin}
              className="btn-press"
              style={{ width: "100%", textAlign: "left", display: "flex", alignItems: "center", gap: 10, background: "#FFF3DC", border: "2px solid #FFE0A6", borderRadius: 16, padding: "11px 14px", marginBottom: 11, cursor: "pointer" }}
            >
              <span style={{ fontSize: 20 }}>👀</span>
              <span style={{ flex: 1, font: "700 12px 'Nunito'", color: "#9A6A0E", lineHeight: 1.35 }}>
                Bạn đang <b>xem trước</b>. Đăng nhập để chơi và lưu tiến độ!
              </span>
              <span style={{ font: "800 12px 'Baloo 2'", color: "#fff", background: "#FF8A3D", borderRadius: 10, padding: "6px 12px", flexShrink: 0 }}>Đăng nhập</span>
            </button>
          )}

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
            <PersonalizeCTA />
            <AgeFilterBar />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {filteredLessons.map(lesson => (
                <LessonCard key={lesson.id} lesson={lesson} isCompleted={completed.includes(lesson.id)} guest={guest} onGuestClick={requireLogin} />
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
            XuXu ✨ · {LESSONS.length} bài học · 7 chủ đề tài chính
          </div>
        </div>

        <BottomNav />
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
              { icon: "◆", label: "Khám phá", action: () => router.push("/explore") },
              { icon: "▲", label: "Nhiệm vụ", action: () => router.push("/tasks") },
              { icon: "♛", label: "Xếp hạng", action: () => router.push("/leaderboard") },
              { icon: "◉", label: "Cửa hàng", action: () => router.push("/shop") },
              { icon: "☺", label: "Hồ sơ", action: () => router.push("/profile") },
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

          {isPro ? (
            <div style={{ marginTop: "auto", background: "linear-gradient(145deg, #7C4DEC, #8B5CF6)", borderRadius: 16, padding: 14, color: "#fff" }}>
              <div style={{ font: "800 15px 'Baloo 2'", marginBottom: 2 }}>◆ XuXu Pro · Active</div>
              <div style={{ font: "600 11px 'Nunito'", color: "rgba(255,255,255,.8)" }}>Tim vô hạn · 2× XP · không quảng cáo</div>
            </div>
          ) : (
            <div style={{ marginTop: "auto", background: "#15392A", borderRadius: 16, padding: 14, color: "#fff" }}>
              <div style={{ font: "800 15px 'Baloo 2'" }}>XuXu Pro</div>
              <div style={{ font: "600 11px 'Nunito'", color: "rgba(255,255,255,.72)", margin: "3px 0 10px" }}>Tim vô hạn · không quảng cáo</div>
              <button
                onClick={() => setShowUpgrade(true)}
                style={{ background: "#FFC93C", color: "#7A4E00", borderRadius: 11, padding: "9px 0", textAlign: "center", font: "800 13px 'Baloo 2'", boxShadow: "0 4px 0 #D99312", border: "none", cursor: "pointer", width: "100%" }}
              >DÙNG THỬ</button>
            </div>
          )}
        </div>

        {/* ── MAIN ── */}
        <div style={{ flex: 1, height: "100vh", overflowY: "auto", padding: "24px 28px" }}>

          {/* Guest preview banner */}
          {guest && (
            <button
              onClick={requireLogin}
              className="btn-press"
              style={{ width: "100%", textAlign: "left", display: "flex", alignItems: "center", gap: 12, background: "#FFF3DC", border: "2px solid #FFE0A6", borderRadius: 16, padding: "13px 18px", marginBottom: 18, cursor: "pointer" }}
            >
              <span style={{ fontSize: 22 }}>👀</span>
              <span style={{ flex: 1, font: "700 13px 'Nunito'", color: "#9A6A0E" }}>
                Bạn đang <b>xem trước</b> XuXu. Đăng nhập để chơi quiz và lưu tiến độ học của bạn!
              </span>
              <span style={{ font: "800 13px 'Baloo 2'", color: "#fff", background: "#FF8A3D", borderRadius: 11, padding: "9px 16px", flexShrink: 0, boxShadow: "0 3px 0 #D9701E" }}>Đăng nhập / Đăng ký</span>
            </button>
          )}

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
            <PersonalizeCTA />
            <AgeFilterBar />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
              {filteredLessons.map(lesson => (
                <LessonCard key={lesson.id} lesson={lesson} isCompleted={completed.includes(lesson.id)} guest={guest} onGuestClick={requireLogin} />
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
        <div style={{ width: 300, flexShrink: 0, background: "#fff", borderLeft: "2px solid #ECF1E6", padding: "24px 20px", height: "100vh", overflowY: "auto" }}>

          {/* Leaderboard (full) */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
            <span style={{ font: "800 16px 'Baloo 2'", color: "#15392A" }}>Bảng xếp hạng</span>
            <span style={{ background: "#FFF8E6", color: "#9A6A0E", borderRadius: 11, padding: "4px 10px", font: "700 11px 'Nunito'" }}>Hạng Vàng</span>
          </div>
          <div style={{ border: "2px solid #ECF1E6", borderRadius: 18, padding: 14, marginBottom: 18 }}>
            {LEADERBOARD.map(e => (
              <div key={e.rank} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 9 }}>
                <span style={{ width: 16, font: "800 13px 'Baloo 2'", color: e.rankColor }}>{e.rank}</span>
                <div style={{ width: 28, height: 28, borderRadius: "50%", background: e.avatarBg, border: `2px solid ${e.avatarBorder}`, flexShrink: 0 }} />
                <span style={{ flex: 1, font: "700 13px 'Nunito'", color: "#34453B" }}>{e.name}</span>
                <span style={{ font: "800 13px 'Baloo 2'", color: "#5B7065" }}>{e.xp}</span>
              </div>
            ))}
            {/* You row */}
            <div style={{ display: "flex", alignItems: "center", gap: 10, background: "#EAFBF1", borderRadius: 11, padding: "7px 8px", margin: "2px -8px 0" }}>
              <span style={{ width: 16, font: "800 13px 'Baloo 2'", color: "#16C172" }}>4</span>
              <XuXuMascot size={28} />
              <span style={{ flex: 1, font: "800 13px 'Nunito'", color: "#0E9E5C" }}>{displayName} (Bạn)</span>
              <span style={{ font: "800 13px 'Baloo 2'", color: "#0E9E5C" }}>{totalXP.toLocaleString("de-DE")}</span>
            </div>
            <div style={{ font: "600 11px 'Nunito'", color: "#9AA89E", textAlign: "center", marginTop: 12 }}>
              Top 7 thăng hạng · còn 3 ngày
            </div>
          </div>

          {/* Daily goal */}
          <div style={{ font: "800 16px 'Baloo 2'", color: "#15392A", marginBottom: 12 }}>Mục tiêu hôm nay</div>
          <div style={{ border: "2px solid #ECF1E6", borderRadius: 18, padding: 16, marginBottom: 18 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 12 }}>
              <div style={{ position: "relative", width: 56, height: 56, flexShrink: 0 }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: `conic-gradient(#16C172 ${dailyPct}%, #ECF1E6 0)` }} />
                <div style={{ position: "absolute", inset: 7, borderRadius: "50%", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", font: "800 14px 'Baloo 2'", color: "#15392A" }}>{dailyPct}%</div>
              </div>
              <div>
                <div style={{ font: "800 15px 'Baloo 2'", color: "#15392A" }}>{dailyDone} / {DAILY_GOAL} bài học</div>
                <div style={{ font: "600 11px 'Nunito'", color: "#9AA89E", marginTop: 2 }}>Còn {DAILY_GOAL - dailyDone} bài · +{(DAILY_GOAL - dailyDone) * 10} xu là đạt</div>
              </div>
            </div>
            <div style={{ height: 10, borderRadius: 7, background: "#ECF1E6", overflow: "hidden" }}>
              <div style={{ width: `${dailyPct}%`, height: "100%", background: "#16C172", transition: "width .5s ease" }} />
            </div>
          </div>

          {/* Streak card with 7-day bars */}
          <div style={{ background: "linear-gradient(160deg, #FF9A4D, #FF7A2E)", borderRadius: 18, padding: 18, color: "#fff", marginBottom: 18, boxShadow: "0 5px 0 #E0631C" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
              <span style={{ font: "800 40px 'Baloo 2'", lineHeight: 1, textShadow: "0 3px 0 rgba(0,0,0,.15)" }}>{streak}</span>
              <div>
                <div style={{ font: "800 16px 'Baloo 2'" }}>ngày streak!</div>
                <div style={{ font: "600 11px 'Nunito'", color: "rgba(255,255,255,.88)", marginTop: 2 }}>Học hôm nay để giữ lửa nhé</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 5 }}>
              {STREAK_DAYS.map((d, i) => {
                const state = i < 6 ? (i < Math.min(streak, 6) ? "done" : "empty") : (streak >= 7 ? "done" : "today");
                return (
                  <div key={d} style={{ flex: 1, height: 26, borderRadius: 8, background: state === "done" ? "rgba(255,255,255,.85)" : "rgba(255,255,255,.3)", border: state === "today" ? "2px dashed rgba(255,255,255,.7)" : "none", display: "flex", alignItems: "center", justifyContent: "center", color: state === "done" ? "#FF7A2E" : "#fff", font: `800 ${state === "today" ? 11 : 12}px 'Baloo 2'` }}>
                    {state === "done" ? "✓" : state === "today" ? "★" : d}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Tips */}
          <div style={{ font: "800 15px 'Baloo 2'", color: "#15392A", marginBottom: 10 }}>Mẹo của XuXu</div>
          <div style={{ border: "2px dashed #DDE6D6", borderRadius: 18, padding: 14, display: "flex", gap: 11, alignItems: "flex-start" }}>
            <XuXuMascot size={34} />
            <div style={{ font: "600 12px 'Nunito'", color: "#34453B", lineHeight: 1.5 }}>
              <b>Mẹo của XuXu:</b> {tip}
            </div>
          </div>
        </div>
      </div>

      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
      {showUpgrade && <UpgradeModal onClose={() => setShowUpgrade(false)} onActivate={activateTrial} />}
    </>
  );
}
