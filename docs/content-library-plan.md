# Kế hoạch: Kho thư viện câu hỏi & bài tập tài chính (3-Agent)

> Trạng thái: **DỰ THẢO — chờ duyệt**. Sau khi duyệt, đây là bộ yêu cầu để 3 agent thực thi và lưu vào kho thư viện (`question_bank` trên Firestore).
> Mục tiêu: **~500 câu hỏi/bài tập** (chốt) chất lượng cao, tiếng Việt, ngữ cảnh Việt Nam, dễ tiếp cận đại chúng.
>
> **Quyết định đã chốt (2026-06-28):** Cấp độ = **Khởi đầu / Vững vàng** · Mục tiêu = **~500 câu** · Triển khai = **Pilot (~24 câu) trước → duyệt → chạy full**.

---

## 1. Mục tiêu & nguyên tắc

- **Đối tượng:** trẻ em, người trẻ, bố mẹ, người thu nhập thấp–trung bình. Ngôn ngữ đời thường, ví dụ gần gũi (chợ, lương, hóa đơn điện, tiền Tết, gửi tiết kiệm ngân hàng, vay mua xe…), **không thuật ngữ khó nếu chưa giải thích**.
- **Đại chúng:** mỗi câu hỏi phải hiểu được mà không cần kiến thức nền. Số tiền dùng VNĐ thực tế theo bối cảnh.
- **Tái sử dụng:** kho là các **item nguyên tử** (1 câu hỏi = 1 bản ghi). Sau đó lắp ghép thành bài học, "tuyến theo sách", chuỗi quiz marketing.
- **Trung lập & an toàn:** không khuyến nghị đầu tư cụ thể, không hứa lợi nhuận; tài sản số nhấn mạnh rủi ro. Phù hợp trẻ em.

---

## 2. Taxonomy (phân loại)

### 2.1. Chủ đề (7)
| Mã | Chủ đề |
|----|--------|
| `money-basics` | Cơ bản về tiền |
| `saving` | Tiết kiệm |
| `personal-finance` | Quản lý tài chính cá nhân |
| `borrowing` | Vay |
| `investing` | Đầu tư |
| `stocks` | Chứng khoán |
| `digital-assets` | Tài sản số |

### 2.2. Cấp độ (2) — *đề xuất tên gọi*
Tên cũ "cơ bản / nâng cao" hơi khô và dễ khiến người lớn thấy "trẻ con". Đề xuất tên theo hành trình, hợp cả trẻ em lẫn người lớn:

| Mã | Tên (đã chốt) | Mô tả |
|----|---------------|-------|
| `foundation` | **Khởi đầu** 🌱 | Khái niệm cốt lõi, đời thường, ai cũng bắt đầu được |
| `advanced` | **Vững vàng** 🌳 | Ra quyết định thật, có thuật ngữ (đã giải thích), tình huống phức tạp |

> *Tùy chọn tương lai:* có thể chèn cấp giữa **"Ứng dụng" 🌿**. Hiện giữ **2 cấp**.

### 2.3. Đối tượng phù hợp (tag chéo, không phải cấp độ)
Mỗi item gắn 1+ tag: `kids` (6–12), `teens` (13–17), `young-adults` (18–30), `parents`, `low-income`.
→ Cho phép lọc "nội dung Khởi đầu dành cho trẻ em" vs "Khởi đầu cho người lớn mới bắt đầu".

### 2.4. Loại câu hỏi (type)
| Mã | Mô tả | Đã có component |
|----|-------|-----------------|
| `quiz` | Trắc nghiệm 1 đáp án đúng | ✅ |
| `ab` | So sánh 2 lựa chọn A/B | ✅ |
| `transaction` | Tính số dư qua các bước thu/chi | ✅ |
| `scenario` | *(mới)* tình huống nhiều bước ra quyết định | cần thêm |
| `true-false` | *(mới)* đúng/sai + giải thích | cần thêm |

> Giai đoạn 1 chỉ dùng 3 loại đã có để tái dùng UI. `scenario`/`true-false` để pha 2.

### 2.5. Thẻ phụ (metadata)
- `difficulty`: 1–5 (trong mỗi cấp độ vẫn có thang khó dễ)
- `skills`: mục tiêu học, ví dụ `budgeting`, `compound-interest`, `risk`, `diversification`, `debt-management`, `emergency-fund`…
- `bookRefs`: ánh xạ tới sách nổi tiếng (vd `how-money-works`, `rich-dad-poor-dad`, `psychology-of-money`, `richest-man-babylon`) — phục vụ "tuyến theo sách"
- `marketingHook`: 1 câu insight chia sẻ được (cho thẻ social "Bạn có biết?")
- `channelHint`: kênh quảng bá gợi ý (`tiktok`, `facebook`, `zalo`, `infographic`)

