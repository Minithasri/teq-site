'use client';
import React from 'react';

const BusinessImpact = () => {
  const stats = [
    {
      value: '20-30%',
      label: 'Reduction in Equipment Downtime',
    },
    {
      value: '~50%',
      label: 'Faster Maintenance Response',
    },
    {
      value: '40-60%',
      label: 'Operational Efficiency Gain',
    },
  ];

  const outcomes = [
    'Improved transparency, accountability, and governance across maintenance operations',
    'Enabled proactive maintenance strategies, reducing unexpected breakdown risks',
    'Centralized tracking eliminated manual data-entry and paper-based processes',
    'Structured historical data powers continuous improvement and predictive initiatives',
  ];

  return (
    <section className='py-10 md:py-20 bg-[#F6F7F9]'>
      <div className='max-w-7xl mx-auto px-6 md:px-12'>
        {/* Badge */}
        <div className='mb-10'>
          <span
            className='inline-block px-8 py-2.5 rounded-full text-white text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase shadow-md'
            style={{
              background: 'linear-gradient(98.98deg, #676F7E 0%, #1AA2E6 100%)',
            }}
          >
            Business Impact
          </span>
        </div>

        {/* Heading */}
        <div className='mb-6 md:mb-10'>
          <h2 className='text-xl md:text-2xl lg:text-4xl font-bold text-[#131720] leading-tight'>
            Measurable Outcomes
          </h2>
        </div>

        {/* Stats Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-10 md:mb-16'>
          {stats.map((stat, index) => (
            <div
              key={index}
              className='p-8 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] bg-white border border-[#DCDFE5] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group'
            >
              <h3
                className='text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent transition-transform group-hover:scale-110'
                style={{
                  backgroundImage: 'linear-gradient(102.07deg, #676F7E 0%, #1AA2E6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {stat.value}
              </h3>
              <p className='text-[#676F7E] text-sm md:text-base font-medium opacity-90 leading-snug'>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Key Outcomes Box */}
        <div className='p-6 md:p-16 rounded-[1.5rem] md:rounded-[2.5rem] bg-white border border-[#DCDFE5] shadow-sm'>
          <h3 className='text-xl md:text-3xl font-bold text-[#131720] mb-8 md:mb-10'>
            Key Outcomes
          </h3>
          <ul className='space-y-4 md:space-y-8'>
            {outcomes.map((outcome, index) => (
              <li key={index} className='flex items-start gap-4 md:gap-6 group'>
                <div
                  className='flex-shrink-0 w-2.5 h-2.5 rounded-full mt-1.5 md:mt-2.5 shadow-sm transition-transform group-hover:scale-150'
                  style={{
                    background: 'linear-gradient(135deg, #F4C025 0%, #FE7B02 100%)',
                  }}
                ></div>
                <p className='text-[#676F7E] text-sm md:text-lg leading-relaxed font-normal opacity-90'>
                  {outcome}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BusinessImpact;
