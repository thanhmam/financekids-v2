# XuXu — Học Tài Chính Cùng XuXu 🟡

Web app gamification giúp **mọi người** (trẻ em, người trẻ, ai muốn tìm hiểu về tiền) học tài chính — mỗi ngày 5–10 phút, theo phong cách Duolingo: mascot XuXu, hệ thống tim, XP, streak, huy hiệu, bảng xếp hạng.

**Live:** [money.thanhmam.com](https://money.thanhmam.com) · **Repo:** [github.com/thanhmam/financekids-v2](https://github.com/thanhmam/financekids-v2)

> 🤖 **AI agent / người mới tham gia: đọc [AGENTS.md](AGENTS.md) TRƯỚC.** Đó là bộ rule bắt buộc (tài liệu phải đọc, nguồn sự thật duy nhất, kỷ luật changelog).

---

## 📚 Bản đồ tài liệu (mỗi chủ đề = 1 nguồn duy nhất)

| File | Nội dung |
|---|---|
| **[AGENTS.md](AGENTS.md)** | Rules cho AI agent & contributor (must-read, SSOT map, versioning) |
| **README.md** (file này) | Tổng quan, tech stack, quick start, cấu trúc thư mục |
| **[PROJECT.md](PROJECT.md)** | Spec sản phẩm, schema dữ liệu (Firestore), monetization, roadmap |
| **[docs/FEATURES.md](docs/FEATURES.md)** | Tính năng, màn hình, luồng người dùng |
| **[docs/DESIGN_SYSTEM.md](docs/DESIGN_SYSTEM.md)** | Design system: màu, typography, component, motif |
| **[docs/CONTENT.md](docs/CONTENT.md)** | Taxonomy + schema bài học/câu hỏi + kế hoạch kho câu hỏi |
| **[docs/AI_AGENTS.md](docs/AI_AGENTS.md)** | Hệ AI agent sinh nội dung (pipeline, model, prompt) |
| **[CHANGELOG.md](CHANGELOG.md)** | Lịch sử thay đổi (chỉ thêm, không xóa) |

---

## Tech Stack

| Layer | Công nghệ |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| UI | React 18 + Tailwind CSS 3 + inline styles |
| Auth | Firebase Authentication (Google + Anonymous) |
| Database | Firebase Firestore |
| Animation | Framer Motion + CSS keyframes |
| AI | Anthropic Claude SDK (`@anthropic-ai/sdk`) — xem [docs/AI_AGENTS.md](docs/AI_AGENTS.md) |
| Deploy | Vercel (auto-deploy từ GitHub `main`) |
| Font | Baloo 2 + Nunito (Google Fonts, hỗ trợ tiếng Việt) |

> Không thêm framework/thư viện lớn mới nếu chưa cập nhật [PROJECT.md](PROJECT.md) (xem rule ở [AGENTS.md](AGENTS.md)).

---

## Cài đặt & Chạy local

```bash
git clone https://github.com/thanhmam/financekids-v2.git
cd financekids-v2
npm install
cp .env.local.example .env.local   # điền Firebase + Anthropic keys
npm run dev                        # http://localhost:3000
```

### ⚠️ Lưu ý môi trường build
- Repo đặt trên **iCloud Drive** → `next dev` đọc `node_modules` cực chậm. **Tránh chạy dev server cục bộ**; thay vào đó kiểm tra cú pháp nhanh bằng:
  ```bash
  npx esbuild <file> --bundle=false --jsx=transform --loader:.js=jsx
  ```
  và để **Vercel** build thật khi push `main`.
- **Firestore rules không tự deploy qua Vercel.** Khi đổi `firestore.rules` phải deploy thủ công: `firebase deploy --only firestore:rules`.

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

ANTHROPIC_API_KEY=        # Server-side only — KHÔNG có tiền tố NEXT_PUBLIC_
```

> Chưa cấu hình Firebase → app vẫn chạy ở **chế độ khách** (localStorage). Admin chạy chế độ demo (lưu tạm trình duyệt).

---

## Cấu trúc dự án

```
src/
├── app/
│   ├── page.js                    # Landing (khách) / Dashboard (đã đăng nhập)
│   ├── learn/                     # Dashboard (guest preview)
│   ├── personalize/               # Cá nhân hóa lộ trình
│   ├── game/[lessonId]/           # Chơi bài học
│   ├── explore, streak, tasks, leaderboard, profile/
│   ├── shop/ + shop/book/[bookId]/  # Cửa hàng + chi tiết sách
│   ├── admin/                     # Panel quản trị (content, ai, books, users…)
│   └── api/agents/orchestrate/    # API route Claude AI
├── components/                    # UI (Dashboard, LessonCard, XuXuMascot, Game*, …)
├── contexts/AuthContext.jsx       # Auth + Firestore profile + isPro
├── hooks/                         # useProgress, useBooks
├── lib/                           # firebase, admin, badges, personalize, agents/
└── data/
    ├── lessons.js                 # Bài học tĩnh + TOPICS/LEVELS/CATEGORIES
    ├── books.js                   # Catalog sách (Shopee affiliate)
    └── personalize.js             # Câu hỏi cá nhân hóa
design-system/                     # Token CSS + components + UI kit (nguồn design)
docs/                              # FEATURES, DESIGN_SYSTEM, CONTENT, AI_AGENTS
```

Chi tiết tính năng từng màn hình → [docs/FEATURES.md](docs/FEATURES.md). Schema dữ liệu & Firebase setup → [PROJECT.md](PROJECT.md).
