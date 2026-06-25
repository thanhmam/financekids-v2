"use client";

export default function XuXuMascot({ size = 56, mood = "happy" }) {
  const s = size;
  const border = Math.max(2, Math.round(s * 0.055));
  const shadow = Math.round(s * 0.09);

  if (mood === "excited") {
    return (
      <div style={{ position: "relative", width: s, height: s, borderRadius: "50%", background: "radial-gradient(circle at 38% 30%,#FFE594,#FFC93C 58%,#F2B01E)", border: `${border}px solid #E8A317`, boxShadow: `0 ${shadow}px 0 #C98A12`, flexShrink: 0 }}>
        <div style={{ position: "absolute", top: "36%", left: "28%", color: "#3A2A00", font: `800 ${Math.round(s * 0.24)}px 'Baloo 2'` }}>★</div>
        <div style={{ position: "absolute", top: "36%", right: "28%", color: "#3A2A00", font: `800 ${Math.round(s * 0.24)}px 'Baloo 2'` }}>★</div>
        <div style={{ position: "absolute", top: "63%", left: "50%", transform: "translateX(-50%)", width: s * 0.32, height: s * 0.18, background: "#3A2A00", borderRadius: "0 0 44px 44px" }} />
      </div>
    );
  }

  return (
    <div style={{ position: "relative", width: s, height: s, borderRadius: "50%", background: "radial-gradient(circle at 38% 30%,#FFE594,#FFC93C 58%,#F2B01E)", border: `${border}px solid #E8A317`, boxShadow: `0 ${shadow}px 0 #C98A12`, flexShrink: 0 }}>
      {s >= 80 && <div style={{ position: "absolute", inset: Math.round(s * 0.12), borderRadius: "50%", border: "3px dashed rgba(180,120,0,.35)" }} />}
      <div style={{ position: "absolute", top: "40%", left: "25%", width: s * 0.11, height: s * 0.16, background: "#3A2A00", borderRadius: "50%" }} />
      <div style={{ position: "absolute", top: "40%", right: "25%", width: s * 0.11, height: s * 0.16, background: "#3A2A00", borderRadius: "50%" }} />
      {s >= 50 && <>
        <div style={{ position: "absolute", top: "42%", left: "28%", width: s * 0.04, height: s * 0.04, background: "#fff", borderRadius: "50%" }} />
        <div style={{ position: "absolute", top: "42%", right: "34%", width: s * 0.04, height: s * 0.04, background: "#fff", borderRadius: "50%" }} />
      </>}
      <div style={{ position: "absolute", top: "60%", left: "50%", transform: "translateX(-50%)", width: s * 0.3, height: s * 0.15, border: `${Math.max(2, Math.round(s * 0.04))}px solid #3A2A00`, borderTop: "none", borderRadius: "0 0 44px 44px" }} />
      {s >= 80 && <>
        <div style={{ position: "absolute", top: "55%", left: "17%", width: s * 0.12, height: s * 0.07, background: "rgba(255,120,120,.5)", borderRadius: "50%" }} />
        <div style={{ position: "absolute", top: "55%", right: "17%", width: s * 0.12, height: s * 0.07, background: "rgba(255,120,120,.5)", borderRadius: "50%" }} />
      </>}
    </div>
  );
}
