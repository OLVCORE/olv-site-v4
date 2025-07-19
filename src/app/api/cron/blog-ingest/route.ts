import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import OpenAI from 'openai';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// SISTEMA SIMPLIFICADO - 12 FONTES CONFIÁVEIS (1 por categoria)
const SOURCES = [
  // ESTRATÉGIA INTERNACIONAL
  { 
    url: 'https://feeds.bbci.co.uk/news/business/rss.xml', 
    category: 'Estratégia Internacional',
    fallback: null,
    parser: 'xml'
  },

  // BUSINESS INTELLIGENCE  
  { 
    url: 'https://www.ft.com/rss/home', 
    category: 'Business Intelligence',
    fallback: null,
    parser: 'xml'
  },

  // IMPORTAÇÃO
  { 
    url: 'https://feeds.bbci.co.uk/news/business/rss.xml', 
    category: 'Importação',
    fallback: null,
    parser: 'xml'
  },

  // EXPORTAÇÃO
  { 
    url: 'https://g1.globo.com/rss/g1/economia/agronegocio/', 
    category: 'Exportação',
    fallback: null,
    parser: 'xml'
  },

  // COMPLIANCE
  { 
    url: 'https://feeds.bbci.co.uk/news/business/rss.xml', 
    category: 'Compliance',
    fallback: null,
    parser: 'xml'
  },

  // LOGÍSTICA
  { 
    url: 'https://feeds.bbci.co.uk/news/business/rss.xml', 
    category: 'Logística',
    fallback: null,
    parser: 'xml'
  },

  // FINANÇAS
  { 
    url: 'https://feeds.bbci.co.uk/news/business/rss.xml', 
    category: 'Finanças',
    fallback: null,
    parser: 'xml'
  },

  // SUPPLY CHAIN
  { 
    url: 'https://feeds.bbci.co.uk/news/business/rss.xml', 
    category: 'Supply Chain',
    fallback: null,
    parser: 'xml'
  },

  // GESTÃO
  { 
    url: 'https://feeds.bbci.co.uk/news/business/rss.xml', 
    category: 'Gestão',
    fallback: null,
    parser: 'xml'
  },

  // INTERNACIONAL
  { 
    url: 'https://feeds.bbci.co.uk/news/business/rss.xml', 
    category: 'Internacional',
    fallback: null,
    parser: 'xml'
  },

  // PMEs
  { 
    url: 'https://feeds.bbci.co.uk/news/business/rss.xml', 
    category: 'PMEs',
    fallback: null,
    parser: 'xml'
  },

  // OUTROS
  { 
    url: 'https://feeds.bbci.co.uk/news/business/rss.xml', 
    category: 'Outros',
    fallback: null,
    parser: 'xml'
  }
];

// Headers otimizados que funcionam
const WORKING_HEADERS = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
  'Accept-Language': 'pt-BR,pt;q=0.9,en;q=0.8',
  'Accept-Encoding': 'gzip, deflate',
  'Connection': 'keep-alive',
  'Upgrade-Insecure-Requests': '1',
  'Cache-Control': 'no-cache'
};

// Função para criar slug
function createSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .substring(0, 60);
}

// Função para extrair imagem do RSS (MELHORADA)
function extractImageFromRssItem(itemText: string): string | null {
  // Tentar diferentes padrões de imagem
  const patterns = [
    /<image[^>]*>([\s\S]*?)<\/image>/i,
    /<enclosure[^>]*url="([^"]*)"[^>]*type="image[^"]*"[^>]*>/i,
    /<media:content[^>]*url="([^"]*)"[^>]*medium="image"[^>]*>/i,
    /<media:thumbnail[^>]*url="([^"]*)"[^>]*>/i,
    /<img[^>]*src="([^"]*)"[^>]*>/i,
    /<og:image[^>]*content="([^"]*)"[^>]*>/i,
    /<meta[^>]*property="og:image"[^>]*content="([^"]*)"[^>]*>/i
  ];

  for (const pattern of patterns) {
    const match = itemText.match(pattern);
    if (match && match[1]) {
      const url = match[1].trim();
      if (url.startsWith('http')) {
        return url;
      }
    }
  }

  return null;
}

