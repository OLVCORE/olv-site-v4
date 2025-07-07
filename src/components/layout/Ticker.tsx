"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Ticker: React.FC = () => {
  const [headlines, setHeadlines] = useState<{ title: string; excerpt: string }[]>([]);

  useEffect(() => {
    // Buscar notícias do dia via API (ajuste o endpoint conforme necessário)
    fetch('/api/posts?today=1')
      .then(res => res.json())
      .then(data => {
        // Supondo que data seja um array de posts com campos title e excerpt
        setHeadlines(data.map((post: any) => ({
          title: post.title,
          excerpt: post.excerpt || '',
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
    <div className="ticker">
      <div className="ticker-inner">
        {headlines.map((news, idx) => (
          <span key={idx}>
            <Link href="/blog">
              {news.excerpt ? `${news.excerpt.slice(0, 60)}...` : news.title}
            </Link>
            {idx < headlines.length - 1 && " – "}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Ticker; 