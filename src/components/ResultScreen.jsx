"use client";

import { useEffect, useState } from "react";
import XuXuMascot from "@/components/XuXuMascot";

const CONFETTI = ["🌟", "💰", "⭐", "🎉", "✨", "🏅", "💎"];

export default function ResultScreen({ lesson, score, answers, onRetry, onHome }) {
  const [show, setShow] = useState(false);
  const [showBtns, setShowBtns] = useState(false);

  const correctCount = answers.filter(a => a.isCorrect).length;
  const totalCount = answers.length;
  const xuEarned = Math.round(score * 0.75);
  const accuracyPct = totalCount > 0 ? Math.round((correctCount / totalCount) * 100) : 0;

  useEffect(() => {
    const t1 = setTimeout(() => setShow(true), 200);
    const t2 = setTimeout(() => setShowBtns(true), 700);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: "#16C172", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "32px 24px", position: "relative", overflow: "hidden" }}>

      <style>{`
        @keyframes floatDown { to { top: 110%; transform: rotate(720deg); opacity: 0; } }
        @keyframes popIn { from { transform: scale(0.4); opacity: 0; } to { transform: scale(1); opacity: 1; } }
      `}</style>

      {/* Confetti */}
      {show && (
        <div style={{ position: "fixed", inset: 0, pointerEvents: "none", overflow: "hidden", zIndex: 0 }}>
          {CONFETTI.map((emoji, i) => (
            <div key={i} style={{ position: "absolute", fontSize: 28, left: `${8 + i * 13}%`, top: "-10%", animation: `floatDown ${2 + i * 0.25}s ease-in ${i * 0.15}s forwards` }}>
              {emoji}
            </div>
          ))}
        </div>
      )}

      <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: 400, display: "flex", flexDirection: "column", alignItems: "center" }}>

        {/* Excited mascot */}
        <div style={{ animation: show ? "popIn 0.5s cubic-bezier(.175,.885,.32,1.275) forwards" : "none", opacity: show ? 1 : 0, marginBottom: 26 }}>
          <XuXuMascot size={130} mood="excited" />
        </div>

        {/* Title */}
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <div style={{ font: "800 30px 'Baloo 2'", color: "#fff", lineHeight: 1.1 }}>Hoàn thành! 🎉</div>
          <div style={{ font: "700 14px 'Nunito'", color: "rgba(255,255,255,.9)", marginTop: 8, lineHeight: 1.5 }}>
            {lesson.title}
          </div>
        </div>

        {/* Reward pills */}
        <div style={{ display: "flex", gap: 12, marginBottom: 32, width: "100%", justifyContent: "center" }}>
          <div style={{ background: "rgba(255,255,255,.18)", borderRadius: 16, padding: "14px 6px", width: 88, textAlign: "center" }}>
            <div style={{ color: "#FFC93C", font: "800 24px 'Baloo 2'" }}>★</div>
            <div style={{ font: "800 18px 'Baloo 2'", color: "#fff", marginTop: 3 }}>+{score}</div>
            <div style={{ font: "700 10px 'Nunito'", color: "rgba(255,255,255,.8)" }}>XP</div>
          </div>
          <div style={{ background: "rgba(255,255,255,.18)", borderRadius: 16, padding: "14px 6px", width: 88, textAlign: "center" }}>
            <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 28, height: 28, borderRadius: "50%", background: "#FFC93C", border: "2px solid #E8A317", color: "#7A4E00", font: "800 13px 'Baloo 2'" }}>X</div>
            <div style={{ font: "800 18px 'Baloo 2'", color: "#fff", marginTop: 3 }}>+{xuEarned}</div>
            <div style={{ font: "700 10px 'Nunito'", color: "rgba(255,255,255,.8)" }}>xu</div>
          </div>
          <div style={{ background: "rgba(255,255,255,.18)", borderRadius: 16, padding: "14px 6px", width: 88, textAlign: "center" }}>
            <div style={{ font: "800 18px 'Baloo 2'", color: "#fff" }}>{correctCount}/{totalCount}</div>
            <div style={{ font: "800 14px 'Baloo 2'", color: "#fff", marginTop: 3 }}>{accuracyPct}%</div>
            <div style={{ font: "700 10px 'Nunito'", color: "rgba(255,255,255,.8)" }}>đúng</div>
          </div>
        </div>

        {/* Parent guide */}
        {lesson.parentGuide && (
          <div style={{ background: "rgba(255,255,255,.15)", borderRadius: 18, padding: "14px 16px", marginBottom: 28, width: "100%" }}>
            <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 6 }}>
              <span style={{ fontSize: 16 }}>👨‍👩‍👧</span>
              <span style={{ font: "800 13px 'Baloo 2'", color: "#fff" }}>Góc phụ huynh</span>
            </div>
            <p style={{ font: "600 12px 'Nunito'", color: "rgba(255,255,255,.9)", lineHeight: 1.5, margin: 0 }}>{lesson.parentGuide}</p>
          </div>
        )}

        {/* Buttons */}
        <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 12, transition: "opacity .4s", opacity: showBtns ? 1 : 0 }}>
          <button
            onClick={onHome}
            style={{ width: "100%", padding: "16px 0", borderRadius: 16, font: "800 17px 'Baloo 2'", color: "#16C172", background: "#fff", border: "none", boxShadow: "0 5px 0 rgba(0,0,0,.18)", cursor: "pointer", letterSpacing: .5 }}
          >
            TIẾP TỤC
          </button>
          <button
            onClick={onRetry}
            style={{ width: "100%", padding: "13px 0", borderRadius: 16, font: "800 15px 'Baloo 2'", color: "rgba(255,255,255,.9)", background: "rgba(255,255,255,.18)", border: "2px solid rgba(255,255,255,.3)", cursor: "pointer" }}
          >
            Thử lại
          </button>
        </div>
      </div>
    </div>
  );
}
