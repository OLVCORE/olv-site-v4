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

const PRIORITY: string[] = ['CN','US','AR','DE','NL','MX','IN','IT','FR','JP','KR','CL','ES','RU','SG','CA','GB','BE','ID','PY'];
const SECONDARY: string[] = ['PT','MY','TH','TR','PL','ZA','SE','CH','DK','NO','AU','AT','IL','VN','RO','CZ','HU','PE','AE','CO','UA','EG','MA','UY','FI','GR','QA','SA','OM','NZ'];

function buildLanes(countries: string[]): Lane[] {
  const lanes: Lane[] = [];
  for(const code of countries){
    lanes.push({origin: code, destination: 'BR'}); // import
    lanes.push({origin: 'BR', destination: code}); // export
  }
  return lanes;
}

const useSecondary = process.argv.includes('--secondary');
const LANES: Lane[] = buildLanes(useSecondary ? SECONDARY : PRIORITY);

async function fetchSeaRatesFcl20(o: string, d: string): Promise<number | null> {
  try {
    const key = process.env.SEARATES_KEY;
    const url = key
      ? `https://api.searates.com/v2/fcl?o=${o}&d=${d}&cont=20&key=${key}`
      : `https://www.searates.com/transit/price?o=${o}&d=${d}&t=20`;
    const res = await fetch(url, { headers: { 'User-Agent': 'olv-site-bot' } });
    if (!res.ok) return null;
    const json: any = await res.json();
    if(key){
      if(json && json.rate && typeof json.rate.price === 'number') return json.rate.price;
    } else {
      if (json && json.price) return Number(json.price);
    }
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
  console.log(`Saved ${out.length} records (${useSecondary? 'secondary':'priority'}) to ${outPath}`);
}

run(); 