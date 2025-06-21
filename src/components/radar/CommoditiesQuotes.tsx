"use client";

import useSWR from 'swr';
import Icon from '../icons/Icon';

const fetcher = (url: string) => fetch(url).then((r)=>r.json());

export default function CommoditiesQuotes(){
  const {data} = useSWR('/api/radar/commodities',fetcher,{refreshInterval:300000});
  const prices=data?.prices ?? {};
  const cards=[
    {label:'Petróleo Brent',value:prices['BZ=F'],icon:'/icons/oil.svg'},
    {label:'Ouro (Oz)',value:prices['GC=F'],icon:'/icons/dna.svg'},
    {label:'Aço Dalian',value:prices['DC=F'],icon:'/icons/tools.svg'},
  ].filter(c=>typeof c.value==='number');
  const formatBRL=(v:number)=>typeof v==='number'?v.toLocaleString('pt-BR',{style:'currency',currency:'BRL'}):'—';
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
      {cards.map(c=> (
        <div key={c.label} className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
          <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white flex items-center gap-1">
            <Icon src={c.icon} alt="icon" size="xs" className="text-accent" />
            {c.label}
          </h3>
          <p className="text-gray-700 dark:text-gray-300">{formatBRL(c.value as number)}</p>
        </div>
      ))}
    </div>
  );
} 