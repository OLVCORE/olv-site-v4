-- Adiciona campos detalhados à tabela de logs de ingestão
alter table ingest_logs add column if not exists source text;
alter table ingest_logs add column if not exists rss_title text;
alter table ingest_logs add column if not exists parsing_status text;
alter table ingest_logs add column if not exists parsing_error text;
alter table ingest_logs add column if not exists exec_time_ms integer; 