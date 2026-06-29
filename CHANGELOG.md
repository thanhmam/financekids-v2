# Changelog — XuXu

> **Lịch sử thay đổi hợp nhất của toàn dự án.** Đây là **nguồn duy nhất** cho changelog — các file khác (README, PROJECT, docs) **không** giữ changelog riêng, chỉ trỏ về đây.
>
> **Quy tắc (bắt buộc — xem [AGENTS.md](AGENTS.md)):** Sau mỗi version/thay đổi đáng kể, **THÊM** mục mới lên đầu. **Không xóa, không viết lại lịch sử cũ.** Định dạng theo [Keep a Changelog](https://keepachangelog.com/), ngày `YYYY-MM-DD`.

Phiên bản hiện tại: **0.7.2** · cập nhật 2026-06-29.

---

## [0.7.2] — 2026-06-29

### Changed
- **Trang Nhật ký cập nhật (`/changelog`)** giờ **tự đọc từ `CHANGELOG.md`** (SSOT) — parse các mục version, chỉ lấy thay đổi chính (câu đầu mỗi gạch đầu dòng cấp 1), tự bỏ phần header quy tắc/ghi chú. Không còn dữ liệu changelog trùng lặp.
- **Footer**: bỏ link "Cửa hàng sách" khỏi cột KHÁM PHÁ (chỉ còn Hành trình + Nhật ký cập nhật).

### Removed
- Xoá `src/data/changelog.js` (dữ liệu changelog thủ công, đã thay bằng nguồn trực tiếp `CHANGELOG.md`).

## [0.7.1] — 2026-06-29

### Added
- **Bài viết đầu tiên** trên Hành trình XuXu: *"Tôi đã 'vibe code' ra XuXu như thế nào — và vì sao tài liệu mới là phần khó nhất"* (`/journey/vibe-code-xuxu`).
- **Renderer bài viết hỗ trợ inline `**đậm**` / `*nghiêng*`** (hàm `inline()` trong `journey/[slug]`), cập nhật chú thích schema trong `src/data/journey.js`.

### Changed
- **Đổi custom domain** `money.thanhmam.com` → **`xuxu.thanhmam.com`** (domain thực tế đang chạy). Cập nhật `README.md`, `PROJECT.md` (Firebase authorized domains), `design-system/readme.md`. *(Mục lịch sử `[0.1.0]` giữ nguyên domain cũ đúng thời điểm.)*

## [0.7.0] — 2026-06-29

### Added
- **Trang "Hành trình xây dựng XuXu"** (`/journey` + `/journey/[slug]`): kho bài viết chia sẻ về quá trình tạo XuXu. Trang danh sách (card: emoji/ngày/đọc bao lâu/tiêu đề/tóm tắt) + trang chi tiết render theo block (`h2`/`p`/`quote`/`list`/`img`). Nội dung quản lý trong `src/data/journey.js` (thêm bài = thêm 1 object, slug duy nhất). Seed sẵn 1 bài mẫu.
- **Trang "Nhật ký cập nhật" / Change Log** (`/changelog`): timeline các thay đổi quan trọng hướng người dùng (tag Mới/Cải thiện/Sửa lỗi). Bản chọn lọc trong `src/data/changelog.js` — **không thay thế** `CHANGELOG.md` (vẫn là SSOT đầy đủ cho dev).
- **Footer mới có cột "KHÁM PHÁ"**: link tới Hành trình, Nhật ký cập nhật, Cửa hàng sách (dùng `next/link`).

### Changed
- **Tách footer dùng chung** `SiteFooter` (trước nằm inline trong `Landing.jsx`) + thêm header công khai `SiteHeader` cho các trang phụ. Landing nay tái dùng `SiteFooter`.

## [0.6.5] — 2026-06-29

### Changed
- **Chi tiết sách**: bỏ hoàn toàn vùng sticky bottom bar (Giá ưu đãi + nút lớn); nút mua chuyển về inline dưới nội dung cho cả desktop lẫn mobile. Đổi tên nút "Mua sách trên Shopee" → **"Mua sách"**.

## [0.6.4] — 2026-06-29

### Changed
- **Admin › Cửa hàng sách — danh sách**:
  - Title của mỗi card trở thành link → click mở trang chi tiết sách (`/shop/book/[id]`) trong tab mới.
  - Nút "Xem trang →" đổi thành "🛒 Link mua hàng" — dẫn trực tiếp đến link mua hàng đã lưu (chỉ hiện khi link hợp lệ, không phải placeholder mặc định).
  - Label form "Link Shopee affiliate" → **"Link mua hàng"**.
- **Trang Chi tiết sách (`/shop/book/[bookId]`)** — tối ưu Desktop:
  - Thêm **left navigation** (giống các trang khác trong app) đúng design system: sticky sidebar, active highlight Cửa hàng, breadcrumb desktop.
  - Desktop: nút "Mua sách trên Shopee" hiển thị **inline** dưới giá (không còn sticky bar ở đáy); sticky bar chỉ còn trên mobile.
  - Thêm BottomNav cho mobile.

## [0.6.3] — 2026-06-29

### Changed
- **Admin › Cửa hàng sách**: thêm nút "Xem trang →" trên mỗi card — mở tab mới đến `/shop/book/[id]` để xem trước trang đích của sách.

## [0.6.2] — 2026-06-29

### Fixed
- **Ảnh bìa sách không hiển thị trên Landing**: `Landing.jsx` dùng `BOOKS` tĩnh thay vì `useBooks()` nên override từ Admin (bao gồm `coverUrl`) không được áp dụng. Sửa bằng cách dùng `useBooks()` — Landing giờ tự động hiển thị ảnh bìa thật đã lưu trong Admin.

### Changed
- **Trang chi tiết sách** (`/shop/book/[bookId]`): sửa dòng disclaimer affiliate từ "không ảnh hưởng giá bạn trả" → "Giá chỉ mang tính tham khảo, có thể thay đổi tùy theo voucher của bạn và sàn tại thời điểm mua."

## [0.6.1] — 2026-06-29

### Fixed
- **Nút "KIỂM TRA/TIẾP TỤC" trên mobile bị trôi**: bỏ `translate-y` (transform) ở wrapper nội dung game (`game/[lessonId]`) — transform tạo containing block khiến `position: fixed` của thanh nút neo nhầm vào div cuộn thay vì viewport. Chuyển transition câu hỏi sang fade `opacity`, nút giờ ghim đáy màn hình.

### Changed
- **Cá nhân hóa lộ trình** (`/personalize`):
  - Intro bỏ câu "Trả lời 3 câu hỏi nhanh" và bỏ con số "45 bài" (số bài sẽ tăng) — chỉ giới thiệu XuXu chọn bài phù hợp mục tiêu & trình độ.
  - Câu hỏi nhịp học đổi từ "muốn học bao nhiêu bài" → "muốn dành bao nhiêu thời gian học": 5–10 phút / 15 phút / 30 phút / hơn 30 phút (`minutes` thay cho `perDay`).
  - Nút "Bắt đầu học" giờ vào bài **chưa học đầu tiên** trong lộ trình (đã sắp xếp dễ → khó); chưa học bài nào → bắt đầu từ bài đầu.

## [0.6.0] — 2026-06-29

### Added
- **Tài liệu hóa & quản trị**: tổ chức lại toàn bộ docs theo mô hình SSOT (mỗi chủ đề 1 nguồn duy nhất); thêm `AGENTS.md` (rules bắt buộc cho AI agent), `CLAUDE.md` (trỏ tới AGENTS), `CHANGELOG.md` (hợp nhất), `docs/CONTENT.md` (taxonomy + schema bài học/câu hỏi + kế hoạch kho câu hỏi), `docs/AI_AGENTS.md` (hệ AI agent làm nội dung).
- **Cá nhân hóa lộ trình** (`/personalize`): luồng 4 bước intro → 3 câu hỏi → animation "AI phân tích" → lộ trình gợi ý (rule-based `buildPath`). Lưu Firestore `users/{uid}/personalize/path` (fallback localStorage). Nút "Thiết kế lại" gate Pro (free 1 lượt → `UpgradeModal`; Pro không giới hạn; khách tự do + CTA đăng nhập). Dashboard thêm CTA "✨ Cá nhân hóa".

### Changed
- README/PROJECT thu gọn, bỏ trùng lặp design-system/taxonomy/changelog (chuyển về SSOT tương ứng).

## [0.5.0] — 2026-06-28

### Added
- **Cửa hàng sách (Shopee affiliate)**: `src/data/books.js` (6 đầu sách tài chính), `BookCover`, mục "Sách tham khảo" ở `/shop`, trang chi tiết `/shop/book/[id]` với nút "Mua sách trên Shopee", admin CRUD `/admin/books`, hook `useBooks`.
- **Landing page mới** (theo Duolingo handoff): hero minh hoạ động, 3 feature rows, "Học theo chủ đề", "Học theo sách"; responsive mobile.
- `docs/FEATURES.md`, `docs/DESIGN_SYSTEM.md`.

### Changed
- **Taxonomy thống nhất**: bỏ phân loại theo nhóm tuổi (6-8/9-12/13-16) → **Chủ đề + Cấp độ** (Khởi đầu/Vững vàng), đồng bộ ở app lẫn admin.
- **Admin** restyle theo XuXu Design System (xanh `#16C172`, Baloo 2, logo coin); sync tag chủ đề/cấp độ; thông báo gửi theo cấp độ; cột người dùng đổi sang streak.
- **Dashboard**: bỏ tag tuổi ở LessonCard; right panel hiển thị đầy đủ (leaderboard + mục tiêu + streak 7 ngày).
- `LoginModal`: modal giữa màn hình + nút đóng; khách chỉ nhập tên (bỏ chọn nhóm tuổi).

### Removed
- `LandingV2.jsx` (toggle V1/V2 tạm thời).

## [0.4.0] — 2026-06-26

### Added
- Upload XuXu Design System v1 vào `design-system/` (tokens, 11 components, guidelines, UI kit).
- Tính năng Free vs Pro: `ProBadge`, `UpgradeModal`, `activateTrial`; Pro card desktop/mobile → UpgradeModal; overlay "Chỉ Pro" cho item shop khoá; Profile hiển thị PRO badge + ngày hết hạn.

## [0.3.0] — 2026-06-25

### Added
- Trang `/tasks`: nhiệm vụ hằng ngày (progress + nhận thưởng) + tuần + countdown.
- Shop nâng lên 6 vật phẩm, grid 2 cột; thêm "Mở chủ đề Đầu tư", "Combo tiết kiệm".

### Changed
- Nav ▲ (desktop + mobile BottomNav) → `/tasks`.

## [0.2.0] — 2026-06-24 (batch XuXu UI)

### Changed
- Đổi tên **FinanceKids → XuXu**; triển khai XuXu Design System v1 toàn bộ.

### Added
- `XuXuMascot` (mood happy/sad/floating); `BottomNav` 5 tab mobile.
- Trang `/onboarding`, `/explore`, `/streak`, `/leaderboard`, `/shop`, `/profile`.
- Game page: 5 tim, `OutOfHeartsModal`, đồng hồ hồi tim.
- Desktop layout 3 cột (sidebar 250px + main + right panel 320px).

## [0.1.0] — 2026-06-24 (baseline)

### Added
- Khởi tạo Next.js 16 + Firebase + Tailwind.
- 45 bài học tĩnh, 3 loại mini-game (`quiz`/`ab`/`transaction`).
- Firebase Auth (Google + Anonymous), Firestore sync (XP, progress, badges).
- Bảng xếp hạng tuần, XP + 8 huy hiệu.
- Claude AI API (`@anthropic-ai/sdk`); PWA manifest; custom domain `money.thanhmam.com`.
