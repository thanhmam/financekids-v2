"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { useProgress } from "@/hooks/useProgress";
import BottomNav from "@/components/BottomNav";
import DesktopLayout from "@/components/DesktopLayout";

const DAYS = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];

function getWeekStatus(streak) {
  return DAYS.map((_, i) => i < Math.min(streak, 7));
}

export default function StreakPage() {
  const router = useRouter();
  const { profile } = useAuth();
  const { totalXP } = useProgress();
  const streak = profile?.streak || 7;
  const weekStatus = getWeekStatus(streak);
  const xu = profile?.xu || 1250;

  function StreakContent() {
    return (
      <>
        {/* Streak hero */}
        <div style={{ background:"linear-gradient(160deg,#FF9A4D,#FF7A2E)", borderRadius:24, padding:"20px 18px", textAlign:"center", color:"#fff", marginBottom:16, boxShadow:"0 6px 0 #E0631C" }}>
          <div style={{ font:"800 64px 'Baloo 2'", lineHeight:1, textShadow:"0 3px 0 rgba(0,0,0,.15)" }}>{streak}</div>
          <div style={{ font:"800 20px 'Baloo 2'", marginTop:2 }}>ngày streak!</div>
          <div style={{ font:"700 13px 'Nunito'", color:"rgba(255,255,255,.9)", marginTop:4 }}>Giữ phong độ — bạn đang làm rất tốt</div>
        </div>

        {/* Week calendar */}
        <div style={{ display:"flex", justifyContent:"space-between", background:"#fff", borderRadius:18, padding:"14px 12px", marginBottom:16, border:"2px solid #ECF1E6" }}>
          {DAYS.map((day, i) => {
            const done = weekStatus[i];
            const isToday = i === Math.min(streak, 6);
            return (
              <div key={day} style={{ textAlign:"center" }}>
                <div style={{ width:30, height:30, borderRadius:"50%", background:done?"#FF8A3D":"#fff", border:isToday&&!done?"2.5px dashed #FFB877":done?"none":"2px solid #ECF1E6", color:done?"#fff":isToday?"#FF8A3D":"#C2CDBA", display:"flex", alignItems:"center", justifyContent:"center", font:"800 13px 'Baloo 2'", margin:"0 auto" }}>
                  {done ? "✓" : isToday ? "★" : ""}
                </div>
                <div style={{ font:isToday?"800 10px 'Nunito'":"700 10px 'Nunito'", color:done?"#FF8A3D":isToday?"#FF8A3D":"#9AA89E", marginTop:5 }}>{day}</div>
              </div>
            );
          })}
        </div>

        {/* Rewards */}
        <div style={{ font:"800 16px 'Baloo 2'", color:"#15392A", marginBottom:10 }}>Phần thưởng</div>

        <div style={{ display:"flex", alignItems:"center", gap:12, background:"#fff", borderRadius:16, padding:12, border:"2px solid #ECF1E6", marginBottom:10 }}>
          <div style={{ width:44, height:44, borderRadius:12, background:"#FFF8E6", display:"flex", alignItems:"center", justifyContent:"center" }}>
            <span style={{ display:"inline-flex", alignItems:"center", justifyContent:"center", width:26, height:26, borderRadius:"50%", background:"#FFC93C", border:"2px solid #E8A317", color:"#7A4E00", font:"800 13px 'Baloo 2'" }}>X</span>
          </div>
          <div style={{ flex:1 }}>
            <div style={{ font:"800 14px 'Baloo 2'", color:"#15392A" }}>+50 xu thưởng</div>
            <div style={{ font:"600 11px 'Nunito'", color:"#9AA89E" }}>Mốc 7 ngày liên tục</div>
          </div>
          {streak >= 7
            ? <button className="btn-press" style={{ background:"#16C172", color:"#fff", borderRadius:12, padding:"7px 14px", font:"800 12px 'Baloo 2'", border:"none", cursor:"pointer", boxShadow:"0 3px 0 #0E9E5C" }}>NHẬN</button>
            : <div style={{ background:"#F4F8EF", color:"#9AA89E", borderRadius:12, padding:"7px 12px", font:"800 12px 'Baloo 2'" }}>{streak}/7</div>
          }
        </div>

        <div style={{ display:"flex", alignItems:"center", gap:12, background:"#fff", borderRadius:16, padding:12, border:"2px solid #ECF1E6", marginBottom:10 }}>
          <div style={{ width:44, height:44, borderRadius:12, background:"#E9F3FF", display:"flex", alignItems:"center", justifyContent:"center", color:"#2BA3FF", font:"800 20px 'Baloo 2'" }}>❄</div>
          <div style={{ flex:1 }}>
            <div style={{ font:"800 14px 'Baloo 2'", color:"#15392A" }}>Băng giữ streak</div>
            <div style={{ font:"600 11px 'Nunito'", color:"#9AA89E" }}>Bảo vệ 1 ngày lỡ quên</div>
          </div>
          <button onClick={() => router.push("/shop")} style={{ background:"#fff", border:"2px solid #DDE6D6", color:"#5B7065", borderRadius:12, padding:"7px 12px", font:"800 12px 'Baloo 2'", cursor:"pointer" }}>120 xu</button>
        </div>

        <div style={{ display:"flex", alignItems:"center", gap:12, background:"#fff", borderRadius:16, padding:12, border:"2px solid #ECF1E6", marginBottom:10 }}>
          <div style={{ width:44, height:44, borderRadius:12, background:"#FFF3DC", display:"flex", alignItems:"center", justifyContent:"center", color:"#FF8A3D", font:"800 22px 'Baloo 2'" }}>▲</div>
          <div style={{ flex:1 }}>
            <div style={{ font:"800 14px 'Baloo 2'", color:"#15392A" }}>+200 xu thưởng</div>
            <div style={{ font:"600 11px 'Nunito'", color:"#9AA89E" }}>Mốc 30 ngày liên tục</div>
          </div>
          <div style={{ background:"#F4F8EF", color:"#9AA89E", borderRadius:12, padding:"7px 12px", font:"800 12px 'Baloo 2'" }}>{streak}/30</div>
        </div>

        {/* Stats */}
        <div style={{ background:"#15392A", borderRadius:18, padding:"14px 16px", display:"flex", justifyContent:"space-around", marginTop:8 }}>
          <div style={{ textAlign:"center", color:"#fff" }}>
            <div style={{ font:"800 22px 'Baloo 2'", color:"#FF8A3D" }}>{streak}</div>
            <div style={{ font:"600 11px 'Nunito'", color:"rgba(255,255,255,.7)" }}>streak hiện tại</div>
          </div>
          <div style={{ width:1, background:"rgba(255,255,255,.15)" }} />
          <div style={{ textAlign:"center", color:"#fff" }}>
            <div style={{ font:"800 22px 'Baloo 2'", color:"#FFC93C" }}>{totalXP}</div>
            <div style={{ font:"600 11px 'Nunito'", color:"rgba(255,255,255,.7)" }}>tổng XP</div>
          </div>
          <div style={{ width:1, background:"rgba(255,255,255,.15)" }} />
          <div style={{ textAlign:"center", color:"#fff" }}>
            <div style={{ font:"800 22px 'Baloo 2'", color:"#16C172" }}>{xu}</div>
            <div style={{ font:"600 11px 'Nunito'", color:"rgba(255,255,255,.7)" }}>xu tích luỹ</div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {/* ── MOBILE ── */}
      <div className="lg:hidden" style={{ minHeight:"100vh", background:"#F4F8EF", paddingBottom:80 }}>
        <div style={{ background:"#fff", borderBottom:"2px solid #ECF1E6", padding:"14px 20px 16px", display:"flex", alignItems:"center", gap:14, position:"sticky", top:0, zIndex:20 }}>
          <button onClick={() => router.push("/")} style={{ width:40, height:40, borderRadius:12, background:"#F4F8EF", border:"2px solid #ECF1E6", display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer", padding:0, flexShrink:0 }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M11.5 15L6 9L11.5 3" stroke="#15392A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <div style={{ font:"800 20px 'Baloo 2'", color:"#15392A" }}>Streak &amp; Phần thưởng</div>
        </div>
        <div style={{ padding:"16px 18px 0" }}><StreakContent /></div>
        <BottomNav />
      </div>

      {/* ── DESKTOP ── */}
      <DesktopLayout>
        <div style={{ padding:"24px 28px" }}>
          <div style={{ font:"800 24px 'Baloo 2'", color:"#15392A", marginBottom:20 }}>Streak &amp; Phần thưởng</div>
          <StreakContent />
        </div>
      </DesktopLayout>
    </>
  );
}
