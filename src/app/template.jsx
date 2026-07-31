'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Template({ children }) {
  const overlayRef = useRef(null);

  useEffect(() => {
    // Reveal the page by wiping the overlay from bottom-left to top-right
    const tl = gsap.timeline();
    tl.fromTo(
      overlayRef.current,
      { clipPath: 'circle(150% at 0% 100%)' },
      { clipPath: 'circle(0% at 100% 0%)', duration: 1, ease: 'power3.inOut' }
    );
  }, []);

  return (
    <>
      <div
        ref={overlayRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: '#DE896A', // Brand coral color
          zIndex: 9999,
          pointerEvents: 'none',
          // Starts fully covering the screen from bottom-left
          clipPath: 'circle(150% at 0% 100%)',
        }}
      />
      {children}
    </>
  );
}
