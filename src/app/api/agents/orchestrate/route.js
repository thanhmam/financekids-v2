import { NextResponse } from "next/server";
import { runPipeline } from "@/lib/agents/orchestrate";

// Node runtime (Anthropic SDK needs Node, not Edge)
export const runtime = "nodejs";
export const maxDuration = 60;

export async function POST(req) {
  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Body JSON không hợp lệ" }, { status: 400 });
  }

  const { ageGroup, topic, lessonId } = body || {};
  if (!ageGroup || !topic) {
    return NextResponse.json(
      { error: "Thiếu ageGroup hoặc topic" },
      { status: 400 }
    );
  }
  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json(
      { error: "ANTHROPIC_API_KEY chưa được cấu hình trên server" },
      { status: 500 }
    );
  }

  try {
    const result = await runPipeline({
      ageGroup,
      topic,
      lessonId: lessonId || `lesson-ai-${Date.now()}`,
    });
    return NextResponse.json(result);
  } catch (err) {
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}
