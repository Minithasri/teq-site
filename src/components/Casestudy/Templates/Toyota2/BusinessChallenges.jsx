'use client';
import React from 'react';

const BusinessChallenges = () => {
  const challenges = [
    {
      title: 'Limited Visibility',
      description:
        'No centralized view into equipment breakdowns, repair status, or spare utilization across facilities.',
      icon: '/images/Templates/toyota2/toysvg2.svg',
    },
    {
      title: 'Slow Issue Resolution',
      description:
        'Manual processes caused significant delays in issue identification, coordination, and resolution.',
      icon: '/images/Templates/toyota2/toysvg3.svg',
    },
    {
      title: 'Disconnected Systems',
      description:
        'Data scattered across manual logs and siloed tools with no structured historical records for analysis.',
      icon: '/images/Templates/toyota2/toysvg4.svg',
    },
    {
      title: 'Inefficient Spare Tracking',
      description:
        'Lack of structured spare parts tracking led to poor utilization and inventory mismanagement.',
      icon: '/images/Templates/toyota2/toysvg5.svg',
    },
    {
      title: 'Unplanned Downtime',
      description:
        'Absence of proactive insights led to unexpected equipment failures and costly production stoppages.',
      icon: '/images/Templates/toyota2/toysvg6.svg',
    },
    {
      title: 'Productivity & Cost Impact',
      description:
        'Increasing downtime and manual overhead directly impacted productivity targets and operational costs.',
      icon: '/images/Templates/toyota2/toysvg7.svg',
    },
  ];

  return (
    <section
      className='relative py-10 md:py-20 overflow-visible'
      style={{
        background: 'linear-gradient(180deg, #EFC0C0 0%, #B51111 100%)',
      }}
    >
      {/* Overlapping Car Image */}
      <div className='absolute -top-16 md:-top-32 lg:-top-48 -right-10 md:right-0 w-[200px] md:w-[500px] lg:w-[750px] z-20 pointer-events-none select-none opacity-50 md:opacity-100'>
        <img
          src='/images/Templates/toyota2/toy2.png'
          alt='Automotive overlap'
          className='w-full h-auto object-contain'
        />
      </div>

      <div className='max-w-7xl mx-auto px-4 md:px-12 relative z-10'>
        {/* Badge */}
        <div className='mb-10'>
          <span
            className='inline-block px-8 py-2.5 rounded-full text-[#131720] text-[10px] md:text-xs font-extrabold tracking-[0.2em] uppercase shadow-md'
            style={{
              background: 'linear-gradient(97.05deg, #F4C025 0%, #FE7B02 100%)',
            }}
          >
            Business Challenges
          </span>
        </div>

        {/* Heading & Subtext */}
        <div className='max-w-4xl mb-16 md:mb-10'>
          <h2 className='text-xl md:text-2xl lg:text-4xl font-bold text-white mb-6 md:mb-8 leading-tight'>
            Why Change Was Necessary
          </h2>
          <p className='text-[#FFFFFF] text-sm md:text-lg lg:text-xl leading-relaxed font-normal opacity-80 max-w-2xl'>
            The organization’s reliance on manual, disconnected maintenance systems created
            operational blind spots, increased costs, and left critical equipment vulnerable to
            unplanned failures.
          </p>
        </div>

        {/* Challenges Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8'>
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className='p-6 md:p-10 rounded-[1.5rem] md:rounded-[2rem] border-t border-[#FFFFFF1A] backdrop-blur-[4px] flex flex-col gap-4 md:gap-6 transition-all duration-300 hover:scale-[1.02]'
              style={{
                backgroundColor: '#FFFFFF63',
              }}
            >
              <div className='flex items-center gap-4'>
                <div
                  className='flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center shadow-lg'
                  style={{
                    background: 'linear-gradient(135deg, #676F7E 0%, #1AA2E6 100%)',
                  }}
                >
                  <img
                    src={challenge.icon}
                    alt={challenge.title}
                    className='w-5 h-5 md:w-6 md:h-6'
                  />
                </div>
                <h3 className='text-base md:text-xl font-bold text-white'>{challenge.title}</h3>
              </div>
              <p className='text-white text-sm md:text-base leading-relaxed opacity-85'>
                {challenge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessChallenges;
