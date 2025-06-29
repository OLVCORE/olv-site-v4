import { createLocalizedPathnamesNavigation } from 'next-intl/navigation';
import { routing } from '@/i18n';

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ ...routing, pathnames: {} as any }); 