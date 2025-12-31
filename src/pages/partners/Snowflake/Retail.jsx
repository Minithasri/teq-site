'use client';

import { useState } from 'react';
import Image from 'next/image';

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
    <section
      className='py-20 lg:py-24 relative overflow-hidden'
      style={{
        background: 'linear-gradient(180deg, #EBD8F3 0%, rgba(255, 255, 255, 0) 100%)',
      }}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <h2 className='text-3xl md:text-5xl font-bold text-[#352B42] text-center mb-12'>
          Snowflake for your industry
        </h2>

        {/* Scrollable Tabs */}
        <div className='flex overflow-x-auto pb-4 mb-10 gap-3 justify-start lg:justify-center no-scrollbar'>
          {industries.map(industry => (
            <button
              key={industry}
              onClick={() => setActiveTab(industry)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 border ${
                activeTab === industry
                  ? 'bg-[#9D5CFF] text-white border-[#9D5CFF] shadow-lg shadow-purple-200'
                  : 'bg-white/50 text-[#9D5CFF] border-[#E5D5F2] hover:bg-white hover:border-[#9D5CFF]'
              }`}
            >
              {industry}
            </button>
          ))}
        </div>

        {/* Content Card */}
        <div className='bg-white rounded-[30px] p-6 lg:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-white/50'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            {/* Left: Image */}
            <div className='relative aspect-[4/3] w-full bg-slate-50 rounded-2xl overflow-hidden border border-slate-100'>
              <Image
                src={currentData.image}
                alt={`${activeTab} Snowflake Solution`}
                fill
                className='object-contain p-4'
                priority
              />
            </div>

            {/* Right: Content */}
            <div>
              <div className='inline-flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-[#D6BCFA] text-[#805AD5] font-bold text-lg mb-8'>
                <span className='text-xl'>{industries.indexOf(activeTab) + 1}.</span>
                {activeTab}
              </div>

              <ul className='space-y-6'>
                <li className='flex items-start gap-3'>
                  <span className='mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0' />
                  <p className='text-gray-600 leading-relaxed text-[16px] lg:text-[17px]'>
                    <strong className='text-gray-800 block mb-1'>Unified Data Platform:</strong>
                    Enables retailers to consolidate data from various sources, including POS
                    systems, e-commerce platforms, and supply chain data.
                  </p>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0' />
                  <p className='text-gray-600 leading-relaxed text-[16px] lg:text-[17px]'>
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
