'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from './language-switcher';
import { useI18n } from '@/context/i18n-context';

export function Header() {
  const { t } = useI18n();
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Image src="https://media.discordapp.net/attachments/1286768073453342767/1441098476266983495/logo.png?ex=69208f0b&is=691f3d8b&hm=d9f95a426a248bc51ee8fcbd6277621ffdd2c9cf747905e415d6a391f797e050&=&format=webp&quality=lossless&width=750&height=750" alt="Vitalia Logo" width={32} height={32} />
          <span className="font-bold sm:inline-block">Vitalia</span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <LanguageSwitcher />
          <Link href="/download">
            <Button>{t('header.getStarted')}</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
