'use client';

import Image from 'next/image';

export default function Images() {
  return (
    <section className='w-full  bg-[#F3F4F7] overflow-hidden'>
      <div className='max-w-[1440px] mx-auto px-4 py-12 lg:py-20 relative min-h-fit lg:h-[800px] flex flex-col lg:items-center lg:justify-center gap-8 lg:gap-0'>
        {/* Center Background Image (Purple Dashboard) */}
        <div className='relative w-full lg:w-[70%] z-10 mx-auto'>
          <Image
            src='/images/Templates/template2/new11.webp'
            alt='Main Dashboard Overview'
            width={1200}
            height={800}
            className='w-full h-auto rounded-2xl shadow-lg'
          />
        </div>

        {/* Left Overlay Image (Production Report) - Hidden on mobile/tablet */}
        <div className='hidden xl:block absolute left-8 bottom-32 w-[40%] z-20'>
          <Image
            src='/images/Templates/template2/new22.webp'
            alt='Line Production Report'
            width={800}
            height={600}
            className='w-full h-auto rounded-2xl shadow-2xl transition-transform hover:scale-105 duration-300'
          />
        </div>

        {/* Right Overlay Image (Efficiency Report) - Hidden on mobile/tablet */}
        <div className='hidden xl:block absolute right-10 top-5 w-[40%] z-20'>
          <Image
            src='/images/Templates/template2/new33.webp'
            alt='Efficiency Dashboard'
            width={800}
            height={600}
            className='w-full h-auto rounded-2xl shadow-2xl transition-transform hover:scale-105 duration-300'
          />
        </div>

        {/* Mobile View: Show images in a grid on smaller screens */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden'>
          <Image
            src='/images/Templates/template2/new22.webp'
            alt='Line Production Report'
            width={400}
            height={300}
            className='w-full h-auto rounded-xl shadow-md'
          />
          <Image
            src='/images/Templates/template2/new33.webp'
            alt='Efficiency Dashboard'
            width={400}
            height={300}
            className='w-full h-auto rounded-xl shadow-md'
          />
        </div>
      </div>
    </section>
  );
}
