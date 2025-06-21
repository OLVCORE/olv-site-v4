import React from 'react';
import MainLayout from '../../../components/layout/MainLayout';
import ImportCostCalculator from '../../../components/simulators/ImportCostCalculator';
import Icon from '../../../components/icons/Icon';

export const metadata = {
  title: 'Simulador de Custos de Importação | OLV Internacional',
  description: 'Calcule de forma rápida impostos e custos de importação (II, IPI, PIS/COFINS, ICMS) com o simulador gratuito da OLV Internacional.',
};

export default function ImportSimPage() {
  return (
    <MainLayout>
      <div className="container pt-48 pb-12 relative z-50">
        <h1 className="text-3xl font-bold flex items-center gap-2 mb-6 text-gray-900 dark:text-white">
          <Icon src="/icons/calculator.svg" alt="Simulador" size="sm" className="text-accent" />
          Simulador de Custos de Importação
        </h1>
        <p className="mb-8 text-gray-700 dark:text-gray-300 max-w-2xl">
          Informe os valores da sua operação em dólar (USD) para obter uma estimativa rápida de impostos e custo total de
          importação em tempo real. Os percentuais de tributos são editáveis para você adequar ao NCM e ao estado de destino.
        </p>
        <ImportCostCalculator />
      </div>
    </MainLayout>
  );
} 