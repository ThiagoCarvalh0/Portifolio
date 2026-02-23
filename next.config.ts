import type { NextConfig } from 'next';

/**
 * Build estático (output: 'export') para deploy em qualquer servidor de arquivos.
 * basePath: define no ambiente NEXT_PUBLIC_BASE_PATH quando o app roda em subrota (ex: /portfolio).
 * Deixe vazio ou não defina para deploy na raiz.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: basePath || undefined,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  reactStrictMode: true,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
