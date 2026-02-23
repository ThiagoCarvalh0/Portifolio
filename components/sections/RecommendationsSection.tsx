import { recommendations } from '@/data/recommendations';
import { Section, SectionHeader, SectionCard, sectionClasses } from './Section';

export function RecommendationsSection() {
  return (
    <Section id="recomendacoes" aria-labelledby="recommendations-heading">
      <SectionHeader
        id="recommendations-heading"
        title="O que falam de mim no LinkedIn"
        subtitle="./recommendations.log"
      />
      <div className={`grid grid-cols-1 ${sectionClasses.cardGap} md:grid-cols-2`}>
        {recommendations.map((rec) => (
          <SectionCard
            key={rec.author}
            as="article"
            neon
            className="flex flex-col overflow-hidden"
          >
            <div className="flex flex-1 flex-col">
              <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-300 sm:text-slate-400">
                &ldquo;{rec.text}&rdquo;
              </p>
              <footer className={`flex flex-col border-t border-border-dark pt-4 ${sectionClasses.tight}`}>
                <span className="font-semibold text-white">{rec.author}</span>
                <span className="text-xs text-primary">{rec.role}</span>
                <span className="font-mono text-[10px] text-slate-500">
                {rec.date}
              </span>
              </footer>
            </div>
          </SectionCard>
        ))}
      </div>
    </Section>
  );
}
