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

  // Split title to color the last two words purple (e.g. "Detection Agent")
  const titleWords = title.split(' ');
  const splitIndex = Math.max(0, titleWords.length - 2);
  const titleStart = titleWords.slice(0, splitIndex).join(' ');
  const titleEnd = titleWords.slice(splitIndex).join(' ');

  return (
    <section className='w-full py-10 px-4 mt-20 md:px-8 lg:px-16 xl:px-24 bg-white'>
      <div className='max-w-6xl mx-auto flex flex-col items-center gap-10 lg:gap-14 text-center'>
        {/* ── TOP CONTENT ── */}
        <div className='flex flex-col items-center gap-6 max-w-3xl'>
          {/* Heading */}
          <h1
            style={{ lineHeight: '1.2' }}
            className='text-4xl md:text-5xl lg:text-[52px] font-bold'
          >
            <span style={{ color: '#262626' }}>{titleStart} </span>
            <span style={{ color: '#6E2B8B' }}>{titleEnd}</span>
          </h1>

          {/* Description */}
          <p
            style={{ color: '#737373' }}
            className='text-base md:text-[17px] leading-relaxed max-w-2xl'
          >
            {description}
          </p>

          {/* CTA Button */}
          <div className='mt-2'>
            <Link
              href={ctaHref}
              className='inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white text-sm font-semibold transition-all duration-300 hover:opacity-90 hover:gap-3 shadow-lg'
              style={{
                backgroundColor: '#6E2B8B',
              }}
            >
              {ctaText}
              <FiArrowRight className='text-base' />
            </Link>
          </div>
        </div>

        {/* ── BOTTOM THUMBNAIL CARD ── */}
        <div
          className='w-full rounded-[24px] overflow-hidden relative shadow-[0_8px_32px_rgba(0,0,0,0.1)]'
          style={{ aspectRatio: '16/5' }}
        >
          {/* Background Image */}
          <Image
            src='/images/thumbnail_agentic.png'
            alt={videoLabel}
            fill
            className='object-cover'
            priority
          />

          {/* Dark overlay */}
          <div className='absolute inset-0 bg-black/60' />

          {/* Top-Left Labels */}
          <div className='absolute top-6 left-6 md:top-10 md:left-10 text-left z-10'>
            <h3 className='text-white text-xl md:text-[28px] font-bold mb-1'>{videoLabel}</h3>
            <p className='text-white/80 text-sm md:text-base mt-1'>{videoSubtitle}</p>
          </div>

          {/* Center Watch Button */}
          <div className='absolute inset-0 flex flex-col items-center justify-center gap-2 z-10'>
            <Link
              href={videoHref}
              className='w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center hover:scale-105 transition-transform duration-300 shadow-[0_0_24px_rgba(0,212,216,0.3)]'
              style={{ background: '#00D4D8' }}
            >
              <FiArrowRight className='text-[#171717] text-xl md:text-2xl' />
            </Link>
            <span
              className='text-[10px] md:text-xs font-bold tracking-widest mt-1'
              style={{ color: '#00D4D8' }}
            >
              WATCH NOW
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
