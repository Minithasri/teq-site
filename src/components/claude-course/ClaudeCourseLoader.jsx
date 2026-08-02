'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';

const HOLD_MS = 1100;
const EXIT_DURATION = 0.6;

const EASING = {
  swiftOut: [0.25, 0.46, 0.45, 0.94],
  gentleIn: [0.4, 0, 0.2, 1],
};

/**
 * ClaudeCourseLoader — brief gradient wipe shown when the Claude Course
 * page mounts, so navigating into it feels like a smooth transition
 * rather than a hard cut. Mirrors AppLoader's lifecycle, shorter hold.
 */
export default function ClaudeCourseLoader({ onComplete }) {
  const [isExiting, setIsExiting] = useState(false);
  const isExitingRef = useRef(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      onComplete();
      return;
    }

    const timer = setTimeout(() => {
      isExitingRef.current = true;
      setIsExiting(true);
    }, HOLD_MS);

    return () => clearTimeout(timer);
  }, [shouldReduceMotion, onComplete]);

  const handleAnimationComplete = () => {
    if (isExitingRef.current) {
      onComplete();
    }
  };

  const containerAnimate = isExiting ? { opacity: 0, scale: 1.06 } : { opacity: 1, scale: 1 };
  const containerTransition = isExiting
    ? { duration: EXIT_DURATION, ease: EASING.gentleIn }
    : { duration: 0 };

  const logoInitial = { opacity: 0, scale: 0.9, y: 18 };
  const logoAnimate = isExiting
    ? { opacity: 0, scale: 1.04, y: -10 }
    : { opacity: 1, scale: 1, y: 0 };
  const logoTransition = isExiting
    ? { duration: 0.3, ease: [0.4, 0, 0.8, 1] }
    : { duration: 0.7, ease: EASING.swiftOut };

  return (
    <motion.div
      initial={{ opacity: 1, scale: 1 }}
      animate={containerAnimate}
      transition={containerTransition}
      onAnimationComplete={handleAnimationComplete}
      style={{
        position: 'fixed',
        inset: 0,
        background: '#FFFFFF',
        zIndex: 200000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        fontFamily: "'Outfit', sans-serif",
      }}
    >
      <motion.div
        initial={logoInitial}
        animate={logoAnimate}
        transition={logoTransition}
        style={{ width: 64, height: 64, position: 'relative', flexShrink: 0 }}
      >
        <Image
          src='/images/landing_logo.png'
          alt='TeqCertify'
          fill
          priority
          style={{ objectFit: 'contain' }}
        />
      </motion.div>
    </motion.div>
  );
}
