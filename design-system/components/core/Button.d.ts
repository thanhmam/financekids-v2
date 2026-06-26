import * as React from "react";

/**
 * Props for Button — the signature XuXu "chunky 3D" button that sinks into its
 * solid colored shadow when pressed.
 */
export interface ButtonProps {
  children?: React.ReactNode;
  /** Color treatment. @default "primary" */
  variant?: "primary" | "streak" | "gold" | "white" | "secondary" | "ghost";
  /** Size preset. @default "md" */
  size?: "sm" | "md" | "lg";
  /** Stretch to full container width. */
  block?: boolean;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}

/** Button — the signature XuXu "chunky 3D" button. */
export function Button(props: ButtonProps): React.JSX.Element;
