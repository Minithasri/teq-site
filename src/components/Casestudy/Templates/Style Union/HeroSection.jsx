'use client';

import React from 'react';

export default function HeroSection() {
  return (
    <section
      className='relative w-full py-4 md:py-8 lg:py-28 flex flex-col items-center justify-center text-center px-6'
      style={{
        background: 'linear-gradient(119.36deg, #091734 0%, #162D5A 50%, #246B64 100%)',
      }}
    >
      <div className='max-w-[1200px] mx-auto flex flex-col items-center gap-6 md:gap-8'>
        {/* Main Headline */}
        <h1 className='text-[#F8FAFC] font-bold text-[32px] md:text-[48px] lg:text-[54px] leading-[1.2] max-w-7xl'>
          Transforming Retail Performance <br className='hidden md:block' />
          with Unified Analytics
        </h1>

        {/* Subheadline */}
        <h2 className='text-[#F8FAFC] text-lg md:text-xl lg:text-xl font-medium opacity-90 max-w-5xl'>
          Omnichannel Data Warehouse & BI Platform for a Fashion Retail Brand
        </h2>

        {/* Description */}
        <p className='text-[#F8FAFC] text-xs md:text-sm lg:text-md opacity-80 max-w-9xl leading-relaxed'>
          A value fashion retail brand operating across physical stores and e-commerce channels
          transformed fragmented reporting into a unified analytics platform enabling real-time
          business visibility.
        </p>
      </div>
    </section>
  );
}
