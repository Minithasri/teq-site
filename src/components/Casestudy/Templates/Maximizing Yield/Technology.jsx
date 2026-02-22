'use client';

import Image from 'next/image';

const technologies = [
  {
    icon: '/images/Templates/template2/iconnew1.svg',
    title: 'Power BI',
    description: 'Real-time visualization and predictive trend analysis',
  },
  {
    icon: '/images/Templates/template2/iconnew2.svg',
    title: 'Power Automate',
    description: 'Data refresh, alerts, and workflow automation',
  },
  {
    icon: '/images/Templates/template2/iconnew3.svg',
    title: 'SQL Server / Azure Data Lake',
    description: 'Centralized data storage and integration',
  },
  {
    icon: '/images/Templates/template2/iconnew4.svg',
    title: 'Python / DAX Models',
    description: 'Predictive analytics and performance calculations',
  },
  {
    icon: '/images/Templates/template2/iconnew5.svg',
    title: 'PLC / MES Integration',
    description: 'Real-time data ingestion from shop-floor systems',
  },
];

export default function Technology() {
  return (
    <section className='w-full py-20 bg-[#F6F6F6]'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h2 className='text-[32px] md:text-[40px] font-bold text-[#1D2530] mb-4'>
            Technology Stack
          </h2>
          <p className='text-[16px] md:text-[18px] text-[#65758B] leading-relaxed max-w-3xl mx-auto'>
            Enterprise-grade tools powering real-time insights
          </p>
        </div>

        {/* Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {technologies.map((tech, index) => (
            <div
              key={index}
              className='bg-white rounded-2xl p-6 border border-[#E5E7EB] transition-transform duration-300 flex flex-col justify-between group h-full'
            >
              <div className='flex justify-between items-start mb-4'>
                <span className='inline-block px-4 py-2 bg-[#11B7D4] text-white text-sm font-semibold rounded-full self-start'>
                  {tech.title}
                </span>
                <div className='relative w-24 h-16 flex-shrink-0'>
                  <Image
                    src={tech.icon}
                    alt={tech.title}
                    fill
                    className='object-contain drop-shadow-none'
                  />
                </div>
              </div>

              <p className='text-[#65758B] text-base leading-relaxed'>{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
