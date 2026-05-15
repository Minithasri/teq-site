'use client';
import React from 'react';

const HeroSection = () => {
  return (
    <section
      className='relative w-full h-[250px] md:h-[350px] lg:h-[450px] pt-20 flex items-center justify-center overflow-hidden'
      style={{
        backgroundImage: `url('/images/Templates/toyota2/toy1.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay Gradient */}
      <div
        className='absolute inset-0 z-0'
        style={{
          background:
            'linear-gradient(122.01deg, rgba(15, 19, 26, 0.93) 0%, rgba(15, 19, 26, 0.72) 100%)',
        }}
      ></div>

      <div className='relative z-10 max-w-[98%] lg:max-w-none mx-auto px-6 md:px-12'>
        <h1 className='text-3xl md:text-5xl lg:text-[64px] font-bold leading-tight md:leading-tight lg:leading-[72px]'>
          <span className='text-[#FFFFFF]'>Maintenance Management </span>
          <span
            className='bg-clip-text text-transparent'
            style={{
              backgroundImage: 'linear-gradient(98.89deg, #2258C3 0%, #1AA2E6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Digitization
          </span>
          <br />
          <span
            className='bg-clip-text text-transparent'
            style={{
              backgroundImage: 'linear-gradient(98.89deg, #2258C3 0%, #1AA2E6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            & Operational Analytics System
          </span>
        </h1>
        <p className='text-[#FFFFFFB2] text-sm mt-10 md:text-md lg:text-lg font-light max-w-9xl mx-auto'>
          Optimizing maintenance operations and enabling data-driven decision-making for a leading
          global automotive manufacturer.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