// Função para buscar imagem da página da fonte
async function fetchMainImageFromSourcePage(url: string): Promise<string | null> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);
    
    const res = await fetch(url, {
      headers: WORKING_HEADERS,
      signal: controller.signal
    });
    clearTimeout(timeoutId);
    
    if (!res.ok) return null;
    
    const html = await res.text();
    
    // Buscar Open Graph image
    const ogMatch = html.match(/<meta[^>]*property="og:image"[^>]*content="([^"]*)"[^>]*>/i);
    if (ogMatch && ogMatch[1]) return ogMatch[1].trim();
    
    // Buscar Twitter image
    const twitterMatch = html.match(/<meta[^>]*name="twitter:image"[^>]*content="([^"]*)"[^>]*>/i);
    if (twitterMatch && twitterMatch[1]) return twitterMatch[1].trim();
    
    // Buscar primeira imagem grande
    const imgMatch = html.match(/<img[^>]*src="([^"]*)"[^>]*width="[5-9][0-9][0-9]"[^>]*>/i);
    if (imgMatch && imgMatch[1]) return imgMatch[1].trim();
    
    return null;
  } catch (error) {
    return null;
  }
}

// Função para buscar imagem segura no Unsplash por categoria (RESTAURADA)
async function fetchUnsplashImageByCategory(category: string): Promise<string | null> {
  try {
    const accessKey = process.env.UNSPLASH_ACCESS_KEY;
    if (!accessKey) {
      console.log('⚠️ UNSPLASH_ACCESS_KEY não configurada');
      return null;
    }
    
    // Termos seguros e futuristas por categoria
    const safeTerms: Record<string, string> = {
      'Estratégia Internacional': 'global strategy, world map, business, modern, abstract, future',
      'Business Intelligence': 'data analytics, dashboard, technology, modern, abstract, future',
      'Importação': 'container ship, cargo, logistics, modern, abstract, future',
      'Exportação': 'export, shipping, logistics, modern, abstract, future',
      'Compliance': 'compliance, law, contract, modern, abstract, future',
      'Logística': 'logistics, warehouse, transport, modern, abstract, future',
      'Finanças': 'finance, fintech, money, modern, abstract, future',
      'Supply Chain': 'supply chain, network, logistics, modern, abstract, future',
      'Gestão': 'management, leadership, business, modern, abstract, future',
      'Internacional': 'international, globe, world, modern, abstract, future',
      'PMEs': 'small business, entrepreneur, modern, abstract, future',
      'Outros': 'business, technology, modern, abstract, future',
    };
    
    const query = safeTerms[category] || safeTerms['Outros'];
    const url = `https://api.unsplash.com/photos/random?query=${encodeURIComponent(query)}&orientation=landscape&client_id=${accessKey}`;
    
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);
    
    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    
    clearTimeout(timeoutId);
    
    if (!res.ok) {
      console.log(`❌ Unsplash API error: ${res.status}`);
      return null;
    }
    
    const data = await res.json();
    const img = data?.urls?.regular || null;
    const desc = (data?.description || '').toLowerCase();
    const altDesc = (data?.alt_description || '').toLowerCase();
    
    // Filtro extra: não aceitar imagens com pessoas, marcas, ou conteúdo sensível
    if (
      img &&
      !desc.includes('person') &&
      !desc.includes('people') &&
      !desc.includes('face') &&
      !desc.includes('brand') &&
      !desc.includes('logo') &&
      !altDesc.includes('person') &&
      !altDesc.includes('people') &&
      !altDesc.includes('face') &&
      !altDesc.includes('brand') &&
      !altDesc.includes('logo')
    ) {
      console.log(`✅ Imagem Unsplash encontrada para ${category}: ${img}`);
      return img;
    }
    
    return null;
  } catch (error) {
    console.error('❌ Erro ao buscar imagem no Unsplash:', error);
    return null;
  }
}

