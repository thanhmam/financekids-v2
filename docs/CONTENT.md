# XuXu — Mô hình nội dung & Kho câu hỏi

> **SSOT** cho: **taxonomy** (phân loại), **schema bài học & câu hỏi**, và **kế hoạch kho câu hỏi**. Mọi file khác chỉ trỏ về đây, không lặp lại bảng taxonomy/schema. Cách AI **sinh** nội dung: xem [AI_AGENTS.md](AI_AGENTS.md). Cập nhật: 2026-06-29.

---

## 1. Taxonomy (phân loại — nguồn chuẩn)

> **Đã bỏ phân loại theo nhóm tuổi.** Phân loại theo **Chủ đề + Cấp độ** (+ Loại câu hỏi). Định nghĩa code: `src/data/lessons.js` (`TOPICS`, `LEVELS`, `CATEGORIES`).

### 1.1. Chủ đề — `TOPICS` (7)
| Mã | Nhãn |
|---|---|
| `money-basics` | Cơ bản về tiền |
| `saving` | Tiết kiệm |
| `personal-finance` | Quản lý tài chính cá nhân |
| `borrowing` | Vay |
| `investing` | Đầu tư |
| `stocks` | Chứng khoán |
| `digital-assets` | Tài sản số |

### 1.2. Cấp độ — `LEVELS` (2)
| Mã | Nhãn | Mô tả |
|---|---|---|
| `foundation` | 🌱 Khởi đầu | Khái niệm cốt lõi, đời thường, ai cũng bắt đầu được |
| `advanced` | 🌳 Vững vàng | Ra quyết định thật, có thuật ngữ (đã giải thích), tình huống phức tạp |

### 1.3. Loại bài (lesson `category` — `CATEGORIES`)
💡 `concept` Khái niệm · ⚖️ `compare` Phân biệt · 🎯 `choice` Lựa chọn · 💳 `transaction` Giao dịch.

### 1.4. Loại câu hỏi (`type`)
| Mã | Mô tả | Component |
|---|---|---|
| `quiz` | Trắc nghiệm 1 đáp án đúng | `GameQuiz.jsx` ✅ |
| `ab` | So sánh 2 lựa chọn A/B | `GameAB.jsx` ✅ |
| `transaction` | Tính số dư qua các bước thu/chi | `GameTransaction.jsx` ✅ |
| `scenario` | *(pha 2)* tình huống nhiều bước | cần thêm |
| `true-false` | *(pha 2)* đúng/sai + giải thích | cần thêm |

### 1.5. Đối tượng (tag chéo, không phải cấp độ)
`kids` (6–12) · `teens` (13–17) · `young-adults` (18–30) · `parents` · `low-income`. Cho phép lọc "Khởi đầu cho trẻ em" vs "Khởi đầu cho người lớn".

> Field `ageGroup` còn sót trong `src/data/lessons.js` là **deprecated** — không dùng để lọc/hiển thị.

---

## 2. Schema bài học (LESSON) — `src/data/lessons.js`

45 bài tĩnh, thứ tự = thứ tự mảng (không có field `order`).

```jsonc
{
  "id": "lesson-01",
  "title": "Tiền là gì?",
  "subtitle": "Hiểu về tiền và công dụng",
  "topic": "money-basics",          // 1.1
  "level": "foundation",            // 1.2
  "category": "concept",            // 1.3
  "icon": "💰", "color": "#FFD700", "bgColor": "#FFF9E6",
  "xp": 100,
  "description": "…",
  "questions": [ /* xem §3 */ ],
  "ageGroup": "6-8"                 // DEPRECATED — bỏ qua
}
```

Helper export: `LESSONS`, `getLessonById`, `getLessonsByTopic`, `TOPICS`, `LEVELS`, `CATEGORIES`.

---

## 3. Schema câu hỏi (theo `type`)

Mỗi câu có `id`, `type`, `question`, `image` (emoji), `explanation`. Phần riêng theo loại:

**`quiz`** — `options: [{text, emoji}]` + `correct` (index đáp án đúng).
**`ab`** — `optionA/optionB: {emoji, title, description}` + `bestChoice: "A"|"B"`.
**`transaction`** — `scenario`, `steps`, `correctAnswer` (số dư đúng).

---

## 4. Kho câu hỏi (`question_bank`) — tái sử dụng nguyên tử

Tách khỏi `LESSONS` tĩnh: mỗi **item = 1 câu hỏi** độc lập, gắn metadata để lắp ghép thành bài học / "tuyến theo sách" / quiz marketing.

