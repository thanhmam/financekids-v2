"use client";

import { useEffect, useState, useRef } from "react";

const STAR_MESSAGES = {
  3: { stars: 3, title: "Xuất sắc! 🏆", subtitle: "Bạn là thiên tài tài chính!", emoji: "🌟🌟🌟" },
  2: { stars: 2, title: "Tốt lắm! 🎯", subtitle: "Bạn đã hiểu bài học này!", emoji: "⭐⭐🌟" },
  1: { stars: 1, title: "Cố lên! 💪", subtitle: "Thử lại lần nữa nhé!", emoji: "⭐💫💫" },
  0: { stars: 0, title: "Chưa đạt 😅", subtitle: "Ôn lại và thử lại!", emoji: "💫💫💫" },
};

export default function ResultScreen({ lesson, score, answers, onRetry, onHome }) {
  const [showStars, setShowStars] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const correctCount = answers.filter((a) => a.isCorrect).length;
  const totalCount = answers.length;
  const starCount = Math.round((correctCount / totalCount) * 3);
  const result = STAR_MESSAGES[starCount] || STAR_MESSAGES[0];

  useEffect(() => {
    setTimeout(() => setShowStars(true), 300);
    setTimeout(() => setShowContent(true), 800);
  }, []);

  return (
    <div className="min-h-screen bg-[#FFF9F0] flex flex-col items-center justify-center px-4 py-8">
      {/* Confetti-like floating emojis */}
      {showStars && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {["🌟", "💰", "⭐", "🎉", "✨", "🏅", "💎", "🐷"].map((emoji, i) => (
            <div
              key={i}
              className="absolute text-3xl"
              style={{
                left: `${10 + i * 12}%`,
                top: "-10%",
                animation: `floatDown ${2 + i * 0.3}s ease-in ${i * 0.2}s forwards`,
              }}
            >
              {emoji}
            </div>
          ))}

        </div>
      )}

      <style>{`
        @keyframes floatDown {
          to { top: 110%; transform: rotate(720deg); opacity: 0; }
        }
      `}</style>

      {/* Main card */}
      <div
        className="w-full max-w-sm bg-white rounded-3xl shadow-xl overflow-hidden"
        style={{ animation: showContent ? "pop 0.5s ease forwards" : "none" }}
      >
        {/* Top colored section */}
        <div
          className="pt-8 pb-6 px-6 text-center"
          style={{ backgroundColor: lesson.color }}
        >
          <div className="text-6xl mb-2">{lesson.icon}</div>
          <h2 className="text-white font-black text-xl">{lesson.title}</h2>
          <p className="text-white/80 font-semibold text-sm">Hoàn thành! 🎊</p>
        </div>

        {/* Stars */}
        <div className="py-6 text-center border-b border-gray-100">
          <div
            className={`text-5xl transition-all duration-700 ${
              showStars ? "opacity-100 scale-100" : "opacity-0 scale-50"
            }`}
          >
            {result.emoji}
          </div>
          <h3
            className={`font-black text-2xl text-gray-800 mt-2 transition-all duration-500 delay-300 ${
              showStars ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {result.title}
          </h3>
          <p className="text-gray-500 font-semibold text-sm mt-1">{result.subtitle}</p>
        </div>

        {/* Stats */}
        <div
          className={`p-5 space-y-3 transition-all duration-500 delay-500 ${
            showContent ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex justify-between items-center p-3 bg-green-50 rounded-xl">
            <span className="font-bold text-gray-700">✅ Câu đúng</span>
            <span className="font-black text-green-600 text-lg">
              {correctCount}/{totalCount}
            </span>
          </div>
          <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-xl">
            <span className="font-bold text-gray-700">⭐ XP kiếm được</span>
            <span className="font-black text-yellow-600 text-lg">+{score}</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-orange-50 rounded-xl">
            <span className="font-bold text-gray-700">📚 Bài học</span>
            <span className="font-black text-orange-600 text-sm">{lesson.title}</span>
          </div>
        </div>

        {/* Buttons */}
        <div
          className={`px-5 pb-6 space-y-3 transition-all duration-500 delay-700 ${
            showContent ? "opacity-100" : "opacity-0"
          }`}
        >
          <button
            onClick={onHome}
            className="w-full py-4 rounded-2xl font-black text-white text-lg shadow-lg active:scale-95 transition-transform"
            style={{ backgroundColor: lesson.color }}
          >
            🏠 Về trang chủ
          </button>
          <button
            onClick={onRetry}
            className="w-full py-3 rounded-2xl font-black text-gray-600 bg-gray-100 text-base active:scale-95 transition-transform hover:bg-gray-200"
          >
            🔄 Chơi lại
          </button>
        </div>
      </div>
    </div>
  );
}
