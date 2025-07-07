"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Ticker: React.FC = () => {
  const [headlines, setHeadlines] = useState<{ title: string; excerpt: string; slug: string }[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Detectar se é mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Detectar tema
    const checkTheme = () => {
      const dark = document.documentElement.classList.contains('dark') || document.body.classList.contains('theme-dark');
      setIsDark(dark);
    };
    checkTheme();
    window.addEventListener('themechange', checkTheme);
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

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

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('themechange', checkTheme);
      observer.disconnect();
    };
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

  // Cores do ticker
  const tickerColor = isDark ? '#FFD700' : '#0a58ca';
  const tickerHoverColor = isDark ? '#fffbe6' : '#003366';

  // Calcular duração da animação: mobile 35% mais lento, desktop 10% mais rápido
  const baseDuration = isMobile ? 81 : 27;
  const animationDuration = Math.max(baseDuration, headlines.length * (isMobile ? 8 : 2.7));

  return (
    <div className="ticker" style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
      <div 
        className="ticker-inner" 
        style={{ 
          display: 'inline-block', 
          animation: `ticker-scroll ${animationDuration}s linear infinite`,
          whiteSpace: 'nowrap',
          color: tickerColor
        }}
      >
        {headlines.map((news, idx) => (
          <span key={idx} style={{ marginRight: isMobile ? 48 : 32, display: 'inline-block' }}>
            <Link 
              href={`/blog/${news.slug}`} 
              style={{ 
                textDecoration: 'none', 
                color: tickerColor,
                cursor: 'pointer',
                display: 'inline-block',
                fontWeight: 600,
                transition: 'color 0.2s, text-decoration 0.2s'
              }}
              className="ticker-link"
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
        .ticker-link:hover {
          color: ${tickerHoverColor} !important;
          text-decoration: underline !important;
        }
      `}</style>
    </div>
  );
};

export default Ticker; 