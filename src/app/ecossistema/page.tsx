import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '../../components/layout/MainLayout';
import Icon from '../../components/icons/Icon';

export const metadata = {
  title: 'Ecossistema | OLV Internacional',
  description: 'O Ecossistema OLV Corp integra estratÃ©gia, operaÃ§Ã£o e resultado, capacitando PMEs com acesso global.',
    alternates: {
    canonical: 'https://olvinternacional.com.br/ecossistema'
  },
};

export default function EcossistemaPage() {
  const plataformas = [
    {
      nome: 'OLV INTERNACIONAL',
      descricao: 'O braÃ§o consultivo e a forÃ§a motriz do ecossistema, responsÃ¡vel por criar as plataformas e introduzir tecnologia e conhecimento de mercado. Atua em todas as vertentes, fornecendo apoio personalizado e humanizado.',
      imagem: '/images/olv-internacional-logo.jpeg',
      link: '/',
      beneficios: [
        'Expertise em identificar as dores do mercado para PME.',
        'Proporciona assessoria e preparo de profissionais para o mercado.',
        'Integra tecnologia, conhecimento e expertise de mercado.'
      ],
      integracoes: [
        'Apoia todas as plataformas e Ã¡reas do ecossistema.',
        'Oferece uma vitrine de soluÃ§Ãµes para as PMEs.'
      ]
    },
    {
      nome: 'STRATEVO',
      descricao: 'Plataforma de InteligÃªncia Empresarial e Dados',
      imagem: '/images/stratevo-logo.jpeg',
      link: '/stratevo',
      beneficios: [
        'DecisÃµes baseadas em dados.',
        'AnÃ¡lise de empresas, riscos, concorrentes, mercado e clientes.',
        'GeraÃ§Ã£o de relatÃ³rios inteligentes.',
        'Suporte total Ã  tomada de decisÃ£o.'
      ],
      integracoes: [
        'Alimenta dados para Exceltta, Connecta, Finx e Veritus.',
        'DÃ¡ visÃ£o estratÃ©gica para decisÃµes operacionais e financeiras.'
      ]
    },
    {
      nome: 'EXCELTTA',
      descricao: 'Plataforma de InteligÃªncia em LicitaÃ§Ãµes, Compras e Oportunidades Comerciais PÃºblicas e Privadas',
      imagem: '/images/exceltta-logo.jpeg',
      link: '/exceltta',
      beneficios: [
        'Leitura inteligente de editais.',
        'AnÃ¡lise de viabilidade.',
        'GeraÃ§Ã£o de propostas e apoio ao processo licitatÃ³rio.',
        'Acesso a mercados institucionais.'
      ],
      integracoes: [
        'Usa dados de Stratevo para qualificar licitaÃ§Ãµes.',
        'Integra com Connecta para localizar fornecedores e parceiros.',
        'Integra com Finx para simulaÃ§Ãµes financeiras.'
      ]
    },
    {
      nome: 'CONNECTA',
      descricao: 'Plataforma de ConexÃ£o com Fornecedores, Fabricantes e SoluÃ§Ãµes Globais',
      imagem: '/images/connecta-logo.jpeg',
      link: '/connecta',
      beneficios: [
        'Busca de fornecedores nacionais e internacionais.',
        'VerificaÃ§Ã£o de legitimidade.',
        'Acesso a indÃºstrias, fabricantes, distribuidores e soluÃ§Ãµes logÃ­sticas.',
        'InteligÃªncia de supply chain.'
      ],
      integracoes: [
        'Suporta Exceltta na formaÃ§Ã£o de propostas.',
        'Fornece dados para simulaÃ§Ãµes de custos no Finx.',
        'DÃ¡ musculatura operacional para empresas escalarem.'
      ]
    },
    {
      nome: 'ENGAGE',
      descricao: 'Plataforma de relacionamento e qualificaÃ§Ã£o de leads que automatiza todo o funil de vendas para PMEs. Utiliza IA e STRATEVO para classificar oportunidades.',
      imagem: '/images/engage-logo.jpeg',
      link: '/engage',
      beneficios: [
        'Funis ativo e passivo com monitoramento visual de cada etapa.',
        'QualificaÃ§Ã£o automÃ¡tica de leads com enriquecimento de dados do STRATEVO.',
        'Dashboards comerciais customizÃ¡veis com indicadores de conversÃ£o e produtividade.',
        'IntegraÃ§Ã£o multicanal (WhatsApp, e-mail, telefonia) para comunicaÃ§Ã£o instantÃ¢nea.'
      ],
      integracoes: [
        'Consulta STRATEVO para validaÃ§Ã£o e enriquecimento de leads.',
        'Alimenta dashboards no OLV CORE para visÃ£o Ãºnica de performance.',
        'Sincroniza com o CRM do cliente via API para unificar o funil de vendas.'
      ]
    },
    {
      nome: 'CORE PANNEL',
      descricao: 'Centro de Controle Operacional e EstratÃ©gico do Ecossistema',
      imagem: '/images/core-logo.jpeg',
      link: '/core',
      beneficios: [
        'Dashboard de gestÃ£o.',
        'Painel com indicadores operacionais, financeiros e comerciais.',
        'Acompanhamento de projetos, licitaÃ§Ãµes, fornecedores, compliance, finanÃ§as e oportunidades.'
      ],
      integracoes: [
        'Integra todos os sistemas.',
        'Mostra a visÃ£o completa da empresa e do ecossistema.',
        'GestÃ£o 360Â° em tempo real.'
      ]
    },
    {
      nome: 'FINX',
      descricao: 'Plataforma de GestÃ£o Financeira, Simuladores e Planejamento EconÃ´mico Empresarial',
      imagem: '/images/finx-logo.jpeg',
      link: '/finx',
      beneficios: [
        'GestÃ£o de fluxo de caixa.',
        'Simulador de custos, cÃ¢mbio, importaÃ§Ã£o, exportaÃ§Ã£o e formaÃ§Ã£o de preÃ§o.',
        'InteligÃªncia financeira aplicada.',
        'Acesso a oportunidades de crÃ©dito, capital e investidores.'
      ],
      integracoes: [
        'Suporte financeiro para todas as plataformas.',
        'Simula custos de operaÃ§Ãµes do Connecta, contratos do Exceltta e estratÃ©gias do Stratevo.',
        'Sustenta as tomadas de decisÃ£o com clareza financeira.'
      ]
    },
    {
      nome: 'VECTOR',
      descricao: 'Plataforma de EducaÃ§Ã£o, Treinamento e CapacitaÃ§Ã£o Empresarial',
      imagem: '/images/vector-logo.jpeg',
      link: '/academy',
      beneficios: [
        'Cursos online e presenciais.',
        'Programas de capacitaÃ§Ã£o executiva.',
        'Mentoria, workshops e treinamentos para empresÃ¡rios e equipes.',
        'Acesso contÃ­nuo Ã  atualizaÃ§Ã£o empresarial.'
      ],
      integracoes: [
        'Capacita os usuÃ¡rios de todas as plataformas.',
        'Garante que as empresas desenvolvam cultura, gestÃ£o, compliance e expansÃ£o.'
      ]
    },
    {
      nome: 'VERITUS',
      descricao: 'Plataforma de Compliance, Due Diligence, Auditoria e Riscos Empresariais',
      imagem: '/images/veritus-logo.jpeg',
      link: '/veritus',
      beneficios: [
        'ValidaÃ§Ã£o de parceiros, fornecedores, clientes e investidores.',
        'Blindagem jurÃ­dica, fiscal, societÃ¡ria e operacional.',
        'Due Diligence preventiva.',
        'Apoio na mitigaÃ§Ã£o de riscos.'
      ],
      integracoes: [
        'Funciona como filtro de seguranÃ§a para Connecta, Stratevo e Exceltta.',
        'Garante que todas as operaÃ§Ãµes do ecossistema sejam feitas com parceiros legÃ­timos.'
      ]
    },
    {
      nome: 'LABS',
      descricao: 'Plataforma de InovaÃ§Ã£o, Tecnologia, IA, Desenvolvimento e TransformaÃ§Ã£o Digital',
      imagem: '/images/labs-logo.jpeg',
      link: '/labs',
      beneficios: [
        'CriaÃ§Ã£o de automaÃ§Ãµes, sistemas sob demanda, apps e tecnologias prÃ³prias.',
        'InovaÃ§Ã£o aplicada Ã  operaÃ§Ã£o das PMEs.',
        'Desenvolvimento de soluÃ§Ãµes com IA, OCR, WebScraping, APIs e integraÃ§Ãµes.'
      ],
      integracoes: [
        'Desenvolve as tecnologias que sustentam todo o ecossistema.',
        'Integra os sistemas, dashboards, simuladores e IA.'
      ]
    },
    {
      nome: 'VENTURES',
      descricao: 'Plataforma de AceleraÃ§Ã£o, Investimento e Venture Builder',
      imagem: '/images/ventures-logo.jpeg',
      link: '/ventures',
      beneficios: [
        'Apoio a startups e PMEs que queiram escalar seus modelos de negÃ³cio.',
        'Desenvolvimento de produtos digitais, processos e expansÃ£o.',
        'ConexÃ£o com investidores, fundos e parcerias estratÃ©gicas.'
      ],
      integracoes: [
        'Se conecta com todas as plataformas para selecionar negÃ³cios sÃ³lidos.',
        'Usa dados de Stratevo e Veritus para anÃ¡lise de risco.',
        'Apoia financeiramente com Finx e operacionalmente com Connecta e Exceltta.'
      ]
    }
  ];

  return (
    <MainLayout>
      {/* Beta banner */}
      <div className="animate-gold-pulse bg-yellow-200/10 border-y border-yellow-400 px-4 py-2 text-center text-sm leading-snug text-on-surface dark:text-yellow-100 mb-6">
        ðŸš§ Todas as ferramentas do Ecossistema estÃ£o em fase BETA â€“ grandes lanÃ§amentos a caminho!
      </div>
      <div className="main-content">
        {/* SEÃ‡ÃƒO HERO ECOSSISTEMA */}
        <section className="section">
          <div className="container">
            <div className="platform-card">
              <h2 className="flex items-center gap-2 text-2xl md:text-3xl font-bold text-white mb-4">
                <Icon src="/icons/ecosystem-icon.svg" alt="Ecossistema" size="sm" className="text-accent" />
                Nosso Ecossistema: TransformaÃ§Ã£o para PMEs
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                ConheÃ§a nosso ecossistema integrado de plataformas tecnolÃ³gicas e soluÃ§Ãµes estratÃ©gicas. Uma arquitetura robusta e interconectada projetada para transformar pequenas e mÃ©dias empresas em organizaÃ§Ãµes de alto desempenho no mercado global.
              </p>
              <Link 
                href="/contato" 
                className="btn btn-primary font-bold py-3 px-6 inline-block w-auto"
              >
                Conecte-se Conosco
              </Link>
            </div>
          </div>
        </section>

        {/* O QUE Ã‰ O ECOSSISTEMA */}
        <section className="section" id="o-que-e-ecossistema">
          <div className="container">
            <div className="platform-card">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                <Icon src="/icons/ecosystem-icon.svg" alt="Ecossistema" size="sm" className="text-accent" />
                O Que Ã‰ o Nosso Ecossistema?
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                O <strong>Ecossistema OLV Corp</strong> Ã© um conjunto completo de plataformas digitais e serviÃ§os estratÃ©gicos interconectados, criado especificamente para que pequenas e mÃ©dias empresas possam competir globalmente com a mesma forÃ§a e inteligÃªncia das grandes corporaÃ§Ãµes.
              </p>
              <ul className="space-y-2 ml-6 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-accent mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Cada plataforma do ecossistema foi desenvolvida para atender uma necessidade especÃ­fica dos negÃ³cios, mas funciona de forma integrada com as demais.</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-accent mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Nossas plataformas proporcionam <strong>acesso a dados, tecnologia, mercados globais, governanÃ§a e crescimento sustentÃ¡vel</strong> sem a necessidade de grandes investimentos em infraestrutura interna.</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-accent mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Ao invÃ©s de contratar pessoas, vocÃª contrata resultados. Ao invÃ©s de montar estrutura, vocÃª acessa inteligÃªncia, experiÃªncia e rede estratÃ©gica.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* DNA DO ECOSSISTEMA */}
        <section className="section" id="dna-ecossistema">
          <div className="container">
            <div className="platform-card">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-2">
                <Icon src="/icons/dna.svg" alt="DNA" size="sm" className="text-accent" />
                O DNA do Nosso Ecossistema
              </h2>

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">MISSÃƒO</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Democratizar a gestÃ£o inteligente, o acesso global e as boas prÃ¡ticas de negÃ³cios para as PMEs, com uma visÃ£o integrada, moderna e escalÃ¡vel.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">VISÃƒO</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Ser o maior ecossistema de desenvolvimento e aceleraÃ§Ã£o empresarial do Brasil e da AmÃ©rica Latina, focado em PMEs.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">PROPÃ“SITO</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Gerar impacto real na economia, ajudando empresas a <strong>crescerem, se internacionalizarem, se profissionalizarem e se tornarem mais competitivas no mercado nacional e global.</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TRANSFORME SUA EMPRESA */}
        <section className="section" id="transforme-empresa">
          <div className="container">
            <div className="glass p-8 rounded-2xl shadow-gold hover:shadow-2xl transition-all duration-300 flex flex-col lg:flex-row gap-8">
              {/* Texto principal */}
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Transforme Sua Empresa com o Nosso Ecossistema
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-prose">
                  Nosso ecossistema revolucionÃ¡rio nÃ£o entrega apenas soluÃ§Ãµes. <strong>Ele converte empresas comuns em negÃ³cios de alta performance</strong>, com a eficiÃªncia e o profissionalismo de uma multinacional. Conectamos sua PME a tecnologia, conhecimento e oportunidades para crescer de forma sustentÃ¡vel e segura.
                </p>
                <Link href="/contato" className="btn btn-primary px-6 py-3 font-semibold w-max">
                  Fale com um Especialista
                </Link>
              </div>

              {/* Lista de benefÃ­cios */}
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 dark:text-white mb-4">O que o Ecossistema Entrega:</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700 dark:text-gray-300 text-sm md:text-base">
                  <li className="flex items-start"><Icon src="/icons/rocket.svg" alt="Alta performance" size="sm" className="text-accent mr-3 mt-0.5" />Alta performance: operaÃ§Ãµes que viram mÃ¡quinas de resultados.</li>
                  <li className="flex items-start"><Icon src="/icons/analytics.svg" alt="Tecnologia e dados" size="sm" className="text-accent mr-3 mt-0.5" />Tecnologia + inteligÃªncia de dados para decisÃµes assertivas.</li>
                  <li className="flex items-start"><Icon src="/icons/ecosystem-icon.svg" alt="Multinacional" size="sm" className="text-accent mr-3 mt-0.5" />OperaÃ§Ã£o estilo multinacional: processos, governanÃ§a e escala global.</li>
                  <li className="flex items-start"><Icon src="/icons/compliance-icon.svg" alt="SeguranÃ§a e compliance" size="sm" className="text-accent mr-3 mt-0.5" />SeguranÃ§a e compliance: blindagem jurÃ­dica, fiscal e operacional.</li>
                  <li className="flex items-start"><Icon src="/icons/link.svg" alt="Acesso global" size="sm" className="text-accent mr-3 mt-0.5" />Acesso global: fornecedores, clientes e parceiros internacionais.</li>
                  <li className="flex items-start"><Icon src="/icons/currency-exchange.svg" alt="Planejamento financeiro" size="sm" className="text-accent mr-3 mt-0.5" />Planejamento financeiro profissional para crescer com saÃºde.</li>
                  <li className="flex items-start"><Icon src="/icons/dna.svg" alt="InovaÃ§Ã£o" size="sm" className="text-accent mr-3 mt-0.5" />InovaÃ§Ã£o aplicada: automaÃ§Ãµes, IA e soluÃ§Ãµes sob medida.</li>
                  <li className="flex items-start"><Icon src="/icons/target.svg" alt="ExpansÃ£o de mercado" size="sm" className="text-accent mr-3 mt-0.5" />ExpansÃ£o de mercado: licitaÃ§Ãµes, novos canais e receitas.</li>
                  <li className="flex items-start"><Icon src="/icons/training-icon.svg" alt="Pessoas e cultura" size="sm" className="text-accent mr-3 mt-0.5" />Desenvolvimento de pessoas e cultura: lideranÃ§a preparada.</li>
                  <li className="flex items-start"><Icon src="/icons/chart-bar.svg" alt="Resultados" size="sm" className="text-accent mr-3 mt-0.5" />Resultados tangÃ­veis: crescimento acelerado e riscos mitigados.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* PLATAFORMAS DO ECOSSISTEMA */}
        <section className="section" id="plataformas-detalhes">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900 dark:text-white flex items-center gap-2">
              <Icon src="/icons/link.svg" alt="InterligaÃ§Ã£o" size="sm" className="text-accent" />
              As Plataformas do Ecossistema e Como se Interligam
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {plataformas.map((plataforma, index) => (
                <div key={index} className="glass rounded-2xl shadow-gold overflow-hidden border border-[#2a3448] hover:border-[#d4af37] hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5 max-w-[300px]">
                  <div className="p-4 flex justify-center bg-gray-100 dark:bg-gray-700">
                    <div className="relative w-40 h-40">
                      <Image 
                        src={plataforma.imagem} 
                        alt={`${plataforma.nome} Logo`} 
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{plataforma.nome}</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      <span className="text-accent inline-flex items-center gap-1">
                        <Icon src="/icons/analytics.svg" alt="O que Ã©" size="xs" />
                        O que Ã©:
                      </span>{' '}{plataforma.descricao}
                    </p>
                    
                    <h4 className="font-bold text-gray-800 dark:text-white mb-2 inline-flex items-center gap-1">
                      <Icon src="/icons/rocket.svg" alt="BenefÃ­cios" size="xs" className="text-accent" />
                      BenefÃ­cios:
                    </h4>
                    <ul className="mb-4 space-y-1 text-gray-700 dark:text-gray-300">
                      {plataforma.beneficios.map((beneficio, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{beneficio}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <h4 className="font-bold text-gray-800 dark:text-white mb-2 inline-flex items-center gap-1">
                      <Icon src="/icons/link.svg" alt="IntegraÃ§Ã£o" size="xs" className="text-accent" />
                      Como se interliga:
                    </h4>
                    <ul className="mb-6 space-y-1 text-gray-700 dark:text-gray-300">
                      {plataforma.integracoes.map((integracao, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{integracao}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex justify-end">
                      <Link
                        href={plataforma.link}
                        className="btn btn-primary py-2 px-4"
                      >
                        Saiba Mais
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* POR QUE DIFERENTE */}
        <section className="section mt-6" id="por-que-diferente">
          <div className="container">
            <div className="glass p-6 rounded-2xl shadow-gold hover:shadow-2xl transition-all duration-300">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                <Icon src="/icons/solutions-icon.svg" alt="Essencial" size="sm" className="text-accent" />
                Por que o Nosso Ecossistema Ã© Essencial para sua PME?
              </h2>

              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Nosso ecossistema vai muito alÃ©m de entregar soluÃ§Ãµes: <strong>ele eleva empresas comuns Ã  alta performance</strong>, com a mesma eficiÃªncia de uma multinacional, unindo ferramentas, conhecimento e oportunidades de crescimento sustentÃ¡vel.
              </p>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700 dark:text-gray-300 text-sm md:text-base">
                <li className="flex items-start"><Icon src="/icons/rocket.svg" alt="Alta performance" size="sm" className="text-accent mr-3 mt-0.5" />Alta performance: operaÃ§Ãµes que viram mÃ¡quinas de resultados.</li>
                <li className="flex items-start"><Icon src="/icons/analytics.svg" alt="Tecnologia e dados" size="sm" className="text-accent mr-3 mt-0.5" />Tecnologia + inteligÃªncia de dados para decisÃµes assertivas.</li>
                <li className="flex items-start"><Icon src="/icons/ecosystem-icon.svg" alt="Multinacional" size="sm" className="text-accent mr-3 mt-0.5" />OperaÃ§Ã£o estilo multinacional: processos, governanÃ§a e escala global.</li>
                <li className="flex items-start"><Icon src="/icons/compliance-icon.svg" alt="SeguranÃ§a e compliance" size="sm" className="text-accent mr-3 mt-0.5" />SeguranÃ§a e compliance: blindagem jurÃ­dica, fiscal e operacional.</li>
                <li className="flex items-start"><Icon src="/icons/link.svg" alt="Acesso global" size="sm" className="text-accent mr-3 mt-0.5" />Acesso global: fornecedores, clientes e parceiros internacionais.</li>
                <li className="flex items-start"><Icon src="/icons/currency-exchange.svg" alt="Planejamento financeiro" size="sm" className="text-accent mr-3 mt-0.5" />Planejamento financeiro profissional para crescer com saÃºde.</li>
                <li className="flex items-start"><Icon src="/icons/dna.svg" alt="InovaÃ§Ã£o" size="sm" className="text-accent mr-3 mt-0.5" />InovaÃ§Ã£o aplicada: automaÃ§Ãµes, IA e soluÃ§Ãµes sob medida.</li>
                <li className="flex items-start"><Icon src="/icons/target.svg" alt="ExpansÃ£o de mercado" size="sm" className="text-accent mr-3 mt-0.5" />ExpansÃ£o de mercado: licitaÃ§Ãµes, novos canais e receitas.</li>
                <li className="flex items-start"><Icon src="/icons/training-icon.svg" alt="Pessoas e cultura" size="sm" className="text-accent mr-3 mt-0.5" />Desenvolvimento de pessoas e cultura: lideranÃ§a preparada.</li>
                <li className="flex items-start"><Icon src="/icons/chart-bar.svg" alt="Resultados" size="sm" className="text-accent mr-3 mt-0.5" />Resultados tangÃ­veis: crescimento acelerado e riscos mitigados.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* COMPROMISSO */}
        <section className="section" id="frase-impacto">
          <div className="container">
            <div className="glass p-6 rounded-2xl shadow-gold hover:shadow-2xl transition-all duration-300 text-gray-100">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Nosso Compromisso com o Futuro da Sua Empresa</h2>
              <p className="text-lg leading-relaxed text-gray-200">
                Imagine sua PME competindo lado a lado com grandes players globais, operando com tecnologia de ponta, governanÃ§a impecÃ¡vel e uma equipe altamente preparada. <strong>Esse Ã© o futuro que construÃ­mos ao seu lado</strong>: derrubamos barreiras de crescimento e adicionamos valor real em cada Ã¡rea estratÃ©gica do seu negÃ³cio.
              </p>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="section">
          <div className="container">
            <div className="glass p-6 rounded-2xl shadow-gold flex flex-col items-center text-center gap-4 hover:shadow-2xl transition-all duration-300">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-100">
                Pronto para AÃ§Ã£o?
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Integre-se ao nosso ecossistema e transforme seu negÃ³cio com nossas soluÃ§Ãµes.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/contato" 
                  className="btn btn-primary font-bold py-3 px-6"
                >
                  Fale com um Especialista
                </Link>
                <Link 
                  href="#plataformas-detalhes" 
                  className="btn btn-primary py-2 px-4"
                >
                  ConheÃ§a Nossas Plataformas
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
} 
