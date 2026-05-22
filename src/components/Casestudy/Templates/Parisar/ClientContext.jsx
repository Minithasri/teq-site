import React from 'react';

const ClientContext = () => {
  return (
    <section className='relative w-full py-20 bg-white overflow-hidden'>
      {/* Background Image overlapping behind the cards */}
      <div className='absolute right-[-14%] top-[5%] w-[60%] z-0 hidden lg:block'>
        <img
          src='/images/Templates/parisar/img2.png'
          alt='Dashboards Preview'
          className='w-full h-auto object-contain opacity-70'
        />
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-[32px] font-bold text-[#0F1729] mb-3'>Client Context</h2>
          <p className='text-[#64748B] text-[18px]'>
            Understanding the client&rsquo;s operational landscape
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto'>
          {/* Card 1 */}
          <div className='bg-white/90 backdrop-blur-md rounded-[12px] p-8 border-2 border-[#F5F5F5] shadow-[0px_4px_12px_rgba(0,0,0,0.08)] h-full flex flex-col'>
            <div className='flex items-center gap-4 mb-4'>
              <svg
                width='28'
                height='28'
                viewBox='0 0 24 24'
                fill='none'
                stroke='#1FA8D6'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M3 21h18'></path>
                <path d='M5 21V7l8-4v18'></path>
                <path d='M19 21V11l-6-2'></path>
                <path d='M9 9v.01'></path>
                <path d='M9 13v.01'></path>
                <path d='M9 17v.01'></path>
              </svg>
              <h3 className='font-bold text-[#0F1729]/80 text-[18px]'>Large Fleet Network</h3>
            </div>
            <p className='text-[#64748B] text-[14px] leading-relaxed'>
              Client manages an extensive network of vehicles and routes across the region.
            </p>
          </div>

          {/* Card 2 */}
          <div className='bg-white/90 backdrop-blur-md rounded-[12px] p-8 border-2 border-[#F5F5F5] shadow-[0px_4px_12px_rgba(0,0,0,0.08)] h-full flex flex-col'>
            <div className='flex items-center gap-4 mb-4'>
              <svg
                width='28'
                height='28'
                viewBox='0 0 24 24'
                fill='none'
                stroke='#1FA8D6'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2'></path>
                <circle cx='9' cy='7' r='4'></circle>
                <path d='M22 21v-2a4 4 0 0 0-3-3.87'></path>
                <path d='M16 3.13a4 4 0 0 1 0 7.75'></path>
              </svg>
              <h3 className='font-bold text-[#0F1729]/80 text-[18px]'>Service Reliability Focus</h3>
            </div>
            <p className='text-[#64748B] text-[14px] leading-relaxed'>
              Leadership needed better visibility into fleet performance to maintain reliable
              service.
            </p>
          </div>

          {/* Card 3 */}
          <div className='bg-white/90 backdrop-blur-md rounded-[12px] p-8 border-2 border-[#F5F5F5] shadow-[0px_4px_12px_rgba(0,0,0,0.08)] h-full flex flex-col'>
            <div className='flex items-center gap-4 mb-4'>
              <svg
                width='28'
                height='28'
                viewBox='0 0 24 24'
                fill='none'
                stroke='#1FA8D6'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'></path>
                <circle cx='12' cy='10' r='3'></circle>
              </svg>
              <h3 className='font-bold text-[#0F1729]/80 text-[18px]'>
                Static Reporting Challenge
              </h3>
            </div>
            <p className='text-[#64748B] text-[14px] leading-relaxed'>
              Historical performance tracking relied on manual updates and static reports.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientContext;
