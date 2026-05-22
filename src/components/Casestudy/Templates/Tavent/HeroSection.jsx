'use client';

import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className='relative w-full py-10 overflow-visible' style={{ minHeight: '250px' }}>
      {/* Background Image and Overlay */}
      <div className='absolute inset-0 z-0'>
        <Image
          src='/images/Templates/tavent/t1.png'
          alt='Tavent Hero Background'
          fill
          className='object-cover object-center'
          prioritycards
        />
        {/* Dark overlay for text readability */}
        <div
          className='absolute inset-0 z-10'
          style={{
            background:
              'linear-gradient(104.7deg, rgba(3, 15, 39, 0.95) 0%, rgba(3, 15, 39, 0.5) 100%)',
          }}
        />
      </div>

      {/* Main Content Container */}
      <div className='relative z-20 w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 pt-20 pb-20 lg:pb-28'>
        <div className='flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-12'>
          {/* Text Left Column */}
          <div className='flex-1 max-w-5xl'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-[56px] xl:text-[54px] font-bold leading-tight md:leading-[1.15] mb-6 tracking-tight text-white'>
              Loan, Deposit & Teller Performance <br />
              Analytics Dashboard
            </h1>

            <p className='text-white text-sm sm:text-base md:text-md max-w-5xl leading-relaxed opacity-90'>
              Delivering real-time visibility into banking operations through interactive dashboards
              and self-service analytics.
            </p>
          </div>

          {/* Mobile & Tablet Image (flows inline below text, hidden on large screens) */}
          <div className='block lg:hidden w-full max-w-md mx-auto aspect-[1.6] relative rounded-2xl overflow-hidden  mt-4'>
            <Image
              src='/images/Templates/tavent/t2.png'
              alt='Banking analytics performance'
              fill
              className='object-cover'
            />
          </div>
        </div>
      </div>

      {/* Overlapping Right Image - Absolute on Desktop, bleeds into the next section */}
      <div className='hidden lg:block absolute bottom-[-80px] right-6 xl:right-16 z-30 w-[320px] xl:w-[380px]'>
        <div className='relative w-full aspect-[1.6] rounded-[24px] overflow-hidden transition-transform duration-300 hover:scale-[1.02]'>
          <Image
            src='/images/Templates/tavent/t2.png'
            alt='Banking analytics dashboard'
            fill
            className='object-cover'
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
