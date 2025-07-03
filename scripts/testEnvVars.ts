import 'dotenv/config';

console.log('TESTE DE VARIÁVEIS DE AMBIENTE');
console.log('NEXT_PUBLIC_SUPABASE_URL:', process.env.NEXT_PUBLIC_SUPABASE_URL);
console.log('NEXT_PUBLIC_SUPABASE_ANON_KEY:', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
console.log('SUPABASE_SERVICE_ROLE_KEY:', process.env.SUPABASE_SERVICE_ROLE_KEY);
console.log('OPENAI_API_KEY:', process.env.OPENAI_API_KEY);
console.log('NODE_ENV:', process.env.NODE_ENV); 