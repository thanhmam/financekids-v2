import React from "react";
import { IconTile } from "../core/IconTile.jsx";
import { Chip } from "../core/Chip.jsx";

const AGE_CHIP = {
  "6-8":   { tone: "green",  label: "6-8 tuổi" },
  "9-12":  { tone: "indigo", label: "9-12 tuổi" },
  "13-16": { tone: "violet", label: "13-16 tuổi" },
};

/**
 * LessonCard — a lesson tile for the learning feed: emoji icon tile,
 * title + subtitle, age-group chip, XP footer, and a "Học →" / "Chơi lại"
 * call to action. Completed lessons turn green with a ✓ corner badge.
 * The card uses the brand's thicker bottom border (4px).
 */
export function LessonCard({ lesson = {}, completed = false, onClick, style }) {
  const age = AGE_CHIP[lesson.ageGroup] || AGE_CHIP["9-12"];
  return (
    <div
      onClick={onClick}
      style={{
        background: completed ? "var(--xu-green-50, #EAFBF1)" : "#fff",
        border: `2px solid ${completed ? "var(--xu-green, #16C172)" : "var(--xu-line, #ECF1E6)"}`,
        borderBottomWidth: 4,
        borderRadius: 18,
        padding: "13px 12px",
        position: "relative",
        overflow: "hidden",
        cursor: onClick ? "pointer" : "default",
        height: "100%",
        transition: "transform .15s ease, box-shadow .15s ease",
        ...style,
      }}
    >
      {completed && (
        <div style={{ position: "absolute", top: 10, right: 10, width: 24, height: 24, borderRadius: 8, background: "var(--xu-green, #16C172)", display: "flex", alignItems: "center", justifyContent: "center", font: "800 11px 'Baloo 2'", color: "#fff" }}>✓</div>
      )}
      <IconTile size={46} bg={lesson.bgColor || "var(--xu-bg, #F4F8EF)"} fontSize={22} style={{ marginBottom: 9 }}>
        {lesson.icon || "💰"}
      </IconTile>
      <div style={{ font: "800 13px 'Baloo 2'", color: "var(--xu-ink, #15392A)", lineHeight: 1.25, marginBottom: 3, paddingRight: completed ? 28 : 0 }}>
        {lesson.title || "Bài học"}
      </div>
      <div style={{ font: "600 11px 'Nunito'", color: "var(--xu-caption, #9AA89E)", marginBottom: 10, lineHeight: 1.3 }}>
        {lesson.subtitle}
      </div>
      <Chip tone={age.tone} style={{ marginBottom: 10, fontSize: 10, padding: "3px 9px" }}>{age.label}</Chip>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ font: "600 11px 'Nunito'", color: "var(--xu-caption, #9AA89E)" }}>⭐ +{lesson.xp ?? 100} XP</span>
        <span style={{ font: "800 12px 'Baloo 2'", color: completed ? "var(--xu-green-dark, #0E9E5C)" : "var(--xu-green, #16C172)" }}>
          {completed ? "Chơi lại" : "Học →"}
        </span>
      </div>
    </div>
  );
}
