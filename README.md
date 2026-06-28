# XuXu — Học Tài Chính Cùng XuXu 🟡

Web app gamification giúp **mọi người** (trẻ em, người trẻ, ai muốn tìm hiểu về tiền) học tài chính — mỗi ngày 5–10 phút. Giao diện theo phong cách Duolingo với mascot XuXu, hệ thống tim, XP, streak, huy hiệu và bảng xếp hạng.

**Live:** [money.thanhmam.com](https://money.thanhmam.com) · **Repo:** [github.com/thanhmam/financekids-v2](https://github.com/thanhmam/financekids-v2)

> 📚 **Tài liệu chi tiết**: [docs/FEATURES.md](docs/FEATURES.md) (tính năng đầy đủ) · [docs/DESIGN_SYSTEM.md](docs/DESIGN_SYSTEM.md) (design system)

---

## Tech Stack

| Layer | Công nghệ |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| UI | React 18 + Tailwind CSS 3 + inline styles |
| Auth | Firebase Authentication (Google + Anonymous) |
| Database | Firebase Firestore |
| Animation | Framer Motion + CSS keyframes |
| Confetti | react-confetti |
| AI | Anthropic Claude API (`@anthropic-ai/sdk ^0.105`) |
| Deploy | Vercel (auto-deploy từ GitHub `main`) |
| Font | Baloo 2 + Nunito (Google Fonts, hỗ trợ tiếng Việt) |

---

## Design System — XuXu v1

| Token | Giá trị | Dùng cho |
|---|---|---|
| Green | `#16C172` / shadow `#0E9E5C` | Primary CTA, progress, active |
| Dark green | `#15392A` | Text heading, dark bg |
| Gold | `#FFC93C` / border `#E8A317` | XuXu mascot, xu coin |
| Streak orange | `#FF8A3D` | Streak, nhiệm vụ |
| Heart red | `#FF5366` | Tim (lives) |
| Gem purple | `#8B5CF6` | Leaderboard, challenge |
| BG light | `#F4F8EF` | App background |
| Border | `#ECF1E6` | Card borders |

**Button 3D**: `box-shadow: 0 5px 0 #0E9E5C` + `border-bottom-width: 4px`
**Fonts**: `font: "800 22px 'Baloo 2'"` cho heading · `font: "600 13px 'Nunito'"` cho body

> **Source đầy đủ**: `design-system/` — token CSS, 11 JSX components, guidelines HTML, UI kit tương tác.

### Quy tắc bắt buộc khi phát triển tính năng mới

- Màu sắc: **chỉ dùng giá trị từ** `design-system/tokens/colors.css`
- Typography: `'Baloo 2'` weight 800 cho heading/button · `'Nunito'` weight 600–700 cho body
- Button: pattern 3D press (`box-shadow: 0 4px 0 shadowColor` + `className="btn-press"`)
- Card: `borderRadius: 18px` · `border: 2px solid #ECF1E6` · hover lift `box-shadow: 0 8px 24px rgba(21,57,42,.10)`
- Component mới: tham khảo `design-system/components/` trước khi tự viết
- Pro tier màu: `#8B5CF6` (--xu-gems) với shadow `#7C4DEC`

---

## Cài đặt & Chạy local

```bash
git clone https://github.com/thanhmam/financekids-v2.git
cd financekids-v2
npm install
cp .env.local.example .env.local
# Điền Firebase keys vào .env.local
npm run dev     # http://localhost:3000
```

---

## Biến môi trường (`.env.local`)

```env
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=

ANTHROPIC_API_KEY=        # Server-side only — không có NEXT_PUBLIC_
```

---

## Cấu trúc dự án

```
src/
├── app/
│   ├── layout.js                  # Root layout + AuthProvider
│   ├── globals.css                # Global styles, animations, btn-press
│   ├── page.js                    # 🏠 Trang chủ (mobile + desktop layout)
│   ├── onboarding/page.js         # 👋 Màn hình chào / đăng nhập
│   ├── game/[lessonId]/page.js    # 🎮 Trang chơi bài học
│   ├── explore/page.js            # 🔍 Khám phá chủ đề
│   ├── streak/page.js             # 🔥 Streak & phần thưởng hằng ngày
│   ├── tasks/page.js              # ✅ Nhiệm vụ hằng ngày & tuần
│   ├── leaderboard/page.js        # 🏆 Bảng xếp hạng tuần
│   ├── shop/page.js               # 🛍️ Cửa hàng vật phẩm
│   ├── profile/page.js            # 👤 Hồ sơ cá nhân & huy hiệu
│   ├── admin/page.js              # 🔧 Admin panel (nội bộ)
│   └── api/agents/orchestrate/    # 🤖 API route Claude AI
│
├── components/
│   ├── XuXuMascot.jsx             # Mascot XuXu (mood: happy/sad/floating)
│   ├── BottomNav.jsx              # Bottom navigation 5 tab (mobile)
│   ├── LessonCard.jsx             # Card bài học
│   ├── GameQuiz.jsx               # Mini-game trắc nghiệm
│   ├── GameAB.jsx                 # Mini-game chọn A/B
│   ├── GameTransaction.jsx        # Mini-game giao dịch
│   ├── ResultScreen.jsx           # Màn hình kết quả (sao + confetti)
│   ├── BadgesPanel.jsx            # Lưới huy hiệu
│   ├── BadgeToast.jsx             # Thông báo huy hiệu mới
│   ├── LoginModal.jsx             # Modal đăng nhập Google / khách
│   ├── HeroSection.jsx            # Banner top (legacy)
│   └── ProgressBar.jsx            # Thanh tiến độ (legacy)
│
├── contexts/
│   └── AuthContext.jsx            # Auth + Firestore user profile
│
├── hooks/
│   └── useProgress.js             # XP, completed lessons, badges
│
├── lib/
│   ├── firebase.js                # Firebase init
│   ├── badges.js                  # 8 huy hiệu + logic mở khoá
│   └── agents/                   # Claude AI orchestration
│       ├── claude.js
│       ├── orchestrate.js
│       └── prompts.js
│
└── data/
    ├── lessons.js                 # Bài học tĩnh (chủ đề + cấp độ) + TOPICS/LEVELS/CATEGORIES
    └── books.js                   # Catalog sách tài chính (Shopee affiliate)
```

> Trang mới: `/` landing marketing · `/learn` dashboard (guest preview) · `/shop/book/[id]` chi tiết sách · `/admin/books` quản lý cửa hàng sách.

---

## Màn hình (Screens)

| Route | Màn hình | Mô tả |
|---|---|---|
| `/` | 🏠 Trang chủ | Feed bài học, mục tiêu ngày, streak tile. Desktop có 3 cột |
| `/onboarding` | 👋 Chào | Full-screen green, mascot, login Google |
| `/game/[id]` | 🎮 Chơi | Thanh tim (5 ♥), progress bar, 3 loại game |
| `/explore` | 🔍 Khám phá | 6 chủ đề (search + lock/unlock) |
| `/streak` | 🔥 Streak | Hero card cam, lịch tuần, phần thưởng |
| `/tasks` | ✅ Nhiệm vụ | Nhiệm vụ ngày (progress + claim) + nhiệm vụ tuần |
| `/leaderboard` | 🏆 Xếp hạng | Top 10 tuần, huy hiệu league |
| `/shop` | 🛍️ Cửa hàng | 6 vật phẩm grid 2 cột, banner sale Tết |
| `/profile` | 👤 Hồ sơ | Stats 4 ô, lưới 8 huy hiệu, nút đăng xuất |

---

## Firestore Schema

```
/users/{userId}
  displayName, avatar, ageGroup
  totalXP, xu, completedLessons[]
  badges[], streak, lastActiveAt
  isAnonymous, createdAt

/leaderboard/{weekId}          # format: "2026-W26"
  entries: [{ userId, displayName, xp }]
```

---

## Firebase cần bật

- **Authentication** → Google + Anonymous
- **Firestore** → publish rules từ `firestore.rules`
- **Authorized domains** → `localhost`, `money.thanhmam.com`, domain Vercel

---

## Phân loại nội dung (Taxonomy)

> **Đã bỏ phân loại theo nhóm tuổi.** Nội dung phân loại theo **Chủ đề** + **Cấp độ** (đồng bộ ở app lẫn admin).

**7 Chủ đề** (`TOPICS`): Cơ bản về tiền · Tiết kiệm · Quản lý tài chính cá nhân · Vay · Đầu tư · Chứng khoán · Tài sản số

**2 Cấp độ** (`LEVELS`): 🌱 Khởi đầu (`foundation`) · 🌳 Vững vàng (`advanced`)

**4 Loại bài** (`CATEGORIES`): 💡 Khái niệm · ⚖️ Phân biệt · 🎯 Lựa chọn · 💳 Giao dịch

3 loại mini-game: `quiz` (trắc nghiệm) · `ab` (chọn A/B) · `transaction` (mô phỏng giao dịch)

## Cửa hàng sách (Shopee affiliate)

Sách tài chính kinh điển (`src/data/books.js`) bán qua link Shopee affiliate. Hiển thị ở Landing + `/shop`, trang chi tiết `/shop/book/[bookId]` với nút "Mua sách trên Shopee". Admin quản lý CRUD tại `/admin/books` (bìa, giá, giảm giá, link). Xem [docs/FEATURES.md](docs/FEATURES.md).

---

## Shop — Vật phẩm (6 items)

| Vật phẩm | Giá | Ghi chú |
|---|---|---|
| Hồi đầy tim | 350 xu | Tiếp tục học ngay |
| Băng giữ streak | 120 xu | Bảo vệ 1 ngày lỡ quên |
| Nhân đôi XP · 15' | 200 xu | Cày điểm thần tốc |
| Đổi diện mạo XuXu | 500 xu | Mũ & phụ kiện mới |
| Mở chủ đề Đầu tư | 120 xu | Truy cập sớm 6 bài học |
| Combo tiết kiệm | 800 xu | 5 băng + 3 hồi tim |

---

## Changelog

### 2026-06-28
- **Landing page mới** (Duolingo handoff): hero minh hoạ động, feature rows, "Học theo chủ đề", "Học theo sách", responsive mobile
- **Bỏ phân loại nhóm tuổi** → taxonomy **Chủ đề + Cấp độ**, đồng bộ ở app lẫn admin
- **Cửa hàng sách** (Shopee affiliate): `/shop` section, `/shop/book/[id]`, admin `/admin/books`
- **Dashboard**: bỏ tag tuổi ở LessonCard, right panel hiển thị đầy đủ (leaderboard + mục tiêu + streak 7 ngày)
- **Admin** restyle theo XuXu Design System (xanh `#16C172`, Baloo 2, logo coin) + đồng bộ tag chủ đề/cấp độ
- Thêm `docs/FEATURES.md` + `docs/DESIGN_SYSTEM.md`; `LoginModal` modal giữa màn hình + nút đóng

### 2026-06-25
- Thêm trang `/tasks` — Nhiệm vụ hằng ngày (progress bar + NHẬN thưởng) và tuần
- Shop nâng lên 6 vật phẩm, layout grid 2 cột
- Desktop sidebar ▲ → `/tasks`; mobile BottomNav ▲ → `/tasks`
- Cập nhật README.md + PROJECT.md đầy đủ

### 2026-06-24 (batch XuXu UI)
- Đổi tên app từ **FinanceKids** → **XuXu**
- Triển khai XuXu Design System v1 toàn bộ
- `XuXuMascot.jsx`: mood happy / sad (nước mắt) / floating
- `BottomNav.jsx`: 5 tab mobile (⌂ ◆ ▲ ♛ ⊙)
- Thêm `/onboarding`, `/explore`, `/streak`, `/leaderboard`, `/shop`, `/profile`
- Game page: 5 tim, `OutOfHeartsModal`, đồng hồ đếm ngược hồi tim
- Desktop layout 3 cột (sidebar 250px + main + right panel 320px)

### 2026-06-24 (baseline)
- Khởi tạo Next.js 16 + Firebase + Tailwind
- 45 bài học tĩnh, 3 loại mini-game
- Firebase Auth (Google + Anonymous), Firestore sync
- Bảng xếp hạng tuần, XP + 8 huy hiệu
- Claude AI API (`@anthropic-ai/sdk`)
- PWA manifest, custom domain `money.thanhmam.com`
