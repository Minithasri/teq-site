'use client';

import React from 'react';
import Image from 'next/image';

const capabilities = [
  {
    title: 'AI-Powered Rostering Agent',
    description:
      'Intelligent scheduling engine built on Domo that analyzes patterns and generates optimized rosters automatically.',
    icon: '/images/Templates/sephora/sepsvg2.svg',
  },
  {
    title: 'Custom React.js Interface',
    description:
      'Purpose-built front-end application enabling managers to review, adjust, and approve schedules with ease.',
    icon: '/images/Templates/sephora/sepsvg3.svg',
  },
  {
    title: 'Historical Data Analysis',
    description:
      'Leveraged attendance, leave, and performance data to generate context-aware, data-driven schedules.',
    icon: '/images/Templates/sephora/sepsvg4.svg',
  },
  {
    title: 'Automated Schedule Generation',
    description:
      'AI-generated daily and weekly rosters eliminating hours of manual planning and coordination.',
    icon: '/images/Templates/sephora/sepsvg5.svg',
  },
  {
    title: 'Centralized Data Management',
    description:
      'Seamless integration with Domo APP_DB and datasets for a single source of truth across stores.',
    icon: '/images/Templates/sephora/sepsvg6.svg',
  },
  {
    title: 'Reduced Manual Intervention',
    description:
      'End-to-end automation of roster creation, freeing managers to focus on strategic priorities.',
    icon: '/images/Templates/sephora/sepsvg7.svg',
  },
  {
    title: 'Conflict-Free Scheduling',
    description:
      'Built-in validation ensures zero scheduling overlaps and optimal workforce allocation at all times.',
    icon: '/images/Templates/sephora/sepsvg8.svg',
  },
];

export default function KeyCapabilities() {
  return (
    <section className='w-full py-16 md:py-8 lg:py-10 bg-[#F6F7F9] overflow-visible'>
      <div className='w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24'>
        {/* Section Header */}
        <h2
          className='text-2xl md:text-3xl font-bold uppercase mb-10 md:mb-14 tracking-wide'
          style={{ color: '#2A14CD' }}
        >
          Capabilities Delivered
        </h2>

        {/* 3-Column Responsive Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
          {capabilities.map((cap, i) => (
            <div
              key={i}
              className='p-6 md:p-8 rounded-[20px] transition-all duration-300 hover:shadow-xl hover:scale-[1.02] bg-white flex flex-col justify-between min-h-[220px]'
              style={{
                border: '2px solid #2A14CD',
              }}
            >
              <div>
                {/* Header Row: Icon & Title */}
                <div className='flex items-center gap-4 mb-5'>
                  {/* Custom Icon Box */}
                  <div
                    className='flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center border'
                    style={{
                      borderColor: '#2A14CD',
                      backgroundColor: '#0B95DA1A',
                    }}
                  >
                    <Image
                      src={cap.icon}
                      alt={`${cap.title} icon`}
                      width={22}
                      height={22}
                      className='object-contain'
                      priority
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className='text-base md:text-[18px] font-bold leading-snug'
                    style={{ color: '#2A14CD' }}
                  >
                    {cap.title}
                  </h3>
                </div>

                {/* Description */}
                <p
                  className='text-sm md:text-[15px] leading-relaxed font-medium'
                  style={{ color: '#6C7C93' }}
                >
                  {cap.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
