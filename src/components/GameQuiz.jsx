"use client";

import { useState, useCallback } from "react";

export default function GameQuiz({ question, lessonColor, onAnswer, onNext }) {
  const [selected, setSelected] = useState(null);
  const [revealed, setRevealed] = useState(false);

  const handleSelect = useCallback((index) => {
    if (revealed) return;
    setSelected(index);
    setRevealed(true);
    const isCorrect = index === question.correct;
    onAnswer(isCorrect);
    // Haptic feedback simulation via CSS
  }, [revealed, question.correct, onAnswer]);

  const getOptionStyle = (index) => {
    if (!revealed) {
      return "bg-white border-2 border-gray-200 hover:border-orange-300 hover:shadow-md cursor-pointer active:scale-95";
    }
    if (index === question.correct) {
      return "bg-green-50 border-2 border-green-500 shadow-md";
    }
    if (index === selected && selected !== question.correct) {
      return "bg-red-50 border-2 border-red-400";
    }
    return "bg-white border-2 border-gray-100 opacity-50";
  };

  return (
    <div className="space-y-4">
      {/* Question card */}
      <div
        className="rounded-3xl p-6 text-center shadow-sm"
        style={{ backgroundColor: lessonColor + "15" }}
      >
        {question.image && (
          <div className="text-6xl mb-3 animate-bounce">{question.image}</div>
        )}
        <h2 className="text-xl font-black text-gray-800 leading-tight">
          {question.question}
        </h2>
      </div>

      {/* Options */}
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleSelect(index)}
            className={`w-full text-left p-4 rounded-2xl transition-all duration-200 ${getOptionStyle(index)}`}
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            <div className="flex items-center gap-3">
              {/* Index circle */}
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-black flex-shrink-0 transition-colors
                  ${!revealed ? "bg-gray-100 text-gray-600"
                  : index === question.correct ? "bg-green-500 text-white"
                  : index === selected ? "bg-red-400 text-white"
                  : "bg-gray-100 text-gray-400"
                  }`}
              >
                {revealed && index === question.correct ? "✓"
                  : revealed && index === selected && selected !== question.correct ? "✗"
                  : option.emoji || ["A", "B", "C", "D"][index]}
              </div>
              <span className={`font-bold text-base ${
                revealed && index === question.correct ? "text-green-700"
                : revealed && index === selected && selected !== question.correct ? "text-red-600"
                : "text-gray-700"
              }`}>
                {option.text}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Explanation + Next */}
      {revealed && (
        <div
          className="rounded-2xl p-4 mt-4 border-l-4 animate-[slideUp_0.4s_ease_forwards]"
          style={{
            backgroundColor: selected === question.correct ? "#f0fdf4" : "#fff7ed",
            borderLeftColor: selected === question.correct ? "#22c55e" : "#f97316",
          }}
        >
          <div className="flex items-start gap-2 mb-3">
            <span className="text-2xl">{selected === question.correct ? "🎉" : "💡"}</span>
            <p className="font-bold text-gray-700 text-sm leading-relaxed">
              {question.explanation}
            </p>
          </div>
          <button
            onClick={onNext}
            className="w-full py-3 rounded-xl font-black text-white text-base shadow-md active:scale-95 transition-transform btn-press"
            style={{ backgroundColor: lessonColor }}
          >
            Tiếp theo →
          </button>
        </div>
      )}
    </div>
  );
}
