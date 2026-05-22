'use client';

import { BarChart3, CheckCircle2, DollarSign, FileText, Home, Zap } from 'lucide-react';
import Image from 'next/image';

const solutionCards = [
  {
    title: 'Sales Dashboards',
    description: 'Real-time visibility into property sales and revenue trends',
    icon: <BarChart3 size={24} className='text-[#FFFFFF]' />,
  },
  {
    title: 'Occupancy Insights',
    description: 'Monitoring of occupancy rates across different assets',
    icon: <Home size={24} className='text-[#FFFFFF]' />,
  },
  {
    title: 'Financial KPIs',
    description: 'Unified reporting for profitability and cost tracking',
    icon: <DollarSign size={24} className='text-[#FFFFFF]' />,
  },
  {
    title: 'Executive Summaries',
    description: 'Consolidated leadership views with drill-down to asset-level details',
    icon: <FileText size={24} className='text-[#FFFFFF]' />,
  },
  {
    title: 'Automation',
    description: 'Reduced manual dependency with ETL pipelines for refresh cycles',
    icon: <Zap size={24} className='text-[#FFFFFF]' />,
  },
];

const highlights = [
  'Unified platform for sales, occupancy, and financial KPIs',
  'Drill-down from portfolio view → property → unit-level performance',
  'Automated updates for near real-time decision-making',
  'Track underperforming assets and optimize utilization',
];

export default function SolutionSection() {
  return (
    <section
      className='w-full relative overflow-hidden flex flex-col items-center select-none'
      style={{
        minHeight: '879px',
        background: '#FFFFFF',
        paddingTop: '60px',
        paddingBottom: '60px',
      }}
    >
      {/* Header Block Container */}
      <div className='max-w-[1200px] w-full px-4 sm:px-6 flex flex-col items-center text-center mb-12'>
        {/* 1. Our Solution Title */}
        <h2
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
            lineHeight: '40px',
            letterSpacing: '-0.9px',
            color: '#0F1729',
          }}
          className='mb-2 text-[28px] sm:text-[30px] md:text-[34px]'
        >
          Our Solution
        </h2>

        {/* 2. Real Estate Performance Reporting Suite Subtitle */}
        <h3
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
            lineHeight: '32px',
            color: '#0F1729',
          }}
          className='mb-3 text-[20px] sm:text-[22px] md:text-[24px]'
        >
          Real Estate Performance Reporting Suite
        </h3>

        {/* 3. Main Description Text */}
        <p
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 400,
            lineHeight: '28px',
            color: '#6B7280',
          }}
          className='max-w-[850px] text-[16px] sm:text-[18px] md:text-[22px]'
        >
          A comprehensive platform designed to transform ESR’s operations
        </p>
      </div>

      {/* Grid and Visual Assets Section */}
      <div className='max-w-[1200px] w-full px-4 sm:px-6 relative min-h-[460px] mb-2'>
        {/* Core 3x2 Asymmetric Grid Component Layout */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 w-full lg:max-w-[1140px] z-10 relative'>
          {solutionCards.map((card, idx) => (
            <div
              key={idx}
              className='bg-white p-5 md:p-6 flex flex-col justify-start border border-[#F3F4F6] w-full shadow-lg'
              style={{
                maxWidth: '400px',
                minHeight: '150px',
                borderRadius: '12px',
              }}
            >
              {/* Card Title & Icon Header Line */}
              <div className='flex items-center gap-3 mb-3'>
                <div
                  className='flex items-center justify-center rounded-xl shrink-0'
                  style={{
                    width: '56px',
                    height: '56px',
                    background: '#0FDB20BF',
                  }}
                >
                  {card.icon}
                </div>

                <h4
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 700,
                    color: '#0F1729',
                  }}
                  className='text-[20px] sm:text-[22px] md:text-[24px]'
                >
                  {card.title}
                </h4>
              </div>

              {/* Card Body Paragraph copy */}
              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 400,
                  lineHeight: '22px',
                  color: '#6B7280',
                }}
                className='text-[15px] sm:text-[16px] md:text-[18px]'
              >
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Floating Right Side Up-Trending Chart Graph Image wrapper block */}
        <div
          className='absolute hidden lg:block z-20'
          style={{
            width: '447.62px',
            height: '205px',
            bottom: '120px',
            right: '-200px',
            opacity: 1,
            transform: 'scaleX(-1)',
          }}
        >
          <Image
            src='/images/Templates/templatez/realestate/solution.png'
            alt='Real Estate Growth Transformation'
            width={447}
            height={205}
            priority
            style={{ borderRadius: '19px' }}
            className='object-cover object-center shadow-sm'
          />
        </div>
      </div>

      {/* Solution Highlights Footnote Deck */}
      <div className='max-w-[1200px] w-full px-4 sm:px-6 z-10 flex justify-center lg:justify-center'>
        <div
          className='w-full max-w-[660px] p-5 md:p-6 lg:p-8 flex flex-col justify-center'
          style={{
            borderRadius: '16px',
            background: 'linear-gradient(135deg, #F0FDF4 0%, #F6FDF9 100%)',
          }}
        >
          {/* Highlights Header Title */}
          <h4
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              color: '#0F1729',
            }}
            className='mb-4 text-[20px] sm:text-[22px] md:text-[24px]'
          >
            Solution Highlights
          </h4>

          {/* Checklist Loop block */}
          <div className='flex flex-col gap-3'>
            {highlights.map((text, index) => (
              <div key={index} className='flex items-start gap-3'>
                <CheckCircle2 size={18} className='text-[#22C55E] shrink-0 mt-0.5' />

                <span
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 400,
                    lineHeight: '22px',
                    color: '#0F1729',
                  }}
                  className='text-[15px] sm:text-[16px] md:text-[18px]'
                >
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
