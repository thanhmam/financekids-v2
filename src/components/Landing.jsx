"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { TOPICS } from "@/data/lessons";
import BookCover from "@/components/BookCover";
import LoginModal from "@/components/LoginModal";
import { useBooks } from "@/hooks/useBooks";

/* ─── Animations (injected once) ─── */
const KEYFRAMES = `
@keyframes bob  { 0%,100%{transform:translateY(0)}         50%{transform:translateY(-12px)} }
@keyframes bob2 { 0%,100%{transform:translateY(0) rotate(-4deg)} 50%{transform:translateY(-9px) rotate(4deg)} }
@keyframes bob3 { 0%,100%{transform:translateY(0) rotate(6deg)}  50%{transform:translateY(-14px) rotate(-3deg)} }
@keyframes pop  { 0%{transform:scale(.92)} 50%{transform:scale(1.04)} 100%{transform:scale(.92)} }
@keyframes drift{ 0%,100%{transform:translate(0,0)} 50%{transform:translate(6px,-10px)} }
.btn3d{transition:transform .08s,box-shadow .08s;cursor:pointer;}
.btn3d:active{transform:translateY(3px);}

@media (max-width: 880px) {
  .nav-links { display: none !important; }
  .hero-grid { grid-template-columns: 1fr !important; gap: 12px !important; min-height: 0 !important; }
  .hero-copy { text-align: center !important; }
  .hero-copy h1 { font-size: 36px !important; }
  .hero-copy p { margin-left: auto !important; margin-right: auto !important; }
  .hero-copy .hero-ctas, .hero-copy .hero-trust { justify-content: center !important; }
  .hero-scene { height: 320px !important; transform: scale(.7); transform-origin: top center; margin-bottom: -90px; }
  .feature-row { grid-template-columns: 1fr !important; gap: 24px !important; }
  .feature-row .feature-visual { order: -1; }
  .topics-grid { grid-template-columns: repeat(2, 1fr) !important; }
}
@media (max-width: 480px) {
  .hero-copy h1 { font-size: 30px !important; }
  .books-grid { grid-template-columns: 1fr !important; }
}
`;

/* ─── Xu Coin Character ─── */
function XuCoin({ size = 184 }) {
  const s = size / 184;
  return (
    <div style={{ position: "relative", width: size, height: size + 20 * s, flexShrink: 0 }}>
      {/* legs */}
      <div style={{ position: "absolute", bottom: 6 * s, left: 58 * s, width: 20 * s, height: 30 * s, background: "#E8A317", borderRadius: 10 * s, zIndex: 0 }} />
      <div style={{ position: "absolute", bottom: 6 * s, right: 58 * s, width: 20 * s, height: 30 * s, background: "#E8A317", borderRadius: 10 * s, zIndex: 0 }} />
      <div style={{ position: "absolute", bottom: 0, left: 50 * s, width: 34 * s, height: 16 * s, background: "#C98A12", borderRadius: 12 * s }} />
      <div style={{ position: "absolute", bottom: 0, right: 50 * s, width: 34 * s, height: 16 * s, background: "#C98A12", borderRadius: 12 * s }} />
      {/* body */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: size, borderRadius: "50%", background: "radial-gradient(circle at 38% 30%,#FFEFA8,#FFC93C 56%,#EFAE20)", border: `${8 * s}px solid #E8A317`, boxShadow: `0 ${10 * s}px 0 #C98A12,inset 0 ${-8 * s}px ${16 * s}px rgba(180,120,0,.25)`, zIndex: 2 }}>
        <div style={{ position: "absolute", inset: 18 * s, borderRadius: "50%", border: `${4 * s}px dashed rgba(180,120,0,.32)` }} />
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", font: `800 ${70 * s}px 'Baloo 2'`, color: "rgba(154,106,0,.14)" }}>₫</div>
        {/* eyes */}
        <div style={{ position: "absolute", top: 62 * s, left: 48 * s, width: 18 * s, height: 25 * s, background: "#3A2A00", borderRadius: "50%" }} />
        <div style={{ position: "absolute", top: 62 * s, right: 48 * s, width: 18 * s, height: 25 * s, background: "#3A2A00", borderRadius: "50%" }} />
        <div style={{ position: "absolute", top: 65 * s, left: 53 * s, width: 7 * s, height: 7 * s, background: "#fff", borderRadius: "50%" }} />
        <div style={{ position: "absolute", top: 65 * s, right: 62 * s, width: 7 * s, height: 7 * s, background: "#fff", borderRadius: "50%" }} />
        {/* smile */}
        <div style={{ position: "absolute", top: 104 * s, left: "50%", transform: "translateX(-50%)", width: 48 * s, height: 26 * s, border: `${6 * s}px solid #3A2A00`, borderTop: "none", borderRadius: `0 0 ${50 * s}px ${50 * s}px` }} />
        {/* cheeks */}
        <div style={{ position: "absolute", top: 98 * s, left: 30 * s, width: 20 * s, height: 12 * s, background: "rgba(255,120,120,.5)", borderRadius: "50%" }} />
        <div style={{ position: "absolute", top: 98 * s, right: 30 * s, width: 20 * s, height: 12 * s, background: "rgba(255,120,120,.5)", borderRadius: "50%" }} />
      </div>
      {/* arms */}
      <div style={{ position: "absolute", top: 96 * s, left: -14 * s, width: 30 * s, height: 13 * s, background: "#FFC93C", border: `${4 * s}px solid #E8A317`, borderRadius: 10 * s, transform: "rotate(30deg)", zIndex: 1 }} />
      <div style={{ position: "absolute", top: 74 * s, right: -18 * s, width: 30 * s, height: 13 * s, background: "#FFC93C", border: `${4 * s}px solid #E8A317`, borderRadius: 10 * s, transform: "rotate(-38deg)", zIndex: 3 }} />
    </div>
  );
}

