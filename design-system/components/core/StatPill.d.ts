import * as React from "react";

export interface StatPillProps {
  /** Preset stat type. @default "streak" */
  kind?: "streak" | "xu" | "xp";
  /** Number (locale-formatted) or string value to show. */
  value?: number | string;
  /** Override the glyph icon (use "coin" for the XuCoin). */
  icon?: string;
  iconColor?: string;
  bg?: string;
  border?: string;
  style?: React.CSSProperties;
}

/** StatPill — rounded header chip for streak / xu / XP stats. */
export function StatPill(props: StatPillProps): React.JSX.Element;
