# XuXu — Project Spec & Requirements

> Tài liệu nội bộ: yêu cầu, quyết định thiết kế, và trạng thái phát triển.
> Cập nhật lần cuối: 2026-06-25

---

## Mục tiêu sản phẩm

Ứng dụng web gamification giúp trẻ em 6–16 tuổi học tài chính cá nhân qua mini-game tương tác. Cảm hứng từ Duolingo — mỗi ngày học 5–10 phút, nhận XP, giữ streak, cạnh tranh bảng xếp hạng.

**Người dùng mục tiêu**: Trẻ em + phụ huynh Việt Nam muốn con có tư duy tài chính từ sớm.

---

## Tech Stack

| Layer | Công nghệ | Version |
|---|---|---|
| Framework | Next.js App Router | ^16.2.9 |
| UI Library | React | ^18 |
| Styling | Tailwind CSS + inline styles | ^3.4.1 |
| Auth | Firebase Authentication | ^10.12.0 |
| Database | Firebase Firestore | ^10.12.0 |
| Animation | Framer Motion | ^11.1.7 |
| Celebration | react-confetti | ^6.1.0 |
| AI | Anthropic Claude SDK | ^0.105.0 |
| Utilities | clsx | ^2.1.1 |
| Deploy | Vercel | — |
| Fonts | Baloo 2, Nunito | Google Fonts |

---

## Design System — XuXu v1

### Màu sắc

```
Primary green:    #16C172  (button, progress, active nav)
Green shadow:     #0E9E5C  (3D button depth)
Dark green:       #15392A  (headings, dark card bg)
Light green bg:   #EAFBF1  (active state bg)
Green border:     #BFEBD2

App background:   #F4F8EF
Card border:      #ECF1E6
Muted border:     #DDE6D6

Gold:             #FFC93C  (mascot, xu coin)
Gold border:      #E8A317
Gold shadow:      #D99312

Streak orange:    #FF8A3D
Orange shadow:    #E0631C

Heart red:        #FF5366
Gem purple:       #8B5CF6
Ice blue:         #2BA3FF

Text dark:        #15392A
Text muted:       #5B7065
Text faint:       #9AA89E
```

### Typography

```
Heading / số lớn: font: "800 22px 'Baloo 2'"
Sub-heading:      font: "800 16px 'Baloo 2'"
Label:            font: "800 13px 'Baloo 2'"
Body:             font: "600 13px 'Nunito'"
Caption:          font: "600 11px 'Nunito'"
```

### Button 3D (pattern)

```css
background: #16C172;
box-shadow: 0 5px 0 #0E9E5C;
border-radius: 16px;
/* Pressed state via .btn-press (globals.css):
   transform: translateY(3px); box-shadow: 0 2px 0 #0E9E5C; */
```

### Mascot — XuXuMascot.jsx

```jsx
<XuXuMascot size={40} />             // mặc định, happy
<XuXuMascot size={96} mood="sad" />  // mắt phẳng, miệng ngược, nước mắt
// floating animation tự động khi happy
```

---

## Màn hình & Routes

### Mobile (< lg)

| Route | Tên | Layout |
|---|---|---|
| `/` | Trang chủ | Header sticky + Feed + BottomNav |
| `/onboarding` | Chào mừng | Full-screen green, mascot lớn |
| `/game/[lessonId]` | Chơi | Header (back + progress + tim) + content |
| `/explore` | Khám phá | Header + search + 2-col topic grid |
| `/streak` | Streak | Header + hero card cam + tuần calendar |
| `/tasks` | Nhiệm vụ | Header (countdown) + daily tasks + weekly |
| `/leaderboard` | Xếp hạng | Header + league badge + top-10 list |
| `/shop` | Cửa hàng | Header (xu balance) + sale banner + 2-col grid |
| `/profile` | Hồ sơ | Header (logout) + mascot + stats + badges |

### Desktop (≥ lg)

Layout 3 cột cố định (100vh, overflow-hidden):
- **Left sidebar** 250px: logo + 6 nav items + XuXu Pro card
- **Main** flex-1: nội dung từng trang (scroll)
- **Right panel** 320px: leaderboard mini + daily goal donut + streak card + tip

Nav desktop:

| Icon | Label | Route |
|---|---|---|
| ⌂ | Học | `/` |
| ◆ | Khám phá | `/explore` |
| ▲ | Nhiệm vụ | `/tasks` |
| ♛ | Xếp hạng | `/leaderboard` |
| ◉ | Cửa hàng | `/shop` |
| ☺ | Hồ sơ | `/profile` |

### Mobile BottomNav (5 tab)

| Icon | Route | Active color |
|---|---|---|
| ⌂ | `/` | `#16C172` |
| ◆ | `/explore` | `#16C172` |
| ▲ | `/tasks` | `#FF8A3D` |
| ♛ | `/leaderboard` | `#8B5CF6` |
| ⊙ profile | `/profile` | ring `#16C172` |

