"use client";

import { useState, useCallback } from "react";

export default function GameAB({ question, lessonColor, onAnswer, onNext }) {
  const [selected, setSelected] = useState(null); // 'A' | 'B' | null
  const [revealed, setRevealed] = useState(false);

  const handleSelect = useCallback((choice) => {
    if (revealed) return;
    setSelected(choice);
    setRevealed(true);
    onAnswer(true); // A/B questions don't have strictly "wrong" answers - they promote discussion
  }, [revealed, onAnswer]);

  const isBest = (choice) => revealed && choice === question.bestChoice;
  const isSelected = (choice) => selected === choice;

  const getCardStyle = (choice) => {
    if (!revealed) {
      return "border-2 border-gray-200 bg-white hover:shadow-lg hover:-translate-y-1 cursor-pointer active:scale-95";
    }
    if (isBest(choice)) {
      return "border-2 border-green-500 bg-green-50 shadow-lg";
    }
    if (isSelected(choice) && !isBest(choice)) {
      return "border-2 border-orange-300 bg-orange-50";
    }
    return "border-2 border-gray-200 bg-white opacity-60";
  };

  return (
    <div className="space-y-4">
      {/* Question */}
      <div
        className="rounded-3xl p-6 text-center shadow-sm"
        style={{ backgroundColor: lessonColor + "15" }}
      >
        {question.image && (
          <div className="text-5xl mb-2" style={{ animation: "float 2s ease-in-out infinite" }}>
            {question.image}
          </div>
        )}
        <h2 className="text-xl font-black text-gray-800 leading-tight">
          {question.question}
        </h2>
        {!revealed && (
          <p className="text-gray-500 text-sm font-semibold mt-2">
            👇 Chọn phương án bạn nghĩ là tốt hơn
          </p>
        )}
      </div>

      {/* A/B Options */}
      <div className="grid grid-cols-2 gap-3">
        {/* Option A */}
        <button
          onClick={() => handleSelect("A")}
          className={`p-4 rounded-2xl transition-all duration-200 text-left relative ${getCardStyle("A")}`}
        >
          {/* Badge */}
          <div
            className={`absolute top-3 right-3 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black text-white
              ${revealed && isBest("A") ? "bg-green-500" : "bg-blue-400"}`}
          >
            {revealed && isBest("A") ? "✓" : "A"}
          </div>

          <div className="text-4xl mb-2">{question.optionA.emoji}</div>
          <div className="font-black text-gray-800 text-sm leading-tight mb-1">
            {question.optionA.title}
          </div>
          <div className="text-gray-500 text-xs font-semibold leading-relaxed">
            {question.optionA.description}
          </div>

          {revealed && isBest("A") && (
            <div className="mt-2 text-green-600 font-black text-xs">✨ Lựa chọn tốt nhất!</div>
          )}
        </button>

        {/* Option B */}
        <button
          onClick={() => handleSelect("B")}
          className={`p-4 rounded-2xl transition-all duration-200 text-left relative ${getCardStyle("B")}`}
        >
          {/* Badge */}
          <div
            className={`absolute top-3 right-3 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black text-white
              ${revealed && isBest("B") ? "bg-green-500" : "bg-purple-400"}`}
          >
            {revealed && isBest("B") ? "✓" : "B"}
          </div>

          <div className="text-4xl mb-2">{question.optionB.emoji}</div>
          <div className="font-black text-gray-800 text-sm leading-tight mb-1">
            {question.optionB.title}
          </div>
          <div className="text-gray-500 text-xs font-semibold leading-relaxed">
            {question.optionB.description}
          </div>

          {revealed && isBest("B") && (
            <div className="mt-2 text-green-600 font-black text-xs">✨ Lựa chọn tốt nhất!</div>
          )}
        </button>
      </div>

      {/* VS divider (before reveal) */}
      {!revealed && (
        <div className="text-center">
          <span className="bg-orange-100 text-orange-500 font-black text-lg px-4 py-1 rounded-full">
            VS
          </span>
        </div>
      )}

      {/* Explanation + Next (after reveal) */}
      {revealed && (
        <div
          className="rounded-2xl p-4 mt-2 border-l-4"
          style={{
            borderLeftColor: lessonColor,
            backgroundColor: lessonColor + "12",
            animation: "slideUp 0.4s ease forwards",
          }}
        >
          <div className="flex items-start gap-2 mb-3">
            <span className="text-2xl">
              {selected === question.bestChoice ? "🎯" : "💡"}
            </span>
            <div>
              {selected !== question.bestChoice && (
                <p className="font-black text-orange-700 text-sm mb-1">
                  Lựa chọn tốt hơn là {question.bestChoice === "A" ? question.optionA.title : question.optionB.title}!
                </p>
              )}
              {selected === question.bestChoice && (
                <p className="font-black text-green-700 text-sm mb-1">
                  Bạn đã chọn đúng! 🎉
                </p>
              )}
              <p className="font-semibold text-gray-700 text-sm leading-relaxed">
                {question.explanation}
              </p>
            </div>
          </div>
          <button
            onClick={onNext}
            className="w-full py-3 rounded-xl font-black text-white text-base shadow-md active:scale-95 transition-transform"
            style={{ backgroundColor: lessonColor }}
          >
            Tiếp theo →
          </button>
        </div>
      )}
    </div>
  );
}
