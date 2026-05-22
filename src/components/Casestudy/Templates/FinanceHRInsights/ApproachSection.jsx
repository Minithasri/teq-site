import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Discovery & Alignment',
    text: 'Understood finance and HR reporting requirements',
  },
  {
    number: '02',
    title: 'Data Integration',
    text: 'Combined HRIS and finance system data into a single model',
  },
  {
    number: '03',
    title: 'Dashboard Development',
    text: 'Built interactive role-based dashboards for HR, finance, and executives',
  },
  {
    number: '04',
    title: 'KPI Standardization',
    text: 'Established cross-functional metrics linking workforce cost and financial ROI',
  },
  {
    number: '05',
    title: 'Automation',
    text: 'Enabled automated refresh cycles to remove manual reporting bottlenecks',
  },
];

export default function ApproachSection() {
  return (
    <section
      className='py-[64px] md:py-[80px] bg-cover bg-center w-full relative'
      style={{
        // Gradient layer alpha value matches the transparent overlay background exactly
        backgroundImage:
          'linear-gradient(rgba(241, 245, 249, 0.88), rgba(241, 245, 249, 0.88)), url("/images/Templates/template15/bg3.png")',
      }}
    >
      {/* Maximum content container track expanded to standard width */}
      <div className='max-w-[1140px] mx-auto px-4 md:px-6 relative z-10'>
        {/* HEADER BLOCK */}
        <div className='text-center mb-[40px] md:mb-[52px]'>
          <h2 className='text-[26px] md:text-[28px] font-extrabold text-[#071326] tracking-tight'>
            Our Approach
          </h2>
          <p className='text-[14.5px] md:text-[15.5px] text-[#64748b] font-medium mt-1.5'>
            A systematic methodology to unify data and deliver insights
          </p>
        </div>

        {/* 5-COLUMN RESPONSIVE LAYOUT CARDS MATRIX */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-[18px]'>
          {steps.map((item, index) => (
            <div
              key={index}
              className='bg-white rounded-[12px] border-2 border-[#F5F5F5] shadow-[0_4px_12px_rgba(0,0,0,0.08)] p-5 md:p-[24px] flex flex-col justify-start min-h-[220px]'
            >
              {/* Row Layout: Big Number Badge on Left, Heading text tracking natively on Right */}
              <div className='flex items-start gap-3 w-full mb-3 justify-start text-left'>
                <span className='text-[22px] md:text-[24px] font-black text-[#2662f5] leading-none select-none tracking-tight'>
                  {item.number}
                </span>

                <h3 className='text-[14px] md:text-[14.5px] font-extrabold text-[#071326] tracking-tight leading-tight pt-0.5'>
                  {item.title}
                </h3>
              </div>

              {/* Strict Left-Aligned Paragraph Content */}
              <p className='text-[12px] md:text-[12.5px] text-[#64748b] font-medium leading-relaxed text-left tracking-tight mt-1'>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
