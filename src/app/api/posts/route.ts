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

export async function GET(req: Request) {
  if (!supabase) {
    return NextResponse.json({ error: 'Supabase not configured' }, { status: 500 });
  }

  try {
    const { searchParams } = new URL(req.url);
    const limit = parseInt(searchParams.get('limit') || '10', 10);

    // Busca posts na tabela 'posts'
    const { data, error } = await supabase
      .from('posts')
      .select('slug, title, category, published_at, source_name, source_url')
      .order('published_at', { ascending: false })
      .limit(limit);

    if (error) {
      // Retorna erro do Supabase
      return NextResponse.json({ error: error.message, details: error }, { status: 500 });
    }

    // Retorna os dados encontrados (ou array vazio)
    return NextResponse.json(data || []);
  } catch (err: any) {
    // Retorna erro genérico
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}