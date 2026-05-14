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
      <div className='relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 py-20'>
        <div className='max-w-[1400px]'>
          <h1 className='text-white font-semibold leading-[1.1] md:leading-[111px] tracking-[-1.2px] text-[clamp(32px,5vw,64px)]'>
            Retail <span className='text-[#47E028]'>Data Warehouse & Business</span>
            <br />
            <span style={{ color: '#47E028' }}>Intelligence</span> Platform
          </h1>
        </div>
      </div>
    </section>
  );
}
