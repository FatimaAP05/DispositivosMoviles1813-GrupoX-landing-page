'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { useI18n } from '@/context/i18n-context';

const AppleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" fill="currentColor" height="1em" width="1em" {...props}>
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C39.2 141.2 0 184.2 0 241.2c0 61.6 31.7 117.2 60.5 152 29.3 35.5 63.2 56.2 99.4 56.2 33.3 0 62.7-20.7 87.7-20.7 25.8 0 54.1 20.7 83.8 20.7 35.5 0 69.9-21.5 95.1-53.5C379.7 342.2 384 310.5 384 299.2c0-2.7 0-5.5-.3-8.3a65.3 65.3 0 00-65-22.2zM128.5 440.3c-23.2-12.4-44.5-35.5-56.8-61.6-14.7-32.1-22.1-66.2-22.1-100.9.1-13.7 2.3-28 6.9-41.5 20.9 19 41.5 33.3 66.2 33.3 14.3 0 28.6-6.9 42.9-6.9 14.3 0 29.3 6.4 44.5 6.4 25.4 0 47.2-13.2 66.2-32.1-1.3 6.9-2.5 13.7-2.5 20.7 0 34.6-8.3 69.9-24.6 102-15.5 31.2-37.3 54.1-62.7 66.2-2.5 1.3-5.8 2.5-9.2 2.5-15.8 0-32.9-10.4-50-10.4s-32.1 10.4-48.4 10.4c-4.6 0-9.2-1.2-13.2-2.5z" />
  </svg>
);

const GooglePlayIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" fill="currentColor" height="1em" width="1em" {...props}>
    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0L104.6 13 47 256V0zm28.3 283l-60.1 60.1L104.6 500l220.7-127.7-60.1-60.1-157 90.7zm157 90.7l60.1-60.1-60.1-60.1-157 90.7 157 90.7zM104.6 13L47 256l157 90.7 220.7-127.7-60.1-60.1L104.6 13z" />
  </svg>
);

export default function DownloadPage() {
  const { t } = useI18n();

  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <div className="container px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl font-headline">
            {t('download.title')}
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-lg leading-8 text-muted-foreground">
            {t('download.description')}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#" passHref>
              <Button size="lg" className="w-60">
                <AppleIcon className="mr-2 h-6 w-6" />
                <div>
                  <div className="text-xs">Download on the</div>
                  <div className="text-xl font-semibold">App Store</div>
                </div>
              </Button>
            </Link>
            <Link href="#" passHref>
              <Button size="lg" className="w-60">
                <GooglePlayIcon className="mr-2 h-6 w-6" />
                <div>
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-xl font-semibold">Google Play</div>
                </div>
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
