import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// SISTEMA FINAL COM FONTES RSS 100% FUNCIONAIS + CORRIGIDAS
const SOURCES = [
  // ESTRATÉGIA INTERNACIONAL (3) - FONTES CONFIÁVEIS
  { 
    url: 'https://www.bbc.com/news/business/rss.xml', 
    category: 'Estratégia Internacional',
    fallback: 'https://www.cnbc.com/id/100003114/device/rss/rss.html',
    parser: 'xml'
  },
  { 
    url: 'https://www.cnbc.com/id/100003114/device/rss/rss.html', 
    category: 'Estratégia Internacional',
    fallback: 'https://www.ft.com/rss/home',
    parser: 'xml'
  },
  { 
    url: 'https://www.ft.com/rss/home', 
    category: 'Estratégia Internacional',
    fallback: null,
    parser: 'xml'
  },

  // BUSINESS INTELLIGENCE (4) - FUNCIONAIS
  { 
    url: 'https://www.ft.com/rss/home', 
    category: 'Business Intelligence',
    fallback: 'https://www.marketwatch.com/rss/topstories',
    parser: 'xml'
  },
  { 
    url: 'https://www.marketwatch.com/rss/topstories', 
    category: 'Business Intelligence',
    fallback: 'https://www.cnbc.com/id/100003114/device/rss/rss.html',
    parser: 'xml'
  },
  { 
    url: 'https://www.cnbc.com/id/100003114/device/rss/rss.html', 
    category: 'Business Intelligence',
    fallback: 'https://www.bbc.com/news/business/rss.xml',
    parser: 'xml'
  },
  { 
    url: 'https://www.bbc.com/news/business/rss.xml', 
    category: 'Business Intelligence',
    fallback: null,
    parser: 'xml'
  },

  // IMPORTAÇÃO (1) - FONTE ALTERNATIVA CONFIÁVEL
  { 
    url: 'https://www.bbc.com/news/business/rss.xml', 
    category: 'Importação',
    fallback: 'https://www.ft.com/rss/home',
    parser: 'xml'
  },

  // EXPORTAÇÃO (22) - FUNCIONAIS + CORRIGIDAS
  { 
    url: 'https://g1.globo.com/rss/g1/economia/agronegocio/', 
    category: 'Exportação',
    fallback: null,
    parser: 'xml'
  },
  { 
    url: 'https://www.abag.com.br/rss/', 
    category: 'Exportação',
    fallback: 'https://www.bbc.com/news/business/rss.xml',
    parser: 'xml'
  },

  // COMPLIANCE (17) - FUNCIONAIS
  { 
    url: 'https://www.customstoday.com/rss', 
    category: 'Compliance',
    fallback: 'https://www.trade.gov/rss.xml',
    parser: 'xml'
  },
  { 
    url: 'https://www.trade.gov/rss.xml', 
    category: 'Compliance',
    fallback: 'https://www.bbc.com/news/business/rss.xml',
    parser: 'xml'
  },
  { 
    url: 'https://www.bbc.com/news/business/rss.xml', 
    category: 'Compliance',
    fallback: 'https://www.ft.com/rss/home',
    parser: 'xml'
  },
  { 
    url: 'https://www.ft.com/rss/home', 
    category: 'Compliance',
    fallback: 'https://www.cnbc.com/id/100003114/device/rss/rss.html',
    parser: 'xml'
  },
  { 
    url: 'https://www.cnbc.com/id/100003114/device/rss/rss.html', 
    category: 'Compliance',
    fallback: null,
    parser: 'xml'
  },

  // LOGÍSTICA (47) - FUNCIONAIS
  { 
    url: 'https://www.hellenicshippingnews.com/feed/', 
    category: 'Logística',
    fallback: 'https://www.freightwaves.com/rss',
    parser: 'xml'
  },
  { 
    url: 'https://www.freightwaves.com/rss', 
    category: 'Logística',
    fallback: 'https://www.bbc.com/news/business/rss.xml',
    parser: 'xml'
  },
  { 
    url: 'https://www.bbc.com/news/business/rss.xml', 
    category: 'Logística',
    fallback: 'https://www.ft.com/rss/home',
    parser: 'xml'
  },
  { 
    url: 'https://www.ft.com/rss/home', 
    category: 'Logística',
    fallback: 'https://www.cnbc.com/id/100003114/device/rss/rss.html',
    parser: 'xml'
  },
  { 
    url: 'https://www.cnbc.com/id/100003114/device/rss/rss.html', 
    category: 'Logística',
    fallback: null,
    parser: 'xml'
  },

  // FINANÇAS (18) - FONTES ALTERNATIVAS CONFIÁVEIS
  { 
    url: 'https://www.bbc.com/news/business/rss.xml', 
    category: 'Finanças',
    fallback: 'https://www.ft.com/rss/home',
    parser: 'xml'
  },
  { 
    url: 'https://www.ft.com/rss/home', 
    category: 'Finanças',
    fallback: 'https://www.cnbc.com/id/100003114/device/rss/rss.html',
    parser: 'xml'
  },
  { 
    url: 'https://www.cnbc.com/id/100003114/device/rss/rss.html', 
    category: 'Finanças',
    fallback: 'https://www.marketwatch.com/rss/topstories',
    parser: 'xml'
  },

  // SUPPLY CHAIN (5) - FUNCIONAL
  { 
    url: 'https://scm.mit.edu/feed/', 
    category: 'Supply Chain',
    fallback: 'https://www.bbc.com/news/business/rss.xml',
    parser: 'xml'
  },
  { 
    url: 'https://www.bbc.com/news/business/rss.xml', 
    category: 'Supply Chain',
    fallback: 'https://www.ft.com/rss/home',
    parser: 'xml'
  },
  { 
    url: 'https://www.ft.com/rss/home', 
    category: 'Supply Chain',
    fallback: 'https://www.cnbc.com/id/100003114/device/rss/rss.html',
    parser: 'xml'
  },
  { 
    url: 'https://www.cnbc.com/id/100003114/device/rss/rss.html', 
    category: 'Supply Chain',
    fallback: 'https://www.marketwatch.com/rss/topstories',
    parser: 'xml'
  },
  { 
    url: 'https://www.marketwatch.com/rss/topstories', 
    category: 'Supply Chain',
    fallback: null,
    parser: 'xml'
  },

  // GESTÃO (7) - FUNCIONAL
  { 
    url: 'https://www.mckinsey.com/rss', 
    category: 'Gestão',
    fallback: 'https://www.bbc.com/news/business/rss.xml',
    parser: 'xml'
  },
  { 
    url: 'https://www.bbc.com/news/business/rss.xml', 
    category: 'Gestão',
    fallback: 'https://www.ft.com/rss/home',
    parser: 'xml'
  },
  { 
    url: 'https://www.ft.com/rss/home', 
    category: 'Gestão',
    fallback: 'https://www.cnbc.com/id/100003114/device/rss/rss.html',
    parser: 'xml'
  },

  // INTERNACIONAL (21) - FUNCIONAIS
  { 
    url: 'https://www.bbc.com/news/business/rss.xml', 
    category: 'Internacional',
    fallback: 'https://www.cnbc.com/id/100003114/device/rss/rss.html',
    parser: 'xml'
  },
  { 
    url: 'https://www.cnbc.com/id/100003114/device/rss/rss.html', 
    category: 'Internacional',
    fallback: 'https://www.ft.com/rss/home',
    parser: 'xml'
  },

  // PMEs (12) - FONTES ALTERNATIVAS CONFIÁVEIS
  { 
    url: 'https://www.bbc.com/news/business/rss.xml', 
    category: 'PMEs',
    fallback: 'https://www.ft.com/rss/home',
    parser: 'xml'
  },
  { 
    url: 'https://www.ft.com/rss/home', 
    category: 'PMEs',
    fallback: 'https://www.cnbc.com/id/100003114/device/rss/rss.html',
    parser: 'xml'
  },

  // OUTROS (11) - FONTES ALTERNATIVAS CONFIÁVEIS
  { 
    url: 'https://www.bbc.com/news/business/rss.xml', 
    category: 'Outros',
    fallback: 'https://www.ft.com/rss/home',
    parser: 'xml'
  },
  { 
    url: 'https://www.ft.com/rss/home', 
    category: 'Outros',
    fallback: 'https://www.cnbc.com/id/100003114/device/rss/rss.html',
    parser: 'xml'
  }
];

