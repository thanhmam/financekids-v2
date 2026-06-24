"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  collection,
  query,
  orderBy,
  limit,
  onSnapshot,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuth } from "@/contexts/AuthContext";

const RANK_STYLE = {
  0: { emoji: "🥇", bg: "bg-yellow-50", border: "border-yellow-300", text: "text-yellow-700" },
  1: { emoji: "🥈", bg: "bg-gray-50", border: "border-gray-300", text: "text-gray-600" },
  2: { emoji: "🥉", bg: "bg-orange-50", border: "border-orange-300", text: "text-orange-700" },
};

function getWeekId() {
  const now = new Date();
  const jan1 = new Date(now.getFullYear(), 0, 1);
  const week = Math.ceil(((now - jan1) / 86400000 + jan1.getDay() + 1) / 7);
  return `${now.getFullYear()}-W${String(week).padStart(2, "0")}`;
}

export default function LeaderboardPage() {
  const router = useRouter();
  const { user } = useAuth();
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const weekId = getWeekId();

  useEffect(() => {
    if (!db) {
      setLoading(false);
      return;
    }
    const q = query(
      collection(db, "leaderboard", weekId, "entries"),
      orderBy("xp", "desc"),
      limit(20)
    );
    const unsub = onSnapshot(
      q,
      (snap) => {
        const data = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
        setEntries(data);
        setLoading(false);
      },
      (err) => {
        console.warn("Leaderboard error:", err);
        setLoading(false);
      }
    );
    return () => unsub();
  }, [weekId]);

  const myRank = entries.findIndex((e) => e.uid === user?.uid);

  return (
    <div className="min-h-screen bg-[#FFF9F0]">
      {/* Header */}
      <div
        className="px-4 pt-6 pb-8 text-center relative"
        style={{ background: "linear-gradient(135deg, #3F51B5, #9C27B0)" }}
      >
        <button
          onClick={() => router.push("/")}
          className="absolute left-4 top-6 text-white/80 font-black text-xl"
        >
          ←
        </button>
        <div className="text-5xl mb-2" style={{ animation: "float 2s ease-in-out infinite" }}>
          🏆
        </div>
        <h1 className="text-white font-black text-2xl">Bảng Xếp Hạng</h1>
        <p className="text-white/70 font-semibold text-sm mt-1">
          Tuần này · {weekId.replace("W", "tuần ")}
        </p>

        {/* My rank bubble */}
        {myRank >= 0 && (
          <div className="mt-3 inline-block bg-white/20 text-white rounded-2xl px-4 py-2">
            <span className="font-black">Bạn đang ở vị trí #{myRank + 1} 🎯</span>
          </div>
        )}

        {/* Wave */}
        <div
          className="absolute bottom-0 left-0 right-0 h-6 bg-[#FFF9F0]"
          style={{ clipPath: "ellipse(55% 100% at 50% 100%)" }}
        />
      </div>

      {/* List */}
      <div className="max-w-lg mx-auto px-4 py-6 space-y-3">
        {loading && (
          <div className="text-center py-12">
            <div className="text-4xl animate-spin inline-block">⭐</div>
            <p className="text-gray-500 font-bold mt-3">Đang tải...</p>
          </div>
        )}

        {!loading && entries.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🌟</div>
            <p className="text-gray-700 font-black text-lg">Chưa có ai trong tuần này!</p>
            <p className="text-gray-500 font-semibold text-sm mt-2">
              Hãy là người đầu tiên kiếm XP nhé!
            </p>
            <button
              onClick={() => router.push("/")}
              className="mt-4 px-6 py-3 rounded-2xl font-black text-white shadow-md"
              style={{ backgroundColor: "#3F51B5" }}
            >
              Bắt đầu học ngay →
            </button>
          </div>
        )}

        {entries.map((entry, idx) => {
          const rank = RANK_STYLE[idx];
          const isMe = entry.uid === user?.uid;

          return (
            <div
              key={entry.id}
              className={`flex items-center gap-4 p-4 rounded-2xl border-2 transition-all
                ${rank ? `${rank.bg} ${rank.border}` : isMe ? "bg-orange-50 border-orange-300" : "bg-white border-gray-100"}
                ${isMe ? "shadow-md" : "shadow-sm"}
              `}
              style={{ animation: `slideUp 0.3s ease ${idx * 40}ms both` }}
            >
              {/* Rank */}
              <div className="w-10 text-center">
                {rank ? (
                  <span className="text-2xl">{rank.emoji}</span>
                ) : (
                  <span className={`font-black text-lg ${isMe ? "text-orange-500" : "text-gray-400"}`}>
                    #{idx + 1}
                  </span>
                )}
              </div>

              {/* Avatar */}
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                style={{ backgroundColor: "#FFF9F0" }}
              >
                {entry.avatar || "🐷"}
              </div>

              {/* Name + XP */}
              <div className="flex-1 min-w-0">
                <div className={`font-black text-base truncate ${rank ? rank.text : isMe ? "text-orange-600" : "text-gray-800"}`}>
                  {entry.displayName || "Bạn nhỏ"}
                  {isMe && <span className="ml-2 text-xs font-bold text-orange-400">(bạn)</span>}
                </div>
                <div className="text-gray-500 font-semibold text-sm">
                  ⭐ {(entry.xp || 0).toLocaleString()} XP tuần này
                </div>
              </div>

              {/* XP bar */}
              {entries[0]?.xp > 0 && (
                <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-orange-400 to-yellow-400"
                    style={{
                      width: `${Math.round(((entry.xp || 0) / entries[0].xp) * 100)}%`,
                    }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer CTA */}
      <div className="max-w-lg mx-auto px-4 pb-16 text-center">
        <p className="text-gray-400 font-semibold text-sm mb-3">
          Bảng xếp hạng reset mỗi thứ Hai
        </p>
        <button
          onClick={() => router.push("/")}
          className="px-8 py-3 rounded-2xl font-black text-white shadow-md"
          style={{ background: "linear-gradient(135deg, #FF6B35, #FFD700)" }}
        >
          📚 Học thêm để leo hạng!
        </button>
      </div>
    </div>
  );
}
