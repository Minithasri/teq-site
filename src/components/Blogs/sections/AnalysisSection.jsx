// src/components/Blogs/sections/AnalysisSection.jsx
'use client';

import React from 'react';

export default function AnalysisSection({ analysis }) {
  if (!analysis) return null;

  return (
    <div
      className='w-full py-16 px-6 md:px-12 my-12'
      style={{
        background:
          'linear-gradient(0deg, rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), linear-gradient(106.63deg, #7030B1 0%, #B56DD3 100%)',
      }}
    >
      <div className='max-w-7xl mx-auto'>
        {/* Section Heading */}
        <h2 className='text-2xl md:text-3xl font-medium text-[#404040] mb-4'>{analysis.title}</h2>

        {/* Section Description */}
        <p className='text-[#404040] text-sm md:text-base font-normal leading-relaxed mb-8 whitespace-pre-wrap'>
          {analysis.description}
        </p>

        {/* White Card */}
        <div className='bg-[#FFFFFF] rounded-2xl p-8 md:p-10 shadow-sm'>
          {analysis.cardTitle && (
            <h3 className='text-xl md:text-2xl font-medium text-[#404040] mb-8'>
              {analysis.cardTitle}
            </h3>
          )}

          {analysis.cardItems && analysis.cardItems.length > 0 && (
            <div className='space-y-6'>
              {analysis.cardItems.map((item, index) => (
                <div key={index} className='flex flex-col gap-1.5'>
                  <h4 className='text-base md:text-lg font-medium text-[#404040]'>{item.label}</h4>
                  <p className='text-[#404040] text-sm md:text-base font-normal leading-relaxed'>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          )}

          {analysis.quoteText && (
            <p className='text-[#404040] text-sm md:text-base font-normal leading-relaxed'>
              {analysis.quoteText}{' '}
              {analysis.quoteHighlight && (
                <span className='font-bold' style={{ color: '#6E2B8B' }}>
                  {analysis.quoteHighlight}
                </span>
              )}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
