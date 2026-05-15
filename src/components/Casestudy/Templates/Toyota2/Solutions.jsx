'use client';
import React from 'react';

const Solutions = () => {
  const solutions = [
    {
      title: 'Power Apps',
      description:
        'Intuitive interfaces for maintenance entry, breakdown logging, spare tracking, and bulk data uploads via Excel integration.',
      icon: '/images/Templates/toyota2/toysvg8.svg',
    },
    {
      title: 'Power Automate',
      description:
        'Automated workflows for task assignment, approvals, validations, notifications, and escalation handling.',
      icon: '/images/Templates/toyota2/toysvg9.svg',
    },
    {
      title: 'Power BI Dashboards',
      description:
        'Real-time dashboards providing insights into maintenance trends, resource utilization, downtime analysis, and performance tracking.',
      icon: '/images/Templates/toyota2/toysvg10.svg',
    },
    {
      title: 'Azure Data Factory',
      description:
        'Automated pipelines for data migration, transformation, and integration across multiple systems.',
      icon: '/images/Templates/toyota2/toysvg11.svg',
    },
    {
      title: 'SQL Server & SharePoint',
      description:
        'Centralized maintenance database with SharePoint-backed document and record management.',
      icon: '/images/Templates/toyota2/toysvg12.svg',
    },
    {
      title: 'CI/CD & System Integration',
      description:
        'Continuous deployment pipelines and integration with external systems for a unified operational ecosystem.',
      icon: '/images/Templates/toyota2/toysvg13.svg',
    },
  ];

  return (
    <section className='py-10 md:py-20 bg-[#F6F7F9] relative overflow-hidden'>
      <div className='max-w-7xl mx-auto px-6 md:px-12 relative z-10'>
        {/* Badge */}
        <div className='mb-10'>
          <span
            className='inline-block px-8 py-2.5 rounded-full text-white text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase shadow-md'
            style={{
              background: 'linear-gradient(100.43deg, #676F7E 0%, #1AA2E6 100%)',
            }}
          >
            Our Solution
          </span>
        </div>

        {/* Heading & Subtext */}
        <div className='mb-8 md:mb-10'>
          <h2 className='text-xl md:text-2xl lg:text-4xl font-bold text-[#131720] mb-6 md:mb-8 leading-tight'>
            End-to-End Digital Maintenance Platform
          </h2>
          <p className='text-[#676F7E] text-sm md:text-lg lg:text-xl max-w-9xl leading-relaxed font-normal opacity-90'>
            A modular Power Platform-based application designed to digitize the entire maintenance
            lifecycle from breakdown entry and task assignment to executive dashboards and
            predictive insights.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8'>
          {solutions.map((item, index) => (
            <div
              key={index}
              className='p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] bg-white border border-[#DCDFE5] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group flex flex-col gap-4 md:gap-6'
            >
              <div className='flex items-center gap-4'>
                <div
                  className='flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-110'
                  style={{
                    background: 'linear-gradient(135deg, #676F7E 0%, #1AA2E6 100%)',
                  }}
                >
                  <img src={item.icon} alt={item.title} className='w-5 h-5 md:w-6 md:h-6' />
                </div>
                <h3 className='text-lg md:text-xl font-bold text-[#131720]'>{item.title}</h3>
              </div>
              <p className='text-[#676F7E] text-sm md:text-base lg:text-lg leading-relaxed opacity-90'>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
