// Simple placeholder freight cost estimator for light version
// GET params: origin=ISO country, destination=ISO country, weight (kg), volume (m3)
// Returns rough cost estimates for various modes until external API key configured.

import { NextRequest } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

interface ContainerSpec {
  vol: number; // m3
  weight: number; // kg
  base: number; // USD base cost por container
}

const CONTAINER_SPECS: Record<string, ContainerSpec> = {
  '20′ Dry': { vol: 33, weight: 28200, base: 1800 },
  '40′ Dry': { vol: 67, weight: 28600, base: 2500 },
  '40′ HC': { vol: 76, weight: 28600, base: 2600 },
  '20′ OT': { vol: 32, weight: 28000, base: 1900 },
  '40′ OT': { vol: 66, weight: 28500, base: 2550 },
};

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const origin = searchParams.get('origin')?.toUpperCase();
  const destination = searchParams.get('destination')?.toUpperCase();
  const weight = parseFloat(searchParams.get('weight') || '0'); // kg
  const volume = parseFloat(searchParams.get('volume') || '0'); // m3
  const containerType = decodeURIComponent(searchParams.get('container') || '40′ Dry');
  const modeParam = (searchParams.get('mode') || 'all').toLowerCase();

  if (!origin || !destination || !weight || !volume) {
    return Response.json(
      { error: 'Missing parameters' },
      { status: 400, headers: { 'content-type': 'application/json' } }
    );
  }

  // Basic heuristics (USD)
  const airCost = 50 + weight * 5;
  const seaLclCost = 150 + volume * 25 + weight * 0.1;

  // FCL
  const spec = CONTAINER_SPECS[containerType] || CONTAINER_SPECS['40′ Dry'];
  const containersByVol = Math.ceil(volume / spec.vol);
  const containersByWeight = Math.ceil(weight / spec.weight);
  const nContainers = Math.max(containersByVol, containersByWeight);
  const seaFclCost = nContainers * spec.base;

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
      air: modeParam === 'all' || modeParam === 'air' ? airCost : null,
      sea_lcl: modeParam === 'all' || modeParam === 'sea_lcl' ? seaLclCost : null,
      sea_fcl: modeParam === 'all' || modeParam === 'sea_fcl' ? seaFclCost : null,
      cabotage: modeParam === 'all' || modeParam === 'cabotage' ? cabotageCost : null,
      road: modeParam === 'all' || modeParam === 'road' ? roadCost : null,
      rail: modeParam === 'all' || modeParam === 'rail' ? railCost : null,
    },
    disclaimer: `Valores aproximados para fins de demonstração. Containers: ${nContainers}. Para cotações em tempo real utilize a versão Premium.`
  });
} 