// Função para obter imagem padrão OLV por categoria (fallback)
function getDefaultImageForCategory(category: string): string {
  const map: Record<string, string> = {
    'Estratégia Internacional': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    'Business Intelligence': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    'Importação': 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800',
    'Exportação': 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800',
    'Compliance': 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800',
    'Logística': 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800',
    'Finanças': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    'Supply Chain': 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800',
    'Gestão': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    'Internacional': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    'PMEs': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    'Outros': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
  };
  return map[category] || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800';
}

// Função para retry com backoff
async function retryWithBackoff(fn: () => Promise<any>, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (error: any) {
      if (i === maxRetries - 1) throw error;
      if (error.message?.includes('rate limit')) {
        await new Promise(resolve => setTimeout(resolve, Math.pow(2, i) * 1000));
      }
    }
  }
}

// Função para gerar conteúdo COMPLETO com OpenAI (RESTAURADA)
async function generatePostContent(item: any, source: any, coverUrl: string | null) {
  try {
    const prompt = {
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: `
Você é um editor-chefe de um blog institucional premium focado em comércio exterior, negócios internacionais e PMEs brasileiras. Sua missão é transformar notícias de fontes oficiais em cards editoriais de alta qualidade para o Blog OLV Internacional.

Regras obrigatórias:
- Reescreva o TÍTULO em português (PT-BR), de forma editorial, clara, atrativa e profissional. Não traduza literalmente: adapte para o público brasileiro, com foco em PMEs e contexto nacional.
- Gere um RESUMO (lead) de até 500 caracteres, em até duas frases, objetivo, técnico e que estimule o clique.
- Traduza/adapte e reescreva o CONTEÚDO COMPLETO da matéria, em português, de forma clara, consultiva, sofisticada e fiel ao original, sem copiar trechos literais. Estruture o texto em até 10 parágrafos coesos, mantendo tabelas, listas e destaques, se houver. Se a matéria for menor, traga tudo; se for maior, faça um resumo editorial mantendo o sentido e a qualidade. Nunca inclua prefixos YAML, JSON ou metadados, apenas o texto limpo e bem formatado.
- Classifique a matéria em uma das categorias: Estratégia Internacional, Business Intelligence, Importação, Exportação, Compliance, Logística, Finanças, Supply Chain, Gestão, Internacional, PMEs, Outros.
- Se houver imagem destacada (Open Graph ou similar), use-a; caso contrário, indique "imagem padrão OLV + categoria".
- Informe a DATA da matéria original (ou de ingestão, se indisponível).
- Inclua o NOME da FONTE (ex: Reuters, ComexStat) e o LINK da FONTE ORIGINAL.
- O conteúdo deve ser claro, sem clickbait, sem erros gramaticais, e com tom consultivo premium, elegante e objetivo.

Formato de resposta obrigatório (JSON):
{
  "titulo": "...",
  "resumo": "...",
  "conteudo": "...",
  "categoria": "...",
  "imagem": "...",
  "data": "...",
  "fonte_nome": "...",
  "fonte_url": "..."
}
          `.trim()
        },
        {
          role: 'user',
          content: `
Título original: ${item.title}
Conteúdo original: ${item.description}
Link: ${item.link}
Data: ${item.published_at}
Imagem: ${coverUrl || 'não informada'}
          `.trim()
        }
      ],
      temperature: 0.4,
    };

    const completion = await retryWithBackoff(() => 
      openai.chat.completions.create(prompt as any)
    );
    
    const response = completion.choices[0]?.message?.content || '';
    
    try {
      const json = JSON.parse(response);
      // Se a imagem não for uma URL, substitui pela imagem padrão OLV da categoria
      if (!json.imagem || !json.imagem.startsWith('http')) {
        json.imagem = getDefaultImageForCategory(json.categoria);
      }
      return json;
    } catch (e) {
      console.error('❌ Erro ao fazer parse do JSON do OpenAI:', response);
      return null;
    }
  } catch (error) {
    console.error('❌ Erro OpenAI:', error);
    return null;
  }
}

