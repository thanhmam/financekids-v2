// ─────────────────────────────────────────────────────────────
// Hành trình xây dựng XuXu — kho bài viết / chia sẻ
//
// 👉 THÊM BÀI MỚI: copy 1 object trong mảng ARTICLES, đổi `slug` (duy nhất,
//    không dấu, dùng "-"), điền tiêu đề + nội dung. Bài mới nhất để LÊN ĐẦU mảng.
//
// content = mảng block, mỗi block là 1 object:
//   { type: "p",     text }              → đoạn văn
//   { type: "h2",    text }              → tiêu đề mục
//   { type: "quote", text }              → trích dẫn nổi bật
//   { type: "list",  items: [..] }       → danh sách gạch đầu dòng
//   { type: "img",   src, caption }      → ảnh (đặt trong /public)
//
// Inline trong text: **in đậm**, *in nghiêng*.
// ─────────────────────────────────────────────────────────────

export const ARTICLES = [
  {
    slug: "vibe-code-xuxu",
    title: 'Tôi đã "vibe code" ra XuXu như thế nào — và vì sao tài liệu mới là phần khó nhất',
    excerpt:
      'XuXu được build hoàn toàn bằng "vibe code" cùng AI agent. Nhưng phần khó nhất không phải là code — mà là giữ cho tài liệu không trôi khỏi thực tế. Đây là cách tôi làm.',
    date: "2026-06-29",
    readMinutes: 6,
    emoji: "🛠️",
    accent: "#16C172",
    content: [
      {
        type: "p",
        text: 'Tôi vừa build xong **XuXu** — một web app dạy tài chính theo phong cách Duolingo: có mascot đồng xu, hệ thống tim, XP, streak, huy hiệu, bảng xếp hạng. Mỗi ngày 5–10 phút, học mà chơi. Toàn bộ được "vibe code" cùng AI agent, và điều khiến tôi muốn viết bài này không phải là chuyện code nhanh đến đâu — mà là **cách tôi giữ cho một dự án vibe-code không biến thành đống hỗn loạn**.',
      },
      { type: "p", text: "Đây là quy trình của tôi." },

      { type: "h2", text: "1. Bắt đầu từ ý tưởng, không phải từ code" },
      {
        type: "p",
        text: "Ý tưởng XuXu xuất phát từ một niềm tin đơn giản: hiểu biết tài chính nên được dạy sớm, dễ tiếp cận, và phải *vui*. Đối tượng không chỉ là trẻ em mà là mọi người — người trẻ, phụ huynh, ai muốn hiểu về tiền. Cảm hứng là Duolingo: chia nhỏ kiến thức thành mini-game, thưởng XP, giữ streak để tạo thói quen.",
      },
      {
        type: "p",
        text: 'Thay vì lao vào code, tôi viết ra **nguyên tắc sản phẩm** trước: đời thường, tiếng Việt, ngữ cảnh Việt Nam; trung lập và an toàn — không khuyến nghị đầu tư cụ thể, không hứa lợi nhuận, tài sản số phải nhắc rủi ro, nội dung phù hợp trẻ em. Những nguyên tắc này về sau trở thành "ràng buộc cứng" mà tôi yêu cầu AI tuân theo trong từng dòng nội dung nó sinh ra. Khi vibe code, AI sẽ làm *đúng những gì bạn để nó tự suy diễn* — nên việc chốt nguyên tắc từ đầu chính là cách bạn lái con thuyền.',
      },

      { type: "h2", text: "2. Stack gọn, source trên GitHub, deploy bằng Vercel" },
      { type: "p", text: "Tôi cố tình chọn stack tối giản để không phải bảo trì quá nhiều:" },
      {
        type: "list",
        items: [
          "**Next.js 16 (App Router) + React 18** cho frontend",
          "**Firebase** (Authentication + Firestore) cho auth và dữ liệu",
          "**Tailwind + inline styles** cho UI",
          "**Anthropic Claude SDK** cho pipeline sinh nội dung bài học",
          "**Vercel** cho hosting",
        ],
      },
      {
        type: "p",
        text: "Luồng vận hành rất thẳng: code đẩy lên **GitHub**, mỗi lần push lên nhánh main thì **Vercel tự build và deploy**. Không có CI/CD phức tạp, không server tự quản. Tôi push, Vercel lo phần còn lại, và xuxu.thanhmam.com cập nhật.",
      },
      {
        type: "p",
        text: "Một cái bẫy khác: **Firestore rules không tự deploy qua Vercel**. Mỗi lần đổi firestore.rules tôi phải deploy thủ công bằng firebase deploy --only firestore:rules. Đây đúng kiểu lỗi mà bạn chỉ gặp một lần, mất nửa ngày debug, rồi thề sẽ ghi lại — nên tôi ghi lại thật.",
      },

      { type: "h2", text: "3. Vấn đề thật của vibe code: tài liệu trôi khỏi thực tế" },
      {
        type: "p",
        text: 'Khi build cùng AI, bạn đi rất nhanh. Nhưng tốc độ đó có mặt trái: sau vài chục lần lặp, **tài liệu và code bắt đầu nói hai chuyện khác nhau**. README ghi một bảng màu, file design system ghi bảng khác. Tính năng được mô tả ở ba nơi với ba phiên bản hơi lệch. AI đọc nhầm một file cũ và "sửa giúp" theo thông tin sai.',
      },
      {
        type: "p",
        text: "Tôi giải quyết bằng nguyên tắc **Single Source of Truth (SSOT)**: mỗi chủ đề chỉ có **đúng một file sở hữu** nội dung, các file khác chỉ được *link tới*, tuyệt đối không sao chép lại.",
      },
      { type: "p", text: "Bản đồ tài liệu của tôi:" },
      {
        type: "list",
        items: [
          "README.md — tổng quan, stack, quick start, cấu trúc thư mục",
          "PROJECT.md — spec sản phẩm, schema dữ liệu Firestore, monetization, roadmap",
          "docs/DESIGN_SYSTEM.md — màu, typography, component, motif",
          "docs/FEATURES.md — tính năng, màn hình, luồng người dùng",
          "docs/CONTENT.md — taxonomy bài học và schema câu hỏi",
          "docs/AI_AGENTS.md — pipeline AI sinh nội dung",
          "CHANGELOG.md — lịch sử thay đổi",
        ],
      },
      {
        type: "p",
        text: 'Quy tắc rất cụ thể: khi một thông tin đã có SSOT, ở nơi khác **chỉ viết một dòng kèm link**. README không liệt kê lại bảng màu — nó chỉ ghi "Design system: xem docs/DESIGN_SYSTEM.md". Nhờ vậy, khi tôi đổi một token màu, tôi chỉ sửa **đúng một chỗ**, và không bao giờ có hai phiên bản chỏi nhau.',
      },

      { type: "h2", text: '4. AGENTS.md — bản "giao kèo" cho AI' },
      {
        type: "p",
        text: "Đây là mảnh ghép tôi tâm đắc nhất. Tôi viết một file AGENTS.md đóng vai **contract bắt buộc** cho mọi AI agent (Claude Code, Cursor, Copilot…) và cả người tham gia. Mở đầu file là dòng:",
      },
      {
        type: "quote",
        text: "Đọc trước khi làm bất cứ việc gì. Vi phạm các rule dưới đây = thay đổi không được chấp nhận.",
      },
      { type: "p", text: "Trong đó tôi quy định:" },
      {
        type: "list",
        items: [
          "**Mandatory reading**: định đụng UI thì phải đọc design system; thêm tính năng thì đọc features + project spec; sửa nội dung thì đọc content. Không đọc = không đủ ngữ cảnh.",
          '**Strictly follow**: chỉ dùng token màu đã định, không tự chế màu; nút phải theo motif "3D press"; không thêm thư viện lớn mới nếu chưa cập nhật spec.',
          "Nếu một file mâu thuẫn với code thực tế: **dừng lại và báo, đừng tự đoán**.",
        ],
      },
      {
        type: "p",
        text: 'Tôi còn thêm CLAUDE.md chỉ làm một việc: trỏ về AGENTS.md. Vậy là dù agent vào dự án qua cửa nào, nó cũng bị dẫn về đúng bộ luật. Kết quả: AI ngừng "sáng tạo" lung tung và bắt đầu hành xử như một thành viên tuân thủ quy ước.',
      },

      { type: "h2", text: "5. Versioning & changelog: kỷ luật để không phá lịch sử" },
      {
        type: "p",
        text: "Mỗi thay đổi đáng kể, tôi **thêm một mục mới lên đầu CHANGELOG.md** — và tuyệt đối **không xóa, không viết lại** mục cũ. Lịch sử được giữ trọn vẹn. Tôi đánh version theo semver: tính năng mới tăng MINOR, sửa lỗi nhỏ tăng PATCH, thay đổi phá vỡ tăng MAJOR. Hiện XuXu đang ở 0.6.5.",
      },
      {
        type: "p",
        text: 'Điều quan trọng là quy tắc "**cùng một thay đổi, cập nhật luôn SSOT bị ảnh hưởng**". Thêm một màn hình thì trong cùng commit phải cập nhật docs/FEATURES.md *và* CHANGELOG.md. Doc không bao giờ được phép trôi sau code. Tôi đóng gói tất cả thành một checklist cuối mỗi tác vụ: đã đọc SSOT chưa, code đúng design system chưa, đã cập nhật đúng SSOT chưa, đã thêm changelog + tăng version chưa, đổi rules thì đã ghi chú deploy thủ công chưa.',
      },
      {
        type: "p",
        text: "Nhìn vào CHANGELOG.md bây giờ, tôi đọc lại được toàn bộ hành trình: từ bỏ phân loại theo nhóm tuổi sang chủ đề + cấp độ, thêm cửa hàng sách, ra mắt tính năng cá nhân hóa lộ trình, sửa cái nút mobile bị trôi vì một transform CSS… Mỗi dòng là một quyết định có ngày tháng.",
      },

      { type: "h2", text: "Bài học lớn nhất" },
      {
        type: "p",
        text: 'Vibe code không phải là "để AI làm hết". Nó là **bạn thiết kế ràng buộc, AI thực thi trong ràng buộc đó**. Phần code AI làm rất nhanh; phần khiến dự án sống được lâu dài là kiến trúc tài liệu: SSOT để không trùng lặp, AGENTS.md để áp luật, changelog kỷ luật để không mất lịch sử.',
      },
      {
        type: "p",
        text: "Tôi build XuXu để dạy người ta về tiền. Nhưng chính nó lại dạy tôi rằng: trong thời đại AI, người biết **quản trị ngữ cảnh** mới là người cầm lái.",
      },
      {
        type: "p",
        text: "*XuXu đang chạy tại xuxu.thanhmam.com — học tài chính, mỗi ngày 5–10 phút. 🟡*",
      },
    ],
  },
];

export function getArticle(slug) {
  return ARTICLES.find((a) => a.slug === slug) || null;
}

export function formatArticleDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString("vi-VN", { day: "numeric", month: "long", year: "numeric" });
}
