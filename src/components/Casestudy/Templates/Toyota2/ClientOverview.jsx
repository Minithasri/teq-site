'use client';
import React from 'react';

const ClientOverview = () => {
  return (
    <section className='relative py-12 md:py-20 bg-[#F6F7F9] overflow-hidden'>
      <div className='max-w-7xl mx-auto px-6 md:px-12 relative z-10'>
        {/* Badge */}
        <div className='mb-10'>
          <span
            className='inline-block px-8 py-2.5 rounded-full text-white text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase shadow-md'
            style={{
              background: 'linear-gradient(98.91deg, #676F7E 0%, #1AA2E6 100%)',
            }}
          >
            Client Overview
          </span>
        </div>

        <div className='flex flex-col lg:flex-row items-start gap-6 md:gap-10'>
          {/* Icon with Gradient Background */}
          <div
            className='flex-shrink-0 w-16 h-16 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center'
            style={{
              background: 'linear-gradient(135deg, #676F7E 0%, #1AA2E6 100%)',
            }}
          >
            <img
              src='/images/Templates/toyota2/toysvg1.svg'
              alt='Client Icon'
              className='w-6 h-6 md:w-8 md:h-8'
            />
          </div>

          {/* Content */}
          <div className='flex-1 max-w-9xl'>
            <h2 className='text-2xl md:text-4xl lg:text-5xl font-bold text-[#131720] mb-8 leading-tight'>
              A Leading Global Automotive Manufacturer
            </h2>
            <div className='space-y-6 md:space-y-8'>
              <p className='text-[#676F7E] text-base md:text-xl leading-relaxed font-normal'>
                A leading global automotive manufacturing company managing large-scale production
                facilities, requiring efficient maintenance operations, minimal downtime, and high
                equipment reliability across its operations.
              </p>
              <p className='text-[#676F7E] text-base md:text-xl leading-relaxed font-normal'>
                The organization sought a comprehensive digital solution to replace fragmented,
                manual processes enabling centralized tracking, automated workflows, and actionable
                analytics to drive operational excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientOverview;
