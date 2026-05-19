'use client';

import { Database, Gauge, Network } from 'lucide-react';
import Image from 'next/image';

export default function TechnologyStack() {
  const stackItems = [
    {
      title: 'Domo',
      description: 'Dashboards & visualization',
      icon: <Gauge size={24} className='text-[#1162D4]' />,
    },
    {
      title: 'Shopify/ POS/\nGoogle Sheets',
      description: 'Sales data integration',
      icon: <Database size={24} className='text-[#1162D4]' />,
    },
    {
      title: 'ETL Tools',
      description: 'Automation pipelines',
      icon: <Network size={24} className='text-[#1162D4]' />,
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-4 flex flex-col items-center font-['Poppins'] select-none">
      <div className='w-full max-w-[1152px] mx-auto flex flex-col items-center min-h-[362px]'>
        {/* ================= HEADER SECTIONS ================= */}
        <div className='text-center mb-6'>
          <h2 className='font-bold text-[34px] leading-[48px] text-[#1D2530] mb-5'>
            Technology Stack
          </h2>
          <p className='font-normal text-[22px] leading-[28px] text-[#7B899D]'>
            Enterprise-grade tools for reliable, scalable performance
          </p>
        </div>

        {/* ================= LOGO ROW LAYOUT ================= */}
        <div className='flex items-center justify-center gap-10 md:gap-14 mb-14 flex-wrap'>
          <div className='relative w-[110px] h-[60px]'>
            <Image
              src='/images/Templates/templatez/titan22/domo.svg
              '
              alt='Domo Logo'
              fill
              className='object-contain'
              priority
            />
          </div>
          <div className='relative w-[150px] h-[60px]'>
            <Image
              src='/images/Templates/templatez/tcshopify.png'
              alt='Shopify Logo'
              fill
              className='object-contain'
              priority
            />
          </div>
          <div className='relative w-[76px] h-[80px]'>
            <Image
              src='/images/Templates/templatez/titan22/xl.svg'
              alt='Google Sheets Logo'
              fill
              className='object-contain'
              priority
            />
          </div>
          <div className='relative w-[105px] h-[72px]'>
            <Image
              src='/images/Templates/templatez/jamm/jammetl.svg'
              alt='ETL Tools Logo'
              fill
              className='object-contain'
              priority
            />
          </div>
        </div>

        {/* ================= HORIZONTAL CARD MATRIX GRID ================= */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full justify-items-center'>
          {stackItems.map((item, index) => (
            <div
              key={index}
              className='relative overflow-hidden w-full max-w-[363px] h-[167px] rounded-[16px] border border-[#DADFE7] p-6 flex flex-col justify-center items-start shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] transition-all duration-200'
              style={{
                background: 'linear-gradient(135deg, #FFFFFF 0%, #F3F4F7 100%)',
              }}
            >
              {/* Top-right decorative background light blue circle */}
              <div className='absolute w-[128px] h-[128px] rounded-full bg-[#1162D4] opacity-[0.05] -top-[31px] -right-[24px] pointer-events-none z-0' />

              <div className='relative z-10 flex flex-col gap-3 w-full'>
                {/* Header Row: Rounded Icon Wrapper + Title Text */}
                <div className='flex items-center gap-4'>
                  <div className='w-[48px] h-[48px] rounded-[12px] bg-[#1162D4]/10 flex items-center justify-center shrink-0'>
                    {item.icon}
                  </div>
                  <h3 className='text-[20px] lg:text-[22px] font-bold text-[#1D2530] whitespace-pre-line leading-[115%]'>
                    {item.title}
                  </h3>
                </div>

                {/* Sub-text description box context */}
                <p className='text-[15px] lg:text-[16px] font-normal text-[#7B899D] leading-[24px]'>
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
