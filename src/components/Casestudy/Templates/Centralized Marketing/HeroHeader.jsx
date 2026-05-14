'use client';

import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className='relative w-full min-h-[450px] md:min-h-[500px] overflow-hidden flex flex-col justify-center py-12 md:py-0'>
      {/* Background Image */}
      <div className='absolute inset-0'>
        <Image
          src='/images/Templates/templatez/z2.png'
          alt='Centralized Marketing Background'
          fill
          priority
          className='object-cover'
        />
      </div>

      {/* Dark Purple Overlay */}
      <div className='absolute inset-0 bg-[rgba(9,4,109,0.62)]' />

      {/* Content */}
      <div className='relative z-20 h-full flex flex-col items-center justify-center text-center px-4 md:px-6'>
        {/* Top Heading */}
        <h2
          className='
            text-white
            font-extrabold
            text-[32px]
            md:text-[42px]
            lg:text-[58px]
            leading-tight
            tracking-[-1px]
            mb-2
            md:mb-3
          '
        >
          Centralized Marketing
        </h2>

        {/* Main Highlight Heading */}
        <h1
          className='
            text-[#E6FF1F]
            font-extrabold
            text-[32px]
            md:text-[42px]
            lg:text-[58px]
            leading-tight
            tracking-[-1px]
            mb-6
            md:mb-8
          '
        >
          Dashboard and Automated Reporting
        </h1>

        {/* Subtitle */}
        <p
          className='
            text-white
            font-semibold
            text-[16px]
            md:text-[18px]
            lg:text-[26px]
            max-w-6xl
            leading-relaxed
          '
        >
          Turning Multi-Channel Marketing Data into One Real-Time Source of Truth
        </p>
      </div>
    </section>
  );
}
