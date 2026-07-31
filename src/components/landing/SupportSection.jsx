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
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const scroller = document.getElementById('main-scroll-container');
    if (!scroller) return;

    ScrollTrigger.defaults({ scroller });

    const TOTAL_SCROLL = 2400; // 4 steps

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
        const progress = self.progress;
        let index = Math.floor(progress * 4);
        if (index > 3) index = 3;
        setActiveIndex(index);
      },
    });

    return () => {
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
          zIndex: 1,
          borderRight: '1px solid rgba(0,0,0,0.04)',
        }}
      />

      {/* ── Content Wrapper ──────────────── */}
      <div
        style={{
          position: 'relative',
          width: 'calc(100% - 200px)',
          height: '100%',
          marginLeft: '200px',
          display: 'flex',
        }}
      >
        {/* ── Left column: Graphic ──────────────── */}
        <div
          style={{
            width: '50%',
            height: '100%',
            backgroundColor: '#de8263',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '80px',
          }}
        >
          {/* Featured Graphic */}
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
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
        </div>

        {/* ── Right column: Text ──────────────── */}
        <div
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

          {/* Dynamic checkmark item */}
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
                  transform: activeIndex === idx ? 'translateY(0)' : 'translateY(10px)',
                  transition: 'all 0.4s ease',
                  pointerEvents: activeIndex === idx ? 'auto' : 'none',
                }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    border: '1.5px solid #de8263',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <CheckSquare size={16} color='#de8263' />
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
              backgroundColor: '#de8263',
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