function XuCoinSmall() {
  return (
    <div style={{ position: "relative", width: 96, height: 96, borderRadius: "50%", background: "radial-gradient(circle at 38% 30%,#FFEFA8,#FFC93C 56%,#EFAE20)", border: "6px solid #fff", boxShadow: "0 9px 0 rgba(0,0,0,.18)", animation: "bob 4s ease-in-out infinite" }}>
      <div style={{ position: "absolute", top: 34, left: 22, color: "#3A2A00", font: "800 16px 'Baloo 2'" }}>★</div>
      <div style={{ position: "absolute", top: 34, right: 22, color: "#3A2A00", font: "800 16px 'Baloo 2'" }}>★</div>
      <div style={{ position: "absolute", top: 54, left: "50%", transform: "translateX(-50%)", width: 32, height: 17, background: "#3A2A00", borderRadius: "0 0 32px 32px" }} />
      <div style={{ position: "absolute", top: 50, left: 14, width: 12, height: 8, background: "rgba(255,120,120,.55)", borderRadius: "50%" }} />
      <div style={{ position: "absolute", top: 50, right: 14, width: 12, height: 8, background: "rgba(255,120,120,.55)", borderRadius: "50%" }} />
    </div>
  );
}

/* ─── Hero illustration scene ─── */
function HeroScene() {
  return (
    <div className="hero-scene" style={{ position: "relative", height: 520 }}>
      {/* ground shadow */}
      <div style={{ position: "absolute", left: "50%", bottom: 74, transform: "translateX(-50%)", width: 380, height: 46, borderRadius: "50%", background: "radial-gradient(ellipse,rgba(20,60,35,.13),transparent 70%)" }} />

      {/* floating coin */}
      <div style={{ position: "absolute", top: 42, left: 30, animation: "bob 4s ease-in-out infinite" }}>
        <div style={{ width: 46, height: 46, borderRadius: "50%", background: "radial-gradient(circle at 38% 30%,#FFE594,#FFC93C 60%,#EFAE20)", border: "3px solid #E8A317", boxShadow: "0 4px 0 #C98A12", display: "flex", alignItems: "center", justifyContent: "center", font: "800 18px 'Baloo 2'", color: "#9A6A00" }}>₫</div>
      </div>

      {/* gem */}
      <div style={{ position: "absolute", top: 18, right: 64, animation: "bob3 5s ease-in-out infinite" }}>
        <div style={{ width: 0, height: 0, borderLeft: "18px solid transparent", borderRight: "18px solid transparent", borderTop: "26px solid #8B5CF6", filter: "drop-shadow(0 4px 4px rgba(110,70,200,.3))" }} />
        <div style={{ width: 36, height: 13, background: "#A981FF", borderRadius: "3px 3px 0 0", marginTop: -26, clipPath: "polygon(0 100%,18% 0,82% 0,100% 100%)" }} />
      </div>

      {/* flame */}
      <div style={{ position: "absolute", top: 120, right: 18, animation: "bob2 4.5s ease-in-out .6s infinite" }}>
        <div style={{ width: 40, height: 48, background: "linear-gradient(180deg,#FFB23D,#FF6A2E)", borderRadius: "50% 50% 50% 50%/60% 60% 40% 40%", boxShadow: "inset 0 -6px 8px rgba(200,60,0,.3)", position: "relative" }}>
          <div style={{ position: "absolute", inset: "8px 9px 6px", background: "linear-gradient(180deg,#FFE08A,#FFB347)", borderRadius: "50% 50% 50% 50%/60% 60% 40% 40%" }} />
        </div>
      </div>

      {/* chart card */}
      <div style={{ position: "absolute", bottom: 120, left: 0, animation: "drift 6s ease-in-out infinite" }}>
        <div style={{ width: 78, height: 64, background: "#fff", border: "3px solid #E0E8DA", borderRadius: 14, boxShadow: "0 6px 0 #E0E8DA", display: "flex", alignItems: "flex-end", gap: 6, padding: 10 }}>
          <div style={{ flex: 1, height: "40%", background: "#7BE0A8", borderRadius: "4px 4px 0 0" }} />
          <div style={{ flex: 1, height: "65%", background: "#16C172", borderRadius: "4px 4px 0 0" }} />
          <div style={{ flex: 1, height: "95%", background: "#0E9E5C", borderRadius: "4px 4px 0 0" }} />
        </div>
      </div>

      {/* heart */}
      <div style={{ position: "absolute", bottom: 96, right: 36, animation: "bob 3.6s ease-in-out .3s infinite" }}>
        <div style={{ position: "relative", width: 34, height: 30 }}>
          <div style={{ position: "absolute", width: 20, height: 32, left: 7, top: 0, background: "#FF5366", borderRadius: "10px 10px 0 0", transform: "rotate(-45deg)", transformOrigin: "bottom" }} />
          <div style={{ position: "absolute", width: 20, height: 32, left: 7, top: 0, background: "#FF5366", borderRadius: "10px 10px 0 0", transform: "rotate(45deg)", transformOrigin: "bottom" }} />
        </div>
      </div>

      {/* sparkles */}
      <div style={{ position: "absolute", top: 80, left: 160, color: "#FFC93C", font: "800 22px 'Baloo 2'", animation: "pop 3s ease-in-out infinite" }}>✦</div>
      <div style={{ position: "absolute", bottom: 170, right: 120, color: "#16C172", font: "800 16px 'Baloo 2'", animation: "pop 3.4s ease-in-out .5s infinite" }}>✦</div>

      {/* Buddy: green sprout */}
      <div style={{ position: "absolute", left: 34, bottom: 96, animation: "bob2 5.2s ease-in-out infinite" }}>
        <div style={{ position: "relative", width: 92, height: 92, borderRadius: "50%", background: "radial-gradient(circle at 38% 30%,#5BE89A,#22C46F 62%,#13A258)", border: "5px solid #0E9E5C", boxShadow: "0 7px 0 rgba(10,110,60,.4)" }}>
          <div style={{ position: "absolute", top: -20, left: "50%", transform: "translateX(-50%) rotate(-12deg)", width: 14, height: 24, background: "#1FBF6E", borderRadius: "60% 0 60% 0" }} />
          <div style={{ position: "absolute", top: 50, left: 24, width: 9, height: 13, background: "#0A3A22", borderRadius: "50%" }} />
          <div style={{ position: "absolute", top: 50, right: 24, width: 9, height: 13, background: "#0A3A22", borderRadius: "50%" }} />
          <div style={{ position: "absolute", top: 65, left: "50%", transform: "translateX(-50%)", width: 22, height: 11, border: "3px solid #0A3A22", borderTop: "none", borderRadius: "0 0 26px 26px" }} />
          <div style={{ position: "absolute", top: 46, left: -13, width: 18, height: 9, background: "#22C46F", border: "2px solid #0E9E5C", borderRadius: 8, transform: "rotate(24deg)" }} />
          <div style={{ position: "absolute", top: 46, right: -13, width: 18, height: 9, background: "#22C46F", border: "2px solid #0E9E5C", borderRadius: 8, transform: "rotate(-24deg)" }} />
        </div>
      </div>

      {/* Buddy: purple gem */}
      <div style={{ position: "absolute", right: 46, bottom: 104, animation: "bob 4.6s ease-in-out .4s infinite" }}>
        <div style={{ position: "relative", width: 82, height: 82, borderRadius: 24, background: "linear-gradient(160deg,#B493FF,#8B5CF6 60%,#6F3CE0)", border: "4px solid #6F3CE0", boxShadow: "0 7px 0 rgba(80,40,170,.4)", transform: "rotate(-6deg)" }}>
          <div style={{ position: "absolute", top: 14, left: 14, right: 14, height: 16, background: "rgba(255,255,255,.28)", borderRadius: 8 }} />
          <div style={{ position: "absolute", top: 40, left: 20, width: 8, height: 12, background: "#2C1660", borderRadius: "50%" }} />
          <div style={{ position: "absolute", top: 40, right: 20, width: 8, height: 12, background: "#2C1660", borderRadius: "50%" }} />
          <div style={{ position: "absolute", top: 56, left: "50%", transform: "translateX(-50%)", width: 18, height: 9, border: "3px solid #2C1660", borderTop: "none", borderRadius: "0 0 20px 20px" }} />
        </div>
      </div>

      {/* Main Xu (front center) */}
      <div style={{ position: "absolute", left: "50%", bottom: 60, transform: "translateX(-50%)", animation: "bob 5s ease-in-out infinite", zIndex: 4 }}>
        <XuCoin size={184} />
      </div>

      {/* Coin stack */}
      <div style={{ position: "absolute", left: 96, bottom: 58, zIndex: 5, animation: "drift 5.5s ease-in-out .8s infinite" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 3, alignItems: "center" }}>
          <div style={{ width: 54, height: 14, borderRadius: "50%/100%", background: "linear-gradient(180deg,#FFE08A,#FFC93C)", border: "2px solid #E8A317" }} />
          <div style={{ width: 60, height: 15, borderRadius: "50%/100%", background: "linear-gradient(180deg,#FFE08A,#FFC93C)", border: "2px solid #E8A317", marginTop: -2 }} />
          <div style={{ width: 66, height: 16, borderRadius: "50%/100%", background: "linear-gradient(180deg,#FFE08A,#FFC93C)", border: "2px solid #E8A317", marginTop: -2 }} />
        </div>
      </div>

      {/* Piggy bank */}
      <div style={{ position: "absolute", right: 66, bottom: 56, zIndex: 5, animation: "bob2 5.8s ease-in-out .2s infinite" }}>
        <div style={{ position: "relative", width: 78, height: 60, background: "linear-gradient(160deg,#FF9FC4,#FF6FA8)", borderRadius: "50% 50% 46% 46%/56% 56% 44% 44%", boxShadow: "0 6px 0 #E04A86" }}>
          <div style={{ position: "absolute", top: -8, left: "50%", transform: "translateX(-50%)", width: 18, height: 6, background: "#E04A86", borderRadius: 4 }} />
          <div style={{ position: "absolute", top: 22, left: 14, width: 6, height: 8, background: "#7A1F45", borderRadius: "50%" }} />
          <div style={{ position: "absolute", left: -7, top: 26, width: 16, height: 16, background: "#FF6FA8", border: "2px solid #E04A86", borderRadius: "50%" }} />
          <div style={{ position: "absolute", bottom: -7, left: 14, width: 11, height: 12, background: "#E04A86", borderRadius: "0 0 6px 6px" }} />
          <div style={{ position: "absolute", bottom: -7, right: 14, width: 11, height: 12, background: "#E04A86", borderRadius: "0 0 6px 6px" }} />
        </div>
      </div>
    </div>
  );
}

