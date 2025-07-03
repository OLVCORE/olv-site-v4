import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const PlatformLayout = dynamic(() => import('../../components/platforms/PlatformLayout'));

export const metadata = {
  title: 'VERITUS - OLV Internacional | Compliance e Conformidade Internacional',
  description: 'VERITUS Ã© a plataforma de compliance da OLV Internacional, garantindo que operaÃ§Ãµes de comÃ©rcio exterior sigam regulamentaÃ§Ãµes e normas internacionais de forma segura e eficiente.',
    alternates: {
    canonical: 'https://olvinternacional.com.br/veritus'
  },
};

export default function VeritusPage() {
  return (
    <PlatformLayout
      platformName="VERITUS"
      platformLogo="/images/veritus-logo.jpeg"
      platformDescription="SoluÃ§Ãµes JurÃ­dicas e Compliance para ComÃ©rcio Internacional"
      platformIntro="A VERITUS Ã© a plataforma jurÃ­dica e de compliance da OLV Internacional, garantindo conformidade regulatÃ³ria e seguranÃ§a em operaÃ§Ãµes de comÃ©rcio exterior."
      platformColor="#5A2C45"
    >
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-accent">Sobre a VERITUS</h2>
        <p className="mb-4">
          A VERITUS Ã© a plataforma jurÃ­dica e de compliance da OLV Internacional, especializada em fornecer soluÃ§Ãµes legais para empresas que operam no complexo cenÃ¡rio do comÃ©rcio internacional.
        </p>
        <p className="mb-4">
          Nossa equipe de especialistas combina profundo conhecimento jurÃ­dico com experiÃªncia prÃ¡tica em comÃ©rcio exterior para ajudar sua empresa a navegar com seguranÃ§a por regulamentaÃ§Ãµes internacionais, minimizar riscos legais e otimizar sua estratÃ©gia de compliance.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-accent">Consultoria JurÃ­dica Especializada</h3>
            <p>OrientaÃ§Ã£o legal para todas as etapas do comÃ©rcio internacional, desde contratos atÃ© resoluÃ§Ã£o de disputas.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-accent">GestÃ£o de Compliance</h3>
            <p>ImplementaÃ§Ã£o de programas de conformidade adaptados Ã s exigÃªncias de mÃºltiplas jurisdiÃ§Ãµes.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-accent">Due Diligence Internacional</h3>
            <p>AvaliaÃ§Ã£o rigorosa de parceiros, fornecedores e clientes para minimizar riscos em operaÃ§Ãµes globais.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-accent">ServiÃ§os VERITUS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3 text-accent">Consultoria JurÃ­dica Internacional</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>ElaboraÃ§Ã£o e revisÃ£o de contratos internacionais</li>
              <li>Assessoria em negociaÃ§Ãµes globais</li>
              <li>Propriedade intelectual internacional</li>
              <li>ResoluÃ§Ã£o de disputas comerciais</li>
            </ul>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3 text-accent">Programas de Compliance</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Desenvolvimento de polÃ­ticas de conformidade</li>
              <li>ImplementaÃ§Ã£o de sistemas de monitoramento</li>
              <li>Treinamento de equipes</li>
              <li>Auditorias periÃ³dicas de conformidade</li>
            </ul>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3 text-accent">Due Diligence</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>VerificaÃ§Ã£o de antecedentes de parceiros internacionais</li>
              <li>AnÃ¡lise de riscos em novos mercados</li>
              <li>InvestigaÃ§Ã£o de conformidade de terceiros</li>
              <li>RelatÃ³rios detalhados de due diligence</li>
            </ul>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3 text-accent">GestÃ£o de Riscos Legais</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>IdentificaÃ§Ã£o de vulnerabilidades regulatÃ³rias</li>
              <li>Planos de mitigaÃ§Ã£o de riscos</li>
              <li>GestÃ£o de crises legais</li>
              <li>Monitoramento contÃ­nuo de mudanÃ§as regulatÃ³rias</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-accent">BenefÃ­cios VERITUS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-accent">SeguranÃ§a JurÃ­dica</h3>
            <p>MinimizaÃ§Ã£o de riscos legais em operaÃ§Ãµes internacionais atravÃ©s de orientaÃ§Ã£o especializada.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-accent">PrevenÃ§Ã£o de Penalidades</h3>
            <p>ReduÃ§Ã£o do risco de multas e sanÃ§Ãµes por nÃ£o conformidade com regulamentaÃ§Ãµes internacionais.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-accent">ProteÃ§Ã£o Reputacional</h3>
            <p>Salvaguarda da imagem da empresa atravÃ©s de prÃ¡ticas comerciais Ã©ticas e conformes.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-accent">EficiÃªncia Operacional</h3>
            <p>OtimizaÃ§Ã£o de processos legais para reduzir atrasos e custos em operaÃ§Ãµes internacionais.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-accent">Vantagem Competitiva</h3>
            <p>DiferenciaÃ§Ã£o no mercado atravÃ©s de altos padrÃµes de compliance e governanÃ§a.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-accent">Adaptabilidade RegulatÃ³ria</h3>
            <p>RÃ¡pida adaptaÃ§Ã£o a mudanÃ§as regulatÃ³rias em diferentes jurisdiÃ§Ãµes.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-accent">Depoimentos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <p className="italic mb-4">"A VERITUS transformou nossa abordagem de compliance internacional. Implementamos um programa robusto que nÃ£o sÃ³ nos protege legalmente, mas tambÃ©m transmite confianÃ§a aos nossos parceiros globais."</p>
            <p className="font-semibold">JoÃ£o Mendes</p>
            <p className="text-sm text-gray-600">Diretor JurÃ­dico, Exportadora Brasileira de Grande Porte</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <p className="italic mb-4">"Quando enfrentamos uma disputa comercial complexa com um parceiro europeu, a equipe da VERITUS nos guiou com expertise atravÃ©s de todo o processo. Sua orientaÃ§Ã£o foi fundamental para alcanÃ§armos uma resoluÃ§Ã£o favorÃ¡vel."</p>
            <p className="font-semibold">Marina Santos</p>
            <p className="text-sm text-gray-600">CEO, IndÃºstria de Tecnologia com OperaÃ§Ãµes Globais</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-accent">FAQ - Perguntas Frequentes</h2>
        <div className="space-y-4">
          <div className="border border-gray-200 rounded-lg">
            <div className="p-4 bg-gray-50 font-semibold">
              Como a VERITUS pode ajudar minha empresa a cumprir regulamentaÃ§Ãµes internacionais?
            </div>
            <div className="p-4">
              A VERITUS oferece uma abordagem personalizada para compliance internacional, comeÃ§ando com uma avaliaÃ§Ã£o detalhada das operaÃ§Ãµes atuais da sua empresa e dos mercados em que atua ou pretende atuar. Desenvolvemos programas de conformidade sob medida que consideram regulamentaÃ§Ãµes de comÃ©rcio internacional, anticorrupÃ§Ã£o, sanÃ§Ãµes econÃ´micas, controles de exportaÃ§Ã£o, proteÃ§Ã£o de dados e requisitos setoriais especÃ­ficos. Nossa equipe monitora continuamente mudanÃ§as regulatÃ³rias em diferentes jurisdiÃ§Ãµes e fornece atualizaÃ§Ãµes e adaptaÃ§Ãµes necessÃ¡rias ao seu programa de compliance, garantindo que sua empresa permaneÃ§a em conformidade mesmo em um ambiente regulatÃ³rio em constante evoluÃ§Ã£o.
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg">
            <div className="p-4 bg-gray-50 font-semibold">
              Quais sÃ£o os riscos de nÃ£o ter um programa de compliance internacional adequado?
            </div>
            <div className="p-4">
              Os riscos de operar internacionalmente sem um programa de compliance robusto sÃ£o significativos e multifacetados. Financeiramente, sua empresa pode enfrentar multas severas e penalidades impostas por Ã³rgÃ£os reguladores de diferentes paÃ­ses. Legalmente, hÃ¡ riscos de processos civis e atÃ© criminais contra a empresa e seus executivos. A reputaÃ§Ã£o da sua marca pode ser irreparavelmente danificada, resultando em perda de confianÃ§a de clientes, parceiros e investidores. Operacionalmente, vocÃª pode enfrentar interrupÃ§Ãµes nos negÃ³cios, proibiÃ§Ãµes de comÃ©rcio em certos mercados e restriÃ§Ãµes em transaÃ§Ãµes bancÃ¡rias internacionais. AlÃ©m disso, parceiros comerciais e clientes globais estÃ£o cada vez mais exigindo altos padrÃµes de compliance como prÃ©-requisito para fazer negÃ³cios.
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg">
            <div className="p-4 bg-gray-50 font-semibold">
              Como funciona o processo de due diligence internacional da VERITUS?
            </div>
            <div className="p-4">
              Nosso processo de due diligence internacional segue uma metodologia estruturada em quatro fases. Iniciamos com uma anÃ¡lise preliminar para determinar o escopo e nÃ­vel de profundidade adequados, considerando fatores como paÃ­s, setor e natureza da relaÃ§Ã£o comercial. Na fase de investigaÃ§Ã£o, conduzimos verificaÃ§Ãµes abrangentes que incluem pesquisas em bancos de dados globais, anÃ¡lise de registros pÃºblicos, verificaÃ§Ã£o de listas de sanÃ§Ãµes, screening de mÃ­dia e redes sociais, e em casos especÃ­ficos, entrevistas presenciais. A terceira fase envolve a anÃ¡lise e classificaÃ§Ã£o de riscos identificados, com recomendaÃ§Ãµes claras para mitigaÃ§Ã£o. Finalmente, fornecemos um relatÃ³rio detalhado e, quando solicitado, continuamos monitorando o parceiro ou mercado para detectar mudanÃ§as que possam representar novos riscos.
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg">
            <div className="p-4 bg-gray-50 font-semibold">
              Que tipo de suporte a VERITUS oferece em caso de disputas comerciais internacionais?
            </div>
            <div className="p-4">
              A VERITUS oferece suporte abrangente em disputas comerciais internacionais, adaptado Ã s necessidades especÃ­ficas de cada caso. Nossa abordagem prioriza inicialmente mÃ©todos alternativos de resoluÃ§Ã£o, como mediaÃ§Ã£o e negociaÃ§Ã£o, visando soluÃ§Ãµes menos custosas e mais rÃ¡pidas. Quando necessÃ¡rio, fornecemos representaÃ§Ã£o em arbitragens internacionais, trabalhando com Ã¡rbitros e instituiÃ§Ãµes reconhecidas globalmente. Em litÃ­gios judiciais, coordenamos com advogados locais em diferentes jurisdiÃ§Ãµes, mantendo uma estratÃ©gia coesa. Oferecemos tambÃ©m assessoria em questÃµes especÃ­ficas como propriedade intelectual, quebra de contratos, disputas societÃ¡rias e reclamaÃ§Ãµes regulatÃ³rias. Nossa experiÃªncia em mÃºltiplas jurisdiÃ§Ãµes nos permite navegar eficientemente pelos diferentes sistemas legais, sempre buscando o melhor resultado para nossos clientes.
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4 text-accent">Pronto para fortalecer a seguranÃ§a jurÃ­dica da sua empresa?</h2>
          <p className="mb-6 max-w-3xl mx-auto">Entre em contato com nossos especialistas e descubra como a VERITUS pode ajudar sua empresa a operar com seguranÃ§a no cenÃ¡rio internacional.</p>
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
            "name": "VERITUS",
            "provider": {
              "@type": "Organization",
              "name": "OLV Internacional",
              "url": "https://www.olvinternacional.com.br"
            },
            "description": "Plataforma jurÃ­dica e de compliance para empresas que operam no comÃ©rcio internacional.",
            "serviceType": "Consultoria JurÃ­dica e Compliance Internacional",
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
