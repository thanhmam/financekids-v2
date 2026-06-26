import * as React from "react";

export interface QuizOptionProps {
  /** Zero-based index; shown as the numbered badge when idle. */
  index?: number;
  children?: React.ReactNode;
  /** Reveal state driving the styling. @default "idle" */
  state?: "idle" | "selected" | "correct" | "wrong" | "dimmed";
  onClick?: () => void;
  style?: React.CSSProperties;
}

/** QuizOption — a single answer button in the multiple-choice mini-game. */
export function QuizOption(props: QuizOptionProps): React.JSX.Element;