// Função simples para criar slug
function createSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

// Função para buscar RSS com retry e fallback - VERSÃO OTIMIZADA
async function fetchRssFeed(source: any) {
  const urls = [source.url];
  if (source.fallback) urls.push(source.fallback);
  
  // Headers otimizados que funcionam
  const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Accept-Language': 'pt-BR,pt;q=0.9,en;q=0.8',
    'Accept-Encoding': 'gzip, deflate',
    'Connection': 'keep-alive',
    'Upgrade-Insecure-Requests': '1',
    'Cache-Control': 'no-cache'
  };
  
  for (const url of urls) {
    try {
      console.log(`🔍 Tentando: ${source.category} - ${url}`);
      
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000); // 15s timeout
      
      const res = await fetch(url, {
        headers,
        signal: controller.signal,
        redirect: 'follow', // Seguir redirecionamentos
        next: { revalidate: 0 }
      });
      
      clearTimeout(timeoutId);
      
      if (!res.ok) {
        console.log(`❌ HTTP ${res.status} para ${url}`);
        continue;
      }
      
      const text = await res.text();
      console.log(`📄 RSS recebido: ${text.length} caracteres de ${url}`);
      
      // Parse XML usando regex
      const itemMatches = text.match(/<item[^>]*>([\s\S]*?)<\/item>/gi);
      if (!itemMatches) {
        console.log(`❌ Nenhum item encontrado em ${url}`);
        continue;
      }
      
      const items = itemMatches.slice(0, 2).map((itemText) => {
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
            source_url: url
          };
        } catch (error) {
          console.error('❌ Erro ao processar item RSS:', error);
          return null;
        }
      }).filter(Boolean);
      
      if (items.length > 0) {
        console.log(`✅ ${items.length} itens válidos encontrados em ${url}`);
        return items;
      }
      
    } catch (error) {
      if (error.name === 'AbortError') {
        console.log(`⏰ Timeout para ${url}`);
      } else {
        console.error(`❌ Erro ao buscar RSS: ${url}`, error);
      }
      continue;
    }
  }
  
  console.log(`❌ Nenhuma fonte funcionou para categoria ${source.category}`);
  return [];
}

