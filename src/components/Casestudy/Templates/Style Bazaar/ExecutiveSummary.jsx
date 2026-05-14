'use client';

import Image from 'next/image';

export default function ExecutiveSummary() {
  return (
    <section className='relative w-full bg-white overflow-hidden py-6 md:py-8'>
      {/* Right Edge Image */}
      <div className='absolute -top-[8%] right-0 w-[40%] lg:w-[25%] h-[80%] z-0 hidden lg:block'>
        <Image
          src='/images/Templates/style_bazaar/style_i1.png'
          alt='Executive holding tablet'
          fill
          className='object-cover object-left rounded-l-3xl'
        />
      </div>

      <div className='relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24'>
        <div className='flex flex-col lg:flex-row'>
          {/* Left Content */}
          <div className='w-full lg:w-[75%] flex flex-col z-20'>
            {/* Executive Summary Section */}
            <div className='mb-16 relative'>
              <h2 className='text-[#1D2530] font-medium uppercase mb-6 tracking-[1.32px] text-3xl md:text-4xl'>
                EXECUTIVE SUMMARY
              </h2>

              <div className='border-2 border-[#E0D4D4] rounded-[20px] p-8 md:p-10 bg-white shadow-sm lg:w-[115%] relative z-10'>
                <p className='text-[#1D2530] font-normal text-base md:text-lg leading-relaxed'>
                  A leading retail organization required a modern analytics platform to replace
                  manual reporting and improve visibility into business performance. By implementing
                  a centralized data warehouse and BI environment, the organization transformed
                  fragmented reporting processes into a unified analytics platform delivering
                  faster, more reliable insights for leadership teams.
                </p>
              </div>
            </div>

            {/* Business Challenge Section */}
            <div className='w-full lg:w-[125%] relative z-10'>
              <div className='space-y-6 pr-4 lg:pr-12'>
                <h3 className='text-[#FF5F5F] font-medium uppercase tracking-[1.32px] text-3xl md:text-4xl'>
                  BUSINESS CHALLENGE
                </h3>

                <h4 className='text-[#1D2530] font-medium text-2xl md:text-3xl'>
                  Fragmented Reporting Across the Enterprise
                </h4>

                <p className='block w-full text-[#1D2530] text-md md:text-lg leading-relaxed'>
                  The organization relied heavily on manually prepared Excel reports refreshed on a
                  weekly basis. This process created delays, inconsistencies, and limited visibility
                  across key departments ultimately constraining data-driven decision-making.
                </p>
              </div>
            </div>
          </div>

          {/* Mobile Image (Visible only on small screens) */}
          <div className='lg:hidden mt-12 relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl'>
            <Image
              src='/images/Templates/style_bazaar/style_i1.png'
              alt='Executive holding tablet'
              fill
              className='object-cover'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
