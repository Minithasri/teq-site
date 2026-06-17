import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';

export default function HeroSection({ data }) {
  const [isOpen, setIsOpen] = useState(false);
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
    videoHref: rawVideoHref,
  } = data || {};

  const videoHref = rawVideoHref || 'https://youtu.be/C3q0SFpHo4c?si=YdRPujO07_l23F4A';

  // Split title to color the last two words purple (e.g. "Detection Agent")
  const titleWords = title.split(' ');
  const splitIndex = Math.max(0, titleWords.length - 2);
  const titleStart = titleWords.slice(0, splitIndex).join(' ');
  const titleEnd = titleWords.slice(splitIndex).join(' ');

  const getYoutubeEmbedUrl = url => {
    if (!url) return '';
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    if (match && match[2].length === 11) {
      return `https://www.youtube.com/embed/${match[2]}?autoplay=1`;
    }
    return url;
  };

  const isYoutube =
    videoHref && (videoHref.includes('youtube.com') || videoHref.includes('youtu.be'));

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
        <div className='w-full max-w-[650px] mx-auto rounded-[24px] overflow-hidden relative shadow-[0_8px_32px_rgba(0,0,0,0.1)] border border-[#2D1B18]/10 flex flex-col bg-[#1E110F] text-white'>
          {/* Custom Top Header */}
          <div className='flex items-center justify-between px-6 py-2.5 bg-white text-xs font-semibold select-none border-b border-gray-200'>
            <div className='flex items-center gap-2'>
              <span className='w-2.5 h-2.5 rounded-full bg-[#EF4444] animate-pulse' />
              <span className='text-[#262626] tracking-wide font-sans text-[11px]'>
                Experience the Platform
              </span>
            </div>
            <a
              href={videoHref}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-1.5 text-neutral-500 hover:text-black transition-colors text-[10px]'
            >
              <span className='w-1.5 h-1.5 rounded-full border border-neutral-300' />
              <span className='tracking-widest uppercase'>watch us live</span>
            </a>
          </div>

          {/* Middle Content */}
          <div className='w-full bg-black relative' style={{ aspectRatio: '16/9' }}>
            {isOpen ? (
              isYoutube ? (
                <iframe
                  src={getYoutubeEmbedUrl(videoHref)}
                  title={videoLabel}
                  frameBorder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  allowFullScreen
                  className='w-full h-full absolute inset-0'
                />
              ) : (
                <video
                  src={videoHref}
                  controls
                  autoPlay
                  className='w-full h-full absolute inset-0'
                />
              )
            ) : (
              <div
                className='w-full h-full relative cursor-pointer'
                onClick={() => setIsOpen(true)}
              >
                <Image
                  src='/images/thumbnail_agentic.png'
                  alt={videoLabel}
                  fill
                  className='object-cover'
                  priority
                />
                <div className='absolute inset-0 bg-black/40' />

                {/* Premium play button overlay */}
                <div className='absolute inset-0 flex items-center justify-center'>
                  <div className='w-16 h-16 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.3)] border border-white/20 group/play'>
                    <div className='w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[18px] border-l-[#7030B1] ml-1.5' />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
