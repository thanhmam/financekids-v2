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
    if (!lesson) {
      router.push("/");
    }
  }, [lesson, router]);

  if (!lesson) return null;

  const question = lesson.questions[currentQuestion];
  const progress = ((currentQuestion) / lesson.questions.length) * 100;

  const handleAnswer = (isCorrect, points = 0) => {
    const newAnswers = [...answers, { questionId: question.id, isCorrect }];
    setAnswers(newAnswers);
    if (isCorrect) {
      setScore((s) => s + (points || Math.round(lesson.xp / lesson.questions.length)));
    }
  };

  const handleNext = async () => {
    setShowTransition(true);
    setTimeout(async () => {
      setShowTransition(false);
      if (currentQuestion < lesson.questions.length - 1) {
        setCurrentQuestion((q) => q + 1);
      } else {
        // Game finished — save progress via hook (Firestore or localStorage)
        const finalXP = score + Math.round(lesson.xp / lesson.questions.length);
        const correctCount = [...answers].filter((a) => a.isCorrect).length;
        const stars = Math.round((correctCount / lesson.questions.length) * 3);
        await completeLesson({
          lessonId: lesson.id,
          xpEarned: finalXP,
          stars,
          score: finalXP,
        });
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
          onRetry={() => {
            setCurrentQuestion(0);
            setScore(0);
            setAnswers([]);
            setIsFinished(false);
          }}
          onHome={() => router.push("/")}
        />
        {newBadges.length > 0 && (
          <BadgeToast badgeIds={newBadges} onDismiss={clearNewBadges} />
        )}
      </>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF9F0]">
      {/* Top bar */}
      <div
        className="sticky top-0 z-20 px-4 pt-4 pb-3"
        style={{ backgroundColor: lesson.color }}
      >
        {/* Back + Progress */}
        <div className="flex items-center gap-3 max-w-2xl mx-auto mb-2">
          <button
            onClick={() => router.push("/")}
            className="text-white/80 hover:text-white font-black text-xl leading-none px-1"
          >
            ←
          </button>
          <div className="flex-1 h-3 bg-white/30 rounded-full overflow-hidden">
            <div
              className="h-full bg-white rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-white font-black text-sm">
            {currentQuestion + 1}/{lesson.questions.length}
          </span>
        </div>

        {/* Lesson title */}
        <div className="max-w-2xl mx-auto flex items-center gap-2">
          <span className="text-2xl">{lesson.icon}</span>
          <div>
            <div className="text-white font-black text-base leading-tight">{lesson.title}</div>
            <div className="text-white/70 text-xs font-semibold">⭐ {score} XP kiếm được</div>
          </div>
        </div>
      </div>

      {/* Game content */}
      <div
        className={`max-w-2xl mx-auto px-4 py-6 transition-all duration-300 ${
          showTransition ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
        }`}
      >
        {question.type === "quiz" && (
          <GameQuiz
            key={currentQuestion}
            question={question}
            lessonColor={lesson.color}
            onAnswer={handleAnswer}
            onNext={handleNext}
          />
        )}
        {question.type === "ab" && (
          <GameAB
            key={currentQuestion}
            question={question}
            lessonColor={lesson.color}
            onAnswer={handleAnswer}
            onNext={handleNext}
          />
        )}
        {question.type === "transaction" && (
          <GameTransaction
            key={currentQuestion}
            question={question}
            lessonColor={lesson.color}
            onAnswer={handleAnswer}
            onNext={handleNext}
          />
        )}
      </div>
    </div>
  );
}
