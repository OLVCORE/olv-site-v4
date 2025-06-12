"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const CookieConsent: React.FC = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Verificar se o usuário já aceitou os cookies
    const cookieConsent = localStorage.getItem('cookie-consent');
    if (!cookieConsent) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowConsent(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-800 text-white p-4 shadow-lg z-50 border-t-2 border-blue-500">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0 md:mr-4 text-sm">
          <p>
            Utilizamos cookies e tecnologias similares para melhorar sua experiência em nosso site, 
            personalizar conteúdo e anúncios, e analisar nosso tráfego.{' '}
            <Link href="/politica" className="text-blue-400 hover:underline">
              Saiba mais sobre nossa política de privacidade
            </Link>.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={declineCookies}
            className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-md transition-colors text-sm"
          >
            Recusar
          </button>
          <button
            onClick={acceptCookies}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors text-sm"
          >
            Aceitar Cookies
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent; 