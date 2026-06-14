'use client';

import Image from 'next/image';

export default function CleanHydrogenHero() {
  return (
    <div
      className="w-full relative overflow-hidden p-8 md:p-16 font-['Poppins'] flex flex-col justify-start"
      style={{
        minHeight: '570px',
        background: 'linear-gradient(155deg, #233B5C 0%, #1DACC9 50%, #28BD66 100%)',
      }}
    >
      {/* Top Section: Logos Branding Row */}
      <div className='flex items-center gap-5 mt-14 md:mt-20 z-10 max-w-7xl w-full mx-[7%] mb-5 md:mb-8'>
        {/* GWC Data AI Logo */}
        <div className='relative w-40 h-10'>
          <Image
            src='/images/Templates/templatez/rtportfolio/gwc.svg'
            alt='GWC DATA.AI'
            fill
            className='object-contain object-left'
          />
        </div>
      </div>

      {/* Main Layout Section split into Texts and Visual Preview */}
      <div className='max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 items-end gap-6 z-10 mt-2'>
        {/* Left Side: Headlines and Subtext (Moved higher up) */}
        <div className='lg:col-span-8 flex flex-col text-white self-start lg:self-auto'>
          <h1 className='font-bold text-[54px] max-w-full lg:min-w-[1150px] leading-[44px] md:text-[46px] md:leading-[54px] lg:text-[52px] lg:leading-[62px] tracking-tight'>
            Empowering Clean Hydrogen Investment with Real-Time Portfolio Intelligence
          </h1>

          <p className='mt-5 text-[15px] md:text-[17px] leading-[26px] opacity-90 max-w-[75%] font-light'>
            How GWC transformed HY24's hydrogen investment management with data-driven insights
          </p>
        </div>

        {/* Right Side: Bottom Right Image Showcase Container (Pushed right to the bottom edge) */}
        <div className='lg:col-span-4 flex justify-end w-full -mb-12 md:-mb-20 lg:-mb-24'>
          <div className='relative w-full max-w-[380px] md:max-w-[420px] translate-y-[30px] h-[200px] rounded-2xl overflow-hidden shadow-2xl border border-white/10'>
            <Image
              src='/images/Templates/templatez/rtportfolio/head.png'
              alt='Hydrogen Wind Portfolio Dashboard Mockup View'
              fill
              className='object-cover'
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
