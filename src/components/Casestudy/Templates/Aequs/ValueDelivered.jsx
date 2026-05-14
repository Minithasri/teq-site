'use client';

import React from 'react';

const ValueDelivered = () => {
  const values = [
    'Operational Efficiency',
    'Complete Traceability',
    'Scalable Architecture',
    'Digital Transformation',
    'Compliance Ready',
  ];

  return (
    <section className='py-20' style={{ backgroundColor: '#F3F5F7' }}>
      <div className='max-w-9xl mx-auto px-6 md:px-16 lg:px-24'>
        {/* Section Header */}
        <div className='mb-12'>
          <h2 className='text-4xl font-bold mb-6' style={{ color: '#131720' }}>
            Value Delivered
          </h2>
          <p className='text-lg max-w-9xl leading-relaxed' style={{ color: '#6A7181' }}>
            By replacing fragmented, manual processes with a unified digital platform, we empowered
            the organization to achieve measurably higher testing efficiency, complete traceability,
            and faster compliance cycles.
          </p>
        </div>

        {/* Value Pills Grid */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6'>
          {values.map((item, index) => (
            <div
              key={index}
              className='px-4 py-6 rounded-[20px] border flex items-center justify-center text-center transition-all duration-300 hover:shadow-md'
              style={{
                borderColor: '#0B5BCB33',
                backgroundColor: '#0B5BCB1A',
                color: '#0B5BCB',
              }}
            >
              <span className='text-[14px] md:text-[16px] font-bold leading-tight uppercase tracking-wide'>
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueDelivered;
