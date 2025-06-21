"use client";

import React, { useState, useEffect, useRef } from 'react';
import { calculateImportCost } from '../../lib/importCost';
import CurrencyPanel from './CurrencyPanel';

export default function ImportCostCalculator() {
  const defaultInputs = {
    fob: '',
    freight: '',
    insurance: '',
    exchange: '5.00',
    ii: '12',
    ipi: '0',
    pis: '2.1',
    cofins: '9.65',
    icms: '18',
    other: '0',
  } as const;
  const [result, setResult] = useState<null | ReturnType<typeof calculateImportCost>>(null);
  const [rate, setRate] = useState(5);

  const inputRefs = useRef<Record<string, HTMLInputElement | null>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.currentTarget.value = e.currentTarget.value.replace(/,/g, '.');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const toNumber = (s:string)=> parseFloat(s.replace(',','.'))||0;
    const getVal=(key:string)=> inputRefs.current[key]?.value||'';
    const parsed = {
      fob: toNumber(getVal('fob')),
      freight: toNumber(getVal('freight')),
      insurance: toNumber(getVal('insurance')),
      ii: parseFloat(getVal('ii'))||0,
      ipi: parseFloat(getVal('ipi'))||0,
      pis: parseFloat(getVal('pis'))||0,
      cofins: parseFloat(getVal('cofins'))||0,
      icms: parseFloat(getVal('icms'))||0,
      other: toNumber(getVal('other')),
    };
    const usdRes=calculateImportCost(parsed);
    const r= toNumber(getVal('exchange'))||1;
    setRate(r);
    setResult(usdRes);
  };

  const brl = (v:number)=> v.toLocaleString('pt-BR', {style:'currency',currency:'BRL'});
  const usd = (v:number)=> v.toLocaleString('en-US',{style:'currency',currency:'USD'});

  interface FieldProps { name: string; label: string; suffix?: string; }
  const Field = ({ name, label, suffix }: FieldProps) => (
    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
      {label}
      <div className="relative mt-1">
        <input
          type="text"
          name={name}
          defaultValue={(defaultInputs as any)[name]}
          onChange={handleChange}
          ref={(el) => { inputRefs.current[name] = el; }}
          className="w-full rounded-md bg-gray-100 dark:bg-gray-700 border-none focus:ring-accent p-2 pr-12 text-sm placeholder-gray-400 dark:placeholder-gray-500"
          placeholder="0.00"
        />
        {suffix && (
          <span className="absolute inset-y-0 right-3 flex items-center text-xs text-gray-500 pointer-events-none">
            {suffix}
          </span>
        )}
      </div>
    </label>
  );

  // auto-preencher taxa USD→BRL (sempre na primeira montagem)
  useEffect(() => {
    fetch('/api/radar/quotes?symbols=USD')
      .then((r) => r.json())
      .then((j) => {
        const brl = j?.rates?.USD;
        if (brl && typeof brl === 'number') {
          const usdBrl = brl; // endpoint já converte
          const exch = inputRefs.current['exchange'];
          if(exch) exch.value = usdBrl.toFixed(2);
          setRate(usdBrl);
        }
      })
      .catch(() => {});

    // desabilita foco dos links do ticker/header para evitar perda de foco nos inputs
    document.querySelectorAll('header a, nav a').forEach((el) => {
      (el as HTMLElement).setAttribute('tabindex', '-1');
    });

    // set initial focus on FOB after DOM ready
    inputRefs.current['fob']?.focus();
  }, []);

  return (
    <>
    <CurrencyPanel />
    <div className="grid md:grid-cols-2 gap-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Field name="fob" label="Valor FOB" suffix="USD" />
        <Field name="freight" label="Frete" suffix="USD" />
        <Field name="insurance" label="Seguro" suffix="USD" />
        <Field name="exchange" label="Taxa USD → BRL" suffix="R$" />
        <Field name="ii" label="II" suffix="%" />
        <Field name="ipi" label="IPI" suffix="%" />
        <Field name="pis" label="PIS" suffix="%" />
        <Field name="cofins" label="COFINS" suffix="%" />
        <Field name="icms" label="ICMS" suffix="%" />
        <Field name="other" label="Despesas Aduaneiras / Outras" suffix="USD" />
        <button type="submit" className="btn btn-primary mt-2">Calcular</button>
      </form>

      {result && (
        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg text-sm md:text-base">
          <h3 className="font-semibold text-lg mb-2 text-gray-800 dark:text-white">Resultado</h3>
          <table className="w-full text-left text-gray-700 dark:text-gray-300 text-sm">
            <thead>
              <tr><th></th><th>USD</th><th>BRL</th><th>%</th></tr>
            </thead>
            <tbody>
              {(()=>{
                const pct=(v:number)=>((v/result.landedCost)*100).toFixed(1)+'%';
                return (
                  <>
                  <tr><td>CIF</td><td>{usd(result.cif)}</td><td>{brl(result.cif*rate)}</td><td>{pct(result.cif)}</td></tr>
                  <tr><td>II</td><td>{usd(result.iiValue)}</td><td>{brl(result.iiValue*rate)}</td><td>{pct(result.iiValue)}</td></tr>
                  <tr><td>IPI</td><td>{usd(result.ipiValue)}</td><td>{brl(result.ipiValue*rate)}</td><td>{pct(result.ipiValue)}</td></tr>
                  <tr><td>PIS</td><td>{usd(result.pisValue)}</td><td>{brl(result.pisValue*rate)}</td><td>{pct(result.pisValue)}</td></tr>
                  <tr><td>COFINS</td><td>{usd(result.cofinsValue)}</td><td>{brl(result.cofinsValue*rate)}</td><td>{pct(result.cofinsValue)}</td></tr>
                  <tr><td>ICMS</td><td>{usd(result.icmsValue)}</td><td>{brl(result.icmsValue*rate)}</td><td>{pct(result.icmsValue)}</td></tr>
                  <tr className="font-semibold"><td>Total Tributos</td><td>{usd(result.totalTaxes)}</td><td>{brl(result.totalTaxes*rate)}</td><td>{pct(result.totalTaxes)}</td></tr>
                  <tr className="font-bold"><td>Custo Importação</td><td>{usd(result.landedCost)}</td><td>{brl(result.landedCost*rate)}</td><td>100%</td></tr>
                  <tr className="font-bold"><td>Custo Final</td><td>{usd(result.finalCost)}</td><td>{brl(result.finalCost*rate)}</td><td>{pct(result.finalCost)}</td></tr>
                  </>
                );
              })()}
            </tbody>
          </table>
          <p className="text-xs text-yellow-600 dark:text-yellow-400 mt-2">Este simulador oferece uma estimativa simplificada. O resultado é de uso exclusivo e responsabilidade do usuário. Para análise completa, consulte um especialista da OLV Internacional.</p>
          <div className="mt-4 flex gap-4">
            <button className="btn btn-secondary" onClick={() => alert('PDF em desenvolvimento')}>Baixar PDF</button>
            <a href="/contato" className="btn btn-primary">Falar com Especialista</a>
          </div>
          <img src="/images/BANNER-HOME.jpeg" alt="Banner OLV" className="mt-8 rounded-lg w-full" />
        </div>
      )}
    </div>
    </>
  );
} 