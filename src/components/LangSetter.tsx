"use client";

import { useLayoutEffect } from "react";

export default function LangSetter({ lang }: { lang: string }) {
  useLayoutEffect(() => {
    try {
      // set html lang attribute
      document.documentElement.lang = lang;

      // Initialize theme from localStorage or prefers-color-scheme
      const saved = localStorage.getItem("theme");
      if (saved === "dark" || saved === "light") {
        document.documentElement.classList.remove(saved === "dark" ? "light" : "dark");
        document.documentElement.classList.add(saved === "dark" ? "dark" : "light");
        return;
      }

      // fallback to prefers-color-scheme
      const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      document.documentElement.classList.add(prefersDark ? "dark" : "light");
    } catch (e) {
      // noop
    }
  }, [lang]);

  return null;
}
