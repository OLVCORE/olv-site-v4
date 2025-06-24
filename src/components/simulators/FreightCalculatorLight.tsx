'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import VolumesTable from './VolumesTable';

interface Estimate {
  air: number;
  sea_lcl: number;
  sea_fcl: number;
  cabotage: number | null;
  road: number | null;
  rail: number | null;
}

interface ContainerInfo { vol: number; payload: number }

// capacidade volumétrica em m³ (aprox.) e payload máximo operacional (kg) — usaremos 90 % para cálculos
const CONTAINER_INFO: Record<string, ContainerInfo> = {
  "20′ Dry": { vol: 33, payload: 24000 },
  "40′ Dry": { vol: 67, payload: 26500 },
  "40′ HC": { vol: 76, payload: 28000 },
  "45′ HC": { vol: 86, payload: 29500 },
  "20′ OT": { vol: 32, payload: 28000 },
  "40′ OT": { vol: 66, payload: 28500 },
  "20′ FR": { vol: 30, payload: 27000 },
  "40′ FR": { vol: 65, payload: 28500 },
  "ISO Tank": { vol: 25, payload: 26000 },
  "FlexiTank": { vol: 24, payload: 24000 },
  "Bulk-Bag": { vol: 30, payload: 20000 },
};

const CAPACITY_FACTOR = 0.9; // usamos 90 % do payload por segurança

const CONTAINER_CAPACITY = Object.fromEntries(
  Object.entries(CONTAINER_INFO).map(([k, v]) => [k, v.vol])
);

// Países das Américas onde o modal rodoviário/ferroviário é viável
const AMERICAS_ROAD: string[] = [
  'AR','BO','BR','CL','CO','EC','GY','PY','PE','SR','UY','VE', // América do Sul
  'BZ','CR','GT','HN','NI','PA','SV','MX','US','CA' // América Central/Norte
];

function isRoadPossible(o: string, d: string) {
  if(!o || !d) return false;
  if(o===d) return true;
  return AMERICAS_ROAD.includes(o) && AMERICAS_ROAD.includes(d);
}

const isRailPossible = isRoadPossible;

// Lista de países ISO-2 (amostra ampla para testes – pode ser extendida até 250)
const COUNTRIES: { code: string; name: string }[] = [
  { code: 'AR', name: 'Argentina' },
  { code: 'AU', name: 'Australia' },
  { code: 'BR', name: 'Brazil' },
  { code: 'CA', name: 'Canada' },
  { code: 'CH', name: 'Switzerland' },
  { code: 'CN', name: 'China' },
  { code: 'DE', name: 'Germany' },
  { code: 'ES', name: 'Spain' },
  { code: 'FR', name: 'France' },
  { code: 'GB', name: 'United Kingdom' },
  { code: 'IN', name: 'India' },
  { code: 'IT', name: 'Italy' },
  { code: 'JP', name: 'Japan' },
  { code: 'KR', name: 'South Korea' },
  { code: 'MX', name: 'Mexico' },
  { code: 'NL', name: 'Netherlands' },
  { code: 'RU', name: 'Russia' },
  { code: 'TR', name: 'Turkey' },
  { code: 'US', name: 'United States' },
  { code: 'ZA', name: 'South Africa' },
  // América do Sul
  { code: 'BO', name: 'Bolivia' },
  { code: 'CL', name: 'Chile' },
  { code: 'CO', name: 'Colombia' },
  { code: 'EC', name: 'Ecuador' },
  { code: 'GY', name: 'Guyana' },
  { code: 'PY', name: 'Paraguay' },
  { code: 'PE', name: 'Peru' },
  { code: 'SR', name: 'Suriname' },
  { code: 'UY', name: 'Uruguay' },
  { code: 'VE', name: 'Venezuela' },
  // América Central
  { code: 'BZ', name: 'Belize' },
  { code: 'CR', name: 'Costa Rica' },
  { code: 'GT', name: 'Guatemala' },
  { code: 'HN', name: 'Honduras' },
  { code: 'NI', name: 'Nicaragua' },
  { code: 'PA', name: 'Panama' },
  { code: 'SV', name: 'El Salvador' },
  // Caribe
  { code: 'AG', name: 'Antigua and Barbuda' },
  { code: 'BS', name: 'Bahamas' },
  { code: 'BB', name: 'Barbados' },
  { code: 'CU', name: 'Cuba' },
  { code: 'DM', name: 'Dominica' },
  { code: 'DO', name: 'Dominican Republic' },
  { code: 'GD', name: 'Grenada' },
  { code: 'HT', name: 'Haiti' },
  { code: 'JM', name: 'Jamaica' },
  { code: 'KN', name: 'Saint Kitts and Nevis' },
  { code: 'LC', name: 'Saint Lucia' },
  { code: 'VC', name: 'Saint Vincent and the Grenadines' },
  { code: 'TT', name: 'Trinidad and Tobago' },
];

