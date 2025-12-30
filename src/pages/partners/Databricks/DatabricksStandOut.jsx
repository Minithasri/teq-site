'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
// Reusing Spark icon
import img1 from '../../../../public/images/solutions/Icon.svg';

const features = [
  {
    title: 'Unity Catalog & Governance First',
    subtitle: 'Built in governance and compliance.',
    icon: '/images/partners/databricks/icon_db_1.svg',
    statTitle: '100%',
    statDesc: 'Compliance-ready',
  },
  {
    title: 'Hybrid + Multi-Cloud Flexibility',
    subtitle: 'Flexible across on premises and multi cloud.',
    icon: '/images/partners/databricks/icon_db_2.svg',
    statTitle: 'Cloud',
    statDesc: 'deployment ready',
  },
  {
    title: 'Real-Time & Batch Unified Workflows',
    subtitle: 'Real time and batch data processing.',
    icon: '/images/partners/databricks/icon_db_3.svg',
    statTitle: 'Unified',
    statDesc: 'stream + batch',
  },
  {
    title: 'AI/ML & Analytics Embedded',
    subtitle: 'ML tools that turn insights into action.',
    icon: '/images/partners/databricks/icon_db_4.svg',
    statTitle: 'Built-in',
    statDesc: 'AI/ML support',
  },
  {
    title: 'Performance & Cost Optimization',
    subtitle: 'Optimized performance with cost control.',
    icon: '/images/partners/databricks/icon_db_5.svg',
    statTitle: 'Optimized',
    statDesc: 'cost + performance',
  },
  {
    title: 'Ongoing Innovation & Support',
    subtitle: 'Continuous monitoring and enablement.',
    icon: '/images/partners/databricks/icon_db_6.svg',
    statTitle: 'Continuous',
    statDesc: 'partnership',
  },
];

const DatabricksStandOut = () => {
  return (
    <section className='w-full bg-white py-20 relative overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <header className='flex items-center mb-16 gap-4'>
          <div className='w-14 h-14 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center shrink-0'>
            <Image src={img1} alt='' aria-hidden width={24} height={24} />
          </div>
          <div
            aria-hidden
            className='flex-1 h-[2px] bg-[linear-gradient(to_right,#E5E7EB_50%,rgba(0,0,0,0)_0%)] bg-[length:12px_2px] bg-repeat-x'
          />
          <Link
            href='/contact'
            className='w-[250px] h-[50px] rounded-full border border-[#6F2B8B] text-[#6F2B8B] font-medium hover:bg-purple-50 transition-colors shrink-0 flex items-center justify-center gap-2 text-sm'
          >
            Talk to Our Experts
            <FiArrowRight className='w-4 h-4' />
          </Link>
        </header>

        {/* Title & Description */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-20'>
          <div>
            <h2 className='text-3xl md:text-[40px] font-bold text-gray-900 leading-tight'>
              What Makes
              <br />
              <span
                style={{
                  background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                GWC Databricks Stand Out
              </span>
            </h2>
          </div>
          <div className='flex justify-start lg:justify-end'>
            <p className='text-gray-600 max-w-lg leading-relaxed lg:text-right text-sm md:text-[15px]'>
              Our Databricks solutions accelerate time to value with flexible, secure, and high
              performance architectures supported by continuous innovation and expert guidance.
            </p>
          </div>
        </div>

        {/* Content Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-20'>
          {/* Left Column: Feature List Card */}
          <div className='bg-[#F8F9FC] rounded-[40px] p-6 md:p-10 space-y-4'>
            {features.map((feature, index) => (
              <div
                key={index}
                className='flex items-center gap-6 p-4 bg-white rounded-2xl shadow-sm border border-gray-50'
              >
                {/* Icon */}
                <div
                  className='w-14 h-14 rounded-full flex items-center justify-center shrink-0'
                  style={{
                    background:
                      'linear-gradient(0deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.85) 100%), linear-gradient(107deg, #7030B1 0%, #B56DD3 100%)',
                  }}
                >
                  <Image src={feature.icon} alt='' width={24} height={24} />
                </div>
                {/* Text */}
                <div>
                  <h3 className='text-gray-900 font-bold text-lg mb-1'>{feature.title}</h3>
                  <p className='text-gray-500 text-sm'>{feature.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Stats List */}
          <div className='flex flex-col justify-center space-y-12 py-6'>
            {features.map((feature, index) => (
              <div key={index} className='flex flex-col'>
                <div className='flex items-baseline gap-4'>
                  <span className='text-[#FF7A00] text-3xl md:text-4xl font-bold'>
                    {feature.statTitle}
                  </span>
                  <span className='text-gray-400 text-lg md:text-xl font-medium'>
                    {feature.statDesc}
                  </span>
                </div>
                {/* Divider Line */}
                {index !== features.length - 1 && (
                  <div className='w-full h-[1px] bg-gray-100 mt-8' />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DatabricksStandOut;
