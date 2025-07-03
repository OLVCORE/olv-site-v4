#!/usr/bin/env node

/**
 * Script para obter Chat ID do Telegram
 * Execute este script e depois envie uma mensagem para o bot
 */

const https = require('https');

const BOT_TOKEN = '7658891467:AAFPhT0HngngexE32D8XhU8WfgSRicDu9hY';

console.log('🤖 BOT DO TELEGRAM - OBTENÇÃO DO CHAT ID');
console.log('=========================================\n');

console.log('📱 Passos para obter seu Chat ID:');
console.log('1. Abra o Telegram');
console.log('2. Procure pelo bot: @olv_site_monitor_bot');
console.log('3. Clique em "Start" ou envie /start');
console.log('4. Envie qualquer mensagem para o bot');
console.log('5. Este script irá detectar e mostrar seu Chat ID\n');

console.log('⏳ Monitorando mensagens... (pressione Ctrl+C para parar)\n');

// Função para obter updates do bot
function getUpdates() {
  const url = `https://api.telegram.org/bot${BOT_TOKEN}/getUpdates`;
  
  https.get(url, (res) => {
    let data = '';
    
    res.on('data', (chunk) => {
      data += chunk;
    });
    
    res.on('end', () => {
      try {
        const response = JSON.parse(data);
        
        if (response.ok && response.result.length > 0) {
          console.log('✅ Mensagens detectadas!\n');
          
          response.result.forEach((update, index) => {
            if (update.message) {
              const chat = update.message.chat;
              const user = update.message.from;
              const text = update.message.text || '[sem texto]';
              
              console.log(`📨 Mensagem ${index + 1}:`);
              console.log(`   👤 Nome: ${user.first_name} ${user.last_name || ''}`);
              console.log(`   🆔 Chat ID: ${chat.id}`);
              console.log(`   💬 Texto: ${text}`);
              console.log(`   📅 Data: ${new Date(update.message.date * 1000).toLocaleString('pt-BR')}`);
              console.log('');
            }
          });
          
          console.log('🎯 SEU CHAT ID É:', response.result[0].message.chat.id);
          console.log('📋 Use este número no GitHub Secret: TELEGRAM_CHAT_ID');
          
        } else {
          console.log('⏳ Aguardando mensagens... (envie uma mensagem para o bot)');
        }
      } catch (error) {
        console.error('❌ Erro ao processar resposta:', error.message);
      }
    });
  }).on('error', (error) => {
    console.error('❌ Erro na requisição:', error.message);
  });
}

// Verificar se o bot está funcionando
function testBot() {
  const url = `https://api.telegram.org/bot${BOT_TOKEN}/getMe`;
  
  https.get(url, (res) => {
    let data = '';
    
    res.on('data', (chunk) => {
      data += chunk;
    });
    
    res.on('end', () => {
      try {
        const response = JSON.parse(data);
        
        if (response.ok) {
          console.log('✅ Bot funcionando corretamente!');
          console.log(`   🤖 Nome: ${response.result.first_name}`);
          console.log(`   📝 Username: @${response.result.username}`);
          console.log('');
          
          // Iniciar monitoramento
          getUpdates();
          
          // Continuar monitorando a cada 5 segundos
          setInterval(getUpdates, 5000);
          
        } else {
          console.error('❌ Erro no bot:', response.description);
        }
      } catch (error) {
        console.error('❌ Erro ao verificar bot:', error.message);
      }
    });
  }).on('error', (error) => {
    console.error('❌ Erro na requisição:', error.message);
  });
}

// Iniciar teste do bot
testBot(); 