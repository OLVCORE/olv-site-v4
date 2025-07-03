# 🚀 Sistema de Deploy e Ingestão Automatizada - OLV Site

## 📋 Visão Geral

Este sistema automatiza completamente o deploy e ingestão de artigos do blog OLV Internacional:

- **Deploy automático**: Sempre que houver push na branch `main`
- **Ingestão diária**: Todos os dias às 9h (horário de Brasília)
- **Alertas**: E-mail e WhatsApp/Telegram em caso de falha
- **Monitoramento**: Scripts para verificar status do sistema

## 🔧 Configuração Necessária

### 1. Secrets do GitHub

Configure estes secrets no seu repositório GitHub:
`Settings` > `Secrets and variables` > `Actions` > `New repository secret`

#### Supabase
- `NEXT_PUBLIC_SUPABASE_URL`: URL do Supabase (público)
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Chave anônima do Supabase (pública)
- `SUPABASE_SERVICE_ROLE`: Chave de serviço do Supabase (privada)
- `SUPABASE_URL`: URL do Supabase (privada)

#### OpenAI
- `OPENAI_API_KEY`: Chave da API do OpenAI

#### Site URLs
- `NEXT_PUBLIC_SITE_URL`: URL pública do site
- `SITE_URL`: URL privada do site

#### Vercel
- `VERCEL_TOKEN`: Token de deploy do Vercel
- `VERCEL_ORG_ID`: ID da organização no Vercel
- `VERCEL_PROJECT_ID`: ID do projeto no Vercel

#### Alertas
- `ALERT_EMAIL_USER`: E-mail para envio de alertas
- `ALERT_EMAIL_PASS`: Senha do e-mail de alertas (use senha de app do Gmail)
- `TELEGRAM_BOT_TOKEN`: Token do bot do Telegram
- `TELEGRAM_CHAT_ID`: ID do chat do Telegram

### 2. Configuração do Telegram Bot

#### Criar o Bot
1. Abra o Telegram e procure por `@BotFather`
2. Envie `/newbot`
3. Escolha um nome: `OLV Site Monitor`
4. Escolha um username: `olv_site_monitor_bot` (ou outro disponível)
5. Copie o token fornecido

#### Obter Chat ID
1. Procure por `@userinfobot` no Telegram
2. Envie qualquer mensagem para ele
3. Ele responderá com seu chat_id (número)

### 3. Configuração do E-mail de Alertas

#### Gmail (Recomendado)
1. Ative a verificação em duas etapas
2. Gere uma "senha de app":
   - Vá em `Conta Google` > `Segurança`
   - `Verificação em duas etapas` > `Senhas de app`
   - Gere uma senha para "Email"
3. Use esta senha no `ALERT_EMAIL_PASS`

## 🚀 Como Funciona

### Deploy Automático
- **Trigger**: Push na branch `main`
- **Ação**: Build + Deploy para Vercel
- **Notificação**: Sucesso/falha via e-mail e Telegram

### Ingestão Diária
- **Trigger**: Cron job às 9h (BR)
- **Ação**: Importa artigos de 26+ feeds RSS
- **Processo**: Traduz para português e salva no Supabase
- **Notificação**: Resumo diário via Telegram

### Alertas
- **E-mail**: marcos.oliveira@olvinternacional.com.br
- **WhatsApp**: Via Telegram (5511968462655)
- **Triggers**: Falha no deploy, ingestão ou variáveis

## 📊 Monitoramento

### Scripts Disponíveis

```bash
# Verificar status do sistema
node scripts/monitor-system.js

# Validar secrets configurados
node scripts/validate-secrets.js

# Testar ingestão manualmente
node dist/scripts/dailyBlogIngest.js
```

### O que é Monitorado
- ✅ Site principal (status HTTP)
- ✅ API de ingestão
- ✅ Supabase (conectividade)
- ✅ Variáveis de ambiente
- ✅ Sistema de deploy

## 🔍 Troubleshooting

### Problemas Comuns

#### 1. "Invalid API key" no Supabase
- Verifique se `SUPABASE_SERVICE_ROLE` está correto
- Confirme se a chave tem permissões adequadas

#### 2. Falha no deploy do Vercel
- Verifique `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`
- Confirme se o projeto existe no Vercel

#### 3. Alertas não funcionam
- Verifique `TELEGRAM_BOT_TOKEN` e `TELEGRAM_CHAT_ID`
- Para e-mail: confirme `ALERT_EMAIL_USER` e `ALERT_EMAIL_PASS`

#### 4. Ingestão falha
- Verifique `OPENAI_API_KEY`
- Confirme conectividade com feeds RSS
- Verifique logs do GitHub Actions

### Logs e Debug
- **GitHub Actions**: Ver logs completos no repositório
- **Vercel**: Logs de deploy no painel do Vercel
- **Supabase**: Logs no painel do Supabase

## 📅 Cronograma

- **Deploy**: Imediato após push na `main`
- **Ingestão**: Diariamente às 9h (BR)
- **Monitoramento**: Contínuo via alertas
- **Backup**: Automático via Vercel e Supabase

## 🔐 Segurança

- Todos os secrets são mascarados nos logs
- Variáveis sensíveis não são expostas
- Conexões usam HTTPS/TLS
- Permissões mínimas necessárias

## 📞 Suporte

Em caso de problemas:
1. Verifique os logs do GitHub Actions
2. Execute `node scripts/monitor-system.js`
3. Valide secrets com `node scripts/validate-secrets.js`
4. Consulte este documento

---

**Sistema desenvolvido para OLV Internacional**
*Automação completa de deploy e ingestão de conteúdo* 