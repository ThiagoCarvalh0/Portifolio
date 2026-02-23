import { technologies } from '@/data/technologies';
import { Section, SectionHeader, sectionClasses } from './Section';

export function Technologies() {
  return (
    <Section id="stack" aria-labelledby="technologies-heading">
      <SectionHeader
        id="technologies-heading"
        title="Stack"
        subtitle="./tech_stack.json"
      />
      <ul className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 ${sectionClasses.cardGap}`}>
        {technologies.map(({ name, Icon }) => (
          <li key={name}>
            <div
              className={`flex items-center ${sectionClasses.tight} rounded-xl border border-border-dark bg-surface-dark p-4 transition-colors hover:border-primary/30`}
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary sm:h-10 sm:w-10">
                <Icon className="text-lg sm:text-xl" aria-hidden />
              </div>
              <span className="truncate font-mono text-xs font-medium text-slate-300 sm:text-sm sm:text-slate-400">
                {name}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
