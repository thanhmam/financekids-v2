# FinanceKids v2

Game học tài chính tương tác dành cho trẻ em 6–16 tuổi. Mục tiêu giúp trẻ hiểu về tiền, tiết kiệm, chi tiêu thông qua bài học mini-game có điểm XP và huy hiệu.

## Stack công nghệ

| Layer | Công nghệ |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| UI | React 18 + Tailwind CSS 3 |
| Auth | Firebase Auth (Google + Anonymous) |
| Database | Firebase Firestore |
| AI | Anthropic Claude API (`@anthropic-ai/sdk`) |
| Deploy | Vercel |
| Animation | Framer Motion + CSS animations |

## Cấu trúc thư mục

```
src/
├── app/
│   ├── page.js               # Trang chủ — danh sách bài học
│   ├── layout.js             # Root layout + AuthProvider
│   ├── game/[lessonId]/      # Trang chơi bài học
│   ├── leaderboard/          # Bảng xếp hạng
│   └── api/agents/orchestrate/ # API route gọi Claude AI
├── components/
│   ├── LoginModal.jsx        # Modal đăng nhập Google / khách
│   ├── HeroSection.jsx       # Banner + XP tổng
│   ├── LessonCard.jsx        # Card bài học
│   ├── GameQuiz.jsx          # Mini-game trắc nghiệm
│   ├── GameAB.jsx            # Mini-game chọn A/B
│   ├── GameTransaction.jsx   # Mini-game giao dịch
│   ├── ResultScreen.jsx      # Màn hình kết quả
│   ├── BadgesPanel.jsx       # Bảng huy hiệu
│   └── ProgressBar.jsx       # Thanh tiến độ
├── contexts/
│   └── AuthContext.jsx       # Auth state toàn app
├── hooks/
│   └── useProgress.js        # Hook theo dõi tiến độ học
├── lib/
│   ├── firebase.js           # Khởi tạo Firebase
│   ├── badges.js             # Logic huy hiệu
│   └── agents/               # Claude AI pipeline
└── data/
    └── lessons.js            # 45 bài học tĩnh
```

## Dữ liệu Firestore

```
/users/{userId}
  - displayName, avatar, ageGroup
  - totalXP, completedLessons[], badges[]
  - streak, lastActiveAt, createdAt, isAnonymous

/leaderboard/{weekId}
  - entries: [{userId, displayName, xp}]
```

## Biến môi trường

Tạo file `.env.local` từ `.env.local.example`:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=

ANTHROPIC_API_KEY=        # Server-side only, không có NEXT_PUBLIC_
```

## Cài đặt & chạy

```bash
npm install
npm run dev        # http://localhost:3000
npm run build
npm run start
```

## Firebase cần bật

- Authentication → **Google** + **Anonymous**
- Firestore Database (rules trong `firestore.rules`)
- Authorized domains: `localhost`, domain Vercel

## Tính năng chính

- 45 bài học chia 3 nhóm tuổi: 6–8, 9–12, 13–16
- 3 loại game: Quiz, A/B choice, Transaction simulation
- Hệ thống XP + huy hiệu
- Bảng xếp hạng tuần
- Đăng nhập Google hoặc chơi ẩn danh (không mất tiến độ nếu đăng nhập sau)
- AI tạo câu hỏi động qua Claude API
- PWA-ready (manifest.json)

## Changelog

### 2026-06-24
- Khởi tạo dự án, đồng bộ từ GitHub
- Fix hydration error do browser extension (`suppressHydrationWarning` trên `<html>`)
- Thêm error handling chi tiết cho Google Login
- Tạo `.env.local` với Firebase config
