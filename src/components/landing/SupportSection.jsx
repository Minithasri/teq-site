'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckSquare, ArrowRight } from 'lucide-react';

const supportItems = [
  'A portfolio of the work you built during the program, ready to show.',
  'Mock interviews with practitioners, with written feedback.',
  'Resume and profile review against what employers actually screen for.',
  'Introductions to employers hiring for AI capable roles, including GWC Data AI, which has hired TeqCertify graduates.',
];

export default function SupportSection() {
  const sectionRef = useRef(null);
  const wrapperRef = useRef(null);
  const leftGraphicRef = useRef(null);
  const rightContentRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const scroller = document.getElementById('main-scroll-container');
    if (!scroller) return;

    ScrollTrigger.defaults({ scroller });

    // Wipe-in entry: wrapper from right, left graphic from left, right content from right
    gsap.set(wrapperRef.current, { x: '100%' });
    gsap.set(leftGraphicRef.current, { opacity: 0, x: -60 });
    gsap.set(rightContentRef.current, { opacity: 0, x: 60 });

    const entryTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        end: 'top 20%',
        scrub: 0.8,
      },
    });
    entryTl.to(wrapperRef.current, { x: '0%', ease: 'power3.inOut', duration: 0.4 }, 0);
    entryTl.to(
      leftGraphicRef.current,
      { opacity: 1, x: 0, ease: 'power2.out', duration: 0.3 },
      0.3
    );
    entryTl.to(
      rightContentRef.current,
      { opacity: 1, x: 0, ease: 'power2.out', duration: 0.3 },
      0.4
    );

    const TOTAL_SCROLL = 2400;
    const st = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top top',
      end: `+=${TOTAL_SCROLL}`,
      pin: true,
      pinType: 'transform',
      anticipatePin: 1,
      pinSpacing: true,
      invalidateOnRefresh: true,
      onUpdate: self => {
        let index = Math.floor(self.progress * 4);
        if (index > 3) index = 3;
        setActiveIndex(index);
      },
    });

    return () => {
      if (entryTl.scrollTrigger) entryTl.scrollTrigger.kill();
      entryTl.kill();
      st.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        backgroundColor: '#ffffff',
        display: 'flex',
        fontFamily: "'Outfit', sans-serif",
        overflow: 'hidden',
      }}
    >
      {/* Local Sidebar Background */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '200px',
          height: '100%',
          backgroundColor: '#ffffff',
          zIndex: 2,
          borderRight: '1px solid rgba(0,0,0,0.04)',
        }}
      />

      {/* ── Content Wrapper — wipes in from the right ── */}
      <div
        ref={wrapperRef}
        style={{
          position: 'relative',
          width: 'calc(100% - 200px)',
          height: '100%',
          marginLeft: '200px',
          display: 'flex',
          backgroundColor: '#ffffff',
          willChange: 'transform',
        }}
      >
        {/* ── Left column: Graphic ── */}
        <div
          ref={leftGraphicRef}
          style={{
            width: '50%',
            height: '100%',
            backgroundColor: '#DE896A',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '80px',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              maxWidth: '400px',
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
            }}
          >
            <video
              src='/Video/Featured Testimonial.webm'
              autoPlay
              loop
              muted
              playsInline
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* ── Right column: Text ── */}
        <div
          ref={rightContentRef}
          style={{
            width: '50%',
            height: '100%',
            backgroundColor: '#ffffff',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingLeft: '60px',
            paddingRight: '100px',
          }}
        >
          <h2
            style={{
              fontSize: '48px',
              fontWeight: 600,
              color: '#1a1a1a',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginBottom: '24px',
              maxWidth: '380px',
            }}
          >
            We do not stop at the certificate.
          </h2>
          <p
            style={{
              fontSize: '15px',
              fontWeight: 400,
              color: '#666',
              lineHeight: 1.6,
              marginBottom: '40px',
              maxWidth: '420px',
            }}
          >
            Training that ends at the exam is only half the job. Every person who completes a level
            gets structured support to turn the skill into an offer.
          </p>

          {/* Dynamic checkmark item — cycles on scroll, slides in from left (x only) */}
          <div style={{ height: '80px', position: 'relative' }}>
            {supportItems.map((item, idx) => (
              <div
                key={idx}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px',
                  opacity: activeIndex === idx ? 1 : 0,
                  transform: activeIndex === idx ? 'translateX(0)' : 'translateX(-10px)',
                  transition: 'all 0.4s ease',
                  pointerEvents: activeIndex === idx ? 'auto' : 'none',
                }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    border: '1.5px solid #DE896A',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <CheckSquare size={16} color='#DE896A' />
                </div>
                <p style={{ fontSize: '15px', color: '#444', lineHeight: 1.5, maxWidth: '340px' }}>
                  {item}
                </p>
              </div>
            ))}
          </div>

          <button
            style={{
              marginTop: '20px',
              backgroundColor: '#DE896A',
              color: '#ffffff',
              padding: '16px 24px',
              borderRadius: '6px',
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              width: 'fit-content',
            }}
          >
            WRITE A REVIEW <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
