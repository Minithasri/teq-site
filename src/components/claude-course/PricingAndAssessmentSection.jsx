'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function PricingAndAssessmentSection() {
  const sectionRef = useRef(null);
  const wipeRef = useRef(null);
  const pricingContentRef = useRef(null);
  const assessmentContentRef = useRef(null);
  const stepRefs = useRef([]);
  stepRefs.current = [];
  const addStepRef = el => {
    if (el && !stepRefs.current.includes(el)) stepRefs.current.push(el);
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Set initial states
    gsap.set(wipeRef.current, { scaleX: 0, transformOrigin: 'left' });
    gsap.set(assessmentContentRef.current, { opacity: 0, pointerEvents: 'none', y: 30 });
    gsap.set(pricingContentRef.current, { opacity: 1, pointerEvents: 'auto', y: 0 });
    gsap.set(stepRefs.current, { opacity: 0, y: 48 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=1800', // longer scroll distance = slower, smoother wipe
        pin: true,
        scrub: 1.4, // extra lag so the wipe glides instead of snapping to the wheel
      },
    });

    // Wipe background left to right (white -> orange, all the way to full cover)
    tl.to(
      wipeRef.current,
      {
        scaleX: 1,
        duration: 1.2,
        ease: 'none',
      },
      0
    );

    // Fade out Pricing
    tl.to(
      pricingContentRef.current,
      {
        opacity: 0,
        y: -30,
        duration: 0.4,
        ease: 'power2.in',
      },
      0.15
    );

    // Fade in Assessment
    tl.to(
      assessmentContentRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: 'power2.out',
      },
      0.65
    );

    // Make pricing unclickable after fade out, and assessment clickable
    tl.set(pricingContentRef.current, { pointerEvents: 'none' }, 0.55);
    tl.set(assessmentContentRef.current, { pointerEvents: 'auto' }, 0.55);

    // The 4 assessment steps rise in one after another, bottom to top
    tl.to(
      stepRefs.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.3,
        stagger: 0.12,
        ease: 'power2.out',
      },
      0.75
    );

    return () => {
      if (tl.scrollTrigger) tl.scrollTrigger.kill();
      tl.kill();
    };
  }, []);

  const steps = [
    {
      num: '01',
      title: 'Practical,\nnot written',
      desc: 'You are given a real brief and a time limit. You use Claude the way you would on the job.',
    },
    {
      num: '02',
      title: 'Graded by a\npractitioner',
      desc: 'Marked by someone who does this work commercially, against a published rubric.',
    },
    {
      num: '03',
      title: 'One retake\nincluded',
      desc: 'Fail and you receive written feedback plus one retake within the same cohort cycle.',
    },
    {
      num: '04',
      title: 'Verifiable\ncertificate',
      desc: 'Pass and you receive a TeqCertify Claude Professional certificate with a unique ID an employer can check.',
    },
  ];

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        backgroundColor: '#FFFFFF',
        fontFamily: 'Outfit, sans-serif',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Wipe Background */}
      <div
        ref={wipeRef}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: '#DE896A',
          zIndex: 0,
        }}
      />

      {/* Pricing Content */}
      <div
        ref={pricingContentRef}
        style={{
          position: 'absolute',
          zIndex: 1,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '120px 72px',
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
          <div style={{ flex: '1', display: 'flex', justifyContent: 'center' }}>
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
                    style={{
                      color: '#4B5563',
                      fontSize: '10px',
                      marginLeft: '4px',
                      fontWeight: 500,
                    }}
                  >
                    No spam, just awesome updates.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '20px' }}>
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
              One fee, no tiered pricing, no upsell. Every level takes the same instructor hours,
              the same classroom time, and ends in the same standard of assessment, so it costs the
              same.
            </p>
          </div>
        </div>
      </div>

      {/* Assessment Content */}
      <div
        ref={assessmentContentRef}
        style={{
          position: 'absolute',
          zIndex: 2,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '50px 52px',
          color: '#FFFFFF',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '80px',
          }}
        >
          {/* Top Section */}
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '40px' }}>
            {/* Left Top */}
            <div style={{ flex: '1' }}>
              <h3
                style={{
                  fontSize: '28px',
                  fontWeight: 500,
                  margin: '0 0 16px 0',
                  letterSpacing: '-0.5px',
                }}
              >
                Assessment and certificate
              </h3>
              <p
                style={{
                  fontSize: '15px',
                  lineHeight: '1.6',
                  margin: 0,
                  opacity: 0.9,
                  maxWidth: '420px',
                  fontWeight: 300,
                }}
              >
                Every level ends the same way: a graded practical assessment built around tasks you
                would meet at work, not a multiple choice paper.
              </p>
            </div>

            {/* Right Top */}
            <div style={{ flex: '1.2' }}>
              <h2
                style={{
                  fontSize: '52px',
                  fontWeight: 600,
                  lineHeight: '1.1',
                  letterSpacing: '-1.5px',
                  margin: 0,
                }}
              >
                A certificate everyone
                <br />
                passes is not worth carrying.
              </h2>
            </div>
          </div>

          {/* Bottom Section: 4 Columns */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '48px' }}>
            {steps.map((step, idx) => (
              <div
                key={idx}
                ref={addStepRef}
                style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
              >
                <div
                  style={{
                    backgroundColor: '#FFFFFF',
                    color: '#DE896A',
                    width: '36px',
                    height: '36px',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 600,
                    fontSize: '14px',
                  }}
                >
                  {step.num}
                </div>
                <h4
                  style={{
                    fontSize: '28px',
                    fontWeight: 600,
                    lineHeight: '1.2',
                    margin: 0,
                    whiteSpace: 'pre-line',
                    letterSpacing: '-0.5px',
                  }}
                >
                  {step.title}
                </h4>
                <p
                  style={{
                    fontSize: '13px',
                    lineHeight: '1.6',
                    margin: 0,
                    opacity: 0.85,
                    fontWeight: 300,
                  }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
