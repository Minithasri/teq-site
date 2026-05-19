'use client';

import { AlertCircle, BarChart3, Clock, Database, TrendingDown } from 'lucide-react';
import Image from 'next/image';

const challengeItems = [
  {
    description: 'Real estate operations tracked through disparate systems',
    icon: <Database size={22} className='text-[#EF4343]' />,
  },
  {
    description: 'No centralized view of sales, occupancy, and financial KPIs',
    icon: <BarChart3 size={22} className='text-[#EF4343]' />,
  },
  {
    description: 'Manual reporting delayed visibility into property performance',
    icon: <Clock size={22} className='text-[#EF4343]' />,
  },
  {
    description: 'Leadership lacked real-time insights into sales trends and occupancy rates',
    icon: <TrendingDown size={22} className='text-[#EF4343]' />,
  },
  {
    description: 'Difficulty identifying underperforming assets quickly',
    icon: <AlertCircle size={22} className='text-[#EF4343]' />,
  },
];

export default function Challenges() {
  return (
    <section
      className='w-full relative overflow-hidden flex flex-col items-center select-none'
      style={{
        minHeight: '727px',
        background: '#FFFFFF',
        paddingTop: '60px',
        paddingBottom: '20px',
      }}
    >
      {/* 6. Left Bottom Flipped House-in-Hand Graphic */}
      <div
        className='absolute bottom-20 left-[0] z-20 hidden xl:block'
        style={{
          width: '457px',
          height: '257px',
          opacity: 1,
          transform: 'scaleX(-1)',
        }}
      >
        <Image
          src='/images/Templates/templatez/realestate/challenge.png'
          alt='Real Estate Challenge Visual'
          width={457}
          height={257}
          priority
          className='object-contain'
        />
      </div>

      {/* Main Container */}
      <div className='max-w-[1200px] w-full px-4 sm:px-6 flex flex-col items-center z-10'>
        {/* 1. Header Title */}
        <h2
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
            lineHeight: '40px',
            letterSpacing: '-0.9px',
            color: '#0F1729',
          }}
          className='text-center mb-3 text-[28px] sm:text-[30px] md:text-[34px]'
        >
          The Challenge
        </h2>

        {/* 2. Subtitle Description Context */}
        <p
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 400,
            lineHeight: '28px',
            color: '#6B7280',
          }}
          className='text-center mb-10 md:mb-14 max-w-[1000px] text-[16px] sm:text-[18px] md:text-[22px]'
        >
          The Client faced multiple operational hurdles affecting their decision-making capabilities
        </p>

        {/* Dynamic Multi-Row Card Area matching the reference arrangement layout */}
        <div className='w-full flex flex-col items-center gap-6'>
          {/* Top Line: Cards 1, 2, and 3 */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center w-full max-w-[1140px]'>
            {challengeItems.slice(0, 3).map((card, idx) => (
              <div
                key={idx}
                className='flex items-top p-5 md:p-6 transition-all duration-300 mx-auto w-full max-w-[368px]'
                style={{
                  height: '133px',
                  borderRadius: '12px',
                  background: '#FFFAFA',
                  boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 1)',
                  border: '1px solid rgba(239, 67, 67, 0.08)',
                }}
              >
                {/* 4. Rounded Icon Wrap Container */}
                <div
                  className='flex-shrink-0 flex items-center justify-center mr-4'
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'rgba(239, 67, 67, 0.1)',
                  }}
                >
                  {card.icon}
                </div>

                {/* 5. Content Copy Element */}
                <p
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 400,
                    lineHeight: '26px',
                    color: '#0F1729',
                  }}
                  className='leading-snug text-[15px] sm:text-[16px] md:text-[18px]'
                >
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Line: Cards 4 and 5 */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 justify-center w-full max-w-[760px] lg:mt-2'>
            {challengeItems.slice(3, 5).map((card, idx) => (
              <div
                key={idx + 3}
                className='flex items-top p-5 md:p-6 mx-auto w-full max-w-[368px]'
                style={{
                  height: '133px',
                  borderRadius: '12px',
                  background: '#FFFAFA',
                  boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 1)',
                  border: '1px solid rgba(239, 67, 67, 0.08)',
                }}
              >
                {/* Icon Wrapper */}
                <div
                  className='flex-shrink-0 flex items-center justify-center mr-4'
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'rgba(239, 67, 67, 0.1)',
                  }}
                >
                  {card.icon}
                </div>

                {/* Card Description */}
                <p
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 400,
                    lineHeight: '26px',
                    color: '#0F1729',
                  }}
                  className='leading-snug text-[15px] sm:text-[16px] md:text-[18px]'
                >
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
