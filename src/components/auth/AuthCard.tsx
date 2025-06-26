"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { supabase } from '@/lib/supabaseClient';
import SocialButton from './SocialButton';
import './auth-card.css';

interface Props {
  mode: 'login' | 'signup';
  onModeChange: (m: 'login' | 'signup') => void;
  onClose: () => void;
}

export default function AuthCard({ mode, onModeChange, onClose }: Props) {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    company: '',
    city: '',
    phone: '',
    email: '',
    password: '',
    confirm: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [k]: e.target.value });
  };

  async function handleSubmit() {
    setError(null);
    if (mode === 'signup') {
      if (!form.firstName || !form.lastName || !form.email || !form.password) {
        setError('Preencha todos os campos obrigatórios');
        return;
      }
      if (form.password !== form.confirm) {
        setError('As senhas devem coincidir');
        return;
      }
      setLoading(true);
      const { error } = await supabase.auth.signUp({
        email: form.email,
        password: form.password,
        options: {
          data: {
            first_name: form.firstName,
            last_name: form.lastName,
            company: form.company,
            city: form.city,
            phone: form.phone,
          },
        },
      });
      setLoading(false);
      if (error) setError(error.message);
      else onClose();
    } else {
      // login
      if (!form.email || !form.password) {
        setError('Informe email e senha');
        return;
      }
      setLoading(true);
      const { error } = await supabase.auth.signInWithPassword({ email: form.email, password: form.password });
      setLoading(false);
      if (error) setError(error.message);
      else onClose();
    }
  }

  return (
    <div className="auth-card border border-[var(--color-gold)] shadow-lg rounded-lg md:rounded-l-lg overflow-hidden w-full max-w-5xl grid grid-cols-1 md:grid-cols-2">
      {/* Form */}
      <div className="p-8 md:p-10 flex flex-col justify-center space-y-6 text-[var(--color-on-surface)]">
        <div>
          <h1 className="text-2xl font-semibold mb-1">{mode === 'login' ? 'Welcome!' : 'Create your account'}</h1>
          <p className="text-sm opacity-80">We are glad to see you</p>
        </div>

        {error && <p className="text-sm text-red-500">{error}</p>}

        <div className="space-y-4 max-h-[55vh] overflow-y-auto pr-2">
          {mode === 'signup' && (
            <>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="form-label" htmlFor="fname">First name</label>
                  <input id="fname" type="text" className="form-input" value={form.firstName} onChange={handleChange('firstName')} />
                </div>
                <div>
                  <label className="form-label" htmlFor="lname">Last name</label>
                  <input id="lname" type="text" className="form-input" value={form.lastName} onChange={handleChange('lastName')} />
                </div>
              </div>
              <label className="form-label" htmlFor="company">Company name</label>
              <input id="company" type="text" className="form-input" value={form.company} onChange={handleChange('company')} />
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="form-label" htmlFor="city">City</label>
                  <input id="city" type="text" className="form-input" value={form.city} onChange={handleChange('city')} />
                </div>
                <div>
                  <label className="form-label" htmlFor="phone">Phone</label>
                  <input id="phone" type="tel" className="form-input" value={form.phone} onChange={handleChange('phone')} />
                </div>
              </div>
            </>
          )}

          <label className="form-label" htmlFor="email">Email</label>
          <input id="email" type="email" className="form-input" value={form.email} onChange={handleChange('email')} />

          <label className="form-label" htmlFor="pass">Password</label>
          <input id="pass" type="password" className="form-input" value={form.password} onChange={handleChange('password')} />

          {mode === 'signup' && (
            <>
              <label className="form-label" htmlFor="confirm">Confirm password</label>
              <input id="confirm" type="password" className="form-input" value={form.confirm} onChange={handleChange('confirm')} />
            </>
          )}

          {mode === 'login' && (
            <div className="text-right text-xs"><button className="hover:underline" onClick={() => supabase.auth.resetPasswordForEmail(form.email)}>Forgot password?</button></div>
          )}

          <button onClick={handleSubmit} disabled={loading} className="w-full py-2 rounded bg-[var(--color-primary)] text-white hover:opacity-90 disabled:opacity-60">
            {loading ? 'Please wait...' : mode === 'login' ? 'Sign in' : 'Join us'}
          </button>
        </div>

        {/* social */}
        <div className="text-center text-sm opacity-70">Or continue with</div>
        <div className="flex gap-3 justify-center">
          <SocialButton provider="google" onClick={()=>supabase.auth.signInWithOAuth({provider:'google'})} />
          <SocialButton provider="facebook" onClick={()=>supabase.auth.signInWithOAuth({provider:'facebook'})} />
          <SocialButton provider="linkedin" onClick={()=>supabase.auth.signInWithOAuth({provider:'linkedin'})} />
        </div>

        <div className="text-center text-sm">
          {mode === 'login' ? (
            <>Don't have an account yet? <button onClick={() => onModeChange('signup')} className="text-[var(--color-accent)] hover:underline">Sign up</button></>
          ) : (
            <>Back to <button onClick={() => onModeChange('login')} className="text-[var(--color-accent)] hover:underline">Sign in</button></>
          )}
        </div>
      </div>

      {/* banner */}
      <div className="hidden md:block relative rounded-r-lg overflow-hidden">
        <Image src="/images/BANNER-HOME.jpeg" alt="banner" fill className="object-cover" />
      </div>
    </div>
  );
} 