// ─────────────────────────────────────────────────────────────
// Nhật ký cập nhật (Change Log) — bản công khai, chọn lọc cho người dùng.
//
// ⚠️ Đây KHÔNG phải nguồn sự thật đầy đủ. Changelog đầy đủ cho dev là
//    /CHANGELOG.md (SSOT). File này chỉ chắt lọc các mốc QUAN TRỌNG, dễ hiểu
//    với người dùng cuối. Mỗi lần có cập nhật đáng kể → thêm 1 object lên ĐẦU mảng.
//
// tag: "Mới" (tính năng mới) | "Cải thiện" (nâng cấp) | "Sửa lỗi"
// ─────────────────────────────────────────────────────────────

export const RELEASES = [
  {
    version: "0.7.0",
    date: "2026-06-29",
    tag: "Mới",
    title: "Hành trình & Nhật ký cập nhật",
    items: [
      "Thêm trang \"Hành trình xây dựng XuXu\" — nơi chia sẻ các bài viết về quá trình tạo ra XuXu.",
      "Thêm trang \"Nhật ký cập nhật\" để bạn theo dõi những thay đổi quan trọng của sản phẩm.",
    ],
  },
  {
    version: "0.6.0",
    date: "2026-06-29",
    tag: "Mới",
    title: "Cá nhân hoá lộ trình học",
    items: [
      "Trả lời vài câu hỏi ngắn, XuXu sẽ gợi ý lộ trình bài học phù hợp với mục tiêu và trình độ của bạn.",
    ],
  },
  {
    version: "0.5.0",
    date: "2026-06-29",
    tag: "Mới",
    title: "Học theo sách & Cửa hàng sách",
    items: [
      "Chắt lọc tinh hoa từ các cuốn sách tài chính kinh điển ngay trong app.",
      "Cửa hàng sách với bìa, giá ưu đãi và liên kết mua hàng.",
    ],
  },
];

export const TAG_STYLES = {
  "Mới":       { bg: "#EAFBF1", color: "#0E9E5C" },
  "Cải thiện": { bg: "#F1E9FF", color: "#7C4DEC" },
  "Sửa lỗi":   { bg: "#FFF1E4", color: "#E07320" },
};

export function formatReleaseDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString("vi-VN", { day: "numeric", month: "long", year: "numeric" });
}
