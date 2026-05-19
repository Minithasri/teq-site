import React from 'react';

const HeroSection = () => {
  return (
    <section className='relative w-full h-[511px] overflow-hidden bg-[#107AC6]'>
      {/* Background Image */}
      <div
        className='absolute inset-0 z-0'
        style={{
          backgroundImage: 'url(/images/Templates/parisar/img1.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      {/* Gradient Overlay */}
      <div className='absolute inset-0 z-0 bg-gradient-to-r from-[#107AC6]/80 to-[#1FA8D6]/80'></div>

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 w-full h-full flex items-center justify-between'>
        <div className=''>
          <h1 className='text-4xl md:text-5xl lg:text-[56px] font-bold text-white mb-6 leading-[1.2] tracking-tight'>
            Improving Public <span className='text-[#FFED00]'>Transport Efficiency</span>
          </h1>
          <p className='text-lg md:text-[22px] text-white/90 font-medium tracking-wide'>
            Real-Time Operations Dashboards
          </p>
        </div>

        {/* Right side Image */}
        <div className='hidden lg:block absolute right-4 lg:right-5 bottom-0 w-[480px] lg:w-[490px] h-[220px]'>
          <img
            src='/images/Templates/parisar/img1.png'
            alt='Real-Time Dashboards'
            className='w-full h-full object-cover rounded-t-[24px] shadow-2xl'
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
