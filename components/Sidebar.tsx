'use client';

import { useState, useEffect } from 'react';
import { SidebarContent } from './SidebarContent';

export function Sidebar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [drawerOpen]);

  return (
    <>
      {/* Desktop (lg+): sidebar flutuante fixa à esquerda */}
      <aside
        className="hidden lg:flex fixed left-6 top-6 bottom-6 z-20 w-96 flex-col overflow-hidden rounded-2xl border border-border-dark bg-surface-dark shadow-xl sidebar-scroll"
        aria-label="Perfil e contato"
      >
        <div className="flex flex-1 flex-col overflow-y-auto">
          <SidebarContent />
        </div>
      </aside>

      {/* Mobile: header fixo com nome e botão menu */}
      <header className="sticky top-0 z-30 flex lg:hidden items-center justify-between gap-4 border-b border-border-dark bg-surface-dark/95 px-4 py-3 backdrop-blur-sm">
        <div className="flex min-w-0 items-center gap-3">
          <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-primary" />
          <h1 className="truncate text-lg font-bold text-white">
            Thiago Carvalho
          </h1>
        </div>
        <button
          type="button"
          onClick={() => setDrawerOpen(true)}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border-dark text-slate-400 transition-colors hover:border-primary hover:text-primary"
          aria-label="Abrir menu"
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
      </header>

      {/* Mobile: drawer overlay + painel — só monta quando aberto para não pintar overlay em cima da página */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          aria-hidden={false}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/30"
            onClick={() => setDrawerOpen(false)}
            aria-label="Fechar menu"
          />
          <aside
            className="absolute right-0 top-0 bottom-0 z-10 w-full max-w-sm border-l border-border-dark bg-surface-dark shadow-2xl"
            aria-label="Menu de perfil e contato"
          >
            <div className="flex h-full flex-col overflow-y-auto sidebar-scroll">
              <div className="flex items-center justify-between border-b border-border-dark p-4">
                <span className="font-mono text-xs text-primary">Menu</span>
                <button
                  type="button"
                  onClick={() => setDrawerOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-400 transition-colors hover:text-white"
                  aria-label="Fechar menu"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>
              <SidebarContent />
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
