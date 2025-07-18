import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import OpenAI from 'openai';
import { XMLParser } from 'fast-xml-parser';
import slugify from 'slugify';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

// Fontes RSS reais - 42 feeds
const SOURCES = [
  // Comércio Exterior e Logística Internacional
  { url: 'https://www.comexstat.mdic.gov.br/feed/', category: 'Comércio Exterior' },
  { url: 'https://www.gov.br/receitafederal/pt-br/assuntos/noticias/feed', category: 'Comércio Exterior' },
  { url: 'https://www.gov.br/mdic/pt-br/assuntos/noticias/feed', category: 'Comércio Exterior' },
  { url: 'https://www.gov.br/antaq/pt-br/assuntos/noticias/feed', category: 'Logística' },
  { url: 'https://www.gov.br/anvisa/pt-br/assuntos/noticias/feed', category: 'Compliance' },
  { url: 'https://portosenavios.com.br/feed/', category: 'Logística' },
  { url: 'https://www.porttechnology.org/feed/', category: 'Logística' },
  { url: 'https://www.worldmaritimenews.com/feed/', category: 'Logística' },
  { url: 'https://www.tradewindsnews.com/rss', category: 'Logística' },
  { url: 'https://www.hellenicshippingnews.com/feed/', category: 'Logística' },
  { url: 'https://www.joc.com/rss', category: 'Logística' },
  { url: 'https://www.seatrade-maritime.com/rss', category: 'Logística' },
  { url: 'https://www.bcb.gov.br/novosnoticias/rss/noticias.xml', category: 'Finanças' },
  { url: 'https://valor.globo.com/rss/feed/feed.xml', category: 'Finanças' },
  { url: 'https://www.bloomberg.com/feed/podcast/etf-report.xml', category: 'Finanças' },
  { url: 'https://www.investing.com/rss/news_301.rss', category: 'Finanças' },
  { url: 'https://economia.estadao.com.br/rss.xml', category: 'Finanças' },
  { url: 'https://www.reuters.com/rssCommoditiesNews', category: 'Finanças' },
  { url: 'https://www.agrolink.com.br/rss/exportacao.xml', category: 'Exportação' },
  { url: 'https://g1.globo.com/rss/g1/economia/agronegocio/', category: 'Exportação' },
  { url: 'https://www.abag.com.br/rss/noticias.xml', category: 'Exportação' },
  { url: 'https://www.abimaq.org.br/rss/noticias.xml', category: 'Exportação' },
  { url: 'https://www.cnabrasil.org.br/rss/agroexportacao.xml', category: 'Exportação' },
  { url: 'https://scm.mit.edu/feed/', category: 'Supply Chain' },
  { url: 'https://www.supplychaindive.com/rss/', category: 'Supply Chain' },
  { url: 'https://www.logisticsmgmt.com/rss/', category: 'Supply Chain' },
  { url: 'https://www.freightwaves.com/rss', category: 'Supply Chain' },
  { url: 'https://www.inboundlogistics.com/rss/', category: 'Supply Chain' },
  { url: 'https://theloadstar.com/feed/', category: 'Supply Chain' },
  { url: 'https://www.ttnews.com/rss', category: 'Supply Chain' },
  { url: 'https://www.smartindustry.com/rss/', category: 'Supply Chain' },
  { url: 'https://www.tradecompliance.com/rss', category: 'Compliance' },
  { url: 'https://www.wto.org/english/news_e/rss_e/rss_e.xml', category: 'Compliance' },
  { url: 'https://www.export.gov/rss', category: 'Compliance' },
  { url: 'https://www.customstoday.com/rss', category: 'Compliance' },
  { url: 'https://www.trade.gov/rss.xml', category: 'Compliance' },
  { url: 'https://www.globalcompliancepanel.com/rss', category: 'Compliance' },
  { url: 'https://www.oecd.org/trade/rss.xml', category: 'Internacional' },
  { url: 'https://unctad.org/rss.xml', category: 'Internacional' },
  { url: 'https://iccwbo.org/rss/', category: 'Internacional' },
  { url: 'https://data.worldbank.org/rss', category: 'Internacional' },
  { url: 'https://www.imf.org/rss', category: 'Internacional' }
];

const xmlParser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: '' });

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

