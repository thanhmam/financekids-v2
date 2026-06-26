/* XuXu app — GamePlay (quiz) + Result screens */
const DS2 = window.XuXuDesignSystem_72e90e;
const { XuXuMascot: Mascot2, XuCoin: Coin2, Button: Btn2, QuizOption, ProgressBar: PB2 } = DS2;

function Hearts({ n }) {
  return (
    <div style={{ display: "flex", gap: 3 }}>
      {[0, 1, 2, 3, 4].map(i => (
        <span key={i} style={{ color: i < n ? "var(--xu-life)" : "var(--xu-line)", fontSize: 16, lineHeight: 1 }}>♥</span>
      ))}
    </div>
  );
}

function GamePlay({ lesson, onExit, onFinish }) {
  const [qi, setQi] = React.useState(0);
  const [selected, setSelected] = React.useState(null);
  const [revealed, setRevealed] = React.useState(false);
  const [hearts, setHearts] = React.useState(5);
  const [correctCount, setCorrectCount] = React.useState(0);

  const q = lesson.questions[qi];
  const total = lesson.questions.length;
  const isCorrect = revealed && selected === q.correct;

  const check = () => {
    if (selected === null || revealed) return;
    setRevealed(true);
    if (selected === q.correct) setCorrectCount(c => c + 1);
    else setHearts(h => Math.max(0, h - 1));
  };
  const next = () => {
    if (qi < total - 1) {
      setQi(qi + 1); setSelected(null); setRevealed(false);
    } else {
      const finalCorrect = correctCount + (selected === q.correct && revealed ? 0 : 0);
      onFinish({ lesson, correct: correctCount, total, xp: lesson.xp });
    }
  };

  const optState = (i) => {
    if (!revealed) return selected === i ? "selected" : "idle";
    if (i === q.correct) return "correct";
    if (i === selected) return "wrong";
    return "dimmed";
  };

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", background: "var(--xu-bg)", overflow: "hidden" }}>
      {/* Header */}
      <div style={{ flexShrink: 0, display: "flex", alignItems: "center", gap: 12, padding: "14px 16px 10px" }}>
        <button onClick={onExit} style={{ width: 36, height: 36, borderRadius: 11, background: "#fff", border: "2px solid var(--xu-line)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0 }}>
          <span style={{ color: "var(--xu-ink)", font: "800 16px 'Baloo 2'" }}>‹</span>
        </button>
        <div style={{ flex: 1, height: 12, borderRadius: 8, background: "var(--xu-line)", overflow: "hidden" }}>
          <div style={{ width: `${Math.round(((qi) / total) * 100)}%`, height: "100%", background: "var(--xu-green)", boxShadow: "inset 0 3px 0 rgba(255,255,255,.35)", transition: "width .4s ease" }} />
        </div>
        <Hearts n={hearts} />
      </div>

      {/* Body — scrolls independently; action bar stays pinned below */}
      <div style={{ flex: 1, minHeight: 0, overflowY: "auto", padding: "8px 16px 12px", display: "flex", flexDirection: "column" }}>
        {/* Question bubble */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 20 }}>
          <Mascot2 size={56} />
          <div style={{ background: "#fff", border: "2px solid var(--xu-line)", borderRadius: 16, padding: "12px 14px", font: "700 14px 'Nunito'", color: "var(--xu-ink)", lineHeight: 1.5, flex: 1 }}>
            {q.image && <div style={{ fontSize: 26, marginBottom: 6 }}>{q.image}</div>}
            <span>{q.question}</span>
          </div>
        </div>

        {/* Options */}
        <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
          {q.options.map((opt, i) => (
            <QuizOption key={i} index={i} state={optState(i)} onClick={() => !revealed && setSelected(i)}>{opt}</QuizOption>
          ))}
        </div>

        {/* Explanation */}
        {revealed && (
          <div style={{ marginTop: 14, padding: "12px 14px", borderRadius: 14, background: isCorrect ? "var(--xu-green-50)" : "#FFF3F4", borderLeft: `4px solid ${isCorrect ? "var(--xu-green)" : "var(--xu-life)"}`, animation: "xu-slide-up .3s ease" }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
              <span style={{ fontSize: 18 }}>{isCorrect ? "🎉" : "💡"}</span>
              <p style={{ font: "600 13px 'Nunito'", color: "var(--xu-ink-soft)", lineHeight: 1.5, margin: 0 }}>{q.explanation}</p>
            </div>
          </div>
        )}
      </div>

      {/* Action — always pinned at bottom, never scrolled away */}
      <div style={{ flexShrink: 0, padding: "10px 16px 18px", borderTop: "2px solid var(--xu-line)", background: "var(--xu-bg)" }}>
        {!revealed
          ? <Btn2 variant="primary" size="lg" block disabled={selected === null} onClick={check}>KIỂM TRA</Btn2>
          : <Btn2 variant="primary" size="lg" block onClick={next}>{qi < total - 1 ? "TIẾP TỤC" : "HOÀN THÀNH"}</Btn2>}
      </div>
    </div>
  );
}

function Result({ result, onHome, onRetry }) {
  const [show, setShow] = React.useState(false);
  React.useEffect(() => { const t = setTimeout(() => setShow(true), 150); return () => clearTimeout(t); }, []);
  const xp = result.xp;
  const xu = Math.round(xp * 0.75);
  const pct = Math.round((result.correct / result.total) * 100);
  const confetti = ["🌟", "💰", "⭐", "🎉", "✨", "🏅", "💎"];

  return (
    <div style={{ height: "100%", background: "var(--xu-green)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "32px 24px", position: "relative", overflow: "hidden" }}>
      <style>{`@keyframes floatDown { to { top: 110%; transform: rotate(720deg); opacity: 0; } } @keyframes popIn { from { transform: scale(.4); opacity: 0; } to { transform: scale(1); opacity: 1; } }`}</style>
      {show && <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
        {confetti.map((e, i) => <div key={i} style={{ position: "absolute", fontSize: 26, left: `${8 + i * 13}%`, top: "-10%", animation: `floatDown ${2 + i * 0.25}s ease-in ${i * 0.12}s forwards` }}>{e}</div>)}
      </div>}

      <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", width: "100%", maxWidth: 360 }}>
        <div style={{ animation: show ? "popIn .5s cubic-bezier(.175,.885,.32,1.275) forwards" : "none", opacity: show ? 1 : 0, marginBottom: 24 }}>
          <Mascot2 size={120} mood="excited" />
        </div>
        <div style={{ font: "800 30px 'Baloo 2'", color: "#fff", lineHeight: 1.1 }}>Hoàn thành! 🎉</div>
        <div style={{ font: "700 14px 'Nunito'", color: "rgba(255,255,255,.9)", marginTop: 8, marginBottom: 28, textAlign: "center" }}>{result.lesson.title}</div>

        <div style={{ display: "flex", gap: 12, marginBottom: 32, justifyContent: "center" }}>
          <div style={{ background: "rgba(255,255,255,.18)", borderRadius: 16, padding: "14px 6px", width: 86, textAlign: "center" }}>
            <div style={{ color: "var(--xu-gold)", font: "800 24px 'Baloo 2'" }}>★</div>
            <div style={{ font: "800 18px 'Baloo 2'", color: "#fff", marginTop: 3 }}>+{xp}</div>
            <div style={{ font: "700 10px 'Nunito'", color: "rgba(255,255,255,.8)" }}>XP</div>
          </div>
          <div style={{ background: "rgba(255,255,255,.18)", borderRadius: 16, padding: "14px 6px", width: 86, textAlign: "center" }}>
            <Coin2 size={28} />
            <div style={{ font: "800 18px 'Baloo 2'", color: "#fff", marginTop: 3 }}>+{xu}</div>
            <div style={{ font: "700 10px 'Nunito'", color: "rgba(255,255,255,.8)" }}>xu</div>
          </div>
          <div style={{ background: "rgba(255,255,255,.18)", borderRadius: 16, padding: "14px 6px", width: 86, textAlign: "center" }}>
            <div style={{ font: "800 18px 'Baloo 2'", color: "#fff" }}>{result.correct}/{result.total}</div>
            <div style={{ font: "800 14px 'Baloo 2'", color: "#fff", marginTop: 3 }}>{pct}%</div>
            <div style={{ font: "700 10px 'Nunito'", color: "rgba(255,255,255,.8)" }}>đúng</div>
          </div>
        </div>

        <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 12 }}>
          <Btn2 variant="white" size="lg" block onClick={onHome}>TIẾP TỤC</Btn2>
          <button onClick={onRetry} style={{ padding: "12px 0", borderRadius: 16, font: "800 15px 'Baloo 2'", color: "rgba(255,255,255,.9)", background: "rgba(255,255,255,.18)", border: "2px solid rgba(255,255,255,.3)", cursor: "pointer" }}>Thử lại</button>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { GamePlay, Result });