function suggestModal(weight: number, volume: number, sameCountry: boolean) {
  if (sameCountry) {
    return weight < 15000 ? 'road' : 'rail';
  }
  if (weight < 300 && volume < 1) return 'air';
  if (volume < 15) return 'sea_lcl';
  return 'sea_fcl';
}

function computeContainerSuggestion(weight: number, volume: number) {
  // returns Record<type, {qty:number, occ:number}> where occ is % volume utilization of last container type
  const order: string[] = ["20′ Dry","40′ Dry","40′ HC","45′ HC","20′ OT","40′ OT","20′ FR","40′ FR"];
  const result: Record<string,{qty:number,occ:number}> = {};
  let remainingW = weight;
  let remainingV = volume;
  for(const type of order){
    const info = CONTAINER_INFO[type];
    const maxW = info.payload*CAPACITY_FACTOR;
    const maxV = info.vol;
    let qty=0;
    while((remainingW>0.1||remainingV>0.0001) && qty<50){
      qty+=1;
      remainingW = Math.max(0,remainingW-maxW);
      remainingV = Math.max(0,remainingV-maxV);
    }
    if(qty){
      const usedV = volume===0?0:Math.min(volume,qty*maxV)-remainingV;
      const occ = Number(((usedV/(qty*maxV))*100).toFixed(1));
      result[type]={qty,occ};
    }
    if(remainingW<=0.1 && remainingV<=0.0001) break;
  }
  return result;
}

