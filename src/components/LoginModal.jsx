"use client";

import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { AGE_GROUPS } from "@/data/lessons";

const AGE_OPTIONS = [
  { value: "6-8", label: "6-8 tuổi", emoji: "🌱", desc: "Tiểu học" },
  { value: "9-12", label: "9-12 tuổi", emoji: "🌿", desc: "Tiểu học lớn" },
  { value: "13-16", label: "13-16 tuổi", emoji: "🌳", desc: "Trung học" },
];

export default function LoginModal({ onClose }) {
  const { loginWithGoogle, loginAnonymous } = useAuth();
  const [step, setStep] = useState("choose"); // "choose" | "guest-form"
  const [nickname, setNickname] = useState("");
  const [ageGroup, setAgeGroup] = useState("9-12");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGoogle = async () => {
    setLoading(true);
    setError("");
    try {
      await loginWithGoogle();
      onClose();
    } catch {
      setError("Không thể đăng nhập Google. Thử lại nhé!");
    } finally {
      setLoading(false);
    }
  };

  const handleGuest = async () => {
    if (!nickname.trim()) {
      setError("Nhập tên của bạn nhé!");
      return;
    }
    setLoading(true);
    setError("");
    try {
      await loginAnonymous(nickname.trim(), ageGroup);
      onClose();
    } catch {
      setError("Có lỗi xảy ra. Thử lại nhé!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40 backdrop-blur-sm px-4">
      <div
        className="w-full max-w-sm bg-white rounded-3xl rounded-b-none sm:rounded-3xl shadow-2xl overflow-hidden"
        style={{ animation: "slideUp 0.35s ease forwards" }}
      >
        {/* Header */}
        <div
          className="px-6 pt-8 pb-6 text-center"
          style={{ background: "linear-gradient(135deg, #FF6B35, #FFD700)" }}
        >
          <div className="text-5xl mb-2" style={{ animation: "float 2s ease-in-out infinite" }}>
            🐷
          </div>
          <h2 className="text-white font-black text-xl">Chào mừng đến FinanceKids!</h2>
          <p className="text-white/80 font-semibold text-sm mt-1">
            Đăng nhập để lưu tiến độ học của bạn
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          {step === "choose" && (
            <div className="space-y-3">
              {/* Google */}
              <button
                onClick={handleGoogle}
                disabled={loading}
                className="w-full flex items-center gap-3 p-4 bg-white border-2 border-gray-200 rounded-2xl font-bold text-gray-700 hover:border-orange-300 hover:shadow-md transition-all active:scale-95 disabled:opacity-50"
              >
                <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span>{loading ? "Đang đăng nhập..." : "Đăng nhập với Google"}</span>
              </button>

              {/* Divider */}
              <div className="flex items-center gap-3 my-2">
                <div className="flex-1 h-px bg-gray-200" />
                <span className="text-gray-400 text-sm font-semibold">hoặc</span>
                <div className="flex-1 h-px bg-gray-200" />
              </div>

              {/* Guest */}
              <button
                onClick={() => setStep("guest-form")}
                className="w-full flex items-center gap-3 p-4 bg-orange-50 border-2 border-orange-200 rounded-2xl font-bold text-orange-700 hover:bg-orange-100 transition-all active:scale-95"
              >
                <span className="text-2xl">🎭</span>
                <span>Chơi không cần đăng nhập</span>
              </button>

              {error && (
                <p className="text-red-500 text-sm font-semibold text-center">{error}</p>
              )}

              <p className="text-gray-400 text-xs text-center font-semibold pt-2">
                Đăng nhập Google giúp lưu tiến độ vĩnh viễn
              </p>
            </div>
          )}

          {step === "guest-form" && (
            <div className="space-y-4">
              <button
                onClick={() => setStep("choose")}
                className="text-gray-400 font-bold text-sm flex items-center gap-1 hover:text-gray-600"
              >
                ← Quay lại
              </button>

              <div>
                <label className="block font-black text-gray-700 mb-2 text-sm">
                  Tên của bạn 👤
                </label>
                <input
                  type="text"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                  placeholder="VD: Minh Anh, Bé Heo..."
                  maxLength={20}
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 font-bold text-gray-800 focus:outline-none focus:border-orange-400 text-base"
                />
              </div>

              <div>
                <label className="block font-black text-gray-700 mb-2 text-sm">
                  Bạn bao nhiêu tuổi? 🎂
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {AGE_OPTIONS.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => setAgeGroup(opt.value)}
                      className={`p-3 rounded-xl border-2 transition-all text-center ${
                        ageGroup === opt.value
                          ? "border-orange-500 bg-orange-50"
                          : "border-gray-200 bg-white hover:border-gray-300"
                      }`}
                    >
                      <div className="text-2xl mb-1">{opt.emoji}</div>
                      <div className="font-black text-gray-800 text-xs">{opt.label}</div>
                    </button>
                  ))}
                </div>
              </div>

              {error && (
                <p className="text-red-500 text-sm font-semibold">{error}</p>
              )}

              <button
                onClick={handleGuest}
                disabled={loading || !nickname.trim()}
                className="w-full py-4 rounded-2xl font-black text-white text-lg shadow-md active:scale-95 transition-transform disabled:opacity-40"
                style={{ background: "linear-gradient(135deg, #FF6B35, #FFD700)" }}
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
