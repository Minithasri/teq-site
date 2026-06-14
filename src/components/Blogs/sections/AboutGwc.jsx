// src/components/Blogs/sections/AboutGwc.jsx
'use client';

import React from 'react';

export default function AboutGwc({ aboutData }) {
  if (!aboutData) return null;

  return (
    <div className='w-full bg-[#FFFFFF] py-12 px-4 md:px-6 my-12'>
      <div className='max-w-7xl mx-auto'>
        <div
          className='rounded-3xl p-8 md:p-12 border border-[#ECEAE6] flex flex-col gap-4'
          style={{
            background:
              'linear-gradient(0deg, #F9EAE1, #F9EAE1), linear-gradient(258.79deg, rgba(229, 170, 102, 0.3) -13.56%, rgba(255, 165, 129, 0.3) -13.56%, rgba(221, 161, 108, 0.3) 18.23%, rgba(230, 242, 246, 0.3) 53.64%, rgba(202, 185, 246, 0.3) 91.85%, rgba(112, 48, 177, 0.3) 119.62%)',
          }}
        >
          {/* Tagline */}
          <span className='text-xs md:text-sm font-bold text-[#404040]/70 uppercase tracking-widest font-sans'>
            {aboutData.tagline}
          </span>

          {/* Description Text */}
          <p className='text-sm md:text-base text-[#404040] font-sans font-light leading-relaxed'>
            {aboutData.text}
          </p>
        </div>
      </div>
    </div>
  );
}
