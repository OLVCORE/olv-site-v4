import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const PlatformLayout = dynamic(() => import('../../components/platforms/PlatformLayout'));

export const metadata = {
  title: 'LABS - OLV Internacional | Centro de InovaÃ§Ã£o em ComÃ©rcio Internacional',
  description: 'LABS Ã© o centro de inovaÃ§Ã£o da OLV Internacional dedicado a pesquisar, desenvolver e implementar tecnologias emergentes que transformam as operaÃ§Ãµes de comÃ©rcio exterior.',
    alternates: {
    canonical: 'https://olvinternacional.com.br/labs'
  },
};

export default function LabsPage() {
  return (
    <PlatformLayout
      platformName="LABS"
      platformLogo="/images/labs-logo.jpeg"
      platformDescription="Centro de InovaÃ§Ã£o em ComÃ©rcio Internacional"
      platformIntro="O LABS Ã© o centro de inovaÃ§Ã£o da OLV Internacional, dedicado a pesquisar e aplicar tecnologias emergentes que transformam operaÃ§Ãµes de comÃ©rcio exterior."
      platformColor="#4E3B76"
    >
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-accent">Sobre o LABS</h2>
        <p className="mb-4">
          O LABS Ã© o centro de inovaÃ§Ã£o da OLV Internacional, dedicado a pesquisar, desenvolver e implementar tecnologias emergentes que transformam as operaÃ§Ãµes de comÃ©rcio exterior.
        </p>
        <p className="mb-4">
          Nossa equipe multidisciplinar de especialistas trabalha na interseÃ§Ã£o entre tecnologia de ponta e prÃ¡ticas de comÃ©rcio internacional para criar soluÃ§Ãµes inovadoras que aumentam a eficiÃªncia, reduzem custos e desbloqueiam novas oportunidades para empresas globais.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="platform-card">
            <h3 className="text-xl font-semibold mb-3 text-accent">Pesquisa Aplicada</h3>
            <p>InvestigaÃ§Ã£o contÃ­nua de tecnologias emergentes com potencial para revolucionar o comÃ©rcio internacional.</p>
          </div>
          <div className="platform-card">
            <h3 className="text-xl font-semibold mb-3 text-accent">Desenvolvimento de SoluÃ§Ãµes</h3>
            <p>CriaÃ§Ã£o de protÃ³tipos e produtos inovadores que resolvem desafios especÃ­ficos do comÃ©rcio exterior.</p>
          </div>
          <div className="platform-card">
            <h3 className="text-xl font-semibold mb-3 text-accent">ImplementaÃ§Ã£o EstratÃ©gica</h3>
            <p>IntegraÃ§Ã£o eficiente de novas tecnologias aos processos existentes para maximizar resultados.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-accent">Ãreas de InovaÃ§Ã£o LABS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="platform-card">
            <h3 className="text-xl font-semibold mb-3 text-accent">Blockchain e Contratos Inteligentes</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Rastreabilidade e transparÃªncia em cadeias de suprimentos globais</li>
              <li>Contratos inteligentes para automatizaÃ§Ã£o de acordos comerciais</li>
              <li>CertificaÃ§Ã£o digital de origem e documentaÃ§Ã£o aduaneira</li>
              <li>Sistemas descentralizados para pagamentos internacionais</li>
            </ul>
          </div>
          <div className="platform-card">
            <h3 className="text-xl font-semibold mb-3 text-accent">InteligÃªncia Artificial e Machine Learning</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>AnÃ¡lise preditiva para otimizaÃ§Ã£o logÃ­stica internacional</li>
              <li>Sistemas inteligentes de classificaÃ§Ã£o fiscal e compliance</li>
              <li>AutomaÃ§Ã£o de processos decisÃ³rios em operaÃ§Ãµes globais</li>
              <li>AnÃ¡lise avanÃ§ada de mercados e oportunidades internacionais</li>
            </ul>
          </div>
          <div className="platform-card">
            <h3 className="text-xl font-semibold mb-3 text-accent">IoT e Sistemas Conectados</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Monitoramento em tempo real de cargas internacionais</li>
              <li>Sensores para controle de qualidade em trÃ¢nsito global</li>
              <li>OtimizaÃ§Ã£o de armazenagem e movimentaÃ§Ã£o cross-border</li>
              <li>IntegraÃ§Ã£o de sistemas entre parceiros comerciais globais</li>
            </ul>
          </div>
          <div className="platform-card">
            <h3 className="text-xl font-semibold mb-3 text-accent">TransformaÃ§Ã£o Digital do ComÃ©rcio Exterior</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Plataformas integradas para gestÃ£o de operaÃ§Ãµes internacionais</li>
              <li>DigitalizaÃ§Ã£o completa de processos aduaneiros e documentais</li>
              <li>APIs e microserviÃ§os para ecossistemas de comÃ©rcio global</li>
              <li>Dashboards analÃ­ticos para tomada de decisÃ£o estratÃ©gica</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-accent">BenefÃ­cios LABS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="platform-card">
            <h3 className="text-lg font-semibold mb-3 text-accent">Vantagem Competitiva</h3>
            <p>Acesso antecipado a tecnologias emergentes que transformam operaÃ§Ãµes internacionais antes dos concorrentes.</p>
          </div>
          <div className="platform-card">
            <h3 className="text-lg font-semibold mb-3 text-accent">EficiÃªncia Operacional</h3>
            <p>ReduÃ§Ã£o significativa de custos e tempo em processos de comÃ©rcio exterior atravÃ©s de soluÃ§Ãµes inovadoras.</p>
          </div>
          <div className="platform-card">
            <h3 className="text-lg font-semibold mb-3 text-accent">MitigaÃ§Ã£o de Riscos</h3>
            <p>Tecnologias avanÃ§adas que minimizam erros, fraudes e vulnerabilidades em operaÃ§Ãµes internacionais.</p>
          </div>
          <div className="platform-card">
            <h3 className="text-lg font-semibold mb-3 text-accent">Novas Oportunidades</h3>
            <p>IdentificaÃ§Ã£o e exploraÃ§Ã£o de modelos de negÃ³cios inovadores no contexto do comÃ©rcio global.</p>
          </div>
          <div className="platform-card">
            <h3 className="text-lg font-semibold mb-3 text-accent">Sustentabilidade</h3>
            <p>SoluÃ§Ãµes tecnolÃ³gicas que promovem prÃ¡ticas sustentÃ¡veis em cadeias de suprimentos globais.</p>
          </div>
          <div className="platform-card">
            <h3 className="text-lg font-semibold mb-3 text-accent">ColaboraÃ§Ã£o Global</h3>
            <p>Acesso a um ecossistema de parceiros internacionais para desenvolvimento conjunto de soluÃ§Ãµes.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-accent">Projetos Inovadores</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="platform-card">
            <h3 className="text-xl font-semibold mb-3 text-accent">TradeChain</h3>
            <p className="mb-4">Plataforma baseada em blockchain que oferece rastreabilidade completa e verificaÃ§Ã£o de autenticidade para produtos em toda a cadeia logÃ­stica internacional. Reduz fraudes em documentaÃ§Ã£o, aumenta a confianÃ§a entre parceiros comerciais e simplifica auditorias de compliance.</p>
            <p className="italic text-gray-600">Status: Piloto em operaÃ§Ã£o com exportadores de produtos de alto valor agregado</p>
          </div>
          <div className="platform-card">
            <h3 className="text-xl font-semibold mb-3 text-accent">AI Customs Navigator</h3>
            <p className="mb-4">Sistema de inteligÃªncia artificial que utiliza machine learning para otimizar a classificaÃ§Ã£o fiscal de mercadorias, prever requisitos regulatÃ³rios e identificar oportunidades de economia em tributos. Reduz erros em classificaÃ§Ã£o e acelera processos de despacho aduaneiro.</p>
            <p className="italic text-gray-600">Status: Em fase de implementaÃ§Ã£o com empresas importadoras</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-accent">Depoimentos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="platform-card">
            <p className="italic mb-4">"A plataforma de blockchain desenvolvida pelo LABS reduziu nosso tempo de liberaÃ§Ã£o aduaneira em 60% e praticamente eliminou as inconsistÃªncias documentais. A visibilidade que temos agora de toda a cadeia Ã© um diferencial competitivo significativo."</p>
            <p className="font-semibold">Marcelo Gomes</p>
            <p className="text-sm text-gray-600">Diretor de Supply Chain, IndÃºstria FarmacÃªutica</p>
          </div>
          <div className="platform-card">
            <p className="italic mb-4">"O sistema de anÃ¡lise preditiva para logÃ­stica internacional nos permitiu otimizar rotas e prazos, resultando em economia anual de mais de R$ 2 milhÃµes em custos logÃ­sticos. A capacidade de adaptaÃ§Ã£o do sistema Ã s nossas necessidades especÃ­ficas foi impressionante."</p>
            <p className="font-semibold">PatrÃ­cia Monteiro</p>
            <p className="text-sm text-gray-600">COO, Grande Varejista com OperaÃ§Ãµes Globais</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-accent">FAQ - Perguntas Frequentes</h2>
        <div className="space-y-4">
          <div className="platform-card">
            <div className="p-4 bg-gray-50 font-semibold">
              Como o LABS identifica quais tecnologias tÃªm potencial real para transformar o comÃ©rcio internacional?
            </div>
            <div className="p-4">
              No LABS, adotamos uma metodologia rigorosa para avaliar o potencial transformador de tecnologias emergentes no comÃ©rcio internacional. O processo comeÃ§a com um radar tecnolÃ³gico contÃ­nuo, no qual monitoramos desenvolvimentos globais atravÃ©s de parcerias com universidades, aceleradoras e centros de pesquisa em diferentes paÃ­ses. Cada tecnologia identificada passa por uma avaliaÃ§Ã£o em quatro dimensÃµes: impacto potencial (capacidade de resolver problemas significativos ou criar valor substancial), viabilidade tÃ©cnica (maturidade e capacidade de implementaÃ§Ã£o prÃ¡tica), escalabilidade (potencial para aplicaÃ§Ã£o ampla em diferentes contextos) e horizonte temporal (tempo necessÃ¡rio para implementaÃ§Ã£o efetiva). Para tecnologias promissoras, desenvolvemos provas de conceito em ambientes controlados, com mÃ©tricas claras para avaliar resultados. Este processo nos permite concentrar recursos nas tecnologias com maior potencial de gerar valor real, evitando tendÃªncias passageiras ou soluÃ§Ãµes de nicho limitado.
            </div>
          </div>
          <div className="platform-card">
            <div className="p-4 bg-gray-50 font-semibold">
              Como uma empresa pode participar dos projetos de inovaÃ§Ã£o do LABS?
            </div>
            <div className="p-4">
              Oferecemos trÃªs modalidades principais de participaÃ§Ã£o nos projetos de inovaÃ§Ã£o do LABS. O primeiro Ã© o Programa de Parceiros de InovaÃ§Ã£o, onde empresas investem em uma cota anual que dÃ¡ acesso prioritÃ¡rio a todas as tecnologias e projetos em desenvolvimento, alÃ©m de influÃªncia na definiÃ§Ã£o das prioridades de pesquisa. A segunda modalidade Ã© o Co-desenvolvimento, onde trabalhamos com empresas em projetos especÃ­ficos voltados para seus desafios particulares, compartilhando investimentos, riscos e propriedade intelectual resultante. A terceira opÃ§Ã£o Ã© o Programa de Testes Beta, onde empresas podem testar gratuitamente soluÃ§Ãµes em fase avanÃ§ada de desenvolvimento, fornecendo feedback valioso antes do lanÃ§amento comercial. Em todos os casos, iniciamos com um workshop de alinhamento para identificar Ã¡reas de maior potencial e definir expectativas claras de colaboraÃ§Ã£o. Empresas interessadas podem agendar uma reuniÃ£o exploratÃ³ria com nossa equipe para discutir a modalidade mais adequada ao seu perfil e objetivos estratÃ©gicos.
            </div>
          </div>
          <div className="platform-card">
            <div className="p-4 bg-gray-50 font-semibold">
              Quais sÃ£o os principais desafios na implementaÃ§Ã£o de blockchain para comÃ©rcio internacional?
            </div>
            <div className="p-4">
              A implementaÃ§Ã£o de blockchain no comÃ©rcio internacional enfrenta quatro categorias principais de desafios que abordamos sistematicamente no LABS. O primeiro Ã© a interoperabilidade, pois o comÃ©rcio global envolve mÃºltiplos atores com sistemas legados diversos e diferentes plataformas blockchain. Desenvolvemos soluÃ§Ãµes baseadas em padrÃµes abertos e protocolos de interoperabilidade que permitem a comunicaÃ§Ã£o entre diferentes sistemas. O segundo desafio Ã© regulatÃ³rio, com jurisdiÃ§Ãµes variadas tendo abordagens distintas para documentos digitais e contratos inteligentes. Nossa equipe jurÃ­dica especializada trabalha para garantir compliance em mÃºltiplos paÃ­ses. O terceiro Ã© a governanÃ§a de dados, especialmente considerando questÃµes de privacidade e informaÃ§Ãµes comercialmente sensÃ­veis. Implementamos estruturas de permissionamento avanÃ§adas e tÃ©cnicas de zero-knowledge proof para proteger dados confidenciais. O quarto desafio Ã© a adoÃ§Ã£o coordenada, pois o valor da blockchain depende da participaÃ§Ã£o de mÃºltiplos stakeholders na cadeia. Nosso mÃ©todo de implementaÃ§Ã£o em fases estratÃ©gicas permite demonstraÃ§Ã£o de valor incremental, facilitando a adesÃ£o progressiva de participantes.
            </div>
          </div>
          <div className="platform-card">
            <div className="p-4 bg-gray-50 font-semibold">
              Como o LABS mensura o retorno sobre investimento em projetos de inovaÃ§Ã£o?
            </div>
            <div className="p-4">
              No LABS, desenvolvemos uma metodologia prÃ³pria de mensuraÃ§Ã£o de ROI para inovaÃ§Ãµes em comÃ©rcio internacional, reconhecendo que projetos transformadores frequentemente geram valor alÃ©m das mÃ©tricas financeiras tradicionais. Nossa abordagem equilibra indicadores quantitativos e qualitativos em quatro dimensÃµes: eficiÃªncia operacional (reduÃ§Ã£o mensurÃ¡vel de tempo e custo em processos especÃ­ficos), mitigaÃ§Ã£o de riscos (reduÃ§Ã£o de erros, fraudes e penalidades), vantagem competitiva (ganhos de mercado e diferenciaÃ§Ã£o) e capacitaÃ§Ã£o organizacional (desenvolvimento de novas capacidades). Para cada projeto, estabelecemos uma linha de base inicial e indicadores-chave de desempenho (KPIs) personalizados. Utilizamos uma combinaÃ§Ã£o de testes A/B, pilotos controlados e anÃ¡lises comparativas para isolar o impacto das inovaÃ§Ãµes implementadas. Nossos projetos tÃ­picos geram ROI financeiro direto entre 150% e 400% em um horizonte de 18-24 meses, com benefÃ­cios adicionais em posicionamento estratÃ©gico e desenvolvimento de capacidades organizacionais que continuam gerando valor a longo prazo.
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4 text-accent">Pronto para transformar suas operaÃ§Ãµes internacionais com tecnologias inovadoras?</h2>
          <p className="mb-6 max-w-3xl mx-auto">Entre em contato com nossos especialistas e descubra como o LABS pode ajudar sua empresa a implementar soluÃ§Ãµes tecnolÃ³gicas de ponta para o comÃ©rcio internacional.</p>
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
            "@type": "ResearchOrganization",
            "name": "LABS - OLV Internacional",
            "description": "Centro de inovaÃ§Ã£o especializado em tecnologias emergentes para comÃ©rcio internacional.",
            "url": "https://www.olvinternacional.com.br/labs",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "BR"
            },
            "knowsAbout": [
              "Blockchain em ComÃ©rcio Internacional",
              "InteligÃªncia Artificial para Supply Chain Global",
              "IoT em LogÃ­stica Internacional",
              "TransformaÃ§Ã£o Digital no ComÃ©rcio Exterior"
            ]
          })
        }}
      />
    </PlatformLayout>
  );
} 
