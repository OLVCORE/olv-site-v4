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
      className={`nav-item bg-transparent px-2 py-1 text-sm focus:outline-none border border-current rounded ${className}`}
      style={{ minWidth: 60 }}
      value={locale}
      onChange={handleChange}
    >
      {locales.map((loc) => (
        <option key={loc} value={loc}>
          {labels[loc] ?? loc.toUpperCase()}
        </option>
      ))}
    </select>
  );
} 