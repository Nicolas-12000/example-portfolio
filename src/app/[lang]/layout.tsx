import { Lang, languages, defaultLang } from "../i18n/config";
import React from "react";
import "../globals.css";
import LangSetter from "../../components/LangSetter";

type Props = {
  children: React.ReactNode;
  params: Promise<{ lang: string }> | { lang: string };
};

export default async function LangLayout({ children, params }: Props) {
  const raw = (await params) as { lang: string };
  const lang = (languages.includes(raw.lang as Lang) ? (raw.lang as Lang) : defaultLang) as Lang;

  // Do not render <html> / <body> here to avoid hydration mismatch.
  // Use a client-side component to update document.documentElement before hydration.
  return (
    <>
      {/* LangSetter runs on the client to set html lang and theme class */}
      <LangSetter lang={lang} />
      {children}
    </>
  );
}
