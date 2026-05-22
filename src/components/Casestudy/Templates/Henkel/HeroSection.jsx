'use client';

import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className='w-full overflow-hidden'>
      {/* ================= HERO SECTION ================= */}
      <div className='relative overflow-visible bg-gradient-to-r from-[#001C4A] to-[#003A78]'>
        {/* CONTENT */}
        <div className='relative mx-auto max-w-7xl px-4 md:px-6 pt-24 pb-8 md:pb-20'>
          {/* HERO CONTENT */}

          {/* HEADING */}
          <h1 className='text-[38px] md:text-[60px] leading-[1.05] font-semibold tracking-[-2px] text-white'>
            Campaign <span className='text-[#FFF]'>Performance and Conversion</span>
            <br />
            Analytics Platform
          </h1>

          {/* DESCRIPTION */}
          <p className='mt-6 text-[13px] md:text-[23px] leading-[1.7] text-white'>
            Empowering data-driven marketing decisions through unified analytics, end-to-end funnel
            visibility, and actionable campaign intelligence.
          </p>

          {/* FLOATING IMAGES */}
          <div
            className='
              absolute
              right-0
              hidden
              md:block
              z-20
            '
          >
            {/* BACK IMAGE */}
            <div className='absolute right-[-110px] top-[-40px] z-0'>
              <Image
                src='/images/Templates/henkel/hero-float.png'
                alt='Background'
                width={320}
                height={180}
                priority
                className='
                h-[220px]
                w-[320px]
                rounded-[16px]
                object-cover
                opacity-80
              '
              />
            </div>

            {/* FRONT IMAGE */}
            <div className='relative z-10 right-[-70px] top-[-20px] z-0'>
              <Image
                src='/images/Templates/henkel/hero-float.png'
                alt='Campaign'
                width={320}
                height={180}
                priority
                className='
                  h-[220px]
                  w-[320px]
                  rounded-[22px]
                  object-cover
                  shadow-[0px_12px_28px_rgba(0,0,0,0.18)]
                '
              />
            </div>
          </div>
        </div>
      </div>

      {/* ================= CLIENT OVERVIEW ================= */}
      <div className='mx-auto max-w-7xl px-4 md:px-6 pt-10 md:pt-16 text-center'>
        {/* TITLE */}
        <h2 className='text-2xl md:text-5xl leading-none font-semibold tracking-[-1px]'>
          Client Overview
        </h2>

        {/* DESCRIPTION */}
        <div className='mt-6'>
          <p className='text-[12px] md:text-[17px] leading-[2] text-[#8A93A4]'>
            A leading organization in the chemical industry required a centralized analytics
            platform to track and optimize digital marketing performance across multiple channels
            and improve visibility into the conversion funnel. The organization sought to
            consolidate fragmented data sources, eliminate manual reporting overhead, and unlock
            actionable insights to drive marketing ROI.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
