# XuXu — Project Spec & Requirements

> **SSOT** cho: tầm nhìn sản phẩm, yêu cầu/quyết định, **schema dữ liệu (Firestore)**, **monetization**, vận hành (Firebase/deploy), roadmap.
> Không lặp lại ở đây: design system → [docs/DESIGN_SYSTEM.md](docs/DESIGN_SYSTEM.md) · tính năng/màn hình → [docs/FEATURES.md](docs/FEATURES.md) · taxonomy/nội dung → [docs/CONTENT.md](docs/CONTENT.md) · lịch sử → [CHANGELOG.md](CHANGELOG.md). Rule chung → [AGENTS.md](AGENTS.md).
> Cập nhật: 2026-06-29.

---

## 1. Tầm nhìn & đối tượng

Ứng dụng web gamification giúp **mọi người** học tài chính cá nhân qua mini-game tương tác, cảm hứng Duolingo — mỗi ngày 5–10 phút, nhận XP, giữ streak, leo bảng xếp hạng. Mục tiêu: tạo nền tảng tài chính vững từ sớm, dễ tiếp cận đại chúng (trẻ em, người trẻ, phụ huynh, người thu nhập thấp–trung bình).

**Nguyên tắc sản phẩm:** đời thường, tiếng Việt, ngữ cảnh Việt Nam; trung lập & an toàn (không khuyến nghị đầu tư cụ thể, không hứa lợi nhuận, tài sản số nhắc rủi ro, phù hợp trẻ em).

## 2. Quyết định kiến trúc (đã chốt)

- **Phân loại nội dung** theo **Chủ đề + Cấp độ** (bỏ nhóm tuổi) — xem [docs/CONTENT.md](docs/CONTENT.md).
- **Stack**: Next.js 16 App Router + React 18, Firebase (Auth + Firestore), Tailwind + inline styles, Claude SDK cho AI — xem [README.md](README.md). Đổi/bổ sung stack phải cập nhật file này trước.
- **Dữ liệu**: ưu tiên Firestore, **fallback localStorage** khi chưa cấu hình Firebase (chạy chế độ khách/demo). Lớp admin: `src/lib/admin.js`.
- **AI nội dung**: multi-agent pipeline + duyệt admin trước khi publish — xem [docs/AI_AGENTS.md](docs/AI_AGENTS.md).

## 3. Game System (cơ chế cốt lõi)

- **Tim (lives):** 5 tim/phiên (`MAX_HEARTS = 5`); sai mất 1 tim; hết tim → `OutOfHeartsModal` (đếm ngược hồi tim / mua hồi tim / luyện tập).
- **XP:** mỗi câu đúng `≈ round(lesson.xp / số câu)`; cộng vào `totalXP` (Firestore). Sao: `round(correct/total × 3)`.
- **Huy hiệu:** 8 badge (`src/lib/badges.js`), mở khoá theo `completedLessons`/`totalXP`/`streak`.
- **3 loại mini-game:** `quiz` · `ab` · `transaction` (schema → [docs/CONTENT.md](docs/CONTENT.md)).

> Mô tả từng màn hình & luồng (home, tasks, shop, personalize…) → [docs/FEATURES.md](docs/FEATURES.md).

## 4. Schema dữ liệu (Firestore) — SSOT

```
/users/{userId}
  uid, displayName, photoURL, avatar
  ageGroup            # DEPRECATED (không dùng)
  totalXP, xu         # xu hiện đọc mặc định khi thiếu (chưa trừ thật ở shop)
  completedLessons[], badges[], streak, lastActiveAt, createdAt, isAnonymous
  isPro               # true khi subscription còn hạn
  proExpiry           # Timestamp | null
  trialStartedAt      # Timestamp | null (chống trial nhiều lần)

  /progress/{lessonId}        # completedAt, score, stars, attempts
  /personalize/path           # answers, lessonIds[], redesignsUsed, updatedAt (cá nhân hóa)

/lessons/{lessonId}           # nội dung do admin quản lý (override/meta)
/question_bank/{id}           # kho câu hỏi nguyên tử (xem docs/CONTENT.md)
/leaderboard/{weekId}         # "2026-W26" → entries:[{userId, displayName, xp}]
/book_overrides, /book_extras # cửa hàng sách (admin)
```

`isPro` (derived, `AuthContext`): chỉ true khi `isPro===true && proExpiry > now`.

### Firestore rules (`firestore.rules`)
- `users/{uid}` + subcollections `progress`, `personalize`: chỉ chủ sở hữu đọc/ghi.
- `lessons`, `leaderboard`: public read.
- **Nhắc:** đổi rules phải `firebase deploy --only firestore:rules` (Vercel không tự deploy).

## 5. Monetization — Free vs Pro — SSOT

| Tính năng | Free | Pro |
|---|---|---|
| Tim | 5/phiên | Vô hạn |
| XP / xu | 1× | 2× |
| Chủ đề Đầu tư | Cơ bản | Truy cập sớm |
| Quảng cáo/upsell | Có | Không |
| Cá nhân hóa: "Thiết kế lại" lộ trình | 1 lần miễn phí | Không giới hạn |

**Giá:** Tháng **49.000đ** · Năm **399.000đ** (~33.250đ/tháng, tiết kiệm ~32%) · **Trial 7 ngày** (`activateTrial`).
Component: `ProBadge`, `UpgradeModal`. Pro tier màu tím `#8B5CF6` (token — [DESIGN_SYSTEM.md](docs/DESIGN_SYSTEM.md)).

*Để sau:* đổi điểm/xu để mua thêm lượt "Thiết kế lại" (xu hiện mock, shop chưa trừ thật).

## 6. Firebase & Deploy (vận hành)

```bash
# Auth: Google + Anonymous; Authorized domains: localhost, money.thanhmam.com, *.vercel.app
# Firestore: publish rules
firebase deploy --only firestore:rules
# Deploy app: push GitHub main → Vercel auto-deploy
git push origin main
```
Env vars trên Vercel: tất cả `NEXT_PUBLIC_FIREBASE_*` + `ANTHROPIC_API_KEY`.

## 7. Roadmap / Backlog

**Đang làm / tiếp theo**
- [ ] Kết nối `/tasks`, `/shop` (trừ `xu` thật) với Firestore.
- [ ] Streak thực (cập nhật `lastActiveAt` mỗi ngày học).
- [ ] Kho câu hỏi ~500 câu (pilot → full) — kế hoạch ở [docs/CONTENT.md §6](docs/CONTENT.md).
- [ ] Cá nhân hóa: đổi điểm/xu mua thêm lượt; hỏi mục tiêu trong onboarding.
- [ ] Loại câu hỏi mới `scenario` / `true-false` (+ component game).

**Đã hoàn thành:** xem [CHANGELOG.md](CHANGELOG.md).
