'use client';

import Image from 'next/image';
import { useState } from 'react';

const solutions = [
  {
    id: 1,
    tabName: 'Healthcare and Life Sciences',
    cardTitle: 'Improve analysis with a 360-degree view',
    description:
      'With Boomi, healthcare providers and payers can create a single view of the patient across healthcare systems, including siloed Electronic Health Record databases. Support patient mobility, anytime, in any place. Get insights into care plans, from actions to costs. Raise awareness of services and patient outcomes.',
    image: '/images/partners/boomi/last_image1.png',
  },
  {
    id: 2,
    tabName: 'Manufacturing',
    cardTitle: 'Real-time visibility',
    description:
      'Boomi displays real-time visibility for instant collaboration with suppliers and active product tracking. Gain real-time visibility across the entire supply chain ecosystem. Identify problems in material procurement and product shipping faster for quicker resolution. Meet customer expectations with automated workflows that provide closer collaboration with suppliers and partners.',
    image: '/images/partners/boomi/last_image2.png',
  },
  {
    id: 3,
    tabName: 'Financial Services',
    cardTitle: 'Cloud transformation & technology modernization',
    description:
      'Modernize your organization by adepting a cloud-first strategy. Migrate to public, private and hybrid clouds to drive down cost. Streamline your application modernization approach for a faster delivery timeline. Connect disparate systems enabling you to adopt a modern data strategy approach. Automate processes and workflows to drive business agility, increasing time to value.',
    image: '/images/partners/boomi/last_image3.png',
  },
  {
    id: 4,
    tabName: 'Retail',
    cardTitle: 'Improved product visibility',
    description:
      'Improve the performance and sell through of your product. Build confidence in data with a self-service single view. Improve cash flow and margin optimization. Create greater accountability across business departments.',
    image: '/images/partners/boomi/last_image4.png',
  },
  {
    id: 5,
    tabName: 'Public Sector',
    cardTitle: 'Enhance Public Sector Efficiency',
    description:
      "Boomi is committed to help public sector organizations break down data silos to enhance information flow, improve citizen services, and increase operational effectiveness. The secure and compliant Boomi Atomosphere Platform enables you to modernize legacy infrastructure and harness the power of the cloud to overcome today's challenges for tomorrow's innovation.",
    image: '/images/partners/boomi/last_image5.png',
  },
  {
    id: 6,
    tabName: 'Education',
    cardTitle: 'Build a resilient campus experience',
    description:
      'Higher education is in flux. With student enrollment fluctuating, classroom locations diversifying, and many employees requiring remote presence, there is no time to waste significant personnel and budget on custom-coded processes to optimize brittle and complex technology stacks. With Boomi, organizations can build a resilient campus experience that connects everyone, anything, anywhere.',
    image: '/images/partners/boomi/last_image6.png', // Placeholder
  },
];

const BoomiSolutions = () => {
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
        <h2 className='text-center font-bold text-[#2D1C3C] mb-8 text-[32px] md:text-[40px]'>
          Boomi Solutions with GWC
        </h2>

        {/* Desktop View: Tabs & Interactive Card */}
        <div className='hidden md:block'>
          {/* Tabs */}
          <div className='flex justify-center mb-12'>
            <div className='inline-flex flex-wrap justify-center bg-[#FBF4FE] rounded-full p-2 gap-2 shadow-lg border border-purple-50'>
              {solutions.map((solution, index) => {
                const isActive = activeTab === index;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`px-6 py-2.5 rounded-full text-[14px] font-medium transition-all duration-300 border ${
                      isActive
                        ? 'text-white border-transparent shadow-md'
                        : 'text-[#7030B1] border-[#EBD4F4] hover:bg-purple-50'
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
          <div className='bg-white rounded-[32px] p-4 shadow-xl w-full max-w-[1240px] h-auto lg:h-[400px] mx-auto'>
            <div className='flex flex-col lg:flex-row gap-8 items-stretch bg-white rounded-[32px] overflow-hidden h-full'>
              {/* Left Image */}
              <div className='w-full lg:w-[600px] shrink-0'>
                <div className='relative w-full h-[300px] lg:h-[385px] rounded-2xl overflow-hidden'>
                  <Image
                    src={solutions[activeTab].image}
                    alt={solutions[activeTab].cardTitle}
                    fill
                    className='object-cover'
                  />
                </div>
              </div>

              {/* Right Content */}
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
                    {solutions[activeTab].id}. {solutions[activeTab].cardTitle}
                  </span>
                </div>

                {/* Description */}
                <p
                  className={`text-[#515151] text-[16px] leading-relaxed ${
                    activeTab >= 3 ? 'my-auto' : ''
                  }`}
                >
                  {solutions[activeTab].description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View: Stacked Cards (Scrollable) */}
        <div className='md:hidden flex flex-col gap-8'>
          {solutions.map((solution, index) => (
            <div key={index} className='bg-white rounded-[24px] p-4 shadow-lg flex flex-col gap-6'>
              {/* Image */}
              <div className='relative w-full h-[240px] rounded-xl overflow-hidden'>
                <Image
                  src={solution.image}
                  alt={solution.cardTitle}
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
                    {solution.id}. {solution.cardTitle}
                  </span>
                </div>
                {/* Description */}
                <p className='text-[#515151] text-sm leading-relaxed'>{solution.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoomiSolutions;
