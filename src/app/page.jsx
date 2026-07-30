import React from 'react';
import Navbar from '@/components/landing/Navbar';
import Hero from '@/components/landing/Hero';
import Features from '@/components/landing/Features';
import Footer from '@/components/landing/Footer';

export const metadata = {
  metadataBase: new URL('https://teqcerty.com'),
  title: 'Teqcerty | Modern Solutions for Modern Problems',
  description:
    'Teqcerty provides cutting edge solutions for your business needs. Connect with us to elevate your workflow.',
  openGraph: {
    title: 'Teqcerty | Modern Solutions',
    description: 'Elevate your business workflow with Teqcerty.',
    url: 'https://teqcerty.com',
    siteName: 'Teqcerty',
    images: [],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Teqcerty | Modern Solutions',
    description: 'Elevate your business workflow with Teqcerty.',
    images: [],
  },
  keywords: 'teqcerty, project, app, modern solutions, saas',
  alternates: {
    canonical: 'https://teqcerty.com/',
  },
};

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Teqcerty',
    description: 'Teqcerty provides cutting edge solutions for your business needs.',
    url: 'https://www.teqcerty.com',
  };

  return (
    <>
      {/* SEO JSON-LD Script */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className='min-h-screen bg-slate-50 font-sans text-slate-900'>
        <Navbar />
        <Hero />
        <Features />
        <Footer />
      </main>
    </>
  );
}
