'use client';

import React from 'react';
import Image from 'next/image';

const impactPoints = [
  '50–60% improvement in data processing performance',
  'Enabled near real-time data availability',
  'Reduced manual intervention and ETL errors',
  'Improved scalability and reliability',
];

const techPills = ['Snowflake', 'Fivetran', 'Workato', 'AWS S3', 'SSIS', 'Azure SQL', 'Salesforce'];

const techLogos = [
  '/images/Templates/CA/casvg1.svg',
  '/images/Templates/CA/casvg2.svg',
  '/images/Templates/CA/casvg3.svg',
  '/images/Templates/CA/casvg4.svg',
  '/images/Templates/CA/casvg5.svg',
  '/images/Templates/CA/casvg6.svg',
];

export default function BusinessImpact() {
  return (
    <section className='w-full py-6 md:py-8 lg:py-10 bg-[#FCFBF8] overflow-hidden'>
      <div className='w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24'>
        {/* ── TWO COLUMN LAYOUT: BUSINESS IMPACT (Left) & TECHNOLOGY STACK (Right) ── */}
        <div className='grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 xl:gap-24 items-start'>
          {/* LEFT COLUMN: BUSINESS IMPACT */}
          <div>
            {/* Header */}
            <h2
              className='text-2xl md:text-3xl font-bold mb-8 tracking-wide text-center'
              style={{
                fontFamily: 'Poppins, sans-serif',
              }}
            >
              Business Impact
            </h2>

            {/* List of 4 Cards */}
            <div className='flex flex-col gap-4 w-full'>
              {impactPoints.map((point, i) => (
                <div
                  key={i}
                  className='flex items-center gap-4 p-5 rounded-2xl bg-white shadow-sm border border-[#F5F5F5] shadow-[0_8px_12px_rgba(0,0,0,0.08)]'
                >
                  {/* Tick Icon (casvg13.svg) */}
                  <div className='relative w-6 h-6 flex-shrink-0 flex items-center justify-center'>
                    <Image
                      src='/images/Templates/CA/casvg13.svg'
                      alt='Check Tick Icon'
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

          {/* RIGHT COLUMN: TECHNOLOGY STACK */}
          <div>
            {/* Header */}
            <h2
              className='text-2xl md:text-3xl font-bold text-center mb-8 tracking-wide'
              style={{
                fontFamily: 'Poppins, sans-serif',
              }}
            >
              Technology Stack
            </h2>

            {/* Split Sub-Layout: Pills List (Left) & Logos Grid (Right) */}
            <div className='grid grid-cols-1 sm:grid-cols-[0.8fr_1.2fr] gap-8 items-center mt-6'>
              {/* Sub-Column 1: Pills List */}
              <div className='flex flex-col gap-3 w-full'>
                {techPills.map((pill, i) => (
                  <div
                    key={i}
                    className='flex items-center justify-center py-2.5 px-5 rounded-full border bg-white font-medium text-xs sm:text-sm border-2 border-[#F5F5F5] shadow-[0_8px_12px_rgba(0,0,0,0.08)] cursor-default'
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                    }}
                  >
                    {pill}
                  </div>
                ))}
              </div>

              {/* Sub-Column 2: Logos Staggered Grid (3, 2, 1) */}
              <div className='flex flex-col gap-5 sm:gap-6 items-center justify-center w-full'>
                {/* Row 1: 3 Logos */}
                <div className='flex items-center justify-center gap-5 sm:gap-6 w-full'>
                  {[0, 1, 2].map(idx => (
                    <div
                      key={idx}
                      className='relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center'
                    >
                      <Image
                        src={techLogos[idx]}
                        alt={`Tech Logo ${idx + 1}`}
                        fill
                        className='object-contain p-2'
                        priority
                      />
                    </div>
                  ))}
                </div>

                {/* Row 2: 2 Logos */}
                <div className='flex items-center justify-center gap-5 sm:gap-6 w-full'>
                  {[3, 4].map(idx => (
                    <div
                      key={idx}
                      className='relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center'
                    >
                      <Image
                        src={techLogos[idx]}
                        alt={`Tech Logo ${idx + 1}`}
                        fill
                        className='object-contain p-2'
                        priority
                      />
                    </div>
                  ))}
                </div>

                {/* Row 3: 1 Logo */}
                <div className='flex items-center justify-center w-full'>
                  {[5].map(idx => (
                    <div
                      key={idx}
                      className='relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center'
                    >
                      <Image
                        src={techLogos[idx]}
                        alt={`Tech Logo ${idx + 1}`}
                        fill
                        className='object-contain p-2'
                        priority
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