---

## Game System

### Tim (Lives)

- Bắt đầu mỗi bài: **5 tim** (MAX_HEARTS = 5)
- Trả lời sai → mất 1 tim
- Hết tim → `OutOfHeartsModal` (dark overlay + bottom sheet):
  - Đồng hồ đếm ngược hồi tim (4h32m10s demo)
  - "HỒI ĐẦY TIM · 350 xu" (green button)
  - "LUYỆN TẬP ĐỂ HỒI TIM" (restart bài, secondary)
  - "Về trang chủ"

### Điểm XP

- Mỗi câu đúng: `Math.round(lesson.xp / lesson.questions.length)` XP
- Cuối bài: cộng vào Firestore `totalXP`
- Stars: `Math.round((correctCount / total) * 3)`

### Huy hiệu (8 badges — `src/lib/badges.js`)

Logic mở khoá dựa trên `completedLessons[]`, `totalXP`, `streak`.

---

## Nhiệm vụ (`/tasks`)

### Hằng ngày (reset theo countdown)

| Nhiệm vụ | Thưởng | Loại |
|---|---|---|
| Hoàn thành 3 bài học | +30 xu | Progress bar (2/3) |
| Đạt 100 XP hôm nay | +40 xu | Progress bar (60/100) |
| Giữ streak N ngày | +20 xu | Đã hoàn thành, nút NHẬN |

### Tuần

| Nhiệm vụ | Thưởng | Progress |
|---|---|---|
| Hoàn thành 1 đơn vị (6 bài) | 200 xu + huy hiệu | 50% (3/6) |
| Top 10 bảng xếp hạng | 150 xu | 80% (rank 4) |

---

## Shop (`/shop`)

6 vật phẩm, layout grid 2 cột. Banner "Gói Tết -20%".

| ID | Tên | Giá | Trạng thái |
|---|---|---|---|
| `heart_refill` | Hồi đầy tim | 350 xu | Mua được |
| `streak_freeze` | Băng giữ streak | 120 xu | Mua được |
| `xp_boost` | Nhân đôi XP · 15' | 200 xu | Mua được |
| `skin` | Đổi diện mạo XuXu | 500 xu | Cần đủ xu |
| `unlock_invest` | Mở chủ đề Đầu tư | 120 xu | Cần đủ xu |
| `combo_save` | Combo tiết kiệm | 800 xu | Mua được |

---

## Dữ liệu Firestore

```
/users/{userId}
  displayName:       string
  avatar:            string (URL hoặc null)
  ageGroup:          "6-8" | "9-12" | "13-16"
  totalXP:           number
  xu:                number
  completedLessons:  string[]       # lesson IDs
  badges:            string[]       # badge IDs
  streak:            number
  lastActiveAt:      Timestamp
  isAnonymous:       boolean
  createdAt:         Timestamp
  isPro:             boolean            # Pro subscription active
  proExpiry:         Timestamp | null   # null = free
  trialStartedAt:    Timestamp | null   # để chống trial nhiều lần

/leaderboard/{weekId}              # "2026-W26"
  entries: [
    { userId, displayName, xp }
  ]
```

---

## Claude AI Integration

Route: `POST /api/agents/orchestrate`

Dùng `@anthropic-ai/sdk` gọi Claude để sinh câu hỏi động hoặc gợi ý học theo profile người dùng. Logic trong `src/lib/agents/`.

Model hiện tại: `claude-sonnet-4-6` (server-side, key qua `ANTHROPIC_API_KEY`).

---

## Firebase Setup

```bash
# Auth
Authentication → Sign-in method → Google ✓, Anonymous ✓
Authorized domains: localhost, money.thanhmam.com, *.vercel.app

# Firestore
Create database → Start in test mode (sau đó publish rules)
firebase deploy --only firestore:rules

# Firestore rules (firestore.rules)
match /users/{userId} { allow read, write: if request.auth.uid == userId; }
match /leaderboard/{doc}  { allow read; allow write: if request.auth != null; }
```

---

## Deploy

```bash
# Push GitHub → Vercel tự deploy (connected via GitHub integration)
git push origin main

# Hoặc manual Vercel CLI
vercel --prod
```

**Env vars cần set trên Vercel**: tất cả `NEXT_PUBLIC_FIREBASE_*` + `ANTHROPIC_API_KEY`.

---

## Monetization — Free vs Pro

### Tier Comparison

| Tính năng            | Free              | Pro                        |
|----------------------|-------------------|----------------------------|
| Tim (hearts)         | 5 / phiên         | Vô hạn                     |
| XP mỗi bài          | 1×                | 2×                         |
| Xu kiếm được        | 1×                | 2×                         |
| Bài học              | 45 bài cơ bản     | + Chủ đề Đầu tư (sớm)     |
| Quảng cáo / upsell  | Có                | Không                      |
| Pro badge profile   | Không             | Có (◆ PRO chip màu tím)   |

