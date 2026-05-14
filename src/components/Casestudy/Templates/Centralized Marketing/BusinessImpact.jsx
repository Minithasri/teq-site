'use client';

import { CheckCircle2, Eye, TrendingDown, Zap } from 'lucide-react';

const impacts = [
  {
    icon: <TrendingDown size={24} />,
    stat: '90%',
    description: 'Reduction in Manual Reporting Effort',
  },
  {
    icon: <CheckCircle2 size={24} />,
    stat: 'Unified',
    description: 'Accurate & Centralized Data System',
  },
  {
    icon: <Zap size={24} />,
    stat: 'Days → Min',
    description: 'Reporting Time Dramatically Reduced',
  },
  {
    icon: <Eye size={24} />,
    stat: 'Real-Time',
    description: 'Near Real-Time Marketing Visibility',
  },
];

export default function BusinessImpact() {
  return (
    <section
      className="relative w-full flex flex-col items-center justify-center font-['Poppins'] py-12 md:py-16"
      style={{
        minHeight: '384px', // Changed to minHeight for responsiveness
        background: 'linear-gradient(180deg, #FCFBF8 1.72%, #C7F7CC 65.29%, #FCFBF8 100%)',
        opacity: 1,
      }}
    >
      <div className='max-w-[1773px] w-full mx-auto px-4 text-center'>
        {/* 2. TITLE: BUSINESS IMPACT */}
        <h2
          className='uppercase font-semibold text-[#16C203] mb-8 md:mb-12 text-[24px] md:text-[32px]'
          style={{
            letterSpacing: '1.4px',
            lineHeight: '1.2',
          }}
        >
          Business Impact
        </h2>

        {/* 3. CARDS GRID */}
        <div className='flex flex-wrap justify-center gap-4 md:gap-6'>
          {impacts.map((item, index) => (
            <div
              key={index}
              className='bg-white border-t-[1px] border-[#16C203] rounded-[10px] p-5 md:p-6 flex flex-col items-center justify-center shadow-sm'
              style={{
                width: '100%',
                maxWidth: '276px', // Maintains original width on desktop, responsive on mobile
                height: '158px',
                borderWidth: '1px',
              }}
            >
              <div className='flex items-center justify-center w-full mb-3 gap-4'>
                {/* 4. ICON CONTAINER */}
                <div
                  className='flex-shrink-0 flex items-center justify-center rounded-full bg-[#E6FCC7] border-[1px] border-[#16C203] text-[#16C203]'
                  style={{
                    width: '40px',
                    height: '40px',
                  }}
                >
                  {item.icon}
                </div>

                {/* 5. CARD TOP TEXT (STAT) */}
                <span
                  className='font-semibold text-[#16C203] text-[20px] md:text-[24px]'
                  style={{
                    lineHeight: '1.2',
                  }}
                >
                  {item.stat}
                </span>
              </div>

              {/* BOTTOM TEXT (DESCRIPTION) */}
              <p
                className='text-[#6C7C93] font-normal text-center px-2 text-[14px] md:text-[16px]'
                style={{
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
