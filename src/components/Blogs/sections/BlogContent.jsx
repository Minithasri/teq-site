// src/components/Blogs/sections/BlogContent.jsx
'use client';

import Image from 'next/image';

export default function BlogContent({ content }) {
  if (!content || content.length === 0) return null;

  return (
    <div className='space-y-6 text-[#404040] leading-relaxed'>
      {content.map((block, index) => {
        switch (block.type) {
          case 'heading':
            if (block.level === 3) {
              return (
                <h3 key={index} className='text-xl md:text-2xl font-bold text-[#262626] mt-8 mb-4'>
                  {block.text}
                </h3>
              );
            }
            return (
              <h2
                key={index}
                className='text-2xl md:text-3xl font-bold text-[#262626] mt-10 mb-6 border-b pb-2'
              >
                {block.text}
              </h2>
            );
          case 'paragraph':
            return (
              <p key={index} className='text-base text-[#404040] mb-6'>
                {block.text}
              </p>
            );
          case 'list':
            return (
              <ul
                key={index}
                className='list-disc pl-6 space-y-3 my-6 text-base md:text-base text-[#404040]'
              >
                {block.items.map((item, idx) => (
                  <li key={idx} className='pl-1'>
                    {item}
                  </li>
                ))}
              </ul>
            );
          case 'image':
            return (
              <div key={index} className='my-8 rounded-xl overflow-hidden shadow-md'>
                <Image
                  src={block.url}
                  alt={block.caption || 'Blog image'}
                  width={1200}
                  height={675}
                  className='w-full h-auto object-cover'
                />
                {block.caption && (
                  <p className='text-sm text-gray-500 text-center mt-2 italic'>{block.caption}</p>
                )}
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
