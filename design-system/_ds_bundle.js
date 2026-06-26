/* @ds-bundle: {"format":3,"namespace":"XuXuDesignSystem_72e90e","components":[{"name":"XuCoin","sourcePath":"components/brand/XuCoin.jsx"},{"name":"XuXuMascot","sourcePath":"components/brand/XuXuMascot.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"IconTile","sourcePath":"components/core/IconTile.jsx"},{"name":"ProgressBar","sourcePath":"components/core/ProgressBar.jsx"},{"name":"StatPill","sourcePath":"components/core/StatPill.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"LessonCard","sourcePath":"components/game/LessonCard.jsx"},{"name":"QuizOption","sourcePath":"components/game/QuizOption.jsx"},{"name":"BottomNav","sourcePath":"components/navigation/BottomNav.jsx"}],"sourceHashes":{"components/brand/XuCoin.jsx":"4dfcd25169f1","components/brand/XuXuMascot.jsx":"dfada573d0f5","components/core/Button.jsx":"141fc27e1b67","components/core/Chip.jsx":"d49bd2d201b0","components/core/IconTile.jsx":"5ed3467cf007","components/core/ProgressBar.jsx":"42cb398f9501","components/core/StatPill.jsx":"4cfc0f43840a","components/feedback/Badge.jsx":"fbe444f2bb24","components/game/LessonCard.jsx":"b7de9128cbbd","components/game/QuizOption.jsx":"bb2cf23d5f5f","components/navigation/BottomNav.jsx":"e78fc06de0dc","ui_kits/xuxu-app/Screens1.jsx":"a2f4c9fbab26","ui_kits/xuxu-app/Screens2.jsx":"acd00e9bc09d","ui_kits/xuxu-app/Screens3.jsx":"978440df7a6b","ui_kits/xuxu-app/data.js":"0cb9304008a3"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.XuXuDesignSystem_72e90e = window.XuXuDesignSystem_72e90e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/XuCoin.jsx
try { (() => {
/**
 * XuCoin — the "xu" currency token: a small gold disc with a white "X".
 * Used inline next to balances and reward amounts across the app.
 */
function XuCoin({
  size = 20,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      borderRadius: "50%",
      background: "var(--xu-gold, #FFC93C)",
      border: "2px solid var(--xu-gold-dark, #E8A317)",
      color: "#7A4E00",
      font: `800 ${Math.round(size * 0.58)}px 'Baloo 2'`,
      flexShrink: 0,
      ...style
    }
  }, "X");
}
Object.assign(__ds_scope, { XuCoin });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/XuCoin.jsx", error: String((e && e.message) || e) }); }

