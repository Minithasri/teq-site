import React from 'react';

const HeroSection = () => {
  return (
    <section className='relative w-full py-14 pt-28 bg-[#163969] overflow-hidden'>
      <div className='relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        <h1 className='text-4xl md:text-5xl lg:text-[48px] font-bold text-[#FFFFFF] mb-6 leading-snug tracking-tight'>
          Unlocking Restaurant Growth with <br />
          <span className='text-[#DCCD5E] inline-block mt-5'>Customer Trends Analytics</span>
        </h1>
        <p className='text-lg md:text-[20px] text-[#FFFFFF] font-normal max-w-3xl mx-auto'>
          How Anyday transformed customer engagement and sales strategy with{' '}
          <br className='hidden md:block' /> real-time data insights
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
