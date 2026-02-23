import { type ReactNode } from 'react';

/**
 * Escala única de espaçamento (Tailwind):
 * - 4 = 1rem (tight: tags, inline)
 * - 6 = 1.5rem (card padding, gaps entre cards/elementos)
 * - 8 = 2rem (dentro da seção entre blocos)
 * - 12 = 3rem (entre seções na página)
 */
const SPACE_TIGHT = 'gap-4';
const SPACE_CARD = 'gap-6';
const SPACE_SECTION = 'space-y-8';
const SPACE_PAGE_SECTIONS = 'space-y-12';
const CARD_PADDING = 'p-6';
const CARD_BASE = 'rounded-xl border border-border-dark bg-surface-dark';

export const sectionClasses = {
  /** Entre seções na página */
  pageSections: SPACE_PAGE_SECTIONS,
  /** Entre itens dentro de uma seção */
  wrapper: SPACE_SECTION,
  card: `${CARD_BASE} ${CARD_PADDING}`,
  cardPadding: CARD_PADDING,
  cardBase: CARD_BASE,
  /** Gap em grids/listas de cards */
  cardGap: SPACE_CARD,
  /** Gap pequeno (header, tags) */
  tight: SPACE_TIGHT,
} as const;

type SectionProps = {
  children: ReactNode;
  id?: string;
  'aria-labelledby'?: string;
  'aria-label'?: string;
  className?: string;
};

export function Section({
  children,
  id,
  'aria-labelledby': ariaLabelledby,
  'aria-label': ariaLabel,
  className = '',
}: SectionProps) {
  const isGrid = className.includes('grid');
  const sectionClassName = isGrid
    ? className.trim()
    : `${SPACE_SECTION} ${className}`.trim();
  return (
    <section
      id={id}
      className={sectionClassName}
      aria-labelledby={ariaLabelledby}
      aria-label={ariaLabel}
    >
      {children}
    </section>
  );
}

type SectionHeaderProps = {
  id: string;
  title: string;
  subtitle?: string;
};

export function SectionHeader({ id, title, subtitle }: SectionHeaderProps) {
  return (
    <div className={`flex flex-col justify-between ${sectionClasses.tight} border-b border-border-dark pb-8 sm:flex-row sm:items-center`}>
      <h2
        id={id}
        className="text-xl font-bold text-white sm:text-2xl"
      >
        {title}
      </h2>
      {subtitle && (
        <span className="font-mono text-xs text-primary">{subtitle}</span>
      )}
    </div>
  );
}

type SectionCardProps = {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'article';
  neon?: boolean;
};

export function SectionCard({
  children,
  className = '',
  as: Component = 'div',
  neon = false,
}: SectionCardProps) {
  return (
    <Component
      className={`${CARD_BASE} ${CARD_PADDING} ${neon ? 'neon-border' : ''} ${className}`.trim()}
    >
      {children}
    </Component>
  );
}

type SectionSubheadingProps = {
  children: ReactNode;
  className?: string;
};

export function SectionSubheading({
  children,
  className = '',
}: SectionSubheadingProps) {
  return (
    <h3
      className={`border-l-4 border-primary pl-4 text-lg font-bold text-white sm:text-xl ${className}`.trim()}
    >
      {children}
    </h3>
  );
}

type SectionGridProps = {
  children: ReactNode;
  cols?: '1' | '2' | '2-4';
  className?: string;
};

export function SectionGrid({
  children,
  cols = '1',
  className = '',
}: SectionGridProps) {
  const gridCols =
    cols === '2'
      ? 'grid-cols-2'
      : cols === '2-4'
        ? 'grid-cols-2 md:grid-cols-4'
        : 'grid-cols-1';
  return (
    <div className={`grid ${gridCols} ${SPACE_CARD} ${className}`.trim()}>
      {children}
    </div>
  );
}
