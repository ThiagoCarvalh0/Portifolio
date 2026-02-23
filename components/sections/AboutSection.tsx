import Image from 'next/image';
import { Section, SectionHeader } from './Section';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export function AboutSection() {
  return (
    <Section id="sobre" aria-labelledby="about-heading">
      <SectionHeader
        id="about-heading"
        title="Sobre"
        subtitle="./about.md"
      />
      <div className="grid gap-8 md:grid-cols-[minmax(200px,320px)_1fr] md:items-stretch">
        <div className="flex justify-center md:block md:min-h-0">
          <div className="relative h-56 w-full min-h-48 overflow-hidden rounded-2xl border border-border-dark bg-surface-dark sm:h-64 md:h-full md:min-h-[260px]">
            <Image
              src={`${basePath}/about.webp`}
              alt="Thiago Carvalho"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 320px, 100vw"
              unoptimized
            />
          </div>
        </div>
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-white sm:text-2xl">
            Thiago Carvalho
          </h3>
          <p className="text-sm leading-relaxed text-slate-300 sm:text-base sm:text-slate-400">
            Desenvolvedor Front-End focado em entregar impacto: otimização de
            SEO em lojas VTEX com melhoria direta em indexabilidade,
            ranqueamento e vendas; autenticação unificada e segura; prevenção
            de fraudes; e performance (Web Vitals). Atuo com React.js,
            TypeScript, Next.js e Tailwind CSS em times ágeis.
          </p>
          <p className="text-sm leading-relaxed text-slate-300 sm:text-base sm:text-slate-400">
            Formado em Ciência da Computação (UNIPÊ), com experiência em
            Compass UOL e Btor Soluções. Voluntário em inclusão digital e
            projetos de software para a comunidade.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="mailto:webdevthiagocarvalho@gmail.com"
              className="inline-flex items-center gap-2 rounded-lg border border-border-dark px-4 py-2 font-mono text-xs text-slate-400 transition-colors hover:border-primary hover:text-primary"
            >
              <span className="material-symbols-outlined text-base">mail</span>
              E-mail
            </a>
            <a
              href="https://www.linkedin.com/in/thiago-carvalho-ss"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border-dark px-4 py-2 font-mono text-xs text-slate-400 transition-colors hover:border-primary hover:text-primary"
            >
              <span className="material-symbols-outlined text-base">share</span>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
