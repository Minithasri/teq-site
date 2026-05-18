'use client';

import React from 'react';
import Image from 'next/image';

const capabilities = [
  {
    icon: '/images/Templates/tessera/tesssvg1.svg',
    title: 'Low-Code Integration Orchestration',
    description:
      'Designing, developing, and deploying robust cloud-native enterprise workflows using Boomi’s highly visual iPaaS builder.',
  },
  {
    icon: '/images/Templates/tessera/tesssvg2.svg',
    title: 'Hybrid Cloud Connectivity',
    description:
      'Seamlessly bridging data gaps between legacy on-premise biotech lab machines and cloud-based analytical databases.',
  },
  {
    icon: '/images/Templates/tessera/tesssvg3.svg',
    title: 'Advanced API Governance',
    description:
      'Enforcing strict endpoint security, volume rate limiting, and OAuth 2.0 access tokens across all enterprise R&D APIs.',
  },
  {
    icon: '/images/Templates/tessera/tesssvg4.svg',
    title: 'Biotech Data Standardization',
    description:
      'Transforming unstructured XML/JSON data and dynamic lab schemas into highly standardized data formats for processing.',
  },
  {
    icon: '/images/Templates/tessera/tesssvg5.svg',
    title: 'Real-Time Event Queuing',
    description:
      'Implementing high-throughput asynchronous messaging systems to guarantee zero data loss during high-stress operations.',
  },
  {
    icon: '/images/Templates/tessera/tesssvg6.svg',
    title: 'GxP & FDA Audit Readiness',
    description:
      'Maintaining complete audit logs, data lineage, and state monitoring variables to easily clear compliance reviews.',
  },
];

export default function KeyCapabilities() {
  return (
    <section className='w-full bg-white'>
      <div className='w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-12 md:py-16'>
        {/* Title */}
        <h2
          className='text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center lg:text-left'
          style={{ color: '#0749CA' }}
        >
          Key Capabilities
        </h2>

        {/* 6-Card Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
          {capabilities.map((cap, i) => (
            <div
              key={i}
              className='bg-white p-6 md:p-8 rounded-[20px] border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between'
              style={{ borderColor: '#0749CA' }}
            >
              <div>
                {/* Icon + title row */}
                <div className='flex items-center gap-3 mb-4'>
                  <div
                    className='flex-shrink-0 w-10 h-10 rounded-[10px] flex items-center justify-center'
                    style={{ backgroundColor: '#0749CA1A' }}
                  >
                    <Image
                      src={cap.icon}
                      alt={cap.title}
                      width={22}
                      height={22}
                      className='object-contain'
                    />
                  </div>
                  <h3
                    className='text-md md:text-[17px] font-bold leading-snug'
                    style={{ color: '#0749CA' }}
                  >
                    {cap.title}
                  </h3>
                </div>

                {/* Description */}
                <p className='text-sm md:text-[15px] leading-relaxed' style={{ color: '#6A7181' }}>
                  {cap.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
