"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import GlobalSearch from '../../GlobalSearch';

interface HeaderProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const [navOpen, setNavOpen] = useState(false);
  const pathname = usePathname();
  
  const isActive = (path: string) => {
    return pathname === path || (pathname?.startsWith(path) && path !== '/');
  };

  // Lock scroll when menu aberto mobile
  useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [navOpen]);

  return (
    <>
      {/* Header */}
      <header className="header-wrapper">
        <div className="header-inner">
          {/* Logo + Slogan */}
          <div className="header-brand" style={{ gap: '30px' }}>
            <Link href="/" className="header-logo-link" title="OLV Internacional">
              <div className="logo-olv-padrao">
                <Image 
                  src="/images/olv-logo.jpeg" 
                  alt="OLV Internacional" 
                  width={84} 
                  height={84} 
                  className="header-logo-img"
                  priority
                />
              </div>
            </Link>
            <div className="header-slogan" style={{ marginLeft: '0.5rem' }}>
              Integramos Estratégia,<br />
              Operação e Resultado
            </div>
          </div>

          {/* Menu Principal - Visible only on desktop */}
          <div className="flex items-center gap-6">
            {/* Buscar (desktop only) */}
            <div className="desktop-only">
              <GlobalSearch />
            </div>

            <nav className="nav-menu desktop-only">
              <Link href="/" className={`nav-item ${isActive('/') ? 'active' : ''}`} data-page="home">Home</Link>
              <Link href="/sobre" className={`nav-item ${isActive('/sobre') ? 'active' : ''}`} data-page="sobre">Sobre</Link>
              <Link href="/solucoes" className={`nav-item ${isActive('/solucoes') ? 'active' : ''}`} data-page="solucoes">Soluções</Link>
              <Link href="/ecossistema" className={`nav-item ${isActive('/ecossistema') ? 'active' : ''}`} data-page="ecossistema">Ecossistema</Link>
              <Link href="/radar360" className={`nav-item ${isActive('/radar360') ? 'active' : ''}`} data-page="radar360">Radar 360</Link>
              <Link href="/blog" className={`nav-item ${isActive('/blog') ? 'active' : ''}`} data-page="blog">Blog</Link>
              <Link href="/sitemap" className={`nav-item ${isActive('/sitemap') ? 'active' : ''}`} data-page="sitemap">Mapa do Site</Link>
              <Link href="/contato" className={`nav-item ${isActive('/contato') ? 'active' : ''}`} data-page="contato">Contato</Link>
            </nav>
          </div>

          {/* Switch de Tema */}
          <div className="theme-switch-wrapper">
            <label className="theme-switch" htmlFor="theme-checkbox">
              <input 
                type="checkbox" 
                id="theme-checkbox" 
                checked={theme === 'light'}
                onChange={toggleTheme}
              />
              <div className="switch-inner">
                <span className="switch-icon moon-icon">
                  <Image 
                    src="/icons/moon.svg" 
                    alt="Lua" 
                    width={16} 
                    height={16}
                  />
                </span>
                <span className="switch-icon sun-icon">
                  <Image 
                    src="/icons/sun.svg" 
                    alt="Sol" 
                    width={16} 
                    height={16}
                  />
                </span>
              </div>
            </label>
          </div>

          {/* Botão MENU Principal – mobile */}
          <button
            className="mobile-nav-toggle md:hidden flex items-center justify-center"
            aria-label="Abrir menu principal"
            onClick={() => setNavOpen(!navOpen)}
          >
            <span className="sr-only">Menu</span>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
            <span className="toggle-label">Menu</span>
          </button>
        </div>
      </header>

      {/* Overlay nav mobile */}
      { /* usa portal root para overlay se quiser, mas simples div */ }
      <nav className={`nav-menu-mobile md:hidden ${navOpen ? 'show' : ''}`}>
        <Link href="/" className={`nav-item ${isActive('/') ? 'active' : ''}`} onClick={() => setNavOpen(false)}>Home</Link>
        <Link href="/sobre" className={`nav-item ${isActive('/sobre') ? 'active' : ''}`} onClick={() => setNavOpen(false)}>Sobre</Link>
        <Link href="/solucoes" className={`nav-item ${isActive('/solucoes') ? 'active' : ''}`} onClick={() => setNavOpen(false)}>Soluções</Link>
        <Link href="/ecossistema" className={`nav-item ${isActive('/ecossistema') ? 'active' : ''}`} onClick={() => setNavOpen(false)}>Ecossistema</Link>
        <Link href="/radar360" className={`nav-item ${isActive('/radar360') ? 'active' : ''}`} onClick={() => setNavOpen(false)}>Radar 360</Link>
        <Link href="/blog" className={`nav-item ${isActive('/blog') ? 'active' : ''}`} onClick={() => setNavOpen(false)}>Blog</Link>
        <Link href="/sitemap" className={`nav-item ${isActive('/sitemap') ? 'active' : ''}`} onClick={() => setNavOpen(false)}>Mapa do Site</Link>
        <Link href="/contato" className={`nav-item ${isActive('/contato') ? 'active' : ''}`} onClick={() => setNavOpen(false)}>Contato</Link>
      </nav>
    </>
  );
};

export default Header;