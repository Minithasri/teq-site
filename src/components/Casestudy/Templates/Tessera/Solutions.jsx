'use client';

import React from 'react';
import Image from 'next/image';
import { FiCheckCircle } from 'react-icons/fi';

const implementationPoints = [
  'Architected a hybrid integration environment utilizing Boomi AtomSphere for seamless multi-cloud connectivity.',
  'Deployed high-availability Boomi Molecules on-premise and in AWS to guarantee zero-downtime operations.',
  'Built real-time REST and SOAP APIs secured with enterprise-grade OAuth 2.0 governance protocols.',
  'Configured asynchronous event-driven integrations using Boomi Queueing to prevent data bottlenecks.',
  'Standardized all data transformations using optimized profiles, mapping rules, and dynamic script steps.',
  'Established real-time transaction monitoring and custom alerting workflows integrated with alerting tools.',
  'Ensured strict compliance with FDA 21 CFR Part 11 and GxP standards through comprehensive audit trails.',
  'Automated end-to-end testing and deployment pipelines to drastically reduce middleware release cycles.',
];

export default function Solutions() {
  return (
    <section className='w-full' style={{ backgroundColor: '#F6F7F9' }}>
      <div className='relative w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-10 md:py-14'>
        {/* tessera3 image — right side, absolute */}
        <div className='hidden lg:block absolute right-0 bottom-0 w-[240px] xl:w-[280px] z-10'>
          <div className='relative w-full h-[300px] xl:h-[340px] rounded-tl-2xl overflow-hidden'>
            <Image
              src='/images/Templates/tessera/tessera3.png'
              alt='Biomedical Data Analyst'
              fill
              className='object-cover object-center'
              priority
            />
          </div>
        </div>

        {/* Text content — padded right to clear the image */}
        <div className='lg:pr-[260px] xl:pr-[300px]'>
          {/* Our Solution */}
          <h2 className='text-2xl md:text-3xl font-bold mb-4' style={{ color: '#0749CA' }}>
            Our Solution
          </h2>
          <p
            className='text-sm sm:text-[15px] md:text-[17px] leading-relaxed mb-8'
            style={{ color: '#6A7181' }}
          >
            We designed and delivered a cloud-first, enterprise-grade integration architecture
            powered by Dell Boomi iPaaS. This solution eliminated data silos, established near
            real-time operational flows, and ensured strict regulatory compliance across all
            business systems.
          </p>

          {/* Key Implementation Details */}
          <h3 className='text-lg md:text-2xl font-bold mb-5' style={{ color: '#0749CA' }}>
            Key Implementation Details
          </h3>

          <ul className='space-y-3'>
            {implementationPoints.map((point, i) => (
              <li key={i} className='flex items-start gap-3'>
                <FiCheckCircle
                  className='flex-shrink-0 mt-1'
                  style={{ color: '#0749CA' }}
                  size={20}
                />
                <span
                  className='text-sm md:text-[17px] leading-snug'
                  style={{ color: 'rgba(21, 28, 40, 0.80)' }}
                >
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile image */}
        <div className='lg:hidden relative w-full aspect-[4/3] rounded-2xl overflow-hidden mt-8'>
          <Image
            src='/images/Templates/tessera/tessera3.png'
            alt='Biomedical Data Analyst'
            fill
            className='object-cover object-center'
          />
        </div>
      </div>
    </section>
  );
}
