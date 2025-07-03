import React from 'react';
import Link from 'next/link';
import MainLayout from '../../components/layout/MainLayout';
import Icon from '../../components/icons/Icon';
import RealtimeQuotes from '../../components/radar/RealtimeQuotes';
import CommoditiesQuotes from '../../components/radar/CommoditiesQuotes';

export const metadata = {
  title: 'Radar 360 | OLV Internacional - Dados, InteligÃªncia e Simuladores',
  description: 'Acesse o Radar 360 da OLV Internacional: dados em tempo real, inteligÃªncia de mercado e simuladores para otimizar suas operaÃ§Ãµes de Supply Chain, ComÃ©rcio Exterior e LogÃ­stica Internacional.',
    alternates: {
    canonical: 'https://olvinternacional.com.br/radar360'
  },
};

export default function Radar360Page() {
  return (
    <MainLayout>
      <div className="main-content pt-24 md:pt-28">
        {/* SEÃ‡ÃƒO HERO RADAR 360 */}
        <section className="section">
          <div className="container">
            <div className="bg-gray-800 dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="flex items-center gap-2 text-2xl md:text-3xl font-bold text-white mb-4">
                <Icon src="/icons/radar-icon.svg" alt="Radar 360" size="sm" className="text-accent" />
                OLV Radar 360 â€“ Central de InteligÃªncia & Dados
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Bem-vindo ao <strong>Radar&nbsp;360</strong>, nossa central de inteligÃªncia e dados para negÃ³cios internacionais. Aqui vocÃª encontra ferramentas essenciais para tomada de decisÃ£o: cotaÃ§Ãµes em tempo real, simuladores de custos, indicadores econÃ´micos e recursos estratÃ©gicos para operaÃ§Ãµes globais.&nbsp;
                <br className="hidden md:block" />
                Transforme dados em decisÃµes inteligentes para seu negÃ³cio.
              </p>
              <Link 
                href="/contato" 
                className="btn btn-primary font-bold py-3 px-6"
              >
                Fale com um Especialista
              </Link>
            </div>
          </div>
        </section>

        {/* PAINÃ‰IS LADO A LADO */}
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Painel SIMULADORES */}
            <div className="order-1 lg:order-none" id="simuladores">
              <section className="section p-0">
                <div className="glass p-6 rounded-2xl shadow-gold card-hover">
                  <h2 className="flex items-center gap-2 text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    <span className="text-accent">ðŸ§®</span> Simuladores e Calculadoras
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Import Cost */}
                    <div className="glass p-4 rounded-xl card-hover">
                      <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">Simulador de Custos de ImportaÃ§Ã£o</h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">Calcule impostos, fretes e taxas para sua operaÃ§Ã£o de importaÃ§Ã£o.</p>
                      <Link href="/simuladores/importacao" className="btn btn-primary text-sm py-2 px-3 w-full text-center">Abrir Simulador</Link>
                    </div>
                    {/* Export Cost */}
                    <div className="glass p-4 rounded-xl card-hover">
                      <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">Simulador de Custos de ExportaÃ§Ã£o</h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">Calcule receita lÃ­quida e crÃ©dito Reintegra.</p>
                      <Link href="/simuladores/exportacao" className="btn btn-primary text-sm py-2 px-3 w-full block text-center">Abrir Simulador</Link>
                    </div>
                    {/* Currency Converter */}
                    <div className="glass p-4 rounded-xl card-hover">
                      <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">Simulador Cambial</h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-2">Converta valores entre diferentes moedas com taxas atualizadas.</p>
                      <Link href="/simuladores/cambio" className="btn btn-primary text-sm py-2 px-3 w-full block text-center">Abrir Conversor</Link>
                    </div>
                    {/* Freight Calculator */}
                    <div className="glass p-4 rounded-xl card-hover">
                      <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">Calculadora de Fretes Internacionais</h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">Estime custos de frete aÃ©reo, marÃ­timo e rodoviÃ¡rio.</p>
                      <Link href="/simuladores/frete-full" className="btn btn-primary text-sm py-2 px-3 w-full block text-center">Abrir Calculadora</Link>
                    </div>
                    {/* Tax Sim placeholder */}
                    <div className="glass p-4 rounded-xl card-hover">
                      <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">Simulador TributÃ¡rio Comex</h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">Entenda a carga tributÃ¡ria para seus produtos na importaÃ§Ã£o e exportaÃ§Ã£o.</p>
                      <button className="btn btn-primary text-sm py-2 px-3 w-full">Abrir Simulador</button>
                    </div>
                    {/* Future: Peso/Volume Converter */}
                    <div className="glass p-4 rounded-xl card-hover">
                      <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">Conversor Peso âš–ï¸ Volume</h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">Calcule peso cubado e otimizaÃ§Ã£o de frete internacional.</p>
                      <Link href="/simuladores/cubagem" className="btn btn-primary text-sm py-2 px-3 w-full block text-center">Abrir Conversor</Link>
                    </div>
                  </div>
                </div>
              </section>

              {/* CTA Filler Card */}
              <section className="section p-0 mt-6 hidden lg:block">
                <div className="glass p-6 rounded-2xl shadow-gold flex flex-col items-center text-center gap-4 card-hover">
                  <h3 className="text-lg font-bold text-gray-100">Radar&nbsp;360 Ã© sua central de inteligÃªncia</h3>
                  <p className="text-sm text-gray-300 max-w-md">CotaÃ§Ãµes em tempo real, simuladores e insights para decisÃµes globais â€” totalmente integrados ao ecossistema OLV.</p>
                  <Link href="/solucoes" className="btn btn-primary text-sm px-5 py-2">Explorar SoluÃ§Ãµes</Link>
                </div>
              </section>
            </div>

            {/* Painel COTAÃ‡Ã•ES */}
            <div className="order-2 lg:order-none" id="cotacoes">
              {/* CotaÃ§Ãµes Moedas */}
              <section className="section p-0">
                <div className="glass p-6 rounded-2xl shadow-gold card-hover mb-8 lg:mb-6">
                  <h2 className="flex items-center gap-2 text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    <span className="text-accent">ðŸ’±</span> CotaÃ§Ãµes em Tempo Real
                  </h2>
                  <RealtimeQuotes />
                </div>
              </section>
              {/* Commodities */}
              <section className="section p-0">
                <div className="glass p-6 rounded-2xl shadow-gold card-hover">
                  <h2 className="flex items-center gap-2 text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    <Icon src="/icons/chart.svg" alt="Commodities" size="sm" className="text-accent" /> PreÃ§os de Commodities
                  </h2>
                  <CommoditiesQuotes />
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* Monitoramento LogÃ­stico & Freight Rates (Em breve) */}
        <section className="section mt-3" id="monitoramento">
          <div className="glass p-6 rounded-2xl shadow-gold card-hover">
            <h2 className="flex items-center gap-2 text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
              <span className="text-accent">ðŸšš</span> Monitoramento LogÃ­stico & Freight Rates (Em breve)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="glass p-4 rounded-xl card-hover">
                <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">Monitor de Fretes Internacionais</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">Acompanhe spot rates, rotas e tendÃªncias de fretes aÃ©reos e marÃ­timos.</p>
                <small className="text-yellow-600 dark:text-yellow-400">ðŸš§ Em desenvolvimento.</small>
              </div>
              <div className="glass p-4 rounded-xl card-hover">
                <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">Status de Portos e Aeroportos</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">InformaÃ§Ãµes sobre congestionamentos, greves e status operacional.</p>
                <small className="text-yellow-600 dark:text-yellow-400">ðŸš§ Em desenvolvimento.</small>
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard EconÃ´mico & LogÃ­stico (Fase 2) */}
        <section className="section mt-3" id="dashboard">
          <div className="glass p-6 rounded-2xl shadow-gold card-hover">
            <h2 className="flex items-center gap-2 text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
              <span className="text-accent">ðŸ“Š</span> Dashboard EconÃ´mico & LogÃ­stico (Fase 2)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="glass p-4 rounded-xl card-hover">
                <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">Indicadores de ComÃ©rcio Exterior</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">BalanÃ§a comercial, fluxo de exportaÃ§Ã£o/importaÃ§Ã£o por setor e paÃ­s.</p>
                <small className="text-yellow-600 dark:text-yellow-400">ðŸš§ Em desenvolvimento.</small>
              </div>
              <div className="glass p-4 rounded-xl card-hover">
                <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">Indicadores MacroeconÃ´micos</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">PIB, inflaÃ§Ã£o, taxa de juros e outros dados relevantes para negÃ³cios globais.</p>
                <small className="text-yellow-600 dark:text-yellow-400">ðŸš§ Em desenvolvimento.</small>
              </div>
            </div>
          </div>
        </section>

        {/* LegislaÃ§Ã£o, Compliance & Recursos Oficiais */}
        <section className="section mt-3" id="compliance">
          <div className="glass p-6 rounded-2xl shadow-gold card-hover">
            <h2 className="flex items-center gap-2 text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
              <span className="text-accent">ðŸ“‹</span> LegislaÃ§Ã£o, Compliance & Recursos Oficiais
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <a 
                href="https://www.gov.br/receitafederal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass p-4 rounded-xl card-hover hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">Receita Federal</h3>
                <p className="text-gray-700 dark:text-gray-300">LegislaÃ§Ã£o aduaneira, tributÃ¡ria e normas.</p>
              </a>
              <a 
                href="https://comexstat.mdic.gov.br/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass p-4 rounded-xl card-hover hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">Comex Stat</h3>
                <p className="text-gray-700 dark:text-gray-300">EstatÃ­sticas detalhadas de importaÃ§Ã£o e exportaÃ§Ã£o do Brasil.</p>
              </a>
              <a 
                href="https://www.aladi.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass p-4 rounded-xl card-hover hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">ALADI</h3>
                <p className="text-gray-700 dark:text-gray-300">AssociaÃ§Ã£o Latino-Americana de IntegraÃ§Ã£o.</p>
              </a>
              <a 
                href="https://www.incoterms2020.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass p-4 rounded-xl card-hover hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">Incoterms 2020</h3>
                <p className="text-gray-700 dark:text-gray-300">Regras oficiais para o uso de termos comerciais.</p>
              </a>
              <a 
                href="https://www.portosdobrasil.gov.br/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass p-4 rounded-xl card-hover hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">Portos do Brasil</h3>
                <p className="text-gray-700 dark:text-gray-300">InformaÃ§Ãµes sobre portos e terminais brasileiros.</p>
              </a>
              <a 
                href="https://www.anvisa.gov.br/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass p-4 rounded-xl card-hover hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">ANVISA</h3>
                <p className="text-gray-700 dark:text-gray-300">RegulamentaÃ§Ã£o sanitÃ¡ria para importaÃ§Ã£o/exportaÃ§Ã£o.</p>
              </a>
              <a 
                href="https://www.gov.br/agricultura/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass p-4 rounded-xl card-hover hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">MAPA â€“ Agricultura</h3>
                <p className="text-gray-700 dark:text-gray-300">Normas e procedimentos para produtos agrÃ­colas.</p>
              </a>
            </div>
          </div>
        </section>

        {/* NotÃ­cias & Insights */}
        <section className="section mt-3" id="noticias">
          <div className="glass p-6 rounded-2xl shadow-gold card-hover">
            <h2 className="flex items-center gap-2 text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
              <span className="text-accent">ðŸ“°</span> NotÃ­cias & Insights
            </h2>
            <div className="glass p-4 rounded-xl card-hover">
              <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">Feed de NotÃ­cias do Mercado Global</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">AtualizaÃ§Ãµes sobre ComÃ©rcio Exterior, LogÃ­stica, Supply Chain, Economia e PMEs.</p>
              <small className="text-yellow-600 dark:text-yellow-400">ðŸš§ Feed automatizado em desenvolvimento.</small>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="section mt-3">
          <div className="glass p-6 rounded-2xl shadow-gold card-hover text-center">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Quer ir alÃ©m dos dados?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              O Radar 360 Ã© uma amostra da inteligÃªncia que a OLV Internacional entrega. Fale com nossos especialistas para soluÃ§Ãµes personalizadas.
            </p>
            <Link 
              href="/contato" 
              className="btn btn-primary font-bold py-3 px-6"
            >
              Fale com um Especialista
            </Link>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
