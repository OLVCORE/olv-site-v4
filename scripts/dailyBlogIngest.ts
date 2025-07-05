// @ts-nocheck

import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';
import OpenAI from 'openai';
import slugify from 'slugify';
import matter from 'gray-matter';
import { XMLParser } from 'fast-xml-parser';

/**
 * ENV required:
 *  SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, OPENAI_API_KEY
 */
const supabaseUrl = process.env.SUPABASE_URL as string;
const supabaseKey = (process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SERVICE_ROLE_KEY) as string;
const openaiKey = process.env.OPENAI_API_KEY as string;

if (!supabaseUrl || !supabaseKey || !openaiKey) {
  console.error('Missing env vars');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: { persistSession: false },
});

const openai = new OpenAI({ apiKey: openaiKey });

interface Source {
  url: string;
  category: string;
}

// Fontes RSS expandidas para 42 feeds conforme recomendação
const SOURCES: Source[] = [
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
  
  // Finanças, Câmbio e Economia Internacional
  { url: 'https://www.bcb.gov.br/novosnoticias/rss/noticias.xml', category: 'Finanças' },
  { url: 'https://valor.globo.com/rss/feed/feed.xml', category: 'Finanças' },
  { url: 'https://www.bloomberg.com/feed/podcast/etf-report.xml', category: 'Finanças' },
  { url: 'https://www.investing.com/rss/news_301.rss', category: 'Finanças' },
  { url: 'https://economia.estadao.com.br/rss.xml', category: 'Finanças' },
  { url: 'https://www.reuters.com/rssCommoditiesNews', category: 'Finanças' },
  
  // Exportação Agrícola, Indústria e Setores Específicos
  { url: 'https://www.agrolink.com.br/rss/exportacao.xml', category: 'Exportação' },
  { url: 'https://g1.globo.com/rss/g1/economia/agronegocio/', category: 'Exportação' },
  { url: 'https://www.abag.com.br/rss/noticias.xml', category: 'Exportação' },
  { url: 'https://www.abimaq.org.br/rss/noticias.xml', category: 'Exportação' },
  { url: 'https://www.cnabrasil.org.br/rss/agroexportacao.xml', category: 'Exportação' },
  
  // Inovação, Tecnologia e Supply Chain
  { url: 'https://scm.mit.edu/feed/', category: 'Supply Chain' },
  { url: 'https://www.supplychaindive.com/rss/', category: 'Supply Chain' },
  { url: 'https://www.logisticsmgmt.com/rss/', category: 'Supply Chain' },
  { url: 'https://www.freightwaves.com/rss', category: 'Supply Chain' },
  { url: 'https://www.inboundlogistics.com/rss/', category: 'Supply Chain' },
  { url: 'https://theloadstar.com/feed/', category: 'Supply Chain' },
  { url: 'https://www.ttnews.com/rss', category: 'Supply Chain' },
  { url: 'https://www.smartindustry.com/rss/', category: 'Supply Chain' },
  
  // Compliance, Exportação Legal e Operações Internacionais
  { url: 'https://www.tradecompliance.com/rss', category: 'Compliance' },
  { url: 'https://www.wto.org/english/news_e/rss_e/rss_e.xml', category: 'Compliance' },
  { url: 'https://www.export.gov/rss', category: 'Compliance' },
  { url: 'https://www.customstoday.com/rss', category: 'Compliance' },
  { url: 'https://www.trade.gov/rss.xml', category: 'Compliance' },
  { url: 'https://www.globalcompliancepanel.com/rss', category: 'Compliance' },
  
  // Agências e Órgãos Oficiais Internacionais
  { url: 'https://www.oecd.org/trade/rss.xml', category: 'Internacional' },
  { url: 'https://unctad.org/rss.xml', category: 'Internacional' },
  { url: 'https://iccwbo.org/rss/', category: 'Internacional' },
  { url: 'https://data.worldbank.org/rss', category: 'Internacional' },
  { url: 'https://www.imf.org/rss', category: 'Internacional' }
];

const xmlParser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: '' });

async function fetchRssFeed(url: string) {
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
}

// Categorias expandidas conforme recomendação
const CATEGORIES = [
  'Estratégia Internacional',
  'Business Intelligence', 
  'Importação',
  'Exportação',
  'Compliance',
  'Logística',
  'Finanças',
  'Supply Chain',
  'Gestão',
  'Internacional',
  'PMEs',
  'Outros'
];

