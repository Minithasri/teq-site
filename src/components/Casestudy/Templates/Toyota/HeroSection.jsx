'use client';

import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className='relative w-full h-[250px] md:h-[350px] lg:h-[450px] flex items-center overflow-hidden'>
      {/* Background Image with Gradient Overlay */}
      <div className='absolute inset-0 z-0'>
        <Image
          src='/images/Templates/toyota/toyota1.png'
          alt='Toyota Case Study Hero'
          fill
          priority
          className='object-cover'
        />
        {/* Gradient Overlay */}
        <div
          className='absolute inset-0 opacity-80'
          style={{ background: 'linear-gradient(107.35deg, #0E121B 0%, #152432 100%)' }}
        />
        {/* Top Gradient Fade */}
        <div className='absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0E121B] to-transparent z-10' />
        {/* Bottom Gradient Fade */}
        <div className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#152432] to-transparent z-10' />
      </div>

      {/* Content Container */}
      <div className='relative z-10 max-w-9xl mx-auto px-6 md:px-12 lg:px-24 w-full'>
        <div className='max-w-full lg:max-w-7xl'>
          <h1 className='text-white text-3xl md:text-5xl lg:text-6xl font-bold leading-snug md:leading-[1.4] lg:leading-[1.6] tracking-tight'>
            Transforming Tool Lifecycle Management <br className='hidden md:block' />
            Through{' '}
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#1481B8] to-[#2BD4BD]'>
              Intelligent Digitization
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
