import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const pw = searchParams.get('pw');
  const status = searchParams.get('status');
  const logs = searchParams.get('logs');

  if (pw !== 'olvadmin') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  if (status) {
    // Retorna status do cron
    return NextResponse.json({
      lastRun: new Date().toISOString(),
      status: 'active',
      sources: 3,
      nextRun: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
    });
  }

  if (logs) {
    // Retorna logs detalhados
    const { data: logsData } = await supabase
      .from('ingest_logs')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(50);

    return NextResponse.json({ logs: logsData || [] });
  }

  // Executa a ingestão
  try {
    const { exec } = require('child_process');
    const { promisify } = require('util');
    const execAsync = promisify(exec);

    const { stdout, stderr } = await execAsync('npx tsx scripts/dailyBlogIngest.ts');
    
    return NextResponse.json({
      success: true,
      message: 'Ingestão executada com sucesso',
      stdout,
      stderr,
    });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      error: error.message,
      stderr: error.stderr,
    });
  }
} 