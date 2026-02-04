'use client';

import Image from 'next/image';

export default function ClientOverview() {
  return (
    <section className='w-full py-20 bg-[#F9FAFB]'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-[28px] lg:text-[36px] font-bold text-[#1D2530] mb-12'>
          Client Overview
        </h2>

        <div className='relative mt-8 lg:mt-16'>
          {/* Desktop Overlay Image */}
          <div className='hidden lg:block absolute -right-10 -top-32 z-20 w-[500px] h-[350px] shadow-xl rounded-xl overflow-hidden'>
            <Image
              src='/images/Templates/template1/hero1.png'
              alt='Die Casting Manufacturing'
              fill
              className='object-cover'
            />
          </div>

          {/* Left Content Card */}
          <div className='relative z-10 bg-white rounded-xl p-8 lg:pr-32 shadow-sm w-full lg:w-[70%]'>
            <p className='text-[16px] text-[#65758B] leading-relaxed mb-6 max-w-5xl'>
              A leading automotive die-casting manufacturer producing high- precision aluminium
              components at scale. With multiple machines running continuous operations, the
              leadership team required live production insights to reduce downtime, increase
              throughput, and meet customer delivery timelines consistently.
            </p>

            <div className='flex flex-col gap-3'>
              <div className='flex items-start gap-3'>
                <Image
                  src='/images/Templates/template1/ico1.svg'
                  alt='Industry'
                  width={20}
                  height={20}
                  className='flex-shrink-0 mt-0.5'
                />
                <div className='flex flex-col gap-0.5'>
                  <span className='text-[16px] font-semibold text-[#1D2530]'>Industry:</span>
                  <span className='text-[16px] text-[#65758B]'>
                    Manufacturing - Aluminium Die Casting
                  </span>
                </div>
              </div>

              <div className='flex items-start gap-3'>
                <Image
                  src='/images/Templates/template1/ico2.svg'
                  alt='Focus'
                  width={20}
                  height={20}
                  className='flex-shrink-0 mt-0.5'
                />
                <div className='flex flex-col gap-0.5'>
                  <span className='text-[16px] font-semibold text-[#1D2530]'>Focus:</span>
                  <span className='text-[16px] text-[#65758B]'>Automotive Components</span>
                </div>
              </div>

              <div className='flex items-start gap-3'>
                <Image
                  src='/images/Templates/template1/ico3.svg'
                  alt='Scale'
                  width={20}
                  height={20}
                  className='flex-shrink-0 mt-0.5'
                />
                <div className='flex flex-col gap-0.5'>
                  <span className='text-[16px] font-semibold text-[#1D2530]'>Scale:</span>
                  <span className='text-[16px] text-[#65758B]'>
                    Multi-machine continuous operations
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Image */}
          <div className='lg:hidden mt-8 rounded-xl overflow-hidden shadow-md'>
            <Image
              src='/images/Templates/template1/hero1.png'
              alt='Die Casting Manufacturing'
              width={600}
              height={400}
              className='w-full h-auto object-cover'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
