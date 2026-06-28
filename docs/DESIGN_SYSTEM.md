# XuXu — Design System

> **SSOT** cho design (màu, typography, component, motif) — áp dụng cho cả app lẫn **Admin**. Mọi file khác chỉ link tới đây, không lặp lại bảng token. Nguồn token/component gốc: thư mục `design-system/`. Lịch sử thay đổi: [../CHANGELOG.md](../CHANGELOG.md). Cập nhật: 2026-06-29.

XuXu mang phong cách Duolingo: tươi sáng, bo tròn, "chunky", thân thiện. Màu chủ đạo xanh lá, accent vàng đồng xu, nút "3D press", chữ Baloo 2.

---

## 1. Color tokens

| Token | Giá trị | Dùng cho |
|---|---|---|
| Primary green | `#16C172` | CTA, progress, active, link |
| Green shadow | `#0E9E5C` | Đổ bóng 3D nút xanh, text nhấn |
| Light green | `#EAFBF1` | Nền active (nav, chip) |
| Green border | `#BFEBD2` | Viền active |
| Dark green (ink) | `#15392A` | Heading, nền card tối |
| App background | `#F4F8EF` | Nền toàn app |
| Card border | `#ECF1E6` | Viền card mặc định |
| Hint border (dashed) | `#DDE6D6` | Viền nét đứt cho mẹo/gợi ý |
| Gold | `#FFC93C` / viền `#E8A317` / bóng `#D99312` | Mascot, đồng xu, XP |
| Streak orange | `#FF8A3D` (gradient `#FF9A4D→#FF7A2E`) | Streak, nhiệm vụ |
| Heart red | `#FF5366` | Tim (lives), giảm giá |
| Gem / Pro purple | `#8B5CF6` / bóng `#7C4DEC` | Leaderboard, thử thách, Pro |
| Ice blue | `#2BA3FF` | Băng giữ streak |
| Shopee orange | `#EE4D2D` / bóng `#C13A1E` | Nút mua sách Shopee |
| Text muted | `#5B7065` | Body phụ |
| Text faint | `#9AA89E` | Caption, placeholder |

> Quy tắc: **chỉ dùng màu trong bảng này** (đồng bộ `design-system/tokens/colors.css`). Neutral luôn ám xanh nhẹ — không dùng grey thuần.

## 2. Typography

Hai font Google (hỗ trợ tiếng Việt): **Baloo 2** (heading/số/nút/label, hầu hết weight 800) và **Nunito** (body 600–700).

```
Heading lớn:  font: "800 26px 'Baloo 2'"
Sub-heading:  font: "800 16px 'Baloo 2'"
Label/nút:    font: "800 13–15px 'Baloo 2'"
Body:         font: "600 14px 'Nunito'"
Caption:      font: "600 11–12px 'Nunito'"
```

- **Casing**: heading = sentence case; **nút = UPPERCASE** (`BẮT ĐẦU`, `KIỂM TRA`); eyebrow = uppercase Nunito.
- **Số/tiền VN**: `1.250`, `50.000₫`, `+150 XP`, `+50 xu`.

## 3. Motif "3D press" (đặc trưng)

- **Nút**: nằm trên bóng đặc **không blur** — `box-shadow: 0 5px 0 <shadowColor>`; nhấn → lún `translateY(3px)` + giảm bóng.
- **Card**: viền `2px #ECF1E6`, thường thêm **viền đáy 4px**, bo `18px` (hero `22px`).
- **Progress bar**: có "shine" trắng inset `inset 0 3px 0 rgba(255,255,255,.35)`.
- Bóng mềm (có blur) **chỉ** dùng cho hover-lift & toast: `0 8px 24px rgba(21,57,42,.10)`.

## 4. Bo góc & viền

Chip/tile `12px` · nút `14–16px` · card `18px` · hero `22px` · pill tròn `999px`. Coin/avatar = hình tròn. Viền mặc định `2px solid #ECF1E6`; nét đứt `#DDE6D6` cho mẹo/empty; selected = viền màu 2px + nền tint.

## 5. Iconography

- **Không** dùng icon font/SVG set. Dùng **unicode glyph** (`⌂ ◆ ▲ ♛ ◉ ★ ❄ ♥ ✓ ✗`) render bằng Baloo 2 800, ăn màu theo ngữ cảnh.
- **Emoji** làm icon nội dung (bài học, badge, shop, chủ đề).
- **XuCoin**: đồng vàng nhỏ chữ "X" cạnh mọi số dư/thưởng.
- **XuXuMascot**: nhân vật đồng xu vẽ **hoàn toàn bằng CSS** (mood happy/excited/sad). Tái dùng component, không tự vẽ.

## 6. Animation

Mascot `float` (±8px); thưởng `pop`/overshoot `cubic-bezier(.175,.885,.32,1.275)`; hàng mới `slide-up`; confetti khi hoàn thành; progress fill `0.6s`; transition nhanh `.1–.15s`. Hover lift `-3px` (tắt trên mobile).

## 7. Components (`design-system/components/`)

- **brand/**: `XuXuMascot`, `XuCoin`
- **core/**: `Button` (3D, 6 variant), `IconTile`, `ProgressBar`, `StatPill`, `Chip`
- **feedback/**: `Badge`
- **game/**: `LessonCard`, `QuizOption`
- **navigation/**: `BottomNav`
- App-specific: `BookCover` (bìa sách CSS hoặc ảnh), `LoginModal` (modal giữa màn hình), `Dashboard`, `Landing`.

## 8. Áp dụng cho Admin

Admin dùng cùng hệ token (qua Tailwind arbitrary values + inline `font:`):

- Nền `bg-[#F4F8EF]`, sidebar trắng viền `border-[#ECF1E6]`, logo **coin XuXu + wordmark xanh**.
- Nav active: nền `#EAFBF1` + viền `#BFEBD2` + chữ `#0E9E5C` (thay cho cam cũ).
- Heading: `font: "800 26px 'Baloo 2'"`; card `rounded-[18px] border-2 border-[#ECF1E6]`.
- Nút chính: `bg-[#16C172] shadow-[0_4px_0_#0E9E5C]` + active lún; nút phụ: trắng viền `#ECF1E6`.
- Input/select: `rounded-[14px] border-2 border-[#ECF1E6] focus:border-[#16C172]`.
- Chip phân loại: chủ đề `#EAFBF1/#0E7A4E`, cấp độ `#F1E9FF/#7C4DEC`.

## 9. Quy tắc bắt buộc khi thêm tính năng

1. Màu: chỉ lấy từ bảng token (§1).
2. Chữ: Baloo 2 800 cho heading/nút, Nunito 600–700 cho body.
3. Nút: pattern 3D press (`box-shadow: 0 4–5px 0` + `.btn-press`/`.btn3d`).
4. Card: `borderRadius 18px`, viền `2px #ECF1E6`, hover lift bóng mềm.
5. Tham khảo `design-system/components/` trước khi tự viết.
6. Pro tier: tím `#8B5CF6` shadow `#7C4DEC`.
