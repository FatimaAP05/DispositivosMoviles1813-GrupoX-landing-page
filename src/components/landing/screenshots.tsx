'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { useI18n } from '@/context/i18n-context';

const screenshotIds = ['screenshot-dashboard', 'screenshot-chat', 'screenshot-calendar'];
const screenshots = PlaceHolderImages.filter(img => screenshotIds.includes(img.id));

export function Screenshots() {
  const { t } = useI18n();
  return (
    <section id="screenshots" className="py-20 md:py-28 bg-accent/30">
      <div className="container px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            {t('screenshots.title')}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t('screenshots.description')}
          </p>
        </div>

        <div className="mt-16">
          <Carousel
            className="w-full max-w-4xl mx-auto"
            opts={{
              loop: true,
            }}
          >
            <CarouselContent>
              {screenshots.map((screenshot) => (
                <CarouselItem key={screenshot.id}>
                  <Card className="overflow-hidden">
                    <CardContent className="p-0 aspect-video relative">
                      <Image
                        src={screenshot.imageUrl}
                        alt={screenshot.description}
                        data-ai-hint={screenshot.imageHint}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
