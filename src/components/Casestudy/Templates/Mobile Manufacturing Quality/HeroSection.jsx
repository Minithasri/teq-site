'use client';

import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className='relative w-full min-h-[500px] overflow-hidden flex flex-col justify-center'>
      {/* Background Image */}
      <div className='absolute inset-0 z-0'>
        <Image
          src='/images/Templates/template3/heroimage1.webp'
          alt='Mobile Manufacturing Quality Background'
          fill
          className='object-cover'
          priority
        />
      </div>

      {/* Blue Gradient Overlay */}
      <div
        className='absolute inset-0 z-10'
        style={{
          background: 'linear-gradient(90deg, #2563EBCC 0%, #06B6D4CC 100%)', // Blue-ish gradient
          opacity: 0.9,
        }}
      ></div>

      {/* Content */}
      <div className='relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full'>
        {/* Logo - Top Right */}
        <div className='absolute top-8 right-8 hidden lg:block'>
          <div className='relative w-48 h-12'>
            <Image
              src='/images/Templates/template1/gwclogo.svg'
              alt='GWC Data.AI'
              fill
              className='object-contain'
            />
          </div>
        </div>

        {/* Mobile Logo (Visible only on small screens) */}
        <div className='lg:hidden flex justify-start mb-8'>
          <div className='relative w-40 h-10'>
            <Image
              src='/images/Templates/template1/gwclogo.svg'
              alt='GWC Data.AI'
              fill
              className='object-contain'
            />
          </div>
        </div>

        {/* Text Content */}
        <div className='max-w-4xl'>
          <h2 className='text-[28px] lg:text-[36px] font-semibold text-white mb-2'>
            Commonality & Traceability
          </h2>

          <h1 className='text-[28px] lg:text-[36px] font-semibold text-white leading-tight mb-6'>
            Analysis for Mobile Manufacturing Quality
          </h1>

          <p className='text-[16px] lg:text-[20px] text-white/90 max-w-6xl'>
            Enabling end-to-end visibility and data-driven quality governance in phone manufacturing
          </p>
        </div>
      </div>
    </section>
  );
}
