'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

const OrbitIcon = ({ radius, size, duration, delay, direction = 1, children }) => (
  <div
    className='gwc-orbit-arm'
    style={{
      '--radius': `${radius}%`,
      '--size': `${size}px`,
      '--duration': `${duration}s`,
      '--delay': `${delay}s`,
      '--direction': direction === 1 ? 'normal' : 'reverse',
    }}
  >
    <div className='gwc-orbit-badge gwc-orbit-icon-badge'>{children}</div>
  </div>
);

const OrbitDot = ({ radius, size = 8, duration, delay, direction = 1, color }) => (
  <div
    className='gwc-orbit-arm'
    style={{
      '--radius': `${radius}%`,
      '--size': `${size}px`,
      '--duration': `${duration}s`,
      '--delay': `${delay}s`,
      '--direction': direction === 1 ? 'normal' : 'reverse',
    }}
  >
    <div
      className='gwc-orbit-badge'
      style={{
        background: color,
        boxShadow: `0 4px 4px 4px ${color}20`,
      }}
    />
  </div>
);

const ClaudePartner = () => {
  return (
    <section className='relative w-full overflow-hidden bg-transparent'>
      {/* soft background wash */}
      <div
        className='absolute inset-0 pointer-events-none'
        style={{
          backgroundImage:
            'radial-gradient(172.76% 80% at 50% 20%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 65%, #F8F9FA 100%), linear-gradient(258.43deg, rgba(229, 170, 102, 0.3) -63.71%, rgba(255, 165, 129, 0.3) -63.71%, #FFD1BE -18.65%, rgba(255, 255, 255, 0.65) 32.88%, rgba(193, 148, 244, 0.3) 91.29%, rgba(112, 48, 177, 0.3) 120.89%), linear-gradient(180deg, rgba(255, 255, 255, 0) 80%, #F8F9FA 100%)',
        }}
      />

      <div className='relative z-10 w-full max-w-7xl mx-auto rounded-xl px-6 md:px-10 pt-[120px] sm:pt-[160px] pb-20 sm:pb-28'>
        <div className='flex flex-col lg:flex-row items-center gap-10 lg:gap-12'>
          {/* ---------------- Left column ---------------- */}
          <div className='flex flex-col items-start text-left w-full'>
            {/* Badge */}
            <div
              className='relative inline-flex items-center gap-2.5 rounded-[38px] mb-6 select-none'
              style={{
                height: '52px',
                padding: '11px 25px',
                background: '#FFFFFF33',
              }}
            >
              {/* Gradient Border using Mask */}
              <div
                className='absolute inset-0 rounded-[38px] pointer-events-none'
                style={{
                  border: '1.2px solid transparent',
                  background: 'linear-gradient(90deg, #6F2B8B 0%, #ED7200 100%) border-box',
                  WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'destination-out',
                  maskComposite: 'exclude',
                }}
              />
              <Image
                src='/images/partners/claude/star.png'
                alt=''
                width={18}
                height={18}
                className='shrink-0 relative z-10'
              />
              <span className='text-sm sm:text-base font-medium whitespace-nowrap relative z-10'>
                <span
                  style={{
                    backgroundImage: 'linear-gradient(90deg, #E5432E 0%, #ED7200 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  160+
                </span>{' '}
                <span className='text-[#404040]'>Certified Experts</span>
              </span>
            </div>
            {/* Heading */}
            <h1 className='m-0 mb-4'>
              <span className='text-[#404040] text-xl md:text-5xl font-bold leading-[1.0]'>
                We are now an Official
              </span>
              <span className='gwc-gradient-text block text-2xl md:text-5xl font-bold leading-[1.2]'>
                Anthropic Claude Partner
              </span>
            </h1>

            {/* Description */}
            <p className='text-[#737373] text-[14px] md:text-[17px] leading-relaxed mb-8'>
              This partnership strengthens our ability to help organizations build secure, scalable,
              and enterprise-ready AI solutions powered by Claude.
            </p>

            {/* CTA */}
            <div className='mb-6 flex flex-row items-center justify-start gap-2.5 sm:gap-4 mt-2 sm:mt-4 w-full flex-nowrap'>
              <Link
                href='/partners/claude/claudepage'
                className='flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-10 py-2 sm:py-4 text-[11px] sm:text-base text-white transition-all duration-300 hover:scale-105 hover:shadow-xl font-semibold whitespace-nowrap'
                style={{
                  background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
                  boxShadow: 'inset 0px 0px 12px 0px #FFFFFF, 0px 0px 2px 0px rgba(0, 0, 0, 0.1)',
                  borderRadius: '30px',
                }}
              >
                Know More
                <FiArrowRight className='text-sm sm:text-lg' />
              </Link>
              <Link
                href='/contact'
                className='flex items-center justify-center border border-[#7030B1] gap-1.5 sm:gap-2 px-3 sm:px-10 py-2 sm:py-4 text-[11px] sm:text-base text-[#6F2B8B] transition-all duration-300 hover:scale-105 hover:shadow-lg whitespace-nowrap'
                style={{
                  background: 'white',
                  borderRadius: '30px',
                }}
              >
                Build your agent
                <FiArrowRight className='text-sm sm:text-xl' />
              </Link>
            </div>
          </div>

          {/* ---------------- Right column: animated orbit graphic ---------------- */}
          <div className='w-full lg:w-auto flex justify-center lg:justify-end shrink-0'>
            <div className='gwc-orbit-wrap'>
              {/* soft glow behind everything */}
              <div className='gwc-orbit-glow' />

              {/* static dashed rings */}
              <div className='gwc-orbit-ring gwc-orbit-ring-outermost' />
              <div className='gwc-orbit-ring gwc-orbit-ring-outer' />
              <div className='gwc-orbit-ring gwc-orbit-ring-inner' />

              {/* center disc + spark logo */}
              <div className='gwc-orbit-center'>
                <div className='gwc-orbit-center-inner gwc-orbit-pulse'>
                  <Image
                    src='/images/partners/claude/claudeChanged1.png'
                    alt='Claude'
                    fill
                    className='gwc-orbit-img gwc-orbit-img-contain'
                  />
                </div>
              </div>

              {/* orbiting icons — outer ring */}
              <OrbitIcon radius={44} size={44} duration={22} delay={0} direction={1}>
                <Image
                  src='/images/partners/claude/claudeChanged2.png'
                  alt=''
                  fill
                  sizes='20px'
                  className='gwc-orbit-img'
                />
              </OrbitIcon>
              <OrbitIcon radius={44} size={44} duration={22} delay={-7.33} direction={1}>
                <Image
                  src='/images/partners/claude/claudeChanged3.png'
                  alt=''
                  fill
                  sizes='20px'
                  className='gwc-orbit-img'
                />
              </OrbitIcon>
              <OrbitIcon radius={44} size={44} duration={22} delay={-14.66} direction={1}>
                <Image
                  src='/images/partners/claude/claudeChanged6.png'
                  alt=''
                  fill
                  sizes='20px'
                  className='gwc-orbit-img'
                />
              </OrbitIcon>

              {/* orbiting icons — inner ring, opposite direction */}
              <OrbitIcon radius={28} size={44} duration={16} delay={0} direction={-1}>
                <Image
                  src='/images/partners/claude/claudeChanged4.png'
                  alt=''
                  fill
                  sizes='20px'
                  className='gwc-orbit-img'
                />
              </OrbitIcon>
              <OrbitIcon radius={28} size={44} duration={16} delay={-8} direction={-1}>
                <Image
                  src='/images/partners/claude/claudeChanged5.png'
                  alt=''
                  fill
                  sizes='20px'
                  className='gwc-orbit-img'
                />
              </OrbitIcon>

              {/* tiny decorative dots */}
              <OrbitDot
                radius={46}
                size={8}
                duration={22}
                delay={-4}
                direction={1}
                color='#7030B1'
              />
              <OrbitDot
                radius={28}
                size={8}
                duration={16}
                delay={-3}
                direction={-1}
                color='#ED7200'
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .gwc-gradient-text {
          display: inline-block;
          background-image: linear-gradient(90deg, #6F2B8B 0%, #ED7200 50%, #6F2B8B 100%);
          background-size: 200% auto;
          background-position: 0% 50%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
          animation: gwc-gradient-shift 1s ease-in-out infinite alternate;
        }
        @keyframes gwc-gradient-shift {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }

        .gwc-orbit-pulse {
          animation: gwc-pulse-ease 2s ease-in-out infinite alternate;
          transform-origin: 50% 50%;
        }
        @keyframes gwc-pulse-ease {
          0% {
            transform: scale(0.92);
            opacity: 0.85;
          }
          100% {
            transform: scale(1.06);
            opacity: 1;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .gwc-orbit-pulse { animation: none; }
        }

        .gwc-orbit-wrap {
          position: relative;
          width: clamp(280px, 85vw, 360px);
          aspect-ratio: 1 / 1;
          margin: 0 auto;
        }

        @media (min-width: 640px) {
          .gwc-orbit-wrap {
            width: clamp(340px, 55vw, 420px);
          }
        }

        @media (min-width: 1024px) {
          .gwc-orbit-wrap {
            width: clamp(380px, 28vw, 460px);
          }
        }

        .gwc-orbit-glow {
          position: absolute;
          inset: -10%;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(181,109,211,0.28) 0%, rgba(255,209,190,0.16) 45%, rgba(255,255,255,0) 75%);
          filter: blur(2px);
        }

        .gwc-orbit-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          border: 1.5px dashed rgba(112,48,177,0.35);
        }
        .gwc-orbit-ring-outer { width: 92%; height: 92%; }
        .gwc-orbit-ring-inner { width: 58%; height: 58%; border-color: rgba(237,114,0,0.35); }

        .gwc-orbit-ring-outermost {
          width: 110%;
          height: 110%;
          border-style: solid;
          border-width: 1px;
          border-color: rgba(255,255,255,0.7);
        }

        .gwc-orbit-center {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 34%;
          height: 34%;
          border-radius: 50%;
          background: rgba(181, 109, 211, 0.28);          /* outer light-purple ring */
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 24px rgba(112,48,177,0.18);
        }
        .gwc-orbit-center-inner {
          position: relative;
          width: 78%;
          height: 78%;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);          /* inner white/near-white disc */
          overflow: hidden;
        }
        .gwc-orbit-img-contain {
          object-fit: contain;          /* logo keeps its shape, isn't cropped like the outer ring icons */
          padding: 14%;
        }

        .gwc-orbit-arm {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          animation: gwc-spin var(--duration) linear infinite;
          animation-delay: var(--delay);
          animation-direction: var(--direction);
        }

        .gwc-orbit-badge {
          position: absolute;
          top: 50%;
          left: calc(50% + var(--radius));
          width: var(--size);
          height: var(--size);
          margin-top: calc(var(--size) / -2);
          margin-left: calc(var(--size) / -2);
          border-radius: 50%;
          overflow: hidden;
          box-shadow: 0 4px 14px rgba(0,0,0,0.12);
          pointer-events: auto;
          animation: gwc-spin-reverse var(--duration) linear infinite;
          animation-delay: var(--delay);
          animation-direction: var(--direction);
        }

        @media (max-width: 640px) {
          .gwc-orbit-icon-badge {
            --size: 32px !important;
          }
        }
        .gwc-orbit-img {
          object-fit: cover;
        }

        @keyframes gwc-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes gwc-spin-reverse {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(-360deg); }
        }

        @media (prefers-reduced-motion: reduce) {
          .gwc-orbit-arm,
          .gwc-orbit-badge,
          .gwc-gradient-text {
            animation: none;
          }
        }

        @media (min-width: 1536px) {
          .gwc-orbit-wrap { width: clamp(420px, 24vw, 480px); }
        }
      `}</style>
    </section>
  );
};

export default ClaudePartner;
