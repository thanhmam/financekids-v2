/* XuXu app — tab screens: Explore, Tasks, Leaderboard, Profile, Shop, Streak */
const DS3 = window.XuXuDesignSystem_72e90e;
const { XuXuMascot: M3, XuCoin: C3, Button: B3, StatPill: SP3, ProgressBar: P3, Chip: Ch3, Badge: Bd3, IconTile: IT3 } = DS3;

function ScreenHeader({ title, right, onBack }) {
  return (
    <div style={{ background: "#fff", borderBottom: "2px solid var(--xu-line)", padding: "14px 18px", display: "flex", alignItems: "center", gap: 12, position: "sticky", top: 0, zIndex: 5 }}>
      {onBack && <button onClick={onBack} style={{ width: 36, height: 36, borderRadius: 11, background: "var(--xu-bg)", border: "2px solid var(--xu-line)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0 }}><span style={{ font: "800 16px 'Baloo 2'", color: "var(--xu-ink)" }}>‹</span></button>}
      <div style={{ flex: 1, font: "800 22px 'Baloo 2'", color: "var(--xu-ink)" }}>{title}</div>
      {right}
    </div>
  );
}
const scroll = { height: "100%", overflowY: "auto", background: "var(--xu-bg)", paddingBottom: 72 };

/* ---------------- Explore ---------------- */
function Explore({ data, completed, onPlay }) {
  const [q, setQ] = React.useState("");
  const topics = data.topics.filter(t => t.label.toLowerCase().includes(q.toLowerCase()));
  return (
    <div style={scroll}>
      <ScreenHeader title="Khám phá" />
      <div style={{ padding: "14px 16px 0" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 9, background: "#fff", border: "2px solid var(--xu-line)", borderRadius: 14, padding: "11px 14px", marginBottom: 18 }}>
          <span style={{ color: "var(--xu-faint)", font: "800 15px 'Baloo 2'" }}>⌕</span>
          <input value={q} onChange={e => setQ(e.target.value)} placeholder="Tìm chủ đề tài chính..." style={{ flex: 1, border: "none", outline: "none", font: "600 13px 'Nunito'", color: "var(--xu-ink)", background: "none" }} />
        </div>
        <div style={{ font: "700 13px 'Nunito'", color: "var(--xu-caption)", marginBottom: 11 }}>CHỦ ĐỀ</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 11, marginBottom: 20 }}>
          {topics.map(t => (
            <div key={t.id} style={{ background: t.bg, borderRadius: 18, padding: 14, position: "relative" }}>
              <div style={{ color: t.iconColor, font: "800 22px 'Baloo 2'" }}>{t.icon}</div>
              <div style={{ font: "800 14px 'Baloo 2'", color: t.titleColor, marginTop: 8 }}>{t.label}</div>
              <div style={{ font: "600 11px 'Nunito'", color: t.subColor, marginTop: 2 }}>{t.sub}</div>
              {t.locked && <div style={{ position: "absolute", top: 10, right: 10, fontSize: 14 }}>🔒</div>}
            </div>
          ))}
        </div>
        <div style={{ font: "700 13px 'Nunito'", color: "var(--xu-caption)", marginBottom: 11 }}>TẤT CẢ BÀI HỌC</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
          {data.lessons.map(l => {
            const done = completed.includes(l.id);
            return (
              <button key={l.id} onClick={() => onPlay(l)} style={{ display: "flex", alignItems: "center", gap: 12, background: "#fff", border: `2px solid ${done ? "var(--xu-green)" : "var(--xu-line)"}`, borderRadius: 14, padding: "11px 14px", cursor: "pointer", textAlign: "left" }}>
                <IT3 size={40} bg={l.bgColor} fontSize={20}>{l.icon}</IT3>
                <div style={{ flex: 1 }}>
                  <div style={{ font: "800 13px 'Baloo 2'", color: "var(--xu-ink)" }}>{l.title}</div>
                  <div style={{ font: "600 11px 'Nunito'", color: "var(--xu-caption)", marginTop: 1 }}>+{l.xp} XP</div>
                </div>
                {done && <div style={{ width: 24, height: 24, borderRadius: 8, background: "var(--xu-green)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", font: "800 11px 'Baloo 2'" }}>✓</div>}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ---------------- Tasks ---------------- */
function Tasks({ data }) {
  const [secs, setSecs] = React.useState(8 * 3600 + 24 * 60 + 11);
  const [claimed, setClaimed] = React.useState(false);
  React.useEffect(() => { const t = setInterval(() => setSecs(s => Math.max(0, s - 1)), 1000); return () => clearInterval(t); }, []);
  const fmt = s => [s / 3600, (s % 3600) / 60, s % 60].map(n => String(Math.floor(n)).padStart(2, "0")).join(":");

  return (
    <div style={scroll}>
      <ScreenHeader title="Nhiệm vụ" right={<div style={{ font: "700 12px 'Nunito'", color: "var(--xu-caption)" }}>Làm mới sau <span style={{ color: "var(--xu-streak)", fontWeight: 800 }}>{fmt(secs)}</span></div>} />
      <div style={{ padding: "16px 16px 0" }}>
        <div style={{ font: "800 17px 'Baloo 2'", color: "var(--xu-ink)", marginBottom: 12 }}>Nhiệm vụ hằng ngày</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 11, marginBottom: 26 }}>
          <TaskRow icon="✓" iconBg="var(--xu-green-100)" iconColor="var(--xu-green)" label="Hoàn thành 3 bài học" pct={66} reward={30} frac="2/3" />
          <TaskRow icon="★" iconBg="var(--xu-streak-100)" iconColor="var(--xu-streak)" label="Đạt 100 XP hôm nay" pct={60} reward={40} frac="60/100" tone="streak" />
          <div style={{ display: "flex", alignItems: "center", gap: 14, background: "var(--xu-green-50)", border: "2px solid var(--xu-green-border)", borderRadius: 18, padding: "14px 16px" }}>
            <IT3 size={44} radius={13} bg="var(--xu-green)" color="#fff">✓</IT3>
            <div style={{ flex: 1 }}>
              <div style={{ font: "800 14px 'Baloo 2'", color: "var(--xu-green-dark)" }}>Giữ streak {data.user.streak} ngày</div>
              <div style={{ font: "600 11px 'Nunito'", color: "#5BA882", marginTop: 3 }}>{claimed ? "Đã nhận thưởng!" : "Đã hoàn thành — nhận thưởng!"}</div>
            </div>
            {!claimed && <B3 variant="primary" size="sm" onClick={() => setClaimed(true)}>NHẬN</B3>}
          </div>
        </div>
        <div style={{ font: "800 17px 'Baloo 2'", color: "var(--xu-ink)", marginBottom: 12 }}>Nhiệm vụ tuần</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
          <div style={{ background: "var(--xu-ink)", borderRadius: 18, padding: "17px 18px" }}>
            <div style={{ font: "800 15px 'Baloo 2'", color: "#fff" }}>Hoàn thành 1 đơn vị</div>
            <div style={{ margin: "10px 0 7px" }}><P3 value={50} tone="onDark" height={10} /></div>
            <div style={{ font: "600 11px 'Nunito'", color: "rgba(255,255,255,.72)" }}>3/6 bài · thưởng 200 xu + huy hiệu</div>
          </div>
          <div style={{ background: "#fff", border: "2px solid var(--xu-line)", borderRadius: 18, padding: "17px 18px" }}>
            <div style={{ font: "800 15px 'Baloo 2'", color: "var(--xu-ink)" }}>Top 10 bảng xếp hạng</div>
            <div style={{ margin: "10px 0 7px" }}><P3 value={80} tone="gems" height={10} /></div>
            <div style={{ font: "600 11px 'Nunito'", color: "var(--xu-caption)" }}>Hạng 4 hiện tại · thưởng 150 xu</div>
          </div>
        </div>
      </div>
    </div>
  );
}
function TaskRow({ icon, iconBg, iconColor, label, pct, reward, frac, tone = "green" }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14, background: "#fff", border: "2px solid var(--xu-line)", borderRadius: 18, padding: "14px 16px" }}>
      <IT3 size={44} radius={13} bg={iconBg} color={iconColor}>{icon}</IT3>
      <div style={{ flex: 1 }}>
        <div style={{ font: "800 14px 'Baloo 2'", color: "var(--xu-ink)" }}>{label}</div>
        <div style={{ marginTop: 8 }}><P3 value={pct} tone={tone} height={10} /></div>
      </div>
      <div style={{ textAlign: "center" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 4, background: "var(--xu-gold-50)", borderRadius: 10, padding: "5px 9px" }}>
          <C3 size={16} /><span style={{ font: "800 11px 'Baloo 2'", color: "var(--xu-ink)" }}>+{reward}</span>
        </div>
        <div style={{ font: "700 10px 'Nunito'", color: "var(--xu-caption)", marginTop: 4 }}>{frac}</div>
      </div>
    </div>
  );
}

/* ---------------- Leaderboard ---------------- */
function Leaderboard({ data }) {
  const sorted = [...data.leaderboard].sort((a, b) => b.xp - a.xp);
  const myRank = sorted.findIndex(e => e.me);
  const rankColor = ["#E8A317", "#9AA89E", "#CD7F32"];
  const top = sorted[0].xp;
  return (
    <div style={scroll}>
      <div style={{ background: "#fff", borderBottom: "2px solid var(--xu-line)", padding: "16px 20px", textAlign: "center", position: "sticky", top: 0, zIndex: 5 }}>
        <div style={{ color: "var(--xu-gold)", font: "800 32px 'Baloo 2'", lineHeight: 1 }}>♛</div>
        <div style={{ font: "800 20px 'Baloo 2'", color: "var(--xu-ink)", marginTop: 2 }}>Hạng Vàng</div>
        <div style={{ font: "600 12px 'Nunito'", color: "var(--xu-caption)", marginTop: 2 }}>Top 7 thăng hạng · tuần này</div>
      </div>
      {myRank >= 0 && (
        <div style={{ background: "var(--xu-green-50)", border: "2px solid var(--xu-green)", borderRadius: 16, margin: "16px 16px 0", padding: "10px 16px", display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ font: "700 14px 'Nunito'", color: "var(--xu-green-dark)" }}>Bạn đang ở vị trí</span>
          <span style={{ font: "800 22px 'Baloo 2'", color: "var(--xu-green)" }}>#{myRank + 1}</span>
          <span style={{ fontSize: 18 }}>🎯</span>
        </div>
      )}
      <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: 8 }}>
        {sorted.map((e, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, background: e.me ? "var(--xu-green-50)" : "#fff", border: `2px solid ${e.me ? "var(--xu-green)" : "var(--xu-line)"}`, borderRadius: 14, padding: "10px 14px" }}>
            <div style={{ width: 26, textAlign: "center", font: "800 15px 'Baloo 2'", color: rankColor[i] || (e.me ? "var(--xu-green)" : "var(--xu-caption)") }}>{i + 1}</div>
            <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#FFF9F0", border: `2px solid ${e.me ? "var(--xu-green)" : "var(--xu-line)"}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>{e.avatar}</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ font: "800 14px 'Nunito'", color: e.me ? "var(--xu-green-dark)" : "var(--xu-ink)" }}>{e.name}{e.me && <span style={{ font: "700 11px 'Nunito'", color: "var(--xu-green)", marginLeft: 6 }}>(bạn)</span>}</div>
              <div style={{ font: "600 12px 'Nunito'", color: "var(--xu-caption)", marginTop: 1 }}>⭐ {e.xp.toLocaleString("vi-VN")} XP tuần này</div>
            </div>
            <div style={{ width: 52, height: 6, background: "var(--xu-line)", borderRadius: 4, overflow: "hidden" }}>
              <div style={{ width: `${Math.round((e.xp / top) * 100)}%`, height: "100%", background: "linear-gradient(90deg, var(--xu-green), var(--xu-gold))" }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- Profile ---------------- */
function Profile({ data, completed, totalXP }) {
  return (
    <div style={scroll}>
      <ScreenHeader title="Hồ sơ" right={<button style={{ background: "none", border: "none", font: "700 13px 'Nunito'", color: "var(--xu-life)", cursor: "pointer" }}>Đăng xuất</button>} />
      <div style={{ padding: "16px 18px 0" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
          <M3 size={66} />
          <div>
            <div style={{ font: "800 20px 'Baloo 2'", color: "var(--xu-ink)" }}>{data.user.name}</div>
            <div style={{ font: "700 13px 'Nunito'", color: "var(--xu-caption)" }}>Tham gia {data.user.joined}</div>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 20 }}>
          <Stat icon="▲" color="var(--xu-streak)" value={data.user.streak} label="ngày streak" />
          <Stat icon="★" color="var(--xu-gold)" value={totalXP.toLocaleString("vi-VN")} label="tổng XP" />
          <div style={{ background: "#fff", border: "2px solid var(--xu-line)", borderRadius: 16, padding: 12, display: "flex", alignItems: "center", gap: 10 }}>
            <C3 size={26} />
            <div><div style={{ font: "800 18px 'Baloo 2'", color: "var(--xu-ink)" }}>{data.user.xu.toLocaleString("vi-VN")}</div><div style={{ font: "600 11px 'Nunito'", color: "var(--xu-caption)" }}>xu tích luỹ</div></div>
          </div>
          <Stat icon="♛" color="var(--xu-gems)" value="Vàng" label="hạng đấu" />
        </div>
        <div style={{ background: "#fff", border: "2px solid var(--xu-line)", borderRadius: 18, padding: 14, marginBottom: 18 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <span style={{ font: "800 15px 'Baloo 2'", color: "var(--xu-ink)" }}>Tiến độ học</span>
            <span style={{ font: "700 12px 'Nunito'", color: "var(--xu-green-dark)" }}>{completed.length}/{data.lessons.length} bài</span>
          </div>
          <P3 value={Math.round((completed.length / data.lessons.length) * 100)} />
        </div>
        <div style={{ font: "800 16px 'Baloo 2'", color: "var(--xu-ink)", marginBottom: 10 }}>Huy hiệu</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10, marginBottom: 20 }}>
          {data.badges.map(b => <Bd3 key={b.id} emoji={b.emoji} label={b.name} tone={b.tone} earned={b.earned} />)}
        </div>
      </div>
    </div>
  );
}
function Stat({ icon, color, value, label }) {
  return (
    <div style={{ background: "#fff", border: "2px solid var(--xu-line)", borderRadius: 16, padding: 12, display: "flex", alignItems: "center", gap: 10 }}>
      <span style={{ color, font: "800 22px 'Baloo 2'" }}>{icon}</span>
      <div><div style={{ font: "800 18px 'Baloo 2'", color: "var(--xu-ink)" }}>{value}</div><div style={{ font: "600 11px 'Nunito'", color: "var(--xu-caption)" }}>{label}</div></div>
    </div>
  );
}

/* ---------------- Shop ---------------- */
function Shop({ data, onBack }) {
  const [toast, setToast] = React.useState(null);
  const xu = data.user.xu;
  const buy = (item) => {
    setToast(xu < item.price ? { msg: "Không đủ xu!", color: "var(--xu-life)" } : { msg: `Đã mua "${item.name}"! 🎉`, color: "var(--xu-green)" });
    setTimeout(() => setToast(null), 2200);
  };
  return (
    <div style={scroll}>
      <ScreenHeader title="Cửa hàng" onBack={onBack} right={<SP3 kind="xu" value={xu} />} />
      <div style={{ padding: "14px 16px 0" }}>
        <div style={{ background: "linear-gradient(150deg, #1FD07E, #0E9E5C)", borderRadius: 20, padding: 16, color: "#fff", marginBottom: 14, boxShadow: "0 5px 0 #0B7A48", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div><div style={{ font: "800 16px 'Baloo 2'" }}>Gói Tết 🧧</div><div style={{ font: "600 12px 'Nunito'", color: "rgba(255,255,255,.85)" }}>Giảm 20% mọi vật phẩm</div></div>
          <div style={{ background: "rgba(255,255,255,.22)", borderRadius: 12, padding: "8px 12px", font: "800 13px 'Baloo 2'" }}>-20%</div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 11 }}>
          {data.shop.map(item => {
            const can = xu >= item.price;
            return (
              <div key={item.id} style={{ background: "#fff", border: "2px solid var(--xu-line)", borderRadius: 18, padding: "14px 12px", textAlign: "center" }}>
                <IT3 size={52} bg={item.iconBg} color={item.iconColor} fontSize={24} style={{ margin: "0 auto 10px" }}>{item.icon}</IT3>
                <div style={{ font: "800 13px 'Baloo 2'", color: "var(--xu-ink)", marginBottom: 3 }}>{item.name}</div>
                <div style={{ font: "600 11px 'Nunito'", color: "var(--xu-caption)", marginBottom: 10, lineHeight: 1.35 }}>{item.desc}</div>
                <B3 variant={can ? "primary" : "secondary"} size="sm" block onClick={() => buy(item)}>{item.price} xu</B3>
              </div>
            );
          })}
        </div>
      </div>
      {toast && <div style={{ position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)", background: toast.color, color: "#fff", borderRadius: 14, padding: "12px 20px", font: "800 14px 'Baloo 2'", boxShadow: "0 6px 20px rgba(0,0,0,.18)", whiteSpace: "nowrap", animation: "xu-slide-up .3s ease" }}>{toast.msg}</div>}
    </div>
  );
}

/* ---------------- Streak ---------------- */
function Streak({ data, onBack }) {
  const s = data.user.streak;
  const days = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];
  return (
    <div style={scroll}>
      <ScreenHeader title="Streak & Phần thưởng" onBack={onBack} />
      <div style={{ padding: "16px 18px 0" }}>
        <div style={{ background: "linear-gradient(160deg, #FF9A4D, #FF7A2E)", borderRadius: 24, padding: "20px 18px", textAlign: "center", color: "#fff", marginBottom: 16, boxShadow: "0 6px 0 var(--xu-streak-dark)" }}>
          <div style={{ font: "800 60px 'Baloo 2'", lineHeight: 1, textShadow: "0 3px 0 rgba(0,0,0,.15)" }}>{s}</div>
          <div style={{ font: "800 20px 'Baloo 2'", marginTop: 2 }}>ngày streak!</div>
          <div style={{ font: "700 13px 'Nunito'", color: "rgba(255,255,255,.9)", marginTop: 4 }}>Giữ phong độ — bạn đang làm rất tốt</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", background: "#fff", borderRadius: 18, padding: "14px 12px", marginBottom: 16, border: "2px solid var(--xu-line)" }}>
          {days.map((d, i) => {
            const done = i < Math.min(s, 7);
            const today = i === Math.min(s, 6);
            return (
              <div key={d} style={{ textAlign: "center" }}>
                <div style={{ width: 30, height: 30, borderRadius: "50%", background: done ? "var(--xu-streak)" : "#fff", border: today && !done ? "2.5px dashed #FFB877" : done ? "none" : "2px solid var(--xu-line)", color: done ? "#fff" : today ? "var(--xu-streak)" : "var(--xu-faint)", display: "flex", alignItems: "center", justifyContent: "center", font: "800 13px 'Baloo 2'", margin: "0 auto" }}>{done ? "✓" : today ? "★" : ""}</div>
                <div style={{ font: "700 10px 'Nunito'", color: done || today ? "var(--xu-streak)" : "var(--xu-caption)", marginTop: 5 }}>{d}</div>
              </div>
            );
          })}
        </div>
        <div style={{ font: "800 16px 'Baloo 2'", color: "var(--xu-ink)", marginBottom: 10 }}>Phần thưởng</div>
        <RewardRow tile={<C3 size={26} />} bg="var(--xu-gold-50)" title="+50 xu thưởng" sub="Mốc 7 ngày liên tục" cta={<B3 variant="primary" size="sm">NHẬN</B3>} />
        <RewardRow tile="❄" tileBg="var(--xu-info-50)" tileColor="var(--xu-info)" title="Băng giữ streak" sub="Bảo vệ 1 ngày lỡ quên" cta={<B3 variant="secondary" size="sm">120 xu</B3>} />
        <RewardRow tile="▲" tileBg="var(--xu-streak-100)" tileColor="var(--xu-streak)" title="+200 xu thưởng" sub="Mốc 30 ngày liên tục" cta={<div style={{ background: "var(--xu-bg)", color: "var(--xu-caption)", borderRadius: 12, padding: "7px 12px", font: "800 12px 'Baloo 2'" }}>{s}/30</div>} />
      </div>
    </div>
  );
}
function RewardRow({ tile, tileBg, tileColor, title, sub, cta }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, background: "#fff", borderRadius: 16, padding: 12, border: "2px solid var(--xu-line)", marginBottom: 10 }}>
      <IT3 size={44} radius={12} bg={tileBg || "var(--xu-gold-50)"} color={tileColor} fontSize={20}>{tile}</IT3>
      <div style={{ flex: 1 }}>
        <div style={{ font: "800 14px 'Baloo 2'", color: "var(--xu-ink)" }}>{title}</div>
        <div style={{ font: "600 11px 'Nunito'", color: "var(--xu-caption)" }}>{sub}</div>
      </div>
      {cta}
    </div>
  );
}

Object.assign(window, { Explore, Tasks, Leaderboard, Profile, Shop, Streak });
