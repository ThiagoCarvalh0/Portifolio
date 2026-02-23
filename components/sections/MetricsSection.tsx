import { Section } from './Section';

const metrics = [
  { value: '3+', label: 'Anos de experiência' },
  { value: 'SEO', label: 'Impacto em vendas (VTEX)' },
  { value: 'Web Vitals', label: 'Performance & indexação' },
  { value: '100%', label: 'Foco em resultado' },
];

export function MetricsSection() {
  return (
    <Section aria-labelledby="metrics-heading" className="!space-y-0">
      <h2 id="metrics-heading" className="sr-only">
        Métricas e resultados
      </h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
        {metrics.map(({ value, label }) => (
          <div
            key={label}
            className="rounded-xl border border-border-dark bg-surface-dark/80 p-6 text-center transition-colors hover:border-primary/30"
          >
            <p className="text-2xl font-bold text-primary sm:text-3xl md:text-4xl">
              {value}
            </p>
            <p className="mt-1 font-mono text-xs uppercase tracking-wider text-slate-400 sm:text-[10px]">
              {label}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
