'use client';

import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className='relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] flex items-center justify-start overflow-hidden'>
      {/* Background Image */}
      <div className='absolute inset-0 z-0'>
        <Image
          src='/images/Templates/tessera/tessera1.png'
          alt='Tessera Background'
          fill
          className='object-cover object-center'
          priority
        />
        {/* Dark-Green overlay (#30352E91) */}
        <div
          className='absolute inset-0 z-10'
          style={{ backgroundColor: 'rgba(48, 53, 46, 0.57)' }}
        />
      </div>

      {/* Content Container */}
      <div className='relative z-20 w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 flex flex-col justify-center h-full text-left'>
        <div className='max-w-4xl'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold leading-[1.15] mb-6 tracking-tight'>
            <span style={{ color: '#F2F916' }}>Real-Time Enterprise</span>
            <br />
            <span className='text-white'>Data Integration using Boomi</span>
          </h1>

          <p className='text-white text-sm sm:text-base md:text-[18px] lg:text-[20px] font-normal leading-relaxed opacity-95 max-w-3xl'>
            Enabling seamless data synchronization, automation, and enterprise connectivity for a
            leading biotechnology organization.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
