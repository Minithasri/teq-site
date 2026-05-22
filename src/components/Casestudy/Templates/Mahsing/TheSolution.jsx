import React from 'react';

const TheSolution = () => {
  const cards = [
    {
      title: 'Survey Data Integration',
      text: 'Combined defect, refund, and VP handover survey data into a single platform',
      icon: (
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='text-white'
        >
          <ellipse cx='12' cy='5' rx='9' ry='3'></ellipse>
          <path d='M21 12c0 1.66-4 3-9 3s-9-1.34-9-3'></path>
          <path d='M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5'></path>
        </svg>
      ),
    },
    {
      title: 'Dashboard Development',
      text: 'Built interactive dashboards for executives and managers to monitor satisfaction trends',
      icon: (
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='text-white'
        >
          <rect x='3' y='3' width='7' height='7' rx='1'></rect>
          <rect x='14' y='3' width='7' height='7' rx='1'></rect>
          <rect x='14' y='14' width='7' height='7' rx='1'></rect>
          <rect x='3' y='14' width='7' height='7' rx='1'></rect>
        </svg>
      ),
    },
    {
      title: 'Trend Analysis',
      text: 'Highlighted recurring defect categories, refund reasons, and VP survey insights',
      icon: (
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='text-white'
        >
          <polyline points='22 7 13.5 15.5 8.5 10.5 2 17'></polyline>
          <polyline points='16 7 22 7 22 13'></polyline>
        </svg>
      ),
    },
    {
      title: 'Automated Reporting',
      text: 'Reduced manual effort with scheduled refreshes and governance-ready views',
      icon: (
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='text-white'
        >
          <path d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z'></path>
          <polyline points='14 2 14 8 20 8'></polyline>
          <line x1='16' y1='13' x2='8' y2='13'></line>
          <line x1='16' y1='17' x2='8' y2='17'></line>
          <polyline points='10 9 9 9 8 9'></polyline>
        </svg>
      ),
    },
  ];

  const highlights = [
    'Centralized view of defects, refunds, and handover feedback',
    'Real-time updates for faster customer response',
    'Executive summaries for strategic decision-making',
    '18-month trend analysis to identify recurring issues',
    'Drill-down capabilities from project-level → unit-level feedback',
  ];

  return (
    <section
      className='w-full py-24 px-4 sm:px-6 lg:px-8 relative'
      style={{
        backgroundImage: 'url(/images/Templates/mahsing/img4.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Light overlay to ensure text readability against the background */}
      <div className='absolute inset-0 bg-white/85'></div>

      <div className='max-w-5xl mx-auto relative z-10'>
        {/* Header */}
        <div className='text-center mb-10'>
          <h2 className='text-[36px] font-bold text-[#0F1729] mb-2'>The Solution</h2>
          <h3 className='text-[20px] font-semibold text-[#0F1729] mb-3'>
            Customer Feedback Analytics Dashboard
          </h3>
          <p className='text-[#151515] text-[18px] font-normal max-w-2xl mx-auto'>
            GWC designed and implemented a comprehensive analytics <br /> solution for Mah Sing
          </p>
        </div>

        {/* Cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-16'>
          {cards.map((card, index) => (
            <div
              key={index}
              className='bg-white rounded-[10px] p-6 shadow-[0_8px_30px_rgba(0,0,0,0.08)] border-2 border-[#F5F5F5] flex items-start gap-5 hover:shadow-lg transition-shadow'
            >
              <div className='w-[44px] h-[44px] rounded-[14px] bg-[#0846AA]/60 flex items-center justify-center shrink-0'>
                {card.icon}
              </div>
              <div>
                <h4 className='font-bold text-[#0F1729]/80 text-[18px] mb-2'>{card.title}</h4>
                <p className='text-gray-500 text-[15px] leading-relaxed'>{card.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Highlights Section */}
        <div className='mt-8'>
          <h3 className='text-[28px] font-bold text-center text-[#0F1729] mb-8'>
            Solution Highlights
          </h3>
          <div className='rounded-[24px] border-2 border-[#F5F5F5] p-10 shadow-[0_4px_12px_rgba(0,0,0,0.08)]'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6'>
              {/* Left Column */}
              <div className='flex flex-col gap-6'>
                {highlights.slice(0, 3).map((item, index) => (
                  <div key={index} className='flex items-start gap-4'>
                    <div className='w-6 h-6 rounded-full bg-[#22C55E] flex items-center justify-center shrink-0 mt-0.5'>
                      <svg
                        width='14'
                        height='14'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='white'
                        strokeWidth='3'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      >
                        <polyline points='20 6 9 17 4 12'></polyline>
                      </svg>
                    </div>
                    <p className='text-[#0F1729] text-[16px] leading-relaxed'>{item}</p>
                  </div>
                ))}
              </div>
              {/* Right Column */}
              <div className='flex flex-col gap-6'>
                {highlights.slice(3, 5).map((item, index) => (
                  <div key={index + 3} className='flex items-start gap-4'>
                    <div className='w-6 h-6 rounded-full bg-[#22C55E] flex items-center justify-center shrink-0 mt-0.5'>
                      <svg
                        width='14'
                        height='14'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='white'
                        strokeWidth='3'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      >
                        <polyline points='20 6 9 17 4 12'></polyline>
                      </svg>
                    </div>
                    <p className='text-[#0F1729] text-[16px] leading-relaxed'>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheSolution;
