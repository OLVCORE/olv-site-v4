#!/bin/bash

# Script de Build e Deploy Automatizado
# Para GitHub Actions

set -e

echo "🚀 Iniciando build e deploy automatizado..."

# Verificar variáveis de ambiente críticas
if [ -z "$NEXT_PUBLIC_SUPABASE_URL" ]; then
    echo "❌ NEXT_PUBLIC_SUPABASE_URL não definida"
    exit 1
fi

if [ -z "$NEXT_PUBLIC_SUPABASE_ANON_KEY" ]; then
    echo "❌ NEXT_PUBLIC_SUPABASE_ANON_KEY não definida"
    exit 1
fi

if [ -z "$SUPABASE_SERVICE_ROLE" ]; then
    echo "❌ SUPABASE_SERVICE_ROLE não definida"
    exit 1
fi

if [ -z "$OPENAI_API_KEY" ]; then
    echo "❌ OPENAI_API_KEY não definida"
    exit 1
fi

echo "✅ Variáveis de ambiente verificadas"

# Instalar dependências
echo "📦 Instalando dependências..."
npm ci

# Build do projeto
echo "🔨 Fazendo build do projeto..."
npm run build

# Compilar scripts TypeScript
echo "⚙️ Compilando scripts TypeScript..."
npx tsc scripts/dailyBlogIngest.ts --outDir dist --target es2020 --module commonjs --esModuleInterop --allowSyntheticDefaultImports --skipLibCheck

echo "✅ Build concluído com sucesso!"

# Se estiver no GitHub Actions, fazer deploy
if [ "$GITHUB_ACTIONS" = "true" ]; then
    echo "🚀 Fazendo deploy para Vercel..."
    npx vercel --prod --token $VERCEL_TOKEN
    echo "✅ Deploy concluído!"
fi

echo "🎉 Processo finalizado com sucesso!" 