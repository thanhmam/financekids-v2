# AGENTS.md — Rules bắt buộc cho AI Agent & người đóng góp

> File này là **giao kèo (contract)** cho mọi AI agent (Claude Code, Cursor, Copilot…) và lập trình viên tham gia dự án XuXu. **Đọc trước khi làm bất cứ việc gì.** Vi phạm các rule dưới đây = thay đổi không được chấp nhận.

---

## 0. BẮT BUỘC ĐỌC TRƯỚC KHI LÀM (mandatory reading)

Trước khi sửa code hay nội dung, **phải đọc** các file sau theo đúng phạm vi liên quan:

| Nếu bạn định… | Bắt buộc đọc |
|---|---|
| Bất cứ việc gì | `AGENTS.md` (file này) + `README.md` |
| Sửa giao diện / thêm UI | `docs/DESIGN_SYSTEM.md` |
| Thêm/sửa tính năng, màn hình | `docs/FEATURES.md` + `PROJECT.md` |
| Sửa bài học / câu hỏi / taxonomy | `docs/CONTENT.md` |
| Đụng pipeline sinh nội dung AI | `docs/AI_AGENTS.md` + `docs/CONTENT.md` |
| Quyết định kiến trúc/stack/dữ liệu | `PROJECT.md` |

> Không đọc = không đủ ngữ cảnh. Nếu một file mâu thuẫn với code thực tế, **dừng lại và báo**, đừng tự đoán.

---

## 1. Nguồn sự thật duy nhất (Single Source of Truth)

Mỗi chủ đề chỉ có **1 file sở hữu** nội dung. Các file khác **chỉ được link tới**, **không sao chép lại** (tránh xung đột khi cập nhật lệch nhau).

| Chủ đề | SSOT |
|---|---|
| Tổng quan, stack, quick start, cấu trúc thư mục | `README.md` |
| Spec sản phẩm, yêu cầu, schema dữ liệu (Firestore), monetization, roadmap | `PROJECT.md` |
| Design system (màu, typography, component, motif) | `docs/DESIGN_SYSTEM.md` |
| Tính năng, màn hình, luồng người dùng | `docs/FEATURES.md` |
| Taxonomy (chủ đề/cấp độ/loại), schema bài học & câu hỏi, kho câu hỏi | `docs/CONTENT.md` |
| Hệ AI agent sinh nội dung (pipeline, model, prompt) | `docs/AI_AGENTS.md` |
| Lịch sử thay đổi | `CHANGELOG.md` |

**Quy tắc:** khi một thông tin đã có SSOT, ở nơi khác **chỉ viết 1 dòng + link**. Ví dụ: README không liệt kê lại bảng màu — chỉ ghi "Design system: xem `docs/DESIGN_SYSTEM.md`".

---

## 2. Strictly follow — không được vi phạm

### 2.1. Tech stack (xem `README.md` / `PROJECT.md`)
- **Next.js 16 App Router + React 18**, **Firebase** (Auth + Firestore), **Tailwind + inline styles**, **Anthropic Claude SDK** cho AI.
- **Không thêm framework/thư viện lớn mới** (state manager, UI kit, ORM…) nếu chưa cập nhật `PROJECT.md` và được chấp thuận. Ưu tiên tái dùng pattern sẵn có.
- AI: luôn dùng **model Claude mới nhất phù hợp** (mặc định Sonnet/Haiku theo `docs/AI_AGENTS.md`); key qua `ANTHROPIC_API_KEY` (server-side, không `NEXT_PUBLIC_`).

### 2.2. Design system (xem `docs/DESIGN_SYSTEM.md`)
- Màu: **chỉ dùng token** đã định nghĩa. Không tự chế màu mới.
- Chữ: **Baloo 2** (800) cho heading/nút/label, **Nunito** (600–700) cho body.
- Nút: motif **3D press** (`box-shadow: 0 4–5px 0`, `.btn-press`/`.btn3d`). Card: bo `18px`, viền `2px #ECF1E6`.
- Component mới: tham khảo `design-system/components/` trước khi tự viết. Pro tier = tím `#8B5CF6`.

### 2.3. Nội dung (xem `docs/CONTENT.md`)
- Bài học/câu hỏi phải đúng **taxonomy** (7 chủ đề × 2 cấp độ) và **schema** đã định.
- Nội dung do AI sinh phải đi qua **pipeline + duyệt admin** (`docs/AI_AGENTS.md`), tuân thủ an toàn: không khuyến nghị đầu tư cụ thể, không hứa lợi nhuận, tài sản số phải nhắc rủi ro, phù hợp trẻ em, ngữ cảnh Việt Nam.

### 2.4. Môi trường build (xem `README.md`)
- Repo đặt trên **iCloud Drive** → `next dev` đọc `node_modules` cực chậm, **không chạy dev server cục bộ**. Kiểm tra cú pháp bằng `npx esbuild <file> --bundle=false --jsx=transform --loader:.js=jsx`; build thật để **Vercel** chạy khi push `main`.
- Firestore rules **không** tự deploy qua Vercel → khi đổi `firestore.rules` phải nhắc deploy thủ công (`firebase deploy --only firestore:rules`).

---

## 3. Versioning & Changelog (kỷ luật lịch sử)

- Sau **mỗi version/thay đổi đáng kể**: **THÊM** mục mới lên đầu `CHANGELOG.md`. **Tuyệt đối không xóa/viết lại** mục cũ — giữ trọn lịch sử.
- Cập nhật **số version** ở đầu `CHANGELOG.md` (semver: `MAJOR.MINOR.PATCH`). Tính năng mới → tăng MINOR; sửa lỗi nhỏ → PATCH; thay đổi phá vỡ → MAJOR.
- **Trong cùng một thay đổi**, phải cập nhật luôn các SSOT bị ảnh hưởng (đừng để doc lệch code). Ví dụ thêm màn hình → cập nhật `docs/FEATURES.md` + `CHANGELOG.md` trong cùng commit.
- Commit message tiếng Việt/Anh đều được; kết thúc bằng trailer `Co-Authored-By:` đúng model đang dùng.

---

## 4. Checklist trước khi kết thúc một thay đổi

- [ ] Đã đọc các SSOT liên quan (mục 0).
- [ ] Code theo đúng design system + stack (mục 2).
- [ ] Đã cập nhật **đúng SSOT** (không nhân bản nội dung sang file khác).
- [ ] Đã **thêm** mục `CHANGELOG.md` + tăng version.
- [ ] Đã kiểm tra cú pháp (esbuild) cho file JS/JSX mới/sửa.
- [ ] Nếu đổi `firestore.rules` → đã ghi chú deploy thủ công.
- [ ] Nội dung AI (nếu có) đã qua duyệt + tuân thủ an toàn.

> Tóm lại: **Đọc SSOT → làm đúng rule → cập nhật đúng SSOT + CHANGELOG → không phá lịch sử.**
