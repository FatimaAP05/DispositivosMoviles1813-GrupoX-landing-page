'use client';

import { useI18n } from '@/context/i18n-context';

export function AboutProduct() {
  const { t } = useI18n();
  return (
    <section id="about-product" className="py-20 md:py-28">
      <div className="container px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            {t('aboutProduct.title')}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t('aboutProduct.description')}
          </p>
        </div>
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="aspect-video overflow-hidden rounded-xl shadow-2xl">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/2_NwxnjSnlA"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
