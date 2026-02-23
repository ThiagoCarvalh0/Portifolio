import { Section, SectionCard, SectionSubheading, sectionClasses } from './Section';

export function AcademicVolunteer() {
  return (
    <Section
      id="formacao"
      aria-label="Formação, cursos e voluntariado"
      className={`grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2 md:grid-rows-[auto_1fr_1fr] md:items-stretch ${sectionClasses.cardGap}`}
    >
      {/* Linha 1: títulos */}
      <SectionSubheading className="md:pt-0">Formação acadêmica</SectionSubheading>
      <SectionSubheading className="md:pt-0">
        Informações adicionais · Voluntariado
      </SectionSubheading>

      {/* Linha 2: card formação (esq) | card AID (dir) — mesma altura */}
      <SectionCard className="flex min-h-0 flex-col">
        <p className="font-mono text-xs text-primary">2024 · Graduação</p>
        <h4 className="mt-1 font-bold text-white">Ciência da Computação</h4>
        <p className="mt-1 text-sm text-slate-300 sm:text-slate-400">
          Centro Universitário de João Pessoa - UNIPÊ
        </p>
      </SectionCard>
      <SectionCard className="flex min-h-0 flex-col">
        <h4 className="text-sm font-bold text-white">
          AID - Apoio à Inclusão Digital
        </h4>
        <p className="mt-1 flex-1 text-xs leading-relaxed text-slate-300 sm:text-slate-400">
          Trabalho voluntário com reaproveitamento de peças de hardware
          descartadas para montagem e doação de computadores à comunidade.
        </p>
      </SectionCard>

      {/* Linha 3: card cursos (esq) | card Fábrica (dir) — mesma altura */}
      <SectionCard className="flex min-h-0 flex-col">
        <h4 className="font-bold text-white">Cursos e qualificações</h4>
        <p className="mt-1 text-sm text-slate-300 sm:text-slate-400">
          Inglês intermediário
        </p>
      </SectionCard>
      <SectionCard className="flex min-h-0 flex-col">
        <h4 className="text-sm font-bold text-white">
          Fábrica de Software
        </h4>
        <p className="mt-1 flex-1 text-xs leading-relaxed text-slate-300 sm:text-slate-400">
          Projeto acadêmico voluntário com desenvolvimento de soluções reais
          para empresas privadas.
        </p>
      </SectionCard>
    </Section>
  );
}
