'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

const bannerContent = {
  breadcrumb: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Google cloud', href: '/partners/google-cloud' },
    ],
  },
  title: 'Google Cloud Innovation with GWC',
  description:
    'Unlock the full potential of Google Cloud to solve real business challenges and accelerate data powered digital transformation.',
  ctaText: 'Get in touch',
  images: {
    background: '/images/partners/google-cloud/hero_bg_partner.webp',
    illustration: '/images/partners/google-cloud/google_hero.webp',
  },
};

export default function HeroSection() {
  return (
    <header className='relative w-full overflow-hidden pt-[60px] min-h-[600px] flex items-center'>
      {/* Background Image */}
      <div className='absolute inset-0 -z-10'>
        <Image
          src={bannerContent.images.background}
          alt='google cloud innovation with gwc'
          fill
          priority
          className='object-cover'
        />
        {/* Optional overlay for better text readability if needed */}
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-14'>
        {/* Breadcrumb */}
        <nav aria-label='Breadcrumb' className='relative z-10 mb-4'>
          <ol className='inline-flex items-center gap-2 text-[15px] py-1'>
            {bannerContent.breadcrumb.items.map((item, index) => (
              <li key={index} className='flex items-center gap-2'>
                {index > 0 && (
                  <Image
                    src='/images/next_arrow.svg'
                    alt=''
                    width={6}
                    height={6}
                    aria-hidden
                    className='opacity-80'
                    style={{ filter: 'brightness(0) invert(1)' }}
                  />
                )}
                <Link
                  href={item.href}
                  className={`font-medium hover:opacity-80 transition-opacity ${
                    index === bannerContent.breadcrumb.items.length - 1
                      ? 'text-white'
                      : 'text-white'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ol>
        </nav>

        {/* Hero Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-[55%_45%] items-center gap-12 lg:gap-16'>
          {/* Left Content */}
          <div>
            <h1 className='text-[28px] md:text-[42px] font-bold text-white leading-tight max-w-xl mb-6'>
              {bannerContent.title}
            </h1>

            <p className='text-white/80 text-[16px] md:text-[18px] max-w-2xl mb-12 leading-relaxed'>
              {bannerContent.description}
            </p>

            <Link
              href='/contact'
              className='inline-flex items-center gap-2 bg-gradient-to-r from-[#7030B1] to-[#B56DD3] text-white w-[170px] h-[45px] rounded-full font-medium text-[15px] justify-center hover:scale-105 transition-transform shadow-lg'
            >
              {bannerContent.ctaText}
              <FiArrowRight className='w-5 h-5' />
            </Link>
          </div>

          {/* Right Image */}
          <div className='relative w-full max-w-[600px] mx-auto lg:mx-0'>
            <Image
              src={bannerContent.images.illustration}
              alt='Google Cloud Platform'
              width={600}
              height={500}
              priority
              className='w-full h-auto object-contain'
            />
          </div>
        </div>
      </div>
    </header>
  );
}
