import * as React from "react";

export interface IconTileProps {
  children?: React.ReactNode;
  /** Square side in px. @default 46 */
  size?: number;
  /** Background fill (CSS color or token). */
  bg?: string;
  /** Icon/glyph color. */
  color?: string;
  /** Corner radius in px. @default 14 */
  radius?: number;
  /** Override icon font-size. */
  fontSize?: number;
  style?: React.CSSProperties;
}

/** IconTile — rounded square holding an emoji/glyph icon. */
export function IconTile(props: IconTileProps): React.JSX.Element;
