import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const PlatformLayout = dynamic(() => import('../../components/platforms/PlatformLayout'));

export const metadata = {
  title: 'FINX - OLV Internacional | SoluÃ§Ãµes Financeiras para ComÃ©rcio Internacional',
  description: 'FINX Ã© a plataforma financeira da OLV Internacional que oferece soluÃ§Ãµes para cÃ¢mbio, pagamentos internacionais, financiamento e gestÃ£o de risco em operaÃ§Ãµes de comÃ©rcio exterior.',
    alternates: {
    canonical: 'https://olvinternacional.com.br/finx'
  },
};

export default function FinxPage() {
  return (
    <PlatformLayout
      platformName="FINX"
      platformLogo="/images/finx-logo.jpeg"
      platformDescription="SoluÃ§Ãµes Financeiras para ComÃ©rcio Internacional"
      platformIntro="A FINX Ã© a plataforma financeira da OLV Internacional, dedicada a estruturar soluÃ§Ãµes de cÃ¢mbio, pagamentos internacionais e financiamento que potencializam resultados globais."
      platformColor="#1E6455"
    >
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-accent">Sobre a FINX</h2>
        <p className="mb-4">
          A FINX Ã© a plataforma financeira da OLV Internacional dedicada a oferecer soluÃ§Ãµes financeiras especializadas para empresas que operam no comÃ©rcio internacional.
        </p>
        <p className="mb-4">
          Nossa equipe de especialistas combina profundo conhecimento do mercado financeiro com expertise em comÃ©rcio exterior para desenvolver estratÃ©gias customizadas que otimizam resultados financeiros e minimizam riscos em operaÃ§Ãµes internacionais.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-accent">SoluÃ§Ãµes de Financiamento</h3>
            <p>EstratÃ©gias e instrumentos de financiamento otimizados para operaÃ§Ãµes de importaÃ§Ã£o e exportaÃ§Ã£o.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-accent">GestÃ£o de Risco Cambial</h3>
            <p>ProteÃ§Ã£o contra volatilidade cambial atravÃ©s de instrumentos de hedge e estratÃ©gias personalizadas.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-accent">Consultoria Financeira</h3>
            <p>OrientaÃ§Ã£o especializada para otimizar fluxos financeiros e maximizar resultados em operaÃ§Ãµes globais.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-accent">ServiÃ§os FINX</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3 text-accent">Financiamento de ComÃ©rcio Exterior</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>ACC/ACE - Adiantamento de Contrato de CÃ¢mbio/ExportaÃ§Ã£o</li>
              <li>FINIMP - Financiamento Ã  ImportaÃ§Ã£o</li>
              <li>Financiamento de projetos internacionais</li>
              <li>Carta de crÃ©dito e garantias internacionais</li>
            </ul>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3 text-accent">GestÃ£o de Riscos Financeiros</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>OperaÃ§Ãµes de hedge cambial</li>
              <li>EstratÃ©gias de proteÃ§Ã£o contra volatilidade</li>
              <li>Contratos de derivativos para mitigaÃ§Ã£o de riscos</li>
              <li>AnÃ¡lise de exposiÃ§Ã£o cambial</li>
            </ul>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3 text-accent">SoluÃ§Ãµes de Pagamento Internacional</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>OtimizaÃ§Ã£o de operaÃ§Ãµes de cÃ¢mbio</li>
              <li>GestÃ£o de contas internacionais</li>
              <li>EstruturaÃ§Ã£o de pagamentos cross-border</li>
              <li>Sistemas de recebimento global</li>
            </ul>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3 text-accent">Consultoria Financeira Internacional</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>EstruturaÃ§Ã£o de operaÃ§Ãµes financeiras internacionais</li>
              <li>AnÃ¡lise de viabilidade financeira para expansÃ£o global</li>
              <li>OtimizaÃ§Ã£o tributÃ¡ria em operaÃ§Ãµes internacionais</li>
              <li>Desenvolvimento de estratÃ©gias financeiras para comÃ©rcio exterior</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-accent">BenefÃ­cios FINX</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-accent">ReduÃ§Ã£o de Custos Financeiros</h3>
            <p>Acesso Ã s melhores linhas de financiamento e taxas do mercado, reduzindo o custo de capital para operaÃ§Ãµes internacionais.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-accent">ProteÃ§Ã£o contra Volatilidade</h3>
            <p>EstratÃ©gias eficientes de hedge que minimizam impactos de flutuaÃ§Ãµes cambiais nos resultados da empresa.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-accent">Aumento de Competitividade</h3>
            <p>Estruturas financeiras que permitem oferecer melhores condiÃ§Ãµes comerciais a clientes e fornecedores internacionais.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-accent">OtimizaÃ§Ã£o de Fluxo de Caixa</h3>
            <p>Melhoria da gestÃ£o do capital de giro em operaÃ§Ãµes internacionais, reduzindo ciclos financeiros.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-accent">ExpansÃ£o Internacional Facilitada</h3>
            <p>Suporte financeiro para viabilizar a entrada e crescimento em novos mercados com estruturas otimizadas.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-accent">SeguranÃ§a em TransaÃ§Ãµes</h3>
            <p>UtilizaÃ§Ã£o de instrumentos financeiros que garantem seguranÃ§a e reduzem riscos em transaÃ§Ãµes internacionais.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-accent">Depoimentos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <p className="italic mb-4">"A estratÃ©gia de hedge cambial desenvolvida pela FINX nos protegeu da volatilidade extrema que enfrentamos nos Ãºltimos meses, economizando milhÃµes em potenciais perdas. A expertise deles em comÃ©rcio exterior faz toda a diferenÃ§a."</p>
            <p className="font-semibold">Carlos MendonÃ§a</p>
            <p className="text-sm text-gray-600">CFO, Exportadora de Commodities</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <p className="italic mb-4">"Conseguimos uma linha de financiamento para importaÃ§Ã£o com condiÃ§Ãµes que nenhum banco tradicional oferecia. A equipe da FINX conhece profundamente as linhas disponÃ­veis no mercado e desenvolveu uma soluÃ§Ã£o sob medida para nossa empresa."</p>
            <p className="font-semibold">Fernanda Lima</p>
            <p className="text-sm text-gray-600">Diretora Financeira, IndÃºstria de Equipamentos</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-accent">FAQ - Perguntas Frequentes</h2>
        <div className="space-y-4">
          <div className="border border-gray-200 rounded-lg">
            <div className="p-4 bg-gray-50 font-semibold">
              Quais sÃ£o as principais linhas de financiamento disponÃ­veis para operaÃ§Ãµes de comÃ©rcio exterior?
            </div>
            <div className="p-4">
              As principais linhas de financiamento para comÃ©rcio exterior incluem o Adiantamento sobre Contrato de CÃ¢mbio (ACC) e o Adiantamento sobre Cambiais Entregues (ACE) para exportadores, que oferecem capital de giro antecipado com taxas competitivas. Para importadores, destacam-se o FINIMP (Financiamento Ã  ImportaÃ§Ã£o), que permite pagamentos a prazo para fornecedores internacionais, e as cartas de crÃ©dito, que garantem seguranÃ§a nas transaÃ§Ãµes. Existem tambÃ©m linhas especÃ­ficas oferecidas por bancos de desenvolvimento como BNDES Exim e agÃªncias de crÃ©dito Ã  exportaÃ§Ã£o (ECAs) de diversos paÃ­ses, alÃ©m de programas de financiamento do Banco Mundial e bancos regionais de desenvolvimento. A FINX analisa o perfil da sua empresa, o tipo de operaÃ§Ã£o e os mercados envolvidos para recomendar a soluÃ§Ã£o mais adequada, muitas vezes combinando diferentes instrumentos para otimizar custos e benefÃ­cios.
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg">
            <div className="p-4 bg-gray-50 font-semibold">
              Como proteger minha empresa contra riscos cambiais em operaÃ§Ãµes internacionais?
            </div>
            <div className="p-4">
              A proteÃ§Ã£o contra riscos cambiais (hedge) pode ser implementada atravÃ©s de diversos instrumentos e estratÃ©gias. Os contratos de cÃ¢mbio a termo (forwards) permitem fixar a taxa de cÃ¢mbio para uma data futura, eliminando a incerteza da volatilidade. OpÃ§Ãµes de cÃ¢mbio oferecem o direito (mas nÃ£o a obrigaÃ§Ã£o) de comprar ou vender moeda estrangeira a um preÃ§o predeterminado, funcionando como um "seguro" contra movimentos adversos. Swaps cambiais permitem trocar fluxos de caixa em diferentes moedas, enquanto o hedge natural envolve equilibrar receitas e despesas na mesma moeda. A FINX realiza uma anÃ¡lise detalhada da exposiÃ§Ã£o cambial da sua empresa, considerando volumes, prazos, moedas e tolerÃ¢ncia a risco para desenvolver uma estratÃ©gia personalizada de hedge, que pode incluir combinaÃ§Ãµes destes instrumentos, implementada em etapas para otimizar resultados e minimizar custos.
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg">
            <div className="p-4 bg-gray-50 font-semibold">
              Quais sÃ£o as melhores estratÃ©gias para otimizar os custos financeiros em operaÃ§Ãµes internacionais?
            </div>
            <div className="p-4">
              A otimizaÃ§Ã£o de custos financeiros em operaÃ§Ãµes internacionais requer uma abordagem multifacetada. Primeiramente, Ã© essencial diversificar as fontes de financiamento, comparando diferentes instituiÃ§Ãµes financeiras e produtos especÃ­ficos para comÃ©rcio exterior. A escolha do momento correto para fechar contratos de cÃ¢mbio, com base em anÃ¡lises tÃ©cnicas do mercado, pode gerar economias significativas. A estruturaÃ§Ã£o adequada de operaÃ§Ãµes, como o uso de triangulaÃ§Ãµes em centros financeiros eficientes ou a utilizaÃ§Ã£o de subsidiÃ¡rias em jurisdiÃ§Ãµes com acordos bilaterais favorÃ¡veis, tambÃ©m reduz custos. Negociar prazos e condiÃ§Ãµes diferenciados com fornecedores e clientes, utilizar instrumentos como factoring internacional e seguro de crÃ©dito, e implementar uma polÃ­tica eficiente de hedge sÃ£o outras estratÃ©gias importantes. A FINX analisa toda a cadeia financeira da sua operaÃ§Ã£o internacional para identificar oportunidades de otimizaÃ§Ã£o, muitas vezes conseguindo reduÃ§Ãµes de 15% a 30% nos custos financeiros totais.
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg">
            <div className="p-4 bg-gray-50 font-semibold">
              Como a FINX pode ajudar minha empresa a estruturar pagamentos e recebimentos internacionais de forma eficiente?
            </div>
            <div className="p-4">
              A FINX oferece consultoria completa para estruturar sistemas eficientes de pagamentos e recebimentos internacionais, comeÃ§ando com uma anÃ¡lise dos fluxos financeiros atuais da sua empresa. Desenvolvemos estratÃ©gias para reduzir custos de transaÃ§Ã£o atravÃ©s da seleÃ§Ã£o de provedores de serviÃ§os financeiros com as melhores taxas e menores spreads cambiais para seus mercados especÃ­ficos. Implementamos soluÃ§Ãµes como contas internacionais em mÃºltiplas moedas, que permitem receber pagamentos localmente em diferentes paÃ­ses, reduzindo taxas de conversÃ£o e acelerando a disponibilidade de fundos. Nossos especialistas tambÃ©m estruturam calendÃ¡rios otimizados de fechamento de cÃ¢mbio, aproveitando janelas favorÃ¡veis no mercado, e implementam sistemas de reconciliaÃ§Ã£o automÃ¡tica de pagamentos internacionais. Adicionalmente, avaliamos a viabilidade de estruturas mais sofisticadas como centros de tesouraria internacional ou arranjos de netting para empresas com operaÃ§Ãµes em mÃºltiplos paÃ­ses, potencialmente reduzindo o volume de transaÃ§Ãµes internacionais e seus custos associados.
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4 text-accent">Pronto para otimizar as finanÃ§as internacionais da sua empresa?</h2>
          <p className="mb-6 max-w-3xl mx-auto">Entre em contato com nossos especialistas e descubra como a FINX pode ajudar sua empresa a maximizar resultados financeiros em operaÃ§Ãµes globais.</p>
          <Link href="/contato" className="btn btn-primary font-semibold py-3 px-6">
            Fale com um Especialista
          </Link>
        </div>
      </section>

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "FINX",
            "provider": {
              "@type": "Organization",
              "name": "OLV Internacional",
              "url": "https://www.olvinternacional.com.br"
            },
            "description": "Plataforma de soluÃ§Ãµes financeiras para empresas que operam no comÃ©rcio internacional.",
            "serviceType": "Consultoria Financeira Internacional",
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "priceCurrency": "BRL"
            }
          })
        }}
      />
    </PlatformLayout>
  );
} 