/* ─── Feature row mocks ─── */
function PhoneMock() {
  return (
    <div style={{ position: "relative", height: 240, background: "#F4FBF4", borderRadius: 28, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ width: 124, height: 200, background: "#fff", border: "5px solid #15392A", borderRadius: 24, padding: "14px 11px", boxShadow: "0 10px 0 rgba(20,50,30,.12)" }}>
        <div style={{ height: 8, borderRadius: 5, background: "#ECF1E6", overflow: "hidden", marginBottom: 12 }}>
          <div style={{ width: "70%", height: "100%", background: "#16C172" }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ height: 30, borderRadius: 9, border: "2px solid #16C172", background: "#EAFBF1" }} />
          <div style={{ height: 30, borderRadius: 9, border: "2px solid #ECF1E6" }} />
          <div style={{ height: 30, borderRadius: 9, border: "2px solid #ECF1E6" }} />
          <div style={{ height: 30, borderRadius: 9, background: "#16C172", boxShadow: "0 3px 0 #0E9E5C" }} />
        </div>
      </div>
      <div style={{ position: "absolute", right: 34, top: 28, width: 48, height: 48, borderRadius: "50%", background: "radial-gradient(circle at 38% 30%,#FFE594,#FFC93C 58%,#EFAE20)", border: "3px solid #E8A317", boxShadow: "0 4px 0 #C98A12", animation: "bob 4s ease-in-out infinite" }}>
        <div style={{ position: "absolute", top: 17, left: 11, width: 6, height: 8, background: "#3A2A00", borderRadius: "50%" }} />
        <div style={{ position: "absolute", top: 17, right: 11, width: 6, height: 8, background: "#3A2A00", borderRadius: "50%" }} />
        <div style={{ position: "absolute", top: 28, left: "50%", transform: "translateX(-50%)", width: 14, height: 7, border: "2.5px solid #3A2A00", borderTop: "none", borderRadius: "0 0 16px 16px" }} />
      </div>
    </div>
  );
}

