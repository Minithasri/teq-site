'use client';

import React from 'react';
import Image from 'next/image';

const challengeCards = [
  {
    num: '01',
    title: 'Fragmented Reporting System',
    desc: 'Reports spread across multiple folders.',
  },
  {
    num: '02',
    title: 'Complex Migration Requirement',
    desc: 'Heavy dependency on Salesforce data.',
  },
  {
    num: '03',
    title: 'Performance Limitations',
    desc: 'Slow dashboard performance.',
  },
  {
    num: '04',
    title: 'Data Consistency Risks',
    desc: 'Ensuring accuracy during migration.',
  },
  {
    num: '05',
    title: 'Maintenance Complexity',
    desc: 'Difficult to manage multiple reporting systems.',
  },
];

export default function BusinessChallenges() {
  return (
    <section
      className='relative w-full py-6 md:py-8 lg:py-10 overflow-visible'
      style={{ backgroundColor: '#FCFBF8' }}
    >
      <div className='w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 relative z-10'>
        {/* ── SECTION HEADER: 03 Tableau to Power BI... ── */}
        <div className='flex items-start gap-4 md:gap-6 mb-6 w-full max-w-none'>
          {/* Large Number '03' */}
          <span
            className='text-4xl sm:text-5xl md:text-6xl font-extrabold leading-none select-none mt-1'
            style={{
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            03
          </span>
          {/* Title Text */}
          <h2
            className='text-2xl sm:text-3xl md:text-[36px] font-bold leading-tight w-full mt-4 max-w-none'
            style={{
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            Tableau to Power BI Migration & Reporting Modernization
          </h2>
        </div>

        {/* Subtext description */}
        <p
          className='text-sm sm:text-base md:text-[17px] leading-relaxed mb-12 font-medium w-full max-w-none'
          style={{
            color: '#535F6C',
            fontFamily: 'Poppins, sans-serif',
          }}
        >
          Unifying a fragmented reporting estate into a governed, high-performance Power BI
          environment.
        </p>

        {/* ── BUSINESS CHALLENGES SUB-HEADER ── */}
        <h3
          className='text-xl md:text-2xl font-bold text-center mb-8 tracking-wide'
          style={{
            fontFamily: 'Poppins, sans-serif',
          }}
        >
          Business Challenges
        </h3>

        {/* ── 5-CARD GRID ── */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 lg:mb-20 max-w-[1200px]'>
          {challengeCards.map((card, i) => (
            <div
              key={i}
              className='p-6 sm:p-8 rounded-[24px] bg-[#FFFFFF] shadow-sm flex flex-col justify-between border-2 border-[#F5F5F5] shadow-[0px_8px_22px_rgba(0,0,0,0.08)]'
            >
              <div>
                {/* Header Row: Squircled Number Box + Title */}
                <div className='flex items-center gap-4 mb-4'>
                  {/* Squircled Number Box with white bg and red border */}
                  <div
                    className='w-10 h-10 rounded-xl flex items-center justify-center border font-bold text-sm bg-[#FFFFFF]'
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                    }}
                  >
                    {card.num}
                  </div>

                  {/* Card Title */}
                  <h4
                    className='text-base sm:text-[17px] font-bold text-[#0F1729]/80'
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                    }}
                  >
                    {card.title}
                  </h4>
                </div>

                {/* Card Description */}
                <p
                  className='text-sm sm:text-base leading-relaxed font-normal'
                  style={{
                    color: '#535F6C',
                    fontFamily: 'Poppins, sans-serif',
                  }}
                >
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── GLOWING BOOKS & GLOBE OVERLAPPING BOTTOM RIGHT GRAPHIC (caaa1.png) ── */}
      <div className='absolute right-0 md:right-40 bottom-[-40px] z-20 hidden lg:block w-[280px] h-[280px] xl:w-[360px] xl:h-[360px] pointer-events-none hover:scale-105 transition-transform duration-500'>
        <div className='relative w-full h-full'>
          <Image
            src='/images/Templates/CA/caaa1.png'
            alt='Glowing Globe on Stack of Books - caaa1'
            fill
            className='object-contain'
            priority
          />
        </div>
      </div>
    </section>
  );
}
