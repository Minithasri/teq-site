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
    <section className='relative w-full overflow-hidden bg-[#F3F4F6] py-16 md:py-24'>
      {/* Background Image Container */}
      <div className='absolute inset-x-0 bottom-0 top-[280px] md:top-[320px] lg:top-[220px] z-0 overflow-hidden'>
        <Image
          src='/images/Templates/templatez/salesintelligence/sisol.png'
          alt='Solution Background'
          fill
          className='object-cover opacity-60 scale-105'
        />
        <div className='absolute inset-0 bg-black/10' />
      </div>

      {/* Main Content Wrapper */}
      <div className='relative z-20 w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24'>
        {/* Header Section */}
        <div className='w-full mb-10 text-left'>
          <h2 className='text-2xl md:text-3xl font-bold mb-4 tracking-wide text-[#262626]'>
            Our Solution
          </h2>
          <h3 className='text-md md:text-lg lg:text-xl font-semibold text-[#0F1729] max-w-4xl'>
            A structured approach to rebuild reporting integrity from the ground up
          </h3>
        </div>

        {/* Solution Cards Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 pt-24 w-full'>
          {solutions.map((item, index) => (
            <div
              key={index}
              className='relative bg-white rounded-2xl border border-gray-200 shadow-md p-6 md:p-8 lg:pl-28 transition-all duration-300 hover:shadow-lg min-h-[160px] flex flex-col justify-center'
            >
              {/* Icon Container */}
              <div className='mb-6 lg:mb-0 lg:absolute lg:left-8 lg:top-1/2 lg:-translate-y-1/2 flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#034BE1] to-[#022DA1] flex-shrink-0'>
                {item.icon}
              </div>

              <h4 className='text-xl md:text-2xl font-semibold text-[#020FFE] mb-3'>
                {item.title}
              </h4>

              <p className='text-base text-gray-600 leading-relaxed'>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
