'use client';

import React from 'react';

const solutionCards = [
  {
    num: '01',
    title: 'Report Migration Strategy',
    desc: 'Migrated 19 Tableau reports to Power BI.',
  },
  {
    num: '02',
    title: 'Data Model Standardization',
    desc: 'Built structured and optimized data models.',
  },
  {
    num: '03',
    title: 'Salesforce Integration',
    desc: 'Ensured accurate data connectivity.',
  },
  {
    num: '04',
    title: 'Dashboard Optimization',
    desc: 'Improved performance and usability.',
  },
  {
    num: '05',
    title: 'Deployment & Governance',
    desc: 'Published reports with access control and scheduling.',
  },
];

export default function Solutions() {
  return (
    <section
      className='relative w-full py-6 md:py-8 lg:py-10 overflow-visible'
      style={{ backgroundColor: '#FCFBF8' }}
    >
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
              className='p-6 sm:p-8 rounded-[24px] bg-white shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:scale-[1.01]'
              style={{
                border: '2px solid #4B52E4',
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
