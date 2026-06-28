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
  { emoji: "🧩", title: "Khái niệm đơn giản", body: "Biến kiến thức tài chính phức tạp thành câu chuyện dễ hiểu — dù bạn chưa biết gì về tiền." },
  { emoji: "📖", title: "Học từ sách bestseller", body: "Tinh hoa từ Rich Dad Poor Dad, The Psychology of Money, Think and Grow Rich… qua quiz và khái niệm cốt lõi." },
  { emoji: "⏱️", title: "Chỉ 10–15 phút mỗi ngày", body: "Mỗi bài học ngắn gọn, phù hợp giờ nghỉ trưa hoặc trước khi ngủ. Đều đặn mỗi ngày, vững nền tài chính cả đời." },
  { emoji: "🔥", title: "Tạo thói quen tài chính", body: "Streak hằng ngày, huy hiệu và mục tiêu giúp bạn duy trì đà học liên tục." },
];

const TARGET_GROUPS = [
  { emoji: "🧒", label: "Trẻ em & học sinh", desc: "Làm quen với tiền, tiết kiệm và những quyết định tài chính đầu tiên.", bg: "#EAFBF1", ink: "#0E9E5C" },
  { emoji: "🧑", label: "Người trẻ", desc: "Xây nền tảng tài chính vững: quản lý thu chi, đầu tư và lập kế hoạch tương lai.", bg: "#EAF1FF", ink: "#3457B2" },
  { emoji: "📚", label: "Ai muốn hiểu về tiền", desc: "Chưa biết bắt đầu từ đâu? XuXu giúp bạn từng bước — không cần nền tảng kinh tế.", bg: "#F1E9FF", ink: "#6B36C9" },
];

