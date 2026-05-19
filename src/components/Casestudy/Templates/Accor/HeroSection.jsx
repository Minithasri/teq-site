'use client';

import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className='w-full overflow-hidden bg-[#045A82]'>
      {/* HERO SECTION */}
      <div className='relative'>
        {/* CONTENT */}
        <div className='mx-auto max-w-7xl px-4 md:px-6 pt-24 pb-8 md:pb-20'>
          {/* HEADING */}
          <div className='text-center'>
            <h1 className='text-[38px] md:text-[72px] leading-[1.08] font-light tracking-[-2px] text-white'>
              AI-Based Menu Analysis &
              <br />
              <span className='bg-gradient-to-r from-[#2D82FF] to-[#19E2D6] bg-clip-text text-transparent'>
                Licensing Automation Platform
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className='max-w-4xl mx-auto mt-7 text-[10px] md:text-[20px] leading-[1.7] text-white'>
              Transforming manual menu review into an intelligent, automated pipeline powered by
              AI-driven document intelligence and classification.
            </p>
          </div>
        </div>

        {/* FLOATING IMAGE */}
        <div className='absolute bottom-[-92px] right-0 hidden md:block z-20'>
          <Image
            src='/images/Templates/accor/hero.png'
            alt='AI Menu'
            width={320}
            height={240}
            priority
            className='h-[240px] w-[320px] rounded-[22px] object-cover'
          />
        </div>
      </div>

      {/* CLIENT OVERVIEW */}
      <div className='bg-[#F7F7F7]'>
        <div className='mx-auto max-w-7xl px-4 md:px-6 py-10 md:py-16'>
          {/* TITLE */}
          <h2 className='text-2xl md:text-5xl leading-none font-semibold tracking-[-1px] text-[#2A86F7]'>
            CLIENT OVERVIEW
          </h2>

          {/* DESCRIPTION */}
          <div className='mt-8'>
            <p className='text-[11px] md:text-[18px] leading-[1.9] text-[#7A8495]'>
              A leading hospitality organization managing restaurant and bar operations, requiring
              efficient and scalable processes to analyze menu data and ensure compliance with
              licensing regulations. With growing operational complexity, the organization sought an
              AI-powered solution to replace outdated manual workflows.
            </p>
          </div>
        </div>
      </div>

      {/* MOBILE IMAGE */}
      <div className='bg-[#F7F7F7] px-4 pb-10 md:hidden'>
        <Image
          src='/images/Templates/accor/hero.png'
          alt='AI Menu'
          width={500}
          height={320}
          priority
          className='h-[260px] w-full rounded-[22px] object-cover'
        />
      </div>
    </section>
  );
};

export default HeroSection;
