'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, LayoutGrid, Lock, Package, Settings, ShieldCheck } from 'lucide-react';
import { useCallback, useEffect, useRef } from 'react';

const featuresList = [
  {
    icon: ShieldCheck,
    title: 'Earn more',
    desc: 'Anyone can use AI. High-value professionals solve real business problems by building reliable, repeatable AI workflows.',
  },
  {
    icon: Lock,
    title: 'Stand out',
    desc: 'Anyone can claim "AI proficient." A graded assessment, recognized certification, and real portfolios prove your skills.',
  },
  {
    icon: Package,
    title: 'Build faster',
    desc: 'Learn Claude Code, the Claude API, and Model Context Protocol to build AI powered tools, not just use them.',
  },
  {
    icon: Settings,
    title: 'Learn in a room',
    desc: 'Videos teach concepts. Instructors improve your thinking with real feedback, correcting, and hands-on guidance.',
  },
];

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
  const featuresWrapperRef = useRef(null);
  const featuresLeftContentRef = useRef(null);
  const featuresLeftBgRef = useRef(null);
  const featureItemRefs = useRef([]);
  const clickedRef = useRef(false);
  const revealedRef = useRef(false);

  // Refs for the new wipe transition panels
  const wipeWhiteRef = useRef(null);
  const wipeOrangeRef = useRef(null);
  const wipeGrayRef = useRef(null);

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
     *  3000 – 3500px → Coral wipe sweeps in from the right, white wipe follows
     *                   close behind it (also from the right), so a coral
     *                   edge is visible leading the white cover just before
     *                   Features appears
     */

    const TOTAL_SCROLL = 5000;
    const HERO_SCROLL_DELAY = 1500; // Wait 150vh before CourseSection animates so Hero text swaps

    gsap.set(featuresWrapperRef.current, { clipPath: 'inset(0% 0% 0% 100%)', x: '0%' }); // White wipe off-screen right
    gsap.set(featuresLeftContentRef.current, { opacity: 1, x: 0 });
    featureItemRefs.current.forEach(feat => {
      if (feat) gsap.set(feat, { opacity: 1, x: 0 });
    });
    gsap.set([wipeWhiteRef.current, wipeOrangeRef.current, wipeGrayRef.current], {
      clipPath: 'inset(0% 0% 0% 100%)',
    });

    gsap.set(coralBlockRef.current, { x: '-100%' }); // hidden under sidebar
    gsap.set(leftContentRef.current, { opacity: 0 }); // text hidden, NO y offset
    cardRefs.current.forEach(c => {
      if (c) gsap.set(c, { opacity: 0 }); // fade only, no slide
    });

    const bgRef = featuresLeftBgRef; // Reusing a ref variable for the new full-width white bg
    gsap.set(bgRef.current, { opacity: 0 });

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
      },
    });

    tlRef.current = tl;

    // --- Phase 0: Dummy wait time so the fixed Hero section can do its text swap scroll
    tl.to({}, { duration: 0.2 });

    // --- Phase 1: Coral slides in from left (from under sidebar to cover left half)
    tl.to(coralBlockRef.current, {
      x: '0%',
      duration: 0.2,
      ease: 'power2.out',
    });

    // Make background white instantly once coral covers left side
    tl.to(bgRef.current, { opacity: 1, duration: 0 });

    // --- Phase 2: Coral glides to right half
    // --- Phase 3: Left text reveals AT THE SAME TIME coral slides right — no blank gap!
    tl.to(coralBlockRef.current, {
      x: '100%',
      duration: 0.2,
      ease: 'power3.inOut',
    });
    tl.to(
      leftContentRef.current,
      {
        opacity: 1,
        duration: 0.2,
        ease: 'power2.out',
      },
      '<'
    ); // '<' = starts at same time as coral slide right

    // --- Phase 4: Cards appear one by one immediately after text is visible
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
        idx === 0 ? '>-0.05' : '-=0.05' // stagger cards slightly
      );
    });

    // --- Phase 5: Cinematic Wipe Transition
    // The existing CourseSection gradually disappears naturally behind these moving panels.
    const WIPE_DUR = 0.45;
    const STAGGER = 0.08;

    tl.to(
      wipeWhiteRef.current,
      { clipPath: 'inset(0% 0% 0% 0%)', duration: WIPE_DUR, ease: 'power2.inOut' },
      'wipe'
    );
    tl.to(
      wipeOrangeRef.current,
      { clipPath: 'inset(0% 0% 0% 0%)', duration: WIPE_DUR, ease: 'power2.inOut' },
      `wipe+=${STAGGER}`
    );
    tl.to(
      wipeGrayRef.current,
      { clipPath: 'inset(0% 0% 0% 0%)', duration: WIPE_DUR, ease: 'power2.inOut' },
      `wipe+=${STAGGER * 2}`
    );
    tl.to(
      featuresWrapperRef.current,
      { clipPath: 'inset(0% 0% 0% 0%)', duration: WIPE_DUR, ease: 'power2.inOut' },
      `wipe+=${STAGGER * 3}`
    );

    return () => {
      // Only kill this component's own ScrollTrigger — not all of them.
      // Killing getAll() would destroy the HomeClient transition zone ST.
      if (tl.scrollTrigger) tl.scrollTrigger.kill();
      tl.kill();
      ScrollTrigger.defaults({ scroller: undefined, pinType: undefined });
    };
  }, []);

  // Called by nav link — snaps to the "fully revealed" state of the course section:
  // coral on right panel, left text visible, all 4 cards visible, wipe not started.
  // Uses timeline's own API so GSAP scrub remains fully intact for normal scrolling.
  const revealFromNav = useCallback(() => {
    const tl = tlRef.current;
    if (tl) {
      // 2800 / 3500 ≈ 0.8 → all content visible, white wipe hasn't fired yet
      const TARGET_PROGRESS = 2800 / 3500;
      // Snap timeline to this progress instantly (suppressEvents = true)
      // GSAP scrub will see scroll position also at 80% and won't try to re-animate
      tl.progress(TARGET_PROGRESS, true);
    }
    // Mark as revealed — click on the section itself won't re-run revealAll
    revealedRef.current = true;
    clickedRef.current = true;
  }, []);

  // Called on click — only runs once (first click)
  const revealAll = useCallback(() => {
    if (revealedRef.current) return;
    revealedRef.current = true;
    clickedRef.current = true;

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

  // Nav dispatches 'course:reveal' — use the always-run version
  useEffect(() => {
    window.addEventListener('course:reveal', revealFromNav);
    return () => window.removeEventListener('course:reveal', revealFromNav);
  }, [revealFromNav]);

  const handleClick = useCallback(() => {
    revealAll();
  }, [revealAll]);

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
        backgroundColor: 'transparent',
        fontFamily: "'Outfit', sans-serif",
        cursor: 'pointer',
      }}
    >
      {/* ── Main Background ──────────────────────────────────────── */}
      {/* Starts transparent so we see the pinned Hero underneath. Fades in to #F8F7F6
          behind the coral block once it slides in. */}
      <div
        ref={featuresLeftBgRef} // Using existing ref for convenience
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: '#F8F7F6',
          zIndex: 1,
        }}
      >
        {/* Ensures the 200px sidebar area stays completely white */}
        <div style={{ width: '200px', height: '100%', backgroundColor: '#ffffff' }} />
      </div>

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
          paddingLeft: '15px', // Coral strip framing the left side of the grid
          zIndex: 3, // above the coral block
        }}
      >
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
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
                  width: '100%',
                  borderTop: '1px solid #ffffff',
                  borderBottom: idx === courseDetails.length - 1 ? '1px solid #ffffff' : 'none',
                }}
              >
                {/* Label box */}
                <div
                  style={{
                    width: isEven ? '200px' : '270px', // Staggers the internal vertical boundary
                    backgroundColor: isEven ? '#ffffff' : '#DE896A',
                    padding: '22px 28px', // Uniform padding
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '15px',
                    fontWeight: 600,
                    color: isEven ? '#DE896A' : '#111111',
                    flexShrink: 0,
                    letterSpacing: '0.01em',
                    borderRight: '1px solid #ffffff', // Crisp white vertical grid line
                  }}
                >
                  {item.label}
                </div>

                {/* Value box */}
                <div
                  style={{
                    flex: 1, // Takes remaining width to the end of screen
                    backgroundColor: isEven ? '#DE896A' : '#ffffff',
                    padding: '22px 28px', // Uniform padding
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '15px',
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

      {/* ── Cinematic wipe panels (Phase 5) ─────────────────────────────────
          These sweep in from the right, one after another, just before the
          Features layer covers the section. GSAP animates their clipPath
          from fully hidden to fully visible via refs set below. ──────────── */}
      <div
        ref={wipeWhiteRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100%',
          backgroundColor: '#ffffff',
          zIndex: 7,
          clipPath: 'inset(0% 0% 0% 100%)',
          willChange: 'clip-path',
        }}
      />
      <div
        ref={wipeOrangeRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100%',
          backgroundColor: '#DE896A',
          zIndex: 8,
          clipPath: 'inset(0% 0% 0% 100%)',
          willChange: 'clip-path',
        }}
      />
      <div
        ref={wipeGrayRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100%',
          backgroundColor: '#8a8a8a',
          zIndex: 9,
          clipPath: 'inset(0% 0% 0% 100%)',
          willChange: 'clip-path',
        }}
      />

      {/* ── Features Component (Integrated to avoid scrolling) ──────────────────────── */}
      <div
        ref={featuresWrapperRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100%',
          backgroundColor: '#F8F7F6', // The background color that comes right to left
          zIndex: 10,
          willChange: 'transform',
          display: 'flex',
        }}
      >
        {/* Ensures the 200px sidebar area stays completely white */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '200px',
            height: '100%',
            backgroundColor: '#ffffff',
            zIndex: 1,
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '200px',
            width: '80px',
            height: '100%',
            backgroundColor: '#F8F7F6',
            borderRight: '1px solid rgba(0,0,0,0.04)',
            zIndex: 1,
          }}
        />
        <div
          style={{
            position: 'relative',
            width: 'calc(100% - 280px)',
            height: '100%',
            marginLeft: '280px',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '50%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              paddingLeft: '60px',
              paddingRight: '60px',
              zIndex: 1,
            }}
          >
            <div ref={featuresLeftContentRef}>
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
                  marginBottom: '20px',
                }}
              >
                <LayoutGrid size={12} color='#555' />
                SECURITY
              </div>
              <h2
                style={{
                  fontSize: 'clamp(40px, 4.5vw, 64px)',
                  fontWeight: 400,
                  color: '#1a1a1a',
                  lineHeight: 1.1,
                  letterSpacing: '-0.03em',
                  marginBottom: '40px',
                  maxWidth: '420px',
                }}
              >
                Why Learn
                <br />
                Claude <span style={{ fontWeight: 600 }}>with</span>
                <br />
                <span style={{ fontWeight: 700 }}>TeqCertify?</span>
              </h2>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <button
                  style={{
                    backgroundColor: '#DE896A',
                    color: '#ffffff',
                    padding: '14px 28px',
                    borderRadius: '6px',
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(222,130,99,0.3)',
                  }}
                >
                  Get the course
                </button>
                <button
                  style={{
                    backgroundColor: '#b0b0b0',
                    color: '#ffffff',
                    width: '42px',
                    height: '42px',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
          </div>

          <div
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '50%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '40px 60px',
              zIndex: 2,
            }}
          >
            <div
              style={{
                width: '100%',
                maxWidth: '480px',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
              }}
            >
              {featuresList.map((item, idx) => (
                <div
                  key={item.title}
                  ref={el => {
                    featureItemRefs.current[idx] = el;
                  }}
                  style={{ display: 'flex', flexDirection: 'column' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                    <div style={{ width: '40px', height: '2px', backgroundColor: '#DE896A' }} />
                    <div style={{ flex: 1, height: '1px', backgroundColor: 'rgba(0,0,0,0.06)' }} />
                  </div>
                  <div style={{ paddingLeft: '4px' }}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        marginBottom: '8px',
                      }}
                    >
                      <item.icon size={20} color='#666' strokeWidth={1.5} />
                      <h3
                        style={{
                          fontSize: '16px',
                          fontWeight: 600,
                          color: '#1a1a1a',
                          letterSpacing: '-0.01em',
                        }}
                      >
                        {item.title}
                      </h3>
                    </div>
                    <p
                      style={{
                        fontSize: '13px',
                        color: '#666',
                        lineHeight: 1.6,
                        paddingLeft: '32px',
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
