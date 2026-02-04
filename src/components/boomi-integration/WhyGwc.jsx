'use client';

import Image from 'next/image';

const features = [
  {
    title: 'Boomi AI',
    description: 'Implement AI Agents that autonomously execute tasks',
    icon: '/images/booicon1.svg',
    details: [
      'Boost productivity, efficiency, and measurable business value',
      'Ensure automation without compromising security',
      'Adapt to evolving business needs with intelligent AI-driven insights',
      'Reduce manual intervention with self-learning automation',
    ],
  },
  {
    title: 'Boomi Integration',
    description: 'Connect applications, data, and systems across cloud & on premise',
    icon: '/images/booicon5.svg',
    details: [
      'Accelerate innovation with pre-built integrations',
      'Leverage machine learning for intelligent automation and reduced maintenance',
      'Unify data flows for seamless cross-platform connectivity',
      'Scale integrations to support future business growth',
    ],
  },
  {
    title: 'Boomi Flow',
    description: 'Optimize business efficiencies and collaboration',
    icon: '/images/booicon2.svg',
    details: [
      'Build custom applications quickly with low-code, cloud-native tech',
      'Automate workflows for secure, scalable digital experiences',
      'Enhance team collaboration with streamlined approvals and processes',
      'Enable rapid innovation with reusable components and templates',
    ],
  },
  {
    title: 'Boomi API Management',
    description: 'Centralize and control all APIs with the Boomi API Control Plane',
    icon: '/images/booicon6.svg',
    details: [
      'Expose real-time integrations securely, including shadow APIs',
      'Enable effortless data access within and outside your organization',
      'Monitor API performance with detailed analytics and reporting',
      'Enforce policies and governance for compliance and security',
    ],
  },
  {
    title: 'Boomi Master Data Hub (MDH)',
    description: 'Gain a 360° view of critical data domains',
    icon: '/images/booicon3.svg',
    details: [
      'Enforce data modeling, policies, and governance',
      'Reduce data management challenges and enable confident decision-making',
      'Synchronize master data across multiple systems in real-time',
      'Improve data quality with validation, deduplication, and enrichment',
    ],
  },
  {
    title: 'Boomi Event Streams',
    description: 'Enable real time, event driven integrations',
    icon: '/images/booicon7.svg',
    details: [
      'Guarantee delivery and ordering at scale',
      'Handle high data volumes with speed and resilience',
      'Enable event-driven architectures for faster response times',
      'Ensure fault tolerance with advanced error-handling mechanisms',
    ],
  },
  {
    title: 'Boomi EDI/B2B',
    description: 'Streamline trading partner networks with secure, cloud-native integration',
    icon: '/images/booicon4.svg',
    details: [
      'Support major standards like X12, EDIFACT, HL7, RosettaNet',
      'Ensure compliance and end-to-end transaction visibility',
      'Accelerate onboarding of new partners with reusable templates',
      'Enable scalable B2B integration with robust security protocols',
    ],
  },
  {
    title: 'Boomi Managed Services',
    description: 'SLA driven support for all Boomi components',
    icon: '/images/booicon8.svg',
    details: [
      'Manage runtime/platform (Atom/Molecule) and hosting (cloud/on-premise)',
      'Tailored, end-to-end support ensuring long-term success',
      'Proactive monitoring and performance optimization',
      'Expert guidance to reduce downtime and maximize ROI',
    ],
  },
];

const WhyGwc = () => {
  return (
    <section className='w-full bg-white pt-24 pb-16 relative overflow-hidden'>
      {/* Background Ellipses */}
      <div className='absolute inset-0 w-full h-full flex items-center justify-start z-0'>
        <div className='relative w-[800px] h-[800px] -translate-x-1/4'>
          <Image
            src='/images/HomePage/circle_big.webp'
            alt='Background Decoration'
            fill
            className='object-contain opacity-100'
            priority
          />
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Title Section */}
        <div className='text-center mb-16'>
          <div className='flex items-center justify-center gap-3 mb-4'>
            <h2 className='text-[28px] md:text-[32px] font-medium text-[#5C2B8F]'>
              Why Boomi with GWC?
            </h2>
            <Image
              src='/images/partners/boomi/Spark.svg'
              alt='Spark'
              width={32}
              height={32}
              className='w-6 h-6 md:w-8 md:h-8'
            />
          </div>
          <p className='text-[#404040] text-[12px] md:text-[16px] max-w-3xl mx-auto leading-relaxed'>
            End-to-end integration services designed to accelerate your digital transformation and
            unlock the full potential of your enterprise systems.
          </p>
        </div>

        {/* Cards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {features.map((feature, index) => (
            <div key={index} className='group h-[170px] [perspective:1000px]'>
              {/* Flip Inner Container */}
              <div className='relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
                {/* Front Face */}
                <div
                  className='absolute inset-0 backface-hidden bg-white rounded-[20px] p-6 shadow-sm border border-gray-100 flex items-center gap-6'
                  style={{
                    backfaceVisibility: 'hidden',
                  }}
                >
                  <div className='shrink-0 w-16 h-16 bg-gradient-to-b from-[#7030B1] to-[#B56DD3] rounded-xl flex items-center justify-center p-3'>
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={40}
                      height={40}
                      className='w-10 h-10 object-contain brightness-0 invert'
                    />
                  </div>
                  <div>
                    <h3 className='text-lg font-bold text-[#333] mb-2'>{feature.title}</h3>
                    <p className='text-gray-600 text-sm leading-relaxed'>{feature.description}</p>
                  </div>
                </div>

                {/* Back Face */}
                <div
                  className='absolute inset-0 backface-hidden bg-[#5C2B8F] rounded-[20px] p-6 shadow-sm flex flex-col justify-center text-white [transform:rotateY(180deg)]'
                  style={{
                    backfaceVisibility: 'hidden',
                    background: 'linear-gradient(180deg, #7030B1 0%, #5C2B8F 100%)',
                  }}
                >
                  <ul className='list-disc list-outside ml-4 space-y-1'>
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className='text-xs md:text-sm leading-snug text-white/90'>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyGwc;
