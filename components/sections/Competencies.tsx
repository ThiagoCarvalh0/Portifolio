import { Section, SectionHeader, SectionCard, sectionClasses } from './Section';

const deliverableGroups = [
  {
    icon: 'code' as const,
    title: 'Front-end moderno',
    items: [
      'Interfaces web com React.js e Next.js integradas a APIs REST',
      'Modernização de portais e CMS legado com TypeScript, Next.js e Tailwind CSS',
      'Aplicações SSG e SSR e desenvolvimento responsivo mobile-first',
      'Componentes reutilizáveis (carrosséis, layouts) e estilização com Sass e Bootstrap',
    ],
  },
  {
    icon: 'trending_up' as const,
    title: 'SEO e performance',
    items: [
      'Otimização de SEO em lojas VTEX com aumento na indexabilidade, ranqueamento e vendas',
      'Uso de Web Vitals para análise de desempenho das páginas',
      'Revisão da qualidade do código e conformidade com boas práticas',
    ],
  },
  {
    icon: 'palette' as const,
    title: 'UI/UX e protótipos',
    items: [
      'Trabalho com time de UI/UX para transformar protótipos (Figma) em interfaces funcionais',
      'Identificação e correção de bugs visuais (renderização, CSS3, HTML5)',
      'Foco em experiência do usuário e comunicação visual do produto',
    ],
  },
  {
    icon: 'lock' as const,
    title: 'Autenticação e integração',
    items: [
      'Integração de autenticação e autorização com Keycloak: login unificado, segurança e identidade visual consistente',
      'Desenvolvimento de features em temas Front-End customizados (Keycloak, HTML, CSS, JS)',
      'Fluxos de autenticação completos em sistemas web (ex.: Context API)',
    ],
  },
  {
    icon: 'verified' as const,
    title: 'Regras de negócio e qualidade',
    items: [
      'Implementação de regras para prevenção de fraudes e avaliação de riscos do código',
      'Versionamento e controle de código com Git e GitHub',
      'Metodologias ágeis (Scrum, Kanban) para gerenciamento de tarefas e entregáveis',
      'Levantamento de requisitos e melhorias contínuas nos processos',
    ],
  },
];

export function Competencies() {
  return (
    <Section id="entrego" aria-labelledby="competencies-heading">
      <SectionHeader
        id="competencies-heading"
        title="O que entrego"
        subtitle="./skills_matrix.json"
      />
      <div className={`grid grid-cols-1 ${sectionClasses.cardGap} md:grid-cols-2 lg:grid-cols-3`}>
        {deliverableGroups.map(({ icon, title, items }) => (
          <SectionCard
            key={title}
            neon
            className="flex flex-col"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <span className="material-symbols-outlined text-xl">{icon}</span>
              </div>
              <h3 className="text-base font-bold text-white">{title}</h3>
            </div>
            <ul className={`space-y-3 text-sm leading-relaxed text-slate-300 sm:text-slate-400 ${sectionClasses.tight}`}>
              {items.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="material-symbols-outlined mt-0.5 shrink-0 text-xs text-primary">
                    check_circle
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </SectionCard>
        ))}
      </div>
    </Section>
  );
}
