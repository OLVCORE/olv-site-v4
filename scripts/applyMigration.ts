import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function applyMigration() {
  console.log('Aplicando migration para adicionar campos detalhados...');
  
  try {
    // Adicionar campos à tabela ingest_logs
    const { error } = await supabase.rpc('exec_sql', {
      sql: `
        ALTER TABLE ingest_logs ADD COLUMN IF NOT EXISTS source text;
        ALTER TABLE ingest_logs ADD COLUMN IF NOT EXISTS rss_title text;
        ALTER TABLE ingest_logs ADD COLUMN IF NOT EXISTS parsing_status text;
        ALTER TABLE ingest_logs ADD COLUMN IF NOT EXISTS parsing_error text;
        ALTER TABLE ingest_logs ADD COLUMN IF NOT EXISTS exec_time_ms integer;
      `
    });

    if (error) {
      console.error('Erro ao aplicar migration:', error);
      return;
    }

    console.log('Migration aplicada com sucesso!');
  } catch (err) {
    console.error('Erro:', err);
  }
}

applyMigration(); 