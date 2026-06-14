// src/components/Blogs/sections/BlogHeader.jsx
'use client';

import React from 'react';

export default function BlogHeader({ blog }) {
  return (
    <div className='flex flex-col gap-4 mb-12'>
      {/* Category Tag */}
      <div className='mb-4'>
        <span className='inline-block px-3 py-2 bg-[#F3F0FF] rounded-md text-xs font-bold uppercase tracking-wider text-[#7030B1]'>
          {blog.category}
        </span>
      </div>

      {/* Main Title Heading */}
      <h1
        className='text-3xl md:text-5xl font-medium text-[#262626]'
        style={{ lineHeight: '110%' }}
      >
        {blog.title}
      </h1>

      {/* Meta Row: Author, Date, Read Time */}
      <div className='flex items-center gap-4 text-xs md:text-sm mt-8 flex-wrap'>
        {/* Author info with SVG logo */}
        <div className='flex items-center gap-2.5'>
          <img
            src='/images/blogs/blog1.svg'
            alt='GWC Logo'
            className='w-8 h-8 rounded-full object-cover'
          />
          <span className='font-semibold tracking-wider text-[#404040] uppercase'>
            {blog.author}
          </span>
        </div>

        {/* Separators and Meta Details */}
        <div className='text-gray-300'>|</div>

        <div className='text-[#7C7C7C] font-normal'>{blog.date}</div>

        <div className='text-gray-300'>|</div>

        <div className='text-[#7C7C7C] font-normal'>{blog.readTime}</div>
      </div>
    </div>
  );
}
