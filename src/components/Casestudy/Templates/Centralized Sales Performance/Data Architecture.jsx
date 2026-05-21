'use client';

import React from 'react';

export default function DataArchitecture() {
  const sources = [
    { title: 'Shopify', sub: 'Ecommerce' },
    { title: 'POS Systems', sub: 'In-store' },
    { title: 'Google Sheets', sub: 'Spreadsheets' },
  ];

  return (
    <section className="w-full mt-[-90px] py-20 bg-white font-['Poppins'] overflow-hidden">
      <div className='max-w-7xl mx-auto px-4'>
        {/* Header - Replicated from requirements */}
        <div className='text-center mb-20'>
          <h2
            style={{
              fontSize: '32px',
              fontWeight: 600,
              letterSpacing: '1.4px',
              transform: 'rotate(-0.32deg)', // Exactly -0.32 deg from requirements
            }}
          >
            Data Architecture
          </h2>
        </div>

        {/* Diagram Container */}
        <div className='flex flex-col md:flex-row items-center justify-center gap-0 relative'>
          {/* 1. SOURCE COLUMN */}
          <div className='flex flex-col gap-4'>
            {sources.map((source, idx) => (
              <div
                key={idx}
                className='w-[220px] h-[120px] border-2 border-[#F5F5F5] rounded-xl flex flex-col items-center justify-center bg-white shadow-[0px_8px_22px_rgba(0,0,0,0.08)]'
              >
                <h3 className='text-[22px] font-bold text-[#1D2530]'>{source.title}</h3>
                <p className='text-[14px] font-semibold text-[#1D2530] mt-1'>{source.sub}</p>
              </div>
            ))}
          </div>

          {/* ETL CONNECTOR */}
          <div className='flex flex-col items-center justify-center px-10 relative'>
            <span className='text-[18px] font-bold text-[#1D2530] mb-2'>ETL</span>
            <div className='w-[120px] h-[1px] bg-[#94A3B8]'></div>
          </div>

          {/* 2. UNIFIED DATA MODEL (The Center Piece) */}
          <div className='w-[320px] h-[160px] border-2 border-[#F5F5F5] rounded-xl flex flex-col items-center justify-center bg-white shadow-[0px_8px_22px_rgba(0,0,0,0.08)]'>
            <h3 className='text-[24px] font-bold text-[#1D2530]'>Unified Data Model</h3>
            <p className='text-[14px] font-semibold text-[#1D2530] mt-2'>Standardized KPIs</p>
          </div>

          {/* API CONNECTOR */}
          <div className='flex flex-col items-center justify-center px-10 relative'>
            <span className='text-[18px] font-bold text-[#1D2530] mb-2'>API</span>
            <div className='w-[120px] h-[1px] bg-[#94A3B8]'></div>
          </div>

          {/* 3. DOMO DASHBOARDS (The End Goal) */}
          <div className='w-[320px] h-[160px] border-2 border-[#F5F5F5] rounded-xl flex flex-col items-center justify-center shadow-[0px_8px_22px_rgba(0,0,0,0.08)]'>
            <h3 className='text-[24px] font-bold'>Domo Dashboards</h3>
            <p className='text-[14px] font-semibold text-[#1D2530] mt-2'>Real-time & Drill-down</p>
          </div>
        </div>
      </div>
    </section>
  );
}
