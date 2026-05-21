'use client';

import { BarChart3, LayoutGrid, Plug, RefreshCw, Sparkles } from 'lucide-react';
import Image from 'next/image';

const solutionSteps = [
  {
    title: 'Centralized Reporting in Domo',
    description: 'A single reporting hub built in Domo, replacing fragmented spreadsheets.',
    icon: <LayoutGrid size={22} strokeWidth={2} />,
  },
  {
    title: 'Native Platform Connectors',
    description: 'Seamless data ingestion from every marketing platform — no code required.',
    icon: <Plug size={22} strokeWidth={2} />,
  },
  {
    title: 'Magic ETL for Data Cleaning',
    description: 'Automated data transformation to clean, normalize, and combine channel data.',
    icon: <Sparkles size={22} strokeWidth={2} />,
  },
  {
    title: 'Interactive Cross-Channel Dashboards',
    description: 'Drill-down dashboards for blended and per-channel performance insights.',
    icon: <BarChart3 size={22} strokeWidth={2} />,
  },
  {
    title: 'Automated Data Refresh',
    description: 'Scheduled data pipelines eliminate all manual data pulls and updates.',
    icon: <RefreshCw size={22} strokeWidth={2} />,
  },
];

export default function SolutionSection() {
  return (
    <section
      className="relative w-full font-['Poppins'] bg-white overflow-hidden"
      style={{
        paddingTop: '40px',
        paddingBottom: '80px',
        marginTop: '-20px',
      }}
    >
      <div className='max-w-7xl mx-auto px-4 relative z-10'>
        {/* Section Title */}
        <h2 className='text-[28px] md:text-[32px] font-semibold tracking-[1.4px] text-center mb-12'>
          The Solution
        </h2>

        <div className='flex flex-col lg:flex-row items-start justify-center lg:justify-start'>
          {/* Steps & Connectors */}
          <div className='relative flex flex-col gap-0 lg:pl-32 w-full lg:w-auto items-center lg:items-start'>
            {solutionSteps.map((step, index) => (
              <div
                key={index}
                className='relative flex items-center mb-[18px] last:mb-0 w-full max-w-[630px] lg:max-w-none'
              >
                {/* Vertical Connector Line - Hidden on very small screens if necessary, but kept for design consistency */}
                {index !== solutionSteps.length - 1 && (
                  <div
                    className='absolute left-[22px] top-[44px] w-[2px] bg-[#0565EE]'
                    style={{ height: 'calc(100% - 22px)' }}
                  />
                )}

                {/* Icon Box */}
                <div
                  className='flex-shrink-0 w-11 h-11 rounded-xl bg-[#0846AA]/20 flex items-center justify-center z-10'
                  style={{ boxShadow: '0px 1px 3px 0px rgba(29, 37, 48, 0.06)' }}
                >
                  <div className='text-[#0565EE]'>{step.icon}</div>
                </div>

                {/* Card - Width is fixed on LG but auto on Mobile/Tab for responsiveness */}
                <div
                  className='ml-4 md:ml-6 bg-white border-[1px] border-[#0565EE] rounded-[10px] px-4 md:px-6 flex flex-col justify-center shadow-sm flex-grow'
                  style={{
                    width: '100%',
                    maxWidth: '630px',
                    minHeight: '78px',
                    borderTopWidth: '1.5px',
                  }}
                >
                  <h4 className='text-[16px] md:text-[18px] font-semibold text-[#0F1729]/80 leading-tight mb-1 md:mb-2'>
                    {step.title}
                  </h4>
                  <p className='text-[12px] md:text-[14px] font-normal text-[#1E2B3D] leading-tight opacity-90'>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RE-POSITIONED IMAGE CONTAINER - Hidden on mobile/tab to prevent layout breaking */}
      <div
        className='hidden lg:block absolute'
        style={{
          width: '765px',
          height: '428px',
          right: '-250px',
          top: '25px',
          borderRadius: '29px',
          overflow: 'hidden',
          zIndex: 20,
        }}
      >
        <div className='relative w-full h-full scale-x-[-1]'>
          <Image
            src='/images/Templates/templatez/z2sol.png'
            alt='Solution Visualization'
            fill
            className='object-cover'
            priority
          />
        </div>
      </div>
    </section>
  );
}