// Função para buscar RSS feed
async function fetchRssFeed(source: any) {
  const urls = [source.url];
  if (source.fallback) urls.push(source.fallback);

  for (const url of urls) {
    try {
      console.log(`🔍 Tentando: ${source.category} - ${url}`);
      
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000); // 15s timeout
      
      const res = await fetch(url, {
        headers: WORKING_HEADERS,
        signal: controller.signal,
        redirect: 'follow',
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
          const pubDateMatch = itemText.match(/<pubDate[^>]*>([\s\S]*?)<\/pubDate>/i);
          
          const title = titleMatch && titleMatch[1] ? titleMatch[1].trim() : '';
          const link = linkMatch && linkMatch[1] ? linkMatch[1].trim() : '';
          const description = descriptionMatch && descriptionMatch[1] ? descriptionMatch[1].trim() : '';
          
          if (!title || !link) {
            return null;
          }

          // Extrair data de publicação
          let publishedAt = new Date().toISOString();
          if (pubDateMatch && pubDateMatch[1]) {
            try {
              const pubDate = new Date(pubDateMatch[1].trim());
              if (!isNaN(pubDate.getTime())) {
                publishedAt = pubDate.toISOString();
              }
            } catch (e) {
              console.log('⚠️ Erro ao parsear data:', pubDateMatch[1]);
            }
          }
          
          return {
            title,
            link,
            description,
            source_url: url,
            published_at: publishedAt
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

// Função para processar um feed (COMPLETA RESTAURADA)
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

        // 1. Tenta extrair imagem real do feed
        let cover = extractImageFromRssItem(item.description);
        
        // 2. Se não houver, busca imagem principal da página da fonte
        if (!cover && item.link) {
          cover = await fetchMainImageFromSourcePage(item.link);
        }
        
        // 3. Se ainda não houver, busca no Unsplash pela categoria (RESTAURADO)
        if (!cover) {
          cover = await fetchUnsplashImageByCategory(source.category);
        }
        
        // 4. Se ainda não houver, usa imagem padrão OLV
        if (!cover) {
          cover = getDefaultImageForCategory(source.category);
        }

        // 4. Gerar conteúdo COMPLETO com OpenAI
        const mdx = await generatePostContent(item, source, cover);
        
        if (!mdx) {
          console.log(`❌ Falha na geração de conteúdo para: ${item.title}`);
          continue;
        }

        // 5. Inserir no Supabase com conteúdo COMPLETO
        const { error } = await supabase.from('posts').insert({
          slug: createSlug(mdx.titulo),
          title: mdx.titulo,
          excerpt: mdx.resumo,
          content_mdx: mdx.conteudo, // conteúdo completo traduzido/adaptado
          category: mdx.categoria,
          cover_url: mdx.imagem,
          source_name: mdx.fonte_nome || new URL(item.source_url).hostname,
          source_url: mdx.fonte_url || item.link,
          status: 'published',
          author: 'Equipe OLV',
          published_at: item.published_at,
        });

        if (error) {
          console.error('❌ Erro ao inserir no Supabase:', error);
          continue;
        }

        console.log('✅ Artigo inserido:', mdx.titulo);
        processed++;

        // Delay entre artigos para evitar rate limiting
        await new Promise(resolve => setTimeout(resolve, 2000));
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

  // Executa a ingestão COMPLETA RESTAURADA
  if (force) {
    try {
      console.log('🚀 Iniciando ingestão COMPLETA RESTAURADA com OpenAI...');
      
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
          await new Promise(resolve => setTimeout(resolve, 3000));
        } catch (error) {
          console.error(`❌ Erro ao processar ${source.category}:`, error);
        }
      }

      return NextResponse.json({
        success: true,
        message: `✅ Ingestão COMPLETA RESTAURADA concluída. ${totalProcessed} artigos processados de ${successCount}/${SOURCES.length} categorias.`,
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