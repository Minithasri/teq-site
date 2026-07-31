import React from 'react';
import Navbar from '@/components/landing/Navbar';
import Hero from '@/components/landing/Hero';
import CourseSection from '@/components/landing/CourseSection';
import Features from '@/components/landing/Features';
import ReasonsSection from '@/components/landing/ReasonsSection';
import ScheduleSection from '@/components/landing/ScheduleSection';
import TestimonialSection from '@/components/landing/TestimonialSection';
import SupportSection from '@/components/landing/SupportSection';
import FaqSection from '@/components/landing/FaqSection';
import FooterCTA from '@/components/landing/FooterCTA';
import SmoothScroll from '@/components/SmoothScroll';

export const metadata = {
  metadataBase: new URL('https://teqcerty.com'),
  title: 'Teqcerty | Master Claude Before Your Job Demands It',
  description:
    'Teqcerty provides structured Claude AI training across three levels. Master Claude before your job demands it — enroll today.',
  openGraph: {
    title: 'Teqcerty | Master Claude Before Your Job Demands It',
    description:
      'Master Claude AI before your job demands it. Structured training across three levels.',
    url: 'https://teqcerty.com',
    siteName: 'Teqcerty',
    images: [],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Teqcerty | Master Claude Before Your Job Demands It',
    description: 'Master Claude AI before your job demands it.',
    images: [],
  },
  keywords: 'teqcerty, claude ai, ai training, claude course, ai certification, master claude',
  alternates: {
    canonical: 'https://teqcerty.com/',
  },
};

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Teqcerty',
    description: 'Teqcerty provides structured Claude AI training across three progressive levels.',
    url: 'https://www.teqcerty.com',
  };

  return (
    <>
      {/* SEO JSON-LD Script */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Full-screen landing layout */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 100,
          display: 'flex',
          fontFamily: "'Outfit', sans-serif",
        }}
      >
        {/* Left vertical sidebar nav */}
        <Navbar />

        {/* Main scrollable container */}
        <div
          id='main-scroll-container'
          style={{
            position: 'relative',
            flex: 1,
            height: '100vh',
            overflowY: 'auto',
            overflowX: 'hidden',
          }}
        >
          {/* SmoothScroll Wrapper binds to main-scroll-container and main-scroll-content */}
          <SmoothScroll>
            <div id='main-scroll-content' style={{ width: '100%' }}>
              <Hero />
              {/* Main content sections below the hero */}
              <div style={{ position: 'relative', zIndex: 1, backgroundColor: '#ffffff' }}>
                <CourseSection />
                <Features />
                <ReasonsSection />
                <ScheduleSection />
                <TestimonialSection />
                <SupportSection />
                <FaqSection />
                <FooterCTA />
              </div>
            </div>
          </SmoothScroll>
        </div>
      </div>
    </>
  );
}
