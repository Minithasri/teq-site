'use client';
import Image from 'next/image';

const HomeTown = () => {
  return (
    <section className='relative w-full min-h-[400px] lg:min-h-[500px] overflow-hidden'>
      {/* Background Image */}
      <div className='absolute inset-0 z-0'>
        <Image
          src='/images/Careers/home_bg1.png'
          alt='Hometown Background'
          fill
          className='object-cover'
          priority
        />
      </div>

      {/* Content */}
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20'>
        <div className='max-w-2xl'>
          {/* Heading */}
          <h2 className='text-white font-bold mb-6' style={{ fontSize: '50px', lineHeight: '1.2' }}>
            Work from HomeTown
          </h2>

          {/* Description */}
          <p className='mb-8' style={{ fontSize: '24px', lineHeight: '1.4', color: '#EFEDFDB2' }}>
            Bringing offices to your HomeTowns
          </p>

          {/* Button */}
          <button
            className='inline-flex items-center justify-center gap-2 text-white px-8 py-3 rounded-full font-medium text-base hover:scale-105 transition-transform shadow-lg'
            style={{
              background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
            }}
          >
            More details
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeTown;
