'use client';

import React from 'react';
import Image from 'next/image';

const solutionCards = [
  {
    num: '01',
    title: 'Migration to Snowflake',
    desc: 'Moved data processing to scalable cloud warehouse.',
  },
  {
    num: '02',
    title: 'Data Extraction & Ingestion',
    desc: 'Migrated datasets from Domo and external sources.',
  },
  {
    num: '03',
    title: 'SQL-Based Transformations',
    desc: 'Rebuilt ETL logic using optimized SQL models.',
  },
  {
    num: '04',
    title: 'Workflow Orchestration',
    desc: 'Implemented tools for pipeline management.',
  },
  {
    num: '05',
    title: 'Data Validation Framework',
    desc: 'Ensured consistency between old and new systems.',
  },
];

export default function Solutions() {
  return (
    <section className='relative w-full py-2 md:py-4 lg:py-4 bg-[#FCFBF8] overflow-visible'>
      <div className='w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 relative z-10'>
        {/* ── SECTION HEADER ── */}
        <h2
          className='text-2xl md:text-3xl font-bold uppercase mb-10 tracking-wide'
          style={{
            color: '#4B52E4',
            fontFamily: 'Poppins, sans-serif',
          }}
        >
          Solution Implemented
        </h2>

        {/* ── 5-CARD GRID ── */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mb-12'>
          {solutionCards.map((card, i) => (
            <div
              key={i}
              className='p-6 sm:p-8 rounded-[24px] shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:scale-[1.01]'
              style={{
                background: 'linear-gradient(180deg, #FCFBF8 0%, #EDF3F7 100%)',
                border: '2px solid #4B52E4',
              }}
            >
              <div>
                {/* Header Row: Number Squircle Box + Title */}
                <div className='flex items-center gap-4 mb-4'>
                  {/* Number Box with custom cyan-blue linear gradient background */}
                  <div
                    className='w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm text-white select-none'
                    style={{
                      background: 'linear-gradient(135deg, #009D9E 0%, #0082A9 100%)',
                      fontFamily: 'Poppins, sans-serif',
                    }}
                  >
                    {card.num}
                  </div>

                  {/* Title */}
                  <h4
                    className='text-base sm:text-[17px] font-bold'
                    style={{
                      color: '#4B52E4',
                      fontFamily: 'Poppins, sans-serif',
                    }}
                  >
                    {card.title}
                  </h4>
                </div>

                {/* Description */}
                <p
                  className='text-sm sm:text-base leading-relaxed font-normal opacity-90'
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

      {/* ── OVERLAPPING BOTTOM RIGHT CAA2 GRADUATION GRAPHIC ── */}
      {/*
        This positions caa2.png hanging downwards off the bottom of the section
        so that it overlaps with the next block perfectly.
      */}
      <div className='absolute right-0 md:right-40 top-[400px] z-20 hidden lg:block w-[260px] h-[260px] xl:w-[500px] xl:h-[700px] pointer-events-none hover:scale-105 transition-transform duration-500'>
        <div className='relative w-full h-full'>
          <Image
            src='/images/Templates/CA/caa2.png'
            alt='Overlapping Graduation Cap - caa2'
            fill
            className='object-contain'
            priority
          />
        </div>
      </div>
    </section>
  );
}
