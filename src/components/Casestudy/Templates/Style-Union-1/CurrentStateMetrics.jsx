import React from 'react';

const CurrentStateMetrics = () => {
  const metrics = [
    {
      title: 'Reporting cycle',
      description: 'weekly/monthly instead of real-time',
      icon: (
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='#3B82F6'
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
      title: 'Inventory visibility',
      description: 'inconsistent across retail outlets',
      icon: (
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='#EF4444'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <polyline points='22 7 13.5 15.5 8.5 10.5 2 17'></polyline>
          <polyline points='16 7 22 7 22 13'></polyline>
        </svg>
      ),
    },
    {
      title: 'Leadership',
      description: 'lacked integrated KPIs for sales and operations',
      icon: (
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='#F97316'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <circle cx='12' cy='12' r='10'></circle>
          <line x1='15' y1='9' x2='9' y2='15'></line>
          <line x1='9' y1='9' x2='15' y2='15'></line>
        </svg>
      ),
    },
    {
      title: 'Manual effort',
      description: 'significant manual effort to consolidate data',
      icon: (
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='#A855F7'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <polyline points='23 4 23 10 17 10'></polyline>
          <polyline points='1 20 1 14 7 14'></polyline>
          <path d='M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15'></path>
        </svg>
      ),
    },
  ];

  return (
    <section className='relative w-full py-20 bg-white'>
      {/* Left Overlapping Image */}
      <div className='hidden lg:block absolute -top-10 left-[2%] w-[30%] z-10'>
        <img
          src='/images/Templates/style-union-1/img4.png'
          alt='Current State'
          className='w-full h-auto object-cover rounded-[32px] shadow-lg'
        />
      </div>

      <div className='max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative z-20'>
        {/* Title */}
        <div className='text-center mb-20'>
          <h2 className='text-[36px] md:text-[40px] font-bold text-[#0F1729]'>
            Current State Metrics
          </h2>
          <p className='text-[#64748B] text-[20px] mt-2'>Before the Solution</p>
        </div>

        {/* Grid of Cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto lg:ml-auto lg:mr-[10%]'>
          {metrics.map((metric, index) => (
            <div
              key={index}
              className='bg-white rounded-[16px] border border-[#E1E7EF] shadow-[0_4px_20px_rgba(0,0,0,0.04)] p-8 flex items-start gap-4'
            >
              <div className='mt-1 flex-shrink-0'>{metric.icon}</div>
              <div>
                <h3 className='font-bold text-[#0F1729] text-[20px] mb-1'>{metric.title}</h3>
                <p className='text-[#64748B] text-[16px]'>{metric.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentStateMetrics;
