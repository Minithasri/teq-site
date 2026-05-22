'use client';

import { LayoutGrid, Activity, DollarSign, FileText, Zap } from 'lucide-react';
import Image from 'next/image';

const solutionCards = [
  {
    title: 'Portfolio Dashboards',
    description: 'Real-time insights into hydrogen projects and investments.',
    icon: <LayoutGrid size={20} className='text-[#FFFFFF]' />,
  },
  {
    title: 'Asset Performance Monitoring',
    description: 'KPIs for output, utilization, and sustainability metrics.',
    icon: <Activity size={20} className='text-[#FFFFFF]' />,
  },
  {
    title: 'Financial Oversight',
    description: 'Revenue, ROI, and cost efficiency tracking across assets.',
    icon: <DollarSign size={20} className='text-[#FFFFFF]' />,
  },
  {
    title: 'Executive Summaries',
    description: 'Unified reporting for leadership and stakeholders.',
    icon: <FileText size={20} className='text-[#FFFFFF]' />,
  },
  {
    title: 'Automated Data Pipelines',
    description: 'Reduced manual reporting through integration and scheduled refreshes.',
    icon: <Zap size={20} className='text-[#FFFFFF]' />,
  },
];

const highlights = [
  'Single source of truth for investment and asset performance',
  'Drill-down capability from portfolio view → project-level insights',
  'Real-time Domo dashboards accessible by executives',
  'Integration of financial and sustainability KPIs',
  'Scalable design for expanding hydrogen portfolio',
];

export default function SolutionSection() {
  return (
    <section
      className='w-full relative overflow-hidden flex flex-col items-center select-none bg-white py-12 md:py-16'
      style={{ minHeight: '920px' }}
    >
      {/* ================= HEADER BLOCK ================= */}
      <div className='max-w-[1200px] w-full px-6 flex flex-col items-center text-center mb-10 md:mb-14'>
        <h2
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
            fontSize: '34px',
            lineHeight: '1.2',
            color: '#000000',
          }}
          className='mb-6 text-center'
        >
          Our Solution
        </h2>

        <h3
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
            fontSize: '26px',
            lineHeight: '32px',
            color: '#1D2530',
          }}
          className='mb-3'
        >
          Custom Domo Application
        </h3>

        <p
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 400,
            fontSize: '18px',
            lineHeight: '26px',
            color: '#676F7E',
          }}
          className='max-w-[750px]'
        >
          GWC designed and delivered a custom Domo app tailored to HY24's needs
        </p>
      </div>

      {/* ================= CONTENT WORKSPACE LAYER ================= */}
      <div className='max-w-[1200px] w-full px-4 md:px-6 relative flex justify-center flex-col gap-10'>
        {/* Five Asymmetric Solution Cards Responsive Grid (3 per row on desktop) */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center lg:justify-items-start w-full lg:max-w-[100%] z-10 relative'>
          {solutionCards.map((card, idx) => (
            <div
              key={idx}
              className='p-6 flex flex-col justify-start transition-transform hover:scale-[1.01] w-full max-w-[368px]'
              style={{
                height: '170px',
                borderRadius: '12px',
                borderWidth: '1px 1px 1px 4px',
                borderStyle: 'solid',
                borderColor: '#DADFE7',
                borderLeftColor: '#1DC928',
                background: '#FFFFFF',
                boxShadow: '8px 4px 14px rgba(0, 0, 0, 0.01)',
              }}
            >
              {/* Card Header Title and Circle Icon Wrap */}
              <div className='flex items-center gap-3 mb-4'>
                <div
                  className='flex items-center justify-center rounded-xl shrink-0'
                  style={{
                    width: '38px',
                    height: '38px',
                    background: '#18B762BF',
                  }}
                >
                  {card.icon}
                </div>

                <h4
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 700,
                    color: '#1D2530',
                  }}
                  className='text-[16px] leading-[22px]'
                >
                  {card.title}
                </h4>
              </div>

              {/* Card Core Descriptive Body Text */}
              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 400,
                  color: '#676F7E',
                }}
                className='text-[14px] leading-[22px]'
              >
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Workspace: Highlights Block & Absolute Image Arrangement */}
        <div className='w-full flex flex-col lg:flex-row items-end gap-8 mt-4 relative min-h-[310px]'>
          {/* Left Block: Solution Highlights Container Deck */}
          <div
            className='w-full max-w-full lg:max-w-[830px] p-6 md:p-8 flex flex-col border border-[#DADFE7]/60'
            style={{
              borderRadius: '16px',
              background:
                'linear-gradient(135deg, rgba(29, 172, 201, 0.03) 0%, rgba(40, 189, 102, 0.03) 100%), #FFFFFF',
            }}
          >
            <h4
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                color: '#1D2530',
              }}
              className='mb-5 text-[22px] tracking-tight'
            >
              Solution Highlights
            </h4>

            {/* Bullets List Grid Section */}
            <div className='flex flex-col gap-3.5'>
              {highlights.map((text, index) => (
                <div key={index} className='flex items-start gap-3'>
                  {/* Styled Nested Custom Bullet Ring Vector */}
                  <div className='w-4 h-4 rounded-full border-[3.5px] border-[#1DC928] flex-shrink-0 bg-white mt-1' />

                  <span
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 400,
                      color: '#1D2530',
                    }}
                    className='text-[16px] leading-[22px]'
                  >
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Block: Fixed Absolute Drone Landscape Image Asset View */}
          <div
            className='absolute hidden lg:block z-20'
            style={{
              width: '441px',
              height: '294px',
              bottom: '190px',
              right: '-72px',
              opacity: 0.92,
            }}
          >
            <Image
              src='/images/Templates/templatez/rtportfolio/solution.png'
              alt='Hydrogen processing field plant infrastructure layout preview'
              fill
              priority
              style={{ borderRadius: '33px' }}
              className='object-cover shadow-lg border border-white/20'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
