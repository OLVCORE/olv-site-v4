import { NextIntlClientProvider } from 'next-intl';
import { ReactNode } from 'react';

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  let messages: Record<string, unknown> = {};
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch (_err) {
    // keep empty messages if file missing
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages as any}>
      {children}
    </NextIntlClientProvider>
  );
} 