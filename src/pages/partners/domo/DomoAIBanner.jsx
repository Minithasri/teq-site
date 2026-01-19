'use client';

import Image from 'next/image';
import { useState } from 'react';

const domoPlatforms = [
  {
    title: 'Overview',
    iconPath: '/images/partners/domo/Overview.png',
    image: '/images/partners/domo/allicons.png',
    description:
      "Unite your diverse ecosystem of applications and systems with Domo's intuitive integration capabilities. Design and deploy integrations effortlessly with Domo's drag and drop interface.",
  },
  {
    title: 'App Creation',
    iconPath: '/images/partners/domo/app creation.png',
    image: '/images/partners/domo/allicons.png',
    description:
      'Build custom intelligent apps with low-code and pro-code tools. Automate business logic and streamline workflows to drive action across your organization.',
  },
  {
    title: 'BI & Analytics',
    iconPath: '/images/partners/domo/BI and analytics.png',
    image: '/images/partners/domo/allicons.png',
    description:
      'Empower everyone with real-time insights. Create interactive dashboards and visualize data to make faster, confident data-driven decisions.',
  },
  {
    title: 'Data Foundation',
    iconPath: '/images/partners/domo/data foundation.png',
    image: '/images/partners/domo/allicons.png',
    description:
      'Connect and transform data from any source. Ensure data governance, security, and quality across your entire organization with a solid data foundation.',
  },
];

export default function DomoAIBanner() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      className='w-full py-20 lg:py-24 px-4 overflow-hidden'
      style={{
        background:
          'linear-gradient(259deg, rgba(229, 170, 102, 0.30) -13.56%, rgba(255, 165, 129, 0.30) -13.56%, rgba(221, 161, 108, 0.30) 18.23%, rgba(230, 242, 246, 0.30) 53.64%, rgba(202, 185, 246, 0.30) 91.85%, rgba(112, 48, 177, 0.30) 119.62%), #F9EAE1',
      }}
    >
      <div className='max-w-7xl mx-auto'>
        {/* Header Title */}
        <h2 className='text-3xl md:text-4xl font-bold text-center text-[#404040] mb-12'>
          Domo Data Experience Platform
        </h2>

        {/* Desktop View: Tabs & Interactive Card */}
        <div className='hidden md:block'>
          {/* Tabs Container */}
          <div className='flex justify-center mb-16'>
            <div className='inline-flex flex-wrap md:flex-nowrap items-center bg-[#E5CFBE]/40 rounded-full p-1.5 gap-2 backdrop-blur-sm shadow-sm'>
              {domoPlatforms.map((platform, index) => {
                const isActive = activeTab === index;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                      isActive ? 'text-white shadow-lg' : 'text-[#BF540A] hover:bg-white/30'
                    }`}
                    style={{
                      background: isActive
                        ? 'linear-gradient(180deg, #F97316 0%, #43145E 100%)'
                        : 'transparent',
                    }}
                  >
                    <Image
                      src={platform.iconPath}
                      alt=''
                      width={20}
                      height={20}
                      className={`w-5 h-5 object-contain ${isActive ? 'brightness-0 invert' : ''}`}
                    />
                    {platform.title}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Main Content Card */}
          <div className='w-full max-w-[1160px] mx-auto bg-white rounded-[16px] p-4 lg:p-6 shadow-xl flex flex-col lg:flex-row gap-8 items-center lg:h-[420px]'>
            {/* Left Content */}
            <div className='w-full lg:w-[48%] h-full flex flex-col items-start justify-center rounded-2xl p-8 lg:p-10 bg-[#FAFAFA] border border-gray-50 shadow-[0px_4px_20px_rgba(0,0,0,0.02)]'>
              {/* Header: Icon + Title */}
              <div className='flex items-center gap-6 mb-8 w-full'>
                {/* Icon Box */}
                <div className='w-14 h-14 rounded-xl bg-white border border-gray-100 shadow-sm flex items-center justify-center shrink-0'>
                  <Image
                    src={domoPlatforms[activeTab].iconPath}
                    alt={domoPlatforms[activeTab].title}
                    width={28}
                    height={28}
                    className='w-7 h-7 object-contain'
                  />
                </div>

                {/* Title Tag */}
                <div className='bg-white border border-gray-100 rounded-xl py-2 px-6 shadow-sm flex-1 max-w-[fit-content]'>
                  <span className='text-[#F97316] font-semibold text-base'>
                    {domoPlatforms[activeTab].title}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className='text-[#70707B] leading-relaxed text-[16px]'>
                {domoPlatforms[activeTab].description}
              </p>
            </div>

            {/* Right Image */}
            <div className='w-full lg:w-[52%] h-full flex justify-center items-center p-4'>
              <div className='relative w-full h-full'>
                <Image
                  src='/images/partners/domo/righti.png'
                  alt='Domo Platform Overview'
                  fill
                  className='object-contain p-2'
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View: Stacked Cards (Scrollable) */}
        <div className='md:hidden space-y-6'>
          {domoPlatforms.map((platform, index) => (
            <div
              key={index}
              className='w-full bg-white rounded-[24px] p-4 shadow-lg flex flex-col gap-6'
            >
              {/* Image Section */}
              <div className='w-full h-[240px] relative rounded-xl overflow-hidden bg-gray-50'>
                <Image
                  src={platform.image}
                  alt={platform.title}
                  fill
                  className='object-contain p-4'
                />
              </div>

              {/* Content Section */}
              <div className='flex flex-col items-start'>
                {/* Header (Icon + Title) */}
                <div className='flex items-center gap-4 mb-4 w-full'>
                  <div className='w-12 h-12 rounded-xl bg-white border border-gray-100 shadow-sm flex items-center justify-center shrink-0'>
                    <Image
                      src={platform.iconPath}
                      alt=''
                      width={24}
                      height={24}
                      className='w-6 h-6 object-contain'
                    />
                  </div>
                  <div className='bg-[#FFF4EB] rounded-lg py-2 px-4 shadow-sm'>
                    <span className='text-[#F97316] font-bold text-sm'>{platform.title}</span>
                  </div>
                </div>

                {/* Description */}
                <p className='text-[#70707B] text-sm leading-relaxed'>{platform.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
