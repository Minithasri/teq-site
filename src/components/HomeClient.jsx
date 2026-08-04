'use client';

import AppLoader from '@/components/AppLoader';
import CourseSection from '@/components/landing/CourseSection';
import FaqSection from '@/components/landing/FaqSection';
import Footer from '@/components/landing/Footer';
import FooterCTA from '@/components/landing/FooterCTA';
import Hero from '@/components/landing/Hero';
import Navbar from '@/components/landing/Navbar';
import ReasonsSection from '@/components/landing/ReasonsSection';
import ScheduleSection from '@/components/landing/ScheduleSection';
import SupportSection from '@/components/landing/SupportSection';
import TestimonialSection from '@/components/landing/TestimonialSection';
import SmoothScroll from '@/components/SmoothScroll';
import { AnimatePresence } from 'framer-motion';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef, useState } from 'react';

/**
 * HomeClient — orchestrates the Cusp AI-inspired two-section scroll experience.
 *
 * Architecture:
 *  1. Hero renders as a normal (non-pinned) 100vh section — it scrolls away
 *     naturally like any other section. Its own ScrollTrigger (see Hero.jsx)
 *     swaps the headline text once the user has scrolled a short way in,
 *     then Hero continues sliding up and out as scrolling continues.
 *  2. All existing content sections follow naturally after Hero, preserving
 *     every GSAP ScrollTrigger animation unchanged.
 */
export default function HomeClient() {
  // ── Loader state (false = loader visible, true = loader done/unmounted) ──
  const [loaderDone, setLoaderDone] = useState(false);

  // ── Refresh ScrollTrigger once loader exits ────────────────────────────
  // The loader covers the page for ~2.5s. By the time it exits the DOM is
  // stable. ScrollTrigger.refresh() recalculates every trigger/pin so the
  // GSAP sections (CourseSection, Features, etc.) fire at the right offsets.
  useEffect(() => {
    if (!loaderDone) return;
    // Small rAF delay ensures the loader element is fully removed from the
    // DOM before we measure positions.
    const id = requestAnimationFrame(() => {
      ScrollTrigger.refresh(true);
    });
    return () => cancelAnimationFrame(id);
  }, [loaderDone]);

  const heroRef = useRef(null);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Teqcerty',
    description: 'Teqcerty provides structured Claude AI training across three progressive levels.',
    url: 'https://www.teqcerty.com',
  };

  return (
    <>
      {/* ── Cusp AI-style loader — renders above everything on page refresh ── */}
      <AnimatePresence>
        {!loaderDone && <AppLoader key='app-loader' onComplete={() => setLoaderDone(true)} />}
      </AnimatePresence>

      {/* SEO JSON-LD */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Full-screen fixed layout (matches original architecture) ── */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 100,
          display: 'flex',
          fontFamily: "'Outfit', sans-serif",
        }}
      >
        {/* Left vertical sidebar nav (unchanged) */}
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
          <SmoothScroll>
            <div id='main-scroll-content' style={{ width: '100%' }}>
              {/* ── Hero pin zone ─────────────────────────────────────────
                  Hero is sticky so it stays perfectly static. It never
                  moves upwards. The text swaps as the user scrolls.
                  ──────────────────────────────────────────────────────── */}
              <div
                style={{
                  position: 'sticky',
                  top: 0,
                  height: '100vh',
                  overflow: 'hidden',
                  zIndex: 0,
                }}
              >
                <Hero />
              </div>

              {/* ── Overlapping Content ───────────────────────────────────
                  CourseSection starts EXACTLY on top of Hero (marginTop: -100vh).
                  Because CourseSection is transparent initially, you see Hero.
                  When you scroll, CourseSection pins immediately and does its
                  left-to-right wipe OVER the static Hero. No bottom-to-top movement!
                  ──────────────────────────────────────────────────────── */}
              <div style={{ position: 'relative', zIndex: 1, marginTop: '-100vh' }}>
                <CourseSection />
                <ReasonsSection />
                <ScheduleSection />
                <TestimonialSection />
                <SupportSection />
                <FaqSection />
                <FooterCTA />
                <Footer />
              </div>
            </div>
          </SmoothScroll>
        </div>
      </div>
    </>
  );
}
