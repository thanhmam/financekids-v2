/* Sample content lifted from the XuXu app (src/data/lessons.js, shop, leaderboard).
   Exposed on window for the kit's babel scripts. */
window.XUXU_DATA = {
  user: { name: "Minh", streak: 7, xu: 1250, xp: 3200, joined: "03/2026" },

  lessons: [
    {
      id: "lesson-01", title: "Tiền là gì?", subtitle: "Hiểu về tiền và công dụng",
      ageGroup: "6-8", icon: "💰", bgColor: "#FFF9E6", xp: 100,
      questions: [
        { question: "Tiền dùng để làm gì?", image: "💰",
          options: ["Mua đồ ăn, quần áo và đồ chơi", "Dùng để vẽ tranh", "Dùng để uống", "Dùng để gối đầu ngủ"],
          correct: 0, explanation: "Đúng rồi! Tiền giúp chúng ta mua những thứ cần như đồ ăn, quần áo, và những thứ mình thích! 🌟" },
        { question: "Ai kiếm ra tiền cho gia đình?", image: "👨‍👩‍👧‍👦",
          options: ["Chỉ có ông già Noel", "Ba mẹ đi làm kiếm tiền", "Tiền từ trên trời rơi xuống", "Máy ATM tự in ra"],
          correct: 1, explanation: "Ba mẹ đi làm việc để kiếm tiền nuôi gia đình. Đó là lý do công việc rất quan trọng! 💪" },
        { question: "Nếu có 10.000đ, con nên làm gì?", image: "🤔",
          options: ["Mua kem ăn ngay", "Bỏ vào heo đất để dành", "Làm rơi mất", "Xé nhỏ ra"],
          correct: 1, explanation: "Nếu tiết kiệm, con có thể mua được thứ to hơn sau này. Đó gọi là TIẾT KIỆM! 🐷" },
      ],
    },
    {
      id: "lesson-02", title: "Cần và Muốn", subtitle: "Phân biệt thứ cần thiết và thứ muốn",
      ageGroup: "6-8", icon: "⚖️", bgColor: "#E8F5E9", xp: 120,
      questions: [
        { question: "Thứ nào là thứ CẦN THIẾT (phải có)?", image: "🏠",
          options: ["Đồ chơi robot mới", "Cơm ăn mỗi ngày", "Điện thoại xịn", "Giày sneaker đắt tiền"],
          correct: 1, explanation: "Cơm ăn là thứ CẦN THIẾT — không có sẽ bị đói! Đồ chơi là thứ MUỐN CÓ. 🍚" },
        { question: "Khi tiền không đủ, nên mua gì trước?", image: "💭",
          options: ["Thứ đắt nhất trước", "Thứ mình thích nhất", "Thứ cần thiết trước", "Không mua gì cả"],
          correct: 2, explanation: "Luôn mua thứ CẦN THIẾT trước, sau đó mới nghĩ đến thứ MUỐN CÓ. Dùng tiền thông minh! 🧠" },
      ],
    },
    {
      id: "lesson-03", title: "Heo Đất Thần Kỳ", subtitle: "Học về tiết kiệm tiền",
      ageGroup: "6-8", icon: "🐷", bgColor: "#FCE4EC", xp: 150,
      questions: [
        { question: "Tiết kiệm tiền nghĩa là gì?", image: "🐷",
          options: ["Tiêu hết thật nhanh", "Để dành một phần tiền lại", "Cho hết bạn bè", "Giấu tiền rồi quên"],
          correct: 1, explanation: "Tiết kiệm là để dành một phần tiền lại cho tương lai. Heo đất giúp mình làm điều đó! 🐷" },
      ],
    },
    {
      id: "lesson-14", title: "Thu Nhập & Chi Tiêu", subtitle: "Quản lý tiền vào và tiền ra",
      ageGroup: "9-12", icon: "📊", bgColor: "#E3F2FD", xp: 150,
      questions: [
        { question: "Thu nhập là gì?", image: "💼",
          options: ["Tiền mình tiêu mỗi ngày", "Tiền mình kiếm được hoặc nhận được", "Tiền mình vay người khác", "Tiền trong ATM"],
          correct: 1, explanation: "Thu nhập là TẤT CẢ tiền bạn nhận được: lương, tiền thưởng, tiền lì xì… 💰" },
        { question: "Nhận 500.000đ, cách nào tốt hơn?", image: "💭",
          options: ["Tiêu hết luôn", "Lập kế hoạch: 60% tiêu, 30% tiết kiệm, 10% từ thiện", "Cho bạn mượn hết", "Đốt đi"],
          correct: 1, explanation: "Lập kế hoạch trước khi tiêu giúp bạn không bao giờ hết tiền. Đó là LẬP NGÂN SÁCH! 📊" },
      ],
    },
    {
      id: "lesson-15", title: "Ngân Hàng Là Gì?", subtitle: "Hiểu về vai trò của ngân hàng",
      ageGroup: "9-12", icon: "🏦", bgColor: "#F3E5F5", xp: 160,
      questions: [
        { question: "Ngân hàng làm gì với tiền bạn gửi vào?", image: "🏦",
          options: ["Cất vào két và không làm gì", "Cho người khác vay và trả lãi cho bạn", "Mang đi đốt", "Chia cho nhân viên"],
          correct: 1, explanation: "Ngân hàng dùng tiền gửi để cho vay, đổi lại trả cho bạn TIỀN LÃI. Cả hai cùng lợi! 💹" },
      ],
    },
    {
      id: "lesson-30", title: "Lãi Kép Kỳ Diệu", subtitle: "Sức mạnh của thời gian",
      ageGroup: "13-16", icon: "📈", bgColor: "#EDE7F6", xp: 200,
      questions: [
        { question: "Lãi kép là gì?", image: "📈",
          options: ["Lãi tính trên cả vốn lẫn lãi đã có", "Lãi chỉ tính trên vốn ban đầu", "Một loại thuế", "Phí ngân hàng"],
          correct: 0, explanation: "Lãi kép = lãi đẻ ra lãi! Đầu tư càng sớm, tiền càng lớn theo thời gian. ⏳" },
      ],
    },
  ],

  ageGroups: [
    { value: "all", label: "Tất cả", emoji: "✨" },
    { value: "6-8", label: "6-8 tuổi", emoji: "🧒" },
    { value: "9-12", label: "9-12 tuổi", emoji: "👦" },
    { value: "13-16", label: "13-16 tuổi", emoji: "🧑" },
  ],

  shop: [
    { id: "heart_refill", icon: "♥", iconBg: "#FFE3E7", iconColor: "#FF5366", name: "Hồi đầy tim", desc: "Tiếp tục học ngay", price: 350 },
    { id: "streak_freeze", icon: "❄", iconBg: "#E9F3FF", iconColor: "#2BA3FF", name: "Băng giữ streak", desc: "Bảo vệ 1 ngày lỡ quên", price: 120 },
    { id: "xp_boost", icon: "★", iconBg: "#FFF3DC", iconColor: "#FF8A3D", name: "Nhân đôi XP · 15'", desc: "Cày điểm thần tốc", price: 200 },
    { id: "skin", icon: "◑", iconBg: "#F1E9FF", iconColor: "#8B5CF6", name: "Đổi diện mạo XuXu", desc: "Mũ & phụ kiện mới", price: 500 },
    { id: "unlock_invest", icon: "▲", iconBg: "#F1E9FF", iconColor: "#7C4DEC", name: "Mở chủ đề Đầu tư", desc: "Truy cập sớm 6 bài học", price: 120 },
    { id: "combo_save", icon: "◈", iconBg: "#FFF8E6", iconColor: "#E8A317", name: "Combo tiết kiệm", desc: "5 băng + 3 hồi tim", price: 800 },
  ],

  leaderboard: [
    { name: "Bảo Anh", avatar: "🦊", xp: 4820 },
    { name: "Khang", avatar: "🐯", xp: 4310 },
    { name: "Minh", avatar: "🐷", xp: 3200, me: true },
    { name: "Linh", avatar: "🐰", xp: 2950 },
    { name: "Phúc", avatar: "🐼", xp: 2610 },
    { name: "Hà My", avatar: "🐱", xp: 2200 },
    { name: "Tuấn", avatar: "🐶", xp: 1980 },
    { name: "Ngọc", avatar: "🐨", xp: 1540 },
  ],

  badges: [
    { id: "first_lesson", emoji: "🌱", name: "Bắt đầu", tone: "green", earned: true },
    { id: "five_lessons", emoji: "📚", name: "Chăm chỉ", tone: "info", earned: true },
    { id: "ten_lessons", emoji: "🎓", name: "Nhà tài chính nhí", tone: "violet", earned: true },
    { id: "twenty_lessons", emoji: "🚀", name: "Đang lên", tone: "streak", earned: false },
    { id: "xp_500", emoji: "⭐", name: "500 XP", tone: "gold", earned: true },
    { id: "xp_1000", emoji: "🌟", name: "1000 XP", tone: "streak", earned: true },
    { id: "xp_2000", emoji: "💎", name: "2000 XP", tone: "violet", earned: true },
    { id: "all_ages", emoji: "🌈", name: "Toàn năng", tone: "life", earned: false },
  ],

  topics: [
    { id: "saving", label: "Tiết kiệm", icon: "◆", bg: "#E3F7EC", iconColor: "#0E9E5C", titleColor: "#0E5A38", subColor: "#5BA882", sub: "3/3 bài · Xong" },
    { id: "budget", label: "Ngân sách", icon: "▦", bg: "#FFEEDD", iconColor: "#E07320", titleColor: "#9A4E12", subColor: "#C2854D", sub: "1/3 bài" },
    { id: "invest", label: "Đầu tư", icon: "▲", bg: "#F1E9FF", iconColor: "#7C4DEC", titleColor: "#4F2BA8", subColor: "#8B6FD0", sub: "Khoá · 120 xu", locked: true },
    { id: "debt", label: "Tránh nợ", icon: "◉", bg: "#FFE3E7", iconColor: "#E03A4E", titleColor: "#A11F30", subColor: "#D2697A", sub: "Khoá", locked: true },
    { id: "credit", label: "Tín dụng", icon: "▤", bg: "#E9F3FF", iconColor: "#1E86E0", titleColor: "#1763A8", subColor: "#5B9BD8", sub: "Khoá", locked: true },
    { id: "tax", label: "Thuế cơ bản", icon: "★", bg: "#FFF3DC", iconColor: "#D99312", titleColor: "#9A6A0E", subColor: "#C2974D", sub: "Khoá", locked: true },
  ],

  tips: [
    "Để dành 10% mỗi khi nhận tiền nhé!",
    "Tiết kiệm nhỏ mỗi ngày, lớn lên giàu to!",
    "Quy tắc 50/30/20: thử áp dụng ngay hôm nay!",
  ],
};
