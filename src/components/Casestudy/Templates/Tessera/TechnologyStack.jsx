'use client';

import React from 'react';

const technologies = [
  'Dell Boomi',
  'AWS Cloud',
  'Salesforce CRM',
  'Snowflake Data',
  'OAuth 2.0 Security',
  'Python Engine',
  'GxP Compliant Systems',
];

export default function TechnologyStack() {
  return (
    <section className='w-full bg-white'>
      <div className='w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-12 md:py-16'>
        {/* Title */}
        <h2
          className='text-2xl md:text-3xl font-bold mb-8 md:mb-10 text-center lg:text-left'
          style={{ color: '#0749CA' }}
        >
          Technology Stack
        </h2>

        {/* Tech Badges Flex Layout */}
        <div className='flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 mb-12 md:mb-16'>
          {technologies.map((tech, i) => (
            <div
              key={i}
              className='px-6 py-3 rounded-full text-sm md:text-base font-bold shadow-sm transition-all duration-300 hover:scale-105 border-2 bg-white'
              style={{
                color: '#0749CA',
                borderColor: '#0749CA',
              }}
            >
              {tech}
            </div>
          ))}
        </div>

        {/* Value Delivered Section */}
        <div className='border-t border-[#E2E4E9] pt-8 md:pt-12'>
          <h2 className='text-2xl md:text-3xl font-bold mb-5' style={{ color: '#0749CA' }}>
            Value Delivered
          </h2>
          <p
            className='text-sm sm:text-[15px] md:text-[17px] leading-relaxed max-w-7xl font-medium'
            style={{ color: '#6A7181' }}
          >
            By modernizing their middleware infrastructure with{' '}
            <span style={{ color: '#56D73C', fontWeight: 'bold' }}>Dell Boomi</span>, we enabled the
            client to achieve near real-time data orchestration and{' '}
            <span style={{ color: '#56D73C', fontWeight: 'bold' }}>bulletproof compliance</span>.
            Our solution drastically{' '}
            <span style={{ color: '#56D73C', fontWeight: 'bold' }}>
              minimized biological pipeline latency
            </span>
            , automated error diagnostics, and{' '}
            <span style={{ color: '#56D73C', fontWeight: 'bold' }}>cut operational costs</span>,
            paving the way for faster biotechnology R&D and clinical analytics.
          </p>
        </div>
      </div>
    </section>
  );
}
