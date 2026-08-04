'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
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
  const wrapperRef = useRef(null); // The whole content wrapper — wipes in from right
  const leftRef = useRef(null); // Left column — slides in from left
  const rightRef = useRef(null); // Right column — slides in from right
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const scroller = document.getElementById('main-scroll-container');
    if (!scroller) return;

    ScrollTrigger.defaults({ scroller });

    const TOTAL_SCROLL = 2400; // 4 steps

    // Set initial states — content wrapper starts off-screen to the right (wipe-in effect)
    gsap.set(wrapperRef.current, { x: '100%' });
    gsap.set(leftRef.current, { opacity: 0, x: -60 });
    gsap.set(rightRef.current, { opacity: 0, x: 60 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: `+=${TOTAL_SCROLL}`,
        pin: true,
        pinType: 'transform',
        scrub: 0.8,
        anticipatePin: 1,
        pinSpacing: true,
        invalidateOnRefresh: true,
        onUpdate: self => {
          // Activate reasons list items based on scroll progress (after wipe is done)
          const adjustedProgress = Math.max(0, (self.progress - 0.3) / 0.7);
          let index = Math.floor(adjustedProgress * 4);
          if (index > 3) index = 3;
          setActiveIndex(index);
        },
      },
    });

    // Phase 1: Wrapper wipes in from right (fast)
    tl.to(wrapperRef.current, {
      x: '0%',
      duration: 0.15,
      ease: 'power3.inOut',
    });

    // Phase 2: Left content slides in from left immediately
    tl.to(leftRef.current, {
      opacity: 1,
      x: 0,
      duration: 0.12,
      ease: 'power2.out',
    });

    // Phase 3: Right content slides in from right immediately
    tl.to(
      rightRef.current,
      {
        opacity: 1,
        x: 0,
        duration: 0.12,
        ease: 'power2.out',
      },
      '-=0.08'
    );

    // Phase 4: Pause here while user scrolls through the 4 reasons
    // (The onUpdate callback above handles switching the active index)
    tl.to({}, { duration: 0.73 }); // Remaining scroll budget for the reasons steps

    return () => {
      if (tl.scrollTrigger) tl.scrollTrigger.kill();
      tl.kill();
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
          zIndex: 1,
          borderRight: '1px solid rgba(0,0,0,0.04)',
        }}
      />

      {/* ── Content Wrapper — wipes in from the right ──────────────── */}
      <div
        ref={wrapperRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: '#ffffff',
          zIndex: 2,
          willChange: 'transform',
          display: 'flex',
        }}
      >
        {/* Sidebar background inside the wrapper */}
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
                          paddingLeft: '48px',
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
            ref={rightRef}
            style={{
              width: '50%',
              height: '100%',
              backgroundColor: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                position: 'relative',
                width: '400px',
                height: '400px',
              }}
            >
              {reasons.map((reason, idx) => (
                <Image
                  key={reason.num}
                  src={reason.frame}
                  alt={reason.text}
                  fill
                  style={{
                    objectFit: 'contain',
                    opacity: activeIndex === idx ? 1 : 0,
                    transition: 'opacity 0.5s ease',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
