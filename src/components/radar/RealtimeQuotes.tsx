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
  const { data } = useSWR('/api/radar/quotes?symbols=USD,EUR,BTC', fetcher, {
    refreshInterval: 180_000,
  });

  const rates = data?.rates ?? {};
  const usd = formatBRL(rates['USD']);
  const eur = formatBRL(rates['EUR']);
  const btc = formatBRL(rates['BTC']);

  const cards = [
    { label: 'Dólar Comercial', value: usd, icon: '/icons/currency-exchange.svg' },
    { label: 'Euro', value: eur, icon: '/icons/currency-exchange.svg' },
    { label: 'Bitcoin (BTC)', value: btc, icon: '/icons/bitcoin.svg' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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