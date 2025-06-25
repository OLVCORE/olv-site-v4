"use client";

import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

interface Props { isOpen: boolean; onClose: () => void; }

declare const process: { env: Record<string, string | undefined> };

export default function AuthModal({ isOpen, onClose }: Props) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const redirectTo = (typeof window !== 'undefined' && !window.location.origin.includes('localhost'))
    ? window.location.origin
    : process.env.NEXT_PUBLIC_SITE_URL ?? 'https://api.olvinternacional.com.br';

  const handleMagicLink = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithOtp({ email, options: { emailRedirectTo: redirectTo } });
    setLoading(false);
    if (!error) setSent(true);
    else alert(error.message);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[4000]">
      <div className="bg-[var(--color-surface)] p-6 rounded-md w-full max-w-sm border border-gray-600">
        <h2 className="text-lg font-semibold mb-4">Entrar / Criar Conta</h2>
        {sent ? (
          <p>Enviamos um link de acesso para seu e-mail.</p>
        ) : (
          <>
            <input
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 mb-3 rounded border bg-transparent"
            />
            <button
              disabled={loading || !email}
              className="w-full py-2 rounded bg-[var(--color-accent)] text-on-primary hover:opacity-90 disabled:opacity-50"
              onClick={handleMagicLink}
            >
              {loading ? 'Enviando...' : 'Enviar Magic Link'}
            </button>
          </>
        )}
        <button className="mt-4 text-sm underline" onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
} 