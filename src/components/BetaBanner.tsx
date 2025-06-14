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
        'relative w-full z-40',
        'bg-[#d4af37] text-[#0a0f1d] dark:bg-[#d4af37] dark:text-[#0a0f1d]'
      )}
    >
      <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center sm:justify-between text-sm sm:text-base font-medium gap-3">
        <span className="text-center sm:text-left">
          {platform} está em <span className="font-bold">BETA</span> — lançamento oficial em breve. Conte-nos o que achou!
        </span>
        <button
          onClick={handleClick}
          className="inline-flex items-center justify-center px-4 py-2 bg-[#0a0f1d] text-[#d4af37] rounded-full shadow hover:bg-[#151b2d] transition-colors"
        >
          Enviar feedback
        </button>
      </div>
    </div>
  );
};

export default BetaBanner; 