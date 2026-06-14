// src/components/Blogs/sections/BlogImage.jsx
'use client';

import React from 'react';

export default function BlogImage({ src, alt }) {
  if (!src) return null;

  return (
    <div className='w-full my-8 overflow-hidden'>
      <img
        src={src}
        alt={alt || 'Blog illustration'}
        className='w-full h-auto object-cover max-h-[600px]'
      />
    </div>
  );
}
