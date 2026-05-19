'use client';

import React from 'react';

const metrics = [
  {
    val: '~60%',
    title: 'Reduction in Manual Reporting',
    desc: 'Automated dashboards eliminated repetitive spreadsheet work across teams.',
  },
  {
    val: '~50%',
    title: 'Faster Decision-Making',
    desc: 'Real-time insights compressed reporting cycles from days to minutes.',
  },
  {
    val: '100%',
    title: 'Self-Service Enabled',
    desc: 'Business users now explore data independently without IT bottlenecks.',
  },
  {
    val: '360°',
    title: 'Operational Visibility',
    desc: 'Unified view of loans, deposits and teller performance in one platform.',
  },
];

export default function BusinessImpact() {
  return (
    <section className='w-full bg-[#FFFFFF] py-10 md:py-12'>
      <div className='w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24'>
        {/* Section Header */}
        <div className='w-full mb-12'>
          <h2
            className='text-2xl md:text-3xl font-extrabold uppercase mb-4 tracking-wide'
            style={{ color: '#15B615', fontFamily: 'Poppins, sans-serif' }}
          >
            BUSINESS IMPACT
          </h2>
          <h3
            className='text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-bold leading-tight'
            style={{ color: '#000000', fontFamily: 'Poppins, sans-serif' }}
          >
            Measurable outcomes across the organization
          </h3>
        </div>

        {/* ── METRIC CARDS GRID ── */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-[1200px]'>
          {metrics.map((item, i) => (
            <div
              key={i}
              className='rounded-[24px] p-6 md:p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-md hover:scale-[1.01]'
              style={{
                backgroundColor: '#FFFFFF',
                border: '2px solid #15B615',
              }}
            >
              {/* Metric Percentage */}
              <span
                className='text-4xl sm:text-[44px] md:text-[48px] font-extrabold block mb-4'
                style={{ color: '#15B615', fontFamily: 'Poppins, sans-serif' }}
              >
                {item.val}
              </span>

              {/* Title / Label */}
              <div className='w-full flex items-center justify-center h-12 md:h-14 mb-4'>
                <h4
                  className='text-base sm:text-[17px] font-bold text-center'
                  style={{ color: '#000000', fontFamily: 'Poppins, sans-serif' }}
                >
                  {item.title}
                </h4>
              </div>

              {/* Description Subtext */}
              <p
                className='text-sm sm:text-[15px] leading-relaxed font-normal'
                style={{ color: '#000000', fontFamily: 'Poppins, sans-serif' }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
