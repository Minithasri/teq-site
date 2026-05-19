'use client';

import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className='w-full overflow-hidden'>
      {/* ================= HERO SECTION ================= */}
      <div className='relative overflow-hidden'>
        {/* BACKGROUND IMAGE */}
        <div className='absolute inset-0 z-0'>
          <Image
            src='/images/Templates/connect-wise/hero-bg.png'
            alt='Enterprise Integration'
            fill
            priority
            className='object-cover'
          />
        </div>

        {/* CONTENT */}
        <div className='relative z-10 mx-auto max-w-7xl px-4 md:px-6 pt-24 pb-8 md:pb-20'>
          <div className='mx-auto max-w-6xl text-center'>
            {/* HEADING */}
            <h1 className='text-[26px] md:text-[62px] leading-[1.08] font-semibold tracking-[-2px] text-white'>
              End-to-End Enterprise Integration
              <br />
              <span className='text-[#E9F04A]'>and Data Synchronization Platform</span>
            </h1>

            {/* DESCRIPTION */}
            <p className='mx-auto mt-8 max-w-5xl text-[15px] md:text-[24px] leading-[1.7] text-white'>
              Enabling real-time integration, seamless automation, and enterprise-grade data
              synchronization across mission-critical business systems.
            </p>
          </div>
        </div>
      </div>

      {/* ================= CLIENT OVERVIEW ================= */}
      <div className='mx-auto max-w-7xl px-4 md:px-6 py-10 md:py-14'>
        {/* TITLE */}
        <h2 className='text-2xl md:text-5xl leading-none font-semibold tracking-[-1px] text-[#17489B]'>
          CLIENT OVERVIEW
        </h2>

        {/* DESCRIPTION */}
        <div className='mt-8'>
          <p className='text-[13px] md:text-[18px] leading-[2] text-[#5E6676]'>
            A leading IT services and IT security organization required a robust and scalable
            integration platform to connect multiple enterprise systems and enable seamless,
            real-time data synchronization across business functions. With growing operational
            complexity and an expanding technology ecosystem, the organization sought a partner to
            unify its data landscape and eliminate the inefficiencies of fragmented integrations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
