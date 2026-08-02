'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function PricingSection() {
  const cardRef = useRef(null);
  const textRef = useRef(null);

  // Card slides in from the left, text slides in from the right — meeting
  // in the center. Plays once per viewport entry, reverses on scroll-up,
  // and replays if the section is scrolled back into view.
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(cardRef.current, { opacity: 0, x: -80 });
    gsap.set(textRef.current, { opacity: 0, x: 80 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardRef.current,
        start: 'top 75%',
        toggleActions: 'restart none none reverse',
      },
    });

    tl.to(cardRef.current, { opacity: 1, x: 0, duration: 0.9, ease: 'power3.out' }, 0).to(
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
        {/* Left Side: Pricing Card */}
        <div ref={cardRef} style={{ flex: '1', display: 'flex', justifyContent: 'center' }}>
          <div
            style={{
              backgroundColor: '#FAFAFA',
              borderRadius: '12px',
              padding: '50px',
              maxWidth: '520px',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: '40px',
              boxShadow: '0 4px 40px rgba(0, 0, 0, 0.03)',
            }}
          >
            <p
              style={{
                color: '#4B5563',
                fontSize: '15px',
                lineHeight: '1.6',
                margin: 0,
                fontWeight: 400,
              }}
            >
              It also keeps the diagnostic honest. Nobody at TeqCertify has a<br />
              financial reason to place you higher or lower than where you belong.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {/* Header */}
              <div
                style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}
              >
                <span
                  style={{
                    fontSize: '10px',
                    fontWeight: 600,
                    color: '#6B7280',
                    letterSpacing: '0.5px',
                  }}
                >
                  COURSE PROGRAMS
                </span>
                <span
                  style={{
                    fontSize: '10px',
                    fontWeight: 600,
                    color: '#6B7280',
                    letterSpacing: '0.5px',
                  }}
                >
                  PRICE
                </span>
              </div>

              <div style={{ height: '1px', backgroundColor: 'rgba(222, 137, 106, 0.4)' }} />

              {/* Rows */}
              {[
                { label: 'Program fee', value: '₹1,00,000' },
                { label: 'Diagnostic assessment', value: 'Fee' },
                { label: 'Hiring support', value: 'Included' },
                { label: 'Instalment options', value: 'To be confirmed' },
              ].map((item, index, arr) => (
                <div key={index} style={{ display: 'flex', flexDirection: 'column' }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      padding: '20px 0',
                      alignItems: 'center',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ color: '#DE896A', fontSize: '18px', lineHeight: 1 }}>✻</span>
                      <span style={{ color: '#374151', fontSize: '15px', fontWeight: 400 }}>
                        {item.label}
                      </span>
                    </div>
                    <span style={{ color: '#DE896A', fontSize: '15px', fontWeight: 600 }}>
                      {item.value}
                    </span>
                  </div>
                  {index < arr.length - 1 && (
                    <div style={{ height: '1px', backgroundColor: '#F3F4F6' }} />
                  )}
                </div>
              ))}
              <div style={{ height: '1px', backgroundColor: '#F3F4F6' }} />

              <div style={{ marginTop: '20px', textAlign: 'center' }}>
                <span style={{ color: '#DE896A', fontSize: '10px' }}>*</span>
                <span
                  style={{ color: '#4B5563', fontSize: '10px', marginLeft: '4px', fontWeight: 500 }}
                >
                  No spam, just awesome updates.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div
          ref={textRef}
          style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '20px' }}
        >
          <h2
            style={{
              fontSize: '64px',
              fontWeight: 600,
              lineHeight: '1.05',
              letterSpacing: '-2.5px',
              color: '#333333',
              margin: 0,
            }}
          >
            <span
              style={{
                background: 'linear-gradient(90deg, #F29E65 0%, #DE7B8C 50%, #D48DBD 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block',
                marginBottom: '12px',
                fontSize: '85px',
                letterSpacing: '-3px',
              }}
            >
              ₹1,00,000.
            </span>
            <br />
            Whichever level
            <br />
            you are placed in.
          </h2>

          <p
            style={{
              color: '#6B7280',
              fontSize: '16px',
              lineHeight: '1.6',
              margin: '16px 0 0 0',
              maxWidth: '460px',
              fontWeight: 400,
            }}
          >
            One fee, no tiered pricing, no upsell. Every level takes the same instructor hours, the
            same classroom time, and ends in the same standard of assessment, so it costs the same.
          </p>
        </div>
      </div>
    </section>
  );
}
