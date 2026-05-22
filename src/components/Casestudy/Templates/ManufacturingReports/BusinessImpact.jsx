import React from 'react';

const metricCards = [
  {
    icon: '/images/Templates/template14/t1.svg',
    title: 'Reporting Speed',
    boldValue: 'Days → Real-time',
    footerLabel: 'Instant access to critical data',
  },
  {
    icon: '/images/Templates/template14/t2.svg',
    title: 'Visibility',
    boldValue: '100% Improved',
    footerLabel: 'Into defects, yields, and performance',
  },
  {
    icon: '/images/Templates/template14/t3.svg',
    title: 'Root Cause Analysis',
    boldValue: 'Faster Actions',
    footerLabel: 'Proactive corrective measures',
  },
];

const breakdownCards = [
  {
    title: 'Operational Impact',
    points: [
      'Reporting cycle reduced from days → real-time',
      'Improved visibility into defects, yields, and machine performance',
      'Faster root cause analysis and corrective actions',
    ],
  },
  {
    title: 'Financial Impact',
    points: [
      'Reduced costs associated with defect rework and inefficiencies',
      'Improved factory throughput and yield optimization',
    ],
  },
  {
    title: 'Strategic Impact',
    points: [
      'Established a data-driven digital factory model',
      'Positioned as a leader in manufacturing digitalization',
    ],
  },
];

export default function BusinessImpact() {
  return (
    <section className='w-full bg-white relative'>
      {/* 1. TOP TITLE BLOCK */}
      <div className='max-w-[1140px] mx-auto px-4 md:px-6 pt-[56px] md:pt-[64px] pb-[36px] text-center bg-white'>
        <h2 className='text-[26px] md:text-[32px] font-extrabold text-[#071326] tracking-tight'>
          Business Impact
        </h2>
        <p className='text-[14.5px] md:text-[16px] text-[#64748b] font-medium mt-2'>
          Measurable outcomes across all dimensions
        </p>
      </div>

      {/* 2. CARD MATRIX BACKGROUND SHELL */}
      <div
        className='py-[56px] md:py-[72px] bg-cover bg-center w-full relative'
        style={{
          backgroundImage:
            'linear-gradient(rgba(248, 250, 252, 0.75), rgba(248, 250, 252, 0.75)), url("/images/Templates/template14/bg6.png")',
        }}
      >
        <div className='max-w-[1140px] mx-auto px-4 md:px-6 relative z-10'>
          {/* TOP METRICS GRID LAYER */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-[28px] mb-[28px]'>
            {metricCards.map((item, index) => (
              <div
                key={index}
                className='bg-white rounded-[14px] border-2 border-[#F5F5F5] shadow-[0_4px_12px_rgba(0,0,0,0.08)] p-6 md:p-[32px] flex flex-col justify-between min-h-[200px] md:min-h-[220px] items-center md:items-start text-center md:text-left'
              >
                {/* Horizontal Header Group */}
                <div className='flex items-center gap-4 w-full justify-center md:justify-start mb-3'>
                  {/* Clean rounded icon badge matched with precise dimensions */}
                  <div className='w-[42px] h-[42px] shrink-0 flex items-center justify-center rounded-full bg-[#e8f5e9] text-[#2e7d32]'>
                    <img src={item.icon} alt='' className='w-[20px] h-[20px] object-contain' />
                  </div>

                  <span className='text-[14.5px] md:text-[15.5px] text-[#64748b] font-bold tracking-tight block'>
                    {item.title}
                  </span>
                </div>

                {/* Central Focus Bold Data Metric */}
                <div className='flex flex-col items-center md:items-start justify-center min-h-[48px] mt-2 w-full'>
                  <h3 className='text-[21px] md:text-[25px] font-extrabold text-[#071326] tracking-tight leading-tight w-full'>
                    {item.boldValue}
                  </h3>
                </div>

                {/* Bottom caption text descriptor */}
                <p className='text-[13px] md:text-[13.5px] text-[#64748b]/90 font-medium tracking-tight mt-4 leading-normal w-full'>
                  {item.footerLabel}
                </p>
              </div>
            ))}
          </div>

          {/* BOTTOM DETAILED POINTS LAYOUT MATRIX */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-[28px]'>
            {breakdownCards.map((card, index) => (
              <div
                key={index}
                className='bg-white rounded-[14px] border border-gray-100 shadow-[0_4px_30px_rgba(0,0,0,0.015)] p-6 md:p-[36px] flex flex-col justify-start min-h-[260px]'
              >
                <h3 className='text-[17px] md:text-[18.5px] font-extrabold text-[#071326] tracking-tight mb-5 text-left'>
                  {card.title}
                </h3>

                <div className='space-y-4'>
                  {card.points.map((point, pointIndex) => (
                    <p
                      key={pointIndex}
                      className='text-[13.5px] md:text-[14.5px] text-[#334155] font-medium leading-relaxed text-left tracking-tight relative pl-4'
                    >
                      <span className='absolute left-0 top-0 text-[#64748b]'>•</span>
                      {point}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
