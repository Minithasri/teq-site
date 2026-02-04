'use client';

import Image from 'next/image';

export default function Images() {
  return (
    <section className='w-full  bg-[#F3F4F7] overflow-hidden'>
      <div className='max-w-[1440px] mx-auto px-4 relative h-[400px] md:h-[600px] lg:h-[800px] flex items-center justify-center'>
        {/* Center Background Image (Purple Dashboard) */}
        <div className='relative w-[90%] md:w-[70%] z-10 mx-auto'>
          <Image
            src='/images/Templates/template2/new11.webp'
            alt='Main Dashboard Overview'
            width={1200}
            height={800}
            className='w-full h-auto rounded-2xl'
          />
        </div>

        {/* Left Overlay Image (Production Report) */}
        <div className='absolute left-8 bottom-32 w-[50%] md:w-[40%] z-20'>
          <Image
            src='/images/Templates/template2/new22.webp'
            alt='Line Production Report'
            width={800}
            height={600}
            className='w-full h-auto rounded-2xl shadow-2xl'
          />
        </div>

        {/* Right Overlay Image (Efficiency Report) */}
        <div className='absolute right-10 top-5 w-[50%] md:w-[40%] z-20'>
          <Image
            src='/images/Templates/template2/new33.webp'
            alt='Efficiency Dashboard'
            width={800}
            height={600}
            className='w-full h-auto rounded-2xl shadow-2xl'
          />
        </div>
      </div>
    </section>
  );
}
