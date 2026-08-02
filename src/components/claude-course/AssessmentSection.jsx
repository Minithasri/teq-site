'use client';

import { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function AssessmentSection() {
  const topLeftRef = useRef(null);
  const topRightRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  // Top heading/paragraph slide in from the left as the section scrolls
  // into view — reversible on scroll-up, matching the rest of the site.
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set([topLeftRef.current, topRightRef.current], { opacity: 0, x: -60 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: topLeftRef.current,
        start: 'top 85%',
        end: 'top 40%',
        scrub: 1,
      },
    });

    tl.to(topLeftRef.current, { opacity: 1, x: 0, ease: 'none' }, 0).to(
      topRightRef.current,
      { opacity: 1, x: 0, ease: 'none' },
      0.15
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
      style={{
        display: 'flex',
        minHeight: '619px',
        padding: '50px 52px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '52px',
        flex: '1 0 0',
        backgroundColor: '#DE896A',
        fontFamily: 'Outfit, sans-serif',
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
          <div ref={topLeftRef} style={{ flex: '1' }}>
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
          <div ref={topRightRef} style={{ flex: '1.2' }}>
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
              data-aos='fade-left'
              data-aos-delay={idx * 200}
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
    </section>
  );
}
