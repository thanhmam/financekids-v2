# XuXu — Tính năng ứng dụng

> **SSOT** cho tính năng, màn hình & luồng người dùng. Taxonomy/nội dung → [CONTENT.md](CONTENT.md); design → [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md); lịch sử → [../CHANGELOG.md](../CHANGELOG.md). Cập nhật: 2026-06-29.

XuXu là web app gamification giúp **mọi người** (trẻ em, người trẻ, ai muốn tìm hiểu về tiền) học tài chính qua mini-game tương tác — mỗi ngày 5–10 phút, theo phong cách Duolingo.

---

## 1. Landing page (`/`)

Trang giới thiệu marketing (theo thiết kế Duolingo handoff), hiển thị cho khách **chưa đăng nhập**.

- **Hero**: minh hoạ động (nhân vật Xu đồng xu + bạn đồng hành sprout/gem/heo đất + vật phẩm tài chính bay), headline, 2 CTA (`BẮT ĐẦU HỌC` / `TÔI ĐÃ CÓ TÀI KHOẢN`), 3 chip lợi ích: **Học miễn phí · Học mà chơi · Học 5–10 phút/ngày**.
- **3 feature rows** xen kẽ: bài học khoa học · giữ streak/gom xu/lên hạng · lộ trình cá nhân hoá.
- **Học theo chủ đề**: 7 chủ đề tài chính (xem Taxonomy §7).
- **Học theo sách**: lưới sách tài chính kinh điển với **bìa sách thật** (component `BookCover`), giá + % giảm → bấm vào mở trang chi tiết.
- **Final CTA** + **Footer** dùng chung (`SiteFooter`): cột thương hiệu, cột **KHÁM PHÁ** (Hành trình · Nhật ký cập nhật · Cửa hàng sách), cột **LIÊN HỆ** (Thành Mắm, email, TikTok, Facebook).
- **Responsive**: tối ưu mobile bằng media query (hero 1 cột, feature rows xếp dọc, chủ đề 2 cột, sách 1 cột).

Đã đăng nhập → vào thẳng **Dashboard**.

### 1b. Trang công khai (linked từ footer)

Dùng chung `SiteHeader` (logo → trang chủ, nút BẮT ĐẦU → `/learn`) + `SiteFooter`.

- **Hành trình xây dựng XuXu** (`/journey`): kho bài viết chia sẻ về quá trình làm XuXu — danh sách card (emoji, ngày, thời gian đọc, tiêu đề, tóm tắt). Bài chi tiết (`/journey/[slug]`) render theo block (`h2`/`p`/`quote`/`list`/`img`) + CTA học. Nội dung: `src/data/journey.js`.
- **Nhật ký cập nhật / Change Log** (`/changelog`): timeline các thay đổi quan trọng hướng người dùng, tag **Mới / Cải thiện / Sửa lỗi**. Bản chọn lọc: `src/data/changelog.js` (changelog đầy đủ cho dev vẫn ở [../CHANGELOG.md](../CHANGELOG.md)).

## 2. Dashboard học tập (`/learn`, và `/` khi đã đăng nhập)

- **Chế độ khách (guest preview)**: khách xem được toàn bộ dashboard nhưng không vào bài học — bấm bài/chủ đề sẽ mở `LoginModal`. Banner "👀 Xem trước".
- **Mobile**: header (lời chào + streak + mascot), mục tiêu hôm nay (donut %), thẻ "Tiếp tục bài học", tiles thử thách/streak, mẹo XuXu, bộ lọc chủ đề + cấp độ, lưới bài học.
- **Desktop (3 cột)**: left nav · main (lộ trình + bộ lọc + grid bài học) · **right panel đầy đủ** hiển thị sẵn (không cần bấm): Bảng xếp hạng + dòng "Bạn", Mục tiêu hôm nay, thẻ Streak 7 ngày, Mẹo XuXu.
- **Bộ lọc**: theo **chủ đề** (7) và **cấp độ** (Khởi đầu / Vững vàng). *Không còn lọc theo nhóm tuổi.*

### 2b. Các cách học & Cá nhân hóa lộ trình

XuXu có 3 cách học: **theo chủ đề** (chip topic) · **theo cấp độ** (chip level) · **cá nhân hóa**.

- **Tab "✨ Cá nhân hóa"** (CTA tím nổi bật trong dashboard, mobile + desktop) → mở trang **`/personalize`**.
- **Luồng** (4 bước): intro (giới thiệu + ưu điểm) → trả lời **3 câu hỏi** (mục tiêu / trình độ / thời gian học mỗi ngày: 5–10 / 15 / 30 / hơn 30 phút) → animation "XuXu đang phân tích…" → **lộ trình gợi ý**: danh sách bài học (`LessonCard`) lọc & sắp xếp theo chủ đề + cấp độ đã chọn (dễ → khó), kèm câu tóm tắt cá nhân hóa.
- **Nút "Bắt đầu học"**: vào bài **chưa học đầu tiên** trong lộ trình; chưa học bài nào → bắt đầu từ bài đầu (`/game/[lessonId]`).
- **"AI" = rule-based**: `buildPath(answers)` trong `src/lib/personalize.js` ánh xạ câu trả lời → tập chủ đề + cấp độ → lọc `LESSONS` (foundation trước, advanced sau). Cấu hình câu hỏi: `src/data/personalize.js`.
- **Lưu trữ**: Firestore `users/{uid}/personalize/path` (fallback localStorage; khách lưu localStorage). Mở lại trang → vào thẳng lộ trình đã lưu.
- **Nút "Thiết kế lại"** (gate Pro): người dùng thường được đổi miễn phí `MAX_FREE_REDESIGNS` lần (mặc định 1); hết lượt → mở `UpgradeModal` (nâng cấp Pro). **Pro**: không giới hạn. **Khách**: làm lại tự do (không lưu) + CTA đăng nhập.
- *Để sau*: đổi điểm/xu để mua thêm lượt; hỏi mục tiêu ngay trong onboarding.

