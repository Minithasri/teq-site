import React from 'react';

const tableRows = [
  { dimension: 'Reporting Cycle', before: 'Weekly/Monthly', after: 'Real-time' },
  { dimension: 'Data Consistency', before: 'Fragmented', after: 'Unified & Reliable' },
  { dimension: 'Workforce-Finance Link', before: 'Nonexistent', after: 'Established KPIs' },
  { dimension: 'Leadership Oversight', before: 'Limited', after: 'Comprehensive' },
];

const impactCards = [
  {
    icon: '/images/Templates/template15/weekly.svg',
    label: 'Time Savings',
    title: 'Weekly → Same Day',
    text: '95% faster',
  },
  {
    icon: '/images/Templates/template15/uni.svg',
    label: 'Data Quality',
    title: 'Unified',
    text: '100% consistency',
  },
  {
    icon: '/images/Templates/template15/esta.svg',
    label: 'Workforce Insights',
    title: 'Established',
    text: 'New KPIs',
  },
  {
    icon: '/images/Templates/template15/real-time.svg',
    label: 'Decision Speed',
    title: 'Real-time',
    text: 'Immediate insights',
  },
];

export default function BusinessImpact() {
  return (
    <section
      className='py-[64px] md:py-[80px] bg-cover bg-center w-full relative'
      style={{
        backgroundImage:
          'linear-gradient(rgba(248, 250, 252, 0.88), rgba(248, 250, 252, 0.88)), url("/images/Templates/template15/bg4.png")',
      }}
    >
      <div className='max-w-[1140px] mx-auto px-4 md:px-6 relative z-10'>
        {/* SECTION HEADER BLOCK */}
        <div className='text-center mb-[40px] md:mb-[48px]'>
          <h2 className='text-[26px] md:text-[32px] font-extrabold text-[#071326] tracking-tight'>
            Business Impact
          </h2>
          <p className='text-[14.5px] md:text-[16.5px] text-[#64748b] font-medium mt-1.5 md:mt-2 tracking-tight'>
            Measurable improvements across key performance dimensions
          </p>
        </div>

        {/* DATA MATRIX PLACEMENT LAYER */}
        <div className='rounded-[12px] overflow-hidden border border-[#3b82f6] bg-white shadow-[0_12px_40px_rgba(0,0,0,0.03)] mb-8'>
          {/* Header Row split across a custom 12-column grid layout */}
          <div className='grid grid-cols-12 bg-gradient-to-r from-[#3b82f6] to-[#6366f1] text-white font-extrabold text-[13.5px] md:text-[14.5px] tracking-tight select-none'>
            <div className='col-span-4 p-4 md:p-[18px] text-left pl-6'>Dimension</div>
            <div className='col-span-3 p-4 md:p-[18px] text-center'>Before</div>
            <div className='col-span-2 p-4 md:p-[18px]'></div>
            <div className='col-span-3 p-4 md:p-[18px] text-left'>After</div>
          </div>

          {/* Table Body Content Rows */}
          {tableRows.map((row, index) => (
            <div
              key={index}
              className='grid grid-cols-12 border-t border-gray-100 text-[13.5px] md:text-[14.5px] items-center hover:bg-slate-50/40 transition-colors duration-150'
            >
              <div className='col-span-4 p-4 md:p-[18px] text-[#071326] font-bold text-left pl-6 tracking-tight'>
                {row.dimension}
              </div>
              <div className='col-span-3 p-4 md:p-[18px] text-[#ef4444] font-semibold text-center tracking-tight'>
                {row.before}
              </div>
              <div className='col-span-2 p-4 md:p-[18px] text-center text-[#6366f1] font-black text-[15px] select-none'>
                →
              </div>
              <div className='col-span-3 p-4 md:p-[18px] text-[#10b981] font-extrabold text-left tracking-tight'>
                {row.after}
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM METRICS CARDS GRID SECTION */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-[24px]'>
          {impactCards.map((item, index) => (
            <div
              key={index}
              className='bg-white border-2 border-[#3b82f6] rounded-[12px] shadow-[0_4px_25px_rgba(0,0,0,0.01)] p-5 md:p-[24px] flex items-start gap-4 transition-transform duration-200'
            >
              {/* Left Column: Proportioned Gradient Icon Wrapper */}
              <div className='w-[44px] h-[44px] shrink-0 rounded-[10px] bg-gradient-to-br from-[#3b82f6] to-[#6366f1] flex items-center justify-center shadow-[0_4px_12px_rgba(59,130,246,0.2)] select-none pointer-events-none'>
                <img
                  src={item.icon}
                  alt=''
                  className='w-[20px] h-[20px] object-contain invert brightness-0'
                />
              </div>

              {/* Right Column: Stacked Text Fields Left-Aligned Cleanly */}
              <div className='flex flex-col justify-start text-left'>
                <p className='text-[12px] md:text-[12.5px] text-[#64748b] font-bold tracking-tight mb-1'>
                  {item.label}
                </p>
                <h3 className='text-[15px] md:text-[16.5px] font-black text-[#071326] tracking-tight leading-tight mb-1.5'>
                  {item.title}
                </h3>
                <p className='text-[12.5px] md:text-[13px] text-[#10b981] font-extrabold tracking-tight leading-none'>
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
