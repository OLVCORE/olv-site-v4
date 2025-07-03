import React from 'react';
import Link from 'next/link';
import PlatformLayout from '../../components/platforms/PlatformLayout';
import Icon from '../../components/icons/Icon';

export const metadata = {
  title: 'OLV CORE - Cockpit de GestÃ£o 360Â° | OLV Internacional',
  description: 'OLV CORE Ã© o centro de comando do ecossistema OLV Internacional, oferecendo Business Intelligence integrado e gestÃ£o 360Â° para operaÃ§Ãµes globais.',
    alternates: {
    canonical: 'https://olvinternacional.com.br/core'
  },
};

export default function CorePage() {
  return (
    <PlatformLayout
      platformName="OLV CORE"
      platformLogo="/images/core-logo.jpeg"
      platformDescription="Cockpit de GestÃ£o 360Â° & Business Intelligence"
      platformIntro="O OLV CORE reÃºne dados, indicadores e ferramentas essenciais em um Ãºnico painel, permitindo que executivos monitorem e otimizem todas as operaÃ§Ãµes internacionais em tempo real."
      platformColor="#0a2463"
    >
      {/* Sobre */}
      <section className="mb-12">
        <h2 className="section-title">Sobre o OLV CORE</h2>
        <p className="mb-4">
          O OLV CORE Ã© o centro de comando do ecossistema OLV Internacional. Ele conecta dados de todas as nossas plataformas â€“ STRATEVO, EXCELTTA, CONNECTA, VERITUS, FINX e outras â€“ entregando inteligÃªncia acionÃ¡vel em um painel unificado.
        </p>
        <p className="mb-4">
          Com dashboards personalizÃ¡veis, alertas em tempo real e integraÃ§Ãµes API-first, o CORE permite decisÃµes rÃ¡pidas, alinhadas Ã  estratÃ©gia e sustentadas por mÃ©tricas confiÃ¡veis.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <Icon src="/icons/analytics.svg" alt="BI Icon" size="sm" className="mr-2" />
              <h3 className="text-xl">Business Intelligence</h3>
            </div>
            <p>Indicadores de desempenho integrados Ã s operaÃ§Ãµes de comÃ©rcio exterior e supply chain.</p>
          </div>
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <Icon src="/icons/chart.svg" alt="Dashboards Icon" size="sm" className="mr-2" />
              <h3 className="text-xl">Dashboards Interativos</h3>
            </div>
            <p>VisualizaÃ§Ãµes dinÃ¢micas para acompanhar KPIs crÃ­ticos em tempo real.</p>
          </div>
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <Icon src="/icons/integration.svg" alt="Integration Icon" size="sm" className="mr-2" />
              <h3 className="text-xl">IntegraÃ§Ã£o Total</h3>
            </div>
            <p>API unificada que consolida dados de ERPs, CRMs e plataformas OLV.</p>
          </div>
        </div>
      </section>

      {/* ServiÃ§os */}
      <section className="mb-12">
        <h2 className="section-title">Recursos do OLV CORE</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <Icon src="/icons/qualification.svg" alt="KPI Icon" size="sm" className="mr-2" />
              <h3 className="text-xl">Monitoramento de KPIs</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2">
              <li>KPIs de logÃ­stica, finanÃ§as e compliance em um sÃ³ lugar</li>
              <li>Alertas automÃ¡ticos para desvios crÃ­ticos</li>
              <li>Benchmarking entre unidades de negÃ³cio</li>
              <li>RelatÃ³rios de performance personalizados</li>
            </ul>
          </div>
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <Icon src="/icons/tools.svg" alt="Automation Icon" size="sm" className="mr-2" />
              <h3 className="text-xl">AutomaÃ§Ã£o de Fluxos</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2">
              <li>Workflows configurÃ¡veis para aprovaÃ§Ãµes e alertas</li>
              <li>IntegraÃ§Ã£o com ferramentas de mensageria (Slack, Teams)</li>
              <li>Gatilhos para atualizaÃ§Ã£o de dados em sistemas externos</li>
              <li>Logs de auditoria completos</li>
            </ul>
          </div>
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <Icon src="/icons/shield.svg" alt="Security Icon" size="sm" className="mr-2" />
              <h3 className="text-xl">SeguranÃ§a & Compliance</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2">
              <li>Criptografia de dados ponta a ponta</li>
              <li>Controles de acesso granular por funÃ§Ã£o</li>
              <li>Auditoria contÃ­nua de conformidade</li>
              <li>Backups automatizados e redundÃ¢ncia</li>
            </ul>
          </div>
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <Icon src="/icons/rocket.svg" alt="Scalability Icon" size="sm" className="mr-2" />
              <h3 className="text-xl">Escalabilidade</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2">
              <li>Infraestrutura cloud-native</li>
              <li>Arquitetura modular e extensÃ­vel</li>
              <li>Suporte a mÃºltiplas unidades de negÃ³cio</li>
              <li>Performance otimizada para grandes volumes de dados</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4 text-accent">Centralize a gestÃ£o e potencialize resultados!</h2>
          <p className="mb-6 max-w-3xl mx-auto">Entre em contato com nosso time e descubra como o OLV CORE pode transformar dados em decisÃµes estratÃ©gicas para sua empresa.</p>
          <Link href="/contato" className="btn btn-primary font-semibold py-3 px-6 flex items-center justify-center">
            <Icon src="/icons/specialist.svg" alt="Specialist Icon" size="sm" className="mr-2" />
            Fale com um Especialista
          </Link>
        </div>
      </section>
    </PlatformLayout>
  );
} 
