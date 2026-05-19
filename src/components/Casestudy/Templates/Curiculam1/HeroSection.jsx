'use client';

import React from 'react';

export default function HeroSection() {
  return (
    <section
      className='w-full min-h-[50vh] sm:min-h-[60vh] flex flex-col justify-center py-20 md:py-28 relative overflow-hidden'
      style={{
        background: 'linear-gradient(119.9deg, #050E19 0%, #061C31 50%, #002E41 100%)',
      }}
    >
      {/* Background soft ambient glowing circles for premium aesthetic */}
      <div className='absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#009D9E]/10 blur-[120px] pointer-events-none' />
      <div className='absolute bottom-[-10%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-[#002E41]/30 blur-[100px] pointer-events-none' />

      <div className='w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 relative z-10'>
        {/* Title */}
        <h1
          className='text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-tight mb-8 max-w-7xl tracking-tight'
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          <span style={{ color: '#EDF3F7' }}>Digital Transformation & </span>
          <span style={{ color: '#009D9E' }}>Data Platform Modernization</span>
          <span style={{ color: '#EDF3F7' }}> for a Leading Education Organization</span>
        </h1>

        {/* Subtext Description */}
        <p
          className='text-sm sm:text-base md:text-lg lg:text-[19px] leading-relaxed max-w-7xl font-light'
          style={{
            color: '#FFFFFFB2',
            fontFamily: 'Poppins, sans-serif',
            lineHeight: '30px',
          }}
        >
          Showcasing cloud migration, data platform modernization, and reporting transformation
          initiatives that improved performance, scalability, and analytics capabilities.
        </p>
      </div>
    </section>
  );
}
