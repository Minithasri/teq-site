'use client';

import React from 'react';
import Image from 'next/image';

const impactPoints = [
  '50–60% improvement in processing performance',
  'Reduced dependency on Domo ETL',
  'Lowered operational costs',
  'Enabled near real-time analytics',
  'Improved scalability and maintainability',
];

const techPills = ['Snowflake', 'SQL', 'Domo', 'AWS S3', 'Orchestration Tools'];

const techLogos = [
  '/images/Templates/CA/casvg1.svg',
  '/images/Templates/CA/casvg4.svg',
  '/images/Templates/CA/casvg7.svg',
  '/images/Templates/CA/casvg8.svg',
];

export default function BusinessImpact() {
  return (
    <section className='w-full py-6 md:py-10 lg:py-12 bg-[#FCFBF8] overflow-hidden'>
      <div className='w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24'>
        {/* ── TOP BLOCK: BUSINESS IMPACT (Left) & Space for Overlapping Illustration (Right) ── */}
        <div className='grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-start'>
          {/* Left: Business Impact cards list */}
          <div>
            <h2
              className='text-2xl md:text-3xl font-bold text-center mb-8 tracking-wide'
              style={{
                fontFamily: 'Poppins, sans-serif',
              }}
            >
              Business Impact
            </h2>

            <div className='flex flex-col gap-4 w-full'>
              {impactPoints.map((point, i) => (
                <div
                  key={i}
                  className='flex items-center gap-4 p-5 rounded-2xl bg-white border-2 border-[#F5F5F5] shadow-[0px_8px_22px_rgba(0,0,0,0.08)]'
                >
                  {/* Tick Icon (casvg13.svg) */}
                  <div className='relative w-6 h-6 flex-shrink-0 flex items-center justify-center'>
                    <Image
                      src='/images/Templates/CA/casvg13.svg'
                      alt='Check Tick'
                      width={24}
                      height={24}
                      className='object-contain'
                      priority
                    />
                  </div>

                  {/* Text */}
                  <span
                    className='text-sm sm:text-base md:text-[16px] font-semibold leading-snug'
                    style={{
                      color: '#09121C',
                      fontFamily: 'Poppins, sans-serif',
                    }}
                  >
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Empty spacer column to accommodate overlapping graduation graphic in lg screens */}
          <div className='hidden lg:block h-[350px] w-full pointer-events-none' />
        </div>

        {/* ── BOTTOM BLOCK: TECHNOLOGY STACK header + horizontal logos & horizontal pills ── */}
        <div className='mt-10 md:mt-12 pt-8 border-t border-black/5'>
          {/* Header */}
          <h2
            className='text-2xl md:text-3xl font-bold text-center tracking-wide'
            style={{
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            Technology Stack
          </h2>
          {/* Header & Horizontal Logos Row */}
          <div className='mt-6 flex flex-col md:flex-row md:items-center justify-center gap-6 md:gap-10 w-full mb-8'>
            {/* Horizontal Logos List */}
            <div className='flex items-center gap-4 sm:gap-6 flex-wrap'>
              {techLogos.map((logo, i) => (
                <div
                  key={i}
                  className='relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center'
                >
                  <Image
                    src={logo}
                    alt={`Tech Logo ${i + 1}`}
                    fill
                    className='object-contain p-2.5'
                    priority
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Horizontal Pills list */}
          <div className='flex items-center gap-4 flex-wrap mt-6 justify-center'>
            {techPills.map((pill, i) => (
              <div
                key={i}
                className='flex items-center justify-center py-2.5 px-6 rounded-full border-2 border-[#F5F5F5] shadow-[0px_8px_22px_rgba(0,0,0,0.08)] font-medium text-xs sm:text-sm cursor-default'
                style={{
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                {pill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
