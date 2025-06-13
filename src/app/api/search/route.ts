import { NextResponse } from 'next/server';
// @ts-ignore - no types for fuse.js commonjs import
import Fuse from 'fuse.js';
import index from '../../../../public/search-index.json';

const fuse = new Fuse(index as any[], {
  keys: ['title', 'category', 'slug', 'excerpt'],
  threshold: 0.3,
});

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get('q') || '';
  if (!q) return NextResponse.json([]);
  const results = fuse.search(q).slice(0, 10).map(r => r.item);
  return NextResponse.json(results);
} 