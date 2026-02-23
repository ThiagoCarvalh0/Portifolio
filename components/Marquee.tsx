'use client';

import { technologies } from '@/data/technologies';

function TechStrip() {
  return (
    <div className="flex shrink-0 items-center gap-10 pr-10">
      {technologies.map(({ name, Icon }) => (
        <div
          key={name}
          className="flex shrink-0 items-center gap-3 rounded-xl border border-border-dark/80 bg-surface-dark/80 px-4 py-2.5 transition-colors hover:border-primary/40 hover:bg-surface-dark"
        >
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Icon className="text-lg" aria-hidden />
          </div>
          <span className="whitespace-nowrap font-mono text-sm font-medium text-slate-300">
            {name}
          </span>
        </div>
      ))}
    </div>
  );
}

export function Marquee() {
  return (
    <section
      className="relative w-full overflow-hidden border-y border-border-dark bg-surface-dark/50 py-5"
      aria-label="Tecnologias"
    >
      <div className="flex w-full overflow-hidden">
        <div className="flex shrink-0 animate-marquee items-center">
          <TechStrip />
          <TechStrip />
        </div>
      </div>
    </section>
  );
}