// components/brand/XuXuMascot.jsx
try { (() => {
/**
 * XuXuMascot — the brand's gold-coin character.
 * Rendered entirely with CSS (radial-gradient coin face, dashed inner
 * ring, dot eyes, smile, blush) so it scales crisply at any size.
 * Moods: happy (default), excited (star eyes), sad (flat eyes + tear).
 */
function XuXuMascot({
  size = 56,
  mood = "happy",
  float = false,
  style
}) {
  const s = size;
  const border = Math.max(2, Math.round(s * 0.055));
  const shadow = Math.round(s * 0.09);
  const wrap = {
    position: "relative",
    width: s,
    height: s,
    borderRadius: "50%",
    flexShrink: 0,
    animation: float ? "xu-float 3s ease-in-out infinite" : undefined,
    ...style
  };
  if (mood === "sad") {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        ...wrap,
        background: "radial-gradient(circle at 38% 30%,#FFE594,#FFC93C 58%,#F2B01E)",
        border: `${border}px solid #C99A22`,
        boxShadow: `0 ${shadow}px 0 #A87E12`
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        top: "40%",
        left: "25%",
        width: s * 0.14,
        height: s * 0.04,
        background: "#3A2A00",
        borderRadius: 4
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        top: "40%",
        right: "25%",
        width: s * 0.14,
        height: s * 0.04,
        background: "#3A2A00",
        borderRadius: 4
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        top: "57%",
        left: "50%",
        transform: "translateX(-50%)",
        width: s * 0.32,
        height: s * 0.15,
        border: `${Math.max(2, Math.round(s * 0.04))}px solid #3A2A00`,
        borderBottom: "none",
        borderRadius: "44px 44px 0 0"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        top: "49%",
        left: "23%",
        width: s * 0.07,
        height: s * 0.11,
        background: "#7EC8FF",
        borderRadius: "0 0 50% 50%"
      }
    }));
  }
  if (mood === "excited") {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        ...wrap,
        background: "radial-gradient(circle at 38% 30%,#FFE594,#FFC93C 58%,#F2B01E)",
        border: `${border}px solid #E8A317`,
        boxShadow: `0 ${shadow}px 0 #C98A12`
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        top: "36%",
        left: "28%",
        color: "#3A2A00",
        font: `800 ${Math.round(s * 0.24)}px 'Baloo 2'`
      }
    }, "\u2605"), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        top: "36%",
        right: "28%",
        color: "#3A2A00",
        font: `800 ${Math.round(s * 0.24)}px 'Baloo 2'`
      }
    }, "\u2605"), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        top: "63%",
        left: "50%",
        transform: "translateX(-50%)",
        width: s * 0.32,
        height: s * 0.18,
        background: "#3A2A00",
        borderRadius: "0 0 44px 44px"
      }
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      background: "radial-gradient(circle at 38% 30%,#FFE594,#FFC93C 58%,#F2B01E)",
      border: `${border}px solid #E8A317`,
      boxShadow: `0 ${shadow}px 0 #C98A12`
    }
  }, s >= 80 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: Math.round(s * 0.12),
      borderRadius: "50%",
      border: "3px dashed rgba(180,120,0,.35)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "40%",
      left: "25%",
      width: s * 0.11,
      height: s * 0.16,
      background: "#3A2A00",
      borderRadius: "50%"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "40%",
      right: "25%",
      width: s * 0.11,
      height: s * 0.16,
      background: "#3A2A00",
      borderRadius: "50%"
    }
  }), s >= 50 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "42%",
      left: "28%",
      width: s * 0.04,
      height: s * 0.04,
      background: "#fff",
      borderRadius: "50%"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "42%",
      right: "34%",
      width: s * 0.04,
      height: s * 0.04,
      background: "#fff",
      borderRadius: "50%"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "60%",
      left: "50%",
      transform: "translateX(-50%)",
      width: s * 0.3,
      height: s * 0.15,
      border: `${Math.max(2, Math.round(s * 0.04))}px solid #3A2A00`,
      borderTop: "none",
      borderRadius: "0 0 44px 44px"
    }
  }), s >= 80 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "55%",
      left: "17%",
      width: s * 0.12,
      height: s * 0.07,
      background: "rgba(255,120,120,.5)",
      borderRadius: "50%"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "55%",
      right: "17%",
      width: s * 0.12,
      height: s * 0.07,
      background: "rgba(255,120,120,.5)",
      borderRadius: "50%"
    }
  })));
}
Object.assign(__ds_scope, { XuXuMascot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/XuXuMascot.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Button — the signature XuXu "chunky 3D" button.
 * A solid colored drop-shadow sits directly below the button; pressing
 * sinks the button into its shadow (translateY + reduced shadow).
 *
 * variants: primary (green) · streak (orange) · gold · white (on color bg)
 *           · secondary (outline) · ghost (text only)
 * sizes:    sm · md · lg · block (full-width lg)
 */
const PALETTE = {
  primary: {
    bg: "var(--xu-green, #16C172)",
    fg: "#fff",
    depth: "var(--xu-green-dark, #0E9E5C)"
  },
  streak: {
    bg: "var(--xu-streak, #FF8A3D)",
    fg: "#fff",
    depth: "var(--xu-streak-dark, #E0631C)"
  },
  gold: {
    bg: "var(--xu-gold, #FFC93C)",
    fg: "#7A4E00",
    depth: "var(--xu-gold-shadow, #D99312)"
  },
  white: {
    bg: "#fff",
    fg: "var(--xu-green, #16C172)",
    depth: "rgba(0,0,0,.18)"
  }
};
const SIZES = {
  sm: {
    padding: "8px 14px",
    fontSize: 12,
    radius: 11,
    depth: 3
  },
  md: {
    padding: "11px 18px",
    fontSize: 14,
    radius: 13,
    depth: 4
  },
  lg: {
    padding: "15px 22px",
    fontSize: 16,
    radius: 16,
    depth: 5
  }
};
function Button({
  children,
  variant = "primary",
  size = "md",
  block = false,
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const [pressed, setPressed] = useState(false);
  const sz = SIZES[size] || SIZES.md;

  // Outline / ghost variants don't use the 3D shadow
  if (variant === "secondary" || variant === "ghost") {
    const isGhost = variant === "ghost";
    return /*#__PURE__*/React.createElement("button", _extends({
      onClick: disabled ? undefined : onClick,
      disabled: disabled,
      style: {
        width: block ? "100%" : undefined,
        padding: sz.padding,
        borderRadius: sz.radius,
        font: `800 ${sz.fontSize}px 'Baloo 2'`,
        letterSpacing: 0.3,
        color: isGhost ? "var(--xu-muted, #5B7065)" : "var(--xu-muted, #5B7065)",
        background: isGhost ? "transparent" : "#fff",
        border: isGhost ? "none" : "2px solid var(--xu-line-subtle, #DDE6D6)",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        transition: "transform .1s ease, background .15s",
        transform: pressed ? "scale(.96)" : "none",
        ...style
      },
      onMouseDown: () => setPressed(true),
      onMouseUp: () => setPressed(false),
      onMouseLeave: () => setPressed(false),
      onTouchStart: () => setPressed(true),
      onTouchEnd: () => setPressed(false)
    }, rest), children);
  }
  const p = PALETTE[variant] || PALETTE.primary;
  const depth = sz.depth;
  return /*#__PURE__*/React.createElement("button", _extends({
    onClick: disabled ? undefined : onClick,
    disabled: disabled,
    style: {
      width: block ? "100%" : undefined,
      padding: sz.padding,
      borderRadius: sz.radius,
      font: `800 ${sz.fontSize}px 'Baloo 2'`,
      letterSpacing: 0.5,
      color: disabled ? "var(--xu-caption, #9AA89E)" : p.fg,
      background: disabled ? "var(--xu-line, #ECF1E6)" : p.bg,
      border: "none",
      boxShadow: disabled ? "none" : `0 ${pressed ? Math.max(1, depth - 3) : depth}px 0 ${p.depth}`,
      transform: pressed && !disabled ? `translateY(${depth - Math.max(1, depth - 3)}px)` : "none",
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "box-shadow .1s ease, transform .1s ease",
      ...style
    },
    onMouseDown: () => !disabled && setPressed(true),
    onMouseUp: () => setPressed(false),
    onMouseLeave: () => setPressed(false),
    onTouchStart: () => !disabled && setPressed(true),
    onTouchEnd: () => setPressed(false)
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Chip.jsx
try { (() => {
/**
 * Chip — a small rounded tag/label. Used for age groups, categories,
 * "Bài 3/45" counters, and filter pills. Pass a tone preset or custom colors.
 */
const TONES = {
  green: {
    bg: "var(--xu-green-100, #E3F7EC)",
    color: "var(--xu-green-dark, #0E9E5C)"
  },
  indigo: {
    bg: "#EEF2FF",
    color: "#4F46E5"
  },
  violet: {
    bg: "var(--xu-gems-50, #F1E9FF)",
    color: "#7C4DEC"
  },
  gold: {
    bg: "var(--xu-gold-50, #FFF8E6)",
    color: "var(--xu-gold-dark, #E8A317)"
  },
  streak: {
    bg: "var(--xu-streak-50, #FFEEDD)",
    color: "var(--xu-streak, #FF8A3D)"
  },
  neutral: {
    bg: "var(--xu-bg, #F4F8EF)",
    color: "var(--xu-muted, #5B7065)"
  }
};
function Chip({
  children,
  tone = "green",
  solid = false,
  style
}) {
  const t = TONES[tone] || TONES.green;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      background: solid ? t.color : t.bg,
      color: solid ? "#fff" : t.color,
      borderRadius: 999,
      padding: "3px 9px",
      font: "700 11px 'Nunito'",
      whiteSpace: "nowrap",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/core/IconTile.jsx
try { (() => {
/**
 * IconTile — the rounded square that holds an emoji/glyph icon, used on
 * lesson cards, shop items, task rows. Tint the background and icon color.
 */
function IconTile({
  children,
  size = 46,
  bg = "var(--xu-bg, #F4F8EF)",
  color,
  radius = 14,
  fontSize,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: radius,
      background: bg,
      color,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      font: `800 ${fontSize || Math.round(size * 0.46)}px 'Baloo 2'`,
      flexShrink: 0,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { IconTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconTile.jsx", error: String((e && e.message) || e) }); }

// components/core/ProgressBar.jsx
try { (() => {
/**
 * ProgressBar — rounded track with a green fill and the signature inset
 * white "shine" highlight along the top of the fill. Used for lesson
 * progress, daily goals, task completion.
 *
 * tone: green (default) · streak · gems · onDark (for use on dark cards)
 */
const FILLS = {
  green: "var(--xu-green, #16C172)",
  streak: "var(--xu-streak, #FF8A3D)",
  gems: "var(--xu-gems, #8B5CF6)",
  onDark: "var(--xu-green, #16C172)"
};
function ProgressBar({
  value = 0,
  height = 12,
  tone = "green",
  track,
  style
}) {
  const pct = Math.max(0, Math.min(100, value));
  const trackBg = track || (tone === "onDark" ? "rgba(255,255,255,.18)" : "var(--xu-line, #ECF1E6)");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height,
      borderRadius: Math.round(height * 0.7),
      background: trackBg,
      overflow: "hidden",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${pct}%`,
      height: "100%",
      background: FILLS[tone] || FILLS.green,
      boxShadow: "inset 0 3px 0 rgba(255,255,255,.35)",
      borderRadius: Math.round(height * 0.7),
      transition: "width .6s ease"
    }
  }));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/core/StatPill.jsx
try { (() => {
/**
 * StatPill — the rounded stat chip in headers: streak (orange ▲), xu coin
 * balance, or XP star. Pass `kind` for a preset, or a custom icon + tint.
 */
const PRESETS = {
  streak: {
    icon: "▲",
    iconColor: "var(--xu-streak, #FF8A3D)",
    bg: "var(--xu-gold-100, #FFF3DC)",
    border: "transparent"
  },
  xu: {
    icon: "coin",
    bg: "var(--xu-gold-50, #FFF8E6)",
    border: "var(--xu-gold, #FFC93C)"
  },
  xp: {
    icon: "★",
    iconColor: "var(--xu-gold, #FFC93C)",
    bg: "#fff",
    border: "var(--xu-line, #ECF1E6)"
  }
};
function StatPill({
  kind = "streak",
  value,
  icon,
  iconColor,
  bg,
  border,
  style
}) {
  const p = PRESETS[kind] || PRESETS.streak;
  const useIcon = icon || p.icon;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      background: bg || p.bg,
      border: `1.5px solid ${border || p.border}`,
      borderRadius: 999,
      padding: "5px 12px",
      ...style
    }
  }, useIcon === "coin" ? /*#__PURE__*/React.createElement(__ds_scope.XuCoin, {
    size: 20
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      color: iconColor || p.iconColor,
      font: "800 15px 'Baloo 2'"
    }
  }, useIcon), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "800 15px 'Baloo 2'",
      color: "var(--xu-ink, #15392A)"
    }
  }, typeof value === "number" ? value.toLocaleString("vi-VN") : value));
}
Object.assign(__ds_scope, { StatPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatPill.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
/**
 * Badge — an achievement tile: a big rounded square holding an emoji,
 * with a caption beneath. Locked badges render greyed with a 🔒 and a
 * "Bí ẩn" (mystery) label. Used in the profile badges grid.
 *
 * tone presets tint earned badges; pass earned={false} for the locked state.
 */
const TONES = {
  green: {
    bg: "var(--xu-green-100, #E3F7EC)",
    border: "var(--xu-green-border, #BFEBD2)"
  },
  gold: {
    bg: "var(--xu-gold-50, #FFF8E6)",
    border: "#FFE8A3"
  },
  streak: {
    bg: "var(--xu-streak-100, #FFF3DC)",
    border: "#FFE0B8"
  },
  violet: {
    bg: "var(--xu-gems-50, #F1E9FF)",
    border: "#DCC9FB"
  },
  info: {
    bg: "var(--xu-info-50, #E9F3FF)",
    border: "#C3DFF8"
  },
  life: {
    bg: "var(--xu-life-50, #FFE3E7)",
    border: "#FFBCC4"
  }
};
function Badge({
  emoji = "🌟",
  label,
  tone = "gold",
  earned = true,
  size = 56,
  style
}) {
  const t = TONES[tone] || TONES.gold;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: 18,
      margin: "0 auto",
      background: earned ? t.bg : "var(--xu-bg, #F4F8EF)",
      border: `2px solid ${earned ? t.border : "var(--xu-line, #ECF1E6)"}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: earned ? Math.round(size * 0.43) : Math.round(size * 0.39),
      opacity: earned ? 1 : 0.5,
      filter: earned ? "none" : "grayscale(1)"
    }
  }, earned ? emoji : "🔒"), label !== undefined && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 9px 'Nunito'",
      color: earned ? "var(--xu-muted, #5B7065)" : "var(--xu-faint, #C2CDBA)",
      marginTop: 5,
      lineHeight: 1.2
    }
  }, earned ? label : "Bí ẩn"));
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/game/LessonCard.jsx
try { (() => {
const AGE_CHIP = {
  "6-8": {
    tone: "green",
    label: "6-8 tuổi"
  },
  "9-12": {
    tone: "indigo",
    label: "9-12 tuổi"
  },
  "13-16": {
    tone: "violet",
    label: "13-16 tuổi"
  }
};

/**
 * LessonCard — a lesson tile for the learning feed: emoji icon tile,
 * title + subtitle, age-group chip, XP footer, and a "Học →" / "Chơi lại"
 * call to action. Completed lessons turn green with a ✓ corner badge.
 * The card uses the brand's thicker bottom border (4px).
 */
function LessonCard({
  lesson = {},
  completed = false,
  onClick,
  style
}) {
  const age = AGE_CHIP[lesson.ageGroup] || AGE_CHIP["9-12"];
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      background: completed ? "var(--xu-green-50, #EAFBF1)" : "#fff",
      border: `2px solid ${completed ? "var(--xu-green, #16C172)" : "var(--xu-line, #ECF1E6)"}`,
      borderBottomWidth: 4,
      borderRadius: 18,
      padding: "13px 12px",
      position: "relative",
      overflow: "hidden",
      cursor: onClick ? "pointer" : "default",
      height: "100%",
      transition: "transform .15s ease, box-shadow .15s ease",
      ...style
    }
  }, completed && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 10,
      right: 10,
      width: 24,
      height: 24,
      borderRadius: 8,
      background: "var(--xu-green, #16C172)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      font: "800 11px 'Baloo 2'",
      color: "#fff"
    }
  }, "\u2713"), /*#__PURE__*/React.createElement(__ds_scope.IconTile, {
    size: 46,
    bg: lesson.bgColor || "var(--xu-bg, #F4F8EF)",
    fontSize: 22,
    style: {
      marginBottom: 9
    }
  }, lesson.icon || "💰"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "800 13px 'Baloo 2'",
      color: "var(--xu-ink, #15392A)",
      lineHeight: 1.25,
      marginBottom: 3,
      paddingRight: completed ? 28 : 0
    }
  }, lesson.title || "Bài học"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 11px 'Nunito'",
      color: "var(--xu-caption, #9AA89E)",
      marginBottom: 10,
      lineHeight: 1.3
    }
  }, lesson.subtitle), /*#__PURE__*/React.createElement(__ds_scope.Chip, {
    tone: age.tone,
    style: {
      marginBottom: 10,
      fontSize: 10,
      padding: "3px 9px"
    }
  }, age.label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "600 11px 'Nunito'",
      color: "var(--xu-caption, #9AA89E)"
    }
  }, "\u2B50 +", lesson.xp ?? 100, " XP"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "800 12px 'Baloo 2'",
      color: completed ? "var(--xu-green-dark, #0E9E5C)" : "var(--xu-green, #16C172)"
    }
  }, completed ? "Chơi lại" : "Học →")));
}
Object.assign(__ds_scope, { LessonCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/game/LessonCard.jsx", error: String((e && e.message) || e) }); }

// components/game/QuizOption.jsx
try { (() => {
/**
 * QuizOption — a single answer button in the multiple-choice mini-game.
 * Shows a numbered badge + label. The `state` prop drives the reveal
 * styling: idle · selected · correct · wrong · dimmed. Uses the brand's
 * 4px bottom border so options feel pressable.
 */
const STYLES = {
  idle: {
    border: "var(--xu-line, #ECF1E6)",
    bg: "#fff",
    badge: {
      border: "2px solid var(--xu-line-subtle, #DDE6D6)",
      color: "var(--xu-caption, #9AA89E)",
      background: "transparent"
    },
    label: "var(--xu-ink-soft, #34453B)",
    weight: 700,
    opacity: 1
  },
  selected: {
    border: "var(--xu-green, #16C172)",
    bg: "var(--xu-green-50, #EAFBF1)",
    badge: {
      background: "var(--xu-green, #16C172)",
      color: "#fff"
    },
    label: "var(--xu-green-dark, #0E9E5C)",
    weight: 700,
    opacity: 1
  },
  correct: {
    border: "var(--xu-green, #16C172)",
    bg: "var(--xu-green-50, #EAFBF1)",
    badge: {
      background: "var(--xu-green, #16C172)",
      color: "#fff"
    },
    label: "var(--xu-green-dark, #0E9E5C)",
    weight: 800,
    opacity: 1
  },
  wrong: {
    border: "var(--xu-life, #FF5366)",
    bg: "var(--xu-life-50, #FFE3E7)",
    badge: {
      background: "var(--xu-life, #FF5366)",
      color: "#fff"
    },
    label: "#C0283A",
    weight: 700,
    opacity: 1
  },
  dimmed: {
    border: "var(--xu-line, #ECF1E6)",
    bg: "#fff",
    badge: {
      border: "2px solid var(--xu-line-subtle, #DDE6D6)",
      color: "var(--xu-caption, #9AA89E)",
      background: "transparent"
    },
    label: "var(--xu-caption, #9AA89E)",
    weight: 700,
    opacity: 0.55
  }
};
function QuizOption({
  index = 0,
  children,
  state = "idle",
  onClick,
  style
}) {
  const s = STYLES[state] || STYLES.idle;
  const mark = state === "correct" ? "✓" : state === "wrong" ? "✗" : index + 1;
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      border: `2px solid ${s.border}`,
      borderBottomWidth: 4,
      background: s.bg,
      opacity: s.opacity,
      borderRadius: 16,
      padding: "13px 14px",
      cursor: onClick ? "pointer" : "default",
      transition: "border-color .15s, background .15s",
      textAlign: "left",
      width: "100%",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 26,
      height: 26,
      borderRadius: 8,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      font: "800 12px 'Baloo 2'",
      flexShrink: 0,
      ...s.badge
    }
  }, mark), /*#__PURE__*/React.createElement("span", {
    style: {
      font: `${s.weight} 14px 'Nunito'`,
      color: s.label
    }
  }, children));
}
Object.assign(__ds_scope, { QuizOption });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/game/QuizOption.jsx", error: String((e && e.message) || e) }); }

// components/navigation/BottomNav.jsx
try { (() => {
/**
 * BottomNav — the mobile 5-tab bottom navigation. Tabs use unicode glyph
 * icons; the active tab fills with its accent color (home/explore green,
 * tasks orange, leaderboard violet) and the profile tab is the gold coin
 * avatar with a green ring when active.
 */
const DEFAULT_TABS = [{
  id: "home",
  icon: "⌂",
  activeBg: "var(--xu-green, #16C172)"
}, {
  id: "explore",
  icon: "◆",
  activeBg: "var(--xu-green, #16C172)"
}, {
  id: "tasks",
  icon: "▲",
  activeBg: "var(--xu-streak, #FF8A3D)"
}, {
  id: "leaderboard",
  icon: "♛",
  activeBg: "var(--xu-gems, #8B5CF6)"
}, {
  id: "profile",
  icon: "profile"
}];
function BottomNav({
  tabs = DEFAULT_TABS,
  active = "home",
  onSelect,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      background: "#fff",
      borderTop: "2px solid var(--xu-line, #ECF1E6)",
      padding: "10px 0 14px",
      zIndex: 40,
      ...style
    }
  }, tabs.map(tab => {
    const isActive = active === tab.id;
    if (tab.icon === "profile") {
      return /*#__PURE__*/React.createElement("button", {
        key: tab.id,
        onClick: () => onSelect?.(tab.id),
        style: {
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "0 10px"
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          width: 30,
          height: 30,
          borderRadius: "50%",
          background: "var(--xu-gold, #FFC93C)",
          border: isActive ? "2.5px solid var(--xu-gold-dark, #E8A317)" : "2.5px dashed #FFB877",
          boxShadow: isActive ? "0 0 0 2.5px var(--xu-green, #16C172)" : "none",
          transition: "all .15s"
        }
      }));
    }
    return /*#__PURE__*/React.createElement("button", {
      key: tab.id,
      onClick: () => onSelect?.(tab.id),
      style: {
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: "0 10px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 30,
        height: 30,
        borderRadius: 9,
        background: isActive ? tab.activeBg : "transparent",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: isActive ? "#fff" : "var(--xu-faint, #C2CDBA)",
        font: "800 16px 'Baloo 2'",
        transition: "all .15s"
      }
    }, tab.icon));
  }));
}
Object.assign(__ds_scope, { BottomNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/BottomNav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/xuxu-app/Screens1.jsx
try { (() => {
/* XuXu app — Onboarding + Home screens */
const DS = window.XuXuDesignSystem_72e90e;
const {
  XuXuMascot,
  XuCoin,
  Button,
  StatPill,
  ProgressBar,
  LessonCard,
  Chip
} = DS;
function greeting() {
  const h = new Date().getHours();
  if (h < 12) return "Chào buổi sáng,";
  if (h < 18) return "Chào buổi chiều,";
  return "Chào buổi tối,";
}

/* ---------------- Onboarding ---------------- */
function Onboarding({
  onStart
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      background: "var(--xu-green)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "0 28px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 30
    }
  }, /*#__PURE__*/React.createElement(XuXuMascot, {
    size: 132,
    float: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "800 32px 'Baloo 2'",
      color: "#fff",
      lineHeight: 1.15
    }
  }, "Ch\xE0o, m\xECnh l\xE0", /*#__PURE__*/React.createElement("br", null), "XuXu!"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "700 14px 'Nunito'",
      color: "rgba(255,255,255,.92)",
      marginTop: 14,
      lineHeight: 1.55
    }
  }, "H\u1ECDc t\xE0i ch\xEDnh m\u1ED7i ng\xE0y 5 ph\xFAt,", /*#__PURE__*/React.createElement("br", null), "\u0111\u1EC3 b\u1EA1n kh\xF4ng bao gi\u1EDD ", /*#__PURE__*/React.createElement("b", null, "\"0 xu\""), "."), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: 300,
      marginTop: 30,
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "white",
    size: "lg",
    block: true,
    onClick: onStart
  }, "B\u1EAET \u0110\u1EA6U H\u1ECCC"), /*#__PURE__*/React.createElement("button", {
    onClick: onStart,
    style: {
      background: "rgba(255,255,255,.18)",
      color: "#fff",
      borderRadius: 16,
      border: "2px solid rgba(255,255,255,.4)",
      padding: 13,
      font: "800 14px 'Baloo 2'",
      cursor: "pointer"
    }
  }, "\u0110\u0102NG NH\u1EACP V\u1EDAI GOOGLE")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 30,
      font: "600 12px 'Nunito'",
      color: "rgba(255,255,255,.6)"
    }
  }, "Mi\u1EC5n ph\xED \xB7 Kh\xF4ng qu\u1EA3ng c\xE1o \xB7 Ti\u1EBFng Vi\u1EC7t"));
}

