"use client";

import React, { useState, useEffect } from 'react';
import { calculateImportCost } from '../../lib/importCost';

export default function ImportCostCalculator() {
  const [inputs, setInputs] = useState({
    fob: '',
    freight: '',
    insurance: '',
    exchange: '5.00', // USD->BRL
    ii: '12',
    ipi: '0',
    pis: '2.1',
    cofins: '9.65',
    icms: '18',
    other: '0',
  });
  const [result, setResult] = useState<null | ReturnType<typeof calculateImportCost>>(null);
  const [rate, setRate] = useState(5);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // permite vírgula ou ponto como separador decimal
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value.replace(/,/g, '.') });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const toNumber = (s:string)=> parseFloat(s.replace(',','.'))||0;
    const parsed = {
      fob: toNumber(inputs.fob),
      freight: toNumber(inputs.freight),
      insurance: toNumber(inputs.insurance),
      ii: parseFloat(inputs.ii) || 0,
      ipi: parseFloat(inputs.ipi) || 0,
      pis: parseFloat(inputs.pis) || 0,
      cofins: parseFloat(inputs.cofins) || 0,
      icms: parseFloat(inputs.icms) || 0,
      other: toNumber(inputs.other),
    };
    const usdRes=calculateImportCost(parsed);
    const r= toNumber(inputs.exchange)||1;
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
          type="number"
          step="any"
          name={name}
          value={(inputs as any)[name]}
          onChange={handleChange}
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
          setInputs((prev) => ({ ...prev, exchange: usdBrl.toFixed(2) }));
          setRate(usdBrl);
        }
      })
      .catch(() => {});

    // desabilita foco dos links do ticker/header para evitar perda de foco nos inputs
    document.querySelectorAll('header a, nav a').forEach((el) => {
      (el as HTMLElement).setAttribute('tabindex', '-1');
    });
  }, []);

  return (
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
              <tr><th></th><th>USD</th><th>BRL</th></tr>
            </thead>
            <tbody>
              <tr><td>CIF</td><td>{usd(result.cif)}</td><td>{brl(result.cif*rate)}</td></tr>
              <tr><td>II</td><td>{usd(result.iiValue)}</td><td>{brl(result.iiValue*rate)}</td></tr>
              <tr><td>IPI</td><td>{usd(result.ipiValue)}</td><td>{brl(result.ipiValue*rate)}</td></tr>
              <tr><td>PIS</td><td>{usd(result.pisValue)}</td><td>{brl(result.pisValue*rate)}</td></tr>
              <tr><td>COFINS</td><td>{usd(result.cofinsValue)}</td><td>{brl(result.cofinsValue*rate)}</td></tr>
              <tr><td>ICMS</td><td>{usd(result.icmsValue)}</td><td>{brl(result.icmsValue*rate)}</td></tr>
              <tr className="font-semibold"><td>Total Tributos</td><td>{usd(result.totalTaxes)}</td><td>{brl(result.totalTaxes*rate)}</td></tr>
              <tr className="font-bold"><td>Custo Importação</td><td>{usd(result.landedCost)}</td><td>{brl(result.landedCost*rate)}</td></tr>
              <tr className="font-bold"><td>Custo Final</td><td>{usd(result.finalCost)}</td><td>{brl(result.finalCost*rate)}</td></tr>
            </tbody>
          </table>
          <p className="text-xs text-yellow-600 dark:text-yellow-400 mt-2">Este simulador oferece uma estimativa simplificada. O resultado é de uso exclusivo e responsabilidade do usuário. Para análise completa, consulte um especialista da OLV Internacional.</p>
          <div className="mt-4 flex gap-4">
            <button className="btn btn-secondary" onClick={() => alert('PDF em desenvolvimento')}>Baixar PDF</button>
            <a href="/contato" className="btn btn-primary">Falar com Especialista</a>
          </div>
        </div>
      )}
    </div>
  );
} 