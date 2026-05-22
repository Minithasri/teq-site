'use client';

import { BarChart3, CheckCircle2, FileText, RefreshCw, TrendingUp, Users2 } from 'lucide-react';
import Image from 'next/image';

export default function BusinessObjectivesAndSolution() {
  const objectives = [
    'Build a centralized sales dashboard for leadership',
    'Provide real-time visibility into sales performance',
    'Enable drill-down analysis by product, customer, and region',
    'Automate reporting to reduce manual workload',
    'Support data-driven decision-making for sales growth',
  ];

  const solutionCards = [
    {
      title: 'Sales Performance Dashboards',
      desc: 'Real-time tracking of revenue by region, product, and customer segments',
      icon: <BarChart3 size={22} className='text-white' />,
    },
    {
      title: 'Customer Insights',
      desc: 'Linked sales data with customer behavior patterns for deeper understanding',
      icon: <Users2 size={22} className='text-white' />,
    },
    {
      title: 'Trend Analysis',
      desc: 'Monitored product-level performance and seasonal patterns',
      icon: <TrendingUp size={22} className='text-white' />,
    },
    {
      title: 'Executive Summaries',
      desc: 'Consolidated high-level KPIs with drill-down capability',
      icon: <FileText size={22} className='text-white' />,
    },
    {
      title: 'Automated Refresh',
      desc: 'Replaced manual reporting with scheduled data updates',
      icon: <RefreshCw size={22} className='text-white' />,
    },
  ];

  const solutionHighlights = {
    leftColumn: [
      'Centralized, real-time sales reporting',
      'Interactive dashboards with automated data refreshes',
    ],

    rightColumn: [
      'Drill-down capability from overall revenue → product → region → customer',
      'Consistent KPI definitions across the sales organization',
    ],
  };

  return (
    <div className="w-full bg-[#F5F7FB] font-['Poppins'] select-none relative overflow-x-hidden">
      {/* ================= SINGLE COMBINED SECTION ================= */}
      <section className='relative w-full overflow-hidden'>
        {/* TOP WHITE AREA */}
        <div className='relative w-full max-w-[1200px] mx-auto px-6 pt-16 pb-[170px] z-10 flex flex-col items-center'>
          {/* Header */}
          <div className='text-center max-w-2xl mx-auto mb-[60px]'>
            <h2 className='font-bold text-[34px] leading-[48px] text-[#1D2530] mb-4'>
              Business Objectives
            </h2>

            <p className='font-normal text-[20px] leading-[28px] text-[#7B899D]'>
              Clear goals to transform sales reporting and decision-making
            </p>
          </div>

          {/* Objectives */}
          <div className='w-full max-w-[720px] flex flex-col gap-4 relative z-10'>
            {objectives.map((text, idx) => (
              <div
                key={idx}
                className='w-full min-h-[70px] bg-white border border-[#084EBE] rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] px-6 py-4 flex items-center gap-4'
              >
                <CheckCircle2 size={20} className='text-[#1162D4] stroke-[2.5] shrink-0' />

                <p className='text-[16px] lg:text-[17.5px] font-normal text-[#1D2530]'>{text}</p>
              </div>
            ))}
          </div>

          {/* Jersey Image */}
          <div className='absolute right-0 lg:right-[5%] xl:right-[-20%] top-[-40px] z-0 pointer-events-none hidden md:block w-[380px] h-[320px] lg:w-[440px] lg:h-[520px]'>
            <Image
              src='/images/Templates/templatez/titan22/obsol.png'
              alt='Client Product Branding Apparel'
              fill
              priority
              className='object-contain'
            />
          </div>
        </div>
        {/* BACKGROUND IMAGE MOVED TO TOP CENTER */}
        <div className='absolute left-0 right-0 top-[570px] h-[360px] w-full overflow-hidden z-0'>
          <div className='absolute inset-0'>
            <Image
              src='/images/Templates/templatez/titan22/titanlast.png'
              alt='Background Decorative Graph Layout'
              fill
              className='object-cover opacity-50'
            />
          </div>
        </div>
        {/* SOLUTION CONTENT */}
        <div
          className='relative z-20 w-full mt-[-130px] pb-1'
          style={{
            background:
              'linear-gradient(135deg, rgba(17, 98, 212, 0.05) 0%, rgba(17, 98, 212, 0.1) 50%, rgba(249, 122, 31, 0.05) 100%)',
          }}
        >
          <div className='w-full max-w-[1200px] mx-auto px-6'>
            {/* Solution Heading */}
            <div className='relative text-center pt-[40px] mb-14'>
              {/* Dark Shadow Blur Behind Text */}
              <div className='relative text-center max-w-3xl mx-auto mb-14 py-4'>
                <div
                  className='absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[100px] rounded-full'
                  style={{
                    background: 'rgba(0, 0, 0, 1)',
                    filter: 'blur(40px)',
                  }}
                />

                {/* Text Content */}
                <div className='relative z-10'>
                  <h2 className='font-bold text-[34px] leading-[48px] text-white mb-2'>
                    Our Solution
                  </h2>

                  <p className='font-normal text-[17.5px] leading-[28px] text-white/85'>
                    A comprehensive framework tailored for retail sales operations
                  </p>
                </div>
              </div>
            </div>

            {/* Cards */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full items-start justify-center'>
              {solutionCards.map((card, index) => (
                <div
                  key={index}
                  className='bg-white rounded-[12px] border border-[#DADFE7] p-6 shadow-lg min-h-[198px] flex flex-col gap-4'
                >
                  <div className='flex items-center gap-4'>
                    <div className='w-[44px] h-[44px] rounded-[12px] bg-[#1162D4] flex items-center justify-center shrink-0 shadow-sm'>
                      {card.icon}
                    </div>

                    <h3 className='font-bold text-[20px] md:text-[22px] leading-[26px] text-[#1D2530]'>
                      {card.title}
                    </h3>
                  </div>

                  <p className='text-[15px] lg:text-[16px] leading-[24px] text-[#7B899D] font-normal'>
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Highlights Panel */}
            <div className='w-full bg-white rounded-[12px] border border-[#DADFE7] shadow-lg p-8 md:p-10 mt-12 mb-12'>
              <h3 className='font-bold text-[28px] leading-[36px] text-[#1D2530] mb-8'>
                Solution Highlights
              </h3>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4'>
                {/* Left Column */}
                <div className='flex flex-col gap-4'>
                  {solutionHighlights.leftColumn.map((item, index) => (
                    <div key={index} className='flex items-start gap-3'>
                      <span className='text-[#F92020] text-[25px] leading-none mt-1.5'>•</span>

                      <p className='text-[16px] lg:text-[17px] w-[450px] text-[#1D2530] font-normal leading-[26px]'>
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Right Column */}
                <div className='flex flex-col gap-4'>
                  {solutionHighlights.rightColumn.map((item, index) => (
                    <div key={index} className='flex items-start gap-3'>
                      <span className='text-[#F97A1F] text-[25px] leading-none mt-1.5'>•</span>

                      <p className='text-[16px] lg:text-[17px] w-[460px] text-[#1D2530] font-normal leading-[26px]'>
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>{' '}
      </section>
    </div>
  );
}
