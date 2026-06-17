// src/components/Blogs/sections/GwcPerspective.jsx
'use client';

import React from 'react';
import Link from 'next/link';

export default function GwcPerspective({ perspectiveData }) {
  if (!perspectiveData) return null;

  return (
    <div className='w-full bg-[#FFFFFF] py-16 px-4 md:px-6 my-12'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center'>
        {/* Left Side Content - 7 cols */}
        <div className='lg:col-span-7 flex flex-col gap-4'>
          {/* Small Heading with Gradient */}
          <span
            className='text-xs md:text-sm font-bold uppercase tracking-wider font-sans'
            style={{
              background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block',
            }}
          >
            {perspectiveData.tagline}
          </span>

          {/* Heading */}
          <h2 className='text-3xl md:text-4xl font-medium text-[#404040] leading-tight font-sans'>
            {perspectiveData.title}
          </h2>

          {/* Description */}
          <p className='text-[#404040] font-sans font-regular text-base leading-relaxed mt-2'>
            {perspectiveData.description}
          </p>
        </div>

        {/* Right Side Card - 5 cols */}
        <div className='lg:col-span-5 w-full flex justify-end'>
          <div
            className='w-full max-w-sm rounded-3xl p-8 md:p-10 text-center shadow-lg flex flex-col items-center justify-center gap-6'
            style={{
              background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
            }}
          >
            {/* Ready to Deploy? */}
            <h3 className='text-2xl md:text-3xl font-semibold text-[#FFFFFF] font-sans'>
              {perspectiveData.card.title}
            </h3>

            {/* Description */}
            <p className='text-[#FFFFFF]/90 font-sans font-light text-sm md:text-base leading-relaxed'>
              {perspectiveData.card.subtitle}
            </p>

            {/* Contact Us Button */}
            <Link
              href='/contact'
              className='w-full max-w-[200px] py-3 bg-[#FFFFFF] rounded-xl font-semibold shadow-sm transition-transform duration-200 hover:scale-105 active:scale-95 flex items-center justify-center'
            >
              <span
                style={{
                  background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline-block',
                }}
                className='font-sans font-bold'
              >
                {perspectiveData.card.buttonText}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
