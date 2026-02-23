import { Section, SectionHeader, SectionCard, sectionClasses } from './Section';

const experiences = [
  {
    period: 'Out/2025 - atual',
    periodClass: 'bg-primary/10 text-primary',
    role: 'Desenvolvedor',
    company: 'Benner Sistemas',
    tagline:
      'Soluções em tecnologia para gestão empresarial. Atuação em produto de RH com stack proprietária.',
    tags: ['React', 'Next.js', 'C#', 'SQL', 'PostgreSQL', 'Oracle', 'HTML', 'CSS', 'RH'],
    highlights: [
      <>
        Desenvolvimento voltado a <span className="text-white">produtos de RH</span>, utilizando
        stack proprietária da empresa.
      </>,
      <>
        Atuação com <span className="text-white">React</span>, <span className="text-white">Next.js</span>,{' '}
        <span className="text-white">C#</span>, <span className="text-white">.NET</span>, HTML e CSS em interfaces e integrações.
      </>,
      <>
        Trabalho com bancos de dados <span className="text-white">SQL</span>,{' '}
        <span className="text-white">PostgreSQL</span> e <span className="text-white">Oracle</span> no contexto
        de sistemas de gestão.
      </>,
    ],
  },
  {
    period: 'Set/2024 - Mai/2025',
    periodClass: 'bg-primary/10 text-primary',
    role: 'Desenvolvedor Front-End Júnior',
    company: 'Compass UOL',
    tagline:
      'Multinacional de tecnologia especializada em transformação digital, soluções em nuvem, IA e engenharia de software.',
    tags: ['React.js', 'VTEX', 'SEO', 'Keycloak', 'Sass', 'Git', 'GitHub', 'Web Vitals'],
    highlights: [
      <>
        Otimização de SEO em três lojas VTEX, com{' '}
        <span className="font-bold text-white">melhoria relevante na indexabilidade</span>{' '}
        das páginas, no ranqueamento e nas vendas.
      </>,
      <>
        Desenvolvimento de novas features em tema Front-End customizado em projeto de
        curto prazo, utilizando <span className="text-white">Keycloak</span>, HTML, CSS e JS.
      </>,
      <>
        Integração de autenticação e autorização entre diversas bases de dados, com
        login unificado, segurança reforçada e identidade visual consistente.
      </>,
      <>
        Implementação de regras de negócio para{' '}
        <span className="text-white">prevenção de fraudes</span> e avaliação de riscos do código.
      </>,
      <>
        Criação de componentes reutilizáveis (carrosséis para exibição de imagens) e
        trabalho com UI/UX para transformar protótipos em interfaces funcionais.
      </>,
      <>
        Identificação e correção de bugs visuais que afetavam a renderização de
        imagens de variantes de produtos e a aplicação correta de classes CSS3 e estruturas HTML5.
      </>,
      <>
        Uso de <span className="text-white">Sass</span> em páginas de produto (e-commerce VTEX),{' '}
        <span className="text-white">Web Vitals</span> para análise de desempenho, revisão de
        qualidade do código e versionamento com Git e GitHub.
      </>,
      <>Metodologias ágeis (Scrum, Kanban) para gerenciamento de tarefas e entregáveis.</>,
    ],
  },
  {
    period: 'Mar/2023 - Set/2024',
    periodClass: 'bg-primary/10 text-primary',
    role: 'Desenvolvedor Full Stack',
    company: 'Btor Soluções Computacionais',
    tagline:
      'Empresa de tecnologia especializada em desenvolvimento de softwares, consultoria em TI e soluções personalizadas para gestão empresarial.',
    tags: ['Next.js', 'TypeScript', 'React.js', 'Angular', '.NET', 'Figma', 'Git', 'Bitbucket'],
    highlights: [
      <>
        Modernização do portal institucional com soluções front-end escaláveis e
        integração do CMS legado a <span className="text-white">TypeScript</span>,{' '}
        <span className="text-white">Next.js</span> e{' '}
        <span className="text-white">Tailwind CSS</span>.
      </>,
      <>
        Criação de interfaces web com <span className="text-white">React.js</span> e APIs REST;
        fluxo de autenticação completo com{' '}
        <span className="text-white">Context API</span> e <span className="text-white">Zustand</span>.
      </>,
      <>
        Desenvolvimento e manutenção de sistema de gestão de licitações para áreas
        jurídicas com Angular, Sass, .NET, VB.NET, SQL e C#.
      </>,
      <>
        Desenvolvimento responsivo mobile-first; protótipos no{' '}
        <span className="text-white">Figma</span> em parceria com designers UI/UX, com
        foco em experiência do usuário e comunicação visual; aplicações SSG e SSR.
      </>,
      <>
        Revisão de qualidade do código, identificação e correção de bugs visuais;
        auxílio no levantamento de requisitos de software.
      </>,
      <>
        Estilização de sistemas legados com <span className="text-white">Bootstrap</span>;
        versionamento com Git e Bitbucket; metodologias ágeis e melhorias contínuas.
      </>,
    ],
  },
  {
    period: 'Ago/2022 - Fev/2023',
    periodClass: 'bg-slate-800 text-slate-400',
    role: 'Analista de Desenvolvedor de Sistema Trainee',
    company: 'Btor Soluções Computacionais',
    tagline: 'Início da atuação em desenvolvimento de software e consultoria em TI.',
    tags: ['Trainee'],
    highlights: [
      <>
        Atuação inicial em desenvolvimento, qualidade de código e metodologias ágeis.
      </>,
    ],
  },
];

