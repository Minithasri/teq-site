'use client';

import { BarChart3, Database, Network } from 'lucide-react';
import Image from 'next/image';

export default function TechnologyStack() {
  const stackItems = [
    {
      title: 'Domo (Custom App)',
      description: 'Analytics & Visualization',
      icon: <BarChart3 size={28} className='text-white' />,
    },
    {
      title: 'SQL / Asset Systems',
      description: 'Data Integration',
      icon: <Database size={26} className='text-white' />,
    },
    {
      title: 'ETL Pipelines',
      description: 'Automation of Data Refresh Cycles',
      icon: <Network size={26} className='text-white' />,
    },
  ];

  return (
    <section className="w-full bg-white py-12 md:py-16 px-4 flex flex-col items-center font-['Poppins'] select-none">
      <div className='w-full max-w-[1200px] mx-auto flex flex-col items-center'>
        {/* ================= 1. HEADER TITLE SECTION ================= */}
        <h2
          className='text-[34px] font-bold text-[#1D2530] text-center mb-8'
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Technology Stack
        </h2>

        {/* ================= 2. CENTRALIZED LOGO ROW ================= */}
        <div className='flex flex-wrap items-center justify-center gap-6 md:gap-14 mb-10 w-full max-w-full px-2'>
          {/* Domo Corporate Branding Logo */}
          <div className='relative w-[100px] h-[53px] md:w-[121px] md:h-[64px] shrink-0'>
            <Image
              src='/images/Templates/style_union/unionsvg20.svg'
              alt='Domo Corporate Platform Branding Logo'
              fill
              className='object-cover'
              priority
            />
          </div>

          {/* SQL Server Asset Database Logo Container */}
          <div className='relative w-[85px] h-[52px] md:w-[105px] md:h-[50px] shrink-0'>
            <Image
              src='/images/Templates/templatez/rtportfolio/sql.svg'
              alt='SQL Distributed Server Relational Database Engine Asset'
              fill
              className='object-contain'
              priority
            />
          </div>

          {/* ETL Flow Nodes Automation Diagram Logo */}
          <div className='relative w-[85px] h-[52px] md:w-[105px] md:h-[58px] shrink-0'>
            <Image
              src='/images/Templates/templatez/rtportfolio/etl.svg'
              alt='Extract Transform Load Flow Pipeline Grid Layout'
              fill
              className='object-contain'
              priority
            />
          </div>
        </div>

        {/* ================= 3. TECHNOLOGY COMPONENT CARD GRID ================= */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center w-full gap-6 lg:gap-8'>
          {stackItems.map((item, index) => (
            <div
              key={index}
              className='bg-white flex flex-col items-center justify-center p-8 w-full max-w-[380px] h-[240px] rounded-[12px] border border-[#DADFE7] shadow-sm mx-auto text-center'
            >
              {/* Central Dynamic Color Stop Circle Gradient Badge Wrapper */}
              <div
                className='flex items-center justify-center rounded-full shrink-0 mb-5 shadow-sm'
                style={{
                  width: '64px',
                  height: '64px',
                  background: 'linear-gradient(135deg, #1DACC9 0%, #28BD66 100%)',
                }}
              >
                {item.icon}
              </div>

              {/* Technical Node Component Title Header */}
              <h3
                className='text-[22px] leading-[26px] font-bold text-[#1D2530] mb-2'
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {item.title}
              </h3>

              {/* Functional Process Description Metadata Subtext */}
              <p
                className='text-[16px] leading-[22px] text-[#676F7E]'
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
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
