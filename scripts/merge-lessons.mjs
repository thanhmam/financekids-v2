// Merge Vite lessons into Next.js LESSONS schema, dedupe by title, append unique ones.
import { writeFileSync } from 'fs';

const NEXT_PATH = '/tmp/fk-nextjs/src/data/lessons.js';
const VITE_PATH = '/Users/thanhmam/Library/Mobile Documents/com~apple~CloudDocs/2. Projects/FinanceKids-v2/src/data/lessons.js';

const next = await import(NEXT_PATH);
const vite = await import(VITE_PATH);

const NEXT_LESSONS = next.LESSONS;
const VITE_LESSONS = vite.lessonsData;

// Normalize Vietnamese title for dedup
function norm(s) {
  return s.toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/đ/g, 'd')
    .replace(/[^a-z0-9]/g, '');
}

const nextTitles = new Set(NEXT_LESSONS.map(l => norm(l.title)));

// Vite lessons that conceptually duplicate an existing Next.js lesson (skip these)
const SKIP_VITE = new Set([
  'Cần hay Muốn?',           // ~ Cần và Muốn
  'Heo đất của bé',          // ~ Heo Đất Thần Kỳ
  'Mua sắm thông minh',      // ~ Chi Tiêu Thông Minh
  'Lãi suất kép',            // ~ Lãi Kép - Phép Màu Tài Chính
  'Lạm phát và sức mua',     // ~ Lạm Phát
  'Cổ phiếu & Trái phiếu',   // ~ Cổ Phiếu Cơ Bản
  'Thuế & Trách nhiệm',      // ~ Thuế Là Gì?
  'Khởi nghiệp nhỏ',         // ~ Khởi Nghiệp Cơ Bản
  'Kế hoạch tài chính 5 năm',// ~ Mục Tiêu Tài Chính 5 Năm
  'Quỹ khẩn cấp',            // ~ Quỹ Dự Phòng Khẩn Cấp
].map(norm));

// Derive category from question mix
function deriveCategory(lesson) {
  const types = lesson.questions.map(q => q.type);
  if (types.includes('transaction')) return 'transaction';
  if (types.filter(t => t === 'ab').length >= 2) return 'choice';
  if (types.includes('ab')) return 'compare';
  return 'concept';
}

// Transform a Vite question to Next.js schema
function transformQuestion(q, idx) {
  const id = `q${idx + 1}`;
  if (q.type === 'quiz') {
    return { id, type: 'quiz', question: q.question, image: q.image || '💡',
      options: q.options, correct: q.correct, explanation: q.explanation };
  }
  if (q.type === 'ab') {
    return { id, type: 'ab', question: q.question, image: q.image || '🤔',
      optionA: q.optionA, optionB: q.optionB, bestChoice: q.bestChoice, explanation: q.explanation };
  }
  if (q.type === 'transaction') {
    // Vite items[] {name, amount, type:save/spend, emoji, hint} -> Next steps[] {description, amount, type:income/save/expense, hint}
    const items = q.items || q.steps || [];
    let balance = q.startBalance || 0;
    const steps = items.map(it => {
      const amt = Math.abs(it.amount);
      // save -> save (adds), spend -> expense (subtracts), income -> income
      let type = it.type === 'spend' ? 'expense' : (it.type === 'save' ? 'save' : (it.type === 'income' ? 'income' : 'expense'));
      if (type === 'expense') balance -= amt; else balance += amt;
      return { description: (it.emoji ? it.emoji + ' ' : '') + (it.name || it.description), amount: amt, type, hint: it.hint || '' };
    });
    return { id, type: 'transaction', scenario: q.scenario,
      startBalance: q.startBalance || 0, currency: q.currency || 'đ',
      steps, question: q.question || 'Số dư cuối cùng là bao nhiêu?',
      correctAnswer: balance, explanation: q.explanation || `Số dư cuối cùng là ${new Intl.NumberFormat('vi-VN').format(balance)}đ.` };
  }
  return { id, ...q };
}

// Transform a full Vite lesson to Next.js schema
function transformLesson(l) {
  return {
    id: l.id, // renumbered later
    title: l.title,
    subtitle: l.subtitle || '',
    ageGroup: l.ageGroup,
    category: deriveCategory(l),
    icon: l.icon || '📘',
    color: l.color || '#f97316',
    bgColor: l.bgColor || '#fff7ed',
    xp: l.xp || 100,
    description: l.description || '',
    parentGuide: l.parentGuide || undefined,
    questions: l.questions.map((q, i) => transformQuestion(q, i)),
  };
}

// Build merged set: keep all Next.js, append Vite-unique
const merged = [...NEXT_LESSONS];
let appended = 0;
const appendedTitles = [];
for (const vl of VITE_LESSONS) {
  if (!nextTitles.has(norm(vl.title)) && !SKIP_VITE.has(norm(vl.title))) {
    merged.push(transformLesson(vl));
    appended++;
    appendedTitles.push(vl.title);
  }
}

// Sort by ageGroup order then keep stable; renumber ids
const ageOrder = { '6-8': 0, '9-12': 1, '13-16': 2 };
merged.sort((a, b) => (ageOrder[a.ageGroup] ?? 9) - (ageOrder[b.ageGroup] ?? 9));
merged.forEach((l, i) => { l.id = `lesson-${String(i + 1).padStart(2, '0')}`; });

// Serialize, dropping undefined parentGuide cleanly
function clean(obj) {
  return JSON.parse(JSON.stringify(obj));
}
const cleaned = merged.map(clean);

const fileBody = `/**
 * FinanceKids — Lesson data (merged Next.js + Vite content)
 * Schema:
 * - id, title, subtitle, ageGroup
 * - category: 'concept' | 'compare' | 'choice' | 'transaction'
 * - icon, color, bgColor, xp, description
 * - parentGuide?: string  (gợi ý cho phụ huynh)
 * - questions: [{ type: 'quiz' | 'ab' | 'transaction', ... }]
 * Total: ${cleaned.length} lessons
 */
export const LESSONS = ${JSON.stringify(cleaned, null, 2)};

export const getLessonsByAgeGroup = (ageGroup) => {
  if (ageGroup === "all") return LESSONS;
  return LESSONS.filter((l) => l.ageGroup === ageGroup);
};

export const getLessonById = (id) => {
  return LESSONS.find((l) => l.id === id);
};

export const AGE_GROUPS = ${JSON.stringify(next.AGE_GROUPS, null, 2)};

export const CATEGORIES = ${JSON.stringify(next.CATEGORIES, null, 2)};
`;

writeFileSync(NEXT_PATH, fileBody, 'utf-8');

const byAge = {};
cleaned.forEach(l => { byAge[l.ageGroup] = (byAge[l.ageGroup] || 0) + 1; });
const withGuide = cleaned.filter(l => l.parentGuide).length;
console.log(`✅ Merged total: ${cleaned.length} lessons (Next.js ${NEXT_LESSONS.length} + Vite-unique ${appended})`);
console.log(`   By age:`, JSON.stringify(byAge));
console.log(`   With parentGuide: ${withGuide}`);
console.log(`   Appended from Vite:`, appendedTitles.join(' / '));
