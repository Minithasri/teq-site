'use client';

import Image from 'next/image';

export default function TechnologyStack() {
  return (
    <section className="w-full bg-[#FAFBFC] py-12 md:py-16 px-4 sm:px-6 flex flex-col items-center font-['Poppins'] select-none">
      {/* Outer Border Card Shell matching your reference block layout */}
      <div
        className='w-full max-w-[1100px] mx-auto bg-white p-6 sm:p-8 md:p-12 flex flex-col items-center border border-[#E5E7EB]'
        style={{
          borderRadius: '16px',
          boxShadow: '0px 4px 20px -2px #0F17291A',
        }}
      >
        {/* ================= INLINE LOGO HEADER ROW ================= */}
        <div className='flex flex-wrap items-center justify-center gap-4 md:gap-4 mb-10 md:mb-12 w-full max-w-[950px]'>
          {/* Left Logos (Visualization) */}
          <div className='flex items-center gap-3 sm:gap-4'>
            <div className='relative w-[80px] sm:w-[100px] h-[45px] sm:h-[50px]'>
              <Image
                src='/images/Templates/templatez/realestate/domo.svg'
                alt='Domo Logo'
                fill
                className='object-contain'
                priority
              />
            </div>

            <div className='relative w-[60px] sm:w-[70px] h-[50px] sm:h-[55px]'>
              <Image
                src='/images/Templates/templatez/realestate/bi.svg'
                alt='Power BI Logo'
                fill
                className='object-contain'
                priority
              />
            </div>
          </div>

          {/* Core Title - Technology Stack */}
          <h2
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              lineHeight: '40px',
              letterSpacing: '-0.9px',
              color: '#0F1729',
            }}
            className='text-center min-w-[220px] sm:min-w-[280px] px-2 text-[28px] sm:text-[30px] md:text-[34px]'
          >
            Technology Stack
          </h2>

          {/* Right Logos (Integration & Automation) */}
          <div className='flex items-center gap-3 sm:gap-5'>
            <div className='relative w-[90px] sm:w-[110px] h-[40px] sm:h-[45px]'>
              <Image
                src='/images/Templates/templatez/realestate/sql.svg'
                alt='SQL Server Logo'
                fill
                className='object-contain'
                priority
              />
            </div>

            <div className='relative w-[80px] sm:w-[100px] h-[50px] sm:h-[55px]'>
              <Image
                src='/images/Templates/templatez/realestate/etl.svg'
                alt='ETL Pipelines Logo'
                fill
                className='object-contain'
                priority
              />
            </div>
          </div>
        </div>

        {/* ================= ASYMMETRIC STACK PILL ROW MATRIX ================= */}
        <div className='w-full flex flex-col items-center gap-5'>
          {/* Top Line: Two Columns centered */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-[800px]'>
            {/* Pill 1: Visualization */}
            <div
              className='flex items-center justify-start px-4 sm:px-6 py-4 border border-[#D3E0FC]'
              style={{
                background: '#C7D7FE',
                borderRadius: '12px',
                minHeight: '68px',
              }}
            >
              <div className='flex items-center gap-3'>
                <span className='w-2 h-2 rounded-full bg-[#EAB308] shrink-0' />

                <p className='text-[#0F1729] font-normal text-[15px] sm:text-[17px] tracking-tight'>
                  <strong className='font-semibold'>Power BI / Domo</strong> – Visualization
                </p>
              </div>
            </div>

            {/* Pill 2: Data Integration */}
            <div
              className='flex items-center justify-start px-4 sm:px-6 py-4 border border-[#D3E0FC]'
              style={{
                background: '#C7D7FE',
                borderRadius: '12px',
                minHeight: '68px',
              }}
            >
              <div className='flex items-center gap-3'>
                <span className='w-2 h-2 rounded-full bg-[#EAB308] shrink-0' />

                <p className='text-[#0F1729] font-normal text-[15px] sm:text-[17px] tracking-tight'>
                  <strong className='font-semibold'>SQL / ERP</strong> – data integration
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Line: Isolated Centered Automation Column */}
          <div className='w-full max-w-[800px] flex justify-center'>
            <div
              className='flex items-center justify-start px-4 sm:px-6 py-4 border border-[#D3E0FC] w-full max-w-[390px]'
              style={{
                background: '#C7D7FE',
                borderRadius: '12px',
                minHeight: '68px',
              }}
            >
              <div className='flex items-center gap-3'>
                <span className='w-2 h-2 rounded-full bg-[#EAB308] shrink-0' />

                <p className='text-[#0F1729] font-normal text-[15px] sm:text-[17px] tracking-tight'>
                  <strong className='font-semibold'>ETL Pipelines</strong> – Automation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
