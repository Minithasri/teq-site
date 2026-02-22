'use client';

import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className='relative w-full min-h-[500px] overflow-hidden flex flex-col justify-center'>
      {/* Background Image */}
      <div className='absolute inset-0 z-0'>
        <Image
          src='/images/Templates/template1/hero1.webp' // Utilizing existing asset for now, adaptable
          alt='Production Analytics Background'
          fill
          className='object-cover'
        />
      </div>

      {/* Gradient Overlay */}
      <div
        className='absolute inset-0 z-10'
        style={{
          background: 'linear-gradient(180deg, #2563EB 0%, #06B6D4 100%)', // Vibrant Blue Gradient
          opacity: 0.9,
        }}
      ></div>

      {/* Content */}
      <div className='relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center'>
        {/* Logo */}
        <div className='flex justify-center mt-12 mb-8'>
          <div className='relative w-32 md:w-48 h-10 md:h-12'>
            <Image
              src='/images/Templates/template1/gwclogo.svg'
              alt='GWC Data.AI'
              fill
              className='object-contain ' // White logo
            />
          </div>
        </div>

        {/* Title */}
        <div className='max-w-4xl mx-auto mb-6'>
          <h1 className='text-[32px] md:text-[40px] lg:text-[56px] font-bold text-white leading-[1.2] mb-4'>
            Maximizing Yield with
            <br />
            Intelligent Production Analytics
          </h1>
          <p className='text-[16px] md:text-[18px] lg:text-[20px] text-white/90 leading-relaxed max-w-3xl mx-auto'>
            Driving packaging efficiency through real-time visibility and predictive insights
          </p>
        </div>

        {/* Stats Cards */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12'>
          {/* Stat 1 */}
          <div className='bg-white/20 backdrop-blur-md rounded-xl p-6 border border-white/20'>
            <div className='text-3xl font-bold text-yellow-400 mb-1'>+30%</div>
            <div className='text-white font-medium'>Throughput</div>
          </div>

          {/* Stat 2 */}
          <div className='bg-white/20 backdrop-blur-md rounded-xl p-6 border border-white/20'>
            <div className='text-3xl font-bold text-yellow-400 mb-1'>+2%</div>
            <div className='text-white font-medium'>Yield Improvement</div>
          </div>

          {/* Stat 3 */}
          <div className='bg-white/20 backdrop-blur-md rounded-xl p-6 border border-white/20'>
            <div className='text-3xl font-bold text-yellow-400 mb-1'>-25%</div>
            <div className='text-white font-medium'>Scrap Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}
