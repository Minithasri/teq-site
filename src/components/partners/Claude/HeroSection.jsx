'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

const HeroSection = () => {
  return (
    <section className='max-w-7xl mx-auto px-0 md:px-2 pt-20 lg:pt-24 bg-white overflow-hidden'>
      <div className='relative z-10 w-full max-w-9xl mx-auto p-6 sm:p-10 lg:p-[60px] flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-[42px]'>
        {/* Left column */}
        <div className='flex flex-col items-start text-left w-full'>
          {/* Badge */}
          <div
            className='relative inline-flex items-center gap-2.5 rounded-[38px] mb-6 select-none'
            style={{
              width: '250px',
              height: '52px',
              padding: '11px 25px',
              background: '#FFFFFF33',
            }}
          >
            {/* Gradient Border using Mask */}
            <div
              className='absolute inset-0 rounded-[38px] pointer-events-none'
              style={{
                padding: '1px',
                background: 'linear-gradient(90deg, #6F2B8B 0%, #ED7200 100%)',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
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
          <div className='mb-6'>
            <h1 className='text-[#404040] text-3xl sm:text-5xl lg:text-[64px] font-bold tracking-tight leading-[125%] m-0'>
              Agentic AI.
            </h1>
            <h2 className='gwc-gradient-text text-3xl sm:text-5xl lg:text-[58px] font-bold tracking-tight leading-[125%] lg:leading-[67px] m-0 whitespace-nowrap'>
              Powered by Claude.
            </h2>
          </div>

          {/* Description */}
          <p
            className='text-[#737373] text-base sm:text-lg lg:text-[18px] font-normal leading-[100%] max-w-[780px] mb-8'
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            This partnership strengthens our ability to help organizations build secure,scalable,
            and enterprise-ready AI solutions powered by Claude.
          </p>

          {/* CTA Button */}
          <Link
            href='/contact'
            className='inline-flex items-center gap-2.5 rounded-full text-white text-sm sm:text-base font-semibold transition-all duration-300 hover:opacity-90 shadow-lg hover:shadow-xl hover:gap-3'
            style={{
              padding: '12px 24px',
              background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
            }}
          >
            Talk to our Expert
            <FiArrowRight className='text-base sm:text-lg' />
          </Link>
        </div>

        {/* Right column: hero image */}
        <div className='flex justify-center lg:justify-end w-full lg:w-auto shrink-0'>
          <div className='relative w-[320px] sm:w-[480px] lg:w-[630px] h-[213px] sm:h-[320px] lg:h-[420px] top-4'>
            <Image
              src='/images/partners/claude/hero.png'
              alt='GWC Data.AI - Claude Partner'
              fill
              priority
              className='object-contain select-none pointer-events-none'
            />
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
        @media (prefers-reduced-motion: reduce) {
          .gwc-gradient-text { animation: none; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
