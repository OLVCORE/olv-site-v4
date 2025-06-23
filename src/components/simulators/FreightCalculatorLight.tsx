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
  const [mode, setMode] = useState('all');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Estimate | null>(null);
  const [error, setError] = useState('');

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
        if (json.valid) {
          // unlocked logic would be here
        }
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
        `/api/freight/light?origin=${origin}&destination=${destination}&weight=${grossWeight}&volume=${totalVolume}&container=${encodeURIComponent(container)}&mode=${mode}`
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
      <h2 className="text-2xl font-semibold mb-4">Calculadora de Fretes (Versão Light)</h2>
      <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8">
        {/* Coluna 1 – Entradas */}
        <div className="space-y-4">
          <label className="flex flex-col text-sm">
            Origem (ISO)
            <input type="text" value={origin} onChange={(e)=>setOrigin(e.target.value.toUpperCase())} className="p-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded"/>
          </label>
          <label className="flex flex-col text-sm">
            Destino (ISO)
            <input type="text" value={destination} onChange={(e)=>setDestination(e.target.value.toUpperCase())} className="p-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded"/>
          </label>
          {/* dimensões */}
          <div className="grid grid-cols-3 gap-2">
            <label className="flex flex-col text-sm">
              C (cm)
              <input type="number" value={length} onChange={(e)=>setLength(e.target.value)} className="p-2 bg-gray-100 dark:bg-gray-700 rounded"/>
            </label>
            <label className="flex flex-col text-sm">
              L (cm)
              <input type="number" value={width} onChange={(e)=>setWidth(e.target.value)} className="p-2 bg-gray-100 dark:bg-gray-700 rounded"/>
            </label>
            <label className="flex flex-col text-sm">
              A (cm)
              <input type="number" value={height} onChange={(e)=>setHeight(e.target.value)} className="p-2 bg-gray-100 dark:bg-gray-700 rounded"/>
            </label>
          </div>
          <label className="flex flex-col text-sm">
            Peso Bruto/Unidade (kg)
            <input type="number" value={weightUnit} onChange={(e)=>setWeightUnit(e.target.value)} className="p-2 bg-gray-100 dark:bg-gray-700 rounded"/>
          </label>
          <label className="flex flex-col text-sm">
            Quantidade
            <input type="number" value={qty} onChange={(e)=>setQty(e.target.value)} className="p-2 bg-gray-100 dark:bg-gray-700 rounded"/>
          </label>
          <label className="flex flex-col text-sm">
            Tipo de Container
            <select value={container} onChange={(e)=>setContainer(e.target.value)} className="p-2 bg-gray-100 dark:bg-gray-700 rounded">
              {Object.keys(CONTAINER_CAPACITY).map(key=> (
                <option key={key} value={key}>{key}</option>
              ))}
            </select>
          </label>
          <label className="flex flex-col text-sm">
            Modal de Cálculo
            <select value={mode} onChange={(e)=>setMode(e.target.value)} className="p-2 bg-gray-100 dark:bg-gray-700 rounded">
              <option value="all">Automático (todos)</option>
              <option value="air">Aéreo</option>
              <option value="sea_lcl">Marítimo LCL</option>
              <option value="sea_fcl">Marítimo FCL</option>
              <option value="road">Rodoviário</option>
              <option value="rail">Ferroviário</option>
              <option value="cabotage">Cabotagem</option>
            </select>
          </label>
          <button type="submit" className="px-4 py-2 bg-accent rounded text-white">Calcular</button>
        </div>

        {/* Coluna 2 – Resultados */}
        <div>
          {error && <p className="text-red-500 mb-2">{error}</p>}
          {data && (
            <>
              <table className="table-auto w-full text-sm border">
                <thead>
                  <tr className="bg-gray-200 dark:bg-gray-600">
                    <th className="px-3 py-1 border">Modal</th>
                    <th className="px-3 py-1 border">Custo (USD)</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(data).map(([modal,value])=> value ? (
                    <tr key={modal}>
                      <td className="border px-3 py-1 capitalize">{modal.replace('_',' ')}</td>
                      <td className="border px-3 py-1">{value.toFixed(2)}</td>
                    </tr>
                  ):null)}
                </tbody>
              </table>
              <p className="text-xs text-gray-400 mt-2">Volume total: {totalVolume.toFixed(4)} m³ — capacidade container: {capacity} m³ — ocupação {utilization}%.<br/>Valores baseados em tarifas médias de mercado; consulte seu agente de carga para cotações exatas.</p>
            </>
          )}
        </div>
      </form>
    </div>
  );
} 