'use client';

import { BarChart3, Calendar, DollarSign, Target, TrendingUp } from 'lucide-react';

import Image from 'next/image';

export default function BusinessImpact() {
  return (
    <section
      className='relative w-full overflow-hidden flex flex-col items-center py-10 px-4 md:py-16 select-none'
      style={{
        backgroundColor: '#161B30',
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
        backgroundPosition: '-100px -10px',
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* ===== BACKGROUND IMAGE ===== */}
      <div className='absolute inset-0 pointer-events-none z-0 overflow-hidden'>
        <Image
          src='/images/Templates/templatez/jamm/jammbi.png'
          alt='Business impact background graphic'
          fill
          priority
          className='object-cover opacity-80'
        />
      </div>

      <div className='w-full max-w-[1368px] z-10 flex flex-col gap-6'>
        {/* Main Section Header */}
        <h2 className='w-full text-center text-white text-[28px] md:text-[32px] font-bold tracking-wide mb-2'>
          Business Impact
        </h2>

        {/* 1. OPERATIONAL IMPACT CONTAINER */}
        <div
          className='w-full flex flex-col p-5 sm:p-8 border'
          style={{
            minHeight: '304px',
            borderRadius: '16px',
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            borderColor: '#DCDFE5',
          }}
        >
          {/* Section Title Header Block */}
          <div className='flex items-center gap-3 mb-6'>
            <div
              className='flex items-center justify-center text-white shrink-0'
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '12px',
                backgroundColor: '#6249DF',
              }}
            >
              <svg
                width='18'
                height='18'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <polygon points='13 2 3 14 12 14 11 22 21 10 12 10 13 2'></polygon>
              </svg>
            </div>

            <h3
              className='text-[22px] md:text-[26px] font-bold text-[#21242C]'
              style={{
                fontFamily: 'Poppins',
                lineHeight: '32px',
              }}
            >
              Operational Impact
            </h3>
          </div>

          {/* Inner Cards Row */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full mt-auto'>
            {/* Card 1 */}
            <div
              className='bg-white border p-6 md:p-8 flex flex-col justify-center md:justify-start gap-3 md:gap-4 relative shadow-sm h-[130px] md:h-[178px]'
              style={{
                borderRadius: '12px',
                borderColor: '#DCDFE5',
              }}
            >
              <div className='flex justify-between items-center w-full'>
                <div className='flex items-center gap-3 md:gap-4'>
                  <div className='p-2 bg-[#6249DF]/10 text-[#6249DF] rounded-xl shrink-0'>
                    <Calendar className='w-5 h-5 md:w-[22px] md:h-[22px]' />
                  </div>

                  <h4 className='text-[18px] md:text-[22px] font-bold tracking-tight text-[#0F1729]/80'>
                    Real-time
                  </h4>
                </div>

                <span className='text-emerald-500 text-2xl md:text-3xl font-bold leading-none select-none'>
                  ↑
                </span>
              </div>

              <p className='text-[#21242C]/70 text-[16px] md:text-[20px] font-medium pl-1 md:pl-5'>
                Reporting Cycle
              </p>
            </div>

            {/* Card 2 */}
            <div
              className='bg-white border p-6 md:p-8 flex flex-col justify-center md:justify-start gap-3 md:gap-4 relative shadow-sm h-[130px] md:h-[178px]'
              style={{
                borderRadius: '12px',
                borderColor: '#DCDFE5',
              }}
            >
              <div className='flex justify-between items-center w-full'>
                <div className='flex items-center gap-3 md:gap-4'>
                  <div className='p-2 bg-[#6249DF]/10 text-[#6249DF] rounded-xl shrink-0'>
                    <BarChart3 className='w-5 h-5 md:w-[22px] md:h-[22px]' />
                  </div>

                  <h4 className='text-[18px] md:text-[22px] font-bold tracking-tight text-[#0F1729]/80'>
                    Consistent
                  </h4>
                </div>

                <span className='text-emerald-500 text-2xl md:text-3xl font-bold leading-none select-none'>
                  ↑
                </span>
              </div>

              <p className='text-[#21242C]/70 text-[16px] md:text-[20px] font-medium pl-1 md:pl-5'>
                KPI Tracking
              </p>
            </div>

            {/* Card 3 */}
            <div
              className='bg-white border p-6 md:p-8 flex flex-col justify-center md:justify-start gap-3 md:gap-4 relative shadow-sm h-[130px] md:h-[178px]'
              style={{
                borderRadius: '12px',
                borderColor: '#DCDFE5',
              }}
            >
              <div className='flex justify-between items-center w-full'>
                <div className='flex items-center gap-3 md:gap-4'>
                  <div className='p-2 bg-[#6249DF]/10 text-[#6249DF] rounded-xl shrink-0'>
                    <TrendingUp className='w-5 h-5 md:w-[22px] md:h-[22px]' />
                  </div>

                  <h4 className='text-[18px] md:text-[22px] font-bold tracking-tight text-[#0F1729]/80'>
                    Improved
                  </h4>
                </div>

                <span className='text-emerald-500 text-2xl md:text-3xl font-bold leading-none select-none'>
                  ↑
                </span>
              </div>

              <p className='text-[#21242C]/70 text-[16px] md:text-[20px] font-medium pl-1 md:pl-5'>
                Decision Agility
              </p>
            </div>
          </div>
        </div>

        {/* 2. FINANCIAL IMPACT CONTAINER */}
        <div
          className='w-full flex flex-col p-5 sm:p-8 border backdrop-blur-sm'
          style={{
            minHeight: '194px',
            borderRadius: '16px',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            borderColor: '#DCDFE5',
          }}
        >
          <div className='flex items-center gap-3 mb-4'>
            <div
              className='flex items-center justify-center text-white shrink-0'
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '12px',
                backgroundColor: '#6249DF',
              }}
            >
              <DollarSign size={18} strokeWidth={2.5} />
            </div>

            <h3
              className='text-[22px] md:text-[26px] font-bold text-[#21242C]'
              style={{
                fontFamily: 'Poppins',
                lineHeight: '32px',
              }}
            >
              Financial Impact
            </h3>
          </div>

          <ul className='space-y-3 pl-1 text-[#21242C] text-[16px] md:text-[20px] font-medium opacity-90 list-none'>
            <li className='flex items-start gap-3'>
              <span className='w-2 h-2 rounded-full bg-black inline-block shrink-0 mt-2.5'></span>
              <span>Optimized event planning led to higher ticket sales and ROI</span>
            </li>

            <li className='flex items-start gap-3'>
              <span className='w-2 h-2 rounded-full bg-black inline-block shrink-0 mt-2.5'></span>
              <span>Improved talent allocation based on performance data</span>
            </li>
          </ul>
        </div>

        {/* 3. STRATEGIC IMPACT CONTAINER */}
        <div
          className='w-full flex flex-col p-5 sm:p-8 border backdrop-blur-sm'
          style={{
            minHeight: '194px',
            borderRadius: '16px',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            borderColor: '#DCDFE5',
          }}
        >
          <div className='flex items-center gap-3 mb-4'>
            <div
              className='flex items-center justify-center text-white shrink-0'
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '12px',
                backgroundColor: '#6249DF',
              }}
            >
              <Target size={18} strokeWidth={2.5} />
            </div>

            <h3
              className='text-[22px] md:text-[26px] font-bold text-[#21242C]'
              style={{
                fontFamily: 'Poppins',
                lineHeight: '32px',
              }}
            >
              Strategic Impact
            </h3>
          </div>

          <ul className='space-y-3 pl-1 text-[#21242C] text-[16px] md:text-[20px] font-medium opacity-90 list-none'>
            <li className='flex items-start gap-3'>
              <span className='w-2 h-2 rounded-full bg-black inline-block shrink-0 mt-2.5'></span>
              <span>Positioned as a data-driven entertainment company</span>
            </li>

            <li className='flex items-start gap-3'>
              <span className='w-2 h-2 rounded-full bg-black inline-block shrink-0 mt-2.5'></span>
              <span>
                Strengthened ability to attract and retain top talent with transparent performance
                metrics
              </span>
            </li>

            <li className='flex items-start gap-3'>
              <span className='w-2 h-2 rounded-full bg-black inline-block shrink-0 mt-2.5'></span>
              <span>Created a scalable framework for future events and digital engagement</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
