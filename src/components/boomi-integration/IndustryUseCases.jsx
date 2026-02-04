'use client';

import Image from 'next/image';
import { useState } from 'react';

const solutions = [
  {
    id: 1,
    tabName: 'Retail',
    cardTitle: 'Retail',
    description:
      'Enable seamless, real time synchronization of orders and inventory across ERP, POS, and e commerce platforms, ensuring accurate stock visibility, faster fulfillment, and superior customer experiences.',
    image: '/images/partners/boomi/retails.jpg',
    features: ['25% reduction in stock-outs'],
  },
  {
    id: 2,
    tabName: 'Manufacturing',
    cardTitle: 'Manufacturing',
    description:
      'Leverage IoT and ERP integration to drive intelligent production planning, enable predictive maintenance, reduce downtime, and improve operational efficiency across the factory floor.',
    image: '/images/partners/boomi/manufacturing.jpg',
    features: ['30% improvement in efficiency'],
  },
  {
    id: 3,
    tabName: 'Healthcare and Life Sciences',
    cardTitle: 'Healthcare',
    description:
      'Securely integrate claims processing, patient data management, and regulatory compliance workflows to ensure data integrity, privacy, and smoother healthcare operations.',
    image: '/images/partners/boomi/medical.jpg',
    features: ['60% faster cycle times'],
  },
  {
    id: 4,
    tabName: 'Financial Services',
    cardTitle: 'Finance',
    description:
      'Automate end to end invoice processing, financial reconciliations, and reporting to improve accuracy, reduce manual effort, and accelerate financial decision making.',
    image: '/images/partners/boomi/finance.jpg',
    features: ['Up to 80% faster processing'],
  },
  {
    id: 5,
    tabName: 'Multi-Cloud Enterprises',
    cardTitle: 'Multi Cloud Enterprises',
    description:
      'Achieve real time data orchestration across AWS, Azure, and GCP using Boomi, enabling unified visibility, scalable integrations, and cloud agnostic operations.',
    image: '/images/partners/boomi/multicloud.jpg',
    features: ['99.9% uptime achieved'],
  },
];

export default function IndustryUseCases() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      className='w-full py-10'
      style={{
        background: 'linear-gradient(180deg, #EBD8F3 0%, rgba(255, 255, 255, 0) 100%)',
      }}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Title */}
        <h2 className='text-center font-medium text-[#404040] mb-8 text-[32px] md:text-[40px]'>
          Industry Use Cases
        </h2>

        {/* Desktop View: Tabs & Interactive Card */}
        <div className='hidden md:block'>
          {/* Tabs */}
          <div className='flex justify-center mb-12'>
            <div className='inline-flex flex-wrap justify-center bg-[#FBF4FE] rounded-full p-1 gap-2 shadow-lg border border-purple-50 max-w-full'>
              {solutions.map((solution, index) => {
                const isActive = activeTab === index;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`px-4 lg:px-6 py-2 lg:py-2.5 rounded-full text-[12px] lg:text-[14px] font-medium transition-all duration-300 border whitespace-nowrap ${
                      isActive
                        ? 'text-white border-transparent shadow-md'
                        : 'text-[#7030B1] border-transparent hover:bg-purple-50'
                    }`}
                    style={{
                      background: isActive
                        ? 'linear-gradient(270deg, #7030B1 0%, #B56DD3 100%)'
                        : 'transparent',
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
                      {solution.tabName}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content Card */}
          <div className='bg-white rounded-[16px] p-2 md:p-4 shadow-xl w-full max-w-[1240px] lg:h-[400px] mx-auto'>
            <div className='flex flex-col lg:flex-row gap-8 items-stretch h-full'>
              {/* Left Image */}
              <div className='relative w-full lg:w-[600px] min-h-[300px] lg:min-h-[285px] shrink-0 rounded-[12px] overflow-hidden'>
                <Image
                  src={solutions[activeTab].image}
                  alt={solutions[activeTab].cardTitle}
                  fill
                  className='object-cover'
                />
              </div>

              {/* Right Content */}
              <div className='w-full flex-1 p-4 lg:p-8 flex flex-col justify-between h-full'>
                <div>
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
                      {solutions[activeTab].id}. {solutions[activeTab].cardTitle}
                    </span>
                  </div>

                  {/* Description */}
                  <p className='text-[#515151] text-[16px] leading-relaxed mb-6'>
                    {solutions[activeTab].description}
                  </p>
                </div>

                {/* Bottom Pill */}
                {solutions[activeTab].features && solutions[activeTab].features.length > 0 && (
                  <div className='mt-auto flex justify-start'>
                    <span
                      className='px-6 py-2 rounded-lg text-sm font-medium'
                      style={{
                        backgroundColor: '#00DBDE1A',
                        color: '#4AC3C7',
                      }}
                    >
                      {solutions[activeTab].features[0]}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View: Tabs + Selected Card */}
        <div className='md:hidden'>
          {/* Mobile Tabs */}
          <div className='flex justify-center mb-8 px-4'>
            <div className='flex flex-wrap justify-center bg-[#FBF4FE] rounded-3xl p-3 gap-2 border border-purple-50 max-w-full'>
              {solutions.map((solution, index) => {
                const isActive = activeTab === index;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`px-4 py-2 rounded-full text-[12px] font-medium transition-all duration-300 border whitespace-nowrap ${
                      isActive
                        ? 'text-white border-transparent shadow-md'
                        : 'text-[#7030B1] border-transparent hover:bg-purple-50'
                    }`}
                    style={{
                      background: isActive
                        ? 'linear-gradient(270deg, #7030B1 0%, #B56DD3 100%)'
                        : 'transparent',
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
                      {solution.tabName}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Selected Solution Card */}
          <div className='bg-white rounded-[24px] p-4 shadow-lg flex flex-col gap-6'>
            {/* Image */}
            <div className='relative w-full h-[240px] rounded-xl overflow-hidden'>
              <Image
                src={solutions[activeTab].image}
                alt={solutions[activeTab].cardTitle}
                fill
                className='object-cover'
              />
            </div>

            {/* Content */}
            <div className='flex flex-col items-start'>
              {/* Heading Badge */}
              <div className='inline-flex items-center px-4 py-2 rounded-xl border border-[#9156AA] bg-white mb-4 shadow-sm'>
                <span
                  className='text-[16px] font-bold'
                  style={{
                    background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {solutions[activeTab].id}. {solutions[activeTab].cardTitle}
                </span>
              </div>
              {/* Description */}
              <p className='text-[#515151] text-sm leading-relaxed mb-4'>
                {solutions[activeTab].description}
              </p>

              {/* Mobile Bottom Pill */}
              {solutions[activeTab].features && solutions[activeTab].features.length > 0 && (
                <div className='mt-2 flex justify-start'>
                  <span
                    className='px-4 py-2 rounded-lg text-xs font-medium'
                    style={{
                      backgroundColor: '#00DBDE1A',
                      color: '#4AC3C7',
                    }}
                  >
                    {solutions[activeTab].features[0]}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
