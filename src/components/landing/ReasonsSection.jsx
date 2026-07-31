'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const reasons = [
  { num: '01', text: 'One course, taught fully' },
  { num: '02', text: 'Assessed, not attended' },
  { num: '03', text: 'Placed at your real level' },
  { num: '04', text: 'Hiring is part of the job' },
];

export default function ReasonsSection() {
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
        // Calculate active index based on scroll progress (0 to 1)
        // We have 4 items, so indices 0, 1, 2, 3
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
          style={{
            width: '50%',
            height: '100%',
            backgroundColor: '#F8F7F6',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingLeft: '80px',
            paddingRight: '40px',
          }}
        >
          {/* Heading */}
          <h2
            style={{
              fontSize: 'clamp(40px, 4.5vw, 56px)',
              fontWeight: 600,
              color: '#de8263',
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
                          backgroundColor: '#de8263',
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
                          fontSize: '16px',
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
                        fontSize: '16px',
                        fontWeight: 400,
                        color: '#999999',
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
          {/* We will just change the color of the placeholder box based on activeIndex to simulate images */}
          <div
            style={{
              width: '400px',
              height: '400px',
              backgroundColor:
                activeIndex === 0
                  ? '#e0e0e0'
                  : activeIndex === 1
                    ? '#a0a0a0'
                    : activeIndex === 2
                      ? '#606060'
                      : '#303030',
              transition: 'background-color 0.5s ease',
            }}
          />
        </div>
      </div>
    </section>
  );
}
