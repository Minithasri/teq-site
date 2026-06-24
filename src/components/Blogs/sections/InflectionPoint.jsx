// src/components/Blogs/sections/InflectionPoint.jsx
'use client';

import React from 'react';

export default function InflectionPoint({ sectionData }) {
  if (!sectionData) return null;

  return (
    <div className='w-full py-16 px-4 md:px-6 my-12 bg-[#FFFFFF]'>
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center'>
        {/* Left Side: Text */}
        <div className='md:w-1/2'>
          <h2 className='text-3xl md:text-4xl font-bold text-[#404040] mb-6'>
            {sectionData.title}
          </h2>
          <p className='text-[#8B8B8B] text-sm md:text-base font-normal leading-relaxed whitespace-pre-wrap text-justify'>
            {sectionData.description}
          </p>
        </div>

        {/* Right Side: Stat Cards */}
        <div className='md:w-1/2 w-full'>
          <div
            className='flex flex-col rounded-xl overflow-hidden'
            style={{ backgroundColor: '#6E2B8B' }}
          >
            {sectionData.stats.map((stat, index) => (
              <div
                key={index}
                className={`p-8 ${index !== sectionData.stats.length - 1 ? 'border-b border-white/20' : ''}`}
              >
                <div className='text-4xl font-bold text-white mb-2'>{stat.value}</div>
                <div className='text-white/90 text-xs font-semibold tracking-wider uppercase'>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
