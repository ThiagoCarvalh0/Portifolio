import Link from 'next/link';

export function SidebarContent() {
  return (
    <div className="flex flex-col gap-6 p-6 lg:p-8">
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 rounded border border-primary/20 bg-primary/10 px-2 py-1">
          <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary">
            Disponível para contratação
          </span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-white">
          Thiago Carvalho
        </h1>
        <p className="font-mono text-sm text-primary">Front-End Developer</p>
      </div>

      <div className="flex flex-col gap-3 border-t border-border-dark pt-4">
        <a
          className="group flex items-center gap-3 text-slate-400 transition-colors hover:text-white"
          href="mailto:webdevthiagocarvalho@gmail.com"
        >
          <span className="material-symbols-outlined text-xl text-primary">
            mail
          </span>
          <span className="truncate font-mono text-sm">
            webdevthiagocarvalho@gmail.com
          </span>
        </a>
        <a
          className="flex items-center gap-3 text-slate-400 transition-colors hover:text-white"
          href="tel:+5583998534001"
        >
          <span className="material-symbols-outlined text-xl text-primary">
            call
          </span>
          <span className="font-mono text-sm">(83) 99853-4001</span>
        </a>
        <Link
          className="flex items-center gap-3 text-slate-400 transition-colors hover:text-white"
          href="https://www.linkedin.com/in/thiago-carvalho-ss"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="material-symbols-outlined text-xl text-primary">
            share
          </span>
          <span className="font-mono text-sm">LinkedIn Profile</span>
        </Link>
        <div className="flex items-center gap-3 text-slate-400">
          <span className="material-symbols-outlined text-xl text-primary">
            location_on
          </span>
          <span className="font-mono text-sm">Bairro Novo - Guarabira - PB</span>
        </div>
      </div>

      <div className="space-y-4 pt-6">
        <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-slate-500">
          Resumo para recrutadores
        </h2>
        <div className="space-y-3">
          <div className="rounded-lg border border-border-dark bg-background-dark/50 p-4">
            <span className="text-lg font-bold text-primary">
              SEO em VTEX
            </span>
            <p className="mt-1 text-xs text-slate-400">
              Melhoria relevante na indexabilidade de três lojas, com impacto
              direto em ranqueamento e vendas.
            </p>
          </div>
          <div className="rounded-lg border border-border-dark bg-background-dark/50 p-4">
            <span className="text-lg font-bold text-white">
              Segurança & performance
            </span>
            <p className="mt-1 text-xs text-slate-400">
              Autenticação unificada, prevenção de fraudes e Web Vitals.
            </p>
          </div>
          <div className="rounded-lg border border-border-dark bg-background-dark/50 p-4">
            <span className="text-lg font-bold text-white">Stack & método</span>
            <p className="mt-1 text-xs text-slate-400">
              React.js, TypeScript, Next.js, Tailwind CSS, Scrum, Kanban e
              Git/GitHub.
            </p>
          </div>
        </div>
      </div>

      <a
        className="mt-4 flex items-center justify-center gap-2 rounded bg-primary py-3 px-6 font-bold text-background-dark shadow-lg transition-all hover:bg-primary-dark"
        href="mailto:webdevthiagocarvalho@gmail.com"
      >
        <span className="material-symbols-outlined">send</span>
        Diagnóstico para contratação
      </a>
    </div>
  );
}
