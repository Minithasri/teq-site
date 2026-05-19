'use client';

import { Clock, RefreshCw, TrendingDown, XCircle } from 'lucide-react';
import Image from 'next/image';

const metricsData = [
  {
    category: 'Reporting Cycle',
    status: 'Monthly',
    subtext: 'instead of real-time',
    icon: <Clock size={26} className='text-[#EF4343]' />,
  },
  {
    category: 'Data Integration',
    status: 'Fragmented',
    subtext: 'across multiple systems',
    icon: <TrendingDown size={26} className='text-[#EF4343]' />,
  },
  {
    category: 'KPI Framework',
    status: 'None',
    subtext: 'no unified metrics',
    icon: <XCircle size={26} className='text-[#EF4343]' />,
  },
  {
    category: 'Reporting Method',
    status: 'Excel-based',
    subtext: 'heavy manual work',
    icon: <RefreshCw size={26} className='text-[#EF4343]' />,
  },
];

export default function CurrentStateMetrics() {
  return (
    <section
      className='relative w-full overflow-hidden flex flex-col items-center justify-start px-4 sm:px-6 md:px-8 select-none'
      style={{
        minHeight: '440px',
      }}
    >
      {/* 1. Blur Overlay Background Canvas */}
      <div className='absolute inset-0 z-0'>
        <Image
          src='/images/Templates/templatez/realestate/currentstate.png'
          alt='Background Architecture Map'
          fill
          priority
          className='object-cover object-top opacity-30'
        />
        <div
          className='absolute inset-0 bg-[#E2E8F0]/40'
          style={{
            backdropFilter: 'blur(3.2px)',
            WebkitBackdropFilter: 'blur(10.2px)',
          }}
        />
      </div>

      {/* Content Layer Container */}
      <div className='relative z-10 w-full max-w-[1200px] mx-auto flex flex-col items-center pt-10 md:pt-12 pb-10'>
        {/* 2. Primary Heading */}
        <h2
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
            lineHeight: '40px',
            letterSpacing: '-0.9px',
            color: '#0F1729',
          }}
          className='text-center mb-2 text-[28px] sm:text-[30px] md:text-[34px]'
        >
          Current State Metrics
        </h2>

        {/* 3. Description Subtext Banner */}
        <p
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 400,
            lineHeight: '28px',
            color: '#000000',
          }}
          className='text-center mb-10 md:mb-12 max-w-[850px] text-[16px] sm:text-[18px] md:text-[22px]'
        >
          Performance indicators before implementing the solution
        </p>

        {/* 4. Horizontal Status Metric Cards Layout Wrapper */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full justify-center px-2'>
          {metricsData.map((item, index) => (
            <div
              key={index}
              className='bg-white flex flex-col items-center justify-center p-5 text-center transition-transform w-full'
              style={{
                maxWidth: '270px',
                height: '156px',
                margin: '0 auto',
                borderRadius: '12px',
                borderStyle: 'solid',
                borderTopWidth: '1px',
                borderRightWidth: '1px',
                borderBottomWidth: '1px',
                borderLeftWidth: '4px',
                borderTopColor: '#E5E7EB',
                borderRightColor: '#E5E7EB',
                borderBottomColor: '#E5E7EB',
                borderLeftColor: '#E5E7EB',
                boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 1)',
              }}
            >
              {/* Header Title Bar Element inside card layout */}
              <div className='flex items-center justify-start gap-4 sm:gap-6 mb-2 w-full px-1'>
                <div className='shrink-0'>{item.icon}</div>

                <span className='text-[#6B7280] font-normal text-[14px] sm:text-[15px] tracking-tight truncate'>
                  {item.category}
                </span>
              </div>

              {/* Bold Status Text Accent */}
              <h3 className='text-[#0F1729] font-bold text-[20px] sm:text-[22px] tracking-tight mb-1'>
                {item.status}
              </h3>

              {/* Bottom Explainer Muted Label */}
              <span className='text-[#9CA3AF] font-normal text-[13px] sm:text-[14px]'>
                {item.subtext}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
