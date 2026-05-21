'use client';

import React from 'react';
import Image from 'next/image';
import { FiCheckCircle } from 'react-icons/fi';

const Solutions = () => {
  const points = [
    'Developed a full-stack web application to digitize the entire parts testing lifecycle from request to report.',
    'Enabled a ticket creation system for managing and prioritizing test requests across teams.',
    'Integrated barcode scanning for accurate, real-time part identification and tracking throughout all stages.',
    'Automated test allocation and machine scheduling to eliminate manual coordination overhead.',
    'Implemented checkpoint-based validation to enforce process compliance at every stage.',
    'Enabled image uploads for evidence tracking, audit readiness, and visual documentation.',
    'Provided real-time status tracking dashboards across all testing stages for full operational visibility.',
    'Built robust backend APIs using Node.js and Express for scalable data processing and workflow management.',
    'Stored structured data in MS SQL Server for centralized, secure, and performant data access.',
    'Enabled automated report generation with Excel export for compliance reporting and data analysis.',
  ];

  return (
    <section>
      {/* Header Section */}
      <div className='py-4 md:py-10' style={{ backgroundColor: '#FCFBF8' }}>
        <div className='max-w-9xl mx-auto px-6 md:px-16 lg:px-24 text-center'>
          <h2 className='text-4xl font-bold mb-6'>Our Solution</h2>
          <p className='text-md md:text-lg max-w-9xl leading-relaxed' style={{ color: '#131720' }}>
            We designed and delivered a comprehensive ORT Lab Parts Testing Lifecycle Management
            System a purpose-built digital platform that replaced manual processes with intelligent
            automation.
          </p>
        </div>
      </div>

      {/* Main Solution Content with Background Image */}
      <div className='relative py-20 overflow-hidden'>
        {/* Background Image */}
        <div className='absolute inset-0 z-0'>
          <Image
            src='/images/Templates/aequs/aequs3.png'
            alt='Solution Background'
            fill
            className='object-cover'
          />
          {/* Subtle overlay to help card stand out if needed */}
          <div className='absolute inset-0 bg-white/10' />
        </div>

        <div className='relative z-10 max-w-9xl mx-auto px-6 md:px-16 lg:px-24 overflow-visible'>
          <div className='flex flex-col lg:flex-row items-center relative'>
            {/* Left Card with Points */}
            <div className='w-full lg:w-[80%] bg-white p-8 md:p-12 rounded-[30px] border-2 border-[#F5F5F5] shadow-[0px_4px_12px_rgba(0,0,0,0.08)] relative z-10'>
              <ul className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6'>
                {points.map((point, i) => (
                  <li key={i} className='flex items-start gap-4'>
                    <FiCheckCircle
                      className='mt-1 flex-shrink-0'
                      style={{ color: '#0336EF' }}
                      size={20}
                    />
                    <span className='text-[17px] leading-relaxed' style={{ color: '#131720' }}>
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Side Overlapping Image */}
            <div className='hidden lg:block absolute -right-24 top-1/2 -translate-y-1/2 w-[35%] z-20 pointer-events-none'>
              <div className='relative w-full aspect-[4/5]'>
                <Image
                  src='/images/Templates/aequs/aequs4.png'
                  alt='Aequs Device Solution'
                  fill
                  className='object-contain'
                />
              </div>
            </div>

            {/* Mobile Image */}
            <div className='lg:hidden w-full flex justify-center mt-8'>
              <div className='relative w-full max-w-[450px] aspect-[4/5]'>
                <Image
                  src='/images/Templates/aequs/aequs4.png'
                  alt='Aequs Device Solution'
                  fill
                  className='object-contain'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
