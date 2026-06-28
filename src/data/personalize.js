// Cấu hình cá nhân hóa lộ trình học.
// "AI" thực chất là rule-based: câu trả lời → tập chủ đề + cấp độ → lọc thư viện bài học.

// Số lần "Thiết kế lại" miễn phí cho người dùng thường (không Pro).
// Lần sinh lộ trình đầu tiên KHÔNG tính vào đây.
export const MAX_FREE_REDESIGNS = 1;

// 3 câu hỏi — ít nhánh, mỗi câu chọn 1 đáp án.
export const QUESTIONS = [
  {
    id: "goal",
    title: "Mục tiêu chính của bạn là gì?",
    subtitle: "Chọn điều bạn quan tâm nhất lúc này",
    options: [
      { value: "save",    emoji: "🐷", label: "Tiết kiệm tiền",        desc: "Để dành cho mục tiêu của mình",   topics: ["saving", "money-basics"] },
      { value: "manage",  emoji: "🧾", label: "Quản lý chi tiêu",       desc: "Tiêu hợp lý, không cháy túi",      topics: ["personal-finance", "money-basics"] },
      { value: "invest",  emoji: "📈", label: "Bắt đầu đầu tư",         desc: "Cho tiền sinh lời",                topics: ["investing", "stocks", "money-basics"] },
      { value: "basics",  emoji: "💡", label: "Hiểu cơ bản về tiền",    desc: "Nền tảng cho người mới",           topics: ["money-basics"] },
      { value: "digital", emoji: "🪙", label: "Tìm hiểu tài sản số",    desc: "Tiền số, ví điện tử…",             topics: ["digital-assets", "money-basics"] },
    ],
  },
  {
    id: "level",
    title: "Bạn đang ở mức nào?",
    subtitle: "Để XuXu chọn độ khó phù hợp",
    options: [
      { value: "foundation", emoji: "🌱", label: "Mới bắt đầu",     desc: "Học từ những điều cơ bản nhất",  level: "foundation" },
      { value: "advanced",   emoji: "🌳", label: "Đã có nền tảng",  desc: "Sẵn sàng cho nội dung nâng cao", level: "advanced" },
    ],
  },
  {
    id: "pace",
    title: "Mỗi ngày bạn muốn học bao nhiêu?",
    subtitle: "Giữ thói quen đều đặn là chìa khoá",
    options: [
      { value: "light",  emoji: "☕", label: "1 bài / ngày",  desc: "Nhẹ nhàng, vừa sức",       perDay: 1 },
      { value: "normal", emoji: "🔥", label: "2–3 bài / ngày", desc: "Tiến bộ đều mỗi ngày",     perDay: 3 },
      { value: "intense",emoji: "🚀", label: "5+ bài / ngày",  desc: "Bứt tốc, học nhanh",       perDay: 5 },
    ],
  },
];

// Nhãn gọn cho mục tiêu (dùng trong câu tóm tắt lộ trình)
export const GOAL_LABEL = {
  save: "Tiết kiệm tiền",
  manage: "Quản lý chi tiêu",
  invest: "Bắt đầu đầu tư",
  basics: "Hiểu cơ bản về tiền",
  digital: "Tìm hiểu tài sản số",
};
