"use client";

import { useAuth } from "@/contexts/AuthContext";
import Dashboard from "@/components/Dashboard";

export default function LearnPage() {
  const { user, loading } = useAuth();

  if (loading) {
    return <div style={{ minHeight: "100vh", background: "#F4F8EF" }} />;
  }

  // Khách (chưa đăng nhập) xem trước dashboard, nhưng không vào được bài học
  return <Dashboard guest={!user} />;
}
