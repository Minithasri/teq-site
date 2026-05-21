'use client';

import React from 'react';
import Image from 'next/image';

const ClientOverview = () => {
  return (
    <section className='relative py-20 bg-white overflow-visible'>
      <div className='max-w-9xl mx-auto px-6 md:px-16 lg:px-24'>
        <div className='flex flex-col lg:flex-row items-start justify-between'>
          {/* Left Content */}
          <div className='w-full space-y-6 text-center'>
            <h2 className='text-3xl md:text-4xl font-bold' style={{ color: '#131720' }}>
              Client Overview
            </h2>
            <p className='text-lg leading-relaxed w-full' style={{ color: '#6A7181' }}>
              A leading consumer electronics manufacturing organization operates an Operational
              Reliability Testing (ORT) lab responsible for validating parts across multiple testing
              stages. The lab plays a critical role in ensuring product quality, safety compliance,
              and manufacturing readiness making it a high-stakes environment where accuracy and
              speed are non-negotiable.
            </p>
          </div>

          {/* Overlapping Image Container */}
          <div className='hidden lg:block absolute -right-28 top-[-120px] z-20 px-6 md:px-16 lg:px-24'>
            <div className='relative h-[200px] w-[400px] rounded-[20px] overflow-hidden'>
              <Image
                src='/images/Templates/aequs/aequs2.png'
                alt='Client Overview'
                fill
                className='object-cover'
              />
            </div>
          </div>

          {/* Mobile Image */}
          <div className='lg:hidden relative h-[250px] w-full rounded-2xl overflow-hidden shadow-lg mt-8'>
            <Image
              src='/images/Templates/aequs/aequs2.png'
              alt='Client Overview'
              fill
              className='object-cover'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientOverview;
