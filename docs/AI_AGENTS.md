# XuXu — Hệ AI Agent sinh nội dung

> **SSOT** cho hệ AI agent **tạo nội dung** (bài học & kho câu hỏi): pipeline, model, prompt, cách chạy & mở rộng. Schema/taxonomy của nội dung: xem [CONTENT.md](CONTENT.md). Cập nhật: 2026-06-29.

---

## 1. Tổng quan

XuXu dùng **Anthropic Claude** để sinh nội dung học, theo mô hình **nhiều agent nối tiếp** (multi-agent pipeline): soạn → thẩm định → biên tập. Mọi sản phẩm AI là **bản nháp**, **bắt buộc qua duyệt admin** trước khi vào app.

- SDK: `@anthropic-ai/sdk`. Key: `ANTHROPIC_API_KEY` (**server-side only**, không `NEXT_PUBLIC_`).
- Luôn dùng **model Claude mới nhất phù hợp** (cập nhật khi có bản mới — xem AGENTS.md §2.1).

## 2. Files

| File | Vai trò |
|---|---|
| `src/lib/agents/claude.js` | `callClaude({model, systemPrompt, userMessage})` — gọi Claude, bật **prompt caching** (`cache_control`), strip code fence, `JSON.parse` kết quả |
| `src/lib/agents/orchestrate.js` | `runPipeline()` cho **bài học đơn** (3 agent: Content → Review → Design), retry tối đa 3 lần theo `issues` |
| `src/lib/agents/prompts.js` | System prompt cho pipeline bài học (Content / Review / Design) |
| `src/lib/agents/library-prompts.js` | System prompt + taxonomy cho pipeline **kho câu hỏi** (`question_bank`) |
| `src/app/api/agents/orchestrate/route.js` | API route `POST` chạy pipeline (server) |
| `src/app/admin/ai/page.js` | UI admin: chọn **Cấp độ + Chủ đề** + nội dung → chạy pipeline → xem JSON → "Lưu nháp" |

## 3. Pipeline bài học (`orchestrate.js`)

```
Input { ageGroup|audience, topic, lessonId }
  │
  ▼ Agent 1 — Content  (Haiku)     CONTENT_SYSTEM_PROMPT → bản nháp bài học JSON
  ▼ Agent 2 — Review   (Sonnet)    REVIEW_SYSTEM_PROMPT  → { approved, score, issues[], revisedLesson }
  │     approved → dùng revisedLesson; else feed issues, retry (tối đa 3 lần)
  ▼ Agent 3 — Design   (Sonnet)    DESIGN_SYSTEM_PROMPT  → thêm SVG/animation
  ▼ Output { success, lesson }  → admin duyệt
```

> Lưu ý: `route.js` hiện nhận tham số `ageGroup` (legacy). UI admin truyền nhãn **cấp độ** ("Khởi đầu/Vững vàng") + chủ đề vào trường này — xem `src/app/admin/ai/page.js`. Khi refactor, giữ tương thích hoặc cập nhật cả route + prompt + doc cùng lúc.

## 4. Pipeline kho câu hỏi (`library-prompts.js` + [CONTENT.md §6](CONTENT.md))

Mở rộng pipeline trên cho **item nguyên tử** (`question_bank`), sinh theo lô (topic × level × type × count):

```
Agent 1 — Soạn thảo (Haiku)   → mảng item thô đúng schema, KHÔNG trùng avoidList
Agent 2 — Thẩm định (Sonnet)  → chấm 0–100 (chính xác · đúng cấp độ · ngữ cảnh VN ·
                                 an toàn trẻ em · khác biệt · hợp lệ schema)
Agent 3 — Biên tập (Sonnet)   → thêm image, skills, difficulty, bookRefs,
                                 marketingHook, channelHint
→ Firestore question_bank/{id} status='draft' → Admin duyệt → 'published'
```

- **Ngưỡng duyệt:** `reviewScore ≥ 80`; < 80 → sinh lại (tối đa 2 lần) với `issues` làm hướng dẫn.
- **Chống trùng:** đọc câu đã có cùng `topic+level` làm `avoidList`; Agent 2 chấm "độ khác biệt"; lưu hash chuẩn hóa chặn trùng ở DB.

## 5. An toàn nội dung (bắt buộc — xem [CONTENT.md §5](CONTENT.md))

Mọi prompt phải ràng buộc: tiếng Việt đại chúng, ngữ cảnh VN; **không** khuyến nghị đầu tư cụ thể / hứa lợi nhuận; **tài sản số phải nhắc rủi ro**; phù hợp trẻ em. Agent 2 (Review) là chốt chặn — loại câu vi phạm.

## 6. Chi phí (ước tính)

- ~500 câu, lô 8 → ~63 lô × 3 agent. Content (Haiku) rẻ; Review + Design (Sonnet) là phần lớn chi phí; prompt caching giảm ~60% input cost. **Tổng dự kiến ~4–7 USD** cho toàn bộ (1 lần, chưa kể retry). Luôn chạy **Pilot** đo thực tế trước khi chạy full.

## 7. Mở rộng — checklist khi sửa hệ agent

- [ ] Thay đổi schema output → cập nhật [CONTENT.md](CONTENT.md) (SSOT schema) cùng lúc.
- [ ] Đổi model → cập nhật doc này + kiểm tra `claude.js` default.
- [ ] Thêm loại câu hỏi (`scenario`/`true-false`) → thêm component game + cập nhật CONTENT.md §1.4.
- [ ] Giữ "duyệt admin trước khi publish" — không bao giờ publish thẳng từ AI.
- [ ] Ghi `CHANGELOG.md`.
