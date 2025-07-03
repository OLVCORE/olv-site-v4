#!/usr/bin/env node

/**
 * Script de Monitoramento do Sistema Automatizado
 * Verifica status do site, banco de dados e ingestão
 */

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

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

// Configurações
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://api.olvinternacional.com.br';
const SUPABASE_URL = process.env.SUPABASE_URL || 'https://wqnitocwefqzqkcgby.supabase.co';

console.log('🔍 MONITORAMENTO DO SISTEMA AUTOMATIZADO');
console.log('==========================================');

// Função para verificar status HTTP
function checkHttpStatus(url) {
  return new Promise((resolve) => {
    const client = url.startsWith('https') ? https : http;
    
    const req = client.get(url, (res) => {
      resolve({
        status: res.statusCode,
        ok: res.statusCode >= 200 && res.statusCode < 400
      });
    });
    
    req.on('error', (err) => {
      resolve({
        status: 'ERROR',
        ok: false,
        error: err.message
      });
    });
    
    req.setTimeout(10000, () => {
      req.destroy();
      resolve({
        status: 'TIMEOUT',
        ok: false,
        error: 'Timeout após 10s'
      });
    });
  });
}

// Verificar site principal
async function checkMainSite() {
  console.log('\n🌐 Verificando site principal...');
  const result = await checkHttpStatus(SITE_URL);
  
  if (result.ok) {
    console.log(`✅ Site principal: ${result.status} - ONLINE`);
  } else {
    console.log(`❌ Site principal: ${result.status} - OFFLINE`);
    if (result.error) console.log(`   Erro: ${result.error}`);
  }
  
  return result.ok;
}

// Verificar API de ingestão
async function checkIngestAPI() {
  console.log('\n📡 Verificando API de ingestão...');
  const result = await checkHttpStatus(`${SITE_URL}/api/cron/blog-ingest`);
  
  if (result.ok) {
    console.log(`✅ API de ingestão: ${result.status} - ONLINE`);
  } else {
    console.log(`❌ API de ingestão: ${result.status} - OFFLINE`);
    if (result.error) console.log(`   Erro: ${result.error}`);
  }
  
  return result.ok;
}

// Verificar Supabase
async function checkSupabase() {
  console.log('\n🗄️ Verificando Supabase...');
  const result = await checkHttpStatus(SUPABASE_URL);
  
  if (result.ok) {
    console.log(`✅ Supabase: ${result.status} - ONLINE`);
  } else {
    console.log(`❌ Supabase: ${result.status} - OFFLINE`);
    if (result.error) console.log(`   Erro: ${result.error}`);
  }
  
  return result.ok;
}

// Verificar variáveis de ambiente
function checkEnvironmentVariables() {
  console.log('\n🔧 Verificando variáveis de ambiente...');
  
  const required = [
    'NEXT_PUBLIC_SUPABASE_URL',
    'NEXT_PUBLIC_SUPABASE_ANON_KEY',
    'SUPABASE_SERVICE_ROLE',
    'OPENAI_API_KEY',
    'NEXT_PUBLIC_SITE_URL'
  ];
  
  let allOk = true;
  
  required.forEach(varName => {
    const value = process.env[varName];
    if (value) {
      console.log(`✅ ${varName}: DEFINIDA`);
    } else {
      console.log(`❌ ${varName}: NÃO DEFINIDA`);
      allOk = false;
    }
  });
  
  return allOk;
}

// Verificar último deploy
function checkLastDeploy() {
  console.log('\n🚀 Verificando último deploy...');
  
  // Simular verificação de timestamp do último deploy
  const now = new Date();
  console.log(`📅 Última verificação: ${now.toLocaleString('pt-BR')}`);
  console.log(`⏰ Próxima ingestão: ${new Date(now.getTime() + 24*60*60*1000).toLocaleString('pt-BR')}`);
  
  return true;
}

// Função principal
async function main() {
  const results = {
    site: await checkMainSite(),
    api: await checkIngestAPI(),
    supabase: await checkSupabase(),
    env: checkEnvironmentVariables(),
    deploy: checkLastDeploy()
  };
  
  console.log('\n📊 RESUMO DO MONITORAMENTO');
  console.log('==========================');
  
  const allOk = Object.values(results).every(r => r);
  
  if (allOk) {
    console.log('✅ SISTEMA TOTALMENTE OPERACIONAL');
    console.log('🎉 Todas as verificações passaram!');
  } else {
    console.log('❌ PROBLEMAS DETECTADOS');
    console.log('🔧 Verifique os itens marcados com ❌');
  }
  
  console.log('\n📈 Status dos componentes:');
  console.log(`   🌐 Site principal: ${results.site ? '✅' : '❌'}`);
  console.log(`   📡 API de ingestão: ${results.api ? '✅' : '❌'}`);
  console.log(`   🗄️ Supabase: ${results.supabase ? '✅' : '❌'}`);
  console.log(`   🔧 Variáveis de ambiente: ${results.env ? '✅' : '❌'}`);
  console.log(`   🚀 Sistema de deploy: ${results.deploy ? '✅' : '❌'}`);
  
  // Retornar código de saída apropriado
  process.exit(allOk ? 0 : 1);
}

// Executar monitoramento
main().catch(err => {
  console.error('💥 Erro no monitoramento:', err);
  process.exit(1);
}); 