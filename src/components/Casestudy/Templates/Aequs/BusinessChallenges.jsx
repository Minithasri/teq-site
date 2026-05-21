'use client';

import React from 'react';

const BusinessChallenges = () => {
  const challenges = [
    {
      title: 'Manual Data Entry',
      description:
        'Testing activities were recorded manually, leading to inefficiencies and high error rates.',
      icon: '/images/Templates/aequs/aequssvg1.svg',
    },
    {
      title: 'Limited Traceability',
      description:
        'Parts moving across testing stages lacked end-to-end tracking and audit capability.',
      icon: '/images/Templates/aequs/aequssvg2.svg',
    },
    {
      title: 'Scheduling Bottlenecks',
      description: 'Machine allocation and resource scheduling relied on informal coordination.',
      icon: '/images/Templates/aequs/aequssvg3.svg',
    },
    {
      title: 'Error-Prone Processes',
      description:
        'Heavy dependency on manual input increased risk of data inaccuracies and compliance gaps.',
      icon: '/images/Templates/aequs/aequssvg4.svg',
    },
    {
      title: 'Delayed Reporting',
      description:
        'Report generation was slow and labor-intensive, limiting real-time visibility for decision-makers.',
      icon: '/images/Templates/aequs/aequssvg5.svg',
    },
    {
      title: 'No Centralized System',
      description:
        'Testing workflows were fragmented with no unified platform to manage the full lifecycle.',
      icon: '/images/Templates/aequs/aequssvg6.svg',
    },
  ];

  return (
    <section className='py-20' style={{ backgroundColor: '#F3F5F7' }}>
      <div className='max-w-9xl mx-auto px-6 md:px-16 lg:px-24'>
        {/* Section Header */}
        <div className='mb-16 text-center'>
          <h2 className='text-4xl font-bold mb-6'>Business Challenges</h2>
          <p className='text-lg w-full' style={{ color: '#6A7181' }}>
            The organization faced critical operational gaps that hindered quality assurance
            outcomes and testing throughput.
          </p>
        </div>

        {/* Challenges Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {challenges.map((item, index) => (
            <div
              key={index}
              className='bg-white p-8 rounded-[20px] border-2 flex flex-col space-y-6 transition-all duration-300 shadow-[0px_4px_12px_rgba(0,0,0,0.08)]'
            >
              {/* Icon Container */}
              <div
                className='w-14 h-14 rounded-xl flex items-center justify-center'
                style={{
                  backgroundColor: '#ED180026',
                }}
              >
                <img src={item.icon} alt={item.title} className='w-8 h-8' />
              </div>

              {/* Card Content */}
              <div className='space-y-3'>
                <h3 className='text-xl font-bold text-[#0F1729]/80'>{item.title}</h3>
                <p className='leading-relaxed' style={{ color: '#6A7181' }}>
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

export default BusinessChallenges;
