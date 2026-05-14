'use client';

import Image from 'next/image';

const TechnologyStack = () => {
  const logos = [
    '/images/Templates/tez/tezsvg13.svg',
    '/images/Templates/tez/tezsvg14.svg',
    '/images/Templates/tez/tezsvg15.svg',
    '/images/Templates/tez/tezsvg16.svg',
    '/images/Templates/tez/tezsvg17.svg',
    '/images/Templates/tez/tezsvg18.svg',
  ];

  const stack = [
    { category: 'CORE PLATFORM', title: 'Domo Platform' },
    { category: 'DATA TRANSFORMATION', title: 'Magic ETL' },
    { category: 'AI & ANALYTICS', title: 'App Studio' },
    { category: 'ACCESS CONTROL', title: 'PDP (Personalized Data Permissions)' },
    { category: 'GOVERNANCE & MONITORING', title: 'Domo Stats' },
    { category: 'DATABASE', title: 'SQL Server' },
    { category: 'DATABASE', title: 'PostgreSQL' },
    { category: 'DATA SOURCE', title: 'Excel' },
  ];

  return (
    <section className='relative w-full bg-[#EFF1F5] py-24 px-6 md:px-16 lg:px-24'>
      <div className='max-w-7xl mx-auto'>
        {/* Logos and Heading Section */}
        <div className='flex flex-col md:flex-row items-center justify-between gap-12 mb-16'>
          <div className='flex-1'>
            <h2 className='font-bold mb-6' style={{ color: '#151C28', fontSize: '36px' }}>
              Technology Stack
            </h2>
            <p className='max-w-xl' style={{ color: '#6C7993', fontSize: '18px' }}>
              A modern, enterprise-grade technology ecosystem purpose-built for scale, performance,
              and intelligence.
            </p>
          </div>

          {/* Logo Row */}
          <div className='flex flex-wrap items-center gap-8 md:justify-end'>
            {logos.map((logo, index) => (
              <div key={index} className='relative w-16 h-16 md:w-20 md:h-20'>
                <Image src={logo} alt='Tech Logo' fill className='object-contain' />
              </div>
            ))}
          </div>
        </div>

        {/* Stack Cards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          {stack.map((item, index) => (
            <div
              key={index}
              className='bg-white p-6 rounded-xl border border-[#4182F2] flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow'
              style={{ minHeight: '120px' }}
            >
              <span
                className='font-bold mb-2 tracking-wider'
                style={{ color: '#288A82', fontSize: '12px' }}
              >
                {item.category}
              </span>
              <h3 className='font-bold' style={{ color: '#151C28', fontSize: '16px' }}>
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;