- Dữ liệu pilot hiện tại: `data/question-bank.json` (30 câu mẫu, đã sinh & chấm).
- Đích lưu trữ: Firestore collection `question_bank/{id}`, `status: draft → approved → published | rejected`.

### Schema item kho
```jsonc
{
  "id": "qb-money-basics-foundation-0001",
  "topic": "money-basics", "level": "foundation",
  "audience": ["kids","parents","low-income"],
  "type": "quiz", "difficulty": 1,
  "question": "…", "image": "💵",
  // field theo type (giống §3): options/correct · optionA/B/bestChoice · scenario/steps/correctAnswer
  "explanation": "…",
  "skills": ["money-functions"],          // mục tiêu học: budgeting, compound-interest, risk…
  "bookRefs": ["how-money-works"],         // ánh xạ sách (xem docs/FEATURES.md §Cửa hàng sách)
  "marketingHook": "Tiền không tự sinh ra…",  // 1 câu insight chia sẻ được
  "channelHint": "tiktok",
  "vnContext": true, "source": "agent",
  "status": "draft", "reviewScore": 0, "createdAt": 0
}
```
Tương thích ngược schema bài học (quiz/ab/transaction giữ nguyên field) → item duyệt xong gom thẳng vào `LESSONS`.

---

## 5. Nguyên tắc nội dung (bắt buộc)

- **Đại chúng & tiếng Việt**: ví dụ đời thường, bối cảnh VN (chợ, lương, tiền Tết, hóa đơn điện, gửi tiết kiệm…), số tiền VNĐ thực tế; không thuật ngữ khó nếu chưa giải thích.
- **An toàn**: không khuyến nghị đầu tư cụ thể, không hứa lợi nhuận; **tài sản số phải nhắc rủi ro**; phù hợp trẻ em.
- **Khác biệt**: chống trùng lặp (so `avoidList` + hash chuẩn hóa); mục tiêu trùng < 3%.

---

## 6. Kế hoạch xây kho ~500 câu

> Trạng thái: **đã chốt spec (2026-06-28)** — Cấp độ Khởi đầu/Vững vàng · ~500 câu · Pilot trước → duyệt → chạy full. Sinh qua pipeline (xem [AI_AGENTS.md](AI_AGENTS.md)), dừng ở hàng đợi **Admin duyệt** trước khi publish.

### Ma trận phân bổ (~500)
| Chủ đề | Khởi đầu | Vững vàng | Tổng |
|--------|:--------:|:---------:|:----:|
| Cơ bản về tiền | 50 | 20 | 70 |
| Tiết kiệm | 45 | 30 | 75 |
| Quản lý tài chính cá nhân | 45 | 40 | 85 |
| Vay | 30 | 35 | 65 |
| Đầu tư | 25 | 50 | 75 |
| Chứng khoán | 20 | 50 | 70 |
| Tài sản số | 20 | 40 | 60 |
| **Tổng** | **235** | **265** | **500** |

Tỷ lệ type gợi ý mỗi ô: 55% `quiz`, 30% `ab`, 15% `transaction`. Sinh theo lô 8 câu (~63 lô).

### Lộ trình theo pha
| Pha | Nội dung | Sản phẩm |
|---|---|---|
| 0. Spec | Duyệt taxonomy/schema/prompt | Bộ yêu cầu cố định |
| 1. Pilot | ~24 câu 3 ô đại diện | Kiểm định chất lượng + chi phí (đã có 30 câu mẫu) |
| 2. Khởi đầu | Sinh hết ~235 câu foundation | Phủ trẻ em + người mới |
| 3. Vững vàng | Sinh hết ~265 câu advanced | Phủ chuyên sâu |
| 4. Tuyến theo sách | Gắn `bookRefs` → "khóa theo sách" | Lộ trình học theo sách nổi tiếng |
| 5. Marketing | Trích `marketingHook` → thẻ social/mini-quiz | Kho nội dung quảng bá |

### Definition of Done
- [ ] ≥ 450 câu `published`, phủ đủ 7 chủ đề × 2 cấp (không ô = 0).
- [ ] Mỗi câu đủ field, `reviewScore ≥ 80`, có `explanation` + `marketingHook`.
- [ ] Trùng lặp < 3%; ≥ 90% câu Khởi đầu đọc được không cần kiến thức nền.
- [ ] Tài sản số: 100% câu nhắc rủi ro, không hứa lợi nhuận.
- [ ] Xuất được ≥ 1 "tuyến theo sách" mẫu.
