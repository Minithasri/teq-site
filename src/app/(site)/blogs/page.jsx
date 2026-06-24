// src/app/(site)/blogs/page.jsx
'use client';

import { blogsData } from '@/data/blogsData';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function BlogsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter blogs based on search query matching title, subtitle, or category
  const filteredBlogs = blogsData.filter(blog => {
    const query = searchQuery.toLowerCase();
    return (
      blog.title.toLowerCase().includes(query) ||
      blog.subtitle.toLowerCase().includes(query) ||
      blog.category.toLowerCase().includes(query)
    );
  });

  return (
    <div
      className='relative w-full min-h-screen pb-24 pt-[50px]'
      style={{
        backgroundImage: "url('/images/solutions/Hero section BG.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Light Overlay to match the design's bright gradient/clean look */}
      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white' />

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 flex flex-col items-center'>
        {/* Main Title */}
        <h1
          style={{
            background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
          className='text-3xl md:text-[36px] lg:text-[40px] font-black tracking-wider leading-tight mb-4 text-center select-none'
        >
          INSIGHTS. IDEAS. INNOVATION.
        </h1>

        {/* Subtext */}
        <p
          style={{ color: '#737373' }}
          className='text-sm md:text-[18px] font-regular max-w-4xl leading-relaxed mb-10 text-center font-sans'
        >
          Read articles, guides, and expert opinions designed to help leaders, innovators, and teams
          navigate today&apos;s rapidly evolving digital landscape with confidence and clarity.
        </p>

        {/* Search Input */}
        <div className='relative w-full max-w-2xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] rounded-full overflow-hidden bg-white border border-[#E5E7EB] flex items-center px-6 py-4 transition-all duration-300 focus-within:shadow-md focus-within:border-[#7030B1] mb-16'>
          <Image
            src='/images/blogs/blog10.svg'
            alt='Search Icon'
            width={20}
            height={20}
            className='w-5 h-5 mr-3 flex-shrink-0'
          />
          <input
            type='text'
            placeholder='Search Agentic use case'
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className='w-full bg-transparent outline-none text-[#1f2937] text-sm placeholder-[#9ca3af] font-sans'
          />
        </div>

        {/* Grid of Blog/Agent Cards */}
        {filteredBlogs.length > 0 ? (
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto'>
            {filteredBlogs.map(blog => (
              <Link
                key={blog.slug}
                href={`/blogs/${blog.slug}`}
                className='group flex flex-col bg-white rounded-[24px] p-5 shadow-[0_8px_32px_rgba(0,0,0,0.03)] border border-[#ECEAE6] hover:shadow-xl hover:border-gray-300 transition-all duration-300 gap-6 h-full'
              >
                {/* Thumbnail Wrapper with Overlay */}
                <div className='relative aspect-video w-full overflow-hidden rounded-2xl bg-gray-50 shrink-0'>
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={640}
                    height={360}
                    className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                  />
                  {/* Overlay Gradient */}
                  <div
                    style={{
                      background:
                        'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(57, 23, 91, 0.6) 90%), linear-gradient(0deg, rgba(55, 21, 88, 0.1), rgba(55, 21, 88, 0.1))',
                    }}
                    className='absolute inset-0 transition-opacity duration-300'
                  />
                </div>

                {/* Card Info */}
                <div className='pt-2 md:pt-0 pb-1 flex flex-col flex-grow justify-between'>
                  <div>
                    {/* Metadata Row */}
                    <div className='flex items-center justify-between text-[11px] font-medium text-[#737373] mb-3 select-none'>
                      <div className='flex items-center gap-1.5'>
                        <span className='w-2.5 h-2.5 rounded-full bg-[#22C55E]' />
                        <span>{blog.readTime || '4 mins read'}</span>
                      </div>
                      <span>{blog.date || 'June 11, 2026'}</span>
                    </div>

                    {/* Title */}
                    <h3 className='text-[#262626] font-medium text-[15px] md:text-[18px] mb-2 leading-snug hover:text-[#7030B1] transition-colors duration-200'>
                      {blog.title}
                    </h3>

                    {/* Subtitle / Excerpt */}
                    {blog.subtitle && (
                      <p className='text-[#737373] text-[13px] md:text-[14px] leading-relaxed line-clamp-2 mb-4 font-sans'>
                        {blog.subtitle}
                      </p>
                    )}
                  </div>

                  {/* Read More button */}
                  <div className='pt-2 flex items-center gap-1.5 select-none border-t border-gray-100 w-full'>
                    <span
                      style={{
                        background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                      className='font-bold text-sm tracking-wide group-hover:underline decoration-[#B56DD3] underline-offset-4'
                    >
                      Read More
                    </span>
                    <Image
                      src='/images/blogs/blog11.svg'
                      alt='Arrow'
                      width={10}
                      height={10}
                      className='w-2.5 h-2.5 object-contain transition-transform duration-300 group-hover:translate-x-1'
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className='text-center py-20'>
            <h3 className='text-xl font-semibold text-gray-700'>No blogs found</h3>
            <p className='text-gray-500 mt-2'>Try adjusting your search criteria or keyword.</p>
          </div>
        )}
      </div>
    </div>
  );
}
