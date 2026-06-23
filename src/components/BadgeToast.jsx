"use client";

import { useEffect, useState } from "react";
import { getBadgeById } from "@/lib/badges";

export default function BadgeToast({ badgeIds, onDismiss }) {
  const [visible, setVisible] = useState(true);
  const [currentIdx, setCurrentIdx] = useState(0);

  const badge = getBadgeById(badgeIds[currentIdx]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIdx < badgeIds.length - 1) {
        setCurrentIdx((i) => i + 1);
      } else {
        setVisible(false);
        setTimeout(onDismiss, 400);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [currentIdx, badgeIds.length, onDismiss]);

  if (!badge || !visible) return null;

  return (
    <div
      className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] flex flex-col items-center"
      style={{ animation: "pop 0.5s cubic-bezier(0.175,0.885,0.32,1.275) forwards" }}
    >
      {/* Glow ring */}
      <div
        className="w-28 h-28 rounded-full flex items-center justify-center shadow-2xl mb-3 pulse-glow"
        style={{ backgroundColor: badge.color + "20", border: `4px solid ${badge.color}` }}
      >
        <span className="text-6xl">{badge.emoji}</span>
      </div>

      {/* Info card */}
      <div className="bg-white rounded-2xl px-6 py-4 shadow-xl text-center max-w-[260px]">
        <p className="text-xs font-black text-orange-500 uppercase tracking-wider mb-1">
          🏅 Huy hiệu mới!
        </p>
        <p className="font-black text-gray-800 text-lg leading-tight">{badge.name}</p>
        <p className="text-gray-500 font-semibold text-sm mt-1">{badge.description}</p>
      </div>

      {/* Dot indicator */}
      {badgeIds.length > 1 && (
        <div className="flex gap-1.5 mt-3">
          {badgeIds.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all ${
                i === currentIdx ? "bg-orange-500 w-4" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
