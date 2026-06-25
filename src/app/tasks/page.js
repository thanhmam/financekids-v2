"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { useProgress } from "@/hooks/useProgress";
import BottomNav from "@/components/BottomNav";

const DAILY_TASKS = [
  {
    id: "complete_3",
    icon: "✓",
    iconBg: "#E3F7EC",
    iconColor: "#16C172",
    label: "Hoàn thành 3 bài học",
    reward: 30,
    total: 3,
    current: 2,
    done: false,
  },
  {
    id: "earn_100xp",
    icon: "★",
    iconBg: "#FFF3DC",
    iconColor: "#FF8A3D",
    label: "Đạt 100 XP hôm nay",
    reward: 40,
    total: 100,
    current: 60,
    done: false,
  },
  {
    id: "keep_streak",
    icon: "✓",
    iconBg: "#16C172",
    iconColor: "#fff",
    label: null, // filled in dynamically
    done: true,
    reward: 20,
  },
];

const WEEKLY_TASKS = [
  {
    id: "complete_unit",
    label: "Hoàn thành 1 đơn vị",
    desc: "3/6 bài · thưởng 200 xu + huy hiệu",
    progress: 50,
    dark: true,
  },
  {
    id: "top10",
    label: "Top 10 bảng xếp hạng",
    desc: "Hạng 4 hiện tại · thưởng 150 xu",
    progress: 80,
    dark: false,
  },
];

// HH:MM:SS countdown helper
function formatTimer(secs) {
  const h = Math.floor(secs / 3600);
  const m = Math.floor((secs % 3600) / 60);
  const s = secs % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function XuIcon({ size = 18 }) {
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      width: size, height: size, borderRadius: "50%",
      background: "#FFC93C", border: "2px solid #E8A317",
      color: "#7A4E00", font: `800 ${Math.round(size * 0.58)}px 'Baloo 2'`,
      flexShrink: 0,
    }}>X</span>
  );
}

