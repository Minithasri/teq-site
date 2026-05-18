'use client';

import Image from 'next/image';

export default function HeroSection() {
  return (
    <section
      className='relative w-full overflow-visible'
      style={{
        background: 'linear-gradient(107.14deg, #3F477B 0%, #0749CA 100%)',
        minHeight: '240px',
      }}
    >
      {/* Content */}
      <div className='relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 pt-14 md:pt-20 pb-16 md:pb-24 lg:pb-28'>
        {/* Two-line title */}
        <h1 className='font-bold mb-5 md:mb-6 lg:max-w-[80%]'>
          {/* Line 1 — white */}
          <span
            className='block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[52px]'
            style={{ color: '#F8FAFC', lineHeight: '1.45' }}
          >
            Cloud-Based Data Platform &amp; ETL
          </span>
          {/* Line 2 — yellow */}
          <span
            className='block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[52px]'
            style={{ color: '#D1C21E', lineHeight: '1.15' }}
          >
            Modernization for Payer Systems
          </span>
        </h1>

        {/* Description */}
        <p
          className='text-sm sm:text-base md:text-[15px] lg:max-w-[100%] leading-relaxed'
          style={{ color: '#F8FAFC', opacity: 0.88 }}
        >
          Enabling cloud modernization, scalable data infrastructure, and standardized analytics for
          a leading healthcare organization.
        </p>
      </div>

      {/* Bottom-right overlapping care1 image — bleeds into the next section */}
      <div className='hidden lg:block absolute bottom-[-60px] right-6 xl:right-16 z-20 w-[220px] xl:w-[260px]'>
        <div className='relative w-full h-[180px] xl:h-[210px] rounded-2xl overflow-hidden shadow-xl'>
          <Image
            src='/images/Templates/careabout/care1.png'
            alt='Healthcare data platform'
            fill
            className='object-cover object-center'
            priority
          />
        </div>
      </div>
    </section>
  );
}
