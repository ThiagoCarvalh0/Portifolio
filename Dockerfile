# Imagem base com Node.js
FROM node:18-alpine AS base

# Estágio de dependências
FROM base AS deps
# Instalar libc6-compat
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copiar arquivos de gerenciador de pacotes e instalar dependências
COPY package.json ./
COPY package-lock.json* ./

# Listar arquivos no diretório para depuração
RUN echo "Conteúdo do diretório após copiar arquivos de bloqueio:" && ls -la

# Verificar qual gerenciador de pacotes usar e instalar dependências
RUN echo "Encontrado package-lock.json" && ls -la package-lock.json && npm ci;

# Estágio de construção
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Executar a construção
RUN \
  npm run build

# Estágio de produção
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

# Criar grupo e usuário
RUN addgroup -S nodejs && adduser -S nextjs -G nodejs

# Copiar os arquivos necessários do estágio de construção
COPY --from=builder /app/public ./public

# Definir permissões para o diretório .next
RUN mkdir .next && chown nextjs:nodejs .next

# Copiar os arquivos construídos
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Alternar para o usuário não-root
USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Iniciar o servidor
CMD ["node", "server.js"]
