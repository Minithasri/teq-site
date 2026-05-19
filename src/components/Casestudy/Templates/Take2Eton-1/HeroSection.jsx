'use client';

import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className='w-full overflow-hidden'>
      {/* ================= HERO SECTION ================= */}
      <div className='relative overflow-visible bg-gradient-to-b from-[#7CBBF9] to-[#DBECFD]'>
        {/* NETWORK BG */}
        <div className='absolute inset-0 opacity-20'>
          <Image
            src='/images/Templates/take2eton-1/hero-bg.png'
            alt='Network'
            fill
            priority
            className='object-fit'
          />
        </div>

        <div className='absolute inset-0 bg-white/5 z-0' />

        {/* CONTENT */}
        <div className='relative mx-auto max-w-7xl px-4 md:px-6 pt-24 pb-8'>
          {/* HERO CONTENT */}
          <div className='max-w-7xl'>
            {/* HEADING */}
            <h1 className='text-[28px] md:text-[58px] leading-[1.08] font-semibold tracking-[-2px] text-[#07111F]'>
              <span className='text-[#FFE13A]'>Digital Transformation</span> for a Leading Global
              <br />
              Travel Management Organization
            </h1>

            {/* DESCRIPTION */}
            <p className='mt-6 max-w-5xl text-[13px] md:text-[22px] leading-[1.8] text-[#111827]'>
              Showcasing AI, automation, data integration, and analytics-driven solutions that
              improved operational efficiency, financial accuracy, compliance visibility, and
              customer experience across travel management functions.
            </p>
          </div>

          {/* FLOATING IMAGE */}
          <div
            className='
            absolute
            right-[-80px]
            bottom-[-110px]
            hidden
            md:block
            z-20
          '
          >
            <Image
              src='/images/Templates/take2eton-1/hero-float.png'
              alt='Background'
              width={320}
              height={240}
              priority
              className='
              h-[240px]
              w-[320px]
              rounded-[16px]
              object-cover
            '
            />
          </div>
        </div>
      </div>

      {/* ================= CLIENT CONTEXT ================= */}
      <div className='mx-auto max-w-7xl px-4 md:px-6 pt-12 pb-10'>
        {/* TITLE */}
        <h2 className='text-2xl md:text-5xl leading-none font-semibold uppercase tracking-[2px] text-[#163D76]'>
          CLIENT CONTEXT
        </h2>

        {/* DESCRIPTION */}
        <div className='mt-6'>
          <p className='text-[12px] md:text-[18px] leading-[2] text-[#5F6777]'>
            A leading global travel management organization operates across complex domains
            including bookings, compliance, financial operations, and multi-system integrations. The
            organization faced challenges due to fragmented data sources, manual processes, limited
            visibility into operations, and scalability constraints. To address these issues,
            multiple digital initiatives were implemented leveraging AI, automation, and modern data
            platforms to streamline workflows, improve accuracy, and enable real-time, data-driven
            decision-making.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
