"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import clsx from 'clsx';

interface BetaBannerProps {
  /** Nome da plataforma para identificar no formulário */
  platform: string;
  /** URL base do formulário de feedback. Será adicionado ?platform=XYZ */
  feedbackUrl?: string;
  /** Se quiser esconder o banner (ex: production) */
  hidden?: boolean;
}

const BetaBanner: React.FC<BetaBannerProps> = ({
  platform,
  feedbackUrl = '/beta-feedback',
  hidden = false,
}) => {
  const router = useRouter();

  if (hidden) return null;

  const handleClick = () => {
    router.push(`${feedbackUrl}?platform=${encodeURIComponent(platform)}`);
  };

  return (
    <div
      className={clsx(
        'relative w-full z-30 overflow-hidden',
        'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600'
      )}
    >
      {/* Animated pulse overlay */}
      <div className="absolute inset-0 animate-pulse opacity-20 bg-white mix-blend-overlay"></div>
      <div className="relative container mx-auto px-4 py-3 flex flex-col sm:flex-row items-center sm:justify-between text-sm sm:text-base font-medium text-white gap-3">
        <span>
          {platform} está em <span className="font-bold">BETA</span> — Lançamento oficial em breve. Queremos muito ouvir a sua opinião!
        </span>
        <button
          onClick={handleClick}
          className="inline-flex items-center justify-center px-4 py-2 bg-white/90 text-indigo-700 rounded-full shadow hover:bg-white transition-colors"
        >
          Enviar feedback
        </button>
      </div>
    </div>
  );
};

export default BetaBanner; 