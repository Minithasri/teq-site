'use client';

import Image from 'next/image';

export default function ClientContext() {
  return (
    <section
      className='relative w-full flex flex-col items-center justify-start overflow-hidden px-4 sm:px-6 md:px-16'
      style={{
        minHeight: '500px',
        backgroundColor: '#FFFFFF',
      }}
    >
      {/* Background Architecture Image */}
      <div className='absolute inset-0 z-0' style={{ opacity: 0.47 }}>
        <Image
          src='/images/Templates/templatez/realestate/clientbg.png'
          alt='Office Background'
          fill
          priority
          className='object-cover object-center'
        />
      </div>

      {/* Main Content Container */}
      <div className='relative z-10 w-full max-w-[100%] mx-auto h-full flex flex-col pt-8 sm:pt-10 md:pt-12 pb-8 sm:pb-10'>
        {/* Section Header */}
        <h2
          className='text-center w-full mb-6 md:mb-8'
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
            lineHeight: '36px',
            letterSpacing: '-0.75px',
            color: '#0F1729',
          }}
        >
          <span className='text-[24px] sm:text-[30px] md:text-[34px]'>Client Context</span>
        </h2>

        {/* Content Layout */}
        <div className='w-full flex items-center justify-between relative mt-2 md:mt-4'>
          {/* Text Container */}
          <div
            className='w-full max-w-[950px] rounded-2xl p-4 sm:p-6 md:p-10 ml-0 md:ml-20 z-10 relative'
            style={{
              background: 'linear-gradient(135deg, #E2E6F9 0%, #D3DAFC 35%, #B5C2FB 100%)',
              boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0.6)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <p
              className='mb-5 sm:mb-6 last:mb-0'
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 400,
                lineHeight: '29.25px',
                color: '#0F1729',
              }}
            >
              <span className='text-[14px] sm:text-[16px] md:text-[18px]'>
                A leading real estate company, manages diverse operations spanning sales, property
                occupancy, and financial performance. Leadership faced difficulties in aligning
                performance metrics due to fragmented reporting systems and siloed data.
              </span>
            </p>

            <p
              className='pr-0 md:pr-20'
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 400,
                lineHeight: '29.25px',
                color: '#0F1729',
              }}
            >
              <span className='text-[14px] sm:text-[16px] md:text-[18px]'>
                With multiple properties and stakeholders, ESR required a solution to consolidate
                business performance data into a unified reporting framework for real-time
                decision-making.
              </span>
            </p>
          </div>

          {/* Floating 3D Model */}
          <div
            className='absolute right-0 md:right-[-170px] top-1/2 -translate-y-1/2 z-20 hidden lg:block pointer-events-none'
            style={{
              width: '605px',
              height: '363px',
              opacity: 0.94,
            }}
          >
            <Image
              src='/images/Templates/templatez/realestate/clientsmall.png'
              alt='City Architecture Model'
              width={605}
              height={363}
              priority
              className='object-contain w-full h-auto'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
