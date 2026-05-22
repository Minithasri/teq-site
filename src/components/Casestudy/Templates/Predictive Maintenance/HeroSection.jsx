'use client';

import Image from 'next/image';

export default function HeroSection() {
  return (
    <section
      className='relative w-full min-h-[550px] overflow-hidden flex flex-col justify-center'
      style={{ background: 'linear-gradient(90deg, #FCEA79 0%, #F6F6F6 100%)' }}
    >
      {/* Background Image */}
      <div className='absolute inset-0 z-0 flex justify-end'>
        <div className='relative w-full lg:w-[60%] h-full'>
          <Image
            src='/images/Templates/template4/herobg.webp'
            alt='Predictive Maintenance Background'
            fill
            className='object-cover object-center'
          />
        </div>
      </div>

      {/* Content */}
      <div className='relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full h-full flex flex-col justify-center'>
        {/* Logo - Top Left */}
        <div className='mb-12'>
          <div className='relative w-48 h-12'>
            <Image
              src='/images/Templates/template4/comlogo.svg'
              alt='GWC Data.AI'
              fill
              className='object-contain lg:object-left'
            />
          </div>
        </div>

        {/* Text Content */}
        <div className='max-w-3xl'>
          <h2 className='text-3xl lg:text-4xl font-normal text-[#1D2530] mb-2'>
            Predictive Maintenance
          </h2>

          <h1 className='text-[28px] lg:text-[36px] font-bold text-[#1D2530] leading-tight mb-8'>
            Powered by Advanced Analytics
          </h1>

          <p className='text-lg lg:text-xl text-[#4B5563] max-w-xl font-medium'>
            Minimizing unplanned downtime through proactive maintenance intelligence
          </p>
        </div>
      </div>
    </section>
  );
}
