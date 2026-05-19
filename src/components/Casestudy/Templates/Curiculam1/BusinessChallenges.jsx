'use client';

import React from 'react';
import Image from 'next/image';

const challengeCards = [
  {
    num: '01',
    title: 'Legacy ETL Limitations',
    desc: 'SSIS-based pipelines were inefficient and slow.',
  },
  {
    num: '02',
    title: 'Performance Bottlenecks',
    desc: 'Delayed data processing impacted reporting timelines.',
  },
  {
    num: '03',
    title: 'Limited Scalability',
    desc: 'Existing system could not handle growing data volumes.',
  },
  {
    num: '04',
    title: 'Lack of Real-Time Data',
    desc: 'Batch processing restricted timely insights.',
  },
  {
    num: '05',
    title: 'High Manual Dependency',
    desc: 'Frequent intervention required for ETL operations.',
  },
];

export default function BusinessChallenges() {
  return (
    <section className='relative w-full py-6 md:py-8 lg:py-10 overflow-visible bg-[#FCFBF8]'>
      <div className='w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 relative z-10'>
        {/* ── SECTION HEADER: 01 SSIS to Snowflake... ── */}
        <div className='flex items-start gap-4 md:gap-6 mb-6 max-w-5xl'>
          {/* Large Number '01' */}
          <span
            className='text-4xl sm:text-5xl md:text-6xl font-extrabold leading-none select-none mt-1'
            style={{
              color: '#2813B5',
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            01
          </span>
          {/* Title Text */}
          <h2
            className='text-2xl sm:text-3xl md:text-[36px] font-bold leading-tight'
            style={{
              color: '#2813B5',
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            SSIS to Snowflake Data Platform Migration & Modernization
          </h2>
        </div>

        {/* Subtext description */}
        <p
          className='text-sm sm:text-base md:text-[17px] leading-relaxed mb-12 font-medium max-w-4xl'
          style={{
            color: '#535F6C',
            fontFamily: 'Poppins, sans-serif',
          }}
        >
          Re-architecting a legacy ETL estate into a cloud-native, near real-time data platform
          built on Snowflake.
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
              className='p-6 sm:p-8 rounded-[24px] bg-[#FFFFFF] shadow-md flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:scale-[1.01]'
              style={{
                border: '2px solid #E73030',
              }}
            >
              <div>
                {/* Header Row: Squircled Number Box + Title */}
                <div className='flex items-center gap-4 mb-4'>
                  {/* Squircled Number Box */}
                  <div
                    className='w-10 h-10 rounded-xl flex items-center justify-center border font-bold text-sm'
                    style={{
                      borderColor: '#E73030',
                      backgroundColor: '#E7303026',
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

      {/* ── DOUBLE LAYERED OVERLAPPING BOTTOM RIGHT IMAGE ── */}
      {/*
        This absolute block positions the two instances of ca1.png.
        One sits in the background with reduced opacity and slightly larger offset,
        and the other overlaps completely in the foreground.
      */}
      <div className='absolute right-0 bottom-[-20px] z-20 hidden lg:block w-[380px] h-[250px] xl:w-[440px] xl:h-[280px] pointer-events-none'>
        {/* Layer 1: Background shadow/opacity overlap image (shifted slightly down/left and scaled up) */}
        <div className='absolute inset-0 translate-x-8 translate-y-8 scale-[1.08] opacity-35 filter blur-[1px]'>
          <Image
            src='/images/Templates/CA/ca1.png'
            alt='Layered backdrop - Classroom / books background'
            fill
            className='object-cover rounded-[32px]'
          />
        </div>

        {/* Layer 2: Main foreground sharp opaque image */}
        <div className='absolute inset-0 shadow-2xl border border-black/10 rounded-[32px] overflow-hidden bg-white'>
          <Image
            src='/images/Templates/CA/ca1.png'
            alt='Main classroom and books background - CA1'
            fill
            className='object-cover'
            priority
          />
        </div>
      </div>
    </section>
  );
}
