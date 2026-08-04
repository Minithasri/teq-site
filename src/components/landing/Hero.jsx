'use client';

import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown, Monitor } from 'lucide-react';
import { useEffect, useRef } from 'react';

/**
 * Entrance animation variants — staggered reveal on initial page load.
 * Each headline line slides up into place as it fades in, so the two
 * lines visibly arrive one after another rather than popping in flat.
 */
function getVariants(reducedMotion) {
  return {
    hidden: reducedMotion ? { opacity: 0 } : { opacity: 0, y: 36 },
    visible: reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 },
  };
}

const STAGGER = 0.14; // seconds between each child element

const transition = {
  duration: 0.75,
  ease: [0.25, 0.46, 0.45, 0.94], // smooth ease-out-quart
};

export default function Hero() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const variants = getVariants(false);
  const h1Ref1 = useRef(null);
  const h1Ref2 = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.defaultMuted = true;
      video.play().catch(error => {
        console.warn('Auto-play prevented:', error);
      });
    }
  }, []);

  // ── Scroll-linked text swap ──────────────────────────────────────────────
  // Hero itself stays completely static — it's pinned (position: sticky) by
  // its wrapper in HomeClient, and the background video never moves. Only
  // the headline text animates: once the user has scrolled a short way in,
  // "Master Claude…" slides up and out of view while "Practical training…"
  // slides up from below to take its place — a single clean swap with its
  // own fixed duration (not scrubbed frame-by-frame with scroll position,
  // so the two headlines never sit half-visible on top of each other).
  // Scrolling back up reverses the same swap.
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const scroller = document.getElementById('main-scroll-container');
    const trigger = sectionRef.current;
    if (!scroller || !trigger || !h1Ref1.current || !h1Ref2.current) return;

    // Initialize second text spans to be lower and hidden
    gsap.set(h1Ref2.current.children, { y: 40, opacity: 0 });
    gsap.set(h1Ref2.current, { opacity: 1 }); // container needs to be visible so children can show

    const tl = gsap.timeline({ paused: true, defaults: { duration: 0.4, ease: 'power2.out' } });

    // Move old text up and fade out one by one
    tl.to(h1Ref1.current.children, { y: -40, opacity: 0, stagger: 0.08 }, 0);

    // Move new text up and fade in one by one
    tl.to(h1Ref2.current.children, { y: 0, opacity: 1, stagger: 0.08 }, 0.1);

    const st = ScrollTrigger.create({
      trigger,
      scroller,
      start: '25% top',
      invalidateOnRefresh: true,
      onEnter: () => tl.play(),
      onLeaveBack: () => tl.reverse(),
    });

    return () => {
      st.kill();
      tl.kill();
    };
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target && window.lenis) {
      // Auto-play through the full pinned animation and reveal content
      const offset = href === '#course' ? 3000 : 0;
      window.lenis.scrollTo(target, {
        offset,
        duration: 2.2,
        easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    } else if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id='home'
      ref={sectionRef}
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: '#ffffff',
      }}
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        src='/Video/landing_page_background.mp4'
        autoPlay
        loop
        muted
        playsInline
        preload='auto'
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          opacity: 0.5,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* Scroll-exit wrapper */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        {/* Main Content Area */}
        <motion.div
          initial='hidden'
          animate='visible'
          transition={{ staggerChildren: STAGGER, delayChildren: 0.1 }}
          style={{
            paddingLeft: '240px' /* Left offset for vertical sidebar */,
            paddingRight: '80px',
            paddingTop: '100px' /* Top offset to clear header */,
            paddingBottom: '40px',
            maxWidth: '1350px',
          }}
        >
          {/* Main Headline Container — grid stacks both blocks in the same
              cell so the container height always matches the taller of the
              two, preventing the CTA buttons below from overlapping text
              that wraps to an extra line. */}
          <div style={{ position: 'relative', display: 'grid' }}>
            {/* ── TEXT BLOCK 1: Master Claude (default) ── */}
            <motion.h1
              ref={h1Ref1}
              variants={variants}
              transition={transition}
              style={{
                gridColumn: 1,
                gridRow: 1,
                margin: 0,
                lineHeight: 1.08,
                fontFamily: "'Outfit', sans-serif",
              }}
            >
              <motion.span
                variants={variants}
                transition={{ ...transition, duration: 0.8 }}
                style={{
                  display: 'block',
                  fontSize: 'clamp(52px, 6.5vw, 92px)',
                  fontWeight: 600,
                  color: '#DE896A', // Accent orange
                  letterSpacing: '-0.025em',
                }}
              >
                Master Claude
              </motion.span>
              <motion.span
                variants={variants}
                transition={{ ...transition, duration: 0.8, delay: STAGGER }}
                style={{
                  display: 'block',
                  fontSize: 'clamp(48px, 6vw, 86px)',
                  fontWeight: 400,
                  color: '#1a1a1a', // Black
                  letterSpacing: '-0.025em',
                  marginTop: '2px',
                }}
              >
                before your job demands it.
              </motion.span>
            </motion.h1>

            {/* ── TEXT BLOCK 2: Practical Training (current, swapped in on scroll) ── */}
            <motion.h1
              ref={h1Ref2}
              style={{
                gridColumn: 1,
                gridRow: 1,
                margin: 0,
                lineHeight: 1.08,
                fontFamily: "'Outfit', sans-serif",
                opacity: 0,
              }}
            >
              <span
                style={{
                  display: 'block',
                  fontSize: 'clamp(52px, 6.5vw, 92px)',
                  fontWeight: 600,
                  color: '#1a1a1a', // Black
                  letterSpacing: '-0.025em',
                }}
              >
                Practical training
              </span>
              <span
                style={{
                  display: 'block',
                  fontSize: 'clamp(48px, 6vw, 86px)',
                  fontWeight: 400,
                  color: '#1a1a1a', // Black
                  letterSpacing: '-0.025em',
                  marginTop: '2px',
                }}
              >
                designed for the modern workplace.
              </span>
            </motion.h1>
          </div>

          {/* Action Buttons */}
          <motion.div
            variants={variants}
            transition={{ ...transition, delay: STAGGER * 2 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginTop: '24px', // Reduced gap here
              flexWrap: 'wrap',
            }}
          >
            {/* Primary Black Button */}
            <a
              href='#course'
              onClick={e => handleLinkClick(e, '#course')}
              id='hero-cta-levels'
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                backgroundColor: '#DE896A', // Orange by default
                color: '#ffffff',
                padding: '14px 28px',
                borderRadius: '999px',
                fontSize: '15px',
                fontWeight: 500,
                textDecoration: 'none',
                boxShadow: '0 4px 18px rgba(0, 0, 0, 0.15)',
                transition: 'all 0.2s ease',
                border: 'none',
                fontFamily: "'Outfit', sans-serif",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = '#1a1a1a'; // Black on hover
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = '#DE896A'; // Back to orange
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <Monitor size={18} strokeWidth={2} />
              See the three levels
            </a>

            {/* Secondary Light Button */}
            <a
              href='#contact'
              onClick={e => handleLinkClick(e, '#contact')}
              id='hero-cta-talk'
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.75)',
                backdropFilter: 'blur(8px)',
                color: '#2d2d2d',
                padding: '14px 28px',
                borderRadius: '999px',
                fontSize: '15px',
                fontWeight: 500,
                textDecoration: 'none',
                border: '1px solid rgba(255, 255, 255, 0.8)',
                boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
                transition: 'all 0.2s ease',
                fontFamily: "'Outfit', sans-serif",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = '#1a1a1a';
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.75)';
                e.currentTarget.style.color = '#2d2d2d';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Talk to Us
            </a>
          </motion.div>

          {/* Bouncing Arrow Indicator */}
          <motion.div
            variants={variants}
            transition={{ ...transition, delay: STAGGER * 3 }}
            style={{ marginTop: '52px', display: 'flex', alignItems: 'center' }}
          >
            <a
              href='#course'
              onClick={e => handleLinkClick(e, '#course')}
              aria-label='Scroll down'
              style={{
                color: '#DE896A',
                display: 'inline-flex',
                animation: 'bounceDown 2s ease-in-out infinite',
              }}
            >
              <ArrowDown size={28} strokeWidth={1.8} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes bounceDown {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(8px);
          }
        }
      `}</style>
    </section>
  );
}
