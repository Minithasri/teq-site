// src/components/Blogs/sections/GovernanceImperative.jsx
'use client';

import React from 'react';

export default function GovernanceImperative({ governanceData }) {
  if (!governanceData) return null;

  return (
    <div className='w-full bg-[#FFFFFF] py-16 px-4 md:px-6 my-12 max-w-7xl mx-auto'>
      {/* Header Area */}
      <div className='max-w-4xl mx-auto text-center mb-16'>
        <h2 className='text-3xl md:text-4xl font-medium text-[#404040] mb-6 font-sans tracking-tight'>
          {governanceData.title}
        </h2>
        <p className='text-[#404040]/80 font-sans font-light text-base md:text-lg leading-relaxed max-w-2xl mx-auto'>
          {governanceData.description}
        </p>
      </div>

      {/* Cards Area */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {governanceData.cards.map((card, idx) => (
          <div
            key={idx}
            className='bg-[#FFFFFF] border border-[#ECEAE6] rounded-2xl p-8 flex flex-col items-start gap-4 transition-all duration-300 hover:shadow-lg hover:border-purple-200'
          >
            {/* Light Purple Gradient Number */}
            <div
              className='text-7xl font-light font-sans tracking-tighter select-none leading-none mb-2'
              style={{
                background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                opacity: 0.35,
              }}
            >
              {card.number}
            </div>

            {/* Card Title */}
            <h3 className='text-xl font-bold text-[#404040] leading-snug font-sans'>
              {card.title}
            </h3>

            {/* Card Description */}
            <p className='text-gray-600 font-sans font-light text-sm md:text-base leading-relaxed'>
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
