"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const platforms = [
  { 
    name: 'STRATEVO', 
    icon: '/icons/stratevo.svg', 
    href: '/stratevo',
    tooltip: 'Inteligência de Mercado e Gestão Estratégica'
  },
  { 
    name: 'EXCELTTA', 
    icon: '/icons/exceltta-simple.svg', 
    href: '/exceltta',
    tooltip: 'Análise de Visão para Tomada de Decisão'
  },
  { 
    name: 'OLV CONNECTA', 
    icon: '/icons/connecta.svg', 
    href: '/connecta',
    tooltip: 'Conexões Seguras com Fornecedores Homologados'
  },
  { 
    name: 'OLV ENGAGE', 
    icon: '/icons/engage.svg', 
    href: '/engage',
    tooltip: 'CRM e qualificação de leads inteligente'
  },
  { 
    name: 'OLV VERITUS', 
    icon: '/icons/veritus.svg', 
    href: '/veritus',
    tooltip: 'Compliance, Due Diligence e Governança'
  },
  { 
    name: 'OLV FINX', 
    icon: '/icons/finx.svg', 
    href: '/finx',
    tooltip: 'Gestão Financeira e Otimização de Fluxo de Caixa'
  },
  { 
    name: 'OLV ACADEMY', 
    icon: '/icons/academy.svg', 
    href: '/academy',
    tooltip: 'Educação Corporativa e Desenvolvimento de Talentos'
  },
  { 
    name: 'OLV LABS', 
    icon: '/icons/labs.svg', 
    href: '/labs',
    tooltip: 'Inovação, Pesquisa e Desenvolvimento com IA'
  },
  { 
    name: 'OLV VENTURES', 
    icon: '/icons/ventures.svg', 
    href: '/ventures',
    tooltip: 'Venture Builder e Aceleração de Startups'
  },
  { 
    name: 'OLV CORE', 
    icon: '/icons/core.svg', 
    href: '/core',
    tooltip: 'Cockpit de Gestão 360° e Business Intelligence'
  },
];

const Sidebar: React.FC = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const handleMouseEnter = () => {};

  const handleMouseLeave = () => {};

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Mobile Toggle Button - Only visible on mobile */}
      <button 
        className="mobile-sidebar-toggle"
        onClick={toggleMobileMenu}
        aria-label="Toggle Platforms Menu"
      >
        <Image 
          src="/icons/platforms.svg" 
          alt="Platforms" 
          width={24} 
          height={24}
        />
        <span>Plataformas</span>
      </button>

      <aside 
        className={`sidebar ${isMobileMenuOpen ? 'mobile-open' : ''} lg:fixed lg:top-[var(--height-header)] lg:left-0 lg:h-[calc(100vh-var(--height-header))] lg:overflow-y-auto lg:overflow-x-visible lg:z-[2000]`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <nav className="sidebar-nav">
          <div className="sidebar-header-mobile">
            <h3>Plataformas</h3>
            <button 
              onClick={toggleMobileMenu}
              className="close-sidebar-mobile"
              aria-label="Close Platforms Menu"
            >
              <span></span>
              <span></span>
            </button>
          </div>
          <ul>
            {platforms.map((platform) => {
              const isActive = pathname === platform.href;
              return (
                <li key={platform.name} className="relative">
                  <Link 
                    href={platform.href} 
                    className={`sidebar-item ${isActive ? 'active' : ''}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    data-tooltip={platform.tooltip}
                  >
                    <Image 
                      src={platform.icon} 
                      alt={`Ícone ${platform.name}`} 
                      width={24} 
                      height={24} 
                      className="sidebar-icon" 
                    />
                    <span className="sidebar-text">{platform.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      {/* Overlay for mobile - closes sidebar when clicked outside */}
      {isMobileMenuOpen && (
        <div 
          className="sidebar-overlay" 
          onClick={toggleMobileMenu}
        ></div>
      )}
    </>
  );
};

export default Sidebar; 