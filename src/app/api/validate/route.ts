import { NextRequest } from 'next/server';
import { supabase } from '../../../lib/supabaseAdmin';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const token = searchParams.get('token');
  if (!token) {
    return new Response(JSON.stringify({ valid: false, error: 'token missing' }), {
      status: 400,
      headers: { 'content-type': 'application/json' },
    });
  }

  const { data, error } = await supabase
    .from('paid_sessions')
    .select('id')
    .eq('access_token', token)
    .gt('expires_at', new Date().toISOString())
    .maybeSingle();

  if (error) {
    console.error(error);
  }

  return new Response(JSON.stringify({ valid: !!data }), {
    status: 200,
    headers: { 'content-type': 'application/json' },
  });
} 