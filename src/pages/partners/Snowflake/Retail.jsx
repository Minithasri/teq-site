'use client';

import Image from 'next/image';
import { useState } from 'react';

const industries = [
  'Retail',
  'Healthcare',
  'Finance',
  'Manufacturing',
  'Technology',
  'Education',
  'Hospitality',
  'Energy',
];

const industryData = {
  Retail: {
    image: '/images/partners/Snowflake/fs.png',
  },
  Healthcare: {
    image: '/images/partners/Snowflake/hl.png',
  },
  Technology: {
    image: '/images/partners/Snowflake/tech.png',
  },
  // Default fallback for others as per instruction
  default: {
    image: '/images/partners/Snowflake/fs.png',
  },
};

export default function Retail() {
  const [activeTab, setActiveTab] = useState('Retail');

  const currentData = industryData[activeTab] || industryData.default;

  return (
    <section className='py-20 lg:py-24 relative overflow-hidden'>
      {/* Background Image */}
      <div className='absolute inset-0 z-0'>
        <Image
          src='/images/Careers/bestpath_image.png'
          alt='Background'
          fill
          className='object-cover'
        />
        {/* Fadeout gradient overlay */}
        <div
          className='absolute inset-0'
          style={{
            background:
              'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 60%, rgba(255, 255, 255, 1) 100%)',
          }}
        />
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <h2 className='text-center font-bold text-[#2D1C3C] mb-12 text-[40px]'>
          Snowflake for your industry
        </h2>

        {/* Scrollable Tabs */}
        <div className='flex overflow-x-auto pb-4 mb-10 gap-4 justify-start lg:justify-center no-scrollbar'>
          {industries.map(industry => {
            const isActive = activeTab === industry;
            return (
              <button
                key={industry}
                onClick={() => setActiveTab(industry)}
                className={`px-6 py-2.5 rounded-full text-[14px] font-medium whitespace-nowrap transition-all duration-300 border ${
                  isActive
                    ? 'text-white border-transparent shadow-md'
                    : 'border-[#EBD4F4] hover:bg-purple-50'
                }`}
                style={{
                  background: isActive
                    ? 'linear-gradient(270deg, #7030B1 0%, #B56DD3 100%)'
                    : 'white',
                }}
              >
                <span
                  style={
                    !isActive
                      ? {
                          background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                        }
                      : {}
                  }
                >
                  {industry}
                </span>
              </button>
            );
          })}
        </div>

        {/* Content Card */}
        <div className='bg-white rounded-[32px] p-4 shadow-xl w-full max-w-[1240px] h-auto lg:h-[400px] mx-auto'>
          <div className='flex flex-col lg:flex-row gap-8 items-stretch bg-white rounded-[32px] overflow-hidden h-full'>
            {/* Left: Image */}
            <div className='w-full lg:w-[600px] shrink-0'>
              <div className='relative w-full h-[300px] lg:h-[385px] rounded-2xl overflow-hidden'>
                <Image
                  src={currentData.image}
                  alt={`${activeTab} Snowflake Solution`}
                  fill
                  className='object-cover'
                  priority
                />
              </div>
            </div>

            {/* Right: Content */}
            <div className='w-full flex-1 p-4 lg:p-8 flex flex-col justify-start items-start h-full'>
              {/* Heading Badge */}
              <div className='inline-flex items-center px-4 py-2 rounded-xl border border-[#9156AA] bg-white mb-6 shadow-sm shrink-0'>
                <span
                  className='text-[18px] md:text-[22px] font-bold'
                  style={{
                    background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {industries.indexOf(activeTab) + 1}. {activeTab}
                </span>
              </div>

              {/* Description */}
              <ul className='space-y-6'>
                <li className='flex items-start gap-3'>
                  <span className='mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0' />
                  <p className='text-[#515151] text-[16px] leading-relaxed'>
                    <strong className='text-gray-800 block mb-1'>Unified Data Platform:</strong>
                    Enables retailers to consolidate data from various sources, including POS
                    systems, e-commerce platforms, and supply chain data.
                  </p>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0' />
                  <p className='text-[#515151] text-[16px] leading-relaxed'>
                    <strong className='text-gray-800 block mb-1'>Real-time Analytics:</strong>
                    Supports real-time analytics, helping retailers analyze customer behavior,
                    optimize inventory management, and personalize marketing strategies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
