'use client';

import React from 'react';
import Image from 'next/image';

const BusinessChallenges = () => {
  const challenges = [
    'Manual and fragmented tool tracking processes across production lines',
    'No real-time visibility into tool lifecycle stages – Drop, Dismantling, Regrinding, Inspection, Final Setting',
    'Manual approvals causing delayed status updates and bottlenecks',
    'Inconsistent data recording affecting accuracy and compliance standards',
    'Limited traceability and governance across multi-site operations',
    'Lack of actionable insights for proactive decision-making',
  ];

  return (
    <section className='relative py-10 overflow-hidden' style={{ backgroundColor: '#F6F7F9' }}>
      {/* Background Image (toyota3) */}
      <div className='absolute inset-0 z-0 flex items-center justify-center opacity-40'>
        <div className='relative w-full aspect-video'>
          <Image
            src='/images/Templates/toyota/toyota3.png'
            alt='Toyota Challenge Background'
            fill
            className='object-contain'
          />
        </div>
      </div>

      <div className='relative z-10 max-w-9xl mx-auto px-6 md:px-12 lg:px-24'>
        {/* Heading */}
        <h2
          className='text-3xl md:text-4xl font-bold text-center mb-10 md:mb-16'
          style={{ color: '#262626' }}
        >
          Business Challenges
        </h2>

        {/* Challenges List */}
        <div className='flex flex-col gap-4 max-w-5xl mx-auto'>
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className='flex items-start md:items-center gap-4 md:gap-6 bg-white p-5 md:p-6 rounded-2xl border-2 transition-transform hover:scale-[1.01] duration-300'
              style={{ borderColor: '#F5F5F5' }}
            >
              {/* Icon Container */}
              <div
                className='flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center'
                style={{
                  borderColor: '#262626',
                  backgroundColor: '#EF44441A',
                }}
              >
                <img
                  src='/images/Templates/toyota/tsvg1.svg'
                  alt='Challenge Icon'
                  className='w-5 h-5 md:w-6 md:h-6'
                />
              </div>

              {/* Text */}
              <p
                className='text-sm md:text-lg font-medium leading-relaxed'
                style={{ color: '#131720D9' }}
              >
                {challenge}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessChallenges;
