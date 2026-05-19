'use client';

import React from 'react';

export default function HeroSection() {
  return (
    <section
      className='relative w-full min-h-[45vh] sm:min-h-[50vh] md:min-h-[55vh] flex items-center justify-start overflow-hidden py-16 md:py-20 lg:py-24'
      style={{ backgroundColor: '#095F5A' }}
    >
      {/* Content Container */}
      <div className='relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 flex flex-col justify-center text-left'>
        <div className='max-w-6xl'>
          {/* Main Title */}
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-[58px] xl:text-[64px] font-bold leading-[1.15] mb-6 md:mb-8 tracking-tight'>
            <span style={{ color: '#F8FAFC' }}>AI-Based Workforce Scheduling and</span>
            <br />
            <span
              style={{
                background: 'linear-gradient(98.47deg, #25AFF4 0%, #86D2F9 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Rostering Platform
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className='text-white text-sm sm:text-base md:text-[16px] lg:text-[18px] font-normal leading-relaxed opacity-95 max-w-7xl'
            style={{ color: '#FFFFFF' }}
          >
            Transforming workforce management through AI-driven scheduling automation — delivering
            measurable efficiency gains across multi-location retail operations.
          </p>
        </div>
      </div>
    </section>
  );
}
