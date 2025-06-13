'use client';
import React, { Suspense } from 'react';
// @ts-ignore - swr types not installed
import useSWR from 'swr';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const fetcher = (url: string) => fetch(url).then(r => r.json());

export const dynamic = 'force-dynamic';

function Results() {
  const searchParams = useSearchParams();
  const q = searchParams.get('q') || '';
  const { data } = useSWR(q ? `/api/search?q=${encodeURIComponent(q)}` : null, fetcher);

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Resultados para "{q}"</h1>
      {q === '' && <p>Digite um termo na busca.</p>}
      {q && (
        <>
          {data?.length === 0 && <p>Nenhum resultado encontrado.</p>}
          <ul className="space-y-4">
            {data?.map((item: any) => (
              <li key={item.slug} className="border-b pb-4">
                <Link href={item.slug} className="text-accent hover:underline font-semibold">
                  {item.title}
                </Link>
                {item.excerpt && <p className="text-on-surface/80 mt-1">{item.excerpt}</p>}
              </li>
            ))}
          </ul>
        </>
      )}
    </main>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<p className="p-8">Carregando...</p>}>
      <Results />
    </Suspense>
  );
} 