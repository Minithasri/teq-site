'use client';

import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className='w-full overflow-x-hidden'>
      {/* ================= HERO SECTION ================= */}
      <div className='relative overflow-visible bg-gradient-to-tr from-[#108BA7] via-[#15647A] to-[#045080]'>
        {/* GLOW EFFECT */}
        {/* BOTTOM GLOW */}
        <div className='absolute bottom-[-150px] left-0 h-[200px] w-full bg-gradient-to-b from-white/90 via-white/70 to-transparent blur-[25px] pointer-events-none z-10' />

        {/* FLOATING IMAGE */}
        <div className=' absolute right-0 bottom-[-180px] hidden md:block z-20'>
          <Image
            src='/images/Templates/tig-golf/hero-float.png'
            alt='Golf'
            width={360}
            height={220}
            priority
            className='
            h-[220px]
            w-[360px]
            rounded-[28px]
            object-cover
            shadow-[0px_18px_40px_rgba(0,0,0,0.18)]
          '
          />
        </div>

        {/* CONTENT */}
        <div className='relative mx-auto max-w-7xl px-4 md:px-6 py-24'>
          {/* TEXT CONTENT */}

          {/* HEADING */}
          <h1 className='text-[34px] md:text-[74px] leading-[1.05] font-semibold tracking-[-2px] text-white'>
            <span className='text-[#E7F241]'>Automated Data Pipeline</span> for Excel-Based
            Reporting
          </h1>

          {/* DESCRIPTION */}
          <p className='mt-7 text-[12px] md:text-[18px] leading-[1.7] text-white'>
            Transforming semi-structured Excel data into scalable, automated, and analysis-ready
            datasets for real-time retail reporting.
          </p>
        </div>
      </div>

      {/* ================= CLIENT CONTEXT ================= */}
      <div className='relative mx-auto max-w-7xl px-4 md:px-6 pt-14 md:pt-20 pb-10 md:pb-16'>
        {/* TITLE */}
        <h2 className='text-2xl md:text-5xl leading-none font-semibold uppercase tracking-[3px] text-[#0E8BE8]'>
          <span className='mr-3'>01</span>· CLIENT CONTEXT
        </h2>

        {/* CONTENT CARD */}
        <div
          className='
          relative
          mt-10
          rounded-[24px]
          border
          border-[#D9DEE8]
          bg-white
          px-6
          md:px-10
          py-8
          md:py-10
          '
        >
          {/* TOP DESCRIPTION */}
          <div className='max-w-6xl'>
            <p className='text-[18px] md:text-[22px] leading-[1.9] text-[#2B3443]'>
              A leading retail organization required an automated solution to process Excel-based
              reports received through an SFTP server.
            </p>

            <p className='mt-7 text-[14px] md:text-[17px] leading-[2] text-[#6F7787]'>
              The existing process relied on handling semi-structured data with formatting-based
              hierarchies, making it difficult to extract consistent insights. This resulted in high
              manual effort, frequent errors, and delays in reporting.
            </p>

            <p className='mt-5 text-[14px] md:text-[17px] leading-[2] text-[#6F7787]'>
              The organization needed a scalable pipeline to automate data ingestion,
              transformation, and structuring for real-time analytics.
            </p>
          </div>

          {/* DIVIDER */}
          <div className='mt-10 h-[1px] w-full bg-[#DDE2EA]' />

          {/* FOOTER GOAL */}
          <div className='mt-8 flex items-center gap-4'>
            {/* BLUE BAR */}
            <div className='h-[42px] w-[4px] rounded-full bg-[#12A7FF]' />

            {/* TEXT */}
            <p className='text-[11px] md:text-[13px] uppercase tracking-[2px] text-[#6D7484]'>
              Goal · Real-time, analysis-ready retail reporting
            </p>
          </div>
        </div>

        {/* MOBILE IMAGE */}
        <div className='mt-10 flex justify-center md:hidden'>
          <Image
            src='/images/Templates/tig-golf/hero-float.png'
            alt='Golf'
            width={320}
            height={220}
            priority
            className='
              h-[220px]
              w-[320px]
              rounded-[24px]
              object-cover
            '
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
