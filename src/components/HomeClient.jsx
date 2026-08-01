'use client';

import { useRef, useEffect, useState } from 'react';
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  useMotionTemplate,
  useReducedMotion,
} from 'framer-motion';
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
 *     Inside it, the Home section exits cinematically and a Section 2
 *     backdrop rises from below — both driven by a shared scroll progress
 *     MotionValue (0 → 1 over the 150vh sticky window).
 *  2. All existing content sections follow naturally after the transition
 *     zone, preserving every GSAP ScrollTrigger animation unchanged.
 *
 * Scroll progress is driven by GSAP ScrollTrigger (already integrated
 * with Lenis) and fed into Framer Motion via useMotionValue + useTransform.
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

  // ── Accessibility ─────────────────────────────────────────────────────
  const shouldReduceMotion = useReducedMotion();

  // ── Shared scroll progress (0 → 1) driven by GSAP ScrollTrigger ──────
  const progress = useMotionValue(0);

  // ── Home section transforms ───────────────────────────────────────────
  // Scale from 1 → 0.82 (card-shrink effect)
  const homeScale = useTransform(progress, [0, 1], [1, 0.82]);
  // Drift upward 0 → -10%
  const homeY = useTransform(progress, [0, 1], ['0%', '-10%']);
  // Fade: stay fully opaque until 40%, then vanish by 85%
  const homeOpacity = useTransform(progress, [0, 0.4, 0.85], [1, 1, 0]);
  // Progressive blur: none until 40%, max 10px by 100%
  const homeBlurAmount = useTransform(progress, [0.4, 1], [0, 10]);
  const homeFilter = useMotionTemplate`blur(${homeBlurAmount}px)`;
  // Border radius rounds as it shrinks (card-exit feel)
  const homeBorderRadius = useTransform(progress, [0, 0.8, 1], [0, 16, 28]);

  // ── Section 2 overlay transforms ─────────────────────────────────────
  // Rises from fully below (100%) to fully covering (0%)
  const s2Y = useTransform(progress, [0, 1], ['100%', '0%']);
  // Slight scale-in as it arrives
  const s2Scale = useTransform(progress, [0, 1], [0.94, 1]);
  // Fades in from 15% progress to 70%
  const s2Opacity = useTransform(progress, [0.15, 0.7], [0, 1]);
  // Top-corner radius eases away as it fully covers the screen
  const s2TopRadius = useTransform(progress, [0, 0.7, 1], [28, 10, 0]);

  // ── GSAP ScrollTrigger → drives progress ─────────────────────────────
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const scroller = document.getElementById('main-scroll-container');
    if (!scroller || !transitionRef.current) return;

    // This trigger spans the 250vh zone.
    // Sticky duration = 250vh - 100vh = 150vh, so progress goes 0→1 over 150vh of actual scroll.
    const st = ScrollTrigger.create({
      trigger: transitionRef.current,
      scroller,
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: self => {
        progress.set(self.progress);
      },
      invalidateOnRefresh: true,
    });

    return () => st.kill();
  }, [progress]);

  // ── Computed styles (respect prefers-reduced-motion) ──────────────────
  const homeMotionStyle = shouldReduceMotion
    ? {
        position: 'absolute',
        inset: 0,
        opacity: homeOpacity, // keep opacity crossfade even with reduced motion
        overflow: 'hidden',
        willChange: 'opacity',
      }
    : {
        position: 'absolute',
        inset: 0,
        scale: homeScale,
        y: homeY,
        opacity: homeOpacity,
        filter: homeFilter,
        borderRadius: homeBorderRadius,
        transformOrigin: '50% 30%',
        overflow: 'hidden',
        willChange: 'transform, opacity, filter',
      };

  const s2MotionStyle = shouldReduceMotion
    ? {
        position: 'absolute',
        inset: 0,
        opacity: s2Opacity,
        overflow: 'hidden',
        backgroundColor: '#F8F7F6',
        zIndex: 10,
        willChange: 'opacity',
      }
    : {
        position: 'absolute',
        inset: 0,
        y: s2Y,
        scale: s2Scale,
        opacity: s2Opacity,
        borderTopLeftRadius: s2TopRadius,
        borderTopRightRadius: s2TopRadius,
        overflow: 'hidden',
        backgroundColor: '#F8F7F6',
        zIndex: 10,
        willChange: 'transform, opacity',
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
                  {/* ── SECTION 1: Home exits ───────────────────────── */}
                  <motion.div style={homeMotionStyle}>
                    <Hero />
                  </motion.div>

                  {/* ── SECTION 2 backdrop: rises from below ─────────── */}
                  <motion.div style={s2MotionStyle}>
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
                  </motion.div>
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
