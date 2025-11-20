'use client';

import Image from 'next/image';
import { useI18n } from '@/context/i18n-context';

export function Footer() {
  const year = new Date().getFullYear();
  const { t } = useI18n();

  return (
    <footer className="border-t border-border/40">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Image src="https://media.discordapp.net/attachments/1286768073453342767/1441098476266983495/logo.png?ex=69208f0b&is=691f3d8b&hm=d9f95a426a248bc51ee8fcbd6277621ffdd2c9cf747905e415d6a391f797e050&=&format=webp&quality=lossless&width=750&height=750" alt="Vitalia Logo" width={32} height={32} />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            {t('footer.builtBy')}
          </p>
        </div>
        <p className="text-center text-sm text-muted-foreground md:text-left">
          &copy; {year} Vitalia. {t('footer.rightsReserved')}
        </p>
      </div>
    </footer>
  );
}
