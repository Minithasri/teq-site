'use client';

import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className='w-full overflow-hidden'>
      {/* ================= HERO SECTION ================= */}
      <div className='relative overflow-visible'>
        {/* BACKGROUND IMAGE */}
        <div className='absolute inset-0 z-0'>
          <Image
            src='/images/Templates/wellstat/hero-bg.png'
            alt='Energy'
            fill
            priority
            className='object-cover'
          />
        </div>

        {/* GREEN OVERLAY */}
        <div className='absolute inset-0 bg-gradient-to-r from-[#0F6B44]/90 to-[#1C9D67]/70 z-0' />

        {/* CONTENT */}
        <div className='relative z-10 mx-auto max-w-7xl px-4 md:px-6 pt-24 pb-8 md:pb-20'>
          <div className='max-w-7xl'>
            {/* HEADING */}
            <h1 className='text-[38px] md:text-[72px] leading-[1.08] font-semibold tracking-[-2px] text-white'>
              Enterprise Data Integration & <br />
              Automated Reporting Platform
            </h1>

            {/* DESCRIPTION */}
            <p className='mt-8 text-[13px] md:text-[22px] leading-[1.7] text-white'>
              Transforming fragmented data ecosystems into a unified, automated intelligence layer —
              enabling real-time visibility and accelerated decision-making.
            </p>
          </div>
        </div>

        {/* FLOATING IMAGE */}
        <div className='absolute bottom-[-90px] right-[40px] hidden md:block z-20'>
          <Image
            src='/images/Templates/wellstat/hero.png'
            alt='Enterprise'
            width={320}
            height={220}
            priority
            className='h-[220px] w-[320px] object-contain'
          />
        </div>
      </div>

      {/* ================= CLIENT OVERVIEW ================= */}
      <div className='relative z-10'>
        <div className='mx-auto max-w-7xl px-4 md:px-6 pt-10 md:pt-14 pb-10 md:pb-14'>
          {/* TITLE */}
          <h2 className='text-2xl md:text-5xl leading-none font-semibold tracking-[-1px] text-[#0F1729]'>
            Client Overview
          </h2>

          {/* CONTENT */}
          <div className='mt-2 space-y-4'>
            <p className='text-[13px] md:text-[18px] leading-[2] text-[#2E313A]'>
              A PropTech organization operating in the energy and sustainability space required a
              complete modernization of its reporting ecosystem. The existing infrastructure relied
              heavily on manual, Excel-based reporting processes — creating inefficiencies, data
              silos, and delayed business insights.
            </p>

            <p className='text-[13px] md:text-[18px] leading-[2] text-[#2E313A]'>
              The objective was to replace this fragmented approach with a centralized, automated
              data platform to improve accuracy, operational efficiency, and real-time visibility
              across the enterprise.
            </p>
          </div>
        </div>
      </div>

      {/* MOBILE IMAGE */}
      <div className='px-4 pb-10 md:hidden'>
        <Image
          src='/images/Templates/wellstat/hero.png'
          alt='Enterprise'
          width={500}
          height={300}
          priority
          className='h-[240px] w-full object-contain'
        />
      </div>
    </section>
  );
};

export default HeroSection;
