import type { Metadata, Viewport } from 'next';
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
});

export const viewport: Viewport = {
  themeColor: '#0a0f0d',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Thiago Carvalho | Desenvolvedor Front-End',
  description:
    'Desenvolvedor Front-End com experiência em React, Next.js, TypeScript e Tailwind. Otimização de SEO em VTEX com impacto em ranqueamento e vendas, autenticação segura, prevenção de fraudes e Web Vitals. Compass UOL, Btor Soluções. Objetivo: atuar como Desenvolvedor Front-End.',
  keywords: [
    'desenvolvedor front-end',
    'React',
    'Next.js',
    'TypeScript',
    'VTEX',
    'SEO',
    'Thiago Carvalho',
    'Guarabira',
  ],
  authors: [{ name: 'Thiago Carvalho de Souza Silva', url: 'https://www.linkedin.com/in/thiago-carvalho-ss' }],
  openGraph: { type: 'website', locale: 'pt_BR' },
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} min-h-screen bg-background-dark font-sans text-slate-100 antialiased selection:bg-primary selection:text-background-dark overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
