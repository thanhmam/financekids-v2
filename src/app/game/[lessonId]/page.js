"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { getLessonById } from "@/data/lessons";
import GameQuiz from "@/components/GameQuiz";
import GameAB from "@/components/GameAB";
import GameTransaction from "@/components/GameTransaction";
import ResultScreen from "@/components/ResultScreen";
import BadgeToast from "@/components/BadgeToast";
import XuXuMascot from "@/components/XuXuMascot";
import { useProgress } from "@/hooks/useProgress";

const MAX_HEARTS = 5;

function BackIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M11.5 15L6 9L11.5 3" stroke="#15392A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function OutOfHeartsModal({ onRefill, onPractice, onHome, refillTimer }) {
  return (
    <>
      {/* Dark overlay */}
      <div style={{ position: "fixed", inset: 0, background: "rgba(14,42,30,.82)", zIndex: 50 }} />
      {/* Bottom sheet */}
      <div style={{
        position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 51,
        background: "#fff", borderRadius: "30px 30px 0 0",
        padding: "26px 22px 32px", textAlign: "center",
        animation: "slideUp .35s ease",
      }}>
        {/* Sad mascot */}
        <div style={{ margin: "0 auto 18px", display: "inline-block" }}>
          <XuXuMascot size={96} mood="sad" />
        </div>

        {/* Empty hearts */}
        <div style={{ display: "flex", justifyContent: "center", gap: 6, marginBottom: 10 }}>
          {Array.from({ length: MAX_HEARTS }).map((_, i) => (
            <span key={i} style={{ color: "#E4C9CE", font: "800 22px 'Baloo 2'" }}>♡</span>
          ))}
        </div>

        <div style={{ font: "800 24px 'Baloo 2'", color: "#15392A" }}>Hết tim rồi!</div>
        <div style={{ font: "700 13px 'Nunito'", color: "#5B7065", marginTop: 5, lineHeight: 1.4 }}>
          Bạn cần tim để tiếp tục. Hồi tim hoặc luyện tập lại nhé.
        </div>

        {/* Refill button */}
        <button
          className="btn-press"
          onClick={onRefill}
          style={{
            display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
            width: "100%", background: "#16C172", color: "#fff",
            borderRadius: 16, boxShadow: "0 5px 0 #0E9E5C",
            padding: 14, font: "800 15px 'Baloo 2'", marginTop: 20,
            border: "none", cursor: "pointer",
          }}
        >
          <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 22, height: 22, borderRadius: "50%", background: "#FFC93C", border: "2px solid #E8A317", color: "#7A4E00", font: "800 11px 'Baloo 2'" }}>X</span>
          HỒI ĐẦY TIM · 350
        </button>

        {/* Practice to recover */}
        <button
          className="btn-press"
          onClick={onPractice}
          style={{
            width: "100%", border: "2px solid #DDE6D6", borderBottomWidth: 4,
            color: "#16C172", borderRadius: 16, padding: 13,
            font: "800 14px 'Baloo 2'", marginTop: 11,
            background: "#fff", cursor: "pointer",
          }}
        >
          LUYỆN TẬP ĐỂ HỒI TIM
        </button>

        <div style={{ font: "700 12px 'Nunito'", color: "#9AA89E", marginTop: 14 }}>
          Tim hồi đầy sau <b style={{ color: "#FF8A3D" }}>{refillTimer}</b>
        </div>

        <button onClick={onHome} style={{ marginTop: 10, background: "none", border: "none", font: "700 13px 'Nunito'", color: "#9AA89E", cursor: "pointer" }}>
          Về trang chủ
        </button>
      </div>
    </>
  );
}