export default function TasksPage() {
  const router = useRouter();
  const { profile } = useAuth();
  const { completed } = useProgress();

  const streak = profile?.streak || 7;
  const [refreshSecs, setRefreshSecs] = useState(8 * 3600 + 24 * 60 + 11);
  const [claimed, setClaimed] = useState({});

  useEffect(() => {
    const t = setInterval(() => setRefreshSecs(s => Math.max(0, s - 1)), 1000);
    return () => clearInterval(t);
  }, []);

  const handleClaim = (id) => setClaimed(c => ({ ...c, [id]: true }));

  return (
    <div style={{ minHeight: "100vh", background: "#F4F8EF", paddingBottom: 80 }}>

      {/* Header */}
      <div style={{
        background: "#fff", borderBottom: "2px solid #ECF1E6",
        padding: "14px 20px", position: "sticky", top: 0, zIndex: 20,
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <div style={{ font: "800 22px 'Baloo 2'", color: "#15392A" }}>Nhiệm vụ</div>
        <div style={{ font: "700 12px 'Nunito'", color: "#9AA89E" }}>
          Làm mới sau <span style={{ color: "#FF8A3D", fontWeight: 800 }}>{formatTimer(refreshSecs)}</span>
        </div>
      </div>

      <div style={{ padding: "16px 16px 0" }}>

        {/* Daily tasks heading */}
        <div style={{ font: "800 17px 'Baloo 2'", color: "#15392A", marginBottom: 12 }}>
          Nhiệm vụ hằng ngày
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 11, marginBottom: 26 }}>
          {DAILY_TASKS.map(task => {
            const isDone = task.done || claimed[task.id];
            const label = task.id === "keep_streak" ? `Giữ streak ${streak} ngày` : task.label;
            const pct = task.total ? Math.round((task.current / task.total) * 100) : 100;
            const progressColor = task.id === "earn_100xp" ? "#FF8A3D" : "#16C172";

            return (
              <div key={task.id} style={{
                display: "flex", alignItems: "center", gap: 14,
                background: isDone ? "#EAFBF1" : "#fff",
                border: `2px solid ${isDone ? "#BFEBD2" : "#ECF1E6"}`,
                borderRadius: 18, padding: "14px 16px",
              }}>
                {/* Icon */}
                <div style={{
                  width: 44, height: 44, borderRadius: 13, flexShrink: 0,
                  background: isDone ? "#16C172" : task.iconBg,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: isDone ? "#fff" : task.iconColor,
                  font: "800 20px 'Baloo 2'",
                }}>
                  {task.icon}
                </div>

                {/* Middle */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ font: "800 14px 'Baloo 2'", color: isDone ? "#0E9E5C" : "#15392A" }}>
                    {label}
                  </div>
                  {isDone && task.id !== "keep_streak" ? (
                    <div style={{ font: "600 11px 'Nunito'", color: "#5BA882", marginTop: 3 }}>
                      Đã hoàn thành!
                    </div>
                  ) : task.id === "keep_streak" ? (
                    <div style={{ font: "600 11px 'Nunito'", color: "#5BA882", marginTop: 3 }}>
                      {claimed[task.id] ? "Đã nhận thưởng!" : "Đã hoàn thành — nhận thưởng!"}
                    </div>
                  ) : (
                    <div style={{ height: 10, borderRadius: 6, background: "#ECF1E6", overflow: "hidden", marginTop: 8 }}>
                      <div style={{ width: `${pct}%`, height: "100%", background: progressColor, transition: "width .5s ease" }} />
                    </div>
                  )}
                </div>

                {/* Right: reward or claim */}
                {task.id === "keep_streak" && !claimed[task.id] ? (
                  <button
                    className="btn-press"
                    onClick={() => handleClaim(task.id)}
                    style={{
                      background: "#16C172", color: "#fff", borderRadius: 11,
                      padding: "8px 14px", font: "800 12px 'Baloo 2'",
                      border: "none", boxShadow: "0 3px 0 #0E9E5C",
                      cursor: "pointer", flexShrink: 0,
                    }}
                  >
                    NHẬN
                  </button>
                ) : (
                  <div style={{ textAlign: "center", flexShrink: 0 }}>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 4, background: "#FFF8E6", borderRadius: 10, padding: "5px 9px" }}>
                      <XuIcon size={16} />
                      <span style={{ font: "800 11px 'Baloo 2'", color: "#15392A" }}>+{task.reward}</span>
                    </div>
                    {task.total && (
                      <div style={{ font: "700 10px 'Nunito'", color: "#9AA89E", marginTop: 4 }}>
                        {isDone ? `${task.total}/${task.total}` : `${task.current}/${task.total}`}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Weekly tasks */}
        <div style={{ font: "800 17px 'Baloo 2'", color: "#15392A", marginBottom: 12 }}>
          Nhiệm vụ tuần
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 11, marginBottom: 20 }}>
          {WEEKLY_TASKS.map(task => (
            <div key={task.id} style={{
              background: task.dark ? "#15392A" : "#fff",
              border: task.dark ? "none" : "2px solid #ECF1E6",
              borderRadius: 18, padding: "17px 18px",
            }}>
              <div style={{ font: "800 15px 'Baloo 2'", color: task.dark ? "#fff" : "#15392A" }}>
                {task.label}
              </div>
              <div style={{ height: 10, borderRadius: 6, background: task.dark ? "rgba(255,255,255,.18)" : "#ECF1E6", overflow: "hidden", margin: "10px 0 7px" }}>
                <div style={{
                  width: `${task.progress}%`, height: "100%",
                  background: task.dark ? "#16C172" : "#8B5CF6",
                  transition: "width .5s ease",
                }} />
              </div>
              <div style={{ font: "600 11px 'Nunito'", color: task.dark ? "rgba(255,255,255,.72)" : "#9AA89E" }}>
                {task.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Go learn CTA */}
        <div style={{
          background: "#E3F7EC", border: "2px solid #BFEBD2", borderRadius: 18,
          padding: "14px 16px", display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <div>
            <div style={{ font: "800 14px 'Baloo 2'", color: "#0E5A38" }}>Hoàn thành nhiệm vụ</div>
            <div style={{ font: "600 11px 'Nunito'", color: "#5BA882" }}>Học bài để nhận xu và huy hiệu</div>
          </div>
          <button
            className="btn-press"
            onClick={() => router.push("/")}
            style={{
              background: "#16C172", color: "#fff", borderRadius: 12,
              padding: "9px 14px", font: "800 12px 'Baloo 2'",
              border: "none", boxShadow: "0 3px 0 #0E9E5C", cursor: "pointer",
            }}
          >
            Học ngay →
          </button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