/* ---------------- Home ---------------- */
function Home({
  data,
  completed,
  totalXP,
  onPlay,
  onShop
}) {
  const [age, setAge] = React.useState("all");
  const lessons = age === "all" ? data.lessons : data.lessons.filter(l => l.ageGroup === age);
  const cont = data.lessons.find(l => !completed.includes(l.id)) || data.lessons[0];
  const goal = 3;
  const done = Math.min(completed.length, goal);
  const pct = Math.round(done / goal * 100);
  const completedPct = Math.round(completed.length / data.lessons.length * 100);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      overflowY: "auto",
      background: "var(--xu-bg)",
      paddingBottom: 70
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 5,
      background: "var(--xu-bg)",
      padding: "14px 16px 8px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 12px 'Nunito'",
      color: "var(--xu-caption)"
    }
  }, greeting()), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "800 20px 'Baloo 2'",
      color: "var(--xu-ink)",
      lineHeight: 1.1
    }
  }, data.user.name, "!")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onShop,
    style: {
      background: "none",
      border: "none",
      padding: 0,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(StatPill, {
    kind: "xu",
    value: data.user.xu
  })), /*#__PURE__*/React.createElement(StatPill, {
    kind: "streak",
    value: data.user.streak
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "4px 16px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--xu-ink)",
      borderRadius: 20,
      padding: "15px 16px",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      gap: 15,
      marginBottom: 11
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 60,
      height: 60,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 60,
      height: 60,
      borderRadius: "50%",
      background: `conic-gradient(var(--xu-green) ${pct}%, rgba(255,255,255,.15) 0)`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 7,
      borderRadius: "50%",
      background: "var(--xu-ink)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      font: "800 14px 'Baloo 2'"
    }
  }, pct, "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "800 16px 'Baloo 2'"
    }
  }, "M\u1EE5c ti\xEAu h\xF4m nay"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 12px 'Nunito'",
      color: "rgba(255,255,255,.7)",
      marginTop: 2
    }
  }, done, "/", goal, " b\xE0i \xB7 c\xF2n +", (goal - done) * 10, " xu"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      border: "2px solid var(--xu-line)",
      borderRadius: 20,
      padding: 14,
      marginBottom: 11
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 9
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "800 15px 'Baloo 2'",
      color: "var(--xu-ink)"
    }
  }, "Ti\u1EBFp t\u1EE5c: ", cont.title), /*#__PURE__*/React.createElement(Chip, {
    tone: "green"
  }, "B\xE0i ", completed.length + 1, "/", data.lessons.length)), /*#__PURE__*/React.createElement(ProgressBar, {
    value: completedPct,
    style: {
      marginBottom: 11
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    block: true,
    onClick: () => onPlay(cont)
  }, "H\u1ECCC TI\u1EBEP")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 11,
      marginBottom: 11
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: "var(--xu-gems-50)",
      borderRadius: 18,
      padding: 13
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--xu-gems)",
      font: "800 19px 'Baloo 2'"
    }
  }, "\u25C6"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "800 13px 'Baloo 2'",
      color: "#5B2EC4",
      marginTop: 5
    }
  }, "Th\u1EED th\xE1ch"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 11px 'Nunito'",
      color: "#8B6FD0"
    }
  }, "\u0110\u1ED1 vui \xB7 +50 xu")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: "var(--xu-streak-50)",
      borderRadius: 18,
      padding: 13
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--xu-streak)",
      font: "800 19px 'Baloo 2'"
    }
  }, "\u25B2"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "800 13px 'Baloo 2'",
      color: "#C25E18",
      marginTop: 5
    }
  }, "Streak ", data.user.streak), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 11px 'Nunito'",
      color: "#D98A4D"
    }
  }, "Gi\u1EEF phong \u0111\u1ED9!"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      border: "2px dashed var(--xu-line-subtle)",
      borderRadius: 18,
      padding: "11px 13px",
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(XuXuMascot, {
    size: 32
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 12px 'Nunito'",
      color: "var(--xu-ink-soft)",
      lineHeight: 1.45
    }
  }, /*#__PURE__*/React.createElement("b", null, "M\u1EB9o c\u1EE7a XuXu:"), " ", data.tips[0])), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "800 18px 'Baloo 2'",
      color: "var(--xu-ink)",
      marginBottom: 10
    }
  }, "\uD83D\uDCDA T\u1EA5t c\u1EA3 b\xE0i h\u1ECDc"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap",
      marginBottom: 14
    }
  }, data.ageGroups.map(g => /*#__PURE__*/React.createElement("button", {
    key: g.value,
    onClick: () => setAge(g.value),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      padding: "7px 14px",
      borderRadius: 20,
      font: "700 13px 'Nunito'",
      border: "none",
      cursor: "pointer",
      background: age === g.value ? "var(--xu-green)" : "#fff",
      color: age === g.value ? "#fff" : "var(--xu-muted)",
      boxShadow: age === g.value ? "0 4px 0 var(--xu-green-dark)" : "0 2px 8px rgba(21,57,42,.07)"
    }
  }, /*#__PURE__*/React.createElement("span", null, g.emoji), /*#__PURE__*/React.createElement("span", null, g.label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 12
    }
  }, lessons.map(l => /*#__PURE__*/React.createElement(LessonCard, {
    key: l.id,
    lesson: l,
    completed: completed.includes(l.id),
    onClick: () => onPlay(l)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "18px 0 4px",
      font: "600 11px 'Nunito'",
      color: "var(--xu-faint)"
    }
  }, "XuXu \u2728 \xB7 ", data.lessons.length, " b\xE0i h\u1ECDc \xB7 3 nh\xF3m tu\u1ED5i")));
}
Object.assign(window, {
  Onboarding,
  Home
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/xuxu-app/Screens1.jsx", error: String((e && e.message) || e) }); }

// ui_kits/xuxu-app/Screens2.jsx
try { (() => {
/* XuXu app — GamePlay (quiz) + Result screens */
const DS2 = window.XuXuDesignSystem_72e90e;
const {
  XuXuMascot: Mascot2,
  XuCoin: Coin2,
  Button: Btn2,
  QuizOption,
  ProgressBar: PB2
} = DS2;
function Hearts({
  n
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 3
    }
  }, [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      color: i < n ? "var(--xu-life)" : "var(--xu-line)",
      fontSize: 16,
      lineHeight: 1
    }
  }, "\u2665")));
}
function GamePlay({
  lesson,
  onExit,
  onFinish
}) {
  const [qi, setQi] = React.useState(0);
  const [selected, setSelected] = React.useState(null);
  const [revealed, setRevealed] = React.useState(false);
  const [hearts, setHearts] = React.useState(5);
  const [correctCount, setCorrectCount] = React.useState(0);
  const q = lesson.questions[qi];
  const total = lesson.questions.length;
  const isCorrect = revealed && selected === q.correct;
  const check = () => {
    if (selected === null || revealed) return;
    setRevealed(true);
    if (selected === q.correct) setCorrectCount(c => c + 1);else setHearts(h => Math.max(0, h - 1));
  };
  const next = () => {
    if (qi < total - 1) {
      setQi(qi + 1);
      setSelected(null);
      setRevealed(false);
    } else {
      const finalCorrect = correctCount + (selected === q.correct && revealed ? 0 : 0);
      onFinish({
        lesson,
        correct: correctCount,
        total,
        xp: lesson.xp
      });
    }
  };
  const optState = i => {
    if (!revealed) return selected === i ? "selected" : "idle";
    if (i === q.correct) return "correct";
    if (i === selected) return "wrong";
    return "dimmed";
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      background: "var(--xu-bg)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0,
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "14px 16px 10px"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onExit,
    style: {
      width: 36,
      height: 36,
      borderRadius: 11,
      background: "#fff",
      border: "2px solid var(--xu-line)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--xu-ink)",
      font: "800 16px 'Baloo 2'"
    }
  }, "\u2039")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 12,
      borderRadius: 8,
      background: "var(--xu-line)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${Math.round(qi / total * 100)}%`,
      height: "100%",
      background: "var(--xu-green)",
      boxShadow: "inset 0 3px 0 rgba(255,255,255,.35)",
      transition: "width .4s ease"
    }
  })), /*#__PURE__*/React.createElement(Hearts, {
    n: hearts
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      overflowY: "auto",
      padding: "8px 16px 12px",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 12,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Mascot2, {
    size: 56
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      border: "2px solid var(--xu-line)",
      borderRadius: 16,
      padding: "12px 14px",
      font: "700 14px 'Nunito'",
      color: "var(--xu-ink)",
      lineHeight: 1.5,
      flex: 1
    }
  }, q.image && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 26,
      marginBottom: 6
    }
  }, q.image), /*#__PURE__*/React.createElement("span", null, q.question))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 11
    }
  }, q.options.map((opt, i) => /*#__PURE__*/React.createElement(QuizOption, {
    key: i,
    index: i,
    state: optState(i),
    onClick: () => !revealed && setSelected(i)
  }, opt))), revealed && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      padding: "12px 14px",
      borderRadius: 14,
      background: isCorrect ? "var(--xu-green-50)" : "#FFF3F4",
      borderLeft: `4px solid ${isCorrect ? "var(--xu-green)" : "var(--xu-life)"}`,
      animation: "xu-slide-up .3s ease"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18
    }
  }, isCorrect ? "🎉" : "💡"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "600 13px 'Nunito'",
      color: "var(--xu-ink-soft)",
      lineHeight: 1.5,
      margin: 0
    }
  }, q.explanation)))), /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0,
      padding: "10px 16px 18px",
      borderTop: "2px solid var(--xu-line)",
      background: "var(--xu-bg)"
    }
  }, !revealed ? /*#__PURE__*/React.createElement(Btn2, {
    variant: "primary",
    size: "lg",
    block: true,
    disabled: selected === null,
    onClick: check
  }, "KI\u1EC2M TRA") : /*#__PURE__*/React.createElement(Btn2, {
    variant: "primary",
    size: "lg",
    block: true,
    onClick: next
  }, qi < total - 1 ? "TIẾP TỤC" : "HOÀN THÀNH")));
}
function Result({
  result,
  onHome,
  onRetry
}) {
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    const t = setTimeout(() => setShow(true), 150);
    return () => clearTimeout(t);
  }, []);
  const xp = result.xp;
  const xu = Math.round(xp * 0.75);
  const pct = Math.round(result.correct / result.total * 100);
  const confetti = ["🌟", "💰", "⭐", "🎉", "✨", "🏅", "💎"];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      background: "var(--xu-green)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "32px 24px",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("style", null, `@keyframes floatDown { to { top: 110%; transform: rotate(720deg); opacity: 0; } } @keyframes popIn { from { transform: scale(.4); opacity: 0; } to { transform: scale(1); opacity: 1; } }`), show && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
      overflow: "hidden"
    }
  }, confetti.map((e, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: "absolute",
      fontSize: 26,
      left: `${8 + i * 13}%`,
      top: "-10%",
      animation: `floatDown ${2 + i * 0.25}s ease-in ${i * 0.12}s forwards`
    }
  }, e))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
      maxWidth: 360
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      animation: show ? "popIn .5s cubic-bezier(.175,.885,.32,1.275) forwards" : "none",
      opacity: show ? 1 : 0,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(Mascot2, {
    size: 120,
    mood: "excited"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "800 30px 'Baloo 2'",
      color: "#fff",
      lineHeight: 1.1
    }
  }, "Ho\xE0n th\xE0nh! \uD83C\uDF89"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "700 14px 'Nunito'",
      color: "rgba(255,255,255,.9)",
      marginTop: 8,
      marginBottom: 28,
      textAlign: "center"
    }
  }, result.lesson.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginBottom: 32,
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "rgba(255,255,255,.18)",
      borderRadius: 16,
      padding: "14px 6px",
      width: 86,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--xu-gold)",
      font: "800 24px 'Baloo 2'"
    }
  }, "\u2605"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "800 18px 'Baloo 2'",
      color: "#fff",
      marginTop: 3
    }
  }, "+", xp), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "700 10px 'Nunito'",
      color: "rgba(255,255,255,.8)"
    }
  }, "XP")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "rgba(255,255,255,.18)",
      borderRadius: 16,
      padding: "14px 6px",
      width: 86,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(Coin2, {
    size: 28
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "800 18px 'Baloo 2'",
      color: "#fff",
      marginTop: 3
    }
  }, "+", xu), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "700 10px 'Nunito'",
      color: "rgba(255,255,255,.8)"
    }
  }, "xu")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "rgba(255,255,255,.18)",
      borderRadius: 16,
      padding: "14px 6px",
      width: 86,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "800 18px 'Baloo 2'",
      color: "#fff"
    }
  }, result.correct, "/", result.total), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "800 14px 'Baloo 2'",
      color: "#fff",
      marginTop: 3
    }
  }, pct, "%"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "700 10px 'Nunito'",
      color: "rgba(255,255,255,.8)"
    }
  }, "\u0111\xFAng"))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Btn2, {
    variant: "white",
    size: "lg",
    block: true,
    onClick: onHome
  }, "TI\u1EBEP T\u1EE4C"), /*#__PURE__*/React.createElement("button", {
    onClick: onRetry,
    style: {
      padding: "12px 0",
      borderRadius: 16,
      font: "800 15px 'Baloo 2'",
      color: "rgba(255,255,255,.9)",
      background: "rgba(255,255,255,.18)",
      border: "2px solid rgba(255,255,255,.3)",
      cursor: "pointer"
    }
  }, "Th\u1EED l\u1EA1i"))));
}
Object.assign(window, {
  GamePlay,
  Result
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/xuxu-app/Screens2.jsx", error: String((e && e.message) || e) }); }

// ui_kits/xuxu-app/Screens3.jsx
try { (() => {
/* XuXu app — tab screens: Explore, Tasks, Leaderboard, Profile, Shop, Streak */
const DS3 = window.XuXuDesignSystem_72e90e;
const {
  XuXuMascot: M3,
  XuCoin: C3,
  Button: B3,
  StatPill: SP3,
  ProgressBar: P3,
  Chip: Ch3,
  Badge: Bd3,
  IconTile: IT3
} = DS3;
function ScreenHeader({
  title,
  right,
  onBack
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      borderBottom: "2px solid var(--xu-line)",
      padding: "14px 18px",
      display: "flex",
      alignItems: "center",
      gap: 12,
      position: "sticky",
      top: 0,
      zIndex: 5
    }
  }, onBack && /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      width: 36,
      height: 36,
      borderRadius: 11,
      background: "var(--xu-bg)",
      border: "2px solid var(--xu-line)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "800 16px 'Baloo 2'",
      color: "var(--xu-ink)"
    }
  }, "\u2039")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      font: "800 22px 'Baloo 2'",
      color: "var(--xu-ink)"
    }
  }, title), right);
}
const scroll = {
  height: "100%",
  overflowY: "auto",
  background: "var(--xu-bg)",
  paddingBottom: 72
};

