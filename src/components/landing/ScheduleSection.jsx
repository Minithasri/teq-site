'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ChevronRight } from 'lucide-react';

const courses = [
  {
    levelLabel: 'Level 01',
    title: 'Foundation',
    desc: 'For people who have used Claude casually, or not at all, and want to use it well at work.',
  },
  {
    levelLabel: 'Level 02',
    title: 'Applied',
    desc: 'For people already using Claude daily who want to build workflows their whole team can run.',
  },
  {
    levelLabel: 'Level 03',
    title: 'Architect',
    desc: 'For developers and technical professionals who want to build with Claude, not just work alongside it.',
  },
];

export default function ScheduleSection() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rowRefs = useRef([]);

  const wrapperRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const scroller = document.getElementById('main-scroll-container');
    if (!scroller) return;

    ScrollTrigger.defaults({ scroller });

    // Set initial states — whole wrapper wipes in from right, no y movement
    gsap.set(wrapperRef.current, { x: '100%' });
    gsap.set(leftRef.current, { opacity: 0, x: -60 });
    gsap.set(rightRef.current, { opacity: 0, x: 60 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        end: 'top 20%',
        scrub: 0.8,
      },
    });

    // Wrapper wipes in from right
    tl.to(wrapperRef.current, { x: '0%', ease: 'power3.inOut', duration: 0.4 }, 0);
    // Left content slides from left
    tl.to(leftRef.current, { opacity: 1, x: 0, ease: 'power2.out', duration: 0.3 }, 0.3);
    // Right content slides from right
    tl.to(rightRef.current, { opacity: 1, x: 0, ease: 'power2.out', duration: 0.3 }, 0.4);

    return () => {
      if (tl.scrollTrigger) tl.scrollTrigger.kill();
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative',
        width: '100%',
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

      {/* Coral Ribbon */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '200px',
          width: '16px',
          height: '100%',
          backgroundColor: '#DE896A',
          zIndex: 2,
        }}
      />

      {/* ── Content Wrapper — wipes in from the right ── */}
      <div
        ref={wrapperRef}
        style={{
          position: 'relative',
          width: 'calc(100% - 216px)',
          marginLeft: '216px',
          display: 'flex',
          padding: '120px 80px',
          backgroundColor: '#ffffff',
          willChange: 'transform',
        }}
      >
        {/* ── Left column ──────────────── */}
        <div ref={leftRef} style={{ width: '40%', paddingRight: '60px' }}>
          <h2
            style={{
              fontSize: '32px',
              fontWeight: 500,
              color: '#777777',
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              marginBottom: '0px',
            }}
          >
            Course Schedule
          </h2>
          <div
            style={{
              fontSize: '64px',
              fontWeight: 600,
              color: '#DE896A',
              lineHeight: 1,
              letterSpacing: '-0.02em',
              marginBottom: '32px',
            }}
          >
            2026
          </div>
          <p
            style={{
              fontSize: '18px',
              fontWeight: 600,
              color: '#1a1a1a',
              lineHeight: 1.4,
              marginBottom: '16px',
            }}
          >
            Three levels. One fee. You are placed, not left to guess.
          </p>
          <p
            style={{
              fontSize: '13px',
              fontWeight: 400,
              color: '#666666',
              lineHeight: 1.6,
              marginBottom: '40px',
            }}
          >
            100% live online training with hands-on labs, delivered via Zoom. Learn in interactive
            sessions and ask questions in real time.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
            <div
              style={{
                width: '32px',
                height: '32px',
                backgroundColor: '#DE896A',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ArrowRight size={16} color='#ffffff' />
            </div>
            <span style={{ fontSize: '12px', fontWeight: 600, color: '#1a1a1a' }}>
              Explore course Details
            </span>
          </div>
        </div>

        {/* ── Right column ──────────────── */}
        <div ref={rightRef} style={{ width: '60%' }}>
          {/* Header Row */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              borderBottom: '1px solid rgba(0,0,0,0.06)',
              paddingBottom: '12px',
              marginBottom: '12px',
            }}
          >
            <span
              style={{ fontSize: '10px', fontWeight: 600, color: '#999', letterSpacing: '0.1em' }}
            >
              COURSE
            </span>
            <span
              style={{ fontSize: '10px', fontWeight: 600, color: '#999', letterSpacing: '0.1em' }}
            >
              LEVEL
            </span>
          </div>

          {/* List */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {courses.map((course, idx) => (
              <div
                key={idx}
                ref={el => (rowRefs.current[idx] = el)}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  padding: '24px 0',
                  borderBottom: '1px solid rgba(0,0,0,0.06)',
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      marginBottom: '8px',
                    }}
                  >
                    <ChevronRight size={16} color='#DE896A' strokeWidth={3} />
                    <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#1a1a1a' }}>
                      {course.title}
                    </h3>
                  </div>
                  <p
                    style={{
                      fontSize: '13px',
                      color: '#666',
                      lineHeight: 1.5,
                      paddingLeft: '24px',
                      maxWidth: '380px',
                    }}
                  >
                    {course.desc}
                  </p>
                </div>
                <div style={{ fontSize: '12px', fontWeight: 600, color: '#DE896A' }}>
                  {course.levelLabel}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
