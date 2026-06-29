import fs from "fs";
import path from "path";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata = { title: "Nhật ký cập nhật — XuXu" };

/* ── Nguồn: CHANGELOG.md (SSOT). Trang này tự đọc & rút gọn các thay đổi CHÍNH,
   bỏ phần header (quy tắc + ghi chú) trước mục version đầu tiên. ── */

const TAG_META = {
  Added:   { label: "Mới",       bg: "#EAFBF1", color: "#0E9E5C" },
  Changed: { label: "Cải thiện", bg: "#F1E9FF", color: "#7C4DEC" },
  Fixed:   { label: "Sửa lỗi",   bg: "#FFF1E4", color: "#E07320" },
  Removed: { label: "Gỡ bỏ",     bg: "#FFE9EC", color: "#E03A4E" },
};
const DEFAULT_TAG = { label: "Cập nhật", bg: "#EEF3E9", color: "#5B7065" };

function stripMd(s) {
  return s.replace(/\*\*/g, "").replace(/\*/g, "").replace(/`/g, "").replace(/\s+/g, " ").trim();
}

// Chỉ giữ ý chính: lấy câu đầu, bỏ dấu ":" thừa cuối dòng.
function mainPoint(s) {
  const clean = stripMd(s);
  const parts = clean.split(/\.\s+/);
  let out = parts[0];
  if (parts.length > 1 && !/[.!?…)]$/.test(out)) out += ".";
  return out.replace(/[:：]\s*$/, "").trim();
}

function parseChangelog() {
  let raw = "";
  try {
    raw = fs.readFileSync(path.join(process.cwd(), "CHANGELOG.md"), "utf8");
  } catch {
    return [];
  }

  const releases = [];
  let release = null;
  let section = null;

  for (const line of raw.split("\n")) {
    const ver = line.match(/^##\s*\[([^\]]+)\]\s*[—-]\s*(.+?)\s*$/);
    if (ver) {
      release = { version: ver[1], dateRaw: ver[2], sections: [] };
      releases.push(release);
      section = null;
      continue;
    }
    if (!release) continue; // bỏ qua mọi thứ trước version đầu tiên (header/quy tắc/ghi chú)

    const sec = line.match(/^###\s+(.+?)\s*$/);
    if (sec) {
      section = { key: sec[1].trim(), items: [] };
      release.sections.push(section);
      continue;
    }
    if (line.startsWith("- ")) {
      if (!section) {
        section = { key: "Changed", items: [] };
        release.sections.push(section);
      }
      const point = mainPoint(line.slice(2));
      if (point) section.items.push(point);
    }
    // dòng thụt đầu (sub-bullet) → bỏ, tránh quá chi tiết
  }

  return releases.filter((r) => r.sections.some((s) => s.items.length));
}

function formatDate(raw) {
  const m = raw.match(/(\d{4})-(\d{2})-(\d{2})/);
  if (!m) return raw;
  return new Date(`${m[1]}-${m[2]}-${m[3]}`).toLocaleDateString("vi-VN", {
    day: "numeric", month: "long", year: "numeric",
  });
}

export default function ChangelogPage() {
  const releases = parseChangelog();

  return (
    <div style={{ minHeight: "100vh", background: "#fff", fontFamily: "'Nunito', sans-serif" }}>
      <SiteHeader />

      {/* Hero */}
      <div style={{ background: "linear-gradient(180deg,#F4FBF4 0%,#FFFFFF 100%)", padding: "56px 0 40px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "#E3F7EC", borderRadius: 30, padding: "7px 15px", marginBottom: 18 }}>
            <span style={{ color: "#0E9E5C", font: "800 13px 'Baloo 2'" }}>📝</span>
            <span style={{ font: "800 13px 'Nunito'", color: "#0E9E5C", letterSpacing: ".3px" }}>Change Log</span>
          </div>
          <h1 style={{ font: "800 42px/1.12 'Baloo 2'", color: "#15392A", letterSpacing: -1, marginBottom: 14 }}>
            Nhật ký <span style={{ color: "#16C172" }}>cập nhật</span>
          </h1>
          <p style={{ font: "600 17px/1.6 'Nunito'", color: "#5B7065", maxWidth: 480, margin: "0 auto" }}>
            Những thay đổi chính của XuXu — tính năng mới, cải thiện và sửa lỗi.
          </p>
        </div>
      </div>

      {/* Timeline */}
      <div style={{ maxWidth: 680, margin: "0 auto", padding: "16px 24px 72px" }}>
        {releases.length === 0 ? (
          <div style={{ textAlign: "center", padding: "48px 0", border: "2px dashed #DDE6D6", borderRadius: 18, font: "600 14px 'Nunito'", color: "#9AA89E" }}>
            Chưa có dữ liệu cập nhật.
          </div>
        ) : (
          <div style={{ position: "relative", paddingLeft: 28 }}>
            {/* đường dọc */}
            <div style={{ position: "absolute", left: 6, top: 8, bottom: 8, width: 2, background: "#ECF1E6" }} />

            {releases.map((r) => (
              <div key={r.version} style={{ position: "relative", marginBottom: 28 }}>
                {/* chấm */}
                <div style={{ position: "absolute", left: -28, top: 6, width: 14, height: 14, borderRadius: "50%", background: "#16C172", border: "3px solid #fff", boxShadow: "0 0 0 2px #16C172" }} />

                <div style={{ background: "#fff", border: "2px solid #ECF1E6", borderBottomWidth: 4, borderRadius: 18, padding: "18px 20px" }}>
                  <div style={{ font: "700 12px 'Nunito'", color: "#9AA89E", marginBottom: 12 }}>
                    v{r.version} · {formatDate(r.dateRaw)}
                  </div>

                  {r.sections.filter((s) => s.items.length).map((s, si) => {
                    const tag = TAG_META[s.key] || DEFAULT_TAG;
                    return (
                      <div key={si} style={{ marginBottom: si === r.sections.length - 1 ? 0 : 14 }}>
                        <span style={{ display: "inline-block", background: tag.bg, color: tag.color, borderRadius: 20, padding: "4px 11px", font: "800 12px 'Baloo 2'", marginBottom: 8 }}>{tag.label}</span>
                        <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                          {s.items.map((it, i) => (
                            <li key={i} style={{ display: "flex", gap: 9, font: "600 15px/1.55 'Nunito'", color: "#3A4A40" }}>
                              <span style={{ color: tag.color, fontWeight: 800, flexShrink: 0 }}>•</span>
                              <span>{it}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <SiteFooter />
    </div>
  );
}
