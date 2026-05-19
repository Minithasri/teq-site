'use client';

import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className='w-full overflow-hidden bg-[#E2E8F0]/30'>
      {/* ================= HERO SECTION ================= */}
      <div className='relative overflow-visible bg-[#051A36] pb-[90px] md:pb-[120px]'>
        {/* CONTENT */}
        <div className='relative mx-auto max-w-7xl px-4 md:px-6 pt-24'>
          {/* HEADING */}
          <h1 className='text-[34px] md:text-[72px] leading-[1.02] font-semibold tracking-[-2px] text-white'>
            Sales, Inventory & Customer
            <br />
            <span className='text-[#D9E63D]'>Analytics Platform</span>
          </h1>

          {/* DESCRIPTION */}
          <p className='mt-8 text-[13px] md:text-[18px] leading-[1.8] text-white'>
            Enabling real-time visibility into sales, inventory, and customer behavior to drive
            smarter retail decisions and optimize operations.
          </p>
        </div>

        {/* FLOATING IMAGE */}
        <div
          className='
            absolute
            right-0
            bottom-[-70px]
            hidden
            md:block
            z-20
          '
        >
          <Image
            src='/images/Templates/altimetrik/hero-float.png'
            alt='Retail'
            width={330}
            height={180}
            priority
            className='
              h-[180px]
              w-[330px]
              rounded-l-[22px]
              object-cover
              shadow-[0px_14px_34px_rgba(0,0,0,0.18)]
            '
          />
        </div>
      </div>

      {/* ================= CONTEXT SECTION ================= */}
      <div className='mx-auto max-w-7xl px-4 md:px-6 pt-10 md:pt-14 pb-10 md:pb-14'>
        {/* TITLE */}
        <h2 className='text-2xl md:text-5xl leading-none font-semibold uppercase tracking-[3px] text-[#E0572D]'>
          <span className='mr-3'>01</span>— CONTEXT
        </h2>

        {/* CONTENT */}
        <div className='mt-8'>
          {/* MAIN DESCRIPTION */}
          <p className='text-[16px] md:text-[22px] leading-[1.9] text-[#1B2431]'>
            A global retail fashion organization required an end-to-end analytics solution to
            monitor sales performance, inventory trends, and customer behavior across both online
            and offline channels.
          </p>

          {/* SUB DESCRIPTION */}
          <p className='mt-8 text-[14px] md:text-[18px] leading-[2] text-[#697384]'>
            The existing system lacked real-time visibility into critical metrics, resulting in
            inefficiencies in decision-making, inventory planning, and demand forecasting. The
            organization needed a scalable solution to enable real-time reporting and enhance
            customer-driven insights.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
