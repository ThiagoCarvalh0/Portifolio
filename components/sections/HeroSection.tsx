'use client';

import LetterGlitch from '@/components/LetterGlitch';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-dvh flex-col justify-center px-4 py-24 sm:px-6 lg:px-8"
      aria-labelledby="hero-heading"
    >
      {/* LetterGlitch apenas no hero */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <LetterGlitch
          glitchSpeed={90}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
          opacity={0.35}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary sm:text-sm">
          Front-End Developer
        </p>
        <h1
          id="hero-heading"
          className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Interfaces rápidas, seguras e{' '}
          <span className="text-primary">otimizadas para resultado.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg md:text-xl">
          Especialista em React, Next.js e TypeScript. SEO em VTEX com impacto
          em ranqueamento e vendas, autenticação segura, Web Vitals e
          prevenção de fraudes.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="mailto:webdevthiagocarvalho@gmail.com"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 font-mono text-sm font-bold text-background-dark transition-colors hover:bg-primary-dark"
          >
            <span className="material-symbols-outlined text-lg">send</span>
            Falar comigo
          </a>
          <Link
            href="#sobre"
            className="inline-flex items-center gap-2 rounded-lg border border-border-dark px-6 py-3.5 font-mono text-sm font-medium text-slate-300 transition-colors hover:border-primary hover:text-primary"
          >
            Ver o que faço
          </Link>
        </div>
      </div>
    </section>
  );
}
