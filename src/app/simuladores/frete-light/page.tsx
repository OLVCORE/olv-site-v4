import FreightCalculatorLight from '../../../components/simulators/FreightCalculatorLight';

export const metadata = {
  title: 'Calculadora de Fretes – Versão Light',
  description: 'Estimativa simplificada de custos de frete internacional multimodal.',
};

export default function Page() {
  return (
    <main className="container mx-auto py-8 max-w-3xl">
      <FreightCalculatorLight />
    </main>
  );
} 