'use client';

import { useI18n } from '@/context/i18n-context';

export function AboutTeam() {
  const { t } = useI18n();
  return (
    <section id="about-team" className="py-10 md:py-14">
      <div className="container px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            {t('aboutTeam.title')}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t('aboutTeam.description')}
          </p>
        </div>
        
      </div>
    </section>
  );
}
