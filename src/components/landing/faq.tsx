'use client';

import Image from 'next/image';
import { useI18n } from '@/context/i18n-context';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function Faq() {
  const { t } = useI18n();

  const faqs = [
    {
      question: t('faq.q1'),
      answer: t('faq.a1'),
    },
    {
      question: t('faq.q2'),
      answer: t('faq.a2'),
    },
    {
      question: t('faq.q3'),
      answer: t('faq.a3'),
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="container px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            {t('faq.title')}
          </h2>
        </div>
        <div className="mt-16 mx-auto max-w-4xl flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3 flex justify-center">
            <Image
              src="https://media.discordapp.net/attachments/1286768073453342767/1441098476266983495/logo.png?ex=69208f0b&is=691f3d8b&hm=d9f95a426a248bc51ee8fcbd6277621ffdd2c9cf747905e415d6a391f797e050&=&format=webp&quality=lossless&width=750&height=750"
              alt="Vitalia Logo"
              width={150}
              height={150}
              className=""
            />
          </div>
          <div className="md:w-2/3">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
