'use client';

import React from 'react';

const TechnologyStack = () => {
  const stack = [
    {
      category: 'FRONTEND',
      techs: ['React.js', 'TypeScript'],
    },
    {
      category: 'BACKEND',
      techs: ['Node.js', 'Express'],
    },
    {
      category: 'DATABASE',
      techs: ['MS SQL Server'],
    },
    {
      category: 'INTEGRATIONS',
      techs: ['Excel Export', 'Barcode Scanner'],
    },
  ];

  const logos = [
    '/images/Templates/aequs/aequssvg16.svg',
    '/images/Templates/aequs/aequssvg17.svg',
    '/images/Templates/aequs/aequssvg18.svg',
    '/images/Templates/aequs/aequssvg19.svg',
    '/images/Templates/aequs/aequssvg20.svg',
    '/images/Templates/aequs/aequssvg21.svg',
    '/images/Templates/aequs/aequssvg22.svg',
  ];

  return (
    <section className='py-20' style={{ backgroundColor: '#FCFBF8' }}>
      <div className='max-w-9xl mx-auto px-6 md:px-16 lg:px-24 text-center'>
        {/* Header Row: Title + Logos grouped together */}
        <h2 className='text-4xl font-bold whitespace-nowrap'>Technology Stack</h2>
        <div className='mt-6 flex flex-col lg:flex-row items-center justify-center gap-12 mb-16'>
          {/* Logo Row */}
          <div className='flex flex-wrap items-center justify-start gap-8'>
            {logos.map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt='Technology'
                className='h-10 md:h-12 w-auto object-contain transition-transform hover:scale-110'
              />
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {stack.map((item, index) => (
            <div
              key={index}
              className='bg-white p-8 rounded-2xl border-2 border-[#F5F5F5] flex flex-col items-center text-center space-y-4 transition-all duration-300 shadow-[0px_8px_24px_rgba(0,0,0,0.08)]'
            >
              <h3
                className='text-xs font-black uppercase tracking-widest'
                style={{ color: '#6A7181' }}
              >
                {item.category}
              </h3>
              <div className='space-y-1'>
                {item.techs.map((tech, i) => (
                  <p key={i} className='text-[17px] font-bold' style={{ color: '#131720' }}>
                    {tech}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;
