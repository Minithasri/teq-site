'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';

/**
 * TIMING CONSTANTS
 * ─────────────────────────────────────────────────────────────
 * HOLD_MS        — how long to wait (ms) before starting the exit.
 *                  Covers: entry animation (~0.9s) + brief hold.
 * EXIT_DURATION  — the exit animation duration in seconds.
 *                  Must match the transition.duration in exitMotion below.
 *
 * Total loader screen time ≈ HOLD_MS + EXIT_DURATION × 1000 ms
 * (≈ 1800 + 650 = ~2.45 s)
 * ─────────────────────────────────────────────────────────────
 */
const HOLD_MS = 1800;
const EXIT_DURATION = 0.65;

/**
 * Premium cubic-bezier easings that match the Cusp AI feel.
 * swiftOut   — fast entry, smooth tail. Used for reveals.
 * gentleIn   — gentle acceleration into the exit. Used for fades.
 */
const EASING = {
  swiftOut: [0.25, 0.46, 0.45, 0.94],
  gentleIn: [0.4, 0, 0.2, 1],
};

/**
 * AppLoader
 * ─────────────────────────────────────────────────────────────
 * A Cusp AI-inspired fullscreen loading experience.
 *
 * Renders over the entire viewport with a near-black background,
 * the TeqCertify logo mark and wordmark, a soft coral ambient glow,
 * and a thin coral progress bar. After HOLD_MS ms it performs a
 * cinematic scale-and-fade exit that seamlessly reveals the existing
 * Home section underneath.
 *
 * Props
 *  onComplete — called when the exit animation is fully complete,
 *               signalling the parent to unmount this component.
 *
 * Accessibility
 *  If prefers-reduced-motion is set the loader skips immediately,
 *  calling onComplete with no animation at all.
 * ─────────────────────────────────────────────────────────────
 */
export default function AppLoader({ onComplete }) {
  const [isExiting, setIsExiting] = useState(false);
  const isExitingRef = useRef(false);
  const shouldReduceMotion = useReducedMotion();

  // ── Lifecycle ────────────────────────────────────────────────
  useEffect(() => {
    // Honour prefers-reduced-motion — skip the loader entirely
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

  // ── Exit completion handler ──────────────────────────────────
  // Called by onAnimationComplete on the outermost motion.div.
  // We guard with isExitingRef to avoid firing on the enter pass.
  const handleAnimationComplete = () => {
    if (isExitingRef.current) {
      onComplete();
    }
  };

  // ── Motion props (enter / exit) ──────────────────────────────
  // Outer container — scale-up + fade for the cinematic reveal
  const containerAnimate = isExiting ? { opacity: 0, scale: 1.08 } : { opacity: 1, scale: 1 };
  const containerTransition = isExiting
    ? { duration: EXIT_DURATION, ease: EASING.gentleIn }
    : { duration: 0 }; // no animation on mount

  // Logo group — slides in from below, exits upward
  const logoInitial = { opacity: 0, scale: 0.88, y: 24 };
  const logoAnimate = isExiting
    ? { opacity: 0, scale: 1.06, y: -14 }
    : { opacity: 1, scale: 1, y: 0 };
  const logoTransition = isExiting
    ? { duration: 0.36, ease: [0.4, 0, 0.8, 1] }
    : { duration: 0.88, ease: EASING.swiftOut };

  // Wordmark — staggered enter, quick fade on exit
  const wordInitial = { opacity: 0, y: 12 };
  const wordAnimate = isExiting ? { opacity: 0, y: -6 } : { opacity: 1, y: 0 };
  const wordTransition = isExiting
    ? { duration: 0.25, ease: 'easeIn' }
    : { duration: 0.72, ease: EASING.swiftOut, delay: 0.22 };

  // Ambient glow — pulses during hold, fades on exit
  const glowAnimate = isExiting ? { opacity: 0 } : { opacity: [0.4, 0.85, 0.4] };
  const glowTransition = isExiting
    ? { duration: 0.28 }
    : { duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 0.6 };

  // Progress bar container — fades in, fades out on exit
  const barContainerAnimate = isExiting ? { opacity: 0 } : { opacity: 1 };
  const barContainerTransition = isExiting ? { duration: 0.2 } : { duration: 0.4, delay: 0.55 };

  // Progress bar fill — grows left-to-right, finishes just as exit starts
  const barFillDuration = (HOLD_MS - 500) / 1000; // leaves 0.5 s of "full" before exit

  // ── Render ───────────────────────────────────────────────────
  return (
    <motion.div
      initial={{ opacity: 1, scale: 1 }}
      animate={containerAnimate}
      transition={containerTransition}
      onAnimationComplete={handleAnimationComplete}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: '#F8F7F6',
        zIndex: 200000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        fontFamily: "'Outfit', sans-serif",
      }}
    >
      {/* ── Ambient coral glow ──────────────────────────────────── */}
      <motion.div
        animate={glowAnimate}
        transition={glowTransition}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '560px',
          height: '560px',
          transform: 'translate(-50%, -50%)',
          background:
            'radial-gradient(circle, rgba(222,137,106,0.18) 0%, rgba(222,137,106,0.04) 42%, transparent 68%)',
          pointerEvents: 'none',
          borderRadius: '50%',
        }}
      />

      {/* ── Logo group ──────────────────────────────────────────── */}
      <motion.div
        initial={logoInitial}
        animate={logoAnimate}
        transition={logoTransition}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '22px',
          zIndex: 1,
        }}
      >
        {/* Original Logo image */}
        <motion.div
          animate={isExiting ? {} : { scale: [1, 1.014, 1] }}
          transition={
            isExiting ? {} : { duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: 1.1 }
          }
          style={{ width: 76, height: 76, position: 'relative', flexShrink: 0 }}
        >
          <Image
            src='/images/landing_logo.png'
            alt='TeqCertify'
            fill
            priority
            style={{
              objectFit: 'contain',
            }}
          />
        </motion.div>

        {/* Wordmark + tagline */}
        <motion.div
          initial={wordInitial}
          animate={wordAnimate}
          transition={wordTransition}
          style={{ textAlign: 'center' }}
        >
          <div
            style={{
              fontSize: '26px',
              fontWeight: 700,
              color: '#1a1a1a',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
            }}
          >
            TeqCertify
          </div>
          <div
            style={{
              fontSize: '10.5px',
              fontWeight: 500,
              color: '#777777',
              letterSpacing: '0.18em',
              marginTop: '8px',
              textTransform: 'uppercase',
            }}
          >
            Elevate Your Data Journey
          </div>
        </motion.div>
      </motion.div>

      {/* ── Thin coral progress bar ──────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={barContainerAnimate}
        transition={barContainerTransition}
        style={{
          position: 'absolute',
          bottom: '56px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100px',
          height: '1.5px',
          backgroundColor: 'rgba(0,0,0,0.08)',
          borderRadius: '2px',
          overflow: 'hidden',
        }}
      >
        {/* Fill — animated from scaleX 0 → 1, origin left */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: barFillDuration,
            ease: EASING.swiftOut,
            delay: 0.55,
          }}
          style={{
            height: '100%',
            width: '100%',
            backgroundColor: '#DE896A',
            transformOrigin: 'left',
            borderRadius: '2px',
          }}
        />
      </motion.div>
    </motion.div>
  );
}
