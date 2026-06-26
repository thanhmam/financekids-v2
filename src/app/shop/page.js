"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { useProgress } from "@/hooks/useProgress";
import BottomNav from "@/components/BottomNav";
import DesktopLayout from "@/components/DesktopLayout";

const ITEMS = [
  { id:"heart_refill",  icon:"♥", iconBg:"#FFE3E7", iconColor:"#FF5366", name:"Hồi đầy tim",          desc:"Tiếp tục học ngay",           price:350 },
  { id:"streak_freeze", icon:"❄", iconBg:"#E9F3FF", iconColor:"#2BA3FF", name:"Băng giữ streak",       desc:"Bảo vệ 1 ngày lỡ quên",       price:120 },
  { id:"xp_boost",      icon:"★", iconBg:"#FFF3DC", iconColor:"#FF8A3D", name:"Nhân đôi XP · 15'",    desc:"Cày điểm thần tốc",            price:200 },
  { id:"skin",          icon:"◑", iconBg:"#F1E9FF", iconColor:"#8B5CF6", name:"Đổi diện mạo XuXu",    desc:"Mũ & phụ kiện mới",            price:500, locked:true },
  { id:"unlock_invest", icon:"▲", iconBg:"#F1E9FF", iconColor:"#7C4DEC", name:"Mở chủ đề Đầu tư",     desc:"Truy cập sớm 6 bài học",       price:120, locked:true },
  { id:"combo_save",    icon:"◈", iconBg:"#FFF8E6", iconColor:"#E8A317", name:"Combo tiết kiệm",       desc:"5 băng + 3 hồi tim",           price:800 },
];

function XuBadge({ amount }) {
  return (
    <div style={{ display:"flex", alignItems:"center", gap:6, background:"#FFF8E6", border:"2px solid #FFE0A8", borderRadius:18, padding:"5px 12px" }}>
      <span style={{ display:"inline-flex", alignItems:"center", justifyContent:"center", width:20, height:20, borderRadius:"50%", background:"#FFC93C", border:"2px solid #E8A317", color:"#7A4E00", font:"800 11px 'Baloo 2'" }}>X</span>
      <span style={{ font:"800 15px 'Baloo 2'", color:"#15392A" }}>{amount.toLocaleString()}</span>
    </div>
  );
}