### Pricing

- **Tháng**: 49.000đ / tháng
- **Năm**: 399.000đ / năm (~33.250đ/tháng · tiết kiệm 32%)
- **Trial**: 7 ngày miễn phí — kích hoạt qua nút "DÙNG THỬ MIỄN PHÍ"

### Firestore Schema (bổ sung)

```
/users/{userId}
  + isPro:           boolean           # true khi subscription active
  + proExpiry:       Timestamp | null  # null = chưa kích hoạt
  + trialStartedAt:  Timestamp | null  # chống trial nhiều lần
```

### Components & Files

| File | Vai trò |
|------|---------|
| `src/components/ProBadge.jsx` | Chip ◆ PRO màu `#8B5CF6`, 2 sizes |
| `src/components/UpgradeModal.jsx` | Overlay modal: pricing + feature list + CTA |
| `src/contexts/AuthContext.jsx` | Thêm `isPro` (derived) + `activateTrial()` |
| `src/components/DesktopLayout.jsx` | Wire Pro card → UpgradeModal |
| `src/app/page.js` | Wire mobile Pro card → UpgradeModal |
| `src/app/profile/page.js` | Hiển thị ProBadge + ngày hết hạn |
| `src/app/shop/page.js` | Overlay "Chỉ Pro" cho locked items |

### Design tokens cho Pro tier

- Background: `linear-gradient(145deg, #7C4DEC, #8B5CF6)`
- Badge: `background: #8B5CF6, boxShadow: 0 2px 0 #7C4DEC`
- Active card: `background: linear-gradient(145deg, #7C4DEC, #8B5CF6), color: #fff`
- CTA button: `background: #FFC93C, color: #7A4E00, boxShadow: 0 5px 0 #D99312`

---

## Backlog / Roadmap

### Đang làm
- [ ] Kết nối `/tasks` với dữ liệu thực (Firestore)
- [ ] Kết nối `/shop` với `xu` balance thực từ Firestore
- [ ] Streak thực: cập nhật `lastActiveAt` mỗi ngày học

### Tiếp theo
- [ ] Admin panel thêm/sửa bài học (Firestore CMS)
- [ ] Mở rộng lên 50–100 bài học
- [ ] Audio + âm thanh game
- [ ] Push notification nhắc học hàng ngày
- [ ] Bộ lọc tuổi lưu vào profile
- [ ] Màn hình `/streak` kết nối dữ liệu thực

### Hoàn thành
- [x] 45 bài học tĩnh (3 nhóm tuổi, 3 loại game)
- [x] XuXu Design System v1 (màu, typography, mascot, button 3D)
- [x] 9 màn hình: home, onboarding, game, explore, streak, tasks, leaderboard, shop, profile
- [x] Hệ thống 5 tim + OutOfHeartsModal
- [x] Desktop layout 3 cột
- [x] Mobile BottomNav 5 tab
- [x] Firebase Auth (Google + Anonymous)
- [x] Firestore sync (XP, progress, badges)
- [x] Bảng xếp hạng tuần (real-time)
- [x] 8 huy hiệu + BadgeToast
- [x] Claude AI integration
- [x] PWA manifest
- [x] Custom domain `money.thanhmam.com`

---

## Changelog

### 2026-06-26
- Upload XuXu Design System v1 vào `design-system/` (tokens, 11 components, guidelines, UI kit)
- Cập nhật README + PROJECT với quy tắc follow design system
- Thêm tính năng Free vs Pro: `ProBadge`, `UpgradeModal`, `activateTrial`
- Wire Pro card trong desktop sidebar + mobile home → UpgradeModal
- Shop: overlay "Chỉ Pro" cho locked items
- Profile: hiển thị PRO badge + ngày hết hạn

### 2026-06-25
- Thêm `/tasks` page: daily tasks (progress bars, claim reward), weekly tasks, countdown timer
- Shop: 6 items, grid 2 cột; thêm "Mở chủ đề Đầu tư" (120xu), "Combo tiết kiệm" (800xu)
- Nav: desktop ▲ → `/tasks`; mobile BottomNav ▲ → `/tasks`
- Cập nhật đầy đủ README.md + PROJECT.md

### 2026-06-24
- Đổi tên FinanceKids → **XuXu**, triển khai XuXu Design System v1
- Thêm XuXuMascot (happy/sad), BottomNav, 6 trang mới
- Game: hệ thống tim, OutOfHeartsModal, đồng hồ hồi tim
- Desktop 3 cột, sidebar navigation đầy đủ
- Đồng bộ GitHub, deploy Vercel, custom domain
