import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import FaqPageClient from './FaqPageClient';
import React from 'react';

export const metadata = {
  title: 'FAQ | OLV Internacional',
  description: 'Perguntas frequentes sobre importação, logística, tributos, supply chain e plataformas OLV.',
  keywords: 'faq, perguntas frequentes, dúvidas comex, comércio exterior, logística internacional, importação, exportação, tributos, supply chain',
  alternates: { canonical: 'https://olvinternacional.com.br/faq' },
};

// Base content directory that contains subfolders like `answers/` and new intent-based folders
const BASE_CONTENT_DIR = path.join(process.cwd(), 'content');

interface AnswerItem {
  title: string;
  slug: string;
  answer: string;
  updated?: string;
  category?: string;
}

function extractFirstParagraph(md: string) {
  const body = md.split(/\r?\n/).filter((l) => !l.trim().startsWith('#'));
  const idx = body.findIndex((l) => l.trim() !== '');
  if (idx === -1) return '';
  const end = body.slice(idx).findIndex((l) => l.trim() === '');
  const paraLines = end === -1 ? body.slice(idx) : body.slice(idx, idx + end);
  return paraLines.join(' ').replace(/\[(.*?)\]\([^)]*\)/g, '$1');
}

// Recursively walk through all markdown files under `content/`
function walkMd(dir: string): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files: string[] = [];
  for (const ent of entries) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) files.push(...walkMd(full));
    else if (ent.isFile() && ent.name.endsWith('.md')) files.push(full);
  }
  return files;
}

function getAllAnswers(): AnswerItem[] {
  const mdPaths = walkMd(BASE_CONTENT_DIR);
  return mdPaths.map((fullPath) => {
    const raw = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(raw);
    const file = path.basename(fullPath);
    return {
      title: data.title as string,
      slug: (data.slug as string) || file.replace(/\.md$/, ''),
      answer: extractFirstParagraph(content),
      updated: data.updated as string | undefined,
      category: data.category as string | undefined,
    };
  });
}

function groupByCategory(all: AnswerItem[]) {
  const raw: Record<string, AnswerItem[]> = {};

  // first, group by explicit category in front-matter when available
  all.forEach((item) => {
    const cat = item.category || 'Outros';
    raw[cat] ??= [];
    raw[cat].push(item);
  });

  // sort items alphabetically inside each category
  Object.keys(raw).forEach((cat) => {
    raw[cat] = raw[cat].sort((a, b) => a.title.localeCompare(b.title, 'pt-BR'));
  });

  // return object with alphabetical category keys for stable UI order
  return Object.fromEntries(
    Object.keys(raw)
      .sort((a, b) => a.localeCompare(b, 'pt-BR'))
      .map((k) => [k, raw[k]]),
  );
}

function buildFaqSchema(grouped: Record<string, AnswerItem[]>): string {
  const qaList = Object.values(grouped)
    .flat()
    .slice(0, 30)
    .map((a) => ({
      '@type': 'Question',
      name: a.title,
      acceptedAnswer: {
        '@type': 'Answer',
        text: a.answer,
      },
    }));
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: qaList,
  });
}

export default function FaqPage() {
  const grouped = groupByCategory(getAllAnswers());
  const schemaJson = buildFaqSchema(grouped);
  return (
    <>
      <FaqPageClient grouped={grouped} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schemaJson }}
      />
    </>
  );
} 