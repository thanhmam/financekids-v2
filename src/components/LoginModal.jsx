"use client";

import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import XuXuMascot from "@/components/XuXuMascot";

export default function LoginModal({ onClose }) {
  const { loginWithGoogle, loginAnonymous } = useAuth();
  const [step, setStep] = useState("choose");
  const [nickname, setNickname] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGoogle = async () => {
    setLoading(true);
    setError("");
    try {
      await loginWithGoogle();
      onClose();
    } catch (err) {
      if (err?.code === "auth/popup-closed-by-user" || err?.code === "auth/cancelled-popup-request") {
        setError("Bạn đã đóng cửa sổ đăng nhập. Thử lại nhé!");
      } else if (err?.code === "auth/popup-blocked") {
        setError("Trình duyệt chặn popup. Hãy cho phép popup và thử lại!");
      } else {
        setError(`Không thể đăng nhập. Thử lại nhé! (${err?.code || "unknown"})`);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGuest = async () => {
    if (!nickname.trim()) { setError("Nhập tên của bạn nhé!"); return; }
    setLoading(true);
    setError("");
    try {
      await loginAnonymous(nickname.trim(), "general");
      onClose();
    } catch {
      setError("Có lỗi xảy ra. Thử lại nhé!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{ position: "fixed", inset: 0, zIndex: 50, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(21,32,26,.45)", backdropFilter: "blur(4px)", padding: "16px" }}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        style={{ width: "100%", maxWidth: 420, background: "#fff", borderRadius: 28, overflow: "hidden", animation: "slideUp .3s ease", position: "relative" }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{ position: "absolute", top: 14, right: 14, zIndex: 10, background: "rgba(255,255,255,.25)", border: "none", borderRadius: "50%", width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", font: "800 16px 'Baloo 2'", color: "#fff", lineHeight: 1 }}
        >✕</button>

        {/* Header */}
        <div style={{ background: "linear-gradient(135deg,#16C172,#0E9E5C)", padding: "28px 24px 24px", textAlign: "center" }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 12, animation: "float 2.5s ease-in-out infinite" }}>
            <XuXuMascot size={80} />
          </div>
          <h2 style={{ font: "800 22px 'Baloo 2'", color: "#fff" }}>Chào mừng đến XuXu!</h2>
          <p style={{ font: "600 13px 'Nunito'", color: "rgba(255,255,255,.85)", marginTop: 5 }}>
            Đăng nhập để lưu tiến độ học của bạn
          </p>
        </div>

        {/* Content */}
        <div style={{ padding: "20px 20px 32px" }}>
          {step === "choose" && (
            <div>
              {/* Google */}
              <button
                onClick={handleGoogle}
                disabled={loading}
                style={{ width: "100%", display: "flex", alignItems: "center", gap: 12, padding: "14px 16px", background: "#fff", border: "2px solid #ECF1E6", borderBottomWidth: 4, borderRadius: 16, font: "700 14px 'Nunito'", color: "#15392A", cursor: "pointer", marginBottom: 10, transition: "border-color .15s" }}
              >
                <svg style={{ width: 22, height: 22, flexShrink: 0 }} viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span>{loading ? "Đang đăng nhập..." : "Đăng nhập với Google"}</span>
              </button>

              {/* Divider */}
              <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "6px 0 10px" }}>
                <div style={{ flex: 1, height: 1, background: "#ECF1E6" }} />
                <span style={{ font: "600 12px 'Nunito'", color: "#9AA89E" }}>hoặc</span>
                <div style={{ flex: 1, height: 1, background: "#ECF1E6" }} />
              </div>

              {/* Guest */}
              <button
                onClick={() => setStep("guest-form")}
                style={{ width: "100%", display: "flex", alignItems: "center", gap: 12, padding: "14px 16px", background: "#F4F8EF", border: "2px solid #ECF1E6", borderBottomWidth: 4, borderRadius: 16, font: "700 14px 'Nunito'", color: "#15392A", cursor: "pointer", marginBottom: 10 }}
              >
                <span style={{ fontSize: 22 }}>🎭</span>
                <span>Chơi không cần đăng nhập</span>
              </button>

              {error && <p style={{ font: "600 12px 'Nunito'", color: "#FF5366", textAlign: "center", marginBottom: 8 }}>{error}</p>}

              <p style={{ font: "600 11px 'Nunito'", color: "#9AA89E", textAlign: "center", marginTop: 4 }}>
                Đăng nhập Google giúp lưu tiến độ vĩnh viễn
              </p>
            </div>
          )}

          {step === "guest-form" && (
            <div>
              <button
                onClick={() => setStep("choose")}
                style={{ font: "700 13px 'Nunito'", color: "#9AA89E", background: "none", border: "none", cursor: "pointer", marginBottom: 16, display: "flex", alignItems: "center", gap: 4 }}
              >
                ← Quay lại
              </button>

              <div style={{ marginBottom: 14 }}>
                <label style={{ display: "block", font: "800 13px 'Baloo 2'", color: "#15392A", marginBottom: 7 }}>Tên của bạn 👤</label>
                <input
                  type="text"
                  value={nickname}
                  onChange={e => setNickname(e.target.value)}
                  onKeyDown={e => e.key === "Enter" && handleGuest()}
                  placeholder="VD: Minh Anh, Bé Heo..."
                  maxLength={20}
                  style={{ width: "100%", border: "2px solid #ECF1E6", borderRadius: 14, padding: "12px 14px", font: "700 14px 'Nunito'", color: "#15392A", outline: "none" }}
                  onFocus={e => e.target.style.borderColor = "#16C172"}
                  onBlur={e => e.target.style.borderColor = "#ECF1E6"}
                />
              </div>

              {error && <p style={{ font: "600 12px 'Nunito'", color: "#FF5366", marginBottom: 10 }}>{error}</p>}

              <button
                onClick={handleGuest}
                disabled={loading || !nickname.trim()}
                style={{ width: "100%", padding: "15px 0", borderRadius: 16, font: "800 16px 'Baloo 2'", color: "#fff", background: "#16C172", border: "none", boxShadow: "0 5px 0 #0E9E5C", cursor: loading || !nickname.trim() ? "not-allowed" : "pointer", opacity: loading || !nickname.trim() ? 0.5 : 1, transition: "opacity .15s" }}
              >
                {loading ? "Đang vào..." : "Bắt đầu học! 🚀"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
