'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useI18n } from '@/context/i18n-context';

const heroImage = PlaceHolderImages.find(img => img.id === 'hero-image');

export function Hero() {
  const { t } = useI18n();
  return (
    <section className="relative py-20 md:py-32">
      <div
        aria-hidden="true"
        className="absolute inset-0 top-0 z-0 opacity-40"
        style={{
          background: 'radial-gradient(circle at top, hsl(var(--primary) / 0.2), transparent 60%)',
        }}
      />
      <div className="container relative z-10 px-4">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-20 items-center">
          <div className="text-center md:text-left max-w-xl mx-auto md:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl font-headline">
              {t('hero.title')}
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              {t('hero.description')}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 md:justify-start">
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
          <div className="relative h-64 md:h-auto md:aspect-square">
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                data-ai-hint={heroImage.imageHint}
                fill
                className="rounded-xl object-cover shadow-2xl"
                priority
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
