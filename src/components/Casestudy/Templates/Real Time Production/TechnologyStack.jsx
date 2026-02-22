'use client';

import Image from 'next/image';

export default function TechnologyStack() {
  const stack = [
    {
      label: 'IoT Device Integration',
      tag: 'IoT Core',
      icon: '/images/Templates/template1/icons1.svg',
      type: 'blue',
    },
    {
      label: 'Cloud Infrastructure',
      tag: 'Google Cloud Platform (GCP)',
      icon: '/images/Templates/template1/icons2.svg',
      type: 'yellow',
    },
    {
      label: 'Processing',
      tag: 'Python, SQL',
      icon: '/images/Templates/template1/icons3.svg',
      type: 'blue',
    },
    {
      label: 'Application Layer',
      tag: 'React, Node.js (Full Stack)',
      icon: '/images/Templates/template1/icons4.svg',
      type: 'yellow',
    },
    {
      label: 'Streaming Storage',
      tag: 'Real-time DB',
      icon: '/images/Templates/template1/icons5.svg',
      type: 'blue',
    },
    {
      label: 'Visualization',
      tag: 'Integrated UI Panels & Dashboards',
      icon: '/images/Templates/template1/icons6.svg',
      type: 'yellow',
    },
  ];

  return (
    <section className='w-full py-20 bg-[#F9FAFB]'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mb-12'>
          <h2 className='text-[32px] md:text-[36px] font-bold text-[#1D2530] mb-4'>
            Technology Stack
          </h2>
          <p className='text-[16px] md:text-[18px] text-[#65758B] max-w-7xl leading-relaxed'>
            A robust, scalable architecture built on industry-leading technologies and best
            practices for mission-critical manufacturing operations.
          </p>
        </div>

        {/* Stack List */}
        <div className='space-y-6 md:space-y-4'>
          {stack.map((item, index) => (
            <div
              key={index}
              className='flex flex-col sm:flex-row items-center gap-4 sm:gap-6 max-w-6xl'
            >
              {/* Card */}
              <div className='w-full flex-1 bg-white border border-gray-100 rounded-xl p-6 shadow-sm grid grid-cols-1 sm:grid-cols-2 items-center gap-4 sm:gap-0'>
                <span className='font-bold text-gray-900 text-[16px] md:text-base'>
                  {item.label}
                </span>

                <div className='flex justify-start sm:justify-start'>
                  <div
                    className={`px-4 py-1.5 rounded-xl text-sm font-medium w-fit`}
                    style={{
                      backgroundColor: item.type === 'blue' ? '#0846AA1A' : '#FBBD231A',
                      color: item.type === 'blue' ? '#0846AA' : '#1D2530',
                    }}
                  >
                    {item.tag}
                  </div>
                </div>
              </div>

              {/* Icon */}
              <div className='flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 relative order-first sm:order-last'>
                <Image src={item.icon} alt={item.label} fill className='object-contain' />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
