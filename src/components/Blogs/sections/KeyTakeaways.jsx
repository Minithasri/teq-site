// src/components/Blogs/sections/KeyTakeaways.jsx
'use client';

import React from 'react';

export default function KeyTakeaways({ takeawaysData }) {
  if (!takeawaysData) return null;

  return (
    <div
      className='w-full py-16 px-4 md:px-6 my-12'
      style={{
        background:
          'linear-gradient(0deg, rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), linear-gradient(106.63deg, #7030B1 0%, #B56DD3 100%)',
      }}
    >
      <div className='max-w-7xl mx-auto flex flex-col gap-8'>
        {/* Title */}
        <h2 className='text-3xl font-medium text-[#404040] font-sans'>{takeawaysData.title}</h2>

        {/* Takeaway rows */}
        <div className='flex flex-col gap-4'>
          {takeawaysData.items.map((item, index) => (
            <div
              key={index}
              className='bg-[#FFFFFF] rounded-2xl p-6 md:p-8 flex items-start gap-4 shadow-sm border border-white'
            >
              {/* Number with Gradient */}
              <span
                className='text-base md:text-lg font-bold font-sans flex-shrink-0'
                style={{
                  background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline-block',
                }}
              >
                {item.num}
              </span>

              {/* Content text */}
              <p className='text-sm md:text-base text-[#404040] font-sans font-medium leading-relaxed'>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
