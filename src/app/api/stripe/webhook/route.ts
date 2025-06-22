import { NextRequest } from 'next/server';
import { stripe } from '../../../../lib/stripe';
import { supabase } from '../../../../lib/supabaseAdmin';

export async function POST(req: NextRequest) {
  const sig = req.headers.get('stripe-signature') ?? '';

  // Read raw body as buffer
  const body = await req.arrayBuffer();
  let event: any;

  try {
    const textBody = Buffer.from(body).toString();
    event = stripe.webhooks.constructEvent(
      textBody,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET as string
    );
  } catch (err: any) {
    console.error('⚠️  Webhook signature verification failed.', err.message);
    return new Response(`Webhook Error: ${err.message}`, { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as any;
    // Generate token valid for 24h (can be adjusted)
    const access_token = crypto.randomUUID();
    const expires_at = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();

    await supabase.from('paid_sessions').insert({
      session_id: session.id,
      customer_email: session.customer_details?.email ?? null,
      simulator: session.metadata?.simulator ?? null,
      access_token,
      expires_at,
    });
  }

  return new Response('Received', { status: 200 });
}

// Disable Next.js body parsing to retrieve raw body
export const config = {
  api: {
    bodyParser: false,
  },
}; 