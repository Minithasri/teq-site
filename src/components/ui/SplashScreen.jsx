'use client';
import { gsap } from 'gsap';
import { useEffect, useRef, useState } from 'react';
// Animation presets integrated directly
const AnimationPresets = {
  // Splash screen animations
  splash: {
    fadeInOut: (target, onComplete) => {
      const tl = gsap.timeline();
      tl.fromTo(target, { opacity: 0 }, { opacity: 1, duration: 0.5, ease: 'power2.out' })
        .to(target, { duration: 0.8 })
        .to(target, {
          opacity: 0,
          duration: 0.5,
          ease: 'power2.in',
          onComplete,
        });
      return tl;
    },
  },

  // Navbar animations
  navbar: {
    slideInFromTop: target => {
      return gsap.fromTo(
        target,
        {
          y: -100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
        }
      );
    },

    slideInStaggered: targets => {
      return gsap.fromTo(
        targets,
        {
          y: -50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
        }
      );
    },
  },
};

// useAnimation hook integrated directly
function useAnimation() {
  const contextRef = useRef(null);

  const createAnimation = (container, animationFn) => {
    // Cleanup previous
    if (contextRef.current) {
      contextRef.current.revert();
    }

    if (container) {
      contextRef.current = gsap.context(animationFn, container);
      return contextRef.current;
    }
    return null;
  };

  useEffect(() => {
    return () => {
      if (contextRef.current) {
        contextRef.current.revert();
      }
    };
  }, []);

  return {
    gsap,
    createAnimation,
    presets: AnimationPresets,
  };
}

// useAnimationController hook integrated directly
function useAnimationController() {
  const [animationState, setAnimationState] = useState({
    splash: true,
    content: false,
  });

  const startSplash = () => {
    setAnimationState({
      splash: true,
      content: false,
    });
  };

  const finishSplash = () => {
    setAnimationState({
      splash: false,
      content: true,
    });
  };

  const resetAll = () => {
    setAnimationState({
      splash: true,
      content: false,
    });
  };

  return {
    animationState,
    startSplash,
    finishSplash,
    resetAll,
  };
}

// Main SplashScreen component
export default function SplashScreen({ onComplete }) {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const { createAnimation, presets } = useAnimation();

  useEffect(() => {
    const ctx = createAnimation(containerRef.current, () => {
      presets.splash.fadeInOut(textRef.current, onComplete);
    });

    return () => ctx?.revert();
  }, [onComplete, createAnimation, presets]);

  return (
    <div
      ref={containerRef}
      className='fixed inset-0 flex items-center justify-center text-black text-4xl font-bold z-50'
      style={{ backgroundColor: '#f5f5f0' }}
    >
      <span ref={textRef} className='opacity-0'>
        GWC DATA.Ai
      </span>
    </div>
  );
}

// Export the hooks for use in other components if needed
export { AnimationPresets, useAnimation, useAnimationController };
