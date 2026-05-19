'use client';

import { AlertTriangle, BarChart3, TrendingDown } from 'lucide-react';
import Image from 'next/image';

const challengeCards = [
  {
    description: 'YOY and MOM comparisons were misaligned across dashboards',
    icon: <TrendingDown size={20} className='text-white' />,
  },
  {
    description: 'Inconsistent time-based calculations undermined reporting reliability',
    icon: <BarChart3 size={20} className='text-white' />,
  },
  {
    description: 'Strategic planning suffered from conflicting performance data',
    icon: <AlertTriangle size={20} className='text-white' />,
  },
];

export default function ChallengeSection() {
  return (
    <section
      className="relative overflow-hidden font-['Poppins']"
      style={{
        width: '100%',
        height: '567px',
        background: 'linear-gradient(180deg, #FEDBDA 0%, #F3F4F6 100%)',
        opacity: 1,
      }}
    >
      {/* 7. Right Top Image - Positioning based on coordinates provided */}
      <div
        className='absolute z-10'
        style={{
          width: '474px',
          height: '316px',
          top: '25px',
          left: '1100px',
          opacity: 0.74,
        }}
      >
        <Image
          src='/images/Templates/templatez/salesintelligence/sihead.png'
          alt='Retail Context'
          width={474}
          height={316}
          className='rounded-[25px] object-cover'
        />
      </div>

      <div className='relative z-20 pt-[60px] pl-[32px]'>
        {/* 2. The Challenge Title */}
        <div className='mb-[40px]'>
          <h2
            className='font-semibold uppercase'
            style={{
              width: '307px',
              height: '20px',
              fontSize: '36px',
              lineHeight: '20px',
              letterSpacing: '1.4px',
              color: 'rgba(254, 2, 2, 1)',
            }}
          >
            The Challenge
          </h2>
        </div>

        {/* 3. Subtitle Heading */}
        <div className='mb-[30px]'>
          <h3
            className='font-semibold text-[#0F1729]'
            style={{
              width: '856px',
              height: '75px',
              fontSize: '30px',
              lineHeight: '36px',
            }}
          >
            Unreliable time-based calculations were eroding trust in sales reporting
          </h3>
        </div>

        {/* 4. Paragraph Text */}
        <div className='mb-[70px]'>
          <p
            className='font-regular text-[#4B5563]'
            style={{
              width: '932px',
              height: '109px',
              fontSize: '18px',
              lineHeight: '29.25px',
            }}
          >
            The client had an existing reporting system, but inconsistencies in time-based
            calculations were affecting the reliability of sales insights. Metrics like
            Year-over-Year and Month-over-Month comparisons were not aligned, creating confusion in
            performance analysis and strategic planning.
          </p>
        </div>

        {/* 5. Challenge Cards Container */}
        <div className='flex justify-center gap-[25px]'>
          {challengeCards.map((card, index) => (
            <div
              key={index}
              className='relative flex items-center bg-white'
              style={{
                width: '429px',
                height: '91px',
                borderRadius: '12px',
                border: '1px solid rgba(254, 2, 2, 1)',
                boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)',
                paddingLeft: '85px', // Space for the icon
                paddingRight: '20px',
              }}
            >
              {/* 6. Icon Container */}
              <div
                className='absolute left-[25px] top-[25px] flex items-center justify-center'
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '12px',
                  background: 'rgba(253, 27, 27, 1)',
                }}
              >
                {card.icon}
              </div>

              <p className='text-[15px] font-medium leading-tight text-[#111827]'>
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
