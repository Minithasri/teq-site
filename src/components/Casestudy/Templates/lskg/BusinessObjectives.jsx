import React from 'react';

const BusinessObjectives = () => {
  const objectives = [
    {
      title: 'Real-Time Dashboards',
      desc: 'Provide executives with real-time sales and inventory dashboards',
      icon: (
        <svg
          width='20'
          height='20'
          viewBox='0 0 24 24'
          fill='none'
          stroke='#3B82F6'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <rect x='3' y='3' width='18' height='18' rx='2' ry='2'></rect>
          <line x1='3' y1='9' x2='21' y2='9'></line>
          <line x1='9' y1='21' x2='9' y2='9'></line>
        </svg>
      ),
    },
    {
      title: 'Integrated Insights',
      desc: 'Link customer engagement insights directly with sales performance',
      icon: (
        <svg
          width='20'
          height='20'
          viewBox='0 0 24 24'
          fill='none'
          stroke='#3B82F6'
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
      title: 'Improved Inventory',
      desc: 'Improve inventory management with accurate, timely reporting',
      icon: (
        <svg
          width='20'
          height='20'
          viewBox='0 0 24 24'
          fill='none'
          stroke='#3B82F6'
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
      title: 'Reduce Manual Work',
      desc: 'Reduce manual reporting dependency and increase efficiency',
      icon: (
        <svg
          width='20'
          height='20'
          viewBox='0 0 24 24'
          fill='none'
          stroke='#3B82F6'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <circle cx='12' cy='12' r='3'></circle>
          <path d='M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z'></path>
        </svg>
      ),
    },
    {
      title: 'Data-Driven Planning',
      desc: 'Enable data-driven strategic planning for leadership',
      icon: (
        <svg
          width='20'
          height='20'
          viewBox='0 0 24 24'
          fill='none'
          stroke='#3B82F6'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <circle cx='12' cy='12' r='10'></circle>
          <path d='M12 2v10l8.5 5.5'></path>
        </svg>
      ),
    },
    {
      title: 'Scalable Growth',
      desc: 'Build foundation for sustainable business scaling',
      icon: (
        <svg
          width='20'
          height='20'
          viewBox='0 0 24 24'
          fill='none'
          stroke='#3B82F6'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <polyline points='23 6 13.5 15.5 8.5 10.5 1 18'></polyline>
          <polyline points='17 6 23 6 23 12'></polyline>
        </svg>
      ),
    },
  ];

  return (
    <section className='w-full pt-14 pb-8 relative z-10'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <h2 className='text-[32px] font-bold text-[#0F1729] mb-3'>Business Objectives</h2>
          <p className='text-[#64748B] text-[18px]'>Clear goals for transformation and growth</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto'>
          {objectives.map((objective, index) => (
            <div
              key={index}
              className='bg-[#F8FAFC] rounded-[16px] border border-[#E2E8F0] p-6 flex items-start gap-4 transition-all duration-300 hover:shadow-md'
            >
              <div className='w-11 h-11 rounded-[10px] bg-[#E1E7EF] flex items-center justify-center shrink-0 shadow-sm'>
                {objective.icon}
              </div>
              <div className='flex flex-col'>
                <h4 className='font-bold text-[#0F1729] text-[16px] mb-2'>{objective.title}</h4>
                <p className='text-[#64748B] text-[14px] leading-relaxed'>{objective.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessObjectives;
