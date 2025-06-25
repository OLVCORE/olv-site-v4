import React from 'react';
import Image from 'next/image';

interface Props {
  provider: 'google' | 'facebook' | 'linkedin';
  onClick: () => void;
}

const iconMap: Record<Props['provider'], string> = {
  google: '/icons/google.svg',
  facebook: '/icons/facebook.svg',
  linkedin: '/icons/linkedin.svg',
};

export default function SocialButton({ provider, onClick }: Props) {
  const label = provider.charAt(0).toUpperCase() + provider.slice(1);

  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center gap-2 w-full py-2 rounded border-2 border-[var(--color-gold)] hover:bg-[var(--color-gold)]/10 transition"
    >
      <Image src={iconMap[provider]} alt={provider} width={20} height={20} />
      <span className="text-sm font-medium uppercase tracking-wide">
        {label}
      </span>
    </button>
  );
} 