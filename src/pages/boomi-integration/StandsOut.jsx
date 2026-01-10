'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

const features = [
  {
    title: 'Integration Delivery',
    description:
      'AI-powered mapping and reusable blueprints enable faster and more scalable deployments beyond standard connector setups.',
    icon: '/images/boomiimage1.svg',
  },
  {
    title: 'Frameworks & Accelerators',
    description:
      'Pre-built connectors, ROI calculators, and governance toolkits speed up delivery while ensuring long-term business value.',
    icon: '/images/boomiimage2.svg',
  },
  {
    title: 'AI Capabilities',
    description:
      'Agentic AI integration brings advanced error handling, anomaly detection, and predictive monitoring for self-healing systems.',
    icon: '/images/boomiimage3.svg',
  },
  {
    title: 'Support & Maintenance',
    description:
      '24×7 proactive monitoring with SLA-driven managed services identify and resolve issues before they impact operations.',
    icon: '/images/boomiimage4.svg',
  },
  {
    title: 'Industry Expertise',
    description:
      'Deep expertise in Retail, Manufacturing, Healthcare, Finance, and Multi-Cloud with domain-specific accelerators.',
    icon: '/images/boomiimage5.svg',
  },
  {
    title: 'Business Value Focus',
    description:
      'Every project is ROI-driven—designed to make money, save money, or prevent risk with tangible business outcomes.',
    icon: '/images/boomiimage6.svg',
  },
];

const StandsOut = () => {
  return (
    <section
      className='w-full pt-96 pb-32 relative overflow-hidden -mt-80'
      style={{
        background: 'linear-gradient(135deg, #EAD6EE 0%, #F5E6D8 100%)', // Soft Purple to Peach gradient approximation
      }}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Header Navigation-like Layout */}
        <div className='flex items-center justify-between gap-4 mb-16'>
          <div className='w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm shrink-0'>
            <Image src='/images/partners/boomi/Spark.svg' alt='Spark' width={28} height={28} />
          </div>
          {/* Dotted Line */}
          <div className='flex-1 h-[2px] bg-[linear-gradient(to_right,#A0A0A0_50%,rgba(0,0,0,0)_0%)] bg-[length:10px_2px] bg-repeat-x opacity-30'></div>

          <Link
            href='/contact'
            className='px-8 py-2 rounded-full border font-medium hover:bg-purple-50 transition shrink-0 flex items-center gap-2'
            style={{ borderColor: '#6F2B8B', color: '#6F2B8B' }}
          >
            Talk to our experts
            <FiArrowRight className='w-4 h-4' aria-hidden />
          </Link>
        </div>

        {/* Title and Description */}
        <div className='flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16'>
          <h2 className='text-[32px] md:text-[40px] font-medium text-[#404040] leading-tight'>
            How GWC Stands Out
          </h2>
          <p className='text-[#525252] max-w-lg text-[12px] md:text-[15px] leading-relaxed'>
            While typical Boomi partners focus on basic implementations, GWC delivers
            enterprise-grade solutions with AI powered innovation and proven business value.
          </p>
        </div>

        {/* Cards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
          {features.map((feature, index) => (
            <div
              key={index}
              className='bg-white rounded-xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-lg transition-shadow duration-300'
            >
              <div className='mb-6 p-4 rounded-2xl bg-[#FAFAFA] border border-[#E5E5E5] inline-flex items-center justify-center'>
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={32}
                  height={32}
                  className='w-8 h-8'
                />
              </div>
              <h3 className='text-[#D97706] font-semibold text-[16px] mb-4'>{feature.title}</h3>
              <p className='text-[#525252] text-[14px] leading-relaxed'>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StandsOut;
