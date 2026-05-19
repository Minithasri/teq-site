'use client';

import { Calendar, Clock, EyeOff, Shuffle } from 'lucide-react';
import Image from 'next/image';

export default function BusinessChallengeAndMetrics() {
  const challengePoints = [
    'Artist and event performance metrics were scattered across different systems',
    'No centralized dashboard for monitoring real-time performance data',
    'Leadership lacked clear visibility into audience engagement trends',
    'Manual reporting delayed decision-making and reduced agility',
    'Limited ability to link performance KPIs with revenue and audience growth',
  ];

  const metricCards = [
    {
      icon: <Calendar className='text-[#6249DF]' size={20} />,
      title: 'Weekly',
      label: 'Event Performance Reporting Cycle',
    },
    {
      icon: <Clock className='text-[#6249DF]' size={20} />,
      title: 'Delayed',
      label: 'Engagement Insights',
    },
    {
      icon: <EyeOff className='text-[#6249DF]' size={20} />,
      title: 'None',
      label: 'Integrated Performance View',
    },
    {
      icon: <Shuffle className='text-[#6249DF]' size={20} />,
      title: 'Manual',
      label: 'Report Automation',
    },
  ];

  return (
    <section className="w-full bg-white py-10 px-4 md:py-12 md:px-8 font-['Poppins'] select-none">
      <div className='max-w-[1346px] mx-auto flex flex-col gap-10 md:gap-14'>
        {/* ================= 1. THE CHALLENGE CONTAINER ================= */}
        <div
          className='relative overflow-hidden w-full p-6 md:p-8 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-8 min-h-[294px]'
          style={{
            borderRadius: '16px',
            background:
              'linear-gradient(269.85deg, rgba(255, 255, 255, 0.15) 3.39%, rgba(246, 22, 26, 0.15) 67.96%)',
            border: '1px solid rgba(98, 73, 223, 0.2)',
          }}
        >
          {/* Left Text Block */}
          <div className='flex flex-col h-full justify-start z-10 max-w-full lg:max-w-[750px]'>
            {/* Header Row */}
            <div className='flex items-center gap-3 mb-4 md:mb-6'>
              {/* 2. Icon Container */}
              <div
                className='flex items-center justify-center text-white shrink-0'
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '12px',
                  background: 'rgba(98, 73, 223, 1)',
                }}
              >
                <svg
                  width='18'
                  height='18'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2.5'
                >
                  <circle cx='12' cy='12' r='10' />
                  <line x1='12' y1='8' x2='12' y2='12' />
                  <line x1='12' y1='16' x2='12.01' y2='16' />
                </svg>
              </div>

              {/* 3. Title */}
              <h2
                className='text-[26px] leading-[30px] md:text-[30px] md:leading-[34px] lg:text-[34px] lg:leading-[32px] font-bold'
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  color: 'rgba(33, 36, 44, 1)',
                }}
              >
                The Challenge
              </h2>
            </div>

            {/* 4. Points List */}
            <ul className='flex flex-col gap-3'>
              {challengePoints.map((point, index) => (
                <li
                  key={index}
                  className='flex items-start gap-3 text-[15px] leading-[22px] md:text-[16px] md:leading-[24px] lg:text-[18px] lg:leading-[24px]'
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 400,
                    color: '#21242C',
                  }}
                >
                  {/* Red X Mark */}
                  <span className='text-[#F6161A] font-medium shrink-0 mt-[2px]'>✕</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 5. Right Side Vector Graphics */}
          <div className='relative lg:absolute w-full max-w-[260px] h-[260px] mx-auto lg:mx-0 lg:max-w-none lg:w-[412px] lg:h-[412px] lg:-right-5 lg:-top-[60px] z-0 pointer-events-none shrink-0 opacity-40 lg:opacity-100'>
            <Image
              src='/images/Templates/templatez/jamm/jammchallenge.png'
              alt='Conceptual human head gears challenge graphic'
              fill
              priority
              className='object-contain scale-x-[-1]'
            />
          </div>
        </div>

        {/* ================= 6. CURRENT STATE METRICS HEADER ================= */}
        <div className='w-full flex flex-col items-center mt-2 md:mt-6'>
          <h2
            className='w-full max-w-[677px] text-[24px] leading-[30px] md:text-[30px] md:leading-[36px] lg:text-[34px] lg:leading-[36px] font-bold text-center'
            style={{
              fontFamily: 'Poppins, sans-serif',
              color: 'rgba(33, 36, 44, 1)',
            }}
          >
            Current State Metrics (Before Solution)
          </h2>

          {/* ================= 7. METRIC CARDS GRID ================= */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8 w-full justify-items-center'>
            {metricCards.map((card, idx) => (
              <div
                key={idx}
                className='relative p-6 flex flex-col justify-between w-full max-w-[340px] sm:max-w-none h-[144px]'
                style={{
                  borderRadius: '12px',
                  background: 'linear-gradient(180deg, #FEE8E8 0%, #FFFFFF 100%)',
                  border: '1px solid rgba(220, 223, 229, 1)',
                  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.02)',
                }}
              >
                {/* Card Header Top Row */}
                <div className='flex items-center gap-3'>
                  {/* Standard Rounded Icon Wrap */}
                  <div className='w-9 h-9 rounded-xl bg-[#6249DF1F] flex items-center justify-center shrink-0'>
                    {card.icon}
                  </div>

                  {/* 8. Gradient Text Heading */}
                  <h3
                    className='font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-[#300FD3] to-[#C254F8]'
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                    }}
                  >
                    {card.title}
                  </h3>
                </div>

                {/* Subtext Label Descriptive Line */}
                <p
                  className='text-[#676F7E] text-[15px] font-medium mt-auto pr-4'
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {card.label}
                </p>

                {/* Micro Red Down Indicator Arrow */}
                <div className='absolute right-4 top-12 text-red-700 animate-pulse'>
                  <span className='font-bold text-[14px]'>↓</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
