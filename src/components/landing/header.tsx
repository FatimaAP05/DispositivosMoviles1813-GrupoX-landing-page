'use client';

import Link from 'next/link';
import { Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from './language-switcher';
import { useI18n } from '@/context/i18n-context';

export function Header() {
  const { t } = useI18n();
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Cpu className="h-6 w-6" />
          <span className="font-bold sm:inline-block">VitaliaConnect</span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <LanguageSwitcher />
          <Button variant="ghost">{t('header.signIn')}</Button>
          <Button>{t('header.getStarted')}</Button>
        </div>
      </div>
    </header>
  );
}
