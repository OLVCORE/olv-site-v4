#!/usr/bin/env node

/**
 * Script de Validação de Secrets
 * Verifica se todos os secrets necessários estão configurados
 */

const fs = require('fs');
const path = require('path');

console.log('🔐 VALIDAÇÃO DE SECRETS - OLV SITE');
console.log('==================================');

// Lista de secrets necessários
const requiredSecrets = {
  // Supabase
  'NEXT_PUBLIC_SUPABASE_URL': 'URL do Supabase (público)',
  'NEXT_PUBLIC_SUPABASE_ANON_KEY': 'Chave anônima do Supabase (pública)',
  'SUPABASE_SERVICE_ROLE': 'Chave de serviço do Supabase (privada)',
  'SUPABASE_URL': 'URL do Supabase (privada)',
  
  // OpenAI
  'OPENAI_API_KEY': 'Chave da API do OpenAI',
  
  // Site URLs
  'NEXT_PUBLIC_SITE_URL': 'URL pública do site',
  'SITE_URL': 'URL privada do site',
  
  // Vercel
  'VERCEL_TOKEN': 'Token de deploy do Vercel',
  'VERCEL_ORG_ID': 'ID da organização no Vercel',
  'VERCEL_PROJECT_ID': 'ID do projeto no Vercel',
  
  // Alertas
  'ALERT_EMAIL_USER': 'E-mail para envio de alertas',
  'ALERT_EMAIL_PASS': 'Senha do e-mail de alertas',
  'TELEGRAM_BOT_TOKEN': 'Token do bot do Telegram',
  'TELEGRAM_CHAT_ID': 'ID do chat do Telegram'
};

// Carregar variáveis de ambiente do .env.local
function loadEnvFile() {
  const envPath = path.join(process.cwd(), '.env.local');
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf8');
    const lines = envContent.split('\n');
    
    lines.forEach(line => {
      const trimmed = line.trim();
      if (trimmed && !trimmed.startsWith('#')) {
        const [key, ...valueParts] = trimmed.split('=');
        if (key && valueParts.length > 0) {
          const value = valueParts.join('=');
          process.env[key] = value;
        }
      }
    });
  }
}

// Carregar variáveis de ambiente
loadEnvFile();

// Verificar secrets
function validateSecrets() {
  console.log('\n📋 Verificando secrets...\n');
  
  let allValid = true;
  const results = {};
  
  Object.entries(requiredSecrets).forEach(([secret, description]) => {
    const value = process.env[secret];
    const isValid = value && value.trim() !== '';
    
    if (isValid) {
      console.log(`✅ ${secret}: DEFINIDO`);
      console.log(`   📝 ${description}`);
      
      // Mascarar valores sensíveis
      if (secret.includes('KEY') || secret.includes('TOKEN') || secret.includes('PASS')) {
        const masked = value.substring(0, 8) + '...' + value.substring(value.length - 4);
        console.log(`   🔑 Valor: ${masked}`);
      } else {
        console.log(`   🔗 Valor: ${value}`);
      }
    } else {
      console.log(`❌ ${secret}: NÃO DEFINIDO`);
      console.log(`   📝 ${description}`);
      allValid = false;
    }
    
    results[secret] = isValid;
    console.log('');
  });
  
  return { allValid, results };
}

// Verificar configurações específicas
function validateSpecificConfigs() {
  console.log('🔧 Verificando configurações específicas...\n');
  
  // Verificar formato das URLs
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (siteUrl && !siteUrl.startsWith('http')) {
    console.log('⚠️  NEXT_PUBLIC_SITE_URL deve começar com http:// ou https://');
  }
  
  // Verificar formato do chat_id do Telegram
  const telegramChatId = process.env.TELEGRAM_CHAT_ID;
  if (telegramChatId && !/^-?\d+$/.test(telegramChatId)) {
    console.log('⚠️  TELEGRAM_CHAT_ID deve ser um número');
  }
  
  // Verificar formato do e-mail
  const alertEmail = process.env.ALERT_EMAIL_USER;
  if (alertEmail && !alertEmail.includes('@')) {
    console.log('⚠️  ALERT_EMAIL_USER deve ser um e-mail válido');
  }
}

// Gerar instruções para GitHub
function generateGitHubInstructions() {
  console.log('📚 INSTRUÇÕES PARA CONFIGURAR NO GITHUB');
  console.log('========================================\n');
  
  console.log('1. Vá para seu repositório no GitHub');
  console.log('2. Clique em "Settings" > "Secrets and variables" > "Actions"');
  console.log('3. Clique em "New repository secret"');
  console.log('4. Adicione cada secret da lista abaixo:\n');
  
  Object.entries(requiredSecrets).forEach(([secret, description]) => {
    console.log(`   🔑 ${secret}`);
    console.log(`      📝 ${description}`);
    console.log('');
  });
  
  console.log('💡 DICA: Para o ALERT_EMAIL_PASS, use uma "senha de app" do Gmail');
  console.log('💡 DICA: Para o TELEGRAM_BOT_TOKEN, crie um bot via @BotFather');
  console.log('💡 DICA: Para o TELEGRAM_CHAT_ID, use o bot @userinfobot');
}

// Função principal
function main() {
  const { allValid, results } = validateSecrets();
  
  validateSpecificConfigs();
  
  console.log('📊 RESUMO DA VALIDAÇÃO');
  console.log('======================');
  
  const totalSecrets = Object.keys(requiredSecrets).length;
  const validSecrets = Object.values(results).filter(Boolean).length;
  
  console.log(`📈 Total de secrets: ${totalSecrets}`);
  console.log(`✅ Válidos: ${validSecrets}`);
  console.log(`❌ Faltando: ${totalSecrets - validSecrets}`);
  
  if (allValid) {
    console.log('\n🎉 TODOS OS SECRETS ESTÃO CONFIGURADOS!');
    console.log('✅ O sistema automatizado está pronto para funcionar');
  } else {
    console.log('\n⚠️  ALGUNS SECRETS ESTÃO FALTANDO');
    console.log('❌ Configure os secrets faltantes antes de usar o sistema');
    
    generateGitHubInstructions();
  }
  
  // Retornar código de saída apropriado
  process.exit(allValid ? 0 : 1);
}

// Executar validação
main().catch(err => {
  console.error('💥 Erro na validação:', err);
  process.exit(1);
}); 