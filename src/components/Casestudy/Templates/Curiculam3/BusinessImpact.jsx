'use client';

import React from 'react';
import Image from 'next/image';

const impactPoints = [
  '40–50% improvement in dashboard performance',
  'Ensured 100% data accuracy during migration',
  'Reduced maintenance complexity',
  'Enabled scalable and unified reporting',
];

const techPills = ['Power BI Desktop', 'Power BI Service', 'Tableau', 'Salesforce'];

const techLogos = [
  '/images/Templates/CA/casvg9.svg',
  '/images/Templates/CA/casvg10.svg',
  '/images/Templates/CA/casvg11.svg',
];

export default function BusinessImpact() {
  return (
    <section className='w-full py-6 md:py-10 lg:py-12 bg-[#FCFBF8] overflow-hidden'>
      <div className='w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24'>
        {/* ── TWO COLUMN LAYOUT: BUSINESS IMPACT (Left) & TECHNOLOGY STACK (Right) ── */}
        <div className='grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 xl:gap-24 items-start'>
          {/* LEFT COLUMN: BUSINESS IMPACT */}
          <div>
            {/* Header */}
            <h2
              className='text-2xl md:text-3xl font-bold text-center mb-8 tracking-wide'
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

            {/* Split Sub-Layout: Pills List (Left) & Logos Row (Right) */}
            <div className='grid grid-cols-1 sm:grid-cols-[0.8fr_1.2fr] gap-8 items-center mt-6'>
              {/* Sub-Column 1: Pills List */}
              <div className='flex flex-col gap-3 w-full'>
                {techPills.map((pill, i) => (
                  <div
                    key={i}
                    className='flex items-center justify-center py-2.5 px-5 rounded-full border-2 border-[#F5F5F5] shadow-[0px_8px_22px_rgba(0,0,0,0.08)] bg-white font-medium text-xs sm:text-sm cursor-default'
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                    }}
                  >
                    {pill}
                  </div>
                ))}
              </div>

              {/* Sub-Column 2: Logos Row */}
              <div className='flex items-center gap-4 sm:gap-6 flex-wrap justify-start sm:justify-center w-full'>
                {techLogos.map((logo, i) => (
                  <div
                    key={i}
                    className='relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center hover:scale-105 transition-transform duration-300'
                  >
                    <Image
                      src={logo}
                      alt={`Tech Logo ${i + 9}`}
                      fill
                      className='object-contain p-2.5'
                      priority
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
