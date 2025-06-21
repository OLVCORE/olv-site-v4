"use client";

import React, { useState, useRef } from 'react';
import InfoTooltip from '../ui/InfoTooltip';
import Image from 'next/image';
import Icon from '../icons/Icon';

function toNumber(s: string): number {
  if (!s) return 0;
  return parseFloat(s.replace(/\./g, '').replace(',', '.')) || 0;
}

export default function ExportCostCalculator() {
  const inputRefs = useRef<Record<string, HTMLInputElement | null>>({});
  const [result, setResult] = useState<null | {
    totalCosts: number;
    revenueUSD: number;
    revenueBRL: number;
    reintegraValue: number;
  }>(null);
  const [rate, setRate] = useState(1);

  const defaultInputs = {
    fob: '10000',
    freight: '800',
    insurance: '80',
    inland: '500',
    port: '250',
    misc: '100',
    reintegra: '1,5',
    exchange: '5,10',
  };

  const brl = (v: number) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  const usd = (v: number) => v.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

  interface FieldProps { name: string; label: string; suffix?: string; tip?: string; }
  const Field = ({ name, label, suffix, tip }: FieldProps) => (
    <label className="block text-sm font-medium text-gray-200 dark:text-accent-light">
      <span className="inline-flex items-center gap-1">{label} {tip && <InfoTooltip content={tip} />}</span>
      <div className="relative mt-1">
        <input
          type="text"
          inputMode="decimal"
          name={name}
          defaultValue={(defaultInputs as any)[name]}
          ref={(el) => { inputRefs.current[name] = el; }}
          className="w-full rounded-md bg-gray-100 dark:bg-gray-700 border-none focus:ring-accent p-2 pr-12 text-sm placeholder-gray-400 dark:placeholder-gray-500 text-gray-900 dark:text-white"
          placeholder="0,00"
        />
        {suffix && (
          <span className="absolute inset-y-0 right-3 flex items-center text-xs text-gray-500 pointer-events-none">
            {suffix}
          </span>
        )}
      </div>
    </label>
  );

  const getVal = (key: string) => inputRefs.current[key]?.value || '';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fob = toNumber(getVal('fob'));
    const freight = toNumber(getVal('freight'));
    const insurance = toNumber(getVal('insurance'));
    const inland = toNumber(getVal('inland'));
    const port = toNumber(getVal('port'));
    const misc = toNumber(getVal('misc'));
    const reintegraPct = toNumber(getVal('reintegra'));
    const exchange = toNumber(getVal('exchange')) || 1;
    setRate(exchange);

    const totalCosts = freight + insurance + inland + port + misc;
    const reintegraValue = fob * (reintegraPct / 100);
    const revenueUSD = fob - totalCosts + reintegraValue;
    const revenueBRL = revenueUSD * exchange;

    setResult({ totalCosts, revenueUSD, revenueBRL, reintegraValue });
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Field name="fob" label="Valor FOB" suffix="USD" tip="Valor da mercadoria para exportação." />
        <Field name="freight" label="Frete Internacional" suffix="USD" tip="Custo de frete até o destino." />
        <Field name="insurance" label="Seguro" suffix="USD" tip="Seguro internacional da carga." />
        <Field name="inland" label="Frete Interno" suffix="USD" tip="Transporte até porto/aeroporto." />
        <Field name="port" label="Taxas Portuárias" suffix="USD" tip="THC, documentação, etc." />
        <Field name="misc" label="Outras Despesas" suffix="USD" tip="Despesas adicionais." />
        <Field name="reintegra" label="Reintegra" suffix="%" tip="Alíquota de crédito (0-3%)." />
        <Field name="exchange" label="Taxa USD → BRL" suffix="R$" tip="Cotação do dólar para conversão." />
        <button type="submit" className="btn btn-primary mt-2">Calcular</button>
      </form>

      {result && (
        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg text-sm md:text-base">
          <h3 className="font-semibold text-lg mb-2 text-gray-800 dark:text-white">Resultado</h3>
          <table className="w-full text-left text-gray-700 dark:text-gray-300 text-sm">
            <tbody>
              <tr><td className="pr-4">Crédito Reintegra</td><td>{usd(result.reintegraValue)}</td><td>{brl(result.reintegraValue * rate)}</td></tr>
              <tr><td className="pr-4">Custos Totais</td><td>{usd(result.totalCosts)}</td><td>{brl(result.totalCosts * rate)}</td></tr>
              <tr className="font-bold"><td className="pr-4">Receita Líquida</td><td>{usd(result.revenueUSD)}</td><td>{brl(result.revenueBRL)}</td></tr>
            </tbody>
          </table>
          <p className="text-xs text-yellow-600 dark:text-yellow-400 mt-2">Valores aproximados. Consulte seu despachante para detalhes fiscais.</p>
          <Image src="/images/BANNER-HOME.jpeg" alt="Banner OLV" width={1200} height={300} className="mt-8 rounded-lg w-full" />
        </div>
      )}
    </div>
  );
} 