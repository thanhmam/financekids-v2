/**
 * FinanceKids — Lesson data (đã phân loại topic + level cho toàn bộ)
 * Mỗi bài: topic, level (foundation|advanced). Bài kho có fromLibrary + câu hỏi kèm skills/bookRefs/marketingHook.
 */
export const LESSONS = [
  {
    "id": "lesson-01",
    "title": "Tiền là gì?",
    "subtitle": "Hiểu về tiền và công dụng",
    "ageGroup": "6-8",
    "category": "concept",
    "icon": "💰",
    "color": "#FFD700",
    "bgColor": "#FFF9E6",
    "xp": 100,
    "description": "Học về tiền là gì và tại sao chúng ta cần đến tiền trong cuộc sống.",
    "questions": [
      {
        "id": "q1",
        "type": "quiz",
        "question": "Tiền dùng để làm gì?",
        "image": "💰",
        "options": [
          {
            "text": "Mua đồ ăn, quần áo và đồ chơi",
            "emoji": "🛒"
          },
          {
            "text": "Dùng để vẽ tranh",
            "emoji": "🎨"
          },
          {
            "text": "Dùng để uống",
            "emoji": "🥤"
          },
          {
            "text": "Dùng để gối đầu ngủ",
            "emoji": "😴"
          }
        ],
        "correct": 0,
        "explanation": "Đúng rồi! Tiền giúp chúng ta mua những thứ chúng ta cần như đồ ăn, quần áo, và những thứ chúng ta thích! 🌟"
      },
      {
        "id": "q2",
        "type": "quiz",
        "question": "Ai kiếm ra tiền cho gia đình?",
        "image": "👨‍👩‍👧‍👦",
        "options": [
          {
            "text": "Chỉ có ông già Noel",
            "emoji": "🎅"
          },
          {
            "text": "Ba mẹ đi làm kiếm tiền",
            "emoji": "👨‍💼"
          },
          {
            "text": "Tiền từ trên trời rơi xuống",
            "emoji": "☁️"
          },
          {
            "text": "Máy ATM tự in ra",
            "emoji": "🏧"
          }
        ],
        "correct": 1,
        "explanation": "Ba mẹ đi làm việc để kiếm tiền nuôi gia đình. Đó là lý do tại sao công việc rất quan trọng! 💪"
      },
      {
        "id": "q3",
        "type": "ab",
        "question": "Nếu có 10.000đ, con sẽ chọn gì?",
        "image": "🤔",
        "optionA": {
          "emoji": "🍦",
          "title": "Mua kem ngay bây giờ",
          "description": "Ăn ngon ngay hôm nay!"
        },
        "optionB": {
          "emoji": "🐷",
          "title": "Bỏ vào heo đất",
          "description": "Tiết kiệm để mua thứ to hơn!"
        },
        "bestChoice": "B",
        "explanation": "Cả hai đều không sai! Nhưng nếu tiết kiệm, con có thể mua được thứ con thích hơn sau này. Đó gọi là TIẾT KIỆM! 🌟"
      }
    ],
    "topic": "money-basics",
    "level": "foundation"
  },
  {
    "id": "lesson-02",
    "title": "Cần và Muốn",
    "subtitle": "Phân biệt thứ cần thiết và thứ muốn có",
    "ageGroup": "6-8",
    "category": "compare",
    "icon": "⚖️",
    "color": "#4CAF50",
    "bgColor": "#E8F5E9",
    "xp": 120,
    "description": "Học cách phân biệt những thứ PHẢI có và những thứ MUỐN có.",
    "questions": [
      {
        "id": "q1",
        "type": "quiz",
        "question": "Thứ nào là thứ CẦN THIẾT (phải có)?",
        "image": "🏠",
        "options": [
          {
            "text": "Đồ chơi robot mới",
            "emoji": "🤖"
          },
          {
            "text": "Cơm ăn mỗi ngày",
            "emoji": "🍚"
          },
          {
            "text": "Điện thoại xịn",
            "emoji": "📱"
          },
          {
            "text": "Giày sneaker đắt tiền",
            "emoji": "👟"
          }
        ],
        "correct": 1,
        "explanation": "Cơm ăn là thứ CẦN THIẾT - không có sẽ bị đói! Đồ chơi và giày xịn là thứ MUỐN CÓ - không có cũng không sao. 🍚"
      },
      {
        "id": "q2",
        "type": "ab",
        "question": "Cái nào là MUỐN CÓ (want), cái nào là CẦN THIẾT (need)?",
        "image": "❓",
        "optionA": {
          "emoji": "🛏️",
          "title": "Giường ngủ",
          "description": "Thứ cần có để nghỉ ngơi"
        },
        "optionB": {
          "emoji": "🎮",
          "title": "Máy game PS5",
          "description": "Thứ muốn có để chơi"
        },
        "bestChoice": "A",
        "explanation": "Giường ngủ là CẦN THIẾT (need) - không có giường ngủ sẽ rất khó chịu. PS5 là MUỐN CÓ (want) - rất vui nếu có nhưng không có cũng được! 😊"
      },
      {
        "id": "q3",
        "type": "quiz",
        "question": "Khi tiền không đủ, nên mua thứ gì trước?",
        "image": "💭",
        "options": [
          {
            "text": "Thứ đắt nhất trước",
            "emoji": "💎"
          },
          {
            "text": "Thứ mình thích nhất",
            "emoji": "❤️"
          },
          {
            "text": "Thứ cần thiết trước",
            "emoji": "✅"
          },
          {
            "text": "Không mua gì cả",
            "emoji": "🚫"
          }
        ],
        "correct": 2,
        "explanation": "Luôn mua thứ CẦN THIẾT trước (đồ ăn, thuốc...), sau đó mới nghĩ đến thứ MUỐN CÓ. Đó là cách dùng tiền thông minh! 🧠"
      }
    ],
    "topic": "money-basics",
    "level": "foundation"
  },
  {
    "id": "lesson-03",
    "title": "Heo Đất Thần Kỳ",
    "subtitle": "Học về tiết kiệm tiền",
    "ageGroup": "6-8",
    "category": "choice",
    "icon": "🐷",
    "color": "#E91E63",
    "bgColor": "#FCE4EC",
    "xp": 150,
    "description": "Khám phá sức mạnh của việc tiết kiệm tiền mỗi ngày.",
    "questions": [
      {
        "id": "q1",
        "type": "transaction",
        "scenario": "Heo đất của Minh",
        "startBalance": 0,
        "currency": "đ",
        "steps": [
          {
            "description": "Ba thưởng Minh vì được điểm 10 🎉",
            "amount": 50000,
            "type": "income",
            "hint": "Nhận tiền thưởng!"
          },
          {
            "description": "Mẹ cho tiền mua văn phòng phẩm 📚",
            "amount": 20000,
            "type": "income",
            "hint": "Nhận tiền từ mẹ"
          },
          {
            "description": "Minh mua bút chì và tẩy ✏️",
            "amount": 15000,
            "type": "expense",
            "hint": "Trả tiền mua đồ"
          },
          {
            "description": "Minh bỏ phần còn lại vào heo đất 🐷",
            "amount": 55000,
            "type": "save",
            "hint": "Tiết kiệm nào!"
          }
        ],
        "question": "Minh tiết kiệm được bao nhiêu tiền?",
        "correctAnswer": 55000,
        "explanation": "Giỏi lắm! Minh tiết kiệm được 55.000đ. Nếu cứ tiết kiệm đều đặn như vậy, Minh sẽ sớm có đủ tiền mua thứ mình muốn! 🌟"
      }
    ],
    "topic": "saving",
    "level": "foundation"
  },
  {
    "id": "lesson-04",
    "title": "Đồng Tiền Đến Từ Đâu?",
    "subtitle": "Khám phá nguồn gốc của tiền",
    "ageGroup": "6-8",
    "category": "concept",
    "icon": "🏭",
    "color": "#00BCD4",
    "bgColor": "#E0F7FA",
    "xp": 100,
    "description": "Tìm hiểu tại sao tiền tồn tại và tiền được tạo ra như thế nào.",
    "questions": [
      {
        "id": "q1",
        "type": "quiz",
        "question": "Ngày xưa khi chưa có tiền, người ta trao đổi bằng cách nào?",
        "image": "🔄",
        "options": [
          {
            "text": "Đổi đồ lấy đồ (gà đổi lấy gạo)",
            "emoji": "🐔"
          },
          {
            "text": "Xin nhau miễn phí",
            "emoji": "🤝"
          },
          {
            "text": "Dùng điện thoại",
            "emoji": "📱"
          },
          {
            "text": "Dùng thẻ ngân hàng",
            "emoji": "💳"
          }
        ],
        "correct": 0,
        "explanation": "Đúng! Ngày xưa người ta trao đổi trực tiếp: 1 con gà đổi 5 kg gạo. Nhưng rất bất tiện nên người ta phát minh ra TIỀN để dễ trao đổi hơn! 🎉"
      },
      {
        "id": "q2",
        "type": "ab",
        "question": "Ai in ra tiền giấy ở Việt Nam?",
        "image": "🏦",
        "optionA": {
          "emoji": "🏦",
          "title": "Ngân hàng Nhà nước Việt Nam",
          "description": "Cơ quan nhà nước kiểm soát tiền tệ"
        },
        "optionB": {
          "emoji": "🖨️",
          "title": "Ai cũng có thể tự in",
          "description": "Dùng máy in thông thường"
        },
        "bestChoice": "A",
        "explanation": "Chỉ Ngân hàng Nhà nước mới được in tiền! Tự in tiền là phạm pháp và gọi là làm tiền giả - rất nguy hiểm! 🚫"
      },
      {
        "id": "q3",
        "type": "quiz",
        "question": "Tiền xu được làm bằng gì?",
        "image": "🪙",
        "options": [
          {
            "text": "Vàng nguyên chất",
            "emoji": "🥇"
          },
          {
            "text": "Kim loại hợp kim (nhôm, đồng...)",
            "emoji": "⚙️"
          },
          {
            "text": "Nhựa",
            "emoji": "🧴"
          },
          {
            "text": "Gỗ",
            "emoji": "🌳"
          }
        ],
        "correct": 1,
        "explanation": "Tiền xu hiện đại làm bằng hợp kim kim loại (nhôm, đồng, niken...). Ngày xưa mới dùng vàng thật, nhưng quá đắt và nặng! 🪙"
      }
    ],
    "topic": "money-basics",
    "level": "foundation"
  },
  {
    "id": "lesson-05",
    "title": "Cho & Nhận",
    "subtitle": "Học về chia sẻ và từ thiện",
    "ageGroup": "6-8",
    "category": "choice",
    "icon": "❤️",
    "color": "#E91E63",
    "bgColor": "#FCE4EC",
    "xp": 110,
    "description": "Hiểu tại sao chia sẻ tiền với người khác cũng là điều quan trọng.",
    "questions": [
      {
        "id": "q1",
        "type": "ab",
        "question": "Nếu có 20.000đ dư, bạn sẽ làm gì?",
        "image": "💭",
        "optionA": {
          "emoji": "🍬",
          "title": "Mua thêm kẹo cho mình",
          "description": "Ăn thêm ngon hơn!"
        },
        "optionB": {
          "emoji": "❤️",
          "title": "Mua bánh mì tặng bạn khó khăn",
          "description": "Giúp người khác cảm thấy vui"
        },
        "bestChoice": "B",
        "explanation": "Cả hai đều được! Nhưng khi cho đi, bạn sẽ thấy vui hơn là khi chỉ nghĩ đến mình. Khoa học chứng minh: CHO ĐI làm ta HẠNH PHÚC HƠN NHẬN! 💖"
      },
      {
        "id": "q2",
        "type": "quiz",
        "question": "Từ thiện nghĩa là gì?",
        "image": "🤲",
        "options": [
          {
            "text": "Cho tiền vì muốn được khen",
            "emoji": "📣"
          },
          {
            "text": "Tự nguyện giúp đỡ người khó khăn hơn mình",
            "emoji": "❤️"
          },
          {
            "text": "Vay tiền của người khác",
            "emoji": "🤝"
          },
          {
            "text": "Đổi tiền lấy quà",
            "emoji": "🎁"
          }
        ],
        "correct": 1,
        "explanation": "Từ thiện là TỰ NGUYỆN giúp đỡ người khác - không cần ai bắt, không cần được khen. Dù ít hay nhiều, điều quan trọng là tấm lòng! 💖"
      }
    ],
    "topic": "money-basics",
    "level": "foundation"
  },
  {
    "id": "lesson-06",
    "title": "Mục Tiêu Tiết Kiệm",
    "subtitle": "Tiết kiệm vì một lý do cụ thể",
    "ageGroup": "6-8",
    "category": "choice",
    "icon": "🎯",
    "color": "#FF9800",
    "bgColor": "#FFF3E0",
    "xp": 130,
    "description": "Học cách đặt mục tiêu tiết kiệm và theo dõi tiến độ.",
    "questions": [
      {
        "id": "q1",
        "type": "transaction",
        "scenario": "Mục tiêu của Bình: Mua xe đạp 500.000đ",
        "startBalance": 0,
        "currency": "đ",
        "steps": [
          {
            "description": "Tuần 1: Tiết kiệm tiêu vặt 🐷",
            "amount": 50000,
            "type": "save",
            "hint": "Nhịn mua kẹo 1 tuần"
          },
          {
            "description": "Tuần 2: Ba thưởng điểm tốt ⭐",
            "amount": 100000,
            "type": "income",
            "hint": "Tiền thưởng học giỏi"
          },
          {
            "description": "Tuần 3: Tiết kiệm tiếp 🐷",
            "amount": 50000,
            "type": "save",
            "hint": "Kiên trì!"
          },
          {
            "description": "Tuần 4: Mẹ thưởng làm việc nhà 🏠",
            "amount": 80000,
            "type": "income",
            "hint": "Kiếm tiền từ việc nhà"
          }
        ],
        "question": "Bình tiết kiệm được bao nhiêu sau 4 tuần?",
        "correctAnswer": 280000,
        "explanation": "Bình có 280.000đ sau 4 tuần! Còn 220.000đ nữa là mua được xe đạp. Đặt mục tiêu cụ thể giúp mình có động lực tiết kiệm! 🚲"
      },
      {
        "id": "q2",
        "type": "quiz",
        "question": "Bước đầu tiên để tiết kiệm thành công là gì?",
        "image": "🎯",
        "options": [
          {
            "text": "Xin ba mẹ thêm tiền",
            "emoji": "🙏"
          },
          {
            "text": "Đặt mục tiêu cụ thể: tiết kiệm bao nhiêu, để mua gì",
            "emoji": "🎯"
          },
          {
            "text": "Không cần kế hoạch, cứ để dành tự nhiên",
            "emoji": "🤷"
          },
          {
            "text": "Xem bạn bè tiết kiệm bao nhiêu rồi làm theo",
            "emoji": "👀"
          }
        ],
        "correct": 1,
        "explanation": "ĐẶT MỤC TIÊU CỤ THỂ là bước đầu tiên! 'Tôi tiết kiệm 50.000đ/tuần để sau 10 tuần mua xe đạp 500.000đ' - rõ ràng, đo lường được! 🎯"
      }
    ],
    "topic": "saving",
    "level": "foundation"
  },
  {
    "id": "lesson-07",
    "title": "Tiền lì xì Tết",
    "subtitle": "Quản lý tiền thưởng thông minh",
    "ageGroup": "6-8",
    "category": "compare",
    "icon": "🧧",
    "color": "#22c55e",
    "bgColor": "#f0fdf4",
    "xp": 130,
    "description": "Học cách dùng tiền lì xì Tết một cách thông minh.",
    "parentGuide": "Đây là thời điểm tuyệt vời để dạy con về tiền. Cùng con lên kế hoạch: \"Tiền lì xì này mình sẽ dùng như thế nào?\"",
    "questions": [
      {
        "id": "q1",
        "type": "quiz",
        "question": "An nhận được 500.000đ tiền lì xì. Cách nào THÔNG MINH nhất?",
        "image": "💡",
        "options": [
          {
            "text": "Mua đồ chơi hết ngay",
            "emoji": "🎮"
          },
          {
            "text": "Để dành + tiêu một phần",
            "emoji": "🐷"
          },
          {
            "text": "Cho bạn hết",
            "emoji": "🤝"
          },
          {
            "text": "Giấu đi không dùng",
            "emoji": "🙈"
          }
        ],
        "correct": 1,
        "explanation": "Để dành một phần + tiêu một phần là thông minh nhất. Có thể tiêu 200k, tiết kiệm 300k!"
      },
      {
        "id": "q2",
        "type": "ab",
        "question": "An đang phân vân. Bạn tư vấn An điều gì?",
        "image": "🤔",
        "optionA": {
          "emoji": "💸",
          "title": "Tiêu hết 500k ngay",
          "description": "Mua đồ chơi, kẹo, đồ ăn..."
        },
        "optionB": {
          "emoji": "🏦",
          "title": "Gửi tiết kiệm ngân hàng",
          "description": "Bố mẹ giúp mở sổ tiết kiệm"
        },
        "bestChoice": "B",
        "explanation": "Gửi ngân hàng là rất thông minh! Tiền sẽ sinh lãi — sau 1 năm được thêm tiền mà không cần làm gì!"
      },
      {
        "id": "q3",
        "type": "quiz",
        "question": "Nếu tiết kiệm 100.000đ mỗi tháng, sau 6 tháng có bao nhiêu?",
        "image": "💡",
        "options": [
          {
            "text": "100.000đ",
            "emoji": "1️⃣"
          },
          {
            "text": "600.000đ",
            "emoji": "6️⃣"
          },
          {
            "text": "60.000đ",
            "emoji": "0️⃣"
          },
          {
            "text": "1.000.000đ",
            "emoji": "💰"
          }
        ],
        "correct": 1,
        "explanation": "100.000đ × 6 tháng = 600.000đ! Đủ mua nhiều thứ xịn hơn rồi 🎉"
      }
    ],
    "topic": "personal-finance",
    "level": "foundation"
  },
  {
    "id": "lesson-08",
    "title": "Giúp việc nhà",
    "subtitle": "Lao động để kiếm tiền tiêu vặt",
    "ageGroup": "6-8",
    "category": "compare",
    "icon": "🧹",
    "color": "#22c55e",
    "bgColor": "#f0fdf4",
    "xp": 120,
    "description": "Hiểu mối liên hệ giữa làm việc và kiếm tiền.",
    "parentGuide": "Tạo \"bảng công việc\" cho con: quét nhà = 5.000đ, rửa bát = 3.000đ... Giúp con hiểu tiền đến từ sức lao động.",
    "questions": [
      {
        "id": "q1",
        "type": "quiz",
        "question": "Tại sao làm việc nhà có thể kiếm tiền?",
        "image": "💡",
        "options": [
          {
            "text": "Vì tiền mọc từ chổi",
            "emoji": "🧹"
          },
          {
            "text": "Vì lao động tạo ra giá trị",
            "emoji": "💪"
          },
          {
            "text": "Vì bố mẹ thích cho tiền",
            "emoji": "❤️"
          },
          {
            "text": "Không biết tại sao",
            "emoji": "🤷"
          }
        ],
        "correct": 1,
        "explanation": "Khi giúp việc nhà, con tạo ra giá trị (nhà sạch hơn, bố mẹ đỡ vất vả). Đó là lý do được trả tiền!"
      },
      {
        "id": "q2",
        "type": "ab",
        "question": "Lan kiếm được 30.000đ sau 1 tuần giúp việc nhà. Nên làm gì?",
        "image": "🤔",
        "optionA": {
          "emoji": "🍕",
          "title": "Mua pizza ăn ngay",
          "description": "Ăn hết 30.000đ"
        },
        "optionB": {
          "emoji": "🎯",
          "title": "Tiết kiệm có mục tiêu",
          "description": "Dành cho thứ muốn mua"
        },
        "bestChoice": "B",
        "explanation": "Tiết kiệm có mục tiêu giúp bạn không tiêu tiền vô ích. Đặt mục tiêu: \"Tôi đang tiết kiệm để mua ___\""
      },
      {
        "id": "q3",
        "type": "quiz",
        "question": "Nếu quét nhà kiếm 5.000đ mỗi ngày, bao nhiêu ngày để có 50.000đ?",
        "image": "💡",
        "options": [
          {
            "text": "5 ngày",
            "emoji": "5️⃣"
          },
          {
            "text": "100 ngày",
            "emoji": "💯"
          },
          {
            "text": "10 ngày",
            "emoji": "🔟"
          },
          {
            "text": "1 ngày",
            "emoji": "1️⃣"
          }
        ],
        "correct": 2,
        "explanation": "50.000đ ÷ 5.000đ = 10 ngày! Chỉ 10 ngày quét nhà là có 50.000đ rồi 🎉"
      }
    ],
    "topic": "money-basics",
    "level": "foundation"
  },
  {
    "id": "lesson-09",
    "title": "Đi chợ cùng mẹ",
    "subtitle": "Học cách trả tiền và nhận tiền thừa",
    "ageGroup": "6-8",
    "category": "transaction",
    "icon": "🛍️",
    "color": "#22c55e",
    "bgColor": "#f0fdf4",
    "xp": 110,
    "description": "Học cách trả tiền đúng và kiểm tra tiền thừa khi mua hàng ở chợ.",
    "parentGuide": "Dẫn con ra chợ hoặc tạp hóa. Cho con trả tiền và nhận tiền thừa. Hỏi: \"Tiền thừa là bao nhiêu?\"",
    "questions": [
      {
        "id": "q1",
        "type": "quiz",
        "question": "Mua bánh mì 8.000đ, đưa tờ 10.000đ. Tiền thừa là bao nhiêu?",
        "image": "💡",
        "options": [
          {
            "text": "2.000đ",
            "emoji": "✅"
          },
          {
            "text": "8.000đ",
            "emoji": "❌"
          },
          {
            "text": "18.000đ",
            "emoji": "❌"
          },
          {
            "text": "1.000đ",
            "emoji": "❌"
          }
        ],
        "correct": 0,
        "explanation": "10.000đ - 8.000đ = 2.000đ tiền thừa. Luôn nhớ kiểm tra tiền thừa trước khi rời quầy hàng!"
      },
      {
        "id": "q2",
        "type": "quiz",
        "question": "Mua 3 quả trứng, mỗi quả 4.000đ. Tổng tiền cần trả là bao nhiêu?",
        "image": "💡",
        "options": [
          {
            "text": "12.000đ",
            "emoji": "✅"
          },
          {
            "text": "7.000đ",
            "emoji": "❌"
          },
          {
            "text": "4.000đ",
            "emoji": "❌"
          },
          {
            "text": "40.000đ",
            "emoji": "❌"
          }
        ],
        "correct": 0,
        "explanation": "3 quả × 4.000đ = 12.000đ. Giỏi lắm! Biết tính tiền giúp mình không bị thiếu hay thừa tiền."
      },
      {
        "id": "q3",
        "type": "ab",
        "question": "Khi nhận tiền thừa từ người bán, bạn làm gì?",
        "image": "🤔",
        "optionA": {
          "emoji": "💨",
          "title": "Bỏ túi đi ngay",
          "description": "Không cần đếm lại"
        },
        "optionB": {
          "emoji": "🔢",
          "title": "Đếm lại tiền thừa",
          "description": "Kiểm tra đúng số chưa"
        },
        "bestChoice": "B",
        "explanation": "Luôn đếm tiền thừa trước khi đi! Người bán có thể nhầm — không phải cố ý, nhưng mình cần biết để nhắc."
      },
      {
        "id": "q4",
        "type": "transaction",
        "scenario": "Đi chợ với mẹ hôm nay",
        "startBalance": 50000,
        "currency": "đ",
        "steps": [
          {
            "description": "🥬 Mua rau cải",
            "amount": 10000,
            "type": "expense",
            "hint": "Chi tiêu"
          },
          {
            "description": "🥩 Mua thịt heo",
            "amount": 25000,
            "type": "expense",
            "hint": "Chi tiêu"
          },
          {
            "description": "💵 Tiền mẹ cho đi chợ",
            "amount": 50000,
            "type": "income",
            "hint": "Thu nhập"
          },
          {
            "description": "🐷 Tiền thừa bỏ heo đất",
            "amount": 15000,
            "type": "save",
            "hint": "Tiết kiệm"
          }
        ],
        "question": "Số dư cuối cùng là bao nhiêu?",
        "correctAnswer": 80000,
        "explanation": "Số dư cuối cùng là 80.000đ."
      }
    ],
    "topic": "money-basics",
    "level": "foundation"
  },
  {
    "id": "lesson-10",
    "title": "Tiền xu và tờ tiền",
    "subtitle": "Nhận biết các loại tiền Việt Nam",
    "ageGroup": "6-8",
    "category": "compare",
    "icon": "🪙",
    "color": "#22c55e",
    "bgColor": "#f0fdf4",
    "xp": 100,
    "description": "Học nhận biết mệnh giá tiền Việt Nam và biết cách đổi tiền.",
    "parentGuide": "Lấy các tờ tiền và tiền xu ra cùng con. Hỏi: \"Đây là bao nhiêu tiền?\" Chơi trò đổi tiền nhỏ.",
    "questions": [
      {
        "id": "q1",
        "type": "quiz",
        "question": "Tờ tiền màu xanh lá có mệnh giá nào phổ biến ở Việt Nam?",
        "image": "💡",
        "options": [
          {
            "text": "100.000đ",
            "emoji": "✅"
          },
          {
            "text": "500.000đ",
            "emoji": "❌"
          },
          {
            "text": "200.000đ",
            "emoji": "❌"
          },
          {
            "text": "50.000đ",
            "emoji": "❌"
          }
        ],
        "correct": 0,
        "explanation": "Tờ 100.000đ màu xanh lá! Còn tờ 500.000đ màu xanh dương, 200.000đ màu đỏ cam."
      },
      {
        "id": "q2",
        "type": "quiz",
        "question": "2 tờ 20.000đ + 1 tờ 10.000đ = bao nhiêu tiền?",
        "image": "💡",
        "options": [
          {
            "text": "50.000đ",
            "emoji": "✅"
          },
          {
            "text": "30.000đ",
            "emoji": "❌"
          },
          {
            "text": "40.000đ",
            "emoji": "❌"
          },
          {
            "text": "60.000đ",
            "emoji": "❌"
          }
        ],
        "correct": 0,
        "explanation": "20.000đ + 20.000đ + 10.000đ = 50.000đ. Đếm từng tờ một rồi cộng lại nhé!"
      },
      {
        "id": "q3",
        "type": "ab",
        "question": "Có 1 tờ 50.000đ. Bạn cần trả 30.000đ. Nên làm gì?",
        "image": "🤔",
        "optionA": {
          "emoji": "💸",
          "title": "Đưa tờ 50.000đ",
          "description": "Nhận 20.000đ tiền thừa"
        },
        "optionB": {
          "emoji": "🪙",
          "title": "Tìm tiền lẻ 30.000đ",
          "description": "Dùng đúng số tiền cần trả"
        },
        "bestChoice": "B",
        "explanation": "Dùng tiền lẻ chính xác khi có thể — giúp người bán không phải tìm tiền thừa, và thuận tiện hơn cho cả hai!"
      }
    ],
    "topic": "money-basics",
    "level": "foundation"
  },
  {
    "id": "lesson-11",
    "title": "Chia sẻ là hạnh phúc",
    "subtitle": "Dùng tiền để giúp đỡ người khác",
    "ageGroup": "6-8",
    "category": "choice",
    "icon": "🤝",
    "color": "#22c55e",
    "bgColor": "#f0fdf4",
    "xp": 115,
    "description": "Học về việc cho đi và cảm giác hạnh phúc khi giúp người khác.",
    "parentGuide": "Hỏi con: \"Con muốn dùng một phần tiền tiết kiệm để giúp ai không?\" Cùng tìm một việc tốt có thể làm.",
    "questions": [
      {
        "id": "q1",
        "type": "ab",
        "question": "Bạn có 50.000đ. Bạn thấy bạn cùng lớp quên mang tiền ăn. Bạn làm gì?",
        "image": "🤔",
        "optionA": {
          "emoji": "🤷",
          "title": "Không làm gì",
          "description": "Tiền của mình, của mình giữ"
        },
        "optionB": {
          "emoji": "🤝",
          "title": "Cho bạn mượn ăn trưa",
          "description": "Bạn sẽ trả lại sau"
        },
        "bestChoice": "B",
        "explanation": "Giúp đỡ bạn bè khi khó khăn là điều tốt đẹp! Tiền có thể dùng để tạo ra hạnh phúc cho người khác."
      },
      {
        "id": "q2",
        "type": "quiz",
        "question": "Tại sao việc quyên góp từ thiện là điều tốt?",
        "image": "💡",
        "options": [
          {
            "text": "Giúp người khó khăn có cuộc sống tốt hơn",
            "emoji": "❤️"
          },
          {
            "text": "Để được người khác khen ngợi",
            "emoji": "👏"
          },
          {
            "text": "Vì bắt buộc phải làm",
            "emoji": "😐"
          },
          {
            "text": "Để giảm tiền của mình đi",
            "emoji": "💸"
          }
        ],
        "correct": 0,
        "explanation": "Từ thiện thực sự là từ trái tim — giúp người khó khăn có cơm ăn, áo mặc, sách vở. Hạnh phúc của họ cũng là hạnh phúc của mình!"
      },
      {
        "id": "q3",
        "type": "ab",
        "question": "Muốn giúp đỡ người nghèo nhưng chỉ có ít tiền. Bạn làm gì?",
        "image": "🤔",
        "optionA": {
          "emoji": "😔",
          "title": "Không đủ tiền nên thôi",
          "description": "Chờ có nhiều tiền hơn"
        },
        "optionB": {
          "emoji": "🌱",
          "title": "Góp một phần nhỏ",
          "description": "Nhiều giọt nước tạo thành biển"
        },
        "bestChoice": "B",
        "explanation": "Không cần nhiều! 5.000đ hay 10.000đ cũng có ý nghĩa. Khi nhiều người góp chút, tổng lại rất lớn!"
      }
    ],
    "topic": "money-basics",
    "level": "foundation"
  },
  {
    "id": "lesson-12",
    "title": "Giữ gìn đồ vật",
    "subtitle": "Chăm sóc đồ vật giúp tiết kiệm tiền",
    "ageGroup": "6-8",
    "category": "compare",
    "icon": "🔧",
    "color": "#22c55e",
    "bgColor": "#f0fdf4",
    "xp": 110,
    "description": "Hiểu rằng giữ gìn đồ đạc cẩn thận giúp gia đình không phải mua lại.",
    "parentGuide": "Cùng con kiểm kê đồ chơi, sách vở. Hỏi: \"Cái này hỏng thì phải mua mới tốn bao nhiêu tiền?\"",
    "questions": [
      {
        "id": "q1",
        "type": "ab",
        "question": "Sách giáo khoa mới mua 50.000đ. Nếu vẽ lên sách và làm hỏng, điều gì xảy ra?",
        "image": "🤔",
        "optionA": {
          "emoji": "🙈",
          "title": "Không sao cả",
          "description": "Đó là sách của mình"
        },
        "optionB": {
          "emoji": "💸",
          "title": "Phải mua quyển mới",
          "description": "Tốn thêm 50.000đ nữa"
        },
        "bestChoice": "B",
        "explanation": "Khi làm hỏng đồ, gia đình phải mua lại — tốn tiền! Giữ gìn đồ vật = giúp gia đình tiết kiệm tiền."
      },
      {
        "id": "q2",
        "type": "quiz",
        "question": "Cách nào giúp đồ chơi bền lâu hơn?",
        "image": "💡",
        "options": [
          {
            "text": "Cất gọn sau khi chơi xong",
            "emoji": "✅"
          },
          {
            "text": "Vứt ra sàn nhà",
            "emoji": "❌"
          },
          {
            "text": "Ném vào tường",
            "emoji": "❌"
          },
          {
            "text": "Để ngoài trời mưa",
            "emoji": "❌"
          }
        ],
        "correct": 0,
        "explanation": "Cất gọn sau khi dùng giúp đồ vật không bị hỏng, không mất, dùng được lâu hơn!"
      },
      {
        "id": "q3",
        "type": "quiz",
        "question": "Giày mới 200.000đ. Nếu bảo quản tốt dùng được 2 năm. Nếu không giữ gìn chỉ được 6 tháng. Tiết kiệm được bao nhiêu?",
        "image": "💡",
        "options": [
          {
            "text": "Tiết kiệm 400.000đ (không phải mua thêm 2 đôi)",
            "emoji": "✅"
          },
          {
            "text": "200.000đ",
            "emoji": "❌"
          },
          {
            "text": "Không tiết kiệm được gì",
            "emoji": "❌"
          },
          {
            "text": "100.000đ",
            "emoji": "❌"
          }
        ],
        "correct": 0,
        "explanation": "Giày 6 tháng phải mua 4 đôi trong 2 năm = 800.000đ. Giày 2 năm chỉ cần 1 đôi = 200.000đ. Tiết kiệm 600.000đ!"
      }
    ],
    "topic": "saving",
    "level": "foundation"
  },
  {
    "id": "lesson-13",
    "title": "Ước mơ nhỏ của bé",
    "subtitle": "Tiết kiệm để mua thứ mình muốn",
    "ageGroup": "6-8",
    "category": "transaction",
    "icon": "⭐",
    "color": "#22c55e",
    "bgColor": "#f0fdf4",
    "xp": 125,
    "description": "Học cách đặt mục tiêu và tiết kiệm từng bước để đạt ước mơ.",
    "parentGuide": "Giúp con chọn một món đồ muốn mua và tính xem cần tiết kiệm bao lâu. Lập \"bảng ước mơ\" dán lên tường.",
    "questions": [
      {
        "id": "q1",
        "type": "ab",
        "question": "Bé muốn mua đồ chơi 60.000đ. Mỗi tuần tiết kiệm được 10.000đ. Bé nên làm gì?",
        "image": "🤔",
        "optionA": {
          "emoji": "😢",
          "title": "Bỏ cuộc — lâu quá",
          "description": "6 tuần cơ!"
        },
        "optionB": {
          "emoji": "📅",
          "title": "Tiết kiệm 6 tuần",
          "description": "10.000đ × 6 = 60.000đ"
        },
        "bestChoice": "B",
        "explanation": "6 tuần không lâu! Mỗi tuần bỏ heo đất, sau 6 tuần có đủ tiền. Ước mơ trở thành sự thật nhờ kiên nhẫn!"
      },
      {
        "id": "q2",
        "type": "quiz",
        "question": "Tại sao nên có \"mục tiêu tiết kiệm\"?",
        "image": "💡",
        "options": [
          {
            "text": "Biết mình đang tiết kiệm để làm gì",
            "emoji": "🎯"
          },
          {
            "text": "Vì bố mẹ bắt",
            "emoji": "😤"
          },
          {
            "text": "Để khoe với bạn bè",
            "emoji": "🤳"
          },
          {
            "text": "Không biết tại sao",
            "emoji": "🤷"
          }
        ],
        "correct": 0,
        "explanation": "Có mục tiêu giúp mình kiên nhẫn hơn! Thay vì tiêu bừa, mình sẽ nhớ: \"Mình đang để dành cho ___\""
      },
      {
        "id": "q3",
        "type": "transaction",
        "scenario": "Kế hoạch tiết kiệm của bé",
        "startBalance": 0,
        "currency": "đ",
        "steps": [
          {
            "description": "💰 Tiền bố cho (tuần 1)",
            "amount": 15000,
            "type": "income",
            "hint": "Thu nhập"
          },
          {
            "description": "🐷 Bỏ heo đất",
            "amount": 10000,
            "type": "save",
            "hint": "Tiết kiệm cho mục tiêu"
          },
          {
            "description": "🍬 Mua kẹo",
            "amount": 5000,
            "type": "expense",
            "hint": "Chi tiêu"
          },
          {
            "description": "💰 Tiền mẹ cho (tuần 2)",
            "amount": 15000,
            "type": "income",
            "hint": "Thu nhập"
          },
          {
            "description": "🐷 Bỏ heo đất thêm",
            "amount": 10000,
            "type": "save",
            "hint": "Tiết kiệm"
          }
        ],
        "question": "Số dư cuối cùng là bao nhiêu?",
        "correctAnswer": 45000,
        "explanation": "Số dư cuối cùng là 45.000đ."
      }
    ],
    "topic": "saving",
    "level": "foundation"
  },
  {
    "id": "lesson-14",
    "title": "Thu Nhập & Chi Tiêu",
    "subtitle": "Quản lý tiền vào và tiền ra",
    "ageGroup": "9-12",
    "category": "concept",
    "icon": "📊",
    "color": "#2196F3",
    "bgColor": "#E3F2FD",
    "xp": 150,
    "description": "Hiểu về thu nhập (tiền kiếm được) và chi tiêu (tiền bỏ ra).",
    "questions": [
      {
        "id": "q1",
        "type": "quiz",
        "question": "Thu nhập là gì?",
        "image": "💼",
        "options": [
          {
            "text": "Tiền mình tiêu mỗi ngày",
            "emoji": "🛍️"
          },
          {
            "text": "Tiền mình kiếm được hoặc nhận được",
            "emoji": "💰"
          },
          {
            "text": "Tiền mình vay của người khác",
            "emoji": "🤝"
          },
          {
            "text": "Tiền trong ATM",
            "emoji": "🏧"
          }
        ],
        "correct": 1,
        "explanation": "Thu nhập là TẤT CẢ tiền bạn nhận được: lương làm việc, tiền thưởng, tiền lì xì, hoặc tiền bán đồ. 💰"
      },
      {
        "id": "q2",
        "type": "transaction",
        "scenario": "Ngân sách tháng của Lan (lớp 6)",
        "startBalance": 0,
        "currency": "đ",
        "steps": [
          {
            "description": "Tiền ba mẹ cho tiêu vặt 💵",
            "amount": 300000,
            "type": "income",
            "hint": "Đây là thu nhập của Lan"
          },
          {
            "description": "Mua sách tham khảo 📖",
            "amount": 80000,
            "type": "expense",
            "hint": "Chi tiêu cho học tập"
          },
          {
            "description": "Ăn sáng cả tuần ☕",
            "amount": 70000,
            "type": "expense",
            "hint": "Chi tiêu cho ăn uống"
          },
          {
            "description": "Mua quà sinh nhật bạn 🎁",
            "amount": 50000,
            "type": "expense",
            "hint": "Chi tiêu xã hội"
          }
        ],
        "question": "Lan còn tiết kiệm được bao nhiêu?",
        "correctAnswer": 100000,
        "explanation": "Lan còn 100.000đ. Thu nhập 300k - Chi tiêu 200k = Tiết kiệm 100k. Lan quản lý tiền rất tốt! 🌟"
      },
      {
        "id": "q3",
        "type": "ab",
        "question": "Lan nhận được 500.000đ. Cách nào tốt hơn?",
        "image": "💭",
        "optionA": {
          "emoji": "🛍️",
          "title": "Tiêu hết luôn",
          "description": "Mua tất cả những gì muốn ngay bây giờ"
        },
        "optionB": {
          "emoji": "📋",
          "title": "Lập kế hoạch",
          "description": "Chia tiền: 60% chi tiêu, 30% tiết kiệm, 10% từ thiện"
        },
        "bestChoice": "B",
        "explanation": "Lập kế hoạch trước khi tiêu tiền giúp bạn không bao giờ hết tiền. Đây gọi là LẬP NGÂN SÁCH (Budget)! 📊"
      }
    ],
    "topic": "personal-finance",
    "level": "foundation"
  },
  {
    "id": "lesson-15",
    "title": "Ngân Hàng Là Gì?",
    "subtitle": "Hiểu về vai trò của ngân hàng",
    "ageGroup": "9-12",
    "category": "concept",
    "icon": "🏦",
    "color": "#9C27B0",
    "bgColor": "#F3E5F5",
    "xp": 160,
    "description": "Tìm hiểu ngân hàng làm gì và tại sao gửi tiền ngân hàng an toàn hơn.",
    "questions": [
      {
        "id": "q1",
        "type": "quiz",
        "question": "Ngân hàng làm gì với tiền bạn gửi vào?",
        "image": "🏦",
        "options": [
          {
            "text": "Cất vào két sắt và không làm gì",
            "emoji": "🔒"
          },
          {
            "text": "Cho người khác vay và trả lãi cho bạn",
            "emoji": "💹"
          },
          {
            "text": "Mang đi đốt đi",
            "emoji": "🔥"
          },
          {
            "text": "Chia cho nhân viên ngân hàng",
            "emoji": "👔"
          }
        ],
        "correct": 1,
        "explanation": "Ngân hàng dùng tiền bạn gửi để cho người khác vay. Đổi lại, họ trả cho bạn TIỀN LÃI. Cả hai cùng có lợi! 💹"
      },
      {
        "id": "q2",
        "type": "ab",
        "question": "Giữ 1.000.000đ ở đâu an toàn và có lợi hơn?",
        "image": "🤔",
        "optionA": {
          "emoji": "🏠",
          "title": "Giữ ở nhà",
          "description": "Tiền nằm yên, không sinh thêm, có thể mất nếu bị trộm"
        },
        "optionB": {
          "emoji": "🏦",
          "title": "Gửi ngân hàng",
          "description": "An toàn, được bảo hiểm, còn sinh thêm tiền lãi mỗi năm"
        },
        "bestChoice": "B",
        "explanation": "Gửi ngân hàng an toàn hơn và tiền còn sinh lãi! 1 triệu gửi 1 năm có thể thành 1.050.000đ - 50.000đ là tiền lãi MIỄN PHÍ! 🎉"
      },
      {
        "id": "q3",
        "type": "quiz",
        "question": "Lãi suất 5%/năm nghĩa là gì?",
        "image": "📈",
        "options": [
          {
            "text": "Gửi 100k, sau 1 năm rút được 105k",
            "emoji": "💰"
          },
          {
            "text": "Phải trả thêm 5k phí gửi",
            "emoji": "❌"
          },
          {
            "text": "Ngân hàng giữ 5k của mình",
            "emoji": "😱"
          },
          {
            "text": "Không liên quan đến tiền",
            "emoji": "🤷"
          }
        ],
        "correct": 0,
        "explanation": "Đúng! Gửi 100.000đ với lãi suất 5%/năm → sau 1 năm có 105.000đ. 5.000đ là tiền ngân hàng trả cho bạn vì đã gửi tiền! 🌟"
      }
    ],
    "topic": "money-basics",
    "level": "foundation"
  },
  {
    "id": "lesson-16",
    "title": "Chi Tiêu Thông Minh",
    "subtitle": "So sánh giá và chọn mua khôn ngoan",
    "ageGroup": "9-12",
    "category": "choice",
    "icon": "🧠",
    "color": "#009688",
    "bgColor": "#E0F2F1",
    "xp": 180,
    "description": "Học cách so sánh giá cả và đưa ra quyết định mua sắm thông minh.",
    "questions": [
      {
        "id": "q1",
        "type": "ab",
        "question": "Mua bút chì ở đâu tiết kiệm hơn?",
        "image": "✏️",
        "optionA": {
          "emoji": "🏪",
          "title": "Siêu thị: 12.000đ/hộp",
          "description": "Hộp 12 cây, tiện và gần nhà"
        },
        "optionB": {
          "emoji": "🏬",
          "title": "Cửa hàng văn phòng phẩm: 8.000đ/hộp",
          "description": "Hộp 12 cây giống y hệt, xa hơn 5 phút"
        },
        "bestChoice": "B",
        "explanation": "Mua ở cửa hàng văn phòng phẩm tiết kiệm 4.000đ! Đi thêm 5 phút nhưng tiết kiệm được tiền - đó là quyết định THÔNG MINH! 🧠"
      },
      {
        "id": "q2",
        "type": "quiz",
        "question": "Khi thấy 'SALE 50%', nghĩa là sao?",
        "image": "🏷️",
        "options": [
          {
            "text": "Giảm giá còn một nửa so với giá gốc",
            "emoji": "✅"
          },
          {
            "text": "Mua 1 tặng 1",
            "emoji": "🎁"
          },
          {
            "text": "Hàng kém chất lượng",
            "emoji": "❌"
          },
          {
            "text": "Giá tăng thêm 50%",
            "emoji": "📈"
          }
        ],
        "correct": 0,
        "explanation": "SALE 50% = giảm giá 50%. Áo 200.000đ giảm 50% còn 100.000đ. Nhưng nhớ: chỉ mua khi THỰC SỰ CẦN, không phải vì thấy sale! 🛍️"
      },
      {
        "id": "q3",
        "type": "quiz",
        "question": "Trước khi mua đồ đắt tiền, nên làm gì?",
        "image": "💭",
        "options": [
          {
            "text": "Mua ngay kẻo hết hàng",
            "emoji": "🏃"
          },
          {
            "text": "So sánh giá nhiều nơi rồi mới mua",
            "emoji": "🔍"
          },
          {
            "text": "Hỏi bạn bè có mua không",
            "emoji": "👥"
          },
          {
            "text": "Đợi ba mẹ mua cho",
            "emoji": "😅"
          }
        ],
        "correct": 1,
        "explanation": "Luôn SO SÁNH GIÁ trước khi mua! Cùng một sản phẩm có thể rẻ hơn 20-30% ở chỗ khác. Đây là kỹ năng tiêu tiền thông minh! 🔍"
      }
    ],
    "topic": "personal-finance",
    "level": "foundation"
  },
  {
    "id": "lesson-17",
    "title": "Giá Trị Của Công Việc",
    "subtitle": "Tiền kiếm được từ đâu?",
    "ageGroup": "9-12",
    "category": "concept",
    "icon": "💼",
    "color": "#607D8B",
    "bgColor": "#ECEFF1",
    "xp": 160,
    "description": "Hiểu mối liên hệ giữa công việc, kỹ năng và thu nhập.",
    "questions": [
      {
        "id": "q1",
        "type": "quiz",
        "question": "Tại sao bác sĩ lương cao hơn nhân viên bán hàng?",
        "image": "👨‍⚕️",
        "options": [
          {
            "text": "Bác sĩ may mắn hơn",
            "emoji": "🍀"
          },
          {
            "text": "Bác sĩ học nhiều năm, có kỹ năng hiếm và quan trọng hơn",
            "emoji": "📚"
          },
          {
            "text": "Bác sĩ làm việc nhiều giờ hơn",
            "emoji": "⏰"
          },
          {
            "text": "Nhà nước quyết định",
            "emoji": "🏛️"
          }
        ],
        "correct": 1,
        "explanation": "Bác sĩ học 6+ năm đại học + nhiều năm thực tập, có kỹ năng đặc biệt. Kỹ năng càng hiếm + càng cần thiết = thu nhập càng cao! Đầu tư vào bản thân là đầu tư tốt nhất! 🌟"
      },
      {
        "id": "q2",
        "type": "ab",
        "question": "Bạn muốn làm nghề gì? Cái nào quan trọng hơn khi chọn nghề?",
        "image": "🤔",
        "optionA": {
          "emoji": "💰",
          "title": "Chọn nghề lương cao nhất",
          "description": "Bất kể thích hay không, miễn kiếm nhiều tiền"
        },
        "optionB": {
          "emoji": "❤️",
          "title": "Chọn nghề mình thích + đủ sống",
          "description": "Làm việc mình yêu thích, phát triển giỏi hơn và bền hơn"
        },
        "bestChoice": "B",
        "explanation": "Nghiên cứu chứng minh: người làm việc họ YÊU THÍCH thường thành công và hạnh phúc hơn. Nhưng lý tưởng nhất là tìm nghề bạn thích VÀ được trả công tốt! 💡"
      },
      {
        "id": "q3",
        "type": "quiz",
        "question": "Thu nhập thụ động (passive income) là gì?",
        "image": "😴",
        "options": [
          {
            "text": "Tiền kiếm khi đang ngủ",
            "emoji": "💤"
          },
          {
            "text": "Tiền từ hoạt động không đòi hỏi thời gian làm việc liên tục",
            "emoji": "📈"
          },
          {
            "text": "Tiền từ công việc bán thời gian",
            "emoji": "⌛"
          },
          {
            "text": "Tiền của người thụ động lười biếng",
            "emoji": "🛋️"
          }
        ],
        "correct": 1,
        "explanation": "Thu nhập thụ động = tiền đến mà không cần bạn làm việc liên tục. Ví dụ: cho thuê nhà, cổ tức cổ phiếu, sách bán tự động. Mục tiêu tài chính: xây dựng nhiều nguồn thu nhập thụ động! 💰"
      }
    ],
    "topic": "money-basics",
    "level": "foundation"
  },
  {
    "id": "lesson-18",
    "title": "Bảo Hiểm Là Gì?",
    "subtitle": "Bảo vệ tài chính trước rủi ro",
    "ageGroup": "9-12",
    "category": "concept",
    "icon": "🛡️",
    "color": "#009688",
    "bgColor": "#E0F2F1",
    "xp": 170,
    "description": "Hiểu tại sao bảo hiểm quan trọng và hoạt động như thế nào.",
    "questions": [
      {
        "id": "q1",
        "type": "quiz",
        "question": "Bảo hiểm hoạt động theo nguyên tắc nào?",
        "image": "🛡️",
        "options": [
          {
            "text": "1 người trả tiền, 1 người may mắn được nhận",
            "emoji": "🎰"
          },
          {
            "text": "Nhiều người đóng góp nhỏ, ai gặp rủi ro thì được bù đắp lớn",
            "emoji": "🤝"
          },
          {
            "text": "Ngân hàng cho vay khi cần",
            "emoji": "🏦"
          },
          {
            "text": "Chính phủ trả khi xảy ra sự cố",
            "emoji": "🏛️"
          }
        ],
        "correct": 1,
        "explanation": "Bảo hiểm = chia sẻ rủi ro! 1000 người đóng 1 triệu/năm = 1 tỷ đồng. Ai gặp tai nạn được nhận 500 triệu. Không ai đủ tiền tự chi trả 500 triệu, nhưng 1000 người cùng chia thì được! 🤝"
      },
      {
        "id": "q2",
        "type": "ab",
        "question": "Gia đình nên mua bảo hiểm gì trước?",
        "image": "👨‍👩‍👧‍👦",
        "optionA": {
          "emoji": "🚗",
          "title": "Bảo hiểm xe ô tô sang",
          "description": "Xe đắt phải bảo hiểm kỹ"
        },
        "optionB": {
          "emoji": "🏥",
          "title": "Bảo hiểm y tế cho cả nhà",
          "description": "Ốm đau là chắc chắn xảy ra, viện phí rất cao"
        },
        "bestChoice": "B",
        "explanation": "Bảo hiểm y tế là quan trọng nhất! Ốm đau ai cũng gặp, một lần nhập viện có thể tốn hàng chục triệu. Bảo hiểm y tế giúp gia đình không bị kiệt sức vì viện phí. 🏥"
      }
    ],
    "topic": "personal-finance",
    "level": "foundation"
  },
  {
    "id": "lesson-19",
    "title": "Thuế Là Gì?",
    "subtitle": "Tại sao chúng ta phải đóng thuế?",
    "ageGroup": "9-12",
    "category": "concept",
    "icon": "🏛️",
    "color": "#795548",
    "bgColor": "#EFEBE9",
    "xp": 150,
    "description": "Hiểu thuế là gì và tiền thuế được dùng để làm gì.",
    "questions": [
      {
        "id": "q1",
        "type": "quiz",
        "question": "Tiền thuế mà người dân nộp được dùng để làm gì?",
        "image": "🏛️",
        "options": [
          {
            "text": "Trả lương cho quan chức",
            "emoji": "👔"
          },
          {
            "text": "Xây đường, trường học, bệnh viện, quân đội...",
            "emoji": "🏫"
          },
          {
            "text": "Mua xe xịn cho nhà nước",
            "emoji": "🚗"
          },
          {
            "text": "Để trong kho",
            "emoji": "🏚️"
          }
        ],
        "correct": 1,
        "explanation": "Thuế được dùng cho dịch vụ công: đường xá, trường học, bệnh viện, cảnh sát, quân đội... Không có thuế, nhà nước không có tiền xây những thứ mọi người cùng dùng! 🏫"
      },
      {
        "id": "q2",
        "type": "ab",
        "question": "Thuế VAT (thuế giá trị gia tăng) 10% có nghĩa là sao?",
        "image": "🧾",
        "optionA": {
          "emoji": "🛒",
          "title": "Mua hàng 100.000đ, thực tế trả 110.000đ",
          "description": "10% được cộng vào giá bán và nộp về nhà nước"
        },
        "optionB": {
          "emoji": "💸",
          "title": "Mua hàng 100.000đ, được nhận lại 10.000đ",
          "description": "Nhà nước hoàn tiền lại cho người mua"
        },
        "bestChoice": "A",
        "explanation": "VAT 10% = bạn trả thêm 10% cho nhà nước qua người bán hàng. Mua đồ 100k thực ra trả 110k. Đó là lý do giá trên quầy khác với giá tính thuế trong hóa đơn! 🧾"
      }
    ],
    "topic": "personal-finance",
    "level": "foundation"
  },
  {
    "id": "lesson-20",
    "title": "Lạm Phát",
    "subtitle": "Tại sao hàng hóa ngày càng đắt hơn?",
    "ageGroup": "9-12",
    "category": "concept",
    "icon": "📊",
    "color": "#F44336",
    "bgColor": "#FFEBEE",
    "xp": 180,
    "description": "Hiểu tại sao 100.000đ của ba mẹ ngày xưa mua được nhiều hơn bây giờ.",
    "questions": [
      {
        "id": "q1",
        "type": "quiz",
        "question": "Lạm phát nghĩa là gì?",
        "image": "📈",
        "options": [
          {
            "text": "Giá hàng hóa giảm theo thời gian",
            "emoji": "📉"
          },
          {
            "text": "Giá hàng hóa tăng theo thời gian, tiền mất giá dần",
            "emoji": "📈"
          },
          {
            "text": "Số lượng hàng hóa tăng lên",
            "emoji": "📦"
          },
          {
            "text": "Tiền được in thêm nhiều hơn",
            "emoji": "🖨️"
          }
        ],
        "correct": 1,
        "explanation": "Lạm phát = giá tăng, tiền mất giá! Năm 2000: tô phở 5.000đ. Năm 2024: tô phở 50.000đ. Cùng 1 tô phở nhưng giá tăng 10 lần trong 24 năm! 🍜"
      },
      {
        "id": "q2",
        "type": "ab",
        "question": "Lạm phát 7%/năm. Bạn giữ 10 triệu trong hộp ở nhà. Sau 1 năm thực ra bạn có ít hơn hay nhiều hơn?",
        "image": "🤔",
        "optionA": {
          "emoji": "📦",
          "title": "Vẫn là 10 triệu như cũ",
          "description": "Không mất không được thêm"
        },
        "optionB": {
          "emoji": "📉",
          "title": "Thực ra chỉ như 9,3 triệu",
          "description": "Giá tăng 7%, tiền mua được ít hơn 7%"
        },
        "bestChoice": "B",
        "explanation": "Giữ tiền mặt trong thời lạm phát = mất tiền từ từ! 10 triệu sau 1 năm lạm phát 7% chỉ mua được lượng hàng trị giá 9,3 triệu. Đó là lý do phải đầu tư hoặc gửi tiết kiệm lãi cao hơn lạm phát! 💡"
      }
    ],
    "topic": "money-basics",
    "level": "foundation"
  },
  {
    "id": "lesson-21",
    "title": "Mua Sắm Online An Toàn",
    "subtitle": "Cách mua hàng trực tuyến thông minh",
    "ageGroup": "9-12",
    "category": "choice",
    "icon": "🛒",
    "color": "#FF5722",
    "bgColor": "#FBE9E7",
    "xp": 160,
    "description": "Học cách nhận biết shop uy tín và tránh bị lừa khi mua online.",
    "questions": [
      {
        "id": "q1",
        "type": "quiz",
        "question": "Dấu hiệu nào cho thấy shop online KHÔNG đáng tin?",
        "image": "⚠️",
        "options": [
          {
            "text": "Có nhiều đánh giá 5 sao thực tế từ người mua",
            "emoji": "⭐"
          },
          {
            "text": "Giá rẻ bất thường, không rõ địa chỉ, không có hotline",
            "emoji": "🚨"
          },
          {
            "text": "Có chính sách hoàn trả rõ ràng",
            "emoji": "↩️"
          },
          {
            "text": "Thanh toán qua ví điện tử uy tín",
            "emoji": "💳"
          }
        ],
        "correct": 1,
        "explanation": "Shop LỪA ĐẢO thường: giá rẻ bất thường, không có địa chỉ thực tế, không có hotline, chỉ nhận chuyển khoản trước. CẢNH GIÁC với những dấu hiệu này! ⚠️"
      },
      {
        "id": "q2",
        "type": "ab",
        "question": "Nên dùng phương thức thanh toán nào khi mua online lần đầu từ shop lạ?",
        "image": "💳",
        "optionA": {
          "emoji": "💸",
          "title": "Chuyển khoản trước đầy đủ",
          "description": "Nhanh, shop yêu cầu thì làm"
        },
        "optionB": {
          "emoji": "📦",
          "title": "Thanh toán khi nhận hàng (COD)",
          "description": "Nhận hàng, kiểm tra xong mới trả tiền"
        },
        "bestChoice": "B",
        "explanation": "COD (Cash On Delivery) = thanh toán khi nhận hàng. Với shop lạ, luôn chọn COD để kiểm tra hàng trước khi trả tiền. Nếu hàng không đúng = không mất tiền! 📦"
      }
    ],
    "topic": "digital-assets",
    "level": "foundation"
  },
  {
    "id": "lesson-22",
    "title": "Quỹ Dự Phòng Khẩn Cấp",
    "subtitle": "Tại sao cần tiền dự phòng?",
    "ageGroup": "9-12",
    "category": "concept",
    "icon": "🆘",
    "color": "#FF6B35",
    "bgColor": "#FFF3EF",
    "xp": 170,
    "description": "Học về tầm quan trọng của quỹ khẩn cấp và cách xây dựng nó.",
    "questions": [
      {
        "id": "q1",
        "type": "quiz",
        "question": "Quỹ khẩn cấp nên đủ tiêu trong bao nhiêu tháng?",
        "image": "🆘",
        "options": [
          {
            "text": "1 tuần",
            "emoji": "📅"
          },
          {
            "text": "1 tháng",
            "emoji": "📅"
          },
          {
            "text": "3-6 tháng chi tiêu cơ bản",
            "emoji": "✅"
          },
          {
            "text": "10 năm",
            "emoji": "📅"
          }
        ],
        "correct": 2,
        "explanation": "Quỹ khẩn cấp lý tưởng = 3-6 tháng chi tiêu cơ bản. Nếu mất việc hoặc ốm nặng, bạn vẫn sống thoải mái 3-6 tháng trong khi tìm giải pháp mới. 🆘"
      },
      {
        "id": "q2",
        "type": "transaction",
        "scenario": "Xây dựng quỹ khẩn cấp 6 tháng (chi tiêu 3 triệu/tháng)",
        "startBalance": 0,
        "currency": "đ",
        "steps": [
          {
            "description": "Mục tiêu: 6 tháng × 3 triệu = 18 triệu 🎯",
            "amount": 0,
            "type": "save",
            "hint": "Đặt mục tiêu"
          },
          {
            "description": "Tháng 1: Tiết kiệm 10% thu nhập 💰",
            "amount": 500000,
            "type": "save",
            "hint": "Bắt đầu nhỏ"
          },
          {
            "description": "Tháng 2-6: Kiên trì mỗi tháng 500k 💪",
            "amount": 2500000,
            "type": "save",
            "hint": "5 tháng × 500k"
          }
        ],
        "question": "Sau 6 tháng tiết kiệm 500k/tháng, có bao nhiêu?",
        "correctAnswer": 3000000,
        "explanation": "3 triệu sau 6 tháng. Còn xa mục tiêu 18 triệu, nhưng đây là khởi đầu tốt! Tăng dần số tiết kiệm khi thu nhập tăng. Bước nhỏ mỗi ngày = kết quả lớn! 💪"
      }
    ],
    "topic": "saving",
    "level": "foundation"
  },
  {
    "id": "lesson-23",
    "title": "Lập kế hoạch chi tiêu",
    "subtitle": "Ngân sách cá nhân đầu tiên",
    "ageGroup": "9-12",
    "category": "transaction",
    "icon": "📋",
    "color": "#3b82f6",
    "bgColor": "#eff6ff",
    "xp": 170,
    "description": "Học cách lập ngân sách và quản lý tiền theo kế hoạch.",
    "parentGuide": "Cùng con lập ngân sách cho tiền tiêu vặt hàng tháng. Chia thành: học tập, ăn uống, giải trí, tiết kiệm.",
    "questions": [
      {
        "id": "q1",
        "type": "quiz",
        "question": "Bước đầu tiên khi lập ngân sách là gì?",
        "image": "💡",
        "options": [
          {
            "text": "Biết mình kiếm/nhận được bao nhiêu",
            "emoji": "💰"
          },
          {
            "text": "Mua thứ mình muốn trước",
            "emoji": "🛒"
          },
          {
            "text": "Vay tiền bạn bè",
            "emoji": "🤝"
          },
          {
            "text": "Tiêu hết rồi tính",
            "emoji": "💸"
          }
        ],
        "correct": 0,
        "explanation": "Bước 1 luôn là biết \"mình có bao nhiêu tiền\". Không biết có bao nhiêu thì không thể lập kế hoạch!"
      },
      {
        "id": "q2",
        "type": "transaction",
        "scenario": "Lập ngân sách tháng của bạn",
        "startBalance": 300000,
        "currency": "đ",
        "steps": [
          {
            "description": "📚 Học thêm tiếng Anh",
            "amount": 100000,
            "type": "expense",
            "hint": "Học tập — quan trọng!"
          },
          {
            "description": "🍳 Ăn sáng 10 ngày học",
            "amount": 70000,
            "type": "expense",
            "hint": "Cần thiết"
          },
          {
            "description": "🎮 Game và giải trí",
            "amount": 50000,
            "type": "expense",
            "hint": "Giải trí — hợp lý"
          },
          {
            "description": "🛡️ Dự phòng",
            "amount": 30000,
            "type": "save",
            "hint": "Quỹ dự phòng"
          },
          {
            "description": "🐷 Tiết kiệm heo đất",
            "amount": 50000,
            "type": "save",
            "hint": "Tiết kiệm"
          }
        ],
        "question": "Số dư cuối cùng là bao nhiêu?",
        "correctAnswer": 160000,
        "explanation": "Số dư cuối cùng là 160.000đ."
      },
      {
        "id": "q3",
        "type": "ab",
        "question": "Cuối tháng còn dư 30.000đ so với kế hoạch. Nên làm gì?",
        "image": "🤔",
        "optionA": {
          "emoji": "🎉",
          "title": "Mua đồ ăn ăn mừng",
          "description": "Tiêu hết số tiền dư"
        },
        "optionB": {
          "emoji": "🐷",
          "title": "Chuyển vào tiết kiệm",
          "description": "Tiết kiệm thêm tháng này"
        },
        "bestChoice": "B",
        "explanation": "Tiền dư là \"chiến thắng\"! Chuyển vào tiết kiệm giúp quỹ dự phòng và mục tiêu dài hạn của bạn lớn hơn."
      }
    ],
    "topic": "personal-finance",
    "level": "foundation"
  },
  {
    "id": "lesson-24",
    "title": "Kiếm tiền từ tài năng",
    "subtitle": "Biến kỹ năng thành thu nhập",
    "ageGroup": "9-12",
    "category": "transaction",
    "icon": "🎨",
    "color": "#3b82f6",
    "bgColor": "#eff6ff",
    "xp": 155,
    "description": "Khám phá cách kiếm thêm thu nhập từ tài năng và kỹ năng của bản thân.",
    "parentGuide": "Giúp con nhận ra tài năng đặc biệt của mình. Hỏi: \"Con giỏi vẽ/làm thủ công/dạy bạn không? Đó có thể là nguồn thu nhập!\"",
    "questions": [
      {
        "id": "q1",
        "type": "quiz",
        "question": "Hà giỏi vẽ. Cách nào giúp Hà kiếm tiền từ tài năng này?",
        "image": "💡",
        "options": [
          {
            "text": "Vẽ tranh bán cho bạn bè và hàng xóm",
            "emoji": "🎨"
          },
          {
            "text": "Giấu tài năng vẽ cho riêng mình",
            "emoji": "🙈"
          },
          {
            "text": "Chờ người ta tự đến xin",
            "emoji": "😴"
          },
          {
            "text": "Tài năng không kiếm tiền được",
            "emoji": "❌"
          }
        ],
        "correct": 0,
        "explanation": "Tài năng + Chủ động = Kiếm tiền! Hà có thể vẽ tranh theo yêu cầu, thiết kế thiệp sinh nhật, dạy bạn vẽ..."
      },
      {
        "id": "q2",
        "type": "ab",
        "question": "Minh học giỏi Toán. Bạn cùng lớp cần được kèm. Minh nên làm gì?",
        "image": "🤔",
        "optionA": {
          "emoji": "🎁",
          "title": "Dạy miễn phí",
          "description": "Giúp bạn, không lấy tiền"
        },
        "optionB": {
          "emoji": "💰",
          "title": "Dạy kèm 20-50k/buổi",
          "description": "Tạo ra thu nhập từ kỹ năng"
        },
        "bestChoice": "B",
        "explanation": "Dạy kèm là dịch vụ có giá trị! Minh bỏ công sức và thời gian, được trả công là hoàn toàn hợp lý. Đây là cách kiếm tiền từ kỹ năng!"
      },
      {
        "id": "q3",
        "type": "transaction",
        "scenario": "Thu nhập từ tài năng của Lan (tháng)",
        "startBalance": 0,
        "currency": "đ",
        "steps": [
          {
            "description": "📿 Bán 5 vòng tay handmade",
            "amount": 75000,
            "type": "income",
            "hint": "Thu nhập từ tài năng"
          },
          {
            "description": "📚 Dạy kèm bạn 4 buổi",
            "amount": 120000,
            "type": "income",
            "hint": "Thu nhập dịch vụ"
          },
          {
            "description": "🧵 Mua nguyên liệu làm vòng",
            "amount": 40000,
            "type": "expense",
            "hint": "Chi phí sản xuất"
          },
          {
            "description": "📈 Tiết kiệm mở rộng kinh doanh",
            "amount": 80000,
            "type": "save",
            "hint": "Đầu tư tương lai"
          }
        ],
        "question": "Số dư cuối cùng là bao nhiêu?",
        "correctAnswer": 235000,
        "explanation": "Số dư cuối cùng là 235.000đ."
      },
      {
        "id": "q4",
        "type": "quiz",
        "question": "\"Lợi nhuận\" khi làm kinh doanh nhỏ là gì?",
        "image": "💡",
        "options": [
          {
            "text": "Doanh thu - Chi phí = Lợi nhuận",
            "emoji": "💰"
          },
          {
            "text": "Tổng tiền bán được",
            "emoji": "❌"
          },
          {
            "text": "Tiền khách hàng trả",
            "emoji": "❌"
          },
          {
            "text": "Chi phí nguyên liệu",
            "emoji": "❌"
          }
        ],
        "correct": 0,
        "explanation": "Bán vòng 20k nhưng nguyên liệu tốn 8k → Lợi nhuận = 20k - 8k = 12k. Lợi nhuận mới là tiền thực sự kiếm được!"
      }
    ],
    "topic": "money-basics",
    "level": "foundation"
  },
  {
    "id": "lesson-25",
    "title": "Bẫy quảng cáo",
    "subtitle": "Nhận biết chiêu trò và không bị dụ",
    "ageGroup": "9-12",
    "category": "choice",
    "icon": "🎯",
    "color": "#3b82f6",
    "bgColor": "#eff6ff",
    "xp": 165,
    "description": "Học cách nhận biết và tránh các bẫy quảng cáo, flash sale, FOMO.",
    "parentGuide": "Cùng con xem quảng cáo và phân tích: \"Quảng cáo này đang dùng chiêu gì để hấp dẫn mình?\"",
    "questions": [
      {
        "id": "q1",
        "type": "quiz",
        "question": "\"Flash sale 2 giờ — Còn 3 sản phẩm!\" — Đây là chiêu gì?",
        "image": "💡",
        "options": [
          {
            "text": "Tạo sự khan hiếm và áp lực thời gian",
            "emoji": "⏰"
          },
          {
            "text": "Hàng thực sự sắp hết",
            "emoji": "❌"
          },
          {
            "text": "Khuyến mãi thật sự tốt",
            "emoji": "❌"
          },
          {
            "text": "Không có gì đặc biệt",
            "emoji": "❌"
          }
        ],
        "correct": 0,
        "explanation": "\"Còn ít sản phẩm\" + \"Chỉ còn 2 giờ\" = chiêu tạo sự khan hiếm giả để bạn mua nhanh mà không suy nghĩ!"
      },
      {
        "id": "q2",
        "type": "ab",
        "question": "Thấy giày sale 50%, giá còn 300.000đ. Bạn không cần mua giày. Bạn làm gì?",
        "image": "🤔",
        "optionA": {
          "emoji": "🛒",
          "title": "Mua ngay vì rẻ",
          "description": "Sale đến 50% lần này không có lần khác"
        },
        "optionB": {
          "emoji": "🤔",
          "title": "Không mua",
          "description": "Mình không cần giày nên dù rẻ cũng thừa"
        },
        "bestChoice": "B",
        "explanation": "Sale 50% nhưng mình không cần = tiêu 300k không cần thiết! Chỉ tiết kiệm khi mua thứ đang cần."
      },
      {
        "id": "q3",
        "type": "quiz",
        "question": "FOMO trong mua sắm nghĩa là gì?",
        "image": "💡",
        "options": [
          {
            "text": "Sợ bỏ lỡ — mua vì người khác cũng mua",
            "emoji": "😱"
          },
          {
            "text": "Tên thương hiệu nổi tiếng",
            "emoji": "⭐"
          },
          {
            "text": "Mã giảm giá đặc biệt",
            "emoji": "🏷️"
          },
          {
            "text": "Phương thức thanh toán",
            "emoji": "💳"
          }
        ],
        "correct": 0,
        "explanation": "FOMO = Fear Of Missing Out. Thấy bạn bè mua, mình cũng mua vì sợ bỏ lỡ — đây là bẫy cảm xúc nguy hiểm!"
      },
      {
        "id": "q4",
        "type": "ab",
        "question": "Trước khi mua bất kỳ thứ gì, câu hỏi quan trọng nhất là gì?",
        "image": "🤔",
        "optionA": {
          "emoji": "❓",
          "title": "\"Mình có THỰC SỰ cần không?\"",
          "description": "Dừng lại suy nghĩ 24 giờ"
        },
        "optionB": {
          "emoji": "🛒",
          "title": "\"Mình có ĐỦ TIỀN không?\"",
          "description": "Có tiền = có thể mua"
        },
        "bestChoice": "A",
        "explanation": "Có tiền không có nghĩa là nên mua! Câu hỏi đúng là \"Mình CẦN không?\" — nếu không chắc, đợi 24h rồi quyết định."
      }
    ],
    "topic": "money-basics",
    "level": "foundation"
  },
  {
    "id": "lesson-26",
    "title": "Thanh toán điện tử",
    "subtitle": "QR code, ví điện tử và an toàn số",
    "ageGroup": "9-12",
    "category": "compare",
    "icon": "📱",
    "color": "#3b82f6",
    "bgColor": "#eff6ff",
    "xp": 160,
    "description": "Hiểu về ví điện tử, QR code và cách giữ an toàn khi thanh toán online.",
    "parentGuide": "Cho con xem cách chuyển khoản hoặc quét QR để thanh toán. Hỏi: \"Con nghĩ tiền đi đâu khi mình quét QR?\"",
    "questions": [
      {
        "id": "q1",
        "type": "quiz",
        "question": "Ví điện tử (MoMo, ZaloPay) khác tài khoản ngân hàng thế nào?",
        "image": "💡",
        "options": [
          {
            "text": "Ví điện tử chủ yếu dùng qua app, tiện thanh toán nhỏ",
            "emoji": "📱"
          },
          {
            "text": "Ví điện tử an toàn hơn ngân hàng",
            "emoji": "❌"
          },
          {
            "text": "Ví điện tử không liên kết ngân hàng",
            "emoji": "❌"
          },
          {
            "text": "Ví điện tử không cần mạng internet",
            "emoji": "❌"
          }
        ],
        "correct": 0,
        "explanation": "Ví điện tử tiện cho thanh toán hàng ngày — mua trà sữa, đặt xe, nạp điện thoại. Nhưng tiền vẫn liên kết với ngân hàng!"
      },
      {
        "id": "q2",
        "type": "ab",
        "question": "Có người nhắn tin: \"Mã OTP của bạn là 123456, chia sẻ để nhận thưởng!\" — Bạn làm gì?",
        "image": "🤔",
        "optionA": {
          "emoji": "📨",
          "title": "Gửi mã OTP cho họ",
          "description": "Để nhận phần thưởng hấp dẫn"
        },
        "optionB": {
          "emoji": "🚫",
          "title": "Không bao giờ chia sẻ OTP",
          "description": "Báo cho bố mẹ ngay"
        },
        "bestChoice": "B",
        "explanation": "OTP là mật khẩu bảo vệ tiền! Không ai có quyền yêu cầu OTP của bạn — đây là chiêu lừa đảo phổ biến."
      },
      {
        "id": "q3",
        "type": "quiz",
        "question": "Quét mã QR để thanh toán an toàn hơn tiền mặt ở điểm nào?",
        "image": "💡",
        "options": [
          {
            "text": "Không cần mang tiền mặt, tránh bị mất/cướp",
            "emoji": "✅"
          },
          {
            "text": "Không cần có tiền thật",
            "emoji": "❌"
          },
          {
            "text": "Miễn phí hoàn toàn",
            "emoji": "❌"
          },
          {
            "text": "Không bao giờ bị lừa",
            "emoji": "❌"
          }
        ],
        "correct": 0,
        "explanation": "QR code tiện và an toàn hơn mang nhiều tiền mặt. Nhưng vẫn cần cẩn thận: chỉ quét QR từ nguồn đáng tin cậy!"
      },
      {
        "id": "q4",
        "type": "quiz",
        "question": "Mua hàng online, nên dùng phương thức nào an toàn nhất?",
        "image": "💡",
        "options": [
          {
            "text": "Thanh toán khi nhận hàng (COD)",
            "emoji": "📦"
          },
          {
            "text": "Chuyển khoản trước cho người lạ",
            "emoji": "❌"
          },
          {
            "text": "Gửi tiền mặt qua bưu điện",
            "emoji": "❌"
          },
          {
            "text": "Đưa thẻ ngân hàng cho người bán",
            "emoji": "❌"
          }
        ],
        "correct": 0,
        "explanation": "COD (Cash On Delivery) an toàn nhất khi mua online — trả tiền khi đã nhận và kiểm tra hàng. Không chuyển khoản trước cho người lạ!"
      }
    ],
    "topic": "digital-assets",
    "level": "foundation"
  },
  {
    "id": "lesson-27",
    "title": "Mục tiêu tiết kiệm SMART",
    "subtitle": "Đặt mục tiêu có thể đạt được",
    "ageGroup": "9-12",
    "category": "compare",
    "icon": "🎯",
    "color": "#3b82f6",
    "bgColor": "#eff6ff",
    "xp": 170,
    "description": "Học cách đặt mục tiêu tiết kiệm SMART và theo dõi tiến độ từng tuần.",
    "parentGuide": "Cùng con lập mục tiêu SMART cho một thứ con muốn có. Tạo \"bảng theo dõi tiến độ\" dán tường.",
    "questions": [
      {
        "id": "q1",
        "type": "quiz",
        "question": "\"SMART\" trong đặt mục tiêu nghĩa là gì? (S = Specific)",
        "image": "💡",
        "options": [
          {
            "text": "Cụ thể, đo được, khả thi, liên quan, có thời hạn",
            "emoji": "🎯"
          },
          {
            "text": "Thông minh, nhanh, cẩn thận",
            "emoji": "❌"
          },
          {
            "text": "Tiết kiệm, mua, đạt, thực hiện",
            "emoji": "❌"
          },
          {
            "text": "Chia sẻ, nhớ, hành động, hoàn thành",
            "emoji": "❌"
          }
        ],
        "correct": 0,
        "explanation": "SMART = Specific (Cụ thể) + Measurable (Đo được) + Achievable (Khả thi) + Relevant (Liên quan) + Time-bound (Có thời hạn)."
      },
      {
        "id": "q2",
        "type": "ab",
        "question": "Mục tiêu nào là SMART hơn?",
        "image": "🤔",
        "optionA": {
          "emoji": "💭",
          "title": "\"Tôi muốn tiết kiệm nhiều hơn\"",
          "description": "Mơ hồ, không có số cụ thể"
        },
        "optionB": {
          "emoji": "🎯",
          "title": "\"Tiết kiệm 500k trong 10 tuần\"",
          "description": "50k/tuần, deadline rõ ràng"
        },
        "bestChoice": "B",
        "explanation": "\"500k trong 10 tuần\" = SMART! Cụ thể (500k), đo được (từng tuần), có thời hạn (10 tuần). Dễ theo dõi và không bỏ cuộc!"
      },
      {
        "id": "q3",
        "type": "quiz",
        "question": "Cuối tuần 3, tiến độ đạt 120k thay vì 150k theo kế hoạch. Bạn làm gì?",
        "image": "💡",
        "options": [
          {
            "text": "Tìm cách bù 30k trong 2 tuần tiếp",
            "emoji": "💪"
          },
          {
            "text": "Bỏ cuộc vì không đạt tiến độ",
            "emoji": "❌"
          },
          {
            "text": "Tăng mục tiêu lên cho khó hơn",
            "emoji": "❌"
          },
          {
            "text": "Giả vờ không có kế hoạch",
            "emoji": "🙈"
          }
        ],
        "correct": 0,
        "explanation": "Chậm tiến độ không có nghĩa là thất bại! Điều chỉnh: tiết kiệm thêm 15k/tuần trong 2 tuần, hoặc kéo dài thêm 2 tuần."
      }
    ],
    "topic": "saving",
    "level": "foundation"
  },
  {
    "id": "lesson-28",
    "title": "Vay và cho vay tiền",
    "subtitle": "Trách nhiệm và hậu quả",
    "ageGroup": "9-12",
    "category": "choice",
    "icon": "🤝",
    "color": "#3b82f6",
    "bgColor": "#eff6ff",
    "xp": 160,
    "description": "Hiểu trách nhiệm khi vay tiền và hệ quả của việc không trả nợ.",
    "parentGuide": "Hỏi con: \"Nếu vay tiền bạn mà không trả, điều gì xảy ra với tình bạn đó?\" Thảo luận về uy tín cá nhân.",
    "questions": [
      {
        "id": "q1",
        "type": "ab",
        "question": "Bạn vay 50.000đ từ bạn để mua đồ ăn. Khi có tiền, bạn làm gì?",
        "image": "🤔",
        "optionA": {
          "emoji": "🎮",
          "title": "Mua game rồi tính sau",
          "description": "Có tiền nhưng chưa trả"
        },
        "optionB": {
          "emoji": "✅",
          "title": "Trả ngay khi có tiền",
          "description": "Giữ lời hứa với bạn"
        },
        "bestChoice": "B",
        "explanation": "Trả nợ đúng hẹn xây dựng UY TÍN! Bạn bè và người lớn sẽ tin tưởng bạn hơn trong tương lai."
      },
      {
        "id": "q2",
        "type": "quiz",
        "question": "Lãi suất khi vay tiền là gì?",
        "image": "💡",
        "options": [
          {
            "text": "Tiền trả thêm cho việc được dùng tiền của người khác",
            "emoji": "💸"
          },
          {
            "text": "Tiền thưởng vì trả đúng hạn",
            "emoji": "❌"
          },
          {
            "text": "Phí làm thẻ ngân hàng",
            "emoji": "❌"
          },
          {
            "text": "Tiền bảo hiểm khoản vay",
            "emoji": "❌"
          }
        ],
        "correct": 0,
        "explanation": "Vay 1.000.000đ, lãi 1%/tháng → mỗi tháng trả thêm 10.000đ. Càng trả chậm, lãi càng tích lũy nhiều!"
      },
      {
        "id": "q3",
        "type": "ab",
        "question": "Bạn thân nhờ mượn 200.000đ nhưng bạn biết họ hay quên trả. Bạn làm gì?",
        "image": "🤔",
        "optionA": {
          "emoji": "💸",
          "title": "Cho mượn như thường",
          "description": "Bạn thân mà"
        },
        "optionB": {
          "emoji": "🗓️",
          "title": "Cho mượn + viết giấy hẹn trả",
          "description": "Bảo vệ tình bạn và tiền của mình"
        },
        "bestChoice": "B",
        "explanation": "Viết giấy hẹn ngày trả không phải không tin bạn — mà để bạn không quên và tình bạn không bị ảnh hưởng vì tiền!"
      },
      {
        "id": "q4",
        "type": "quiz",
        "question": "Không nên vay tiền để làm gì?",
        "image": "💡",
        "options": [
          {
            "text": "Mua đồ xa xỉ không cần thiết",
            "emoji": "🚫"
          },
          {
            "text": "Mua thuốc khi ốm khẩn cấp",
            "emoji": "✅"
          },
          {
            "text": "Mua sách học khi thiếu tiền",
            "emoji": "✅"
          },
          {
            "text": "Trả tiền điện sắp hết hạn",
            "emoji": "✅"
          }
        ],
        "correct": 0,
        "explanation": "Vay tiền cho nhu cầu khẩn cấp là hợp lý. Nhưng vay để mua đồ xa xỉ (túi hiệu, giày đắt) là nguy hiểm — dễ rơi vào bẫy nợ!"
      }
    ],
    "topic": "borrowing",
    "level": "foundation"
  },
  {
    "id": "lesson-29",
    "title": "Áp lực từ bạn bè",
    "subtitle": "Tự tin về quyết định tài chính",
    "ageGroup": "9-12",
    "category": "choice",
    "icon": "💪",
    "color": "#3b82f6",
    "bgColor": "#eff6ff",
    "xp": 155,
    "description": "Học cách không bị peer pressure và tự tin về quyết định chi tiêu của mình.",
    "parentGuide": "Hỏi con: \"Có bao giờ con mua thứ gì vì bạn bè cũng có không?\" Thảo luận không phán xét.",
    "questions": [
      {
        "id": "q1",
        "type": "ab",
        "question": "Cả nhóm bạn mua sneakers 1.500.000đ. Bạn không đủ tiền. Bạn làm gì?",
        "image": "🤔",
        "optionA": {
          "emoji": "💳",
          "title": "Nhờ bố mẹ mua gấp",
          "description": "Không muốn khác nhóm"
        },
        "optionB": {
          "emoji": "😎",
          "title": "Nói thẳng mình chưa đủ tiền",
          "description": "Tiết kiệm để tự mua sau"
        },
        "bestChoice": "B",
        "explanation": "Tự tin nói \"mình chưa đủ tiền\" không đáng xấu hổ! Bạn bè thật sự sẽ không xét xử bạn vì điều này."
      },
      {
        "id": "q2",
        "type": "quiz",
        "question": "Điều nào KHÔNG phải lý do tốt để mua một thứ?",
        "image": "💡",
        "options": [
          {
            "text": "Vì bạn bè đều có",
            "emoji": "❌"
          },
          {
            "text": "Vì mình thực sự cần dùng",
            "emoji": "✅"
          },
          {
            "text": "Vì nằm trong ngân sách",
            "emoji": "✅"
          },
          {
            "text": "Vì chất lượng tốt hơn đồ cũ",
            "emoji": "✅"
          }
        ],
        "correct": 0,
        "explanation": "\"Vì bạn bè đều có\" là lý do tệ nhất! Quyết định tài chính nên dựa trên nhu cầu và ngân sách của MÌNH, không phải người khác."
      },
      {
        "id": "q3",
        "type": "ab",
        "question": "Bạn đang tiết kiệm cho mục tiêu quan trọng. Bạn rủ đi xem phim 150k. Bạn nói gì?",
        "image": "🤔",
        "optionA": {
          "emoji": "🎬",
          "title": "Đi thôi, tiết kiệm sau",
          "description": "Không muốn bạn buồn"
        },
        "optionB": {
          "emoji": "🗓️",
          "title": "Tháng sau được không?",
          "description": "Mình đang tiết kiệm tháng này"
        },
        "bestChoice": "B",
        "explanation": "Đề xuất thay thế không từ chối hoàn toàn! \"Tháng sau\" = giữ tình bạn + giữ mục tiêu tài chính. Bạn tốt sẽ hiểu!"
      }
    ],
    "topic": "personal-finance",
    "level": "foundation"
  },
  {
    "id": "lesson-30",
    "title": "Lãi Kép - Phép Màu Tài Chính",
    "subtitle": "Hiểu sức mạnh của lãi kép",
    "ageGroup": "13-16",
    "category": "concept",
    "icon": "📈",
    "color": "#FF6B35",
    "bgColor": "#FFF3EF",
    "xp": 200,
    "description": "Khám phá tại sao lãi kép được gọi là 'kỳ quan thứ 8 của thế giới'.",
    "questions": [
      {
        "id": "q1",
        "type": "quiz",
        "question": "Lãi kép khác lãi đơn ở điểm nào?",
        "image": "📊",
        "options": [
          {
            "text": "Lãi kép tính lãi trên cả tiền gốc lẫn tiền lãi",
            "emoji": "📈"
          },
          {
            "text": "Lãi kép chỉ áp dụng cho tiền tỷ",
            "emoji": "💎"
          },
          {
            "text": "Lãi kép không áp dụng ở Việt Nam",
            "emoji": "🚫"
          },
          {
            "text": "Lãi kép thì không rủi ro",
            "emoji": "🛡️"
          }
        ],
        "correct": 0,
        "explanation": "LÃI KÉP = lãi sinh lãi! Năm 1: gửi 1tr → có 1.1tr. Năm 2: tính lãi trên 1.1tr → có 1.21tr (không phải 1.2tr). Càng lâu càng thần kỳ! 🌟"
      },
      {
        "id": "q2",
        "type": "ab",
        "question": "Bắt đầu tiết kiệm khi nào tốt hơn? (lãi suất 10%/năm)",
        "image": "⏰",
        "optionA": {
          "emoji": "👶",
          "title": "Tiết kiệm từ 15 tuổi",
          "description": "Gửi 1 triệu/tháng × 10 năm = 120 triệu gốc → ~200 triệu lúc 25 tuổi"
        },
        "optionB": {
          "emoji": "🎓",
          "title": "Tiết kiệm từ 25 tuổi",
          "description": "Gửi 1 triệu/tháng × 10 năm = 120 triệu gốc → ~200 triệu lúc 35 tuổi"
        },
        "bestChoice": "A",
        "explanation": "Bắt đầu từ 15 tuổi thì lúc 35 tuổi sẽ có ~500 triệu, trong khi bắt đầu từ 25 chỉ có ~200 triệu! Thời gian = sức mạnh lãi kép. Bắt đầu SỚM là quan trọng nhất! ⏰"
      },
      {
        "id": "q3",
        "type": "transaction",
        "scenario": "Quy tắc 72: Tiền tăng gấp đôi sau bao lâu?",
        "startBalance": 10000000,
        "currency": "đ",
        "steps": [
          {
            "description": "Gửi tiết kiệm 10 triệu (lãi suất 6%/năm) 💰",
            "amount": 600000,
            "type": "income",
            "hint": "Năm 1: lãi 6% × 10tr = 600.000đ"
          },
          {
            "description": "Năm 2: lãi tính trên 10.6 triệu 📈",
            "amount": 636000,
            "type": "income",
            "hint": "Lãi kép: tiền lãi tăng dần"
          },
          {
            "description": "Năm 3: lãi tính trên 11.236 triệu 📈",
            "amount": 674160,
            "type": "income",
            "hint": "Mỗi năm lãi càng nhiều hơn"
          }
        ],
        "question": "Sau 12 năm (72÷6=12), tiền sẽ gấp đôi thành bao nhiêu?",
        "correctAnswer": 20000000,
        "explanation": "Quy tắc 72: Lấy 72 ÷ lãi suất = số năm để tiền gấp đôi. Lãi 6% → 72÷6 = 12 năm. 10 triệu → 20 triệu! Không cần thêm 1 đồng nào! 🎉"
      }
    ],
    "topic": "investing",
    "level": "advanced"
  },
  {
    "id": "lesson-31",
    "title": "Đầu Tư Cơ Bản",
    "subtitle": "Phân biệt tiết kiệm vs đầu tư",
    "ageGroup": "13-16",
    "category": "compare",
    "icon": "💹",
    "color": "#3F51B5",
    "bgColor": "#E8EAF6",
    "xp": 220,
    "description": "Hiểu sự khác biệt giữa tiết kiệm và đầu tư, và khi nào nên dùng cái nào.",
    "questions": [
      {
        "id": "q1",
        "type": "ab",
        "question": "Tiết kiệm vs Đầu tư - cái nào đúng với bạn?",
        "image": "⚖️",
        "optionA": {
          "emoji": "🏦",
          "title": "Tiết kiệm",
          "description": "Gửi ngân hàng, lãi 5-7%/năm, AN TOÀN tuyệt đối, phù hợp cho tiền khẩn cấp"
        },
        "optionB": {
          "emoji": "📊",
          "title": "Đầu tư (cổ phiếu, quỹ)",
          "description": "Lợi nhuận tiềm năng 10-15%/năm, CÓ RỦI RO, phù hợp cho tiền dài hạn"
        },
        "bestChoice": "A",
        "explanation": "Không có cái nào tốt hơn tuyệt đối! TIẾT KIỆM cho tiền khẩn cấp và ngắn hạn. ĐẦU TƯ cho tiền dài hạn (5+ năm) bạn không cần ngay. Cần cả hai! 🎯"
      },
      {
        "id": "q2",
        "type": "quiz",
        "question": "Quỹ đầu tư (ETF) là gì?",
        "image": "📦",
        "options": [
          {
            "text": "Rổ chứa nhiều cổ phiếu, giúp phân tán rủi ro",
            "emoji": "🧺"
          },
          {
            "text": "Một loại tiền điện tử",
            "emoji": "₿"
          },
          {
            "text": "Tài khoản ngân hàng đặc biệt",
            "emoji": "🏦"
          },
          {
            "text": "Bảo hiểm nhân thọ",
            "emoji": "🛡️"
          }
        ],
        "correct": 0,
        "explanation": "ETF là rổ cổ phiếu! Thay vì mua 1 cổ phiếu rủi ro, bạn mua 1 rổ 100 cổ phiếu. Nếu 1 cái giảm, 99 cái khác bù lại - đó là PHÂN TÁN RỦI RO! 🧺"
      },
      {
        "id": "q3",
        "type": "quiz",
        "question": "Nguyên tắc đầu tư quan trọng nhất cho người mới?",
        "image": "🎯",
        "options": [
          {
            "text": "Chỉ đầu tư khi đã có nhiều tiền",
            "emoji": "💰"
          },
          {
            "text": "Chỉ đầu tư vào crypto vì lãi cao nhất",
            "emoji": "📈"
          },
          {
            "text": "Không bao giờ đầu tư tiền mà bạn không thể để mất",
            "emoji": "⚠️"
          },
          {
            "text": "Đầu tư theo gợi ý trên mạng xã hội",
            "emoji": "📱"
          }
        ],
        "correct": 2,
        "explanation": "Nguyên tắc vàng: KHÔNG BAO GIỜ đầu tư tiền sinh hoạt hoặc tiền khẩn cấp! Chỉ đầu tư tiền 'thừa' - mất cũng không ảnh hưởng cuộc sống. An toàn là ưu tiên số 1! ⚠️"
      }
    ],
    "topic": "investing",
    "level": "advanced"
  },
  {
    "id": "lesson-32",
    "title": "Nợ & Tín Dụng",
    "subtitle": "Khi nào vay tiền là khôn ngoan?",
    "ageGroup": "13-16",
    "category": "choice",
    "icon": "💳",
    "color": "#F44336",
    "bgColor": "#FFEBEE",
    "xp": 240,
    "description": "Hiểu về nợ tốt và nợ xấu, cách dùng tín dụng có trách nhiệm.",
    "questions": [
      {
        "id": "q1",
        "type": "ab",
        "question": "Đây là NỢ TỐT hay NỢ XẤU?",
        "image": "🎓",
        "optionA": {
          "emoji": "🎓",
          "title": "Vay tiền đi học đại học",
          "description": "Lãi thấp, tạo ra kỹ năng → kiếm được lương cao hơn để trả nợ"
        },
        "optionB": {
          "emoji": "📱",
          "title": "Quẹt thẻ tín dụng mua iPhone",
          "description": "Lãi suất 24-36%/năm, điện thoại mất giá, không tạo ra thu nhập"
        },
        "bestChoice": "A",
        "explanation": "Vay học: NỢ TỐT - đầu tư vào bản thân, tạo ra giá trị. Vay mua iPhone: NỢ XẤU - hàng tiêu dùng giảm giá nhanh, lãi cao ngất! 💡"
      },
      {
        "id": "q2",
        "type": "quiz",
        "question": "Lãi suất thẻ tín dụng thường là bao nhiêu/năm?",
        "image": "💳",
        "options": [
          {
            "text": "2-3% (thấp như ngân hàng)",
            "emoji": "😊"
          },
          {
            "text": "5-7% (tương tự gửi tiết kiệm)",
            "emoji": "😐"
          },
          {
            "text": "24-36% (rất cao!)",
            "emoji": "😱"
          },
          {
            "text": "Miễn phí hoàn toàn",
            "emoji": "🤩"
          }
        ],
        "correct": 2,
        "explanation": "Lãi suất thẻ tín dụng thường 24-36%/năm! Quẹt 10 triệu không trả đúng hạn → 1 tháng sau nợ thêm 200-300 nghìn lãi. Không trả đúng hạn = NGUY HIỂM! 😱"
      },
      {
        "id": "q3",
        "type": "transaction",
        "scenario": "Cái bẫy nợ thẻ tín dụng",
        "startBalance": 0,
        "currency": "đ",
        "steps": [
          {
            "description": "Quẹt thẻ mua điện thoại 10 triệu 📱",
            "amount": 10000000,
            "type": "expense",
            "hint": "Nợ ban đầu: 10 triệu"
          },
          {
            "description": "Tháng 1: Lãi 3% (quên trả đúng hạn) 💸",
            "amount": 300000,
            "type": "expense",
            "hint": "Lãi phát sinh thêm"
          },
          {
            "description": "Tháng 2: Lãi tính trên 10.3 triệu 💸",
            "amount": 309000,
            "type": "expense",
            "hint": "Nợ càng nhiều, lãi càng cao"
          },
          {
            "description": "Tháng 3: Lãi tiếp tục tăng 💸",
            "amount": 318270,
            "type": "expense",
            "hint": "Lãi kép của nợ - rất nguy hiểm!"
          }
        ],
        "question": "Sau 3 tháng, tổng nợ là bao nhiêu?",
        "correctAnswer": 10927270,
        "explanation": "Chỉ 3 tháng, nợ từ 10 triệu thành gần 11 triệu! Nếu cứ để vậy, nợ sẽ nhân đôi mỗi 2 năm. Luôn TRẢ NỢ ĐẦY ĐỦ ĐÚNG HẠN! ⚠️"
      }
    ],
    "topic": "borrowing",
    "level": "advanced"
  },
  {
    "id": "lesson-33",
    "title": "Ngân Sách 50/30/20",
    "subtitle": "Công thức quản lý tiền hiệu quả",
    "ageGroup": "13-16",
    "category": "concept",
    "icon": "📋",
    "color": "#795548",
    "bgColor": "#EFEBE9",
    "xp": 200,
    "description": "Học quy tắc ngân sách phổ biến nhất thế giới: 50/30/20.",
    "questions": [
      {
        "id": "q1",
        "type": "quiz",
        "question": "Quy tắc 50/30/20 phân chia thu nhập như thế nào?",
        "image": "📊",
        "options": [
          {
            "text": "50% tiết kiệm, 30% ăn uống, 20% giải trí",
            "emoji": "🏦"
          },
          {
            "text": "50% nhu cầu thiết yếu, 30% sở thích, 20% tiết kiệm",
            "emoji": "✅"
          },
          {
            "text": "50% cho ba mẹ, 30% chi tiêu, 20% còn lại",
            "emoji": "👨‍👩‍👧"
          },
          {
            "text": "50% đầu tư, 30% nhu cầu, 20% giải trí",
            "emoji": "📈"
          }
        ],
        "correct": 1,
        "explanation": "50% cho NHU CẦU (ăn, ở, học, điện nước), 30% cho SỞ THÍCH (du lịch, mua sắm, giải trí), 20% cho TIẾT KIỆM & ĐẦU TƯ. Đơn giản và hiệu quả! 🎯"
      },
      {
        "id": "q2",
        "type": "transaction",
        "scenario": "Áp dụng 50/30/20 cho lương thực tập 5 triệu",
        "startBalance": 5000000,
        "currency": "đ",
        "steps": [
          {
            "description": "50% Nhu cầu thiết yếu (thuê nhà, ăn uống, đi lại) 🏠",
            "amount": 2500000,
            "type": "expense",
            "hint": "50% × 5tr = 2.5tr"
          },
          {
            "description": "30% Sở thích (cafe, mua sắm, phim ảnh) ☕",
            "amount": 1500000,
            "type": "expense",
            "hint": "30% × 5tr = 1.5tr"
          },
          {
            "description": "20% Tiết kiệm + đầu tư 🐷",
            "amount": 1000000,
            "type": "save",
            "hint": "20% × 5tr = 1tr"
          }
        ],
        "question": "Mỗi tháng tiết kiệm được bao nhiêu?",
        "correctAnswer": 1000000,
        "explanation": "1 triệu/tháng tiết kiệm! Nghe ít nhưng sau 1 năm có 12 triệu, sau 5 năm (với lãi kép) có thể hơn 70 triệu! Tích tiểu thành đại! 💪"
      },
      {
        "id": "q3",
        "type": "ab",
        "question": "Bạn nhận lương 8 triệu. Tháng này chi tiêu 6 triệu. Nên làm gì với 2 triệu còn lại?",
        "image": "💭",
        "optionA": {
          "emoji": "🛍️",
          "title": "Tiêu thêm cho thoải mái",
          "description": "Tháng nào tháng đó, sống phải vui"
        },
        "optionB": {
          "emoji": "📊",
          "title": "Chia 50/30/20 ngay từ đầu",
          "description": "Để dành 1.6tr tiết kiệm + quỹ khẩn cấp từ đầu tháng"
        },
        "bestChoice": "B",
        "explanation": "Nguyên tắc vàng: TRẢ CHO TƯƠNG LAI TRƯỚC, tiêu sau! Tiết kiệm ngay đầu tháng, không phải tiết kiệm phần còn lại. 'Pay yourself first!' 💪"
      }
    ],
    "topic": "personal-finance",
    "level": "advanced"
  },
  {
    "id": "lesson-34",
    "title": "Cổ Phiếu Cơ Bản",
    "subtitle": "Sở hữu một phần công ty",
    "ageGroup": "13-16",
    "category": "concept",
    "icon": "📈",
    "color": "#1976D2",
    "bgColor": "#E3F2FD",
    "xp": 230,
    "description": "Hiểu cổ phiếu là gì và tại sao mọi người đầu tư vào chứng khoán.",
    "questions": [
      {
        "id": "q1",
        "type": "quiz",
        "question": "Mua cổ phiếu của Vinamilk nghĩa là gì?",
        "image": "🥛",
        "options": [
          {
            "text": "Được uống sữa miễn phí mãi mãi",
            "emoji": "🥛"
          },
          {
            "text": "Trở thành một chủ sở hữu nhỏ của Vinamilk",
            "emoji": "🏢"
          },
          {
            "text": "Được làm việc tại Vinamilk",
            "emoji": "💼"
          },
          {
            "text": "Mượn tiền của Vinamilk",
            "emoji": "💰"
          }
        ],
        "correct": 1,
        "explanation": "Mua cổ phiếu = mua một phần nhỏ của công ty! 1 cổ phiếu Vinamilk = bạn sở hữu một phần triệu công ty. Công ty lãi → cổ phiếu tăng giá → bạn có lời! 📈"
      },
      {
        "id": "q2",
        "type": "ab",
        "question": "Cổ phiếu và trái phiếu khác nhau thế nào?",
        "image": "⚖️",
        "optionA": {
          "emoji": "📈",
          "title": "Cổ phiếu",
          "description": "Sở hữu phần công ty, lợi nhuận không cố định, rủi ro cao hơn, tiềm năng lợi nhuận cao hơn"
        },
        "optionB": {
          "emoji": "📄",
          "title": "Trái phiếu",
          "description": "Cho công ty/nhà nước vay tiền, lãi suất cố định, an toàn hơn cổ phiếu"
        },
        "bestChoice": "A",
        "explanation": "Không có cái nào tốt hơn tuyệt đối! CỔ PHIẾU: rủi ro cao, lợi nhuận tiềm năng cao. TRÁI PHIẾU: an toàn hơn, lợi nhuận cố định. Nhà đầu tư thông minh kết hợp cả hai! 💡"
      },
      {
        "id": "q3",
        "type": "quiz",
        "question": "Vì sao không nên bỏ tất cả tiền vào 1 cổ phiếu?",
        "image": "🥚",
        "options": [
          {
            "text": "Mua nhiều cổ phiếu thì tiết kiệm được phí",
            "emoji": "💰"
          },
          {
            "text": "Không được phép mua 1 cổ phiếu số lượng lớn",
            "emoji": "🚫"
          },
          {
            "text": "Như để tất cả trứng vào 1 giỏ - nếu công ty đó phá sản, mất hết",
            "emoji": "🥚"
          },
          {
            "text": "Quy định của nhà nước",
            "emoji": "🏛️"
          }
        ],
        "correct": 2,
        "explanation": "\"Đừng để tất cả trứng vào một giỏ!\" Nếu đầu tư 100% vào 1 công ty rồi công ty đó phá sản = mất hết. Đa dạng hóa danh mục đầu tư giúp giảm rủi ro! 🧺"
      }
    ],
    "topic": "stocks",
    "level": "advanced"
  },
  {
    "id": "lesson-35",
    "title": "Khởi Nghiệp Cơ Bản",
    "subtitle": "Tạo ra giá trị và kiếm tiền",
    "ageGroup": "13-16",
    "category": "concept",
    "icon": "🚀",
    "color": "#4CAF50",
    "bgColor": "#E8F5E9",
    "xp": 250,
    "description": "Tìm hiểu về khởi nghiệp, mô hình kinh doanh và cách tạo ra giá trị.",
    "questions": [
      {
        "id": "q1",
        "type": "quiz",
        "question": "Startup thành công cần điều gì nhất?",
        "image": "🚀",
        "options": [
          {
            "text": "Nhiều vốn ngay từ đầu",
            "emoji": "💰"
          },
          {
            "text": "Giải quyết vấn đề thực tế mà người ta sẵn sàng trả tiền",
            "emoji": "💡"
          },
          {
            "text": "Ý tưởng thật độc đáo chưa ai nghĩ ra",
            "emoji": "🌟"
          },
          {
            "text": "Có quen biết nhiều người nổi tiếng",
            "emoji": "👥"
          }
        ],
        "correct": 1,
        "explanation": "Startup thành công = giải quyết PAIN POINT (vấn đề đau đầu) mà người dùng sẵn sàng bỏ tiền ra. Grab giải quyết 'gọi xe khó khăn'. Shopee giải quyết 'mua hàng online dễ hơn'. 💡"
      },
      {
        "id": "q2",
        "type": "transaction",
        "scenario": "Khanh bán nước chanh trong trường",
        "startBalance": 0,
        "currency": "đ",
        "steps": [
          {
            "description": "Chi phí mua nguyên liệu (chanh, đường, ly) 🛒",
            "amount": 100000,
            "type": "expense",
            "hint": "Chi phí ban đầu"
          },
          {
            "description": "Bán được 30 ly × 8.000đ 💰",
            "amount": 240000,
            "type": "income",
            "hint": "Doanh thu = 30 × 8k"
          },
          {
            "description": "Ngày 2: Mua thêm nguyên liệu 🛒",
            "amount": 80000,
            "type": "expense",
            "hint": "Tái đầu tư"
          },
          {
            "description": "Bán được 25 ly × 8.000đ 💰",
            "amount": 200000,
            "type": "income",
            "hint": "Bán ít hơn ngày 1"
          }
        ],
        "question": "Khanh kiếm được bao nhiêu lợi nhuận sau 2 ngày?",
        "correctAnswer": 260000,
        "explanation": "Lợi nhuận 260.000đ sau 2 ngày! Doanh thu 440k - Chi phí 180k = 260k. Đây là mô hình kinh doanh đơn giản nhất: mua rẻ, bán đắt hơn, phần chênh là lợi nhuận! 🚀"
      }
    ],
    "topic": "personal-finance",
    "level": "advanced"
  },
  {
    "id": "lesson-36",
    "title": "Mục Tiêu Tài Chính 5 Năm",
    "subtitle": "Lập kế hoạch dài hạn",
    "ageGroup": "13-16",
    "category": "choice",
    "icon": "🗓️",
    "color": "#9C27B0",
    "bgColor": "#F3E5F5",
    "xp": 220,
    "description": "Học cách đặt mục tiêu tài chính dài hạn và lên kế hoạch thực hiện.",
    "questions": [
      {
        "id": "q1",
        "type": "quiz",
        "question": "Mục tiêu tài chính tốt theo tiêu chuẩn SMART cần gì?",
        "image": "🎯",
        "options": [
          {
            "text": "Specific (cụ thể), Measurable (đo được), Achievable (khả thi), Relevant (liên quan), Time-bound (có thời hạn)",
            "emoji": "✅"
          },
          {
            "text": "Silly (ngốc nghếch), Massive (to lớn), Ambitious (tham vọng)...",
            "emoji": "😅"
          },
          {
            "text": "Simple (đơn giản) và Magic (thần kỳ)",
            "emoji": "✨"
          },
          {
            "text": "Spending (chi tiêu) Money And Rewards Today",
            "emoji": "💸"
          }
        ],
        "correct": 0,
        "explanation": "SMART Goal: Specific (cụ thể), Measurable (đo lường được), Achievable (khả thi), Relevant (phù hợp), Time-bound (có deadline). VD: 'Tiết kiệm 12 triệu trong 12 tháng bằng cách để dành 1 triệu/tháng'! 🎯"
      },
      {
        "id": "q2",
        "type": "ab",
        "question": "Mục tiêu tài chính nào theo chuẩn SMART hơn?",
        "image": "📝",
        "optionA": {
          "emoji": "💭",
          "title": "\"Tôi muốn tiết kiệm nhiều tiền\"",
          "description": "Không rõ bao nhiêu, khi nào"
        },
        "optionB": {
          "emoji": "🎯",
          "title": "\"Tiết kiệm 50 triệu trong 3 năm bằng 1,4 triệu/tháng\"",
          "description": "Cụ thể, đo được, có deadline rõ ràng"
        },
        "bestChoice": "B",
        "explanation": "Mục tiêu cụ thể + đo được = dễ theo dõi và đạt được hơn! 'Nhiều tiền' không biết đủ lúc nào. '50 triệu trong 3 năm' = biết chính xác cần làm gì mỗi tháng! ✅"
      }
    ],
    "topic": "personal-finance",
    "level": "advanced"
  },
  {
    "id": "lesson-37",
    "title": "Crypto & Đầu Tư Rủi Ro Cao",
    "subtitle": "Hiểu rõ trước khi tham gia",
    "ageGroup": "13-16",
    "category": "compare",
    "icon": "₿",
    "color": "#F7931A",
    "bgColor": "#FFF8F0",
    "xp": 260,
    "description": "Tìm hiểu về tiền điện tử, NFT và các loại đầu tư rủi ro cao.",
    "questions": [
      {
        "id": "q1",
        "type": "quiz",
        "question": "Bitcoin là gì?",
        "image": "₿",
        "options": [
          {
            "text": "Tiền số phi tập trung, không do ngân hàng hay chính phủ kiểm soát",
            "emoji": "₿"
          },
          {
            "text": "Tiền điện tử do ngân hàng Mỹ phát hành",
            "emoji": "🏦"
          },
          {
            "text": "Một loại cổ phiếu công ty công nghệ",
            "emoji": "📈"
          },
          {
            "text": "Tiền ảo chỉ dùng trong game",
            "emoji": "🎮"
          }
        ],
        "correct": 0,
        "explanation": "Bitcoin = tiền số phi tập trung. Không ai kiểm soát, số lượng giới hạn 21 triệu BTC. Giá biến động rất mạnh: từng tăng 1000% rồi giảm 80% trong 1 năm! 📊"
      },
      {
        "id": "q2",
        "type": "ab",
        "question": "Bạn 15 tuổi, vừa có 5 triệu. Bạn làm gì?",
        "image": "🤔",
        "optionA": {
          "emoji": "₿",
          "title": "Đầu tư toàn bộ vào crypto",
          "description": "Nghe nói lãi cao lắm, bạn bè cũng làm"
        },
        "optionB": {
          "emoji": "📚",
          "title": "Học về đầu tư trước, chỉ dùng tiền thừa",
          "description": "Tìm hiểu kỹ, bắt đầu nhỏ sau khi hiểu rõ"
        },
        "bestChoice": "B",
        "explanation": "Với crypto: không bao giờ đầu tư tiền bạn không thể để mất! Crypto có thể giảm 90% trong vài tháng. Ở tuổi 15, HỌC là đầu tư tốt nhất. Khi đã hiểu kỹ rồi mới dùng 'tiền thừa' để thử! 📚"
      },
      {
        "id": "q3",
        "type": "quiz",
        "question": "Dấu hiệu của BẪY LỪA ĐẢO tài chính (Ponzi scheme)?",
        "image": "🚨",
        "options": [
          {
            "text": "Lợi nhuận cam kết 1-2%/tháng, rủi ro thấp",
            "emoji": "🏦"
          },
          {
            "text": "Hứa lãi 30-50%/tháng, cần giới thiệu người mới, áp lực thời gian",
            "emoji": "🚨"
          },
          {
            "text": "Đầu tư vào quỹ ETF index fund",
            "emoji": "📊"
          },
          {
            "text": "Gửi tiết kiệm ngân hàng có lãi suất",
            "emoji": "🏦"
          }
        ],
        "correct": 1,
        "explanation": "DẤU HIỆU LỪA ĐẢO: lãi suất quá cao (30-50%/tháng = 360-600%/năm!), phải giới thiệu người mới, áp lực 'cơ hội có giới hạn'. Nhớ: không có khoản đầu tư hợp pháp nào cho lãi cao như vậy! 🚨"
      }
    ],
    "topic": "digital-assets",
    "level": "advanced"
  },
  {
    "id": "lesson-38",
    "title": "Thẻ Tín Dụng Thông Minh",
    "subtitle": "Dùng đúng cách để có lợi",
    "ageGroup": "13-16",
    "category": "choice",
    "icon": "💳",
    "color": "#1565C0",
    "bgColor": "#E3F2FD",
    "xp": 230,
    "description": "Học cách dùng thẻ tín dụng như công cụ tài chính thay vì cái bẫy nợ.",
    "questions": [
      {
        "id": "q1",
        "type": "quiz",
        "question": "Dùng thẻ tín dụng đúng cách đem lại lợi ích gì?",
        "image": "💳",
        "options": [
          {
            "text": "Được vay tiền không cần trả lại",
            "emoji": "🎁"
          },
          {
            "text": "Cashback, điểm thưởng, bảo vệ mua hàng, xây dựng tín dụng",
            "emoji": "✅"
          },
          {
            "text": "Lãi suất miễn phí mãi mãi",
            "emoji": "0️⃣"
          },
          {
            "text": "Không có lợi ích gì ngoài sự tiện lợi",
            "emoji": "📱"
          }
        ],
        "correct": 1,
        "explanation": "Dùng thẻ tín dụng ĐÚNG CÁCH (trả đủ + đúng hạn): nhận cashback 1-5%, tích điểm đổi quà, được bảo hiểm mua hàng, xây credit score. ĐIỀU KIỆN: KHÔNG BAO GIỜ trả trễ hoặc trả thiếu! 💳"
      },
      {
        "id": "q2",
        "type": "ab",
        "question": "Cuối tháng thẻ tín dụng báo nợ 5 triệu. Nên làm gì?",
        "image": "💭",
        "optionA": {
          "emoji": "✅",
          "title": "Trả đủ 5 triệu trước ngày đến hạn",
          "description": "Không mất 1 đồng lãi nào"
        },
        "optionB": {
          "emoji": "💸",
          "title": "Trả tối thiểu 150k theo yêu cầu",
          "description": "Trả ít, giữ tiền tiêu thoải mái"
        },
        "bestChoice": "A",
        "explanation": "Luôn TRẢ ĐỦ! Trả tối thiểu = phần còn lại bị tính lãi 24-36%/năm. Trả tối thiểu 150k nhưng phần còn lại 4,85 triệu sinh lãi ~ 120k/tháng. Tháng sau lại nợ nhiều hơn! ⚠️"
      }
    ],
    "topic": "borrowing",
    "level": "advanced"
  },
  {
    "id": "lesson-39",
    "title": "Lương Và Các Khoản Trừ",
    "subtitle": "Hiểu payslip trước khi đi làm",
    "ageGroup": "13-16",
    "category": "concept",
    "icon": "📋",
    "color": "#00897B",
    "bgColor": "#E0F2F1",
    "xp": 210,
    "description": "Hiểu phiếu lương, các khoản khấu trừ và lương thực nhận.",
    "questions": [
      {
        "id": "q1",
        "type": "transaction",
        "scenario": "Phiếu lương thực tập của Hùng (lương gross 8 triệu)",
        "startBalance": 8000000,
        "currency": "đ",
        "steps": [
          {
            "description": "Bảo hiểm xã hội (8%) 🏥",
            "amount": 640000,
            "type": "expense",
            "hint": "BHXH bắt buộc"
          },
          {
            "description": "Bảo hiểm y tế (1.5%) 🏥",
            "amount": 120000,
            "type": "expense",
            "hint": "BHYT bắt buộc"
          },
          {
            "description": "Thuế thu nhập cá nhân (thấp vì mới đi làm) 📊",
            "amount": 0,
            "type": "expense",
            "hint": "Dưới 11 triệu: miễn thuế"
          }
        ],
        "question": "Hùng thực nhận (lương net) bao nhiêu?",
        "correctAnswer": 7240000,
        "explanation": "Lương NET = 7.240.000đ (từ lương GROSS 8 triệu). BHXH 8% + BHYT 1.5% = trừ 760k. Phần bị trừ này là quyền lợi tương lai: khi về hưu, ốm đau đều được hỗ trợ! 📋"
      },
      {
        "id": "q2",
        "type": "quiz",
        "question": "Tại sao lương gross và lương net khác nhau?",
        "image": "💭",
        "options": [
          {
            "text": "Công ty giữ lại một phần",
            "emoji": "🏢"
          },
          {
            "text": "Bị trừ bảo hiểm bắt buộc + thuế thu nhập cá nhân",
            "emoji": "📋"
          },
          {
            "text": "Ngân hàng thu phí chuyển lương",
            "emoji": "🏦"
          },
          {
            "text": "Không có lý do rõ ràng",
            "emoji": "🤷"
          }
        ],
        "correct": 1,
        "explanation": "Lương GROSS = lương trên hợp đồng. Lương NET = thực nhận sau khi trừ BHXH (8%), BHYT (1.5%), BHTN (1%), thuế TNCN. Khi đàm phán lương, luôn hỏi GROSS hay NET để tránh nhầm! 💡"
      }
    ],
    "topic": "personal-finance",
    "level": "advanced"
  },
  {
    "id": "lesson-40",
    "title": "Chỉ Số Tài Chính Cá Nhân",
    "subtitle": "Đo sức khỏe tài chính của bạn",
    "ageGroup": "13-16",
    "category": "concept",
    "icon": "📊",
    "color": "#5C6BC0",
    "bgColor": "#E8EAF6",
    "xp": 240,
    "description": "Học các chỉ số quan trọng để biết tình hình tài chính cá nhân đang ở đâu.",
    "questions": [
      {
        "id": "q1",
        "type": "quiz",
        "question": "Tỷ lệ tiết kiệm (Savings Rate) lý tưởng tối thiểu là bao nhiêu?",
        "image": "📊",
        "options": [
          {
            "text": "1-5% thu nhập",
            "emoji": "😔"
          },
          {
            "text": "20% trở lên",
            "emoji": "✅"
          },
          {
            "text": "50-80% thu nhập",
            "emoji": "😱"
          },
          {
            "text": "Không cần để ý",
            "emoji": "🤷"
          }
        ],
        "correct": 1,
        "explanation": "Tỷ lệ tiết kiệm tối thiểu nên đạt 20% thu nhập. Tiết kiệm 20% nghĩa là bạn làm việc 4 ngày nuôi hiện tại, 1 ngày xây dựng tương lai! Ai đạt 50%+ có thể nghỉ hưu sớm! 💡"
      },
      {
        "id": "q2",
        "type": "quiz",
        "question": "Tỷ lệ nợ/thu nhập (Debt-to-Income) an toàn là bao nhiêu?",
        "image": "⚖️",
        "options": [
          {
            "text": "Dưới 36% thu nhập hàng tháng",
            "emoji": "✅"
          },
          {
            "text": "50-70% thu nhập",
            "emoji": "⚠️"
          },
          {
            "text": "Trên 100%",
            "emoji": "🚨"
          },
          {
            "text": "Không giới hạn",
            "emoji": "❌"
          }
        ],
        "correct": 0,
        "explanation": "Tỷ lệ nợ/thu nhập AN TOÀN = dưới 36%. Nếu lương 10 triệu, tổng trả nợ hàng tháng không nên quá 3,6 triệu. Vượt 50% = vùng nguy hiểm, có thể không đủ tiền sinh hoạt! ⚠️"
      }
    ],
    "topic": "personal-finance",
    "level": "advanced"
  },
  {
    "id": "lesson-41",
    "title": "Học Phí Và Sinh Viên",
    "subtitle": "Quản lý tài chính thời sinh viên",
    "ageGroup": "13-16",
    "category": "choice",
    "icon": "🎓",
    "color": "#E91E63",
    "bgColor": "#FCE4EC",
    "xp": 220,
    "description": "Chuẩn bị tài chính cho thời sinh viên đại học.",
    "questions": [
      {
        "id": "q1",
        "type": "transaction",
        "scenario": "Ngân sách tháng sinh viên Hà Nội (sinh viên năm 1)",
        "startBalance": 5000000,
        "currency": "đ",
        "steps": [
          {
            "description": "Tiền phòng trọ 💤",
            "amount": 1800000,
            "type": "expense",
            "hint": "Chi tiêu lớn nhất"
          },
          {
            "description": "Ăn uống 30 ngày 🍜",
            "amount": 1500000,
            "type": "expense",
            "hint": "Khoảng 50k/ngày"
          },
          {
            "description": "Đi lại xe buýt/xe máy ⛽",
            "amount": 400000,
            "type": "expense",
            "hint": "Đi học hàng ngày"
          },
          {
            "description": "Sách vở, học phí phụ 📚",
            "amount": 300000,
            "type": "expense",
            "hint": "Chi phí học tập"
          }
        ],
        "question": "Còn bao nhiêu cho các chi tiêu khác (quần áo, giải trí...)?",
        "correctAnswer": 1000000,
        "explanation": "Chỉ còn 1 triệu cho tất cả các chi tiêu khác! Thời sinh viên cần rất tiết kiệm. Tìm việc làm thêm hoặc học bổng để có thêm thu nhập là rất quan trọng! 🎓"
      },
      {
        "id": "q2",
        "type": "ab",
        "question": "Để giảm chi phí sinh viên, cách nào hiệu quả hơn?",
        "image": "💡",
        "optionA": {
          "emoji": "🏠",
          "title": "Tìm phòng trọ rẻ hơn",
          "description": "Giảm 300-500k/tháng nếu ở xa hơn hoặc ghép phòng"
        },
        "optionB": {
          "emoji": "☕",
          "title": "Thôi không uống cafe",
          "description": "Tiết kiệm 30-50k/ngày uống cafe"
        },
        "bestChoice": "A",
        "explanation": "Cả hai đều tốt! Nhưng tiết kiệm từ CHI PHÍ LỚN (phòng trọ) hiệu quả hơn nhiều. Ghép phòng tiết kiệm 500k/tháng = 6 triệu/năm. Không cafe tiết kiệm tối đa 1 triệu/tháng. Tập trung vào 'big wins' trước! 💡"
      }
    ],
    "topic": "personal-finance",
    "level": "advanced"
  },
  {
    "id": "lesson-42",
    "title": "Tài Sản vs Tiêu Sản",
    "subtitle": "Phân biệt tài sản thực và tài sản giả",
    "ageGroup": "13-16",
    "category": "compare",
    "icon": "⚖️",
    "color": "#FF6B35",
    "bgColor": "#FFF3EF",
    "xp": 270,
    "description": "Học khái niệm quan trọng nhất của Robert Kiyosaki về tài sản.",
    "questions": [
      {
        "id": "q1",
        "type": "quiz",
        "question": "Theo Robert Kiyosaki, TÀI SẢN thực sự là gì?",
        "image": "🏡",
        "options": [
          {
            "text": "Nhà, xe, đồ đạc đắt tiền bạn sở hữu",
            "emoji": "🏠"
          },
          {
            "text": "Thứ gì đó ĐƯA TIỀN VÀO túi bạn mỗi tháng",
            "emoji": "💰"
          },
          {
            "text": "Tiền trong tài khoản ngân hàng",
            "emoji": "🏦"
          },
          {
            "text": "Bằng cấp và học vị",
            "emoji": "🎓"
          }
        ],
        "correct": 1,
        "explanation": "Kiyosaki định nghĩa: TÀI SẢN = thứ đưa tiền VÀO túi (nhà cho thuê, cổ phiếu sinh cổ tức...). TIÊU SẢN = thứ lấy tiền RA khỏi túi (xe cá nhân, điện thoại đắt tiền...). Ngôi nhà bạn ở = TIÊU SẢN (phải trả tiền điện, nước, bảo dưỡng)! 💡"
      },
      {
        "id": "q2",
        "type": "ab",
        "question": "Cái nào là TÀI SẢN thực sự?",
        "image": "⚖️",
        "optionA": {
          "emoji": "🚗",
          "title": "Xe ô tô mới mua",
          "description": "Mất giá 20% ngay khi lăn bánh, tốn xăng + bảo dưỡng mỗi tháng"
        },
        "optionB": {
          "emoji": "🏠",
          "title": "Căn hộ cho thuê",
          "description": "Nhận tiền thuê mỗi tháng, giá trị có thể tăng theo thời gian"
        },
        "bestChoice": "B",
        "explanation": "Căn hộ cho thuê là TÀI SẢN thực sự - nó đưa tiền VÀO túi mỗi tháng. Xe cá nhân là TIÊU SẢN - lấy tiền RA mỗi tháng (xăng, bảo dưỡng, bãi đỗ xe). Người giàu tập trung mua TÀI SẢN trước! 💰"
      },
      {
        "id": "q3",
        "type": "quiz",
        "question": "Chiến lược của người giàu theo Kiyosaki là gì?",
        "image": "🏆",
        "options": [
          {
            "text": "Kiếm tiền → Chi tiêu ngay → Sau đó tiết kiệm phần còn lại",
            "emoji": "💸"
          },
          {
            "text": "Kiếm tiền → Mua tài sản → Tài sản sinh thu nhập → Dùng thu nhập chi tiêu",
            "emoji": "🔄"
          },
          {
            "text": "Tiết kiệm tất cả, không bao giờ tiêu tiền",
            "emoji": "🐷"
          },
          {
            "text": "Vay tiền mua thật nhiều thứ",
            "emoji": "💳"
          }
        ],
        "correct": 1,
        "explanation": "Vòng lặp giàu có: Kiếm tiền → Mua TÀI SẢN (cổ phiếu, bất động sản...) → Tài sản sinh thêm thu nhập → Dùng thu nhập thụ động để sống. Người nghèo: Kiếm tiền → Chi tiêu hết → Lại đi làm. 🔄"
      }
    ],
    "topic": "personal-finance",
    "level": "advanced"
  },
  {
    "id": "lesson-43",
    "title": "Bất Động Sản Cơ Bản",
    "subtitle": "Hiểu về đầu tư nhà đất",
    "ageGroup": "13-16",
    "category": "concept",
    "icon": "🏠",
    "color": "#4CAF50",
    "bgColor": "#E8F5E9",
    "xp": 250,
    "description": "Tìm hiểu về bất động sản như một kênh đầu tư và các rủi ro liên quan.",
    "questions": [
      {
        "id": "q1",
        "type": "quiz",
        "question": "Lợi thế lớn nhất của đầu tư bất động sản cho thuê là gì?",
        "image": "🏠",
        "options": [
          {
            "text": "Giá không bao giờ giảm",
            "emoji": "📈"
          },
          {
            "text": "Có thể dùng đòn bẩy (vay vốn) và có dòng tiền hàng tháng",
            "emoji": "💰"
          },
          {
            "text": "Không cần vốn ban đầu",
            "emoji": "🆓"
          },
          {
            "text": "Không phải đóng thuế",
            "emoji": "🚫"
          }
        ],
        "correct": 1,
        "explanation": "BĐS ưu điểm: (1) Dùng đòn bẩy - vay 70% ngân hàng, bỏ 30% vốn tự có. (2) Dòng tiền - tiền thuê hàng tháng. (3) Chống lạm phát - giá nhà thường tăng theo thời gian. Nhược điểm: cần vốn lớn, thanh khoản thấp! ⚠️"
      },
      {
        "id": "q2",
        "type": "ab",
        "question": "Bạn vay 2 tỷ mua căn hộ, cho thuê 8 triệu/tháng, trả ngân hàng 10 triệu/tháng. Có nên làm không?",
        "image": "🤔",
        "optionA": {
          "emoji": "✅",
          "title": "Nên, vì mình sẽ có nhà",
          "description": "Sau vài chục năm nhà là của mình"
        },
        "optionB": {
          "emoji": "🔍",
          "title": "Cần tính toán thêm",
          "description": "Đang âm 2 triệu/tháng, cần bù đắp từ thu nhập khác"
        },
        "bestChoice": "B",
        "explanation": "Thu 8 triệu - Trả 10 triệu = ÂM 2 triệu/tháng. Mỗi tháng phải bù thêm 2 triệu! Trừ khi giá căn hộ tăng đủ để bù lại, đây là BĐS ĐẦU TƯ CHƯA TỐT. Tính kỹ trước khi mua! 💡"
      }
    ],
    "topic": "investing",
    "level": "advanced"
  },
  {
    "id": "lesson-44",
    "title": "Kế Hoạch Nghỉ Hưu",
    "subtitle": "Sớm không bao giờ là quá sớm",
    "ageGroup": "13-16",
    "category": "concept",
    "icon": "🌴",
    "color": "#26A69A",
    "bgColor": "#E0F2F1",
    "xp": 280,
    "description": "Hiểu tại sao bắt đầu tiết kiệm hưu trí từ sớm là quyết định tài chính quan trọng nhất.",
    "questions": [
      {
        "id": "q1",
        "type": "quiz",
        "question": "Nếu tiết kiệm 2 triệu/tháng từ 20 tuổi với lãi suất 8%/năm, đến 60 tuổi có khoảng bao nhiêu?",
        "image": "🧮",
        "options": [
          {
            "text": "Khoảng 960 triệu (vốn gốc × 40 năm)",
            "emoji": "💰"
          },
          {
            "text": "Khoảng 7-8 tỷ đồng nhờ lãi kép",
            "emoji": "✅"
          },
          {
            "text": "Khoảng 2-3 tỷ đồng",
            "emoji": "💰"
          },
          {
            "text": "Không đủ để nghỉ hưu",
            "emoji": "😔"
          }
        ],
        "correct": 1,
        "explanation": "Vốn gốc chỉ 960 triệu (2tr × 12 × 40 năm), nhưng với lãi kép 8%/năm trong 40 năm → khoảng 7-8 TỶ ĐỒNG! Đây là phép màu của thời gian + lãi kép. Bắt đầu từ 20 tuổi thay vì 30 tuổi = hơn 3-4 tỷ! ⏰"
      },
      {
        "id": "q2",
        "type": "transaction",
        "scenario": "So sánh: Bắt đầu ở 20 tuổi vs 30 tuổi",
        "startBalance": 0,
        "currency": "đ",
        "steps": [
          {
            "description": "Người A (bắt đầu 20t): tiết kiệm 10 năm đầu (2tr/tháng) rồi dừng 💪",
            "amount": 240000000,
            "type": "save",
            "hint": "Chỉ đóng 10 năm: 240 triệu gốc"
          },
          {
            "description": "Người A: lãi kép 30 năm tiếp theo (đến 60 tuổi) không cần nộp thêm 📈",
            "amount": 2400000000,
            "type": "income",
            "hint": "Lãi kép làm phần lớn công việc!"
          }
        ],
        "question": "Người A (bắt đầu 20t, dừng 30t) có thể có bao nhiêu lúc 60 tuổi?",
        "correctAnswer": 2640000000,
        "explanation": "Người A chỉ đóng 10 năm nhưng lại có nhiều hơn Người B đóng 30 năm liên tục từ 30 tuổi! Bí mật: THỜI GIAN. Mỗi năm trì hoãn = mất hàng trăm triệu tiền lãi trong tương lai! Bắt đầu ngay hôm nay! 🌴"
      }
    ],
    "topic": "saving",
    "level": "advanced"
  },
  {
    "id": "lesson-45",
    "title": "Tự do tài chính",
    "subtitle": "Bắt đầu hành trình từ hôm nay",
    "ageGroup": "13-16",
    "category": "choice",
    "icon": "🦋",
    "color": "#8b5cf6",
    "bgColor": "#f5f3ff",
    "xp": 250,
    "description": "Hiểu khái niệm tự do tài chính, FIRE và tại sao bắt đầu từ sớm là lợi thế lớn nhất.",
    "parentGuide": "Chia sẻ: \"Bố/mẹ ước gì biết những điều này từ năm 16 tuổi. Đây là lý do bố/mẹ muốn con học từ sớm.\"",
    "questions": [
      {
        "id": "q1",
        "type": "quiz",
        "question": "Tự do tài chính (Financial Freedom) nghĩa là gì?",
        "image": "💡",
        "options": [
          {
            "text": "Thu nhập thụ động đủ trang trải chi phí sinh hoạt — không cần đi làm vì bắt buộc",
            "emoji": "🦋"
          },
          {
            "text": "Có 1 tỷ đồng trong tài khoản",
            "emoji": "❌"
          },
          {
            "text": "Không bao giờ phải làm việc",
            "emoji": "❌"
          },
          {
            "text": "Tiêu tiền không giới hạn",
            "emoji": "❌"
          }
        ],
        "correct": 0,
        "explanation": "Tự do tài chính = làm việc vì YÊU THÍCH, không phải vì BẮT BUỘC. Thu nhập thụ động (đầu tư, cho thuê...) đủ sống = tự do lựa chọn cuộc sống."
      },
      {
        "id": "q2",
        "type": "ab",
        "question": "FIRE (Financial Independence, Retire Early) là gì?",
        "image": "🤔",
        "optionA": {
          "emoji": "🏝️",
          "title": "Nghỉ hưu sớm, không làm gì",
          "description": "Chỉ nghỉ ngơi và du lịch"
        },
        "optionB": {
          "emoji": "🦋",
          "title": "Độc lập tài chính, tự chọn công việc",
          "description": "Làm việc vì đam mê, không vì tiền"
        },
        "bestChoice": "B",
        "explanation": "FIRE không phải lười biếng! Nhiều người FIRE vẫn làm việc — nhưng họ chọn làm VÌ ĐAM MÊ, không vì sợ không có tiền ăn."
      },
      {
        "id": "q3",
        "type": "quiz",
        "question": "Nếu tiết kiệm 1.000.000đ/tháng từ năm 16 tuổi với lãi 8%/năm, đến 40 tuổi có bao nhiêu?",
        "image": "💡",
        "options": [
          {
            "text": "Khoảng 1 tỷ (lãi kép 24 năm)",
            "emoji": "💰"
          },
          {
            "text": "288 triệu (chỉ tính gốc)",
            "emoji": "❌"
          },
          {
            "text": "500 triệu",
            "emoji": "❌"
          },
          {
            "text": "2 tỷ",
            "emoji": "❌"
          }
        ],
        "correct": 0,
        "explanation": "1M/tháng × 24 năm × lãi kép 8%/năm ≈ 1 tỷ đồng! Chỉ 1M/tháng từ bây giờ — tỷ phú lúc 40 tuổi nhờ lãi kép."
      },
      {
        "id": "q4",
        "type": "ab",
        "question": "Bước đầu tiên có thể làm NGAY HÔM NAY để hướng đến tự do tài chính?",
        "image": "🤔",
        "optionA": {
          "emoji": "⏳",
          "title": "Chờ có thu nhập ổn định",
          "description": "Học hết đại học rồi bắt đầu"
        },
        "optionB": {
          "emoji": "🚀",
          "title": "Tiết kiệm 10% dù nhỏ",
          "description": "Tập thói quen ngay từ đầu"
        },
        "bestChoice": "B",
        "explanation": "BẮT ĐẦU NGAY — dù chỉ 50.000đ/tháng! Quan trọng là XÂY DỰNG THÓI QUEN. Khi thu nhập tăng, số tiền tiết kiệm sẽ tự nhiên tăng theo."
      },
      {
        "id": "q5",
        "type": "quiz",
        "question": "Quy tắc 4% trong FIRE nghĩa là gì?",
        "image": "💡",
        "options": [
          {
            "text": "Rút 4%/năm từ danh mục đầu tư là an toàn bền vững",
            "emoji": "📊"
          },
          {
            "text": "Đầu tư 4% thu nhập mỗi năm",
            "emoji": "❌"
          },
          {
            "text": "Lãi suất tiết kiệm tối thiểu cần đạt",
            "emoji": "❌"
          },
          {
            "text": "Thuế đầu tư phải đóng",
            "emoji": "❌"
          }
        ],
        "correct": 0,
        "explanation": "Quy tắc 4%: nếu danh mục = 25 × chi tiêu hàng năm → rút 4%/năm không bao giờ hết tiền (danh mục tăng trưởng bù lại). Đây là nền tảng kế hoạch FIRE!"
      }
    ],
    "topic": "money-basics",
    "level": "advanced"
  },
  {
    "id": "lib-money-basics-foundation",
    "title": "Cơ bản về tiền · Khởi đầu",
    "subtitle": "8 câu từ kho thư viện 🌱",
    "ageGroup": "9-12",
    "category": "transaction",
    "topic": "money-basics",
    "level": "foundation",
    "icon": "💰",
    "color": "#16C172",
    "bgColor": "#EAFBF1",
    "xp": 160,
    "description": "Bộ câu hỏi Cơ bản về tiền cấp Khởi đầu.",
    "fromLibrary": true,
    "questions": [
      {
        "id": "qb-money-basics-foundation-0001",
        "type": "quiz",
        "question": "Tiền dùng để làm gì?",
        "image": "💵",
        "options": [
          {
            "text": "Mua những thứ chúng ta cần hoặc muốn",
            "emoji": "🛍️"
          },
          {
            "text": "Chỉ để sưu tầm và ngắm",
            "emoji": "🔍"
          },
          {
            "text": "Chôn dưới đất để giữ bảo mật",
            "emoji": "⛏️"
          },
          {
            "text": "Tặng cho bạn bè hàng ngày",
            "emoji": "🎁"
          }
        ],
        "correct": 0,
        "explanation": "Tiền là công cụ để trao đổi giá trị. Chúng ta kiếm tiền từ công việc, lao động, rồi dùng nó để mua đồ ăn, sách, đồ chơi, hoặc các dịch vụ mà mình cần.",
        "skills": [
          "needs-vs-wants",
          "saving-habit"
        ],
        "bookRefs": [
          "how-money-works"
        ],
        "marketingHook": "Bạn có biết? Tiền không có giá trị thật — giá trị của nó nằm ở thứ bạn đổi được bằng nó! 💡",
        "difficulty": 1
      },
      {
        "id": "qb-money-basics-foundation-0002",
        "type": "quiz",
        "question": "Bạn có 50.000 đồng. Bạn mua một cái bánh mì giá 15.000 đồng. Bạn còn lại bao nhiêu tiền?",
        "image": "🥖",
        "options": [
          {
            "text": "35.000 đồng",
            "emoji": "✅"
          },
          {
            "text": "65.000 đồng",
            "emoji": "❌"
          },
          {
            "text": "15.000 đồng",
            "emoji": "❌"
          },
          {
            "text": "50.000 đồng",
            "emoji": "❌"
          }
        ],
        "correct": 0,
        "explanation": "Khi chi tiêu, ta trừ số tiền đã dùng từ số tiền ban đầu. 50.000 - 15.000 = 35.000 đồng. Đây gọi là tính toán số dư (balance) của bạn.",
        "skills": [
          "budgeting",
          "saving-habit"
        ],
        "bookRefs": [
          "how-money-works"
        ],
        "marketingHook": "Bạn có biết? Theo dõi số dư mỗi ngày là thói quen nhỏ tạo nên người quản lý tài chính giỏi! 🧮",
        "difficulty": 1
      },
      {
        "id": "qb-money-basics-foundation-0003",
        "type": "quiz",
        "question": "Để có tiền, bạn phải làm gì trước?",
        "image": "💼",
        "options": [
          {
            "text": "Làm việc, kiếm thu nhập hoặc nhận tiền từ cha mẹ",
            "emoji": "👨‍💼"
          },
          {
            "text": "Đi xin tiền ở đường phố",
            "emoji": "🚫"
          },
          {
            "text": "Tiêu tiền mà không cần có",
            "emoji": "🚫"
          },
          {
            "text": "Chờ cho đến khi tự động xuất hiện",
            "emoji": "⏳"
          }
        ],
        "correct": 0,
        "explanation": "Tiền không tự có được. Bạn cần làm công việc, lao động (hoặc trẻ em có thể nhận tiền từ cha mẹ). Lao động → kiếm tiền → chi tiêu là chu kỳ cơ bản.",
        "skills": [
          "saving-habit",
          "budgeting"
        ],
        "bookRefs": [
          "richest-man-babylon",
          "rich-dad-poor-dad"
        ],
        "marketingHook": "Bạn có biết? Hiểu rằng tiền phải được kiếm ra là bài học tài chính số 1 cho trẻ em! 🌱",
        "difficulty": 1
      },
      {
        "id": "qb-money-basics-foundation-0004",
        "type": "quiz",
        "question": "Cơm chiều hôm nay giá 25.000 đồng. Nước cam giá 8.000 đồng. Tổng cộng bạn phải trả bao nhiêu?",
        "image": "🍜",
        "options": [
          {
            "text": "17.000 đồng",
            "emoji": "❌"
          },
          {
            "text": "33.000 đồng",
            "emoji": "✅"
          },
          {
            "text": "25.000 đồng",
            "emoji": "❌"
          },
          {
            "text": "8.000 đồng",
            "emoji": "❌"
          }
        ],
        "correct": 1,
        "explanation": "Khi mua nhiều thứ, ta cộng giá của mỗi thứ lại. 25.000 + 8.000 = 33.000 đồng. Tổng này gọi là tổng chi tiêu (total expense).",
        "skills": [
          "budgeting",
          "needs-vs-wants"
        ],
        "bookRefs": [
          "how-money-works"
        ],
        "marketingHook": "Bạn có biết? Biết tính tổng chi tiêu trước khi trả tiền giúp bạn không bao giờ bị hụt ví! 🧾",
        "difficulty": 1
      },
      {
        "id": "qb-money-basics-foundation-0005",
        "type": "quiz",
        "question": "Tiết kiệm tiền nghĩa là gì?",
        "image": "🏦",
        "options": [
          {
            "text": "Không chi tiêu gì cả, luôn giữ lại tiền",
            "emoji": "🚫"
          },
          {
            "text": "Chi tiêu hết mà không để dành một đồng",
            "emoji": "🚫"
          },
          {
            "text": "Chi tiêu thông minh và để dành một phần tiền cho nhu cầu sau này",
            "emoji": "✅"
          },
          {
            "text": "Cho mọi người tiền của mình",
            "emoji": "🚫"
          }
        ],
        "correct": 2,
        "explanation": "Tiết kiệm không phải là sống cơ cực. Đó là cân bằng: chi tiêu cho những gì cần thiết ngay bây giờ, nhưng cũng để dành một phần tiền cho tương lai (mua sách, đi chơi sau này, hoặc khi gặp khó khăn bất ngờ).",
        "skills": [
          "saving-habit",
          "budgeting",
          "emergency-fund"
        ],
        "bookRefs": [
          "richest-man-babylon",
          "how-money-works"
        ],
        "marketingHook": "Bạn có biết? Tiết kiệm không phải là nhịn — đó là trả tiền cho tương lai của chính bạn! 🐖",
        "difficulty": 2
      },
      {
        "id": "qb-money-basics-foundation-0006",
        "type": "ab",
        "question": "Em có 100.000 đồng tiền Tết từ bà. Em nên làm gì?",
        "image": "🧧",
        "optionA": {
          "emoji": "🛒",
          "title": "Tiêu hết ngay để mua đồ chơi, kẹo, game",
          "description": "Mua những gì em muốn ngay lập tức mà không suy nghĩ"
        },
        "optionB": {
          "emoji": "💰",
          "title": "Để dành một phần, chi tiêu một phần",
          "description": "Ví dụ: dùng 40.000 để mua đồ em thích, để dành 60.000 cho nhu cầu sau này hoặc khi cần"
        },
        "bestChoice": "B",
        "explanation": "Tiền Tết là cơ hội học tiết kiệm. Nếu tiêu hết ngay, em sẽ hối tiếc khi muốn mua gì sau này nhưng không còn tiền. Cách tốt là chia: một phần để chi tiêu vui vẻ, một phần để dành phòng trường hợp.",
        "skills": [
          "saving-habit",
          "needs-vs-wants",
          "budgeting"
        ],
        "bookRefs": [
          "richest-man-babylon",
          "psychology-of-money"
        ],
        "marketingHook": "Bạn có biết? Trẻ em học chia tiền Tết 60/40 sẽ hiểu ngân sách cá nhân sớm hơn 10 năm so với bạn bè! 🧧",
        "difficulty": 2
      },
      {
        "id": "qb-money-basics-foundation-0007",
        "type": "ab",
        "question": "Bạn thấy một chiếc áo giá 200.000 đồng. Bạn có 150.000 đồng. Bạn nên làm gì?",
        "image": "👕",
        "optionA": {
          "emoji": "💳",
          "title": "Vay tiền hoặc mượn để mua ngay",
          "description": "Lấy tiền từ cha mẹ/bạn để mua, rồi trả sau"
        },
        "optionB": {
          "emoji": "⏳",
          "title": "Tiết kiệm thêm hoặc chọn cái áo rẻ hơn",
          "description": "Chờ để kiếm thêm tiền, hoặc tìm cái áo khác rẻ hơn mà vẫn thích"
        },
        "bestChoice": "B",
        "explanation": "Khi chưa đủ tiền mua một thứ, cách hay nhất là tiết kiệm thêm hoặc tìm lựa chọn vừa túi tiền hơn. Điều này giúp bạn tránh nợ nần và dần học được cách quản lý tài chính thông minh.",
        "skills": [
          "debt-management",
          "needs-vs-wants",
          "saving-habit"
        ],
        "bookRefs": [
          "rich-dad-poor-dad",
          "psychology-of-money"
        ],
        "marketingHook": "Bạn có biết? Mỗi lần bạn chờ tiết kiệm đủ tiền thay vì vay, bạn đang tránh bẫy nợ suốt đời! 💡",
        "difficulty": 2
      },
      {
        "id": "qb-money-basics-foundation-0008",
        "type": "transaction",
        "question": "Sau cả tuần, Lan còn bao nhiêu tiền có thể dùng hàng ngày (không tính tiền gửi tiết kiệm)?",
        "image": "📒",
        "scenario": "Bạn Lan là một học sinh lớp 5. Dưới đây là các giao dịch tiền trong một tuần:",
        "startBalance": 200000,
        "currency": "đ",
        "steps": [
          {
            "description": "Thứ Hai: Cha mẹ cho tiền đi học thêm",
            "amount": 150000,
            "type": "income",
            "hint": "Tiền nhận được → cộng vào"
          },
          {
            "description": "Thứ Ba: Mua sách vở trường học",
            "amount": 80000,
            "type": "expense",
            "hint": "Chi tiêu → trừ đi"
          },
          {
            "description": "Thứ Tư: Bà cho tiền mua đồ ăn bán trú",
            "amount": 100000,
            "type": "income",
            "hint": "Nhận được tiền → cộng vào"
          },
          {
            "description": "Thứ Năm: Mua nước uống và bánh qua ngày",
            "amount": 45000,
            "type": "expense",
            "hint": "Chi tiêu → trừ đi"
          },
          {
            "description": "Thứ Sáu: Gửi tiết kiệm vào lợn đất",
            "amount": 60000,
            "type": "save",
            "hint": "Để dành → trừ khỏi số tiền sử dụng hàng ngày"
          }
        ],
        "correctAnswer": 385000,
        "explanation": "Bắt đầu: 200.000đ. Cộng tiền nhận được (150.000 + 100.000 = 250.000) → Tổng: 450.000đ. Trừ chi tiêu (80.000 + 45.000 = 125.000) → Còn: 325.000đ. Trừ tiền tiết kiệm (60.000) → Còn dùng hàng ngày: 265.000đ. Tiết kiệm không phải là tiêu xài — đó là khoản để dành cho tương lai!",
        "skills": [
          "budgeting",
          "saving-habit",
          "emergency-fund"
        ],
        "bookRefs": [
          "richest-man-babylon",
          "how-money-works"
        ],
        "marketingHook": "Bạn có biết? Ghi chép thu chi từng ngày — thói quen đơn giản nhất để không bao giờ hết tiền trước cuối tháng! 📒",
        "difficulty": 3
      }
    ]
  },
  {
    "id": "lib-digital-assets-advanced",
    "title": "Tài sản số · Vững vàng",
    "subtitle": "8 câu từ kho thư viện 🌳",
    "ageGroup": "13-16",
    "category": "transaction",
    "topic": "digital-assets",
    "level": "advanced",
    "icon": "🪙",
    "color": "#F59E0B",
    "bgColor": "#FFFBEB",
    "xp": 160,
    "description": "Bộ câu hỏi Tài sản số cấp Vững vàng.",
    "fromLibrary": true,
    "questions": [
      {
        "id": "qb-digital-assets-advanced-0001",
        "type": "quiz",
        "question": "Bạn vừa mua 2 triệu đồng tiền điện tử Bitcoin. Một tuần sau, giá Bitcoin giảm 30%. Tài sản số của bạn hiện bây giờ là bao nhiêu?",
        "image": "📉",
        "options": [
          {
            "text": "1,4 triệu đồng",
            "emoji": "💔"
          },
          {
            "text": "2 triệu đồng",
            "emoji": "➡️"
          },
          {
            "text": "2,6 triệu đồng",
            "emoji": "📈"
          },
          {
            "text": "Không thể tính được",
            "emoji": "❓"
          }
        ],
        "correct": 0,
        "explanation": "Khi giá giảm 30%, bạn mất 30% giá trị. 2 triệu × 30% = 600k. 2 triệu − 600k = 1,4 triệu đồng. Đây là lý do chính cần cẩn thận với tài sản số: giá có thể rớt nhanh, bạn có thể mất tiền nhanh chóng.",
        "skills": [],
        "bookRefs": [],
        "marketingHook": "Bạn có biết? 2 triệu Bitcoin giảm 30% chỉ một tuần, bạn mất ngay 600k đồng? Tài sản số rơi nhanh như thế đó!",
        "difficulty": 4
      },
      {
        "id": "qb-digital-assets-advanced-0002",
        "type": "quiz",
        "question": "Ví tiền điện tử (ví kỹ thuật số lưu trữ tiền số) có điểm khác biệt gì so với ví thường?",
        "image": "👛",
        "options": [
          {
            "text": "Ví tiền điện tử có thể bị hack nếu bạn để lộ mật khẩu; ví thường chỉ cần canh chừng trộm cắp",
            "emoji": "🔐"
          },
          {
            "text": "Ví tiền điện tử có thể mang theo nhiều tiền hơn",
            "emoji": "💰"
          },
          {
            "text": "Ví tiền điện tử không cần giấu kín, ai cũng có thể xem",
            "emoji": "👀"
          },
          {
            "text": "Không có gì khác, chỉ là tên gọi khác nhau thôi",
            "emoji": "🤷"
          }
        ],
        "correct": 0,
        "explanation": "Ví tiền điện tử lưu trữ trực tuyến (trên internet hoặc ứng dụng điện thoại). Nếu ai biết mật khẩu hay khóa riêng (một dãy ký tự bảo mật), họ có thể lấy hết tiền của bạn. Ví thường chỉ cần giữ an toàn khỏi mất cắp vật lý. Đây là rủi ro lớn của tài sản số.",
        "skills": [],
        "bookRefs": [],
        "marketingHook": "Bạn có biết? Chỉ cần ai biết mật khẩu ví tiền điện tử, họ lấy hết tiền bạn chỉ trong giây lát?",
        "difficulty": 4
      },
      {
        "id": "qb-digital-assets-advanced-0003",
        "type": "quiz",
        "question": "Bạn mua NFT (một loại tài sản số đại diện cho quyền sở hữu, như chứng chỉ về bức ảnh hay tác phẩm kỹ thuật số) với giá 5 triệu đồng. Một tháng sau, nhà tạo tác phẩm bị lộ lừa đảo. NFT của bạn giảm xuống 200k. Bạn có thể làm gì?",
        "image": "🖼️",
        "options": [
          {
            "text": "Khiếu nại với ngân hàng để lấy lại tiền",
            "emoji": "🏦"
          },
          {
            "text": "Bán NFT, chịu lỗ 4,8 triệu hoặc giữ lại hy vọng giá tăng lại",
            "emoji": "💸"
          },
          {
            "text": "Liên hệ công an vì đây là hành vi lừa đảo",
            "emoji": "👮"
          },
          {
            "text": "Tất cả đều đúng",
            "emoji": "✔️"
          }
        ],
        "correct": 1,
        "explanation": "Tài sản số (đặc biệt NFT) không được bảo vệ như tiền gửi ngân hàng. Nếu dự án thất bại hay người tạo lừa đảo, bạn chủ yếu phải tự chịu lỗ. Cảnh sát có thể điều tra nhưng khó lấy lại tiền. Đây là lý do: KHÔNG nên bỏ toàn bộ tiền vào tài sản số mà chưa hiểu rõ.",
        "skills": [],
        "bookRefs": [],
        "marketingHook": "Bạn có biết? NFT 5 triệu đồng bốc hơi còn 200k khi dự án lừa đảo, bạn không có ai bảo vệ?",
        "difficulty": 4
      },
      {
        "id": "qb-digital-assets-advanced-0004",
        "type": "quiz",
        "question": "Bạn sử dụng sàn giao dịch tiền điện tử (một trang web hoặc ứng dụng cho phép mua bán tiền số). Sàn bị hacker tấn công, mất 100 tỷ đồng tiền khách hàng. Tiền của bạn (50 triệu) có được bảo vệ?",
        "image": "🛡️",
        "options": [
          {
            "text": "Có, sàn giao dịch phải bảo hiểm toàn bộ tiền khách hàng",
            "emoji": "✅"
          },
          {
            "text": "Không chắc chắn. Hầu hết sàn giao dịch tiền điện tử ở Việt Nam KHÔNG bảo hiểm tiền khách hàng",
            "emoji": "⚠️"
          },
          {
            "text": "Chỉ bảo vệ 50% số tiền",
            "emoji": "½"
          },
          {
            "text": "Ngân hàng Nhà nước sẽ bù lỗ",
            "emoji": "🏛️"
          }
        ],
        "correct": 1,
        "explanation": "Đây là rủi ro LỚNHẤT của tài sản số: sàn giao dịch tiền điện tử thường KHÔNG bảo hiểm tiền bạn gửi, không giống ngân hàng (ngân hàng bảo hiểm lên 3 tỷ/khách hàng). Nếu sàn bị hack hay phá sản, tiền bạn có thể mất hết. Luôn chỉ giao dịch trên sàn uy tín, giới hạn số tiền.",
        "skills": [],
        "bookRefs": [],
        "marketingHook": "Bạn có biết? Sàn tiền điện tử bị hack, 50 triệu tiền bạn có thể mất hết vì KHÔNG có bảo hiểm?",
        "difficulty": 4
      },
      {
        "id": "qb-digital-assets-advanced-0005",
        "type": "quiz",
        "question": "Bạn nhận được tin nhắn từ \"bạn bè\" trên Facebook yêu cầu gửi tiền vào ví tiền điện tử nói rằng sẽ nhân lên gấp đôi trong 1 tháng. Bạn nên?",
        "image": "📲",
        "options": [
          {
            "text": "Gửi 1 triệu đôi để thử trước",
            "emoji": "🤞"
          },
          {
            "text": "Gửi ngay 10 triệu vì cơ hội tốt",
            "emoji": "💨"
          },
          {
            "text": "KHÔNG gửi. Đây là lừa đảo điển hình. Tiền điện tử KHÔNG có lợi nhuận chắc chắn",
            "emoji": "🚫"
          },
          {
            "text": "Hỏi thêm người khác rồi quyết định",
            "emoji": "🤔"
          }
        ],
        "correct": 2,
        "explanation": "Lừa đảo tài sản số rất phổ biến ở Việt Nam. Không ai có thể hứa tiền gấp đôi chỉ trong 1 tháng mà không rủi ro. Nếu quá tốt để là sự thật, nó thường LÀ lừa đảo. Sau khi bạn gửi tiền, tài khoản sẽ khóa hoặc trang web biến mất. NHỚ: tài sản số rủi ro cao, KHÔNG nên vì FOMO (sợ bỏ lỡ).",
        "skills": [],
        "bookRefs": [],
        "marketingHook": "Bạn có biết? Nhân tiền gấp đôi trong 1 tháng là lừa đảo 99%, bạn gửi tiền là mất hết ngay?",
        "difficulty": 4
      },
      {
        "id": "qb-digital-assets-advanced-0006",
        "type": "ab",
        "question": "Bạn có 10 triệu đồng tiền tiết kiệm. Bạn đang cân nhắc: nên gửi toàn bộ vào ví tiền điện tử tích lũy, hay chỉ dành một phần?",
        "image": "⚖️",
        "optionA": {
          "emoji": "🔥",
          "title": "Gửi toàn bộ 10 triệu vào tiền điện tử",
          "description": "Nếu tăng giá 5 lần, bạn có 50 triệu. Nhưng nếu rơi 80%, chỉ còn 2 triệu. Giá tiền điện tử rất biến động."
        },
        "optionB": {
          "emoji": "🛡️",
          "title": "Chia thành: 7 triệu gửi tiết kiệm ngân hàng (ổn định, an toàn), 3 triệu vào tiền điện tử (học hỏi)",
          "description": "Tiền ngân hàng không tăng nhiều nhưng an toàn, có bảo hiểm. Tiền điện tử có thể tăng cao, nhưng nếu mất, bạn còn 7 triệu. Cân bằng rủi ro."
        },
        "bestChoice": "B",
        "explanation": "Tài sản số là khoản đầu tư có rủi ro rất cao. Nguyên tắc VÀNG: KHÔNG bao giờ bỏ toàn bộ tiền vào một tài sản quá rủi ro, đặc biệt khi bạn chưa hiểu rõ. Chia nhỏ tiền (diversify), giữ phần lớn ở chỗ an toàn, dành một phần nhỏ để học hỏi. Nếu mất 3 triệu, bạn vẫn có 7 triệu để sống, không hoảng loạn.",
        "skills": [],
        "bookRefs": [],
        "marketingHook": "Bạn có biết? Bỏ toàn bộ 10 triệu vào tiền điện tử mất hết, bạn sẽ phá sản không thể cứu vãn?",
        "difficulty": 4
      },
      {
        "id": "qb-digital-assets-advanced-0007",
        "type": "ab",
        "question": "Bạn muốn bảo vệ ví tiền điện tử của mình. Bạn nên?",
        "image": "🔐",
        "optionA": {
          "emoji": "📝",
          "title": "Viết mật khẩu (seed phrase — dãy 12–24 từ bảo mật) vào một tờ giấy và cất trong tủ nhà",
          "description": "Giấy có thể cháy, mất, hoặc người khác tìm thấy. Nhưng nếu lưu trên điện thoại, dễ bị hack."
        },
        "optionB": {
          "emoji": "🏦",
          "title": "Viết mật khẩu vào một bản sao trên cloud (Google Drive, OneDrive) để dễ truy cập mà không lo mất",
          "description": "Rất nguy hiểm! Nếu tài khoản cloud bị hack hoặc mật khẩu cloud bị lộ, hacker có tất cả. Mật khẩu tiền điện tử KHÔNG bao giờ nên lưu trực tuyến."
        },
        "bestChoice": "A",
        "explanation": "Mật khẩu ví tiền điện tử (seed phrase) là CHỈ CUỐI của lâu đài tiền của bạn. Tốt nhất: viết tay trên giấy chất lượng, giấu ở nơi an toàn (két sắt, nhà thân tin), KHÔNG bao giờ chụp ảnh hoặc gửi qua tin nhắn. Nếu mất mật khẩu, mất tiền mãi mãi, không ai giúp được.",
        "skills": [],
        "bookRefs": [],
        "marketingHook": "Bạn có biết? Mật khẩu ví tiền điện tử là CHÌA KHÓA mọi tiền bạn, mất nó là mất vĩnh viễn?",
        "difficulty": 4
      },
      {
        "id": "qb-digital-assets-advanced-0008",
        "type": "transaction",
        "question": "Sau ba bước trên, Hoa còn lại bao nhiêu tiền mặt để dùng hàng ngày?",
        "image": "💡",
        "scenario": "Hoa là một người lao động tự do, thu nhập bất ổn. Tháng này anh kiếm được 15 triệu đồng và quyết định một phần để học về tiền điện tử.",
        "startBalance": 15000000,
        "currency": "đ",
        "steps": [
          {
            "description": "Trích ra tiền ăn, ở, viện phí cơ bản cho tháng này",
            "amount": 8000000,
            "type": "expense",
            "hint": "Chi phí sống ưu tiên trước"
          },
          {
            "description": "Gửi tiết kiệm ngân hàng (an toàn, lãi suất ~5%/năm) để dành cho tháng tổn thất",
            "amount": 4000000,
            "type": "save",
            "hint": "Quỹ khẩn cấp rất cần thiết vì Hoa có thu nhập bất ổn"
          },
          {
            "description": "Bỏ vào ví tiền điện tử để học hỏi và có cơ hội lợi nhuận cao",
            "amount": 3000000,
            "type": "save",
            "hint": "Chỉ 20% tổng thu nhập, có thể chịu mất hoàn toàn"
          }
        ],
        "correctAnswer": 14000000,
        "explanation": "15 triệu − 8 triệu (chi phí sống) − 4 triệu (tiết kiệm ngân hàng) − 3 triệu (tiền điện tử) = 0 đồng. Đây là kế hoạch an toàn: Hoa chia tiền thành 3 phần — chi phí sống (ưu tiên), tiết kiệm an toàn (dự phòng khi không có việc), và đầu tư rủi cao (học hỏi, giới hạn tổn thất tối đa 3 triệu). Hoa không nên giữ tiền mặt thêm vì thu nhập bất ổn, mọi đồng nên phục vụ mục đích cụ thể. Nếu tháng sau không có thu nhập, anh vẫn có 4 triệu từ tiết kiệm.",
        "skills": [],
        "bookRefs": [],
        "marketingHook": "Bạn có biết? Chia tiền thành 3 phần: chi phí sống, tiết kiệm, đầu tư là cách sống an toàn nhất?",
        "difficulty": 4
      }
    ]
  },
  {
    "id": "lib-investing-advanced",
    "title": "Đầu tư · Vững vàng",
    "subtitle": "8 câu từ kho thư viện 🌳",
    "ageGroup": "13-16",
    "category": "choice",
    "topic": "investing",
    "level": "advanced",
    "icon": "📈",
    "color": "#8B5CF6",
    "bgColor": "#F5F3FF",
    "xp": 160,
    "description": "Bộ câu hỏi Đầu tư cấp Vững vàng.",
    "fromLibrary": true,
    "questions": [
      {
        "id": "qb-investing-advanced-0001",
        "type": "quiz",
        "question": "Bạn có 50 triệu đồng tiết kiệm. Bạn muốn đầu tư vào một quỹ ETF (chứng chỉ quỹ theo dõi chỉ số) — một rổ cổ phiếu giúp bạn chia nhỏ rủi ro mà không cần chọn từng công ty. Tuy nhiên, bạn định dùng số tiền này để mua nhà trong 3 năm tới. Hành động nào phù hợp nhất?",
        "image": "🏠",
        "options": [
          {
            "text": "Đầu tư toàn bộ 50 triệu vào ETF ngay, vì lợi suất cao",
            "emoji": "⚠️"
          },
          {
            "text": "Chia một phần (ví dụ 20–30 triệu) vào ETF cho mục tiêu dài hạn, giữ phần còn lại ở tiết kiệm ngân hàng để sẵn sàng mua nhà",
            "emoji": "✅"
          },
          {
            "text": "Không đầu tư gì, chỉ gửi tiết kiệm lãi suất",
            "emoji": "🏦"
          },
          {
            "text": "Chờ đến năm thứ 2 mới quyết định",
            "emoji": "⏳"
          }
        ],
        "correct": 1,
        "explanation": "Quyết định đầu tư PHẢI dựa trên thời gian bạn có thể chịu được biến động. Vì 3 năm là khá ngắn, nên chia tài sản: phần dành cho mục tiêu dài hạn (5+ năm) có thể đầu tư vào ETF (rủi ro vừa phải, lợi suất kỳ vọng cao hơn); phần dành cho mua nhà (0–3 năm) nên giữ an toàn ở tiết kiệm ngân hàng để không bị ảnh hưởng bởi biến động thị trường. Tỷ lệ cụ thể phụ thuộc vào nhu cầu của mỗi người. Cách này gọi là 'quản lý danh mục theo thời gian mục tiêu' (time-based portfolio management). Lưu ý: ETF không đảm bảo lợi suất và có thể giảm giá trị trong ngắn hạn.",
        "skills": [
          "diversification",
          "risk",
          "saving-habit"
        ],
        "bookRefs": [
          "how-money-works",
          "psychology-of-money"
        ],
        "marketingHook": "Bạn có biết? Đầu tư sai thời điểm mục tiêu có thể khiến bạn mất nhà — dù thị trường vẫn tăng dài hạn!",
        "difficulty": 3
      },
      {
        "id": "qb-investing-advanced-0002",
        "type": "quiz",
        "question": "Năm ngoái bạn đầu tư 20 triệu vào một mã cổ phiếu. Hôm nay, giá cổ phiếu đã rớt, giá trị tài sản chỉ còn 15 triệu (lỗ 5 triệu). Bạn cảm thấy rất lo lắng. Trong 4 hành động dưới đây, hành động nào KHÔNG nên làm?",
        "image": "📉",
        "options": [
          {
            "text": "Lập tức bán toàn bộ cổ phiếu chỉ vì hoảng sợ, không phân tích nguyên nhân",
            "emoji": "❌"
          },
          {
            "text": "Tìm hiểu lý do tại sao công ty sụt giá, đánh giá triển vọng dài hạn",
            "emoji": "🔍"
          },
          {
            "text": "Kiểm tra xem mức lỗ này có vượt quá khả năng chịu đựng rủi ro của bạn không",
            "emoji": "⚖️"
          },
          {
            "text": "Quyết định giữ hay bán dựa trên dữ liệu và kế hoạch, không phải cảm xúc",
            "emoji": "🧠"
          }
        ],
        "correct": 0,
        "explanation": "Bán cổ phiếu khi giá rớt chỉ vì hoảng sợ được gọi là 'panic selling' (bán hoảng loạn). Đây là sai lầm phổ biến: bạn chốt lỗ vĩnh viễn thay vì chờ thị trường có thể phục hồi. Thay vào đó, hãy phân tích nguyên nhân: nếu công ty vẫn kinh doanh tốt về cơ bản, giá giảm có thể chỉ là tạm thời. Nếu tình hình kinh doanh thực sự xấu đi, khi đó mới cân nhắc bán một cách có chủ ý. Nguyên tắc: luôn quyết định dựa trên dữ liệu, không phải cảm xúc. Lưu ý: đầu tư cổ phiếu luôn có rủi ro mất vốn.",
        "skills": [
          "risk",
          "psychology-of-money-mindset"
        ],
        "bookRefs": [
          "psychology-of-money"
        ],
        "marketingHook": "Bạn có biết? 'Panic selling' là lý do số 1 khiến nhà đầu tư nhỏ lẻ thua lỗ — dù thị trường về sau vẫn tăng.",
        "difficulty": 3
      },
      {
        "id": "qb-investing-advanced-0003",
        "type": "quiz",
        "question": "Bạn nghe một người bạn nói rằng anh ta vừa đầu tư vào một 'đồng tiền điện tử' (cryptocurrency) còn rất mới, lợi suất hứa hẹn 500% trong 1 năm. Anh ta khuyên bạn cũng nên tham gia. Bạn nên làm gì?",
        "image": "⚡",
        "options": [
          {
            "text": "Ngay lập tức chuyển tiền vào để 'bắt kịp thời cơ'",
            "emoji": "🚀"
          },
          {
            "text": "Hỏi thêm thông tin về dự án và cảnh báo bạn về rủi ro, nhưng vẫn cân nhắc tham gia",
            "emoji": "❓"
          },
          {
            "text": "Yêu cầu anh ta viết cam kết bảo lãnh lợi suất — điều này KHÔNG có giá trị pháp lý thực tế",
            "emoji": "📝"
          },
          {
            "text": "Tìm hiểu kỹ về dự án, tổ chức phát hành, và CHỈ đầu tư số tiền bạn chấp nhận mất hoàn toàn",
            "emoji": "🔒"
          }
        ],
        "correct": 3,
        "explanation": "Tiền điện tử (crypto) là tài sản có rủi ro rất cao, đặc biệt những loại mới và ít được biết đến. Quy tắc vàng: 'Lợi suất hứa hẹn quá cao (ví dụ 500%/năm) là dấu hiệu của lừa đảo hoặc rủi ro cực cao'. Tại Việt Nam, nhiều mô hình huy động tiền số kiểu này đã bị cơ quan chức năng cảnh báo là có dấu hiệu lừa đảo. KHÔNG bao giờ tin cam kết lợi suất cố định. Nếu vẫn muốn tìm hiểu, chỉ dùng số tiền bạn sẵn sàng mất hoàn toàn — gọi là 'risk capital'. Hãy tra cứu thông tin chính thống và tham khảo ý kiến chuyên gia trước khi quyết định.",
        "skills": [
          "risk",
          "needs-vs-wants"
        ],
        "bookRefs": [
          "how-money-works"
        ],
        "marketingHook": "Bạn có biết? Lợi suất hứa hẹn 500%/năm là dấu hiệu cảnh báo lừa đảo — không phải cơ hội vàng!",
        "difficulty": 2
      },
      {
        "id": "qb-investing-advanced-0004",
        "type": "quiz",
        "question": "Bạn là nhân viên, lương 15 triệu/tháng. Công ty có chương trình quỹ hưu trí tự nguyện: bạn đóng góp một phần lương, công ty sẽ đóng thêm 2% lương mỗi tháng nếu bạn tham gia. Giả sử bạn đã có quỹ khẩn cấp 3 tháng lương rồi. Bạn nên đóng bao nhiêu mỗi tháng?",
        "image": "💼",
        "options": [
          {
            "text": "Đóng 5 triệu/tháng để tối đa hóa số tiền đầu tư",
            "emoji": "💰"
          },
          {
            "text": "Đóng 2–3 triệu/tháng — mức bạn có thể tích lũy mà vẫn trang trải chi tiêu bình thường",
            "emoji": "✅"
          },
          {
            "text": "Không đóng gì, chỉ nhận lương",
            "emoji": "🙅"
          },
          {
            "text": "Chờ đến khi được tăng lương rồi mới bắt đầu đóng",
            "emoji": "⏳"
          }
        ],
        "correct": 1,
        "explanation": "Nguyên tắc quan trọng: chỉ đầu tư từ tiền dư sau khi đã có quỹ khẩn cấp (3–6 tháng chi tiêu) và đảm bảo chi tiêu hàng tháng. Với lương 15 triệu, đóng 2–3 triệu (khoảng 13–20% thu nhập) là mức hợp lý và bền vững. Đặc biệt, khoản công ty đóng thêm 2% là 'tiền miễn phí' — gọi là 'employer matching' — nên luôn tận dụng cơ hội này. Không cần chờ tăng lương: bắt đầu sớm giúp lãi kép tích lũy lâu hơn. Tuy nhiên đừng đóng quá nhiều đến mức không còn tiền cho sinh hoạt hàng ngày.",
        "skills": [
          "saving-habit",
          "budgeting",
          "emergency-fund"
        ],
        "bookRefs": [
          "richest-man-babylon",
          "rich-dad-poor-dad"
        ],
        "marketingHook": "Bạn có biết? Khoản công ty đóng thêm vào quỹ hưu trí cho bạn là 'tiền miễn phí' — bỏ qua là lãng phí!",
        "difficulty": 2
      },
      {
        "id": "qb-investing-advanced-0005",
        "type": "ab",
        "question": "Bạn có 100 triệu đồng tiết kiệm. Bạn đang cân nhắc giữa hai phương án đầu tư lâu dài (15 năm): A) Gửi tiết kiệm kỳ hạn 12 tháng tại ngân hàng (lãi suất 4–5%/năm, an toàn), hoặc B) Đầu tư vào quỹ ETF theo dõi chỉ số VN-Index (lợi suất trung bình lịch sử ~10%/năm, nhưng có biến động). Cái nào phù hợp hơn cho mục tiêu 15 năm?",
        "image": "⏳",
        "optionA": {
          "emoji": "🔒",
          "title": "Gửi tiết kiệm ngân hàng",
          "description": "Lãi suất ổn định 4–5%/năm, không mất vốn (được bảo hiểm tiền gửi đến 125 triệu đồng). Sau 15 năm, bạn sẽ có khoảng 190–200 triệu (lãi kép). Tuy nhiên, lạm phát có thể làm giảm sức mua thực tế của số tiền này."
        },
        "optionB": {
          "emoji": "📈",
          "title": "Đầu tư vào chỉ số chứng khoán (ETF VN-Index)",
          "description": "Lợi suất trung bình lịch sử ~10%/năm, sau 15 năm ước tính ~400–420 triệu. Tuy nhiên, có những năm giá giảm 20–30%, tài sản sẽ tạm thời giảm giá trị. Với 15 năm, các giai đoạn xấu thường được bù đắp bởi các giai đoạn tốt — nhưng không có gì đảm bảo."
        },
        "bestChoice": "B",
        "explanation": "Với thời gian 15 năm, bạn có đủ thời gian để vượt qua những biến động của thị trường. Lợi suất lịch sử ~10%/năm của chỉ số chứng khoán cao hơn nhiều so với 4–5% tiết kiệm, giúp tài sản tăng trưởng vượt lạm phát. Đây là khái niệm 'Time Horizon' (chân trời thời gian): thời gian càng dài, bạn càng có thể chấp nhận rủi ro để đổi lấy lợi suất cao hơn. Lưu ý quan trọng: lợi suất 10% là con số lịch sử, không đảm bảo trong tương lai; và nếu bạn cần dùng tiền trong vòng 5 năm, phương án A sẽ an toàn hơn.",
        "skills": [
          "compound-interest",
          "risk",
          "saving-habit"
        ],
        "bookRefs": [
          "how-money-works",
          "psychology-of-money"
        ],
        "marketingHook": "Bạn có biết? 100 triệu gửi ngân hàng 15 năm được ~200 triệu; đầu tư ETF cùng kỳ ước tính ~420 triệu — gấp đôi!",
        "difficulty": 3
      },
      {
        "id": "qb-investing-advanced-0006",
        "type": "ab",
        "question": "Bạn vừa nhận thưởng Tết 30 triệu đồng. Bạn đang cân nhắc: A) Mua cổ phiếu riêng lẻ của một công ty lớn bạn tin tưởng (ví dụ: Vinamilk, Vietcombank, FPT), hay B) Mua chứng chỉ quỹ ETF VN30 — một rổ gồm 30 công ty lớn nhất Việt Nam?",
        "image": "🎁",
        "optionA": {
          "emoji": "⭐",
          "title": "Mua cổ phiếu riêng lẻ",
          "description": "Nếu chọn đúng công ty tăng trưởng mạnh, lợi suất có thể rất cao. Nhưng nếu công ty đó gặp sự cố (kinh doanh xấu, bê bối...), toàn bộ 30 triệu của bạn bị ảnh hưởng nặng. Bạn cần nghiên cứu kỹ từng công ty và theo dõi thường xuyên."
        },
        "optionB": {
          "emoji": "📦",
          "title": "Mua chỉ số ETF VN30",
          "description": "Tiền của bạn được chia tự động cho 30 công ty lớn. Nếu 1 công ty gặp vấn đề, ảnh hưởng chỉ là 1/30 tài sản. Lợi suất có thể thấp hơn nếu một cổ phiếu nào đó tăng vọt, nhưng rủi ro thấp hơn — gọi là 'phân tán rủi ro' (diversification)."
        },
        "bestChoice": "B",
        "explanation": "Với người mới bắt đầu đầu tư, mua ETF chỉ số (phương án B) thường phù hợp hơn vì: (1) Rủi ro được phân tán — không bỏ tất cả trứng vào một giỏ; (2) Không cần theo dõi từng công ty hàng ngày — gọi là 'đầu tư thụ động' (passive investing); (3) Chi phí giao dịch thấp hơn so với chọn nhiều cổ phiếu riêng lẻ. Cổ phiếu riêng lẻ (A) phù hợp với người có kiến thức phân tích tài chính, kinh nghiệm thực tế và sẵn sàng chịu rủi ro tập trung cao. Lưu ý: cả hai phương án đều có rủi ro mất vốn, không phải kênh đầu tư đảm bảo.",
        "skills": [
          "diversification",
          "risk",
          "saving-habit"
        ],
        "bookRefs": [
          "how-money-works",
          "rich-dad-poor-dad"
        ],
        "marketingHook": "Bạn có biết? ETF VN30 giúp bạn sở hữu 30 công ty lớn nhất VN chỉ với vài trăm nghìn — đầu tư thụ động thông minh!",
        "difficulty": 2
      },
      {
        "id": "qb-investing-advanced-0007",
        "type": "quiz",
        "question": "Bạn là một nhân viên 32 tuổi, lương 18 triệu/tháng. Công ty vừa mở chương trình quỹ hưu trí doanh nghiệp tự nguyện (một tài khoản giúp bạn tích lũy tiền cho tuổi già, có ưu đãi thuế thu nhập cá nhân): công ty sẽ đóng góp thêm 50% số tiền bạn đóng (ví dụ: bạn đóng 1 triệu đồng, công ty đóng thêm 500 nghìn đồng vào tài khoản của bạn). Lưu ý: tiền trong quỹ thường bị hạn chế rút trước tuổi nghỉ hưu theo quy định của quỹ. Bạn đã có quỹ khẩn cấp đủ 6 tháng lương. Cách nào tối ưu nhất để bắt đầu tham gia?",
        "image": "🏢",
        "options": [
          {
            "text": "Đóng góp tối thiểu (ví dụ 500 nghìn/tháng) để không ảnh hưởng dòng tiền hàng tháng",
            "emoji": "🤏"
          },
          {
            "text": "Đóng góp khoảng 10% lương (1,8 triệu/tháng) để nhận đủ phần công ty đóng thêm — lợi suất tức thì 50% trên số tiền bỏ ra",
            "emoji": "✅"
          },
          {
            "text": "Không tham gia vì tiền lương cần dùng để chi tiêu hiện tại, không thể dành cho tương lai",
            "emoji": "❌"
          },
          {
            "text": "Đóng góp cao nhất có thể (20–30% lương) để tích lũy nhanh nhất",
            "emoji": "📈"
          }
        ],
        "correct": 1,
        "explanation": "Câu trả lời đúng là B. Đây là cơ hội hiếm có vì công ty đang tặng bạn TIỀN THÊM MIỄN PHÍ (tiếng Anh gọi là 'employer match'). Khi bạn đóng 1 triệu đồng, công ty tặng thêm 500 nghìn đồng — tương đương lợi suất ngay lập tức 50%, cao hơn bất kỳ kênh tiết kiệm hay đầu tư thông thường nào. Mức 10% lương (khoảng 1,8 triệu/tháng) là hợp lý vì: (1) Bạn đã có quỹ khẩn cấp đủ 6 tháng — nền tảng tài chính vững; (2) Còn lại ~16 triệu đồng đủ cho chi tiêu và các mục tiêu ngắn hạn; (3) Tiền trong quỹ hưu trí doanh nghiệp thường bị hạn chế rút trước tuổi nghỉ hưu theo quy định của từng quỹ, vì vậy không nên đóng quá nhiều đến mức ảnh hưởng thanh khoản. Lựa chọn A (đóng quá ít) lãng phí phần đóng thêm của công ty. Lựa chọn D (đóng 20–30%) làm giảm mạnh dòng tiền hàng tháng trong khi tiền bị 'khóa' dài hạn. Lựa chọn C sai vì ở tuổi 32, bạn còn khoảng 28–33 năm tích lũy — thời gian dài hạn là lợi thế lớn nhất của quỹ hưu trí.",
        "skills": [
          "saving-habit",
          "compound-interest",
          "emergency-fund"
        ],
        "bookRefs": [
          "psychology-of-money",
          "richest-man-babylon"
        ],
        "marketingHook": "Bạn có biết? Đóng quỹ hưu trí có employer match = lợi suất 50% ngay lập tức — không kênh đầu tư nào sánh được!",
        "difficulty": 4
      },
      {
        "id": "qb-investing-advanced-0008",
        "type": "quiz",
        "question": "Bạn là một kỹ sư 28 tuổi, lương 16 triệu đồng/tháng. Bạn vừa tiết kiệm được 80 triệu đồng. Bạn có 3 mục tiêu tài chính: (1) Mua xe máy giá 30 triệu trong 1 năm tới, (2) Tích lũy tiền cưới trong 5 năm, (3) Chuẩn bị cho tuổi già (40+ năm nữa). Bạn đang cân nhắc cách chia 80 triệu này ra sao. Hỏi: Chiến lược phân bổ nào hợp lý nhất?",
        "image": "🗂️",
        "options": [
          {
            "text": "Để hết 80 triệu vào quỹ ETF (một rổ cổ phiếu theo dõi chỉ số thị trường). Lợi suất cao hơn, có thể đáp ứng cả 3 mục tiêu",
            "emoji": "📈"
          },
          {
            "text": "Chia: 30 triệu gửi tiết kiệm kỳ hạn ngắn 1–3 tháng (cho xe năm sau – an toàn, rút linh hoạt); 20 triệu gửi tiết kiệm kỳ hạn 3–5 năm (cho cưới – trung hạn); 30 triệu đầu tư ETF (cho hưu trí – dài hạn, chấp nhận rủi ro biến động)",
            "emoji": "⚖️"
          },
          {
            "text": "Để hết 80 triệu gửi tiết kiệm kỳ hạn ngân hàng 12 tháng lặp lại (an toàn nhất, không mất ngủ lo rủi ro)",
            "emoji": "🏦"
          },
          {
            "text": "Đầu tư toàn bộ vào cổ phiếu riêng lẻ của các công ty lớn (Vinamilk, Vietcombank). Có thể đem lại lợi nhuận cao nếu chọn đúng cổ phiếu, dễ kiểm soát",
            "emoji": "📊"
          }
        ],
        "correct": 1,
        "explanation": "Đáp án B là chiến lược phân bổ tài sản (asset allocation) hợp lý nhất. Nó khớp mỗi mục tiêu với loại đầu tư thích hợp: (1) Mục tiêu **ngắn hạn** (1 năm, xe máy) → tiết kiệm kỳ hạn ngắn 1–3 tháng (lãi suất ~3–4%/năm, rút linh hoạt khi đến hạn mà không bị phạt lãi suất). (2) Mục tiêu **trung hạn** (5 năm, cưới) → tiết kiệm kỳ hạn 3–5 năm (lãi suất cao hơn ~5–6%/năm, rủi ro vẫn thấp). (3) Mục tiêu **dài hạn** (40+ năm, hưu trí) → ETF (lợi suất trung bình lịch sử khoảng 10%/năm, nhưng có biến động; bạn có đủ thời gian để vượt qua các giai đoạn thị trường đi xuống). Các phương án khác chưa hợp lý vì: A) Để hết vào ETF bỏ qua nhu cầu xe trong 1 năm — nếu thị trường giảm đúng lúc đó, bạn có thể không đủ tiền mua xe. C) Toàn bộ tiết kiệm lãi suất thấp hơn lạm phát dài hạn, không đủ tích lũy cho 40 năm. D) Cổ phiếu riêng lẻ = tập trung rủi ro vào 1–2 công ty, rủi ro cao hơn ETF và không phù hợp cho người mới bắt đầu đầu tư.",
        "skills": [
          "diversification",
          "risk",
          "saving-habit"
        ],
        "bookRefs": [
          "how-money-works",
          "psychology-of-money"
        ],
        "marketingHook": "Bạn có biết? Đặt tiền ngắn hạn vào ETF có thể khiến bạn không đủ tiền mua xe nếu thị trường sập đúng lúc cần rút!",
        "difficulty": 4
      }
    ]
  },
  {
    "id": "lib-saving-foundation",
    "title": "Tiết kiệm · Khởi đầu",
    "subtitle": "6 câu từ kho thư viện 🌱",
    "ageGroup": "9-12",
    "category": "choice",
    "topic": "saving",
    "level": "foundation",
    "icon": "🐷",
    "color": "#3B82F6",
    "bgColor": "#EFF6FF",
    "xp": 120,
    "description": "Bộ câu hỏi Tiết kiệm cấp Khởi đầu.",
    "fromLibrary": true,
    "questions": [
      {
        "id": "qb-saving-foundation-0001",
        "type": "quiz",
        "question": "Tiết kiệm có nghĩa là gì?",
        "image": "🏦",
        "options": [
          {
            "text": "Dành một phần tiền để không tiêu hôm nay, để dùng sau này",
            "emoji": "💰"
          },
          {
            "text": "Tiêu hết tất cả tiền kiếm được trong ngày",
            "emoji": "🛍️"
          },
          {
            "text": "Vay tiền từ bạn bè",
            "emoji": "🤝"
          },
          {
            "text": "Không bao giờ mua thứ gì cả",
            "emoji": "❌"
          }
        ],
        "correct": 0,
        "explanation": "Tiết kiệm chính là cách quản lý tiền thông minh: bạn kiếm tiền, tiêu một phần cần thiết, và dành lại phần còn lại cho những nhu cầu sau này hoặc những lúc khó khăn. Không phải không tiêu tiền, mà là tiêu có kế hoạch.",
        "skills": [
          "saving-habit",
          "budgeting"
        ],
        "bookRefs": [],
        "marketingHook": "Bạn có biết? Tiết kiệm không phải từ bỏ vui vẻ, mà là tiêu tiền có kế hoạch để tương lai tự do.",
        "difficulty": 1
      },
      {
        "id": "qb-saving-foundation-0002",
        "type": "quiz",
        "question": "Em được cha mẹ cho 50.000 đồng tiền tiêu vặt trong tháng. Em tiêu 35.000 đồng, còn lại 15.000 đồng. Em nên làm gì với 15.000 đồng?",
        "image": "👧",
        "options": [
          {
            "text": "Gửi vào lợn tiết kiệm hoặc nhờ bố mẹ gửi vào tài khoản tiết kiệm",
            "emoji": "🐷"
          },
          {
            "text": "Phải tiêu hết trước hết hạn tháng",
            "emoji": "🎮"
          },
          {
            "text": "Cho cha mẹ để họ xử lý",
            "emoji": "👨‍👩‍👧"
          },
          {
            "text": "Để đó, không cần quan tâm",
            "emoji": "😴"
          }
        ],
        "correct": 0,
        "explanation": "15.000 đồng dù nhỏ nhưng nếu gửi vào lợn tiết kiệm hoặc nhờ bố mẹ gửi vào tài khoản ngân hàng (vì trẻ em cần bố mẹ đứng tên), bạn sẽ có một khoản tiền để ứng phó khi cần, hoặc dùng cho những điều muốn mua sau. Đó là bước đầu học tiết kiệm.",
        "skills": [
          "saving-habit",
          "needs-vs-wants"
        ],
        "bookRefs": [],
        "marketingHook": "Bạn có biết? Các em bắt đầu tiết kiệm từ 15k/tháng có thể có 180k/năm để thực hiện ước mơ.",
        "difficulty": 1
      },
      {
        "id": "qb-saving-foundation-0003",
        "type": "quiz",
        "question": "Nếu bạn muốn mua một chiếc xe đạp giá 2.000.000 đồng nhưng hiện tại chỉ có 500.000 đồng, bạn nên làm gì?",
        "image": "🚲",
        "options": [
          {
            "text": "Gửi tiết kiệm số tiền có được, mỗi tháng dành thêm tiền để dần dần đạt được mục tiêu",
            "emoji": "📈"
          },
          {
            "text": "Từ bỏ ý định vì không thể mua ngay được",
            "emoji": "😞"
          },
          {
            "text": "Vay mượn tiền từ bạn bè rồi mua ngay",
            "emoji": "📞"
          },
          {
            "text": "Mua cái khác rẻ hơn thay vì tiết kiệm",
            "emoji": "🛒"
          }
        ],
        "correct": 0,
        "explanation": "Tiết kiệm giúp bạn đạt được các mục tiêu lớn. Bạn có 500.000 đồng, còn cần 1.500.000 đồng nữa. Nếu mỗi tháng dành được 150.000 đồng, thêm 10 tháng nữa là có đủ. Đó là sự kiên nhẫn trong tiết kiệm.",
        "skills": [
          "budgeting",
          "saving-habit",
          "goal-setting"
        ],
        "bookRefs": [
          "how-money-works"
        ],
        "marketingHook": "Bạn có biết? Chiếc xe đạp mơ ước chỉ cách bạn 10 tháng nếu tiết kiệm 150k/tháng – không phải bỏ cuộc!",
        "difficulty": 2
      },
      {
        "id": "qb-saving-foundation-0004",
        "type": "quiz",
        "question": "Lợi ích chính của tiết kiệm là gì?",
        "image": "✨",
        "options": [
          {
            "text": "Có an tâm khi gặp khó khăn, có tiền cho những mơ ước, và học quản lý tiền từ sớm",
            "emoji": "😌"
          },
          {
            "text": "Có thể tiêu tiền mà không lo hậu quả",
            "emoji": "🎉"
          },
          {
            "text": "Trở thành người giàu trong một đêm",
            "emoji": "💸"
          },
          {
            "text": "Không cần làm việc nữa",
            "emoji": "😴"
          }
        ],
        "correct": 0,
        "explanation": "Tiết kiệm tạo ra ba lợi ích lớn: (1) an tâm tài chính khi có việc không may; (2) năng lực để thực hiện những ước mơ (mua đồ, du lịch, học thêm); (3) hình thành thói quen quản lý tiền tốt từ khi còn trẻ.",
        "skills": [
          "saving-habit",
          "emergency-fund",
          "budgeting"
        ],
        "bookRefs": [
          "psychology-of-money"
        ],
        "marketingHook": "Bạn có biết? Tiết kiệm từ tuổi trẻ không chỉ cho tương lai, mà còn tạo bình yên tâm lý ngay bây giờ.",
        "difficulty": 2
      },
      {
        "id": "qb-saving-foundation-0005",
        "type": "ab",
        "question": "Bạn vừa kiếm được 200.000 đồng từ việc phụ giúp cha mẹ. Bạn sẽ chọn phương án nào?",
        "image": "💵",
        "optionA": {
          "emoji": "🎮",
          "title": "Tiêu hết để mua game, đồ chơi, kẹo ngay hôm nay",
          "description": "Vui vẻ ngay, nhưng tiền sẽ hết nhanh và không còn dành dụm gì"
        },
        "optionB": {
          "emoji": "📊",
          "title": "Chia làm 2 phần: 150.000 đ tiêu, 50.000 đ tiết kiệm",
          "description": "Vừa có tiền để mua những thứ muốn, vừa tích lũy dần được một khoản tiền"
        },
        "bestChoice": "B",
        "explanation": "Lựa chọn B là cách làm cân bằng và thông minh. Bạn vẫn có tiền để mua những thứ yêu thích (150.000 đ), nhưng lại dành được 50.000 đ để tiết kiệm. Sau vài lần kiếm tiền như vậy, bạn sẽ có một khoản tiền đáng kể để dùng cho mục tiêu lớn hơn.",
        "skills": [
          "budgeting",
          "saving-habit",
          "needs-vs-wants"
        ],
        "bookRefs": [],
        "marketingHook": "Bạn có biết? Quy tắc 75/25 (tiêu 75%, tiết kiệm 25%) có thể biến bạn từ người tiêu tiền thành nhà đầu tư.",
        "difficulty": 2
      },
      {
        "id": "qb-saving-foundation-0006",
        "type": "ab",
        "question": "Bạn được cha mẹ cho 100.000 đồng tiền lì xì. Bạn sẽ chọn cách nào?",
        "image": "🧧",
        "optionA": {
          "emoji": "🏪",
          "title": "Tiêu hết ngay trong tuần cho những thứ thích",
          "description": "Tiền sẽ mau hết, khó có dịp để tích lũy hoặc ứng phó khi thực sự cần"
        },
        "optionB": {
          "emoji": "🏦",
          "title": "Gửi vào lợn tiết kiệm hoặc nhờ bố mẹ gửi vào tài khoản tiết kiệm ngân hàng",
          "description": "Bảo vệ số tiền, dần dần tích lũy, có thể dùng khi gặp nhu cầu thực sự quan trọng"
        },
        "bestChoice": "B",
        "explanation": "Tiền lì xì là cơ hội tiết kiệm tốt. Bằng cách gửi vào lợn tiết kiệm hoặc nhờ bố mẹ gửi vào tài khoản ngân hàng (trẻ em cần bố mẹ đứng tên), bạn vừa bảo vệ số tiền, vừa không dễ dàng tiêu nó cho những thứ không thực sự cần. Sau một hai năm, khoản tiền lì xì tích lũy sẽ trở thành nguồn tài chính nhỏ của chính bạn.",
        "skills": [
          "saving-habit",
          "emergency-fund"
        ],
        "bookRefs": [
          "how-money-works"
        ],
        "marketingHook": "Bạn có biết? Mỗi dịp Tết, tiền lì xì gửi vào tài khoản có thể biến thành chi phí du lịch hè của bạn.",
        "difficulty": 1
      }
    ]
  }
];

