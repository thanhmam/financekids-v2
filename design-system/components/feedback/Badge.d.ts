import * as React from "react";

export interface BadgeProps {
  /** Emoji shown when earned. @default "🌟" */
  emoji?: string;
  /** Caption under the tile. Hidden when omitted. */
  label?: string;
  /** Tint preset for the earned state. @default "gold" */
  tone?: "green" | "gold" | "streak" | "violet" | "info" | "life";
  /** Earned vs locked (greyed + 🔒). @default true */
  earned?: boolean;
  /** Tile side in px. @default 56 */
  size?: number;
  style?: React.CSSProperties;
}

/** Badge — achievement tile (earned or locked) for the profile grid. */
export function Badge(props: BadgeProps): React.JSX.Element;
