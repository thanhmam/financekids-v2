"use client";

import { useState, useCallback } from "react";
import XuXuMascot from "@/components/XuXuMascot";

export default function GameQuiz({ question, onAnswer, onNext }) {
  const [selected, setSelected] = useState(null);
  const [revealed, setRevealed] = useState(false);

  const handleSelect = useCallback((index) => {
    if (revealed) return;
    setSelected(index);
  }, [revealed]);

  const handleCheck = useCallback(() => {
    if (selected === null || revealed) return;
    setRevealed(true);
    onAnswer(selected === question.correct);
  }, [selected, revealed, question.correct, onAnswer]);

  const isCorrect = revealed && selected === question.correct;

  const optionStyle = (i) => {
    if (!revealed) return {
      border: `2px solid ${selected === i ? "#16C172" : "#ECF1E6"}`,
      borderBottomWidth: 4,
      background: selected === i ? "#EAFBF1" : "#fff",
    };
    if (i === question.correct) return { border: "2px solid #16C172", borderBottomWidth: 4, background: "#EAFBF1" };
    if (i === selected) return { border: "2px solid #FF5366", borderBottomWidth: 4, background: "#FFE3E7" };
    return { border: "2px solid #ECF1E6", borderBottomWidth: 4, background: "#fff", opacity: 0.55 };
  };

  const badgeStyle = (i) => {
    if (!revealed) return selected === i
      ? { background: "#16C172", color: "#fff" }
      : { border: "2px solid #DDE6D6", color: "#9AA89E", background: "transparent" };
    if (i === question.correct) return { background: "#16C172", color: "#fff" };
    if (i === selected) return { background: "#FF5366", color: "#fff" };
    return { border: "2px solid #DDE6D6", color: "#9AA89E", background: "transparent" };
  };

  const labelColor = (i) => {
    if (!revealed) return selected === i ? "#0E9E5C" : "#34453B";
    if (i === question.correct) return "#0E9E5C";
    if (i === selected) return "#C0283A";
    return "#9AA89E";
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
      {/* Question bubble */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 20 }}>
        <XuXuMascot size={56} />
        <div style={{ background: "#F4F8EF", border: "2px solid #ECF1E6", borderRadius: 16, padding: "12px 14px", font: "700 14px 'Nunito'", color: "#15392A", lineHeight: 1.5, flex: 1 }}>
          {question.image && <div style={{ fontSize: 26, marginBottom: 6 }}>{question.image}</div>}
          <span>{question.question}</span>
        </div>
      </div>

      {/* Options */}
      <div style={{ display: "flex", flexDirection: "column", gap: 11, flex: 1 }}>
        {question.options.map((option, i) => (
          <button
            key={i}
            onClick={() => handleSelect(i)}
            style={{
              display: "flex", alignItems: "center", gap: 12,
              ...optionStyle(i),
              borderRadius: 16, padding: "13px 14px",
              cursor: revealed ? "default" : "pointer",
              transition: "border-color .15s, background .15s",
              textAlign: "left", width: "100%",
            }}
          >
            <div style={{
              width: 26, height: 26, borderRadius: 8, display: "flex", alignItems: "center",
              justifyContent: "center", font: "800 12px 'Baloo 2'", flexShrink: 0, ...badgeStyle(i),
            }}>
              {revealed && i === question.correct ? "✓"
                : revealed && i === selected && i !== question.correct ? "✗"
                : i + 1}
            </div>
            <span style={{ font: `${revealed && i === question.correct ? "800" : "700"} 14px 'Nunito'`, color: labelColor(i) }}>
              {option.text}
            </span>
          </button>
        ))}
      </div>

      {/* Explanation */}
      {revealed && (
        <div style={{ marginTop: 16, padding: "16px 18px", borderRadius: 16, background: isCorrect ? "#EAFBF1" : "#FFF3F4", borderLeft: `4px solid ${isCorrect ? "#16C172" : "#FF5366"}`, animation: "slideUp .3s ease" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
            <span style={{ fontSize: 22, flexShrink: 0 }}>{isCorrect ? "🎉" : "💡"}</span>
            <p style={{ font: "600 14px/1.6 'Nunito'", color: "#34453B" }} className="md:text-[15px]">{question.explanation}</p>
          </div>
          {question.marketingHook && (
            <div style={{ marginTop: 10, paddingTop: 10, borderTop: "1px dashed #D7E3DA", font: "700 12px 'Nunito'", color: "#0E7A4E", lineHeight: 1.5 }}>
              {question.marketingHook}
            </div>
          )}
          {Array.isArray(question.skills) && question.skills.length > 0 && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginTop: 8 }}>
              {question.skills.map((s) => (
                <span key={s} style={{ background: "#fff", border: "1px solid #D7E3DA", color: "#5B7065", borderRadius: 20, padding: "2px 8px", font: "700 10px 'Nunito'" }}>#{s}</span>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Spacer so content doesn't hide under floating button on mobile */}
      <div className="block md:hidden" style={{ height: 88 }} />

      {/* Action button — fixed on mobile, inline on desktop */}
      <div className="fixed bottom-0 left-0 right-0 md:static md:mt-4 bg-white md:bg-transparent border-t border-gray-100 md:border-0" style={{ padding: "12px 20px 20px", paddingBottom: "calc(12px + env(safe-area-inset-bottom, 0px))" }}>
        <div className="md:hidden" style={{ marginBottom: 0 }} />
        {!revealed ? (
          <button
            onClick={handleCheck}
            disabled={selected === null}
            style={{
              width: "100%", padding: "15px 0", borderRadius: 16,
              font: "800 16px 'Baloo 2'", color: "#fff", border: "none",
              background: selected !== null ? "#16C172" : "#ECF1E6",
              boxShadow: selected !== null ? "0 5px 0 #0E9E5C" : "none",
              cursor: selected !== null ? "pointer" : "not-allowed",
              letterSpacing: .5, transition: "all .15s",
            }}
          >
            KIỂM TRA
          </button>
        ) : (
          <button
            onClick={onNext}
            style={{ width: "100%", padding: "15px 0", borderRadius: 16, font: "800 16px 'Baloo 2'", color: "#fff", background: "#16C172", border: "none", boxShadow: "0 5px 0 #0E9E5C", cursor: "pointer", letterSpacing: .5 }}
          >
            TIẾP TỤC
          </button>
        )}
      </div>
    </div>
  );
}
