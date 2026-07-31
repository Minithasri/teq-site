'use client';

import React, { useEffect, useRef, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LayoutGrid } from 'lucide-react';

const courseDetails = [
  { label: 'Program', value: 'The Claude Professional Program' },
  { label: 'Levels', value: 'Foundation, Applied, Architect' },
  { label: 'Format', value: 'In person, cohort based' },
  { label: 'Location', value: 'Kumudepalli, Moranapalli, TN 635130' },
];

export default function CourseSection() {
  const sectionRef = useRef(null);
  const coralBlockRef = useRef(null);
  const leftContentRef = useRef(null);
  const cardRefs = useRef([]);
  const tlRef = useRef(null);
  const wipeRef = useRef(null);
  const clickedRef = useRef(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const scroller = document.getElementById('main-scroll-container');
    if (!scroller) return;

    ScrollTrigger.defaults({
      scroller,
      pinType: 'transform',
    });

    /*
     * SCROLL ANIMATION (matching Figma design):
     *
     * Total scroll height pinned: 3500px
     *
     *  0  –  600px  → Coral slides in from LEFT to cover left column
     *  600 – 1200px → Coral slides RIGHT to right panel position (left text reveals)
     *  1200 – 1600px → Card 1 (Program) fades in
     *  1600 – 2000px → Card 2 (Levels) fades in
     *  2000 – 2400px → Card 3 (Format) fades in
     *  2400 – 3000px → Card 4 (Location) fades in
     *  3000 – 3500px → White screen wipes from left to right covering everything
     */

    const TOTAL_SCROLL = 3500;

    // Set initial states
    gsap.set(wipeRef.current, { scaleX: 0, transformOrigin: 'left' });
    gsap.set(coralBlockRef.current, { x: '-100%' }); // hidden under sidebar
    gsap.set(leftContentRef.current, { opacity: 0, y: 30 }); // text hidden
    cardRefs.current.forEach(c => {
      if (c) gsap.set(c, { opacity: 0, y: 24 });
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: `+=${TOTAL_SCROLL}`,
        pin: true,
        pinType: 'transform',
        scrub: 1.6,
        anticipatePin: 1,
        pinSpacing: true,
        invalidateOnRefresh: true,
      },
    });

    tlRef.current = tl;

    // --- Phase 1: Coral slides in from left (from under sidebar to cover left half)
    tl.to(coralBlockRef.current, {
      x: '0%',
      duration: 0.2,
      ease: 'power2.out',
    });

    // --- Phase 2: Coral glides to right half
    tl.to(coralBlockRef.current, {
      x: '100%', // Moves by its own width (which will be 50% of the wrapper)
      duration: 0.2,
      ease: 'power3.inOut',
    });

    // --- Phase 3: Reveal left text AFTER coral has moved to the right
    tl.to(leftContentRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.15,
      ease: 'power2.out',
    });

    // --- Phase 4: Cards appear one by one
    const cardTimes = [0.65, 0.75, 0.85, 0.95]; // fractions of timeline

    cardRefs.current.forEach((card, idx) => {
      if (!card) return;
      tl.to(
        card,
        {
          opacity: 1,
          y: 0,
          duration: 0.1,
          ease: 'power2.out',
        },
        cardTimes[idx]
      );
    });

    // --- Phase 5: White wipe from left to right covering the whole section
    tl.to(wipeRef.current, {
      scaleX: 1,
      duration: 0.2,
      ease: 'power2.inOut',
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
      ScrollTrigger.defaults({ scroller: undefined, pinType: undefined });
    };
  }, []);

  const handleClick = useCallback(() => {
    if (clickedRef.current) return;
    clickedRef.current = true;

    // Instantly reveal everything by animating directly (no scroll needed)
    gsap.to(coralBlockRef.current, { x: '100%', duration: 0.5, ease: 'power3.inOut' });
    gsap.to(leftContentRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.4,
      ease: 'power2.out',
      delay: 0.3,
    });
    cardRefs.current.forEach((card, idx) => {
      if (!card) return;
      gsap.to(card, {
        opacity: 1,
        y: 0,
        duration: 0.35,
        ease: 'power2.out',
        delay: 0.5 + idx * 0.1,
      });
    });
  }, []);

  return (
    <section
      id='course'
      ref={sectionRef}
      onClick={handleClick}
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        backgroundColor: '#F8F7F6',
        fontFamily: "'Outfit', sans-serif",
        cursor: 'pointer',
      }}
    >
      {/* ── Local Sidebar Background ──────────────────────────────────────── */}
      {/* This provides the white background for the menu when the coral block is not covering it */}
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

      {/* ── Coral sliding block ───────────────────────────────────────────── */}
      {/* Starts hidden at x: -50vw (off-screen left). 
          Slides in to x: 0% to cover the left 50vw (including the menu area).
          Glides to x: 50vw to cover the right 50vw. */}
      <div
        ref={coralBlockRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '50vw',
          height: '100%',
          backgroundColor: '#DE896A',
          zIndex: 2,
          willChange: 'transform',
        }}
      />

      {/* ── Left column: text content ─────────────────────────────────────── */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '200px',
          width: 'calc(50vw - 200px)',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingLeft: '60px',
          paddingRight: '60px',
          zIndex: 1,
        }}
      >
        <div ref={leftContentRef} style={{ opacity: 0 }}>
          {/* Label */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.12em',
              color: '#555',
              textTransform: 'uppercase',
              marginBottom: '14px',
            }}
          >
            <LayoutGrid size={12} color='#DE896A' />
            WHAT IS TEQCERTIFY
          </div>

          {/* Divider */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '28px',
            }}
          >
            <div
              style={{
                width: '40px',
                height: '2px',
                backgroundColor: '#DE896A',
              }}
            />
            <div
              style={{
                flex: 1,
                maxWidth: '240px',
                height: '1px',
                backgroundColor: 'rgba(0,0,0,0.08)',
              }}
            />
          </div>

          {/* Heading */}
          <h2
            style={{
              fontSize: 'clamp(30px, 3.4vw, 48px)',
              fontWeight: 400,
              color: '#DE896A',
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              marginBottom: '20px',
              maxWidth: '420px',
            }}
          >
            A training institute that teaches one thing, properly.
          </h2>

          {/* Body */}
          <p
            style={{
              fontSize: 'clamp(14px, 1.1vw, 16px)',
              fontWeight: 400,
              color: '#777',
              lineHeight: 1.75,
              maxWidth: '400px',
            }}
          >
            TeqCertify is a professional training institute in Tamil Nadu. Since 2022 we have
            trained more than 1,200 people in data and cloud roles, and placed them in real jobs.
          </p>
        </div>
      </div>

      {/* ── Right panel: exact design matching image ──────────────────────── */}
      {/* The coral block will glide exactly under this area */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '50vw',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center', // Centers the grid horizontally inside the right panel
          padding: '0 16px',
          zIndex: 3, // above the coral block
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: '620px', // Constrains the grid width so it sits nicely on the coral background
            display: 'flex',
            flexDirection: 'column', // coral gap between rows
          }}
        >
          {courseDetails.map((item, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={item.label}
                ref={el => {
                  cardRefs.current[idx] = el;
                }}
                style={{
                  display: 'flex',
                  alignItems: 'stretch',
                  border: '1px solid #ffffff', // white border around the content box
                  backgroundColor: '#ffffff', // for the vertical white grid line
                  // gap: '1px', // width of the vertical white grid line
                }}
              >
                {/* Label box */}
                <div
                  style={{
                    width: isEven ? '180px' : '260px', // Staggers the internal boundary!
                    backgroundColor: isEven ? '#ffffff' : '#DE896A',
                    padding: '24px 32px', // Uniform padding keeps left text vertically aligned
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: isEven ? '#DE896A' : '#111111',
                    flexShrink: 0,
                    letterSpacing: '0.02em',
                  }}
                >
                  {item.label}
                </div>

                {/* Value box */}
                <div
                  style={{
                    flex: 1, // Takes remaining width
                    backgroundColor: isEven ? '#DE896A' : '#ffffff',
                    padding: '24px 32px', // Uniform padding keeps right text aligned relative to the internal boundary
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#111111',
                    letterSpacing: '0.01em',
                  }}
                >
                  {item.value}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Final Wipe Screen ───────────────────────────────────────────── */}
      {/* This wipes from left to right at the end of the pinned section, making a seamless transition to the next white section. */}
      <div
        ref={wipeRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100%',
          backgroundColor: '#ffffff',
          zIndex: 10,
          willChange: 'transform',
        }}
      />
    </section>
  );
}
