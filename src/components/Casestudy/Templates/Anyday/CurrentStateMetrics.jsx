import React from 'react';

const CurrentStateMetrics = () => {
  return (
    <section className='w-full py-16 bg-white relative overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='text-center mb-12'>
          <h2 className='text-[32px] font-bold text-[#0F1729] mb-2'>Current State Metrics</h2>
          <p className='text-[#64748B] text-[16px]'>Before implementing the solution</p>
        </div>

        <div className='relative max-w-5xl mx-auto'>
          {/* Left side Cards */}
          <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10'>
            {/* Card 1 */}
            <div className='bg-white rounded-[12px] p-6 shadow-sm border border-[#DADFE780] flex items-start gap-4'>
              <div className='w-12 h-12 rounded-[8px] bg-[#FA5A5A] flex items-center justify-center flex-shrink-0 shadow-sm'>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='white'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <circle cx='12' cy='12' r='10'></circle>
                  <polyline points='12 6 12 12 16 14'></polyline>
                </svg>
              </div>
              <div>
                <h3 className='font-bold text-[#0F1729] text-[16px] mb-1'>
                  Customer trends analysis
                </h3>
                <p className='text-[#64748B] text-[13px]'>Monthly, manual</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className='bg-white rounded-[12px] p-6 shadow-sm border border-[#DADFE780] flex items-start gap-4'>
              <div className='w-12 h-12 rounded-[8px] bg-[#FA5A5A] flex items-center justify-center flex-shrink-0 shadow-sm'>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='white'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <polyline points='22 17 13.5 8.5 8.5 13.5 2 7'></polyline>
                  <polyline points='16 17 22 17 22 11'></polyline>
                </svg>
              </div>
              <div>
                <h3 className='font-bold text-[#0F1729] text-[16px] mb-1'>Menu optimization</h3>
                <p className='text-[#64748B] text-[13px]'>Reactive, based on delayed reports</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className='bg-white rounded-[12px] p-6 shadow-sm border border-[#DADFE780] flex items-start gap-4'>
              <div className='w-12 h-12 rounded-[8px] bg-[#FA5A5A] flex items-center justify-center flex-shrink-0 shadow-sm'>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='white'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <line x1='18' y1='6' x2='6' y2='18'></line>
                  <line x1='6' y1='6' x2='18' y2='18'></line>
                </svg>
              </div>
              <div>
                <h3 className='font-bold text-[#0F1729] text-[16px] mb-1'>Sales & behavior link</h3>
                <p className='text-[#64748B] text-[13px]'>
                  No link between customer behavior and sales KPIs
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className='bg-white rounded-[12px] p-6 shadow-sm border border-[#DADFE780] flex items-start gap-4'>
              <div className='w-12 h-12 rounded-[8px] bg-[#FA5A5A] flex items-center justify-center flex-shrink-0 shadow-sm'>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='white'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <polyline points='23 4 23 10 17 10'></polyline>
                  <polyline points='1 20 1 14 7 14'></polyline>
                  <path d='M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15'></path>
                </svg>
              </div>
              <div>
                <h3 className='font-bold text-[#0F1729] text-[16px] mb-1'>Customer insights</h3>
                <p className='text-[#64748B] text-[13px]'>
                  Limited insight into repeat customers and preferences
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className='hidden md:block absolute right-[-80px] top-[-150px] w-[30%] z-20'>
            <img
              src='/images/Templates/anyday/img3.jpg'
              alt='Restaurant Food'
              className='w-full h-auto object-cover shadow-[16px_16px_0px_#D1D5DB]'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentStateMetrics;
