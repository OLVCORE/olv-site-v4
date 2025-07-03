import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Icon from '../../components/icons/Icon';
import Accordion from '../../components/ui/Accordion';
const PlatformLayout = dynamic(() => import('../../components/platforms/PlatformLayout'));

export const metadata = {
  title: 'STRATEVO - OLV Internacional | InteligÃªncia para Decidir. EstratÃ©gia para Crescer.',
  description: 'STRATEVO Ã© a plataforma de inteligÃªncia corporativa que transforma dados pÃºblicos e estratÃ©gicos em diagnÃ³sticos completos, relatÃ³rios inteligentes e recomendaÃ§Ãµes personalizadas â€” democratizando a inteligÃªncia competitiva para PMEs.',
    alternates: {
    canonical: 'https://olvinternacional.com.br/stratevo'
  },
};

export default function StratevoPage() {
  return (
    <PlatformLayout
      platformName="STRATEVO"
      platformLogo="/images/stratevo-logo.jpeg"
      platformDescription="InteligÃªncia Corporativa DemocrÃ¡tica"
      platformIntro="A STRATEVO transforma dados pÃºblicos, sinais de mercado e algoritmos proprietÃ¡rios em inteligÃªncia prÃ¡tica. Sua missÃ£o Ã© colocar o poder da anÃ¡lise que antes sÃ³ grandes corporaÃ§Ãµes possuÃ­am nas mÃ£os das PMEs, reduzindo riscos e revelando oportunidades reais de crescimento."
      platformColor="#1B3F8B"
    >
      <section className="mb-12">
        <h2 className="section-title">Como a STRATEVO ajuda sua empresa</h2>
        <p className="mb-4">
          Se a sua PME sofre para encontrar dados confiÃ¡veis, comparar fontes e transformar informaÃ§Ã£o em aÃ§Ã£o, a STRATEVO resolve esse quebra-cabeÃ§a. Consolidamos inteligÃªncia de mercado, estatÃ­sticas de comÃ©rcio exterior e sinais de consumo em um Ãºnico hub fÃ¡cil de usar.
        </p>
        <p className="mb-4">
          Nosso time de analistas combina tecnologia proprietÃ¡ria de coleta de dados com curadoria humana para entregar insights prÃ¡ticos â€” nada de relatÃ³rios genÃ©ricos. Assim, vocÃª toma decisÃµes com rapidez, reduz riscos e identifica oportunidades antes da concorrÃªncia.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="section-title">MÃ³dulos de InteligÃªncia STRATEVO</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 1. Dados Cadastrais */}
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <Icon src="/icons/cnpj.svg" alt="Cadastral Icon" size="md" className="mr-2 w-6 h-6" />
              <h3 className="text-xl">Dados Cadastrais & Registrais</h3>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>CNPJ, razÃ£o social, nome fantasia</li>
              <li>SituaÃ§Ã£o cadastral e regime tributÃ¡rio</li>
              <li>Registro de marca no INPI</li>
            </ul>
            <p className="text-xs mt-2 italic">Valida legitimidade e estrutura jurÃ­dico-fiscal.</p>
          </div>
          {/* 2. Estrutura Organizacional */}
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <Icon src="/icons/team.svg" alt="Team Icon" size="md" className="mr-2 w-6 h-6" />
              <h3 className="text-xl">Estrutura Organizacional</h3>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>EndereÃ§os de matriz e filiais</li>
              <li>Quadro societÃ¡rio e responsÃ¡veis legais</li>
              <li>NÃºmero estimado de funcionÃ¡rios</li>
            </ul>
            <p className="text-xs mt-2 italic">Avalia presenÃ§a geogrÃ¡fica e solidez societÃ¡ria.</p>
          </div>
          {/* 3. AnÃ¡lise EconÃ´mico-Financeira */}
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <Icon src="/icons/calculator.svg" alt="Finance Icon" size="md" className="mr-2 w-6 h-6" />
              <h3 className="text-xl">AnÃ¡lise EconÃ´mico-Financeira</h3>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Faturamento estimado</li>
              <li>Riscos legais e tributÃ¡rios</li>
              <li>Compatibilidade fiscal</li>
            </ul>
            <p className="text-xs mt-2 italic">PrevÃª solidez e risco de inadimplÃªncia.</p>
          </div>
          {/* 4. PresenÃ§a Digital & ReputaÃ§Ã£o */}
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <Icon src="/icons/instagram.svg" alt="Digital Presence Icon" size="md" className="mr-2 w-6 h-6" />
              <h3 className="text-xl">PresenÃ§a Digital & ReputaÃ§Ã£o</h3>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Site, redes sociais, reviews pÃºblicos</li>
              <li>ReputaÃ§Ã£o online & engajamento</li>
              <li>Score de confiabilidade</li>
            </ul>
            <p className="text-xs mt-2 italic">TermÃ´metro de visibilidade e confianÃ§a.</p>
          </div>
          {/* 5. AtuaÃ§Ã£o Comercial & Mercado */}
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <Icon src="/icons/handshake.svg" alt="Market Icon" size="md" className="mr-2 w-6 h-6" />
              <h3 className="text-xl">AtuaÃ§Ã£o Comercial & Mercado</h3>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>CNAEs, produtos e serviÃ§os</li>
              <li>HistÃ³rico de licitaÃ§Ãµes</li>
              <li>ParticipaÃ§Ã£o em feiras & eventos</li>
            </ul>
            <p className="text-xs mt-2 italic">Identifica vocaÃ§Ã£o e potencial de mercado.</p>
          </div>
          {/* 6. Comex & Supply Chain */}
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <Icon src="/icons/logistics-icon.svg" alt="Supply Chain Icon" size="md" className="mr-2 w-6 h-6" />
              <h3 className="text-xl">ComÃ©rcio Exterior & Supply Chain</h3>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>HabilitaÃ§Ã£o RADAR</li>
              <li>HistÃ³rico de importaÃ§Ã£o/exportaÃ§Ã£o</li>
              <li>Contato logÃ­stico estratÃ©gico</li>
            </ul>
            <p className="text-xs mt-2 italic">Mede prontidÃ£o para escalar globalmente.</p>
          </div>
          {/* 7. AnÃ¡lise SWOT & Porter */}
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <Icon src="/icons/swot.svg" alt="SWOT Icon" size="md" className="mr-2 w-6 h-6" />
              <h3 className="text-xl">AnÃ¡lise SWOT & ForÃ§as de Porter</h3>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>ForÃ§as, fraquezas, oportunidades, ameaÃ§as</li>
              <li>CompetiÃ§Ã£o, poder de clientes & fornecedores</li>
            </ul>
            <p className="text-xs mt-2 italic">VisÃ£o executiva de riscos e oportunidades.</p>
          </div>
          {/* 8. Insights EstratÃ©gicos */}
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <Icon src="/icons/strategy.svg" alt="Insights Icon" size="md" className="mr-2 w-6 h-6" />
              <h3 className="text-xl">Insights EstratÃ©gicos</h3>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>RecomendaÃ§Ãµes de crescimento</li>
              <li>Alertas de risco & gargalos</li>
              <li>Benchmark de mercado</li>
            </ul>
            <p className="text-xs mt-2 italic">Move o empresÃ¡rio do reativo para o proativo.</p>
          </div>
          {/* 9. Proposta de Valor Personalizada */}
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <Icon src="/icons/manifesto-icon.svg" alt="Pitch Icon" size="md" className="mr-2 w-6 h-6" />
              <h3 className="text-xl">Proposta de Valor Personalizada</h3>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Pitches B2B gerados por IA</li>
              <li>Argumentos alinhados ao segmento</li>
              <li>SugestÃ£o de soluÃ§Ãµes OLV</li>
            </ul>
            <p className="text-xs mt-2 italic">Transforma diagnÃ³stico em ferramenta de vendas.</p>
          </div>
          {/* 10. InteligÃªncia de Matching */}
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <Icon src="/icons/integration.svg" alt="Matching Icon" size="md" className="mr-2 w-6 h-6" />
              <h3 className="text-xl">Matching EstratÃ©gico</h3>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Concorrentes, parceiros, compradores</li>
              <li>ClusterizaÃ§Ã£o por similaridade</li>
              <li>SugestÃµes de expansÃ£o geogrÃ¡fica</li>
            </ul>
            <p className="text-xs mt-2 italic">Conecta a empresa ao ecossistema ideal.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="section-title">BenefÃ­cios para sua PME</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <Icon src="/icons/check.svg" alt="Decision Icon" size="md" className="mr-2 w-6 h-6" />
              <h3 className="text-lg">DecisÃµes mais Assertivas</h3>
            </div>
            <p>FundamentaÃ§Ã£o em dados concretos e anÃ¡lises especializadas para minimizar riscos e otimizar resultados.</p>
          </div>
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <Icon src="/icons/chart.svg" alt="Time Icon" size="md" className="mr-2 w-6 h-6" />
              <h3 className="text-lg">Economia de Tempo e Recursos</h3>
            </div>
            <p>Acesso imediato a informaÃ§Ãµes cruciais de mercado sem necessidade de montar equipes internas de pesquisa.</p>
          </div>
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <Icon src="/icons/rocket.svg" alt="Advantage Icon" size="md" className="mr-2 w-6 h-6" />
              <h3 className="text-lg">Vantagem Competitiva</h3>
            </div>
            <p>Antecipe-se Ã s tendÃªncias e movimentos do mercado antes dos seus concorrentes.</p>
          </div>
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <Icon src="/icons/target.svg" alt="Strategy Icon" size="md" className="mr-2 w-6 h-6" />
              <h3 className="text-lg">EstratÃ©gia Personalizada</h3>
            </div>
            <p>AnÃ¡lises e recomendaÃ§Ãµes adaptadas ao seu segmento de mercado e objetivos empresariais.</p>
          </div>
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <Icon src="/icons/shield.svg" alt="Risk Icon" size="md" className="mr-2 w-6 h-6" />
              <h3 className="text-lg">ReduÃ§Ã£o de Riscos</h3>
            </div>
            <p>IdentificaÃ§Ã£o preventiva de potenciais obstÃ¡culos e desafios em novos mercados.</p>
          </div>
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <Icon src="/icons/integration.svg" alt="Alignment Icon" size="md" className="mr-2 w-6 h-6" />
              <h3 className="text-lg">Alinhamento EstratÃ©gico</h3>
            </div>
            <p>Garanta que todas as decisÃµes estejam alinhadas com os objetivos de longo prazo da sua empresa.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="section-title">CenÃ¡rios de Uso</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <Icon src="/icons/target.svg" alt="Product Launch Icon" size="md" className="mr-2 w-6 h-6" />
              <h3 className="text-xl">LanÃ§amento de Produto em Novo PaÃ­s</h3>
            </div>
            <p>Empresas que planejam entrar em mercados estrangeiros utilizam a STRATEVO para validar demanda, precificaÃ§Ã£o e canais de distribuiÃ§Ã£o, reduzindo em atÃ© 40 % o tempo de go-to-market.</p>
          </div>
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <Icon src="/icons/chart-bar.svg" alt="Export Niches Icon" size="md" className="mr-2 w-6 h-6" />
              <h3 className="text-xl">Descoberta de Nichos de ExportaÃ§Ã£o</h3>
            </div>
            <p>AtravÃ©s de filtros avanÃ§ados, a STRATEVO revela nichos pouco explorados em mercados maduros, permitindo margens superiores e vantagem competitiva sustentÃ¡vel.</p>
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
                'Utilizamos algoritmos de mineraÃ§Ã£o de dados combinados Ã  curadoria de especialistas para cruzar informaÃ§Ãµes de mercado, comÃ©rcio exterior e sinais de consumo. Isso resulta em relatÃ³rios customizados com recomendaÃ§Ãµes alinhadas Ã s particularidades do seu setor.',
            },
            {
              question: 'A plataforma exige instalaÃ§Ã£o ou infraestrutura interna?',
              answer:
                'NÃ£o. A STRATEVO Ã© 100 % SaaS e roda na nuvem com padrÃµes de seguranÃ§a enterprise-grade. VocÃª acessa via navegador, sem necessidade de servidores ou licenÃ§as adicionais.',
            },
            {
              question: 'Com que frequÃªncia os dados sÃ£o atualizados?',
              answer:
                'Fontes pÃºblicas sÃ£o coletadas diariamente e bases premium obedecem Ã s janelas de atualizaÃ§Ã£o de cada fornecedor, variando de semanal a mensal. Para clientes enterprise, disponibilizamos crawls on-demand para temas especÃ­ficos.',
            },
            {
              question: 'Quais sÃ£o os planos de contrataÃ§Ã£o?',
              answer:
                'Oferecemos planos por assinatura (Starter, Growth e Enterprise) que diferem em volume de relatÃ³rios, usuÃ¡rios e suporte. TambÃ©m desenvolvemos projetos pontuais de inteligÃªncia de mercado quando hÃ¡ necessidades muito especÃ­ficas.',
            },
          ]}
        />
      </section>

      <section>
        <div className="bg-blue-50 rounded-lg p-8 text-center dark:bg-blue-900 dark:bg-opacity-20">
          <h2 className="text-2xl font-bold mb-4 text-accent">Pronto para tomar decisÃµes estratÃ©gicas baseadas em dados?</h2>
          <p className="mb-6 max-w-3xl mx-auto dark:text-accent">Entre em contato com nossos especialistas e descubra como a STRATEVO pode ajudar sua empresa a conquistar novos mercados com mais seguranÃ§a e eficiÃªncia.</p>
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
            "description": "Plataforma de inteligÃªncia de mercado que fornece anÃ¡lises aprofundadas para tomada de decisÃ£o estratÃ©gica no comÃ©rcio internacional.",
            "serviceType": "InteligÃªncia de Mercado e EstratÃ©gia Empresarial",
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
