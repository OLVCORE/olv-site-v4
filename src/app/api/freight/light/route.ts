// Simple placeholder freight cost estimator for light version
// GET params: origin=ISO country, destination=ISO country, weight (kg), volume (m3)
// Returns rough cost estimates for various modes until external API key configured.

import { NextRequest } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const origin = searchParams.get('origin')?.toUpperCase();
  const destination = searchParams.get('destination')?.toUpperCase();
  const weight = parseFloat(searchParams.get('weight') || '0'); // kg
  const volume = parseFloat(searchParams.get('volume') || '0'); // m3

  if (!origin || !destination || !weight || !volume) {
    return Response.json(
      { error: 'Missing parameters' },
      { status: 400, headers: { 'content-type': 'application/json' } }
    );
  }

  // Basic heuristics (USD)
  const airCost = 50 + weight * 5;
  const seaLclCost = 150 + volume * 25 + weight * 0.1;
  const seaFclCost = 2500; // one 40ft container flat

  const sameCountry = origin === destination;
  const cabotageCost = sameCountry ? 100 + volume * 12 : null;
  const roadCost = sameCountry ? 80 + weight * 0.8 : null;
  const railCost = sameCountry ? 90 + weight * 0.6 : null;

  return Response.json({
    origin,
    destination,
    weightKg: weight,
    volumeM3: volume,
    currency: 'USD',
    estimates: {
      air: airCost,
      sea_lcl: seaLclCost,
      sea_fcl: seaFclCost,
      cabotage: cabotageCost,
      road: roadCost,
      rail: railCost,
    },
    disclaimer:
      'Valores aproximados para fins de demonstração. Para cotações em tempo real utilize a versão Premium.'
  });
} 