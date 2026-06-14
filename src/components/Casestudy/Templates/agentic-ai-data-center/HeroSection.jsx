import React from 'react';

export default function HeroSection() {
  return (
    <section className='w-full bg-[#f8fafc] relative overflow-visible'>
      {/* 1. BLUE HERO BACKGROUND BLOCK */}
      <div
        className='relative bg-cover bg-center min-h-[340px] md:min-h-[480px] w-full flex items-center'
        style={{
          // Main gradient layer matched to the reference color scheme
          backgroundImage:
            'linear-gradient(90deg, rgba(37, 48, 235, 0.96), rgba(35, 40, 220, 0.94)), url("/images/Templates/template16/bg1.png")',
        }}
      >
        <div className='max-w-[1140px] mx-auto px-4 md:px-6 py-12 w-full relative z-10'>
          {/* BRAND PARTNERSHIP LOGO HEADER (Assembled logo asset) */}
          <div className='flex items-center gap-3.5 mb-6 md:mb-8 justify-start select-none pointer-events-none'>
            <img
              src='/images/Templates/template16/gwclogohero.svg'
              alt='GWC Data.AI X Fekki'
              className='h-[42px] md:h-[48px] object-contain'
            />
          </div>

          {/* MAIN BANNER HEADER BLOCK */}
          <h1 className='text-white text-[32px] md:text-[46px] lg:text-[52px] font-extrabold leading-[1.2] max-w-[860px] tracking-tight text-left'>
            Transforming Data Center
            <br />
            Operations with Agentic AI
          </h1>
        </div>
      </div>

      {/* 2. LOWER CONTENT PANEL & FLOATING GRAPHIC MATRIX */}
      <div className='w-full bg-[#f8fafc] pt-12 pb-14 relative'>
        <div className='max-w-[1140px] mx-auto px-4 md:px-6 relative'>
          {/* Left Description Column Block */}
          <div className='max-w-[760px] lg:max-w-[780px] space-y-5 text-left pr-4'>
            <p className='text-[16.5px] md:text-[16.5px] text-[#4a5568] font-medium leading-relaxed tracking-tight'>
              Fekki, a data center solutions provider, needed a real-time monitoring and
              optimization system to ensure continuous uptime, efficient energy use, and proactive
              incident management.
            </p>
            <p className='text-[16.5px] md:text-[16.5px] text-[#4a5568] font-medium leading-relaxed tracking-tight'>
              GWC partnered with Fekki to build{' '}
              <strong className='text-[#071326] font-bold'>Agentic AI for Data Centers</strong> — a
              solution combining real-time monitoring, predictive insights, and automated responses
              to optimize operations, reduce downtime, and proactively manage critical system
              events.
            </p>
          </div>

          {/* RIGHT FLOATING OVERLAY DISPLAY IMAGE LAYER
              - Decoupled standard flow with absolute positioning to float above parent margins
          */}
          <div className='hidden lg:block absolute z-20 top-[-160px] right-4 xl:right-0 pointer-events-none select-none'>
            <img
              src='/images/Templates/template16/bg1.png'
              alt='Data Center Dashboard Insights'
              className='w-[290px] xl:w-[320px] h-auto object-contain rounded-[14px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-white/10'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
