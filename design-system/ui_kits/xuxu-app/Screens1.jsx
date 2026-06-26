/* XuXu app — Onboarding + Home screens */
const DS = window.XuXuDesignSystem_72e90e;
const { XuXuMascot, XuCoin, Button, StatPill, ProgressBar, LessonCard, Chip } = DS;

function greeting() {
  const h = new Date().getHours();
  if (h < 12) return "Chào buổi sáng,";
  if (h < 18) return "Chào buổi chiều,";
  return "Chào buổi tối,";
}

/* ---------------- Onboarding ---------------- */
function Onboarding({ onStart }) {
  return (
    <div style={{ height: "100%", background: "var(--xu-green)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 28px", textAlign: "center" }}>
      <div style={{ marginBottom: 30 }}><XuXuMascot size={132} float /></div>
      <div style={{ font: "800 32px 'Baloo 2'", color: "#fff", lineHeight: 1.15 }}>Chào, mình là<br />XuXu!</div>
      <div style={{ font: "700 14px 'Nunito'", color: "rgba(255,255,255,.92)", marginTop: 14, lineHeight: 1.55 }}>
        Học tài chính mỗi ngày 5 phút,<br />để bạn không bao giờ <b>"0 xu"</b>.
      </div>
      <div style={{ width: "100%", maxWidth: 300, marginTop: 30, display: "flex", flexDirection: "column", gap: 12 }}>
        <Button variant="white" size="lg" block onClick={onStart}>BẮT ĐẦU HỌC</Button>
        <button onClick={onStart} style={{ background: "rgba(255,255,255,.18)", color: "#fff", borderRadius: 16, border: "2px solid rgba(255,255,255,.4)", padding: 13, font: "800 14px 'Baloo 2'", cursor: "pointer" }}>
          ĐĂNG NHẬP VỚI GOOGLE
        </button>
      </div>
      <div style={{ marginTop: 30, font: "600 12px 'Nunito'", color: "rgba(255,255,255,.6)" }}>
        Miễn phí · Không quảng cáo · Tiếng Việt
      </div>
    </div>
  );
}