## 3. Chơi bài học (`/game/[lessonId]`)

- Layout desktop 3 cột: left nav · center quiz · right panel (tên bài + danh sách câu hỏi + ♥ mỗi câu).
- Mobile: header (back + progress + tim), nút `KIỂM TRA`/`TIẾP TỤC` **floating** ở đáy.
- **3 loại mini-game**: `quiz` (trắc nghiệm) · `ab` (chọn A/B) · `transaction` (mô phỏng giao dịch).
- **Hệ thống tim**: 5 tim/phiên, sai mất 1 tim, hết tim → `OutOfHeartsModal` (đếm ngược hồi tim, mua hồi tim, luyện tập).
- **Kết quả**: số sao (0–3) + confetti + XP nhận được.

## 4. Gamification

- **XP**: mỗi câu đúng cộng XP, lưu Firestore `totalXP`.
- **Xu**: tiền tệ trong app (mua vật phẩm/sách trong shop).
- **Streak**: chuỗi ngày học liên tục, thẻ streak 7 ngày.
- **Huy hiệu**: 8 badge (`src/lib/badges.js`), mở khoá theo tiến độ, có `BadgeToast`.
- **Bảng xếp hạng** (`/leaderboard`): top tuần + hạng của bạn.
- **Nhiệm vụ** (`/tasks`): nhiệm vụ ngày (progress + nhận thưởng) & tuần.
- **Streak page** (`/streak`): hero card cam + lịch tuần + phần thưởng.

## 5. Cửa hàng (`/shop`)

- **Vật phẩm** (6): Hồi đầy tim, Băng giữ streak, Nhân đôi XP, Đổi diện mạo, Mở chủ đề, Combo — mua bằng **xu**. Banner sale.
- **📚 Sách tham khảo** *(mới)*: lưới sách tài chính với bìa, tác giả, giá, % giảm → bấm mở trang chi tiết.
- **Trang chi tiết sách** (`/shop/book/[bookId]`): bìa lớn, tagline, giới thiệu, "Bạn sẽ học được" (highlights), thanh **"🛒 Mua sách trên Shopee"** cố định đáy → mở **link Shopee affiliate**.

## 6. Tài khoản & Pro

- **Auth**: Firebase (Google + Anonymous/khách). `LoginModal` hiển thị **giữa màn hình**, có nút đóng; khách chỉ cần nhập tên (đã bỏ chọn nhóm tuổi).
- **Hồ sơ** (`/profile`): stats, lưới huy hiệu, Pro badge, đăng xuất.
- **Free vs Pro**: tim vô hạn, 2× XP/xu, mở chủ đề sớm, ẩn quảng cáo. `UpgradeModal`, trial 7 ngày. Pro tier màu tím `#8B5CF6`.

## 7. Phân loại nội dung (Taxonomy)

Nội dung phân loại theo **7 Chủ đề × 2 Cấp độ** (Khởi đầu/Vững vàng) + loại bài. Đã bỏ phân loại theo nhóm tuổi.

> Bảng taxonomy đầy đủ + schema bài học/câu hỏi: **[CONTENT.md](CONTENT.md)** (SSOT).

## 8. Admin (`/admin`, nội bộ)

Giao diện admin theo **XuXu Design System** (xem `docs/DESIGN_SYSTEM.md`): nền `#F4F8EF`, logo coin XuXu, primary xanh `#16C172`, heading Baloo 2, card 18px viền `#ECF1E6`.

| Route | Chức năng |
|---|---|
| `/admin` | Tổng quan: thống kê bài học theo **cấp độ / loại / chủ đề** |
| `/admin/content` | Danh sách bài học, **lọc theo chủ đề**, tag chủ đề + cấp độ, duyệt/ẩn, duyệt bản nháp AI |
| `/admin/content/[lessonId]` | Sửa bài: category / level / topic + sửa câu hỏi |
| `/admin/ai` | AI pipeline 3-agent: chọn **Cấp độ + Chủ đề** + nội dung → sinh JSON bài học |
| `/admin/books` | **CRUD cửa hàng sách**: bìa/ảnh, giá, giảm giá, link Shopee, ẩn/hiện, thêm/xoá |
| `/admin/users` | Danh sách người dùng (tên, đăng nhập, streak, XP, huy hiệu) |
| `/admin/mechanics` | Cấu hình điểm/thưởng |
| `/admin/notifications` | Gửi thông báo (tất cả / **theo cấp độ** / một người) |

Lớp dữ liệu `src/lib/admin.js`: ưu tiên Firestore, fallback `localStorage` khi chưa cấu hình Firebase (chế độ demo).
