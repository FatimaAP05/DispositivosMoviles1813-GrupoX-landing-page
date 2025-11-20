'use client';

import { useI18n } from '@/context/i18n-context';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, Phone } from 'lucide-react';

export function Contact() {
  const { t } = useI18n();

  return (
    <section id="contact" className="py-20 md:py-28 bg-accent/30">
      <div className="container px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            {t('contact.title')}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t('contact.description')}
          </p>
        </div>
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-start">
            <div className="space-y-8 flex flex-col justify-center h-full">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{t('contact.email')}</h3>
                  <p className="text-muted-foreground">vitalia@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{t('contact.phone')}</h3>
                  <p className="text-muted-foreground">+51 970 526 672</p>
                </div>
              </div>
            </div>
            <Card>
              <CardContent className="p-6">
                <form className="space-y-4">
                  <Input placeholder={t('contact.fullName')} />
                  <Input type="email" placeholder={t('contact.emailLabel')} />
                  <Textarea placeholder={t('contact.messagePlaceholder')} className="min-h-[120px]" />
                  <Button type="submit" className="w-full">
                    {t('contact.sendMessage')}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
