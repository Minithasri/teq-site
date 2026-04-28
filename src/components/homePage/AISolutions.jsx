'use client';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const AISolutions = () => {
  return (
    <section className='relative bg-white py-20 px-6 lg:px-20 overflow-hidden'>
      {/* ── Full-section grid background ── */}
      <div
        className='absolute inset-0 pointer-events-none'
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      {/* Fade edges so grid doesn't look cut off */}
      <div className='absolute inset-0 pointer-events-none bg-gradient-to-b from-white via-transparent to-white' />
      <div className='absolute inset-0 pointer-events-none bg-gradient-to-r from-white via-transparent to-white' />

      <div className='relative max-w-[1150px] mx-auto'>
        {/* ── Timeline Row ── */}
        <div className='relative flex items-start justify-center gap-0 mb-16'>
          {/* Left Icon — Custom built */}
          <div className='flex flex-col items-center w-[200px] flex-shrink-0 z-10'>
            <div className='w-16 h-16 flex items-center justify-center mb-4'>
              <Image
                src='/images/technology_11199143 1.png'
                alt='Custom built'
                width={56}
                height={56}
                className='object-contain'
              />
            </div>
            <p className='text-[#222] text-sm font-semibold text-center leading-snug'>
              Custom built for
              <br />
              your business
            </p>
          </div>

          {/* Orange Line — Left to Center */}
          <div className='flex-1 flex items-center self-start mt-[30px]'>
            <div className='w-full h-[5px] bg-[#F97316] rounded-full' />
          </div>

          {/* Center Icon — Production ready (elevated, with glow) */}
          <div className='flex flex-col items-center w-[200px] flex-shrink-0 z-10 -mt-4'>
            <div className='relative w-24 h-24 flex items-center justify-center mb-3'>
              {/* Purple radial glow */}
              <div className='absolute inset-0 scale-125 rounded-full bg-[#8B5CF6]/15 blur-xl' />
              {/* White Circle Background */}
              <div className='relative z-10 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-100'>
                <Image
                  src='/images/Group 1261153862.png'
                  alt='Production ready'
                  width={56}
                  height={56}
                  className='object-contain'
                />
              </div>
            </div>
            {/* Dots row */}
            <div className='flex gap-1.5 mb-3'>
              {[...Array(5)].map((_, i) => (
                <div key={i} className='w-2 h-2 rounded-full bg-[#F97316]' />
              ))}
            </div>
            <p className='text-[#222] text-sm font-semibold text-center leading-snug'>
              Production ready in weeks
            </p>
          </div>

          {/* Orange Line — Center to Right */}
          <div className='flex-1 flex items-center self-start mt-[30px]'>
            <div className='w-full h-[5px] bg-[#F97316] rounded-full' />
          </div>

          {/* Right Icon — Enterprise grade */}
          <div className='flex flex-col items-center w-[200px] flex-shrink-0 z-10'>
            <div className='w-16 h-16 flex items-center justify-center mb-4'>
              <Image
                src='/images/arcticons_eset-security.png'
                alt='Enterprise security'
                width={56}
                height={56}
                className='object-contain'
              />
            </div>
            <p className='text-[#222] text-sm font-semibold text-center leading-snug'>
              Enterprise grade
              <br />
              security
            </p>
          </div>
        </div>

        {/* ── Heading ── */}
        <h2 className='text-3xl lg:text-[40px] font-bold text-center text-[#1a1a2e] leading-tight mb-5'>
          <span className='bg-gradient-to-b from-[#7030B1] to-[#B56DD3] bg-clip-text text-transparent inline-block'>
            AI Solutions
          </span>{' '}
          that deliver
        </h2>

        {/* ── Subtext ── */}
        <p className='text-center text-[#666] text-base lg:text-lg max-w-2xl mx-auto leading-relaxed mb-10'>
          Delivering tailored AI solutions designed to solve real business
          <br className='hidden lg:block' />
          challenges with speed, precision, and scalability
        </p>

        {/* ── CTA Button ── */}
        <div className='flex justify-center'>
          <button className='flex items-center gap-2 bg-gradient-to-b from-[#7030B1] to-[#B56DD3] hover:bg-[#7C3AED] text-white font-medium px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-violet-300/40 hover:shadow-violet-400/50 hover:-translate-y-0.5'>
            Explore solutions
            <ArrowRight className='w-4 h-4' />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AISolutions;
