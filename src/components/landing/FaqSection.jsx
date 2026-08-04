'use client';

import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'Five questions will come here and make sure to be free',
    a: 'Here is the answer to the first question. It provides clarity on the topic mentioned.',
  },
  {
    q: 'Five questions will come here and make sure to be free',
    a: 'Here is the answer to the second question. It provides clarity on the topic mentioned.',
  },
  {
    q: 'Five questions will come here and make sure to be free',
    a: 'Here is the answer to the third question. It provides clarity on the topic mentioned.',
  },
  {
    q: 'Five questions will come here and make sure to be free',
    a: 'Here is the answer to the fourth question. It provides clarity on the topic mentioned.',
  },
  {
    q: 'Five questions will come here and make sure to be free',
    a: 'Here is the answer to the fifth question. It provides clarity on the topic mentioned.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const sectionRef = useRef(null);
  const wrapperRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const toggle = idx => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const scroller = document.getElementById('main-scroll-container');
    if (!scroller) return;

    ScrollTrigger.defaults({ scroller });

    // Wipe-in: wrapper from right, left from left, right from right — no y movement
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

    tl.to(wrapperRef.current, { x: '0%', ease: 'power3.inOut', duration: 0.4 }, 0);
    tl.to(leftRef.current, { opacity: 1, x: 0, ease: 'power2.out', duration: 0.3 }, 0.3);
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
          alignItems: 'flex-start',
          padding: '100px 80px',
          backgroundColor: '#ffffff',
          willChange: 'transform',
        }}
      >
        {/* ── Left column ── */}
        <div ref={leftRef} style={{ width: '40%', paddingRight: '40px' }}>
          <h2
            style={{
              fontSize: '38px',
              fontWeight: 600,
              color: '#DE896A',
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              margin: '0 0 16px 0',
            }}
          >
            Clearing doubts and concerns
          </h2>
          <p
            style={{
              fontSize: '15px',
              fontWeight: 400,
              color: '#777',
              lineHeight: 1.6,
              display: 'flex',
              gap: '8px',
            }}
          >
            <span style={{ color: '#ccc' }}>——</span>
            Explore the most common questions about working with Claude, all in one place.
          </p>
        </div>

        {/* ── Right column ── */}
        <div ref={rightRef} style={{ width: '60%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  onClick={() => toggle(idx)}
                  style={{
                    backgroundColor: idx === 0 ? 'transparent' : '#F7F6F5',
                    borderRadius: idx === 0 ? 0 : '10px',
                    borderBottom: idx === 0 ? '1px solid rgba(0,0,0,0.08)' : 'none',
                    padding: '20px 24px',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span style={{ fontSize: '15px', fontWeight: 500, color: '#444' }}>
                      {faq.q}
                    </span>
                    {isOpen ? (
                      <Minus size={20} color='#DE896A' strokeWidth={1.5} />
                    ) : (
                      <Plus size={20} color='#DE896A' strokeWidth={1.5} />
                    )}
                  </div>
                  {isOpen && (
                    <div
                      style={{
                        marginTop: '16px',
                        fontSize: '14px',
                        color: '#666',
                        lineHeight: 1.6,
                      }}
                    >
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
