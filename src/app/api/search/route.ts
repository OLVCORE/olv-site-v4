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

  const limit = parseInt(searchParams.get('limit') || '20', 10);
  const offset = parseInt(searchParams.get('offset') || '0', 10);

  const all = fuse.search(q).map(r => r.item);
  const paginated = all.slice(offset, offset + limit);
  const hasMore = offset + limit < all.length;

  return NextResponse.json({ results: paginated, hasMore });
} 