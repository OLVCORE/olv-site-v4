'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

interface Estimate {
  air: number;
  sea_lcl: number;
  sea_fcl: number;
  cabotage: number | null;
  road: number | null;
  rail: number | null;
}

const CONTAINER_CAPACITY: Record<string, number> = {
  '20′ Dry': 33.0, // m3 aproximado
  '40′ Dry': 67.0,
  '40′ HC': 76.0,
  '20′ OT': 32.0,
  '40′ OT': 66.0,
};

export default function FreightCalculatorLight() {
  const [origin, setOrigin] = useState('CN');
  const [destination, setDestination] = useState('BR');
  const [length, setLength] = useState('40'); // cm
  const [width, setWidth] = useState('40');
  const [height, setHeight] = useState('40');
  const [qty, setQty] = useState('1');
  const [weightUnit, setWeightUnit] = useState('20'); // kg per unit
  const [container, setContainer] = useState('20′ Dry');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Estimate | null>(null);
  const [error, setError] = useState('');
  const [unlocked, setUnlocked] = useState(true);

  const searchParams = useSearchParams();

  const L = parseFloat(length) / 100;
  const W = parseFloat(width) / 100;
  const H = parseFloat(height) / 100;
  const Q = Math.max(1, parseFloat(qty));
  const grossWeight = parseFloat(weightUnit) * Q;
  const volumePerUnit = L * W * H;
  const totalVolume = volumePerUnit * Q;

  useEffect(() => {
    const paramToken = searchParams.get('token');
    const stored = typeof window !== 'undefined' ? localStorage.getItem('freight_token') : null;
    const token = paramToken || stored;
    if (!token) return;
    // store for next visits
    if (paramToken) localStorage.setItem('freight_token', paramToken);
    (async () => {
      try {
        const res = await fetch(`/api/validate?token=${token}`);
        const json = await res.json();
        if (json.valid) setUnlocked(true);
      } catch {
        // ignore
      }
    })();
  }, [searchParams]);

  function validateInputs() {
    if (!/^[A-Z]{2}$/.test(origin)) return 'Origem deve ter código ISO-2';
    if (!/^[A-Z]{2}$/.test(destination)) return 'Destino deve ter código ISO-2';
    if (grossWeight <= 0) return 'Peso deve ser maior que zero';
    if (totalVolume <= 0) return 'Volume deve ser maior que zero';
    return '';
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const msg = validateInputs();
    if (msg) {
      setError(msg);
      return;
    }
    setLoading(true);
    setError('');
    setData(null);
    try {
      const res = await fetch(
        `/api/freight/light?origin=${origin}&destination=${destination}&weight=${grossWeight}&volume=${totalVolume}&container=${encodeURIComponent(container)}`
      );
      if (!res.ok) {
        const txt = await res.text();
        throw new Error(txt);
      }
      const json = await res.json();
      setData(json.estimates);
    } catch (err: any) {
      setError('Falha ao obter estimativas: ' + err.message);
    } finally {
      setLoading(false);
    }
  }

  const capacity = CONTAINER_CAPACITY[container];
  const utilization = ((totalVolume / capacity) * 100).toFixed(1);

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Calculadora de Fretes (Versão Light)</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <label className="flex flex-col text-sm">
            Origem (ISO)
            <input
              className="input"
              value={origin}
              onChange={(e) => setOrigin(e.target.value.toUpperCase())}
            />
          </label>
          <label className="flex flex-col text-sm">
            Destino (ISO)
            <input
              className="input"
              value={destination}
              onChange={(e) => setDestination(e.target.value.toUpperCase())}
            />
          </label>
          <label className="flex flex-col text-sm">
            Comprimento (cm)
            <input type="number" value={length} onChange={(e)=>setLength(e.target.value)} className="p-2 bg-gray-100 dark:bg-gray-700" />
          </label>
          <label className="flex flex-col text-sm">
            Largura (cm)
            <input type="number" value={width} onChange={(e)=>setWidth(e.target.value)} className="p-2 bg-gray-100 dark:bg-gray-700" />
          </label>
          <label className="flex flex-col text-sm">
            Altura (cm)
            <input type="number" value={height} onChange={(e)=>setHeight(e.target.value)} className="p-2 bg-gray-100 dark:bg-gray-700" />
          </label>
          <label className="flex flex-col text-sm">
            Peso Bruto/Unidade (kg)
            <input type="number" value={weightUnit} onChange={(e)=>setWeightUnit(e.target.value)} className="p-2 bg-gray-100 dark:bg-gray-700" />
          </label>
          <label className="flex flex-col text-sm">
            Quantidade
            <input type="number" value={qty} onChange={(e)=>setQty(e.target.value)} className="p-2 bg-gray-100 dark:bg-gray-700" />
          </label>
          <label className="block text-sm font-medium text-gray-200 dark:text-accent-light col-span-2 md:col-span-1">
            <span className="inline-flex items-center gap-1">Tipo de Container (Premium) <span className="text-yellow-400">🔒</span></span>
            <select
              value={container}
              onChange={(e) => setContainer(e.target.value)}
              className="w-full mt-1 rounded-md bg-gray-100 dark:bg-gray-700 border-none p-2 text-sm"
            >
              {Object.keys(CONTAINER_CAPACITY).map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </label>
        </div>
        <button
          type="submit"
          className="col-span-2 btn btn-primary"
          disabled={loading}
        >
          {loading ? 'Calculando…' : 'Calcular'}
        </button>
      </form>
      {error && <p className="text-red-500">{error}</p>}
      {data && (
        <table className="table-auto border mt-6">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Modal</th>
              <th className="px-4 py-2 border">Custo (USD)</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(data).map(([modal, value]) =>
              value ? (
                <tr key={modal}>
                  <td className="border px-4 py-2 capitalize">{modal.replace('_', ' ')}</td>
                  <td className="border px-4 py-2">{value.toFixed(2)}</td>
                </tr>
              ) : null
            )}
          </tbody>
        </table>
      )}
      <p className="text-xs text-gray-400 mt-4">
        Volume total: {totalVolume.toFixed(4)} m³ — capacidade do container selecionado: {capacity} m³ — ocupação {utilization}%
        {unlocked ? ' (Premium liberado 🎉)' : ' (recurso Premium 🔒)'}.
      </p>
    </div>
  );
} 