---

## 3. Schema 1 item trong kho

```jsonc
{
  "id": "qb-money-basics-foundation-0001",
  "topic": "money-basics",
  "level": "foundation",
  "audience": ["kids", "parents", "low-income"],
  "type": "quiz",
  "difficulty": 1,
  "question": "…",
  "image": "💰",
  // theo từng type: options/correct (quiz); optionA/optionB/bestChoice (ab);
  //                 scenario/steps/correctAnswer (transaction)
  "explanation": "…",
  "skills": ["money-functions"],
  "bookRefs": ["how-money-works"],
  "marketingHook": "Tiền không tự sinh ra — nó là công sức được quy đổi.",
  "channelHint": "tiktok",
  "vnContext": true,
  "source": "agent",
  "status": "draft",          // draft → approved → published | rejected
  "reviewScore": 0,            // 0–100 do Agent 2 chấm
  "createdAt": 0
}
```

Tương thích ngược với schema bài học hiện tại (quiz/ab/transaction giữ nguyên field), nên item duyệt xong có thể gom thẳng vào `LESSONS`.

---

## 4. Hệ 3 Agent (mở rộng pipeline hiện có)

```
Ma trận sinh (topic × level × type × số lượng)
        │
   ┌────▼─────────────┐   Agent 1 — SOẠN THẢO (Content Writer)
   │ claude-haiku-4-5 │   In: {topic, level, type, audience, count, avoidList}
   └────┬─────────────┘   Out: mảng item thô đúng schema
        │
   ┌────▼─────────────┐   Agent 2 — THẨM ĐỊNH (Reviewer / QA)
   │ claude-sonnet-4-6│   Chấm: chính xác · đúng cấp độ · ngữ cảnh VN ·
   └────┬─────────────┘   an toàn trẻ em · TRÙNG LẶP (so avoidList) · schema
        │                 Out: {approved, score, issues, revisedItem} mỗi item
        │  (loại < ngưỡng / trùng → bỏ; sửa nhẹ → giữ)
   ┌────▼─────────────┐   Agent 3 — BIÊN TẬP & GẮN THẺ (Editor/Tagger)
   │ claude-sonnet-4-6│   Thêm: image/illustration, skills, difficulty,
   └────┬─────────────┘   bookRefs, marketingHook, channelHint
        │
   ▼  Lưu Firestore `question_bank/{id}` status='draft' → Admin duyệt → 'published'
```

**Ngưỡng duyệt:** `reviewScore ≥ 80` mới qua. < 80 → Agent 1 sinh lại (tối đa 2 lần) với `issues` làm hướng dẫn.

**Chống trùng lặp (quan trọng để đạt 300–500 câu thật sự khác nhau):**
- Trước mỗi lô, đọc các `question` đã có cùng `topic+level`, đưa vào `avoidList` (tóm tắt/normalize).
- Agent 2 chấm thêm tiêu chí "khác biệt"; trùng ý → loại.
- Lưu thêm hash chuẩn hóa câu hỏi để chặn trùng ở tầng DB.

---

## 5. Ma trận phân bổ (đạt ~420 câu, nằm trong 300–500)

Ưu tiên chủ đề thiết thực với đại chúng ở cấp **Khởi đầu**; chủ đề chuyên sâu dồn vào **Vững vàng**.

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

Tỷ lệ loại type mỗi ô (gợi ý): 55% `quiz`, 30% `ab`, 15% `transaction`.
Sinh theo lô 8 câu/lần → ~63 lô.

**Pilot (pha 1):** chạy trước 3 ô đại diện — *Cơ bản về tiền × Khởi đầu*, *Đầu tư × Vững vàng*, *Tài sản số × Vững vàng* (~24 câu) để đo chất lượng + chi phí, kiểm tra chống trùng & an toàn, rồi mới chạy phần còn lại.

---

## 6. Lưu trữ & liên kết app

- Collection mới `question_bank` (tách khỏi `LESSONS` tĩnh).
- Tái dùng **lớp admin đã có**: bản nháp hiện ở mục **Nội dung bài học → chờ duyệt**; bổ sung bộ lọc theo `topic/level`.
- Khi duyệt: item `published` → script `assemble-lessons` gom theo `topic/level/book` thành bài học/khóa rồi xuất vào app.

