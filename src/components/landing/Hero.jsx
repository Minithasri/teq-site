'use client';

import { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Monitor, ArrowDown } from 'lucide-react';

/**
 * Entrance animation variants — staggered reveal on initial page load.
 * When prefers-reduced-motion is active, only opacity is animated.
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
  const videoRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const variants = getVariants(shouldReduceMotion);

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
          opacity: 1,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* Main Content Area — orchestrated stagger entrance */}
      <motion.div
        initial='hidden'
        animate='visible'
        transition={{ staggerChildren: STAGGER, delayChildren: 0.1 }}
        style={{
          position: 'relative',
          zIndex: 2,
          paddingLeft: '240px' /* Left offset for vertical sidebar */,
          paddingRight: '80px',
          paddingTop: '100px' /* Top offset to clear header */,
          paddingBottom: '40px',
          maxWidth: '1350px',
        }}
      >
        {/* Main Headline */}
        <motion.h1
          variants={variants}
          transition={transition}
          style={{ margin: 0, lineHeight: 1.08, fontFamily: "'Outfit', sans-serif" }}
        >
          <motion.span
            variants={variants}
            transition={{ ...transition, duration: 0.8 }}
            style={{
              display: 'block',
              fontSize: 'clamp(52px, 6.5vw, 92px)',
              fontWeight: 500,
              color: '#DE896A',
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
              color: '#2a2d34',
              letterSpacing: '-0.025em',
              marginTop: '2px',
            }}
          >
            before your job demands it.
          </motion.span>
        </motion.h1>

        {/* Action Buttons */}
        <motion.div
          variants={variants}
          transition={{ ...transition, delay: STAGGER * 2 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginTop: '44px',
            flexWrap: 'wrap',
          }}
        >
          {/* Primary Coral Button */}
          <a
            href='#course'
            onClick={e => handleLinkClick(e, '#course')}
            id='hero-cta-levels'
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              backgroundColor: '#DE896A',
              color: '#ffffff',
              padding: '14px 28px',
              borderRadius: '999px',
              fontSize: '15px',
              fontWeight: 500,
              textDecoration: 'none',
              boxShadow: '0 4px 18px rgba(222, 130, 99, 0.35)',
              transition: 'all 0.2s ease',
              border: 'none',
              fontFamily: "'Outfit', sans-serif",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#cd7355';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = '#DE896A';
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
              e.currentTarget.style.backgroundColor = '#ffffff';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.75)';
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
