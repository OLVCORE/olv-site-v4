import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '../../components/layout/MainLayout';

export const metadata = {
  title: 'Ecossistema | OLV Internacional',
  description: 'O Ecossistema OLV Corp integra estratégia, operação e resultado, capacitando PMEs com acesso global.'
};

export default function EcossistemaPage() {
  const plataformas = [
    {
      nome: 'OLV INTERNACIONAL',
      descricao: 'O braço consultivo e a força motriz do ecossistema, responsável por criar as plataformas e introduzir tecnologia e conhecimento de mercado. Atua em todas as vertentes, fornecendo apoio personalizado e humanizado.',
      imagem: '/images/olv-internacional-logo.jpeg',
      link: '/',
      beneficios: [
        'Expertise em identificar as dores do mercado para PME.',
        'Proporciona assessoria e preparo de profissionais para o mercado.',
        'Integra tecnologia, conhecimento e expertise de mercado.'
      ],
      integracoes: [
        'Apoia todas as plataformas e áreas do ecossistema.',
        'Oferece uma vitrine de soluções para as PMEs.'
      ]
    },
    {
      nome: 'STRATEVO',
      descricao: 'Plataforma de Inteligência Empresarial e Dados',
      imagem: '/images/stratevo-logo.jpeg',
      link: '/stratevo',
      beneficios: [
        'Decisões baseadas em dados.',
        'Análise de empresas, riscos, concorrentes, mercado e clientes.',
        'Geração de relatórios inteligentes.',
        'Suporte total à tomada de decisão.'
      ],
      integracoes: [
        'Alimenta dados para Exceltta, Connecta, Finx e Veritus.',
        'Dá visão estratégica para decisões operacionais e financeiras.'
      ]
    },
    {
      nome: 'EXCELTTA',
      descricao: 'Plataforma de Inteligência em Licitações, Compras e Oportunidades Comerciais Públicas e Privadas',
      imagem: '/images/exceltta-logo.jpeg',
      link: '/exceltta',
      beneficios: [
        'Leitura inteligente de editais.',
        'Análise de viabilidade.',
        'Geração de propostas e apoio ao processo licitatório.',
        'Acesso a mercados institucionais.'
      ],
      integracoes: [
        'Usa dados de Stratevo para qualificar licitações.',
        'Integra com Connecta para localizar fornecedores e parceiros.',
        'Integra com Finx para simulações financeiras.'
      ]
    },
    {
      nome: 'OLV CONNECTA',
      descricao: 'Plataforma de Conexão com Fornecedores, Fabricantes e Soluções Globais',
      imagem: '/images/connecta-logo.jpeg',
      link: '/connecta',
      beneficios: [
        'Busca de fornecedores nacionais e internacionais.',
        'Verificação de legitimidade.',
        'Acesso a indústrias, fabricantes, distribuidores e soluções logísticas.',
        'Inteligência de supply chain.'
      ],
      integracoes: [
        'Suporta Exceltta na formação de propostas.',
        'Fornece dados para simulações de custos no Finx.',
        'Dá musculatura operacional para empresas escalarem.'
      ]
    },
    {
      nome: 'OLV ENGAGE',
      descricao: 'Plataforma de relacionamento e qualificação de leads que automatiza todo o funil de vendas para PMEs. Utiliza IA e STRATEVO para classificar oportunidades.',
      imagem: '/images/engage-logo.jpeg',
      link: '/engage',
      beneficios: [
        'Funis ativo e passivo com monitoramento visual de cada etapa.',
        'Qualificação automática de leads com enriquecimento de dados do STRATEVO.',
        'Dashboards comerciais customizáveis com indicadores de conversão e produtividade.',
        'Integração multicanal (WhatsApp, e-mail, telefonia) para comunicação instantânea.'
      ],
      integracoes: [
        'Consulta STRATEVO para validação e enriquecimento de leads.',
        'Alimenta dashboards no OLV CORE para visão única de performance.',
        'Sincroniza com o CRM do cliente via API para unificar o funil de vendas.'
      ]
    },
    {
      nome: 'OLV CORE',
      descricao: 'Centro de Controle Operacional e Estratégico do Ecossistema',
      imagem: '/images/core-logo.jpeg',
      link: '/core',
      beneficios: [
        'Dashboard de gestão.',
        'Painel com indicadores operacionais, financeiros e comerciais.',
        'Acompanhamento de projetos, licitações, fornecedores, compliance, finanças e oportunidades.'
      ],
      integracoes: [
        'Integra todos os sistemas.',
        'Mostra a visão completa da empresa e do ecossistema.',
        'Gestão 360° em tempo real.'
      ]
    },
    {
      nome: 'OLV FINX',
      descricao: 'Plataforma de Gestão Financeira, Simuladores e Planejamento Econômico Empresarial',
      imagem: '/images/finx-logo.jpeg',
      link: '/finx',
      beneficios: [
        'Gestão de fluxo de caixa.',
        'Simulador de custos, câmbio, importação, exportação e formação de preço.',
        'Inteligência financeira aplicada.',
        'Acesso a oportunidades de crédito, capital e investidores.'
      ],
      integracoes: [
        'Suporte financeiro para todas as plataformas.',
        'Simula custos de operações do Connecta, contratos do Exceltta e estratégias do Stratevo.',
        'Sustenta as tomadas de decisão com clareza financeira.'
      ]
    },
    {
      nome: 'OLV ACADEMY',
      descricao: 'Plataforma de Educação, Treinamento e Capacitação Empresarial',
      imagem: '/images/academy-logo.jpeg',
      link: '/academy',
      beneficios: [
        'Cursos online e presenciais.',
        'Programas de capacitação executiva.',
        'Mentoria, workshops e treinamentos para empresários e equipes.',
        'Acesso contínuo à atualização empresarial.'
      ],
      integracoes: [
        'Capacita os usuários de todas as plataformas.',
        'Garante que as empresas desenvolvam cultura, gestão, compliance e expansão.'
      ]
    },
    {
      nome: 'OLV VERITUS',
      descricao: 'Plataforma de Compliance, Due Diligence, Auditoria e Riscos Empresariais',
      imagem: '/images/veritus-logo.jpeg',
      link: '/veritus',
      beneficios: [
        'Validação de parceiros, fornecedores, clientes e investidores.',
        'Blindagem jurídica, fiscal, societária e operacional.',
        'Due Diligence preventiva.',
        'Apoio na mitigação de riscos.'
      ],
      integracoes: [
        'Funciona como filtro de segurança para Connecta, Stratevo e Exceltta.',
        'Garante que todas as operações do ecossistema sejam feitas com parceiros legítimos.'
      ]
    },
    {
      nome: 'OLV LABS',
      descricao: 'Plataforma de Inovação, Tecnologia, IA, Desenvolvimento e Transformação Digital',
      imagem: '/images/labs-logo.jpeg',
      link: '/labs',
      beneficios: [
        'Criação de automações, sistemas sob demanda, apps e tecnologias próprias.',
        'Inovação aplicada à operação das PMEs.',
        'Desenvolvimento de soluções com IA, OCR, WebScraping, APIs e integrações.'
      ],
      integracoes: [
        'Desenvolve as tecnologias que sustentam todo o ecossistema.',
        'Integra os sistemas, dashboards, simuladores e IA.'
      ]
    },
    {
      nome: 'OLV VENTURES',
      descricao: 'Plataforma de Aceleração, Investimento e Venture Builder',
      imagem: '/images/ventures-logo.jpeg',
      link: '/ventures',
      beneficios: [
        'Apoio a startups e PMEs que queiram escalar seus modelos de negócio.',
        'Desenvolvimento de produtos digitais, processos e expansão.',
        'Conexão com investidores, fundos e parcerias estratégicas.'
      ],
      integracoes: [
        'Se conecta com todas as plataformas para selecionar negócios sólidos.',
        'Usa dados de Stratevo e Veritus para análise de risco.',
        'Apoia financeiramente com Finx e operacionalmente com Connecta e Exceltta.'
      ]
    }
  ];

  return (
    <MainLayout>
      <div className="main-content">
        {/* SEÇÃO HERO ECOSSISTEMA */}
        <section className="section">
          <div className="container">
            <div className="bg-gray-800 dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="flex items-center gap-2 text-2xl md:text-3xl font-bold text-white mb-4">
                <span className="text-blue-400">🌐</span> Ecossistema OLV Corp: Transformação para PMEs
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Conheça nosso ecossistema integrado de plataformas tecnológicas e soluções estratégicas. Uma arquitetura robusta e interconectada projetada para transformar pequenas e médias empresas em organizações de alto desempenho no mercado global.
              </p>
              <Link 
                href="/contato" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg inline-block transition-colors"
              >
                Conecte-se Conosco
              </Link>
            </div>
          </div>
        </section>

        {/* O QUE É O ECOSSISTEMA */}
        <section className="section" id="o-que-e-ecossistema">
          <div className="container">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                🌐⚙️📊🚀 O Que É o Ecossistema OLV Corp?
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                O <strong>Ecossistema OLV Corp</strong> é um conjunto completo de plataformas digitais e serviços estratégicos interconectados, criado especificamente para que pequenas e médias empresas possam competir globalmente com a mesma força e inteligência das grandes corporações.
              </p>
              <ul className="space-y-2 ml-6 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Cada plataforma do ecossistema foi desenvolvida para atender uma necessidade específica dos negócios, mas funciona de forma integrada com as demais.</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Nossas plataformas proporcionam <strong>acesso a dados, tecnologia, mercados globais, governança e crescimento sustentável</strong> sem a necessidade de grandes investimentos em infraestrutura interna.</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Ao invés de contratar pessoas, você contrata resultados. Ao invés de montar estrutura, você acessa inteligência, experiência e rede estratégica.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* DNA DO ECOSSISTEMA */}
        <section className="section" id="dna-ecossistema">
          <div className="container">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                🌍 O DNA do Ecossistema OLV Corp
              </h2>

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">MISSÃO</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Democratizar a gestão inteligente, o acesso global e as boas práticas de negócios para as PMEs, com uma visão integrada, moderna e escalável.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">VISÃO</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Ser o maior ecossistema de desenvolvimento e aceleração empresarial do Brasil e da América Latina, focado em PMEs.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">PROPÓSITO</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Gerar impacto real na economia, ajudando empresas a <strong>crescerem, se internacionalizarem, se profissionalizarem e se tornarem mais competitivas no mercado nacional e global.</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PLATAFORMAS DO ECOSSISTEMA */}
        <section className="section" id="plataformas-detalhes">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900 dark:text-white">
              🔗 As Plataformas do Ecossistema e Como se Interligam
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {plataformas.map((plataforma, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
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
                      <strong className="text-blue-600 dark:text-blue-400">💡 O que é:</strong> {plataforma.descricao}
                    </p>
                    
                    <h4 className="font-bold text-gray-800 dark:text-white mb-2">🔥 Benefícios:</h4>
                    <ul className="mb-4 space-y-1 text-gray-700 dark:text-gray-300">
                      {plataforma.beneficios.map((beneficio, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{beneficio}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <h4 className="font-bold text-gray-800 dark:text-white mb-2">🔗 Como se interliga:</h4>
                    <ul className="mb-6 space-y-1 text-gray-700 dark:text-gray-300">
                      {plataforma.integracoes.map((integracao, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{integracao}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex justify-end">
                      <Link
                        href={plataforma.link}
                        className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors"
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

        {/* O QUE O ECOSSISTEMA ENTREGA */}
        <section className="section" id="o-que-entrega">
          <div className="container">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                💎 O Que o Ecossistema Entrega para Sua Empresa?
              </h2>
              <ul className="space-y-2 ml-6 mb-6 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Transforma empresas sem gestão em empresas de alta performance.</strong></span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Oferece <strong>tecnologia de ponta, inteligência aplicada, governança e segurança.</strong></span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Abre as portas para que qualquer PME opere <strong>como uma multinacional.</strong></span>
                </li>
              </ul>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">📊</span>
                    <span>Gestão baseada em dados.</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">⚖️</span>
                    <span>Compliance e due diligence.</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">💰</span>
                    <span>Planejamento financeiro profissional.</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">🌐</span>
                    <span>Acesso global a fornecedores, clientes e mercados.</span>
                  </li>
                </ul>
                
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">🚀</span>
                    <span>Desenvolvimento tecnológico e inovação aplicada.</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">🏛️</span>
                    <span>Participação em licitações e expansão do mercado.</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">👥</span>
                    <span>Formação executiva contínua e desenvolvimento de cultura empresarial.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* POR QUE DIFERENTE */}
        <section className="section" id="por-que-diferente">
          <div className="container">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                🤔 Por Que o Ecossistema OLV Corp É Diferente?
              </h2>
              <ul className="space-y-2 ml-6 text-gray-700 dark:text-gray-300">
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">🔗</span>
                  <strong>Tudo está conectado.</strong>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">🧠</span>
                  <strong>Inteligência aplicada em todos os níveis.</strong>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">💡</span>
                  <strong>Entrega gestão, não só software.</strong>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">🚀</span>
                  <strong>Não vende ferramentas. Entrega transformação.</strong>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">📈</span>
                  <strong>É o braço direito do empresário moderno.</strong>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FRASE DE IMPACTO */}
        <section className="section" id="frase-impacto">
          <div className="container">
            <div className="bg-blue-700 dark:bg-blue-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-bold mb-4 text-white">Acredite!</h2>
              <blockquote className="text-xl italic font-medium text-white">
                "O Ecossistema OLV Corp não é um software. É a transformação que sua empresa precisa para sair do caos e entrar no mundo da gestão, da escala e da prosperidade."
              </blockquote>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="section">
          <div className="container text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Pronto para Ação?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Integre-se ao nosso ecossistema e transforme seu negócio com nossas soluções.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contato" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg inline-block transition-colors"
              >
                Fale com um Especialista
              </Link>
              <Link 
                href="#plataformas-detalhes" 
                className="bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 font-bold py-3 px-6 rounded-lg inline-block transition-colors border border-blue-600 dark:border-blue-400"
              >
                Conheça Nossas Plataformas
              </Link>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
} 