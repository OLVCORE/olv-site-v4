"use client";

import useSWR from 'swr';
import Icon from '../icons/Icon';

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function CommoditiesQuotes() {
  const { data, error } = useSWR('/api/radar/commodities', fetcher, {
    refreshInterval: 300_000,
  });

  if (error)
    return <p className="text-red-500">Erro ao carregar preços de commodities.</p>;

  const prices = data?.prices ?? {};

  const rows = [
    { key: 'BZ=F', label: 'Petróleo Brent', icon: '/icons/oil.svg' },
    { key: 'GC=F', label: 'Ouro (Oz)', icon: '/icons/gold.svg' },
    { key: 'DC=F', label: 'Aço Dalian', icon: '/icons/steel.svg' },
    { key: 'ALI=F', label: 'Alumínio', icon: '/icons/aluminum.svg' },
    { key: 'ZW=F', label: 'Trigo', icon: '/icons/wheat.svg' },
    { key: 'ZC=F', label: 'Milho', icon: '/icons/corn.svg' },
    { key: 'KC=F', label: 'Café', icon: '/icons/coffee.svg' },
    { key: 'CT=F', label: 'Algodão', icon: '/icons/cotton.svg' },
  ];

  const cards = rows.map((r) => ({
    ...r,
    value: prices[r.key] ?? prices[r.key.replace('=F', 'USD')] ?? null,
  }));

  const formatBRL = (v: number) =>
    typeof v === 'number'
      ? v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
      : '—';

  const updatedAt = data?.updatedAt
    ? new Date(data.updatedAt).toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
      })
    : null;

  return (
    <div className="mt-6">
      {updatedAt && (
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
          Atualizado às {updatedAt}
        </p>
      )}

      <div className="grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(180px,1fr))]">
        {cards.map((c) => (
          <div
            key={c.label}
            className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg flex flex-col justify-between"
          >
            <h3 className="text-base font-semibold mb-2 text-gray-800 dark:text-white flex items-center gap-1">
              <Icon src={c.icon} alt="icon" size="xs" className="text-accent" />
              {c.label}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-lg font-medium">
              {c.value !== null ? formatBRL(c.value as number) : '—'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
} 