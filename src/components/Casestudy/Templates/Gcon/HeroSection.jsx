'use client';

import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className='w-full overflow-hidden'>
      {/* HERO SECTION */}
      <div className='relative isolate'>
        {/* BACKGROUND IMAGE */}
        <div className='absolute inset-0 z-0'>
          <Image
            src='/images/Templates/gcon/hero-bg.png'
            alt='Background'
            fill
            priority
            className='object-cover opacity-40'
          />
        </div>

        {/* DARK OVERLAY */}
        <div className='absolute inset-0 z-10 bg-[#071D49]/75' />

        {/* CONTENT */}
        <div className='relative z-20 mx-auto max-w-7xl px-4 md:px-6 pt-24 pb-16 text-center'>
          {/* TITLE */}
          <h1 className='mx-auto max-w-7xl text-3xl md:text-6xl leading-[1.1] font-semibold tracking-[-2px] text-white'>
            AI-Driven Submittal Extraction from{' '}
            <span className='text-[#F4E63D]'>Construction Specbooks</span>
          </h1>

          {/* DESCRIPTION */}
          <p className='mt-6 text-[13px] md:text-[18px] leading-[1.7] text-white/90'>
            How a leading construction company reduced document review effort by up to 85% and cut
            turnaround time from days to hours with an intelligent multi-agent AI workflow.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
