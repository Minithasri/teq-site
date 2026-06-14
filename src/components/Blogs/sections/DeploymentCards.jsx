// src/components/Blogs/sections/DeploymentCards.jsx
'use client';

import React from 'react';

export default function DeploymentCards({ deploymentData }) {
  if (!deploymentData) return null;

  return (
    <div className='w-full bg-[#FFFFFF] py-16 px-4 md:px-6 my-12 max-w-7xl mx-auto'>
      {/* Section Title */}
      <h2 className='text-2xl md:text-3xl font-medium text-[#404040] text-center mb-12 font-sans'>
        {deploymentData.title}
      </h2>

      {/* Grid of Cards */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {deploymentData.cards.map((card, index) => (
          <div
            key={index}
            className='bg-[#FFFFFF] border border-[#f3f4f6] rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden flex flex-col justify-between'
          >
            {/* Top Area: Icon & Title */}
            <div className='p-8 flex flex-col items-start gap-6'>
              {/* White Icon wrapper with shadow */}
              <div className='w-12 h-12 rounded-xl bg-[#FFFFFF] shadow-md flex items-center justify-center border border-gray-100'>
                <img src={card.icon} alt={card.title} className='w-6 h-6 object-contain' />
              </div>

              {/* Title */}
              <h3 className='text-lg md:text-xl font-medium text-[#404040] font-sans'>
                {card.title}
              </h3>
            </div>

            {/* Bottom Gradient Bar */}
            <div
              style={{
                background: 'linear-gradient(90deg, #FFF7EB 0%, #FAE0FA 100%)',
              }}
              className='py-4 px-8 flex items-center gap-3 border-t border-gray-100'
            >
              {/* Star icon blog8.svg */}
              <img
                src='/images/blogs/blog8.svg'
                alt='Star icon'
                className='w-4 h-4 object-contain flex-shrink-0'
              />
              <span className='text-sm text-[#404040] font-sans font-light leading-none'>
                {card.statText}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
