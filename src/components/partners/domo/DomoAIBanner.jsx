'use client';

import Image from 'next/image';
import { useState } from 'react';

const domoPlatforms = [
  {
    title: 'Overview',
    iconPath: '/images/partners/domo/Overview.png',
    image: '/images/partners/domo/1.png',
    description:
      "Unite your diverse ecosystem of applications and systems with Domo's intuitive integration capabilities. Design and deploy integrations effortlessly with Domo's drag and drop interface.",
    outputs: [
      'Interactive Dashboards',
      'Business Apps',
      'Embedded Analytics',
      'Self-Serve Reporting',
    ],
  },
  {
    title: 'App Creation',
    iconPath: '/images/partners/domo/app creation.png',
    image: '/images/partners/domo/2.png',
    description:
      "Optimize decision-making through Domo's low-code and pro-code apps. Catalyze innovation and enhance efficiencies, enabling your organization to effortlessly convert data into actionable intelligence.",
    outputs: [
      'Low-code Tools for Simple Design',
      'Pro-code Tools for Fast Development',
      'App Distribution',
      'Task Automation',
    ],
  },
  {
    title: 'BI & Analytics',
    iconPath: '/images/partners/domo/BI and analytics.png',
    image: '/images/partners/domo/3.png',
    description:
      'Facilitate quick and informed decision-making for diverse users with our intuitive custom data views and reporting functionalities.',
    outputs: [
      'Advanced Visualizations',
      'AI & Data Science',
      'Data Storytelling',
      'Dashboard Interactivity & Customization',
    ],
  },
  {
    title: 'Data Foundation',
    iconPath: '/images/partners/domo/data foundation.png',
    image: '/images/partners/domo/4.png',
    description:
      'Leverage our Domo solutions to establish an advanced Data Foundation, serving as the framework for the continuous progress of your business.',
    outputs: [
      'Data Integration from Any Source',
      'Data Governance',
      'Cloud Data Warehouse Integration',
      'Drag-&-Drop ETL Tools',
    ],
  },
];

export default function DomoAIBanner() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      id='domo-ai-banner'
      className='w-full py-20 lg:py-24 px-4 overflow-hidden'
      style={{
        background:
          'linear-gradient(259deg, rgba(229, 170, 102, 0.30) -13.56%, rgba(255, 165, 129, 0.30) -13.56%, rgba(221, 161, 108, 0.30) 18.23%, rgba(230, 242, 246, 0.30) 53.64%, rgba(202, 185, 246, 0.30) 91.85%, rgba(112, 48, 177, 0.30) 119.62%), #F9EAE1',
      }}
    >
      <div className='max-w-7xl mx-auto'>
        {/* Header Title */}
        <h2 className='text-3xl md:text-4xl font-medium text-center text-[#404040] mb-8'>
          Domo Data Experience Platform
        </h2>

        {/* Desktop View: Tabs & Interactive Card */}
        <div className='hidden md:block'>
          {/* Tabs Container */}
          <div className='flex justify-center mb-8'>
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
                    {platform.title}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Main Content Card */}
          <div className='w-full max-w-[1160px] mx-auto bg-white rounded-[24px] p-6 lg:p-8 shadow-2xl flex flex-col lg:flex-row gap-8 items-stretch lg:h-[460px]'>
            {/* Left Content */}
            <div className='w-full lg:w-[50%] flex flex-col items-start justify-between rounded-2xl p-8 bg-[#F8F9FA] border border-gray-100/50 shadow-sm overflow-hidden'>
              <div className='w-full'>
                {/* Header: Icon + Title */}
                <div className='flex items-center gap-4 mb-6 w-full'>
                  {/* Icon Box */}
                  <div className='h-12 w-12 rounded-xl bg-white border border-gray-100 shadow-sm flex items-center justify-center shrink-0'>
                    <Image
                      src={domoPlatforms[activeTab].iconPath}
                      alt={domoPlatforms[activeTab].title}
                      width={24}
                      height={24}
                      className='w-6 h-6 object-contain'
                      style={{
                        filter:
                          'invert(53%) sepia(85%) saturate(1986%) hue-rotate(1deg) brightness(101%) contrast(105%)',
                      }}
                    />
                  </div>

                  {/* Title Tag */}
                  <div className='bg-white border border-gray-100 rounded-xl h-12 px-6 shadow-sm flex items-center flex-1 max-w-[fit-content]'>
                    <span className='text-[#F97316] font-bold text-base'>
                      {domoPlatforms[activeTab].title}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className='text-[#70707B] leading-relaxed text-[15px] mb-6'>
                  {domoPlatforms[activeTab].description}
                </p>
              </div>

              {/* Dynamic Header & Content Grid */}
              <div className='w-full'>
                <h4 className='text-[#F97316] font-bold text-sm mb-4 tracking-wide uppercase'>
                  {activeTab === 0 ? 'Platform Outputs' : 'CAPABILITIES'}
                </h4>
                <div className='grid grid-cols-2 gap-3 w-full max-h-[160px] overflow-y-auto pr-2 custom-scrollbar'>
                  {domoPlatforms[activeTab].outputs.map((output, idx) => (
                    <div
                      key={idx}
                      className='bg-white border border-gray-50 rounded-xl py-2 px-4 shadow-sm text-center flex items-center justify-center min-h-[44px]'
                    >
                      <span className='text-[#404040]/80 text-[12px] font-medium leading-tight'>
                        {output}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className='w-full lg:w-[50%] h-full flex justify-center items-center p-4'>
              <div className='relative w-full h-full'>
                <Image
                  key={activeTab}
                  src={domoPlatforms[activeTab].image}
                  alt={domoPlatforms[activeTab].title}
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
                      style={{
                        filter:
                          'invert(53%) sepia(85%) saturate(1986%) hue-rotate(1deg) brightness(101%) contrast(105%)',
                      }}
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