/* ---------------- Explore ---------------- */
function Explore({
  data,
  completed,
  onPlay
}) {
  const [q, setQ] = React.useState("");
  const topics = data.topics.filter(t => t.label.toLowerCase().includes(q.toLowerCase()));
  return /*#__PURE__*/React.createElement("div", {
    style: scroll
  }, /*#__PURE__*/React.createElement(ScreenHeader, {
    title: "Kh\xE1m ph\xE1"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 16px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 9,
      background: "#fff",
      border: "2px solid var(--xu-line)",
      borderRadius: 14,
      padding: "11px 14px",
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--xu-faint)",
      font: "800 15px 'Baloo 2'"
    }
  }, "\u2315"), /*#__PURE__*/React.createElement("input", {
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: "T\xECm ch\u1EE7 \u0111\u1EC1 t\xE0i ch\xEDnh...",
    style: {
      flex: 1,
      border: "none",
      outline: "none",
      font: "600 13px 'Nunito'",
      color: "var(--xu-ink)",
      background: "none"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "700 13px 'Nunito'",
      color: "var(--xu-caption)",
      marginBottom: 11
    }
  }, "CH\u1EE6 \u0110\u1EC0"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 11,
      marginBottom: 20
    }
  }, topics.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.id,
    style: {
      background: t.bg,
      borderRadius: 18,
      padding: 14,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: t.iconColor,
      font: "800 22px 'Baloo 2'"
    }
  }, t.icon), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "800 14px 'Baloo 2'",
      color: t.titleColor,
      marginTop: 8
    }
  }, t.label), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 11px 'Nunito'",
      color: t.subColor,
      marginTop: 2
    }
  }, t.sub), t.locked && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 10,
      right: 10,
      fontSize: 14
    }
  }, "\uD83D\uDD12")))), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "700 13px 'Nunito'",
      color: "var(--xu-caption)",
      marginBottom: 11
    }
  }, "T\u1EA4T C\u1EA2 B\xC0I H\u1ECCC"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 9
    }
  }, data.lessons.map(l => {
    const done = completed.includes(l.id);
    return /*#__PURE__*/React.createElement("button", {
      key: l.id,
      onClick: () => onPlay(l),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        background: "#fff",
        border: `2px solid ${done ? "var(--xu-green)" : "var(--xu-line)"}`,
        borderRadius: 14,
        padding: "11px 14px",
        cursor: "pointer",
        textAlign: "left"
      }
    }, /*#__PURE__*/React.createElement(IT3, {
      size: 40,
      bg: l.bgColor,
      fontSize: 20
    }, l.icon), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: "800 13px 'Baloo 2'",
        color: "var(--xu-ink)"
      }
    }, l.title), /*#__PURE__*/React.createElement("div", {
      style: {
        font: "600 11px 'Nunito'",
        color: "var(--xu-caption)",
        marginTop: 1
      }
    }, "+", l.xp, " XP")), done && /*#__PURE__*/React.createElement("div", {
      style: {
        width: 24,
        height: 24,
        borderRadius: 8,
        background: "var(--xu-green)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        font: "800 11px 'Baloo 2'"
      }
    }, "\u2713"));
  }))));
}

