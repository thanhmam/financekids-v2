/**
 * Badges & Achievements system
 * Mỗi badge có: id, name, emoji, description, condition function
 */

export const BADGES = [
  {
    id: "first_lesson",
    name: "Bắt đầu hành trình",
    emoji: "🌱",
    description: "Hoàn thành bài học đầu tiên",
    color: "#4CAF50",
  },
  {
    id: "five_lessons",
    name: "Học sinh chăm chỉ",
    emoji: "📚",
    description: "Hoàn thành 5 bài học",
    color: "#2196F3",
  },
  {
    id: "ten_lessons",
    name: "Nhà tài chính nhí",
    emoji: "🎓",
    description: "Hoàn thành 10 bài học",
    color: "#9C27B0",
  },
  {
    id: "twenty_lessons",
    name: "Chuyên gia đang lên",
    emoji: "🚀",
    description: "Hoàn thành 20 bài học",
    color: "#FF6B35",
  },
  {
    id: "xp_500",
    name: "Thu hoạch 500 XP",
    emoji: "⭐",
    description: "Kiếm được 500 điểm XP",
    color: "#FFD700",
  },
  {
    id: "xp_1000",
    name: "Ngôi sao XP",
    emoji: "🌟",
    description: "Kiếm được 1000 điểm XP",
    color: "#FF9800",
  },
  {
    id: "xp_2000",
    name: "Huyền thoại XP",
    emoji: "💎",
    description: "Kiếm được 2000 điểm XP",
    color: "#3F51B5",
  },
  {
    id: "all_ages",
    name: "Toàn năng",
    emoji: "🌈",
    description: "Hoàn thành bài học ở cả 3 nhóm tuổi",
    color: "#E91E63",
  },
];

/**
 * Kiểm tra xem user có đủ điều kiện nhận badge nào không
 * @param {Object} params - { completed: string[], totalXP: number }
 * @returns {string[]} mảng badge IDs user đã đạt
 */
export function checkBadges({ completed = [], totalXP = 0 }) {
  const earned = [];

  if (completed.length >= 1) earned.push("first_lesson");
  if (completed.length >= 5) earned.push("five_lessons");
  if (completed.length >= 10) earned.push("ten_lessons");
  if (completed.length >= 20) earned.push("twenty_lessons");
  if (totalXP >= 500) earned.push("xp_500");
  if (totalXP >= 1000) earned.push("xp_1000");
  if (totalXP >= 2000) earned.push("xp_2000");

  // all_ages: need completed lessons from each age group
  // This requires lesson data, simplified check here
  const hasYoung = completed.some((id) =>
    ["lesson-01", "lesson-02", "lesson-03"].includes(id)
  );
  const hasMid = completed.some((id) =>
    ["lesson-04", "lesson-05", "lesson-06"].includes(id)
  );
  const hasOld = completed.some((id) =>
    ["lesson-07", "lesson-08", "lesson-09", "lesson-10"].includes(id)
  );
  if (hasYoung && hasMid && hasOld) earned.push("all_ages");

  return earned;
}

export const getBadgeById = (id) => BADGES.find((b) => b.id === id);
