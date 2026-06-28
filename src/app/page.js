"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import Landing from "@/components/Landing";
import LandingV2 from "@/components/LandingV2";
import Dashboard from "@/components/Dashboard";

export default function Page() {
  const { user, loading } = useAuth();
  const [lpVersion, setLpVersion] = useState("v1");

  useEffect(() => {
    const saved = localStorage.getItem("__lp_version__");
    if (saved) setLpVersion(saved);
  }, []);

  const switchToV1 = () => { setLpVersion("v1"); localStorage.setItem("__lp_version__", "v1"); };
  const switchToV2 = () => { setLpVersion("v2"); localStorage.setItem("__lp_version__", "v2"); };

  if (loading) return <div style={{ minHeight: "100vh", background: "#F4F8EF" }} />;
  if (!user) {
    if (lpVersion === "v2") return <LandingV2 onSwitchVersion={switchToV1} />;
    return <Landing onSwitchVersion={switchToV2} />;
  }
  return <Dashboard />;
}
