"use client";

import React, { useState } from 'react';
import { calculateImportCost } from '../../lib/importCost';

export default function ImportCostCalculator() {
  const [inputs, setInputs] = useState({
    fob: '',
    freight: '',
    insurance: '',
    ii: '12',
    ipi: '0',
    pis: '2.1',
    cofins: '9.65',
    icms: '18',
  });
  const [result, setResult] = useState<null | ReturnType<typeof calculateImportCost>>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = {
      fob: parseFloat(inputs.fob) || 0,
      freight: parseFloat(inputs.freight) || 0,
      insurance: parseFloat(inputs.insurance) || 0,
      ii: parseFloat(inputs.ii) || 0,
      ipi: parseFloat(inputs.ipi) || 0,
      pis: parseFloat(inputs.pis) || 0,
      cofins: parseFloat(inputs.cofins) || 0,
      icms: parseFloat(inputs.icms) || 0,
    };
    setResult(calculateImportCost(parsed));
  };

  const currency = (v: number) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  const Field = ({ name, label }: { name: string; label: string }) => (
    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
      {label}
      <input
        type="number"
        name={name}
        value={(inputs as any)[name]}
        onChange={handleChange}
        step="0.01"
        className="mt-1 w-full rounded-md bg-gray-100 dark:bg-gray-700 border-none focus:ring-accent p-2 text-sm"
      />
    </label>
  );

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Field name="fob" label="Valor FOB (R$)" />
        <Field name="freight" label="Frete (R$)" />
        <Field name="insurance" label="Seguro (R$)" />
        <Field name="ii" label="II (%)" />
        <Field name="ipi" label="IPI (%)" />
        <Field name="pis" label="PIS (%)" />
        <Field name="cofins" label="COFINS (%)" />
        <Field name="icms" label="ICMS (%)" />
        <button type="submit" className="btn btn-primary mt-2">Calcular</button>
      </form>

      {result && (
        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg text-sm md:text-base">
          <h3 className="font-semibold text-lg mb-2 text-gray-800 dark:text-white">Resultado</h3>
          <ul className="space-y-1 text-gray-700 dark:text-gray-300">
            <li>CIF: {currency(result.cif)}</li>
            <li>II: {currency(result.iiValue)}</li>
            <li>IPI: {currency(result.ipiValue)}</li>
            <li>PIS: {currency(result.pisValue)}</li>
            <li>COFINS: {currency(result.cofinsValue)}</li>
            <li>ICMS: {currency(result.icmsValue)}</li>
            <li className="font-semibold mt-2">Total Tributos: {currency(result.totalTaxes)}</li>
            <li className="font-bold">Custo Importação: {currency(result.landedCost)}</li>
          </ul>
        </div>
      )}
    </div>
  );
} 