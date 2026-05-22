'use client';

import { LayoutGrid, Users, Database, Layers, BarChart3 } from 'lucide-react';
import Image from 'next/image';

const solutions = [
  {
    step: 'STEP 01',
    title: 'Executive Dashboard',
    description: 'High-level KPIs for leadership with real-time operational overview.',
    icon: <LayoutGrid size={22} className='text-white' />,
  },
  {
    step: 'STEP 02',
    title: 'Productivity Dashboard',
    description: 'Workforce tracking with task completion and performance metrics.',
    icon: <Users size={22} className='text-white' />,
  },
  {
    step: 'STEP 03',
    title: 'Integrated Data Sources',
    description: 'MySQL and Domo connectors unifying disparate data streams.',
    icon: <Database size={22} className='text-white' />,
  },
  {
    step: 'STEP 04',
    title: 'Unified Reporting Layer',
    description: 'Operational and financial reporting in a single unified view.',
    icon: <Layers size={22} className='text-white' />,
  },
  {
    step: 'STEP 05',
    title: 'Advanced Visualizations',
    description: 'Hours worked, cost performance, and trend analysis at a glance.',
    icon: <BarChart3 size={22} className='text-white' />,
  },
];

export default function SolutionSection() {
  return (
    <section
      className='relative flex flex-col items-center overflow-hidden pt-[40px] md:pt-[60px] pb-[50px]'
      style={{
        width: '100%',
        minHeight: '100vh', // Changed to vh for better responsiveness
        background:
          'linear-gradient(180deg, rgba(252, 251, 249, 1) 0%, rgba(158, 195, 232, 0.5) 18.22%, rgba(255, 255, 255, 1) 100%)',
      }}
    >
      {/* Background Image Container */}
      <div
        className='absolute z-0 pointer-events-none w-full h-full opacity-[0.08]'
        style={{ top: '40px' }}
      >
        <Image
          src='/images/Templates/templatez/rtwrokforce/rtsol.png'
          alt='Solution Background'
          fill
          className='object-contain object-center'
        />
      </div>

      {/* Main Content Wrapper */}
      <div className='relative z-20 w-full max-w-[1200px] flex flex-col items-center px-6'>
        {/* Header Section */}
        <div className='text-center mb-[30px] md:mb-[50px]'>
          <h2
            className='font-bold mb-[10px] text-[28px] md:text-[36px]'
            style={{
              fontFamily: 'Inter, sans-serif',
              letterSpacing: '1.4px',
              color: '#262626',
            }}
          >
            The Solution
          </h2>

          <h3
            className='font-bold text-[#1D2530] mb-[20px] text-[18px] md:text-[20px]'
            style={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
            }}
          >
            Centralized Real-Time Intelligence
          </h3>

          <p
            className='max-w-[900px] mx-auto text-[#4F555C] font-semibold text-[16px] md:text-[18px] leading-relaxed'
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            A centralized real-time dashboard solution was built to unify operational and financial
            data, enabling effective monitoring of task completion, workforce productivity, and cost
            performance.
          </p>
        </div>

        {/* Solution Cards - Vertical Stack */}
        <div className='flex flex-col gap-[15px] items-center w-full'>
          {solutions.map((item, index) => (
            <div
              key={index}
              className='bg-white flex flex-col sm:flex-row items-center sm:items-start p-[20px] md:p-[25px] w-full max-w-[768px]'
              style={{
                borderRadius: '12px',
                border: '1px solid #F5F5F5',
                boxShadow: '0px 1px 2px -1px rgba(29, 37, 48, 0.04)',
                backdropFilter: 'blur(4px)',
              }}
            >
              {/* Icon Container */}
              <div
                className='flex items-center justify-center shrink-0 mb-4 sm:mb-0 sm:mr-5'
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  background: '#4F4AF7',
                  boxShadow: '10px 4px 15px rgba(255, 67, 67, 0.05)',
                }}
              >
                {item.icon}
              </div>

              {/* Text Content */}
              <div className='flex flex-col text-center sm:text-left'>
                <span
                  className='font-bold text-[#4F4AF7] text-[10px] md:text-[12px] mb-1'
                  style={{ letterSpacing: '0.5px' }}
                >
                  {item.step}
                </span>
                <h4
                  className='font-bold text-[#262626] text-[18px] md:text-[20px] leading-tight mb-1'
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {item.title}
                </h4>
                <p
                  className='text-[#4F555C] font-medium text-[14px] md:text-[16px] lg:text-[20px] leading-snug'
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
