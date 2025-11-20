'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useI18n } from '@/context/i18n-context';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const { t } = useI18n();
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-image');

  return (
    <section className="relative py-12 md:py-20">
      <div
        aria-hidden="true"
        className="absolute inset-0 top-0 z-0 opacity-40"
        style={{
          background: 'radial-gradient(circle at top, hsl(var(--primary) / 0.2), transparent 60%)',
        }}
      />
      <div className="container relative z-10 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl font-headline">
              {t('hero.title')}
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              {t('hero.description')}
            </p>
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-x-6">
              <Link href="/download" passHref>
                <Button size="lg">{t('hero.requestDemo')}</Button>
              </Link>
              <Link href="#faq" passHref>
                <Button size="lg" variant="ghost">
                  {t('hero.learnMore')} <span aria-hidden="true" className="ml-2">→</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            {heroImage && (
                <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  width={1128}
                  height={590}
                  className="rounded-xl shadow-2xl"
                  data-ai-hint={heroImage.imageHint}
                  priority
                />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
