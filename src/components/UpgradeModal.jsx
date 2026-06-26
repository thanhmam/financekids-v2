"use client";

import { useState } from "react";
import XuXuMascot from "@/components/XuXuMascot";

const PLANS = [
  { id: "monthly", label: "Tháng", price: "49.000đ", sub: "/tháng", badge: null },
  { id: "yearly",  label: "Năm",   price: "399.000đ", sub: "/năm",  badge: "TIẾT KIỆM 32%" },
];

const FEATURES = [
  { icon: "♥", iconBg: "#FFE3E7", iconColor: "#FF5366", pro: "Tim vô hạn",             free: "5 tim / phiên" },
  { icon: "★", iconBg: "#FFF3DC", iconColor: "#FF8A3D", pro: "2× XP mỗi bài học",       free: "1× XP" },
  { icon: "X", iconBg: "#FFF8E6", iconColor: "#E8A317", pro: "2× xu tích luỹ",          free: "1× xu", isXu: true },
  { icon: "▲", iconBg: "#F1E9FF", iconColor: "#8B5CF6", pro: "Truy cập sớm: Đầu tư",   free: "Cơ bản" },
  { icon: "◈", iconBg: "#E9F3FF", iconColor: "#2BA3FF", pro: "Không quảng cáo",         free: "Có upsell" },
];

export default function UpgradeModal({ onClose, onActivate }) {
  const [selected, setSelected] = useState("yearly");
  const [loading, setLoading] = useState(false);

  const handleActivate = async () => {
    setLoading(true);
    try {
      await onActivate();
      onClose();
    } catch (err) {
      console.error("activateTrial error:", err);
      setLoading(false);
    }
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0,
        background: "rgba(21,57,42,.6)",
        backdropFilter: "blur(4px)",
        zIndex: 60,
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "16px",
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          width: "100%", maxWidth: 420,
          background: "#fff",
          borderRadius: 24,
          overflow: "hidden",
          animation: "pop .3s cubic-bezier(.175,.885,.32,1.275)",
          position: "relative",
        }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          style={{
            position: "absolute", top: 12, right: 12, zIndex: 2,
            width: 36, height: 36, borderRadius: 10,
            background: "rgba(255,255,255,.25)", border: "none",
            color: "#fff", font: "800 18px 'Baloo 2'",
            cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
          }}
        >
          ×
        </button>

        {/* Header gradient */}
        <div style={{
          background: "linear-gradient(145deg, #7C4DEC, #8B5CF6)",
          padding: "32px 24px 24px",
          textAlign: "center",
        }}>
          <div style={{ display: "flex", justifyContent: "center", animation: "float 2.5s ease-in-out infinite" }}>
            <XuXuMascot size={72} mood="excited" />
          </div>
          <div style={{ font: "800 22px 'Baloo 2'", color: "#fff", marginTop: 14 }}>
            Nâng cấp lên XuXu Pro
          </div>
          <div style={{ font: "600 12px 'Nunito'", color: "rgba(255,255,255,.85)", marginTop: 4 }}>
            Học không giới hạn · 2× XP · 2× xu
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: "20px 20px 24px" }}>

          {/* Pricing cards */}
          <div style={{ display: "flex", gap: 10, marginBottom: 18 }}>
            {PLANS.map(plan => (
              <button
                key={plan.id}
                onClick={() => setSelected(plan.id)}
                style={{
                  flex: 1, position: "relative", overflow: "hidden",
                  border: `2px solid ${selected === plan.id ? "#8B5CF6" : "#ECF1E6"}`,
                  borderRadius: 16, padding: "14px 10px",
                  textAlign: "center",
                  background: selected === plan.id ? "#F3EEFF" : "#fff",
                  cursor: "pointer", transition: "all .15s",
                }}
              >
                {plan.badge && (
                  <div style={{
                    position: "absolute", top: 0, right: 0,
                    background: "#8B5CF6", color: "#fff",
                    font: "800 9px 'Baloo 2'", padding: "3px 8px",
                    borderRadius: "0 14px 0 10px",
                  }}>
                    {plan.badge}
                  </div>
                )}
                <div style={{ font: "700 11px 'Nunito'", color: "#9AA89E", marginBottom: 4 }}>{plan.label}</div>
                <div style={{ font: "800 20px 'Baloo 2'", color: "#15392A" }}>{plan.price}</div>
                <div style={{ font: "600 11px 'Nunito'", color: "#9AA89E" }}>{plan.sub}</div>
              </button>
            ))}
          </div>

          {/* Feature list */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}>
            {FEATURES.map((f, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                {f.isXu ? (
                  <span style={{
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                    width: 34, height: 34, borderRadius: "50%",
                    background: "#FFC93C", border: "2px solid #E8A317",
                    color: "#7A4E00", font: "800 14px 'Baloo 2'", flexShrink: 0,
                  }}>X</span>
                ) : (
                  <div style={{
                    width: 34, height: 34, borderRadius: 10, flexShrink: 0,
                    background: f.iconBg, display: "flex", alignItems: "center",
                    justifyContent: "center", color: f.iconColor, font: "800 16px 'Baloo 2'",
                  }}>{f.icon}</div>
                )}
                <div style={{ flex: 1 }}>
                  <div style={{ font: "700 13px 'Nunito'", color: "#15392A" }}>{f.pro}</div>
                  <div style={{ font: "600 11px 'Nunito'", color: "#9AA89E" }}>Free: {f.free}</div>
                </div>
                <span style={{ color: "#16C172", font: "800 16px 'Baloo 2'" }}>✓</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <button
            className="btn-press"
            onClick={handleActivate}
            disabled={loading}
            style={{
              width: "100%",
              background: "#FFC93C", color: "#7A4E00",
              borderRadius: 16, padding: "14px 0",
              font: "800 15px 'Baloo 2'",
              boxShadow: "0 5px 0 #D99312",
              border: "none",
              cursor: loading ? "not-allowed" : "pointer",
              opacity: loading ? 0.75 : 1,
              marginBottom: 8,
            }}
          >
            {loading ? "Đang kích hoạt..." : "DÙNG THỬ 7 NGÀY MIỄN PHÍ"}
          </button>

          <div style={{ textAlign: "center", font: "600 11px 'Nunito'", color: "#9AA89E" }}>
            Có thể huỷ bất cứ lúc nào · Không cần thẻ
          </div>
        </div>
      </div>
    </div>
  );
}
