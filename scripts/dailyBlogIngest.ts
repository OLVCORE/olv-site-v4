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

// Simple RSS list per category (can be expanded)
const SOURCES: Source[] = [
  {
    url: 'https://www.porttechnology.org/feed/',
    category: 'Logística',
  },
  {
    url: 'https://www.joc.com/rss',
    category: 'Logística',
  },
  {
    url: 'https://www.globalcompliancepanel.com/rss',
    category: 'Compliance',
  },
  {
    url: 'https://www.trade.gov/rss.xml',
    category: 'Exportação',
  },
  {
    url: 'https://www.reuters.com/rssCommoditiesNews',
    category: 'Finanças',
  },
  // add more feeds per category
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

async function generatePostContent(title: string, sourceText: string) {
  const prompt = {
    model: 'gpt-4o-mini',
    messages: [
      {
        role: 'system',
        content:
          'Você é um redator especializado em comércio exterior. Resuma a notícia abaixo em português num formato de artigo MDX de 400-600 palavras, incluindo subtítulos, lista de pontos-chave e call-to-action final para consultoria.\nUse markdown comum (##, ###, -, **). Não inclua imagens.',
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

run(); 