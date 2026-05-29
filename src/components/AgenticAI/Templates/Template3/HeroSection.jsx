'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiPlay } from 'react-icons/fi';

export default function HeroSection({ data }) {
  const {
    title = 'Agent Title',
    description = 'Agent description goes here.',
    category = 'Agentic AI',
    categoryHref = '/agentic-ai',
    breadcrumbParent = 'Home',
    breadcrumbParentHref = '/',
    ctaText = 'Talk to us',
    ctaHref = '/contact',
    videoLabel = 'Agentic Ecosystem',
    videoSubtitle = 'Powering the Next Generation of AI Systems',
    videoHref = '#',
  } = data || {};

  return (
    <section
      style={{ backgroundColor: '#FFFFFF' }}
      className='w-full py-10 px-4 mt-20 md:px-8 lg:px-16 xl:px-24'
    >
      <div className='max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16'>
        {/* ── LEFT COLUMN ── */}
        <div className='flex-1 flex flex-col gap-5'>
          {/* Heading */}
          <h1
            style={{ color: '#262626', lineHeight: '1.3' }}
            className='text-3xl md:text-4xl lg:text-[40px] max-w-[480px] font-bold'
          >
            {title}
          </h1>

          {/* Description */}
          <p
            style={{ color: '#737373' }}
            className='text-base md:text-[16px] leading-relaxed max-w-[480px]'
          >
            {description}
          </p>

          {/* CTA Button */}
          <div className='mt-2'>
            <Link
              href={ctaHref}
              className='inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-sm font-semibold transition-all duration-300 hover:opacity-90 hover:gap-3'
              style={{
                background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
              }}
            >
              {ctaText}
              <FiArrowRight className='text-base' />
            </Link>
          </div>
        </div>

        {/* ── RIGHT COLUMN — Thumbnail Card ── */}
        <div className='flex-1 flex justify-center lg:justify-end w-full max-w-[520px]'>
          <div
            className='relative w-full rounded-2xl overflow-hidden'
            style={{ aspectRatio: '16/9' }}
          >
            {/* Background Image */}
            <Image
              src='/images/thumbnail_agentic.png'
              alt='Agentic Ecosystem'
              fill
              className='object-cover'
              priority
            />

            {/* Dark overlay */}
            <div className='absolute inset-0 bg-black/40 rounded-2xl' />

            {/* Card Content */}
            <div className='absolute inset-0 flex flex-col justify-between p-5 md:p-6'>
              {/* Top labels */}
              <div>
                <p className='text-white font-bold text-base md:text-lg leading-snug'>
                  {videoLabel}
                </p>
                <p className='text-white/80 text-sm mt-0.5'>{videoSubtitle}</p>
              </div>

              {/* Watch Button */}
              <div className='flex items-center justify-center flex-1'>
                <Link
                  href={videoHref}
                  className='flex items-center gap-3 bg-white text-[#262626] font-semibold text-sm px-5 py-2.5 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-200'
                >
                  <span className='w-7 h-7 flex items-center justify-center bg-[#262626] rounded-full'>
                    <FiPlay className='text-white text-xs ml-0.5' />
                  </span>
                  Watch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
