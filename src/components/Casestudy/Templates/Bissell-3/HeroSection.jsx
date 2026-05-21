'use client';

import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className='w-full overflow-hidden'>
      {/* ================= HERO SECTION ================= */}
      <div className='relative overflow-visible bg-gradient-to-r from-[#0C1F56] to-[#123E67]'>
        {/* CONTENT */}
        <div className='relative mx-auto max-w-7xl px-4 md:px-6 pt-24 pb-8 md:pb-20'>
          {/* HERO CONTENT */}
          <div className='max-w-6xl'>
            {/* HEADING */}
            <h1 className='text-[32px] md:text-[66px] leading-[1.08] font-semibold tracking-[-2px] text-white'>
              Logistics Network Optimization &
              <br />
              Cost Reduction Analytics
            </h1>

            {/* DESCRIPTION */}
            <p className='mt-8 text-[11px] md:text-[20px] leading-[1.7] text-white'>
              Transforming supply chain performance through data-driven network optimization and
              strategic cost reduction.
            </p>
          </div>
        </div>

        {/* FLOATING IMAGE */}
        <div className='absolute bottom-[-132px] right-[60px] hidden md:block z-20'>
          <Image
            src='/images/Templates/bissell-3/hero.png'
            alt='Logistics'
            width={360}
            height={220}
            priority
            className='h-[220px] w-[360px] object-contain'
          />
        </div>
      </div>

      {/* ================= CLIENT OVERVIEW ================= */}
      <div className='relative z-10'>
        <div className='mx-auto max-w-7xl px-4 md:px-6 pt-10 md:pt-14 pb-10 md:pb-14 text-center'>
          {/* TITLE */}
          <h2 className='text-2xl md:text-5xl leading-none font-semibold tracking-[-1px]'>
            Client Overview
          </h2>

          {/* OVERVIEW CARD */}
          <div
            className='
              mt-8
              max-w-6xl
              rounded-[18px]
              border-2
              border-[#F5F5F5]
              bg-white
              px-6
              md:px-8
              py-6
              md:py-8
              shadow-[0px_4px_12px_rgba(0,0,0,0.08)]
            '
          >
            <p className='text-[12px] md:text-[18px] leading-[1.9] text-[#7D8797]'>
              A leading consumer goods organization managing a complex logistics and distribution
              network, requiring data-driven insights to optimize transportation costs and improve
              fulfillment efficiency.
            </p>
          </div>
        </div>
      </div>

      {/* MOBILE IMAGE */}
      <div className='px-4 pb-10 md:hidden'>
        <Image
          src='/images/Templates/bissell-3/hero.png'
          alt='Logistics'
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
