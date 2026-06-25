"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { useProgress } from "@/hooks/useProgress";
import BottomNav from "@/components/BottomNav";

const ITEMS = [
  {
    id: "heart_refill",
    icon: "♥",
    iconBg: "#FFE3E7",
    iconColor: "#FF5366",
    name: "Hồi đầy tim",
    desc: "Tiếp tục học ngay",
    price: 350,
    canAfford: true,
  },
  {
    id: "streak_freeze",
    icon: "❄",
    iconBg: "#E9F3FF",
    iconColor: "#2BA3FF",
    name: "Băng giữ streak",
    desc: "Bảo vệ 1 ngày lỡ quên",
    price: 120,
    canAfford: true,
  },
  {
    id: "xp_boost",
    icon: "★",
    iconBg: "#FFF3DC",
    iconColor: "#FF8A3D",
    name: "Nhân đôi XP · 15 phút",
    desc: "Cày điểm thần tốc",
    price: 200,
    canAfford: true,
  },
  {
    id: "skin",
    icon: "◑",
    iconBg: "#F1E9FF",
    iconColor: "#8B5CF6",
    name: "Đổi diện mạo XuXu",
    desc: "Mũ & phụ kiện mới",
    price: 500,
    canAfford: false,
  },
];

export default function ShopPage() {
  const router = useRouter();
  const { profile } = useAuth();
  const { totalXP } = useProgress();
  const [toast, setToast] = useState(null);

  const xu = profile?.xu || 1250;

  const handleBuy = (item) => {
    if (xu < item.price) {
      setToast({ msg: "Không đủ xu!", color: "#FF5366" });
    } else {
      setToast({ msg: `Đã mua "${item.name}"! 🎉`, color: "#16C172" });
    }
    setTimeout(() => setToast(null), 2500);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#F4F8EF", paddingBottom: 80 }}>

      {/* Header */}
      <div style={{
        background: "#fff", borderBottom: "2px solid #ECF1E6",
        padding: "14px 20px 14px", display: "flex", alignItems: "center", justifyContent: "space-between",
        position: "sticky", top: 0, zIndex: 20,
      }}>
        <div style={{ font: "800 22px 'Baloo 2'", color: "#15392A" }}>Cửa hàng</div>
        <div style={{
          display: "flex", alignItems: "center", gap: 6,
          background: "#FFF8E6", border: "2px solid #FFE0A8", borderRadius: 18, padding: "5px 12px",
        }}>
          <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 20, height: 20, borderRadius: "50%", background: "#FFC93C", border: "2px solid #E8A317", color: "#7A4E00", font: "800 11px 'Baloo 2'" }}>X</span>
          <span style={{ font: "800 15px 'Baloo 2'", color: "#15392A" }}>{xu.toLocaleString()}</span>
        </div>
      </div>

      <div style={{ padding: "14px 16px 0" }}>

        {/* Banner sale */}
        <div style={{
          background: "linear-gradient(150deg, #1FD07E, #0E9E5C)",
          borderRadius: 20, padding: 16, color: "#fff", marginBottom: 14,
          boxShadow: "0 5px 0 #0B7A48",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <div>
            <div style={{ font: "800 16px 'Baloo 2'" }}>Gói Tết 🧧</div>
            <div style={{ font: "600 12px 'Nunito'", color: "rgba(255,255,255,.85)" }}>Giảm 20% mọi vật phẩm</div>
          </div>
          <div style={{ background: "rgba(255,255,255,.22)", borderRadius: 12, padding: "8px 12px", font: "800 13px 'Baloo 2'" }}>
            -20%
          </div>
        </div>

        {/* Items list */}
        <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
          {ITEMS.map(item => {
            const affordable = xu >= item.price;
            return (
              <div key={item.id} style={{
                display: "flex", alignItems: "center", gap: 12,
                background: "#fff", border: "2px solid #ECF1E6", borderRadius: 16, padding: 12,
              }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: item.iconBg, display: "flex", alignItems: "center",
                  justifyContent: "center", color: item.iconColor, font: "800 20px 'Baloo 2'",
                  flexShrink: 0,
                }}>
                  {item.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ font: "800 14px 'Baloo 2'", color: "#15392A" }}>{item.name}</div>
                  <div style={{ font: "600 11px 'Nunito'", color: "#9AA89E" }}>{item.desc}</div>
                </div>
                <button
                  className="btn-press"
                  onClick={() => handleBuy(item)}
                  style={{
                    background: affordable ? "#16C172" : "#fff",
                    color: affordable ? "#fff" : "#5B7065",
                    border: affordable ? "none" : "2px solid #DDE6D6",
                    borderRadius: 12, padding: "8px 12px",
                    font: "800 12px 'Baloo 2'",
                    boxShadow: affordable ? "0 3px 0 #0E9E5C" : "none",
                    cursor: "pointer", flexShrink: 0,
                  }}
                >
                  {item.price}
                </button>
              </div>
            );
          })}
        </div>

        {/* Earn more xu */}
        <div style={{
          marginTop: 20, background: "#E3F7EC", border: "2px solid #BFEBD2",
          borderRadius: 18, padding: "14px 16px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <div>
            <div style={{ font: "800 14px 'Baloo 2'", color: "#0E5A38" }}>Kiếm thêm xu</div>
            <div style={{ font: "600 11px 'Nunito'", color: "#5BA882" }}>Học bài để nhận xu mỗi ngày</div>
          </div>
          <button
            className="btn-press"
            onClick={() => router.push("/")}
            style={{ background: "#16C172", color: "#fff", borderRadius: 12, padding: "9px 14px", font: "800 12px 'Baloo 2'", border: "none", boxShadow: "0 3px 0 #0E9E5C", cursor: "pointer" }}
          >
            Học ngay →
          </button>
        </div>
      </div>

      {/* Toast notification */}
      {toast && (
        <div style={{
          position: "fixed", bottom: 90, left: "50%", transform: "translateX(-50%)",
          background: toast.color, color: "#fff", borderRadius: 14,
          padding: "12px 20px", font: "800 14px 'Baloo 2'",
          boxShadow: "0 6px 20px rgba(0,0,0,.18)", zIndex: 100,
          animation: "slideUp .3s ease",
          whiteSpace: "nowrap",
        }}>
          {toast.msg}
        </div>
      )}

      <BottomNav />
    </div>
  );
}
