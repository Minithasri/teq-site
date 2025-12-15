'use client';

import Image from 'next/image';

// bannerContent.ts
const bannerContent = {
  breadcrumb: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Data Governance', href: '/solutions/data-governance' },
    ],
  },
  title: 'Governed Data Foundation for Acceleration',
  description:
    'Strengthen your business with a unified, well-governed data foundation built for speed and accuracy.',
  ctaText: 'Get in touch',
  images: {
    background: '/images/solutions/Hero section BG.jpg',
    illustration: '/images/solutions/OBJECTS.png',
  },
};

export default function BannerSection() {
  return (
    <section className='relative w-full overflow-hidden min-h-[500px]'>
      {/* Gradient Background */}
      <div className='absolute inset-0 bg-gradient-to-r from-purple-50 via-purple-50/50 to-blue-50 -z-10' />

      {/* Optional: Background Image Overlay */}
      <div className='absolute inset-0 -z-10 opacity-30'>
        <Image
          src={bannerContent.images.background}
          alt='Background'
          fill
          priority
          className='object-cover'
        />
      </div>

      <div className='max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-20'>
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16'>
          {/* LEFT CONTENT */}
          <div className='space-y-6'>
            {/* Title */}
            <h1 className='text-2xl md:text-3xl lg:text-[36px] font-bold text-gray-900 leading-tight lg:leading-[1.1]'>
              {bannerContent.title}
            </h1>

            {/* Description */}
            <p className='text-gray-500 text-base md:text-lg leading-relaxed max-w-lg'>
              {bannerContent.description}
            </p>

            {/* CTA Button */}
            <button className='mt-2 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-purple-900 px-8 py-3.5 text-white font-semibold hover:from-purple-700 hover:to-purple-600 transition-all duration-200 shadow-md hover:shadow-lg'>
              {bannerContent.ctaText}
              <span className='text-lg'>→</span>
            </button>
          </div>

          {/* RIGHT ILLUSTRATION */}
          <div className='relative w-full h-[320px] sm:h-[380px] md:h-[420px] lg:h-[480px]'>
            <Image
              src={bannerContent.images.illustration}
              alt='Data Governance Illustration'
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
