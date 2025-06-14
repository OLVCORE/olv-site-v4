"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import GlobalSearch from '../../GlobalSearch';

interface HeaderProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const pathname = usePathname();
  
  const isActive = (path: string) => {
    return pathname === path || (pathname?.startsWith(path) && path !== '/');
  };

  return (
    <>
      {/* Header */}
      <header className="header-wrapper">
        <div className="header-inner">
          {/* Logo + Slogan */}
          <div className="header-brand">
            <Link href="/" className="header-logo-link" title="OLV Internacional">
              <div className="header-logo-circle">
                <Image 
                  src="/images/olv-logo.jpeg" 
                  alt="OLV Internacional" 
                  width={100} 
                  height={100} 
                  className="header-logo-img"
                  priority
                />
              </div>
            </Link>
            <div className="header-slogan">
              Integramos Estratégia,<br />
              Operação e Resultado
            </div>
          </div>

          {/* Menu Principal - Visible only on desktop */}
          <div className="flex items-center gap-6">
            {/* Buscar */}
            <GlobalSearch />

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
        </div>
      </header>
    </>
  );
};

export default Header;