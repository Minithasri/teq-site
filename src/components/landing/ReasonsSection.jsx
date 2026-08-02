'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const reasons = [
  { num: '01', text: 'Assessment', frame: '/images/HomePage/landingPage/Frame 1566663920.png' },
  { num: '02', text: 'Get Trained', frame: '/images/HomePage/landingPage/Frame 1566663913.png' },
  { num: '03', text: 'Get Certified', frame: '/images/HomePage/landingPage/Frame 1566663914.png' },
  {
    num: '04',
    text: 'Placement Guarantee',
    frame: '/images/HomePage/landingPage/Frame 1566663864.png',
  },
];

export default function ReasonsSection() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const scroller = document.getElementById('main-scroll-container');
    if (!scroller) return;

    ScrollTrigger.defaults({ scroller });

    // Left text column slides in from the left before the section pins.
    gsap.set(leftRef.current, { opacity: 0, x: -60 });
    const introSt = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top 90%',
      end: 'top top',
      scrub: 1,
      animation: gsap.to(leftRef.current, { opacity: 1, x: 0, ease: 'none' }),
    });

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
      introSt.kill();
      st.kill();
    };
  }, []);

  return (
    <section
      id='blog'
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
        {/* ── Left column: text content ──────────────── */}
        <div
          ref={leftRef}
          style={{
            width: '50%',
            height: '100%',
            backgroundColor: '#F8F7F6',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingLeft: '60px',
            paddingRight: '40px',
          }}
        >
          {/* Heading */}
          <h2
            style={{
              fontSize: 'clamp(40px, 4.5vw, 56px)',
              fontWeight: 600,
              color: '#DE896A',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginBottom: '4px',
            }}
          >
            Four reasons
          </h2>
          <p
            style={{
              fontSize: '20px',
              fontWeight: 500,
              color: '#1a1a1a',
              letterSpacing: '-0.01em',
              marginBottom: '60px',
            }}
          >
            to learn here instead of online.
          </p>

          {/* List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {reasons.map((reason, idx) => {
              const isActive = activeIndex === idx;
              return (
                <div
                  key={reason.num}
                  style={{ display: 'flex', alignItems: 'center', gap: '16px', height: '32px' }}
                >
                  {isActive ? (
                    <>
                      <div
                        style={{
                          width: '32px',
                          height: '32px',
                          backgroundColor: '#DE896A',
                          borderRadius: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#ffffff',
                          fontSize: '13px',
                          fontWeight: 600,
                        }}
                      >
                        {reason.num}
                      </div>
                      <span
                        style={{
                          fontSize: '18px',
                          fontWeight: 600,
                          color: '#1a1a1a',
                          transition: 'color 0.3s',
                        }}
                      >
                        {reason.text}
                      </span>
                    </>
                  ) : (
                    <span
                      style={{
                        fontSize: '18px',
                        fontWeight: 500,
                        color: '#b0b0b0',
                        transition: 'color 0.3s',
                        paddingLeft: '48px', // Align with text that has the 32px box + 16px gap
                      }}
                    >
                      {reason.text}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Right panel: dynamic image block ──────────────── */}
        <div
          style={{
            width: '50%',
            height: '100%',
            backgroundColor: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Illustration frame — crossfades based on activeIndex */}
          <div
            style={{
              width: '400px',
              height: '400px',
              position: 'relative',
            }}
          >
            {reasons.map((reason, idx) => (
              <img
                key={reason.num}
                src={reason.frame}
                alt={reason.text}
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  opacity: activeIndex === idx ? 1 : 0,
                  transition: 'opacity 0.5s ease',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
