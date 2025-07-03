import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import FaqPageClient from './FaqPageClient';
import React from 'react';

// Palavras-chave globais do layout (atualizadas com a lista consolidada)
const globalKeywords = 'consultoria exportação, consultoria importação, exportação produtos, logística internacional, 3PL, 4PL, como exportar legalmente, especialistas comex, abra importadora, importação sem burocracia, suporte total comex, comex empresas PME, planeje exportação, importar segurança, exportação iniciantes, documentação comex, treinamento comércio, desembaraço aduaneiro rápido, planejamento tributário comex, passo a passo exportação, exportar alimentos Brasil, importar redução fiscal, consultoria radar siscomex, regularize empresa comex, exportar baixo custo, importação revenda, exportação café soja, logística 3PL exportação, montamos operação comex, suporte radar embarque, exportação sem erros, reduzir custos importação, exportação legalizada fácil, exportar lucro real, comex PMEs, consultoria comex in-company, comex on-demand, logística internacional end-to-end, operação comex in-house, comex baixo risco, exportação perecíveis, cadeia fria exportação, como exportar Brasil, compliance export control EUA UE, documentação comércio exterior, financiamento EXIM, marketing internacional PMEs, termos pagamento comércio exterior, exportação estratégica PMEs, radar siscomex, redução fiscal importação, custos armazenagem alfandegada, incoterms 2020, licenciamento anvisa importação, due diligence global, supply chain resiliente, plano internacionalização PME, gestão risco cambial, linhas financiamento PMEs, otimização estoques importadores, exportar açúcar, exportar carne halal, draw-back suspensão, certificado origem, classificação fiscal NCM, licenciar LI siscomex, bonded warehouse, demurrage portuário, freight forwarder, fumigação grãos, VGM contêiner, shipping instructions, simulador custo importação, simulador frete internacional OLV, simulador impostos importação, digitalização processos comex, RPA comércio exterior, compliance internacional obrigatório, importação bens capital, importação commodities, importação insumos matérias-primas, plataformas OLV, stratevo, exceltta, connecta, engage, veritus, finx, vector, labs, ventures, core panel, OLV Internacional, integramos estratégia operação resultado, comércio exterior, importação, exportação, supply chain, consultoria comex, despacho aduaneiro, tributos importação, frete internacional, ncm, drawback, ex-tarifário, compliance, due diligence, gestão riscos, planejamento tributário, otimização custos, mercado internacional, expansão global, PME internacional, tecnologia comex, automação logística, inteligência mercado, análise dados, capacitação comex, treinamento exportação, mentorias internacionais, plataformas digitais, ecossistema OLV';

// Função para extrair palavras-chave dos artigos
function extractArticleKeywords(): string {
  try {
    const mdPaths = walkMd(BASE_CONTENT_DIR);
    const allKeywords = new Set<string>();
    
    mdPaths.forEach((fullPath) => {
      try {
        const raw = fs.readFileSync(fullPath, 'utf8');
        const { data } = matter(raw);
        
        if (data.keywords) {
          const keywords = data.keywords.split(',').map((k: string) => k.trim());
          keywords.forEach(keyword => allKeywords.add(keyword));
        }
      } catch (err) {
        console.warn(`Error reading file ${fullPath}:`, err);
      }
    });
    
    return Array.from(allKeywords).join(', ');
  } catch (err) {
    console.warn('Error extracting article keywords:', err);
    return '';
  }
}

// Combina palavras-chave globais + específicas dos artigos
const articleKeywords = extractArticleKeywords();
const combinedKeywords = `${globalKeywords}, ${articleKeywords}`;

export const metadata = {
  title: 'FAQ | OLV Internacional',
  description:
    'Perguntas frequentes sobre importação, logística, tributos, supply chain e plataformas OLV.',
  keywords: combinedKeywords,
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
    const cat = item.category || slugToLegacyCat[item.slug] || 'Outros';
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

// Fallback mapping: category -> slug[] (legacy manual listing)
const legacyCategoryMap: Record<string, string[]> = {
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
    'simulador-custo-importacao-como-usar',
  ],
  'Logística & Frete Internacional': [
    'calculo-frete-internacional-passo-a-passo',
    'escolher-transportadora-internacional',
    'seguro-de-carga-internacional',
    'demurrage-porto-como-evitar',
    'logistica-4-0-beneficios-supply-chain',
    'controle-de-riscos-aduaneiros',
    'door-to-door-logistica-internacional',
    'freight-forwarder-3pl-4pl',
    'consolidador-carga-lcl',
    'shipping-instructions-si',
    'demurrage-e-detention',
    'booking-e-cut-off-logistica-internacional',
    'inspecao-pre-embarque-pi',
    'fumigacao-granel-exportacao',
    'project-cargo-oog',
    'vgm-verificacao-massa-bruta',
    'free-time-e-storage-portuario',
    'bonded-warehouse-logistica',
  ],
  'Tributos & Regimes Aduaneiros': [
    'regimes-aduaneiros-especiais-quais-sao',
    'como-funciona-ex-tarifario',
    'drawback-suspensao-beneficios',
    'habilitar-radar-siscomex-requisitos',
    'ncm-classificacao-fiscal',
    'certificado-origem-para-aco',
    'licenciamento-anvisa-importacao',
  ],
  'Documentação & Procedimentos': [
    'documentos-necessarios-exportacao',
    'siscomex-li-declaracao-como-fazer',
    'despacho-aduaneiro-etapas',
    'diferenca-entre-incoterms-2020',
    'importacao-drop-shipping-regulamentacao',
    'passos-da-li-anvisa',
  ],
  'Consultoria Exportação': [
    'exportacao-diferencial-pmes',
    'como-exportar-legalmente',
    'planeje-sua-exportacao',
    'exportacao-para-iniciantes',
    'passo-a-passo-da-exportacao',
    'exportacao-legalizada-e-facil',
    'exportar-com-lucro-real',
    'documentacao-de-comex',
    'exportar-alimentos-do-brasil',
    'financiamento-exim-para-exportacao',
    'compliance-export-control-usa-eu',
    'cadeia-fria-exportacao-pereciveis',
    'termos-de-pagamento-exterior',
    'marketing-internacional-pmes',
  ],
  'Tecnologia & Simuladores OLV': [
    'simulador-custo-importacao-como-usar',
    'logistica-4-0-beneficios-supply-chain',
    'simulador-frete-internacional',
    'simulador-tax-importacao',
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
    'academy-o-que-e',
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
    'digitalizacao-processos-comex',
  ],
  'Consultoria Importação': [
    'abra-sua-importadora',
    'importacao-sem-burocracia',
    'importar-com-seguranca',
    'consultoria-para-radar-siscomex',
    'regularize-sua-empresa-comex',
    'planejamento-tributario-comex',
    'desembaraco-aduaneiro-rapido',
    'importar-com-reducao-fiscal',
    'reducao-de-custos-de-importacao',
    'importacao-para-revenda',
    'consultoria-importacao',
  ],
  'Exportação de Produtos': [
    'exportar-soja-do-brasil',
    'exportar-cafe-especial',
    'exportar-acucar-do-brasil',
    'exportar-carne-bovina-halal',
    'exportar-madeira-processada',
    'exportar-etanol-de-cana',
    'exportar-milho-do-brasil',
  ],
};

const slugToLegacyCat: Record<string, string> = Object.fromEntries(
  Object.entries(legacyCategoryMap).flatMap(([cat, arr]) => arr.map((s) => [s, cat])),
);

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
