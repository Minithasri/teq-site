'use client';

import Image from 'next/image';

const features = [
  {
    icon: '/images/partners/snowflake/snowicon1.svg',
    title: 'Scalable cloud data platform',
    description:
      'Snowflake enables efficient data storage, processing, and analytics on the cloud.',
  },
  {
    icon: '/images/partners/snowflake/snowicon2.svg',
    title: 'Advanced data management & analytics',
    description: 'Seamlessly analyze large datasets with high performance and flexibility.',
  },
  {
    icon: '/images/partners/snowflake/snowicon3.svg',
    title: 'Reliable cloud operations with GWC',
    description: 'Smooth, secure cloud operations so you can focus on your business goals.',
  },
];

export default function Powerdata() {
  return (
    <section className='relative w-full py-20 overflow-hidden bg-white'>
      {/* Background Image Layer - using Frame2.webp as requested */}
      <div className='absolute inset-0 pointer-events-none'>
        <Image
          src='/images/partners/snowflake/frame2.webp'
          alt='Background Pattern'
          fill
          className='object-cover opacity-100'
        />
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Header */}
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-medium mb-4' style={{ color: '#5C2B8F' }}>
            Unleash the power of data
          </h2>
        </div>

        {/* Central Image - img7.webp */}
        <div className='flex justify-center mb-16'>
          <div
            className='relative rounded-3xl overflow-hidden'
            style={{ width: '670px', height: '270px' }}
          >
            <Image
              src='/images/partners/snowflake/img7.webp'
              alt='Snowflake Data Core'
              fill
              className='object-cover rounded-3xl'
            />
          </div>
        </div>

        {/* Feature Cards */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {features.map((feature, index) => (
            <div
              key={index}
              className='bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300'
            >
              <div className='mb-6'>
                <Image src={feature.icon} alt='Feature Icon' width={32} height={32} />
              </div>
              <h3 className='text-[18px] font-semibold text-[#404040] mb-3'>{feature.title}</h3>
              <p className='text-[14px] text-[#404040] leading-relaxed'>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
