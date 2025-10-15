'use client';

import Link from 'next/link';
import { Lang, languages } from '@/app/i18n/config';

const FLAGS: Record<string, string> = {
  es: '🇪🇸',
  en: '🇬🇧',
};

export default function LanguageSwitcher({ currentLang }: { currentLang: Lang }) {
  return (
    <div className="lang-switcher" role="navigation" aria-label="Language switcher">
      <div className="lang-group">
        {languages.map((l) => {
          const active = currentLang === l;
          return (
            <Link
              key={l}
              href={`/${l}`}
              className={`lang-btn ${active ? 'active' : ''}`}
              aria-current={active ? 'true' : undefined}
            >
              <span className="flag" aria-hidden>
                {FLAGS[l] ?? '🏳️'}
              </span>
              <span className="lang-label">{l.toUpperCase()}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}