function StreakMock() {
  return (
    <div style={{ position: "relative", height: 240, background: "#FFF6E4", borderRadius: 28, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ width: 170, background: "linear-gradient(150deg,#FF9A4D,#FF7A2E)", borderRadius: 22, padding: 18, textAlign: "center", color: "#fff", boxShadow: "0 8px 0 #D96020" }}>
        <div style={{ font: "800 50px 'Baloo 2'", lineHeight: 1 }}>7</div>
        <div style={{ font: "800 15px 'Baloo 2'", marginTop: 2 }}>ngày streak! 🔥</div>
        <div style={{ display: "flex", justifyContent: "center", gap: 5, marginTop: 12 }}>
          {[1,2,3].map(i => (
            <div key={i} style={{ width: 18, height: 18, borderRadius: "50%", background: "rgba(255,255,255,.92)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FF7A2E", font: "800 9px 'Baloo 2'" }}>✓</div>
          ))}
          <div style={{ width: 18, height: 18, borderRadius: "50%", background: "rgba(255,255,255,.32)", border: "2px dashed rgba(255,255,255,.8)" }} />
        </div>
      </div>
      <div style={{ position: "absolute", left: 30, bottom: 28, color: "#FF8A3D", font: "800 22px 'Baloo 2'", animation: "pop 3s ease-in-out infinite" }}>✦</div>
    </div>
  );
}

