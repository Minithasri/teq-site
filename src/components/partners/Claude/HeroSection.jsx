'use client';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

const HeroSection = () => {
  return (
    <section className='relative w-full min-h-[420px] flex items-center justify-center pt-12 pb-16 px-4 sm:px-6 md:px-8 overflow-hidden bg-white'>
      {/* Soft color gradient overlay to blend the background rays */}
      <div
        className='absolute inset-0 pointer-events-none'
        style={{
          background: `
            radial-gradient(172.76% 57% at 50% 46.71%, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%),
            linear-gradient(259.49deg, rgba(229, 170, 102, 0.3) -44.78%, rgba(255, 165, 129, 0.3) -44.78%, #FFD1BE -2.47%, rgba(255, 255, 255, 0.65) 44.67%, rgba(246, 185, 228, 0.3) 87.24%, rgba(112, 48, 177, 0.3) 132.49%),
            linear-gradient(182.91deg, #FFFFFF -39.16%, rgba(255, 255, 255, 0) 37.67%, #FFFFFF 97.42%)
          `,
        }}
      />
      {/* Sunburst background image with opacity on top of gradients */}
      <div
        className='absolute inset-0 pointer-events-none'
        style={{
          backgroundImage: "url('/images/partners/claude/claudeherobg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.35,
        }}
      />

      <div className='max-w-6xl mx-auto flex flex-col items-center relative z-10 w-full'>
        {/* Grid: Content left, Image right */}
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full mb-16'>
          {/* Left Column: Text content */}
          <div className='lg:col-span-7 flex flex-col items-start text-left px-4 sm:px-0'>
            <h1 className='text-[#404040] text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-2 leading-none'>
              Agentic AI.
            </h1>
            <h2
              className='text-3xl sm:text-5xl md:text-6xl font-medium italic tracking-tight mb-6 pb-2 pr-2'
              style={{
                backgroundImage: 'linear-gradient(90deg, #6F2B8B 0%, #ED7200 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block',
              }}
            >
              Powered by Claude
            </h2>

            {/* Description */}
            <p className='text-[#737373] text-sm sm:text-base md:text-[17px] font-medium leading-relaxed max-w-2xl mb-8'>
              We build autonomous agents on Claude built by Anthropic that reason, code and operate
              inside the systems you already run.
            </p>

            {/* CTA Button */}
            <div>
              <Link
                href='/contact'
                className='inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white text-sm sm:text-base font-semibold transition-all duration-300 hover:opacity-90 shadow-lg hover:shadow-xl hover:gap-3'
                style={{
                  background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
                }}
              >
                Talk to our Expert
                <FiArrowRight className='text-base sm:text-lg' />
              </Link>
            </div>
          </div>

          {/* Right Column: Perspective Orange Card Logo Image */}
          <div className='lg:col-span-5 flex justify-center lg:justify-end w-full px-4 sm:px-0 relative lg:-mr-16'>
            <div className='relative w-[340px] sm:w-[440px] md:w-[500px] lg:w-[680px] h-[300px] sm:h-[380px] md:h-[450px] lg:h-[580px] max-w-none'>
              <img
                src='/images/partners/claude/heroside.png'
                alt='Claude Agentic AI'
                className='w-full h-full object-contain lg:object-right drop-shadow-2xl select-none pointer-events-none'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
