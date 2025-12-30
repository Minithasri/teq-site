'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

const solutions = [
  {
    title: 'Modernizing Legacy Platforms & Data Migrations',
    description:
      'Migrate and modernize data into a unified Databricks lakehouse while improving performance, governance, and cost efficiency.',
    icon: '/images/partners/databricks/icon_db2_1.svg',
  },
  {
    title: 'Building Secure, Governed Data Foundations',
    description:
      'Establish trusted data foundations with strong governance, access controls, lineage, and compliance built in.',
    icon: '/images/partners/databricks/icon_db2_2.svg',
  },
  {
    title: 'Real-Time Event Processing & Streaming Analytics',
    description:
      'Ingest and analyze live data streams to trigger alerts, power dashboards, and enable real time operational intelligence.',
    icon: '/images/partners/databricks/icon_db2_3.svg',
  },
  {
    title: 'Predictive Analytics & Machine Learning at Scale',
    description:
      'Build, deploy, and manage machine learning models at scale to drive forecasting, optimization, and intelligent decision making.',
    icon: '/images/partners/databricks/icon_db2_4.svg',
  },
  {
    title: 'Data Sharing & Ecosystem Collaboration',
    description:
      'Enable secure, governed data sharing across partners and stakeholders without duplication or data leakage.',
    icon: '/images/partners/databricks/icon_db2_5.svg',
  },
  {
    title: 'Business Intelligence & Visualization',
    description:
      'Deliver real time and historical insights through interactive dashboards tailored for leaders and business teams.',
    icon: '/images/partners/databricks/icon_db2_6.svg',
  },
];

const CoreSolutions = () => {
  return (
    <section className='w-full bg-[#F5F0FE] py-20 relative overflow-hidden'>
      {/* Background Decoration */}
      <div className='absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none'>
        <div className='relative w-full h-full opacity-100'>
          <Image
            src='/images/partners/databricks/bg_rounded.png'
            alt=''
            fill
            className='object-contain md:object-cover'
            priority
          />
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Title */}
        <div className='flex items-center justify-center gap-4 mb-12'>
          <h2 className='text-3xl md:text-4xl font-medium text-[#5C2B8F] text-center'>
            Core Solution Scenarios We Deliver
          </h2>
          <Image
            src='/images/partners/databricks/spark.svg'
            alt='Spark'
            width={32}
            height={32}
            className='w-6 h-6 md:w-8 md:h-8'
          />
        </div>

        {/* Grid Card Container */}
        <div className='bg-white rounded-[32px] p-4 md:p-6 border border-[#E5E5E5] mb-12 shadow-sm'>
          <div className='bg-[#E5E5E5] rounded-[24px] overflow-hidden border border-[#E5E5E5]'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px]'>
              {solutions.map((item, index) => (
                <div key={index} className='flex flex-col items-start p-8 md:p-10 bg-white h-full'>
                  <div className='w-12 h-12 mb-6'>
                    <Image src={item.icon} alt={item.title} width={48} height={48} />
                  </div>

                  <h3 className='text-lg font-bold text-gray-900 mb-3 leading-tight'>
                    {item.title}
                  </h3>

                  <p className='text-gray-500 text-sm leading-relaxed'>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className='flex justify-center'>
          <Link
            href='/contact'
            className='inline-flex items-center gap-2 text-white px-8 py-3.5 rounded-full font-medium transition-transform hover:scale-105 shadow-lg'
            style={{
              background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
            }}
          >
            Talk to Our Experts
            <FiArrowRight className='w-4 h-4' />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CoreSolutions;
