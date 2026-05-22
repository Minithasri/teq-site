'use client';

import React from 'react';
import Image from 'next/image';

const KeyCapabilities = () => {
  const capabilities = [
    {
      title: 'End-to-End Lifecycle Digitization',
      desc: 'Complete digital capture of every tool lifecycle stage — from Drop and Dismantling through Regrinding, Inspection, and Final Setting — eliminating paper-based processes entirely.',
      icon: '/images/Templates/toyota/tsvg3.svg',
    },
    {
      title: 'Workflow Automation',
      desc: 'Automated approval flows, status transitions, and notifications that eliminate manual handoffs and reduce cycle times across departments.',
      icon: '/images/Templates/toyota/tsvg4.svg',
    },
    {
      title: 'Real-Time Visibility',
      desc: 'Live dashboards and status tracking provide instant visibility into tool location, condition, and lifecycle position across all production environments.',
      icon: '/images/Templates/toyota/tsvg5.svg',
    },
    {
      title: 'Data Governance & Compliance',
      desc: 'Centralized data architecture with role-based access, audit trails, and standardized data recording ensuring regulatory compliance and operational consistency.',
      icon: '/images/Templates/toyota/tsvg6.svg',
    },
    {
      title: 'Performance Analytics',
      desc: 'Interactive Power BI dashboards deliver actionable insights on tool utilization, regrinding efficiency, cost trends, and predictive maintenance indicators.',
      icon: '/images/Templates/toyota/tsvg7.svg',
    },
  ];

  return (
    <section className='py-20' style={{ backgroundColor: '#F0F1F5' }}>
      <div className='max-w-9xl mx-auto px-6 md:px-12'>
        {/* Section Heading */}
        <h2
          className='text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16'
          style={{ color: '#262626' }}
        >
          Key Capabilities Delivered
        </h2>

        {/* Capabilities List */}
        <div className='max-w-7xl mx-auto space-y-8 md:space-y-12'>
          {capabilities.map((item, index) => (
            <div key={index} className='flex flex-col md:flex-row items-start gap-5 md:gap-8 group'>
              {/* Icon Container with Gradient Background */}
              <div
                className='flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 duration-300'
                style={{ background: '#487492ff' }}
              >
                <img src={item.icon} alt='Capability Icon' className='w-6 h-6 md:w-8 md:h-8' />
              </div>

              {/* Content */}
              <div className='flex-grow pt-1'>
                <h3
                  className='text-xl md:text-2xl font-bold mb-2 md:mb-3'
                  style={{ color: '#262626' }}
                >
                  {item.title}
                </h3>
                <p
                  className='text-sm md:text-lg leading-relaxed max-w-7xl'
                  style={{ color: '#676F7E' }}
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
