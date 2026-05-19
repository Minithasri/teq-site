'use client';

import React from 'react';

const KeyCapabilities = () => {
  const capabilities = [
    {
      title: 'Real-Time Deposit & Loan Tracking',
      desc: 'Up-to-the-minute dashboards monitoring deposit inflows, loan origination pipelines, and overall portfolio health across all retail branches.',
      icon: '/images/Templates/tavent/tav7.svg',
    },
    {
      title: 'Teller Service Performance Analytics',
      desc: 'Transaction time analytics and queuing metrics that allow managers to audit daily teller performance, queue lengths, and processing speeds.',
      icon: '/images/Templates/tavent/tav8.svg',
    },
    {
      title: 'Self-Service Analytical Filtering',
      desc: 'Advanced multi-dimensional drill-downs enabling bank executives and regional managers to segment data by branch, customer type, product, and time.',
      icon: '/images/Templates/tavent/tav9.svg',
    },
    {
      title: 'Branch Performance Benchmarking',
      desc: 'Interactive comparison matrices showing performance vs. monthly targets, identifying high-performing branches and areas needing optimization.',
      icon: '/images/Templates/tavent/tav10.svg',
    },
    {
      title: 'Bank-Grade Data Governance',
      desc: 'Centralized database configuration with role-based permissions and strict encryption protocols, ensuring compliance with banking regulatory standards.',
      icon: '/images/Templates/tavent/tav11.svg',
    },
    {
      title: 'Automated Report Scheduling',
      desc: 'Fully scheduled reporting systems that email daily summaries and deposit/loan alerts to regional directors and risk officers automatically.',
      icon: '/images/Templates/tavent/tav12.svg',
    },
  ];

  return (
    <section className='py-16 md:py-20' style={{ backgroundColor: '#F0F1F5' }}>
      <div className='max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24'>
        {/* Section Heading */}
        <h2
          className='text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16'
          style={{ color: '#0F2C59' }}
        >
          Key Capabilities Delivered
        </h2>

        {/* Capabilities List */}
        <div className='max-w-6xl mx-auto space-y-8 md:space-y-12'>
          {capabilities.map((item, index) => (
            <div key={index} className='flex flex-col md:flex-row items-start gap-5 md:gap-8 group'>
              {/* Icon Container */}
              <div
                className='flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 duration-300'
                style={{ background: 'linear-gradient(135deg, #0F2C59 0%, #3085C3 100%)' }}
              >
                <img
                  src={item.icon}
                  alt='Capability Icon'
                  className='w-6 h-6 md:w-8 md:h-8 object-contain'
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              </div>

              {/* Content */}
              <div className='flex-grow pt-1'>
                <h3
                  className='text-xl md:text-2xl font-bold mb-2 md:mb-3'
                  style={{ color: '#0F2C59' }}
                >
                  {item.title}
                </h3>
                <p
                  className='text-sm md:text-[16px] leading-relaxed max-w-7xl font-normal'
                  style={{ color: '#5F6C80' }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyCapabilities;
