'use client';

import Image from 'next/image';

export default function RealTimeWorkforceHero() {
  return (
    <section
      className='relative overflow-hidden flex flex-col items-center justify-center w-full px-4'
      style={{
        minHeight: '449px', // Ensures a consistent base height
        background: '#E15A5A',
      }}
    >
      <div className='absolute inset-0 z-0'>
        <Image
          src='/images/Templates/templatez/rtwrokforce/rthero.png'
          alt='Workforce Background'
          fill
          priority
          className='object-cover'
          style={{ opacity: 0.2 }}
        />
        {/* Red Tint Overlay */}
        <div
          className='absolute inset-0'
          style={{
            background: 'rgba(225, 90, 90, 0.85)',
            mixBlendMode: 'multiply',
          }}
        />
      </div>

      {/* Content Container */}
      <div className='relative z-20 w-full max-w-[1200px] flex flex-col mt-10 items-center text-center py-12 md:py-0'>
        {/* Main Heading */}
        <h1
          className='text-white font-bold leading-[1.1] tracking-tight'
          style={{
            fontFamily: '"Plus Jakarta Sans", sans-serif',
          }}
        >
          <span className='text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] block max-w-[1100px] mb-4 md:mb-6'>
            Real-Time Workforce & Operations Monitoring Dashboard
          </span>
        </h1>

        {/* Description Subtext */}
        <p
          className='font-semibold'
          style={{
            fontFamily: 'Inter, sans-serif',
            color: 'rgba(0, 0, 0, 0.8)',
            maxWidth: '917px',
          }}
        >
          <span className='text-[18px] sm:text-[24px] md:text-[28px] lg:text-[32px]'>
            Transforming Cleaning Operations with Real-Time Visibility
          </span>
        </p>
      </div>
    </section>
  );
}