export function Experience() {
  return (
    <Section id="experiencia" aria-labelledby="experience-heading">
      <SectionHeader
        id="experience-heading"
        title="Onde atuei"
        subtitle="./deployment_history.log"
      />
      <div className="relative">
        <div
          className="absolute left-[11px] top-0 bottom-0 hidden w-px bg-linear-to-b from-primary/40 via-border-dark to-transparent md:block"
          aria-hidden
        />
        <ul className={`grid grid-cols-1 ${sectionClasses.cardGap} md:gap-8`}>
          {experiences.map((exp) => (
            <li key={`${exp.company}-${exp.period}`} className="relative flex md:gap-8">
              <div
                className="absolute left-0 top-6 z-10 h-6 w-6 shrink-0 rounded-full border-2 border-primary bg-background-dark"
                aria-hidden
              />
              <div className="pl-10 md:pl-12">
                <SectionCard
                  as="article"
                  neon
                  className="overflow-hidden transition-all hover:border-primary/50"
                >
                  <div className={`flex flex-col ${sectionClasses.cardGap} md:flex-row md:items-start md:justify-between`}>
                    <div className="min-w-0 flex-1">
                      <span
                        className={`inline-block rounded px-2 py-1 font-mono text-[10px] font-bold ${exp.periodClass}`}
                      >
                        {exp.period}
                      </span>
                      <h3 className="mt-4 text-lg font-bold text-white sm:text-xl">
                        {exp.role}
                        <span className="text-primary"> @ </span>
                        {exp.company}
                      </h3>
                      <p className="mt-2 text-sm italic leading-snug text-slate-400 sm:text-slate-500">
                        {exp.tagline}
                      </p>
                    </div>
                    <div className={`flex flex-wrap ${sectionClasses.tight}`}>
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded border border-border-dark bg-background-dark/80 px-2 py-1 font-mono text-[10px] text-slate-300 sm:text-slate-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ul className={`mt-6 space-y-4 border-t border-border-dark pt-6 text-sm leading-relaxed text-slate-300 sm:text-slate-400`}>
                    {exp.highlights.map((item, i) => (
                      <li key={i} className={`flex items-start gap-3 ${sectionClasses.tight}`}>
                        <span className="material-symbols-outlined mt-0.5 shrink-0 text-primary">
                          check_circle
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </SectionCard>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
