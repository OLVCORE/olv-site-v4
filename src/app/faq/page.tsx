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

const CONTENT_DIR = path.join(process.cwd(), 'content', 'answers');

interface AnswerItem { title: string; slug: string; answer: string; }

function extractFirstParagraph(md: string) {
  const body = md.split(/\r?\n/).filter((l) => !l.trim().startsWith('#'));
  const idx = body.findIndex((l) => l.trim() !== '');
  if (idx === -1) return '';
  const end = body.slice(idx).findIndex((l) => l.trim() === '');
  const paraLines = end === -1 ? body.slice(idx) : body.slice(idx, idx + end);
  return paraLines.join(' ').replace(/\[(.*?)\]\([^)]*\)/g, '$1');
}

function getAllAnswers(): AnswerItem[] {
  const files = fs.readdirSync(CONTENT_DIR);
  return files.map((file) => {
    const raw = fs.readFileSync(path.join(CONTENT_DIR, file), 'utf8');
    const { data, content } = matter(raw);
    return {
      title: data.title as string,
      slug: (data.slug as string) || file.replace(/\.md$/, ''),
      answer: extractFirstParagraph(content),
    };
  });
}

// naive categorisation by slug keywords (can be replaced by front-matter category later)
const categoryMap: Record<string, string[]> = {
  'Importação – Custos & Formação de Preço': [
    'quanto-custa-importar-da-china',
    'custo-impostos-importacao',
    'planejamento-tributario-importacao',
    'cotacao-dolar-impacto-importacao',
    'negociar-cambio-para-importacao',
    'custos-portuarios-no-despacho',
    'armazenagem-alfandegada-custos',
    'trading-company-vs-importacao-propria',
    'reduzir-lead-time-importacao',
    'simulador-custo-importacao-como-usar'
  ],
  'Logística & Frete Internacional': [
    'calculo-frete-internacional-passo-a-passo',
    'escolher-transportadora-internacional',
    'seguro-de-carga-internacional',
    'demurrage-porto-como-evitar',
    'logistica-4-0-beneficios-supply-chain',
    'controle-de-riscos-aduaneiros'
  ],
  'Tributos & Regimes Aduaneiros': [
    'regimes-aduaneiros-especiais-quais-sao',
    'como-funciona-ex-tarifario',
    'drawback-suspensao-beneficios',
    'habilitar-radar-siscomex-requisitos',
    'ncm-classificacao-fiscal',
    'certificado-origem-para-aco',
    'licenciamento-anvisa-importacao'
  ],
  'Documentação & Procedimentos': [
    'documentos-necessarios-exportacao',
    'siscomex-li-declaracao-como-fazer',
    'despacho-aduaneiro-etapas',
    'diferenca-entre-incoterms-2020',
    'importacao-drop-shipping-regulamentacao',
    'passos-da-li-anvisa'
  ],
  'Exportação & Preço de Venda': [
    'formacao-do-preco-de-exportacao',
    'exportacao-diferencial-pmes'
  ],
  'Tecnologia & Simuladores OLV': [
    'simulador-custo-importacao-como-usar',
    'logistica-4-0-beneficios-supply-chain',
    'simulador-frete-internacional',
    'simulador-tax-importacao'
  ],
  'Plataformas do Ecossistema OLV': [
    'stratevo-o-que-e',
    'exceltta-o-que-e',
    'connecta-o-que-e',
    'engage-o-que-e',
    'finx-o-que-e',
    'labs-o-que-e',
    'ventures-o-que-e',
    'veritus-o-que-e',
    'core-o-que-e',
    'academy-o-que-e'
  ],
  'Estratégia de Internacionalização & Supply Chain': [
    'plano-internacionalizacao-pme',
    'escolha-mercado-alvo-exportacao',
    'supply-chain-resiliente',
    'comparativo-3pl-4pl',
    'due-diligence-global',
    'risco-cambial-hedge',
    'financiamento-exim',
    'compliance-oea',
    'otimizacao-estoques-importacao',
    'digitalizacao-processos-comex'
  ]
};

function groupByCategory(all: AnswerItem[]) {
  const grouped: Record<string, AnswerItem[]> = {};
  Object.entries(categoryMap).forEach(([cat, slugs]) => {
    grouped[cat] = all.filter((a) => slugs.includes(a.slug));
  });
  // add uncategorised
  const used = new Set(Object.values(categoryMap).flat());
  const misc = all.filter((a) => !used.has(a.slug));
  if (misc.length) grouped['Outros'] = misc;
  return grouped;
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