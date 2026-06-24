import { callClaude } from './claude.js';
import { CONTENT_SYSTEM_PROMPT, REVIEW_SYSTEM_PROMPT, DESIGN_SYSTEM_PROMPT } from './prompts.js';

export async function runPipeline({ ageGroup, topic, lessonId }, onStatus) {
  const status = (stage, message, data = {}) => onStatus?.({ stage, message, ...data });

  // --- Agent 1: Content ---
  status('content', `Đang tạo nội dung bài học "${topic}"...`);
  let draft = null;
  let corrections = null;

  for (let attempt = 0; attempt <= 2; attempt++) {
    if (attempt > 0) status('content', `Thử lại lần ${attempt} sau khi review...`);

    const userMsg = corrections
      ? `Tạo bài học tài chính:\n- Chủ đề: ${topic}\n- Độ tuổi: ${ageGroup}\n- ID bài: ${lessonId}\n\nLần trước bị từ chối vì:\n${corrections.join('\n')}\nHãy sửa các vấn đề này.`
      : `Tạo bài học tài chính:\n- Chủ đề: ${topic}\n- Độ tuổi: ${ageGroup}\n- ID bài: ${lessonId}`;

    draft = await callClaude({
      model: 'claude-haiku-4-5-20251001',
      systemPrompt: CONTENT_SYSTEM_PROMPT,
      userMessage: userMsg,
    });

    // --- Agent 2: Review ---
    status('review', `Đang review nội dung (lần ${attempt + 1})...`);
    const review = await callClaude({
      model: 'claude-sonnet-4-6',
      systemPrompt: REVIEW_SYSTEM_PROMPT,
      userMessage: `Review bài học này:\n${JSON.stringify(draft, null, 2)}`,
    });

    status('review', `Review xong: score ${review.score}/100`, { score: review.score, approved: review.approved });

    if (review.approved) {
      draft = review.revisedLesson;
      break;
    }

    corrections = review.issues;
    if (attempt === 2) {
      return { success: false, error: 'Nội dung không đạt sau 3 lần thử', issues: review.issues, draft };
    }
  }

  // --- Agent 3: Design ---
  status('design', 'Đang tạo SVG illustrations & animations...');
  const withDesign = await callClaude({
    model: 'claude-sonnet-4-6',
    systemPrompt: DESIGN_SYSTEM_PROMPT,
    userMessage: `Thêm SVG và animation cho bài học này:\n${JSON.stringify(draft, null, 2)}`,
  });

  status('done', 'Pipeline hoàn thành!', { lesson: withDesign });
  return { success: true, lesson: withDesign };
}
