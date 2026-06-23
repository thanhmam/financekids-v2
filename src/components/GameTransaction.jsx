"use client";

import { useState, useCallback } from "react";

const formatVND = (amount) => {
  return new Intl.NumberFormat("vi-VN").format(amount) + "đ";
};

export default function GameTransaction({ question, lessonColor, onAnswer, onNext }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [balance, setBalance] = useState(question.startBalance);
  const [history, setHistory] = useState([]);
  const [phase, setPhase] = useState("steps"); // "steps" | "answer" | "result"
  const [userAnswer, setUserAnswer] = useState("");
  const [answerRevealed, setAnswerRevealed] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const step = question.steps[currentStep];

  const handleStepContinue = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);

    const newBalance =
      step.type === "income" || step.type === "save"
        ? balance + step.amount
        : balance - step.amount;

    setTimeout(() => {
      setBalance(newBalance);
      setHistory((h) => [
        ...h,
        {
          description: step.description,
          amount: step.amount,
          type: step.type,
          balanceAfter: newBalance,
        },
      ]);
      setIsAnimating(false);

      if (currentStep < question.steps.length - 1) {
        setCurrentStep((s) => s + 1);
      } else {
        setPhase("answer");
      }
    }, 600);
  }, [isAnimating, step, balance, currentStep, question.steps.length]);

  const handleSubmitAnswer = () => {
    const numericAnswer = parseInt(userAnswer.replace(/[^0-9]/g, ""), 10);
    const isCorrect = numericAnswer === question.correctAnswer;
    setAnswerRevealed(true);
    onAnswer(isCorrect);
    setPhase("result");
  };

  const typeConfig = {
    income: { emoji: "⬆️", color: "text-green-600", bg: "bg-green-50", label: "Nhận tiền" },
    expense: { emoji: "⬇️", color: "text-red-500", bg: "bg-red-50", label: "Chi tiêu" },
    save: { emoji: "🐷", color: "text-blue-600", bg: "bg-blue-50", label: "Tiết kiệm" },
  };

  return (
    <div className="space-y-4">
      {/* Scenario header */}
      <div
        className="rounded-3xl p-5 text-center"
        style={{ backgroundColor: lessonColor + "15" }}
      >
        <div className="text-4xl mb-2">💳</div>
        <h2 className="font-black text-gray-800 text-lg">{question.scenario}</h2>

        {/* Balance display */}
        <div
          className={`mt-3 inline-block px-6 py-3 rounded-2xl text-white font-black text-2xl shadow-md transition-all duration-500 ${
            isAnimating ? "scale-110" : "scale-100"
          }`}
          style={{ backgroundColor: lessonColor }}
        >
          {formatVND(balance)}
        </div>
        <div className="text-xs text-gray-500 font-semibold mt-1">Số dư hiện tại</div>
      </div>

      {/* Transaction history */}
      {history.length > 0 && (
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
          <div className="px-4 py-2 border-b border-gray-100 bg-gray-50">
            <span className="text-xs font-black text-gray-500 uppercase tracking-wide">
              Lịch sử giao dịch
            </span>
          </div>
          <div className="divide-y divide-gray-50">
            {history.map((h, i) => {
              const tc = typeConfig[h.type];
              return (
                <div
                  key={i}
                  className={`flex items-center gap-3 px-4 py-3 ${tc.bg}`}
                  style={{ animation: "slideUp 0.3s ease forwards" }}
                >
                  <span className="text-xl">{tc.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-gray-700 text-sm leading-tight truncate">
                      {h.description}
                    </div>
                    <div className="text-xs text-gray-400 font-semibold">{tc.label}</div>
                  </div>
                  <div className={`font-black text-sm whitespace-nowrap ${tc.color}`}>
                    {h.type === "expense" ? "-" : "+"}{formatVND(h.amount)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Current step (steps phase) */}
      {phase === "steps" && step && (
        <div
          className="bg-white rounded-2xl p-4 border-2 shadow-sm"
          style={{ borderColor: lessonColor + "60" }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-white font-black text-sm flex-shrink-0"
              style={{ backgroundColor: lessonColor }}
            >
              {currentStep + 1}
            </div>
            <p className="font-bold text-gray-700">{step.description}</p>
          </div>
          <div className="text-sm text-gray-400 font-semibold mb-3 pl-11">
            💡 {step.hint}
          </div>
          <div className="flex items-center justify-between pl-11">
            <div className={`font-black ${step.type === "expense" ? "text-red-500" : "text-green-600"}`}>
              {step.type === "expense" ? "-" : "+"}{formatVND(step.amount)}
            </div>
            <button
              onClick={handleStepContinue}
              disabled={isAnimating}
              className={`px-4 py-2 rounded-xl font-black text-white text-sm shadow transition-transform btn-press
                ${isAnimating ? "opacity-50" : ""}`}
              style={{ backgroundColor: lessonColor }}
            >
              {isAnimating ? "..." : currentStep < question.steps.length - 1 ? "Bước tiếp ▶" : "Hoàn thành ✓"}
            </button>
          </div>
        </div>
      )}

      {/* Answer phase */}
      {phase === "answer" && (
        <div
          className="bg-white rounded-2xl p-5 border-2 shadow-sm"
          style={{ borderColor: lessonColor + "60", animation: "pop 0.4s ease forwards" }}
        >
          <h3 className="font-black text-gray-800 text-base mb-2">
            ❓ {question.question}
          </h3>
          <p className="text-sm text-gray-500 font-semibold mb-3">
            Nhập số tiền (chỉ gõ số):
          </p>
          <div className="flex gap-2">
            <input
              type="number"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              placeholder="Nhập số tiền..."
              className="flex-1 border-2 border-gray-200 rounded-xl px-4 py-3 font-bold text-gray-800 focus:outline-none focus:border-orange-400 text-base"
              onKeyDown={(e) => e.key === "Enter" && userAnswer && handleSubmitAnswer()}
            />
            <button
              onClick={handleSubmitAnswer}
              disabled={!userAnswer}
              className="px-5 py-3 rounded-xl font-black text-white shadow disabled:opacity-40 transition-transform btn-press"
              style={{ backgroundColor: lessonColor }}
            >
              ✓
            </button>
          </div>
        </div>
      )}

      {/* Result phase */}
      {phase === "result" && (
        <div
          className="rounded-2xl p-4 border-l-4"
          style={{
            borderLeftColor: parseInt(userAnswer) === question.correctAnswer ? "#22c55e" : "#f97316",
            backgroundColor: parseInt(userAnswer) === question.correctAnswer ? "#f0fdf4" : "#fff7ed",
            animation: "pop 0.4s ease forwards",
          }}
        >
          <div className="flex items-start gap-2 mb-1">
            <span className="text-2xl">
              {parseInt(userAnswer) === question.correctAnswer ? "🎉" : "💡"}
            </span>
            <div>
              {parseInt(userAnswer) !== question.correctAnswer && (
                <p className="font-black text-orange-700 text-sm mb-1">
                  Đáp án đúng là: {formatVND(question.correctAnswer)}
                </p>
              )}
              <p className="font-bold text-gray-700 text-sm leading-relaxed">
                {question.explanation}
              </p>
            </div>
          </div>
          <button
            onClick={onNext}
            className="w-full mt-3 py-3 rounded-xl font-black text-white text-base shadow-md active:scale-95 transition-transform"
            style={{ backgroundColor: lessonColor }}
          >
            Tiếp theo →
          </button>
        </div>
      )}
    </div>
  );
}
