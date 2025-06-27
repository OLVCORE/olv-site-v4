"use client";

import { useState } from 'react';
import Link from 'next/link';

export interface AnswerItem { title: string; slug: string; }

interface Props {
  grouped: Record<string, AnswerItem[]>;
}

export default function FaqAccordion({ grouped }: Props) {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="space-y-4">
      {Object.entries(grouped).map(([cat, items]) => (
        <div key={cat} className="border border-[#2a3448] rounded-lg">
          <button
            className="w-full text-left px-4 py-3 font-semibold flex justify-between items-center hover:bg-[#2a3448]/40"
            onClick={() => setOpen(open === cat ? null : cat)}
          >
            <span>{cat}</span>
            <span>{open === cat ? '−' : '+'}</span>
          </button>
          {open === cat && (
            <ul className="px-6 py-3 space-y-2">
              {items.map((a) => (
                <li key={a.slug}>
                  <Link href={`/answers/${a.slug}`} className="text-[#d4af37] hover:underline">
                    {a.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
} 