'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

const HeroSection = () => {
  return (
    <section className='relative max-w-9xl mx-auto overflow-hidden flex flex-col justify-between items-center min-h-fit md:min-h-[100vh] pt-24 md:pt-0 pb-[100px] md:pb-10'>
      {/* Background images and overlay */}
      <div className='absolute inset-0 z-0 pointer-events-none'>
        {/* Layer 1: Abstract colorful background */}
        <div className='absolute inset-0 opacity-10'>
          <Image
            src='/images/partners/claude/claudehero2.jpg'
            alt=''
            fill
            priority
            className='object-cover object-center'
          />
        </div>

        {/* Layer 2: Team photo (desktop only) */}
        <div className='absolute inset-0 hidden lg:block'>
          <Image
            src='/images/partners/claude/claudehero1.png'
            alt=''
            fill
            priority
            className='object-cover object-center'
          />
        </div>

        {/* Gradient Overlay to fade the background images */}
        <div
          className='absolute inset-0 w-full h-full'
          style={{
            background:
              'linear-gradient(179.62deg, rgba(255, 255, 255, 0) 28.04%, rgba(255, 255, 255, 0.14) 60.84%, rgba(255, 255, 255, 0.630627) 70.54%, #FFFFFF 90.9%)',
          }}
        />
      </div>

      {/* Main container content */}
      <div className='w-full flex flex-col justify-between items-center flex-1 relative z-10 px-4 sm:px-6 lg:px-8'>
        {/* Top Content: Logos */}
        <div className='relative z-10 hidden md:flex justify-center items-center w-full pt-28 lg:pt-0 lg:top-28'>
          <div className='w-[320px] md:w-[480px] hidden lg:block h-[70px] md:h-[90px] relative'>
            <Image
              src='/images/partners/claude/claudehero3.png'
              alt='GWC Data.AI x Anthropic Claude'
              fill
              priority
              className='object-contain'
            />
          </div>
        </div>

        {/* Bottom Content: Text Box */}
        <div
          className='relative z-10 flex flex-col items-center text-center justify-center w-full max-w-[980px] mt-4 md:mt-12 lg:mt-0'
          style={{
            gap: '19px',
          }}
        >
          {/* Team Photo card for mobile screen */}
          <div className='block lg:hidden w-full mb-2 max-w-[650px] mx-auto'>
            <div className='relative w-full aspect-[2.18] rounded-2xl overflow-hidden shadow-lg border border-neutral-200/50'>
              <Image
                src='/images/partners/claude/claudehero1.png'
                alt='GWC Data.AI and Anthropic India team photo'
                fill
                priority
                className='object-cover object-center'
              />
            </div>
          </div>

          {/* Heading */}
          <h1 className='text-3xl sm:text-5xl lg:text-[56px] font-bold tracking-tight leading-[1.2] m-0'>
            <span className='text-[#404040]'>Agentic AI. </span>
            <span className='gwc-gradient-text'>Powered by Claude.</span>
          </h1>

          {/* Description */}
          <p
            className='text-[#737373] text-sm sm:text-base lg:text-[18px] font-normal max-w-5xl m-0 leading-relaxed'
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            GWC Data.AI and Anthropic India teams come together, strengthening a partnership built
            for enterprise AI.
          </p>

          {/* CTA Button */}
          <div className='mt-2'>
            <Link
              href='/contact'
              className='inline-flex items-center gap-2.5 rounded-full text-white text-sm sm:text-base font-semibold transition-all duration-300 hover:opacity-90 shadow-lg hover:shadow-xl hover:gap-3'
              style={{
                padding: '12px 24px',
                background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
              }}
            >
              Talk to our Experts
              <FiArrowRight className='text-base sm:text-lg' />
            </Link>
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