export default function ShopPage() {
  const router = useRouter();
  const { profile } = useAuth();
  const { totalXP } = useProgress();
  const [toast, setToast] = useState(null);
  const xu = profile?.xu || 1250;

  const handleBuy = (item) => {
    setToast(xu < item.price
      ? { msg:"Không đủ xu!", color:"#FF5366" }
      : { msg:`Đã mua "${item.name}"! 🎉`, color:"#16C172" }
    );
    setTimeout(() => setToast(null), 2500);
  };

  function SaleBanner() {
    return (
      <div style={{ background:"linear-gradient(150deg,#1FD07E,#0E9E5C)", borderRadius:20, padding:"16px 20px", color:"#fff", marginBottom:18, boxShadow:"0 5px 0 #0B7A48", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
        <div>
          <div style={{ font:"800 18px 'Baloo 2'" }}>Gói Tết 🧧 — giảm 20%</div>
          <div style={{ font:"600 12px 'Nunito'", color:"rgba(255,255,255,.85)", marginTop:2 }}>Áp dụng cho toàn bộ vật phẩm đến hết tuần này</div>
        </div>
        <div style={{ background:"rgba(255,255,255,.22)", borderRadius:14, padding:"12px 18px", font:"800 20px 'Baloo 2'" }}>-20%</div>
      </div>
    );
  }

  function ItemGrid({ cols = 2 }) {
    return (
      <div style={{ display:"grid", gridTemplateColumns:`repeat(${cols},1fr)`, gap:cols===3?16:11 }}>
        {ITEMS.map(item => {
          const affordable = xu >= item.price;
          const isLocked = item.locked && !affordable;
          return (
            <div key={item.id} style={{ background:"#fff", border:"2px solid #ECF1E6", borderRadius:18, padding:cols===3?"18px":"14px 12px", textAlign:"center" }}>
              <div style={{ width:cols===3?56:52, height:cols===3?56:52, borderRadius:cols===3?16:14, background:item.iconBg, display:"flex", alignItems:"center", justifyContent:"center", color:item.iconColor, font:`800 ${cols===3?26:24}px 'Baloo 2'`, margin:"0 auto 10px" }}>
                {item.icon}
              </div>
              <div style={{ font:`800 ${cols===3?16:13}px 'Baloo 2'`, color:"#15392A", marginBottom:3 }}>{item.name}</div>
              <div style={{ font:"600 12px 'Nunito'", color:"#9AA89E", marginBottom:cols===3?12:10, lineHeight:1.35 }}>{item.desc}</div>
              <button className="btn-press" onClick={() => handleBuy(item)} style={{ width:"100%", background:isLocked||!affordable?"#fff":"#16C172", color:isLocked||!affordable?"#5B7065":"#fff", border:isLocked||!affordable?"2px solid #DDE6D6":"none", borderRadius:12, padding:"10px 0", font:"800 13px 'Baloo 2'", boxShadow:!isLocked&&affordable?"0 4px 0 #0E9E5C":"none", cursor:"pointer" }}>
                {item.price} xu
              </button>
            </div>
          );
        })}
      </div>
    );
  }

  function EarnMore() {
    return (
      <div style={{ marginTop:20, background:"#E3F7EC", border:"2px solid #BFEBD2", borderRadius:18, padding:"14px 16px", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
        <div>
          <div style={{ font:"800 14px 'Baloo 2'", color:"#0E5A38" }}>Kiếm thêm xu</div>
          <div style={{ font:"600 11px 'Nunito'", color:"#5BA882" }}>Học bài để nhận xu mỗi ngày</div>
        </div>
        <button className="btn-press" onClick={() => router.push("/")} style={{ background:"#16C172", color:"#fff", borderRadius:12, padding:"9px 14px", font:"800 12px 'Baloo 2'", border:"none", boxShadow:"0 3px 0 #0E9E5C", cursor:"pointer" }}>
          Học ngay →
        </button>
      </div>
    );
  }

  return (
    <>
      {/* ── MOBILE ── */}
      <div className="lg:hidden" style={{ minHeight:"100vh", background:"#F4F8EF", paddingBottom:80 }}>
        <div style={{ background:"#fff", borderBottom:"2px solid #ECF1E6", padding:"14px 20px", display:"flex", alignItems:"center", justifyContent:"space-between", position:"sticky", top:0, zIndex:20 }}>
          <div style={{ font:"800 22px 'Baloo 2'", color:"#15392A" }}>Cửa hàng</div>
          <XuBadge amount={xu} />
        </div>
        <div style={{ padding:"14px 16px 0" }}>
          <SaleBanner />
          <ItemGrid cols={2} />
          <EarnMore />
        </div>
        {toast && (
          <div style={{ position:"fixed", bottom:90, left:"50%", transform:"translateX(-50%)", background:toast.color, color:"#fff", borderRadius:14, padding:"12px 20px", font:"800 14px 'Baloo 2'", boxShadow:"0 6px 20px rgba(0,0,0,.18)", zIndex:100, animation:"slideUp .3s ease", whiteSpace:"nowrap" }}>{toast.msg}</div>
        )}
        <BottomNav />
      </div>

      {/* ── DESKTOP ── */}
      <DesktopLayout>
        <div style={{ padding:"24px 28px" }}>
          <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:20 }}>
            <div style={{ font:"800 24px 'Baloo 2'", color:"#15392A" }}>Cửa hàng</div>
            <XuBadge amount={xu} />
          </div>
          <SaleBanner />
          <ItemGrid cols={3} />
          <EarnMore />
        </div>
        {toast && (
          <div style={{ position:"fixed", bottom:40, left:"50%", transform:"translateX(-50%)", background:toast.color, color:"#fff", borderRadius:14, padding:"12px 20px", font:"800 14px 'Baloo 2'", boxShadow:"0 6px 20px rgba(0,0,0,.18)", zIndex:100, animation:"slideUp .3s ease", whiteSpace:"nowrap" }}>{toast.msg}</div>
        )}
      </DesktopLayout>
    </>
  );
}
