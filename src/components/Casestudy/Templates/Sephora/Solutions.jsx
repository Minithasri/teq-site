'use client';

import React from 'react';
import Image from 'next/image';

const bullets = [
  'Developed an AI-powered rostering agent on the Domo platform to automate schedule generation',
  'Built a custom front-end application using React.js for intuitive user interaction and management',
  'Analyzed historical employee data including attendance, leave, and performance metrics',
  'Generated optimized daily and weekly schedules automatically using AI algorithms',
  'Integrated with Domo APP_DB and datasets for centralized, real-time data management',
  'Automated roster creation to significantly reduce manual intervention',
  'Ensured conflict-free scheduling and efficient workforce allocation across all locations',
];

export default function Solutions() {
  return (
    <section
      className='relative w-full py-16 md:py-8 lg:py-16 overflow-visible'
      style={{ backgroundColor: '#F6F7F9' }}
    >
      <div className='w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24'>
        {/* ── OUR SOLUTION (Full Width Header & Core Paragraph) ── */}
        <div className='w-full mb-8 md:mb-12'>
          {/* Section Category */}
          <h2
            className='text-2xl md:text-3xl font-bold mb-4 tracking-wide'
            style={{ color: '#262626' }}
          >
            Our Solution
          </h2>

          {/* Subtext/Subheading */}
          <h3
            className='text-lg sm:text-xl md:text-[24px] lg:text-[28px] font-medium mb-5 leading-tight'
            style={{ color: '#151C28' }}
          >
            An intelligent, end-to-end workforce scheduling platform
          </h3>

          {/* Core Paragraph */}
          <p
            className='text-sm sm:text-base md:text-[16px] leading-relaxed font-medium w-full'
            style={{ color: '#6C7C93' }}
          >
            We designed and deployed a comprehensive AI-based rostering platform that transforms how
            the organization plans, generates, and manages employee schedules — replacing manual
            processes with intelligent automation.
          </p>
        </div>

        {/* ── GRID LAYOUT: Key Components Bullets (Left) & Premium Overlapping Image Column (Right) ── */}
        <div className='grid grid-cols-1 lg:grid-cols-[1.4fr_0.6fr] gap-10 xl:gap-16 items-start'>
          {/* LEFT COLUMN: Key Components Title & Bullets */}
          <div>
            {/* Key Solution Components Header */}
            <h4 className='text-lg md:text-[24px] font-bold mb-6' style={{ color: '#262626' }}>
              Key Solution Components
            </h4>

            {/* Bullets List */}
            <ul className='space-y-4 w-full'>
              {bullets.map((bullet, i) => (
                <li key={i} className='flex items-start gap-3.5'>
                  {/* Blue Solid Circle Bullet Dot (#2A14CD) */}
                  <span
                    className='flex-shrink-0 w-2 h-2 rounded-full mt-2.5'
                    style={{ backgroundColor: '#2A14CD' }}
                  />
                  <span
                    className='text-sm sm:text-base md:text-[16px] leading-snug font-medium'
                    style={{ color: '#6C7C93' }}
                  >
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT COLUMN: Layered Cosmetics Image Overlapping Downward */}
          <div className='relative -right-[150px] -top-[40px] w-full h-[220px] sm:h-[240px] md:h-[260px] lg:h-[280px] xl:h-[300px] mt-8 lg:mt-0 z-20'>
            {/* Container shifted/translated downwards to overlap into the next section */}
            <div className='relative w-full h-full lg:translate-y-20 xl:translate-y-24 rounded-[32px] overflow-hidden shadow-2xl border border-black/10 hover:scale-[1.01] transition-transform duration-300'>
              <Image
                src='/images/Templates/sephora/sep1.png'
                alt='Cosmetics products on glass shelf - Sephora Solution overlap'
                fill
                className='object-cover object-center'
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
