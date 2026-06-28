"use client";

import { useAuth } from "@/contexts/AuthContext";
import Landing from "@/components/Landing";
import Dashboard from "@/components/Dashboard";

export default function Page() {
  const { user, loading } = useAuth();

  // Tránh nhấp nháy trong lúc xác thực
  if (loading) {
    return <div style={{ minHeight: "100vh", background: "#F4F8EF" }} />;
  }

  // Chưa đăng nhập → Landing page giới thiệu XuXu
  if (!user) return <Landing />;

  // Đã đăng nhập → vào thẳng dashboard
  return <Dashboard />;
}
