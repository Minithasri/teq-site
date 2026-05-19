import React from 'react';

const solutions = [
  {
    icon: '/images/Templates/template15/hr.svg',
    title: 'HR Dashboards',
    text: 'Attrition, overtime, productivity, workforce distribution',
  },
  {
    icon: '/images/Templates/template15/fin.svg',
    title: 'Finance Dashboards',
    text: 'Revenue, expenses, profitability, and cost optimization',
  },
  {
    icon: '/images/Templates/template15/cross.svg',
    title: 'Cross-Functional KPIs',
    text: 'Workforce ROI, cost per employee, and efficiency ratios',
  },
  {
    icon: '/images/Templates/template15/execu.svg',
    title: 'Executive Insights',
    text: 'Summarized performance across HR and Finance in unified reports',
  },
];

export default function SolutionSummary() {
  return (
    // Section layout background changed to match the pale green tint exactly
    <section className='py-[56px] md:py-[72px] bg-[#edf7ed] w-full'>
      <div className='max-w-[1140px] mx-auto px-4 md:px-6'>
        {/* SECTION HEADER BLOCK */}
        <div className='text-center mb-[36px] md:mb-[48px]'>
          <h2 className='text-[26px] md:text-[32px] font-extrabold text-[#071326] tracking-tight'>
            Solution Summary
          </h2>
          <p className='text-[14.5px] md:text-[16.5px] text-[#64748b] font-medium mt-1.5 md:mt-2 tracking-tight'>
            Finance & HR Analytics Suite built for leadership visibility
          </p>
        </div>

        {/* 2-COLUMN LAYOUT MATRIX */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-[24px]'>
          {solutions.map((item, index) => (
            <div
              key={index}
              className='bg-white rounded-[14px] border border-gray-100 shadow-[0_10px_35px_rgba(0,0,0,0.02)] p-6 md:p-[32px] flex flex-col justify-start min-h-[140px]'
            >
              {/* HORIZONTAL HEADER GROUP: Icon on Left, Title Inline on Right */}
              <div className='flex items-center gap-4 w-full justify-start mb-4'>
                {/* Proportioned gradient badge box matching the template accent precisely */}
                <div className='w-[48px] h-[48px] shrink-0 rounded-[12px] bg-gradient-to-br from-[#3b82f6] to-[#6366f1] flex items-center justify-center shadow-[0_4px_14px_rgba(59,130,246,0.25)] select-none pointer-events-none'>
                  <img
                    src={item.icon}
                    alt={item.title}
                    className='w-[22px] h-[22px] object-contain invert brightness-0'
                  />
                </div>

                {/* Main Heading Text Title */}
                <h3 className='text-[16.5px] md:text-[18.5px] font-extrabold text-[#071326] tracking-tight'>
                  {item.title}
                </h3>
              </div>

              {/* Left-Aligned Description Text Block */}
              <p className='text-[13.5px] md:text-[14.5px] text-[#64748b] font-medium leading-relaxed text-left tracking-tight w-full'>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
