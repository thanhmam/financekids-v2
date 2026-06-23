# FinanceKids v2 🐷💰

Web game học tài chính cho trẻ em 6-16 tuổi. Responsive, animated, đa cấp độ.

## Stack

- **Frontend**: Next.js 14 (App Router) + Tailwind CSS
- **Animation**: CSS Keyframes + Tailwind animations
- **Database**: Firebase Firestore
- **Auth**: Firebase Authentication
- **Hosting**: Vercel
- **Repo**: GitHub

## Cài đặt local

```bash
git clone https://github.com/YOUR_USERNAME/financekids-v2.git
cd financekids-v2
npm install
cp .env.local.example .env.local
# Điền Firebase keys vào .env.local
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000)

## Setup Firebase

1. Vào [Firebase Console](https://console.firebase.google.com)
2. Tạo project mới → "FinanceKids"
3. **Firestore Database**: Create database → Start in production mode
4. **Authentication**: Enable "Anonymous" (cho MVP)
5. Copy config vào `.env.local`
6. Deploy Firestore rules: `firebase deploy --only firestore:rules`

## Deploy lên Vercel

```bash
# Cài Vercel CLI
npm i -g vercel

# Deploy lần đầu
vercel

# Set environment variables
vercel env add NEXT_PUBLIC_FIREBASE_API_KEY
# (lặp lại cho tất cả NEXT_PUBLIC_FIREBASE_* vars)

# Deploy production
vercel --prod
```

Hoặc kết nối GitHub repo trực tiếp tại [vercel.com](https://vercel.com) → Import Project → tự động deploy mỗi khi push.

## Cấu trúc project

```
src/
├── app/
│   ├── page.js              # Trang chủ - danh sách bài học
│   ├── game/[lessonId]/     # Game page cho từng bài
│   └── globals.css          # Global styles + animations
├── components/
│   ├── HeroSection.jsx      # Banner đầu trang
│   ├── LessonCard.jsx       # Card bài học
│   ├── ProgressBar.jsx      # Thanh tiến độ + XP
│   ├── GameQuiz.jsx         # Game trắc nghiệm
│   ├── GameAB.jsx           # Game chọn A hay B
│   ├── GameTransaction.jsx  # Game giao dịch
│   └── ResultScreen.jsx     # Màn hình kết quả
├── data/
│   └── lessons.js           # Dữ liệu 10 bài học mẫu
└── lib/
    └── firebase.js          # Firebase config + DB schema
```

## Bài học có sẵn (10 bài MVP)

| # | Bài học | Độ tuổi | Loại |
|---|---------|---------|------|
| 1 | Tiền là gì? | 6-8 | Khái niệm |
| 2 | Cần và Muốn | 6-8 | Phân biệt |
| 3 | Heo Đất Thần Kỳ | 6-8 | Giao dịch |
| 4 | Thu Nhập & Chi Tiêu | 9-12 | Khái niệm |
| 5 | Ngân Hàng Là Gì? | 9-12 | Khái niệm |
| 6 | Chi Tiêu Thông Minh | 9-12 | Lựa chọn |
| 7 | Lãi Kép - Phép Màu | 13-16 | Khái niệm |
| 8 | Đầu Tư Cơ Bản | 13-16 | Phân biệt |
| 9 | Nợ & Tín Dụng | 13-16 | Lựa chọn |
| 10 | Ngân Sách 50/30/20 | 13-16 | Giao dịch |

## Thêm bài học mới

Thêm vào `src/data/lessons.js`:

```js
{
  id: "lesson-11",
  title: "Tên bài học",
  ageGroup: "9-12",   // "6-8" | "9-12" | "13-16"
  category: "concept", // "concept" | "compare" | "choice" | "transaction"
  icon: "💡",
  color: "#FF6B35",
  xp: 150,
  questions: [
    {
      type: "quiz",  // "quiz" | "ab" | "transaction"
      question: "Câu hỏi?",
      options: [
        { text: "Đáp án A", emoji: "🅰️" },
        { text: "Đáp án B", emoji: "🅱️" },
      ],
      correct: 0,
      explanation: "Giải thích đáp án..."
    }
  ]
}
```

## Lộ trình phát triển

- [x] MVP: 10 bài học, 3 loại game (Quiz / A-B / Transaction)
- [x] Firebase Auth: Google login + chơi ẩn danh
- [x] Firestore sync: lưu tiến độ, XP, streak
- [x] Leaderboard tuần (real-time)
- [x] Badges & Achievements (8 huy hiệu)
- [x] Mở rộng lên **30 bài học** (6-8, 9-12, 13-16 tuổi)
- [x] PWA manifest (cài được như app trên điện thoại)
- [ ] Admin panel thêm/sửa bài học (Firestore CMS)
- [ ] Mở rộng lên 50-100 bài học
- [ ] Audio + âm thanh game
- [ ] Push notification nhắc học hàng ngày
- [ ] Streak (chuỗi ngày học liên tiếp)
