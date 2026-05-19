'use client';

import React from 'react';

export default function ClientOverview() {
  return (
    <section className='w-full py-6 md:py-8 lg:py-10' style={{ backgroundColor: '#FCFBF8' }}>
      <div className='w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24'>
        {/* Section Header */}
        <h2
          className='text-2xl md:text-3xl font-bold uppercase mb-6 tracking-wide'
          style={{
            color: '#009D9E',
            fontFamily: 'Poppins, sans-serif',
          }}
        >
          Client Context
        </h2>

        {/* Core Paragraphs */}
        <div className='space-y-6 max-w-7xl'>
          <p
            className='text-sm sm:text-base md:text-[17px] lg:text-[18px] leading-relaxed font-normal'
            style={{
              color: '#535F6C',
              fontFamily: 'Poppins, sans-serif',
              lineHeight: '28px',
            }}
          >
            A leading organization in the{' '}
            <span className='font-bold text-neutral-800'>education sector</span> required
            modernization of its data and analytics ecosystem to address performance limitations,
            scalability challenges, and growing data demands. Existing systems relied on legacy ETL
            tools and fragmented reporting platforms, resulting in delayed processing, limited
            flexibility, and increased operational complexity.
          </p>

          <p
            className='text-xs sm:text-sm md:text-[15px] lg:text-[16px] leading-relaxed font-light opacity-90'
            style={{
              color: '#535F6C',
              fontFamily: 'Poppins, sans-serif',
              lineHeight: '26px',
            }}
          >
            The organization aimed to transition to a modern cloud-based architecture to enable
            real-time data processing, scalable analytics, and improved decision-making.
          </p>
        </div>
      </div>
    </section>
  );
}
