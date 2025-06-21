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
    customs: '0',
    misc: '0',
  } as const;
  const [result, setResult] = useState<null | ReturnType<typeof calculateImportCost>>(null);
  const [rate, setRate] = useState(5);
  const [extras, setExtras] = useState({customs:0,misc:0});
  const [fileType,setFileType]=useState<'pdf'|'xls'>('pdf');
  const resultRef = useRef<HTMLDivElement|null>(null);

  const inputRefs = useRef<Record<string, HTMLInputElement | null>>({});

  // remove thousand separators while user types to keep caret position predictable
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.currentTarget.value = e.currentTarget.value.replace(/\./g, '').replace(/,/g, '.');
  };

  // format value to pt-BR style (10.000,00) when input loses focus
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const raw = e.currentTarget.value.replace(/\./g, '').replace(/,/g, '.');
    const num = parseFloat(raw);
    if (!isNaN(num)) {
      e.currentTarget.value = new Intl.NumberFormat('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(num);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const toNumber = (s:string)=> parseFloat(s.replace(/\./g,'').replace(',','.'))||0;
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
      customs: toNumber(getVal('customs')),
      misc: toNumber(getVal('misc')),
    };
    const usdRes=calculateImportCost(parsed);
    const r= toNumber(getVal('exchange'))||1;
    setRate(r);
    setExtras({customs:parsed.customs,misc:parsed.misc});
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
          onBlur={handleBlur}
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

  const exportReport=async()=>{
    if(!result) return;
    if(fileType==='pdf'){
      const html2canvas = (await import('html2canvas')).default;
      const { jsPDF } = await import('jspdf');
      if(!resultRef.current) return;
      const canvas = await html2canvas(resultRef.current,{scale:2});
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({orientation:'p',unit:'px',format:'a4'});
      const pageWidth = pdf.internal.pageSize.getWidth();
      const imgProps = {w: canvas.width, h: canvas.height};
      const ratio = pageWidth/imgProps.w;
      const imgHeight = imgProps.h*ratio;
      pdf.addImage(imgData,'PNG',0,0,pageWidth,imgHeight);
      // watermark text
      pdf.setTextColor(180);
      pdf.setFontSize(32);
      pdf.text('OLV Internacional', pageWidth/2, imgHeight/2, {align:'center', angle:45});
      pdf.save('simulador-importacao.pdf');
    }else{
      alert('Exportação XLS será disponibilizada em breve.');
    }
  };

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
        <Field name="customs" label="Despesas Aduaneiras" suffix="USD" />
        <Field name="misc" label="Outras Despesas" suffix="USD" />
        <button type="submit" className="btn btn-primary mt-2">Calcular</button>
      </form>

      {result && (
        <div ref={resultRef} className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg text-sm md:text-base">
          <h3 className="font-semibold text-lg mb-2 text-gray-800 dark:text-white">Resultado</h3>
          <table className="w-full text-left text-gray-700 dark:text-gray-300 text-sm">
            <thead>
              <tr><th></th><th>USD</th><th>BRL</th><th>% Import</th><th>% Merc.</th></tr>
            </thead>
            <tbody>
              {(()=>{
                const pctImport=(v:number)=>((v/result.finalCost)*100).toFixed(1)+'%';
                const pctMerc=(v:number)=>((v/result.cif)*100).toFixed(1)+'%';
                return (
                  <>
                  <tr><td>CIF</td><td>{usd(result.cif)}</td><td>{brl(result.cif*rate)}</td><td>{pctImport(result.cif)}</td><td>{pctMerc(result.cif)}</td></tr>
                  <tr><td>II</td><td>{usd(result.iiValue)}</td><td>{brl(result.iiValue*rate)}</td><td>{pctImport(result.iiValue)}</td><td>{pctMerc(result.iiValue)}</td></tr>
                  <tr><td>IPI</td><td>{usd(result.ipiValue)}</td><td>{brl(result.ipiValue*rate)}</td><td>{pctImport(result.ipiValue)}</td><td>{pctMerc(result.ipiValue)}</td></tr>
                  <tr><td>PIS</td><td>{usd(result.pisValue)}</td><td>{brl(result.pisValue*rate)}</td><td>{pctImport(result.pisValue)}</td><td>{pctMerc(result.pisValue)}</td></tr>
                  <tr><td>COFINS</td><td>{usd(result.cofinsValue)}</td><td>{brl(result.cofinsValue*rate)}</td><td>{pctImport(result.cofinsValue)}</td><td>{pctMerc(result.cofinsValue)}</td></tr>
                  <tr><td>ICMS</td><td>{usd(result.icmsValue)}</td><td>{brl(result.icmsValue*rate)}</td><td>{pctImport(result.icmsValue)}</td><td>{pctMerc(result.icmsValue)}</td></tr>
                  <tr><td>Despesas Aduaneiras</td><td>{usd(extras.customs)}</td><td>{brl(extras.customs*rate)}</td><td>{pctImport(extras.customs)}</td><td>{pctMerc(extras.customs)}</td></tr>
                  <tr><td>Outras Despesas</td><td>{usd(extras.misc)}</td><td>{brl(extras.misc*rate)}</td><td>{pctImport(extras.misc)}</td><td>{pctMerc(extras.misc)}</td></tr>
                  <tr className="font-semibold"><td>Total Tributos</td><td>{usd(result.totalTaxes)}</td><td>{brl(result.totalTaxes*rate)}</td><td>{pctImport(result.totalTaxes)}</td><td>{pctMerc(result.totalTaxes)}</td></tr>
                  <tr className="font-bold"><td>Custo Importação</td><td>{usd(result.landedCost)}</td><td>{brl(result.landedCost*rate)}</td><td>{pctImport(result.landedCost)}</td><td>{pctMerc(result.landedCost)}</td></tr>
                  <tr className="font-bold"><td>Custo Final</td><td>{usd(result.finalCost)}</td><td>{brl(result.finalCost*rate)}</td><td>100%</td><td>{pctMerc(result.finalCost)}</td></tr>
                  </>
                );
              })()}
            </tbody>
          </table>
          <p className="text-xs text-yellow-600 dark:text-yellow-400 mt-2">Este simulador oferece uma estimativa simplificada. O resultado é de uso exclusivo e responsabilidade do usuário. Para análise completa, consulte um especialista da OLV Internacional.</p>
          <div className="mt-4 flex gap-4">
            <select value={fileType} onChange={e=>setFileType(e.target.value as 'pdf'|'xls')} className="border rounded-md bg-gray-100 dark:bg-gray-700 p-2 text-sm">
              <option value="pdf">PDF</option>
              <option value="xls">XLS</option>
            </select>
            <button type="button" className="btn btn-secondary" onClick={exportReport}>Baixar</button>
            <a href="/contato" className="btn btn-gold animate-gold-pulse">Falar com Especialista</a>
          </div>
          <img src="/images/BANNER-HOME.jpeg" alt="Banner OLV" className="mt-8 rounded-lg w-full" />
        </div>
      )}
    </div>
    </>
  );
} 