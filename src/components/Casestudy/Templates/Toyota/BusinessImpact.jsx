'use client';

import React from 'react';
import Image from 'next/image';

const BusinessImpact = () => {
  const impactData = [
    {
      metric: '60-70%',
      title: 'Reduction in Manual Tracking Effort',
      desc: 'Through automation of approvals, notifications, and data capture',
      icon: '/images/Templates/toyota/tsvg8.svg',
    },
    {
      metric: '100%',
      title: 'Lifecycle Stage Coverage',
      desc: 'Real-time visibility across all tool lifecycle stages',
      icon: '/images/Templates/toyota/tsvg9.svg',
    },
    {
      metric: 'Enhanced',
      title: 'Data Accuracy & Compliance',
      desc: 'Standardized recording with audit trails and governance',
      icon: '/images/Templates/toyota/tsvg10.svg',
    },
    {
      metric: 'Real-Time',
      title: 'Decision-Making Dashboards',
      desc: 'Interactive Power BI analytics for data-driven operations',
      icon: '/images/Templates/toyota/tsvg11.svg',
    },
    {
      metric: 'Cross-Dept',
      title: 'Operational Transparency',
      desc: 'Increased efficiency and alignment across departments',
      icon: '/images/Templates/toyota/tsvg12.svg',
    },
  ];

  return (
    <section className='relative py-20 overflow-visible' style={{ backgroundColor: '#F6F7F9' }}>
      <div className='max-w-7xl mx-auto px-6 md:px-12 lg:px-24'>
        {/* Section Heading */}
        <h2
          className='text-3xl md:text-4xl font-bold text-center mb-12 md:mb-20'
          style={{ color: '#24B91A' }}
        >
          Business Impact
        </h2>

        {/* Cards Grid - Centered last row */}
        <div className='flex flex-wrap justify-center gap-6 md:gap-8 mb-8 md:mb-16'>
          {impactData.map((item, index) => (
            <div key={index} className='w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-2rem)]'>
              <ImpactCard item={item} />
            </div>
          ))}
        </div>

        {/* Left Bottom Overlapping Image */}
        <div className='absolute left-0 bottom-[-20px] md:bottom-[-10px] z-20 w-[150px] md:w-[350px] opacity-60 md:opacity-100'>
          <div className='relative aspect-[4/3]'>
            <Image
              src='/images/Templates/toyota/toyota5.png'
              alt='Toyota Production Line Robot'
              fill
              className='object-contain'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const ImpactCard = ({ item }) => (
  <div
    className='bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl border-2 transition-all duration-300 hover:shadow-xl group h-full'
    style={{ borderColor: '#24B91A' }}
  >
    <div className='flex items-center gap-4 mb-4 md:mb-6'>
      {/* Icon Container */}
      <div
        className='w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center flex-shrink-0'
        style={{ background: '#24B91A' }}
      >
        <img src={item.icon} alt='Impact Icon' className='w-5 h-5 md:w-6 md:h-6' />
      </div>
      {/* Metric */}
      <span className='text-2xl md:text-3xl font-bold' style={{ color: '#24B91A' }}>
        {item.metric}
      </span>
    </div>

    {/* Content */}
    <h3 className='text-lg md:text-xl font-bold mb-2 md:mb-3' style={{ color: '#131720' }}>
      {item.title}
    </h3>
    <p className='text-sm md:text-base leading-relaxed opacity-90' style={{ color: '#676F7E' }}>
      {item.desc}
    </p>
  </div>
);

export default BusinessImpact;
