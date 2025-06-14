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
        'top-[70px] md:top-[72px]', // ticker + header height
        'inline-flex items-center gap-3 px-4 py-2 rounded-full shadow-lg',
        'bg-[#d4af37] text-[#0a0f1d] dark:bg-[#d4af37] dark:text-[#0a0f1d]',
        'animate-pulse-soft z-50'
      )}
    >
      <span className="text-sm font-semibold whitespace-nowrap">
        {platform} em BETA
      </span>
      <button
        onClick={handleClick}
        className="text-xs font-medium underline underline-offset-2 hover:opacity-80"
      >
        feedback
      </button>
    </div>
  );
};

export default BetaBanner; 