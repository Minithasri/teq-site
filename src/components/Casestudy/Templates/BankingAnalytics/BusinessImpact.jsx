import React from 'react';
import Image from 'next/image';

export default function BusinessImpact() {
  const tableRows = [
    {
      metric: 'Reporting',
      before: 'Weekly/Monthly',
      after: 'Real-time',
      impact: '80% Faster',
      afterColor: 'text-[#10b981]',
    },
    {
      metric: 'Compliance',
      before: 'Manual',
      after: 'Automated & Reliable',
      impact: '90% Reduction',
      afterColor: 'text-[#10b981]',
    },
    {
      metric: 'Transaction Monitoring',
      before: 'Fragmented',
      after: 'Centralized',
      impact: '100% Coverage',
      afterColor: 'text-[#10b981]',
    },
    {
      metric: 'Leadership Oversight',
      before: 'Limited',
      after: 'Comprehensive',
      impact: 'Full Visibility',
      afterColor: 'text-[#10b981]',
    },
  ];

  const cards = [
    {
      icon: '/images/Templates/template13/real-time.svg',
      badgeText: '↓ Reduced',
      badgeColor: 'text-[#10b981]',
      title: 'Reporting Cycle',
      value: '80%',
    },
    {
      icon: '/images/Templates/template13/compli.svg',
      badgeText: '↑ Improved',
      badgeColor: 'text-[#10b981]',
      title: 'Compliance Readiness',
      value: '100%',
    },
    {
      icon: '/images/Templates/template13/driven.svg',
      badgeText: '↑ Data-Driven',
      badgeColor: 'text-[#10b981]',
      title: 'Decision Quality',
      value: 'Enhanced',
    },
    {
      icon: '/images/Templates/template13/strength.svg',
      badgeText: '↑ Strengthened',
      badgeColor: 'text-[#10b981]',
      title: 'Regulatory Confidence',
      value: 'High',
    },
  ];

  const outcomes = [
    {
      boldTitle: 'Operational Excellence',
      description: 'Reduced reporting cycle by 80%, enabling faster response to market conditions',
    },
    {
      boldTitle: 'Regulatory Compliance',
      description: 'Improved compliance readiness with automated, reliable reporting systems',
    },
    {
      boldTitle: 'Enhanced Visibility',
      description: 'Centralized customer and transaction-level performance monitoring',
    },
    {
      boldTitle: 'Strategic Decision-Making',
      description: 'Empowered leadership with comprehensive, data-driven insights',
    },
  ];

  return (
    <section className='py-[48px] md:py-[64px] bg-[#f8fafc]'>
      <div className='max-w-[1140px] mx-auto px-4 md:px-6'>
        {/* Module Header */}
        <div className='text-center mb-[32px] md:mb-[40px]'>
          <h2 className='text-[24px] md:text-[28px] font-extrabold text-[#071326] tracking-tight'>
            Business Impact
          </h2>
          <p className='text-[14px] md:text-[15.5px] text-[#64748b] font-medium mt-2 max-w-[600px] mx-auto'>
            Measurable improvements across all key performance indicators
          </p>
        </div>

        {/* Top Segment: Impact Matrix Block (Responsive grid matching image 1 perfectly) */}
        <div className='bg-white rounded-[12px] shadow-[0_4px_20px_rgba(0,0,0,0.02)] overflow-hidden border border-gray-100 max-w-[1040px] mx-auto mb-[24px] md:mb-[32px]'>
          {/* Table Header Row: Hidden on mobile devices, shown on tablets and desktops */}
          <div className='hidden sm:grid grid-cols-4 bg-white border-b border-gray-100 font-extrabold text-[14.5px] text-[#071326]'>
            <div className='p-[16px] md:p-[20px]'>Metric</div>
            <div className='p-[16px] md:p-[20px]'>Before</div>
            <div className='p-[16px] md:p-[20px]'>After</div>
            <div className='p-[16px] md:p-[20px]'>Impact</div>
          </div>

          {/* Table Body Content Rows: Converts to clean vertical stacks natively on Mobile */}
          {tableRows.map((row, index) => (
            <div
              key={index}
              className='grid grid-cols-2 sm:grid-cols-4 border-b last:border-b-0 border-gray-100 text-[13.5px] md:text-[14px] items-center text-[#475569] font-medium bg-white p-4 sm:p-0 gap-y-2 sm:gap-y-0'
            >
              <div className='col-span-2 sm:col-span-1 sm:p-[20px] text-[#071326] font-semibold text-[14.5px] sm:text-[14px] border-b sm:border-0 border-gray-50 pb-2 sm:pb-0'>
                {row.metric}
              </div>
              <div className='sm:p-[20px] pt-1 sm:pt-0'>
                <span className='sm:hidden text-gray-400 font-normal block text-[11px] uppercase tracking-wider mb-0.5'>
                  Before
                </span>
                {row.before}
              </div>
              <div className={`sm:p-[20px] pt-1 sm:pt-0 font-bold ${row.afterColor}`}>
                <span className='sm:hidden text-gray-400 font-normal block text-[11px] uppercase tracking-wider mb-0.5'>
                  After
                </span>
                {row.after}
              </div>
              <div className='col-span-2 sm:col-span-1 sm:p-[20px] pt-3 sm:pt-0 flex items-center w-full max-w-full sm:max-w-[170px]'>
                <span className='bg-[#10b981] text-white px-[14px] py-[6px] sm:py-[5px] rounded-full text-[12px] md:text-[12.5px] font-bold text-center block w-full tracking-wide shadow-sm shadow-emerald-500/10'>
                  {row.impact}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mid Segment: Four Performance Metrics Cards */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-[16px] md:gap-[20px] max-w-[1040px] mx-auto mb-[28px] md:mb-[36px]'>
          {cards.map((item, index) => (
            <div
              key={index}
              className='bg-white rounded-[12px] shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-gray-100/60 p-4 md:p-[24px] flex flex-col items-center text-center justify-between min-h-[145px] md:min-h-[165px]'
            >
              {/* Row Header: Rounded Badge icon frame with text flag */}
              <div className='flex items-center gap-2 md:gap-[12px] w-full justify-start'>
                <div className='w-[32px] h-[32px] md:w-[40px] md:h-[40px] rounded-[6px] md:rounded-[8px] bg-[#eff6ff] flex items-center justify-center shrink-0'>
                  <Image src={item.icon} alt={item.title} width={18} height={18} />
                </div>
                <span
                  className={`text-[11.5px] md:text-[12.5px] font-extrabold tracking-tight ${item.badgeColor}`}
                >
                  {item.badgeText}
                </span>
              </div>

              {/* Central Title label */}
              <p className='text-[13px] md:text-[14px] text-[#64748b] font-semibold mt-[12px] mb-[4px] leading-tight w-full text-center'>
                {item.title}
              </p>

              {/* Big Bold Data Metric Value */}
              <h3 className='text-[18px] md:text-[22px] font-extrabold text-[#071326] tracking-tight w-full text-center'>
                {item.value}
              </h3>
            </div>
          ))}
        </div>

        {/* Bottom Segment: Outlined Outcomes Grid Panel */}
        <div className='bg-[#fcfdff] rounded-[12px] border border-blue-100/60 shadow-[0_4px_24px_rgba(0,0,0,0.01)] p-5 md:p-[32px] max-w-[1040px] mx-auto'>
          <h3 className='text-[16.5px] md:text-[18px] font-extrabold text-[#071326] tracking-tight mb-[16px] md:mb-[24px]'>
            Key Outcomes
          </h3>

          <div className='grid md:grid-cols-2 gap-x-[40px] gap-y-[20px] md:gap-y-[28px]'>
            {outcomes.map((item, index) => (
              <div key={index} className='flex gap-[12px] items-start'>
                {/* Success Checkmark Icon wrapper */}
                <div className='w-[16px] h-[16px] md:w-[18px] md:h-[18px] shrink-0 relative mt-[4px]'>
                  <Image
                    src='/images/Templates/template13/tick.svg'
                    alt='Success Checkmark Icon'
                    fill
                    className='object-contain'
                  />
                </div>

                {/* Text Block wrapper: Changed to flex-col for clean title-above-description alignment */}
                <div className='flex flex-col text-left'>
                  <h4 className='font-extrabold text-[#071326] text-[15px] md:text-[16px] tracking-tight leading-tight mb-1'>
                    {item.boldTitle}
                  </h4>
                  <p className='text-[13.5px] md:text-[14.5px] text-[#64748b] font-medium leading-[1.45]'>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
