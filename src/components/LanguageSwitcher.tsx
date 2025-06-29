'use client';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import React from 'react';
import { locales } from '@/i18n';

const labels: Record<string, string> = {
  pt: 'PT',
  en: 'EN',
  es: 'ES',
  zh: '中文',
};

export default function LanguageSwitcher({ className = '' }: { className?: string }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <select
      aria-label="Selecionar idioma"
      className={`language-switcher bg-transparent text-sm focus:outline-none ${className}`}
      value={locale}
      onChange={handleChange}
    >
      {locales.map((loc) => (
        <option key={loc} value={loc} className="text-black dark:text-white">
          {labels[loc] ?? loc.toUpperCase()}
        </option>
      ))}
    </select>
  );
} 