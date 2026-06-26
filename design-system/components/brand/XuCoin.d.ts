import * as React from "react";

export interface XuCoinProps {
  /** Diameter in px. @default 20 */
  size?: number;
  style?: React.CSSProperties;
}

/** XuCoin — the gold "xu" currency token with a white X. */
export function XuCoin(props: XuCoinProps): React.JSX.Element;
