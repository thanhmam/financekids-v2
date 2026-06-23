"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const FLOATING_EMOJIS = ["💰", "🐷", "📈", "🏦", "⭐", "💎", "🎯", "🌟"];

export default function HeroSection({ totalXP, completedCount, totalCount, userName, avatar }) {
  const [floaters, setFloaters] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Generate random floating emoji positions
    const items = FLOATING_EMOJIS.map((emoji, i) => ({
      id: i,
      emoji,
      left: `${10 + (i * 11) % 80}%`,
      top: `${20 + (i * 17) % 60}%`,
      delay: `${i * 0.4}s`,
      duration: `${3 + (i % 3)}s`,
    }));
    setFloaters(items);
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Gradient background */}
      <div
        className="animated-gradient min-h-[280px] md:min-h-[320px] flex flex-col items-center justify-center text-center px-4 py-10 relative"
        style={{
          background: "linear-gradient(135deg, #FF6B35 0%, #FFD700 50%, #FF6B35 100%)",
        }}
      >
        {/* Floating emojis */}
        {mounted && floaters.map((f) => (
          <div
            key={f.id}
            className="absolute text-2xl opacity-20 pointer-events-none hidden md:block"
            style={{
              left: f.left,
              top: f.top,
              animation: `float ${f.duration} ease-in-out ${f.delay} infinite`,
            }}
          >
            {f.emoji}
          </div>
        ))}

        {/* Content */}
        <div className="relative z-10">
          <div
            className="text-6xl md:text-8xl mb-3"
            style={{ animation: "float 3s ease-in-out infinite" }}
          >
            {avatar || "🐷"}
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white drop-shadow-md mb-2">
            {userName ? `Xin chào, ${userName}!` : "FinanceKids"}
          </h1>
          <p className="text-white/90 font-bold text-lg md:text-xl mb-6">
            Học tài chính vui vẻ mỗi ngày! 🌟
          </p>

          {/* Stats row */}
          <div className="flex gap-4 justify-center flex-wrap mb-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-4 py-2 text-white">
              <div className="font-black text-xl">⭐ {totalXP.toLocaleString()}</div>
              <div className="text-xs font-semibold opacity-80">điểm XP</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-4 py-2 text-white">
              <div className="font-black text-xl">📚 {completedCount}/{totalCount}</div>
              <div className="text-xs font-semibold opacity-80">bài học</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-4 py-2 text-white">
              <div className="font-black text-xl">🔥 {completedCount > 0 ? "Đang học!" : "Mới bắt đầu"}</div>
              <div className="text-xs font-semibold opacity-80">trạng thái</div>
            </div>
          </div>

          {completedCount === 0 && (
            <p className="text-white/80 text-sm font-semibold animate-bounce">
              👇 Chọn bài học bên dưới để bắt đầu!
            </p>
          )}
        </div>

        {/* Wave bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-8 bg-[#FFF9F0]"
          style={{ clipPath: "ellipse(55% 100% at 50% 100%)" }}
        />
      </div>
    </div>
  );
}
