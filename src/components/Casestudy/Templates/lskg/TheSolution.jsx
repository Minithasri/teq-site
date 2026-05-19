import React from 'react';

const TheSolution = () => {
  const solutions = [
    {
      title: 'Sales Dashboards',
      desc: 'Monitored real-time sales by product, category, and region with intuitive visualizations and drill-down capabilities.',
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
      title: 'Inventory Dashboards',
      desc: 'Tracked stock levels, replenishment needs, and turnover ratios with automated alerts for low stock situations.',
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
      title: 'Customer Engagement Views',
      desc: 'Linked marketing and engagement data with sales performance to understand customer behavior patterns.',
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
      title: 'Executive Summaries',
      desc: 'Provided leadership with high-level KPIs for strategic decision-making at a glance.',
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
    {
      title: 'Automation',
      desc: 'Replaced manual Excel reports with automated pipelines and dashboards, freeing up valuable time.',
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
          <polygon points='13 2 3 14 12 14 11 22 21 10 12 10 13 2'></polygon>
        </svg>
      ),
    },
  ];

  return (
    <section className='w-full relative -mt-[110px] pt-[140px] z-0'>
      {/* Dark background top half */}
      <div
        className='absolute top-0 left-0 w-full h-[540px] z-0'
        style={{
          backgroundImage: 'url(/images/Templates/lskg/img1.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className='absolute inset-0 bg-[#0F1729]/85 backdrop-blur-[2px] z-0'></div>
      </div>

      {/* White background bottom half */}
      <div className='absolute top-[390px] left-0 w-full h-[calc(100%-540px)] bg-white z-0'></div>

      <div className='relative z-10 pt-4 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-[36px] font-bold text-white mb-3'>GWC's Solution</h2>
          <p className='text-white/80 text-[18px]'>Retail Analytics Dashboard Suite for LSKD</p>
        </div>

        <div className='flex flex-col gap-5 max-w-4xl mx-auto'>
          {solutions.map((solution, index) => (
            <div
              key={index}
              className='bg-white rounded-[16px] shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 p-4 md:p-6 flex flex-col md:flex-row items-start md:items-center gap-6 transition-all duration-300 hover:shadow-lg'
            >
              <div className='w-[56px] h-[56px] rounded-[12px] bg-[#6652D7] flex items-center justify-center shrink-0 shadow-sm'>
                {solution.icon}
              </div>
              <div className='flex flex-col'>
                <h4 className='font-bold text-[#0F1729] text-[20px] mb-2'>{solution.title}</h4>
                <p className='text-[#64748B] text-[15px] leading-relaxed'>{solution.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TheSolution;
