'use client';

import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className='relative w-full min-h-[500px] flex items-center overflow-hidden'>
      {/* Background Image with Opacity */}
      <div className='absolute inset-0 z-0'>
        <Image
          src='/images/Templates/aequs/aequs1.png'
          alt='Aequs Hero Background'
          fill
          className='object-cover'
          priority
        />
        {/* Overlay for the 0.36 opacity effect */}
        <div
          className='absolute inset-0 bg-[#0033A0]/70 mix-blend-multiply'
          style={{ opacity: 0.64 }} // This results in roughly 0.36 visibility of the image if it's a dark overlay
        />
        {/* Darkening overlay for text readability */}
        <div className='absolute inset-0 bg-gradient-to-r from-black/60 to-transparent' />
      </div>

      <div className='relative z-10 w-full max-w-9xl mx-auto px-6 md:px-16 lg:px-24'>
        <div className='max-w-9xl'>
          <h1 className='font-bold leading-tight mb-6'>
            <span
              style={{ color: '#F3F5F7', fontSize: 'clamp(32px, 5vw, 56px)', display: 'block' }}
            >
              Transforming Parts Testing with <br />
              End-to-End Digital Automation
            </span>
          </h1>

          <p className='text-lg md:text-xl leading-relaxed max-w-9xl' style={{ color: '#FFFFFF' }}>
            How a leading consumer electronics manufacturer achieved 60–70% reduction in manual
            errors and ~50% faster testing cycles through a custom-built lifecycle management
            system.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
