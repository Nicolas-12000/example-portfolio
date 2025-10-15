"use client";

import Link from 'next/link';

type LinkItem = { label: string; href: string };
type PortfolioDict = { sections?: { portfolioLinks?: LinkItem[]; portfolioTitle?: string } };

export default function PortfolioLinks({ dict }: { dict?: PortfolioDict }) {
  const links: LinkItem[] = dict?.sections?.portfolioLinks ?? [
    { label: 'Website', href: '#' },
    { label: 'Dribbble', href: '#' },
    { label: 'Behance', href: '#' },
  ];

  return (
    <div className="sm:col-span-2 md:col-span-12 rounded-2xl bg-foreground p-6 md:p-8 lg:p-10 shadow-lg">
      <h3 className="text-white text-base md:text-xl font-bold mb-4">{dict?.sections?.portfolioTitle || 'Portfolio'}</h3>
      <ul className="flex flex-wrap gap-3">
        {links.map((l, i) => (
          <li key={`${l.href ?? '#'}|${l.label ?? ''}|${i}`}>
            <Link
              href={l.href}
              className="inline-flex items-center gap-2 bg-background text-white rounded-lg px-3 md:px-4 py-2 text-xs md:text-sm hover:opacity-90"
              target={l.href.startsWith('http') ? '_blank' : undefined}
              rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
