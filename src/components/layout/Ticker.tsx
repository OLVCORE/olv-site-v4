"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Ticker: React.FC = () => {
  const [headlines, setHeadlines] = useState<{ title: string; excerpt: string; slug: string }[]>([]);

  useEffect(() => {
    // Buscar notícias do dia via API (ajuste o endpoint conforme necessário)
    fetch('/api/posts?today=1')
      .then(res => res.json())
      .then(data => {
        // Supondo que data seja um array de posts com campos title, excerpt e slug
        setHeadlines(data.map((post: any) => ({
          title: post.title,
          excerpt: post.excerpt || '',
          slug: post.slug,
        })));
      });
  }, []);

  if (headlines.length === 0) return (
    <div className="ticker">
      <div className="ticker-inner">
        <p>
          <span>Últimas do Blog OLV Internacional – </span>
        </p>
      </div>
    </div>
  );

  return (
    <div className="ticker" style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
      <div className="ticker-inner" style={{ display: 'inline-block', animation: 'ticker-scroll 30s linear infinite' }}>
        {headlines.map((news, idx) => (
          <span key={idx} style={{ marginRight: 32 }}>
            <Link href={`/blog/${news.slug}`}>
              {news.excerpt ? `${news.excerpt.slice(0, 60)}...` : news.title}
            </Link>
            {idx < headlines.length - 1 && " – "}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes ticker-scroll {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
};

export default Ticker; 