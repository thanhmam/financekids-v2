import * as React from "react";

/**
 * Props for XuXu — the brand mascot, a friendly gold-coin character drawn in pure CSS.
 */
export interface XuXuMascotProps {
  /** Diameter in px. Detail (blush, sparkles) appears at larger sizes. */
  size?: number;
  /** Facial expression. @default "happy" */
  mood?: "happy" | "excited" | "sad";
  /** Apply the gentle floating idle animation. */
  float?: boolean;
  style?: React.CSSProperties;
}

/** XuXu — the brand mascot, a friendly gold coin character drawn in pure CSS. */
export function XuXuMascot(props: XuXuMascotProps): React.JSX.Element;
