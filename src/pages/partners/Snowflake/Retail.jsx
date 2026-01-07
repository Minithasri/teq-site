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
    image: '/images/partners/Snowflake/Retail.png',
    items: [
      {
        title: 'Unified Data Platform',
        description:
          'Enables retailers to consolidate data from various sources, including POS systems, e-commerce platforms, and supply chain data.',
      },
      {
        title: 'Real-time Analytics',
        description:
          'Supports real-time analytics, helping retailers analyze customer behavior, optimize inventory management, and personalize marketing strategies.',
      },
    ],
  },
  Healthcare: {
    image: '/images/partners/Snowflake/helathcare.png',
    items: [
      {
        title: 'Secure Data Handling',
        description:
          'By focusing on data security and compliance, Snowflake assists healthcare organizations in managing sensitive patient data securely.',
      },
      {
        title: 'Advanced Analytics',
        description:
          'Facilitates advanced analytics, allowing healthcare professionals to derive meaningful insights from patient records, optimize treatment plans, and streamline operations.',
      },
    ],
  },
  Finance: {
    image: '/images/partners/Snowflake/finanace.png',
    items: [
      {
        title: 'Scalable Data Processing',
        description:
          'Handles large volumes of financial data efficiently for activities like risk management, fraud detection, and compliance reporting.',
      },
      {
        title: 'Real-time Reporting',
        description:
          'Supports real-time reporting and analytics, enabling faster decision-making and regulatory compliance.',
      },
    ],
  },
  Manufacturing: {
    image: '/images/partners/Snowflake/manufacturing.png',
    items: [
      {
        title: 'Supply Chain Optimization',
        description:
          'Helps manufacturers streamline their supply chain by integrating data from various sources, optimizing inventory levels, and improving production efficiency.',
      },
      {
        title: 'Predictive Maintenance',
        description:
          'Supports predictive maintenance analytics, reducing downtime by predicting equipment failures and scheduling maintenance proactively.',
      },
    ],
  },
  Technology: {
    image: '/images/partners/Snowflake/technology.png',
    items: [
      {
        title: 'Data Collaboration',
        description:
          "Snowflake's data sharing capabilities facilitate collaboration between technology companies and their partners, enabling secure and controlled data sharing.",
      },
      {
        title: 'Scalable Infrastructure',
        description: 'Handles large datasets and adapts to changing infrastructure requirements.',
      },
    ],
  },
  Education: {
    image: '/images/partners/Snowflake/Education.png',
    items: [
      {
        title: 'Data-driven Decision-Making',
        description:
          'Empowers educational institutions with data-driven decision-making by consolidating data from student records, academic performance, and administrative systems.',
      },
      {
        title: 'Personalized Learning',
        description:
          'Real-time analytics support personalized learning initiatives, helping educators tailor educational content to individual student needs.',
      },
    ],
  },
  Hospitality: {
    image: '/images/partners/Snowflake/Hospitatlity.png',
    items: [
      {
        title: 'Customer Experience Enhancement',
        description:
          'Allows hospitality businesses to analyze customer preferences, feedback, and booking patterns, enabling personalized services and improving customer satisfaction.',
      },
      {
        title: 'Operational Efficiency',
        description:
          'Assists in optimizing operations by integrating data from various departments such as reservations, inventory, and customer service.',
      },
    ],
  },
  Energy: {
    image: '/images/partners/Snowflake/enery.png',
    items: [
      {
        title: 'Smart Grid Analytics',
        description:
          'Supports smart grid analytics, helping utilities analyze data from sensors and meters to optimize energy distribution.',
      },
      {
        title: 'Predictive Analytics',
        description:
          'Enables energy companies to implement predictive analytics for equipment maintenance, reducing downtime and operational costs.',
      },
    ],
  },
  default: {
    image: '/images/partners/Snowflake/Retail.png',
    items: [],
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

        {/* Scrollable Tabs (Desktop Only) */}
        <div className='hidden lg:flex justify-center mb-10'>
          <div className='inline-flex flex-wrap justify-center bg-[#FBF4FE] rounded-full p-2 gap-2 shadow-lg border border-purple-50'>
            {industries.map(industry => {
              const isActive = activeTab === industry;
              return (
                <button
                  key={industry}
                  onClick={() => setActiveTab(industry)}
                  className={`px-6 py-2.5 rounded-full text-[14px] font-medium whitespace-nowrap transition-all duration-300 border ${
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
                    {industry}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Desktop Content */}
        <div className='hidden lg:block'>
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
                  {currentData.items?.map((item, index) => (
                    <li key={index} className='flex items-start gap-3'>
                      <span className='mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0' />
                      <p className='text-[#515151] text-[16px] leading-relaxed'>
                        <strong className='text-gray-800 block mb-1'>{item.title}:</strong>
                        {item.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Vertical Scroll */}
        <div className='lg:hidden space-y-8 px-4'>
          {industries.map((industry, index) => {
            const data = industryData[industry] || industryData.default;
            return (
              <div key={industry} className='bg-white rounded-[32px] p-4 shadow-xl w-full'>
                <div className='flex flex-col gap-6'>
                  {/* Image */}
                  <div className='w-full'>
                    <div className='relative w-full h-[240px] rounded-2xl overflow-hidden'>
                      <Image
                        src={data.image}
                        alt={`${industry} Snowflake Solution`}
                        fill
                        className='object-cover'
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className='flex flex-col'>
                    {/* Heading Badge */}
                    <div className='inline-flex items-center px-4 py-2 rounded-xl border border-[#9156AA] bg-white mb-4 shadow-sm self-start'>
                      <span
                        className='text-[16px] font-bold'
                        style={{
                          background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                        }}
                      >
                        {index + 1}. {industry}
                      </span>
                    </div>

                    {/* Description */}
                    <ul className='space-y-4'>
                      {data.items?.map((item, idx) => (
                        <li key={idx} className='flex items-start gap-2'>
                          <span className='mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0' />
                          <p className='text-[#515151] text-[14px] leading-relaxed'>
                            <strong className='text-gray-800 block mb-1'>{item.title}:</strong>
                            {item.description}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
