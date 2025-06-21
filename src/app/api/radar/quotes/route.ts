export const runtime = 'edge';
export const revalidate = 300; // 5 minutes

import { NextRequest } from 'next/server';

async function fetchFiatRate(symbol: string): Promise<number | null> {
  try {
    const res = await fetch(`https://api.exchangerate.host/convert?from=${symbol}&to=BRL`);
    const json = await res.json();
    return typeof json?.result === 'number' ? json.result : null;
  } catch (_) {
    return null;
  }
}

async function fetchBtcRate(): Promise<number | null> {
  try {
    const res = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=brl');
    const json = await res.json();
    return typeof json?.bitcoin?.brl === 'number' ? json.bitcoin.brl : null;
  } catch (_) {
    return null;
  }
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const symbols = (searchParams.get('symbols') || 'USD,EUR,BTC')
    .split(',')
    .map((s) => s.trim().toUpperCase());

  const result: Record<string, number | null> = {};

  const fiatSymbols = symbols.filter((s) => s !== 'BTC');
  if (fiatSymbols.length) {
    try {
      const res = await fetch(
        `https://api.exchangerate.host/latest?base=BRL&symbols=${fiatSymbols.join(',')}`
      );
      const json = await res.json();
      Object.entries(json?.rates ?? {}).forEach(([sym, rate]) => {
        result[sym] = typeof rate === 'number' ? 1 / (rate as number) : null; // convert BRL->sym to sym->BRL
      });
    } catch (_) {
      // fallback to individual requests
      await Promise.all(
        fiatSymbols.map(async (sym) => {
          result[sym] = await fetchFiatRate(sym);
        })
      );
    }
  }

  if (symbols.includes('BTC')) {
    result['BTC'] = await fetchBtcRate();
  }

  return Response.json({ rates: result, base: 'BRL', updatedAt: Date.now() });
} 