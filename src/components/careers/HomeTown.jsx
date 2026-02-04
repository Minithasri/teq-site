'use client';
import Image from 'next/image';
import Link from 'next/link';

const HomeTown = () => {
  return (
    <section className='relative w-full min-h-[350px] sm:min-h-[400px] md:min-h-[450px] lg:min-h-[500px] overflow-hidden'>
      {/* Background Image */}
      <div className='absolute inset-0 z-0'>
        <Image
          src='/images/Careers/home_bg1.webp'
          alt='Hometown Background'
          fill
          className='object-cover'
          priority
        />
      </div>

      {/* Content */}
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-36'>
        <div className='max-w-2xl'>
          {/* Heading */}
          <h2
            className='text-white font-bold mb-4 md:mb-6 text-[32px] sm:text-[38px] md:text-[44px] lg:text-[50px] leading-tight md:leading-normal'
            style={{ lineHeight: 'inherit' }}
          >
            Work from HomeTown
          </h2>

          {/* Description */}
          <p
            className='mb-6 md:mb-8 text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px]'
            style={{ lineHeight: '1.4', color: '#EFEDFDB2' }}
          >
            Bringing offices to <br className='sm:hidden' />
            your HomeTowns
          </p>

          {/* Button */}
          <Link
            href='/company/work-from-hometown'
            className='inline-flex items-center justify-center gap-2 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium text-[14px] sm:text-base hover:scale-105 transition-transform shadow-lg'
            style={{
              background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
            }}
          >
            More details
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeTown;
