'use client';

import { Lightbulb, FileText, BarChart3, Database, Layers, Zap } from 'lucide-react';
import Image from 'next/image';

const solutionCards = [
  {
    title: 'Data Validation Reports',
    description: 'Built logic to ensure data accuracy across systems',
    icon: <FileText size={20} className='text-[#3B82F6]' />,
  },
  {
    title: 'Executive Summaries',
    description: 'Delivered leadership-focused insights with key KPIs',
    icon: <BarChart3 size={20} className='text-[#3B82F6]' />,
  },
  {
    title: 'Sales Dashboards',
    description: 'Provided real-time sales trends with drill-down capabilities',
    icon: <Database size={20} className='text-[#3B82F6]' />,
  },
  {
    title: 'Unified Reporting Layer',
    description: 'Consolidated sales data from multiple sources into a single source of truth',
    icon: <Layers size={20} className='text-[#3B82F6]' />,
  },
  {
    title: 'Automation',
    description: 'Reduced manual reporting with automated refresh cycles',
    icon: <Zap size={20} className='text-[#3B82F6]' />,
  },
];

export default function SolutionSection() {
  return (
    <section
      className='w-full relative overflow-hidden flex flex-col items-center select-none px-4 sm:px-6'
      style={{
        minHeight: '850px',
        background:
          'linear-gradient(135deg, rgba(60, 131, 246, 0.05) 0%, rgba(13, 162, 231, 0.05) 100%)',
        paddingTop: '50px',
        paddingBottom: '30px',
      }}
    >
      {/* Header Context Section */}
      <div className='max-w-[1440px] w-full flex flex-col items-center text-center mb-10 sm:mb-12 md:mb-14'>
        {/* Lightbulb Badge */}
        <div
          className='flex items-center justify-center mb-4'
          style={{
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            background: '#0DA2E71A',
          }}
        >
          <Lightbulb size={20} className='text-[#0DA2E7]' />
        </div>

        {/* Main Header */}
        <h2
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
            lineHeight: '120%',
            color: '#0F172A',
          }}
          className='mb-3 sm:mb-4 tracking-tight text-[28px] sm:text-[30px] md:text-[34px]'
        >
          GWC's Solution
        </h2>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 400,
            color: '#64748B',
          }}
          className='m-0 text-[18px] sm:text-[20px] md:text-[22px] leading-[26px]'
        >
          Validated Sales Performance Reporting Framework
        </p>
      </div>

      {/* Main Layout */}
      <div className='max-w-[1300px] w-full relative flex flex-col items-center'>
        {/* Top Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 w-full mb-5 sm:mb-6 z-10'>
          {solutionCards.slice(0, 3).map((card, idx) => (
            <div
              key={idx}
              className='bg-white p-5 sm:p-6 flex flex-col justify-start'
              style={{
                minHeight: '190px',
                borderRadius: '12px',
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.01), 0px 2px 6px rgba(0, 0, 0, 0.02)',
                border: '1px solid #F1F5F9',
              }}
            >
              <div className='flex items-start gap-3 sm:gap-4 mb-3'>
                <div
                  className='flex items-center justify-center rounded-lg shrink-0'
                  style={{
                    width: '42px',
                    height: '42px',
                    background: '#EFF6FF',
                  }}
                >
                  {card.icon}
                </div>

                <h4
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 700,
                    lineHeight: '26px',
                    color: '#0F172A',
                  }}
                  className='tracking-tight pt-1 text-[20px] sm:text-[22px] md:text-[24px] w-full md:w-[60%]'
                >
                  {card.title}
                </h4>
              </div>

              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 400,
                  color: '#64748B',
                }}
                className='m-0 pl-[54px] text-[15px] sm:text-[16px] md:text-[18px] leading-[21px] sm:leading-[22px]'
              >
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 w-full z-10'>
          {solutionCards.slice(3, 5).map((card, idx) => (
            <div
              key={idx + 3}
              className='bg-white p-5 sm:p-6 flex flex-col justify-start'
              style={{
                minHeight: '190px',
                borderRadius: '12px',
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.01), 0px 2px 6px rgba(0, 0, 0, 0.02)',
                border: '1px solid #F1F5F9',
              }}
            >
              <div className='flex items-start gap-3 sm:gap-4 mb-3'>
                <div
                  className='flex items-center justify-center rounded-lg shrink-0'
                  style={{
                    width: '40px',
                    height: '40px',
                    background: '#EFF6FF',
                  }}
                >
                  {card.icon}
                </div>

                <h4
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 700,
                    lineHeight: '26px',
                    color: '#0F172A',
                  }}
                  className='tracking-tight pt-1 text-[20px] sm:text-[22px] md:text-[24px]'
                >
                  {card.title}
                </h4>
              </div>

              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 400,
                  color: '#64748B',
                }}
                className='m-0 pl-[54px] text-[15px] sm:text-[16px] md:text-[18px] leading-[21px] sm:leading-[22px]'
              >
                {card.description}
              </p>
            </div>
          ))}

          {/* Right Side Image */}
          <div className='relative w-full h-[190px] hidden lg:flex justify-center items-end'>
            <div
              className='absolute'
              style={{
                width: '180px',
                height: '240px',
                bottom: '-40px',
                right: '40px',
                transform: 'scaleX(-1)',
              }}
            >
              <Image
                src='/images/Templates/templatez/drivingsales/solution.png'
                alt='Transformation Growth Visual Representative'
                fill
                priority
                className='object-contain'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
