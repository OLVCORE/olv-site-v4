import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MainLayout from '../../components/layout/MainLayout';

export const metadata = {
  title: 'Soluções | OLV Internacional',
  description: 'Conheça as soluções de consultoria em comércio exterior e gestão empresarial da OLV Internacional.'
};

export default function SolucoesPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <div className="bg-[#141c2f] text-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">Nossas Soluções Consultivas</h1>
              <p className="text-lg max-w-3xl text-gray-300">
                Oferecemos serviços especializados para otimizar seus processos de comércio exterior, 
                logística internacional e gestão empresarial. Transformamos desafios em oportunidades 
                através de soluções inovadoras e personalizadas para sua empresa.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center mt-6 md:mt-0">
              <div className="relative w-48 h-48 bg-[#0a0f1d] p-5 rounded-full border-2 border-[#d4af37] flex items-center justify-center">
                <Image 
                  src="/icons/solutions-icon.svg" 
                  alt="Soluções" 
                  width={100} 
                  height={100}
                  className="opacity-90"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Introdução */}
        <div className="bg-[#141c2f] rounded-lg p-6 mb-8 shadow-md border border-[#2a3448]">
          <h2 className="text-2xl font-bold text-white mb-4">Nossa Expertise</h2>
          <p className="text-gray-300 mb-3">
            Bem-vindo ao portfólio de Soluções da OLV Internacional. Aqui você encontrará nossos serviços 
            especializados para empresas que buscam expandir, otimizar e transformar seus processos de comércio exterior
            e operações internacionais.
          </p>
          <p className="text-gray-300">
            Nossa equipe de consultores experientes está pronta para apoiar sua empresa com soluções 
            personalizadas em importação, exportação, logística internacional, compliance, planejamento tributário
            e muito mais. Cada solução é desenhada para atender às necessidades específicas do seu negócio,
            permitindo que você opere globalmente com segurança e eficiência.
          </p>
        </div>

        {/* Cards de Soluções */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Card 1 - Consultoria Estratégica em Comex */}
          <div className="bg-[#141c2f] rounded-xl border border-[#2a3448] overflow-hidden shadow-xl hover:border-[#d4af37] hover:shadow-2xl transition-all duration-300">
            <div className="p-4">
              <div className="w-14 h-14 rounded-full bg-[#0a0f1d] border-2 border-[#d4af37] flex items-center justify-center mb-3">
                <Image src="/icons/strategy.svg" alt="Ícone de Estratégia" width={28} height={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Consultoria Estratégica em Comex</h3>
              <p className="text-gray-300 mb-3 text-sm">
                Análise profunda de cenários, estruturação de operações internacionais e desenho de estratégias
                personalizadas para cada perfil de empresa. Desenvolvemos roadmaps completos para
                internacionalização segura, eficiente e escalável.
              </p>
              <ul className="space-y-2 mb-3">
                <li className="bg-[#1a2338] p-2 rounded-lg flex items-start border border-[#2a3448] hover:border-[#d4af37] hover:transform hover:translate-x-1 transition-all duration-200">
                  <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="mt-1 mr-2 flex-shrink-0" />
                  <span className="text-xs text-gray-300">Análise de viabilidade para mercados-alvo</span>
                </li>
                <li className="bg-[#1a2338] p-2 rounded-lg flex items-start border border-[#2a3448] hover:border-[#d4af37] hover:transform hover:translate-x-1 transition-all duration-200">
                  <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="mt-1 mr-2 flex-shrink-0" />
                  <span className="text-xs text-gray-300">Estruturação de modelos de negócio global</span>
                </li>
                <li className="bg-[#1a2338] p-2 rounded-lg flex items-start border border-[#2a3448] hover:border-[#d4af37] hover:transform hover:translate-x-1 transition-all duration-200">
                  <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="mt-1 mr-2 flex-shrink-0" />
                  <span className="text-xs text-gray-300">Planejamento estratégico internacional</span>
                </li>
              </ul>
              <Link href="/solucoes/exportacao" className="inline-block text-[#d4af37] hover:underline text-sm">
                Saiba mais →
              </Link>
            </div>
          </div>

          {/* Card 2 - Soluções Operacionais para Exportação e Importação */}
          <div className="bg-[#141c2f] rounded-xl border border-[#2a3448] overflow-hidden shadow-xl hover:border-[#d4af37] hover:shadow-2xl transition-all duration-300">
            <div className="p-4">
              <div className="w-14 h-14 rounded-full bg-[#0a0f1d] border-2 border-[#d4af37] flex items-center justify-center mb-3">
                <Image src="/icons/operations.svg" alt="Ícone de Operações" width={28} height={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Soluções Operacionais para Exportação e Importação</h3>
              <p className="text-gray-300 mb-3 text-sm">
                Condução completa de todos os processos operacionais de comércio exterior, desde
                habilitações e registros até o fechamento de câmbio, documentação e desembaraço
                aduaneiro, com foco em conformidade e eficiência.
              </p>
              <ul className="space-y-2 mb-3">
                <li className="bg-[#1a2338] p-2 rounded-lg flex items-start border border-[#2a3448] hover:border-[#d4af37] hover:transform hover:translate-x-1 transition-all duration-200">
                  <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="mt-1 mr-2 flex-shrink-0" />
                  <span className="text-xs text-gray-300">Habilitação e manutenção de Radar SISCOMEX</span>
                </li>
                <li className="bg-[#1a2338] p-2 rounded-lg flex items-start border border-[#2a3448] hover:border-[#d4af37] hover:transform hover:translate-x-1 transition-all duration-200">
                  <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="mt-1 mr-2 flex-shrink-0" />
                  <span className="text-xs text-gray-300">Operações completas de importação e exportação</span>
                </li>
                <li className="bg-[#1a2338] p-2 rounded-lg flex items-start border border-[#2a3448] hover:border-[#d4af37] hover:transform hover:translate-x-1 transition-all duration-200">
                  <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="mt-1 mr-2 flex-shrink-0" />
                  <span className="text-xs text-gray-300">Gestão documental e análise de parametrização</span>
                </li>
              </ul>
              <Link href="/solucoes/importacao" className="inline-block text-[#d4af37] hover:underline text-sm">
                Saiba mais →
              </Link>
            </div>
          </div>

          {/* Card 3 - Gestão de Supply Chain Integrado */}
          <div className="bg-[#141c2f] rounded-xl border border-[#2a3448] overflow-hidden shadow-xl hover:border-[#d4af37] hover:shadow-2xl transition-all duration-300">
            <div className="p-4">
              <div className="w-14 h-14 rounded-full bg-[#0a0f1d] border-2 border-[#d4af37] flex items-center justify-center mb-3">
                <Image src="/icons/supply-chain.svg" alt="Ícone Supply Chain" width={28} height={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Gestão de Supply Chain Integrado</h3>
              <p className="text-gray-300 mb-3 text-sm">
                Planejamento e otimização de toda a cadeia de suprimentos internacional, desde
                a identificação de fornecedores até a entrega ao cliente final, com foco em
                redução de custos, minimização de riscos e aumento de eficiência.
              </p>
              <ul className="space-y-2 mb-3">
                <li className="bg-[#1a2338] p-2 rounded-lg flex items-start border border-[#2a3448] hover:border-[#d4af37] hover:transform hover:translate-x-1 transition-all duration-200">
                  <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="mt-1 mr-2 flex-shrink-0" />
                  <span className="text-xs text-gray-300">Gestão integrada de fornecedores globais</span>
                </li>
                <li className="bg-[#1a2338] p-2 rounded-lg flex items-start border border-[#2a3448] hover:border-[#d4af37] hover:transform hover:translate-x-1 transition-all duration-200">
                  <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="mt-1 mr-2 flex-shrink-0" />
                  <span className="text-xs text-gray-300">Otimização de fluxos logísticos internacionais</span>
                </li>
                <li className="bg-[#1a2338] p-2 rounded-lg flex items-start border border-[#2a3448] hover:border-[#d4af37] hover:transform hover:translate-x-1 transition-all duration-200">
                  <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="mt-1 mr-2 flex-shrink-0" />
                  <span className="text-xs text-gray-300">Controle de inventário e planejamento de demanda</span>
                </li>
              </ul>
              <Link href="/solucoes/logistica" className="inline-block text-[#d4af37] hover:underline text-sm">
                Saiba mais →
              </Link>
            </div>
          </div>

          {/* Card 4 - Tecnologia Aplicada à Competitividade */}
          <div className="bg-[#141c2f] rounded-xl border border-[#2a3448] overflow-hidden shadow-xl hover:border-[#d4af37] hover:shadow-2xl transition-all duration-300">
            <div className="p-4">
              <div className="w-14 h-14 rounded-full bg-[#0a0f1d] border-2 border-[#d4af37] flex items-center justify-center mb-3">
                <Image src="/icons/tech.svg" alt="Ícone de Tecnologia" width={28} height={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Tecnologia Aplicada à Competitividade</h3>
              <p className="text-gray-300 mb-3 text-sm">
                Implementação de soluções tecnológicas e sistemas integrados para automatizar
                processos de comércio exterior, possibilitando maior controle, visibilidade
                e agilidade em todas as etapas da operação internacional.
              </p>
              <ul className="space-y-2 mb-3">
                <li className="bg-[#1a2338] p-2 rounded-lg flex items-start border border-[#2a3448] hover:border-[#d4af37] hover:transform hover:translate-x-1 transition-all duration-200">
                  <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="mt-1 mr-2 flex-shrink-0" />
                  <span className="text-xs text-gray-300">Dashboards de performance operacional</span>
                </li>
                <li className="bg-[#1a2338] p-2 rounded-lg flex items-start border border-[#2a3448] hover:border-[#d4af37] hover:transform hover:translate-x-1 transition-all duration-200">
                  <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="mt-1 mr-2 flex-shrink-0" />
                  <span className="text-xs text-gray-300">Automação de processos de comércio exterior</span>
                </li>
                <li className="bg-[#1a2338] p-2 rounded-lg flex items-start border border-[#2a3448] hover:border-[#d4af37] hover:transform hover:translate-x-1 transition-all duration-200">
                  <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="mt-1 mr-2 flex-shrink-0" />
                  <span className="text-xs text-gray-300">Soluções tecnológicas para rastreabilidade global</span>
                </li>
              </ul>
              <Link href="/solucoes/compliance" className="inline-block text-[#d4af37] hover:underline text-sm">
                Saiba mais →
              </Link>
            </div>
          </div>

          {/* Card 5 - Compliance e Governança Estratégica */}
          <div className="bg-[#141c2f] rounded-xl border border-[#2a3448] overflow-hidden shadow-xl hover:border-[#d4af37] hover:shadow-2xl transition-all duration-300">
            <div className="p-4">
              <div className="w-14 h-14 rounded-full bg-[#0a0f1d] border-2 border-[#d4af37] flex items-center justify-center mb-3">
                <Image src="/icons/compliance.svg" alt="Ícone de Compliance" width={28} height={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Compliance e Governança Estratégica</h3>
              <p className="text-gray-300 mb-3 text-sm">
                Atuamos com estruturas completas de compliance e governança estratégica, tática e operacional, 
                incorporando inteligência normativa, auditoria contínua, gestão de riscos e formação de times 
                com foco em resultado. Não basta cumprir normas: é preciso transformar processos em vantagem competitiva.
              </p>
              <ul className="space-y-2 mb-3">
                <li className="bg-[#1a2338] p-2 rounded-lg flex items-start border border-[#2a3448] hover:border-[#d4af37] hover:transform hover:translate-x-1 transition-all duration-200">
                  <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="mt-1 mr-2 flex-shrink-0" />
                  <span className="text-xs text-gray-300">Governança corporativa em operações globais</span>
                </li>
                <li className="bg-[#1a2338] p-2 rounded-lg flex items-start border border-[#2a3448] hover:border-[#d4af37] hover:transform hover:translate-x-1 transition-all duration-200">
                  <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="mt-1 mr-2 flex-shrink-0" />
                  <span className="text-xs text-gray-300">Implementação de programas de integridade</span>
                </li>
                <li className="bg-[#1a2338] p-2 rounded-lg flex items-start border border-[#2a3448] hover:border-[#d4af37] hover:transform hover:translate-x-1 transition-all duration-200">
                  <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="mt-1 mr-2 flex-shrink-0" />
                  <span className="text-xs text-gray-300">Estruturação de controles e processos normativos</span>
                </li>
              </ul>
              <Link href="/solucoes/treinamento" className="inline-block text-[#d4af37] hover:underline text-sm">
                Saiba mais →
              </Link>
            </div>
          </div>
        </div>

        {/* Novos Serviços Detalhados */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Serviços Detalhados</h2>
          <p className="text-gray-300 mb-6 text-center max-w-4xl mx-auto">
            Abaixo detalhamos nossos principais serviços em comércio exterior e gestão empresarial. Cada solução pode ser personalizada de acordo com as necessidades específicas da sua empresa.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Card 1 - Consultoria em Exportação */}
            <div className="bg-[#141c2f] rounded-lg shadow-lg overflow-hidden border border-[#2a3448] transition-all duration-300 hover:shadow-xl hover:border-[#d4af37]">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 bg-[#0a0f1d] flex items-center justify-center p-5 border-r border-[#2a3448]">
                  <div className="w-14 h-14 rounded-full bg-[#141c2f] border-2 border-[#d4af37] flex items-center justify-center">
                    <Image 
                      src="/icons/export-icon.svg" 
                      alt="Consultoria em Exportação" 
                      width={28} 
                      height={28}
                    />
                  </div>
                </div>
                <div className="md:w-2/3 p-5">
                  <h3 className="text-lg font-bold text-white mb-2">Consultoria em Exportação</h3>
                  <p className="text-gray-300 mb-3 text-sm">
                    Desenvolvemos estratégias de exportação personalizadas para empresas de todos os portes. Nosso serviço abrange desde a análise inicial de viabilidade até a execução completa da operação.
                  </p>
                  <ul className="text-gray-300 space-y-1.5 mb-3">
                    <li className="flex items-start">
                      <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Planejamento Estratégico de Exportação</span>
                    </li>
                    <li className="flex items-start">
                      <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Documentação e Compliance Internacional</span>
                    </li>
                    <li className="flex items-start">
                      <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Exportação de Produtos, Máquinas, Serviços e Commodities</span>
                    </li>
                    <li className="flex items-start">
                      <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Logística Internacional 3PL | 4PL para Exportação</span>
                    </li>
                    <li className="flex items-start">
                      <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Planejamento Tributário na Exportação</span>
                    </li>
                    <li className="flex items-start">
                      <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Despacho Aduaneiro Internacional</span>
                    </li>
                    <li className="flex items-start">
                      <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Estratégia de Redução de Custos Operacionais</span>
                    </li>
                    <li className="flex items-start">
                      <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Operação Assistida e Mentoria para Exportação</span>
                    </li>
                    <li className="flex items-start">
                      <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Gestão Completa da Cadeia de Exportação</span>
                    </li>
                    <li className="flex items-start">
                      <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Exportação sob Regimes Especiais</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Card 2 - Consultoria em Importação */}
            <div className="bg-[#141c2f] rounded-lg shadow-lg overflow-hidden border border-[#2a3448] transition-all duration-300 hover:shadow-xl hover:border-[#d4af37]">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 bg-[#0a0f1d] flex items-center justify-center p-5 border-r border-[#2a3448]">
                  <div className="w-14 h-14 rounded-full bg-[#141c2f] border-2 border-[#d4af37] flex items-center justify-center">
                    <Image 
                      src="/icons/import-icon.svg" 
                      alt="Consultoria em Importação" 
                      width={28} 
                      height={28}
                    />
                  </div>
                </div>
                <div className="md:w-2/3 p-5">
                  <h3 className="text-lg font-bold text-white mb-2">Consultoria em Importação</h3>
                  <p className="text-gray-300 mb-3 text-sm">
                    Oferecemos suporte completo em importação, desde a análise de viabilidade, estruturação, até a operacionalização e otimização de processos de compra internacional.
                  </p>
                  <ul className="text-gray-300 space-y-1.5 mb-3">
                    <li className="flex items-start">
                      <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Abertura e Estruturação de Importadoras</span>
                    </li>
                    <li className="flex items-start">
                      <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Regularização e Habilitação no Radar SISCOMEX</span>
                    </li>
                    <li className="flex items-start">
                      <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Importação para Revenda, Produção ou Consumo</span>
                    </li>
                    <li className="flex items-start">
                      <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Compliance Aduaneiro e Tributário na Importação</span>
                    </li>
                    <li className="flex items-start">
                      <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Planejamento Tributário (Ex-Tarifário, Drawback, RECOF)</span>
                    </li>
                    <li className="flex items-start">
                      <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Logística Internacional (Door-to-Door)</span>
                    </li>
                    <li className="flex items-start">
                      <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Gestão de Freight Forwarder e Custos Logísticos</span>
                    </li>
                    <li className="flex items-start">
                      <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Operação Assistida e Treinamento Prático</span>
                    </li>
                    <li className="flex items-start">
                      <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Estratégias de Redução de Custos Tributários</span>
                    </li>
                    <li className="flex items-start">
                      <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Due Diligence Operacional na Cadeia de Importação</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Card 3 - Logística Internacional | Supply Chain */}
            <div className="bg-[#141c2f] rounded-lg shadow-lg overflow-hidden border border-[#2a3448] transition-all duration-300 hover:shadow-xl hover:border-[#d4af37]">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 bg-[#0a0f1d] flex items-center justify-center p-5 border-r border-[#2a3448]">
                  <div className="w-14 h-14 rounded-full bg-[#141c2f] border-2 border-[#d4af37] flex items-center justify-center">
                    <Image 
                      src="/icons/logistics-icon.svg" 
                      alt="Logística Internacional" 
                      width={28} 
                      height={28}
                    />
                  </div>
                </div>
                <div className="md:w-2/3 p-5">
                  <h3 className="text-lg font-bold text-white mb-2">Logística Internacional | Supply Chain | 3PL & 4PL</h3>
                  <p className="text-gray-300 mb-3 text-sm">
                    Planejamento e gestão completa da cadeia de suprimentos global, garantindo eficiência, rastreabilidade e otimização de custos logísticos em toda a operação.
                  </p>
                  <ul className="text-gray-300 space-y-1.5 mb-3">
                    <li className="flex items-start">
                      <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Gestão Ponta a Ponta da Cadeia Logística</span>
                    </li>
                    <li className="flex items-start">
                      <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Freight Forwarding Global (Aéreo, Marítimo, Multimodal)</span>
                    </li>
                    <li className="flex items-start">
                      <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Gerenciamento de Armazéns e Centros de Distribuição</span>
                    </li>
                    <li className="flex items-start">
                      <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Planejamento Logístico Estratégico</span>
                    </li>
                    <li className="flex items-start">
                      <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Monitoramento de Embarques Globais</span>
                    </li>
                    <li className="flex items-start">
                      <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">S&OP Internacional (Sales & Operations Planning)</span>
                    </li>
                    <li className="flex items-start">
                      <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Controle de Estoques Globais (JIT / JIS / Kanban)</span>
                    </li>
                    <li className="flex items-start">
                      <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Otimização de CAPEX e OPEX Logístico</span>
                    </li>
                    <li className="flex items-start">
                      <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Estratégias de Nearshoring e Offshoring</span>
                    </li>
                    <li className="flex items-start">
                      <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Redução de Custos Logísticos Internacionais</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Card 4 - Compliance, Planejamento Tributário e Due Diligence */}
            <div className="bg-[#141c2f] rounded-lg shadow-lg overflow-hidden border border-[#2a3448] transition-all duration-300 hover:shadow-xl hover:border-[#d4af37]">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 bg-[#0a0f1d] flex items-center justify-center p-5 border-r border-[#2a3448]">
                  <div className="w-14 h-14 rounded-full bg-[#141c2f] border-2 border-[#d4af37] flex items-center justify-center">
                    <Image 
                      src="/icons/compliance-icon.svg" 
                      alt="Compliance e Planejamento Tributário" 
                      width={28} 
                      height={28}
                    />
                  </div>
                </div>
                <div className="md:w-2/3 p-5">
                  <h3 className="text-lg font-bold text-white mb-2">Compliance, Planejamento Tributário e Due Diligence</h3>
                  <p className="text-gray-300 mb-3 text-sm">
                    Garantimos que sua operação internacional esteja em conformidade com normas e regulamentos, maximizando eficiência tributária e minimizando riscos legais e operacionais.
                  </p>
                  <ul className="text-gray-300 space-y-1.5 mb-3">
                    <li className="flex items-start">
                      <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Planejamento Tributário Nacional e Internacional</span>
                    </li>
                    <li className="flex items-start">
                      <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Compliance Aduaneiro, Fiscal e Tributário</span>
                    </li>
                    <li className="flex items-start">
                      <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Gestão de Regimes Especiais (Drawback, RECOF, Linha Azul)</span>
                    </li>
                    <li className="flex items-start">
                      <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Regularização Societária e Operacional para Comex</span>
                    </li>
                    <li className="flex items-start">
                      <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Auditorias Fiscais, Operacionais e Aduaneiras</span>
                    </li>
                    <li className="flex items-start">
                      <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Gestão de Riscos Jurídicos e Operacionais</span>
                    </li>
                    <li className="flex items-start">
                      <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Due Diligence Comercial, Fiscal e Logística</span>
                    </li>
                    <li className="flex items-start">
                      <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Blindagem Empresarial para Operações Internacionais</span>
                    </li>
                    <li className="flex items-start">
                      <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Análise Contratual para Comércio Exterior</span>
                    </li>
                    <li className="flex items-start">
                      <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Mitigação de Riscos na Operação Logística e Cambial</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Card 5 - Treinamento, Mentoria e Capacitação Executiva */}
            <div className="bg-[#141c2f] rounded-lg shadow-lg overflow-hidden border border-[#2a3448] transition-all duration-300 hover:shadow-xl hover:border-[#d4af37]">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 bg-[#0a0f1d] flex items-center justify-center p-5 border-r border-[#2a3448]">
                  <div className="w-14 h-14 rounded-full bg-[#141c2f] border-2 border-[#d4af37] flex items-center justify-center">
                    <Image 
                      src="/icons/training-icon.svg" 
                      alt="Treinamento e Capacitação" 
                      width={28} 
                      height={28}
                    />
                  </div>
                </div>
                <div className="md:w-2/3 p-5">
                  <h3 className="text-lg font-bold text-white mb-2">Treinamento, Mentoria e Capacitação Executiva</h3>
                  <p className="text-gray-300 mb-3 text-sm">
                    Desenvolvemos e fortalecemos as competências da sua equipe em comércio exterior, capacitando profissionais para tomada de decisões estratégicas e operacionais.
                  </p>
                  <ul className="text-gray-300 space-y-1.5 mb-3">
                    <li className="flex items-start">
                      <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Cursos Intensivos de Importação e Exportação</span>
                    </li>
                    <li className="flex items-start">
                      <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Workshops em Supply Chain, Comex e Logística Internacional</span>
                    </li>
                    <li className="flex items-start">
                      <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Mentoria Personalizada para Empresários e Equipes</span>
                    </li>
                    <li className="flex items-start">
                      <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Operação Assistida (Aprenda na Prática)</span>
                    </li>
                    <li className="flex items-start">
                      <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Capacitação em Compliance, Documentação e Aduana</span>
                    </li>
                    <li className="flex items-start">
                      <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Gestão Estratégica de Custos e Logística Internacional</span>
                    </li>
                    <li className="flex items-start">
                      <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Desenvolvimento de Lideranças em Comex e Supply Chain</span>
                    </li>
                    <li className="flex items-start">
                      <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">S&OP, Forecasting, Planejamento e Execução Global</span>
                    </li>
                    <li className="flex items-start">
                      <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Gestão de Riscos e Soluções de Crises Logísticas</span>
                    </li>
                    <li className="flex items-start">
                      <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Consultoria Educacional para PMEs e Multinacionais</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[#141c2f] rounded-lg shadow-xl p-6 text-white text-center mb-8 border border-[#2a3448] hover:border-[#d4af37] transition-all duration-300">
          <h2 className="text-2xl font-bold mb-3">Pronto para Transformar seu Negócio Internacional?</h2>
          <p className="mb-4 max-w-3xl mx-auto text-gray-300">
            Fale com nossos consultores hoje mesmo e descubra como podemos ajudar sua empresa
            a alcançar novos patamares no comércio internacional.
          </p>
          <Link href="/contato" className="inline-block bg-[#0a0f1d] text-[#d4af37] font-semibold py-2 px-6 rounded-lg border border-[#d4af37] hover:bg-[#d4af37] hover:text-[#0a0f1d] transition-colors">
            Solicite uma Consultoria
          </Link>
        </div>
      </div>
    </MainLayout>
  );
} 