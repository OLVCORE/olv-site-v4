import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// FONTE RSS QUE FUNCIONA 100% - G1 Agronegócio
const RSS_URL = 'https://g1.globo.com/rss/g1/economia/agronegocio/';

// Função simples para criar slug
function createSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

// Função ULTRA SIMPLIFICADA para buscar RSS
async function fetchRssFeed() {
  try {
    console.log('🔍 Buscando RSS do G1 Agronegócio...');
    
    const res = await fetch(RSS_URL, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; OLV-Bot/1.0)',
        'Accept': 'application/rss+xml, application/xml, text/xml, */*'
      }
    });
    
    if (!res.ok) {
      console.error(`❌ HTTP ${res.status} para RSS`);
      return [];
    }
    
    const text = await res.text();
    console.log(`📄 RSS recebido: ${text.length} caracteres`);
    
    // Parse XML usando regex - ULTRA SIMPLIFICADO
    const itemMatches = text.match(/<item[^>]*>([\s\S]*?)<\/item>/gi);
    if (!itemMatches) {
      console.log('❌ Nenhum item encontrado');
      return [];
    }
    
    const items = itemMatches.slice(0, 3).map((itemText) => { // APENAS 3 ITENS
      try {
        const titleMatch = itemText.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
        const linkMatch = itemText.match(/<link[^>]*>([\s\S]*?)<\/link>/i);
        const descriptionMatch = itemText.match(/<description[^>]*>([\s\S]*?)<\/description>/i);
        
        const title = titleMatch && titleMatch[1] ? titleMatch[1].trim() : '';
        const link = linkMatch && linkMatch[1] ? linkMatch[1].trim() : '';
        
        if (!title || !link) {
          return null;
        }
        
        return {
          title,
          link,
          description: descriptionMatch && descriptionMatch[1] ? descriptionMatch[1].trim() : '',
        };
      } catch (error) {
        console.error('❌ Erro ao processar item RSS:', error);
        return null;
      }
    }).filter(Boolean);
    
    console.log(`✅ ${items.length} itens válidos encontrados`);
    return items;
  } catch (error) {
    console.error('❌ Erro ao buscar RSS:', error);
    return [];
  }
}

// Função ULTRA SIMPLIFICADA para processar
async function processFeed() {
  try {
    console.log('🔄 Processando RSS...');
    
    const items = await fetchRssFeed();
    if (!items.length) {
      console.log('❌ Nenhum item encontrado');
      return 0;
    }

    let processed = 0;

    for (const item of items) {
      try {
        // Verificar se já existe
        const { data: existing } = await supabase
          .from('posts')
          .select('slug')
          .eq('slug', createSlug(item.title))
          .single();

        if (existing) {
          console.log(`⏭️ Post já existe: ${item.title}`);
          continue;
        }

        // Conteúdo SIMPLES sem IA
        const content = `# ${item.title}

${item.description}

**Fonte:** [G1 Agronegócio](${item.link})
**Data:** ${new Date().toLocaleDateString('pt-BR')}`;

        // Inserir no Supabase
        const { error } = await supabase.from('posts').insert({
          slug: createSlug(item.title),
          title: item.title,
          excerpt: item.description.substring(0, 200) + '...',
          content_mdx: content,
          category: 'Exportação',
          cover_url: 'https://images.unsplash.com/photo-1667895622485-b0b37a7250c1?w=800',
          source_name: 'g1.globo.com',
          source_url: item.link,
          status: 'published',
          author: 'Equipe OLV',
          published_at: new Date().toISOString(),
        });

        if (error) {
          console.error('❌ Erro ao inserir no Supabase:', error);
          continue;
        }

        console.log('✅ Artigo inserido:', item.title);
        processed++;

        // Delay entre artigos
        await new Promise(resolve => setTimeout(resolve, 1000));
      } catch (error: any) {
        console.error('❌ Erro ao processar item:', error);
      }
    }

    return processed;
  } catch (error: any) {
    console.error('❌ Erro ao processar feed:', error);
    return 0;
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const pw = searchParams.get('pw');
  const force = searchParams.get('force');

  if (pw !== 'olvadmin') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // Executa a ingestão ULTRA SIMPLIFICADA
  if (force) {
    try {
      console.log('🚀 Iniciando ingestão ULTRA SIMPLIFICADA...');
      
      const processed = await processFeed();

      return NextResponse.json({
        success: true,
        message: `✅ Ingestão ULTRA SIMPLIFICADA concluída. ${processed} artigos processados.`,
        processed: processed,
        total: 1,
        successfulFeeds: processed > 0 ? 1 : 0
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