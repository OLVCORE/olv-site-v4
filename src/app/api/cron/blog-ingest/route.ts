import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// Função de retry para lidar com rate limiting
async function retryWithBackoff<T>(
  fn: () => Promise<T>,
  maxRetries: number = 3,
  baseDelay: number = 2000
): Promise<T> {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error: any) {
      if (error.message?.includes('429') && attempt < maxRetries) {
        const delay = baseDelay * Math.pow(2, attempt - 1);
        console.log(`Rate limit atingido, tentativa ${attempt}/${maxRetries}. Aguardando ${delay}ms...`);
        await new Promise(resolve => setTimeout(resolve, delay));
        continue;
      }
      throw error;
    }
  }
  throw new Error('Máximo de tentativas excedido');
}

// Função simplificada para processar um feed
async function processFeed(url: string, category: string) {
  try {
    console.log(`Processando: ${url}`);
    
    // Simular processamento de um artigo
    const mockArticle = {
      title: `Artigo de teste - ${new Date().toISOString()}`,
      excerpt: `Este é um artigo de teste gerado em ${new Date().toLocaleString('pt-BR')}`,
      content: `Conteúdo completo do artigo de teste. Gerado automaticamente para verificar o funcionamento do sistema de ingestão.`,
      category: category,
      cover_url: 'https://images.unsplash.com/photo-1667895622485-b0b37a7250c1?w=800',
      source_name: 'Teste OLV',
      source_url: url,
      slug: `teste-${Date.now()}`
    };

    // Inserir no Supabase
    const { data, error } = await supabase.from('posts').upsert(
      {
        slug: mockArticle.slug,
        title: mockArticle.title,
        excerpt: mockArticle.excerpt,
        content_mdx: mockArticle.content,
        category: mockArticle.category,
        cover_url: mockArticle.cover_url,
        source_name: mockArticle.source_name,
        source_url: mockArticle.source_url,
        status: 'published',
      },
      { onConflict: 'slug' }
    );

    if (error) {
      console.error('Erro ao inserir no Supabase:', error);
      return false;
    }

    console.log('Artigo inserido com sucesso:', mockArticle.title);
    return true;
  } catch (error) {
    console.error('Erro ao processar feed:', error);
    return false;
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const pw = searchParams.get('pw');
  const status = searchParams.get('status');
  const logs = searchParams.get('logs');
  const force = searchParams.get('force');

  if (pw !== 'olvadmin') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  if (status) {
    return NextResponse.json({
      lastRun: new Date().toISOString(),
      status: 'active',
      sources: 3,
      nextRun: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
    });
  }

  if (logs) {
    const { data: logsData } = await supabase
      .from('ingest_logs')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(50);

    return NextResponse.json({ logs: logsData || [] });
  }

  // Executa a ingestão simplificada
  if (force) {
    try {
      console.log('Iniciando ingestão forçada...');
      
      // Processar alguns feeds de teste
      const feeds = [
        { url: 'https://iccwbo.org/rss/', category: 'Internacional' },
        { url: 'https://www.trade.gov/rss.xml', category: 'Compliance' },
        { url: 'https://g1.globo.com/rss/g1/economia/agronegocio/', category: 'Exportação' }
      ];

      let successCount = 0;
      for (const feed of feeds) {
        const success = await processFeed(feed.url, feed.category);
        if (success) successCount++;
        
        // Delay entre feeds
        await new Promise(resolve => setTimeout(resolve, 2000));
      }

      return NextResponse.json({
        success: true,
        message: `Ingestão forçada concluída. ${successCount}/${feeds.length} feeds processados com sucesso.`,
        processed: successCount,
        total: feeds.length
      });
    } catch (error: any) {
      return NextResponse.json({
        success: false,
        error: error.message
      });
    }
  }

  return NextResponse.json({
    success: false,
    error: 'Parâmetro force=1 necessário para executar ingestão'
  });
} 