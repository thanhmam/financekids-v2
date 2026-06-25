"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import XuXuMascot from "@/components/XuXuMascot";
import { useAuth } from "@/contexts/AuthContext";

export default function OnboardingPage() {
  const router = useRouter();
  const { user, loginAnonymous, loginWithGoogle, loading } = useAuth();

  useEffect(() => {
    if (!loading && user) router.push("/");
  }, [user, loading, router]);

  const handleGuest = async () => {
    try {
      await loginAnonymous("Bạn nhỏ", "9-12");
      router.push("/");
    } catch {
      router.push("/");
    }
  };

  return (
    <div style={{
      minHeight: "100vh", background: "#16C172",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      padding: "0 28px",
    }}>
      {/* Mascot */}
      <div style={{ marginBottom: 30, animation: "float 3s ease-in-out infinite" }}>
        <XuXuMascot size={140} />
      </div>

      {/* Heading */}
      <div style={{ textAlign: "center", marginBottom: 14 }}>
        <div style={{ font: "800 34px 'Baloo 2'", color: "#fff", lineHeight: 1.15 }}>
          Chào, mình là<br />XuXu!
        </div>
        <div style={{ font: "700 15px 'Nunito'", color: "rgba(255,255,255,.92)", marginTop: 14, lineHeight: 1.55 }}>
          Học tài chính mỗi ngày 5 phút,<br />
          để bạn không bao giờ <b>"0 xu"</b>.
        </div>
      </div>

      {/* Buttons */}
      <div style={{ width: "100%", maxWidth: 320, marginTop: 30, display: "flex", flexDirection: "column", gap: 12 }}>
        <button
          className="btn-press"
          onClick={handleGuest}
          style={{
            background: "#fff", color: "#16C172",
            borderRadius: 16, boxShadow: "0 5px 0 rgba(0,0,0,.18)",
            padding: 15, textAlign: "center",
            font: "800 17px 'Baloo 2'", border: "none", cursor: "pointer",
          }}
        >
          BẮT ĐẦU HỌC
        </button>

        <button
          className="btn-press"
          onClick={async () => {
            try { await loginWithGoogle(); router.push("/"); } catch {}
          }}
          style={{
            background: "rgba(255,255,255,.18)", color: "#fff",
            borderRadius: 16, border: "2px solid rgba(255,255,255,.4)",
            padding: 14, textAlign: "center",
            font: "800 14px 'Baloo 2'", cursor: "pointer",
          }}
        >
          ĐĂNG NHẬP VỚI GOOGLE
        </button>

        <button
          onClick={() => router.push("/")}
          style={{
            background: "none", border: "none", cursor: "pointer",
            textAlign: "center", font: "800 14px 'Baloo 2'",
            color: "rgba(255,255,255,.92)", padding: "4px 0",
          }}
        >
          MÌNH ĐÃ CÓ TÀI KHOẢN
        </button>
      </div>

      {/* Bottom tagline */}
      <div style={{ marginTop: 36, font: "600 12px 'Nunito'", color: "rgba(255,255,255,.6)", textAlign: "center" }}>
        Miễn phí · Không quảng cáo · Tiếng Việt
      </div>
    </div>
  );
}
