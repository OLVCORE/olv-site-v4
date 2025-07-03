// Script para aplicar migration diretamente no Supabase
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

async function applyMigration() {
  console.log('Aplicando migration para adicionar campos detalhados...');
  
  try {
    // Usar a API REST do Supabase para executar SQL
    const response = await fetch(`${SUPABASE_URL}/rest/v1/rpc/exec_sql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'apikey': SUPABASE_ANON_KEY
      },
      body: JSON.stringify({
        sql: `
          ALTER TABLE ingest_logs ADD COLUMN IF NOT EXISTS source text;
          ALTER TABLE ingest_logs ADD COLUMN IF NOT EXISTS rss_title text;
          ALTER TABLE ingest_logs ADD COLUMN IF NOT EXISTS parsing_status text;
          ALTER TABLE ingest_logs ADD COLUMN IF NOT EXISTS parsing_error text;
          ALTER TABLE ingest_logs ADD COLUMN IF NOT EXISTS exec_time_ms integer;
        `
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log('Migration aplicada com sucesso!', result);
  } catch (error) {
    console.error('Erro ao aplicar migration:', error);
    
    // Fallback: tentar criar a tabela se não existir
    console.log('Tentando criar tabela se não existir...');
    try {
      const createResponse = await fetch(`${SUPABASE_URL}/rest/v1/rpc/exec_sql`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          'apikey': SUPABASE_ANON_KEY
        },
        body: JSON.stringify({
          sql: `
            CREATE TABLE IF NOT EXISTS ingest_logs (
              id SERIAL PRIMARY KEY,
              created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
              status TEXT,
              message TEXT,
              stderr TEXT,
              source TEXT,
              rss_title TEXT,
              parsing_status TEXT,
              parsing_error TEXT,
              exec_time_ms INTEGER
            );
          `
        })
      });

      if (createResponse.ok) {
        console.log('Tabela criada com sucesso!');
      } else {
        console.error('Erro ao criar tabela:', await createResponse.text());
      }
    } catch (createError) {
      console.error('Erro ao criar tabela:', createError);
    }
  }
}

// Executar se chamado diretamente
if (require.main === module) {
  applyMigration();
}

export { applyMigration }; 