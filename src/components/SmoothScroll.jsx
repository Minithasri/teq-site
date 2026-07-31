'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const wrapper = document.getElementById('main-scroll-container');
    const content = document.getElementById('main-scroll-content');

    if (!wrapper || !content) return;

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      wrapper: wrapper,
      content: content,
      lerp: 0.08, // Adjust for smoothness (lower is smoother/slower)
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    // Expose lenis globally for programmatic scrolling
    window.lenis = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add(time => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(time => {
        lenis.raf(time * 1000);
      });
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