/* ---------------- Tasks ---------------- */
function Tasks({
  data
}) {
  const [secs, setSecs] = React.useState(8 * 3600 + 24 * 60 + 11);
  const [claimed, setClaimed] = React.useState(false);
  React.useEffect(() => {
    const t = setInterval(() => setSecs(s => Math.max(0, s - 1)), 1000);
    return () => clearInterval(t);
  }, []);
  const fmt = s => [s / 3600, s % 3600 / 60, s % 60].map(n => String(Math.floor(n)).padStart(2, "0")).join(":");
  return /*#__PURE__*/React.createElement("div", {
    style: scroll
  }, /*#__PURE__*/React.createElement(ScreenHeader, {
    title: "Nhi\u1EC7m v\u1EE5",
    right: /*#__PURE__*/React.createElement("div", {
      style: {
        font: "700 12px 'Nunito'",
        color: "var(--xu-caption)"
      }
    }, "L\xE0m m\u1EDBi sau ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--xu-streak)",
        fontWeight: 800
      }
    }, fmt(secs)))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 16px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "800 17px 'Baloo 2'",
      color: "var(--xu-ink)",
      marginBottom: 12
    }
  }, "Nhi\u1EC7m v\u1EE5 h\u1EB1ng ng\xE0y"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 11,
      marginBottom: 26
    }
  }, /*#__PURE__*/React.createElement(TaskRow, {
    icon: "\u2713",
    iconBg: "var(--xu-green-100)",
    iconColor: "var(--xu-green)",
    label: "Ho\xE0n th\xE0nh 3 b\xE0i h\u1ECDc",
    pct: 66,
    reward: 30,
    frac: "2/3"
  }), /*#__PURE__*/React.createElement(TaskRow, {
    icon: "\u2605",
    iconBg: "var(--xu-streak-100)",
    iconColor: "var(--xu-streak)",
    label: "\u0110\u1EA1t 100 XP h\xF4m nay",
    pct: 60,
    reward: 40,
    frac: "60/100",
    tone: "streak"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      background: "var(--xu-green-50)",
      border: "2px solid var(--xu-green-border)",
      borderRadius: 18,
      padding: "14px 16px"
    }
  }, /*#__PURE__*/React.createElement(IT3, {
    size: 44,
    radius: 13,
    bg: "var(--xu-green)",
    color: "#fff"
  }, "\u2713"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "800 14px 'Baloo 2'",
      color: "var(--xu-green-dark)"
    }
  }, "Gi\u1EEF streak ", data.user.streak, " ng\xE0y"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 11px 'Nunito'",
      color: "#5BA882",
      marginTop: 3
    }
  }, claimed ? "Đã nhận thưởng!" : "Đã hoàn thành — nhận thưởng!")), !claimed && /*#__PURE__*/React.createElement(B3, {
    variant: "primary",
    size: "sm",
    onClick: () => setClaimed(true)
  }, "NH\u1EACN"))), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "800 17px 'Baloo 2'",
      color: "var(--xu-ink)",
      marginBottom: 12
    }
  }, "Nhi\u1EC7m v\u1EE5 tu\u1EA7n"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 11
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--xu-ink)",
      borderRadius: 18,
      padding: "17px 18px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "800 15px 'Baloo 2'",
      color: "#fff"
    }
  }, "Ho\xE0n th\xE0nh 1 \u0111\u01A1n v\u1ECB"), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "10px 0 7px"
    }
  }, /*#__PURE__*/React.createElement(P3, {
    value: 50,
    tone: "onDark",
    height: 10
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 11px 'Nunito'",
      color: "rgba(255,255,255,.72)"
    }
  }, "3/6 b\xE0i \xB7 th\u01B0\u1EDFng 200 xu + huy hi\u1EC7u")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      border: "2px solid var(--xu-line)",
      borderRadius: 18,
      padding: "17px 18px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "800 15px 'Baloo 2'",
      color: "var(--xu-ink)"
    }
  }, "Top 10 b\u1EA3ng x\u1EBFp h\u1EA1ng"), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "10px 0 7px"
    }
  }, /*#__PURE__*/React.createElement(P3, {
    value: 80,
    tone: "gems",
    height: 10
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 11px 'Nunito'",
      color: "var(--xu-caption)"
    }
  }, "H\u1EA1ng 4 hi\u1EC7n t\u1EA1i \xB7 th\u01B0\u1EDFng 150 xu")))));
}
function TaskRow({
  icon,
  iconBg,
  iconColor,
  label,
  pct,
  reward,
  frac,
  tone = "green"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      background: "#fff",
      border: "2px solid var(--xu-line)",
      borderRadius: 18,
      padding: "14px 16px"
    }
  }, /*#__PURE__*/React.createElement(IT3, {
    size: 44,
    radius: 13,
    bg: iconBg,
    color: iconColor
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "800 14px 'Baloo 2'",
      color: "var(--xu-ink)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(P3, {
    value: pct,
    tone: tone,
    height: 10
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      background: "var(--xu-gold-50)",
      borderRadius: 10,
      padding: "5px 9px"
    }
  }, /*#__PURE__*/React.createElement(C3, {
    size: 16
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "800 11px 'Baloo 2'",
      color: "var(--xu-ink)"
    }
  }, "+", reward)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "700 10px 'Nunito'",
      color: "var(--xu-caption)",
      marginTop: 4
    }
  }, frac)));
}

