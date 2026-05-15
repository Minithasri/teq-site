'use client';
import React from 'react';

const TechnologyStack = () => {
  const technologies = [
    'Power Apps',
    'Power Automate',
    'SQL Server',
    'Power BI',
    'SharePoint',
    'PostgreSQL',
    'MongoDB',
    'Azure Data Factory',
    'CI/CD Pipelines',
    'Excel Integration',
    'External Systems',
  ];

  return (
    <section className='py-8 md:py-16' style={{ backgroundColor: '#131720' }}>
      <div className='max-w-7xl mx-auto px-6 md:px-12'>
        {/* Badge */}
        <div className='mb-10'>
          <span
            className='inline-block px-8 py-2.5 rounded-full text-[#131720] text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase shadow-md'
            style={{
              background: 'linear-gradient(97.97deg, #F4C025 0%, #FE7B02 100%)',
            }}
          >
            Technology Stack
          </span>
        </div>

        {/* Heading */}
        <div className='mb-8 md:mb-10'>
          <h2 className='text-xl md:text-2xl lg:text-4xl font-bold text-white leading-tight'>
            Built With Industry-Leading Tools
          </h2>
        </div>

        {/* Tech Stack Tags */}
        <div className='flex flex-wrap gap-3 md:gap-6'>
          {technologies.map((tech, index) => (
            <div
              key={index}
              className='px-6 md:px-8 py-2.5 md:py-3 rounded-full border-t border-[#FFFFFF26] backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-[#FFFFFF1A]'
              style={{
                backgroundColor: '#FFFFFF0D',
              }}
            >
              <span className='text-white text-xs md:text-lg font-medium whitespace-nowrap'>
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;
