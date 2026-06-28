"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LESSONS, TOPICS } from "@/data/lessons";
import XuXuMascot from "@/components/XuXuMascot";
import LoginModal from "@/components/LoginModal";

/* ── Brand tokens ── */
const C = {
  green: "#16C172",
  greenDark: "#0E9E5C",
  ink: "#15392A",
  bg: "#F4F8EF",
  border: "#ECF1E6",
  yellow: "#FFC93C",
  orange: "#FF8A3D",
  purple: "#8B5CF6",
  muted: "#5B7065",
  faint: "#9AA89E",
};

const TOPIC_META = {
  "money-basics":     { emoji: "💰", color: "#FFF3DC", ink: "#9A6A0E" },
  "saving":           { emoji: "🐷", color: "#FFE9EE", ink: "#C0283A" },
  "personal-finance": { emoji: "📒", color: "#EAF1FF", ink: "#3457B2" },
  "borrowing":        { emoji: "🤝", color: "#EAFBF1", ink: "#0E7A4E" },
  "investing":        { emoji: "📈", color: "#FFF0E3", ink: "#C25E18" },
  "stocks":           { emoji: "📊", color: "#F1E9FF", ink: "#6B36C9" },
  "digital-assets":   { emoji: "🪙", color: "#E6FBF6", ink: "#0A8C76" },
};

const STEPS = [
  { n: "1", emoji: "🧭", title: "Chọn chủ đề", body: "Từ tiền cơ bản, tiết kiệm đến đầu tư — chọn điều bạn tò mò." },
  { n: "2", emoji: "🎮", title: "Chơi quiz & mini-game", body: "Học khái niệm qua câu hỏi vui, tình huống thực tế, lựa chọn A/B." },
  { n: "3", emoji: "🏆", title: "Nhận XP & huy hiệu", body: "Trả lời đúng để ghi điểm, giữ streak và leo bảng xếp hạng." },
];

const FEATURES = [
  { emoji: "🧩", title: "Khái niệm đơn giản", body: "Biến kiến thức tài chính phức tạp thành câu chuyện dễ hiểu cho mọi lứa tuổi." },
  { emoji: "🎯", title: "Học qua trò chơi", body: "Quiz, tình huống mua sắm, so sánh lựa chọn — học mà như chơi." },
  { emoji: "🌱", title: "Theo từng độ tuổi", body: "Nội dung phù hợp 6–8, 9–12 và 13–16 tuổi, đi từ dễ đến nâng cao." },
  { emoji: "🔥", title: "Tạo thói quen", body: "Streak hằng ngày, huy hiệu và mục tiêu giúp bạn học đều đặn." },
];

const AGE_GROUPS = [
  { emoji: "🌱", label: "6–8 tuổi", desc: "Làm quen với tiền, tiết kiệm và chia sẻ.", bg: "#EAFBF1", ink: "#0E9E5C" },
  { emoji: "🌿", label: "9–12 tuổi", desc: "Quản lý tiền tiêu vặt, phân biệt cần & muốn.", bg: "#EAF1FF", ink: "#3457B2" },
  { emoji: "🌳", label: "13–16 tuổi", desc: "Đầu tư, chứng khoán và tài sản số nhập môn.", bg: "#F1E9FF", ink: "#6B36C9" },
];

function Section({ children, style }) {
  return (
    <section style={{ maxWidth: 1080, margin: "0 auto", padding: "0 20px", ...style }}>
      {children}
    </section>
  );
}

