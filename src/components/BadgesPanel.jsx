"use client";

import { BADGES } from "@/lib/badges";

export default function BadgesPanel({ earnedIds = [] }) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-orange-100">
      <h3 className="font-black text-gray-800 mb-3 flex items-center gap-2">
        🏅 Huy hiệu của bạn
        <span className="bg-orange-100 text-orange-600 text-xs font-black px-2 py-0.5 rounded-full">
          {earnedIds.length}/{BADGES.length}
        </span>
      </h3>
      <div className="grid grid-cols-4 gap-3">
        {BADGES.map((badge) => {
          const earned = earnedIds.includes(badge.id);
          return (
            <div
              key={badge.id}
              className="flex flex-col items-center text-center group"
              title={badge.description}
            >
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-1 transition-all duration-300
                  ${earned
                    ? "shadow-md scale-100"
                    : "opacity-30 grayscale"
                  }`}
                style={earned ? { backgroundColor: badge.color + "20", border: `2px solid ${badge.color}` } : { backgroundColor: "#f5f5f5" }}
              >
                {badge.emoji}
              </div>
              <span
                className={`text-[10px] font-bold leading-tight ${
                  earned ? "text-gray-700" : "text-gray-400"
                }`}
              >
                {badge.name.split(" ").slice(0, 2).join(" ")}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
