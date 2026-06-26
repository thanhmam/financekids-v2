import * as React from "react";

export interface NavTab {
  id: string;
  /** Unicode glyph, or the literal "profile" for the coin avatar tab. */
  icon: string;
  /** Active fill color for glyph tabs. */
  activeBg?: string;
}

export interface BottomNavProps {
  /** Tab list. Defaults to home/explore/tasks/leaderboard/profile. */
  tabs?: NavTab[];
  /** Id of the active tab. */
  active?: string;
  onSelect?: (id: string) => void;
  style?: React.CSSProperties;
}

/** BottomNav — the mobile 5-tab bottom navigation bar. */
export function BottomNav(props: BottomNavProps): React.JSX.Element;
