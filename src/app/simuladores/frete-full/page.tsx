'use client';
import { useState, Suspense } from 'react';
import DisclaimerAlert from '@/components/DisclaimerAlert';
import FreightCalculatorLight from '@/components/simulators/FreightCalculatorLight';
import LoadStuffingPage from '@/app/simuladores/load-stuffing/page';
import VolumesTable from '@/components/simulators/VolumesTable';
import { PackageInput } from '@/lib/binPacking';

export default function FreightFullPage() {
  const [tab, setTab] = useState<0 | 1 | 2 | 3>(0);
  const [packages, setPackages] = useState<PackageInput[]>([]);
  return (
    <div className="import-sim-container mx-auto max-w-6xl py-6">
      <h1 className="import-sim-heading text-2xl font-bold mb-2">Simulador de Fretes – Versão FULL</h1>

      <DisclaimerAlert />

      <div className="flex gap-4 border-b mb-4 text-sm">
        {['Calculadora Internacional','Estufagem','Resultado Estufagem','Frete Doméstico'].map((t,i)=>(
          <button key={i} className={tab===i? 'border-b-2 border-accent':'opacity-60'} onClick={()=>setTab(i as any)}>{t}</button>
        ))}
      </div>

      {tab===0 && (
        <Suspense fallback={<p>Carregando…</p>}>
          <FreightCalculatorLight />
        </Suspense>
      )}
      {tab===1 && (
        <VolumesTable onChange={(w,v)=>{setPackages([{id:'auto',length:100,width:100,height:100,weight:w,quantity:1}])}} maxLines={30} premium={true} />
      )}
      {tab===2 && (
        <LoadStuffingPage />
      )}
      {tab===3 && (
        <p>Integração com frete doméstico QualP em desenvolvimento nesta rodada.</p>
      )}
    </div>
  );
} 