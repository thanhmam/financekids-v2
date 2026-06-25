"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { getLessonById } from "@/data/lessons";
import GameQuiz from "@/components/GameQuiz";
import GameAB from "@/components/GameAB";
import GameTransaction from "@/components/GameTransaction";
import ResultScreen from "@/components/ResultScreen";
import BadgeToast from "@/components/BadgeToast";
import { useProgress } from "@/hooks/useProgress";

function BackIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M11.5 15L6 9L11.5 3" stroke="#15392A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function GamePage() {
  const params = useParams();
  const router = useRouter();
  const lesson = getLessonById(params.lessonId);

  const { completeLesson, newBadges, clearNewBadges } = useProgress();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isFinished, setIsFinished] = useState(false);
  const [showTransition, setShowTransition] = useState(false);

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
          onRetry={() => { setCurrentQuestion(0); setScore(0); setAnswers([]); setIsFinished(false); }}
          onHome={() => router.push("/")}
        />
        {newBadges.length > 0 && <BadgeToast badgeIds={newBadges} onDismiss={clearNewBadges} />}
      </>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "#fff", display: "flex", flexDirection: "column" }}>

      {/* Header */}
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

        <div style={{ display: "flex", alignItems: "center", gap: 4, flexShrink: 0 }}>
          <span style={{ color: "#FF5366", font: "800 17px 'Baloo 2'" }}>♥</span>
          <span style={{ font: "800 14px 'Baloo 2'", color: "#15392A" }}>5</span>
        </div>
      </div>

      {/* Game content */}
      <div
        className={`flex-1 max-w-2xl w-full mx-auto px-5 py-5 flex flex-col transition-all duration-300 ${
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
  );
}
