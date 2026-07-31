'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const testimonials = [
  {
    text: "They didn't just hit the brief, they raised it. The project felt collaborative from start to finish, with clear updates, quick turns, and a final product that carried our brand further than we imagined.",
    name: 'Samuel Laronde',
    role: 'Marketing Lead',
    badge: 'LOGOS',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
  },
  {
    text: 'From kickoff to launch, the process was fast-moving but never chaotic. Create kept everyone in the loop, solved issues before they became problems, and shipped exactly what they said they would.',
    name: 'Matthew Parker',
    role: 'Head of Product',
    badge: 'REALTY',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
  },
  {
    text: "The course structure is phenomenal. You are forced to build things that actually matter. It's the best tech education I've experienced in a decade of working in software.",
    name: 'Sarah Jenkins',
    role: 'Senior Engineer',
    badge: 'FINTECH',
    avatar: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
  },
];

export default function TestimonialSection() {
  const sectionRef = useRef(null);
  const carouselRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const scroller = document.getElementById('main-scroll-container');
    if (!scroller) return;

    ScrollTrigger.defaults({ scroller });

    // The distance to scroll based on the width of the carousel minus the viewable area
    // A simple fixed value works well for 3 cards
    const TOTAL_SCROLL = 1500;

    const st = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top top',
      end: `+=${TOTAL_SCROLL}`,
      pin: true,
      pinType: 'transform',
      anticipatePin: 1,
      pinSpacing: true,
      invalidateOnRefresh: true,
      animation: gsap.to(carouselRef.current, {
        xPercent: -60, // Adjust based on how far we need to slide
        ease: 'none',
      }),
      scrub: 1,
    });

    return () => {
      st.kill();
    };
  }, []);

  return (
    <section
      id='testimonial'
      ref={sectionRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        backgroundColor: '#de8263',
        display: 'flex',
        fontFamily: "'Outfit', sans-serif",
        overflow: 'hidden', // prevent horizontal scrollbar
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
          zIndex: 10, // above horizontal scroll
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
          padding: '120px 80px',
        }}
      >
        {/* ── Left column: Text ──────────────── */}
        <div style={{ width: '40%', paddingRight: '40px', flexShrink: 0 }}>
          <h2
            style={{
              fontSize: '32px',
              fontWeight: 600,
              color: '#ffffff',
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              marginBottom: '24px',
              maxWidth: '300px',
            }}
          >
            What people say about learning here.
          </h2>
          <p
            style={{
              fontSize: '13px',
              fontWeight: 400,
              color: 'rgba(255,255,255,0.7)',
              lineHeight: 1.6,
              maxWidth: '280px',
            }}
          >
            The Claude Professional Program is new. These are graduates of our earlier data and
            cloud programs, speaking about the way we teach.
          </p>
        </div>

        {/* ── Right column: Horizontal Carousel ──────────────── */}
        <div style={{ flex: 1, position: 'relative' }}>
          <div
            ref={carouselRef}
            style={{
              display: 'flex',
              gap: '24px',
              position: 'absolute',
              top: '0',
              left: '0',
              height: '100%',
              paddingRight: '20vw', // Extra space at end
            }}
          >
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                style={{
                  width: '380px',
                  backgroundColor: '#ffffff',
                  borderRadius: '12px',
                  padding: '32px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                  flexShrink: 0,
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: '10px',
                      fontWeight: 600,
                      color: '#999',
                      marginBottom: '16px',
                    }}
                  >
                    September 2025
                  </div>
                  <p
                    style={{
                      fontSize: '15px',
                      color: '#444',
                      lineHeight: 1.6,
                      fontStyle: 'italic',
                    }}
                  >
                    "{t.text}"
                  </p>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: '32px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <img
                      src={t.avatar}
                      alt={t.name}
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                      }}
                    />
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: 600, color: '#1a1a1a' }}>
                        {t.name}
                      </div>
                      <div style={{ fontSize: '11px', color: '#777' }}>{t.role}</div>
                    </div>
                  </div>
                  <div
                    style={{
                      fontSize: '9px',
                      fontWeight: 700,
                      color: '#999',
                      letterSpacing: '0.05em',
                      border: '1px solid #eee',
                      padding: '4px 8px',
                      borderRadius: '4px',
                    }}
                  >
                    {t.badge}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
