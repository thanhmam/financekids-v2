"use client";

import { useAuth } from "@/contexts/AuthContext";
import Landing from "@/components/Landing";
import Dashboard from "@/components/Dashboard";

export default function Page() {
  const { user, loading } = useAuth();
  if (loading) return <div style={{ minHeight: "100vh", background: "#F4F8EF" }} />;
  if (!user) return <Landing />;
  return <Dashboard />;
}