function TopicChipsMock() {
  const chips = [
    { emoji: "💰", label: "Tiết kiệm", color: "#0E9E5C" },
    { emoji: "📈", label: "Đầu tư", color: "#7C4DEC" },
    { emoji: "🧾", label: "Ngân sách", color: "#E07320" },
    { emoji: "🛡️", label: "Tránh nợ", color: "#E03A4E" },
  ];
  return (
    <div style={{ position: "relative", height: 240, background: "#F3EEFF", borderRadius: 28, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10, width: 230, justifyContent: "center" }}>
        {chips.map(c => (
          <span key={c.label} style={{ background: "#fff", color: c.color, borderRadius: 30, padding: "10px 16px", font: "800 14px 'Baloo 2'", boxShadow: "0 4px 0 rgba(20,50,30,.08)" }}>
            {c.emoji} {c.label}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── Topics ─── */
const TOPIC_META = {
  "money-basics":     { emoji: "💵", label: "Cơ bản về tiền" },
  "saving":           { emoji: "🐷", label: "Tiết kiệm" },
  "personal-finance": { emoji: "🧾", label: "Quản lý chi tiêu" },
  "borrowing":        { emoji: "💳", label: "Vay & nợ" },
  "investing":        { emoji: "📈", label: "Đầu tư" },
  "stocks":           { emoji: "📊", label: "Chứng khoán" },
  "digital-assets":   { emoji: "🪙", label: "Tài sản số" },
};

export default function Landing() {
  const router = useRouter();
  const [showLogin, setShowLogin] = useState(false);
  const enterApp = () => router.push("/learn");
  const { books: BOOKS } = useBooks();

  return (
    <div style={{ width: "100%", minHeight: "100vh", background: "#fff", overflowX: "hidden", fontFamily: "'Nunito', sans-serif" }}>
      <style>{KEYFRAMES}</style>

      {/* ── NAV ── */}
      <div style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(255,255,255,.88)", backdropFilter: "blur(10px)", borderBottom: "1px solid #EEF3E9" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", height: 68, padding: "0 28px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ position: "relative", width: 38, height: 38, borderRadius: "50%", background: "radial-gradient(circle at 38% 32%,#FFE594,#FFC93C 58%,#F2B01E)", border: "3px solid #E8A317", boxShadow: "0 3px 0 #C98A12", flexShrink: 0 }}>
              <div style={{ position: "absolute", top: 14, left: 9, width: 5, height: 7, background: "#3A2A00", borderRadius: "50%" }} />
              <div style={{ position: "absolute", top: 14, right: 9, width: 5, height: 7, background: "#3A2A00", borderRadius: "50%" }} />
              <div style={{ position: "absolute", top: 23, left: "50%", transform: "translateX(-50%)", width: 12, height: 6, border: "2.5px solid #3A2A00", borderTop: "none", borderRadius: "0 0 14px 14px" }} />
            </div>
            <span style={{ font: "800 24px 'Baloo 2'", color: "#16C172", letterSpacing: "-.5px" }}>XuXu</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <span className="nav-links" style={{ font: "700 14px 'Nunito'", color: "#5B7065", cursor: "pointer" }} onClick={enterApp}>Khoá học</span>
            <span className="nav-links" style={{ font: "700 14px 'Nunito'", color: "#5B7065", cursor: "pointer" }}>Về XuXu</span>
            <button className="btn3d" onClick={() => setShowLogin(true)} style={{ background: "#fff", color: "#16C172", border: "2px solid #E0E8DA", borderBottomWidth: 4, borderRadius: 13, padding: "9px 18px", font: "800 13px 'Baloo 2'", letterSpacing: ".4px" }}>ĐĂNG NHẬP</button>
            <button className="btn3d" onClick={enterApp} style={{ background: "#16C172", color: "#fff", border: "none", borderRadius: 13, boxShadow: "0 4px 0 #0E9E5C", padding: "11px 20px", font: "800 13px 'Baloo 2'", letterSpacing: ".4px" }}>BẮT ĐẦU</button>
          </div>
        </div>
      </div>

      {/* ── HERO ── */}
      <div style={{ position: "relative", background: "linear-gradient(180deg,#F4FBF4 0%,#FFFFFF 70%)", padding: "18px 0 70px", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 60, left: -80, width: 340, height: 340, borderRadius: "50%", background: "radial-gradient(circle,#D7F4E2,transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -60, right: -60, width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(circle,#FFF1CF,transparent 70%)", pointerEvents: "none" }} />

        <div className="hero-grid" style={{ maxWidth: 1180, margin: "0 auto", padding: "0 28px", display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: 36, alignItems: "center", position: "relative", minHeight: 520 }}>

          {/* LEFT: illustration */}
          <HeroScene />

          {/* RIGHT: copy */}
          <div className="hero-copy" style={{ textAlign: "left" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "#E3F7EC", borderRadius: 30, padding: "7px 15px", marginBottom: 22 }}>
              <span style={{ color: "#0E9E5C", font: "800 13px 'Baloo 2'" }}>✦</span>
              <span style={{ font: "800 13px 'Nunito'", color: "#0E9E5C", letterSpacing: ".3px" }}>Miễn phí · Vui nhộn · Hiệu quả</span>
            </div>
            <h1 style={{ font: "800 54px/1.08 'Baloo 2'", color: "#15392A", letterSpacing: -1, marginBottom: 18 }}>
              Hiểu về <span style={{ color: "#16C172" }}>Tiền</span><br />theo cách vui nhất.
            </h1>
            <p style={{ font: "600 18px/1.6 'Nunito'", color: "#5B7065", maxWidth: 430, marginBottom: 30 }}>
              Học tài chính cùng XuXu — mỗi ngày vài phút, qua các bài học ngắn, đố vui và streak. Để bạn không bao giờ <b style={{ color: "#15392A" }}>"0 xu"</b>.
            </p>
            <div className="hero-ctas" style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18, flexWrap: "wrap" }}>
              <button className="btn3d" onClick={enterApp} style={{ background: "#16C172", color: "#fff", border: "none", borderRadius: 16, boxShadow: "0 5px 0 #0E9E5C", padding: "16px 34px", font: "800 17px 'Baloo 2'", letterSpacing: ".5px" }}>BẮT ĐẦU HỌC</button>
              <button className="btn3d" onClick={() => setShowLogin(true)} style={{ background: "#fff", color: "#16C172", border: "2px solid #E0E8DA", borderBottomWidth: 5, borderRadius: 16, padding: "14px 28px", font: "800 16px 'Baloo 2'", letterSpacing: ".5px" }}>TÔI ĐÃ CÓ TÀI KHOẢN</button>
            </div>
            <div className="hero-trust" style={{ display: "flex", alignItems: "center", gap: 18, font: "700 13px 'Nunito'", color: "#9AA89E", flexWrap: "wrap" }}>
              {["Học miễn phí", "Học mà chơi", "Học 5–10 phút/ngày"].map(t => (
                <span key={t} style={{ display: "flex", alignItems: "center", gap: 5 }}>
                  <span style={{ color: "#16C172", fontSize: 15 }}>✓</span> {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── FEATURE ROWS ── */}
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "80px 28px 40px", display: "flex", flexDirection: "column", gap: 90 }}>

        {/* Row 1 */}
        <div className="feature-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 50, alignItems: "center" }}>
          <div>
            <div style={{ font: "800 14px 'Nunito'", color: "#16C172", letterSpacing: 1, marginBottom: 10 }}>DỰA TRÊN CĂN CỨ</div>
            <h2 style={{ font: "800 34px/1.18 'Baloo 2'", color: "#15392A", marginBottom: 14 }}>Bài học thiết kế khoa học, dễ vào đầu.</h2>
            <p style={{ font: "600 16px/1.6 'Nunito'", color: "#5B7065" }}>XuXu chia kiến thức tài chính thành những mảnh nhỏ, lặp lại đúng lúc và đố vui để bạn nhớ lâu — không cần đọc cả cuốn sách dày.</p>
          </div>
          <div className="feature-visual"><PhoneMock /></div>
        </div>

        {/* Row 2 */}
        <div className="feature-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 50, alignItems: "center" }}>
          <div className="feature-visual"><StreakMock /></div>
          <div>
            <div style={{ font: "800 14px 'Nunito'", color: "#FF8A3D", letterSpacing: 1, marginBottom: 10 }}>TIẾP THÊM ĐỘNG LỰC</div>
            <h2 style={{ font: "800 34px/1.18 'Baloo 2'", color: "#15392A", marginBottom: 14 }}>Giữ streak, gom xu, lên hạng.</h2>
            <p style={{ font: "600 16px/1.6 'Nunito'", color: "#5B7065" }}>Học đều mỗi ngày để giữ ngọn lửa streak, kiếm xu thưởng và leo bảng xếp hạng cùng bạn bè. Tài chính chưa bao giờ gây nghiện đến thế.</p>
          </div>
        </div>

        {/* Row 3 */}
        <div className="feature-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 50, alignItems: "center" }}>
          <div>
            <div style={{ font: "800 14px 'Nunito'", color: "#8B5CF6", letterSpacing: 1, marginBottom: 10 }}>CÁ NHÂN HOÁ</div>
            <h2 style={{ font: "800 34px/1.18 'Baloo 2'", color: "#15392A", marginBottom: 14 }}>Lộ trình riêng cho mục tiêu của bạn.</h2>
            <p style={{ font: "600 16px/1.6 'Nunito'", color: "#5B7065" }}>Dù bạn muốn tiết kiệm mua nhà, bắt đầu đầu tư hay thoát nợ — XuXu gợi ý bài học phù hợp và điều chỉnh theo tốc độ học của bạn.</p>
          </div>
          <div className="feature-visual"><TopicChipsMock /></div>
        </div>
      </div>

      {/* ── HỌC THEO CHỦ ĐỀ ── */}
      <div style={{ background: "#F4F8EF", padding: "64px 0" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 28px", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "#EAFBF1", borderRadius: 30, padding: "6px 14px", marginBottom: 14 }}>
            <span style={{ color: "#0E9E5C", font: "800 12px 'Baloo 2'" }}>✦</span>
            <span style={{ font: "800 12px 'Nunito'", color: "#0E9E5C" }}>Học theo chủ đề</span>
          </div>
          <h2 style={{ font: "800 32px 'Baloo 2'", color: "#15392A", marginBottom: 8 }}>Chọn chủ đề, bắt đầu hành trình.</h2>
          <p style={{ font: "600 16px 'Nunito'", color: "#5B7065", marginBottom: 34, maxWidth: 520, marginInline: "auto" }}>
            Từ những đồng xu đầu tiên đến tài sản số — đi cùng XuXu từng bước, theo đúng điều bạn muốn hiểu.
          </p>
          <div className="topics-grid" style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 14 }}>
            {Object.entries(TOPIC_META).map(([key, m]) => (
              <button
                key={key}
                className="btn3d"
                onClick={enterApp}
                style={{ background: "#fff", border: "2px solid #ECF1E6", borderBottomWidth: 4, borderRadius: 18, padding: "18px 8px", cursor: "pointer" }}
              >
                <div style={{ fontSize: 28, marginBottom: 8 }}>{m.emoji}</div>
                <div style={{ font: "800 12px 'Baloo 2'", color: "#15392A", lineHeight: 1.2 }}>{m.label}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── HỌC THEO SÁCH ── */}
      <div style={{ background: "#fff", padding: "72px 0", borderTop: "1px solid #EEF3E9" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 28px" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "#FFF3DC", borderRadius: 30, padding: "6px 14px", marginBottom: 14 }}>
              <span style={{ color: "#9A6A0E", font: "800 12px 'Baloo 2'" }}>📖</span>
              <span style={{ font: "800 12px 'Nunito'", color: "#9A6A0E" }}>Học theo sách</span>
            </div>
            <h2 style={{ font: "800 32px 'Baloo 2'", color: "#15392A", marginBottom: 10 }}>Tinh hoa từ những cuốn sách tài chính kinh điển.</h2>
            <p style={{ font: "600 16px 'Nunito'", color: "#5B7065", maxWidth: 560, marginInline: "auto" }}>
              Không cần đọc hàng trăm trang — XuXu chắt lọc các khái niệm cốt lõi từ những bestseller tài chính được yêu thích nhất thế giới.
            </p>
          </div>
          <div className="books-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 18 }}>
            {BOOKS.map(b => {
              const pct = b.originalPrice && b.originalPrice > b.price ? Math.round((1 - b.price / b.originalPrice) * 100) : 0;
              return (
                <div
                  key={b.id}
                  className="btn3d book-card"
                  onClick={() => router.push(`/shop/book/${b.id}`)}
                  style={{ background: "#fff", borderRadius: 20, padding: 16, cursor: "pointer", textAlign: "left", border: "2px solid #ECF1E6", borderBottomWidth: 4, display: "flex", gap: 14 }}
                >
                  <div style={{ position: "relative" }}>
                    <BookCover book={b} width={92} />
                    {pct > 0 && (
                      <span style={{ position: "absolute", top: -8, left: -8, background: "#FF5366", color: "#fff", borderRadius: 10, padding: "3px 8px", font: "800 11px 'Baloo 2'", boxShadow: "0 3px 0 #D63A4D" }}>-{pct}%</span>
                    )}
                  </div>
                  <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column" }}>
                    <div style={{ font: "800 15px 'Baloo 2'", color: "#15392A", lineHeight: 1.2 }}>{b.title}</div>
                    <div style={{ font: "600 12px 'Nunito'", color: "#9AA89E", margin: "2px 0 8px" }}>{b.author}</div>
                    <div style={{ font: "600 12px/1.45 'Nunito'", color: "#5B7065", flex: 1 }}>{b.tagline}</div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginTop: 10 }}>
                      <span style={{ font: "800 16px 'Baloo 2'", color: "#16C172" }}>{b.price.toLocaleString("vi-VN")}₫</span>
                      {pct > 0 && <span style={{ font: "600 12px 'Nunito'", color: "#C2CDBA", textDecoration: "line-through" }}>{b.originalPrice.toLocaleString("vi-VN")}₫</span>}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div style={{ textAlign: "center", marginTop: 28 }}>
            <button className="btn3d" onClick={() => router.push("/shop")} style={{ background: "#15392A", color: "#fff", border: "none", borderRadius: 14, padding: "13px 28px", font: "800 14px 'Baloo 2'", boxShadow: "0 4px 0 #0A2015" }}>
              Xem tất cả sách tài chính →
            </button>
          </div>
        </div>
      </div>

      {/* ── FINAL CTA ── */}
      <div style={{ position: "relative", background: "linear-gradient(160deg,#16C172,#0C8A50)", padding: "72px 0", textAlign: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 30, left: "10%", width: 30, height: 30, borderRadius: "50%", background: "#FFC93C", border: "2.5px solid #E8A317", opacity: .5, animation: "bob 4s ease-in-out infinite" }} />
        <div style={{ position: "absolute", bottom: 40, right: "12%", width: 22, height: 22, borderRadius: "50%", background: "#FFC93C", border: "2px solid #E8A317", opacity: .4, animation: "bob2 5s ease-in-out infinite" }} />
        <div style={{ position: "absolute", top: 60, right: "18%", color: "rgba(255,255,255,.4)", font: "800 24px 'Baloo 2'", animation: "pop 3s ease-in-out infinite" }}>✦</div>
        <div style={{ maxWidth: 680, margin: "0 auto", padding: "0 28px", position: "relative" }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 22 }}>
            <XuCoinSmall />
          </div>
          <h2 style={{ font: "800 40px 'Baloo 2'", color: "#fff", lineHeight: 1.15, marginBottom: 12 }}>
            Sẵn sàng làm bạn với <span style={{ color: "#FFC93C" }}>Tiền?</span>
          </h2>
          <p style={{ font: "700 17px 'Nunito'", color: "rgba(255,255,255,.9)", marginBottom: 28 }}>
            Hoàn toàn miễn phí. Bắt đầu ngay hôm nay — chỉ 5 phút.
          </p>
          <button className="btn3d" onClick={enterApp} style={{ background: "#fff", color: "#16C172", border: "none", borderRadius: 18, boxShadow: "0 6px 0 rgba(0,0,0,.18)", padding: "18px 44px", font: "800 18px 'Baloo 2'", letterSpacing: ".5px" }}>
            BẮT ĐẦU MIỄN PHÍ →
          </button>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <div style={{ background: "#0F2A1C", padding: "48px 0 30px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 28px", display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 24 }}>
          <div style={{ maxWidth: 300 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 10 }}>
              <div style={{ position: "relative", width: 32, height: 32, borderRadius: "50%", background: "radial-gradient(circle at 38% 32%,#FFE594,#FFC93C 58%,#F2B01E)", border: "2.5px solid #E8A317" }}>
                <div style={{ position: "absolute", top: 12, left: 8, width: 4, height: 6, background: "#3A2A00", borderRadius: "50%" }} />
                <div style={{ position: "absolute", top: 12, right: 8, width: 4, height: 6, background: "#3A2A00", borderRadius: "50%" }} />
                <div style={{ position: "absolute", top: 20, left: "50%", transform: "translateX(-50%)", width: 10, height: 5, border: "2px solid #3A2A00", borderTop: "none", borderRadius: "0 0 12px 12px" }} />
              </div>
              <span style={{ font: "800 20px 'Baloo 2'", color: "#fff" }}>XuXu</span>
            </div>
            <p style={{ font: "600 13px 'Nunito'", color: "rgba(255,255,255,.5)", lineHeight: 1.6 }}>
              Học tài chính — vui, đơn giản, mỗi ngày. Để bạn không bao giờ "0 xu".
            </p>
          </div>
          <div>
            <div style={{ font: "800 13px 'Nunito'", color: "rgba(255,255,255,.4)", letterSpacing: ".5px", marginBottom: 12 }}>LIÊN HỆ</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
              <span style={{ font: "700 13px 'Nunito'", color: "rgba(255,255,255,.75)" }}>👤 Thành Mắm</span>
              <a href="mailto:i.thanhnt@gmail.com" style={{ font: "700 13px 'Nunito'", color: "rgba(255,255,255,.75)", textDecoration: "none" }}>✉ i.thanhnt@gmail.com</a>
              <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
                <a href="https://tiktok.com/@thanhmam.com" target="_blank" rel="noopener noreferrer" style={{ background: "rgba(255,255,255,.08)", borderRadius: 9, padding: "6px 11px", font: "700 12px 'Nunito'", color: "rgba(255,255,255,.7)", textDecoration: "none" }}>TikTok @thanhmam</a>
                <a href="https://facebook.com/i.thanhmam" target="_blank" rel="noopener noreferrer" style={{ background: "rgba(255,255,255,.08)", borderRadius: 9, padding: "6px 11px", font: "700 12px 'Nunito'", color: "rgba(255,255,255,.7)", textDecoration: "none" }}>Facebook i.thanhmam</a>
              </div>
            </div>
          </div>
        </div>
        <div style={{ textAlign: "center", font: "600 12px 'Nunito'", color: "rgba(255,255,255,.32)", marginTop: 34, borderTop: "1px solid rgba(255,255,255,.08)", paddingTop: 20 }}>
          © {new Date().getFullYear()} XuXu · Made with 💚 by Thành Mắm
        </div>
      </div>

      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
    </div>
  );
}
