import { Section, SectionCard, sectionClasses } from './Section';

export function Hero() {
  return (
    <Section aria-labelledby="hero-heading">
      <SectionCard className="relative overflow-hidden">
        <div className="absolute right-0 top-0 p-6 opacity-5" aria-hidden>
          <span className="material-symbols-outlined text-7xl sm:text-9xl">
            terminal
          </span>
        </div>
        <h2
          id="hero-heading"
          className="mb-6 text-2xl font-bold text-white sm:text-4xl lg:text-5xl"
        >
          Otimizando a Web,{' '}
          <span className="text-primary">um byte de cada vez.</span>
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg sm:text-slate-400">
          Desenvolvedor Front-End com atuação em empresas de tecnologia e
          transformação digital. Experiência na condução de rotinas de
          desenvolvimento e manutenção de interfaces responsivas, com{' '}
          <span className="font-bold text-white">otimização de SEO</span> com
          melhoria relevante na indexabilidade de páginas e impacto no
          ranqueamento e vendas,{' '}
          <span className="font-bold text-white">segurança de autenticação</span>
          , prevenção de fraudes e performance. Conhecimento em React.js,
          TypeScript, Next.js, Tailwind CSS, metodologias ágeis (Scrum, Kanban)
          e Git/GitHub.
        </p>
        <div className={`mt-8 grid grid-cols-2 md:grid-cols-4 ${sectionClasses.cardGap}`}>
          {[
            { value: 'Performance', label: 'Web Vitals' },
            { value: 'Indexação', label: 'SEO em VTEX' },
            { value: 'Acessibilidade', label: 'ARIA & boas práticas' },
            { value: 'Mobile-first', label: 'Responsivo' },
          ].map(({ value, label }) => (
            <div
              key={label}
              className={`${sectionClasses.cardBase} ${sectionClasses.cardPadding} text-center`}
            >
              <p className="text-base font-bold text-primary sm:text-lg">
                {value}
              </p>
              <p className="font-mono text-xs uppercase text-slate-400 sm:text-[10px] sm:text-slate-500">
                {label}
              </p>
            </div>
          ))}
        </div>
      </SectionCard>
    </Section>
  );
}
