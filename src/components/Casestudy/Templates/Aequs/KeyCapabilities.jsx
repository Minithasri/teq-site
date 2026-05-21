'use client';

import React from 'react';

const KeyCapabilities = () => {
  const capabilities = [
    {
      title: 'End-to-End Workflow Automation',
      description:
        'From test request creation to final report export, every stage of the testing lifecycle is digitized, validated, and tracked — removing manual handoffs entirely.',
      icon: '/images/Templates/aequs/aequssvg7.svg',
    },
    {
      title: 'Barcode-Based Tracking',
      description:
        'Integrated barcode scanning enables instant, error-free part identification and real-time movement tracking across all testing stages.',
      icon: '/images/Templates/aequs/aequssvg8.svg',
    },
    {
      title: 'Real-Time Visibility',
      description:
        'Interactive dashboards provide live status updates on testing progress, resource utilization, and pending tasks empowering teams with actionable insights.',
      icon: '/images/Templates/aequs/aequssvg9.svg',
    },
    {
      title: 'Smart Scheduling & Allocation',
      description:
        'Automated machine scheduling and test allocation optimize resource usage, reduce idle time, and prevent scheduling conflicts.',
      icon: '/images/Templates/aequs/aequssvg10.svg',
    },
    {
      title: 'Automated Reporting',
      description:
        'One-click Excel report generation replaces hours of manual compilation, enabling faster compliance reviews and data-driven decisions.',
      icon: '/images/Templates/aequs/aequssvg11.svg',
    },
  ];

  return (
    <section className='py-20' style={{ backgroundColor: '#F3F5F7' }}>
      <div className='max-w-9xl mx-auto px-6 md:px-16 lg:px-24 text-center'>
        {/* Section Header */}
        <h2 className='text-4xl font-bold mb-12'>Key Capabilities Delivered</h2>

        {/* Capabilities List */}
        <div className='space-y-6'>
          {capabilities.map((item, index) => (
            <div
              key={index}
              className='bg-white p-6 md:p-8 rounded-[20px] border-2 border-[#F5F5F5] flex flex-col md:flex-row items-center gap-6 md:gap-8 transition-all duration-300 shadow-[0px_8px_24px_rgba(0,0,0,0.12)]'
            >
              {/* Icon Container */}
              <div className='w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#0336EF]/10'>
                <img src={item.icon} alt={item.title} className='w-8 h-8' />
              </div>

              {/* Card Content */}
              <div className='space-y-2 text-center md:text-left'>
                <h3 className='text-xl font-bold text-[#0F1729]/80'>{item.title}</h3>
                <p className='text-base leading-relaxed' style={{ color: '#6A7181' }}>
                  {item.description}
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
