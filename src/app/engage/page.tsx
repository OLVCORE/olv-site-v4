import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Icon from '../../components/icons/Icon';
const PlatformLayout = dynamic(() => import('../../components/platforms/PlatformLayout'));

export const metadata = {
  title: 'ENGAGE - OLV Internacional | Engajamento e Relacionamento com Clientes',
  description: 'ENGAGE Ã© a plataforma de relacionamento da OLV Internacional que automatiza e aprimora a jornada do cliente, convertendo leads em negÃ³cios atravÃ©s de automaÃ§Ã£o e inteligÃªncia de dados.',
    alternates: {
    canonical: 'https://olvinternacional.com.br/engage'
  },
};

export default function EngagePage() {
  return (
    <PlatformLayout
      platformName="ENGAGE"
      platformLogo="/images/engage-logo.jpeg"
      platformDescription="Marketing e ComunicaÃ§Ã£o para Mercados Globais"
      platformIntro="A ENGAGE Ã© a plataforma de marketing e comunicaÃ§Ã£o da OLV Internacional, que conecta marcas brasileiras a audiÃªncias globais por meio de estratÃ©gias interculturais e campanhas digitais de alto impacto."
      platformColor="#6A3C63"
    >
      <section className="mb-12">
        <h2 className="section-title">Sobre a ENGAGE</h2>
        <p className="mb-4">
          A ENGAGE Ã© a plataforma de marketing e comunicaÃ§Ã£o da OLV Internacional, especializada em desenvolver estratÃ©gias eficazes para mercados internacionais, ajudando empresas brasileiras a se conectarem de forma autÃªntica e impactante com audiÃªncias globais.
        </p>
        <p className="mb-4">
          Nossa abordagem combina conhecimento profundo de mercados internacionais, expertise em comunicaÃ§Ã£o intercultural e as mais recentes tecnologias digitais para criar campanhas que ressoam localmente enquanto mantÃªm a consistÃªncia global da sua marca.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <Icon src="/icons/strategy.svg" alt="Strategy Icon" size="sm" className="mr-2" />
              <h3 className="text-xl">EstratÃ©gia Internacional</h3>
            </div>
            <p>Planejamento de marketing adaptado para diferentes mercados e culturas, com foco em resultados mensurÃ¡veis.</p>
          </div>
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <Icon src="/icons/globe.svg" alt="Communication Icon" size="sm" className="mr-2" />
              <h3 className="text-xl">ComunicaÃ§Ã£o Multicultural</h3>
            </div>
            <p>Mensagens que respeitam especificidades culturais enquanto transmitem de forma efetiva os valores da sua marca.</p>
          </div>
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <Icon src="/icons/digital.svg" alt="Digital Icon" size="sm" className="mr-2" />
              <h3 className="text-xl">PresenÃ§a Digital Global</h3>
            </div>
            <p>Desenvolvimento de ecossistemas digitais otimizados para diferentes mercados e comportamentos de consumo.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="service-section-title">ServiÃ§os ENGAGE</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <Icon src="/icons/marketing.svg" alt="Marketing Icon" size="sm" className="mr-2" />
              <h3 className="text-xl">EstratÃ©gia de Marketing Internacional</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2">
              <li>AnÃ¡lise de mercados internacionais</li>
              <li>Posicionamento de marca global</li>
              <li>Planejamento de campanhas multinacionais</li>
              <li>AdaptaÃ§Ã£o cultural de mensagens</li>
            </ul>
          </div>
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <Icon src="/icons/digital-marketing.svg" alt="Digital Marketing Icon" size="sm" className="mr-2" />
              <h3 className="text-xl">Marketing Digital Global</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2">
              <li>SEO internacional e multilÃ­ngue</li>
              <li>Campanhas de mÃ­dia paga em mercados-alvo</li>
              <li>EstratÃ©gias de mÃ­dias sociais localizadas</li>
              <li>AnÃ¡lise de performance por mercado</li>
            </ul>
          </div>
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <Icon src="/icons/communication.svg" alt="Communication Icon" size="sm" className="mr-2" />
              <h3 className="text-xl">ComunicaÃ§Ã£o Internacional</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2">
              <li>RelaÃ§Ãµes pÃºblicas em mercados globais</li>
              <li>GestÃ£o de crise internacional</li>
              <li>Treinamento em comunicaÃ§Ã£o intercultural</li>
              <li>EstratÃ©gia de conteÃºdo multilÃ­ngue</li>
            </ul>
          </div>
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <Icon src="/icons/branding.svg" alt="Branding Icon" size="sm" className="mr-2" />
              <h3 className="text-xl">Branding Internacional</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2">
              <li>AdaptaÃ§Ã£o de identidade visual para mercados especÃ­ficos</li>
              <li>AnÃ¡lise de percepÃ§Ã£o de marca por paÃ­s</li>
              <li>EstratÃ©gias de localizaÃ§Ã£o de marca</li>
              <li>VerificaÃ§Ã£o de adequaÃ§Ã£o cultural</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="service-section-title">BenefÃ­cios ENGAGE</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <Icon src="/icons/connection.svg" alt="Connection Icon" size="sm" className="mr-2" />
              <h3 className="text-lg">ConexÃ£o Cultural AutÃªntica</h3>
            </div>
            <p>ComunicaÃ§Ã£o que ressoa com diferentes culturas, evitando erros de traduÃ§Ã£o ou inadequaÃ§Ãµes culturais.</p>
          </div>
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <Icon src="/icons/optimization.svg" alt="Optimization Icon" size="sm" className="mr-2" />
              <h3 className="text-lg">OtimizaÃ§Ã£o de Investimentos</h3>
            </div>
            <p>EstratÃ©gias focadas nos canais e abordagens mais efetivos para cada mercado internacional.</p>
          </div>
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <Icon src="/icons/consistency.svg" alt="Consistency Icon" size="sm" className="mr-2" />
              <h3 className="text-lg">ConsistÃªncia Global</h3>
            </div>
            <p>Mensagens coerentes em todos os mercados, preservando a essÃªncia da marca enquanto adapta aspectos culturais.</p>
          </div>
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <Icon src="/icons/growth.svg" alt="Growth Icon" size="sm" className="mr-2" />
              <h3 className="text-lg">ExpansÃ£o Acelerada</h3>
            </div>
            <p>Entrada mais rÃ¡pida e eficiente em novos mercados com estratÃ©gias de comunicaÃ§Ã£o jÃ¡ adaptadas.</p>
          </div>
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <Icon src="/icons/risk.svg" alt="Risk Icon" size="sm" className="mr-2" />
              <h3 className="text-lg">PrevenÃ§Ã£o de Riscos</h3>
            </div>
            <p>IdentificaÃ§Ã£o antecipada de potenciais problemas de comunicaÃ§Ã£o ou percepÃ§Ã£o em diferentes culturas.</p>
          </div>
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <Icon src="/icons/insights.svg" alt="Insights Icon" size="sm" className="mr-2" />
              <h3 className="text-lg">Insights Multiculturais</h3>
            </div>
            <p>Aprendizados valiosos sobre diferentes mercados que podem informar estratÃ©gias de produto e negÃ³cios.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="service-section-title">Depoimentos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="platform-card">
            <p className="italic mb-4">"A equipe da ENGAGE transformou completamente nossa abordagem ao mercado norte-americano. Eles identificaram sutilezas culturais que estÃ¡vamos ignorando e reformularam nossa comunicaÃ§Ã£o, resultando em um aumento de 60% no engajamento e 35% nas conversÃµes."</p>
            <p className="font-semibold">Fernanda Santos</p>
            <p className="text-sm opacity-75">Diretora de Marketing, Software Solutions Brasil</p>
          </div>
          <div className="platform-card">
            <p className="italic mb-4">"Nossa estratÃ©gia de entrada no mercado asiÃ¡tico estava encontrando resistÃªncia atÃ© contratarmos a ENGAGE. A compreensÃ£o deles das nuances culturais locais nos permitiu adaptar nossa mensagem e construir conexÃµes genuÃ­nas com distribuidores e consumidores."</p>
            <p className="font-semibold">Ricardo Oliveira</p>
            <p className="text-sm opacity-75">CEO, Exportadora de Produtos Naturais</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="service-section-title">FAQ - Perguntas Frequentes</h2>
        <div className="space-y-4">
          <div className="platform-card">
            <div className="p-4 font-semibold flex items-center">
              <Icon src="/icons/faq.svg" alt="FAQ Icon" size="sm" className="mr-2" />
              Por que preciso adaptar minha estratÃ©gia de marketing para mercados internacionais?
            </div>
            <div className="p-4">
              Cada mercado internacional possui caracterÃ­sticas Ãºnicas em termos de comportamento do consumidor, preferÃªncias de comunicaÃ§Ã£o, canais de mÃ­dia populares, normas culturais e requisitos legais. Uma estratÃ©gia que funciona perfeitamente no Brasil pode falhar completamente em outros paÃ­ses se nÃ£o for adaptada adequadamente. A ENGAGE ajuda a identificar essas diferenÃ§as crÃ­ticas e desenvolver abordagens que mantenham a essÃªncia da sua marca enquanto ressoam culturalmente com cada mercado-alvo, maximizando sua eficÃ¡cia e evitando potenciais erros custosos.
            </div>
          </div>
          <div className="platform-card">
            <div className="p-4 font-semibold flex items-center">
              <Icon src="/icons/faq.svg" alt="FAQ Icon" size="sm" className="mr-2" />
              Como a ENGAGE lida com as diferenÃ§as linguÃ­sticas e culturais em campanhas globais?
            </div>
            <div className="p-4">
              Nossa abordagem vai muito alÃ©m da simples traduÃ§Ã£o. Trabalhamos com uma rede global de especialistas nativos em marketing e comunicaÃ§Ã£o que entendem profundamente as nuances culturais de cada mercado. Realizamos pesquisas locais para compreender como sua marca e mensagens serÃ£o percebidas, adaptamos elementos visuais e textuais para garantir relevÃ¢ncia cultural, e desenvolvemos estratÃ©gias de conteÃºdo que abordam temas e valores importantes para cada pÃºblico. Implementamos tambÃ©m um rigoroso processo de verificaÃ§Ã£o cultural para evitar associaÃ§Ãµes negativas ou mal-entendidos que poderiam prejudicar sua marca.
            </div>
          </div>
          <div className="platform-card">
            <div className="p-4 font-semibold flex items-center">
              <Icon src="/icons/faq.svg" alt="FAQ Icon" size="sm" className="mr-2" />
              Quais mercados internacionais a ENGAGE tem experiÃªncia em atender?
            </div>
            <div className="p-4">
              A ENGAGE possui expertise comprovada em diversos mercados globais, incluindo AmÃ©rica do Norte (EUA e CanadÃ¡), Europa (com foco em Reino Unido, Alemanha, FranÃ§a, Espanha e Portugal), AmÃ©rica Latina (MÃ©xico, ColÃ´mbia, Chile, Argentina), e mercados selecionados na Ãsia (China, JapÃ£o, Coreia do Sul) e Oriente MÃ©dio (Emirados Ãrabes Unidos e ArÃ¡bia Saudita). Nossa rede de especialistas locais continua em expansÃ£o, permitindo-nos atender novos mercados conforme a demanda. Para cada projeto, montamos uma equipe com experiÃªncia especÃ­fica nas regiÃµes de interesse do cliente.
            </div>
          </div>
          <div className="platform-card">
            <div className="p-4 font-semibold flex items-center">
              <Icon src="/icons/faq.svg" alt="FAQ Icon" size="sm" className="mr-2" />
              Como a ENGAGE mede o sucesso das estratÃ©gias de marketing internacional?
            </div>
            <div className="p-4">
              Implementamos uma estrutura robusta de mÃ©tricas e anÃ¡lises adaptada para cada mercado internacional. Definimos KPIs especÃ­ficos alinhados aos objetivos de negÃ³cio, estabelecemos benchmarks locais relevantes, e utilizamos ferramentas avanÃ§adas de analytics para monitorar performance em tempo real. Nossos dashboards permitem comparaÃ§Ãµes entre diferentes mercados, identificando tendÃªncias e oportunidades. Realizamos anÃ¡lises regulares nÃ£o apenas de mÃ©tricas quantitativas (trÃ¡fego, conversÃµes, ROI), mas tambÃ©m qualitativas (percepÃ§Ã£o de marca, sentimento do consumidor) para fornecer uma visÃ£o holÃ­stica do impacto de nossas estratÃ©gias em cada regiÃ£o.
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-purple-50 rounded-lg p-8 text-center dark:bg-purple-900 dark:bg-opacity-20">
          <h2 className="text-2xl font-bold mb-4 text-purple-900 dark:text-purple-100">Pronto para conectar sua marca com audiÃªncias globais?</h2>
          <p className="mb-6 max-w-3xl mx-auto dark:text-purple-200">Entre em contato com nossos especialistas e descubra como a ENGAGE pode ajudar sua empresa a desenvolver estratÃ©gias de marketing e comunicaÃ§Ã£o eficazes para mercados internacionais.</p>
          <Link href="/contato" className="inline-block bg-purple-800 text-white py-3 px-6 rounded-md font-semibold hover:bg-purple-900 transition duration-300 flex items-center justify-center">
            <Icon src="/icons/specialist.svg" alt="Specialist Icon" size="sm" className="mr-2" />
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
            "name": "ENGAGE",
            "provider": {
              "@type": "Organization",
              "name": "OLV Internacional",
              "url": "https://www.olvinternacional.com.br"
            },
            "description": "Plataforma de marketing e comunicaÃ§Ã£o especializada em estratÃ©gias para mercados internacionais.",
            "serviceType": "Marketing Internacional e ComunicaÃ§Ã£o Global",
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
