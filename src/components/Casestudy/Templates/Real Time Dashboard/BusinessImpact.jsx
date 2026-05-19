'use client';

import { CheckCircle2, Clock, Gauge, Target, TrendingUp } from 'lucide-react';
import Image from 'next/image';

export default function BusinessImpact() {
  const metricCards = [
    {
      value: '100%',
      sub: 'Faster',
      title: 'Real-Time Reporting',
      desc: 'Reduced from weekly → real-time',
      icon: <Clock size={26} className='text-[#FFFFFF]' />,
    },
    {
      value: '360°',
      sub: 'View',
      title: 'Enhanced Visibility',
      desc: 'Improved customer and product trend insights',
      icon: <TrendingUp size={26} className='text-[#FFFFFF]' />,
    },
    {
      value: 'Instant',
      sub: 'Response',
      title: 'Faster Decisions',
      desc: 'Leadership responds to market changes immediately',
      icon: <Gauge size={26} className='text-[#FFFFFF]' />,
    },
    {
      value: 'Built',
      sub: 'to Scale',
      title: 'Scalable Foundation',
      desc: 'Established platform for future growth',
      icon: <Target size={26} className='text-[#FFFFFF]' />,
    },
  ];

  const keyAchievements = [
    'Reporting cycle reduced from weekly to real-time',
    'Improved visibility into customer and product trends',
    'Faster decision-making enabled leadership to respond to market changes',
    'Established a scalable sales reporting foundation',
  ];

  return (
    <section className="relative w-full min-h-[804px] bg-[#FFFFFF] py-16 px-4 md:px-8 font-['Poppins'] overflow-hidden select-none flex flex-col items-center justify-start">
      {/* 1. Background image setup with requested transparency and 180deg flip logic */}
      <div className='absolute inset-0 z-0 pointer-events-none opacity-75'>
        <Image
          src='/images/Templates/templatez/titan22/businessimpact.png'
          alt='Business Impact Backdrop layout'
          fill
          priority
          className='object-cover object-top -scale-x-100'
        />
      </div>

      <div className='relative z-10 w-full max-w-[1152px] mt-[-40px] mx-auto flex flex-col items-center'>
        {/* 2 & 3. Header Text Area Layout Block */}
        <div className='text-center mb-16'>
          <h2 className='font-bold text-[34px] leading-[48px] text-[#000000] mb-2'>
            Business Impact
          </h2>
          <p className='font-normal text-[22px] leading-[28px] text-[#000000]'>
            Transformative results that drive sustainable growth
          </p>
        </div>

        {/* 4. Top Row Matrix Grid holding 4 Metric Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-8'>
          {metricCards.map((card, idx) => (
            <div
              key={idx}
              className='relative w-full max-w-[264px] min-h-[210px] mx-auto bg-[#2814DE]/75 border border-white/20 rounded-[16px] px-5 pt-5 pb-6 shadow-lg backdrop-blur-[4px] flex flex-col'
            >
              {/* Top Section */}
              <div className='flex items-start gap-3 m-3'>
                {/* Icon */}
                <div className='shrink-0 mt-1'>{card.icon}</div>

                {/* Value + Sub */}
                <div className='flex flex-col'>
                  <span className='font-bold text-[32px] leading-none text-white'>
                    {card.value}
                  </span>

                  <span className='font-semibold text-[15px] leading-none text-[#ECE254] mt-2'>
                    {card.sub}
                  </span>
                </div>
              </div>

              {/* Bottom Content */}
              <div className='mt-auto w-[200px]'>
                <h4 className='font-bold text-[16px] leading-[30px] text-white mb-1'>
                  {card.title}
                </h4>

                <p className='font-normal text-[13.5px] leading-[20px] text-white/80'>
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 5. Bottom Containers Splitting Achievements & Long-Term Value */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 w-full'>
          {/* Box Left Side: Key Achievements */}
          <div className='w-full max-w-[564px] min-h-[290px] bg-[#2814DE]/75 border border-white/20 rounded-[16px] p-6 flex flex-col justify-start shadow-lg backdrop-blur-[4px] mx-auto'>
            <h3 className='font-bold text-[22px] text-white mb-6'>Key Achievements</h3>
            <div className='flex flex-col gap-4'>
              {keyAchievements.map((text, index) => (
                <div key={index} className='flex items-start gap-3'>
                  <CheckCircle2
                    size={18}
                    className='text-[#F91F23] shrink-0 mt-1'
                    strokeWidth={2}
                  />
                  <p className='font-normal text-[18px] lg:text-[18px] text-white/90 leading-relaxed'>
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Box Right Side: Long-Term Value with Performance Metric Indicators */}
          <div className='w-full max-w-[564px] min-h-[290px] bg-[#2814DE]/75 border border-white/20 rounded-[16px] p-6 flex flex-col justify-start shadow-lg backdrop-blur-[4px] mx-auto'>
            <h3 className='font-bold text-[22px] text-white mb-6'>Long-Term Value</h3>

            <div className='flex flex-col gap-5 w-full mt-2'>
              {/* Metric Row 1 */}
              <div className='w-full'>
                <div className='flex justify-between items-center mb-2'>
                  <span className='font-normal text-[18px] lg:text-[16px] text-white/90'>
                    Operational Efficiency
                  </span>
                </div>
                <div className='w-full h-[8px] bg-white/20 rounded-full overflow-hidden'>
                  <div className='h-full bg-[#F92020] rounded-full w-[91%]' />
                </div>
              </div>

              {/* Metric Row 2 */}
              <div className='w-full'>
                <div className='flex justify-between items-center mb-2'>
                  <span className='font-normal text-[18px] lg:text-[16px] text-white/90'>
                    Data Accuracy
                  </span>
                </div>
                <div className='w-full h-[8px] bg-white/20 rounded-full overflow-hidden'>
                  <div className='h-full bg-[#F92020] rounded-full w-[100%]' />
                </div>
              </div>

              {/* Metric Row 3 */}
              <div className='w-full'>
                <div className='flex justify-between items-center mb-2'>
                  <span className='font-normal text-[18px] lg:text-[16px] text-white/90'>
                    Strategic Insights
                  </span>
                </div>
                <div className='w-full h-[8px] bg-white/20 rounded-full overflow-hidden'>
                  <div className='h-full bg-[#F92020] rounded-full w-[87%]' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
