import * as React from "react";

export interface Lesson {
  title?: string;
  subtitle?: string;
  ageGroup?: "6-8" | "9-12" | "13-16";
  icon?: string;
  bgColor?: string;
  xp?: number;
}

/**
 * Props for LessonCard — a lesson tile for the learning feed.
 */
export interface LessonCardProps {
  /** Lesson data: title, subtitle, ageGroup, icon, bgColor, xp. */
  lesson?: Lesson;
  /** Render the completed (green + ✓) state. */
  completed?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}

/** LessonCard — a lesson tile for the learning feed. */
export function LessonCard(props: LessonCardProps): React.JSX.Element;
