#!/usr/bin/env node

/**
 * Script para testar alertas do Telegram
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

// Carregar variáveis de ambiente
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

loadEnvFile();

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID || '5511968462655'; // Seu WhatsApp

console.log('📱 TESTE DE ALERTA TELEGRAM/WHATSAPP');
console.log('=====================================\n');

if (!BOT_TOKEN) {
  console.error('❌ TELEGRAM_BOT_TOKEN não configurado');
  process.exit(1);
}

console.log('🤖 Bot Token:', BOT_TOKEN.substring(0, 10) + '...');
console.log('📞 Chat ID:', CHAT_ID);
console.log('');

// Função para enviar mensagem
function sendMessage(text) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({
      chat_id: CHAT_ID,
      text: text,
      parse_mode: 'HTML'
    });

    const options = {
      hostname: 'api.telegram.org',
      port: 443,
      path: `/bot${BOT_TOKEN}/sendMessage`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
      }
    };

    const req = https.request(options, (res) => {
      let responseData = '';

      res.on('data', (chunk) => {
        responseData += chunk;
      });

      res.on('end', () => {
        try {
          const response = JSON.parse(responseData);
          if (response.ok) {
            resolve(response);
          } else {
            reject(new Error(response.description));
          }
        } catch (error) {
          reject(error);
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.write(data);
    req.end();
  });
}

// Testar diferentes tipos de alertas
async function testAlerts() {
  console.log('🚀 Enviando testes de alerta...\n');

  const tests = [
    {
      name: '✅ Teste de Sucesso',
      message: `✅ <b>OLV SITE - TESTE DE SUCESSO</b>

🚀 Deploy e ingestão concluídos com sucesso!

📅 Data: ${new Date().toLocaleString('pt-BR')}
📊 Artigos importados automaticamente
🌐 Site atualizado em produção

⏰ Próxima execução: amanhã às 9h (BR)

---
<i>Teste do sistema de alertas</i>`
    },
    {
      name: '❌ Teste de Falha',
      message: `🚨 <b>ALERTA OLV SITE - TESTE</b>

❌ <b>Falha no Deploy/Ingestão</b>

📅 Data: ${new Date().toLocaleString('pt-BR')}
🔗 Workflow: Deploy and Daily Ingest

⚡ <b>Ação necessária:</b> Verificar logs do GitHub Actions

🔍 <a href='https://github.com/seu-repo/actions'>Ver Logs</a>

---
<i>Teste do sistema de alertas</i>`
    },
    {
      name: '📊 Teste de Monitoramento',
      message: `🔍 <b>MONITORAMENTO OLV SITE</b>

📈 Status dos componentes:
   🌐 Site principal: ✅
   📡 API de ingestão: ✅
   🗄️ Supabase: ✅
   🔧 Variáveis de ambiente: ✅
   🚀 Sistema de deploy: ✅

🎉 SISTEMA TOTALMENTE OPERACIONAL

---
<i>Teste do sistema de monitoramento</i>`
    }
  ];

  for (const test of tests) {
    try {
      console.log(`📤 Enviando: ${test.name}`);
      await sendMessage(test.message);
      console.log(`✅ ${test.name} - Enviado com sucesso!\n`);
      
      // Aguardar 2 segundos entre os testes
      await new Promise(resolve => setTimeout(resolve, 2000));
      
    } catch (error) {
      console.error(`❌ ${test.name} - Erro:`, error.message);
    }
  }

  console.log('🎉 Testes concluídos!');
  console.log('📱 Verifique seu Telegram/WhatsApp para ver as mensagens');
}

// Executar testes
testAlerts().catch(console.error); 