/* ---------------- Leaderboard ---------------- */
function Leaderboard({
  data
}) {
  const sorted = [...data.leaderboard].sort((a, b) => b.xp - a.xp);
  const myRank = sorted.findIndex(e => e.me);
  const rankColor = ["#E8A317", "#9AA89E", "#CD7F32"];
  const top = sorted[0].xp;
  return /*#__PURE__*/React.createElement("div", {
    style: scroll
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      borderBottom: "2px solid var(--xu-line)",
      padding: "16px 20px",
      textAlign: "center",
      position: "sticky",
      top: 0,
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--xu-gold)",
      font: "800 32px 'Baloo 2'",
      lineHeight: 1
    }
  }, "\u265B"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "800 20px 'Baloo 2'",
      color: "var(--xu-ink)",
      marginTop: 2
    }
  }, "H\u1EA1ng V\xE0ng"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 12px 'Nunito'",
      color: "var(--xu-caption)",
      marginTop: 2
    }
  }, "Top 7 th\u0103ng h\u1EA1ng \xB7 tu\u1EA7n n\xE0y")), myRank >= 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--xu-green-50)",
      border: "2px solid var(--xu-green)",
      borderRadius: 16,
      margin: "16px 16px 0",
      padding: "10px 16px",
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "700 14px 'Nunito'",
      color: "var(--xu-green-dark)"
    }
  }, "B\u1EA1n \u0111ang \u1EDF v\u1ECB tr\xED"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "800 22px 'Baloo 2'",
      color: "var(--xu-green)"
    }
  }, "#", myRank + 1), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18
    }
  }, "\uD83C\uDFAF")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px",
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, sorted.map((e, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      background: e.me ? "var(--xu-green-50)" : "#fff",
      border: `2px solid ${e.me ? "var(--xu-green)" : "var(--xu-line)"}`,
      borderRadius: 14,
      padding: "10px 14px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 26,
      textAlign: "center",
      font: "800 15px 'Baloo 2'",
      color: rankColor[i] || (e.me ? "var(--xu-green)" : "var(--xu-caption)")
    }
  }, i + 1), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: "50%",
      background: "#FFF9F0",
      border: `2px solid ${e.me ? "var(--xu-green)" : "var(--xu-line)"}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 20
    }
  }, e.avatar), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "800 14px 'Nunito'",
      color: e.me ? "var(--xu-green-dark)" : "var(--xu-ink)"
    }
  }, e.name, e.me && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "700 11px 'Nunito'",
      color: "var(--xu-green)",
      marginLeft: 6
    }
  }, "(b\u1EA1n)")), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 12px 'Nunito'",
      color: "var(--xu-caption)",
      marginTop: 1
    }
  }, "\u2B50 ", e.xp.toLocaleString("vi-VN"), " XP tu\u1EA7n n\xE0y")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 6,
      background: "var(--xu-line)",
      borderRadius: 4,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${Math.round(e.xp / top * 100)}%`,
      height: "100%",
      background: "linear-gradient(90deg, var(--xu-green), var(--xu-gold))"
    }
  }))))));
}

/* ---------------- Profile ---------------- */
function Profile({
  data,
  completed,
  totalXP
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: scroll
  }, /*#__PURE__*/React.createElement(ScreenHeader, {
    title: "H\u1ED3 s\u01A1",
    right: /*#__PURE__*/React.createElement("button", {
      style: {
        background: "none",
        border: "none",
        font: "700 13px 'Nunito'",
        color: "var(--xu-life)",
        cursor: "pointer"
      }
    }, "\u0110\u0103ng xu\u1EA5t")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 18px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(M3, {
    size: 66
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "800 20px 'Baloo 2'",
      color: "var(--xu-ink)"
    }
  }, data.user.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "700 13px 'Nunito'",
      color: "var(--xu-caption)"
    }
  }, "Tham gia ", data.user.joined))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 10,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    icon: "\u25B2",
    color: "var(--xu-streak)",
    value: data.user.streak,
    label: "ng\xE0y streak"
  }), /*#__PURE__*/React.createElement(Stat, {
    icon: "\u2605",
    color: "var(--xu-gold)",
    value: totalXP.toLocaleString("vi-VN"),
    label: "t\u1ED5ng XP"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      border: "2px solid var(--xu-line)",
      borderRadius: 16,
      padding: 12,
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(C3, {
    size: 26
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "800 18px 'Baloo 2'",
      color: "var(--xu-ink)"
    }
  }, data.user.xu.toLocaleString("vi-VN")), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 11px 'Nunito'",
      color: "var(--xu-caption)"
    }
  }, "xu t\xEDch lu\u1EF9"))), /*#__PURE__*/React.createElement(Stat, {
    icon: "\u265B",
    color: "var(--xu-gems)",
    value: "V\xE0ng",
    label: "h\u1EA1ng \u0111\u1EA5u"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      border: "2px solid var(--xu-line)",
      borderRadius: 18,
      padding: 14,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "800 15px 'Baloo 2'",
      color: "var(--xu-ink)"
    }
  }, "Ti\u1EBFn \u0111\u1ED9 h\u1ECDc"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "700 12px 'Nunito'",
      color: "var(--xu-green-dark)"
    }
  }, completed.length, "/", data.lessons.length, " b\xE0i")), /*#__PURE__*/React.createElement(P3, {
    value: Math.round(completed.length / data.lessons.length * 100)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "800 16px 'Baloo 2'",
      color: "var(--xu-ink)",
      marginBottom: 10
    }
  }, "Huy hi\u1EC7u"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 10,
      marginBottom: 20
    }
  }, data.badges.map(b => /*#__PURE__*/React.createElement(Bd3, {
    key: b.id,
    emoji: b.emoji,
    label: b.name,
    tone: b.tone,
    earned: b.earned
  })))));
}
function Stat({
  icon,
  color,
  value,
  label
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      border: "2px solid var(--xu-line)",
      borderRadius: 16,
      padding: 12,
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color,
      font: "800 22px 'Baloo 2'"
    }
  }, icon), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "800 18px 'Baloo 2'",
      color: "var(--xu-ink)"
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 11px 'Nunito'",
      color: "var(--xu-caption)"
    }
  }, label)));
}