export const getLessonsByAgeGroup = (ageGroup) => {
  if (ageGroup === "all") return LESSONS;
  return LESSONS.filter((l) => l.ageGroup === ageGroup);
};

export const getLessonById = (id) => LESSONS.find((l) => l.id === id);

export const getLessonsByTopic = (topic) =>
  topic === "all" ? LESSONS : LESSONS.filter((l) => l.topic === topic);

export const AGE_GROUPS = [
  {
    "value": "all",
    "label": "Tất cả",
    "emoji": "🌈",
    "color": "bg-gradient-to-r from-pink-500 to-orange-400"
  },
  {
    "value": "6-8",
    "label": "6-8 tuổi",
    "emoji": "🌱",
    "color": "bg-green-500"
  },
  {
    "value": "9-12",
    "label": "9-12 tuổi",
    "emoji": "🌿",
    "color": "bg-blue-500"
  },
  {
    "value": "13-16",
    "label": "13-16 tuổi",
    "emoji": "🌳",
    "color": "bg-purple-500"
  }
];

export const CATEGORIES = {
  "concept": {
    "label": "Khái niệm",
    "emoji": "💡",
    "color": "bg-yellow-100 text-yellow-800"
  },
  "compare": {
    "label": "Phân biệt",
    "emoji": "⚖️",
    "color": "bg-blue-100 text-blue-800"
  },
  "choice": {
    "label": "Lựa chọn",
    "emoji": "🎯",
    "color": "bg-green-100 text-green-800"
  },
  "transaction": {
    "label": "Giao dịch",
    "emoji": "💳",
    "color": "bg-purple-100 text-purple-800"
  }
};

export const LEVELS = {
  "foundation": {
    "label": "Khởi đầu",
    "emoji": "🌱"
  },
  "advanced": {
    "label": "Vững vàng",
    "emoji": "🌳"
  }
};

export const TOPICS = {
  "money-basics": "Cơ bản về tiền",
  "saving": "Tiết kiệm",
  "personal-finance": "Quản lý tài chính cá nhân",
  "borrowing": "Vay",
  "investing": "Đầu tư",
  "stocks": "Chứng khoán",
  "digital-assets": "Tài sản số"
};
