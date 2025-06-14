"use client";

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function FeedbackForm() {
  const searchParams = useSearchParams();
  const platform = searchParams.get('platform') || 'Plataforma';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    feedback: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch('/api/beta-feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, platform }),
      });
      setSubmitted(true);
      setFormData({ name: '', email: '', company: '', feedback: '' });
    } catch (err) {
      console.error(err);
      alert('Ocorreu um erro ao enviar. Tente novamente mais tarde.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0e1425] text-[#e6f2ff] p-4">
        <div className="max-w-md text-center">
          <h1 className="text-2xl font-bold text-[#d4af37] mb-4">Obrigado pelo feedback!</h1>
          <p className="text-lg">Sua contribuição é muito importante para que possamos aprimorar a {platform}.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0e1425] text-[#e6f2ff] p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-[#0a0f1d] border border-[#1e293b] rounded-lg p-8 w-full max-w-lg shadow-2xl space-y-4"
      >
        <h1 className="text-2xl font-bold text-[#d4af37] mb-2">Beta Feedback – {platform}</h1>
        <p className="text-sm text-[#e6f2ff]/70 mb-4">Conte-nos como podemos tornar esta plataforma ainda melhor.</p>

        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">Nome</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md bg-[#0e1425] border border-[#1e293b] focus:border-[#d4af37] focus:outline-none focus:ring-1 focus:ring-[#d4af37]"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md bg-[#0e1425] border border-[#1e293b] focus:border-[#d4af37] focus:outline-none focus:ring-1 focus:ring-[#d4af37]"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium mb-1">Empresa (opcional)</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md bg-[#0e1425] border border-[#1e293b] focus:border-[#d4af37] focus:outline-none focus:ring-1 focus:ring-[#d4af37]"
          />
        </div>
        <div>
          <label htmlFor="feedback" className="block text-sm font-medium mb-1">Feedback</label>
          <textarea
            id="feedback"
            name="feedback"
            required
            rows={4}
            value={formData.feedback}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md bg-[#0e1425] border border-[#1e293b] focus:border-[#d4af37] focus:outline-none focus:ring-1 focus:ring-[#d4af37] resize-none"
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 px-4 bg-[#d4af37] text-[#0a0f1d] font-medium rounded-md hover:bg-[#b9952e] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#d4af37] disabled:opacity-50"
        >
          {loading ? 'Enviando...' : 'Enviar feedback'}
        </button>
      </form>
    </div>
  );
}

export default function BetaFeedbackPage() {
  return (
    <Suspense fallback={null}>
      <FeedbackForm />
    </Suspense>
  );
} 