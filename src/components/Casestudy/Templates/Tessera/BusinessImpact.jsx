'use client';

import React from 'react';
import Image from 'next/image';

const impactData = [
  {
    number: '99.99%',
    label: 'Integration Uptime',
    description:
      'Guaranteed zero downtime operations across R&D and clinical cloud-based databases.',
    icon: '/images/Templates/tessera/tesssvg7.svg',
  },
  {
    number: '75%',
    label: 'Sync Latency Reduction',
    description:
      'Establishing near-instantaneous biological dataset updates between hybrid environments.',
    icon: '/images/Templates/tessera/tesssvg8.svg',
  },
  {
    number: '40%',
    label: 'Maintenance Savings',
    description: 'Drastically cutting engineering overhead by replacing legacy custom middleware.',
    icon: '/images/Templates/tessera/tesssvg9.svg',
  },
  {
    number: '10x',
    label: 'Faster Deployment',
    description: 'Enabling business groups to quickly build and launch new integration workflows.',
    icon: '/images/Templates/tessera/tesssvg10.svg',
  },
];

const impactPoints = [
  'Achieved absolute near zero-latency sync across biological testing pipelines and clinical registries.',
  'Ensured 100% FDA 21 CFR Part 11 database compliance with automated trace logging.',
  'Removed high developer dependencies by adopting Boomi’s intuitive low-code environment.',
  'Automated error notifications to support instant diagnostics and resolve exceptions under 5 minutes.',
  'Created a highly reusable enterprise connector template bank, saving future R&D pipeline integration effort.',
];

export default function BusinessImpact() {
  return (
    <section className='w-full' style={{ backgroundColor: '#F3F4F7' }}>
      <div className='w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-12 md:py-16'>
        {/* Title */}
        <h2 className='text-2xl md:text-3xl font-bold mb-8 md:mb-12' style={{ color: '#00B050' }}>
          Business Impact
        </h2>

        {/* 4-Card Metric Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 md:mb-14'>
          {impactData.map((item, i) => (
            <div
              key={i}
              className='bg-white p-6 md:p-8 rounded-[20px] border-2 transition-all duration-300 hover:shadow-lg'
              style={{ borderColor: '#00B050' }}
            >
              {/* Icon + Metric */}
              <div className='flex items-center gap-4 mb-4'>
                <div
                  className='w-10 h-10 rounded-[10px] flex items-center justify-center flex-shrink-0'
                  style={{ backgroundColor: '#00B0501A' }}
                >
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={22}
                    height={22}
                    className='object-contain'
                  />
                </div>
                <span className='text-2xl md:text-3xl font-bold' style={{ color: '#00B050' }}>
                  {item.number}
                </span>
              </div>

              {/* Title & Desc */}
              <h3 className='text-md font-bold mb-2' style={{ color: '#151C28' }}>
                {item.label}
              </h3>
              <p className='text-[13px] md:text-[15px] leading-snug' style={{ color: '#000000' }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bullet List */}
        <div className='flex flex-col gap-4 max-w-5xl mt-6'>
          {impactPoints.map((point, i) => (
            <div key={i} className='flex items-start gap-4'>
              {/* Green circle bullet */}
              <span
                className='flex-shrink-0 w-2.5 h-2.5 rounded-full mt-2'
                style={{ backgroundColor: '#00B050' }}
              />
              <span className='text-sm md:text-[17px] leading-snug' style={{ color: '#000000' }}>
                {point}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
