import * as React from "react";

export interface ProgressBarProps {
  /** Fill percent, 0–100. */
  value?: number;
  /** Track height in px. @default 12 */
  height?: number;
  /** Fill color preset. @default "green" */
  tone?: "green" | "streak" | "gems" | "onDark";
  /** Override the track background. */
  track?: string;
  style?: React.CSSProperties;
}

/** ProgressBar — rounded fill bar with the signature inset white shine. */
export function ProgressBar(props: ProgressBarProps): React.JSX.Element;
