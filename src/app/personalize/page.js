"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { LESSONS, TOPICS } from "@/data/lessons";
import { QUESTIONS, MAX_FREE_REDESIGNS } from "@/data/personalize";
import { buildPath, getPersonalize, savePersonalize, topicLabels } from "@/lib/personalize";
import { useAuth } from "@/contexts/AuthContext";
import { useProgress } from "@/hooks/useProgress";
import XuXuMascot from "@/components/XuXuMascot";
import LessonCard from "@/components/LessonCard";
import LoginModal from "@/components/LoginModal";
import UpgradeModal from "@/components/UpgradeModal";

const C = { green: "#16C172", greenDark: "#0E9E5C", ink: "#15392A", bg: "#F4F8EF", border: "#ECF1E6", purple: "#8B5CF6", purpleDark: "#7C4DEC", muted: "#5B7065", faint: "#9AA89E" };

const ANALYZE_STEPS = ["Phân tích mục tiêu của bạn…", "Chọn chủ đề phù hợp…", "Sắp xếp lộ trình học…"];

const BENEFITS = [
  { emoji: "🎯", title: "Lộ trình riêng theo mục tiêu", desc: "Chỉ học đúng thứ bạn cần, theo điều bạn quan tâm." },
  { emoji: "⏱️", title: "Tiết kiệm thời gian", desc: "Không lạc lối giữa hàng loạt bài — XuXu chọn sẵn cho bạn." },
  { emoji: "🌱", title: "Vừa sức của bạn", desc: "Độ khó & nhịp học khớp với trình độ hiện tại." },
];

