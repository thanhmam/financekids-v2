"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LESSONS } from "@/data/lessons";
import { useProgress } from "@/hooks/useProgress";
import BottomNav from "@/components/BottomNav";
import DesktopLayout from "@/components/DesktopLayout";

const TOPICS = [
  { id: "saving",  label: "Tiết kiệm",   icon: "◆", bg: "#E3F7EC", iconColor: "#0E9E5C", titleColor: "#0E5A38", subColor: "#5BA882",  lessonIds: ["lesson-01","lesson-02","lesson-03"], locked: false },
  { id: "budget",  label: "Ngân sách",   icon: "▦", bg: "#FFEEDD", iconColor: "#E07320", titleColor: "#9A4E12", subColor: "#C2854D",  lessonIds: ["lesson-04","lesson-05","lesson-06"], locked: false },
  { id: "invest",  label: "Đầu tư",      icon: "▲", bg: "#F1E9FF", iconColor: "#7C4DEC", titleColor: "#4F2BA8", subColor: "#8B6FD0",  lessonIds: ["lesson-07","lesson-08"], locked: true, lockCost: "120 xu" },
  { id: "debt",    label: "Tránh nợ",    icon: "◉", bg: "#FFE3E7", iconColor: "#E03A4E", titleColor: "#A11F30", subColor: "#D2697A",  lessonIds: [], locked: true },
  { id: "credit",  label: "Tín dụng",    icon: "▤", bg: "#E9F3FF", iconColor: "#1E86E0", titleColor: "#1763A8", subColor: "#5B9BD8",  lessonIds: [], locked: true },
  { id: "tax",     label: "Thuế cơ bản", icon: "★", bg: "#FFF3DC", iconColor: "#D99312", titleColor: "#9A6A0E", subColor: "#C2974D",  lessonIds: [], locked: true },
];

export default function ExplorePage() {
  const router = useRouter();
  const { completed } = useProgress();
  const [search, setSearch] = useState("");

  const filtered = TOPICS.filter(t => t.label.toLowerCase().includes(search.toLowerCase()));

  function getTopicProgress(topic) {
    if (topic.locked) return null;
    const total = topic.lessonIds.length || 1;
    const done = topic.lessonIds.filter(id => completed.includes(id)).length;
    return { done, total };
  }

  function TopicCard({ topic, cols = 2 }) {
    const progress = getTopicProgress(topic);
    const allDone = progress && progress.done === progress.total;
    return (
      <button
        key={topic.id}
        className="btn-press"
        onClick={() => { if (!topic.locked && topic.lessonIds[0]) router.push(`/game/${topic.lessonIds[0]}`); }}
        style={{ background: topic.bg, borderRadius: 18, padding: cols === 3 ? 20 : 14, border: "none", cursor: topic.locked ? "default" : "pointer", textAlign: "left", position: "relative" }}
      >
        <div style={{ color: topic.iconColor, font: `800 ${cols === 3 ? 28 : 22}px 'Baloo 2'` }}>{topic.icon}</div>
        <div style={{ font: `800 ${cols === 3 ? 17 : 14}px 'Baloo 2'`, color: topic.titleColor, marginTop: cols === 3 ? 12 : 8 }}>{topic.label}</div>
        <div style={{ font: "600 11px 'Nunito'", color: topic.subColor, marginTop: 2 }}>
          {topic.locked
            ? (topic.lockCost ? `Khoá · ${topic.lockCost}` : "Khoá")
            : allDone ? `${progress.total}/${progress.total} bài · Xong`
            : `${progress.done}/${progress.total} bài`}
        </div>
        {topic.locked && <div style={{ position: "absolute", top: 10, right: 10, fontSize: 14 }}>🔒</div>}
        {allDone && (
          <div style={{ position: "absolute", top: 10, right: 10, width: 22, height: 22, borderRadius: 7, background: "#16C172", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", font: "800 11px 'Baloo 2'" }}>✓</div>
        )}
      </button>
    );
  }

  function LessonRow({ lesson }) {
    const done = completed.includes(lesson.id);
    return (
      <button
        className="btn-press"
        onClick={() => router.push(`/game/${lesson.id}`)}
        style={{ display: "flex", alignItems: "center", gap: 12, background: "#fff", border: `2px solid ${done ? "#16C172" : "#ECF1E6"}`, borderRadius: 14, padding: "11px 14px", cursor: "pointer", textAlign: "left" }}
      >
        <div style={{ width: 40, height: 40, borderRadius: 12, background: lesson.bgColor || "#F4F8EF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>
          {lesson.icon}
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ font: "800 13px 'Baloo 2'", color: "#15392A" }}>{lesson.title}</div>
          <div style={{ font: "600 11px 'Nunito'", color: "#9AA89E", marginTop: 1 }}>+{lesson.xp} XP</div>
        </div>
        {done && <div style={{ width: 24, height: 24, borderRadius: 8, background: "#16C172", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", font: "800 11px 'Baloo 2'", flexShrink: 0 }}>✓</div>}
      </button>
    );
  }

  const SearchBar = () => (
    <div style={{ display: "flex", alignItems: "center", gap: 9, background: "#fff", border: "2px solid #ECF1E6", borderRadius: 14, padding: "11px 14px", marginBottom: 18 }}>
      <span style={{ color: "#C2CDBA", font: "800 15px 'Baloo 2'" }}>⌕</span>
      <input
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Tìm chủ đề tài chính..."
        style={{ flex: 1, background: "none", border: "none", outline: "none", font: "600 13px 'Nunito'", color: "#15392A" }}
      />
    </div>
  );

  return (
    <>
      {/* ── MOBILE ── */}
      <div className="lg:hidden" style={{ minHeight: "100vh", background: "#F4F8EF", paddingBottom: 80 }}>
        <div style={{ background: "#fff", borderBottom: "2px solid #ECF1E6", padding: "14px 20px", position: "sticky", top: 0, zIndex: 20 }}>
          <div style={{ font: "800 22px 'Baloo 2'", color: "#15392A" }}>Khám phá</div>
        </div>
        <div style={{ padding: "14px 16px 0" }}>
          <SearchBar />
          <div style={{ font: "700 13px 'Nunito'", color: "#9AA89E", marginBottom: 11 }}>CHỦ ĐỀ</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 11, marginBottom: 20 }}>
            {filtered.map(t => <TopicCard key={t.id} topic={t} cols={2} />)}
          </div>
          <div style={{ font: "700 13px 'Nunito'", color: "#9AA89E", marginBottom: 11 }}>TẤT CẢ BÀI HỌC</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
            {LESSONS.slice(0, 8).map(l => <LessonRow key={l.id} lesson={l} />)}
          </div>
        </div>
        <BottomNav />
      </div>

      {/* ── DESKTOP ── */}
      <DesktopLayout>
        <div style={{ padding: "24px 28px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
            <div style={{ font: "800 24px 'Baloo 2'", color: "#15392A" }}>Khám phá chủ đề</div>
            <div style={{ width: 340 }}><SearchBar /></div>
          </div>
          <div style={{ font: "700 13px 'Nunito'", color: "#9AA89E", marginBottom: 13 }}>CHỦ ĐỀ</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 26 }}>
            {filtered.map(t => <TopicCard key={t.id} topic={t} cols={3} />)}
          </div>
          <div style={{ font: "700 13px 'Nunito'", color: "#9AA89E", marginBottom: 13 }}>TẤT CẢ BÀI HỌC</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
            {LESSONS.slice(0, 12).map(l => <LessonRow key={l.id} lesson={l} />)}
          </div>
        </div>
      </DesktopLayout>
    </>
  );
}
