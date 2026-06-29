# XuXu Design System

**XuXu** (*"Học Tài Chính Cùng XuXu"* — Learn Finance with XuXu) is a Duolingo-style, gamified financial-literacy web app for Vietnamese children aged **6–16**. Kids learn money skills in 5–10 minute daily sessions through interactive mini-games, earning XP, keeping streaks, collecting badges, and climbing a weekly leaderboard. The mascot is **XuXu**, a friendly gold coin. The currency in-app is **xu** (a coin). The entire product is in **Vietnamese**.

This design system captures XuXu's bright, chunky, kid-friendly visual language: a leaf-green primary, a gold coin accent, the signature "3D press" buttons, rounded Baloo 2 display type, and warm gamification motifs (hearts, streaks, gems).

## Sources

This system was reverse-engineered from the product source. If you have access, explore them to build richer, more accurate XuXu designs:

- **GitHub:** [github.com/thanhmam/financekids-v2](https://github.com/thanhmam/financekids-v2) — the live Next.js 16 app (the authoritative source for tokens, components, and screens). Key files read: `src/app/globals.css`, `tailwind.config.js`, `src/components/*`, `src/app/*/page.js`, `src/data/lessons.js`.
- **Live app:** [xuxu.thanhmam.com](https://xuxu.thanhmam.com)
- The app's own internal `README.md` and `PROJECT.md` document the "XuXu Design System v1" the tokens here are based on.

The reader is encouraged to browse the GitHub repository further to recreate screens with higher fidelity than this distilled system alone.

---

## Content Fundamentals — how XuXu writes

**Language:** 100% Vietnamese, with full diacritics. Both display (Baloo 2) and body (Nunito) fonts are chosen specifically for Vietnamese support.

**Voice:** Warm, encouraging, playful, and second-person — XuXu talks *to* the child like a friendly coach. It addresses the user as **bạn** ("you", friendly) and **con** ("child", in parent-facing/lesson copy). The mascot speaks in the first person ("Chào, mình là XuXu!" — "Hi, I'm XuXu!").

**Tone examples (verbatim from the product):**
- Onboarding: *"Học tài chính mỗi ngày 5 phút, để bạn không bao giờ '0 xu'."* (Learn finance 5 minutes a day, so you're never "0 xu".)
- Tips: *"Mẹo của XuXu: Để dành 10% mỗi khi nhận tiền nhé!"* (XuXu's tip: Set aside 10% whenever you get money!)
- Encouragement: *"Giữ phong độ — bạn đang làm rất tốt"* (Keep it up — you're doing great), *"Giữ lửa!"* (Keep the fire going!)
- Rewards: *"Hoàn thành! 🎉"*, *"Giỏi lắm!"* (Well done!)

**Casing:** Headings and labels use **sentence case** in Baloo 2. **Button labels are UPPERCASE** ("HỌC TIẾP", "KIỂM TRA", "BẮT ĐẦU HỌC", "NHẬN"). Section eyebrows are uppercase Nunito ("CHỦ ĐỀ", "TẤT CẢ BÀI HỌC").

**Emoji:** Used liberally and intentionally as a friendly visual language — in tips, rewards, lesson icons, badges, confetti, and toasts (🎉 🌟 🐷 💰 🧧 🔒 🎯). This is a children's product; emoji are part of the brand, not noise. Each lesson has its own emoji icon.

**Numbers & currency:** Vietnamese formatting — `1.250` (dot thousands separator), money as `50.000đ`. XP shown as `+150 XP`, coins as `+50 xu`. Streaks as a plain number with the ▲/🔥 motif.

**Microcopy patterns:** progress fractions ("2/3 bài", "Bài 3/45"), countdowns ("Làm mới sau 08:24:11"), reward callouts ("còn +10 xu là đạt mục tiêu").

---

## Visual Foundations

**Overall vibe:** bright, soft, chunky, and tactile — like a friendly mobile game. Nothing is sharp or corporate. Everything is rounded, padded, and slightly playful.

**Color:** A leaf-green primary (`#16C172`) carries CTAs, progress, and active states, on a soft green-tinted off-white canvas (`#F4F8EF`). The mascot/coin/XP gold (`#FFC93C`) is the secondary brand color. Semantic accents are warm and saturated: streak orange (`#FF8A3D`), heart red (`#FF5366`), gem violet (`#8B5CF6`), ice blue (`#2BA3FF`). Dark surfaces use a deep forest ink (`#15392A`). Neutrals are subtly green-tinted greys, never pure grey. See `tokens/colors.css`.

**Typography:** Two rounded, child-friendly Google Fonts. **Baloo 2** (almost always weight 800) for every heading, number, button, and label — it's the face of the brand. **Nunito** (600/700) for body and captions. The product sets fonts with the CSS `font:` shorthand, e.g. `font: "800 22px 'Baloo 2'"`. See `tokens/typography.css`.

**The signature motif — "3D press":** The defining XuXu element. Buttons and the coin sit above a **solid colored drop-shadow with no blur** (`box-shadow: 0 5px 0 #0E9E5C`). Pressing a button **sinks it into its shadow** (`translateY(3px)` + reduced shadow). Cards reinforce this with a **thicker (4px) bottom border**. Filled progress bars carry an **inset white "shine"** along the top (`inset 0 3px 0 rgba(255,255,255,.35)`). See `tokens/effects.css` and the *Effects* foundation card.

**Backgrounds:** Flat color fills — no photography, no textures, no busy patterns. The app canvas is the soft green `#F4F8EF`. Hero/celebration surfaces use **gentle two-stop gradients** (streak card orange `#FF9A4D→#FF7A2E`; shop banner green `#1FD07E→#0E9E5C`; result screen flat green). The donut "daily goal" uses a `conic-gradient`. Dark cards are flat `#15392A`. There are **no** bluish-purple hero gradients.

**Cards:** White surface, `2px` solid border in `#ECF1E6`, often with the **4px bottom edge**, corner radius **18px** (22px for hero cards). Soft ambient shadow only appears on hover (`0 8px 24px rgba(21,57,42,.10)`); resting cards are mostly borders, not shadows. Completed/active cards swap to a green tint (`#EAFBF1`) with a green border.

**Corner radii:** Friendly and generous — chips/tiles 12px, buttons 14px, cards 18px, hero cards 22px, pills fully round (999px). Coins and avatars are circles.

**Borders:** Solid `2px` is the default everywhere (`#ECF1E6`). Dashed borders (`#DDE6D6`) signal hints/tips and the "today/empty" state (e.g. the profile-tab ring, today's streak day). Selected states use a colored 2px border + tint.

**Shadows:** Two systems. (1) **Solid 3D shadows** (no blur) for the press motif — green, gold, orange, white-on-color. (2) **Soft ambient shadows** for hover lifts and toasts only. Resting UI rarely uses blur shadows.

**Animation & motion:** Bouncy and celebratory but restrained. The mascot does a gentle `float` (translateY ±8px). Rewards `pop`/overshoot in with `cubic-bezier(.175,.885,.32,1.275)`. New rows `slide-up`. Result screens rain emoji confetti. Progress bars fill over `0.6s`. Wiggle/tada exist for emphasis. Transitions are quick (`.1–.15s`).

**Hover & press states:** Cards lift `-3px` with a soft shadow on hover (disabled on mobile). Buttons scale/press into their 3D shadow on `:active`. Filter pills lift slightly when active and gain the 3D shadow. Nothing fades to a different hue — interactions use motion + the green tint, not opacity dimming (except dimmed/incorrect quiz options at `0.55` opacity).

**Transparency & blur:** Minimal. Used for overlays on colored surfaces (`rgba(255,255,255,.18)` reward pills on green) and dark modal scrims. No glassmorphism / backdrop-blur in the brand.

**Imagery:** There is **no photography**. The visual world is built from flat color, emoji, the CSS-drawn coin mascot, and unicode glyph icons. Warm, high-saturation, friendly.

---

## Iconography

XuXu's iconography is deliberately **low-tech and charming** — there is **no icon font or SVG icon set** in the product. Instead:

- **Unicode glyphs as icons.** Navigation and accents use plain unicode characters rendered in Baloo 2 800: `⌂` (home), `◆` (explore/challenge), `▲` (tasks/streak), `♛` (leaderboard/league), `◉ ◑ ◈ ▦ ▤ ★ ❄ ♥ ⌕ ✓ ✗ ‹`. They inherit the accent color of their context. This is intentional and on-brand — match it; do **not** introduce a library icon set.
- **Emoji as content icons.** Every lesson, badge, shop item, topic, and reward uses an emoji (💰 ⚖️ 🐷 📊 🏦 📈 🧧 🛒 …). Confetti and toasts use emoji too.
- **The XuCoin token.** The "xu" currency is a small gold disc with a white **"X"** (the `XuCoin` component) — used inline beside every balance and reward.
- **The XuXu mascot.** A gold coin character drawn **entirely in CSS** (radial-gradient face, dashed inner ring, dot eyes, smile, blush), with happy/excited/sad moods. It is the primary brand illustration — reuse the `XuXuMascot` component rather than drawing your own.

There are **no raster/SVG logo assets** in the repo — the PWA icons are a flat orange placeholder square, intentionally omitted here. The brand mark is the **CSS coin mascot + the "XuXu" wordmark** (Baloo 2 800, green `#16C172`). Both are reproduced as components / the *Brand* foundation cards.

> **Substitution flag:** None for icons (the system is unicode + emoji + CSS, fully reproduced). See *Fonts* below for the one substitution note.

---

## Fonts

The brand uses **Baloo 2** and **Nunito** from **Google Fonts** (chosen for Vietnamese support). `tokens/fonts.css` loads them via Google's CDN `@import`. Because these are CDN webfonts (not self-hosted binaries), the compiler reports **0 `@font-face` fonts** — that's expected. If you need a fully offline/self-hosted bundle, download the two families and replace the `@import` with `@font-face` rules pointing at local `.woff2` files.

---

## Index — what's in this system

**Foundations**
- `styles.css` — the single entry point consumers link (imports only).
- `tokens/colors.css` · `typography.css` · `spacing.css` · `effects.css` · `fonts.css` — design tokens (base values + semantic aliases).
- `guidelines/*.html` — foundation specimen cards (Colors, Type, Spacing, Effects, Brand) shown in the Design System tab.

**Components** (`components/<group>/` — each a `.jsx` + `.d.ts` + `.prompt.md`, with one `@dsCard` per group)
- `brand/` — **XuXuMascot** (coin mascot, 3 moods) · **XuCoin** (currency token)
- `core/` — **Button** (3D press, 6 variants) · **IconTile** · **ProgressBar** · **StatPill** (streak/xu/xp) · **Chip** (tags)
- `feedback/` — **Badge** (achievement tile, earned/locked)
- `game/` — **LessonCard** · **QuizOption** (reveal states)
- `navigation/` — **BottomNav** (mobile 5-tab)

**UI Kit**
- `ui_kits/xuxu-app/` — a fully interactive recreation of the mobile app: onboarding → home (learning feed) → lesson quiz with hearts → reward screen, plus the Explore, Tasks, Leaderboard, Profile, Shop, and Streak tabs. Composes the components above. Entry: `index.html`.

**Usage:** In a card or kit, link `styles.css` and load `_ds_bundle.js` (compiled automatically), then read components from `window.XuXuDesignSystem_72e90e`. See any `components/**/​*.card.html` for the pattern.
