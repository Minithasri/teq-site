'use client';

import React from 'react';
import Image from 'next/image';

const BusinessImpact = () => {
  const impacts = [
    {
      stat: '60–70%',
      title: 'Reduction in Manual Tracking & Data Entry Errors',
      description:
        'Automated workflows and barcode scanning eliminated the majority of human errors, improving data integrity across the testing pipeline.',
      icon: '/images/Templates/aequs/aequssvg12.svg',
    },
    {
      stat: '~50%',
      title: 'Improvement in Overall Testing Process Efficiency',
      description:
        'Digitized scheduling, allocation, and tracking dramatically accelerated testing throughput and turnaround time.',
      icon: '/images/Templates/aequs/aequssvg13.svg',
    },
    {
      stat: 'Real-Time',
      title: 'Visibility Across All Testing Stages',
      description:
        'Live dashboards improved traceability and accountability, giving stakeholders instant access to testing status and resource utilization.',
      icon: '/images/Templates/aequs/aequssvg14.svg',
    },
    {
      stat: '~65%',
      title: 'Faster Report Generation',
      description:
        'Automated Excel exports replaced manual compilation, accelerating review cycles and enabling faster compliance decisions.',
      icon: '/images/Templates/aequs/aequssvg15.svg',
    },
  ];

  return (
    <section className='py-20 bg-white overflow-hidden'>
      <div className='max-w-9xl mx-auto px-6 md:px-16 lg:px-24'>
        {/* Section Header */}
        <div className='mb-16 text-center'>
          <h2 className='text-4xl font-bold mb-6'>Business Impact</h2>
          <p className='text-lg' style={{ color: '#7B899D' }}>
            Measurable outcomes that demonstrate the power of intelligent digital transformation.
          </p>
        </div>

        <div className='flex flex-col lg:flex-row gap-12 items-start'>
          {/* Left: Cards Grid */}
          <div className='w-full lg:w-[65%] grid grid-cols-1 md:grid-cols-2 gap-6'>
            {impacts.map((item, index) => (
              <div
                key={index}
                className='bg-white p-8 rounded-[24px] border-2 border-[#F5F5F5] flex flex-col space-y-5 transition-all duration-300 shadow-[0px_4px_12px_rgba(0,0,0,0.08)]'
              >
                {/* Header Row: Icon + Stat */}
                <div className='flex items-center gap-6'>
                  <div className='w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#E6F9E8]'>
                    <img src={item.icon} alt={item.stat} className='w-7 h-7' />
                  </div>
                  <h3 className='text-3xl font-black text-[#0F1729]/80'>{item.stat}</h3>
                </div>

                {/* Content */}
                <div className='space-y-3'>
                  <h4 className='text-[17px] font-bold leading-tight' style={{ color: '#000000' }}>
                    {item.title}
                  </h4>
                  <p className='text-sm leading-relaxed' style={{ color: '#7B899D' }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Large Image */}
          <div className='w-full lg:w-[35%]'>
            <div className='relative aspect-[4/5] w-full rounded-[40px] overflow-hidden shadow-2xl'>
              <Image
                src='/images/Templates/aequs/aequs5.png'
                alt='Business Impact Visualization'
                fill
                className='object-cover'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessImpact;
