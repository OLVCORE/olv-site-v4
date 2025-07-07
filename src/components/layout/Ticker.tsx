"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Ticker: React.FC = () => {
  const [headlines, setHeadlines] = useState<{ title: string; excerpt: string; slug: string }[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detectar se é mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Buscar todas as notícias do dia via API
    fetch('/api/posts?today=1')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setHeadlines(data.map((post: any) => ({
            title: post.title,
            excerpt: post.excerpt || '',
            slug: post.slug,
          })));
        }
      })
      .catch(error => {
        console.error('Erro ao buscar notícias:', error);
      });

    return () => window.removeEventListener('resize', checkMobile);
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

  // Calcular duração da animação: mobile 35% mais lento, desktop 10% mais rápido
  const baseDuration = isMobile ? 81 : 27; // 60 * 1.35 = 81s mobile, 30 * 0.9 = 27s desktop
  const animationDuration = Math.max(baseDuration, headlines.length * (isMobile ? 8 : 2.7)); // 8s por notícia no mobile, 2.7s no desktop

  return (
    <div className="ticker" style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
      <div 
        className="ticker-inner" 
        style={{ 
          display: 'inline-block', 
          animation: `ticker-scroll ${animationDuration}s linear infinite`,
          whiteSpace: 'nowrap'
        }}
      >
        {headlines.map((news, idx) => (
          <span key={idx} style={{ marginRight: isMobile ? 48 : 32, display: 'inline-block' }}>
            <Link 
              href={`/blog/${news.slug}`} 
              style={{ 
                textDecoration: 'none', 
                color: 'inherit',
                cursor: 'pointer',
                display: 'inline-block'
              }}
            >
              {news.excerpt ? `${news.excerpt.slice(0, isMobile ? 60 : 80)}...` : news.title.slice(0, isMobile ? 60 : 80)}
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
        .ticker-inner:hover {
          animation-play-state: paused;
        }
        .ticker-inner a {
          pointer-events: auto !important;
          cursor: pointer !important;
        }
      `}</style>
    </div>
  );
};

export default Ticker; 