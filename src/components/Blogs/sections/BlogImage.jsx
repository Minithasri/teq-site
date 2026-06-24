// src/components/Blogs/sections/BlogImage.jsx
'use client';

import Image from 'next/image';

export default function BlogImage({ src, alt }) {
  if (!src) return null;

  return (
    <div className='w-full my-8 overflow-hidden rounded-2xl'>
      <Image
        src={src}
        alt={alt || 'Blog illustration'}
        width={1200}
        height={650}
        className='w-full h-auto object-cover max-h-[650px]'
      />
    </div>
  );
}
