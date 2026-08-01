'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckSquare, ArrowRight } from 'lucide-react';

const supportItems = [
  'A portfolio of the work you built during the program, ready to show.',
  'Mock interviews with practitioners, with written feedback.',
  'Resume and profile review against what employers actually screen for.',
  'Introductions to employers hiring for AI capable roles, including GWC Data AI, which has hired TeqCertify graduates.',
];

export default function SupportSection() {
  const sectionRef = useRef(null);
  const scrollerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const scroller = document.getElementById('main-scroll-container');
    if (!scroller) return;

    scrollerRef.current = scroller;

    ScrollTrigger.defaults({ scroller });

    const TOTAL_SCROLL = 2400; // 4 steps

    const st = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top top',
      end: `+=${TOTAL_SCROLL}`,
      pin: true,
      pinType: 'transform',
      anticipatePin: 1,
      pinSpacing: true,
      invalidateOnRefresh: true,
      onUpdate: self => {
        const progress = self.progress;
        let index = Math.floor(progress * 4);
        if (index > 3) index = 3;
        setActiveIndex(index);
      },
    });

    return () => {
      st.kill();
    };
  }, []);

  // Framer Motion scroll progress for entry animations & parallax
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    container: scrollerRef,
    offset: ['start end', 'start 0.1'],
  });

  // Left graphic motion: scale 0.92 -> 1, Y shift 45px -> 0px -> -25px (parallax)
  const imageScale = useTransform(scrollYProgress, [0, 0.6], [0.92, 1]);
  const imageY = useTransform(scrollYProgress, [0, 0.6, 1], ['45px', '0px', '-25px']);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  // Right content motions: progressive staggered reveal
  // 1. Heading (opacity 0->1, Y 32px->0px, scale 0.96->1)
  const headingOpacity = useTransform(scrollYProgress, [0.08, 0.35], [0, 1]);
  const headingY = useTransform(scrollYProgress, [0.08, 0.35], ['32px', '0px']);
  const headingScale = useTransform(scrollYProgress, [0.08, 0.35], [0.96, 1]);

  // 2. Paragraph (opacity 0->1, Y 24px->0px)
  const paragraphOpacity = useTransform(scrollYProgress, [0.18, 0.45], [0, 1]);
  const paragraphY = useTransform(scrollYProgress, [0.18, 0.45], ['24px', '0px']);

  // 3. Checklist (opacity 0->1, Y 20px->0px)
  const checklistOpacity = useTransform(scrollYProgress, [0.28, 0.55], [0, 1]);
  const checklistY = useTransform(scrollYProgress, [0.28, 0.55], ['20px', '0px']);

  // 4. Button (opacity 0->1, Y 16px->0px)
  const buttonOpacity = useTransform(scrollYProgress, [0.38, 0.65], [0, 1]);
  const buttonY = useTransform(scrollYProgress, [0.38, 0.65], ['16px', '0px']);

  // Computed styles respecting prefers-reduced-motion
  const leftStyle = shouldReduceMotion
    ? {}
    : {
        scale: imageScale,
        y: imageY,
        opacity: imageOpacity,
        willChange: 'transform, opacity',
      };

  const headingStyle = shouldReduceMotion
    ? {}
    : {
        opacity: headingOpacity,
        y: headingY,
        scale: headingScale,
        willChange: 'transform, opacity',
      };

  const paragraphStyle = shouldReduceMotion
    ? {}
    : {
        opacity: paragraphOpacity,
        y: paragraphY,
        willChange: 'transform, opacity',
      };

  const checklistStyle = shouldReduceMotion
    ? {}
    : {
        opacity: checklistOpacity,
        y: checklistY,
        willChange: 'transform, opacity',
      };

  const buttonStyle = shouldReduceMotion
    ? {}
    : {
        opacity: buttonOpacity,
        y: buttonY,
        willChange: 'transform, opacity',
      };

  return (
    <section
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
      {/* Local Sidebar Background */}
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

      {/* ── Content Wrapper ──────────────── */}
      <div
        style={{
          position: 'relative',
          width: 'calc(100% - 200px)',
          height: '100%',
          marginLeft: '200px',
          display: 'flex',
        }}
      >
        {/* ── Left column: Graphic ──────────────── */}
        <div
          style={{
            width: '50%',
            height: '100%',
            backgroundColor: '#DE896A',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '80px',
          }}
        >
          {/* Featured Graphic with Scroll Reveal & Parallax */}
          <motion.div
            style={{
              width: '100%',
              height: '100%',
              maxWidth: '400px',
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              ...leftStyle,
            }}
          >
            <video
              src='/Video/Featured Testimonial.webm'
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </motion.div>
        </div>

        {/* ── Right column: Text ──────────────── */}
        <div
          style={{
            width: '50%',
            height: '100%',
            backgroundColor: '#ffffff',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingLeft: '60px',
            paddingRight: '100px',
          }}
        >
          <motion.h2
            style={{
              fontSize: '48px',
              fontWeight: 600,
              color: '#1a1a1a',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginBottom: '24px',
              maxWidth: '380px',
              ...headingStyle,
            }}
          >
            We do not stop at the certificate.
          </motion.h2>
          <motion.p
            style={{
              fontSize: '15px',
              fontWeight: 400,
              color: '#666',
              lineHeight: 1.6,
              marginBottom: '40px',
              maxWidth: '420px',
              ...paragraphStyle,
            }}
          >
            Training that ends at the exam is only half the job. Every person who completes a level
            gets structured support to turn the skill into an offer.
          </motion.p>

          {/* Dynamic checkmark item */}
          <motion.div
            style={{
              height: '80px',
              position: 'relative',
              ...checklistStyle,
            }}
          >
            {supportItems.map((item, idx) => (
              <div
                key={idx}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px',
                  opacity: activeIndex === idx ? 1 : 0,
                  transform: activeIndex === idx ? 'translateY(0)' : 'translateY(10px)',
                  transition: 'all 0.4s ease',
                  pointerEvents: activeIndex === idx ? 'auto' : 'none',
                }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    border: '1.5px solid #DE896A',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <CheckSquare size={16} color='#DE896A' />
                </div>
                <p style={{ fontSize: '15px', color: '#444', lineHeight: 1.5, maxWidth: '340px' }}>
                  {item}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.button
            style={{
              marginTop: '20px',
              backgroundColor: '#DE896A',
              color: '#ffffff',
              padding: '16px 24px',
              borderRadius: '6px',
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              width: 'fit-content',
              ...buttonStyle,
            }}
          >
            WRITE A REVIEW <ArrowRight size={16} />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