export default function FreightCalculatorLight() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [container, setContainer] = useState('');
  const [mode, setMode] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Estimate | null>(null);
  const [error, setError] = useState('');
  const [totWeight, setTotWeight] = useState(0);
  const [totVolume, setTotVolume] = useState(0);
  const [cargoType, setCargoType] = useState('');
  const [cargoDesc, setCargoDesc] = useState('');

  const searchParams = useSearchParams();

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
    if (totWeight <= 0) return 'Peso deve ser maior que zero';
    if (totVolume <= 0) return 'Volume deve ser maior que zero';
    if(isAirDisabled && mode==='air') return 'Carga perigosa não pode ser enviada por modal aéreo';
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
      const safeMode = mode || 'all';
      const res = await fetch(
        `/api/freight/light?origin=${origin}&destination=${destination}&weight=${totWeight}&volume=${totVolume}&container=${encodeURIComponent(container || suggestedContainer)}&mode=${safeMode}`
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

  const suggestedModal = suggestModal(totWeight, totVolume, origin === destination);
  let containerPlan = computeContainerSuggestion(totWeight, totVolume);
  if(cargoType==='Granel líquido') {
    containerPlan = { 'ISO Tank': { qty: Math.ceil(totWeight/(CONTAINER_INFO['ISO Tank'].payload*CAPACITY_FACTOR)), occ: 100 } };
  } else if(cargoType==='Granel sólido') {
    containerPlan = { 'Bulk-Bag': { qty: Math.ceil(totWeight/(CONTAINER_INFO['Bulk-Bag'].payload*CAPACITY_FACTOR)), occ: 100 } };
  }
  const suggestedContainer = Object.keys(containerPlan)[0] ?? '';
  const utilization = container
    ? ((totVolume / CONTAINER_CAPACITY[container]) * 100).toFixed(1)
    : undefined;

  const isAirDisabled = cargoType==='Perigosa' || cargoType==='Baterias';

  useEffect(()=>{
    if(!container && suggestedContainer){ setContainer(suggestedContainer); }
  },[suggestedContainer]);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold mb-4">Calculadora de Fretes (Versão Light)</h2>
      <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8">
        {/* Coluna 1 – Entradas */}
        <div className="space-y-4">
          <label className="flex flex-col text-sm">
            Origem (ISO)
            <input list="countryList" type="text" value={origin} onChange={(e)=>setOrigin(e.target.value.toUpperCase())} className="p-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded"/>
          </label>
          <label className="flex flex-col text-sm">
            Destino (ISO)
            <input list="countryList" type="text" value={destination} onChange={(e)=>setDestination(e.target.value.toUpperCase())} className="p-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded"/>
          </label>
          <datalist id="countryList">
            {COUNTRIES.map(c=> <option key={c.code} value={c.code}>{c.name}</option>)}
          </datalist>
          {/* Volumes */}
          <VolumesTable onChange={(w,v)=>{setTotWeight(w);setTotVolume(v);}} maxLines={15} premium={true} />
          <label className="flex flex-col text-sm">
            Tipo de Carga
            <select value={cargoType} onChange={(e)=>setCargoType(e.target.value)} className="p-2 bg-gray-100 dark:bg-gray-700 rounded">
              <option value="">Escolha…</option>
              <option>Caixas / Paletizada</option>
              <option>Carga solta</option>
              <option>Granel sólido</option>
              <option>Granel líquido</option>
              <option>Perigosa</option>
              <option>Baterias</option>
            </select>
          </label>
          <label className="flex flex-col text-sm">
            Descrição / NCM
            <input type="text" value={cargoDesc} onChange={(e)=>setCargoDesc(e.target.value)} placeholder="Ex.: 8507.60.00" className="p-2 bg-gray-100 dark:bg-gray-700 rounded" />
          </label>
          <label className="flex flex-col text-sm">
            Tipo de Container
            <select value={container} onChange={(e)=>setContainer(e.target.value)} className="p-2 bg-gray-100 dark:bg-gray-700 rounded">
              <option value="">Escolha sua opção…</option>
              {Object.keys(CONTAINER_INFO).map(key=> (
                <option key={key} value={key}>{key}</option>
              ))}
            </select>
            {container && (
              <span className="text-xs text-gray-500 mt-1">
                Capacidade: {CONTAINER_INFO[container].vol} m³ • {CONTAINER_INFO[container].payload.toLocaleString()} kg (90 % →{' '}
                {(CONTAINER_INFO[container].payload * CAPACITY_FACTOR).toLocaleString()} kg)
              </span>
            )}
          </label>
          <label className="flex flex-col text-sm">
            Modal de Cálculo
            <select value={mode} onChange={(e)=>setMode(e.target.value)} className="p-2 bg-gray-100 dark:bg-gray-700 rounded">
              <option value="">Escolha sua opção…</option>
              {[
                {val:'air', label:'Aéreo', disabled:isAirDisabled},
                {val:'sea_lcl', label:'Marítimo LCL', disabled:false},
                {val:'sea_fcl', label:'Marítimo FCL', disabled:false},
                {val:'road', label:'Rodoviário', disabled: !isRoadPossible(origin,destination)},
                {val:'rail', label:'Ferroviário', disabled: !isRailPossible(origin,destination)},
                {val:'cabotage', label:'Cabotagem', disabled: origin!==destination},
              ].map(opt=> (
                <option key={opt.val} value={opt.val} disabled={opt.disabled} className={opt.disabled? 'text-gray-400':''} title={opt.disabled? 'Modal indisponível para esta configuração':''}>
                  {opt.label}
                </option>
              ))}
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
              {container && (
                <p className="text-xs text-gray-400 mt-2">
                  Volume total: {totVolume.toFixed(3)} m³ — container&nbsp;escolhido: {container}{' '}
                  • ocupação {utilization}%
                </p>
              )}

              <p className="text-xs text-gray-400 mt-2">Peso bruto total: {totWeight.toFixed(2)} kg • Volume total: {totVolume.toFixed(4)} m³</p>

              {/* Disclaimer destacado */}
              <div className="mt-3 p-3 rounded bg-yellow-100 dark:bg-yellow-900/30 text-xs text-yellow-900 dark:text-yellow-200">
                Estas estimativas são apenas referência. Para valores finais e requisitos operacionais,
                consulte seu agente de carga ou especialista logístico.
              </div>

              {/* Sugestões Premium (visíveis aqui para testes) */}
              <div className="mt-4 text-sm bg-gray-100 dark:bg-gray-700 p-3 rounded">
                <p className="font-medium mb-1">Sugestões automáticas</p>
                <p>Modal ideal: <strong className="capitalize">{suggestedModal.replace('_',' ')}</strong></p>
                <p>
                  Configuração de container:&nbsp;
                  <strong>
                    {Object.entries(containerPlan)
                      .map(([k, v]) => `${v.qty} × ${k} (${v.occ}% ocupação)`)
                      .join(' + ')}
                  </strong>
                </p>
              </div>

              <div className="mt-6 space-y-2 text-sm" id="domestic-br">
                { (origin === 'BR' || destination === 'BR') && totWeight > 0 && (
                  <DomesticBR weightKg={totWeight} />
                )}
              </div>
            </>
          )}
        </div>
      </form>
    </div>
  );
}