export default function Landing() {
  const router = useRouter();
  const [showLogin, setShowLogin] = useState(false);

  const enterApp = () => router.push("/learn");
  const topicKeys = Object.keys(TOPICS);

  return (
    <div style={{ background: C.bg, minHeight: "100vh", overflowX: "hidden" }}>

      {/* ── NAVBAR ── */}
      <header style={{ position: "sticky", top: 0, zIndex: 40, background: "rgba(244,248,239,.85)", backdropFilter: "blur(10px)", borderBottom: `1px solid ${C.border}` }}>
        <Section style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <XuXuMascot size={34} />
            <span style={{ font: "800 22px 'Baloo 2'", color: C.green }}>XuXu</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <button
              onClick={() => setShowLogin(true)}
              className="btn-press"
              style={{ background: "none", border: "none", cursor: "pointer", font: "800 14px 'Baloo 2'", color: C.muted, padding: "8px 12px" }}
            >
              Đăng nhập
            </button>
            <button
              onClick={enterApp}
              className="btn-press"
              style={{ background: C.green, color: "#fff", border: "none", borderRadius: 12, padding: "10px 18px", font: "800 14px 'Baloo 2'", boxShadow: `0 4px 0 ${C.greenDark}`, cursor: "pointer" }}
            >
              Khám phá ngay
            </button>
          </div>
        </Section>
      </header>

      {/* ── HERO ── */}
      <Section style={{ paddingTop: 56, paddingBottom: 48 }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 40, justifyContent: "center" }}>
          {/* Copy */}
          <div style={{ flex: "1 1 420px", maxWidth: 560 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "#fff", border: `2px solid ${C.border}`, borderRadius: 20, padding: "6px 14px", marginBottom: 18 }}>
              <span style={{ fontSize: 15 }}>✨</span>
              <span style={{ font: "700 12px 'Nunito'", color: C.muted }}>Học tài chính cho trẻ 6–16 tuổi</span>
            </div>
            <h1 style={{ font: "800 clamp(34px, 5vw, 52px)/1.08 'Baloo 2'", color: C.ink, marginBottom: 18 }}>
              Hiểu về <span style={{ color: C.green }}>Tiền</span> theo cách{" "}
              <span style={{ position: "relative", whiteSpace: "nowrap" }}>
                vui nhất
                <span style={{ position: "absolute", left: 0, right: 0, bottom: 2, height: 10, background: "#FFE08A", borderRadius: 6, zIndex: -1 }} />
              </span>
            </h1>
            <p style={{ font: "600 clamp(15px, 2vw, 18px)/1.6 'Nunito'", color: C.muted, marginBottom: 28, maxWidth: 480 }}>
              XuXu giúp bạn nhỏ học về tiền, tiết kiệm, chi tiêu và đầu tư qua những
              khái niệm đơn giản và mini-game thú vị. Mỗi ngày một chút, hiểu tài chính cả đời.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <button
                onClick={enterApp}
                className="btn-press"
                style={{ background: C.green, color: "#fff", border: "none", borderRadius: 16, padding: "15px 28px", font: "800 16px 'Baloo 2'", boxShadow: `0 5px 0 ${C.greenDark}`, cursor: "pointer" }}
              >
                Bắt đầu khám phá →
              </button>
              <button
                onClick={() => setShowLogin(true)}
                className="btn-press"
                style={{ background: "#fff", color: C.ink, border: `2px solid ${C.border}`, borderBottomWidth: 4, borderRadius: 16, padding: "13px 26px", font: "800 16px 'Baloo 2'", cursor: "pointer" }}
              >
                Đăng nhập
              </button>
            </div>
            <div style={{ display: "flex", gap: 22, marginTop: 30, flexWrap: "wrap" }}>
              {[
                { num: `${LESSONS.length}`, label: "bài học" },
                { num: `${topicKeys.length}`, label: "chủ đề" },
                { num: "3", label: "nhóm tuổi" },
              ].map(s => (
                <div key={s.label}>
                  <div style={{ font: "800 24px 'Baloo 2'", color: C.ink }}>{s.num}+</div>
                  <div style={{ font: "600 12px 'Nunito'", color: C.faint }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div style={{ flex: "0 1 360px", display: "flex", justifyContent: "center" }}>
            <div style={{ position: "relative", width: 320, height: 320 }}>
              <div style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "radial-gradient(circle at 50% 45%, #DCF7E8, #F4F8EF 70%)" }} />
              <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", animation: "float 3s ease-in-out infinite" }}>
                <XuXuMascot size={170} mood="excited" />
              </div>
              {/* Floating chips */}
              <div style={{ position: "absolute", top: 18, left: 6, background: "#fff", borderRadius: 16, padding: "8px 12px", boxShadow: "0 6px 18px rgba(21,57,42,.12)", font: "800 13px 'Baloo 2'", color: C.ink, display: "flex", alignItems: "center", gap: 6, animation: "float 3.4s ease-in-out infinite" }}>
                💰 +100 XP
              </div>
              <div style={{ position: "absolute", bottom: 30, right: 0, background: "#fff", borderRadius: 16, padding: "8px 12px", boxShadow: "0 6px 18px rgba(21,57,42,.12)", font: "800 13px 'Baloo 2'", color: C.orange, display: "flex", alignItems: "center", gap: 6, animation: "float 2.6s ease-in-out infinite" }}>
                🔥 Streak 7
              </div>
              <div style={{ position: "absolute", bottom: 6, left: 24, background: "#fff", borderRadius: 16, padding: "8px 12px", boxShadow: "0 6px 18px rgba(21,57,42,.12)", font: "800 13px 'Baloo 2'", color: C.purple, display: "flex", alignItems: "center", gap: 6, animation: "float 3.1s ease-in-out infinite" }}>
                🏆 Hạng Vàng
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── TOPICS ── */}
      <Section style={{ paddingTop: 32, paddingBottom: 48 }}>
        <h2 style={{ font: "800 clamp(24px,3.5vw,34px) 'Baloo 2'", color: C.ink, textAlign: "center", marginBottom: 8 }}>
          Bạn sẽ học gì ở XuXu?
        </h2>
        <p style={{ font: "600 15px 'Nunito'", color: C.muted, textAlign: "center", marginBottom: 30 }}>
          7 chủ đề tài chính, từ những đồng xu đầu tiên đến đầu tư &amp; tài sản số.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14 }}>
          {topicKeys.map(key => {
            const m = TOPIC_META[key] || { emoji: "📚", color: "#fff", ink: C.ink };
            return (
              <button
                key={key}
                onClick={enterApp}
                className="btn-press"
                style={{ textAlign: "left", background: "#fff", border: `2px solid ${C.border}`, borderBottomWidth: 4, borderRadius: 18, padding: 18, cursor: "pointer" }}
              >
                <div style={{ width: 46, height: 46, borderRadius: 14, background: m.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, marginBottom: 12 }}>
                  {m.emoji}
                </div>
                <div style={{ font: "800 16px 'Baloo 2'", color: C.ink, marginBottom: 4 }}>{TOPICS[key]}</div>
                <div style={{ font: "800 12px 'Baloo 2'", color: m.ink }}>Khám phá →</div>
              </button>
            );
          })}
          {/* CTA tile */}
          <button
            onClick={enterApp}
            className="btn-press"
            style={{ background: C.ink, border: "none", borderRadius: 18, padding: 18, cursor: "pointer", color: "#fff", textAlign: "left", display: "flex", flexDirection: "column", justifyContent: "center" }}
          >
            <div style={{ font: "800 17px 'Baloo 2'", marginBottom: 4 }}>Xem tất cả bài học</div>
            <div style={{ font: "700 12px 'Nunito'", color: "rgba(255,255,255,.75)" }}>Vào dashboard để khám phá →</div>
          </button>
        </div>
      </Section>

      {/* ── HOW IT WORKS ── */}
      <div style={{ background: "#fff", borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
        <Section style={{ paddingTop: 48, paddingBottom: 48 }}>
          <h2 style={{ font: "800 clamp(24px,3.5vw,34px) 'Baloo 2'", color: C.ink, textAlign: "center", marginBottom: 30 }}>
            XuXu hoạt động thế nào?
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 18 }}>
            {STEPS.map(s => (
              <div key={s.n} style={{ background: C.bg, borderRadius: 20, padding: 24, position: "relative" }}>
                <div style={{ position: "absolute", top: 18, right: 20, font: "800 40px 'Baloo 2'", color: "#E6EFE0" }}>{s.n}</div>
                <div style={{ fontSize: 38, marginBottom: 12 }}>{s.emoji}</div>
                <div style={{ font: "800 18px 'Baloo 2'", color: C.ink, marginBottom: 6 }}>{s.title}</div>
                <div style={{ font: "600 14px/1.55 'Nunito'", color: C.muted }}>{s.body}</div>
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* ── FEATURES ── */}
      <Section style={{ paddingTop: 48, paddingBottom: 48 }}>
        <h2 style={{ font: "800 clamp(24px,3.5vw,34px) 'Baloo 2'", color: C.ink, textAlign: "center", marginBottom: 8 }}>
          Vì sao trẻ thích học cùng XuXu?
        </h2>
        <p style={{ font: "600 15px 'Nunito'", color: C.muted, textAlign: "center", marginBottom: 30 }}>
          Tài chính không còn khô khan — mà là một cuộc phiêu lưu.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
          {FEATURES.map(f => (
            <div key={f.title} style={{ background: "#fff", border: `2px solid ${C.border}`, borderRadius: 18, padding: 22 }}>
              <div style={{ fontSize: 34, marginBottom: 12 }}>{f.emoji}</div>
              <div style={{ font: "800 17px 'Baloo 2'", color: C.ink, marginBottom: 6 }}>{f.title}</div>
              <div style={{ font: "600 13px/1.55 'Nunito'", color: C.muted }}>{f.body}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── AGE GROUPS ── */}
      <Section style={{ paddingBottom: 56 }}>
        <h2 style={{ font: "800 clamp(22px,3vw,30px) 'Baloo 2'", color: C.ink, textAlign: "center", marginBottom: 26 }}>
          Phù hợp với mọi lứa tuổi
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
          {AGE_GROUPS.map(a => (
            <div key={a.label} style={{ background: a.bg, borderRadius: 20, padding: 22, textAlign: "center" }}>
              <div style={{ fontSize: 40, marginBottom: 10 }}>{a.emoji}</div>
              <div style={{ font: "800 18px 'Baloo 2'", color: a.ink, marginBottom: 6 }}>{a.label}</div>
              <div style={{ font: "600 13px/1.5 'Nunito'", color: C.muted }}>{a.desc}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── FINAL CTA ── */}
      <Section style={{ paddingBottom: 64 }}>
        <div style={{ background: "linear-gradient(135deg, #16C172, #0E9E5C)", borderRadius: 28, padding: "48px 28px", textAlign: "center", color: "#fff", boxShadow: "0 12px 0 rgba(11,122,72,.5)" }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
            <XuXuMascot size={72} />
          </div>
          <h2 style={{ font: "800 clamp(26px,4vw,38px) 'Baloo 2'", marginBottom: 12 }}>
            Sẵn sàng làm bạn với Tiền?
          </h2>
          <p style={{ font: "600 15px 'Nunito'", color: "rgba(255,255,255,.9)", marginBottom: 26, maxWidth: 460, marginInline: "auto" }}>
            Vào xem dashboard, chọn một chủ đề và thử ngay bài học đầu tiên. Hoàn toàn miễn phí.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <button
              onClick={enterApp}
              className="btn-press"
              style={{ background: "#fff", color: C.greenDark, border: "none", borderRadius: 16, padding: "15px 30px", font: "800 16px 'Baloo 2'", boxShadow: "0 5px 0 rgba(0,0,0,.12)", cursor: "pointer" }}
            >
              Khám phá ngay →
            </button>
            <button
              onClick={() => setShowLogin(true)}
              className="btn-press"
              style={{ background: "rgba(255,255,255,.15)", color: "#fff", border: "2px solid rgba(255,255,255,.6)", borderRadius: 16, padding: "13px 28px", font: "800 16px 'Baloo 2'", cursor: "pointer" }}
            >
              Tạo tài khoản
            </button>
          </div>
        </div>
      </Section>

      {/* ── FOOTER ── */}
      <footer style={{ borderTop: `1px solid ${C.border}`, background: "#fff" }}>
        <Section style={{ paddingTop: 24, paddingBottom: 24, display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
            <XuXuMascot size={28} />
            <span style={{ font: "800 17px 'Baloo 2'", color: C.green }}>XuXu</span>
            <span style={{ font: "600 12px 'Nunito'", color: C.faint }}>· Học tài chính vui vẻ</span>
          </div>
          <div style={{ font: "600 12px 'Nunito'", color: C.faint }}>
            © {new Date().getFullYear()} XuXu · Dành cho trẻ 6–16 tuổi
          </div>
        </Section>
      </footer>

      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
    </div>
  );
}
