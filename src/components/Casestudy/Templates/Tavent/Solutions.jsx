'use client';

import React from 'react';

const solutionCards = [
  {
    num: '01',
    title: 'Centralized BI Platform',
    desc: 'Developed interactive dashboards using Tableau as a single source of truth.',
    icon: '/images/Templates/tavent/tav6.svg',
  },
  {
    num: '02',
    title: 'Operational Dashboards',
    desc: 'Tracked loan delinquency, deposit trends and teller performance metrics.',
    icon: '/images/Templates/tavent/tav7.svg',
  },
  {
    num: '03',
    title: 'Advanced Calculations and Filters',
    desc: 'Enabled deep insights using parameters and calculated fields.',
    icon: '/images/Templates/tavent/tav8.svg',
  },
  {
    num: '04',
    title: 'Self-Service Analytics',
    desc: 'Empowered users with dynamic filtering and guided exploration.',
    icon: '/images/Templates/tavent/tav9.svg',
  },
  {
    num: '05',
    title: 'Cloud Deployment',
    desc: 'Published dashboards on Tableau Cloud for secure, governed access.',
    icon: '/images/Templates/tavent/tav10.svg',
  },
];

export default function Solutions() {
  return (
    <section className='w-full py-8 md:py-14 bg-[#FFFFFF]'>
      <div className='w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24'>
        {/* Section Header */}
        <div className='w-full mb-12 max-w-4xl'>
          <h2
            className='text-2xl md:text-3xl font-extrabold uppercase mb-6 tracking-wide'
            style={{ color: '#4B52E4', fontFamily: 'Poppins, sans-serif' }}
          >
            SOLUTION IMPLEMENTED
          </h2>
          <h3
            className='text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-bold mb-3 leading-tight'
            style={{ color: '#040E1A', fontFamily: 'Poppins, sans-serif' }}
          >
            A unified analytics platform, built for self-service
          </h3>
          <p
            className='text-sm sm:text-base md:text-[17px] leading-relaxed font-medium'
            style={{ color: '#586474', fontFamily: 'Poppins, sans-serif' }}
          >
            We architected an end-to-end BI capability — from data layer to cloud-published
            dashboards.
          </p>
        </div>

        {/* ── CARDS GRID ── */}
        <div className='flex flex-col gap-6 w-full max-w-[1200px]'>
          {/* Row 1: 2 Cards (each taking 50% width on md/lg screens) */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full'>
            {solutionCards.slice(0, 2).map((card, i) => (
              <div
                key={i}
                className='relative p-6 sm:p-8 rounded-[24px] bg-[#FFFFFF] flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:scale-[1.01]'
                style={{
                  border: '2px solid #4B52E4',
                }}
              >
                {/* Card Number on top right */}
                <span
                  className='absolute top-6 right-8 text-xs font-bold'
                  style={{ color: '#4B52E4', fontFamily: 'Poppins, sans-serif' }}
                >
                  {card.num}
                </span>

                <div>
                  {/* Icon Box + Title */}
                  <div className='flex items-center gap-4 mb-4 pr-6'>
                    <div className='w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#4B52E4]'>
                      <img
                        src={card.icon}
                        alt={card.title}
                        className='w-5 h-5 object-contain'
                        style={{ filter: 'brightness(0) invert(1)' }}
                      />
                    </div>
                    <h4
                      className='text-base sm:text-[18px] font-bold'
                      style={{
                        color: '#4B52E4',
                        fontFamily: 'Poppins, sans-serif',
                      }}
                    >
                      {card.title}
                    </h4>
                  </div>

                  {/* Card Description */}
                  <p
                    className='text-sm sm:text-[15px] leading-relaxed font-normal'
                    style={{
                      color: '#586474',
                      fontFamily: 'Poppins, sans-serif',
                    }}
                  >
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2: 3 Cards (each taking 33.3% width on md/lg screens) */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 w-full'>
            {solutionCards.slice(2).map((card, i) => (
              <div
                key={i}
                className='relative p-6 sm:p-8 rounded-[24px] bg-[#FFFFFF] flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:scale-[1.01]'
                style={{
                  border: '2px solid #4B52E4',
                }}
              >
                {/* Card Number on top right */}
                <span
                  className='absolute top-6 right-8 text-xs font-bold'
                  style={{ color: '#4B52E4', fontFamily: 'Poppins, sans-serif' }}
                >
                  {card.num}
                </span>

                <div>
                  {/* Icon Box + Title */}
                  <div className='flex items-center gap-4 mb-4 pr-6'>
                    <div className='w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#4B52E4]'>
                      <img
                        src={card.icon}
                        alt={card.title}
                        className='w-5 h-5 object-contain'
                        style={{ filter: 'brightness(0) invert(1)' }}
                      />
                    </div>
                    <h4
                      className='text-base sm:text-[18px] font-bold'
                      style={{
                        color: '#4B52E4',
                        fontFamily: 'Poppins, sans-serif',
                      }}
                    >
                      {card.title}
                    </h4>
                  </div>

                  {/* Card Description */}
                  <p
                    className='text-sm sm:text-[15px] leading-relaxed font-normal'
                    style={{
                      color: '#586474',
                      fontFamily: 'Poppins, sans-serif',
                    }}
                  >
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
