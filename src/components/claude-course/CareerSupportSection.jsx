'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const CARD_SRC = encodeURI('/images/ContactUs/Frame 1566663879.png');

export default function CareerSupportSection() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  // Image slides in from the left, text slides in from the right — meeting
  // in the center. Plays once per viewport entry, reverses on scroll-up,
  // and replays if the section is scrolled back into view.
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(imageRef.current, { opacity: 0, x: -80 });
    gsap.set(textRef.current, { opacity: 0, x: 80 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
        toggleActions: 'restart none none reverse',
      },
    });

    tl.to(imageRef.current, { opacity: 1, x: 0, duration: 0.9, ease: 'power3.out' }, 0).to(
      textRef.current,
      { opacity: 1, x: 0, duration: 0.9, ease: 'power3.out' },
      0
    );

    return () => {
      if (tl.scrollTrigger) tl.scrollTrigger.kill();
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        width: '100%',
        backgroundColor: '#FFFFFF',
        fontFamily: 'Outfit, sans-serif',
        padding: '120px 72px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: '1200px',
          width: '100%',
          gap: '80px',
        }}
      >
        {/* Left Side: Checklist card image */}
        <div ref={imageRef} style={{ flex: '1', display: 'flex', justifyContent: 'center' }}>
          <img
            src={CARD_SRC}
            alt='Career support checklist'
            style={{ width: '100%', maxWidth: '460px', height: 'auto', objectFit: 'contain' }}
          />
        </div>

        {/* Right Side: Text Content */}
        <div
          ref={textRef}
          style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '16px' }}
        >
          <p
            style={{
              color: '#737373',
              fontSize: '14px',
              fontWeight: 500,
              letterSpacing: '1px',
              textTransform: 'uppercase',
              margin: 0,
            }}
          >
            AFTER YOU FINISH
          </p>

          <h2
            style={{
              fontSize: '48px',
              fontWeight: 600,
              lineHeight: '1.1',
              letterSpacing: '-1.5px',
              color: '#1A1A1A',
              margin: 0,
            }}
          >
            We do not stop at <span style={{ color: '#DE896A' }}>the certificate.</span>
          </h2>

          <p
            style={{
              color: '#6B7280',
              fontSize: '16px',
              lineHeight: '1.6',
              margin: '8px 0 0 0',
              maxWidth: '420px',
              fontWeight: 400,
            }}
          >
            Training that ends at the exam is only half the job. Every person who completes a level
            gets structured support to turn the skill into an offer.
          </p>
        </div>
      </div>
    </section>
  );
}
