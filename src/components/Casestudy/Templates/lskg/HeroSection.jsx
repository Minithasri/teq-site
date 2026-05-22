import React from 'react';

const HeroSection = () => {
  return (
    <section
      className='relative w-full h-[440px] flex items-center overflow-hidden'
      style={{
        background: 'linear-gradient(90deg, #0F1729 0%, #7990B6 50%, #B8BABE 100%)',
      }}
    >
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-20 w-full'>
        <div className='max-w-5xl'>
          <h1 className='text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-8 leading-[1.2]'>
            Empowering Fashion Retail with
            <span className='text-white mt-5 block'>Real-Time Sales & Inventory Insights</span>
          </h1>
          <p className='text-lg md:text-[18px] text-white/90 font-light tracking-wide max-w-3xl leading-relaxed'>
            How a fashion and retail brand transformed decision-making with automated dashboards and
            real-time analytics
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
