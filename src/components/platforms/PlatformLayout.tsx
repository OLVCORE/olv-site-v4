"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Sidebar from '../layout/Sidebar';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Ticker from '../layout/Ticker';
import WhatsAppButton from '../layout/WhatsAppButton';
import SpecialistButton from '../layout/SpecialistButton';
import { usePathname } from 'next/navigation';

interface PlatformLayoutProps {
  children: React.ReactNode;
  platformName: string;
  platformLogo: string;
  platformDescription: string;
  platformColor?: string;
}

const PlatformLayout: React.FC<PlatformLayoutProps> = ({
  children,
  platformName,
  platformLogo,
  platformDescription,
  platformColor = '#0a2463', // Default color - dark blue
}) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const pathname = usePathname();
  
  // Get platform name from path for CSS class
  const platformKey = pathname?.split('/')[1]?.toLowerCase() || '';

  // Initialize theme from localStorage or default to dark
  useEffect(() => {
    // Check for saved theme
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    
    // If saved theme exists, use it, otherwise keep dark
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.classList.remove('theme-light', 'theme-dark');
      document.body.classList.add(`theme-${savedTheme}`);
    }
    
    // Add platform-page class to body
    document.body.classList.add('platform-page');
    
    return () => {
      // Clean up when component unmounts
      document.body.classList.remove('platform-page');
    };
  }, []);

  // Toggle theme function
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Remove theme classes from body
    document.body.classList.remove('theme-light', 'theme-dark');
    // Add new theme class
    document.body.classList.add(`theme-${newTheme}`);
    
    // Update meta tag for theme-color
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute(
        'content',
        newTheme === 'dark' ? '#0a0f1d' : '#ffffff'
      );
    }
  };

  return (
    <div className="site-wrapper">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content Area */}
      <div className="content-wrapper">
        {/* Header */}
        <Header theme={theme} toggleTheme={toggleTheme} />
        
        {/* Ticker */}
        <Ticker />
        
        {/* Platform Header - Centralizado */}
        <header className="platform-header" style={{ backgroundColor: platformColor }}>
          <div className="container mx-auto py-8 px-4 flex flex-col items-center text-center">
            <div className="mb-4">
              {/* Logo em círculo com hover effect - reduced size */}
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <Image
                  src={platformLogo}
                  alt={`${platformName} Logo`}
                  fill
                  style={{objectFit: 'cover'}}
                />
              </div>
              <h1 className="text-3xl font-bold text-white">{platformName}</h1>
            </div>
            <p className="text-lg text-white max-w-3xl">{platformDescription}</p>
          </div>
        </header>

        {/* Main Content with Platform Styling */}
        <main className="container mx-auto py-8 px-4">
          {/* Apply global platform styling */}
          <style jsx global>{`
            /* Card styling with platform-specific colors */
            .platform-card {
              background-color: var(--card-bg);
              border-radius: 0.75rem;
              padding: 1.75rem;
              transition: all 0.3s ease;
              box-shadow: var(--card-shadow);
              margin-bottom: 1.5rem;
              border-left: 3px solid var(--${platformKey}-color, var(--accent));
              position: relative;
              overflow: hidden;
            }
            
            .platform-card::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 3px;
              background: var(--${platformKey}-color, var(--accent));
              transform: scaleX(0);
              transform-origin: left;
              transition: transform 0.3s ease;
            }
            
            .platform-card:hover {
              box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
              transform: translateY(-3px);
            }
            
            .platform-card:hover::before {
              transform: scaleX(1);
            }
            
            .platform-card h3 {
              color: var(--accent-dark); /* Gold color for titles */
              font-weight: 600;
              margin-bottom: 0.75rem;
            }
            
            /* Section title styling with platform-specific color */
            .section-title {
              color: var(--accent-dark);
              font-size: 1.75rem;
              font-weight: 700;
              margin-bottom: 1.75rem;
              position: relative;
              padding-bottom: 0.75rem;
            }
            
            .section-title:after {
              content: '';
              position: absolute;
              bottom: 0;
              left: 0;
              width: 80px;
              height: 3px;
              background-color: var(--${platformKey}-color, var(--accent)); 
            }
            
            /* Force proper content flow */
            .content-wrapper {
              display: flex;
              flex-direction: column;
              min-height: 100vh;
            }
            
            main.container {
              flex: 1;
              margin-top: 2rem;
            }
            
            /* Ensure proper spacing between sections */
            section {
              margin-bottom: 4rem;
              clear: both;
            }
            
            /* Inner card styling for nested content */
            .inner-card {
              background-color: var(--inner-card-bg);
              border-radius: 0.5rem;
              padding: 1.25rem;
              margin-top: 1rem;
              border: 1px solid var(--card-border);
              transition: all 0.2s ease;
            }
            
            .inner-card:hover {
              transform: translateY(-2px);
              box-shadow: var(--shadow-md);
            }
          `}</style>
          {children}
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
      
      {/* Floating buttons */}
      <WhatsAppButton position="bottom-right" />
      <SpecialistButton position="bottom-right" />
      
      {/* Beta Version Box */}
      <div className="beta-box">
        <div className="beta-version">Versão Beta</div>
        <div className="beta-description">Estamos preparando uma experiência excepcional para impulsionar seu negócio global.</div>
      </div>
    </div>
  );
};

export default PlatformLayout; 