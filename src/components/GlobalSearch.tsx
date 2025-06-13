"use client";
import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import Link from 'next/link';

const fetcher = (url: string) => fetch(url).then(r => r.json());

export default function GlobalSearch() {
  const [query, setQuery] = useState('');
  const { data } = useSWR(query.length > 1 ? `/api/search?q=${encodeURIComponent(query)}` : null, fetcher);

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Buscar..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="px-3 py-2 rounded bg-surface-light text-on-surface outline-none"
      />
      {data?.length > 0 && (
        <ul className="absolute z-50 mt-2 w-full bg-surface rounded shadow-lg max-h-64 overflow-auto">
          {data.map((item: any) => (
            <li key={item.slug}>
              <Link href={item.slug} onClick={() => setQuery('')} className="block px-3 py-2 hover:bg-surface-light">
                <span className="font-semibold text-accent mr-2">{item.category}</span>{item.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
} 