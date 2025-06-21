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
        <p className="mb-8 text-gray-700 dark:text-gray-300 max-w-2xl">
          Insira seus custos operacionais em dólar (USD) e obtenha uma estimativa da receita líquida considerando o crédito
          fiscal Reintegra. Ajuste a taxa de câmbio para visualizar o resultado em reais (BRL).
        </p>
        <ImportSimWrapper>
          <ExportCostCalculator />
        </ImportSimWrapper>
      </div>
    </MainLayout>
  );
} 