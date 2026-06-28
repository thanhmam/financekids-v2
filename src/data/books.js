// Catalog sách tài chính tham khảo (bán qua link Shopee affiliate).
// Admin có thể chỉnh sửa/ghi đè qua localStorage/Firestore (xem lib/admin.js).
//
// Mỗi sách:
//  - id, title, author, cover (màu bìa CSS hoặc coverUrl ảnh thật)
//  - price (giá hiện tại), originalPrice (giá gốc, để hiện giảm giá)
//  - tagline (1 dòng hook), summary (đoạn giới thiệu), highlights (ý chính)
//  - topics (liên hệ chủ đề học), shopeeUrl (link affiliate)

export const BOOKS = [
  {
    id: "how-money-works",
    title: "How Money Works",
    author: "DK",
    emoji: "💡",
    cover: { from: "#FFD166", to: "#F4A300", ink: "#5A3D00" },
    price: 215000,
    originalPrice: 320000,
    tagline: "Cẩm nang trực quan: tiền vận hành thế nào?",
    summary:
      "Cuốn sách minh hoạ trực quan giúp bạn hiểu cách tiền dịch chuyển trong nền kinh tế — từ ngân hàng, lãi suất, đầu tư đến thị trường tài chính. Phù hợp cho người mới bắt đầu muốn nắm bức tranh tổng thể.",
    highlights: [
      "Hình ảnh hoá mọi khái niệm tài chính phức tạp",
      "Hiểu lãi suất, lạm phát, đầu tư trong vài phút",
      "Nền tảng vững trước khi đi sâu vào từng chủ đề",
    ],
    topics: ["money-basics", "personal-finance"],
    shopeeUrl: "https://shopee.vn/",
  },
  {
    id: "rich-dad-poor-dad",
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    emoji: "🏠",
    cover: { from: "#7BE0A8", to: "#0E9E5C", ink: "#063D24" },
    price: 89000,
    originalPrice: 138000,
    tagline: "Người giàu để tiền làm việc cho mình.",
    summary:
      "Cuốn sách kinh điển thay đổi tư duy về tiền của hàng triệu người. Kiyosaki so sánh hai cách dạy về tiền và chỉ ra sự khác biệt giữa tài sản và tiêu sản — chìa khoá để xây dựng tự do tài chính.",
    highlights: [
      "Phân biệt tài sản và tiêu sản",
      "Tư duy 'để tiền làm việc cho bạn'",
      "Bài học tài chính trường học không dạy",
    ],
    topics: ["money-basics", "investing"],
    shopeeUrl: "https://shopee.vn/",
  },
  {
    id: "psychology-of-money",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    emoji: "🧠",
    cover: { from: "#9FC6FF", to: "#3457B2", ink: "#0A2150" },
    price: 119000,
    originalPrice: 189000,
    tagline: "Hành vi quan trọng hơn kiến thức.",
    summary:
      "19 câu chuyện ngắn về cách con người suy nghĩ và hành xử với tiền. Housel chứng minh thành công tài chính không phải về việc bạn biết bao nhiêu, mà về cách bạn cư xử với tiền.",
    highlights: [
      "Vì sao cảm xúc chi phối quyết định tài chính",
      "Sức mạnh của lãi kép và sự kiên nhẫn",
      "Giàu có ≠ tỏ ra giàu có",
    ],
    topics: ["personal-finance", "investing"],
    shopeeUrl: "https://shopee.vn/",
  },
  {
    id: "think-and-grow-rich",
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    emoji: "🏆",
    cover: { from: "#FF9FC4", to: "#E03A4E", ink: "#5A0A1A" },
    price: 99000,
    originalPrice: 160000,
    tagline: "Tư duy làm giàu bắt đầu từ khao khát.",
    summary:
      "Đúc kết từ 20 năm nghiên cứu những người thành công nhất nước Mỹ, cuốn sách trình bày 13 nguyên tắc để biến mong muốn thành của cải — bắt đầu từ một mục tiêu rõ ràng và niềm tin mãnh liệt.",
    highlights: [
      "13 nguyên tắc làm giàu kinh điển",
      "Sức mạnh của mục tiêu và sự kiên định",
      "Biến ý tưởng thành kết quả thực tế",
    ],
    topics: ["money-basics"],
    shopeeUrl: "https://shopee.vn/",
  },
  {
    id: "millionaire-next-door",
    title: "The Millionaire Next Door",
    author: "Thomas J. Stanley",
    emoji: "📊",
    cover: { from: "#C4A8FF", to: "#6B36C9", ink: "#2A0E5A" },
    price: 109000,
    originalPrice: 175000,
    tagline: "Triệu phú thật sống giản dị hơn bạn nghĩ.",
    summary:
      "Nghiên cứu thực tế về những triệu phú Mỹ cho thấy phần lớn họ sống tiết kiệm, tránh phô trương và đầu tư kỷ luật. Cuốn sách phá vỡ huyền thoại về lối sống xa hoa của người giàu.",
    highlights: [
      "Thói quen chi tiêu của người giàu thật",
      "Tiết kiệm kỷ luật quan trọng hơn thu nhập cao",
      "Tránh 'lạm phát lối sống'",
    ],
    topics: ["saving", "personal-finance"],
    shopeeUrl: "https://shopee.vn/",
  },
  {
    id: "i-will-teach-you-to-be-rich",
    title: "I Will Teach You to Be Rich",
    author: "Ramit Sethi",
    emoji: "💸",
    cover: { from: "#7BE8D0", to: "#0A8C76", ink: "#063D33" },
    price: 129000,
    originalPrice: 199000,
    tagline: "Hệ thống tài chính tự động cho người trẻ.",
    summary:
      "Hướng dẫn 6 tuần thực chiến giúp người trẻ làm chủ tài chính: tối ưu thẻ tín dụng, tự động hoá tiết kiệm và đầu tư, chi tiêu thoải mái cho điều mình yêu thích mà vẫn giàu lên.",
    highlights: [
      "Tự động hoá tiết kiệm & đầu tư",
      "Chi tiêu không cảm thấy tội lỗi",
      "Kế hoạch 6 tuần dễ áp dụng",
    ],
    topics: ["saving", "investing"],
    shopeeUrl: "https://shopee.vn/",
  },
];

export const getBookById = (id) => BOOKS.find((b) => b.id === id);

export const formatVND = (n) =>
  typeof n === "number" ? n.toLocaleString("vi-VN") + "₫" : n;

export const discountPercent = (book) => {
  if (!book?.originalPrice || !book?.price || book.originalPrice <= book.price) return 0;
  return Math.round((1 - book.price / book.originalPrice) * 100);
};
