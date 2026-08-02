'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Footer() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const scroller = document.getElementById('main-scroll-container');
    if (!scroller) return;

    ScrollTrigger.defaults({ scroller });

    gsap.set(textRef.current, { opacity: 0, x: -60 });

    const st = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top 80%',
      end: 'top 30%',
      scrub: 1,
      animation: gsap.to(textRef.current, { opacity: 1, x: 0, ease: 'none' }),
    });

    return () => st.kill();
  }, []);

  return (
    <footer
      id='landing-footer'
      ref={sectionRef}
      style={{
        width: '100%',
        height: '100vh',
        backgroundColor: '#DE896A',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "'Outfit', sans-serif",
        position: 'relative',
        zIndex: 1, // To ensure it stacks correctly below FooterCTA
      }}
    >
      <div
        ref={textRef}
        style={{
          color: '#ffffff',
          fontSize: 'clamp(48px, 6vw, 80px)',
          fontWeight: 600,
          letterSpacing: '-0.03em',
        }}
      >
        Footer
      </div>
    </footer>
  );
}
