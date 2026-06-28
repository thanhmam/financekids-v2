"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LESSONS, TOPICS } from "@/data/lessons";
import XuXuMascot from "@/components/XuXuMascot";
import LoginModal from "@/components/LoginModal";

const G = "#16C172";
const GD = "#0E9E5C";
const INK = "#15392A";
const MUTED = "#5B7065";

/* Floating icons around the mascot */
const FLOAT_ICONS = [
  { emoji: "💰", top: "12%", left: "10%",  size: 40, delay: "0s",    color: "#FFC93C" },
  { emoji: "❤️", top: "8%",  left: "38%",  size: 32, delay: "0.4s",  color: "#FF5366" },
  { emoji: "🔥", top: "15%", right: "10%", size: 38, delay: "0.8s",  color: "#FF8A3D" },
  { emoji: "💎", top: "55%", left: "4%",   size: 28, delay: "0.6s",  color: "#58B4FF" },
  { emoji: "🏆", top: "50%", right: "4%",  size: 36, delay: "0.2s",  color: "#FFC93C" },
  { emoji: "📈", top: "72%", left: "14%",  size: 30, delay: "1s",    color: "#16C172" },
  { emoji: "✅", top: "70%", right: "12%", size: 32, delay: "0.5s",  color: "#16C172" },
];

const SECTIONS = [
  {
    tag: "Miễn phí",
    title: "Miễn phí.\nVui nhộn.\nHiệu quả.",
    body: "Học tài chính cùng XuXu thật vui và có căn cứ. Các bài học ngắn gọn giúp bạn tích lũy kiến thức, mở khóa huy hiệu và xây thói quen tài chính bền vững.",
    visual: "dashboard-mock",
    flip: false,
    bg: "#fff",
  },
  {
    tag: "Sách hay",
    title: "Học từ những cuốn sách tài chính kinh điển.",
    body: "Rich Dad Poor Dad, The Psychology of Money, Think and Grow Rich… XuXu chắt lọc tinh hoa thành các khái niệm và câu hỏi dễ hiểu — không cần đọc cả cuốn.",
    visual: "books-mock",
    flip: true,
    bg: "#F4F8EF",
  },
  {
    tag: "Thói quen",
    title: "Chỉ 10–15 phút mỗi ngày.",
    body: "Mỗi bài học được thiết kế gọn nhẹ, phù hợp giờ nghỉ trưa hoặc trước khi ngủ. Học đều đặn mỗi ngày, giữ streak và xây nền tảng tài chính cả đời.",
    visual: "streak-mock",
    flip: false,
    bg: "#fff",
  },
];

function DashboardMock() {
  return (
    <div style={{ width: 260, background: "#F4F8EF", borderRadius: 24, padding: 16, boxShadow: "0 20px 50px rgba(21,57,42,.15)", border: "2px solid #ECF1E6" }}>
      <div style={{ background: INK, borderRadius: 16, padding: "14px 16px", color: "#fff", marginBottom: 12 }}>
        <div style={{ font: "800 13px 'Baloo 2'", marginBottom: 4 }}>Mục tiêu hôm nay</div>
        <div style={{ height: 8, borderRadius: 6, background: "rgba(255,255,255,.2)", overflow: "hidden" }}>
          <div style={{ width: "60%", height: "100%", background: G }} />
        </div>
        <div style={{ font: "600 10px 'Nunito'", color: "rgba(255,255,255,.7)", marginTop: 4 }}>2/3 bài · còn +10 xu</div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
        {["💰 Tiền cơ bản", "🐷 Tiết kiệm", "📈 Đầu tư", "📒 Quản lý"].map((t, i) => (
          <div key={t} style={{ background: "#fff", borderRadius: 14, padding: "12px 10px", border: "2px solid #ECF1E6", font: "700 11px 'Nunito'", color: INK, opacity: i === 2 ? 0.45 : 1 }}>
            {t}
          </div>
        ))}
      </div>
    </div>
  );
}

