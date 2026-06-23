"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { LESSONS, AGE_GROUPS, getLessonsByAgeGroup } from "@/data/lessons";
import LessonCard from "@/components/LessonCard";
import HeroSection from "@/components/HeroSection";
import ProgressBar from "@/components/ProgressBar";
import BadgesPanel from "@/components/BadgesPanel";
import LoginModal from "@/components/LoginModal";
import { useAuth } from "@/contexts/AuthContext";
import { useProgress } from "@/hooks/useProgress";

export default function Home() {
  const router = useRouter();
  const { user, profile, logout } = useAuth();
  const { completed, totalXP } = useProgress();

  const [selectedAgeGroup, setSelectedAgeGroup] = useState("all");
  const [animateCards, setAnimateCards] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showBadges, setShowBadges] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimateCards(true), 100);
  }, []);

  const filteredLessons = getLessonsByAgeGroup(selectedAgeGroup);

  const handleAgeFilter = (value) => {
    setSelectedAgeGroup(value);
    setAnimateCards(false);
    setTimeout(() => setAnimateCards(true), 50);
  };

  return (
    <main className="min-h-screen">
      {/* ── Top nav bar ── */}
      <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-gray-100 px-4 py-3">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🐷</span>
            <span className="font-black text-orange-500 text-lg">FinanceKids</span>
          </div>
          <div className="flex items-center gap-2">
            {/* Leaderboard */}
            <button
              onClick={() => router.push("/leaderboard")}
              className="text-gray-500 hover:text-orange-500 font-bold text-sm flex items-center gap-1 px-3 py-1.5 rounded-xl hover:bg-orange-50 transition-colors"
            >
              🏆 <span className="hidden sm:inline">BXH</span>
            </button>

            {/* Badges toggle */}
            <button
              onClick={() => setShowBadges(!showBadges)}
              className="text-gray-500 hover:text-orange-500 font-bold text-sm flex items-center gap-1 px-3 py-1.5 rounded-xl hover:bg-orange-50 transition-colors"
            >
              🏅 <span className="hidden sm:inline">Huy hiệu</span>
            </button>

            {/* User menu */}
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-orange-50 border border-orange-200"
                >
                  <span className="text-lg">{profile?.avatar || "🐷"}</span>
                  <span className="font-bold text-orange-700 text-sm hidden sm:inline max-w-[80px] truncate">
                    {profile?.displayName || "Bạn nhỏ"}
                  </span>
                </button>
                {showUserMenu && (
                  <div className="absolute right-0 top-full mt-1 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 min-w-[160px] z-50">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="font-black text-gray-800 text-sm">{profile?.displayName}</p>
                      <p className="text-orange-500 font-bold text-xs">⭐ {totalXP} XP</p>
                    </div>
                    <button
                      onClick={() => { logout(); setShowUserMenu(false); }}
                      className="w-full text-left px-4 py-2 text-red-500 font-bold text-sm hover:bg-red-50 transition-colors"
                    >
                      🚪 Đăng xuất
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => setShowLogin(true)}
                className="px-4 py-1.5 rounded-xl font-black text-white text-sm shadow-md transition-transform active:scale-95"
                style={{ background: "linear-gradient(135deg, #FF6B35, #FFD700)" }}
              >
                Đăng nhập
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Click-outside close for user menu */}
      {showUserMenu && (
        <div className="fixed inset-0 z-20" onClick={() => setShowUserMenu(false)} />
      )}

      {/* Hero Section */}
      <HeroSection
        totalXP={totalXP}
        completedCount={completed.length}
        totalCount={LESSONS.length}
        userName={profile?.displayName}
        avatar={profile?.avatar}
      />

      {/* Progress Overview */}
      {completed.length > 0 && (
        <div className="max-w-4xl mx-auto px-4 py-4">
          <ProgressBar completed={completed.length} total={LESSONS.length} xp={totalXP} />
        </div>
      )}

      {/* Badges Panel (collapsible) */}
      {showBadges && (
        <div className="max-w-4xl mx-auto px-4 pb-4 animate-[slideUp_0.3s_ease_forwards]">
          <BadgesPanel earnedIds={profile?.badges || []} />
        </div>
      )}

      {/* Age Group Filter */}
      <div className="max-w-4xl mx-auto px-4 pb-4">
        <h2 className="text-xl font-black text-gray-700 mb-3">
          📚 Chọn cấp độ của bạn
        </h2>
        <div className="flex gap-2 flex-wrap">
          {AGE_GROUPS.map((group) => (
            <button
              key={group.value}
              onClick={() => handleAgeFilter(group.value)}
              className={`btn-press flex items-center gap-2 px-4 py-2 rounded-full font-bold text-sm transition-all duration-200
                ${selectedAgeGroup === group.value
                  ? "bg-orange-500 text-white shadow-lg scale-105"
                  : "bg-white text-gray-600 shadow-sm hover:shadow-md"
                }`}
            >
              <span>{group.emoji}</span>
              <span>{group.label}</span>
              {selectedAgeGroup === group.value && (
                <span className="bg-white text-orange-500 rounded-full px-2 py-0.5 text-xs font-black">
                  {getLessonsByAgeGroup(group.value).length}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Lesson Grid */}
      <div className="max-w-4xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {filteredLessons.map((lesson, index) => (
            <div
              key={lesson.id}
              className={`transition-all duration-300 ${
                animateCards ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <LessonCard
                lesson={lesson}
                isCompleted={completed.includes(lesson.id)}
              />
            </div>
          ))}
        </div>

        {filteredLessons.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-gray-500 font-bold">Không có bài học nào</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-6 text-center">
        <p className="text-gray-400 text-sm font-semibold">
          FinanceKids v2 ✨ · {LESSONS.length} bài học · 3 nhóm tuổi
        </p>
      </footer>

      {/* Login Modal */}
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
    </main>
  );
}
