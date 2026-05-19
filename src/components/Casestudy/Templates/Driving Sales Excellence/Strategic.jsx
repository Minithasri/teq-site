'use client';

import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const strategicRequirements = [
  { id: 1, text: 'Validate sales data accuracy before it reached business users' },
  { id: 2, text: 'Provide real-time sales performance dashboards for executives' },
  { id: 3, text: 'Summarize performance in leadership-ready executive reports' },
  { id: 4, text: 'Enable drill-down analysis into regions, products, and channels' },
  { id: 5, text: 'Build confidence in decision-making by ensuring data reliability' },
];

export default function StrategicRequirements() {
  return (
    <section
      className='relative w-full overflow-hidden flex flex-col items-center justify-start select-none px-4 sm:px-6 md:px-8 py-12 sm:py-14 md:py-16'
      style={{
        minHeight: '520px',
      }}
    >
      {/* Background Overlay */}
      <div className='absolute inset-0 z-0'>
        <Image
          src='/images/Templates/templatez/drivingsales/strategic.png'
          alt='Strategic Requirements Visual Asset Background'
          fill
          priority
          className='object-cover opacity-50 mix-blend-lighten'
        />
      </div>

      {/* Content Layer */}
      <div className='relative z-10 w-full max-w-[1440px] mx-auto flex flex-col items-center'>
        {/* Title */}
        <h2
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
            lineHeight: '120%',
            color: '#0F1729',
          }}
          className='text-center mb-8 sm:mb-10 md:mb-12 tracking-tight text-[28px] sm:text-[30px] md:text-[34px]'
        >
          Strategic Requirements
        </h2>

        {/* Grid Area */}
        <div className='w-full max-w-[1050px] flex flex-col items-center gap-5 sm:gap-6'>
          {/* Top Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 w-full'>
            {strategicRequirements.slice(0, 4).map(item => (
              <div
                key={item.id}
                className='bg-white flex items-center px-4 sm:px-5 md:px-6 py-4 sm:py-5 w-full'
                style={{
                  minHeight: '94px',
                  borderRadius: '12px',
                  boxShadow: '0px 10px 25px -5px rgba(0, 0, 0, 0.3)',
                }}
              >
                <div className='flex items-start gap-3 sm:gap-4 w-full'>
                  <CheckCircle2 size={22} className='text-[#3B82F6] shrink-0 mt-[2px]' />

                  <span
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 400,
                      color: '#1E293B',
                    }}
                    className='text-[15px] sm:text-[16px] md:text-[18px] leading-[21px] sm:leading-[22px]'
                  >
                    {item.text}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Center Card */}
          <div className='w-full md:max-w-[513px]'>
            <div
              className='bg-white flex items-center px-4 sm:px-5 md:px-6 py-4 sm:py-5 w-full'
              style={{
                minHeight: '94px',
                borderRadius: '12px',
                boxShadow: '0px 10px 25px -5px rgba(0, 0, 0, 0.3)',
              }}
            >
              <div className='flex items-start gap-3 sm:gap-4 w-full'>
                <CheckCircle2 size={22} className='text-[#3B82F6] shrink-0 mt-[2px]' />

                <span
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 400,
                    color: '#1E293B',
                  }}
                  className='text-[15px] sm:text-[16px] md:text-[18px] leading-[21px] sm:leading-[22px]'
                >
                  {strategicRequirements[4].text}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
