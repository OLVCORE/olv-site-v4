"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export interface AnswerItem { title: string; slug: string; }

interface Props {
  grouped: Record<string, AnswerItem[]>;
  initialOpen?: string[]; // categorias inicialmente abertas
  search?: string; // termo de busca
  onChange?: (openCats: string[]) => void;
}

export default function FaqAccordion({ grouped, initialOpen = [], search = '', onChange }: Props) {
  const [openCats, setOpenCats] = useState<string[]>(initialOpen);

  // sync external change (hash/localStorage)
  useEffect(() => {
    setOpenCats(initialOpen);
  }, [initialOpen]);

  const toggle = (cat: string) => {
    const next = openCats.includes(cat)
      ? openCats.filter((c) => c !== cat)
      : [...openCats, cat];
    setOpenCats(next);
    onChange?.(next);
  };

  return (
    <div className="space-y-4">
      {Object.entries(grouped).map(([cat, items]) => {
        // filtra itens pelo termo de busca
        const filtered = search.trim()
          ? items.filter((i) => i.title.toLowerCase().includes(search.toLowerCase()))
          : items;
        if (!filtered.length) return null; // esconde categoria vazia

        const isOpen = openCats.includes(cat);

        return (
          <div key={cat} className="border border-[#2a3448] rounded-lg">
            <button
              className="w-full text-left px-4 py-3 font-semibold flex justify-between items-center hover:bg-[#2a3448]/40"
              onClick={() => toggle(cat)}
            >
              <span>{cat}</span>
              <span>{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen && (
              <ul className="px-6 py-3 space-y-2">
                {filtered.map((a) => (
                  <li key={a.slug}>
                    <Link href={`/answers/${a.slug}`} className="text-[#d4af37] hover:underline">
                      {a.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
} 