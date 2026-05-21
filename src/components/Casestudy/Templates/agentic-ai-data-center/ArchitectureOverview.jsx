import React from 'react';

const steps = [
  {
    title: 'IoT Sensors + Data Center Logs',
    text: 'Real-time data collection from all critical systems',
  },
  {
    title: 'Data Processing & AI Models',
    text: 'Advanced analytics and machine learning processing',
  },
  {
    title: 'Agentic AI Platform',
    text: 'Intelligent decision-making and automation engine',
  },
  {
    title: 'Dashboards + Automated Responses',
    text: 'Visualization and automated system actions',
  },
];

export default function ArchitectureOverview() {
  return (
    // Section layout background updated to match the soft pastel lilac gradient precisely
    <section
      className='py-[64px] md:py-[80px] w-full bg-cover bg-center'
      style={{
        backgroundImage: 'linear-gradient(to bottom, #f3e8ff, #faebff)',
      }}
    >
      <div className='max-w-[1140px] mx-auto px-4 md:px-6 flex flex-col items-center'>
        {/* HEADER SECTION BLOCK */}
        <div className='text-center mb-[40px] md:mb-[48px]'>
          <h2 className='text-[26px] md:text-[30px] font-extrabold text-[#071326] tracking-tight'>
            Architecture Overview
          </h2>
          <p className='text-[14px] md:text-[15.5px] text-[#64748b] font-medium mt-1.5 tracking-tight'>
            A scalable, intelligent infrastructure for data center management
          </p>
        </div>

        {/* ARCHITECTURE FLOW TIMELINE LAYER */}
        <div className='w-full max-w-[840px] xl:max-w-[880px] space-y-3.5'>
          {steps.map((item, index) => (
            <div key={index} className='flex flex-col items-center w-full'>
              {/* Architecture Core Block Card */}
              <div className='bg-white w-full rounded-[12px] border border-purple-200/40 shadow-[0_4px_25px_rgba(168,85,247,0.02)] px-6 py-5 md:px-[32px] md:py-[24px] text-left flex flex-col justify-center items-center'>
                <h3 className='text-[15.5px] md:text-[17px] font-extrabold text-[#071326] tracking-tight leading-snug'>
                  {item.title}
                </h3>
                <p className='text-[13px] md:text-[14px] text-[#64748b] font-medium mt-2 tracking-tight leading-normal'>
                  {item.text}
                </p>
              </div>

              {/* TIMELINE CONNECTOR ARROW */}
              {index !== steps.length - 1 && (
                <div
                  className='flex justify-center py-2 select-none pointer-events-none'
                  aria-hidden='true'
                >
                  {/* FIXED: Uses your uploaded downarrow.svg file instead of standard text characters */}
                  <div className='w-[28px] h-[28px] md:w-[32px] md:h-[32px] rounded-full bg-[#c4f3fe] flex items-center justify-center shadow-sm'>
                    <img
                      src='/images/Templates/template16/down-arrow.svg'
                      alt=''
                      className='w-[14px] h-[14px] md:w-[16px] md:h-[16px] object-contain'
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
