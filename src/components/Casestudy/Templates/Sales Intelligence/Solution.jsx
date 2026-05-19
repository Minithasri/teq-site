'use client';

import { CheckCircle2, GitBranch, LayoutGrid, Search } from 'lucide-react';
import Image from 'next/image';

const solutions = [
  {
    title: 'Strategic Assessment',
    description:
      'Conducted a deep-dive into the existing ETL and reporting framework to identify logic gaps and misaligned time-based calculations.',
    icon: <Search size={24} className='text-white' />,
  },
  {
    title: 'Time-Intelligence Standardization',
    description:
      'Designed and implemented a standardized time-intelligence model covering YOY, MOM, WOW, LY, vLY, and forecast metrics.',
    icon: <GitBranch size={24} className='text-white' />,
  },
  {
    title: 'Customer Segmentation Optimization',
    description:
      'Improved customer segmentation logic to enable more granular and actionable insights across sales channels.',
    icon: <LayoutGrid size={24} className='text-white' />,
  },
  {
    title: 'Reporting Workflow Enhancement',
    description:
      'Optimized reporting workflows to enhance dashboard clarity, reliability, and speed of delivery.',
    icon: <CheckCircle2 size={24} className='text-white' />,
  },
];

export default function SolutionSection() {
  return (
    <section
      className="relative mt-[-70px] overflow-hidden font-['Poppins'] flex flex-col items-center"
      style={{
        width: '100%',
        height: '648px',
        background: 'rgba(243, 244, 246, 1)',
      }}
    >
      {/* 4. Background Image Container */}
      <div
        className='absolute z-0 overflow-hidden'
        style={{
          width: '100%',
          height: '430px',
          top: '180px',
          borderRadius: '33px',
        }}
      >
        <Image
          src='/images/Templates/templatez/salesintelligence/sisol.png'
          alt='Solution Background'
          fill
          className='object-cover opacity-60 scale-105'
        />
        <div className='absolute inset-0 bg-black/10' />
      </div>

      {/* Main Content Wrapper */}
      <div className='relative z-20 w-full max-w-[1420px] pt-[60px] px-4 flex flex-col items-center'>
        {/* Header Section Aligned to Grid Start */}
        <div className='w-full mb-[40px] text-left'>
          <h2
            className='font-semibold uppercase mb-[20px]'
            style={{
              fontSize: '36px',
              lineHeight: '1',
              letterSpacing: '1.4px',
              color: 'rgba(2, 15, 254, 1)',
            }}
          >
            Our Solution
          </h2>
          <h3
            className='font-semibold text-[#0F1729]'
            style={{
              fontSize: '30px',
              lineHeight: '1.2',
            }}
          >
            A structured approach to rebuild reporting integrity from the ground up
          </h3>
        </div>

        {/* 5. Solution Cards Grid - Perfectly Centered */}
        <div className='grid grid-cols-2 gap-y-[20px] gap-x-[40px] mt-[24px] w-full'>
          {solutions.map((item, index) => (
            <div
              key={index}
              className='relative bg-white flex flex-col justify-center'
              style={{
                width: '700px',
                height: '180px',
                borderRadius: '12px',
                border: '1px solid rgba(229, 231, 235, 1)',
                boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)',
                paddingLeft: '100px',
                paddingRight: '40px',
              }}
            >
              {/* Icon Container */}
              <div
                className='absolute left-[33px] top-[33px] flex items-center justify-center'
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #034BE1, #022DA1)',
                }}
              >
                {item.icon}
              </div>

              <h4
                className='font-semibold text-[#020FFE] mb-2'
                style={{
                  fontSize: '24px',
                  lineHeight: '1.1',
                }}
              >
                {item.title}
              </h4>

              <p
                className='font-regular text-[#4B5563]'
                style={{
                  fontSize: '16px',
                  lineHeight: '1.4',
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
