'use client';

import Image from 'next/image';

const Solutions = () => {
  const steps = [
    {
      number: '01',
      title: 'Centralized Data Platform',
      description:
        'We architected and deployed a centralized data platform using Domo, consolidating data from valet systems, payment gateways, IoT sensors, and customer applications into a single, governed environment.',
    },
    {
      number: '02',
      title: 'Seamless Multi-Source Integration',
      description:
        'Leveraging native connectors and custom staging layers, we integrated disparate data sources eliminating silos and establishing a reliable data supply chain from ingestion to insight.',
    },
    {
      number: '03',
      title: 'Intelligent Data Transformation',
      description:
        'Using Magic ETL, we implemented robust data cleaning, transformation, and standardization workflows. A unified data model was built using advanced joins and append operations for cross-functional analytics.',
    },
    {
      number: '04',
      title: 'Pipeline Optimization',
      description:
        'We re-engineered existing pipelines with incremental loading strategies, removed processing redundancies, and significantly reduced refresh times ensuring data freshness without performance trade-offs.',
    },
    {
      number: '05',
      title: 'Role-Based Analytics & Dashboards',
      description:
        'PDP-based dashboards were developed to deliver personalized, role-specific views ensuring every stakeholder, from operations managers to C-suite executives, accesses only the data relevant to their role.',
    },
    {
      number: '06',
      title: 'AI-Driven Insights & Governance',
      description:
        'App Studio powered predictive analytics and AI-driven insights, while Domo Stats provided comprehensive monitoring, governance, and pipeline health visibility across the organization.',
    },
  ];

  return (
    <section className='relative w-full bg-white py-24 px-6 md:px-16 lg:px-24 overflow-hidden'>
      {/* Background Image (tez4) */}
      <div className='absolute top-0 right-0 w-full h-full z-0 opacity-40 pointer-events-none'>
        <Image
          src='/images/Templates/tez/tez4.png'
          alt='Robot and boxes background'
          fill
          className='object-contain object-right'
        />
      </div>

      <div className='max-w-9xl mx-auto relative z-10'>
        {/* Heading Section */}
        <div className='mb-20'>
          <h2
            className='font-bold uppercase tracking-wider mb-8'
            style={{ color: '#0E25D3', fontSize: '32px' }}
          >
            OUR APPROACH
          </h2>
          <p
            className='w-full font-medium leading-relaxed'
            style={{ color: '#000000', fontSize: '18px' }}
          >
            We delivered a comprehensive, end-to-end data transformation from fragmented silos to a
            unified intelligence platform that drives real-time decision-making.
          </p>
        </div>

        {/* Timeline Content */}
        <div className='relative'>
          {/* Vertical Line */}
          <div
            className='absolute left-[20px] top-4 bottom-4 w-[1px] hidden md:block'
            style={{ backgroundColor: '#0E25D3' }}
          />

          <div className='space-y-12'>
            {steps.map((step, index) => (
              <div key={index} className='flex items-start gap-8 relative'>
                {/* Number Badge */}
                <div
                  className='flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-white z-10'
                  style={{ backgroundColor: '#0E25D3', fontSize: '14px' }}
                >
                  {step.number}
                </div>

                {/* Text Content */}
                <div className='pt-1'>
                  <h3 className='font-bold mb-3' style={{ color: '#0E25D3', fontSize: '20px' }}>
                    {step.title}
                  </h3>
                  <p
                    className='max-w-9xl leading-relaxed text-[#151C28]'
                    style={{ fontSize: '16px' }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
