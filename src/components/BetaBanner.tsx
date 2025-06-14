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
        'fixed right-4 md:right-8',
        'top-[175px] md:top-[175px]',
        'inline-flex items-center gap-4 px-5 py-3 rounded-lg shadow-md max-w-sm w-fit',
        'bg-[#d4af37] text-[#0a0f1d] dark:bg-[#d4af37] dark:text-[#0a0f1d]',
        'animate-pulse-soft z-[3000]'
      )}
    >
      <div className="flex flex-col text-left max-w-xs">
        <p className="text-sm font-bold leading-snug">🚧 {platform} em BETA</p>
        <p className="text-xs leading-snug">Ajude-nos a priorizar funcionalidades — compartilhe suas ideias</p>
      </div>
      <button
        onClick={handleClick}
        className="ml-2 text-xs font-semibold bg-white text-[#0a0f1d] px-4 py-2 rounded-md shadow hover:bg-gray-100 hover:shadow-lg transition-colors whitespace-nowrap"
      >
        Enviar feedback
      </button>
    </div>
  );
};

export default BetaBanner; 