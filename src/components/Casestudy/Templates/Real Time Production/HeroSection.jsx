'use client';

import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className='relative w-full min-h-[400px] lg:min-h-[400px] overflow-hidden'>
      {/* Background Image */}
      <div className='absolute inset-0 z-0'>
        <Image
          src='/images/Templates/template1/casebg1.png'
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
      <div className='relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16'>
        {/* Logos Row */}
        <div className='flex items-center gap-4 mt-12 mb-8 lg:mb-8'>
          {/* GWC Logo */}
          <div className='relative w-32 lg:w-40 h-12'>
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
        <div className='max-w-4xl'>
          <h1 className='text-[28px] lg:text-[36px] xl:text-[48px] font-bold text-white mb-6 leading-tight'>
            Real-Time Production Monitoring with <span className='text-yellow-400'>IoT</span>
          </h1>
        </div>
        {/* Subtitle */}
        <p className='max-w-7xl text-[16px] lg:text-[18px] text-white/90 leading-relaxed'>
          How a leading automotive Manufacturer achieved 10-15% productivity boost and 90% reduction
          in manual effort through connected factory automation
        </p>
      </div>
    </section>
  );
}