function BooksMock() {
  const books = [
    { title: "Rich Dad\nPoor Dad", bg: "#FFF3DC", ink: "#9A6A0E", emoji: "💰" },
    { title: "Psychology\nof Money", bg: "#EAF1FF", ink: "#3457B2", emoji: "🧠" },
    { title: "Think &\nGrow Rich", bg: "#FFE9EE", ink: "#C0283A", emoji: "🏆" },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10, width: 260 }}>
      {books.map((b, i) => (
        <div key={b.title} style={{ background: b.bg, borderRadius: 16, padding: "14px 16px", display: "flex", alignItems: "center", gap: 12, boxShadow: "0 4px 14px rgba(21,57,42,.08)", transform: i === 1 ? "translateX(20px)" : i === 2 ? "translateX(10px)" : "none" }}>
          <div style={{ fontSize: 28 }}>{b.emoji}</div>
          <div>
            <div style={{ font: "800 12px 'Baloo 2'", color: b.ink, whiteSpace: "pre-line", lineHeight: 1.3 }}>{b.title}</div>
            <div style={{ font: "600 10px 'Nunito'", color: MUTED, marginTop: 2 }}>Đã có trên XuXu ✓</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function StreakMock() {
  const days = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];
  return (
    <div style={{ background: "linear-gradient(160deg,#FF9A4D,#FF7A2E)", borderRadius: 24, padding: 24, color: "#fff", boxShadow: "0 8px 0 #E0631C", width: 280 }}>
      <div style={{ font: "800 48px 'Baloo 2'", lineHeight: 1, textShadow: "0 4px 0 rgba(0,0,0,.15)", marginBottom: 4 }}>7</div>
      <div style={{ font: "800 18px 'Baloo 2'", marginBottom: 4 }}>ngày streak! 🔥</div>
      <div style={{ font: "600 12px 'Nunito'", color: "rgba(255,255,255,.85)", marginBottom: 20 }}>Học hôm nay để giữ lửa nhé</div>
      <div style={{ display: "flex", gap: 6 }}>
        {days.map((d, i) => (
          <div key={d} style={{ flex: 1, height: 32, borderRadius: 8, background: i < 7 ? "rgba(255,255,255,.85)" : "rgba(255,255,255,.3)", display: "flex", alignItems: "center", justifyContent: "center", font: "800 10px 'Baloo 2'", color: i < 7 ? "#FF7A2E" : "#fff" }}>
            {i < 7 ? "✓" : d}
          </div>
        ))}
      </div>
    </div>
  );
}

const VISUALS = { "dashboard-mock": DashboardMock, "books-mock": BooksMock, "streak-mock": StreakMock };

export default function LandingV2({ onSwitchVersion }) {
  const router = useRouter();
  const [showLogin, setShowLogin] = useState(false);
  const enterApp = () => router.push("/learn");

  return (
    <div style={{ background: "#fff", minHeight: "100vh", overflowX: "hidden", fontFamily: "'Nunito', sans-serif" }}>

      {/* ── NAVBAR ── */}
      <header style={{ position: "sticky", top: 0, zIndex: 40, background: "rgba(255,255,255,.92)", backdropFilter: "blur(10px)", borderBottom: "1px solid #ECF1E6" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <XuXuMascot size={34} />
            <span style={{ font: "800 22px 'Baloo 2'", color: G }}>XuXu</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            {/* Dev toggle */}
            <button
              onClick={onSwitchVersion}
              style={{ background: "#F4F8EF", border: "2px solid #ECF1E6", borderRadius: 20, padding: "5px 12px", font: "700 11px 'Nunito'", color: MUTED, cursor: "pointer", display: "flex", alignItems: "center", gap: 5 }}
            >
              <span style={{ background: "#ECF1E6", borderRadius: 10, padding: "1px 7px", color: "#9AA89E", fontSize: 10 }}>V1</span>
              <span style={{ background: G, borderRadius: 10, padding: "1px 7px", color: "#fff", fontSize: 10 }}>V2</span>
              <span style={{ fontSize: 10 }}>🔧 dev</span>
            </button>
            <button
              onClick={() => setShowLogin(true)}
              style={{ background: "none", border: "2px solid #ECF1E6", borderRadius: 12, padding: "8px 14px", font: "800 14px 'Baloo 2'", color: MUTED, cursor: "pointer" }}
            >
              Đăng nhập
            </button>
            <button
              onClick={enterApp}
              style={{ background: G, color: "#fff", border: "none", borderRadius: 12, padding: "10px 18px", font: "800 14px 'Baloo 2'", boxShadow: `0 4px 0 ${GD}`, cursor: "pointer" }}
            >
              BẮT ĐẦU
            </button>
          </div>
        </div>
      </header>

      {/* ── HERO ── */}
      <div style={{ background: "#fff", textAlign: "center", padding: "60px 20px 0" }}>
        <h1 style={{ font: "800 clamp(36px,6vw,58px)/1.1 'Baloo 2'", color: INK, marginBottom: 24, maxWidth: 600, marginInline: "auto" }}>
          Hiểu về <span style={{ color: G }}>Tiền</span> theo cách vui nhất
        </h1>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 56 }}>
          <button
            onClick={enterApp}
            style={{ background: G, color: "#fff", border: "none", borderRadius: 16, padding: "17px 40px", font: "800 18px 'Baloo 2'", boxShadow: `0 6px 0 ${GD}`, cursor: "pointer", letterSpacing: ".5px" }}
          >
            BẮT ĐẦU
          </button>
          <button
            onClick={() => setShowLogin(true)}
            style={{ background: "#fff", color: INK, border: "2px solid #D8E4D0", borderBottomWidth: 4, borderRadius: 16, padding: "15px 32px", font: "800 18px 'Baloo 2'", cursor: "pointer" }}
          >
            Đăng nhập
          </button>
        </div>
      </div>

      {/* ── HERO WAVE + MASCOT ── */}
      <div style={{ position: "relative", background: "#fff", paddingBottom: 0 }}>
        {/* Green wave background */}
        <div style={{ background: G, paddingTop: 80, paddingBottom: 0, position: "relative", overflow: "hidden" }}>
          {/* White blob / puddle */}
          <div style={{
            position: "absolute", top: -10, left: "50%", transform: "translateX(-50%)",
            width: "min(420px, 90vw)", height: 320,
            background: "#fff",
            borderRadius: "50% 50% 0 0",
          }} />

          {/* Floating icons */}
          {FLOAT_ICONS.map((ic, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                top: ic.top, left: ic.left, right: ic.right,
                width: ic.size, height: ic.size,
                fontSize: ic.size * 0.6,
                display: "flex", alignItems: "center", justifyContent: "center",
                background: "#fff",
                borderRadius: "50%",
                boxShadow: "0 4px 14px rgba(0,0,0,.12)",
                animation: `float ${2.5 + i * 0.3}s ease-in-out ${ic.delay} infinite`,
                zIndex: 2,
              }}
            >
              {ic.emoji}
            </div>
          ))}

          {/* Mascot in blob center */}
          <div style={{ position: "relative", zIndex: 3, display: "flex", justifyContent: "center", paddingBottom: 0 }}>
            <div style={{ animation: "float 3s ease-in-out infinite" }}>
              <XuXuMascot size={200} mood="excited" />
            </div>
          </div>

          {/* Green padding below mascot */}
          <div style={{ height: 40, background: G }} />
        </div>
      </div>

      {/* ── ALTERNATING SECTIONS ── */}
      {SECTIONS.map(s => {
        const Visual = VISUALS[s.visual];
        return (
          <div key={s.title} style={{ background: s.bg, borderTop: "1px solid #ECF1E6" }}>
            <div style={{
              maxWidth: 1000, margin: "0 auto", padding: "72px 28px",
              display: "flex", flexWrap: "wrap",
              flexDirection: s.flip ? "row-reverse" : "row",
              alignItems: "center", gap: 52, justifyContent: "center",
            }}>
              {/* Text */}
              <div style={{ flex: "1 1 300px", maxWidth: 440 }}>
                <div style={{ display: "inline-block", background: "#EAFBF1", color: GD, borderRadius: 20, padding: "4px 14px", font: "800 12px 'Baloo 2'", marginBottom: 14 }}>
                  {s.tag}
                </div>
                <h2 style={{ font: "800 clamp(28px,4vw,40px)/1.15 'Baloo 2'", color: G, marginBottom: 16, whiteSpace: "pre-line" }}>
                  {s.title}
                </h2>
                <p style={{ font: "600 16px/1.65 'Nunito'", color: MUTED, marginBottom: 24 }}>
                  {s.body}
                </p>
                <button
                  onClick={enterApp}
                  style={{ background: G, color: "#fff", border: "none", borderRadius: 14, padding: "13px 26px", font: "800 15px 'Baloo 2'", boxShadow: `0 5px 0 ${GD}`, cursor: "pointer" }}
                >
                  Thử ngay →
                </button>
              </div>

              {/* Visual */}
              <div style={{ flex: "0 1 300px", display: "flex", justifyContent: "center" }}>
                <Visual />
              </div>
            </div>
          </div>
        );
      })}

      {/* ── TOPICS SCROLL ── */}
      <div style={{ background: "#F4F8EF", borderTop: "1px solid #ECF1E6", padding: "56px 0" }}>
        <h2 style={{ font: "800 clamp(24px,3.5vw,34px) 'Baloo 2'", color: INK, textAlign: "center", marginBottom: 28 }}>
          7 chủ đề tài chính
        </h2>
        <div style={{ overflowX: "auto", display: "flex", gap: 12, padding: "4px 24px 16px" }}>
          {Object.entries(TOPICS).map(([key, label]) => {
            const META = {
              "money-basics": { emoji: "💰", color: "#FFF3DC", ink: "#9A6A0E" },
              "saving": { emoji: "🐷", color: "#FFE9EE", ink: "#C0283A" },
              "personal-finance": { emoji: "📒", color: "#EAF1FF", ink: "#3457B2" },
              "borrowing": { emoji: "🤝", color: "#EAFBF1", ink: "#0E7A4E" },
              "investing": { emoji: "📈", color: "#FFF0E3", ink: "#C25E18" },
              "stocks": { emoji: "📊", color: "#F1E9FF", ink: "#6B36C9" },
              "digital-assets": { emoji: "🪙", color: "#E6FBF6", ink: "#0A8C76" },
            };
            const m = META[key] || { emoji: "📚", color: "#fff", ink: INK };
            return (
              <button
                key={key}
                onClick={enterApp}
                style={{ flexShrink: 0, background: "#fff", border: "2px solid #ECF1E6", borderBottomWidth: 4, borderRadius: 20, padding: "16px 18px", cursor: "pointer", textAlign: "left", minWidth: 160 }}
              >
                <div style={{ width: 44, height: 44, borderRadius: 14, background: m.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, marginBottom: 10 }}>
                  {m.emoji}
                </div>
                <div style={{ font: "800 14px 'Baloo 2'", color: INK, lineHeight: 1.3 }}>{label}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── FINAL CTA ── */}
      <div style={{ background: G, padding: "72px 20px", textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
          <XuXuMascot size={80} mood="excited" />
        </div>
        <h2 style={{ font: "800 clamp(28px,4vw,44px)/1.1 'Baloo 2'", color: "#fff", marginBottom: 14 }}>
          Sẵn sàng làm bạn với Tiền?
        </h2>
        <p style={{ font: "600 16px 'Nunito'", color: "rgba(255,255,255,.88)", marginBottom: 30, maxWidth: 420, marginInline: "auto" }}>
          Hoàn toàn miễn phí. Bắt đầu ngay hôm nay.
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <button
            onClick={enterApp}
            style={{ background: "#fff", color: GD, border: "none", borderRadius: 16, padding: "16px 36px", font: "800 18px 'Baloo 2'", boxShadow: "0 6px 0 rgba(0,0,0,.15)", cursor: "pointer" }}
          >
            BẮT ĐẦU MIỄN PHÍ →
          </button>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <footer style={{ background: INK, color: "#fff", padding: "32px 20px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: 24, justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 6 }}>
              <XuXuMascot size={28} />
              <span style={{ font: "800 20px 'Baloo 2'", color: G }}>XuXu</span>
            </div>
            <div style={{ font: "600 12px 'Nunito'", color: "rgba(255,255,255,.55)", lineHeight: 1.6 }}>Học tài chính — vui, đơn giản, mỗi ngày.</div>
          </div>
          <div>
            <div style={{ font: "800 13px 'Baloo 2'", color: "rgba(255,255,255,.7)", marginBottom: 10 }}>Liên hệ</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <div style={{ font: "600 12px 'Nunito'", color: "rgba(255,255,255,.6)" }}>👤 Thành Mắm</div>
              <a href="mailto:i.thanhnt@gmail.com" style={{ font: "600 12px 'Nunito'", color: "rgba(255,255,255,.6)", textDecoration: "none" }}>✉️ i.thanhnt@gmail.com</a>
              <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
                <a href="https://tiktok.com/@thanhmam.com" target="_blank" rel="noopener noreferrer" style={{ font: "700 11px 'Nunito'", color: "#fff", background: "rgba(255,255,255,.12)", borderRadius: 8, padding: "5px 10px", textDecoration: "none" }}>
                  TikTok @thanhmam.com
                </a>
                <a href="https://facebook.com/i.thanhmam" target="_blank" rel="noopener noreferrer" style={{ font: "700 11px 'Nunito'", color: "#fff", background: "rgba(255,255,255,.12)", borderRadius: 8, padding: "5px 10px", textDecoration: "none" }}>
                  Facebook @i.thanhmam
                </a>
              </div>
            </div>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,.1)", marginTop: 24, paddingTop: 16, font: "600 11px 'Nunito'", color: "rgba(255,255,255,.35)", textAlign: "center" }}>
          © {new Date().getFullYear()} XuXu · Made with ❤️ by Thành Mắm
        </div>
      </footer>

      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
    </div>
  );
}
