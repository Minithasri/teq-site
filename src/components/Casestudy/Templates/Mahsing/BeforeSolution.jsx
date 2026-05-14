import React from 'react';

const BeforeSolution = () => {
  const cards = [
    {
      title: 'Feedback Reporting Cycle',
      text: 'Weeks instead of real-time',
      icon: (
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='#2563EB'
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
      title: 'Defect Patterns',
      text: 'Not proactively addressed',
      icon: (
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='#2563EB'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <polyline points='22 17 13.5 8.5 8.5 13.5 2 7'></polyline>
          <polyline points='16 17 22 17 22 11'></polyline>
        </svg>
      ),
    },
    {
      title: 'Central Dashboard',
      text: 'No system linking surveys to operations',
      icon: (
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='#2563EB'
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
      title: 'Visibility',
      text: 'Delayed handover satisfaction insights',
      icon: (
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='#2563EB'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path d='M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8'></path>
          <path d='M3 3v5h5'></path>
          <path d='M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16'></path>
          <path d='M16 21h5v-5'></path>
        </svg>
      ),
    },
  ];

  return (
    <section className='w-full py-16 px-8 sm:px-10 lg:px-12 bg-white'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-5'>
          <h2 className='text-[36px] font-bold text-gray-900 mb-4'>Before the Solution</h2>
          <p className='text-gray-500 text-[18px] max-w-2xl mx-auto'>
            Key operational challenges impacting customer <br /> satisfaction
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {cards.map((card, index) => (
            <div
              key={index}
              className='bg-white rounded-[16px] p-6 shadow-[0_4px_24px_rgb(0,0,0,0.04)] border border-gray-200 flex flex-col items-start hover:shadow-lg transition-all duration-300'
            >
              <div className='flex items-center gap-4 mb-3'>
                <div className='w-[50px] h-[50px] rounded-full bg-[#E0F2FE] flex items-center justify-center shrink-0'>
                  {card.icon}
                </div>
                <h3 className='font-bold text-gray-900 text-[18px] leading-snug'>{card.title}</h3>
              </div>
              <p className='text-gray-500 text-[16px] leading-relaxed'>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeSolution;
