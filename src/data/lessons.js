/**
 * FinanceKids - Bộ bài học tài chính cho trẻ em
 *
 * Cấu trúc:
 * - ageGroup: '6-8' | '9-12' | '13-16'
 * - category: 'concept' | 'compare' | 'choice' | 'transaction'
 * - questionType: 'quiz' | 'ab' | 'transaction'
 *
 * Nguồn tham khảo:
 * - Jump$tart Coalition K-12 Financial Literacy Standards
 * - Rich Dad Poor Dad for Teens (Kiyosaki)
 * - FDIC Money Smart curriculum
 * - Chương trình GDCD Việt Nam
 */

export const LESSONS = [
  // ─────────────────────────────────────────────────────────────
  // NHÓM 6-8 TUỔI: Khái niệm cơ bản nhất
  // ─────────────────────────────────────────────────────────────
  {
    id: "lesson-01",
    title: "Tiền là gì?",
    subtitle: "Hiểu về tiền và công dụng",
    ageGroup: "6-8",
    category: "concept",
    icon: "💰",
    color: "#FFD700",
    bgColor: "#FFF9E6",
    xp: 100,
    description: "Học về tiền là gì và tại sao chúng ta cần đến tiền trong cuộc sống.",
    questions: [
      {
        id: "q1",
        type: "quiz",
        question: "Tiền dùng để làm gì?",
        image: "💰",
        options: [
          { text: "Mua đồ ăn, quần áo và đồ chơi", emoji: "🛒" },
          { text: "Dùng để vẽ tranh", emoji: "🎨" },
          { text: "Dùng để uống", emoji: "🥤" },
          { text: "Dùng để gối đầu ngủ", emoji: "😴" },
        ],
        correct: 0,
        explanation: "Đúng rồi! Tiền giúp chúng ta mua những thứ chúng ta cần như đồ ăn, quần áo, và những thứ chúng ta thích! 🌟",
      },
      {
        id: "q2",
        type: "quiz",
        question: "Ai kiếm ra tiền cho gia đình?",
        image: "👨‍👩‍👧‍👦",
        options: [
          { text: "Chỉ có ông già Noel", emoji: "🎅" },
          { text: "Ba mẹ đi làm kiếm tiền", emoji: "👨‍💼" },
          { text: "Tiền từ trên trời rơi xuống", emoji: "☁️" },
          { text: "Máy ATM tự in ra", emoji: "🏧" },
        ],
        correct: 1,
        explanation: "Ba mẹ đi làm việc để kiếm tiền nuôi gia đình. Đó là lý do tại sao công việc rất quan trọng! 💪",
      },
      {
        id: "q3",
        type: "ab",
        question: "Nếu có 10.000đ, con sẽ chọn gì?",
        image: "🤔",
        optionA: {
          emoji: "🍦",
          title: "Mua kem ngay bây giờ",
          description: "Ăn ngon ngay hôm nay!",
        },
        optionB: {
          emoji: "🐷",
          title: "Bỏ vào heo đất",
          description: "Tiết kiệm để mua thứ to hơn!",
        },
        bestChoice: "B",
        explanation: "Cả hai đều không sai! Nhưng nếu tiết kiệm, con có thể mua được thứ con thích hơn sau này. Đó gọi là TIẾT KIỆM! 🌟",
      },
    ],
  },

  {
    id: "lesson-02",
    title: "Cần và Muốn",
    subtitle: "Phân biệt thứ cần thiết và thứ muốn có",
    ageGroup: "6-8",
    category: "compare",
    icon: "⚖️",
    color: "#4CAF50",
    bgColor: "#E8F5E9",
    xp: 120,
    description: "Học cách phân biệt những thứ PHẢI có và những thứ MUỐN có.",
    questions: [
      {
        id: "q1",
        type: "quiz",
        question: "Thứ nào là thứ CẦN THIẾT (phải có)?",
        image: "🏠",
        options: [
          { text: "Đồ chơi robot mới", emoji: "🤖" },
          { text: "Cơm ăn mỗi ngày", emoji: "🍚" },
          { text: "Điện thoại xịn", emoji: "📱" },
          { text: "Giày sneaker đắt tiền", emoji: "👟" },
        ],
        correct: 1,
        explanation: "Cơm ăn là thứ CẦN THIẾT - không có sẽ bị đói! Đồ chơi và giày xịn là thứ MUỐN CÓ - không có cũng không sao. 🍚",
      },
      {
        id: "q2",
        type: "ab",
        question: "Cái nào là MUỐN CÓ (want), cái nào là CẦN THIẾT (need)?",
        image: "❓",
        optionA: {
          emoji: "🛏️",
          title: "Giường ngủ",
          description: "Thứ cần có để nghỉ ngơi",
        },
        optionB: {
          emoji: "🎮",
          title: "Máy game PS5",
          description: "Thứ muốn có để chơi",
        },
        bestChoice: "A",
        explanation: "Giường ngủ là CẦN THIẾT (need) - không có giường ngủ sẽ rất khó chịu. PS5 là MUỐN CÓ (want) - rất vui nếu có nhưng không có cũng được! 😊",
      },
      {
        id: "q3",
        type: "quiz",
        question: "Khi tiền không đủ, nên mua thứ gì trước?",
        image: "💭",
        options: [
          { text: "Thứ đắt nhất trước", emoji: "💎" },
          { text: "Thứ mình thích nhất", emoji: "❤️" },
          { text: "Thứ cần thiết trước", emoji: "✅" },
          { text: "Không mua gì cả", emoji: "🚫" },
        ],
        correct: 2,
        explanation: "Luôn mua thứ CẦN THIẾT trước (đồ ăn, thuốc...), sau đó mới nghĩ đến thứ MUỐN CÓ. Đó là cách dùng tiền thông minh! 🧠",
      },
    ],
  },

  {
    id: "lesson-03",
    title: "Heo Đất Thần Kỳ",
    subtitle: "Học về tiết kiệm tiền",
    ageGroup: "6-8",
    category: "choice",
    icon: "🐷",
    color: "#E91E63",
    bgColor: "#FCE4EC",
    xp: 150,
    description: "Khám phá sức mạnh của việc tiết kiệm tiền mỗi ngày.",
    questions: [
      {
        id: "q1",
        type: "transaction",
        scenario: "Heo đất của Minh",
        startBalance: 0,
        currency: "đ",
        steps: [
          {
            description: "Ba thưởng Minh vì được điểm 10 🎉",
            amount: 50000,
            type: "income",
            hint: "Nhận tiền thưởng!"
          },
          {
            description: "Mẹ cho tiền mua văn phòng phẩm 📚",
            amount: 20000,
            type: "income",
            hint: "Nhận tiền từ mẹ"
          },
          {
            description: "Minh mua bút chì và tẩy ✏️",
            amount: 15000,
            type: "expense",
            hint: "Trả tiền mua đồ"
          },
          {
            description: "Minh bỏ phần còn lại vào heo đất 🐷",
            amount: 55000,
            type: "save",
            hint: "Tiết kiệm nào!"
          },
        ],
        question: "Minh tiết kiệm được bao nhiêu tiền?",
        correctAnswer: 55000,
        explanation: "Giỏi lắm! Minh tiết kiệm được 55.000đ. Nếu cứ tiết kiệm đều đặn như vậy, Minh sẽ sớm có đủ tiền mua thứ mình muốn! 🌟"
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // NHÓM 9-12 TUỔI: Khái niệm trung cấp
  // ─────────────────────────────────────────────────────────────
  {
    id: "lesson-04",
    title: "Thu Nhập & Chi Tiêu",
    subtitle: "Quản lý tiền vào và tiền ra",
    ageGroup: "9-12",
    category: "concept",
    icon: "📊",
    color: "#2196F3",
    bgColor: "#E3F2FD",
    xp: 150,
    description: "Hiểu về thu nhập (tiền kiếm được) và chi tiêu (tiền bỏ ra).",
    questions: [
      {
        id: "q1",
        type: "quiz",
        question: "Thu nhập là gì?",
        image: "💼",
        options: [
          { text: "Tiền mình tiêu mỗi ngày", emoji: "🛍️" },
          { text: "Tiền mình kiếm được hoặc nhận được", emoji: "💰" },
          { text: "Tiền mình vay của người khác", emoji: "🤝" },
          { text: "Tiền trong ATM", emoji: "🏧" },
        ],
        correct: 1,
        explanation: "Thu nhập là TẤT CẢ tiền bạn nhận được: lương làm việc, tiền thưởng, tiền lì xì, hoặc tiền bán đồ. 💰",
      },
      {
        id: "q2",
        type: "transaction",
        scenario: "Ngân sách tháng của Lan (lớp 6)",
        startBalance: 0,
        currency: "đ",
        steps: [
          {
            description: "Tiền ba mẹ cho tiêu vặt 💵",
            amount: 300000,
            type: "income",
            hint: "Đây là thu nhập của Lan"
          },
          {
            description: "Mua sách tham khảo 📖",
            amount: 80000,
            type: "expense",
            hint: "Chi tiêu cho học tập"
          },
          {
            description: "Ăn sáng cả tuần ☕",
            amount: 70000,
            type: "expense",
            hint: "Chi tiêu cho ăn uống"
          },
          {
            description: "Mua quà sinh nhật bạn 🎁",
            amount: 50000,
            type: "expense",
            hint: "Chi tiêu xã hội"
          },
        ],
        question: "Lan còn tiết kiệm được bao nhiêu?",
        correctAnswer: 100000,
        explanation: "Lan còn 100.000đ. Thu nhập 300k - Chi tiêu 200k = Tiết kiệm 100k. Lan quản lý tiền rất tốt! 🌟",
      },
      {
        id: "q3",
        type: "ab",
        question: "Lan nhận được 500.000đ. Cách nào tốt hơn?",
        image: "💭",
        optionA: {
          emoji: "🛍️",
          title: "Tiêu hết luôn",
          description: "Mua tất cả những gì muốn ngay bây giờ",
        },
        optionB: {
          emoji: "📋",
          title: "Lập kế hoạch",
          description: "Chia tiền: 60% chi tiêu, 30% tiết kiệm, 10% từ thiện",
        },
        bestChoice: "B",
        explanation: "Lập kế hoạch trước khi tiêu tiền giúp bạn không bao giờ hết tiền. Đây gọi là LẬP NGÂN SÁCH (Budget)! 📊",
      },
    ],
  },

  {
    id: "lesson-05",
    title: "Ngân Hàng Là Gì?",
    subtitle: "Hiểu về vai trò của ngân hàng",
    ageGroup: "9-12",
    category: "concept",
    icon: "🏦",
    color: "#9C27B0",
    bgColor: "#F3E5F5",
    xp: 160,
    description: "Tìm hiểu ngân hàng làm gì và tại sao gửi tiền ngân hàng an toàn hơn.",
    questions: [
      {
        id: "q1",
        type: "quiz",
        question: "Ngân hàng làm gì với tiền bạn gửi vào?",
        image: "🏦",
        options: [
          { text: "Cất vào két sắt và không làm gì", emoji: "🔒" },
          { text: "Cho người khác vay và trả lãi cho bạn", emoji: "💹" },
          { text: "Mang đi đốt đi", emoji: "🔥" },
          { text: "Chia cho nhân viên ngân hàng", emoji: "👔" },
        ],
        correct: 1,
        explanation: "Ngân hàng dùng tiền bạn gửi để cho người khác vay. Đổi lại, họ trả cho bạn TIỀN LÃI. Cả hai cùng có lợi! 💹",
      },
      {
        id: "q2",
        type: "ab",
        question: "Giữ 1.000.000đ ở đâu an toàn và có lợi hơn?",
        image: "🤔",
        optionA: {
          emoji: "🏠",
          title: "Giữ ở nhà",
          description: "Tiền nằm yên, không sinh thêm, có thể mất nếu bị trộm",
        },
        optionB: {
          emoji: "🏦",
          title: "Gửi ngân hàng",
          description: "An toàn, được bảo hiểm, còn sinh thêm tiền lãi mỗi năm",
        },
        bestChoice: "B",
        explanation: "Gửi ngân hàng an toàn hơn và tiền còn sinh lãi! 1 triệu gửi 1 năm có thể thành 1.050.000đ - 50.000đ là tiền lãi MIỄN PHÍ! 🎉",
      },
      {
        id: "q3",
        type: "quiz",
        question: "Lãi suất 5%/năm nghĩa là gì?",
        image: "📈",
        options: [
          { text: "Gửi 100k, sau 1 năm rút được 105k", emoji: "💰" },
          { text: "Phải trả thêm 5k phí gửi", emoji: "❌" },
          { text: "Ngân hàng giữ 5k của mình", emoji: "😱" },
          { text: "Không liên quan đến tiền", emoji: "🤷" },
        ],
        correct: 0,
        explanation: "Đúng! Gửi 100.000đ với lãi suất 5%/năm → sau 1 năm có 105.000đ. 5.000đ là tiền ngân hàng trả cho bạn vì đã gửi tiền! 🌟",
      },
    ],
  },

  {
    id: "lesson-06",
    title: "Chi Tiêu Thông Minh",
    subtitle: "So sánh giá và chọn mua khôn ngoan",
    ageGroup: "9-12",
    category: "choice",
    icon: "🧠",
    color: "#009688",
    bgColor: "#E0F2F1",
    xp: 180,
    description: "Học cách so sánh giá cả và đưa ra quyết định mua sắm thông minh.",
    questions: [
      {
        id: "q1",
        type: "ab",
        question: "Mua bút chì ở đâu tiết kiệm hơn?",
        image: "✏️",
        optionA: {
          emoji: "🏪",
          title: "Siêu thị: 12.000đ/hộp",
          description: "Hộp 12 cây, tiện và gần nhà",
        },
        optionB: {
          emoji: "🏬",
          title: "Cửa hàng văn phòng phẩm: 8.000đ/hộp",
          description: "Hộp 12 cây giống y hệt, xa hơn 5 phút",
        },
        bestChoice: "B",
        explanation: "Mua ở cửa hàng văn phòng phẩm tiết kiệm 4.000đ! Đi thêm 5 phút nhưng tiết kiệm được tiền - đó là quyết định THÔNG MINH! 🧠",
      },
      {
        id: "q2",
        type: "quiz",
        question: "Khi thấy 'SALE 50%', nghĩa là sao?",
        image: "🏷️",
        options: [
          { text: "Giảm giá còn một nửa so với giá gốc", emoji: "✅" },
          { text: "Mua 1 tặng 1", emoji: "🎁" },
          { text: "Hàng kém chất lượng", emoji: "❌" },
          { text: "Giá tăng thêm 50%", emoji: "📈" },
        ],
        correct: 0,
        explanation: "SALE 50% = giảm giá 50%. Áo 200.000đ giảm 50% còn 100.000đ. Nhưng nhớ: chỉ mua khi THỰC SỰ CẦN, không phải vì thấy sale! 🛍️",
      },
      {
        id: "q3",
        type: "quiz",
        question: "Trước khi mua đồ đắt tiền, nên làm gì?",
        image: "💭",
        options: [
          { text: "Mua ngay kẻo hết hàng", emoji: "🏃" },
          { text: "So sánh giá nhiều nơi rồi mới mua", emoji: "🔍" },
          { text: "Hỏi bạn bè có mua không", emoji: "👥" },
          { text: "Đợi ba mẹ mua cho", emoji: "😅" },
        ],
        correct: 1,
        explanation: "Luôn SO SÁNH GIÁ trước khi mua! Cùng một sản phẩm có thể rẻ hơn 20-30% ở chỗ khác. Đây là kỹ năng tiêu tiền thông minh! 🔍",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // NHÓM 13-16 TUỔI: Khái niệm nâng cao
  // ─────────────────────────────────────────────────────────────
  {
    id: "lesson-07",
    title: "Lãi Kép - Phép Màu Tài Chính",
    subtitle: "Hiểu sức mạnh của lãi kép",
    ageGroup: "13-16",
    category: "concept",
    icon: "📈",
    color: "#FF6B35",
    bgColor: "#FFF3EF",
    xp: 200,
    description: "Khám phá tại sao lãi kép được gọi là 'kỳ quan thứ 8 của thế giới'.",
    questions: [
      {
        id: "q1",
        type: "quiz",
        question: "Lãi kép khác lãi đơn ở điểm nào?",
        image: "📊",
        options: [
          { text: "Lãi kép tính lãi trên cả tiền gốc lẫn tiền lãi", emoji: "📈" },
          { text: "Lãi kép chỉ áp dụng cho tiền tỷ", emoji: "💎" },
          { text: "Lãi kép không áp dụng ở Việt Nam", emoji: "🚫" },
          { text: "Lãi kép thì không rủi ro", emoji: "🛡️" },
        ],
        correct: 0,
        explanation: "LÃI KÉP = lãi sinh lãi! Năm 1: gửi 1tr → có 1.1tr. Năm 2: tính lãi trên 1.1tr → có 1.21tr (không phải 1.2tr). Càng lâu càng thần kỳ! 🌟",
      },
      {
        id: "q2",
        type: "ab",
        question: "Bắt đầu tiết kiệm khi nào tốt hơn? (lãi suất 10%/năm)",
        image: "⏰",
        optionA: {
          emoji: "👶",
          title: "Tiết kiệm từ 15 tuổi",
          description: "Gửi 1 triệu/tháng × 10 năm = 120 triệu gốc → ~200 triệu lúc 25 tuổi",
        },
        optionB: {
          emoji: "🎓",
          title: "Tiết kiệm từ 25 tuổi",
          description: "Gửi 1 triệu/tháng × 10 năm = 120 triệu gốc → ~200 triệu lúc 35 tuổi",
        },
        bestChoice: "A",
        explanation: "Bắt đầu từ 15 tuổi thì lúc 35 tuổi sẽ có ~500 triệu, trong khi bắt đầu từ 25 chỉ có ~200 triệu! Thời gian = sức mạnh lãi kép. Bắt đầu SỚM là quan trọng nhất! ⏰",
      },
      {
        id: "q3",
        type: "transaction",
        scenario: "Quy tắc 72: Tiền tăng gấp đôi sau bao lâu?",
        startBalance: 10000000,
        currency: "đ",
        steps: [
          {
            description: "Gửi tiết kiệm 10 triệu (lãi suất 6%/năm) 💰",
            amount: 600000,
            type: "income",
            hint: "Năm 1: lãi 6% × 10tr = 600.000đ"
          },
          {
            description: "Năm 2: lãi tính trên 10.6 triệu 📈",
            amount: 636000,
            type: "income",
            hint: "Lãi kép: tiền lãi tăng dần"
          },
          {
            description: "Năm 3: lãi tính trên 11.236 triệu 📈",
            amount: 674160,
            type: "income",
            hint: "Mỗi năm lãi càng nhiều hơn"
          },
        ],
        question: "Sau 12 năm (72÷6=12), tiền sẽ gấp đôi thành bao nhiêu?",
        correctAnswer: 20000000,
        explanation: "Quy tắc 72: Lấy 72 ÷ lãi suất = số năm để tiền gấp đôi. Lãi 6% → 72÷6 = 12 năm. 10 triệu → 20 triệu! Không cần thêm 1 đồng nào! 🎉",
      },
    ],
  },

  {
    id: "lesson-08",
    title: "Đầu Tư Cơ Bản",
    subtitle: "Phân biệt tiết kiệm vs đầu tư",
    ageGroup: "13-16",
    category: "compare",
    icon: "💹",
    color: "#3F51B5",
    bgColor: "#E8EAF6",
    xp: 220,
    description: "Hiểu sự khác biệt giữa tiết kiệm và đầu tư, và khi nào nên dùng cái nào.",
    questions: [
      {
        id: "q1",
        type: "ab",
        question: "Tiết kiệm vs Đầu tư - cái nào đúng với bạn?",
        image: "⚖️",
        optionA: {
          emoji: "🏦",
          title: "Tiết kiệm",
          description: "Gửi ngân hàng, lãi 5-7%/năm, AN TOÀN tuyệt đối, phù hợp cho tiền khẩn cấp",
        },
        optionB: {
          emoji: "📊",
          title: "Đầu tư (cổ phiếu, quỹ)",
          description: "Lợi nhuận tiềm năng 10-15%/năm, CÓ RỦI RO, phù hợp cho tiền dài hạn",
        },
        bestChoice: "A",
        explanation: "Không có cái nào tốt hơn tuyệt đối! TIẾT KIỆM cho tiền khẩn cấp và ngắn hạn. ĐẦU TƯ cho tiền dài hạn (5+ năm) bạn không cần ngay. Cần cả hai! 🎯",
      },
      {
        id: "q2",
        type: "quiz",
        question: "Quỹ đầu tư (ETF) là gì?",
        image: "📦",
        options: [
          { text: "Rổ chứa nhiều cổ phiếu, giúp phân tán rủi ro", emoji: "🧺" },
          { text: "Một loại tiền điện tử", emoji: "₿" },
          { text: "Tài khoản ngân hàng đặc biệt", emoji: "🏦" },
          { text: "Bảo hiểm nhân thọ", emoji: "🛡️" },
        ],
        correct: 0,
        explanation: "ETF là rổ cổ phiếu! Thay vì mua 1 cổ phiếu rủi ro, bạn mua 1 rổ 100 cổ phiếu. Nếu 1 cái giảm, 99 cái khác bù lại - đó là PHÂN TÁN RỦI RO! 🧺",
      },
      {
        id: "q3",
        type: "quiz",
        question: "Nguyên tắc đầu tư quan trọng nhất cho người mới?",
        image: "🎯",
        options: [
          { text: "Chỉ đầu tư khi đã có nhiều tiền", emoji: "💰" },
          { text: "Chỉ đầu tư vào crypto vì lãi cao nhất", emoji: "📈" },
          { text: "Không bao giờ đầu tư tiền mà bạn không thể để mất", emoji: "⚠️" },
          { text: "Đầu tư theo gợi ý trên mạng xã hội", emoji: "📱" },
        ],
        correct: 2,
        explanation: "Nguyên tắc vàng: KHÔNG BAO GIỜ đầu tư tiền sinh hoạt hoặc tiền khẩn cấp! Chỉ đầu tư tiền 'thừa' - mất cũng không ảnh hưởng cuộc sống. An toàn là ưu tiên số 1! ⚠️",
      },
    ],
  },

  {
    id: "lesson-09",
    title: "Nợ & Tín Dụng",
    subtitle: "Khi nào vay tiền là khôn ngoan?",
    ageGroup: "13-16",
    category: "choice",
    icon: "💳",
    color: "#F44336",
    bgColor: "#FFEBEE",
    xp: 240,
    description: "Hiểu về nợ tốt và nợ xấu, cách dùng tín dụng có trách nhiệm.",
    questions: [
      {
        id: "q1",
        type: "ab",
        question: "Đây là NỢ TỐT hay NỢ XẤU?",
        image: "🎓",
        optionA: {
          emoji: "🎓",
          title: "Vay tiền đi học đại học",
          description: "Lãi thấp, tạo ra kỹ năng → kiếm được lương cao hơn để trả nợ",
        },
        optionB: {
          emoji: "📱",
          title: "Quẹt thẻ tín dụng mua iPhone",
          description: "Lãi suất 24-36%/năm, điện thoại mất giá, không tạo ra thu nhập",
        },
        bestChoice: "A",
        explanation: "Vay học: NỢ TỐT - đầu tư vào bản thân, tạo ra giá trị. Vay mua iPhone: NỢ XẤU - hàng tiêu dùng giảm giá nhanh, lãi cao ngất! 💡",
      },
      {
        id: "q2",
        type: "quiz",
        question: "Lãi suất thẻ tín dụng thường là bao nhiêu/năm?",
        image: "💳",
        options: [
          { text: "2-3% (thấp như ngân hàng)", emoji: "😊" },
          { text: "5-7% (tương tự gửi tiết kiệm)", emoji: "😐" },
          { text: "24-36% (rất cao!)", emoji: "😱" },
          { text: "Miễn phí hoàn toàn", emoji: "🤩" },
        ],
        correct: 2,
        explanation: "Lãi suất thẻ tín dụng thường 24-36%/năm! Quẹt 10 triệu không trả đúng hạn → 1 tháng sau nợ thêm 200-300 nghìn lãi. Không trả đúng hạn = NGUY HIỂM! 😱",
      },
      {
        id: "q3",
        type: "transaction",
        scenario: "Cái bẫy nợ thẻ tín dụng",
        startBalance: 0,
        currency: "đ",
        steps: [
          {
            description: "Quẹt thẻ mua điện thoại 10 triệu 📱",
            amount: 10000000,
            type: "expense",
            hint: "Nợ ban đầu: 10 triệu"
          },
          {
            description: "Tháng 1: Lãi 3% (quên trả đúng hạn) 💸",
            amount: 300000,
            type: "expense",
            hint: "Lãi phát sinh thêm"
          },
          {
            description: "Tháng 2: Lãi tính trên 10.3 triệu 💸",
            amount: 309000,
            type: "expense",
            hint: "Nợ càng nhiều, lãi càng cao"
          },
          {
            description: "Tháng 3: Lãi tiếp tục tăng 💸",
            amount: 318270,
            type: "expense",
            hint: "Lãi kép của nợ - rất nguy hiểm!"
          },
        ],
        question: "Sau 3 tháng, tổng nợ là bao nhiêu?",
        correctAnswer: 10927270,
        explanation: "Chỉ 3 tháng, nợ từ 10 triệu thành gần 11 triệu! Nếu cứ để vậy, nợ sẽ nhân đôi mỗi 2 năm. Luôn TRẢ NỢ ĐẦY ĐỦ ĐÚNG HẠN! ⚠️",
      },
    ],
  },

  {
    id: "lesson-10",
    title: "Ngân Sách 50/30/20",
    subtitle: "Công thức quản lý tiền hiệu quả",
    ageGroup: "13-16",
    category: "concept",
    icon: "📋",
    color: "#795548",
    bgColor: "#EFEBE9",
    xp: 200,
    description: "Học quy tắc ngân sách phổ biến nhất thế giới: 50/30/20.",
    questions: [
      {
        id: "q1",
        type: "quiz",
        question: "Quy tắc 50/30/20 phân chia thu nhập như thế nào?",
        image: "📊",
        options: [
          { text: "50% tiết kiệm, 30% ăn uống, 20% giải trí", emoji: "🏦" },
          { text: "50% nhu cầu thiết yếu, 30% sở thích, 20% tiết kiệm", emoji: "✅" },
          { text: "50% cho ba mẹ, 30% chi tiêu, 20% còn lại", emoji: "👨‍👩‍👧" },
          { text: "50% đầu tư, 30% nhu cầu, 20% giải trí", emoji: "📈" },
        ],
        correct: 1,
        explanation: "50% cho NHU CẦU (ăn, ở, học, điện nước), 30% cho SỞ THÍCH (du lịch, mua sắm, giải trí), 20% cho TIẾT KIỆM & ĐẦU TƯ. Đơn giản và hiệu quả! 🎯",
      },
      {
        id: "q2",
        type: "transaction",
        scenario: "Áp dụng 50/30/20 cho lương thực tập 5 triệu",
        startBalance: 5000000,
        currency: "đ",
        steps: [
          {
            description: "50% Nhu cầu thiết yếu (thuê nhà, ăn uống, đi lại) 🏠",
            amount: 2500000,
            type: "expense",
            hint: "50% × 5tr = 2.5tr"
          },
          {
            description: "30% Sở thích (cafe, mua sắm, phim ảnh) ☕",
            amount: 1500000,
            type: "expense",
            hint: "30% × 5tr = 1.5tr"
          },
          {
            description: "20% Tiết kiệm + đầu tư 🐷",
            amount: 1000000,
            type: "save",
            hint: "20% × 5tr = 1tr"
          },
        ],
        question: "Mỗi tháng tiết kiệm được bao nhiêu?",
        correctAnswer: 1000000,
        explanation: "1 triệu/tháng tiết kiệm! Nghe ít nhưng sau 1 năm có 12 triệu, sau 5 năm (với lãi kép) có thể hơn 70 triệu! Tích tiểu thành đại! 💪",
      },
      {
        id: "q3",
        type: "ab",
        question: "Bạn nhận lương 8 triệu. Tháng này chi tiêu 6 triệu. Nên làm gì với 2 triệu còn lại?",
        image: "💭",
        optionA: {
          emoji: "🛍️",
          title: "Tiêu thêm cho thoải mái",
          description: "Tháng nào tháng đó, sống phải vui",
        },
        optionB: {
          emoji: "📊",
          title: "Chia 50/30/20 ngay từ đầu",
          description: "Để dành 1.6tr tiết kiệm + quỹ khẩn cấp từ đầu tháng",
        },
        bestChoice: "B",
        explanation: "Nguyên tắc vàng: TRẢ CHO TƯƠNG LAI TRƯỚC, tiêu sau! Tiết kiệm ngay đầu tháng, không phải tiết kiệm phần còn lại. 'Pay yourself first!' 💪",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // NHÓM 6-8 TUỔI: Bài 11-17
  // ─────────────────────────────────────────────────────────────
  {
    id: "lesson-11",
    title: "Đồng Tiền Đến Từ Đâu?",
    subtitle: "Khám phá nguồn gốc của tiền",
    ageGroup: "6-8",
    category: "concept",
    icon: "🏭",
    color: "#00BCD4",
    bgColor: "#E0F7FA",
    xp: 100,
    description: "Tìm hiểu tại sao tiền tồn tại và tiền được tạo ra như thế nào.",
    questions: [
      {
        id: "q1",
        type: "quiz",
        question: "Ngày xưa khi chưa có tiền, người ta trao đổi bằng cách nào?",
        image: "🔄",
        options: [
          { text: "Đổi đồ lấy đồ (gà đổi lấy gạo)", emoji: "🐔" },
          { text: "Xin nhau miễn phí", emoji: "🤝" },
          { text: "Dùng điện thoại", emoji: "📱" },
          { text: "Dùng thẻ ngân hàng", emoji: "💳" },
        ],
        correct: 0,
        explanation: "Đúng! Ngày xưa người ta trao đổi trực tiếp: 1 con gà đổi 5 kg gạo. Nhưng rất bất tiện nên người ta phát minh ra TIỀN để dễ trao đổi hơn! 🎉",
      },
      {
        id: "q2",
        type: "ab",
        question: "Ai in ra tiền giấy ở Việt Nam?",
        image: "🏦",
        optionA: {
          emoji: "🏦",
          title: "Ngân hàng Nhà nước Việt Nam",
          description: "Cơ quan nhà nước kiểm soát tiền tệ",
        },
        optionB: {
          emoji: "🖨️",
          title: "Ai cũng có thể tự in",
          description: "Dùng máy in thông thường",
        },
        bestChoice: "A",
        explanation: "Chỉ Ngân hàng Nhà nước mới được in tiền! Tự in tiền là phạm pháp và gọi là làm tiền giả - rất nguy hiểm! 🚫",
      },
      {
        id: "q3",
        type: "quiz",
        question: "Tiền xu được làm bằng gì?",
        image: "🪙",
        options: [
          { text: "Vàng nguyên chất", emoji: "🥇" },
          { text: "Kim loại hợp kim (nhôm, đồng...)", emoji: "⚙️" },
          { text: "Nhựa", emoji: "🧴" },
          { text: "Gỗ", emoji: "🌳" },
        ],
        correct: 1,
        explanation: "Tiền xu hiện đại làm bằng hợp kim kim loại (nhôm, đồng, niken...). Ngày xưa mới dùng vàng thật, nhưng quá đắt và nặng! 🪙",
      },
    ],
  },

  {
    id: "lesson-12",
    title: "Cho & Nhận",
    subtitle: "Học về chia sẻ và từ thiện",
    ageGroup: "6-8",
    category: "choice",
    icon: "❤️",
    color: "#E91E63",
    bgColor: "#FCE4EC",
    xp: 110,
    description: "Hiểu tại sao chia sẻ tiền với người khác cũng là điều quan trọng.",
    questions: [
      {
        id: "q1",
        type: "ab",
        question: "Nếu có 20.000đ dư, bạn sẽ làm gì?",
        image: "💭",
        optionA: {
          emoji: "🍬",
          title: "Mua thêm kẹo cho mình",
          description: "Ăn thêm ngon hơn!",
        },
        optionB: {
          emoji: "❤️",
          title: "Mua bánh mì tặng bạn khó khăn",
          description: "Giúp người khác cảm thấy vui",
        },
        bestChoice: "B",
        explanation: "Cả hai đều được! Nhưng khi cho đi, bạn sẽ thấy vui hơn là khi chỉ nghĩ đến mình. Khoa học chứng minh: CHO ĐI làm ta HẠNH PHÚC HƠN NHẬN! 💖",
      },
      {
        id: "q2",
        type: "quiz",
        question: "Từ thiện nghĩa là gì?",
        image: "🤲",
        options: [
          { text: "Cho tiền vì muốn được khen", emoji: "📣" },
          { text: "Tự nguyện giúp đỡ người khó khăn hơn mình", emoji: "❤️" },
          { text: "Vay tiền của người khác", emoji: "🤝" },
          { text: "Đổi tiền lấy quà", emoji: "🎁" },
        ],
        correct: 1,
        explanation: "Từ thiện là TỰ NGUYỆN giúp đỡ người khác - không cần ai bắt, không cần được khen. Dù ít hay nhiều, điều quan trọng là tấm lòng! 💖",
      },
    ],
  },

  {
    id: "lesson-13",
    title: "Mục Tiêu Tiết Kiệm",
    subtitle: "Tiết kiệm vì một lý do cụ thể",
    ageGroup: "6-8",
    category: "choice",
    icon: "🎯",
    color: "#FF9800",
    bgColor: "#FFF3E0",
    xp: 130,
    description: "Học cách đặt mục tiêu tiết kiệm và theo dõi tiến độ.",
    questions: [
      {
        id: "q1",
        type: "transaction",
        scenario: "Mục tiêu của Bình: Mua xe đạp 500.000đ",
        startBalance: 0,
        currency: "đ",
        steps: [
          { description: "Tuần 1: Tiết kiệm tiêu vặt 🐷", amount: 50000, type: "save", hint: "Nhịn mua kẹo 1 tuần" },
          { description: "Tuần 2: Ba thưởng điểm tốt ⭐", amount: 100000, type: "income", hint: "Tiền thưởng học giỏi" },
          { description: "Tuần 3: Tiết kiệm tiếp 🐷", amount: 50000, type: "save", hint: "Kiên trì!" },
          { description: "Tuần 4: Mẹ thưởng làm việc nhà 🏠", amount: 80000, type: "income", hint: "Kiếm tiền từ việc nhà" },
        ],
        question: "Bình tiết kiệm được bao nhiêu sau 4 tuần?",
        correctAnswer: 280000,
        explanation: "Bình có 280.000đ sau 4 tuần! Còn 220.000đ nữa là mua được xe đạp. Đặt mục tiêu cụ thể giúp mình có động lực tiết kiệm! 🚲",
      },
      {
        id: "q2",
        type: "quiz",
        question: "Bước đầu tiên để tiết kiệm thành công là gì?",
        image: "🎯",
        options: [
          { text: "Xin ba mẹ thêm tiền", emoji: "🙏" },
          { text: "Đặt mục tiêu cụ thể: tiết kiệm bao nhiêu, để mua gì", emoji: "🎯" },
          { text: "Không cần kế hoạch, cứ để dành tự nhiên", emoji: "🤷" },
          { text: "Xem bạn bè tiết kiệm bao nhiêu rồi làm theo", emoji: "👀" },
        ],
        correct: 1,
        explanation: "ĐẶT MỤC TIÊU CỤ THỂ là bước đầu tiên! 'Tôi tiết kiệm 50.000đ/tuần để sau 10 tuần mua xe đạp 500.000đ' - rõ ràng, đo lường được! 🎯",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // NHÓM 9-12 TUỔI: Bài 14-21
  // ─────────────────────────────────────────────────────────────
  {
    id: "lesson-14",
    title: "Giá Trị Của Công Việc",
    subtitle: "Tiền kiếm được từ đâu?",
    ageGroup: "9-12",
    category: "concept",
    icon: "💼",
    color: "#607D8B",
    bgColor: "#ECEFF1",
    xp: 160,
    description: "Hiểu mối liên hệ giữa công việc, kỹ năng và thu nhập.",
    questions: [
      {
        id: "q1",
        type: "quiz",
        question: "Tại sao bác sĩ lương cao hơn nhân viên bán hàng?",
        image: "👨‍⚕️",
        options: [
          { text: "Bác sĩ may mắn hơn", emoji: "🍀" },
          { text: "Bác sĩ học nhiều năm, có kỹ năng hiếm và quan trọng hơn", emoji: "📚" },
          { text: "Bác sĩ làm việc nhiều giờ hơn", emoji: "⏰" },
          { text: "Nhà nước quyết định", emoji: "🏛️" },
        ],
        correct: 1,
        explanation: "Bác sĩ học 6+ năm đại học + nhiều năm thực tập, có kỹ năng đặc biệt. Kỹ năng càng hiếm + càng cần thiết = thu nhập càng cao! Đầu tư vào bản thân là đầu tư tốt nhất! 🌟",
      },
      {
        id: "q2",
        type: "ab",
        question: "Bạn muốn làm nghề gì? Cái nào quan trọng hơn khi chọn nghề?",
        image: "🤔",
        optionA: {
          emoji: "💰",
          title: "Chọn nghề lương cao nhất",
          description: "Bất kể thích hay không, miễn kiếm nhiều tiền",
        },
        optionB: {
          emoji: "❤️",
          title: "Chọn nghề mình thích + đủ sống",
          description: "Làm việc mình yêu thích, phát triển giỏi hơn và bền hơn",
        },
        bestChoice: "B",
        explanation: "Nghiên cứu chứng minh: người làm việc họ YÊU THÍCH thường thành công và hạnh phúc hơn. Nhưng lý tưởng nhất là tìm nghề bạn thích VÀ được trả công tốt! 💡",
      },
      {
        id: "q3",
        type: "quiz",
        question: "Thu nhập thụ động (passive income) là gì?",
        image: "😴",
        options: [
          { text: "Tiền kiếm khi đang ngủ", emoji: "💤" },
          { text: "Tiền từ hoạt động không đòi hỏi thời gian làm việc liên tục", emoji: "📈" },
          { text: "Tiền từ công việc bán thời gian", emoji: "⌛" },
          { text: "Tiền của người thụ động lười biếng", emoji: "🛋️" },
        ],
        correct: 1,
        explanation: "Thu nhập thụ động = tiền đến mà không cần bạn làm việc liên tục. Ví dụ: cho thuê nhà, cổ tức cổ phiếu, sách bán tự động. Mục tiêu tài chính: xây dựng nhiều nguồn thu nhập thụ động! 💰",
      },
    ],
  },

  {
    id: "lesson-15",
    title: "Bảo Hiểm Là Gì?",
    subtitle: "Bảo vệ tài chính trước rủi ro",
    ageGroup: "9-12",
    category: "concept",
    icon: "🛡️",
    color: "#009688",
    bgColor: "#E0F2F1",
    xp: 170,
    description: "Hiểu tại sao bảo hiểm quan trọng và hoạt động như thế nào.",
    questions: [
      {
        id: "q1",
        type: "quiz",
        question: "Bảo hiểm hoạt động theo nguyên tắc nào?",
        image: "🛡️",
        options: [
          { text: "1 người trả tiền, 1 người may mắn được nhận", emoji: "🎰" },
          { text: "Nhiều người đóng góp nhỏ, ai gặp rủi ro thì được bù đắp lớn", emoji: "🤝" },
          { text: "Ngân hàng cho vay khi cần", emoji: "🏦" },
          { text: "Chính phủ trả khi xảy ra sự cố", emoji: "🏛️" },
        ],
        correct: 1,
        explanation: "Bảo hiểm = chia sẻ rủi ro! 1000 người đóng 1 triệu/năm = 1 tỷ đồng. Ai gặp tai nạn được nhận 500 triệu. Không ai đủ tiền tự chi trả 500 triệu, nhưng 1000 người cùng chia thì được! 🤝",
      },
      {
        id: "q2",
        type: "ab",
        question: "Gia đình nên mua bảo hiểm gì trước?",
        image: "👨‍👩‍👧‍👦",
        optionA: {
          emoji: "🚗",
          title: "Bảo hiểm xe ô tô sang",
          description: "Xe đắt phải bảo hiểm kỹ",
        },
        optionB: {
          emoji: "🏥",
          title: "Bảo hiểm y tế cho cả nhà",
          description: "Ốm đau là chắc chắn xảy ra, viện phí rất cao",
        },
        bestChoice: "B",
        explanation: "Bảo hiểm y tế là quan trọng nhất! Ốm đau ai cũng gặp, một lần nhập viện có thể tốn hàng chục triệu. Bảo hiểm y tế giúp gia đình không bị kiệt sức vì viện phí. 🏥",
      },
    ],
  },

  {
    id: "lesson-16",
    title: "Thuế Là Gì?",
    subtitle: "Tại sao chúng ta phải đóng thuế?",
    ageGroup: "9-12",
    category: "concept",
    icon: "🏛️",
    color: "#795548",
    bgColor: "#EFEBE9",
    xp: 150,
    description: "Hiểu thuế là gì và tiền thuế được dùng để làm gì.",
    questions: [
      {
        id: "q1",
        type: "quiz",
        question: "Tiền thuế mà người dân nộp được dùng để làm gì?",
        image: "🏛️",
        options: [
          { text: "Trả lương cho quan chức", emoji: "👔" },
          { text: "Xây đường, trường học, bệnh viện, quân đội...", emoji: "🏫" },
          { text: "Mua xe xịn cho nhà nước", emoji: "🚗" },
          { text: "Để trong kho", emoji: "🏚️" },
        ],
        correct: 1,
        explanation: "Thuế được dùng cho dịch vụ công: đường xá, trường học, bệnh viện, cảnh sát, quân đội... Không có thuế, nhà nước không có tiền xây những thứ mọi người cùng dùng! 🏫",
      },
      {
        id: "q2",
        type: "ab",
        question: "Thuế VAT (thuế giá trị gia tăng) 10% có nghĩa là sao?",
        image: "🧾",
        optionA: {
          emoji: "🛒",
          title: "Mua hàng 100.000đ, thực tế trả 110.000đ",
          description: "10% được cộng vào giá bán và nộp về nhà nước",
        },
        optionB: {
          emoji: "💸",
          title: "Mua hàng 100.000đ, được nhận lại 10.000đ",
          description: "Nhà nước hoàn tiền lại cho người mua",
        },
        bestChoice: "A",
        explanation: "VAT 10% = bạn trả thêm 10% cho nhà nước qua người bán hàng. Mua đồ 100k thực ra trả 110k. Đó là lý do giá trên quầy khác với giá tính thuế trong hóa đơn! 🧾",
      },
    ],
  },

  {
    id: "lesson-17",
    title: "Lạm Phát",
    subtitle: "Tại sao hàng hóa ngày càng đắt hơn?",
    ageGroup: "9-12",
    category: "concept",
    icon: "📊",
    color: "#F44336",
    bgColor: "#FFEBEE",
    xp: 180,
    description: "Hiểu tại sao 100.000đ của ba mẹ ngày xưa mua được nhiều hơn bây giờ.",
    questions: [
      {
        id: "q1",
        type: "quiz",
        question: "Lạm phát nghĩa là gì?",
        image: "📈",
        options: [
          { text: "Giá hàng hóa giảm theo thời gian", emoji: "📉" },
          { text: "Giá hàng hóa tăng theo thời gian, tiền mất giá dần", emoji: "📈" },
          { text: "Số lượng hàng hóa tăng lên", emoji: "📦" },
          { text: "Tiền được in thêm nhiều hơn", emoji: "🖨️" },
        ],
        correct: 1,
        explanation: "Lạm phát = giá tăng, tiền mất giá! Năm 2000: tô phở 5.000đ. Năm 2024: tô phở 50.000đ. Cùng 1 tô phở nhưng giá tăng 10 lần trong 24 năm! 🍜",
      },
      {
        id: "q2",
        type: "ab",
        question: "Lạm phát 7%/năm. Bạn giữ 10 triệu trong hộp ở nhà. Sau 1 năm thực ra bạn có ít hơn hay nhiều hơn?",
        image: "🤔",
        optionA: {
          emoji: "📦",
          title: "Vẫn là 10 triệu như cũ",
          description: "Không mất không được thêm",
        },
        optionB: {
          emoji: "📉",
          title: "Thực ra chỉ như 9,3 triệu",
          description: "Giá tăng 7%, tiền mua được ít hơn 7%",
        },
        bestChoice: "B",
        explanation: "Giữ tiền mặt trong thời lạm phát = mất tiền từ từ! 10 triệu sau 1 năm lạm phát 7% chỉ mua được lượng hàng trị giá 9,3 triệu. Đó là lý do phải đầu tư hoặc gửi tiết kiệm lãi cao hơn lạm phát! 💡",
      },
    ],
  },

  {
    id: "lesson-18",
    title: "Mua Sắm Online An Toàn",
    subtitle: "Cách mua hàng trực tuyến thông minh",
    ageGroup: "9-12",
    category: "choice",
    icon: "🛒",
    color: "#FF5722",
    bgColor: "#FBE9E7",
    xp: 160,
    description: "Học cách nhận biết shop uy tín và tránh bị lừa khi mua online.",
    questions: [
      {
        id: "q1",
        type: "quiz",
        question: "Dấu hiệu nào cho thấy shop online KHÔNG đáng tin?",
        image: "⚠️",
        options: [
          { text: "Có nhiều đánh giá 5 sao thực tế từ người mua", emoji: "⭐" },
          { text: "Giá rẻ bất thường, không rõ địa chỉ, không có hotline", emoji: "🚨" },
          { text: "Có chính sách hoàn trả rõ ràng", emoji: "↩️" },
          { text: "Thanh toán qua ví điện tử uy tín", emoji: "💳" },
        ],
        correct: 1,
        explanation: "Shop LỪA ĐẢO thường: giá rẻ bất thường, không có địa chỉ thực tế, không có hotline, chỉ nhận chuyển khoản trước. CẢNH GIÁC với những dấu hiệu này! ⚠️",
      },
      {
        id: "q2",
        type: "ab",
        question: "Nên dùng phương thức thanh toán nào khi mua online lần đầu từ shop lạ?",
        image: "💳",
        optionA: {
          emoji: "💸",
          title: "Chuyển khoản trước đầy đủ",
          description: "Nhanh, shop yêu cầu thì làm",
        },
        optionB: {
          emoji: "📦",
          title: "Thanh toán khi nhận hàng (COD)",
          description: "Nhận hàng, kiểm tra xong mới trả tiền",
        },
        bestChoice: "B",
        explanation: "COD (Cash On Delivery) = thanh toán khi nhận hàng. Với shop lạ, luôn chọn COD để kiểm tra hàng trước khi trả tiền. Nếu hàng không đúng = không mất tiền! 📦",
      },
    ],
  },

  {
    id: "lesson-19",
    title: "Quỹ Dự Phòng Khẩn Cấp",
    subtitle: "Tại sao cần tiền dự phòng?",
    ageGroup: "9-12",
    category: "concept",
    icon: "🆘",
    color: "#FF6B35",
    bgColor: "#FFF3EF",
    xp: 170,
    description: "Học về tầm quan trọng của quỹ khẩn cấp và cách xây dựng nó.",
    questions: [
      {
        id: "q1",
        type: "quiz",
        question: "Quỹ khẩn cấp nên đủ tiêu trong bao nhiêu tháng?",
        image: "🆘",
        options: [
          { text: "1 tuần", emoji: "📅" },
          { text: "1 tháng", emoji: "📅" },
          { text: "3-6 tháng chi tiêu cơ bản", emoji: "✅" },
          { text: "10 năm", emoji: "📅" },
        ],
        correct: 2,
        explanation: "Quỹ khẩn cấp lý tưởng = 3-6 tháng chi tiêu cơ bản. Nếu mất việc hoặc ốm nặng, bạn vẫn sống thoải mái 3-6 tháng trong khi tìm giải pháp mới. 🆘",
      },
      {
        id: "q2",
        type: "transaction",
        scenario: "Xây dựng quỹ khẩn cấp 6 tháng (chi tiêu 3 triệu/tháng)",
        startBalance: 0,
        currency: "đ",
        steps: [
          { description: "Mục tiêu: 6 tháng × 3 triệu = 18 triệu 🎯", amount: 0, type: "save", hint: "Đặt mục tiêu" },
          { description: "Tháng 1: Tiết kiệm 10% thu nhập 💰", amount: 500000, type: "save", hint: "Bắt đầu nhỏ" },
          { description: "Tháng 2-6: Kiên trì mỗi tháng 500k 💪", amount: 2500000, type: "save", hint: "5 tháng × 500k" },
        ],
        question: "Sau 6 tháng tiết kiệm 500k/tháng, có bao nhiêu?",
        correctAnswer: 3000000,
        explanation: "3 triệu sau 6 tháng. Còn xa mục tiêu 18 triệu, nhưng đây là khởi đầu tốt! Tăng dần số tiết kiệm khi thu nhập tăng. Bước nhỏ mỗi ngày = kết quả lớn! 💪",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // NHÓM 13-16 TUỔI: Bài 20-30
  // ─────────────────────────────────────────────────────────────
  {
    id: "lesson-20",
    title: "Cổ Phiếu Cơ Bản",
    subtitle: "Sở hữu một phần công ty",
    ageGroup: "13-16",
    category: "concept",
    icon: "📈",
    color: "#1976D2",
    bgColor: "#E3F2FD",
    xp: 230,
    description: "Hiểu cổ phiếu là gì và tại sao mọi người đầu tư vào chứng khoán.",
    questions: [
      {
        id: "q1",
        type: "quiz",
        question: "Mua cổ phiếu của Vinamilk nghĩa là gì?",
        image: "🥛",
        options: [
          { text: "Được uống sữa miễn phí mãi mãi", emoji: "🥛" },
          { text: "Trở thành một chủ sở hữu nhỏ của Vinamilk", emoji: "🏢" },
          { text: "Được làm việc tại Vinamilk", emoji: "💼" },
          { text: "Mượn tiền của Vinamilk", emoji: "💰" },
        ],
        correct: 1,
        explanation: "Mua cổ phiếu = mua một phần nhỏ của công ty! 1 cổ phiếu Vinamilk = bạn sở hữu một phần triệu công ty. Công ty lãi → cổ phiếu tăng giá → bạn có lời! 📈",
      },
      {
        id: "q2",
        type: "ab",
        question: "Cổ phiếu và trái phiếu khác nhau thế nào?",
        image: "⚖️",
        optionA: {
          emoji: "📈",
          title: "Cổ phiếu",
          description: "Sở hữu phần công ty, lợi nhuận không cố định, rủi ro cao hơn, tiềm năng lợi nhuận cao hơn",
        },
        optionB: {
          emoji: "📄",
          title: "Trái phiếu",
          description: "Cho công ty/nhà nước vay tiền, lãi suất cố định, an toàn hơn cổ phiếu",
        },
        bestChoice: "A",
        explanation: "Không có cái nào tốt hơn tuyệt đối! CỔ PHIẾU: rủi ro cao, lợi nhuận tiềm năng cao. TRÁI PHIẾU: an toàn hơn, lợi nhuận cố định. Nhà đầu tư thông minh kết hợp cả hai! 💡",
      },
      {
        id: "q3",
        type: "quiz",
        question: "Vì sao không nên bỏ tất cả tiền vào 1 cổ phiếu?",
        image: "🥚",
        options: [
          { text: "Mua nhiều cổ phiếu thì tiết kiệm được phí", emoji: "💰" },
          { text: "Không được phép mua 1 cổ phiếu số lượng lớn", emoji: "🚫" },
          { text: "Như để tất cả trứng vào 1 giỏ - nếu công ty đó phá sản, mất hết", emoji: "🥚" },
          { text: "Quy định của nhà nước", emoji: "🏛️" },
        ],
        correct: 2,
        explanation: "\"Đừng để tất cả trứng vào một giỏ!\" Nếu đầu tư 100% vào 1 công ty rồi công ty đó phá sản = mất hết. Đa dạng hóa danh mục đầu tư giúp giảm rủi ro! 🧺",
      },
    ],
  },

  {
    id: "lesson-21",
    title: "Khởi Nghiệp Cơ Bản",
    subtitle: "Tạo ra giá trị và kiếm tiền",
    ageGroup: "13-16",
    category: "concept",
    icon: "🚀",
    color: "#4CAF50",
    bgColor: "#E8F5E9",
    xp: 250,
    description: "Tìm hiểu về khởi nghiệp, mô hình kinh doanh và cách tạo ra giá trị.",
    questions: [
      {
        id: "q1",
        type: "quiz",
        question: "Startup thành công cần điều gì nhất?",
        image: "🚀",
        options: [
          { text: "Nhiều vốn ngay từ đầu", emoji: "💰" },
          { text: "Giải quyết vấn đề thực tế mà người ta sẵn sàng trả tiền", emoji: "💡" },
          { text: "Ý tưởng thật độc đáo chưa ai nghĩ ra", emoji: "🌟" },
          { text: "Có quen biết nhiều người nổi tiếng", emoji: "👥" },
        ],
        correct: 1,
        explanation: "Startup thành công = giải quyết PAIN POINT (vấn đề đau đầu) mà người dùng sẵn sàng bỏ tiền ra. Grab giải quyết 'gọi xe khó khăn'. Shopee giải quyết 'mua hàng online dễ hơn'. 💡",
      },
      {
        id: "q2",
        type: "transaction",
        scenario: "Khanh bán nước chanh trong trường",
        startBalance: 0,
        currency: "đ",
        steps: [
          { description: "Chi phí mua nguyên liệu (chanh, đường, ly) 🛒", amount: 100000, type: "expense", hint: "Chi phí ban đầu" },
          { description: "Bán được 30 ly × 8.000đ 💰", amount: 240000, type: "income", hint: "Doanh thu = 30 × 8k" },
          { description: "Ngày 2: Mua thêm nguyên liệu 🛒", amount: 80000, type: "expense", hint: "Tái đầu tư" },
          { description: "Bán được 25 ly × 8.000đ 💰", amount: 200000, type: "income", hint: "Bán ít hơn ngày 1" },
        ],
        question: "Khanh kiếm được bao nhiêu lợi nhuận sau 2 ngày?",
        correctAnswer: 260000,
        explanation: "Lợi nhuận 260.000đ sau 2 ngày! Doanh thu 440k - Chi phí 180k = 260k. Đây là mô hình kinh doanh đơn giản nhất: mua rẻ, bán đắt hơn, phần chênh là lợi nhuận! 🚀",
      },
    ],
  },

  {
    id: "lesson-22",
    title: "Mục Tiêu Tài Chính 5 Năm",
    subtitle: "Lập kế hoạch dài hạn",
    ageGroup: "13-16",
    category: "choice",
    icon: "🗓️",
    color: "#9C27B0",
    bgColor: "#F3E5F5",
    xp: 220,
    description: "Học cách đặt mục tiêu tài chính dài hạn và lên kế hoạch thực hiện.",
    questions: [
      {
        id: "q1",
        type: "quiz",
        question: "Mục tiêu tài chính tốt theo tiêu chuẩn SMART cần gì?",
        image: "🎯",
        options: [
          { text: "Specific (cụ thể), Measurable (đo được), Achievable (khả thi), Relevant (liên quan), Time-bound (có thời hạn)", emoji: "✅" },
          { text: "Silly (ngốc nghếch), Massive (to lớn), Ambitious (tham vọng)...", emoji: "😅" },
          { text: "Simple (đơn giản) và Magic (thần kỳ)", emoji: "✨" },
          { text: "Spending (chi tiêu) Money And Rewards Today", emoji: "💸" },
        ],
        correct: 0,
        explanation: "SMART Goal: Specific (cụ thể), Measurable (đo lường được), Achievable (khả thi), Relevant (phù hợp), Time-bound (có deadline). VD: 'Tiết kiệm 12 triệu trong 12 tháng bằng cách để dành 1 triệu/tháng'! 🎯",
      },
      {
        id: "q2",
        type: "ab",
        question: "Mục tiêu tài chính nào theo chuẩn SMART hơn?",
        image: "📝",
        optionA: {
          emoji: "💭",
          title: "\"Tôi muốn tiết kiệm nhiều tiền\"",
          description: "Không rõ bao nhiêu, khi nào",
        },
        optionB: {
          emoji: "🎯",
          title: "\"Tiết kiệm 50 triệu trong 3 năm bằng 1,4 triệu/tháng\"",
          description: "Cụ thể, đo được, có deadline rõ ràng",
        },
        bestChoice: "B",
        explanation: "Mục tiêu cụ thể + đo được = dễ theo dõi và đạt được hơn! 'Nhiều tiền' không biết đủ lúc nào. '50 triệu trong 3 năm' = biết chính xác cần làm gì mỗi tháng! ✅",
      },
    ],
  },

  {
    id: "lesson-23",
    title: "Crypto & Đầu Tư Rủi Ro Cao",
    subtitle: "Hiểu rõ trước khi tham gia",
    ageGroup: "13-16",
    category: "compare",
    icon: "₿",
    color: "#F7931A",
    bgColor: "#FFF8F0",
    xp: 260,
    description: "Tìm hiểu về tiền điện tử, NFT và các loại đầu tư rủi ro cao.",
    questions: [
      {
        id: "q1",
        type: "quiz",
        question: "Bitcoin là gì?",
        image: "₿",
        options: [
          { text: "Tiền số phi tập trung, không do ngân hàng hay chính phủ kiểm soát", emoji: "₿" },
          { text: "Tiền điện tử do ngân hàng Mỹ phát hành", emoji: "🏦" },
          { text: "Một loại cổ phiếu công ty công nghệ", emoji: "📈" },
          { text: "Tiền ảo chỉ dùng trong game", emoji: "🎮" },
        ],
        correct: 0,
        explanation: "Bitcoin = tiền số phi tập trung. Không ai kiểm soát, số lượng giới hạn 21 triệu BTC. Giá biến động rất mạnh: từng tăng 1000% rồi giảm 80% trong 1 năm! 📊",
      },
      {
        id: "q2",
        type: "ab",
        question: "Bạn 15 tuổi, vừa có 5 triệu. Bạn làm gì?",
        image: "🤔",
        optionA: {
          emoji: "₿",
          title: "Đầu tư toàn bộ vào crypto",
          description: "Nghe nói lãi cao lắm, bạn bè cũng làm",
        },
        optionB: {
          emoji: "📚",
          title: "Học về đầu tư trước, chỉ dùng tiền thừa",
          description: "Tìm hiểu kỹ, bắt đầu nhỏ sau khi hiểu rõ",
        },
        bestChoice: "B",
        explanation: "Với crypto: không bao giờ đầu tư tiền bạn không thể để mất! Crypto có thể giảm 90% trong vài tháng. Ở tuổi 15, HỌC là đầu tư tốt nhất. Khi đã hiểu kỹ rồi mới dùng 'tiền thừa' để thử! 📚",
      },
      {
        id: "q3",
        type: "quiz",
        question: "Dấu hiệu của BẪY LỪA ĐẢO tài chính (Ponzi scheme)?",
        image: "🚨",
        options: [
          { text: "Lợi nhuận cam kết 1-2%/tháng, rủi ro thấp", emoji: "🏦" },
          { text: "Hứa lãi 30-50%/tháng, cần giới thiệu người mới, áp lực thời gian", emoji: "🚨" },
          { text: "Đầu tư vào quỹ ETF index fund", emoji: "📊" },
          { text: "Gửi tiết kiệm ngân hàng có lãi suất", emoji: "🏦" },
        ],
        correct: 1,
        explanation: "DẤU HIỆU LỪA ĐẢO: lãi suất quá cao (30-50%/tháng = 360-600%/năm!), phải giới thiệu người mới, áp lực 'cơ hội có giới hạn'. Nhớ: không có khoản đầu tư hợp pháp nào cho lãi cao như vậy! 🚨",
      },
    ],
  },

  {
    id: "lesson-24",
    title: "Thẻ Tín Dụng Thông Minh",
    subtitle: "Dùng đúng cách để có lợi",
    ageGroup: "13-16",
    category: "choice",
    icon: "💳",
    color: "#1565C0",
    bgColor: "#E3F2FD",
    xp: 230,
    description: "Học cách dùng thẻ tín dụng như công cụ tài chính thay vì cái bẫy nợ.",
    questions: [
      {
        id: "q1",
        type: "quiz",
        question: "Dùng thẻ tín dụng đúng cách đem lại lợi ích gì?",
        image: "💳",
        options: [
          { text: "Được vay tiền không cần trả lại", emoji: "🎁" },
          { text: "Cashback, điểm thưởng, bảo vệ mua hàng, xây dựng tín dụng", emoji: "✅" },
          { text: "Lãi suất miễn phí mãi mãi", emoji: "0️⃣" },
          { text: "Không có lợi ích gì ngoài sự tiện lợi", emoji: "📱" },
        ],
        correct: 1,
        explanation: "Dùng thẻ tín dụng ĐÚNG CÁCH (trả đủ + đúng hạn): nhận cashback 1-5%, tích điểm đổi quà, được bảo hiểm mua hàng, xây credit score. ĐIỀU KIỆN: KHÔNG BAO GIỜ trả trễ hoặc trả thiếu! 💳",
      },
      {
        id: "q2",
        type: "ab",
        question: "Cuối tháng thẻ tín dụng báo nợ 5 triệu. Nên làm gì?",
        image: "💭",
        optionA: {
          emoji: "✅",
          title: "Trả đủ 5 triệu trước ngày đến hạn",
          description: "Không mất 1 đồng lãi nào",
        },
        optionB: {
          emoji: "💸",
          title: "Trả tối thiểu 150k theo yêu cầu",
          description: "Trả ít, giữ tiền tiêu thoải mái",
        },
        bestChoice: "A",
        explanation: "Luôn TRẢ ĐỦ! Trả tối thiểu = phần còn lại bị tính lãi 24-36%/năm. Trả tối thiểu 150k nhưng phần còn lại 4,85 triệu sinh lãi ~ 120k/tháng. Tháng sau lại nợ nhiều hơn! ⚠️",
      },
    ],
  },

  {
    id: "lesson-25",
    title: "Lương Và Các Khoản Trừ",
    subtitle: "Hiểu payslip trước khi đi làm",
    ageGroup: "13-16",
    category: "concept",
    icon: "📋",
    color: "#00897B",
    bgColor: "#E0F2F1",
    xp: 210,
    description: "Hiểu phiếu lương, các khoản khấu trừ và lương thực nhận.",
    questions: [
      {
        id: "q1",
        type: "transaction",
        scenario: "Phiếu lương thực tập của Hùng (lương gross 8 triệu)",
        startBalance: 8000000,
        currency: "đ",
        steps: [
          { description: "Bảo hiểm xã hội (8%) 🏥", amount: 640000, type: "expense", hint: "BHXH bắt buộc" },
          { description: "Bảo hiểm y tế (1.5%) 🏥", amount: 120000, type: "expense", hint: "BHYT bắt buộc" },
          { description: "Thuế thu nhập cá nhân (thấp vì mới đi làm) 📊", amount: 0, type: "expense", hint: "Dưới 11 triệu: miễn thuế" },
        ],
        question: "Hùng thực nhận (lương net) bao nhiêu?",
        correctAnswer: 7240000,
        explanation: "Lương NET = 7.240.000đ (từ lương GROSS 8 triệu). BHXH 8% + BHYT 1.5% = trừ 760k. Phần bị trừ này là quyền lợi tương lai: khi về hưu, ốm đau đều được hỗ trợ! 📋",
      },
      {
        id: "q2",
        type: "quiz",
        question: "Tại sao lương gross và lương net khác nhau?",
        image: "💭",
        options: [
          { text: "Công ty giữ lại một phần", emoji: "🏢" },
          { text: "Bị trừ bảo hiểm bắt buộc + thuế thu nhập cá nhân", emoji: "📋" },
          { text: "Ngân hàng thu phí chuyển lương", emoji: "🏦" },
          { text: "Không có lý do rõ ràng", emoji: "🤷" },
        ],
        correct: 1,
        explanation: "Lương GROSS = lương trên hợp đồng. Lương NET = thực nhận sau khi trừ BHXH (8%), BHYT (1.5%), BHTN (1%), thuế TNCN. Khi đàm phán lương, luôn hỏi GROSS hay NET để tránh nhầm! 💡",
      },
    ],
  },

  {
    id: "lesson-26",
    title: "Chỉ Số Tài Chính Cá Nhân",
    subtitle: "Đo sức khỏe tài chính của bạn",
    ageGroup: "13-16",
    category: "concept",
    icon: "📊",
    color: "#5C6BC0",
    bgColor: "#E8EAF6",
    xp: 240,
    description: "Học các chỉ số quan trọng để biết tình hình tài chính cá nhân đang ở đâu.",
    questions: [
      {
        id: "q1",
        type: "quiz",
        question: "Tỷ lệ tiết kiệm (Savings Rate) lý tưởng tối thiểu là bao nhiêu?",
        image: "📊",
        options: [
          { text: "1-5% thu nhập", emoji: "😔" },
          { text: "20% trở lên", emoji: "✅" },
          { text: "50-80% thu nhập", emoji: "😱" },
          { text: "Không cần để ý", emoji: "🤷" },
        ],
        correct: 1,
        explanation: "Tỷ lệ tiết kiệm tối thiểu nên đạt 20% thu nhập. Tiết kiệm 20% nghĩa là bạn làm việc 4 ngày nuôi hiện tại, 1 ngày xây dựng tương lai! Ai đạt 50%+ có thể nghỉ hưu sớm! 💡",
      },
      {
        id: "q2",
        type: "quiz",
        question: "Tỷ lệ nợ/thu nhập (Debt-to-Income) an toàn là bao nhiêu?",
        image: "⚖️",
        options: [
          { text: "Dưới 36% thu nhập hàng tháng", emoji: "✅" },
          { text: "50-70% thu nhập", emoji: "⚠️" },
          { text: "Trên 100%", emoji: "🚨" },
          { text: "Không giới hạn", emoji: "❌" },
        ],
        correct: 0,
        explanation: "Tỷ lệ nợ/thu nhập AN TOÀN = dưới 36%. Nếu lương 10 triệu, tổng trả nợ hàng tháng không nên quá 3,6 triệu. Vượt 50% = vùng nguy hiểm, có thể không đủ tiền sinh hoạt! ⚠️",
      },
    ],
  },

  {
    id: "lesson-27",
    title: "Học Phí Và Sinh Viên",
    subtitle: "Quản lý tài chính thời sinh viên",
    ageGroup: "13-16",
    category: "choice",
    icon: "🎓",
    color: "#E91E63",
    bgColor: "#FCE4EC",
    xp: 220,
    description: "Chuẩn bị tài chính cho thời sinh viên đại học.",
    questions: [
      {
        id: "q1",
        type: "transaction",
        scenario: "Ngân sách tháng sinh viên Hà Nội (sinh viên năm 1)",
        startBalance: 5000000,
        currency: "đ",
        steps: [
          { description: "Tiền phòng trọ 💤", amount: 1800000, type: "expense", hint: "Chi tiêu lớn nhất" },
          { description: "Ăn uống 30 ngày 🍜", amount: 1500000, type: "expense", hint: "Khoảng 50k/ngày" },
          { description: "Đi lại xe buýt/xe máy ⛽", amount: 400000, type: "expense", hint: "Đi học hàng ngày" },
          { description: "Sách vở, học phí phụ 📚", amount: 300000, type: "expense", hint: "Chi phí học tập" },
        ],
        question: "Còn bao nhiêu cho các chi tiêu khác (quần áo, giải trí...)?",
        correctAnswer: 1000000,
        explanation: "Chỉ còn 1 triệu cho tất cả các chi tiêu khác! Thời sinh viên cần rất tiết kiệm. Tìm việc làm thêm hoặc học bổng để có thêm thu nhập là rất quan trọng! 🎓",
      },
      {
        id: "q2",
        type: "ab",
        question: "Để giảm chi phí sinh viên, cách nào hiệu quả hơn?",
        image: "💡",
        optionA: {
          emoji: "🏠",
          title: "Tìm phòng trọ rẻ hơn",
          description: "Giảm 300-500k/tháng nếu ở xa hơn hoặc ghép phòng",
        },
        optionB: {
          emoji: "☕",
          title: "Thôi không uống cafe",
          description: "Tiết kiệm 30-50k/ngày uống cafe",
        },
        bestChoice: "A",
        explanation: "Cả hai đều tốt! Nhưng tiết kiệm từ CHI PHÍ LỚN (phòng trọ) hiệu quả hơn nhiều. Ghép phòng tiết kiệm 500k/tháng = 6 triệu/năm. Không cafe tiết kiệm tối đa 1 triệu/tháng. Tập trung vào 'big wins' trước! 💡",
      },
    ],
  },

  {
    id: "lesson-28",
    title: "Tài Sản vs Tiêu Sản",
    subtitle: "Phân biệt tài sản thực và tài sản giả",
    ageGroup: "13-16",
    category: "compare",
    icon: "⚖️",
    color: "#FF6B35",
    bgColor: "#FFF3EF",
    xp: 270,
    description: "Học khái niệm quan trọng nhất của Robert Kiyosaki về tài sản.",
    questions: [
      {
        id: "q1",
        type: "quiz",
        question: "Theo Robert Kiyosaki, TÀI SẢN thực sự là gì?",
        image: "🏡",
        options: [
          { text: "Nhà, xe, đồ đạc đắt tiền bạn sở hữu", emoji: "🏠" },
          { text: "Thứ gì đó ĐƯA TIỀN VÀO túi bạn mỗi tháng", emoji: "💰" },
          { text: "Tiền trong tài khoản ngân hàng", emoji: "🏦" },
          { text: "Bằng cấp và học vị", emoji: "🎓" },
        ],
        correct: 1,
        explanation: "Kiyosaki định nghĩa: TÀI SẢN = thứ đưa tiền VÀO túi (nhà cho thuê, cổ phiếu sinh cổ tức...). TIÊU SẢN = thứ lấy tiền RA khỏi túi (xe cá nhân, điện thoại đắt tiền...). Ngôi nhà bạn ở = TIÊU SẢN (phải trả tiền điện, nước, bảo dưỡng)! 💡",
      },
      {
        id: "q2",
        type: "ab",
        question: "Cái nào là TÀI SẢN thực sự?",
        image: "⚖️",
        optionA: {
          emoji: "🚗",
          title: "Xe ô tô mới mua",
          description: "Mất giá 20% ngay khi lăn bánh, tốn xăng + bảo dưỡng mỗi tháng",
        },
        optionB: {
          emoji: "🏠",
          title: "Căn hộ cho thuê",
          description: "Nhận tiền thuê mỗi tháng, giá trị có thể tăng theo thời gian",
        },
        bestChoice: "B",
        explanation: "Căn hộ cho thuê là TÀI SẢN thực sự - nó đưa tiền VÀO túi mỗi tháng. Xe cá nhân là TIÊU SẢN - lấy tiền RA mỗi tháng (xăng, bảo dưỡng, bãi đỗ xe). Người giàu tập trung mua TÀI SẢN trước! 💰",
      },
      {
        id: "q3",
        type: "quiz",
        question: "Chiến lược của người giàu theo Kiyosaki là gì?",
        image: "🏆",
        options: [
          { text: "Kiếm tiền → Chi tiêu ngay → Sau đó tiết kiệm phần còn lại", emoji: "💸" },
          { text: "Kiếm tiền → Mua tài sản → Tài sản sinh thu nhập → Dùng thu nhập chi tiêu", emoji: "🔄" },
          { text: "Tiết kiệm tất cả, không bao giờ tiêu tiền", emoji: "🐷" },
          { text: "Vay tiền mua thật nhiều thứ", emoji: "💳" },
        ],
        correct: 1,
        explanation: "Vòng lặp giàu có: Kiếm tiền → Mua TÀI SẢN (cổ phiếu, bất động sản...) → Tài sản sinh thêm thu nhập → Dùng thu nhập thụ động để sống. Người nghèo: Kiếm tiền → Chi tiêu hết → Lại đi làm. 🔄",
      },
    ],
  },

  {
    id: "lesson-29",
    title: "Bất Động Sản Cơ Bản",
    subtitle: "Hiểu về đầu tư nhà đất",
    ageGroup: "13-16",
    category: "concept",
    icon: "🏠",
    color: "#4CAF50",
    bgColor: "#E8F5E9",
    xp: 250,
    description: "Tìm hiểu về bất động sản như một kênh đầu tư và các rủi ro liên quan.",
    questions: [
      {
        id: "q1",
        type: "quiz",
        question: "Lợi thế lớn nhất của đầu tư bất động sản cho thuê là gì?",
        image: "🏠",
        options: [
          { text: "Giá không bao giờ giảm", emoji: "📈" },
          { text: "Có thể dùng đòn bẩy (vay vốn) và có dòng tiền hàng tháng", emoji: "💰" },
          { text: "Không cần vốn ban đầu", emoji: "🆓" },
          { text: "Không phải đóng thuế", emoji: "🚫" },
        ],
        correct: 1,
        explanation: "BĐS ưu điểm: (1) Dùng đòn bẩy - vay 70% ngân hàng, bỏ 30% vốn tự có. (2) Dòng tiền - tiền thuê hàng tháng. (3) Chống lạm phát - giá nhà thường tăng theo thời gian. Nhược điểm: cần vốn lớn, thanh khoản thấp! ⚠️",
      },
      {
        id: "q2",
        type: "ab",
        question: "Bạn vay 2 tỷ mua căn hộ, cho thuê 8 triệu/tháng, trả ngân hàng 10 triệu/tháng. Có nên làm không?",
        image: "🤔",
        optionA: {
          emoji: "✅",
          title: "Nên, vì mình sẽ có nhà",
          description: "Sau vài chục năm nhà là của mình",
        },
        optionB: {
          emoji: "🔍",
          title: "Cần tính toán thêm",
          description: "Đang âm 2 triệu/tháng, cần bù đắp từ thu nhập khác",
        },
        bestChoice: "B",
        explanation: "Thu 8 triệu - Trả 10 triệu = ÂM 2 triệu/tháng. Mỗi tháng phải bù thêm 2 triệu! Trừ khi giá căn hộ tăng đủ để bù lại, đây là BĐS ĐẦU TƯ CHƯA TỐT. Tính kỹ trước khi mua! 💡",
      },
    ],
  },

  {
    id: "lesson-30",
    title: "Kế Hoạch Nghỉ Hưu",
    subtitle: "Sớm không bao giờ là quá sớm",
    ageGroup: "13-16",
    category: "concept",
    icon: "🌴",
    color: "#26A69A",
    bgColor: "#E0F2F1",
    xp: 280,
    description: "Hiểu tại sao bắt đầu tiết kiệm hưu trí từ sớm là quyết định tài chính quan trọng nhất.",
    questions: [
      {
        id: "q1",
        type: "quiz",
        question: "Nếu tiết kiệm 2 triệu/tháng từ 20 tuổi với lãi suất 8%/năm, đến 60 tuổi có khoảng bao nhiêu?",
        image: "🧮",
        options: [
          { text: "Khoảng 960 triệu (vốn gốc × 40 năm)", emoji: "💰" },
          { text: "Khoảng 7-8 tỷ đồng nhờ lãi kép", emoji: "✅" },
          { text: "Khoảng 2-3 tỷ đồng", emoji: "💰" },
          { text: "Không đủ để nghỉ hưu", emoji: "😔" },
        ],
        correct: 1,
        explanation: "Vốn gốc chỉ 960 triệu (2tr × 12 × 40 năm), nhưng với lãi kép 8%/năm trong 40 năm → khoảng 7-8 TỶ ĐỒNG! Đây là phép màu của thời gian + lãi kép. Bắt đầu từ 20 tuổi thay vì 30 tuổi = hơn 3-4 tỷ! ⏰",
      },
      {
        id: "q2",
        type: "transaction",
        scenario: "So sánh: Bắt đầu ở 20 tuổi vs 30 tuổi",
        startBalance: 0,
        currency: "đ",
        steps: [
          { description: "Người A (bắt đầu 20t): tiết kiệm 10 năm đầu (2tr/tháng) rồi dừng 💪", amount: 240000000, type: "save", hint: "Chỉ đóng 10 năm: 240 triệu gốc" },
          { description: "Người A: lãi kép 30 năm tiếp theo (đến 60 tuổi) không cần nộp thêm 📈", amount: 2400000000, type: "income", hint: "Lãi kép làm phần lớn công việc!" },
        ],
        question: "Người A (bắt đầu 20t, dừng 30t) có thể có bao nhiêu lúc 60 tuổi?",
        correctAnswer: 2640000000,
        explanation: "Người A chỉ đóng 10 năm nhưng lại có nhiều hơn Người B đóng 30 năm liên tục từ 30 tuổi! Bí mật: THỜI GIAN. Mỗi năm trì hoãn = mất hàng trăm triệu tiền lãi trong tương lai! Bắt đầu ngay hôm nay! 🌴",
      },
    ],
  },
];

// Helper functions
export const getLessonsByAgeGroup = (ageGroup) => {
  if (ageGroup === "all") return LESSONS;
  return LESSONS.filter((l) => l.ageGroup === ageGroup);
};

export const getLessonById = (id) => {
  return LESSONS.find((l) => l.id === id);
};

export const AGE_GROUPS = [
  { value: "all", label: "Tất cả", emoji: "🌈", color: "bg-gradient-to-r from-pink-500 to-orange-400" },
  { value: "6-8", label: "6-8 tuổi", emoji: "🌱", color: "bg-green-500" },
  { value: "9-12", label: "9-12 tuổi", emoji: "🌿", color: "bg-blue-500" },
  { value: "13-16", label: "13-16 tuổi", emoji: "🌳", color: "bg-purple-500" },
];

export const CATEGORIES = {
  concept: { label: "Khái niệm", emoji: "💡", color: "bg-yellow-100 text-yellow-800" },
  compare: { label: "Phân biệt", emoji: "⚖️", color: "bg-blue-100 text-blue-800" },
  choice: { label: "Lựa chọn", emoji: "🎯", color: "bg-green-100 text-green-800" },
  transaction: { label: "Giao dịch", emoji: "💳", color: "bg-purple-100 text-purple-800" },
};