/* ---------------- Shop ---------------- */
function Shop({
  data,
  onBack
}) {
  const [toast, setToast] = React.useState(null);
  const xu = data.user.xu;
  const buy = item => {
    setToast(xu < item.price ? {
      msg: "Không đủ xu!",
      color: "var(--xu-life)"
    } : {
      msg: `Đã mua "${item.name}"! 🎉`,
      color: "var(--xu-green)"
    });
    setTimeout(() => setToast(null), 2200);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: scroll
  }, /*#__PURE__*/React.createElement(ScreenHeader, {
    title: "C\u1EEDa h\xE0ng",
    onBack: onBack,
    right: /*#__PURE__*/React.createElement(SP3, {
      kind: "xu",
      value: xu
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 16px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "linear-gradient(150deg, #1FD07E, #0E9E5C)",
      borderRadius: 20,
      padding: 16,
      color: "#fff",
      marginBottom: 14,
      boxShadow: "0 5px 0 #0B7A48",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "800 16px 'Baloo 2'"
    }
  }, "G\xF3i T\u1EBFt \uD83E\uDDE7"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 12px 'Nunito'",
      color: "rgba(255,255,255,.85)"
    }
  }, "Gi\u1EA3m 20% m\u1ECDi v\u1EADt ph\u1EA9m")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "rgba(255,255,255,.22)",
      borderRadius: 12,
      padding: "8px 12px",
      font: "800 13px 'Baloo 2'"
    }
  }, "-20%")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 11
    }
  }, data.shop.map(item => {
    const can = xu >= item.price;
    return /*#__PURE__*/React.createElement("div", {
      key: item.id,
      style: {
        background: "#fff",
        border: "2px solid var(--xu-line)",
        borderRadius: 18,
        padding: "14px 12px",
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement(IT3, {
      size: 52,
      bg: item.iconBg,
      color: item.iconColor,
      fontSize: 24,
      style: {
        margin: "0 auto 10px"
      }
    }, item.icon), /*#__PURE__*/React.createElement("div", {
      style: {
        font: "800 13px 'Baloo 2'",
        color: "var(--xu-ink)",
        marginBottom: 3
      }
    }, item.name), /*#__PURE__*/React.createElement("div", {
      style: {
        font: "600 11px 'Nunito'",
        color: "var(--xu-caption)",
        marginBottom: 10,
        lineHeight: 1.35
      }
    }, item.desc), /*#__PURE__*/React.createElement(B3, {
      variant: can ? "primary" : "secondary",
      size: "sm",
      block: true,
      onClick: () => buy(item)
    }, item.price, " xu"));
  }))), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 28,
      left: "50%",
      transform: "translateX(-50%)",
      background: toast.color,
      color: "#fff",
      borderRadius: 14,
      padding: "12px 20px",
      font: "800 14px 'Baloo 2'",
      boxShadow: "0 6px 20px rgba(0,0,0,.18)",
      whiteSpace: "nowrap",
      animation: "xu-slide-up .3s ease"
    }
  }, toast.msg));
}

