'use client';

import Image from 'next/image';

// bannerContent.ts
const bannerContent = {
  title: 'Aim To Steer Your Business Towards Success',
  description:
    'Strengthen your business with a unified, well-governed data foundation built for speed and accuracy.',
  ctaText: 'Get in touch',
  images: {
    background: '/images/solutions/dataStrategyEngineer/data_hero.png',
    illustration: '/images/solutions/dataStrategyEngineer/data_hero_2.png',
  },
};

export default function BannerSection() {
  return (
    <section className='relative w-full overflow-hidden'>
      {/* Background */}
      <Image
        src={bannerContent.images.background}
        alt='Background'
        fill
        priority
        className='object-cover -z-10'
      />

      <div className='max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 items-center gap-12'>
        {/* LEFT CONTENT */}
        <div>
          <p className='text-sm text-purple-700 mb-4 font-medium'>{bannerContent.breadcrumb}</p>

          <h1 className='text-3xl md:text-4xl lg:text-4xl font-bold text-gray-800 leading-tight'>
            {bannerContent.title}
          </h1>

          <p className='mt-4 text-gray-600 text-base md:text-lg max-w-xl'>
            {bannerContent.description}
          </p>

          <button className='mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-purple-900 px-6 py-3 text-white font-semibold hover:bg-purple-700 transition'>
            {bannerContent.ctaText}
            <span>→</span>
          </button>
        </div>

        {/* RIGHT ILLUSTRATION */}
        <div className='relative w-full h-[280px] sm:h-[340px] md:h-[420px] lg:h-[480px]'>
          <Image
            src={bannerContent.images.illustration}
            alt='Data Governance Illustration'
            fill
            className='object-contain'
            priority
          />
        </div>
      </div>
    </section>
  );
}
