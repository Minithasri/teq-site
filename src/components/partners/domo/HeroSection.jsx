'use client';

import { domoData } from '@/data/partners/domo';
import Image from 'next/image';
import Link from 'next/link';
// import { FiArrowRight } from 'react-icons/fi'; // Removed as we are using custom SVGs

const bannerContent = {
  breadcrumb: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Domo', href: '/partners/domo' },
    ],
  },
  title: domoData.hero.title,
  description: domoData.hero.subtitle,
  images: {
    background: '/images/partners/domo/domoframe.webp',
    illustration: '/images/partners/domo/heroimgg.png',
  },
};

export default function HeroSection() {
  return (
    <header className='relative w-full overflow-hidden pt-[100px] min-h-[600px] flex items-center '>
      {/* Background Image */}
      <div className='absolute inset-0 w-full h-full z-0'>
        <Image
          src={bannerContent.images.background}
          alt='Hero Background'
          fill
          className='object-cover'
          priority
        />
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-10 lg:py-14 relative z-10'>
        {/* Breadcrumb */}
        <nav aria-label='Breadcrumb' className='relative z-10 mb-6'>
          <ol className='inline-flex items-center gap-2 text-[15px]'>
            {bannerContent.breadcrumb.items.map((item, index) => (
              <li key={index} className='flex items-center gap-2'>
                {index > 0 && <span className='text-gray-400 font-medium'>{'>'}</span>}
                <Link
                  href={item.href}
                  className={`font-medium hover:text-[#7030B1] transition-colors ${
                    index === bannerContent.breadcrumb.items.length - 1
                      ? 'text-[#1F1F1F] font-bold'
                      : 'text-gray-500'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ol>
        </nav>

        {/* Hero Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-[50%_50%] items-center gap-10 lg:gap-10'>
          {/* Left Content */}
          <div className='flex flex-col items-start'>
            <h1 className='text-[28px] md:text-[35px] font-bold text-[#1F1F1F] leading-[1.2] mb-6'>
              {bannerContent.title}
            </h1>

            <p className='text-[#4B5563] text-[16px] md:text-[18px] max-w-xl mb-10 leading-relaxed'>
              {bannerContent.description}
            </p>

            <div className='flex flex-col sm:flex-row gap-4'>
              {/* Button 1: Talk to our expert */}
              <Link
                href='/contact'
                className='inline-flex items-center gap-3 text-white px-8 py-3.5 rounded-full font-medium text-[16px] justify-center hover:scale-105 transition-transform shadow-md'
                style={{
                  background: 'linear-gradient(90deg, #7030B1 0%, #B56DD3 100%)',
                }}
              >
                Talk to our expert
                <Image
                  src='/images/partners/domo/arrowwhite.svg'
                  alt='arrow'
                  width={20}
                  height={20}
                />
              </Link>

              {/* Button 2: Request Demo */}
              <Link
                href='/contact'
                className='inline-flex items-center gap-3 text-white px-8 py-3.5 rounded-full font-medium text-[16px] justify-center hover:opacity-90 transition-opacity'
                style={{
                  background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
                }}
              >
                Request Demo
                <Image
                  src='/images/partners/domo/arrowwhite.svg'
                  alt='arrow'
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className='relative w-full flex justify-end'>
            <div className='relative w-full max-w-[650px]'>
              <Image
                src={bannerContent.images.illustration}
                alt='Domo Platform'
                width={700}
                height={600}
                priority
                className='w-full h-auto object-contain'
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
