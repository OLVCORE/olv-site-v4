import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '../../components/layout/MainLayout';

export const metadata = {
  title: 'Radar 360 | OLV Internacional - Dados, Inteligência e Simuladores',
  description: 'Acesse o Radar 360 da OLV Internacional: dados em tempo real, inteligência de mercado e simuladores para otimizar suas operações de Supply Chain, Comércio Exterior e Logística Internacional.'
};

export default function Radar360Page() {
  return (
    <MainLayout>
      <div className="main-content">
        {/* SEÇÃO HERO RADAR 360 */}
        <section className="section">
          <div className="container">
            <div className="bg-gray-800 dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="flex items-center gap-2 text-2xl md:text-3xl font-bold text-white mb-4">
                <span className="text-blue-400">🚀</span> OLV Radar 360 – Central de Inteligência & Dados
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Bem-vindo ao Radar 360, nossa central de inteligência e dados para negócios internacionais. 
                Aqui você encontra ferramentas essenciais para tomada de decisão: cotações em tempo real, 
                simuladores de custos, indicadores econômicos e recursos estratégicos para operações globais.
                Transforme dados em decisões inteligentes para seu negócio.
              </p>
              <Link 
                href="/contato" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg inline-block transition-colors"
              >
                Fale com um Especialista
              </Link>
            </div>
          </div>
        </section>

        {/* BLOCOS DE CONTEÚDO DO RADAR 360 */}
        <div className="container">
          {/* Cotações em Tempo Real */}
          <section className="section" id="cotacoes">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="flex items-center gap-2 text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                <span className="text-blue-600 dark:text-blue-400">💱</span> Cotações em Tempo Real
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">Dólar Comercial</h3>
                  <p className="text-gray-700 dark:text-gray-300">R$ [valor]</p>
                  <small className="text-gray-500 dark:text-gray-400">* Integração de API em desenvolvimento.</small>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">Euro</h3>
                  <p className="text-gray-700 dark:text-gray-300">R$ [valor]</p>
                  <small className="text-gray-500 dark:text-gray-400">* Integração de API em desenvolvimento.</small>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">Bitcoin (BTC)</h3>
                  <p className="text-gray-700 dark:text-gray-300">R$ [valor]</p>
                  <small className="text-gray-500 dark:text-gray-400">* Integração de API em desenvolvimento.</small>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">Outras Moedas</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">Consulte cotações de outras moedas globais.</p>
                  <a 
                    href="https://www.xe.com/currencyconverter/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Acessar Conversor
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Simuladores e Calculadoras */}
          <section className="section" id="simuladores">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="flex items-center gap-2 text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                <span className="text-blue-600 dark:text-blue-400">🧮</span> Simuladores e Calculadoras
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">Simulador de Custos de Importação</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">Calcule impostos, fretes e taxas para sua operação de importação.</p>
                  <button className="bg-blue-600 text-white text-sm py-2 px-3 rounded hover:bg-blue-700 transition-colors">
                    Abrir Simulador
                  </button>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">Calculadora de Fretes Internacionais</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">Estime custos de frete aéreo, marítimo e rodoviário.</p>
                  <button className="bg-blue-600 text-white text-sm py-2 px-3 rounded hover:bg-blue-700 transition-colors">
                    Abrir Calculadora
                  </button>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">Simulador Cambial</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">Converta valores entre diferentes moedas com taxas atualizadas.</p>
                  <a 
                    href="https://www.oanda.com/currency/converter/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Acessar Simulador
                  </a>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">Simulador Tributário Comex</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">Entenda a carga tributária para seus produtos na importação e exportação.</p>
                  <button className="bg-blue-600 text-white text-sm py-2 px-3 rounded hover:bg-blue-700 transition-colors">
                    Abrir Simulador
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Monitoramento Logístico & Freight Rates (Em breve) */}
          <section className="section" id="monitoramento">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="flex items-center gap-2 text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                <span className="text-blue-600 dark:text-blue-400">🚚</span> Monitoramento Logístico & Freight Rates (Em breve)
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">Monitor de Fretes Internacionais</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">Acompanhe spot rates, rotas e tendências de fretes aéreos e marítimos.</p>
                  <small className="text-yellow-600 dark:text-yellow-400">🚧 Em desenvolvimento.</small>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">Status de Portos e Aeroportos</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">Informações sobre congestionamentos, greves e status operacional.</p>
                  <small className="text-yellow-600 dark:text-yellow-400">🚧 Em desenvolvimento.</small>
                </div>
              </div>
            </div>
          </section>

          {/* Dashboard Econômico & Logístico (Fase 2) */}
          <section className="section" id="dashboard">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="flex items-center gap-2 text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                <span className="text-blue-600 dark:text-blue-400">📊</span> Dashboard Econômico & Logístico (Fase 2)
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">Indicadores de Comércio Exterior</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">Balança comercial, fluxo de exportação/importação por setor e país.</p>
                  <small className="text-yellow-600 dark:text-yellow-400">🚧 Em desenvolvimento.</small>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">Indicadores Macroeconômicos</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">PIB, inflação, taxa de juros e outros dados relevantes para negócios globais.</p>
                  <small className="text-yellow-600 dark:text-yellow-400">🚧 Em desenvolvimento.</small>
                </div>
              </div>
            </div>
          </section>

          {/* Legislação, Compliance & Recursos Oficiais */}
          <section className="section" id="compliance">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="flex items-center gap-2 text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                <span className="text-blue-600 dark:text-blue-400">📋</span> Legislação, Compliance & Recursos Oficiais
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <a 
                  href="https://www.gov.br/receitafederal" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">Receita Federal</h3>
                  <p className="text-gray-700 dark:text-gray-300">Legislação aduaneira, tributária e normas.</p>
                </a>
                <a 
                  href="https://comexstat.mdic.gov.br/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">Comex Stat</h3>
                  <p className="text-gray-700 dark:text-gray-300">Estatísticas detalhadas de importação e exportação do Brasil.</p>
                </a>
                <a 
                  href="https://www.aladi.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">ALADI</h3>
                  <p className="text-gray-700 dark:text-gray-300">Associação Latino-Americana de Integração.</p>
                </a>
                <a 
                  href="https://www.incoterms2020.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">Incoterms 2020</h3>
                  <p className="text-gray-700 dark:text-gray-300">Regras oficiais para o uso de termos comerciais.</p>
                </a>
                <a 
                  href="https://www.portosdobrasil.gov.br/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">Portos do Brasil</h3>
                  <p className="text-gray-700 dark:text-gray-300">Informações sobre portos e terminais brasileiros.</p>
                </a>
                <a 
                  href="https://www.anvisa.gov.br/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">ANVISA</h3>
                  <p className="text-gray-700 dark:text-gray-300">Regulamentação sanitária para importação/exportação.</p>
                </a>
                <a 
                  href="https://www.gov.br/agricultura/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">MAPA – Agricultura</h3>
                  <p className="text-gray-700 dark:text-gray-300">Normas e procedimentos para produtos agrícolas.</p>
                </a>
              </div>
            </div>
          </section>

          {/* Notícias & Insights */}
          <section className="section" id="noticias">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="flex items-center gap-2 text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                <span className="text-blue-600 dark:text-blue-400">📰</span> Notícias & Insights
              </h2>
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">Feed de Notícias do Mercado Global</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">Atualizações sobre Comércio Exterior, Logística, Supply Chain, Economia e PMEs.</p>
                <small className="text-yellow-600 dark:text-yellow-400">🚧 Feed automatizado em desenvolvimento.</small>
              </div>
            </div>
          </section>

          {/* CTA Final */}
          <section className="section">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Quer ir além dos dados?
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                O Radar 360 é uma amostra da inteligência que a OLV Internacional entrega. Fale com nossos especialistas para soluções personalizadas.
              </p>
              <Link 
                href="/contato" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg inline-block transition-colors"
              >
                Fale com um Especialista
              </Link>
            </div>
          </section>
        </div>
      </div>
    </MainLayout>
  );
}