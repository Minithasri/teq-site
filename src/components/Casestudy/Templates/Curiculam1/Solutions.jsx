'use client';

import React from 'react';

const solutionCards = [
  {
    num: '01',
    title: 'Snowflake Data Warehouse',
    desc: 'Migrated legacy data platform to Snowflake.',
  },
  {
    num: '02',
    title: 'Automated Data Ingestion',
    desc: 'Used Fivetran to ingest Salesforce data.',
  },
  {
    num: '03',
    title: 'Cloud Storage Integration',
    desc: 'Leveraged AWS S3 for scalable storage.',
  },
  {
    num: '04',
    title: 'Workflow Orchestration',
    desc: 'Implemented Workato for automation and reverse data flow.',
  },
  {
    num: '05',
    title: 'Optimized SQL Pipelines',
    desc: 'Improved query performance and efficiency.',
  },
];

export default function Solutions() {
  return (
    <section className='relative w-full py-8 md:py-10 lg:py-12 bg-[#FCFBF8] overflow-visible'>
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
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px]'>
          {solutionCards.map((card, i) => (
            <div
              key={i}
              className='p-6 sm:p-8 rounded-[24px] shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:scale-[1.01]'
              style={{
                background: 'linear-gradient(180deg, #FCFBF8 0%, #EDF3F7 100%)',
                border: '1.5px solid #4B52E4',
              }}
            >
              <div>
                {/* Header Row: Number Squircle Box + Title */}
                <div className='flex items-center gap-4 mb-4'>
                  {/* Number Box with white background (#FFFFFF) and border #4B52E4 */}
                  <div
                    className='w-10 h-10 rounded-xl flex items-center justify-center border font-bold text-sm bg-white'
                    style={{
                      borderColor: '#4B52E4',
                      color: '#4B52E4',
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
    </section>
  );
}
