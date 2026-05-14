'use client';

import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className='w-full overflow-hidden bg-[#45A9EA]'>
      <div className='mx-auto max-w-7xl py-14 md:py-24'>
        {/* TOP CONTENT */}
        <div className='grid items-start gap-8 lg:grid-cols-[1fr_20rem]'>
          {/* LEFT CONTENT */}
          <div>
            {/* TITLE */}
            <h1 className='max-w-5xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl'>
              Unified <span className='text-[#E4F11A]'>Travel Analytics</span> Platform
              <br />
              Implementation
            </h1>

            {/* SUBTITLE */}
            <p className='mt-5 max-w-4xl text-lg font-medium leading-relaxed text-white md:text-2xl'>
              Migrating Global Travel Analytics from Power BI to a Scalable Platform
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className='flex justify-center self-start -mt-4 md:justify-end'>
            <div className='relative h-48 w-full max-w-sm overflow-hidden rounded-3xl shadow-lg'>
              <Image
                src='/images/Templates/z-john-good-groups/hero-bg.png'
                alt='Travel Analytics'
                fill
                priority
                className='object-cover'
              />
            </div>
          </div>
        </div>

        {/* DESCRIPTION SEPARATE */}
        <div className='mt-8'>
          <p className='max-w-6xl text-base leading-relaxed text-[#0B1A2B] md:text-lg'>
            A global travel organization transformed its analytics ecosystem by migrating from Power
            BI to a scalable, centralized platform, enabling faster insights, improved
            accessibility, and consistent reporting across regions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
