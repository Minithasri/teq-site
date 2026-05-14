'use client';

import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className='relative w-full min-h-[400px] md:min-h-[500px] bg-[#091527] flex items-center py-8 md:py-12 px-6 md:px-8 lg:px-12'>
      {/* Background Image with Opacity */}
      <div className='absolute inset-0 z-0 overflow-hidden'>
        <Image
          src='/images/Templates/tez/tez1.png'
          alt='Tez Hero Background'
          fill
          className='object-cover opacity-30'
          priority
        />
      </div>

      {/* Content Container */}
      <div className='relative z-10 w-full'>
        <div className='max-w-full'>
          {/* Main Title */}
          <h1
            className='text-white font-bold leading-[1.5] mb-8 w-full'
            style={{ fontSize: '56px' }}
          >
            <span style={{ color: '#F8C735E8' }}>Unified Data Platform & Analytics</span> for Smart
            <br className='hidden md:block' /> Parking Operations
          </h1>

          {/* Subheading */}
          <p className='text-white/90 leading-[1.4] max-w-9xl' style={{ fontSize: '16px' }}>
            How we helped a leading smart parking and mobility SaaS provider achieve a{' '}
            <span style={{ color: '#33CCBF' }}>60% reduction</span> in data processing time and
            unlock AI-driven insights across their entire operation.
          </p>
        </div>
      </div>

      {/* Robot Image (tez2) - Overlapping */}
      <div className='absolute -bottom-56 right-10 z-50 w-[300px] md:w-[450px] lg:w-[500px]'>
        <Image
          src='/images/Templates/tez/tez2.png'
          alt='Tez Robot'
          width={500}
          height={500}
          className='object-contain'
          priority
        />
      </div>
    </section>
  );
};

export default HeroSection;
