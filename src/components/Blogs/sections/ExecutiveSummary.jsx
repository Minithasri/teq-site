// src/components/Blogs/sections/ExecutiveSummary.jsx
'use client';

import React from 'react';

export default function ExecutiveSummary({ summary }) {
  if (!summary || summary.length === 0) return null;

  return (
    <div
      className='relative rounded-2xl overflow-hidden mb-12 p-8 md:p-10 shadow-sm'
      style={{
        background:
          'linear-gradient(0deg, #F9EAE1, #F9EAE1), linear-gradient(258.79deg, rgba(229, 170, 102, 0.3) -13.56%, rgba(255, 165, 129, 0.3) -13.56%, rgba(221, 161, 108, 0.3) 18.23%, rgba(230, 242, 246, 0.3) 53.64%, rgba(202, 185, 246, 0.3) 91.85%, rgba(112, 48, 177, 0.3) 119.62%)',
      }}
    >
      {/* Custom Left Gradient Border Bar */}
      <div
        className='absolute left-0 top-0 bottom-0 w-1'
        style={{
          background: 'linear-gradient(100.44deg, #F97316 41.13%, #43145E 119.62%)',
        }}
      />

      {/* Heading */}
      <h2 className='text-xl md:text-2xl font-bold text-[#262626] mb-6 pl-2'>Executive Summary</h2>

      {/* Bullet List */}
      <ul className='space-y-4 pl-2'>
        {summary.map((item, index) => (
          <li
            key={index}
            className='flex items-start gap-3 text-sm md:text-base text-[#404040] leading-relaxed'
          >
            {/* Custom styled bullet dot */}
            <span className='inline-block w-1.5 h-1.5 rounded-full bg-[#404040] mt-2 flex-shrink-0' />
            <span>
              <strong className='text-[#262626] font-bold'>{item.label}: </strong>
              {item.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
