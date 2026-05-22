'use client';

import Image from 'next/image';

export default function RealEstatePerformanceHero() {
  return (
    <section
      className='relative overflow-hidden w-full flex items-center px-6 md:px-10'
      style={{
        height: '496px',
        background: 'linear-gradient(160deg, #2563EB 60%, #dadfe7 100%)', // Clean blue gradient
        opacity: 1,
      }}
    >
      {/* Main Container for Text and Image */}
      <div className='w-full max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between h-full relative'>
        {/* Left Side: Typography */}
        <div className='max-w-[1250px] z-10 flex flex-col justify-center h-full pl-8 py-8 md:py-0 sm:pl-4 sm:pr-4'>
          <h1
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(36px, 5.5vw, 64px)',
              lineHeight: '100%',
              letterSpacing: '-1.5px',
            }}
            className='text-white mb-2'
          >
            Centralizing Real Estate Performance for Smarter Decision-Making
          </h1>
        </div>

        <div
          className='absolute bottom-4 right-0 sm:right-[-15px] overflow-hidden w-[220px] h-[140px] sm:w-[320px] sm:h-[180px] md:w-[400px] md:h-[225px]'
          style={{
            opacity: 1,
            clipPath: 'polygon(12% 0%, 88% 0%, 100% 12%, 100% 100%, 0% 100%, 0% 12%)',
          }}
        >
          <Image
            src='/images/Templates/templatez/realestate/header.png'
            alt='ESR Building Real Estate'
            fill
            priority
            className='object-cover object-center scale-110'
          />
        </div>
      </div>
    </section>
  );
}
