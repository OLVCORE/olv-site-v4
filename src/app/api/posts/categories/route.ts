import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Check if Supabase environment variables are available
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Supabase environment variables not configured');
}

const supabase = supabaseUrl && supabaseKey 
  ? createClient(supabaseUrl, supabaseKey)
  : null;

export async function GET() {
  if (!supabase) {
    return NextResponse.json({ error: 'Supabase not configured' }, { status: 500 });
  }

  const { data, error } = await supabase
    .from('posts')
    .select('category, count:category', { count: 'exact', groupBy: 'category' });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  // Agrupa e conta manualmente se groupBy não funcionar
  const counts: Record<string, number> = {};
  (data || []).forEach((row: any) => {
    if (row.category) {
      counts[row.category] = (counts[row.category] || 0) + 1;
    }
  });
  return NextResponse.json(counts);
} 