# System Design – Portfólio Thiago Carvalho

## Visão geral

Site de portfólio em **Next.js 15** (App Router), **React 19**, **TypeScript** e **Tailwind CSS 4**, baseado no design do projeto Stitch **Developer Portfolio Hero & Intro** (ID: 142540060418540281), tela **The Performance Audit Portfolio (V1)**.

## Objetivos

- Conteúdo 100% em **português**.
- Build e execução em **qualquer ambiente**, com suporte opcional a **subpasta** (`basePath`).
- Boas práticas de **UI/UX**, **arquitetura** e **engenharia**.
- Dependências em versões atuais (latest).

---

## Arquitetura

### Stack

| Camada        | Tecnologia        | Versão  |
|---------------|-------------------|---------|
| Framework     | Next.js           | 15.x    |
| UI            | React             | 19.x    |
| Linguagem     | TypeScript        | 5.x     |
| Estilos       | Tailwind CSS      | 4.x     |
| Font          | Manrope (Google)  | -       |

### Estrutura de pastas

```
├── app/
│   ├── globals.css      # Design tokens + Tailwind
│   ├── layout.tsx       # Layout raiz, font, metadata, lang pt-BR
│   └── page.tsx         # Página única (composição de seções)
├── components/
│   └── sections/        # Uma seção por arquivo
│       ├── Hero.tsx
│       ├── Metrics.tsx
│       ├── Experience.tsx
│       ├── Competencies.tsx
│       ├── Academic.tsx
│       ├── Volunteer.tsx
│       └── CTA.tsx
├── public/              # Assets estáticos (se necessário)
├── next.config.ts       # basePath, assetPrefix via env
├── package.json
├── tsconfig.json
├── postcss.config.mjs
└── SYSTEM_DESIGN.md     # Este documento
```

### Design system (Stitch)

- **Tema**: escuro (DARK).
- **Fonte**: Manrope (Google Fonts).
- **Cor de destaque**: `#197fe6`.
- **Bordas**: arredondadas (ROUND_FULL no Stitch → `rounded-2xl` / `rounded-full`).
- **Tokens** definidos em `app/globals.css` via `@theme` (Tailwind v4) e uso consistente de cores em componentes.

### Rotas e i18n

- **Idioma**: `pt-BR` em `<html lang="pt-BR">`.
- **Metadata**: título e descrição em português; `openGraph.locale: 'pt_BR'`.
- **Única rota**: `/` (single-page com seções).

### Deploy e basePath

- **Variável de ambiente**: `NEXT_PUBLIC_BASE_PATH`.
  - Ex.: `NEXT_PUBLIC_BASE_PATH=/portfolio` para servir em `https://exemplo.com/portfolio`.
- **next.config.ts**: `basePath` e `assetPrefix` derivados dessa variável; se vazia, não há prefixo (deploy na raiz).
- Build: `pnpm build` — funciona na raiz ou em subpasta conforme o valor de `NEXT_PUBLIC_BASE_PATH` no ambiente de build.

---

## Boas práticas aplicadas

- **Acessibilidade**: landmarks (`<section>`, `aria-labelledby`, `aria-label`), contraste, foco em botões/links.
- **SEO**: metadata, `lang`, títulos hierárquicos, conteúdo semântico.
- **Performance**: font com `display: swap`, componentes server por padrão, CSS crítico via Tailwind.
- **Manutenção**: seções em arquivos únicos, tokens centralizados, TypeScript estrito.

---

## Referência Stitch (MCP)

- **Projeto**: Developer Portfolio Hero & Intro  
  `projects/142540060418540281`
- **Tela**: The Performance Audit Portfolio (V1)  
  `screens/2c78a55e010d4177843c1ba6b66ed479`
- **Design theme**: `colorMode: DARK`, `font: MANROPE`, `roundness: ROUND_FULL`, `customColor: #197fe6`.
