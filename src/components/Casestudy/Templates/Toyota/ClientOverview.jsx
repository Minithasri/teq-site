'use client';

import Image from 'next/image';

const ClientOverview = () => {
  return (
    <section className='relative py-12 md:py-20 bg-[#F7F8FA] overflow-visible'>
      <div className='max-w-9xl mx-auto px-6 md:px-12 lg:px-24 relative'>
        {/* Right Side Overlapping Image */}
        <div className='hidden lg:block absolute right-0 top-[-300px] z-20 w-[350px] lg:w-[650px]'>
          <div className='relative aspect-[16/10]'>
            <Image
              src='/images/Templates/toyota/toyota2.png'
              alt='Toyota Client Vehicle'
              fill
              className='object-contain'
            />
          </div>
        </div>

        {/* Content */}
        <div className='flex flex-col items-center text-center max-w-9xl mx-auto space-y-6 md:space-y-8'>
          <h2
            className='text-xl md:text-3xl font-bold uppercase tracking-widest'
            style={{ color: '#1481B8' }}
          >
            Client Overview
          </h2>

          <p
            className='text-base md:text-xl leading-relaxed font-medium'
            style={{ color: '#676F7E' }}
          >
            Our client,{' '}
            <span style={{ color: '#131720' }} className='font-bold'>
              a leading global automotive manufacturing company
            </span>
            , manages complex tooling operations across multiple lifecycle stages. Their production
            environment demands precision, full traceability, and operational efficiency
            requirements that legacy manual processes could no longer support at scale.
          </p>
        </div>

        {/* Mobile Image */}
        <div className='lg:hidden relative w-full aspect-[16/9] mt-8'>
          <Image
            src='/images/Templates/toyota/toyota2.png'
            alt='Toyota Client Vehicle'
            fill
            className='object-contain'
          />
        </div>
      </div>
    </section>
  );
};

export default ClientOverview;
