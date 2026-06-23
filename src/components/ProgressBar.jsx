"use client";

import { useEffect, useState } from "react";

export default function ProgressBar({ completed, total, xp }) {
  const [width, setWidth] = useState(0);
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

  const getLevelInfo = (xp) => {
    if (xp < 200) return { level: 1, title: "Chú heo đất", emoji: "🐷", next: 200 };
    if (xp < 500) return { level: 2, title: "Người tiết kiệm", emoji: "💰", next: 500 };
    if (xp < 1000) return { level: 3, title: "Nhà quản lý tiền", emoji: "📊", next: 1000 };
    if (xp < 2000) return { level: 4, title: "Nhà đầu tư nhỏ", emoji: "📈", next: 2000 };
    return { level: 5, title: "Chuyên gia tài chính", emoji: "🏆", next: Infinity };
  };

  const levelInfo = getLevelInfo(xp);
  const levelProgress = levelInfo.next === Infinity ? 100 :
    Math.round(((xp - (levelInfo.level === 1 ? 0 : [0,200,500,1000,2000][levelInfo.level - 1])) /
    (levelInfo.next - (levelInfo.level === 1 ? 0 : [0,200,500,1000,2000][levelInfo.level - 1]))) * 100);

  useEffect(() => {
    const timer = setTimeout(() => setWidth(percent), 200);
    return () => clearTimeout(timer);
  }, [percent]);

  if (completed === 0) return null;

  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-orange-100">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{levelInfo.emoji}</span>
          <div>
            <div className="font-black text-gray-800 text-sm">{levelInfo.title}</div>
            <div className="text-xs text-gray-500 font-semibold">Cấp {levelInfo.level}</div>
          </div>
        </div>
        <div className="text-right">
          <div className="font-black text-orange-500">⭐ {xp} XP</div>
          {levelInfo.next !== Infinity && (
            <div className="text-xs text-gray-400 font-semibold">
              Còn {levelInfo.next - xp} XP lên cấp tiếp
            </div>
          )}
        </div>
      </div>

      {/* XP Progress */}
      <div className="mb-3">
        <div className="flex justify-between text-xs text-gray-500 font-semibold mb-1">
          <span>Tiến độ cấp</span>
          <span>{levelProgress}%</span>
        </div>
        <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${levelProgress}%` }}
          />
        </div>
      </div>

      {/* Lesson Progress */}
      <div>
        <div className="flex justify-between text-xs text-gray-500 font-semibold mb-1">
          <span>📚 Bài học hoàn thành</span>
          <span>{completed}/{total}</span>
        </div>
        <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-green-400 to-teal-400 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${width}%` }}
          />
        </div>
      </div>
    </div>
  );
}
