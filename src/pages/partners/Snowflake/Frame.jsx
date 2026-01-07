'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

const bannerContent = {
  breadcrumb: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Snowflake', href: '/partners/snowflake' },
    ],
  },
  title: 'Snowflake partnership & expertise',
  description:
    "As a certified Snowflake partner, GWC delivers expert implementation, optimization, data migration, integration, and custom solutions using Snowflake's cloud data platform.",
  ctaText: 'Get in touch',
  images: {
    background: '/images/partners/Snowflake/Frame.png',
    illustration: '/images/partners/Snowflake/img8.png',
  },
};

export default function Frame() {
  return (
    <header className='relative w-full overflow-hidden pt-[60px] min-h-[700px] flex items-center'>
      {/* Background Image */}
      <div className='absolute inset-0 -z-10 bg-[#1e102e]'>
        <Image
          src={bannerContent.images.background}
          alt='Snowflake Background'
          fill
          priority
          className='object-cover'
        />
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-14'>
        {/* Breadcrumb */}
        <nav aria-label='Breadcrumb' className='relative z-10 mb-8'>
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
            <h1 className='text-[36px] md:text-[42px] font-bold text-white leading-tight mb-6'>
              {bannerContent.title}
            </h1>

            <p className='text-white/80 text-[18px] md:text-[18px] max-w-2xl mb-12 leading-relaxed'>
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
          <div className='relative w-full max-w-[500px] lg:max-w-[600px] mx-auto lg:mx-0 flex justify-center lg:justify-end'>
            <Image
              src={bannerContent.images.illustration}
              alt='Snowflake Architecture'
              width={600}
              height={600}
              priority
              className='w-full h-auto object-contain'
            />
          </div>
        </div>
      </div>
    </header>
  );
}
