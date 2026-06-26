import * as React from "react";

export interface ChipProps {
  children?: React.ReactNode;
  /** Color tone. @default "green" */
  tone?: "green" | "indigo" | "violet" | "gold" | "streak" | "neutral";
  /** Solid fill instead of tinted background. */
  solid?: boolean;
  style?: React.CSSProperties;
}

/** Chip — small rounded tag/label for ages, categories, counters. */
export function Chip(props: ChipProps): React.JSX.Element;
