'use client';

import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className='relative w-full min-h-[400px] lg:min-h-[400px] overflow-hidden'>
      {/* Background Image */}
      <div className='absolute inset-0 z-0'>
        <Image
          src='/images/Templates/template1/casebg1.webp'
          alt='Background'
          fill
          className='object-cover'
          priority
        />
      </div>

      {/* Green Gradient Overlay */}
      <div
        className='absolute inset-0 z-10'
        style={{
          background: 'linear-gradient(180deg, #00A651 5%, #056C38 100%)',
          opacity: 0.75,
        }}
      ></div>

      {/* Content */}
      <div className='relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24'>
        {/* Logos Row */}
        <div className='flex items-center gap-4 mt-8 mb-8 lg:mb-12'>
          {/* GWC Logo */}
          <div className='relative w-32 lg:w-40 h-10 lg:h-12'>
            <Image
              src='/images/Templates/template1/gwclogo.svg'
              alt='GWC Data.AI'
              fill
              className='object-contain'
              priority
            />
          </div>
        </div>

        {/* Title */}
        <div className='max-w-7xl'>
          <h1 className='text-[32px] md:text-[40px] lg:text-[48px] xl:text-[56px] font-bold text-white mb-6 leading-[1.2]'>
            Real-Time Production Monitoring with IoT
          </h1>
        </div>
        {/* Subtitle */}
        <p className='max-w-3xl text-[16px] md:text-[18px] lg:text-[20px] text-white/90 leading-relaxed font-medium'>
          How a leading automotive Manufacturer achieved 10-15% productivity boost and 90% reduction
          in manual effort through connected factory automation
        </p>
      </div>
    </section>
  );
}
