'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

// bannerContent.ts
const bannerContent = {
  breadcrumb: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Data Strategy & Engineering', href: '/solutions/data-strategy-engineering' },
    ],
  },
  title: 'Aim To Steer Your Business Towards Success',
  description:
    'Strengthen your business with a unified, well-governed data foundation built for speed and accuracy.',
  ctaText: 'Get in touch',
  images: {
    background: '/images/solutions/dataStrategyEngineer/data_hero.png',
    illustration: '/images/solutions/heroimages/Data Strategy & Engineering.png',
  },
};

export default function BannerSection() {
  return (
    <header className='relative w-full overflow-hidden pt-[60px]'>
      {/* Background */}
      <div className='absolute inset-0 -z-10'>
        <Image
          src={bannerContent.images.background}
          alt=''
          fill
          priority
          className='object-cover'
        />
        {/* Gradient fade overlay at bottom */}
        <div className='absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent'></div>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 lg:pt-14 pb-12'>
        {/* Breadcrumb */}
        <nav aria-label='Breadcrumb' className='relative z-10 mb-4 '>
          <ol className='inline-flex items-center gap-2 text-sm py-1'>
            {bannerContent.breadcrumb.items.map((item, index) => (
              <li key={index} className='flex items-center gap-2'>
                {index > 0 && (
                  <Image
                    src='/images/next_arrow.svg'
                    alt=''
                    width={4}
                    height={4}
                    aria-hidden
                    className='opacity-80'
                  />
                )}
                <Link href={item.href} className='font-medium text-[#6F2B8B] hover:opacity-80'>
                  {item.label}
                </Link>
              </li>
            ))}
          </ol>
        </nav>

        {/* Hero Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-[55%_45%] items-center gap-12 lg:gap-16'>
          {/* Left */}
          <div>
            <h1
              className='text-[32px] md:text-[36px] font-semibold max-w-[600px] mb-4 -mt-20'
              style={{ color: '#404040', lineHeight: '52px' }}
            >
              {bannerContent.title}
            </h1>

            <p className='text-[#7A7A7A] text-[15px] md:text-[16px] max-w-xl mb-8'>
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

          {/* Right */}
          <div className='relative w-full max-w-[500px] mx-auto lg:mx-0'>
            <Image
              src={bannerContent.images.illustration}
              alt='Data strategy and engineering illustration'
              width={400}
              height={340}
              priority
              className='w-full h-auto object-contain'
            />
          </div>
        </div>
      </div>
    </header>
  );
}
