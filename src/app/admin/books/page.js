"use client";

import { useEffect, useState } from "react";
import { BOOKS, discountPercent, formatVND } from "@/data/books";
import {
  getBookOverrides,
  getBookExtras,
  saveBookOverride,
  saveBookExtra,
  removeBookExtra,
  mergeBooks,
  useFirestore,
} from "@/lib/admin";
import BookCover from "@/components/BookCover";

const EMPTY = {
  id: "",
  title: "",
  author: "",
  emoji: "📘",
  coverUrl: "",
  cover: { from: "#9FC6FF", to: "#3457B2", ink: "#0A2150" },
  price: 0,
  originalPrice: 0,
  tagline: "",
  summary: "",
  highlights: "",
  shopeeUrl: "https://shopee.vn/",
};

function toFormHighlights(arr) {
  return Array.isArray(arr) ? arr.join("\n") : arr || "";
}

export default function AdminBooksPage() {
  const [overrides, setOverrides] = useState({});
  const [extras, setExtras] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [editing, setEditing] = useState(null); // {book, isExtra}

  const reload = async () => {
    const [o, e] = await Promise.all([getBookOverrides(), getBookExtras()]);
    setOverrides(o);
    setExtras(e);
    setLoaded(true);
  };

  useEffect(() => {
    reload();
  }, []);

  const merged = mergeBooks(BOOKS, overrides, extras);
  const hiddenStatic = BOOKS.filter((b) => overrides[b.id]?.hidden);

  const isExtraId = (id) => extras.some((e) => e.id === id);

  const openEdit = (book) => {
    setEditing({
      form: { ...EMPTY, ...book, highlights: toFormHighlights(book.highlights) },
      isExtra: isExtraId(book.id),
      isNew: false,
    });
  };

  const openNew = () => {
    setEditing({ form: { ...EMPTY, id: `book-${Date.now()}` }, isExtra: true, isNew: true });
  };

  const save = async () => {
    const f = editing.form;
    const payload = {
      ...f,
      price: Number(f.price) || 0,
      originalPrice: Number(f.originalPrice) || 0,
      highlights: f.highlights ? f.highlights.split("\n").map((s) => s.trim()).filter(Boolean) : [],
    };
    if (editing.isExtra) {
      await saveBookExtra(payload);
    } else {
      // Sách tĩnh: chỉ lưu các trường thay đổi (ghi đè)
      await saveBookOverride(f.id, {
        title: payload.title,
        author: payload.author,
        emoji: payload.emoji,
        coverUrl: payload.coverUrl,
        price: payload.price,
        originalPrice: payload.originalPrice,
        tagline: payload.tagline,
        summary: payload.summary,
        highlights: payload.highlights,
        shopeeUrl: payload.shopeeUrl,
      });
    }
    setEditing(null);
    reload();
  };

  const toggleHidden = async (book) => {
    if (isExtraId(book.id)) {
      await saveBookExtra({ ...book, hidden: !book.hidden });
    } else {
      await saveBookOverride(book.id, { hidden: !overrides[book.id]?.hidden });
    }
    reload();
  };

  const del = async (id) => {
    if (!confirm("Xoá sách này khỏi cửa hàng?")) return;
    await removeBookExtra(id);
    reload();
  };

  const set = (k, v) => setEditing((s) => ({ ...s, form: { ...s.form, [k]: v } }));
  const setCover = (k, v) => setEditing((s) => ({ ...s, form: { ...s.form, cover: { ...s.form.cover, [k]: v } } }));

  return (
    <div className="max-w-5xl">
      <div className="flex items-center justify-between mb-1">
        <h1 className="text-2xl font-black text-gray-800">📚 Cửa hàng sách</h1>
        <button onClick={openNew} className="px-4 py-2.5 rounded-2xl font-black text-white bg-[#16C172] shadow-[0_4px_0_#0E9E5C] active:translate-y-[3px] active:shadow-none transition-all">
          + Thêm sách
        </button>
      </div>
      <p className="text-sm text-gray-500 mb-6">Quản lý sách tham khảo bán qua link Shopee affiliate</p>

      {!useFirestore() && (
        <div className="mb-6 bg-amber-50 border border-amber-200 rounded-2xl p-4 text-sm text-amber-800">
          ⚠️ <b>Chế độ demo</b> — thay đổi lưu tạm trên trình duyệt (localStorage). Cấu hình Firebase để lưu vĩnh viễn.
        </div>
      )}

      {!loaded ? (
        <div className="text-gray-400">Đang tải…</div>
      ) : (
        <div className="grid sm:grid-cols-2 gap-4">
          {[...merged, ...hiddenStatic].map((book) => {
            const pct = discountPercent(book);
            return (
              <div key={book.id} className={`bg-white rounded-3xl shadow-sm p-4 flex gap-4 ${book.hidden ? "opacity-50" : ""}`}>
                <BookCover book={book} width={70} />
                <div className="flex-1 min-w-0">
                  <div className="font-black text-gray-800 leading-tight">{book.title}</div>
                  <div className="text-xs text-gray-400 font-bold mb-1">{book.author}</div>
                  <div className="text-sm font-black text-emerald-600">
                    {formatVND(book.price)}
                    {pct > 0 && <span className="text-xs text-gray-300 line-through font-bold ml-2">{formatVND(book.originalPrice)}</span>}
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <button onClick={() => openEdit(book)} className="text-xs font-bold px-3 py-1.5 rounded-xl bg-gray-100 text-gray-700 hover:bg-gray-200">Sửa</button>
                    <button onClick={() => toggleHidden(book)} className="text-xs font-bold px-3 py-1.5 rounded-xl bg-amber-50 text-amber-700 hover:bg-amber-100">{book.hidden ? "Hiện" : "Ẩn"}</button>
                    <a href={`/shop/book/${book.id}`} target="_blank" rel="noopener noreferrer" className="text-xs font-bold px-3 py-1.5 rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-100">Xem trang →</a>
                    {isExtraId(book.id) && (
                      <button onClick={() => del(book.id)} className="text-xs font-bold px-3 py-1.5 rounded-xl bg-red-50 text-red-600 hover:bg-red-100">Xoá</button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Edit modal */}
      {editing && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4" onClick={(e) => e.target === e.currentTarget && setEditing(null)}>
          <div className="bg-white rounded-3xl w-full max-w-lg max-h-[90vh] overflow-y-auto p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-black text-gray-800">{editing.isNew ? "Thêm sách mới" : "Sửa sách"}</h2>
              <button onClick={() => setEditing(null)} className="text-gray-400 font-black text-xl">✕</button>
            </div>
            <div className="space-y-3">
              <Field label="Tên sách"><input className={inp} value={editing.form.title} onChange={(e) => set("title", e.target.value)} /></Field>
              <Field label="Tác giả"><input className={inp} value={editing.form.author} onChange={(e) => set("author", e.target.value)} /></Field>
              <div className="grid grid-cols-2 gap-3">
                <Field label="Giá (₫)"><input type="number" className={inp} value={editing.form.price} onChange={(e) => set("price", e.target.value)} /></Field>
                <Field label="Giá gốc (₫)"><input type="number" className={inp} value={editing.form.originalPrice} onChange={(e) => set("originalPrice", e.target.value)} /></Field>
              </div>
              <Field label="Link Shopee affiliate"><input className={inp} value={editing.form.shopeeUrl} onChange={(e) => set("shopeeUrl", e.target.value)} /></Field>
              <Field label="Ảnh bìa (URL — để trống dùng bìa CSS)"><input className={inp} value={editing.form.coverUrl} onChange={(e) => set("coverUrl", e.target.value)} placeholder="https://..." /></Field>
              <div className="grid grid-cols-3 gap-3">
                <Field label="Emoji"><input className={inp} value={editing.form.emoji} onChange={(e) => set("emoji", e.target.value)} /></Field>
                <Field label="Màu bìa 1"><input type="color" className="w-full h-10 rounded-xl border border-gray-200" value={editing.form.cover?.from || "#3457B2"} onChange={(e) => setCover("from", e.target.value)} /></Field>
                <Field label="Màu bìa 2"><input type="color" className="w-full h-10 rounded-xl border border-gray-200" value={editing.form.cover?.to || "#0A2150"} onChange={(e) => setCover("to", e.target.value)} /></Field>
              </div>
              <Field label="Tagline (1 dòng hook)"><input className={inp} value={editing.form.tagline} onChange={(e) => set("tagline", e.target.value)} /></Field>
              <Field label="Giới thiệu"><textarea className={inp} rows={4} value={editing.form.summary} onChange={(e) => set("summary", e.target.value)} /></Field>
              <Field label="Ý chính (mỗi dòng 1 ý)"><textarea className={inp} rows={3} value={editing.form.highlights} onChange={(e) => set("highlights", e.target.value)} /></Field>
            </div>
            <div className="flex gap-3 mt-5">
              <button onClick={() => setEditing(null)} className="flex-1 py-3 rounded-2xl font-black text-gray-600 bg-gray-100">Huỷ</button>
              <button onClick={save} className="flex-1 py-3 rounded-2xl font-black text-white bg-emerald-500 active:scale-95 transition-transform">Lưu</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const inp = "w-full border border-gray-200 rounded-xl px-3 py-2 text-sm font-bold text-gray-800 focus:outline-none focus:border-emerald-400";

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="block text-xs font-bold text-gray-500 mb-1">{label}</span>
      {children}
    </label>
  );
}
