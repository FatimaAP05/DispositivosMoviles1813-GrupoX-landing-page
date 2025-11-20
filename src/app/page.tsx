'use client';

import { Header } from '@/components/landing/header';
import { Hero } from '@/components/landing/hero';
import { Features } from '@/components/landing/features';
import { AboutProduct } from '@/components/landing/about-product';
import { AboutTeam } from '@/components/landing/about-team';
import { Screenshots } from '@/components/landing/screenshots';
import { Contact } from '@/components/landing/contact';
import { Footer } from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <Screenshots />
        <AboutProduct />
        <AboutTeam />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
