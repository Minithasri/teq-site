// src/components/Blogs/sections/Breadcrumbs.jsx
'use client';

import React from 'react';
import Link from 'next/link';

export default function Breadcrumbs({ title }) {
  return (
    <nav className='flex items-center gap-2 text-sm font-normal text-[#7C7C7C] mb-10'>
      <Link href='/' className='hover:underline'>
        Home
      </Link>
      <span>&gt;</span>
      <Link href='/blogs' className='hover:underline'>
        Blog
      </Link>
      <span>&gt;</span>
      <span className='truncate max-w-[200px] md:max-w-xs text-gray-800 font-medium'>{title}</span>
    </nav>
  );
}
