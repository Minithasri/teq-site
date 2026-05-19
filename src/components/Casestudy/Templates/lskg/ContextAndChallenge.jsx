import React from 'react';

const ContextAndChallenge = () => {
  const challenges = [
    {
      title: 'Scattered Sales Data',
      desc: 'Sales data was scattered across multiple systems, requiring manual consolidation',
      icon: (
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
          <ellipse cx='12' cy='5' rx='9' ry='3'></ellipse>
          <path d='M21 12c0 1.66-4 3-9 3s-9-1.34-9-3'></path>
          <path d='M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5'></path>
        </svg>
      ),
    },
    {
      title: 'Inventory Visibility',
      desc: 'Inventory levels were difficult to monitor in real time, leading to stockouts or overstock situations',
      icon: (
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
          <path d='M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z'></path>
          <polyline points='3.27 6.96 12 12.01 20.73 6.96'></polyline>
          <line x1='12' y1='22.08' x2='12' y2='12'></line>
        </svg>
      ),
    },
    {
      title: 'No Unified Dashboard',
      desc: 'No single dashboard for leadership to review end-to-end business performance',
      icon: (
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
          <polyline points='3 3 3 21 21 21'></polyline>
          <line x1='18' y1='17' x2='18' y2='9'></line>
          <line x1='13' y1='17' x2='13' y2='5'></line>
          <line x1='8' y1='17' x2='8' y2='12'></line>
        </svg>
      ),
    },
    {
      title: 'Disconnected Metrics',
      desc: 'Customer engagement metrics were not tied to sales outcomes',
      icon: (
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
          <path d='M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2'></path>
          <circle cx='9' cy='7' r='4'></circle>
          <path d='M23 21v-2a4 4 0 0 0-3-3.87'></path>
          <path d='M16 3.13a4 4 0 0 1 0 7.75'></path>
        </svg>
      ),
    },
    {
      title: 'Slow Reporting Cycles',
      desc: 'Reporting cycles were slow, creating delays in decision-making',
      icon: (
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
      ),
    },
    {
      title: 'Manual Effort',
      desc: 'Heavy manual effort required in report preparation and data analysis',
      icon: (
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
          <circle cx='12' cy='12' r='6'></circle>
          <circle cx='12' cy='12' r='2'></circle>
        </svg>
      ),
    },
  ];

  return (
    <section className='w-full flex flex-col bg-white'>
      {/* Client Context Section */}
      <div className='w-full relative'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <div className='text-center mb-10'>
            <h2 className='text-[32px] font-bold text-[#0F1729] mb-3'>Client Context</h2>
            <p className='text-[#65758B] text-[18px]'>
              Understanding the client's journey to data-driven retail excellence
            </p>
          </div>
          <div className='flex justify-center'>
            <div className='bg-white rounded-[16px] shadow-[0_8px_40px_rgb(0,0,0,0.08)] border border-gray-100 p-8 md:p-10 w-full max-w-5xl'>
              <p className='text-[#000000] leading-[1.8] text-[15px] md:text-[16px] mb-6'>
                A fast-growing fashion and apparel brand, needed a modern reporting framework to
                stay competitive in the dynamic retail industry. With expanding product lines and
                customer bases, leadership struggled to track sales, manage inventory, and measure
                customer engagement effectively.
              </p>
              <p className='text-[#000000] leading-[1.8] text-[15px] md:text-[16px]'>
                The lack of real-time dashboards meant decisions were based on outdated reports,
                limiting the company's ability to react quickly to demand trends and optimize
                business performance.
              </p>
            </div>
          </div>
        </div>

        {/* Left Image (Absolute) */}
        <div className='hidden lg:block absolute left-0 top-0 w-[22%] max-w-[320px] aspect-square z-0'>
          <img
            src='/images/Templates/lskg/img2.png'
            alt='LSKD Team'
            className='w-full h-full object-cover object-bottom rounded-r-[24px] shadow-[4px_0_24px_rgb(0,0,0,0.06)]'
          />
        </div>
      </div>

      {/* The Challenge Section */}
      <div className='w-full py-16 px-4 sm:px-6 lg:px-8 bg-white'>
        <div className='max-w-5xl mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-[32px] font-bold text-[#0F1729] mb-3'>The Challenge</h2>
            <p className='text-[#64748B] text-[18px]'>
              Key obstacles preventing data-driven decision making
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {challenges.map((challenge, index) => (
              <div
                key={index}
                className='bg-white rounded-[16px] shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-[#E2E8F0] p-6 flex items-start gap-4 transition-transform hover:-translate-y-1 duration-300'
              >
                <div className='w-11 h-11 rounded-[10px] bg-[#FB5959] flex items-center justify-center shrink-0 mt-1 shadow-sm'>
                  {challenge.icon}
                </div>
                <div className='flex flex-col'>
                  <h4 className='font-bold text-[#0F1729] text-[16px] mb-2'>{challenge.title}</h4>
                  <p className='text-[#64748B] text-[14px] leading-relaxed'>{challenge.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContextAndChallenge;
