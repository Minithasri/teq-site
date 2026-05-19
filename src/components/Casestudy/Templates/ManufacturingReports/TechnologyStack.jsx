import React from 'react';

const techStack = [
  {
    icon: '/images/Templates/template14/techno1.svg',
    title: 'Visualization',
    tags: ['Power BI', 'Tableau'],
  },
  {
    icon: '/images/Templates/template14/techno2.svg',
    title: 'Data Integration',
    tags: ['SQL', 'Manufacturing Databases'],
  },
  {
    icon: '/images/Templates/template14/techno3.svg',
    title: 'Automation',
    tags: ['ETL Pipelines', 'Power Query', 'Custom Scripts'],
  },
];

export default function TechnologyStack() {
  return (
    // Section shell layout background updated to match soft light layout grey style
    <section className='py-[56px] md:py-[72px] bg-[#f8fafc] w-full'>
      <div className='max-w-[1140px] mx-auto px-4 md:px-6'>
        {/* HEADER GROUP */}
        <div className='text-center mb-[36px] md:mb-[48px]'>
          <h2 className='text-[26px] md:text-[28px] font-extrabold text-[#071326] tracking-tight'>
            Technology Stack
          </h2>
          <p className='text-[14.5px] md:text-[15.5px] text-[#64748b] font-medium mt-1.5'>
            Powering the digital transformation
          </p>
        </div>

        {/* 3-COLUMN RESPONSIVE GRID CARDS */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-[24px]'>
          {techStack.map((item, index) => (
            <div
              key={index}
              className='bg-white rounded-[12px] border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.02)] p-6 md:p-[32px] flex flex-col items-center text-center justify-start min-h-[240px]'
            >
              {/* Blue Colored Icon Wrapper Box */}
              <div className='w-[64px] h-[64px] shrink-0 mb-4 flex items-center justify-center select-none pointer-events-none'>
                <img src={item.icon} alt='' className='w-full h-full object-contain' />
              </div>

              {/* Category Title */}
              <h3 className='text-[16.5px] md:text-[17.5px] font-extrabold text-[#071326] tracking-tight mb-4'>
                {item.title}
              </h3>

              {/* Nested Sub-Tag Pills Container Layout */}
              <div className='flex flex-wrap items-center justify-center gap-1.5 w-full'>
                {item.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className='px-3 py-1 bg-[#f1f5f9] text-[#334155] text-[12px] md:text-[12.5px] font-bold rounded-full tracking-tight whitespace-nowrap'
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
