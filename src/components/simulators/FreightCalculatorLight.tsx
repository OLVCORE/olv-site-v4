import { useState } from 'react';

interface Estimate {
  air: number;
  sea_lcl: number;
  sea_fcl: number;
  cabotage: number | null;
  road: number | null;
  rail: number | null;
}

export default function FreightCalculatorLight() {
  const [origin, setOrigin] = useState('CN');
  const [destination, setDestination] = useState('BR');
  const [weight, setWeight] = useState(1000);
  const [volume, setVolume] = useState(2);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Estimate | null>(null);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    setData(null);
    try {
      const res = await fetch(
        `/api/freight/light?origin=${origin}&destination=${destination}&weight=${weight}&volume=${volume}`
      );
      if (!res.ok) throw new Error('erro');
      const json = await res.json();
      setData(json.estimates);
    } catch (err) {
      setError('Falha ao obter estimativas.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Calculadora de Fretes (Versão Light)</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
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
          Peso (kg)
          <input
            type="number"
            className="input"
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
          />
        </label>
        <label className="flex flex-col text-sm">
          Volume (m³)
          <input
            type="number"
            step="0.01"
            className="input"
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
          />
        </label>
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
        <table className="table-auto mt-6 text-sm">
          <thead>
            <tr>
              <th className="px-2 py-1">Modal</th>
              <th className="px-2 py-1">Custo (USD)</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(data).map(([modal, cost]) => (
              cost !== null && (
                <tr key={modal}>
                  <td className="border px-2 py-1 capitalize">{modal.replace('_', ' ')}</td>
                  <td className="border px-2 py-1">{cost.toFixed(2)}</td>
                </tr>
              )
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
} 