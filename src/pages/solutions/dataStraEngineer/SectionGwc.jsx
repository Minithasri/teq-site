'use client';

import Image from 'next/image';

const sectionData = {
  title: 'GWC Turns Your Data Into Business Value',
  subtitle:
    'Our BI and analytics solutions are customized to your business needs, delivering targeted insights that align with your unique challenges and goals.',
  mainImage: '/images/solutions/dataStrategyEngineer/bg_section2.png',
};

export default function SectionGwc() {
  return (
    // Changed bg-white to bg-transparent so the gradient from the section below is visible
    <section className='relative w-full bg-transparent overflow-visible z-20'>
      <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-12 xl:px-24 relative'>
        {/* Title */}
        <h2
          className='text-3xl md:text-3xl font-medium text-center mb-4'
          style={{ color: '#6F2B8B' }}
        >
          {sectionData.title}
        </h2>

        {/* Subtitle */}
        <p className='text-center text-sm md:text-base text-gray-600 max-w-2xl mx-auto mb-2'>
          {sectionData.subtitle}
        </p>

        {/* Main Image Container */}
        <div className='relative w-full lg:w-[620px] max-w-full mx-auto '>
          {/* Main Image (bg_frame.png) */}
          <div className='relative' style={{ paddingBottom: '50%' }}>
            <Image
              src={sectionData.mainImage}
              alt='Data Strategy visualization'
              fill
              className='object-contain rounded-3xl'
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