const HERO_PILLS = [
  { emoji: "⏱️", text: "10–15 phút/ngày" },
  { emoji: "🎮", text: "Học mà như chơi" },
  { emoji: "🌱", text: "Nền tảng vững chắc" },
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
      <Section style={{ paddingTop: 48, paddingBottom: 40 }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 40, justifyContent: "center" }}>

          {/* Copy */}
          <div style={{ flex: "1 1 380px", maxWidth: 540 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "#fff", border: `2px solid ${C.border}`, borderRadius: 20, padding: "6px 14px", marginBottom: 18 }}>
              <span style={{ fontSize: 15 }}>✨</span>
              <span style={{ font: "700 12px 'Nunito'", color: C.muted }}>Học tài chính — vui, đơn giản, mỗi ngày 10 phút</span>
            </div>
            <h1 style={{ font: "800 clamp(32px, 5vw, 52px)/1.1 'Baloo 2'", color: C.ink, marginBottom: 16 }}>
              Hiểu về <span style={{ color: C.green }}>Tiền</span> theo cách{" "}
              <span style={{ position: "relative", whiteSpace: "nowrap" }}>
                vui nhất
                <span style={{ position: "absolute", left: 0, right: 0, bottom: 2, height: 10, background: "#FFE08A", borderRadius: 6, zIndex: -1 }} />
              </span>
            </h1>
            <p style={{ font: "600 clamp(15px, 2vw, 17px)/1.6 'Nunito'", color: C.muted, marginBottom: 24, maxWidth: 460 }}>
              XuXu giúp bạn hiểu về tiền, tiết kiệm, đầu tư qua các khái niệm đơn giản và mini-game thú vị.
              Chỉ 10–15 phút mỗi ngày để xây nền tảng tài chính vững chắc cho tương lai.
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
            {/* 3 benefit pills — centered */}
            <div style={{ display: "flex", gap: 10, marginTop: 24, flexWrap: "wrap", justifyContent: "center" }}>
              {HERO_PILLS.map(p => (
                <div key={p.text} style={{ display: "flex", alignItems: "center", gap: 6, background: "#fff", border: `2px solid ${C.border}`, borderRadius: 20, padding: "8px 14px", font: "700 13px 'Nunito'", color: C.ink }}>
                  <span>{p.emoji}</span>
                  <span>{p.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual — mascot + chips stacked cleanly */}
          <div style={{ flex: "0 1 300px", display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
            {/* Top chip */}
            <div style={{ background: "#fff", borderRadius: 16, padding: "8px 14px", boxShadow: "0 6px 18px rgba(21,57,42,.12)", font: "800 13px 'Baloo 2'", color: C.ink, display: "flex", alignItems: "center", gap: 6, animation: "float 3.4s ease-in-out infinite" }}>
              💰 +100 XP
            </div>

            {/* Mascot with side chips */}
            <div style={{ position: "relative", display: "inline-block" }}>
              <div style={{ width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle at 50% 45%, #DCF7E8, #F4F8EF 75%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ animation: "float 3s ease-in-out infinite" }}>
                  <XuXuMascot size={150} mood="excited" />
                </div>
              </div>
              {/* Side chip left */}
              <div style={{ position: "absolute", top: "50%", right: -8, transform: "translateY(-50%)", background: "#fff", borderRadius: 16, padding: "7px 11px", boxShadow: "0 6px 18px rgba(21,57,42,.12)", font: "800 12px 'Baloo 2'", color: C.orange, display: "flex", alignItems: "center", gap: 5, animation: "float 2.6s ease-in-out infinite", whiteSpace: "nowrap" }}>
                🔥 Streak 7
              </div>
            </div>

            {/* Bottom chip */}
            <div style={{ background: "#fff", borderRadius: 16, padding: "8px 14px", boxShadow: "0 6px 18px rgba(21,57,42,.12)", font: "800 13px 'Baloo 2'", color: C.purple, display: "flex", alignItems: "center", gap: 6, animation: "float 3.1s ease-in-out infinite" }}>
              🏆 Hạng Vàng
            </div>
          </div>
        </div>
      </Section>

      {/* ── TOPICS ── */}
      <Section style={{ paddingTop: 32, paddingBottom: 48 }}>
        <h2 style={{ font: "800 clamp(24px,3.5vw,34px) 'Baloo 2'", color: C.ink, textAlign: "center", marginBottom: 8 }}>
          Bạn sẽ học gì ở XuXu?
        </h2>
        <p style={{ font: "600 15px 'Nunito'", color: C.muted, textAlign: "center", marginBottom: 28 }}>
          7 chủ đề tài chính, từ những đồng xu đầu tiên đến đầu tư &amp; tài sản số.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: 12 }}>
          {topicKeys.map(key => {
            const m = TOPIC_META[key] || { emoji: "📚", color: "#fff", ink: C.ink };
            return (
              <button
                key={key}
                onClick={enterApp}
                className="btn-press"
                style={{ textAlign: "left", background: "#fff", border: `2px solid ${C.border}`, borderBottomWidth: 4, borderRadius: 18, padding: "16px 14px", cursor: "pointer" }}
              >
                <div style={{ width: 42, height: 42, borderRadius: 12, background: m.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, marginBottom: 10 }}>
                  {m.emoji}
                </div>
                <div style={{ font: "800 14px 'Baloo 2'", color: C.ink, lineHeight: 1.3 }}>{TOPICS[key]}</div>
              </button>
            );
          })}
          {/* CTA tile */}
          <button
            onClick={enterApp}
            className="btn-press"
            style={{ background: C.ink, border: "none", borderRadius: 18, padding: "16px 14px", cursor: "pointer", color: "#fff", textAlign: "left", display: "flex", flexDirection: "column", justifyContent: "center", minHeight: 100 }}
          >
            <div style={{ font: "800 15px 'Baloo 2'", marginBottom: 4 }}>Xem tất cả →</div>
            <div style={{ font: "700 11px 'Nunito'", color: "rgba(255,255,255,.7)" }}>Vào dashboard khám phá</div>
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
          Vì sao mọi người thích học cùng XuXu?
        </h2>
        <p style={{ font: "600 15px 'Nunito'", color: C.muted, textAlign: "center", marginBottom: 30 }}>
          Tài chính không còn khô khan — mà là một cuộc phiêu lưu mỗi ngày.
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

      {/* ── TARGET GROUPS ── */}
      <Section style={{ paddingBottom: 56 }}>
        <h2 style={{ font: "800 clamp(22px,3vw,30px) 'Baloo 2'", color: C.ink, textAlign: "center", marginBottom: 26 }}>
          XuXu dành cho ai?
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
          {TARGET_GROUPS.map(a => (
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
      <footer style={{ borderTop: `2px solid ${C.border}`, background: "#fff" }}>
        <Section style={{ paddingTop: 32, paddingBottom: 32 }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 28, justifyContent: "space-between", alignItems: "flex-start" }}>

            {/* Brand */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 6 }}>
                <XuXuMascot size={30} />
                <span style={{ font: "800 20px 'Baloo 2'", color: C.green }}>XuXu</span>
              </div>
              <div style={{ font: "600 13px 'Nunito'", color: C.faint, lineHeight: 1.6 }}>
                Học tài chính — vui, đơn giản, mỗi ngày.
              </div>
            </div>

            {/* Contact */}
            <div>
              <div style={{ font: "800 14px 'Baloo 2'", color: C.ink, marginBottom: 10 }}>Liên hệ</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                <div style={{ font: "700 13px 'Nunito'", color: C.muted }}>👤 Thành Mắm</div>
                <a href="mailto:i.thanhnt@gmail.com" style={{ font: "600 13px 'Nunito'", color: C.muted, textDecoration: "none", display: "flex", alignItems: "center", gap: 6 }}>
                  ✉️ i.thanhnt@gmail.com
                </a>
                {/* Social */}
                <div style={{ display: "flex", gap: 10, marginTop: 2 }}>
                  <a
                    href="https://tiktok.com/@thanhmam.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "flex", alignItems: "center", gap: 5, background: "#000", color: "#fff", borderRadius: 10, padding: "6px 11px", font: "700 12px 'Nunito'", textDecoration: "none" }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.77a4.85 4.85 0 0 1-1.01-.08z"/>
                    </svg>
                    @thanhmam.com
                  </a>
                  <a
                    href="https://facebook.com/i.thanhmam"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "flex", alignItems: "center", gap: 5, background: "#1877F2", color: "#fff", borderRadius: 10, padding: "6px 11px", font: "700 12px 'Nunito'", textDecoration: "none" }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    @i.thanhmam
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div style={{ borderTop: `1px solid ${C.border}`, marginTop: 24, paddingTop: 16, font: "600 12px 'Nunito'", color: C.faint, textAlign: "center" }}>
            © {new Date().getFullYear()} XuXu · Made with ❤️ by Thành Mắm
          </div>
        </Section>
      </footer>

      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
    </div>
  );
}
