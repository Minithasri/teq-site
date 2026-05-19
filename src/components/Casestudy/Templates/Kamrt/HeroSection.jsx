'use client';

import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className='w-full overflow-hidden bg-[#F7F7F7]'>
      {/* ================= HERO SECTION ================= */}
      <div className='relative min-h-[220px] md:min-h-[330px] overflow-hidden'>
        {/* BACKGROUND IMAGE */}
        <div className='absolute inset-0 z-0'>
          <Image
            src='/images/Templates/kamrt/hero-bg.png'
            alt='Retail'
            fill
            priority
            className='object-fit'
          />
        </div>

        {/* OVERLAY */}
        <div className='absolute inset-0 bg-gradient-to-r from-[#B71607]/60 to-[#640DDC]/60 z-0' />

        {/* CONTENT */}
        <div className='relative z-10 mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-24 text-center'>
          {/* HEADING */}
          <h1 className='mx-auto max-w-7xl text-3xl md:text-5xl font-semibold tracking-[-2px] text-white mt-8'>
            Optimizing Retail Performance Through
            <br />
            <span className='text-[#F4EB17]'>Data-Driven Dashboards</span>
          </h1>
        </div>
      </div>

      {/* ================= CLIENT OVERVIEW ================= */}
      <div className='relative pb-10 md:pb-16'>
        {/* FLOATING IMAGE */}
        <div className='absolute right-0 top-[-80px] hidden md:block z-20'>
          <Image
            src='/images/Templates/kamrt/overview.png'
            alt='Smart Retail'
            width={300}
            height={300}
            priority
            className='h-[280px] w-[380px] object-contain'
          />
        </div>

        <div className='mx-auto max-w-7xl px-4 md:px-6'>
          {/* OVERVIEW CARD */}
          <div
            className='
            relative
            mt-[40px]
            md:mt-[70px]
            rounded-2xl
            border
            max-w-5xl
            border-[#E6E8F4]
            bg-[#F3F3FD]
            px-6
            md:px-8
            py-7
            md:py-9
            shadow-[0px_8px_22px_rgba(0,0,0,0.06)]
          '
          >
            {/* HEADER */}
            <div className='flex items-start gap-4'>
              {/* ICON BOX */}
              <div className='flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-[12px] bg-[#D9D8F8]'>
                <Image
                  src='/images/Templates/kamrt/client.svg'
                  alt='Overview'
                  width={22}
                  height={22}
                  className='h-[22px] w-[22px] object-contain'
                />
              </div>

              {/* TITLE */}
              <h2 className='text-2xl md:text-5xl leading-none font-bold tracking-[-1px] text-[#1B1E28]'>
                Client Overview
              </h2>
            </div>

            {/* DESCRIPTION */}
            <p className='mt-7 pl-0 md:pl-[58px] text-[13px] md:text-[18px] leading-[1.8] text-[#676E7E]'>
              A major player in the retail industry, needed a centralized solution to track and
              monitor sales, inventory, and operational performance. With multiple business units
              and high transaction volumes, leadership required real-time dashboards to support
              faster and more data-driven decisions.
            </p>
          </div>
        </div>

        {/* MOBILE IMAGE */}
        <div className='mt-8 flex justify-center md:hidden'>
          <Image
            src='/images/Templates/kamrt/overview.png'
            alt='Smart Retail'
            width={240}
            height={240}
            priority
            className='h-[240px] w-[240px] object-contain'
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
