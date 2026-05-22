'use client';

import Image from 'next/image';

const KeyCapabilities = () => {
  const capabilities = [
    {
      icon: '/images/Templates/tez/tezsvg6.svg',
      title: 'Centralized Data Platform',
      description:
        'A single source of truth consolidating all operational, transactional, and IoT data streams.',
    },
    {
      icon: '/images/Templates/tez/tezsvg7.svg',
      title: 'Optimized ETL Pipelines',
      description:
        'High-performance data pipelines with incremental loading, reducing processing time by up to 60%.',
    },
    {
      icon: '/images/Templates/tez/tezsvg8.svg',
      title: 'AI-Powered Analytics',
      description:
        'Predictive models and machine learning insights surfaced through an intuitive App Studio interface.',
    },
    {
      icon: '/images/Templates/tez/tezsvg9.svg',
      title: 'Role-Based Dashboards',
      description:
        'PDP-enabled dashboards delivering personalized views for every role and client segment.',
    },
    {
      icon: '/images/Templates/tez/tezsvg10.svg',
      title: 'Data Governance & Security',
      description:
        'Enterprise-grade governance with comprehensive monitoring, audit trails, and access controls.',
    },
    {
      icon: '/images/Templates/tez/tezsvg11.svg',
      title: 'Unified Reporting Framework',
      description:
        'Standardized KPIs and automated reporting that eliminated manual processes and human error.',
    },
  ];

  return (
    <section className='relative w-full bg-[#102941] py-24 px-6 md:px-16 lg:px-24'>
      <div className='max-w-7xl mx-auto'>
        {/* Heading Section */}
        <div className='mb-16'>
          <h2 className='font-bold mb-6 text-center' style={{ color: '#FCFBF8', fontSize: '36px' }}>
            Key Capabilities Delivered
          </h2>
          <p
            className='max-w-5xl mx-auto text-center'
            style={{ color: '#FAFAFAA6', fontSize: '18px' }}
          >
            A comprehensive suite of capabilities designed to drive operational excellence and
            strategic insight.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {capabilities.map((item, index) => (
            <div
              key={index}
              className='p-8 rounded-xl border border-[#FAFAFA] flex flex-col items-start gap-6 hover:bg-[#ffffff05] transition-colors'
              style={{ minHeight: '260px' }}
            >
              {/* Icon */}
              <div className='flex-shrink-0'>
                <Image src={item.icon} alt='' width={32} height={32} className='object-contain' />
              </div>

              {/* Text Content */}
              <div>
                <h3 className='font-bold mb-4' style={{ color: '#FCFBF8', fontSize: '20px' }}>
                  {item.title}
                </h3>
                <p className='leading-relaxed' style={{ color: '#FAFAFAA6', fontSize: '15px' }}>
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
