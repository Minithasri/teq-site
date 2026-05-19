'use client';

import React from 'react';
import Image from 'next/image';

const challengeCards = [
  {
    num: '01',
    title: 'Scalability Limitations',
    desc: 'Domo struggled with growing data volumes.',
  },
  {
    num: '02',
    title: 'Performance Issues',
    desc: 'Slow processing for complex transformations.',
  },
  {
    num: '03',
    title: 'High Processing Costs',
    desc: 'Increased dependency on Domo ETL.',
  },
  {
    num: '04',
    title: 'Complex Workflow Management',
    desc: 'Magic ETL pipelines were difficult to maintain.',
  },
  {
    num: '05',
    title: 'Limited Flexibility',
    desc: 'Challenges handling advanced transformations.',
  },
];

export default function BusinessChallenges() {
  return (
    <section
      className='relative w-full py-6 md:py-8 lg:py-14 overflow-visible'
      style={{ backgroundColor: '#FCFBF8' }}
    >
      <div className='w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 relative z-10'>
        {/* ── SECTION HEADER: 02 Domo to Snowflake... ── */}
        <div className='flex items-start gap-4 md:gap-6 mb-6 w-full max-w-none'>
          {/* Large Number '02' */}
          <span
            className='text-4xl sm:text-5xl md:text-6xl font-extrabold leading-none select-none mt-1'
            style={{
              color: '#2813B5',
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            02
          </span>
          {/* Title Text */}
          <h2
            className='text-2xl sm:text-3xl md:text-[36px] font-bold leading-tight w-full mt-4 max-w-none'
            style={{
              color: '#2813B5',
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            Domo to Snowflake Migration & Data Platform Modernization
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
          Replacing constrained Magic ETL workflows with a scalable, cost-efficient Snowflake
          architecture.
        </p>

        {/* ── BUSINESS CHALLENGES SUB-HEADER ── */}
        <h3
          className='text-xl md:text-2xl font-bold uppercase mb-8 tracking-wide'
          style={{
            color: '#E73030',
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
              className='p-6 sm:p-8 rounded-[24px] bg-[#FFFFFF] shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:scale-[1.01]'
              style={{
                border: '2px solid #E73030',
              }}
            >
              <div>
                {/* Header Row: Squircled Number Box + Title */}
                <div className='flex items-center gap-4 mb-4'>
                  {/* Squircled Number Box with white bg and red border */}
                  <div
                    className='w-10 h-10 rounded-xl flex items-center justify-center border font-bold text-sm bg-[#FFFFFF]'
                    style={{
                      borderColor: '#E73030',
                      color: '#E73030',
                      fontFamily: 'Poppins, sans-serif',
                    }}
                  >
                    {card.num}
                  </div>

                  {/* Card Title */}
                  <h4
                    className='text-base sm:text-[17px] font-bold'
                    style={{
                      color: '#E73030',
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

      {/* ── GLOWING GRADUATION CAP OVERLAPPING BOTTOM RIGHT GRAPHIC ── */}
      <div className='absolute right-0 md:right-60 bottom-[-10px] z-20 hidden lg:block w-[240px] h-[240px] xl:w-[320px] xl:h-[320px] pointer-events-none hover:scale-105 transition-transform duration-500'>
        <div className='relative w-full h-full'>
          <Image
            src='/images/Templates/CA/caa1.png'
            alt='Glowing Graduation Network Cap - caa1'
            fill
            className='object-contain'
            priority
          />
        </div>
      </div>
    </section>
  );
}
