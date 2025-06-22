import React from 'react';
import MainLayout from '../../../components/layout/MainLayout';
import ExportCostCalculator from '../../../components/simulators/ExportCostCalculator';
import ImportSimWrapper from '../../../components/simulators/ImportSimWrapper';
import Icon from '../../../components/icons/Icon';

export const metadata = {
  title: 'Simulador de Custos de Exportação | OLV Internacional',
  description: 'Calcule custos logísticos e receita líquida de exportação com base no crédito Reintegra e despesas de frete.',
};

export default function ExportSimPage() {
  return (
    <MainLayout>
      <div className="container import-sim-container pb-12 mx-auto max-w-5xl">
        <h1 className="import-sim-heading text-3xl font-bold flex items-center gap-2 mb-6 text-gray-900 dark:text-white">
          <Icon src="/icons/export.svg" alt="Simulador" size="sm" className="text-accent" />
          Simulador de Custos de Exportação
        </h1>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Guia Explicativo */}
          <div className="glass p-6 rounded-2xl shadow-gold card-hover order-2 md:order-1">
            <h2 className="text-xl font-semibold text-gray-100 mb-4 flex items-center gap-2">
              <Icon src="/icons/info.svg" alt="Guia" size="xs" className="text-accent" />
              Como Precificar uma Exportação
            </h2>
            <ol className="list-decimal pl-4 space-y-2 text-gray-300 text-sm leading-relaxed">
              <li><strong>FOB</strong>: valor da mercadoria pronta para embarque no porto/aeroporto de saída.</li>
              <li><strong>Custos Logísticos</strong>: frete internacional, seguro, transporte interno, taxas portuárias e despesas diversas.</li>
              <li><strong>Reintegra</strong>: crédito fiscal concedido (0-3 %) sobre o valor exportado — aumenta a margem.</li>
              <li><strong>Receita Líquida</strong>: FOB – custos + crédito Reintegra. Use-a para definir sua margem e preço de venda.</li>
              <li>Mercados diferentes ⇒ requisitos diferentes. Avalie <em>incoterms</em>, barreiras técnicas e preferências de consumo.</li>
            </ol>
            <p className="mt-4 text-xs"><span className="text-accent">Precificar corretamente é o primeiro passo; dominar requisitos de mercado garante que sua oferta seja competitiva e compliant. Conte com a OLV Internacional para abrir novos destinos e maximizar resultados.</span></p>
            <div className="mt-4">
              <a href="/contato" className="btn btn-gold animate-gold-pulse">Falar com Especialista</a>
            </div>
          </div>

          {/* Simulador */}
          <ImportSimWrapper>
            <ExportCostCalculator />
          </ImportSimWrapper>
        </div>
      </div>
    </MainLayout>
  );
} 