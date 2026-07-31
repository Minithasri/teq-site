'use client';

import { useEffect, useRef } from 'react';
import { Monitor, ArrowDown } from 'lucide-react';

export default function Hero() {
  const videoRef = useRef(null);

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

      {/* Main Content Area */}
      <div
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
        {/* Main Headline - Exact Font Weight & Sizing matching reference image */}
        <h1
          style={{
            margin: 0,
            lineHeight: 1.08,
            fontFamily: "'Outfit', sans-serif",
          }}
        >
          <span
            style={{
              display: 'block',
              fontSize: 'clamp(52px, 6.5vw, 92px)',
              fontWeight: 500 /* Medium weight matching design */,
              color: '#DE896A' /* Coral brand tone */,
              letterSpacing: '-0.025em',
            }}
          >
            Master Claude
          </span>
          <span
            style={{
              display: 'block',
              fontSize: 'clamp(48px, 6vw, 86px)',
              fontWeight: 400 /* Regular weight matching design */,
              color: '#2a2d34' /* Dark charcoal tone */,
              letterSpacing: '-0.025em',
              marginTop: '2px',
            }}
          >
            before your job demands it.
          </span>
        </h1>

        {/* Action Buttons - Matching Pill Styling */}
        <div
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
        </div>

        {/* Bouncing Arrow Indicator */}
        <div
          style={{
            marginTop: '52px',
            display: 'flex',
            alignItems: 'center',
          }}
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
        </div>
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
