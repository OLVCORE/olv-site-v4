import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Icon from '../../components/icons/Icon';
import Accordion from '../../components/ui/Accordion';
const PlatformLayout = dynamic(() => import('../../components/platforms/PlatformLayout'));

export const metadata = {
  title: 'STRATEVO - OLV Internacional | Inteligência para Decidir. Estratégia para Crescer.',
  description: 'STRATEVO é a plataforma de inteligência de mercado que fornece análises aprofundadas para tomada de decisão estratégica no comércio internacional.',
  keywords: 'inteligência de mercado, análise estratégica, comércio internacional, dados de mercado, insights de negócios, estratégia empresarial',
  alternates: {
    canonical: 'https://olvinternacional.com.br/stratevo'
  },
};

export default function StratevoPage() {
  return (
    <PlatformLayout
      platformName="STRATEVO"
      platformLogo="/images/stratevo-logo.jpeg"
      platformDescription="Inteligência para Decidir. Estratégia para Crescer."
      platformIntro="A STRATEVO é a plataforma de inteligência de mercado da OLV Internacional, fornecendo análises aprofundadas e insights estratégicos para apoiar decisões no comércio global."
      platformColor="#1B3F8B"
    >
      <section className="mb-12">
        <h2 className="section-title">Como a STRATEVO ajuda sua empresa</h2>
        <p className="mb-4">
          Se a sua PME sofre para encontrar dados confiáveis, comparar fontes e transformar informação em ação, a STRATEVO resolve esse quebra-cabeça. Consolidamos inteligência de mercado, estatísticas de comércio exterior e sinais de consumo em um único hub fácil de usar.
        </p>
        <p className="mb-4">
          Nosso time de analistas combina tecnologia proprietária de coleta de dados com curadoria humana para entregar insights práticos — nada de relatórios genéricos. Assim, você toma decisões com rapidez, reduz riscos e identifica oportunidades antes da concorrência.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <Icon src="/icons/analytics.svg" alt="Analytics Icon" size="md" className="mr-2 w-6 h-6" />
              <h3 className="text-xl">Inteligência de Mercado</h3>
            </div>
            <p>Análises detalhadas e insights sobre mercados globais para fundamentar suas decisões estratégicas.</p>
          </div>
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <Icon src="/icons/chart.svg" alt="Chart Icon" size="md" className="mr-2 w-6 h-6" />
              <h3 className="text-xl">Análise Competitiva</h3>
            </div>
            <p>Monitoramento da concorrência internacional e benchmarking para identificar oportunidades e ameaças.</p>
          </div>
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <Icon src="/icons/target.svg" alt="Target Icon" size="md" className="mr-2 w-6 h-6" />
              <h3 className="text-xl">Planejamento Estratégico</h3>
            </div>
            <p>Suporte para desenvolver estratégias robustas de entrada e expansão em mercados internacionais.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="section-title">Serviços STRATEVO</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <Icon src="/icons/chart-bar.svg" alt="Market Research Icon" size="md" className="mr-2 w-6 h-6" />
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
              <Icon src="/icons/analytics.svg" alt="Data Analysis Icon" size="md" className="mr-2 w-6 h-6" />
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
              <Icon src="/icons/swot.svg" alt="Strategy Consulting Icon" size="md" className="mr-2 w-6 h-6" />
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
              <Icon src="/icons/radar-icon.svg" alt="Business Intelligence Icon" size="md" className="mr-2 w-6 h-6" />
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
        <h2 className="section-title">Benefícios STRATEVO</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <Icon src="/icons/check.svg" alt="Decision Icon" size="md" className="mr-2 w-6 h-6" />
              <h3 className="text-lg">Decisões mais Assertivas</h3>
            </div>
            <p>Fundamentação em dados concretos e análises especializadas para minimizar riscos e otimizar resultados.</p>
          </div>
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <Icon src="/icons/chart.svg" alt="Time Icon" size="md" className="mr-2 w-6 h-6" />
              <h3 className="text-lg">Economia de Tempo e Recursos</h3>
            </div>
            <p>Acesso imediato a informações cruciais de mercado sem necessidade de montar equipes internas de pesquisa.</p>
          </div>
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <Icon src="/icons/rocket.svg" alt="Advantage Icon" size="md" className="mr-2 w-6 h-6" />
              <h3 className="text-lg">Vantagem Competitiva</h3>
            </div>
            <p>Antecipe-se às tendências e movimentos do mercado antes dos seus concorrentes.</p>
          </div>
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <Icon src="/icons/target.svg" alt="Strategy Icon" size="md" className="mr-2 w-6 h-6" />
              <h3 className="text-lg">Estratégia Personalizada</h3>
            </div>
            <p>Análises e recomendações adaptadas ao seu segmento de mercado e objetivos empresariais.</p>
          </div>
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <Icon src="/icons/shield.svg" alt="Risk Icon" size="md" className="mr-2 w-6 h-6" />
              <h3 className="text-lg">Redução de Riscos</h3>
            </div>
            <p>Identificação preventiva de potenciais obstáculos e desafios em novos mercados.</p>
          </div>
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <Icon src="/icons/integration.svg" alt="Alignment Icon" size="md" className="mr-2 w-6 h-6" />
              <h3 className="text-lg">Alinhamento Estratégico</h3>
            </div>
            <p>Garanta que todas as decisões estejam alinhadas com os objetivos de longo prazo da sua empresa.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="section-title">Cenários de Uso</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <Icon src="/icons/target.svg" alt="Product Launch Icon" size="md" className="mr-2 w-6 h-6" />
              <h3 className="text-xl">Lançamento de Produto em Novo País</h3>
            </div>
            <p>Empresas que planejam entrar em mercados estrangeiros utilizam a STRATEVO para validar demanda, precificação e canais de distribuição, reduzindo em até 40 % o tempo de go-to-market.</p>
          </div>
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <Icon src="/icons/chart-bar.svg" alt="Export Niches Icon" size="md" className="mr-2 w-6 h-6" />
              <h3 className="text-xl">Descoberta de Nichos de Exportação</h3>
            </div>
            <p>Através de filtros avançados, a STRATEVO revela nichos pouco explorados em mercados maduros, permitindo margens superiores e vantagem competitiva sustentável.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="section-title">FAQ - Perguntas Frequentes</h2>
        <Accordion
          items={[
            {
              question: 'Como a STRATEVO gera insights exclusivos para o meu segmento?',
              answer:
                'Utilizamos algoritmos de mineração de dados combinados à curadoria de especialistas para cruzar informações de mercado, comércio exterior e sinais de consumo. Isso resulta em relatórios customizados com recomendações alinhadas às particularidades do seu setor.',
            },
            {
              question: 'A plataforma exige instalação ou infraestrutura interna?',
              answer:
                'Não. A STRATEVO é 100 % SaaS e roda na nuvem com padrões de segurança enterprise-grade. Você acessa via navegador, sem necessidade de servidores ou licenças adicionais.',
            },
            {
              question: 'Com que frequência os dados são atualizados?',
              answer:
                'Fontes públicas são coletadas diariamente e bases premium obedecem às janelas de atualização de cada fornecedor, variando de semanal a mensal. Para clientes enterprise, disponibilizamos crawls on-demand para temas específicos.',
            },
            {
              question: 'Quais são os planos de contratação?',
              answer:
                'Oferecemos planos por assinatura (Starter, Growth e Enterprise) que diferem em volume de relatórios, usuários e suporte. Também desenvolvemos projetos pontuais de inteligência de mercado quando há necessidades muito específicas.',
            },
          ]}
        />
      </section>

      <section>
        <div className="bg-blue-50 rounded-lg p-8 text-center dark:bg-blue-900 dark:bg-opacity-20">
          <h2 className="text-2xl font-bold mb-4 text-accent">Pronto para tomar decisões estratégicas baseadas em dados?</h2>
          <p className="mb-6 max-w-3xl mx-auto dark:text-accent">Entre em contato com nossos especialistas e descubra como a STRATEVO pode ajudar sua empresa a conquistar novos mercados com mais segurança e eficiência.</p>
          <Link href="/contato" className="btn btn-primary font-semibold py-3 px-6 flex items-center justify-center">
            <Icon src="/icons/specialist.svg" alt="Specialist Icon" size="md" className="mr-2 w-6 h-6" />
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