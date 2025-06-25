#!/usr/bin/env ts-node
/*
  Fetches market rates for predefined lanes and saves to data/market_rates.json
  Currently supports SeaRates Standard Rate widget (FCL 20/40) without API key (limited) or with SEARATES_KEY env var.
  The script is idempotent and can run in GitHub Actions daily.
*/

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

interface Lane { origin: string; destination: string; }
interface RecordOut {
  modal: string;
  origin: string;
  destination: string;
  unit: string;
  valueUSD: number;
  source: string;
  dt: string;
}

const LANES: Lane[] = [
  { origin: 'AR', destination: 'BR' },
  { origin: 'CN', destination: 'BR' },
  { origin: 'US', destination: 'BR' },
  { origin: 'DE', destination: 'BR' },
];

async function fetchSeaRatesFcl20(o: string, d: string): Promise<number | null> {
  try {
    const url = `https://www.searates.com/transit/price?o=${o}&d=${d}&t=20`;
    const res = await fetch(url, { headers: { 'User-Agent': 'olv-site-bot' } });
    if (!res.ok) return null;
    const json: any = await res.json();
    if (json && json.price) return Number(json.price);
    return null;
  } catch {
    return null;
  }
}

async function run() {
  const out: RecordOut[] = [];
  const today = new Date().toISOString().slice(0, 10);
  for (const lane of LANES) {
    const price20 = await fetchSeaRatesFcl20(lane.origin, lane.destination);
    if (price20) {
      out.push({
        modal: 'sea_fcl',
        origin: lane.origin,
        destination: lane.destination,
        unit: 'container_20',
        valueUSD: price20,
        source: 'SeaRates',
        dt: today,
      });
      // heuristic 40' ~ 1.35 × 20'
      out.push({
        modal: 'sea_fcl',
        origin: lane.origin,
        destination: lane.destination,
        unit: 'container_40',
        valueUSD: Number((price20 * 1.35).toFixed(2)),
        source: 'SeaRates heuristic',
        dt: today,
      });
    }
  }

  const outPath = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'data', 'market_rates.json');
  await fs.mkdir(path.dirname(outPath), { recursive: true });
  await fs.writeFile(outPath, JSON.stringify(out, null, 2));
  console.log(`Saved ${out.length} records to ${outPath}`);
}

run(); 