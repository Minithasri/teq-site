'use client';
import React from 'react';

const DrivingTransformation = () => {
  const tags = [
    'Operational Efficiency',
    'Reliability & Uptime',
    'Scalable Architecture',
    'Data-Driven Decisions',
  ];

  return (
    <section className='py-10 md:py-20 bg-[#F6F7F9]'>
      <div className='max-w-9xl mx-auto px-6 md:px-12 lg:px-40'>
        {/* Badge */}
        <div className='mb-10'>
          <span
            className='inline-block px-8 py-2.5 rounded-full text-white text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase shadow-md'
            style={{
              background: 'linear-gradient(98.87deg, #676F7E 0%, #1AA2E6 100%)',
            }}
          >
            Value Delivered
          </span>
        </div>

        {/* Heading & Subtext */}
        <div className='mb-8 md:mb-10'>
          <h2 className='text-2xl md:text-3xl lg:text-5xl font-bold text-[#131720] mb-6 md:mb-8 leading-tight'>
            Driving Operational Excellence
          </h2>
          <p className='text-[#676F7E] text-sm md:text-lg lg:text-xl max-w-5xl leading-relaxed font-normal opacity-90'>
            By replacing fragmented, manual processes with an integrated digital maintenance
            platform, we enabled a leading global automotive manufacturer to achieve measurable
            improvements in efficiency, reliability, and scalability — laying the foundation for
            proactive, data-driven maintenance operations.
          </p>
        </div>

        {/* Tags */}
        <div className='flex flex-nowrap overflow-x-auto lg:overflow-x-visible gap-3 md:gap-6 pb-6 lg:pb-0 scrollbar-hide'>
          {tags.map((tag, index) => (
            <div
              key={index}
              className='flex-shrink-0 flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 rounded-full bg-white border border-[#DCDFE5] shadow-sm hover:shadow-md transition-all duration-300'
            >
              <img
                src='/images/Templates/toyota2/toysvg19.svg'
                alt='Check'
                className='w-5 h-5 md:w-6 md:h-6'
              />
              <span className='text-[#131720] text-xs md:text-lg font-semibold whitespace-nowrap'>
                {tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DrivingTransformation;