/* ---------------- Home ---------------- */
function Home({ data, completed, totalXP, onPlay, onShop }) {
  const [age, setAge] = React.useState("all");
  const lessons = age === "all" ? data.lessons : data.lessons.filter(l => l.ageGroup === age);
  const cont = data.lessons.find(l => !completed.includes(l.id)) || data.lessons[0];
  const goal = 3;
  const done = Math.min(completed.length, goal);
  const pct = Math.round((done / goal) * 100);
  const completedPct = Math.round((completed.length / data.lessons.length) * 100);

  return (
    <div style={{ height: "100%", overflowY: "auto", background: "var(--xu-bg)", paddingBottom: 70 }}>
      {/* Header */}
      <div style={{ position: "sticky", top: 0, zIndex: 5, background: "var(--xu-bg)", padding: "14px 16px 8px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <div style={{ font: "600 12px 'Nunito'", color: "var(--xu-caption)" }}>{greeting()}</div>
          <div style={{ font: "800 20px 'Baloo 2'", color: "var(--xu-ink)", lineHeight: 1.1 }}>{data.user.name}!</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <button onClick={onShop} style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}>
            <StatPill kind="xu" value={data.user.xu} />
          </button>
          <StatPill kind="streak" value={data.user.streak} />
        </div>
      </div>

      <div style={{ padding: "4px 16px 0" }}>
        {/* Daily goal */}
        <div style={{ background: "var(--xu-ink)", borderRadius: 20, padding: "15px 16px", color: "#fff", display: "flex", alignItems: "center", gap: 15, marginBottom: 11 }}>
          <div style={{ position: "relative", width: 60, height: 60, flexShrink: 0 }}>
            <div style={{ width: 60, height: 60, borderRadius: "50%", background: `conic-gradient(var(--xu-green) ${pct}%, rgba(255,255,255,.15) 0)` }} />
            <div style={{ position: "absolute", inset: 7, borderRadius: "50%", background: "var(--xu-ink)", display: "flex", alignItems: "center", justifyContent: "center", font: "800 14px 'Baloo 2'" }}>{pct}%</div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ font: "800 16px 'Baloo 2'" }}>Mục tiêu hôm nay</div>
            <div style={{ font: "600 12px 'Nunito'", color: "rgba(255,255,255,.7)", marginTop: 2 }}>{done}/{goal} bài · còn +{(goal - done) * 10} xu</div>
          </div>
        </div>

        {/* Continue */}
        <div style={{ background: "#fff", border: "2px solid var(--xu-line)", borderRadius: 20, padding: 14, marginBottom: 11 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 9 }}>
            <span style={{ font: "800 15px 'Baloo 2'", color: "var(--xu-ink)" }}>Tiếp tục: {cont.title}</span>
            <Chip tone="green">Bài {completed.length + 1}/{data.lessons.length}</Chip>
          </div>
          <ProgressBar value={completedPct} style={{ marginBottom: 11 }} />
          <Button variant="primary" block onClick={() => onPlay(cont)}>HỌC TIẾP</Button>
        </div>

        {/* Tiles */}
        <div style={{ display: "flex", gap: 11, marginBottom: 11 }}>
          <div style={{ flex: 1, background: "var(--xu-gems-50)", borderRadius: 18, padding: 13 }}>
            <div style={{ color: "var(--xu-gems)", font: "800 19px 'Baloo 2'" }}>◆</div>
            <div style={{ font: "800 13px 'Baloo 2'", color: "#5B2EC4", marginTop: 5 }}>Thử thách</div>
            <div style={{ font: "600 11px 'Nunito'", color: "#8B6FD0" }}>Đố vui · +50 xu</div>
          </div>
          <div style={{ flex: 1, background: "var(--xu-streak-50)", borderRadius: 18, padding: 13 }}>
            <div style={{ color: "var(--xu-streak)", font: "800 19px 'Baloo 2'" }}>▲</div>
            <div style={{ font: "800 13px 'Baloo 2'", color: "#C25E18", marginTop: 5 }}>Streak {data.user.streak}</div>
            <div style={{ font: "600 11px 'Nunito'", color: "#D98A4D" }}>Giữ phong độ!</div>
          </div>
        </div>

        {/* Tip */}
        <div style={{ background: "#fff", border: "2px dashed var(--xu-line-subtle)", borderRadius: 18, padding: "11px 13px", display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
          <XuXuMascot size={32} />
          <div style={{ font: "600 12px 'Nunito'", color: "var(--xu-ink-soft)", lineHeight: 1.45 }}>
            <b>Mẹo của XuXu:</b> {data.tips[0]}
          </div>
        </div>

        {/* Lessons */}
        <h2 style={{ font: "800 18px 'Baloo 2'", color: "var(--xu-ink)", marginBottom: 10 }}>📚 Tất cả bài học</h2>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 14 }}>
          {data.ageGroups.map(g => (
            <button key={g.value} onClick={() => setAge(g.value)} style={{
              display: "flex", alignItems: "center", gap: 6, padding: "7px 14px", borderRadius: 20,
              font: "700 13px 'Nunito'", border: "none", cursor: "pointer",
              background: age === g.value ? "var(--xu-green)" : "#fff",
              color: age === g.value ? "#fff" : "var(--xu-muted)",
              boxShadow: age === g.value ? "0 4px 0 var(--xu-green-dark)" : "0 2px 8px rgba(21,57,42,.07)",
            }}>
              <span>{g.emoji}</span><span>{g.label}</span>
            </button>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          {lessons.map(l => (
            <LessonCard key={l.id} lesson={l} completed={completed.includes(l.id)} onClick={() => onPlay(l)} />
          ))}
        </div>
        <div style={{ textAlign: "center", padding: "18px 0 4px", font: "600 11px 'Nunito'", color: "var(--xu-faint)" }}>
          XuXu ✨ · {data.lessons.length} bài học · 3 nhóm tuổi
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Onboarding, Home });