/* ---------------- Streak ---------------- */
function Streak({
  data,
  onBack
}) {
  const s = data.user.streak;
  const days = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];
  return /*#__PURE__*/React.createElement("div", {
    style: scroll
  }, /*#__PURE__*/React.createElement(ScreenHeader, {
    title: "Streak & Ph\u1EA7n th\u01B0\u1EDFng",
    onBack: onBack
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 18px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "linear-gradient(160deg, #FF9A4D, #FF7A2E)",
      borderRadius: 24,
      padding: "20px 18px",
      textAlign: "center",
      color: "#fff",
      marginBottom: 16,
      boxShadow: "0 6px 0 var(--xu-streak-dark)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "800 60px 'Baloo 2'",
      lineHeight: 1,
      textShadow: "0 3px 0 rgba(0,0,0,.15)"
    }
  }, s), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "800 20px 'Baloo 2'",
      marginTop: 2
    }
  }, "ng\xE0y streak!"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "700 13px 'Nunito'",
      color: "rgba(255,255,255,.9)",
      marginTop: 4
    }
  }, "Gi\u1EEF phong \u0111\u1ED9 \u2014 b\u1EA1n \u0111ang l\xE0m r\u1EA5t t\u1ED1t")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      background: "#fff",
      borderRadius: 18,
      padding: "14px 12px",
      marginBottom: 16,
      border: "2px solid var(--xu-line)"
    }
  }, days.map((d, i) => {
    const done = i < Math.min(s, 7);
    const today = i === Math.min(s, 6);
    return /*#__PURE__*/React.createElement("div", {
      key: d,
      style: {
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 30,
        height: 30,
        borderRadius: "50%",
        background: done ? "var(--xu-streak)" : "#fff",
        border: today && !done ? "2.5px dashed #FFB877" : done ? "none" : "2px solid var(--xu-line)",
        color: done ? "#fff" : today ? "var(--xu-streak)" : "var(--xu-faint)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        font: "800 13px 'Baloo 2'",
        margin: "0 auto"
      }
    }, done ? "✓" : today ? "★" : ""), /*#__PURE__*/React.createElement("div", {
      style: {
        font: "700 10px 'Nunito'",
        color: done || today ? "var(--xu-streak)" : "var(--xu-caption)",
        marginTop: 5
      }
    }, d));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "800 16px 'Baloo 2'",
      color: "var(--xu-ink)",
      marginBottom: 10
    }
  }, "Ph\u1EA7n th\u01B0\u1EDFng"), /*#__PURE__*/React.createElement(RewardRow, {
    tile: /*#__PURE__*/React.createElement(C3, {
      size: 26
    }),
    bg: "var(--xu-gold-50)",
    title: "+50 xu th\u01B0\u1EDFng",
    sub: "M\u1ED1c 7 ng\xE0y li\xEAn t\u1EE5c",
    cta: /*#__PURE__*/React.createElement(B3, {
      variant: "primary",
      size: "sm"
    }, "NH\u1EACN")
  }), /*#__PURE__*/React.createElement(RewardRow, {
    tile: "\u2744",
    tileBg: "var(--xu-info-50)",
    tileColor: "var(--xu-info)",
    title: "B\u0103ng gi\u1EEF streak",
    sub: "B\u1EA3o v\u1EC7 1 ng\xE0y l\u1EE1 qu\xEAn",
    cta: /*#__PURE__*/React.createElement(B3, {
      variant: "secondary",
      size: "sm"
    }, "120 xu")
  }), /*#__PURE__*/React.createElement(RewardRow, {
    tile: "\u25B2",
    tileBg: "var(--xu-streak-100)",
    tileColor: "var(--xu-streak)",
    title: "+200 xu th\u01B0\u1EDFng",
    sub: "M\u1ED1c 30 ng\xE0y li\xEAn t\u1EE5c",
    cta: /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--xu-bg)",
        color: "var(--xu-caption)",
        borderRadius: 12,
        padding: "7px 12px",
        font: "800 12px 'Baloo 2'"
      }
    }, s, "/30")
  })));
}
function RewardRow({
  tile,
  tileBg,
  tileColor,
  title,
  sub,
  cta
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      background: "#fff",
      borderRadius: 16,
      padding: 12,
      border: "2px solid var(--xu-line)",
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement(IT3, {
    size: 44,
    radius: 12,
    bg: tileBg || "var(--xu-gold-50)",
    color: tileColor,
    fontSize: 20
  }, tile), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "800 14px 'Baloo 2'",
      color: "var(--xu-ink)"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 11px 'Nunito'",
      color: "var(--xu-caption)"
    }
  }, sub)), cta);
}
Object.assign(window, {
  Explore,
  Tasks,
  Leaderboard,
  Profile,
  Shop,
  Streak
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/xuxu-app/Screens3.jsx", error: String((e && e.message) || e) }); }

// ui_kits/xuxu-app/data.js
try { (() => {
/* Sample content lifted from the XuXu app (src/data/lessons.js, shop, leaderboard).
   Exposed on window for the kit's babel scripts. */
window.XUXU_DATA = {
  user: {
    name: "Minh",
    streak: 7,
    xu: 1250,
    xp: 3200,
    joined: "03/2026"
  },
  lessons: [{
    id: "lesson-01",
    title: "Tiền là gì?",
    subtitle: "Hiểu về tiền và công dụng",
    ageGroup: "6-8",
    icon: "💰",
    bgColor: "#FFF9E6",
    xp: 100,
    questions: [{
      question: "Tiền dùng để làm gì?",
      image: "💰",
      options: ["Mua đồ ăn, quần áo và đồ chơi", "Dùng để vẽ tranh", "Dùng để uống", "Dùng để gối đầu ngủ"],
      correct: 0,
      explanation: "Đúng rồi! Tiền giúp chúng ta mua những thứ cần như đồ ăn, quần áo, và những thứ mình thích! 🌟"
    }, {
      question: "Ai kiếm ra tiền cho gia đình?",
      image: "👨‍👩‍👧‍👦",
      options: ["Chỉ có ông già Noel", "Ba mẹ đi làm kiếm tiền", "Tiền từ trên trời rơi xuống", "Máy ATM tự in ra"],
      correct: 1,
      explanation: "Ba mẹ đi làm việc để kiếm tiền nuôi gia đình. Đó là lý do công việc rất quan trọng! 💪"
    }, {
      question: "Nếu có 10.000đ, con nên làm gì?",
      image: "🤔",
      options: ["Mua kem ăn ngay", "Bỏ vào heo đất để dành", "Làm rơi mất", "Xé nhỏ ra"],
      correct: 1,
      explanation: "Nếu tiết kiệm, con có thể mua được thứ to hơn sau này. Đó gọi là TIẾT KIỆM! 🐷"
    }]
  }, {
    id: "lesson-02",
    title: "Cần và Muốn",
    subtitle: "Phân biệt thứ cần thiết và thứ muốn",
    ageGroup: "6-8",
    icon: "⚖️",
    bgColor: "#E8F5E9",
    xp: 120,
    questions: [{
      question: "Thứ nào là thứ CẦN THIẾT (phải có)?",
      image: "🏠",
      options: ["Đồ chơi robot mới", "Cơm ăn mỗi ngày", "Điện thoại xịn", "Giày sneaker đắt tiền"],
      correct: 1,
      explanation: "Cơm ăn là thứ CẦN THIẾT — không có sẽ bị đói! Đồ chơi là thứ MUỐN CÓ. 🍚"
    }, {
      question: "Khi tiền không đủ, nên mua gì trước?",
      image: "💭",
      options: ["Thứ đắt nhất trước", "Thứ mình thích nhất", "Thứ cần thiết trước", "Không mua gì cả"],
      correct: 2,
      explanation: "Luôn mua thứ CẦN THIẾT trước, sau đó mới nghĩ đến thứ MUỐN CÓ. Dùng tiền thông minh! 🧠"
    }]
  }, {
    id: "lesson-03",
    title: "Heo Đất Thần Kỳ",
    subtitle: "Học về tiết kiệm tiền",
    ageGroup: "6-8",
    icon: "🐷",
    bgColor: "#FCE4EC",
    xp: 150,
    questions: [{
      question: "Tiết kiệm tiền nghĩa là gì?",
      image: "🐷",
      options: ["Tiêu hết thật nhanh", "Để dành một phần tiền lại", "Cho hết bạn bè", "Giấu tiền rồi quên"],
      correct: 1,
      explanation: "Tiết kiệm là để dành một phần tiền lại cho tương lai. Heo đất giúp mình làm điều đó! 🐷"
    }]
  }, {
    id: "lesson-14",
    title: "Thu Nhập & Chi Tiêu",
    subtitle: "Quản lý tiền vào và tiền ra",
    ageGroup: "9-12",
    icon: "📊",
    bgColor: "#E3F2FD",
    xp: 150,
    questions: [{
      question: "Thu nhập là gì?",
      image: "💼",
      options: ["Tiền mình tiêu mỗi ngày", "Tiền mình kiếm được hoặc nhận được", "Tiền mình vay người khác", "Tiền trong ATM"],
      correct: 1,
      explanation: "Thu nhập là TẤT CẢ tiền bạn nhận được: lương, tiền thưởng, tiền lì xì… 💰"
    }, {
      question: "Nhận 500.000đ, cách nào tốt hơn?",
      image: "💭",
      options: ["Tiêu hết luôn", "Lập kế hoạch: 60% tiêu, 30% tiết kiệm, 10% từ thiện", "Cho bạn mượn hết", "Đốt đi"],
      correct: 1,
      explanation: "Lập kế hoạch trước khi tiêu giúp bạn không bao giờ hết tiền. Đó là LẬP NGÂN SÁCH! 📊"
    }]
  }, {
    id: "lesson-15",
    title: "Ngân Hàng Là Gì?",
    subtitle: "Hiểu về vai trò của ngân hàng",
    ageGroup: "9-12",
    icon: "🏦",
    bgColor: "#F3E5F5",
    xp: 160,
    questions: [{
      question: "Ngân hàng làm gì với tiền bạn gửi vào?",
      image: "🏦",
      options: ["Cất vào két và không làm gì", "Cho người khác vay và trả lãi cho bạn", "Mang đi đốt", "Chia cho nhân viên"],
      correct: 1,
      explanation: "Ngân hàng dùng tiền gửi để cho vay, đổi lại trả cho bạn TIỀN LÃI. Cả hai cùng lợi! 💹"
    }]
  }, {
    id: "lesson-30",
    title: "Lãi Kép Kỳ Diệu",
    subtitle: "Sức mạnh của thời gian",
    ageGroup: "13-16",
    icon: "📈",
    bgColor: "#EDE7F6",
    xp: 200,
    questions: [{
      question: "Lãi kép là gì?",
      image: "📈",
      options: ["Lãi tính trên cả vốn lẫn lãi đã có", "Lãi chỉ tính trên vốn ban đầu", "Một loại thuế", "Phí ngân hàng"],
      correct: 0,
      explanation: "Lãi kép = lãi đẻ ra lãi! Đầu tư càng sớm, tiền càng lớn theo thời gian. ⏳"
    }]
  }],
  ageGroups: [{
    value: "all",
    label: "Tất cả",
    emoji: "✨"
  }, {
    value: "6-8",
    label: "6-8 tuổi",
    emoji: "🧒"
  }, {
    value: "9-12",
    label: "9-12 tuổi",
    emoji: "👦"
  }, {
    value: "13-16",
    label: "13-16 tuổi",
    emoji: "🧑"
  }],
  shop: [{
    id: "heart_refill",
    icon: "♥",
    iconBg: "#FFE3E7",
    iconColor: "#FF5366",
    name: "Hồi đầy tim",
    desc: "Tiếp tục học ngay",
    price: 350
  }, {
    id: "streak_freeze",
    icon: "❄",
    iconBg: "#E9F3FF",
    iconColor: "#2BA3FF",
    name: "Băng giữ streak",
    desc: "Bảo vệ 1 ngày lỡ quên",
    price: 120
  }, {
    id: "xp_boost",
    icon: "★",
    iconBg: "#FFF3DC",
    iconColor: "#FF8A3D",
    name: "Nhân đôi XP · 15'",
    desc: "Cày điểm thần tốc",
    price: 200
  }, {
    id: "skin",
    icon: "◑",
    iconBg: "#F1E9FF",
    iconColor: "#8B5CF6",
    name: "Đổi diện mạo XuXu",
    desc: "Mũ & phụ kiện mới",
    price: 500
  }, {
    id: "unlock_invest",
    icon: "▲",
    iconBg: "#F1E9FF",
    iconColor: "#7C4DEC",
    name: "Mở chủ đề Đầu tư",
    desc: "Truy cập sớm 6 bài học",
    price: 120
  }, {
    id: "combo_save",
    icon: "◈",
    iconBg: "#FFF8E6",
    iconColor: "#E8A317",
    name: "Combo tiết kiệm",
    desc: "5 băng + 3 hồi tim",
    price: 800
  }],
  leaderboard: [{
    name: "Bảo Anh",
    avatar: "🦊",
    xp: 4820
  }, {
    name: "Khang",
    avatar: "🐯",
    xp: 4310
  }, {
    name: "Minh",
    avatar: "🐷",
    xp: 3200,
    me: true
  }, {
    name: "Linh",
    avatar: "🐰",
    xp: 2950
  }, {
    name: "Phúc",
    avatar: "🐼",
    xp: 2610
  }, {
    name: "Hà My",
    avatar: "🐱",
    xp: 2200
  }, {
    name: "Tuấn",
    avatar: "🐶",
    xp: 1980
  }, {
    name: "Ngọc",
    avatar: "🐨",
    xp: 1540
  }],
  badges: [{
    id: "first_lesson",
    emoji: "🌱",
    name: "Bắt đầu",
    tone: "green",
    earned: true
  }, {
    id: "five_lessons",
    emoji: "📚",
    name: "Chăm chỉ",
    tone: "info",
    earned: true
  }, {
    id: "ten_lessons",
    emoji: "🎓",
    name: "Nhà tài chính nhí",
    tone: "violet",
    earned: true
  }, {
    id: "twenty_lessons",
    emoji: "🚀",
    name: "Đang lên",
    tone: "streak",
    earned: false
  }, {
    id: "xp_500",
    emoji: "⭐",
    name: "500 XP",
    tone: "gold",
    earned: true
  }, {
    id: "xp_1000",
    emoji: "🌟",
    name: "1000 XP",
    tone: "streak",
    earned: true
  }, {
    id: "xp_2000",
    emoji: "💎",
    name: "2000 XP",
    tone: "violet",
    earned: true
  }, {
    id: "all_ages",
    emoji: "🌈",
    name: "Toàn năng",
    tone: "life",
    earned: false
  }],
  topics: [{
    id: "saving",
    label: "Tiết kiệm",
    icon: "◆",
    bg: "#E3F7EC",
    iconColor: "#0E9E5C",
    titleColor: "#0E5A38",
    subColor: "#5BA882",
    sub: "3/3 bài · Xong"
  }, {
    id: "budget",
    label: "Ngân sách",
    icon: "▦",
    bg: "#FFEEDD",
    iconColor: "#E07320",
    titleColor: "#9A4E12",
    subColor: "#C2854D",
    sub: "1/3 bài"
  }, {
    id: "invest",
    label: "Đầu tư",
    icon: "▲",
    bg: "#F1E9FF",
    iconColor: "#7C4DEC",
    titleColor: "#4F2BA8",
    subColor: "#8B6FD0",
    sub: "Khoá · 120 xu",
    locked: true
  }, {
    id: "debt",
    label: "Tránh nợ",
    icon: "◉",
    bg: "#FFE3E7",
    iconColor: "#E03A4E",
    titleColor: "#A11F30",
    subColor: "#D2697A",
    sub: "Khoá",
    locked: true
  }, {
    id: "credit",
    label: "Tín dụng",
    icon: "▤",
    bg: "#E9F3FF",
    iconColor: "#1E86E0",
    titleColor: "#1763A8",
    subColor: "#5B9BD8",
    sub: "Khoá",
    locked: true
  }, {
    id: "tax",
    label: "Thuế cơ bản",
    icon: "★",
    bg: "#FFF3DC",
    iconColor: "#D99312",
    titleColor: "#9A6A0E",
    subColor: "#C2974D",
    sub: "Khoá",
    locked: true
  }],
  tips: ["Để dành 10% mỗi khi nhận tiền nhé!", "Tiết kiệm nhỏ mỗi ngày, lớn lên giàu to!", "Quy tắc 50/30/20: thử áp dụng ngay hôm nay!"]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/xuxu-app/data.js", error: String((e && e.message) || e) }); }

__ds_ns.XuCoin = __ds_scope.XuCoin;

__ds_ns.XuXuMascot = __ds_scope.XuXuMascot;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.IconTile = __ds_scope.IconTile;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.StatPill = __ds_scope.StatPill;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.LessonCard = __ds_scope.LessonCard;

__ds_ns.QuizOption = __ds_scope.QuizOption;

__ds_ns.BottomNav = __ds_scope.BottomNav;

})();
