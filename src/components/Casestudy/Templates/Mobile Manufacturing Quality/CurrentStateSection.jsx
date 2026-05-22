'use client';

import Image from 'next/image';

const gaps = [
  'Disjointed trace data across MES, inspection, and production systems',
  'Manual defect analysis consuming 10+ hours per batch investigation',
  'No integrated view linking operators, machines, or fixtures to defect patterns',
  'Inconsistent trace coverage across machining and assembly lines',
  'Limited visibility into cross-stage defect propagation',
];

export default function CurrentStateSection() {
  return (
    <section className='relative w-full py-20 bg-[#D0D0D0] overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative'>
        {/* Left Content (Wide) */}
        <div className='w-full lg:w-full relative z-10'>
          <h2 className='text-[28px] lg:text-[36px] font-semibold text-[#1D2530] mb-8'>
            Current State & Quality Gaps
          </h2>

          <div className='flex flex-col gap-4'>
            {gaps.map((gap, index) => (
              <div
                key={index}
                className='bg-white rounded-xl p-5 border-2 border-[#F5F5F5] shadow-[0_4px_12px_rgba(0,0,0,0.08)] flex items-start gap-4 w-full'
              >
                <div className='flex-shrink-0 mt-1'>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <circle cx='12' cy='12' r='11' stroke='#EF4444' strokeWidth='2' />
                    <path
                      d='M8 8L16 16M16 8L8 16'
                      stroke='#EF4444'
                      strokeWidth='2'
                      strokeLinecap='round'
                    />
                  </svg>
                </div>
                <p className='text-[#4B5563] font-medium text-[16px] leading-snug'>{gap}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Images (Collage) - Absolute Positioned */}
        <div className='hidden lg:block absolute -top-10 right-10 w-[45%] h-full pointer-events-none z-20'>
          <div className='absolute top-0 right-0 w-[300px] h-[200px] overflow-hidden rounded-2xl shadow-none drop-shadow-none !shadow-none !drop-shadow-none border-none ring-0 outline-none'>
            <Image
              src='/images/Templates/template3/sideimg1.webp'
              alt='Automated Inspection'
              fill
              className='object-cover shadow-none drop-shadow-none !shadow-none !drop-shadow-none'
            />
          </div>

          {/* Bottom Image (Hands) */}
          <div className='absolute top-32 right-[-20px] w-[350px] h-[280px] overflow-hidden rounded-2xl'>
            <Image
              src='/images/Templates/template3/sideimg2.webp'
              alt='Manual Inspection'
              fill
              className='object-cover'
            />
          </div>
        </div>

        {/* Mobile Image (Just one) for responsiveness */}
        <div className='lg:hidden w-full h-[250px] relative rounded-xl overflow-hidden mt-8'>
          <Image
            src='/images/Templates/template3/sideimg1.webp'
            alt='Automated Inspection'
            fill
            className='object-cover'
          />
        </div>
      </div>
    </section>
  );
}
