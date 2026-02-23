# Portfólio – Thiago Carvalho

Site de portfólio em **Next.js 15**, baseado no design do projeto Stitch **Developer Portfolio Hero & Intro** (The Performance Audit Portfolio V1). Conteúdo em português, tema escuro, fonte Manrope e cor de destaque `#197fe6`.

## Pré-requisitos

- Node.js 20+
- pnpm (`corepack enable` e `corepack prepare pnpm@latest --activate` ou `npm i -g pnpm`)

## Instalação e execução

```bash
# Na raiz do repositório (Portifólio)
pnpm install
pnpm dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Build para produção (estático)

O projeto usa **export estático** (`output: 'export'`). O build gera a pasta `out/` com HTML, CSS e JS prontos para qualquer servidor de arquivos (GitHub Pages, Netlify, S3, Apache, nginx, etc.).

```bash
pnpm build
```

O resultado fica em `out/`. Faça o deploy do **conteúdo** de `out/` (não da pasta em si) na raiz ou na subpasta do seu domínio.

## Deploy na raiz ou em subpasta

- **Na raiz** (ex.: `https://seudominio.com/`): não defina `NEXT_PUBLIC_BASE_PATH`. Build e depois publique o conteúdo de `out/` na raiz do site.
- **Em subpasta** (ex.: `https://seudominio.com/portfolio`):
  1. Antes do build, crie `.env.local` (ou defina no ambiente de build):

     ```env
     NEXT_PUBLIC_BASE_PATH=/portfolio
     ```

  2. Rode `pnpm build` e publique o conteúdo de `out/` dentro da pasta `/portfolio` do servidor.

O Next.js usa `basePath` e `assetPrefix` de acordo com `NEXT_PUBLIC_BASE_PATH`, então o mesmo projeto funciona na raiz ou em qualquer subrota.

## Estrutura principal

- `app/` – App Router (layout, página, estilos globais)
- `components/sections/` – Seções da página (Hero, Métricas, Experiência, etc.)
- `next.config.ts` – Configuração (basePath, assetPrefix)
- `SYSTEM_DESIGN.md` – Documento de system design

## Tecnologias

- Next.js (App Router, export estático)
- React 19
- TypeScript 5
- Tailwind CSS 4
- Fonte: Manrope (Google Fonts)