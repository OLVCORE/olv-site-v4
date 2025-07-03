#!/usr/bin/env node

const https = require('https');

const BOT_TOKEN = '7658891467:AAFPhT0HngngexE32D8XhU8WfgSRicDu9hY';
const CHAT_ID = '1699964447';

console.log('📱 Testando envio de mensagem Telegram...');

const message = `✅ <b>OLV SITE - TESTE</b>

🚀 Sistema de alertas funcionando!

📅 Data: ${new Date().toLocaleString('pt-BR')}
📊 Teste de conectividade

---
<i>Teste do sistema automatizado</i>`;

const data = JSON.stringify({
  chat_id: CHAT_ID,
  text: message,
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
        console.log('✅ Mensagem enviada com sucesso!');
        console.log('📱 Verifique seu Telegram/WhatsApp');
      } else {
        console.error('❌ Erro:', response.description);
      }
    } catch (error) {
      console.error('❌ Erro ao processar resposta:', error.message);
    }
  });
});

req.on('error', (error) => {
  console.error('❌ Erro na requisição:', error.message);
});

req.write(data);
req.end(); 