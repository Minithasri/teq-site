'use client';

import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className='relative w-full min-h-[400px] flex items-center bg-[#0F1629] overflow-hidden'>
      {/* Background Image with 38% opacity */}
      <div className='absolute inset-0 z-0'>
        <Image
          src='/images/Templates/style_bazaar/style_hero.png'
          alt='Style Bazaar Hero'
          fill
          className='object-cover opacity-[0.38]'
          priority
        />
      </div>

      {/* Content Overlay */}
      <div className='relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-24 lg:py-32'>
        <div className='max-w-7xl text-center md:text-left'>
          <h1 className='text-white font-semibold leading-tight md:leading-[1.1] tracking-[-0.5px] md:tracking-[-1.5px] text-3xl sm:text-4xl md:text-6xl lg:text-[74px]'>
            Retail <span className='text-[#47E028]'>Data Warehouse & Business</span>
            <br className='hidden md:block' />
            <span className='text-[#47E028]'>Intelligence</span> Platform
          </h1>
        </div>
      </div>
    </section>
  );
}
