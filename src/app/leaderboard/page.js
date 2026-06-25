"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { collection, query, orderBy, limit, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuth } from "@/contexts/AuthContext";

function BackIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M11.5 15L6 9L11.5 3" stroke="#15392A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function getWeekId() {
  const now = new Date();
  const jan1 = new Date(now.getFullYear(), 0, 1);
  const week = Math.ceil(((now - jan1) / 86400000 + jan1.getDay() + 1) / 7);
  return `${now.getFullYear()}-W${String(week).padStart(2, "0")}`;
}

const RANK_COLORS = ["#E8A317", "#9AA89E", "#CD7F32"];

export default function LeaderboardPage() {
  const router = useRouter();
  const { user } = useAuth();
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const weekId = getWeekId();

  useEffect(() => {
    if (!db) { setLoading(false); return; }
    const q = query(collection(db, "leaderboard", weekId, "entries"), orderBy("xp", "desc"), limit(20));
    const unsub = onSnapshot(q,
      snap => { setEntries(snap.docs.map(d => ({ id: d.id, ...d.data() }))); setLoading(false); },
      err => { console.warn("Leaderboard error:", err); setLoading(false); }
    );
    return () => unsub();
  }, [weekId]);

  const myRank = entries.findIndex(e => e.uid === user?.uid);

  return (
    <div style={{ minHeight: "100vh", background: "#F4F8EF" }}>

      {/* Header */}
      <div style={{ background: "#fff", borderBottom: "2px solid #ECF1E6", padding: "14px 20px 16px", display: "flex", alignItems: "flex-start", gap: 14 }}>
        <button
          onClick={() => router.push("/")}
          style={{ width: 40, height: 40, borderRadius: 12, background: "#F4F8EF", border: "2px solid #ECF1E6", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", padding: 0, flexShrink: 0, marginTop: 4 }}
        >
          <BackIcon />
        </button>
        <div style={{ flex: 1, textAlign: "center" }}>
          <div style={{ color: "#FFC93C", font: "800 32px 'Baloo 2'", lineHeight: 1 }}>♛</div>
          <div style={{ font: "800 20px 'Baloo 2'", color: "#15392A", marginTop: 2 }}>Hạng Vàng</div>
          <div style={{ font: "600 12px 'Nunito'", color: "#9AA89E", marginTop: 2 }}>
            Top 7 thăng hạng · {weekId.replace("-W", " · tuần ")}
          </div>
        </div>
        <div style={{ width: 40 }} />
      </div>

      {/* My rank */}
      {myRank >= 0 && (
        <div style={{ background: "#EAFBF1", border: "2px solid #16C172", borderRadius: 16, margin: "16px 16px 0", padding: "10px 16px", display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ font: "700 14px 'Nunito'", color: "#0E9E5C" }}>Bạn đang ở vị trí</span>
          <span style={{ font: "800 22px 'Baloo 2'", color: "#16C172" }}>#{myRank + 1}</span>
          <span style={{ fontSize: 18 }}>🎯</span>
        </div>
      )}

      {/* List */}
      <div style={{ padding: "16px 16px 32px", maxWidth: 520, margin: "0 auto" }}>

        {loading && (
          <div style={{ textAlign: "center", padding: "56px 0" }}>
            <div style={{ fontSize: 40, display: "inline-block", animation: "spin 1s linear infinite" }}>⭐</div>
            <p style={{ font: "700 14px 'Nunito'", color: "#9AA89E", marginTop: 12 }}>Đang tải...</p>
          </div>
        )}

        {!loading && entries.length === 0 && (
          <div style={{ textAlign: "center", padding: "64px 0" }}>
            <div style={{ fontSize: 60, marginBottom: 16 }}>🌟</div>
            <p style={{ font: "800 18px 'Baloo 2'", color: "#15392A" }}>Chưa có ai trong tuần này!</p>
            <p style={{ font: "600 13px 'Nunito'", color: "#9AA89E", marginTop: 8 }}>Hãy là người đầu tiên kiếm XP nhé!</p>
            <button
              onClick={() => router.push("/")}
              style={{ marginTop: 20, padding: "13px 28px", borderRadius: 16, font: "800 15px 'Baloo 2'", color: "#fff", background: "#16C172", border: "none", boxShadow: "0 4px 0 #0E9E5C", cursor: "pointer" }}
            >
              Bắt đầu học ngay →
            </button>
          </div>
        )}

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {entries.map((entry, idx) => {
            const isMe = entry.uid === user?.uid;
            const rankColor = RANK_COLORS[idx];
            return (
              <div
                key={entry.id}
                style={{
                  display: "flex", alignItems: "center", gap: 12,
                  background: isMe ? "#EAFBF1" : "#fff",
                  border: `2px solid ${isMe ? "#16C172" : "#ECF1E6"}`,
                  borderRadius: 14, padding: "10px 14px",
                  animation: `slideUp 0.3s ease ${idx * 40}ms both`,
                }}
              >
                <div style={{ width: 26, textAlign: "center", font: "800 15px 'Baloo 2'", color: rankColor || (isMe ? "#16C172" : "#9AA89E"), flexShrink: 0 }}>
                  {idx + 1}
                </div>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#FFF9F0", border: `2px solid ${isMe ? "#16C172" : "#ECF1E6"}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>
                  {entry.avatar || "🐷"}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ font: "800 14px 'Nunito'", color: isMe ? "#0E9E5C" : "#15392A", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {entry.displayName || "Bạn nhỏ"}
                    {isMe && <span style={{ font: "700 11px 'Nunito'", color: "#16C172", marginLeft: 6 }}>(bạn)</span>}
                  </div>
                  <div style={{ font: "600 12px 'Nunito'", color: "#9AA89E", marginTop: 1 }}>
                    ⭐ {(entry.xp || 0).toLocaleString()} XP tuần này
                  </div>
                </div>
                {entries[0]?.xp > 0 && (
                  <div style={{ width: 52, height: 6, background: "#ECF1E6", borderRadius: 4, overflow: "hidden", flexShrink: 0 }}>
                    <div style={{ width: `${Math.round(((entry.xp || 0) / entries[0].xp) * 100)}%`, height: "100%", background: "linear-gradient(90deg, #16C172, #FFC93C)", borderRadius: 4 }} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {entries.length > 0 && (
          <div style={{ textAlign: "center", marginTop: 28 }}>
            <p style={{ font: "600 12px 'Nunito'", color: "#9AA89E", marginBottom: 14 }}>Bảng xếp hạng reset mỗi thứ Hai</p>
            <button
              onClick={() => router.push("/")}
              style={{ padding: "13px 28px", borderRadius: 16, font: "800 15px 'Baloo 2'", color: "#fff", background: "linear-gradient(135deg, #16C172, #0E9E5C)", border: "none", boxShadow: "0 4px 0 #0B7A48", cursor: "pointer" }}
            >
              📚 Học thêm để leo hạng!
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
