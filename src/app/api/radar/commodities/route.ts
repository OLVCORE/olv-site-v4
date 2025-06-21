export const runtime = 'nodejs';
export const revalidate = 600; // 10 min

import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const res = await fetch(
      'https://api.coingecko.com/api/v3/simple/price?ids=brent-oil,crude-oil,bitcoin,gold&vs_currencies=usd'
    );
    const json = await res.json();
    return Response.json({ prices: json, base: 'USD', updatedAt: Date.now() });
  } catch (e) {
    return Response.json({ error: 'failed', message: (e as Error).message }, { status: 500 });
  }
} 