'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LayoutGrid, ExternalLink, ShieldCheck, Lock, Package, Settings } from 'lucide-react';

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

export default function Features() {
  const sectionRef = useRef(null);
  const leftContentRef = useRef(null);
  const featureRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const scroller = document.getElementById('main-scroll-container');
    if (!scroller) return;

    ScrollTrigger.defaults({ scroller });

    const TOTAL_SCROLL = 2400; // Restore original scroll distance

    // Set initial states for features only
    featureRefs.current.forEach(feat => {
      if (feat) gsap.set(feat, { opacity: 0, x: -60 });
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

    // Stagger features in right side
    featureRefs.current.forEach((feat, idx) => {
      if (!feat) return;
      tl.to(
        feat,
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power2.out',
        },
        idx === 0 ? '+=0.2' : '+=0.2'
      );
    });

    return () => {
      // Only kill this component's own ST, not all of them globally.
      if (tl.scrollTrigger) tl.scrollTrigger.kill();
      tl.kill();
    };
  }, []);

  return (
    <section
      id='about'
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
      {/* ── Small section/strip after menu ───────────────────────────────── */}
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

      {/* ── Main Content Wrapper (starts after 200px menu + 80px small section) ── */}
      <div
        style={{
          position: 'relative',
          width: 'calc(100% - 280px)',
          height: '100%',
          marginLeft: '280px',
        }}
      >
        {/* ── Left column: text content ─────────────────────────────────────── */}
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
          <div ref={leftContentRef}>
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
                marginBottom: '20px',
              }}
            >
              <LayoutGrid size={12} color='#555' />
              SECURITY
            </div>

            {/* Heading */}
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

            {/* Buttons */}
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

        {/* ── Right panel: staggered features ───────────────────────────────── */}
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
                  featureRefs.current[idx] = el;
                }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Two-part Divider line */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '16px',
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
                      height: '1px',
                      backgroundColor: 'rgba(0,0,0,0.06)',
                    }}
                  />
                </div>

                {/* Feature Content */}
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
                      paddingLeft: '32px', // indent to align with text
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
    </section>
  );
}