// Função para buscar RSS feed
async function fetchRssFeed(url: string) {
  try {
    const res = await fetch(url);
    const text = await res.text();
    const parsed = xmlParser.parse(text);
    const items = parsed.rss?.channel?.item ?? [];
    return items.map((it: any) => ({
      title: it.title,
      link: it.link,
      pubDate: it.pubDate,
      description: it.description ?? '',
    }));
  } catch (error) {
    console.error(`Erro ao buscar RSS: ${url}`, error);
    return [];
  }
}

// Função para gerar conteúdo com OpenAI
async function generatePostContent(title: string, sourceText: string, link: string, pubDate: string) {
  try {
    const prompt = {
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: `Você é um especialista em comércio exterior e logística internacional. 
          Crie um artigo em português brasileiro baseado na notícia fornecida. 
          O artigo deve ser objetivo, técnico e útil para PMEs brasileiras. 
          Use linguagem clara e profissional.`
        },
        {
          role: 'user',
          content: `Título original: ${title}
          
          Conteúdo fonte: ${sourceText}
          
          Link: ${link}
          Data: ${pubDate}
          
          Crie um artigo completo em português brasileiro com:
          1. Título atrativo e profissional
          2. Resumo executivo (2-3 frases)
          3. Conteúdo completo (4-6 parágrafos)
          4. Foco em implicações para PMEs brasileiras
          5. Linguagem técnica mas acessível`
        }
      ],
      max_tokens: 800,
      temperature: 0.7
    };

    const completion = await retryWithBackoff(() => openai.chat.completions.create(prompt as any));
    return completion.choices[0]?.message?.content || '';
  } catch (error) {
    console.error('Erro ao gerar conteúdo:', error);
    return '';
  }
}

// Função para processar um feed real
async function processFeed(url: string, category: string) {
  try {
    console.log(`Processando: ${url}`);
    
    const items = await fetchRssFeed(url);
    if (!items.length) {
      console.log(`Nenhum item encontrado em: ${url}`);
      return 0;
    }

    let processed = 0;
    const latest = items.slice(0, 2); // Processa apenas os 2 mais recentes

    for (const item of latest) {
      try {
        // Verificar se já existe
        const { data: existing } = await supabase
          .from('posts')
          .select('slug')
          .eq('slug', slugify(item.title, { lower: true, strict: true }))
          .single();

        if (existing) {
          console.log(`Post já existe: ${item.title}`);
          continue;
        }

        // Gerar conteúdo
        const content = await generatePostContent(
          item.title,
          item.description,
          item.link,
          item.pubDate
        );

        if (!content) {
          console.log(`Falha ao gerar conteúdo para: ${item.title}`);
          continue;
        }

        // Inserir no Supabase
        const { error } = await supabase.from('posts').insert({
          slug: slugify(item.title, { lower: true, strict: true }),
          title: item.title,
          excerpt: content.substring(0, 200) + '...',
          content_mdx: content,
          category: category,
          cover_url: 'https://images.unsplash.com/photo-1667895622485-b0b37a7250c1?w=800',
          source_name: new URL(url).hostname,
          source_url: item.link,
          status: 'published',
          author: 'Equipe OLV',
          published_at: new Date().toISOString(),
        });

        if (error) {
          console.error('Erro ao inserir no Supabase:', error);
          continue;
        }

        console.log('Artigo inserido com sucesso:', item.title);
        processed++;

        // Delay entre artigos
        await new Promise(resolve => setTimeout(resolve, 1000));
      } catch (error) {
        console.error('Erro ao processar item:', error);
      }
    }

    return processed;
  } catch (error) {
    console.error('Erro ao processar feed:', error);
    return 0;
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

  // Executa a ingestão real com todas as fontes
  if (force) {
    try {
      console.log('Iniciando ingestão forçada com 42 fontes RSS...');
      
      let totalProcessed = 0;
      let successCount = 0;

      for (const source of SOURCES) {
        try {
          const processed = await processFeed(source.url, source.category);
          if (processed > 0) {
            successCount++;
            totalProcessed += processed;
          }
          
          // Delay entre feeds para evitar rate limiting
          await new Promise(resolve => setTimeout(resolve, 2000));
        } catch (error) {
          console.error(`Erro ao processar ${source.url}:`, error);
        }
      }

      return NextResponse.json({
        success: true,
        message: `Ingestão forçada concluída. ${totalProcessed} artigos processados de ${successCount}/${SOURCES.length} feeds com sucesso.`,
        processed: totalProcessed,
        total: SOURCES.length,
        successfulFeeds: successCount
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