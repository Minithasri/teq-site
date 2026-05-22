'use client';

import { AlertCircle, BarChart3, Clock, FileSpreadsheet, TrendingDown } from 'lucide-react';
import Image from 'next/image';

export default function SalesPerformanceChallenge() {
  const challengeCards = [
    {
      id: 1,
      title: 'Fragmented Data',
      description: 'Sales data spread across multiple systems causing inconsistencies',
      icon: AlertCircle,
    },
    {
      id: 2,
      title: 'No Unified View',
      description: 'Leadership lacked visibility into performance across products and regions',
      icon: TrendingDown,
    },
    {
      id: 3,
      title: 'Manual Reporting',
      description: 'Reports prepared manually, delaying critical decision-making',
      icon: Clock,
    },
    {
      id: 4,
      title: 'Limited Tracking',
      description: 'Inability to track customer behavior and product-level trends',
      icon: BarChart3,
    },
    {
      id: 5,
      title: 'Reduced Agility',
      description: 'Lack of real-time insights impacted sales strategy execution',
      icon: FileSpreadsheet,
    },
  ];

  return (
    <div className="w-full bg-white font-['Poppins'] relative overflow-x-hidden">
      {/* Header Section */}
      <section className='relative w-full min-h-[420px] md:min-h-[505px] flex items-center justify-center overflow-hidden px-5'>
        {/* Background */}
        <div className='absolute inset-0 z-0'>
          <Image
            src='/images/Templates/templatez/titan22/header.png'
            alt='Dashboard Background'
            fill
            priority
            className='object-cover object-center opacity-30'
          />

          <div
            className='absolute inset-0 mix-blend-multiply opacity-90'
            style={{
              background:
                'linear-gradient(135deg, #1162D4 0%, #1162D4 50%, rgba(17, 98, 212, 0.8) 100%)',
            }}
          />
        </div>

        {/* Heading */}
        <div className='relative z-10 w-full max-w-[1327px] mx-auto text-center md:text-left pt-12 md:pt-0'>
          <h1 className='font-bold text-[32px] sm:text-[42px] md:text-[56px] lg:text-[65px] leading-[120%] text-white drop-shadow-sm'>
            Centralizing Sales Performance with <br className='hidden md:block' />
            Real-Time Dashboards
          </h1>
        </div>
      </section>

      {/* Floating Image */}
      <div
        className='absolute left-1/2 lg:left-auto lg:right-[10%] xl:right-[5%]
top-[300px] sm:top-[330px] md:top-[390px]
-transform -translate-x-1/2 lg:translate-x-0
z-30
w-[220px] h-[170px]
sm:w-[280px] sm:h-[210px]
md:w-[376px] md:h-[320px]
overflow-hidden'
      >
        <div
          className='w-[220px] h-[280px]
                  sm:w-[280px] sm:h-[350px]
                  md:w-[376px] md:h-[470px]
                  relative'
        >
          <Image
            src='/images/Templates/templatez/titan22/challenge.png'
            alt='Client Product Merchandise'
            fill
            priority
            className='object-contain drop-shadow-xl'
          />
        </div>
      </div>

      {/* Challenge Section */}
      <section className='relative w-full max-w-[1200px] mx-auto px-4 sm:px-6 pt-[140px] sm:pt-[170px] md:pt-20 pb-16 md:pb-24 z-10'>
        {/* Title */}
        <div className='text-center max-w-[700px] mx-auto mb-10 md:mb-14'>
          <h2 className='font-bold text-[28px] sm:text-[34px] leading-[120%] text-[#1D2530] mb-3'>
            The Challenge
          </h2>

          <p className='text-[16px] sm:text-[18px] md:text-[20px] leading-[160%] text-[#7B899D] font-normal'>
            Client faced critical obstacles in managing and analyzing sales performance
          </p>
        </div>

        {/* Cards Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
          {challengeCards.slice(0, 3).map(card => {
            const Icon = card.icon;

            return (
              <div
                key={card.id}
                className='bg-white rounded-[12px] border border-[#DADFE7] p-5 md:p-6 shadow-lg min-h-[190px] flex flex-col gap-4'
              >
                <div className='flex items-start gap-4'>
                  <div className='w-[48px] h-[48px] rounded-[12px] bg-[#F92020] flex items-center justify-center text-white shrink-0'>
                    <Icon size={24} strokeWidth={2.5} />
                  </div>

                  <h3 className='font-bold text-[20px] md:text-[24px] leading-[130%] pt-2 text-[#1D2530]'>
                    {card.title}
                  </h3>
                </div>

                <p className='text-[15px] md:text-[17px] lg:text-[18px] leading-[170%] text-[#7B899D]'>
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5 lg:max-w-[66%] mx-auto'>
          {challengeCards.slice(3).map(card => {
            const Icon = card.icon;

            return (
              <div
                key={card.id}
                className='bg-white rounded-[12px] border border-[#DADFE7] p-5 md:p-6 shadow-lg min-h-[190px] flex flex-col gap-4'
              >
                <div className='flex items-start gap-4'>
                  <div className='w-[48px] h-[48px] rounded-[12px] bg-[#F92020] flex items-center justify-center text-white shrink-0'>
                    <Icon size={24} strokeWidth={2.5} />
                  </div>

                  <h3 className='font-bold text-[20px] md:text-[24px] leading-[130%] pt-2 text-[#1D2530]'>
                    {card.title}
                  </h3>
                </div>

                <p className='text-[15px] md:text-[17px] lg:text-[18px] leading-[170%] text-[#7B899D]'>
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
