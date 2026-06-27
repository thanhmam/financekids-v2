"use client";

import Link from "next/link";
import { CATEGORIES, LEVELS, TOPICS } from "@/data/lessons";

const AGE_CHIP = {
  "6-8":   { bg: "#E3F7EC", color: "#0E9E5C", label: "6-8 tuổi" },
  "9-12":  { bg: "#EEF2FF", color: "#4F46E5", label: "9-12 tuổi" },
  "13-16": { bg: "#F1E9FF", color: "#7C4DEC", label: "13-16 tuổi" },
};

const LEVEL_CHIP = {
  foundation: { bg: "#EAFBF1", color: "#0E9E5C" },
  advanced:   { bg: "#F1E9FF", color: "#7C4DEC" },
};

export default function LessonCard({ lesson, isCompleted }) {
  const category = CATEGORIES[lesson.category];
  const age = AGE_CHIP[lesson.ageGroup];
  const lvl = lesson.level && LEVELS?.[lesson.level];
  const lvlChip = lesson.level && LEVEL_CHIP[lesson.level];

  return (
    <Link href={`/game/${lesson.id}`}>
      <div
        className="lesson-card"
        style={{
          background: isCompleted ? "#EAFBF1" : "#fff",
          border: `2px solid ${isCompleted ? "#16C172" : "#ECF1E6"}`,
          borderBottomWidth: 4,
          borderRadius: 18,
          padding: "13px 12px",
          position: "relative",
          overflow: "hidden",
          cursor: "pointer",
          height: "100%",
        }}
      >
        {/* Completed badge */}
        {isCompleted && (
          <div style={{ position: "absolute", top: 10, right: 10, width: 24, height: 24, borderRadius: 8, background: "#16C172", display: "flex", alignItems: "center", justifyContent: "center", font: "800 11px 'Baloo 2'", color: "#fff" }}>✓</div>
        )}

        {/* Icon */}
        <div style={{ width: 46, height: 46, borderRadius: 14, background: lesson.bgColor || "#F4F8EF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, marginBottom: 9 }}>
          {lesson.icon}
        </div>

        {/* Title + subtitle */}
        <div style={{ font: "800 13px 'Baloo 2'", color: "#15392A", lineHeight: 1.25, marginBottom: 3, paddingRight: isCompleted ? 28 : 0 }}>
          {lesson.title}
        </div>
        <div style={{ font: "600 11px 'Nunito'", color: "#9AA89E", marginBottom: 10, lineHeight: 1.3 }}>
          {lesson.subtitle}
        </div>

        {/* Chips: cấp độ (bài kho) + tuổi */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 10 }}>
          {lvl && lvlChip && (
            <span style={{ display: "inline-block", background: lvlChip.bg, color: lvlChip.color, borderRadius: 20, padding: "3px 9px", font: "700 10px 'Nunito'" }}>
              {lvl.emoji} {lvl.label}
            </span>
          )}
          <span style={{ display: "inline-block", background: age.bg, color: age.color, borderRadius: 20, padding: "3px 9px", font: "700 10px 'Nunito'" }}>
            {age.label}
          </span>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ font: "600 11px 'Nunito'", color: "#9AA89E" }}>⭐ +{lesson.xp} XP</span>
          <span style={{ font: "800 12px 'Baloo 2'", color: isCompleted ? "#0E9E5C" : "#16C172" }}>
            {isCompleted ? "Chơi lại" : "Học →"}
          </span>
        </div>
      </div>
    </Link>
  );
}
