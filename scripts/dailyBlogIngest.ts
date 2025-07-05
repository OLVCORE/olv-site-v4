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

// Função para obter imagem padrão OLV por categoria
function getDefaultImageForCategory(category: string) {
  const map: Record<string, string> = {
    'Estratégia Internacional': '/images/blog/default-internacional.png',
    'Business Intelligence': '/images/blog/default-bi.png',
    'Importação': '/images/blog/default-importacao.png',
    'Exportação': '/images/blog/default-exportacao.png',
    'Compliance': '/images/blog/default-compliance.png',
    'Logística': '/images/blog/default-logistica.png',
    'Finanças': '/images/blog/default-financas.png',
    'Supply Chain': '/images/blog/default-supplychain.png',
    'Gestão': '/images/blog/default-gestao.png',
    'Internacional': '/images/blog/default-internacional.png',
    'PMEs': '/images/blog/default-pmes.png',
    'Outros': '/images/blog/default-outros.png',
  };
  return map[category] || '/images/blog/default-news.svg';
}

// NOVA FUNÇÃO BLINDADA
async function generatePostContent(
  title: string,
  sourceText: string,
  link: string,
  pubDate: string,
  cover: string | null
) {
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
- Classifique a matéria em uma das categorias: Estratégia Internacional, Business Intelligence, Importação, Exportação, Compliance, Logística, Finanças, Supply Chain, Gestão, Internacional, PMEs, Outros.
- Se houver imagem destacada (Open Graph ou similar), use-a; caso contrário, indique "imagem padrão OLV + categoria".
- Informe a DATA da matéria original (ou de ingestão, se indisponível).
- Inclua o link da FONTE ORIGINAL.
- O conteúdo deve ser claro, sem clickbait, sem erros gramaticais, e com tom consultivo premium.

Formato de resposta obrigatório (JSON):
{
  "titulo": "...",
  "resumo": "...",
  "categoria": "...",
  "imagem": "...",
  "data": "...",
  "fonte": "..."
}
      `.trim()
      },
      {
        role: 'user',
        content: `
Título original: ${title}
Conteúdo original: ${sourceText}
Link: ${link}
Data: ${pubDate}
Imagem: ${cover || 'não informada'}
        `.trim()
      }
    ],
    temperature: 0.4,
  };
  const completion = await openai.chat.completions.create(prompt as any);
  const response = completion.choices[0].message?.content ?? '';
  try {
    const json = JSON.parse(response);
    // Se a imagem não for uma URL, substitui pela imagem padrão OLV da categoria
    if (!json.imagem || !json.imagem.startsWith('http')) {
      json.imagem = getDefaultImageForCategory(json.categoria);
    }
    return json;
  } catch (e) {
    console.error('Erro ao fazer parse do JSON do OpenAI:', response);
    return null;
  }
}

// AJUSTE BLINDADO: log detalhado do resultado do upsert
async function upsertPost({ title, excerpt, content, category, cover }: { title: string; excerpt: string; content: string; category: string; cover: string | null }) {
  const slug = slugify(title, { lower: true, strict: true });
  const frontMatter = matter.stringify(content, {
    title,
    excerpt,
    category,
    cover_url: cover,
  });
  const { data, error } = await supabase.from('posts').upsert(
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
  // LOG DETALHADO
  console.log('Supabase upsert data:', data);
  console.log('Supabase upsert error:', error);
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
  console.log('==== INÍCIO DA INGESTÃO BLINDADA ====');
  for (const src of SOURCES) {
    console.log('Fetching:', src.url);
    try {
      const t0 = Date.now();
      const items = await fetchRssFeed(src.url);
      console.log(`[${src.url}] Itens encontrados:`, items.length);
      const latest = items.slice(0, 2); // max 2 per category per run
      for (const item of latest) {
        const start = Date.now();
        let parsing_status = 'ok';
        let parsing_error = null;
        let mdx = null;
        try {
          console.log(`[${src.url}] Processando título:`, item.title);
          mdx = await generatePostContent(
            item.title,
            item.description ?? item.title,
            item.link,
            item.pubDate,
            null
          );
          console.log(`[${src.url}] OpenAI resposta recebida para:`, item.title, 'Tamanho:', mdx ? JSON.stringify(mdx).length : 0);
        } catch (err: any) {
          parsing_status = 'error';
          parsing_error = err.message;
          console.error(`[${src.url}] Erro OpenAI:`, err.message);
        }
        const exec_time_ms = Date.now() - start;
        try {
          if (parsing_status === 'ok' && mdx) {
            await upsertPost({
              title: mdx.titulo,
              excerpt: mdx.resumo,
              content: mdx.resumo, // ou mdx.conteudo se quiser o texto completo
              category: mdx.categoria,
              cover: mdx.imagem,
            });
            console.log(`[${src.url}] Inserido no Supabase:`, mdx.titulo);
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
          console.error(`[${src.url}] Erro ao inserir no Supabase:`, err.message);
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
        message: 'Batch processado',
        stderr: null,
      });
    } catch (err: any) {
      console.error(`[${src.url}] Erro geral:`, err.message);
      await logIngest({
        source: src.url,
        rss_title: null,
        parsing_status: 'fatal',
        parsing_error: err.message,
        exec_time_ms: 0,
        status: 'erro',
        message: 'Erro geral no batch',
        stderr: err.message,
      });
    }
  }
}

if (require.main === module) {
  run().then(() => {
    console.log('Ingestão finalizada.');
    process.exit(0);
  });
}