import React from 'react';
import Image from 'next/image';

export default function GWCApproach() {
  const cards = [
    {
      icon: '/images/Templates/template13/customer.svg',
      title: 'Customer Insights',
      text: 'Tracked acquisition, retention, and segmentation patterns to understand customer behavior and optimize engagement strategies.',
    },
    {
      icon: '/images/Templates/template13/finance.svg',
      title: 'Financial KPIs',
      text: 'Comprehensive dashboards for revenue, loan performance, asset quality, and profitability metrics in real-time.',
    },
    {
      icon: '/images/Templates/template13/transac.svg',
      title: 'Transaction Monitoring',
      text: 'Real-time oversight of high-volume transactions with automated alerts and anomaly detection capabilities.',
    },
    {
      icon: '/images/Templates/template13/reporting.svg',
      title: 'Compliance Reporting',
      text: 'Automated dashboards ensuring audit readiness and regulatory compliance with minimal manual intervention.',
    },
    {
      icon: '/images/Templates/template13/excutive.svg',
      title: 'Executive Summaries',
      text: 'High-level overviews with seamless drill-down capabilities to transaction-level insights for leadership.',
    },
    {
      icon: '/images/Templates/template13/auto.svg',
      title: 'Automated Pipelines',
      text: 'ETL automation ensuring data freshness and reliability across all analytics and reporting functions.',
    },
  ];

  const highlights = [
    'Centralized analytics for customer, financial, and compliance metrics',
    'Drill-down from executive KPIs to transaction-level insights',
    'Automated compliance reporting, reducing manual effort by 90%',
    'Standardized KPIs for consistent banking performance tracking',
  ];

  return (
    <section className='py-[64px] bg-[#fcf8ff] relative overflow-hidden'>
      <div className='max-w-[1140px] mx-auto px-6 relative z-10'>
        {/* Main Headings */}
        <div className='text-center mb-[40px]'>
          <h2 className='text-[28px] font-extrabold text-[#071326] tracking-tight'>
            GWC{"'"}s Approach
          </h2>
          <p className='text-[15.5px] text-[#64748b] font-medium mt-2'>
            A comprehensive Tableau-based analytics platform designed for banking excellence
          </p>
        </div>

        {/* Top Feature Matrix: 3x2 Grid with Inline Headers */}
        <div className='grid md:grid-cols-3 gap-[24px] mb-[48px]'>
          {cards.map((item, index) => (
            <div
              key={index}
              className='bg-white rounded-[12px] shadow-[0_4px_20px_rgba(0,0,0,0.02)] p-[28px] border border-gray-100/40 flex flex-col justify-start'
            >
              {/* Row Layout Header - Icon and Title Side-by-Side */}
              <div className='flex items-center gap-[14px] mb-[16px]'>
                <div className='w-[40px] h-[40px] rounded-[8px] bg-[#3b82f6] flex items-center justify-center shrink-0 shadow-sm shadow-blue-500/10'>
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={20}
                    height={20}
                    className='brightness-0 invert object-contain'
                  />
                </div>
                <h3 className='text-[16.5px] font-extrabold text-[#071326] tracking-tight leading-tight'>
                  {item.title}
                </h3>
              </div>

              <p className='text-[14px] text-[#475569] font-medium leading-[1.5]'>{item.text}</p>
            </div>
          ))}
        </div>

        {/* Bottom Interactive Block Layout with Overlapping Design Layers */}
        <div className='relative min-h-[320px] flex items-center w-full mt-[76px]'>
          {/* Right Floating Stock Chart Backdrop Asset
              - Shifted upwards using -top-[50px]
              - Shifted rightwards using right-[-24px]
          */}
          <div
            className='absolute right-[-24px] -top-[50px] bottom-[-40px] w-full md:w-[52%] bg-cover bg-no-repeat hidden md:block rounded-l-[16px] z-10'
            style={{
              backgroundImage: 'url("/images/Templates/template13/bg4.png")',
              /* Horizontal remains calc(50% + 10px), Vertical changed to 20% to move image UP */
              backgroundPosition: 'calc(50% + 10px) 10%',
            }}
          />

          {/* Left/Center Position Floating Highlights Container */}
          <div className='relative z-20 bg-white/95 backdrop-blur-sm rounded-[12px] shadow-[0_20px_50px_rgba(0,0,0,0.06)] p-[36px] max-w-[580px] border border-gray-100/80 w-full md:translate-x-[16px]'>
            <h3 className='text-[18px] font-extrabold text-[#071326] tracking-tight mb-[20px]'>
              Key Highlights
            </h3>

            <div className='space-y-[14px]'>
              {highlights.map((item, index) => (
                <div key={index} className='flex items-start gap-[12px]'>
                  <div className='w-[18px] h-[18px] shrink-0 relative mt-[3px]'>
                    <Image
                      src='/images/Templates/template13/tick.svg'
                      alt='Success Indicator Tick Checkmark'
                      fill
                      className='object-contain'
                    />
                  </div>
                  <p className='text-[14.5px] text-[#334155] font-semibold leading-[1.45]'>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
