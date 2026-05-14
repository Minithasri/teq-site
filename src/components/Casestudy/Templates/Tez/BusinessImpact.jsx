'use client';

import Image from 'next/image';

const BusinessImpact = () => {
  const impacts = [
    {
      value: '45-60%',
      title: 'Reduction in Data Processing Time',
      description:
        'Optimized ETL pipelines with incremental loading dramatically accelerated data refresh cycles.',
      isArrow: false,
    },
    {
      value: '70%',
      title: 'Reduction in Manual Reporting Effort',
      description:
        'Automated dashboards and unified reporting eliminated hours of manual data extraction and manipulation.',
      isArrow: false,
    },
    {
      title: 'Improved Data Governance & Security',
      description:
        'Centralized governance framework with comprehensive monitoring ensured compliance and built organizational trust in data.',
      isArrow: true,
    },
    {
      title: 'Faster, More Accurate Decision-Making',
      description:
        'Real-time, AI-powered insights empowered stakeholders to make confident, data-driven decisions at speed.',
      isArrow: true,
    },
  ];

  return (
    <section className='relative w-full bg-white py-24 px-6 md:px-16 lg:px-24'>
      <div className='max-w-7xl mx-auto'>
        {/* Heading Section */}
        <div className='mb-16'>
          <h2 className='font-bold mb-6' style={{ color: '#29CF04', fontSize: '36px' }}>
            Business Impact
          </h2>
          <p className='max-w-4xl' style={{ color: '#6C7993', fontSize: '18px' }}>
            Measurable outcomes that transformed how the client operates, reports, and makes
            strategic decisions.
          </p>
        </div>

        {/* Impact Cards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {impacts.map((item, index) => (
            <div
              key={index}
              className='p-10 rounded-xl border border-[#29CF04] flex flex-col items-start gap-4 hover:shadow-lg transition-all bg-white'
              style={{ minHeight: '220px' }}
            >
              <div className='flex items-center gap-4 mb-2'>
                {item.isArrow ? (
                  <Image
                    src='/images/Templates/tez/tezsvg12.svg'
                    alt='Improvement'
                    width={16}
                    height={32}
                    className='object-contain'
                  />
                ) : (
                  <span className='font-bold' style={{ color: '#29CF04', fontSize: '32px' }}>
                    {item.value}
                  </span>
                )}
                <h3 className='font-bold' style={{ color: '#151C28', fontSize: '20px' }}>
                  {item.title}
                </h3>
              </div>

              <p className='leading-relaxed' style={{ color: '#6C7993', fontSize: '16px' }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessImpact;
