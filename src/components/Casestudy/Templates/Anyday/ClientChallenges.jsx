import React from 'react';

const ClientChallenges = () => {
  return (
    <section className='w-full py-14 bg-[#AA8D9D54] relative overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='text-center mb-16'>
          <h2 className='text-[32px] font-bold text-[#0F1729]'>Client Challenges</h2>
        </div>

        <div className='max-w-6xl mx-auto'>
          {/* Top Row: 3 Cards */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-6'>
            {/* Card 1 */}
            <div className='bg-white rounded-[12px] p-6 shadow-sm flex items-start gap-4 h-full'>
              <div className='w-10 h-10 rounded-full bg-[#EF44441A] flex items-center justify-center flex-shrink-0'>
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='#EB6060'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z'></path>
                  <polyline points='14 2 14 8 20 8'></polyline>
                  <line x1='9.5' y1='12.5' x2='14.5' y2='17.5'></line>
                  <line x1='14.5' y1='12.5' x2='9.5' y2='17.5'></line>
                </svg>
              </div>
              <p className='text-[#64748B] text-[14px] leading-relaxed mt-1'>
                Customer data was fragmented across POS and feedback systems
              </p>
            </div>

            {/* Card 2 */}
            <div className='bg-white rounded-[12px] p-6 shadow-sm flex items-start gap-4 h-full'>
              <div className='w-10 h-10 rounded-full bg-[#EF44441A] flex items-center justify-center flex-shrink-0'>
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='#EB6060'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <polyline points='22 17 13.5 8.5 8.5 13.5 2 7'></polyline>
                  <polyline points='16 17 22 17 22 11'></polyline>
                </svg>
              </div>
              <p className='text-[#64748B] text-[14px] leading-relaxed mt-1'>
                Limited visibility into menu-level sales performance
              </p>
            </div>

            {/* Card 3 */}
            <div className='bg-white rounded-[12px] p-6 shadow-sm flex items-start gap-4 h-full'>
              <div className='w-10 h-10 rounded-full bg-[#EF44441A] flex items-center justify-center flex-shrink-0'>
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='#EB6060'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <circle cx='12' cy='12' r='10'></circle>
                  <polyline points='12 6 12 12 16 14'></polyline>
                </svg>
              </div>
              <p className='text-[#64748B] text-[14px] leading-relaxed mt-1'>
                Leadership relied on static reports that lacked real-time insights
              </p>
            </div>
          </div>

          {/* Bottom Row: 2 Cards + Image */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 relative'>
            <div className='col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6'>
              {/* Card 4 */}
              <div className='bg-white rounded-[12px] p-6 shadow-sm flex items-start gap-4 h-full'>
                <div className='w-10 h-10 rounded-full bg-[#EF44441A] flex items-center justify-center flex-shrink-0'>
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='#EB6060'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <circle cx='12' cy='12' r='10'></circle>
                    <line x1='12' y1='8' x2='12' y2='12'></line>
                    <line x1='12' y1='16' x2='12.01' y2='16'></line>
                  </svg>
                </div>
                <p className='text-[#64748B] text-[14px] leading-relaxed mt-1'>
                  No centralized way to track customer engagement trends
                </p>
              </div>

              {/* Card 5 */}
              <div className='bg-white rounded-[12px] p-6 shadow-sm flex items-start gap-4 h-full'>
                <div className='w-10 h-10 rounded-full bg-[#EF44441A] flex items-center justify-center flex-shrink-0'>
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='#EB6060'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <polyline points='23 4 23 10 17 10'></polyline>
                    <polyline points='1 20 1 14 7 14'></polyline>
                    <path d='M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15'></path>
                  </svg>
                </div>
                <p className='text-[#64748B] text-[14px] leading-relaxed mt-1'>
                  Manual processes slowed down menu optimization and promotional planning
                </p>
              </div>
            </div>

            {/* Blocks Image */}
            <div className='hidden md:block col-span-1 bottom-5 relative'>
              <div className='absolute inset-0 rounded-[12px] overflow-hidden'>
                <img
                  src='/images/Templates/anyday/img2.png'
                  alt='Challenges'
                  className='w-full h-full object-cover object-center opacity-90'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientChallenges;
