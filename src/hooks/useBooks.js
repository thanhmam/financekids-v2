"use client";

import { useEffect, useState } from "react";
import { BOOKS } from "@/data/books";
import { getBookOverrides, getBookExtras, mergeBooks } from "@/lib/admin";

// Tải danh sách sách đã hợp nhất (catalog tĩnh + admin override/extra).
export function useBooks() {
  const [books, setBooks] = useState(BOOKS);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const [overrides, extras] = await Promise.all([getBookOverrides(), getBookExtras()]);
        setBooks(mergeBooks(BOOKS, overrides, extras));
      } catch {
        setBooks(BOOKS);
      } finally {
        setLoaded(true);
      }
    })();
  }, []);

  return { books, loaded };
}
