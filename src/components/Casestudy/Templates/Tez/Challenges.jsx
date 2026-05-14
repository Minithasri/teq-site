'use client';

import Image from 'next/image';

const Challenges = () => {
  const challenges = [
    {
      icon: '/images/Templates/tez/tezsvg1.svg',
      title: 'Fragmented Data Ecosystem',
      description:
        'Critical data was siloed across valet management systems, payment gateways, IoT sensor networks, and customer-facing applications making unified analysis nearly impossible.',
    },
    {
      icon: '/images/Templates/tez/tezsvg2.svg',
      title: 'Inconsistent KPIs & Reporting',
      description:
        'Different systems produced conflicting metrics. Stakeholders lacked a single source of truth, leading to misaligned priorities and delayed strategic decisions.',
    },
    {
      icon: '/images/Templates/tez/tezsvg3.svg',
      title: 'Slow, Manual Processes',
      description:
        'Reporting relied on manual data extraction and spreadsheet manipulation, consuming valuable analyst hours and introducing human error at every step.',
    },
    {
      icon: '/images/Templates/tez/tezsvg4.svg',
      title: 'Underperforming ETL Pipelines',
      description:
        'Legacy data pipelines were riddled with redundancies and inefficiencies, resulting in slow refresh cycles and stale data for business-critical dashboards.',
    },
    {
      icon: '/images/Templates/tez/tezsvg5.svg',
      title: 'Limited Governance & Visibility',
      description:
        'Without centralized data governance, the organization lacked visibility into data quality, pipeline health, and access controls creating compliance and security risks.',
    },
  ];

  return (
    <section className='relative w-full bg-[#EFF1F5] py-20 px-6 md:px-16 lg:px-24'>
      <div className='max-w-7xl mx-auto'>
        {/* Heading Section */}
        <div className='mb-16'>
          <h2
            className='font-bold uppercase tracking-wider mb-6'
            style={{ color: '#F41B1F', fontSize: '32px' }}
          >
            THE CHALLENGE
          </h2>
          <p className='max-w-4xl' style={{ color: '#6C7993', fontSize: '18px' }}>
            Rapid growth exposed critical gaps in the client’s data infrastructure, threatening
            operational efficiency and strategic agility.
          </p>
        </div>

        {/* Challenges Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10'>
          {challenges.map((item, index) => (
            <div
              key={index}
              className='bg-white p-8 rounded-xl border-2 border-[#F41B1F] flex items-start gap-6 shadow-sm hover:shadow-md transition-shadow'
            >
              {/* Icon with Border */}
              <div className='flex-shrink-0 p-2 rounded-lg border-2 border-[#F41B1F] flex items-center justify-center w-12 h-12'>
                <Image src={item.icon} alt='' width={24} height={24} className='object-contain' />
              </div>

              {/* Text Content */}
              <div>
                <h3 className='font-bold mb-3' style={{ color: '#151C28', fontSize: '20px' }}>
                  {item.title}
                </h3>
                <p className='leading-relaxed' style={{ color: '#6C7993', fontSize: '15px' }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Right Image (tez3) */}
      <div className='absolute bottom-0 right-0 w-[40%] max-w-[600px] pointer-events-none'>
        <Image
          src='/images/Templates/tez/tez3.png'
          alt='Truck with cargo'
          width={600}
          height={400}
          className='object-contain ml-auto'
        />
      </div>
    </section>
  );
};

export default Challenges;
