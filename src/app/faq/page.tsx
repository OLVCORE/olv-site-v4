import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import MainLayout from '../../components/layout/MainLayout';
import { useState } from 'react';

export const metadata = {
  title: 'FAQ | OLV Internacional',
  description: 'Perguntas frequentes sobre importação, logística, tributos e plataformas OLV.',
  alternates: { canonical: 'https://olvinternacional.com.br/faq' },
};

const CONTENT_DIR = path.join(process.cwd(), 'content', 'answers');

interface AnswerItem { title: string; slug: string; }

function getAllAnswers(): AnswerItem[] {
  const files = fs.readdirSync(CONTENT_DIR);
  return files.map((file) => {
    const raw = fs.readFileSync(path.join(CONTENT_DIR, file), 'utf8');
    const { data } = matter(raw);
    return {
      title: data.title as string,
      slug: data.slug as string,
    };
  }) as AnswerItem[];
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
    'importacao-drop-shipping-regulamentacao'
  ],
  'Exportação & Preço de Venda': [
    'formacao-do-preco-de-exportacao'
  ],
  'Tecnologia & Simuladores OLV': [
    'simulador-custo-importacao-como-usar',
    'logistica-4-0-beneficios-supply-chain'
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

export default function FaqPage() {
  const grouped = groupByCategory(getAllAnswers());
  const [open, setOpen] = useState<string | null>(null);

  return (
    <MainLayout>
      <div className="main-content container py-10">
        <h1 className="text-3xl font-bold mb-6 text-accent">Perguntas Frequentes (FAQ)</h1>
        <div className="space-y-4">
          {Object.entries(grouped).map(([cat, items]) => (
            <div key={cat} className="border border-[#2a3448] rounded-lg">
              <button
                className="w-full text-left px-4 py-3 font-semibold flex justify-between items-center hover:bg-[#2a3448]/40"
                onClick={() => setOpen(open === cat ? null : cat)}
              >
                <span>{cat}</span>
                <span>{open === cat ? '−' : '+'}</span>
              </button>
              {open === cat && (
                <ul className="px-6 py-3 space-y-2">
                  {items.map((a) => (
                    <li key={a.slug}>
                      <Link href={`/answers/${a.slug}`} className="text-[#d4af37] hover:underline">
                        {a.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
} 