// Função para processar um feed
async function processFeed(source: any) {
  try {
    console.log(`🔄 Processando: ${source.category} - ${source.url}`);
    
    const items = await fetchRssFeed(source);
    if (!items.length) {
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

        // Conteúdo baseado na categoria
        const content = `# ${item.title}

${item.description}

**Categoria:** ${source.category}
**Fonte:** [${new URL(item.source_url).hostname}](${item.link})
**Data:** ${new Date().toLocaleDateString('pt-BR')}`;

        // Inserir no Supabase
        const { error } = await supabase.from('posts').insert({
          slug: createSlug(item.title),
          title: item.title,
          excerpt: item.description.substring(0, 200) + '...',
          content_mdx: content,
          category: source.category,
          cover_url: 'https://images.unsplash.com/photo-1667895622485-b0b37a7250c1?w=800',
          source_name: new URL(item.source_url).hostname,
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

  // Executa a ingestão FINAL OTIMIZADA
  if (force) {
    try {
      console.log('🚀 Iniciando ingestão FINAL com fontes 100% funcionais...');
      
      let totalProcessed = 0;
      let successCount = 0;
      const results = [];

      for (const source of SOURCES) {
        try {
          const processed = await processFeed(source);
          if (processed > 0) {
            successCount++;
            totalProcessed += processed;
            results.push(`${source.category}: ${processed} artigos`);
          }
          
          // Delay entre feeds
          await new Promise(resolve => setTimeout(resolve, 2000));
        } catch (error) {
          console.error(`❌ Erro ao processar ${source.category}:`, error);
        }
      }

      return NextResponse.json({
        success: true,
        message: `✅ Ingestão FINAL concluída. ${totalProcessed} artigos processados de ${successCount}/${SOURCES.length} categorias.`,
        processed: totalProcessed,
        total: SOURCES.length,
        successfulFeeds: successCount,
        results: results
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