export default function GamePage() {
  const params = useParams();
  const router = useRouter();
  const baseLesson = getLessonById(params.lessonId);

  // Áp các chỉnh sửa nội dung từ Admin (override) nếu có
  const [lesson, setLesson] = useState(baseLesson);
  useEffect(() => {
    let active = true;
    if (!baseLesson) return;
    (async () => {
      try {
        const { getQuestionOverrides, getLessonMeta, applyLessonOverrides } = await import("@/lib/admin");
        const [qo, lm] = [await getQuestionOverrides(), await getLessonMeta()];
        if (active) setLesson(applyLessonOverrides(baseLesson, qo, lm));
      } catch {
        if (active) setLesson(baseLesson);
      }
    })();
    return () => { active = false; };
  }, [params.lessonId]);

  const { completeLesson, newBadges, clearNewBadges } = useProgress();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isFinished, setIsFinished] = useState(false);
  const [showTransition, setShowTransition] = useState(false);
  const [hearts, setHearts] = useState(MAX_HEARTS);
  const [showOutOfHearts, setShowOutOfHearts] = useState(false);

  // Countdown timer for heart refill (demo: starts at 4h32m10s)
  const [refillSecs, setRefillSecs] = useState(4 * 3600 + 32 * 60 + 10);
  useEffect(() => {
    if (!showOutOfHearts) return;
    const interval = setInterval(() => setRefillSecs(s => Math.max(0, s - 1)), 1000);
    return () => clearInterval(interval);
  }, [showOutOfHearts]);
  const formatTimer = (secs) => {
    const h = Math.floor(secs / 3600);
    const m = Math.floor((secs % 3600) / 60);
    const s = secs % 60;
    return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  useEffect(() => {
    if (!lesson) router.push("/");
  }, [lesson, router]);

  if (!lesson) return null;

  const question = lesson.questions[currentQuestion];
  const progress = (currentQuestion / lesson.questions.length) * 100;

  const handleAnswer = (isCorrect, points = 0) => {
    const newAnswers = [...answers, { questionId: question.id, isCorrect }];
    setAnswers(newAnswers);
    if (isCorrect) {
      setScore(s => s + (points || Math.round(lesson.xp / lesson.questions.length)));
    } else {
      const newHearts = hearts - 1;
      setHearts(newHearts);
      if (newHearts <= 0) {
        setTimeout(() => setShowOutOfHearts(true), 600);
      }
    }
  };

  const handleNext = async () => {
    setShowTransition(true);
    setTimeout(async () => {
      setShowTransition(false);
      if (currentQuestion < lesson.questions.length - 1) {
        setCurrentQuestion(q => q + 1);
      } else {
        const finalXP = score + Math.round(lesson.xp / lesson.questions.length);
        const correctCount = [...answers].filter(a => a.isCorrect).length;
        const stars = Math.round((correctCount / lesson.questions.length) * 3);
        await completeLesson({ lessonId: lesson.id, xpEarned: finalXP, stars, score: finalXP });
        setIsFinished(true);
      }
    }, 300);
  };

  if (isFinished) {
    return (
      <>
        <ResultScreen
          lesson={lesson}
          score={score}
          answers={answers}
          onRetry={() => { setCurrentQuestion(0); setScore(0); setAnswers([]); setIsFinished(false); setHearts(MAX_HEARTS); }}
          onHome={() => router.push("/")}
        />
        {newBadges.length > 0 && <BadgeToast badgeIds={newBadges} onDismiss={clearNewBadges} />}
      </>
    );
  }

  // Question status for sidebar
  const questionStatus = (index) => {
    if (index === currentQuestion) return "current";
    const ans = answers[index];
    if (!ans) return "pending";
    return ans.isCorrect ? "correct" : "wrong";
  };

  // Shared question list for right panel
  const QuestionList = () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      {lesson.questions.map((q, i) => {
        const status = questionStatus(i);
        const bg = status === "correct" ? "#EAFBF1" : status === "wrong" ? "#FFE3E7" : status === "current" ? "#fff" : "#fff";
        const border = status === "correct" ? "#16C172" : status === "wrong" ? "#FF5366" : status === "current" ? "#16C172" : "#ECF1E6";
        const textColor = status === "correct" ? "#0E9E5C" : status === "wrong" ? "#C0283A" : "#15392A";
        return (
          <div key={q.id} style={{
            display: "flex", alignItems: "center", gap: 9,
            padding: "8px 10px", borderRadius: 12,
            background: bg, border: `2px solid ${border}`,
            boxShadow: status === "current" ? "0 2px 8px rgba(22,193,114,.15)" : "none",
            transition: "all .2s",
          }}>
            <div style={{
              width: 24, height: 24, borderRadius: 8, flexShrink: 0,
              display: "flex", alignItems: "center", justifyContent: "center",
              font: "800 11px 'Baloo 2'",
              background: status === "correct" ? "#16C172" : status === "wrong" ? "#FF5366" : status === "current" ? "#16C172" : "#ECF1E6",
              color: status === "pending" ? "#9AA89E" : "#fff",
            }}>
              {status === "correct" ? "✓" : status === "wrong" ? "✗" : i + 1}
            </div>
            <div style={{ font: "600 12px 'Nunito'", color: textColor, lineHeight: 1.3, flex: 1, minWidth: 0 }} className="line-clamp-2">
              {q.question?.slice(0, 44)}{q.question?.length > 44 ? "…" : ""}
            </div>
            <span style={{
              font: "700 15px 'Baloo 2'", flexShrink: 0,
              color: status === "correct" ? "#FF5366" : status === "wrong" ? "#ECF1E6" : "#ECF1E6",
            }}>♥</span>
          </div>
        );
      })}
    </div>
  );

  return (
    <div style={{ minHeight: "100vh", background: "#F4F8EF", display: "flex" }}>

      {/* ── LEFT: Nav sidebar (same as home) ── */}
      <aside className="hidden md:flex flex-col" style={{
        width: 236, minHeight: "100vh", background: "#fff",
        borderRight: "2px solid #ECF1E6", padding: "22px 16px",
        position: "sticky", top: 0, height: "100vh",
        overflowY: "auto", flexShrink: 0,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "0 6px 22px" }}>
          <XuXuMascot size={38} />
          <div style={{ font: "800 24px 'Baloo 2'", color: "#16C172" }}>XuXu</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {[
            { icon: "⌂", label: "Học",       path: "/" },
            { icon: "◆", label: "Khám phá",  path: "/explore" },
            { icon: "▲", label: "Nhiệm vụ",  path: "/tasks" },
            { icon: "♛", label: "Xếp hạng", path: "/leaderboard" },
            { icon: "◉", label: "Cửa hàng", path: "/shop" },
            { icon: "☺", label: "Hồ sơ",    path: "/profile" },
          ].map(item => (
            <button
              key={item.label}
              onClick={() => router.push(item.path)}
              style={{
                display: "flex", alignItems: "center", gap: 13,
                background: "transparent", border: "2px solid transparent",
                borderRadius: 14, padding: "11px 14px",
                cursor: "pointer", textAlign: "left", width: "100%",
              }}
            >
              <span style={{ color: "#9AA89E", font: "800 18px 'Baloo 2'", width: 22, textAlign: "center" }}>{item.icon}</span>
              <span style={{ font: "800 15px 'Baloo 2'", color: "#5B7065" }}>{item.label}</span>
            </button>
          ))}
        </div>
      </aside>

      {/* ── CENTER: Main quiz content ── */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minHeight: "100vh", background: "#fff" }}>

        {/* Header: back + progress + hearts */}
        <div style={{ padding: "14px 20px 12px", background: "#fff", display: "flex", alignItems: "center", gap: 14, position: "sticky", top: 0, zIndex: 20, borderBottom: "2px solid #F4F8EF" }}>
          <button
            onClick={() => router.push("/")}
            style={{ width: 40, height: 40, borderRadius: 12, background: "#F4F8EF", border: "2px solid #ECF1E6", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0, padding: 0 }}
          >
            <BackIcon />
          </button>

          <div style={{ flex: 1, height: 14, borderRadius: 9, background: "#ECF1E6", overflow: "hidden" }}>
            <div style={{ width: `${progress}%`, height: "100%", borderRadius: 9, background: "#16C172", boxShadow: "inset 0 3px 0 rgba(255,255,255,.35)", transition: "width .5s ease" }} />
          </div>

          {/* Hearts: show on mobile always, on desktop only when no right panel */}
          <div style={{ display: "flex", alignItems: "center", gap: 3, flexShrink: 0 }}>
            {Array.from({ length: MAX_HEARTS }).map((_, i) => (
              <span key={i} style={{ color: i < hearts ? "#FF5366" : "#ECF1E6", font: "800 16px 'Baloo 2'", transition: "color .2s" }}>♥</span>
            ))}
          </div>
        </div>

        {/* Game content */}
        <div
          className={`flex-1 max-w-2xl w-full mx-auto px-5 py-6 flex flex-col transition-all duration-300 ${
            showTransition ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
          }`}
        >
          {question.type === "quiz" && (
            <GameQuiz key={currentQuestion} question={question} lessonColor={lesson.color} onAnswer={handleAnswer} onNext={handleNext} />
          )}
          {question.type === "ab" && (
            <GameAB key={currentQuestion} question={question} lessonColor={lesson.color} onAnswer={handleAnswer} onNext={handleNext} />
          )}
          {question.type === "transaction" && (
            <GameTransaction key={currentQuestion} question={question} lessonColor={lesson.color} onAnswer={handleAnswer} onNext={handleNext} />
          )}
        </div>
      </div>

      {/* ── RIGHT: Lesson panel (desktop only) ── */}
      <aside className="hidden md:flex flex-col" style={{
        width: 260, minHeight: "100vh", background: "#fff",
        borderLeft: "2px solid #ECF1E6", padding: "24px 18px",
        position: "sticky", top: 0, height: "100vh",
        overflowY: "auto", flexShrink: 0,
      }}>
        {/* Lesson title + score */}
        <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 6 }}>
          <span style={{ fontSize: 26 }}>{lesson.icon}</span>
          <div style={{ font: "800 15px 'Baloo 2'", color: "#15392A", lineHeight: 1.3 }}>{lesson.title}</div>
        </div>
        <div style={{ font: "600 12px 'Nunito'", color: "#5B7065", marginBottom: 18 }}>
          {answers.filter(a => a.isCorrect).length}/{lesson.questions.length} câu đúng
        </div>

        {/* Hearts row */}
        <div style={{ display: "flex", gap: 5, marginBottom: 18 }}>
          {Array.from({ length: MAX_HEARTS }).map((_, i) => (
            <span key={i} style={{ color: i < hearts ? "#FF5366" : "#ECF1E6", font: "700 20px 'Baloo 2'", transition: "color .2s" }}>♥</span>
          ))}
        </div>

        {/* Question list label */}
        <div style={{ font: "700 11px 'Nunito'", color: "#9AA89E", textTransform: "uppercase", letterSpacing: 1, marginBottom: 10 }}>
          Câu hỏi
        </div>

        <QuestionList />
      </aside>

      {/* Out of Hearts modal */}
      {showOutOfHearts && (
        <OutOfHeartsModal
          refillTimer={formatTimer(refillSecs)}
          onRefill={() => {
            setHearts(MAX_HEARTS);
            setShowOutOfHearts(false);
          }}
          onPractice={() => {
            setCurrentQuestion(0);
            setScore(0);
            setAnswers([]);
            setHearts(MAX_HEARTS);
            setShowOutOfHearts(false);
          }}
          onHome={() => router.push("/")}
        />
      )}
    </div>
  );
}
