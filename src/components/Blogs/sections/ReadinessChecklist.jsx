// src/components/Blogs/sections/ReadinessChecklist.jsx
'use client';

import React from 'react';

export default function ReadinessChecklist({ checklistData }) {
  if (!checklistData) return null;

  return (
    <div className='w-full bg-[#FFFFFF] py-12 px-4 md:px-6 my-12'>
      <div className='max-w-7xl mx-auto'>
        <div className='bg-[#F8F7F5] rounded-3xl p-8 md:p-12 border border-[#ECEAE6]'>
          {/* Section Heading */}
          <h2 className='text-2xl md:text-3xl font-medium text-[#404040] mb-8 font-sans'>
            {checklistData.title}
          </h2>

          {/* List of Checklist Items */}
          <div className='space-y-6'>
            {checklistData.items.map((item, index) => (
              <div key={index} className='flex items-start gap-4'>
                {/* Square checkbox icon: blog9.svg */}
                <img
                  src='/images/blogs/blog9.svg'
                  alt='Checkbox'
                  className='w-5 h-5 md:w-6 md:h-6 object-contain flex-shrink-0 mt-0.5'
                />
                <p className='text-sm md:text-base text-[#404040] font-sans leading-relaxed'>
                  <strong className='font-medium'>{item.label}:</strong>{' '}
                  <span className='font-medium'>{item.text}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
