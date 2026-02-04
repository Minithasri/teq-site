'use client';

import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className='relative w-full h-[500px] md:h-[620px] flex flex-col justify-center overflow-hidden'>
      {/* Background Image */}
      <div className='absolute inset-0 z-0'>
        <Image
          src='/images/WFH/Framecase.webp'
          alt='Work From Hometown Background'
          fill
          className='object-cover'
          priority
          quality={100}
        />
        <div className='absolute inset-0 bg-black/10' />
      </div>

      {/* Right Side Map Image */}
      <div className='absolute -right-[8%] -top-[35%] h-[140%] w-[80%] lg:w-[70%] z-0 pointer-events-none'>
        <Image
          src='/images/WFH/heromap.svg'
          alt='Map'
          fill
          className='object-contain object-right'
          priority
        />
      </div>

      <div className='relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center'>
        {/* Breadcrumb - Positioned absolute top or just part of flow */}
        <div className='absolute top-24 md:top-32 left-4 md:left-8 flex items-center gap-2 text-sm text-white/80'>
          <Link href='/' className='hover:text-white transition-colors'>
            Home
          </Link>
          <span className='text-xs'>&gt;</span>
          <span className='text-white font-medium'>Work from Hometown</span>
        </div>

        {/* Main Content */}
        <div className='flex flex-col items-start max-w-2xl mt-10 md:mt-0'>
          <h1 className='text-[24px] md:text-[32px] lg:text-[42px] font-bold text-white mb-4 leading-tight'>
            Work From Hometown
          </h1>
          <p className='text-[14px] md:text-[18px] lg:text-[18px] text-white/90 mb-8 font-light'>
            Bringing offices to your hometowns
          </p>

          <Link
            href='/careers'
            className='inline-flex items-center gap-2 bg-gradient-to-r from-[#7030B1] to-[#B56DD3] text-white px-8 py-3 rounded-full font-medium text-[15px] hover:scale-105 transition-transform shadow-lg'
          >
            Explore Jobs
            {/* Using the specific arrow icon requested */}
            <Image
              src='/images/AboutUs/arrowicon_1.svg'
              alt='Arrow'
              width={16}
              height={16}
              className='ml-1'
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
