export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="flex flex-col gap-6 border-t border-border-dark pt-8 font-mono text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:text-[10px] sm:text-slate-500">
      <div className="flex flex-wrap gap-6">
        <span>© {year} THIAGO.DEV</span>
        <a
          href="mailto:webdevthiagocarvalho@gmail.com"
          className="transition-colors hover:text-primary"
        >
          webdevthiagocarvalho@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/thiago-carvalho-ss"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-primary"
        >
          LinkedIn
        </a>
      </div>
      <div className="flex items-center gap-4">
        <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
        <span>Status 200 OK</span>
      </div>
    </footer>
  );
}
