"use client";

import { useState, useEffect } from 'react';
import MainLayout from '../../components/layout/MainLayout';
import FaqAccordion, { AnswerItem } from './FaqAccordion';

interface Props {
  grouped: Record<string, AnswerItem[]>;
}

export default function FaqPageClient({ grouped }: Props) {
  const [search, setSearch] = useState('');
  const [openCats, setOpenCats] = useState<string[]>([]);

  // init from hash/localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('faqOpenCats') || '[]');
    let initial: string[] = Array.isArray(saved) ? saved : [];
    const hash = window.location.hash.replace('#', '');
    if (hash) initial = Array.from(new Set([...initial, decodeURIComponent(hash)]));
    setOpenCats(initial);
  }, []);

  const handleChange = (cats: string[]) => {
    setOpenCats(cats);
    localStorage.setItem('faqOpenCats', JSON.stringify(cats));
    if (cats.length === 1) {
      history.replaceState(null, '', `#${encodeURIComponent(cats[0])}`);
    }
  };

  return (
    <MainLayout className="faq-page">
      <div className="main-content container py-10">
        <h1 className="text-3xl font-bold mb-6 text-accent">Perguntas Frequentes (FAQ)</h1>
        {/* Search */}
        <div className="mb-6">
          <input
            type="search"
            placeholder="Buscar pergunta..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-96 px-4 py-2 rounded-md bg-[#1a2338] border border-[#2a3448] focus:border-accent focus:outline-none text-sm"
          />
        </div>
        <FaqAccordion
          grouped={grouped}
          initialOpen={openCats}
          search={search}
          onChange={handleChange}
        />
      </div>
    </MainLayout>
  );
} 