export default function PersonalizePage() {
  const router = useRouter();
  const { user, isPro, activateTrial } = useAuth();
  const { completed } = useProgress();

  const [step, setStep] = useState("loading"); // loading | intro | questions | analyzing | result
  const [qIndex, setQIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [path, setPath] = useState(null); // { lessonIds, summaryText, topics, level }
  const [redesignsUsed, setRedesignsUsed] = useState(0);
  const [analyzeStep, setAnalyzeStep] = useState(0);
  const [showLogin, setShowLogin] = useState(false);
  const [showUpgrade, setShowUpgrade] = useState(false);
  const timers = useRef([]);

  // Khôi phục lộ trình đã lưu
  useEffect(() => {
    let alive = true;
    (async () => {
      const saved = await getPersonalize(user);
      if (!alive) return;
      if (saved?.lessonIds?.length) {
        setAnswers(saved.answers || {});
        setRedesignsUsed(saved.redesignsUsed || 0);
        setPath(buildPath(saved.answers || {}));
        setStep("result");
      } else {
        setStep("intro");
      }
    })();
    return () => { alive = false; };
  }, [user]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const guest = !user;

  const startQuiz = () => { setAnswers({}); setQIndex(0); setStep("questions"); };

  const pickAnswer = (qid, value) => {
    const next = { ...answers, [qid]: value };
    setAnswers(next);
    if (qIndex < QUESTIONS.length - 1) {
      setQIndex(qIndex + 1);
    } else {
      runAnalyze(next, redesignsUsed);
    }
  };

  const runAnalyze = (finalAnswers, usedCount) => {
    setStep("analyzing");
    setAnalyzeStep(0);
    timers.current.forEach(clearTimeout);
    timers.current = [
      setTimeout(() => setAnalyzeStep(1), 750),
      setTimeout(() => setAnalyzeStep(2), 1500),
      setTimeout(async () => {
        const built = buildPath(finalAnswers);
        setPath(built);
        setStep("result");
        if (!guest) {
          await savePersonalize(user, { answers: finalAnswers, lessonIds: built.lessonIds, redesignsUsed: usedCount });
        }
      }, 2300),
    ];
  };

  // Nút "Thiết kế lại"
  const handleRedesign = () => {
    if (guest) { startQuiz(); return; }          // khách: tự do, không lưu
    if (isPro) { startQuiz(); return; }           // Pro: không giới hạn
    if (redesignsUsed < MAX_FREE_REDESIGNS) {
      setRedesignsUsed((n) => n + 1);             // dùng 1 lượt
      startQuiz();
    } else {
      setShowUpgrade(true);                        // hết lượt → nâng cấp Pro
    }
  };

  const goBack = () => router.push("/learn");

  // "Bắt đầu học": vào bài đầu tiên CHƯA học trong lộ trình (đã sắp xếp dễ → khó).
  // Chưa học bài nào → bắt đầu từ bài đầu. Không có lộ trình → về trang Học.
  const startLearning = () => {
    const ids = path?.lessonIds || [];
    if (!ids.length) { router.push("/learn"); return; }
    const next = ids.find((id) => !completed.includes(id)) || ids[0];
    router.push(`/game/${next}`);
  };

  if (step === "loading") {
    return <div style={{ minHeight: "100vh", background: C.bg }} />;
  }

  const pathLessons = path ? path.lessonIds.map((id) => LESSONS.find((l) => l.id === id)).filter(Boolean) : [];
  const redesignsLeft = Math.max(0, MAX_FREE_REDESIGNS - redesignsUsed);

  return (
    <div style={{ minHeight: "100vh", background: C.bg, fontFamily: "'Nunito', sans-serif" }}>
      {/* Header */}
      <div style={{ position: "sticky", top: 0, zIndex: 20, background: "#fff", borderBottom: "2px solid #ECF1E6", padding: "12px 16px", display: "flex", alignItems: "center", gap: 12 }}>
        <button onClick={goBack} style={{ background: C.bg, border: "none", borderRadius: 12, width: 38, height: 38, cursor: "pointer", font: "800 18px 'Baloo 2'", color: C.ink }}>‹</button>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ font: "800 18px 'Baloo 2'", color: C.ink }}>Cá nhân hóa lộ trình</span>
          <span style={{ background: "#F1E9FF", color: C.purpleDark, borderRadius: 8, padding: "2px 8px", font: "800 10px 'Baloo 2'" }}>MỚI</span>
        </div>
      </div>

      <div style={{ maxWidth: 760, margin: "0 auto", padding: "24px 18px 60px" }}>

        {/* ── INTRO ── */}
        {step === "intro" && (
          <div style={{ textAlign: "center" }}>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 14, animation: "float 3s ease-in-out infinite" }}>
              <XuXuMascot size={96} mood="excited" />
            </div>
            <h1 style={{ font: "800 clamp(26px,5vw,34px)/1.15 'Baloo 2'", color: C.ink, marginBottom: 10 }}>
              Để XuXu thiết kế <span style={{ color: C.purple }}>lộ trình riêng</span> cho bạn
            </h1>
            <p style={{ font: "600 15px/1.6 'Nunito'", color: C.muted, maxWidth: 460, margin: "0 auto 24px" }}>
              XuXu sẽ chọn đúng những bài học phù hợp với mục tiêu và trình độ của bạn.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12, marginBottom: 28, textAlign: "left" }}>
              {BENEFITS.map((b) => (
                <div key={b.title} style={{ background: "#fff", border: "2px solid #ECF1E6", borderRadius: 18, padding: 16 }}>
                  <div style={{ fontSize: 28, marginBottom: 8 }}>{b.emoji}</div>
                  <div style={{ font: "800 15px 'Baloo 2'", color: C.ink, marginBottom: 4 }}>{b.title}</div>
                  <div style={{ font: "600 12px/1.5 'Nunito'", color: C.muted }}>{b.desc}</div>
                </div>
              ))}
            </div>
            <button
              onClick={startQuiz}
              className="btn-press"
              style={{ background: C.purple, color: "#fff", border: "none", borderRadius: 16, padding: "16px 40px", font: "800 17px 'Baloo 2'", boxShadow: `0 5px 0 ${C.purpleDark}`, cursor: "pointer" }}
            >
              Bắt đầu →
            </button>
          </div>
        )}

        {/* ── QUESTIONS ── */}
        {step === "questions" && (() => {
          const q = QUESTIONS[qIndex];
          return (
            <div>
              {/* progress */}
              <div style={{ display: "flex", gap: 6, marginBottom: 22 }}>
                {QUESTIONS.map((_, i) => (
                  <div key={i} style={{ flex: 1, height: 8, borderRadius: 6, background: i <= qIndex ? C.purple : "#E6E0F2" }} />
                ))}
              </div>
              <div style={{ font: "700 13px 'Nunito'", color: C.faint, marginBottom: 6 }}>Câu {qIndex + 1}/{QUESTIONS.length}</div>
              <h2 style={{ font: "800 24px/1.2 'Baloo 2'", color: C.ink, marginBottom: 6 }}>{q.title}</h2>
              <p style={{ font: "600 14px 'Nunito'", color: C.muted, marginBottom: 20 }}>{q.subtitle}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {q.options.map((o) => {
                  const active = answers[q.id] === o.value;
                  return (
                    <button
                      key={o.value}
                      onClick={() => pickAnswer(q.id, o.value)}
                      className="btn-press"
                      style={{ display: "flex", alignItems: "center", gap: 14, textAlign: "left", background: "#fff", border: `2px solid ${active ? C.purple : C.border}`, borderBottomWidth: 4, borderRadius: 16, padding: "14px 16px", cursor: "pointer" }}
                    >
                      <span style={{ fontSize: 30, flexShrink: 0 }}>{o.emoji}</span>
                      <span style={{ flex: 1 }}>
                        <span style={{ display: "block", font: "800 16px 'Baloo 2'", color: C.ink }}>{o.label}</span>
                        <span style={{ display: "block", font: "600 12px 'Nunito'", color: C.muted, marginTop: 2 }}>{o.desc}</span>
                      </span>
                      <span style={{ color: C.purple, font: "800 18px 'Baloo 2'" }}>→</span>
                    </button>
                  );
                })}
              </div>
              {qIndex > 0 && (
                <button onClick={() => setQIndex(qIndex - 1)} style={{ marginTop: 18, background: "none", border: "none", cursor: "pointer", font: "700 13px 'Nunito'", color: C.faint }}>← Câu trước</button>
              )}
            </div>
          );
        })()}

        {/* ── ANALYZING ── */}
        {step === "analyzing" && (
          <div style={{ textAlign: "center", paddingTop: 30 }}>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 22, animation: "float 1.5s ease-in-out infinite" }}>
              <XuXuMascot size={110} mood="excited" />
            </div>
            <h2 style={{ font: "800 22px 'Baloo 2'", color: C.ink, marginBottom: 24 }}>XuXu đang thiết kế lộ trình cho bạn…</h2>
            <div style={{ maxWidth: 360, margin: "0 auto", display: "flex", flexDirection: "column", gap: 12 }}>
              {ANALYZE_STEPS.map((s, i) => {
                const done = i < analyzeStep;
                const current = i === analyzeStep;
                return (
                  <div key={s} style={{ display: "flex", alignItems: "center", gap: 12, background: "#fff", border: `2px solid ${current ? C.purple : C.border}`, borderRadius: 14, padding: "12px 16px", opacity: i <= analyzeStep ? 1 : 0.45, transition: "all .3s" }}>
                    <span style={{ width: 24, height: 24, borderRadius: "50%", background: done ? C.green : current ? C.purple : "#E6E0F2", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", font: "800 12px 'Baloo 2'", flexShrink: 0 }}>
                      {done ? "✓" : current ? "•" : i + 1}
                    </span>
                    <span style={{ font: "700 14px 'Nunito'", color: C.ink, textAlign: "left" }}>{s}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ── RESULT ── */}
        {step === "result" && path && (
          <div>
            <div style={{ background: "linear-gradient(150deg, #8B5CF6, #7C4DEC)", borderRadius: 22, padding: "22px 22px", color: "#fff", marginBottom: 18, boxShadow: "0 6px 0 rgba(80,40,170,.4)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <XuXuMascot size={48} />
                <div style={{ font: "800 20px 'Baloo 2'" }}>Lộ trình của bạn đã sẵn sàng! 🎉</div>
              </div>
              <p style={{ font: "600 14px/1.6 'Nunito'", color: "rgba(255,255,255,.92)" }}
                 dangerouslySetInnerHTML={{ __html: path.summaryText.replace(/\*\*(.+?)\*\*/g, "<b>$1</b>") }} />
              <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginTop: 14 }}>
                {topicLabels(path.topics).map((t) => (
                  <span key={t} style={{ background: "rgba(255,255,255,.2)", borderRadius: 20, padding: "5px 12px", font: "700 12px 'Nunito'" }}>{t}</span>
                ))}
              </div>
            </div>

            {/* Lesson list */}
            <div style={{ font: "800 16px 'Baloo 2'", color: C.ink, marginBottom: 12 }}>📚 {pathLessons.length} bài học được chọn cho bạn</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: 12, marginBottom: 24 }}>
              {pathLessons.map((lesson) => (
                <LessonCard key={lesson.id} lesson={lesson} isCompleted={completed.includes(lesson.id)} guest={guest} onGuestClick={() => setShowLogin(true)} />
              ))}
            </div>

            {/* Actions */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
              <button
                onClick={handleRedesign}
                className="btn-press"
                style={{ background: "#fff", color: C.purpleDark, border: `2px solid ${C.purple}`, borderBottomWidth: 4, borderRadius: 14, padding: "13px 22px", font: "800 15px 'Baloo 2'", cursor: "pointer" }}
              >
                ✨ Thiết kế lại
              </button>
              <button
                onClick={startLearning}
                className="btn-press"
                style={{ background: C.green, color: "#fff", border: "none", borderRadius: 14, padding: "13px 22px", font: "800 15px 'Baloo 2'", boxShadow: `0 4px 0 ${C.greenDark}`, cursor: "pointer" }}
              >
                Bắt đầu học →
              </button>
            </div>

            {/* Trạng thái lượt / login */}
            {guest ? (
              <button onClick={() => setShowLogin(true)} style={{ display: "block", marginTop: 14, background: "none", border: "none", cursor: "pointer", font: "700 13px 'Nunito'", color: C.purpleDark }}>
                🔒 Đăng nhập để lưu lộ trình này
              </button>
            ) : (
              <div style={{ marginTop: 14, font: "600 12px 'Nunito'", color: C.faint }}>
                {isPro
                  ? "◆ Pro: thiết kế lại không giới hạn"
                  : redesignsLeft > 0
                    ? `Bạn còn ${redesignsLeft} lượt thiết kế lại miễn phí`
                    : "Đã hết lượt miễn phí — nâng cấp Pro để thiết kế lại không giới hạn"}
              </div>
            )}
          </div>
        )}
      </div>

      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
      {showUpgrade && <UpgradeModal onClose={() => setShowUpgrade(false)} onActivate={activateTrial} />}
    </div>
  );
}
