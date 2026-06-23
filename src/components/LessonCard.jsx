"use client";

import Link from "next/link";
import { CATEGORIES } from "@/data/lessons";

const AGE_BADGE = {
  "6-8": { label: "6-8 tuổi", color: "bg-green-100 text-green-700" },
  "9-12": { label: "9-12 tuổi", color: "bg-blue-100 text-blue-700" },
  "13-16": { label: "13-16 tuổi", color: "bg-purple-100 text-purple-700" },
};

export default function LessonCard({ lesson, isCompleted }) {
  const category = CATEGORIES[lesson.category];
  const ageBadge = AGE_BADGE[lesson.ageGroup];
  const questionCount = lesson.questions.length;

  return (
    <Link href={`/game/${lesson.id}`}>
      <div
        className="lesson-card bg-white rounded-2xl p-4 shadow-sm border-2 relative overflow-hidden cursor-pointer"
        style={{ borderColor: isCompleted ? "#4CAF50" : lesson.color + "40" }}
      >
        {/* Completed stamp */}
        {isCompleted && (
          <div className="absolute top-3 right-3 bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-black shadow-md">
            ✓
          </div>
        )}

        {/* Color accent bar */}
        <div
          className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
          style={{ backgroundColor: lesson.color }}
        />

        {/* Icon + Title */}
        <div className="flex items-start gap-3 mb-3 pr-8">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0 shadow-sm"
            style={{ backgroundColor: lesson.bgColor }}
          >
            {lesson.icon}
          </div>
          <div>
            <h3 className="font-black text-gray-800 leading-tight text-base">
              {lesson.title}
            </h3>
            <p className="text-gray-500 text-sm font-semibold mt-0.5">
              {lesson.subtitle}
            </p>
          </div>
        </div>

        {/* Tags */}
        <div className="flex items-center gap-2 flex-wrap mb-3">
          <span className={`text-xs font-bold px-2 py-1 rounded-full ${ageBadge.color}`}>
            {ageBadge.label}
          </span>
          <span className={`text-xs font-bold px-2 py-1 rounded-full ${category.color}`}>
            {category.emoji} {category.label}
          </span>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-xs text-gray-400 font-semibold">
            <span>❓ {questionCount} câu hỏi</span>
            <span>⭐ +{lesson.xp} XP</span>
          </div>
          <div
            className="text-xs font-black px-3 py-1.5 rounded-full text-white shadow-sm transition-transform"
            style={{ backgroundColor: lesson.color }}
          >
            {isCompleted ? "Chơi lại" : "Bắt đầu →"}
          </div>
        </div>

        {/* Completed overlay tint */}
        {isCompleted && (
          <div className="absolute inset-0 bg-green-500/5 rounded-2xl pointer-events-none" />
        )}
      </div>
    </Link>
  );
}