async function generatePostContent(title: string, sourceText: string) {
  const prompt = {
    model: 'gpt-4o-mini',
    messages: [
      {
        role: 'system',
        content:
          'Você é um redator especializado em comércio exterior. Resuma a notícia abaixo em português num formato de artigo MDX de 400-600 palavras, incluindo subtítulos, lista de pontos-chave e call-to-action final para consultoria.\nUse markdown comum (##, ###, -, **). Não inclua imagens.\n\nCategorize automaticamente o conteúdo em uma das seguintes categorias: Estratégia Internacional, Business Intelligence, Importação, Exportação, Compliance, Logística, Finanças, Supply Chain, Gestão, Internacional, PMEs, Outros.',
      },
      {
        role: 'user',
        content: sourceText,
      },
    ],
    temperature: 0.4,
  };
  const completion = await openai.chat.completions.create(prompt as any);
  return completion.choices[0].message?.content ?? '';
}

async function upsertPost({ title, excerpt, content, category, cover }: { title: string; excerpt: string; content: string; category: string; cover: string | null }) {
  const slug = slugify(title, { lower: true, strict: true });
  const frontMatter = matter.stringify(content, {
    title,
    excerpt,
    category,
    cover_url: cover,
  });
  await supabase.from('posts').upsert(
    {
      slug,
      title,
      excerpt,
      content_mdx: frontMatter,
      category,
      cover_url: cover,
      status: 'published',
    },
    { onConflict: 'slug' },
  );
}

async function logIngest({ source, rss_title, parsing_status, parsing_error, exec_time_ms, status, message, stderr }: any) {
  await supabase.from('ingest_logs').insert([
    {
      created_at: new Date().toISOString(),
      source,
      rss_title,
      parsing_status,
      parsing_error,
      exec_time_ms,
      status,
      message,
      stderr: stderr || null,
    },
  ]);
}

async function run() {
  for (const src of SOURCES) {
    console.log('Fetching:', src.url);
    try {
      const t0 = Date.now();
      const items = await fetchRssFeed(src.url);
      const latest = items.slice(0, 2); // max 2 per category per run
      for (const item of latest) {
        const start = Date.now();
        let parsing_status = 'ok';
        let parsing_error = null;
        let mdx = '';
        try {
          mdx = await generatePostContent(item.title, item.description ?? item.title);
        } catch (err: any) {
          parsing_status = 'error';
          parsing_error = err.message;
        }
        const exec_time_ms = Date.now() - start;
        try {
          if (parsing_status === 'ok') {
            const excerpt = mdx.split('\n').find((l) => l.trim().length > 40)?.slice(0, 160) ?? '';
            await upsertPost({ title: item.title, excerpt, content: mdx, category: src.category, cover: null });
          }
          await logIngest({
            source: src.url,
            rss_title: item.title,
            parsing_status,
            parsing_error,
            exec_time_ms,
            status: parsing_status === 'ok' ? 'sucesso' : 'erro',
            message: parsing_status === 'ok' ? 'Artigo processado' : 'Erro ao processar artigo',
            stderr: null,
          });
        } catch (err: any) {
          await logIngest({
            source: src.url,
            rss_title: item.title,
            parsing_status,
            parsing_error: parsing_error || err.message,
            exec_time_ms,
            status: 'erro',
            message: 'Erro ao inserir artigo',
            stderr: err.message,
          });
        }
      }
      const exec_time_ms = Date.now() - t0;
      await logIngest({
        source: src.url,
        rss_title: null,
        parsing_status: 'batch',
        parsing_error: null,
        exec_time_ms,
        status: 'batch',
        message: 'Batch finalizado',
        stderr: null,
      });
    } catch (err: any) {
      await logIngest({
        source: src.url,
        rss_title: null,
        parsing_status: 'fatal',
        parsing_error: err.message,
        exec_time_ms: 0,
        status: 'fatal',
        message: 'Erro fatal no batch',
        stderr: err.message,
      });
    }
  }
  console.log('Ingest finished');
}

// Controle: trigger de ingestão automática para teste seguro (não altera lógica nem dados)
// Último teste: 

run(); 