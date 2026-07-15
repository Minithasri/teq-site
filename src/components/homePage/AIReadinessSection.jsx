'use client';

import { ArrowRight, Cpu, Database, Sparkles, Target, Zap } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

const SCORE = 90;
const RADIUS = 130;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const RING_GRADIENT = 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)';
const TEXT_GRADIENT = 'linear-gradient(90deg, #6F2B8B 0%, #ED7200 100%)';

const INDICATORS = [
  { key: 'technology', label: 'Technology', Icon: Cpu, top: '-16%', left: '50%', delay: 0 },
  { key: 'data', label: 'Data', Icon: Database, top: '50%', left: '110%', delay: 120 },
  { key: 'automation', label: 'Automation', Icon: Zap, top: '116%', left: '50%', delay: 240 },
  { key: 'strategy', label: 'Strategy', Icon: Target, top: '94%', left: '3%', delay: 360 },
  { key: 'ai', label: 'AI maturity', Icon: Sparkles, top: '6%', left: '3%', delay: 480 },
];

function useCountUp(target, durationMs, start) {
  const [value, setValue] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!start) {
      setValue(0);
      return undefined;
    }

    const startTime = performance.now();

    const tick = now => {
      const elapsed = now - startTime;
      const t = Math.min(elapsed / durationMs, 1);
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      setValue(Math.round(eased * target));
      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [target, durationMs, start]);

  return value;
}

