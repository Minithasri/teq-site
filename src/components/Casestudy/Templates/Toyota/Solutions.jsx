'use client';

import React from 'react';
import Image from 'next/image';

const Solutions = () => {
  const solutionCards = [
    {
      title: 'Power Apps Interfaces',
      desc: 'Built intuitive user interfaces for capturing tool transactions, operational inputs, and lifecycle stage transitions.',
    },
    {
      title: 'SQL Server Backend',
      desc: 'Centralized master and transactional data storage ensuring data integrity and performance at scale.',
    },
    {
      title: 'Automated Workflows',
      desc: 'Leveraged Power Automate for approvals, real-time notifications, and automated status updates across lifecycle stages.',
    },
    {
      title: 'SharePoint Integration',
      desc: "Enabled secure document and attachment management linked to each tool's lifecycle record.",
    },
    {
      title: 'Power BI Dashboards',
      desc: 'Designed interactive dashboards for real-time monitoring of KPIs, tool performance, and operational metrics.',
    },
    {
      title: 'CI/CD Pipelines',
      desc: 'Implemented controlled deployment and data migration pipelines across development, staging, and production environments.',
    },
  ];

  return (
    <section className='pt-10 bg-white overflow-hidden'>
      <div className='max-w-7xl mx-auto text-center px-6 md:px-12 mb-10 md:mb-16'>
        {/* Header Section */}
        <h2 className='text-3xl md:text-4xl font-bold mb-6 md:mb-8' style={{ color: '#262626' }}>
          Solution Implemented
        </h2>
        <p
          className='text-base md:text-lg max-w-4xl mx-auto leading-relaxed'
          style={{ color: '#676F7E' }}
        >
          We developed a comprehensive{' '}
          <span style={{ color: '#1F59DC' }} className='font-bold'>
            Power Platform–based application
          </span>{' '}
          to fully digitize the tool lifecycle from initial setup through regrinding cycles to final
          disposition with a scalable and governed architecture built for long-term sustainability.
        </p>
      </div>

      {/* Cards Container with Background Image - FULL WIDTH */}
      <div className='relative py-10 md:py-24 px-6 md:px-12 lg:px-24 overflow-hidden w-full'>
        {/* Background Image Layer */}
        <div className='absolute inset-0 z-0'>
          <Image
            src='/images/Templates/toyota/toyota4.png'
            alt='Solutions Background'
            fill
            className='object-cover opacity-50 md:opacity-100'
          />
        </div>

        {/* Cards Grid - Centered Content */}
        <div className='relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 max-w-7xl mx-auto'>
          {solutionCards.map((card, index) => (
            <div
              key={index}
              className='bg-white p-6 md:p-8 rounded-[1.5rem] border-2 text-left shadow-lg hover:shadow-xl transition-all duration-300'
              style={{ borderColor: '#F5F5F5' }}
            >
              <div className='flex items-start gap-4 md:gap-5'>
                {/* Icon Container with Gradient */}
                <div
                  className='flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center'
                  style={{ background: 'linear-gradient(135deg, #1481B8 0%, #2BD4BD 100%)' }}
                >
                  <img
                    src='/images/Templates/toyota/tsvg2.svg'
                    alt='Solution Icon'
                    className='w-5 h-5 md:w-6 md:h-6'
                  />
                </div>

                {/* Content */}
                <div>
                  <h3
                    className='text-lg md:text-xl font-bold mb-2 md:mb-3'
                    style={{ color: '#262626' }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className='text-sm md:text-base leading-relaxed opacity-90'
                    style={{ color: '#676F7E' }}
                  >
                    {card.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
