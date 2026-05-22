'use client';

import Image from 'next/image';

export default function SalesIntelligenceHero() {
  return (
    <section
      className='relative w-full overflow-hidden'
      style={{
        background:
          'linear-gradient(288.97deg, rgba(35, 57, 108, 0.89) 0%, rgba(32, 51, 93, 0.89) 100%)',
      }}
    >
      {/* Background Image Layer */}
      <div className='absolute inset-0 z-0'>
        <Image
          src='/images/Templates/templatez/salesintelligence/sihead.png'
          alt='Sales Intelligence Background'
          fill
          priority
          className='object-cover opacity-40'
        />
      </div>

      {/* Content Container */}
      <div className='relative z-20 w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-16 md:py-28 lg:py-36'>
        <div className='max-w-7xl'>
          {/* Main Heading */}
          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold leading-[1.15] mb-6 md:mb-8 tracking-tight text-white'>
            Sales Intelligence Transformation & Time Based Reporting Standardization
          </h1>

          {/* Description Subtext */}
          <p className='text-white text-base sm:text-lg md:text-xl lg:text-2xl font-normal leading-relaxed max-w-5xl'>
            How we rebuilt confidence in sales analytics by standardizing time- intelligence models
            and optimizing reporting workflows for a leading fashion retailer.
          </p>
        </div>
      </div>
    </section>
  );
}
