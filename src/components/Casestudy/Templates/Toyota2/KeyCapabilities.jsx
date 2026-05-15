'use client';
import React from 'react';

const KeyCapabilities = () => {
  const capabilities = [
    {
      title: 'Maintenance Workflow Automation',
      description:
        'Digitized end-to-end maintenance workflows replacing manual logs with structured, automated processes — from issue logging to resolution tracking.',
      icon: '/images/Templates/toyota2/toysvg14.svg',
    },
    {
      title: 'Real-Time Monitoring',
      description:
        'Live dashboards providing instant visibility into equipment status, active breakdowns, and repair progress across all facilities.',
      icon: '/images/Templates/toyota2/toysvg15.svg',
    },
    {
      title: 'Smart Escalation & Task Management',
      description:
        'Automated task assignment, approval routing, and multi-level escalation ensuring no issue goes unresolved beyond defined SLAs.',
      icon: '/images/Templates/toyota2/toysvg16.svg',
    },
    {
      title: 'Data Integration & Centralization',
      description:
        'Unified data layer connecting SQL Server, SharePoint, external systems, and legacy sources via Azure Data Factory pipelines.',
      icon: '/images/Templates/toyota2/toysvg17.svg',
    },
    {
      title: 'Advanced Analytics & Insights',
      description:
        'Power BI-driven analytics surfacing downtime patterns, maintenance KPIs, resource utilization, and predictive maintenance opportunities.',
      icon: '/images/Templates/toyota2/toysvg18.svg',
    },
  ];

  return (
    <section
      className='relative py-10 md:py-20 overflow-visible'
      style={{
        background: 'linear-gradient(180deg, #375792 0%, #122956 100%)',
      }}
    >
      {/* Overlapping Image */}
      <div className='absolute -top-24 md:-top-48 lg:-top-44 -right-10 md:right-20 w-[220px] md:w-[550px] lg:w-[550px] z-20 pointer-events-none select-none opacity-40 md:opacity-100'>
        <img
          src='/images/Templates/toyota2/toy3.png'
          alt='Automotive chassis'
          className='w-full h-auto object-contain'
        />
      </div>

      <div className='max-w-7xl mx-auto px-4 md:px-12 relative z-10'>
        {/* Badge */}
        <div className='mb-10'>
          <span
            className='inline-block px-8 py-2.5 rounded-full text-[#131720] text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase shadow-md'
            style={{
              background: 'linear-gradient(98.89deg, #F4C025 0%, #FE7B02 100%)',
            }}
          >
            Key Capabilities
          </span>
        </div>

        {/* Heading */}
        <div className='mb-8 md:mb-10'>
          <h2 className='text-xl md:text-2xl lg:text-4xl font-bold text-white mb-6 md:mb-8 leading-tight'>
            Capabilities Delivered
          </h2>
        </div>

        {/* Capabilities List */}
        <div className='flex flex-col gap-4 md:gap-6 max-w-6xl'>
          {capabilities.map((item, index) => (
            <div
              key={index}
              className='p-5 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] border-t border-[#FFFFFF1A] backdrop-blur-[4px] flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-10 transition-all duration-300 hover:scale-[1.01] hover:bg-[#FFFFFF1A]'
              style={{
                backgroundColor: '#FFFFFF0D',
              }}
            >
              <div
                className='flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg'
                style={{
                  background: 'linear-gradient(135deg, #676F7E 0%, #1AA2E6 100%)',
                }}
              >
                <img src={item.icon} alt={item.title} className='w-6 h-6 md:w-7 md:h-7' />
              </div>
              <div className='flex-1'>
                <h3 className='text-lg md:text-2xl font-bold text-white mb-2 md:mb-3'>
                  {item.title}
                </h3>
                <p className='text-white text-sm md:text-lg leading-relaxed opacity-85'>
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
