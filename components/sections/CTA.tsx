import Link from 'next/link';
import { Section } from './Section';

export function CTA() {
  return (
    <Section id="contato" aria-labelledby="cta-heading">
      <div className="rounded-2xl border border-primary/20 bg-surface-dark p-6 text-center">
        <h2
          id="cta-heading"
          className="text-2xl font-bold text-white sm:text-3xl"
        >
          Vamos trabalhar juntos?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-sm text-slate-300 sm:text-base sm:text-slate-400">
          Interfaces rápidas, seguras e otimizadas para resultado. Vamos conversar?
        </p>
        <div className="mt-8 flex flex-col justify-center gap-6 sm:flex-row">
          <a
            className="rounded bg-primary px-8 py-4 font-bold text-background-dark transition-colors hover:bg-primary-dark"
            href="mailto:webdevthiagocarvalho@gmail.com"
          >
            Agendar entrevista
          </a>
          <Link
            className="rounded border border-border-dark px-8 py-4 text-white transition-colors hover:border-primary hover:text-primary"
            href="https://www.linkedin.com/in/thiago-carvalho-ss"
            target="_blank"
            rel="noopener noreferrer"
          >
            Conectar no LinkedIn
          </Link>
        </div>
      </div>
    </Section>
  );
}
