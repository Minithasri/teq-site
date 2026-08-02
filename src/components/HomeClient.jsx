'use client';

import { useRef, useEffect, useState } from 'react';
import { AnimatePresence, useReducedMotion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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
import Footer from '@/components/landing/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import AppLoader from '@/components/AppLoader';

/**
 * HomeClient — orchestrates the Cusp AI-inspired two-section scroll experience.
 *
 * Architecture:
 *  1. A 250vh "transition zone" holds a sticky 100vh container.
 *     Inside it, the Home section slides out to the right and the
 *     Section 2 panel slides in from the left — a single GSAP scrub
 *     timeline drives both with `xPercent`, reversible on scroll-up.
 *  2. All existing content sections follow naturally after the transition
 *     zone, preserving every GSAP ScrollTrigger animation unchanged.
 *
 * The slide is driven entirely by GSAP ScrollTrigger (scrub, already
 * integrated with Lenis) acting directly on the DOM via refs — no
 * React-state bridge — so it stays on the compositor (transform only,
 * no blur/scale/border-radius) and tracks the scrollbar 1:1.
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

  // ── Refs ──────────────────────────────────────────────────────────────
  const transitionRef = useRef(null); // The 250vh transition zone wrapper
  const homeRef = useRef(null); // Hero panel — slides out to the right
  const s2Ref = useRef(null); // Section 2 panel — slides in from the left

  // ── Accessibility ─────────────────────────────────────────────────────
  const shouldReduceMotion = useReducedMotion();

  // ── GSAP ScrollTrigger → drives the horizontal slide directly ─────────
  // Home slides out to the right (xPercent 0 → 100) while Section 2 slides
  // in from the left (xPercent -100 → 0), scrubbed 1:1 with scroll so it
  // reverses cleanly on scroll-up. Only `transform` is touched (via
  // xPercent), which stays on the compositor for a smooth 60fps slide.
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const scroller = document.getElementById('main-scroll-container');
    if (!scroller || !transitionRef.current || !homeRef.current || !s2Ref.current) return;

    if (shouldReduceMotion) {
      // Reduced motion: simple opacity crossfade, no movement.
      const st = ScrollTrigger.create({
        trigger: transitionRef.current,
        scroller,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        invalidateOnRefresh: true,
        animation: gsap
          .timeline()
          .to(homeRef.current, { opacity: 0, ease: 'none' }, 0)
          .fromTo(s2Ref.current, { opacity: 0 }, { opacity: 1, ease: 'none' }, 0),
      });
      return () => st.kill();
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: transitionRef.current,
        scroller,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        invalidateOnRefresh: true,
      },
    });

    tl.fromTo(homeRef.current, { xPercent: 0 }, { xPercent: 100, ease: 'none' }, 0).fromTo(
      s2Ref.current,
      { xPercent: -100 },
      { xPercent: 0, ease: 'none' },
      0
    );

    return () => tl.scrollTrigger?.kill();
  }, [shouldReduceMotion]);

  const homeMotionStyle = {
    position: 'absolute',
    inset: 0,
    overflow: 'hidden',
    willChange: 'transform',
  };

  const s2MotionStyle = {
    position: 'absolute',
    inset: 0,
    overflow: 'hidden',
    backgroundColor: '#F8F7F6',
    zIndex: 10,
    willChange: 'transform',
  };

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
              {/* ══════════════════════════════════════════════════════════
                  TRANSITION ZONE  (250vh)
                  ─ Sticky container inside gives 150vh of scroll time.
                  ─ Home exits, Section 2 backdrop rises, from the same
                    sticky window so both transforms are perfectly in sync.
                  ══════════════════════════════════════════════════════════ */}
              <div ref={transitionRef} style={{ height: '250vh', position: 'relative' }}>
                {/* Sticky viewport — clips overflow so Section 2 hides below */}
                <div
                  style={{
                    position: 'sticky',
                    top: 0,
                    height: '100vh',
                    overflow: 'hidden',
                  }}
                >
                  {/* ── SECTION 1: Home slides out right ─────────────── */}
                  <div ref={homeRef} style={homeMotionStyle}>
                    <Hero />
                  </div>

                  {/* ── SECTION 2 panel: slides in from the left ──────── */}
                  <div ref={s2Ref} style={s2MotionStyle}>
                    {/*
                      This cream panel bridges visually to CourseSection
                      (same #F8F7F6 background). After the sticky zone ends,
                      CourseSection scrolls in seamlessly beneath it.
                    */}
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                      }}
                    />

                    {/* Subtle bottom gradient so it blends into CourseSection */}
                    <div
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '120px',
                        background: 'linear-gradient(to bottom, transparent, #F8F7F6)',
                        pointerEvents: 'none',
                      }}
                    />
                  </div>
                </div>
              </div>
              {/* ── END TRANSITION ZONE ─────────────────────────────────── */}

              {/* ══════════════════════════════════════════════════════════
                  SECTION 2: All existing content (unchanged, GSAP intact)
                  ─ Starts immediately after the 250vh transition zone.
                  ─ At scroll = 150vh (progress = 1), the viewport bottom
                    is exactly at CourseSection's top → seamless handoff.
                  ══════════════════════════════════════════════════════════ */}
              <div style={{ position: 'relative', zIndex: 1, backgroundColor: '#ffffff' }}>
                <CourseSection />
                <Features />
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