function DomesticBR({ weightKg }: { weightKg: number }) {
  // Simple domestic estimator using ANTT minima (geral carga granel) – 2,50 R$/t·km + pedágio médio 0,20 R$/km
  // Distância aproximada Santos→capitais (km). Fonte: DNIT 2023.
  const DIST: Record<string, number> = {
    SP: 100, MG: 640, RJ: 450, ES: 850, PR: 500, SC: 750, RS: 1000,
    BA: 1500, DF: 1030, GO: 940, MT: 1400, MS: 900, PE: 2240, CE: 2800,
    PA: 2900, AM: 3800, MA: 2700, PI: 2500, RN: 2850,
  };
  const [ufDest, setUfDest] = useState('SP');
  const distKm = DIST[ufDest] ?? 1000;
  const tonnes = weightKg / 1000;
  const roadRate = 2.5; // R$/t·km
  const tollRatePerKm = 0.2; // R$/km
  const roadCostBRL = (tonnes * roadRate + tollRatePerKm) * distKm;
  const airRatePerKg = 6; // R$/kg média mercado Brasil
  const airCostBRL = weightKg * airRatePerKg + 200; // taxa embarque média

  return (
    <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded">
      <p className="font-medium mb-2">Frete Doméstico Brasil (Santos ➔ UF destino)</p>
      <label className="text-xs flex flex-col gap-1 w-40">
        UF Destino
        <select value={ufDest} onChange={e=>setUfDest(e.target.value)} className="p-1 rounded bg-gray-100 dark:bg-gray-700">
          {Object.keys(DIST).map(uf=>(<option key={uf} value={uf}>{uf}</option>))}
        </select>
      </label>
      <table className="table-auto mt-2 w-full text-xs border">
        <thead>
          <tr>
            <th className="border px-2 py-1">Modal</th>
            <th className="border px-2 py-1">Distância (km)</th>
            <th className="border px-2 py-1">Custo (R$)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-2 py-1">Rodoviário</td>
            <td className="border px-2 py-1 text-center">{distKm}</td>
            <td className="border px-2 py-1">{roadCostBRL.toFixed(2)}</td>
          </tr>
          <tr>
            <td className="border px-2 py-1">Aéreo</td>
            <td className="border px-2 py-1 text-center">{distKm}</td>
            <td className="border px-2 py-1">{airCostBRL.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
      <p className="text-[10px] text-gray-500 mt-1">Cálculo baseado em piso mínimo ANTT (Res. 5.867/2020) e tarifa média aérea nacional. Valores de referência — consulte transportadora.</p>
    </div>
  );
} 