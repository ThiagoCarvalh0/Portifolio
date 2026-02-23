'use client';

import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#experiencia', label: 'Experiência' },
  { href: '#recomendacoes', label: 'Recomendações' },
  { href: '#entrego', label: 'O que entrego' },
  { href: '#contato', label: 'Contato' },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="fixed left-0 right-0 top-0 z-50 border-b border-border-dark/80 bg-background-dark/90 backdrop-blur-md"
      role="banner"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="#hero"
          className="flex items-center gap-2 font-bold text-white transition-opacity hover:opacity-90"
          onClick={() => setMenuOpen(false)}
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
          <span className="font-mono text-sm uppercase tracking-wider sm:text-base">
            Thiago.DEV
          </span>
        </Link>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Navegação principal"
        >
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="font-mono text-xs text-slate-400 transition-colors hover:text-primary sm:text-sm"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="mailto:webdevthiagocarvalho@gmail.com"
            className="hidden rounded bg-primary px-4 py-2.5 font-mono text-xs font-bold text-background-dark transition-colors hover:bg-primary-dark sm:inline-block"
          >
            Contato
          </a>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border-dark text-slate-400 transition-colors hover:border-primary hover:text-primary md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            <span className="material-symbols-outlined">
              {menuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          className="border-t border-border-dark bg-background-dark/98 backdrop-blur-md md:hidden"
          role="dialog"
          aria-label="Menu mobile"
        >
          <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Navegação mobile">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="rounded-lg px-4 py-3 font-mono text-sm text-slate-300 transition-colors hover:bg-surface-dark hover:text-primary"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
            <a
              href="mailto:webdevthiagocarvalho@gmail.com"
              className="mt-2 rounded-lg bg-primary px-4 py-3 text-center font-mono text-sm font-bold text-background-dark"
              onClick={() => setMenuOpen(false)}
            >
              Contato
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
