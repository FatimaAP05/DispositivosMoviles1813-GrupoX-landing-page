'use client';

import Link from 'next/link';
import { Cpu } from 'lucide-react';
import { useI18n } from '@/context/i18n-context';

export function Footer() {
  const year = new Date().getFullYear();
  const { t } = useI18n();

  return (
    <footer className="border-t border-border/40">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Cpu className="h-6 w-6" />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            {t('footer.builtBy')}
          </p>
        </div>
        <p className="text-center text-sm text-muted-foreground md:text-left">
          &copy; {year} VitaliaConnect. {t('footer.rightsReserved')}
        </p>
      </div>
    </footer>
  );
}