---

## 7. Lộ trình phát triển nội dung (tự động, theo pha)

| Pha | Nội dung | Sản phẩm |
|-----|----------|----------|
| **0. Chốt spec** | Duyệt tài liệu này (taxonomy, schema, prompt) | Bộ yêu cầu cố định |
| **1. Pilot** | Chạy 2 ô (vd Cơ bản về tiền × 2 cấp), ~24 câu | Kiểm định chất lượng + chi phí thực |
| **2. Khởi đầu (Foundation)** | Sinh hết 185 câu cấp Khởi đầu | Nền tảng phủ trẻ em + người mới |
| **3. Vững vàng (Advanced)** | Sinh hết 185 câu cấp Vững vàng | Phủ chuyên sâu |
| **4. Tuyến theo sách** | Pass gắn `bookRefs`, gom thành "khóa theo sách" (How Money Works, Psychology of Money…) | Lộ trình học theo sách nổi tiếng |
| **5. Marketing** | Trích `marketingHook` → thẻ social, mini-quiz, chuỗi theo đối tượng | Kho nội dung quảng bá |

Mỗi pha tự chạy qua orchestrator + dừng ở hàng đợi **Admin duyệt** trước khi publish.

---

## 8. Nội dung phục vụ marketing (đồng hành ngay từ khâu sinh)

Agent 3 gắn sẵn dữ liệu để tái dùng quảng bá — không phải làm lại:
- **Thẻ "Bạn có biết?"**: mỗi câu → 1 `marketingHook` chia sẻ được (infographic/TikTok/Facebook/Zalo).
- **Mini-quiz theo đối tượng**: lọc theo `audience` (vd "Quiz tiền cho bố mẹ", "Tiết kiệm cho người thu nhập thấp").
- **Tuyến theo sách = nam châm thu hút**: "Học How Money Works qua 30 câu hỏi" làm lead magnet.
- **Chuỗi theo chủ đề**: 7 chủ đề × thẻ hằng ngày = lịch nội dung sẵn.
- `channelHint` gợi ý kênh để lên lịch đăng tự động sau này.

---

## 9. Ước tính chi phí (mô hình hiện tại)

| Hạng mục | Ước tính |
|----------|----------|
| ~500 câu, lô 8 câu | ~63 lô × 3 agent |
| Content (Haiku) | rẻ, ~70% tiết kiệm so Sonnet |
| Review + Design (Sonnet) | phần lớn chi phí |
| Prompt caching | giảm ~60% input cost |
| **Tổng dự kiến** | **~4–7 USD** cho toàn bộ ~500 câu (1 lần, chưa kể retry) |

> Pilot pha 1 (~24 câu) để đo chính xác trước khi chạy full.

---

## 10. Bộ yêu cầu cho từng Agent (tóm tắt để viết prompt)

**Agent 1 — Soạn thảo:** tiếng Việt; đúng `topic/level/type/audience`; ví dụ VNĐ & bối cảnh VN; trả JSON mảng đúng schema; KHÔNG trùng `avoidList`; trẻ em an toàn; không khuyến nghị đầu tư cụ thể.

**Agent 2 — Thẩm định:** chấm 0–100 theo 6 tiêu chí (chính xác tài chính, đúng cấp độ, ngữ cảnh VN, an toàn/đại chúng, độ khác biệt, hợp lệ schema); trả `{approved, score, issues[], revisedItem}`; loại trùng & sai.

**Agent 3 — Biên tập & gắn thẻ:** thêm `image`, `skills`, `difficulty`, `bookRefs`, `marketingHook`, `channelHint`; đảm bảo `marketingHook` ngắn, hấp dẫn, đúng sự thật.

---

## 11. Tiêu chí nghiệm thu (Definition of Done)

- [ ] ≥ 450 câu `published` (mục tiêu ~500), phủ đủ 7 chủ đề × 2 cấp (không ô nào = 0)
- [ ] Mỗi câu: đủ field schema, `reviewScore ≥ 80`, có `explanation` + `marketingHook`
- [ ] Tỷ lệ trùng lặp < 3% (theo hash chuẩn hóa)
- [ ] ≥ 90% câu cấp Khởi đầu đọc được không cần kiến thức nền (Agent 2 xác nhận)
- [ ] Tài sản số: 100% câu có nhắc rủi ro; không câu nào hứa lợi nhuận
- [ ] Xuất được ≥ 1 "tuyến theo sách" mẫu từ kho
```
