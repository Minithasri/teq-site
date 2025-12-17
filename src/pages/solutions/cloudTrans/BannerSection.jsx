'use client';

import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';

// bannerContent.ts
const bannerContent = {
  breadcrumb: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Cloud Transformation', href: '/solutions/cloud-transformation' },
    ],
  },
  title: 'Transform Your Business Through Data-powered Innovation',
  description:
    'Get ready for a future-ready and high-performance BI environment for your organization',
  ctaText: 'Get in touch',
  images: {
    background: '/images/solutions/Hero section BG.jpg',
    illustration: '/images/solutions/OBJECTS.png',
  },
};

export default function BannerSection() {
  return (
    <section className='relative w-full overflow-hidden min-h-[800px]'>
      {/* Optional: Background Image Overlay */}
      <div className='absolute inset-0  h-full -z-10'>
        <Image
          src={bannerContent.images.background}
          alt='Background'
          fill
          priority
          className='object-cover'
        />
      </div>

      <div className='max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-20'>
        {/* Breadcrumb - Top Left */}
        <nav aria-label='Breadcrumb' className='-mb-8 mt-6'>
          <ol className='flex items-center gap-2 text-sm'>
            {bannerContent.breadcrumb.items.map((item, index) => (
              <li key={index} className='flex items-center gap-2'>
                {index > 0 && <span className='text-gray-400'>›</span>}
                <a
                  href={item.href}
                  className={`${
                    index === bannerContent.breadcrumb.items.length - 1
                      ? 'text-purple-700 font-medium'
                      : 'text-gray-600 hover:text-purple-600'
                  } transition-colors`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16'>
          {/* LEFT CONTENT */}
          <div className='space-y-6'>
            {/* Title */}
            <h1 className='text-[32px] md:text-[40px] lg:text-[34px] font-semibold text-[#3F3F3F] leading-[1.15]'>
              {bannerContent.title}
            </h1>

            {/* Description */}
            <p className='text-[#7A7A7A] text-[15px] md:text-[16px] leading-relaxed max-w-xl font-normal'>
              {bannerContent.description}
            </p>

            {/* CTA Button */}
            <button className='mt-2 bg-gradient-to-r from-[#7030B1] to-[#B56DD3] text-white w-[170px] h-[45px] rounded-full font-medium text-[15px] flex items-center justify-center gap-2 hover:scale-105 transition-transform shadow-lg'>
              {bannerContent.ctaText}
              <FiArrowRight className='w-5 h-5' />
            </button>
          </div>

          {/* RIGHT ILLUSTRATION */}
          <div className='relative w-full h-[320px] sm:h-[380px] md:h-[420px] lg:h-[440px]'>
            <Image
              src={bannerContent.images.illustration}
              alt='BI Migration Illustration'
              fill
              className='object-contain'
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
