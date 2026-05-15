'use client';

import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className='relative w-full overflow-hidden bg-[#082847]'>
      {/* BACKGROUND IMAGE */}
      <div className='absolute inset-0 z-0'>
        <Image
          src='/images/Templates/style-union-2/hero-bg.png'
          alt='Retail Background'
          fill
          priority
          className='object-cover opacity-35'
        />
      </div>

      {/* DARK OVERLAY */}
      <div className='absolute inset-0 bg-gradient-to-r from-[#082847]/95 via-[#0A3254]/90 to-[#0A6A62]/70 z-0' />

      {/* CONTENT */}
      <div className='relative z-10 mx-auto max-w-7xl px-4 md:px-6 py-10 md:py-14'>
        {/* HEADING */}
        <div className='mt-4 max-w-7xl'>
          <h1 className='text-[38px] md:text-6xl leading-[1.05] font-semibold tracking-[-2px] text-white'>
            <span className='text-[#D7F04A]'>Store Manager Mobile Application</span> for Retail
            Execution
          </h1>
          <p className='mt-6 text-md md:text-xl leading-[1.6] text-white'>
            Empowering retail teams with real-time inventory intelligence and streamlined execution
            workflows to drive measurable business outcomes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
