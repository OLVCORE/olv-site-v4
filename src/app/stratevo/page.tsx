import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PlatformLayout from '../../components/platforms/PlatformLayout';

export const metadata = {
  title: 'STRATEVO - OLV Internacional | Inteligência para Decidir. Estratégia para Crescer.',
  description: 'STRATEVO é a plataforma de inteligência de mercado que fornece análises aprofundadas para tomada de decisão estratégica no comércio internacional.',
  keywords: 'inteligência de mercado, análise estratégica, comércio internacional, dados de mercado, insights de negócios, estratégia empresarial',
};

export default function StratevoPage() {
  return (
    <PlatformLayout
      platformName="STRATEVO"
      platformLogo="/images/stratevo-logo.jpeg"
      platformDescription="Inteligência para Decidir. Estratégia para Crescer."
      platformColor="#0a2463"
    >
      <section className="mb-12">
        <h2 className="section-title">Sobre a STRATEVO</h2>
        <p className="mb-4">
          A STRATEVO é a plataforma de inteligência de mercado da OLV Internacional, fornecendo análises aprofundadas e insights estratégicos para apoiar sua tomada de decisão no comércio global.
        </p>
        <p className="mb-4">
          Com a STRATEVO, sua empresa tem acesso a dados precisos e atualizados sobre mercados internacionais, tendências de consumo, análise competitiva e oportunidades de negócios em todo o mundo.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <img src="/icons/analytics.svg" alt="Analytics Icon" className="w-6 h-6 mr-2" />
              <h3 className="text-xl">Inteligência de Mercado</h3>
            </div>
            <p>Análises detalhadas e insights sobre mercados globais para fundamentar suas decisões estratégicas.</p>
          </div>
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <img src="/icons/chart.svg" alt="Chart Icon" className="w-6 h-6 mr-2" />
              <h3 className="text-xl">Análise Competitiva</h3>
            </div>
            <p>Monitoramento da concorrência internacional e benchmarking para identificar oportunidades e ameaças.</p>
          </div>
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <img src="/icons/target.svg" alt="Target Icon" className="w-6 h-6 mr-2" />
              <h3 className="text-xl">Planejamento Estratégico</h3>
            </div>
            <p>Suporte para desenvolver estratégias robustas de entrada e expansão em mercados internacionais.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="service-section-title">Serviços STRATEVO</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <img src="/icons/chart-bar.svg" alt="Market Research Icon" className="w-6 h-6 mr-2" />
              <h3 className="text-xl">Pesquisa de Mercado</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2">
              <li>Análise de tendências de mercado global</li>
              <li>Identificação de oportunidades de negócios</li>
              <li>Estudos de viabilidade para novos mercados</li>
              <li>Análise de comportamento do consumidor</li>
            </ul>
          </div>
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <img src="/icons/analytics.svg" alt="Data Analysis Icon" className="w-6 h-6 mr-2" />
              <h3 className="text-xl">Análise de Dados</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2">
              <li>Processamento de dados comerciais internacionais</li>
              <li>Visualização de informações complexas</li>
              <li>Dashboards personalizados para tomada de decisão</li>
              <li>Relatórios de performance de mercado</li>
            </ul>
          </div>
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <img src="/icons/swot.svg" alt="Strategy Consulting Icon" className="w-6 h-6 mr-2" />
              <h3 className="text-xl">Consultoria Estratégica</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2">
              <li>Desenvolvimento de planos de internacionalização</li>
              <li>Estratégias de entrada em mercados</li>
              <li>Identificação e avaliação de parceiros comerciais</li>
              <li>Análise de risco em mercados internacionais</li>
            </ul>
          </div>
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <img src="/icons/radar-icon.svg" alt="Business Intelligence Icon" className="w-6 h-6 mr-2" />
              <h3 className="text-xl">Business Intelligence</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2">
              <li>Monitoramento contínuo de mercados-alvo</li>
              <li>Alertas sobre mudanças regulatórias</li>
              <li>Análise de concorrentes globais</li>
              <li>Previsão de tendências de mercado</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="service-section-title">Benefícios STRATEVO</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <img src="/icons/check.svg" alt="Decision Icon" className="w-6 h-6 mr-2" />
              <h3 className="text-lg">Decisões mais Assertivas</h3>
            </div>
            <p>Fundamentação em dados concretos e análises especializadas para minimizar riscos e otimizar resultados.</p>
          </div>
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <img src="/icons/chart.svg" alt="Time Icon" className="w-6 h-6 mr-2" />
              <h3 className="text-lg">Economia de Tempo e Recursos</h3>
            </div>
            <p>Acesso imediato a informações cruciais de mercado sem necessidade de montar equipes internas de pesquisa.</p>
          </div>
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <img src="/icons/rocket.svg" alt="Advantage Icon" className="w-6 h-6 mr-2" />
              <h3 className="text-lg">Vantagem Competitiva</h3>
            </div>
            <p>Antecipe-se às tendências e movimentos do mercado antes dos seus concorrentes.</p>
          </div>
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <img src="/icons/target.svg" alt="Strategy Icon" className="w-6 h-6 mr-2" />
              <h3 className="text-lg">Estratégia Personalizada</h3>
            </div>
            <p>Análises e recomendações adaptadas ao seu segmento de mercado e objetivos empresariais.</p>
          </div>
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <img src="/icons/shield.svg" alt="Risk Icon" className="w-6 h-6 mr-2" />
              <h3 className="text-lg">Redução de Riscos</h3>
            </div>
            <p>Identificação preventiva de potenciais obstáculos e desafios em novos mercados.</p>
          </div>
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <img src="/icons/integration.svg" alt="Alignment Icon" className="w-6 h-6 mr-2" />
              <h3 className="text-lg">Alinhamento Estratégico</h3>
            </div>
            <p>Garanta que todas as decisões estejam alinhadas com os objetivos de longo prazo da sua empresa.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="service-section-title">Depoimentos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="platform-card">
            <p className="italic mb-4">"A STRATEVO foi fundamental para nossa expansão na América Latina. Os insights de mercado nos permitiram adaptar nossa estratégia e conquistar uma posição significativa no mercado em tempo recorde."</p>
            <p className="font-semibold">Carlos Mendes</p>
            <p className="text-sm text-gray-600">Diretor de Expansão Internacional, TechSolutions Brasil</p>
          </div>
          <div className="platform-card">
            <p className="italic mb-4">"As análises da STRATEVO nos ajudaram a identificar nichos de mercado inexplorados na Europa. Graças a essas informações, redirecionamos nossos esforços e aumentamos nossas exportações em 45% em apenas um ano."</p>
            <p className="font-semibold">Mariana Costa</p>
            <p className="text-sm text-gray-600">CEO, AgroExport Nordeste</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="service-section-title">FAQ - Perguntas Frequentes</h2>
        <div className="space-y-4">
          <div className="platform-card">
            <div className="p-4 font-semibold flex items-center">
              <img src="/icons/faq.svg" alt="FAQ Icon" className="w-5 h-5 mr-2" />
              Como a STRATEVO pode ajudar minha empresa a expandir internacionalmente?
            </div>
            <div className="p-4">
              A STRATEVO fornece análises de mercado, identificação de oportunidades, avaliação de riscos e desenvolvimento de estratégias customizadas para sua empresa. Nossos especialistas ajudam a identificar mercados promissores, entender regulamentações locais, avaliar a concorrência e desenvolver um plano de entrada adequado às suas necessidades e objetivos.
            </div>
          </div>
          <div className="platform-card">
            <div className="p-4 font-semibold flex items-center">
              <img src="/icons/faq.svg" alt="FAQ Icon" className="w-5 h-5 mr-2" />
              Quais tipos de dados e análises a STRATEVO oferece?
            </div>
            <div className="p-4">
              Oferecemos dados macroeconômicos, análises setoriais, tendências de consumo, estudos regulatórios, análise de concorrência, previsões de mercado, mapeamento de canais de distribuição, análise de preços e margens, e estudos de viabilidade para diferentes mercados internacionais.
            </div>
          </div>
          <div className="platform-card">
            <div className="p-4 font-semibold flex items-center">
              <img src="/icons/faq.svg" alt="FAQ Icon" className="w-5 h-5 mr-2" />
              A STRATEVO atende empresas de todos os portes?
            </div>
            <div className="p-4">
              Sim, temos soluções adaptadas para startups, pequenas e médias empresas, bem como grandes corporações. Nossas análises e recomendações são personalizadas de acordo com o tamanho da sua empresa, objetivos estratégicos e recursos disponíveis para internacionalização.
            </div>
          </div>
          <div className="platform-card">
            <div className="p-4 font-semibold flex items-center">
              <img src="/icons/faq.svg" alt="FAQ Icon" className="w-5 h-5 mr-2" />
              Como a STRATEVO se diferencia de outras consultorias de inteligência de mercado?
            </div>
            <div className="p-4">
              Nosso diferencial está na combinação de tecnologia avançada de análise de dados com a experiência prática de especialistas em comércio internacional. Além disso, somos parte do ecossistema OLV Internacional, o que nos permite oferecer soluções integradas que vão além da análise, incluindo implementação e suporte contínuo.
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-blue-50 rounded-lg p-8 text-center dark:bg-blue-900 dark:bg-opacity-20">
          <h2 className="text-2xl font-bold mb-4 text-blue-900 dark:text-blue-100">Pronto para tomar decisões estratégicas baseadas em dados?</h2>
          <p className="mb-6 max-w-3xl mx-auto dark:text-blue-200">Entre em contato com nossos especialistas e descubra como a STRATEVO pode ajudar sua empresa a conquistar novos mercados com mais segurança e eficiência.</p>
          <Link href="/contato" className="inline-block bg-blue-800 text-white py-3 px-6 rounded-md font-semibold hover:bg-blue-900 transition duration-300 flex items-center justify-center">
            <img src="/icons/specialist.svg" alt="Specialist Icon" className="w-5 h-5 mr-2" />
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
            "name": "STRATEVO",
            "provider": {
              "@type": "Organization",
              "name": "OLV Internacional",
              "url": "https://www.olvinternacional.com.br"
            },
            "description": "Plataforma de inteligência de mercado que fornece análises aprofundadas para tomada de decisão estratégica no comércio internacional.",
            "serviceType": "Inteligência de Mercado e Estratégia Empresarial",
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