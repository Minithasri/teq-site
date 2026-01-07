'use client';
import Image from 'next/image';

const DesignSection = () => {
  return (
    <section className='w-full py-16 lg:py-24'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Heading */}
        <h2
          className='text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] text-center font-bold mb-12 lg:mb-16 bg-clip-text text-transparent leading-tight'
          style={{
            background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Design the future you aspire to!
        </h2>

        {/* Image Container */}
        <div className='relative w-full mb-8 lg:mb-12 flex justify-center px-4'>
          <div className='relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl w-full max-w-[1240px] h-[180px] sm:h-[220px] md:h-[260px]'>
            <Image
              src='/images/Careers/bg_employee.png'
              alt='GWC Team'
              fill
              className='object-cover rounded-2xl md:rounded-3xl'
              priority
            />
          </div>
        </div>

        {/* Description */}
        <div className='max-w-5xl mx-auto px-4'>
          <p className='text-center text-gray-600 text-[14px] sm:text-[15px] md:text-base lg:text-lg leading-relaxed'>
            Design the future you dream of! Wish to empower businesses and contribute to a more
            sustainable, inclusive future? Be a part of GWC, a dynamic organization where you become
            an integral part of a global community of innovative thinkers and industry experts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DesignSection;
