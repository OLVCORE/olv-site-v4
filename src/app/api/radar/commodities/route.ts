export const runtime = 'nodejs';
export const revalidate = 600; // 10 min

import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const symbols = 'BZ=F,GC=F,DC=F'; // Brent Crude, Gold, Steel Rebar (Dalian) if available
    const res = await fetch(`https://financialmodelingprep.com/api/v3/quote/${symbols}?apikey=demo`);
    const json = await res.json(); // array of quotes
    const prices: Record<string, number> = {};
    json.forEach((q: any) => {
      prices[q.symbol] = q.price;
    });
    return Response.json({ prices, base: 'USD', updatedAt: Date.now(), source:'financialmodelingprep.com' });
  } catch (e) {
    return Response.json({ error: 'failed', message: (e as Error).message }, { status: 500 });
  }
} 