function AIReadinessDial() {
  const [inView, setInView] = useState(false);
  const containerRef = useRef(null);
  const score = useCountUp(SCORE, 1800, inView);
  const dashOffset = CIRCUMFERENCE - ((inView ? SCORE : 0) / 100) * CIRCUMFERENCE;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className='relative mx-auto'
      style={{ width: 'min(420px, clamp(220px, 60vw, 420px))', aspectRatio: '1 / 1' }}
    >
      {/* outermost dotted gray guide ring for indicator pills */}
      <div
        className='absolute rounded-full pointer-events-none'
        style={{
          inset: '-16%',
          border: '1.5px dotted var(--neutral-300, #D1D5DB)',
        }}
      />

      {/* middle dotted gray guide ring for the orbiting dots */}
      <div
        className='absolute rounded-full pointer-events-none'
        style={{
          inset: '-4%',
          border: '1.5px dotted var(--neutral-400, #A3A3A3)',
        }}
      />

      {/* innermost dotted gray circle inside progress ring */}
      <div
        className='absolute rounded-full pointer-events-none'
        style={{
          inset: '16%',
          border: '1.5px dotted var(--neutral-300, #D1D5DB)',
        }}
      />

      {/* rotating containers for orbiting dots */}
      <div
        className='absolute rounded-full pointer-events-none'
        style={{
          inset: '-4%',
          animation: inView ? 'aiReadinessSpin 18s linear infinite' : 'none',
          willChange: 'transform',
        }}
      >
        <span
          className='absolute rounded-full'
          style={{
            top: '-4px',
            left: '50%',
            width: '9px',
            height: '9px',
            background: '#E8672C',
            boxShadow: '0 0 8px rgba(232,103,44,0.6)',
            transform: 'translateX(-50%)',
          }}
        />
        <span
          className='absolute rounded-full'
          style={{
            top: '50%',
            right: '-4px',
            width: '7px',
            height: '7px',
            background: '#7030B1',
            boxShadow: '0 0 8px rgba(112,48,177,0.5)',
            transform: 'translateY(-50%)',
          }}
        />
      </div>
      <div
        className='absolute rounded-full pointer-events-none'
        style={{
          inset: '-16%',
          animation: inView ? 'aiReadinessSpinRev 26s linear infinite' : 'none',
          willChange: 'transform',
        }}
      >
        <span
          className='absolute rounded-full'
          style={{
            bottom: '-5px',
            left: '50%',
            width: '10px',
            height: '10px',
            background: '#E8672C',
            boxShadow: '0 0 8px rgba(232,103,44,0.5)',
            transform: 'translateX(-50%)',
          }}
        />
        <span
          className='absolute rounded-full'
          style={{
            top: '50%',
            right: '-3px',
            width: '6px',
            height: '6px',
            background: '#B56DD3',
            opacity: 0.6,
            transform: 'translateY(-50%)',
          }}
        />
        <span
          className='absolute rounded-full'
          style={{
            top: '-4px',
            left: '50%',
            width: '8px',
            height: '8px',
            background: '#E8672C',
            boxShadow: '0 0 8px rgba(232,103,44,0.5)',
            transform: 'translateX(-50%)',
          }}
        />
      </div>

      {/* progress ring */}
      <svg
        viewBox='0 0 300 300'
        className='absolute inset-0 h-full w-full'
        style={{ transform: 'rotate(-90deg)' }}
      >
        <defs>
          <linearGradient id='aiReadinessRingGrad' x1='0%' y1='0%' x2='0%' y2='100%'>
            <stop offset='0%' stopColor='#7030B1' />
            <stop offset='100%' stopColor='#B56DD3' />
          </linearGradient>
        </defs>
        <circle cx='150' cy='150' r={RADIUS} fill='none' stroke='#EFE9F8' strokeWidth='18' />
        <circle
          cx='150'
          cy='150'
          r={RADIUS}
          fill='none'
          stroke='url(#aiReadinessRingGrad)'
          strokeWidth='18'
          strokeLinecap='round'
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={dashOffset}
          style={{ transition: 'stroke-dashoffset 1.8s cubic-bezier(.16,1,.3,1)' }}
        />
      </svg>

      {/* center readout */}
      <div
        className='absolute inset-[20%] sm:inset-[17%] md:inset-[14%] rounded-full bg-white shadow-[0_10px_35px_rgba(112,48,177,0.08)] border border-gray-100 flex flex-col items-center justify-center text-center z-10'
        style={{
          animation: inView ? 'aiReadinessZoom 4s ease-in-out infinite' : 'none',
          willChange: 'transform',
        }}
      >
        <span
          className='bg-clip-text text-transparent'
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(36px, 8vw, 72px)',
            lineHeight: 1,
            backgroundImage: TEXT_GRADIENT,
          }}
        >
          {score}%
        </span>
        <span
          className='mt-2 text-xs sm:text-sm font-bold text-gray-900 md:text-base'
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          AI readiness score
        </span>
        <span className='mt-1 text-[9px] text-gray-500 md:text-[13px]'>
          Based on 10 key indicators
        </span>
      </div>

      {/* orbiting indicator pills */}
      {INDICATORS.map(({ key, label, Icon, top, left, delay }) => (
        <div
          key={key}
          className='absolute flex items-center gap-1 sm:gap-1.5 rounded-full bg-white px-2 sm:px-3 py-1 sm:py-1.5 shadow-[0_8px_20px_rgb(112,48,177,0.14)]'
          style={{
            top,
            left,
            transform: 'translate(-50%, -50%)',
            opacity: inView ? 1 : 0,
            transition: `opacity 0.6s ease ${delay}ms, transform 0.6s cubic-bezier(.16,1,.3,1) ${delay}ms`,
            animation: inView ? `aiReadinessFloat 4s ease-in-out ${delay}ms infinite` : 'none',
          }}
        >
          <Icon className='w-3 h-3 sm:w-[14px] sm:h-[14px]' style={{ color: '#7030B1' }} />
          <span className='whitespace-nowrap text-[10px] sm:text-xs font-bold text-gray-800'>
            {label}
          </span>
        </div>
      ))}

      <style jsx>{`
        @keyframes aiReadinessSpin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes aiReadinessSpinRev {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        @keyframes aiReadinessFloat {
          0%,
          100% {
            transform: translate(-50%, -50%) translateY(0);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-6px);
          }
        }
        @keyframes aiReadinessZoom {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.08);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          div[style*='aiReadinessSpin'],
          div[style*='aiReadinessSpinRev'],
          div[style*='aiReadinessZoom'] {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}

export default function AIReadinessSection() {
  return (
    <section
      className='relative mx-auto overflow-hidden w-full max-w-8xl'
      style={{
        minHeight: 'auto',
        margin: '100px 0px 60px auto',
        padding: 'clamp(60px, 10vw, 140px) clamp(24px, 6vw, 100px)',
        background: `
          linear-gradient(0deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)),
          linear-gradient(259.49deg, rgba(229, 170, 102, 0.3) -44.78%, rgba(255, 165, 129, 0.3) -44.78%, rgba(108, 163, 221, 0.3) -2.47%, rgba(255, 255, 255, 0.65) 44.67%, rgba(246, 185, 228, 0.3) 87.24%, rgba(112, 48, 177, 0.3) 132.49%),
          radial-gradient(75.47% 56.1% at 52.88% 45.75%, #FFFFFF 51.92%, rgba(255, 255, 255, 0) 100%)
        `,
      }}
    >
      {/* Grid Background */}
      <div
        className='absolute inset-0 pointer-events-none'
        style={{
          backgroundImage: "url('/images/HomePage/ai solution/grid.png')",
          backgroundSize: '180px 180px',
          backgroundRepeat: 'repeat',
          backgroundPosition: 'center',
          opacity: 0.5,
          maskImage:
            'radial-gradient(ellipse 90% 90% at 52% 46%, transparent 30%, rgba(0,0,0,0.3) 55%, rgba(0,0,0,0.7) 75%, black 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 90% 90% at 52% 46%, transparent 30%, rgba(0,0,0,0.3) 55%, rgba(0,0,0,0.7) 75%, black 100%)',
        }}
      />

      {/* Content Wrapper */}
      <div className='relative z-10 flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-24 xl:gap-28'>
        {/* ── Left: Animated dial + Feature Pills ── */}
        <div className='relative w-full max-w-[480px] shrink-0 md:w-[45%] lg:w-[44%] xl:w-[42%] md:max-w-none flex justify-center py-6 sm:py-8 md:py-0'>
          <div className='flex flex-col items-center gap-10 w-full'>
            <AIReadinessDial />

            <div
              className='flex w-full flex-col items-center gap-3'
              style={{ padding: '0 24px' }}
            ></div>
          </div>
        </div>

        {/* ── Right: Copy ── */}
        <div
          className='flex w-full flex-col md:w-[50%] lg:w-[50%]'
          style={{ maxWidth: '650px', gap: '28px' }}
        >
          {/* Heading */}
          <div className='flex flex-col'>
            <h3
              className='uppercase bg-clip-text text-transparent text-lg sm:text-xl md:text-[26px]'
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 600,
                lineHeight: '100%',
                letterSpacing: '0.08em',
                backgroundImage: RING_GRADIENT,
                marginBottom: '16px',
              }}
            >
              Free assessment
            </h3>

            <h2 className='flex text-[28px] sm:text-[36px] md:text-[46px] flex-col text-gray-900 m-0 p-0'>
              <span
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 500,
                  fontStyle: 'italic',
                  lineHeight: '1.2',
                }}
              >
                Know your
              </span>
              <span
                className='bg-clip-text text-[32px] sm:text-[50px] md:text-[60px] lg:text-[70px] text-transparent block'
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 700,
                  lineHeight: '1.1',
                  backgroundImage: TEXT_GRADIENT,
                }}
              >
                AI Readiness
              </span>
              <span
                className='text-[32px] sm:text-[46px] md:text-[60px]'
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 700,
                  lineHeight: '1.2',
                }}
              >
                Score
              </span>
            </h2>
          </div>

          {/* CTA Row */}
          <div className='flex flex-wrap items-center gap-3'>
            <div
              className='hidden shrink-0 items-center justify-center lg:flex'
              style={{ width: 56, height: 56 }}
            >
              <img
                src='/images/HomePage/ai solution/alarm.png'
                alt='alarm'
                width={56}
                height={56}
              />
            </div>

            <Link
              href='/ai-readiness-assessment'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center justify-between text-white shadow-md transition hover:opacity-90'
              style={{
                gap: '3px',
                borderRadius: '64px',
                padding: '16px 18px',
                background: RING_GRADIENT,
              }}
            >
              <span
                className='whitespace-nowrap font-semibold'
                style={{ fontFamily: 'Poppins, sans-serif', fontSize: '15px', lineHeight: '100%' }}
              >
                Start Free Assessment now
              </span>
              <ArrowRight className='h-5 w-5' />
            </Link>
          </div>

          {/* Stats Row */}
          <div className='flex flex-wrap items-center justify-start gap-2 sm:gap-4'>
            {[
              { value: '10', label: 'Questions' },
              { value: '5 mins', label: 'To complete' },
              { value: 'Instant', label: 'Score' },
            ].map((stat, i, arr) => (
              <React.Fragment key={stat.label}>
                <div className='flex flex-col'>
                  <h3
                    className='text-[22px] font-bold leading-none bg-clip-text text-transparent sm:text-[28px]'
                    style={{ backgroundImage: RING_GRADIENT }}
                  >
                    {stat.value}
                  </h3>
                  <p className='mt-1 text-[12px] font-semibold text-gray-800 sm:text-[14px]'>
                    {stat.label}
                  </p>
                </div>
                {i < arr.length - 1 && (
                  <div
                    className='w-[20px] sm:w-[34px] h-[2px] shrink-0'
                    style={{
                      background: TEXT_GRADIENT,
                    }}
                  />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Description Row */}
          <div className='flex items-start gap-4'>
            <div className='shrink-0 hidden lg:block'>
              <img
                src='/images/HomePage/ai solution/goal.png'
                alt='goal'
                width={56}
                height={56}
                className='rounded-full'
              />
            </div>
            <p className="font-normal font-['Poppins',sans-serif] text-[16px] md:text-[20px] leading-[1.6] text-[#737373]">
              See where your organization stands and get a personalized action plan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
