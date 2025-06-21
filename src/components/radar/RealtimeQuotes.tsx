"use client";

import useSWR from 'swr';
import Icon from '../icons/Icon';

const fetcher = (url: string) => fetch(url).then((r) => r.json());

function formatBRL(value: number | null | undefined) {
  return typeof value === 'number'
    ? value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    : '—';
}

export default function RealtimeQuotes() {
  const symbolList = ['USD','EUR','GBP','JPY','AUD','CAD','CHF','CNY','BTC'];
  const { data } = useSWR(`/api/radar/quotes?symbols=${symbolList.join(',')}`, fetcher, {
    refreshInterval: 180_000,
  });

  const rates = data?.rates ?? {};
  const labelMap: Record<string,string> = {
    USD: 'Dólar (USD)',
    EUR: 'Euro (EUR)',
    GBP: 'Libra Esterlina (GBP)',
    JPY: 'Iene (JPY)',
    AUD: 'Dólar Australiano (AUD)',
    CAD: 'Dólar Canadense (CAD)',
    CHF: 'Franco Suíço (CHF)',
    CNY: 'Yuan (CNY)',
    BTC: 'Bitcoin (BTC)'
  };

  const cards = symbolList.map((sym)=>({
    label: labelMap[sym],
    value: formatBRL(rates[sym]),
    icon: '/icons/currency-exchange.svg'
  }));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {cards.map(({ label, value, icon }) => (
        <div key={label} className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
          <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white flex items-center gap-1">
            <Icon src={icon} alt="icon" size="xs" className="text-accent" />
            {label}
          </h3>
          <p className="text-gray-700 dark:text-gray-300">{value}</p>
        </div>
      ))}
    </div>
  );
} 