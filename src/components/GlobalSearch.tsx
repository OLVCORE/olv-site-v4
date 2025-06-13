"use client";
import React, { useState, useEffect, useRef } from 'react';
// @ts-ignore - swr types not installed
import useSWR from 'swr';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const fetcher = (url: string) => fetch(url).then(r => r.json());

export default function GlobalSearch() {
  const [query, setQuery] = useState('');
  const { data } = useSWR(query.length > 1 ? `/api/search?q=${encodeURIComponent(query)}` : null, fetcher);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && query.trim().length > 0) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      setQuery('');
    }
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Buscar..."
        ref={inputRef}
        value={query}
        onChange={e => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        className="px-3 py-2 rounded bg-surface-light text-on-surface outline-none"
      />
      {data?.length > 0 && (
        <ul className="absolute z-50 mt-2 w-full bg-surface rounded shadow-lg max-h-64 overflow-auto">
          {data.map((item: any) => (
            <li key={item.slug}>
              <Link href={item.slug} onClick={() => setQuery('')} className="block px-3 py-2 hover:bg-surface-light">
                <div>
                  <span className="font-semibold text-accent mr-2">{item.category}</span>
                  {item.title}
                </div>
                {item.excerpt && (
                  <p className="text-sm text-on-surface/70 truncate">{item.excerpt}</p>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
} 