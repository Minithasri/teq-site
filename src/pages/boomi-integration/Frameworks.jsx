import Image from 'next/image';

const features = [
  {
    icon: '/images/frame1.svg',
    title: 'Pre-Built Connector Library',
    description: 'Ready-to-use integrations for Salesforce, SAP, Workday, NetSuite, and Snowflake',
  },
  {
    icon: '/images/frame2.svg',
    title: 'AI-Powered Mapping Engine',
    description: 'Automatically maps data structures, accelerating complex migrations',
  },
  {
    icon: '/images/frame3.svg',
    title: 'Reusable Error Handling Blueprints',
    description: 'Standardized workflows for exception logging and resolution',
  },
  {
    icon: '/images/frame4.svg',
    title: 'Governance & Monitoring Toolkit',
    description: 'Centralized dashboards with alerts for integration health and compliance',
  },
  {
    icon: '/images/frame5.svg',
    title: 'ROI Calculator & Cost Estimator',
    description: 'Built-in tools to forecast savings and showcase tangible value',
  },
];

const Frameworks = () => {
  return (
    <section className='w-full py-16 md:py-24 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-16 relative'>
          <div className='flex justify-center mb-4'>
            <Image
              src='/images/partners/boomi/Spark.svg'
              alt='Spark'
              width={32}
              height={32}
              className='w-10 h-10'
            />
          </div>
          <h2 className='text-[32px] md:text-[40px] font-medium text-[#1F1F1F] mb-4'>
            Frameworks & Accelerators{' '}
            <span
              className='bg-clip-text text-transparent'
              style={{
                backgroundImage: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
              }}
            >
              (GWC Advantage)
            </span>
          </h2>
          <p className='text-[#525252] text-[12px] md:text-[15px] max-w-2xl mx-auto'>
            Proprietary tools and methodologies that accelerate delivery and ensure success
          </p>
        </div>

        {/* Grid Layout */}
        <div className='relative'>
          {/* Top Row (3 Items) */}
          <div className='grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 border-b border-gray-200'>
            {features.slice(0, 3).map((item, index) => (
              <div
                key={index}
                className='flex flex-col items-center text-center p-8 md:p-12 group hover:bg-gray-50 transition-colors duration-300'
              >
                <div className='mb-6 shrink-0'>
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={64}
                    height={64}
                    className='w-14 h-14'
                  />
                </div>
                <h3 className='font-semibold text-[#737373] mb-3 text-[16px]'>{item.title}</h3>
                <p className='text-[#737373] text-[14px] leading-relaxed max-w-xs mx-auto'>
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Row (2 Items) - Centered with vertical divider */}
          <div className='grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto divide-y md:divide-y-0 md:divide-x divide-gray-200'>
            {features.slice(3, 5).map((item, index) => (
              <div
                key={index}
                className='flex flex-col items-center text-center p-8 md:p-12 group hover:bg-gray-50 transition-colors duration-300'
              >
                <div className='mb-6 shrink-0'>
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={64}
                    height={64}
                    className='w-14 h-14'
                  />
                </div>
                <h3 className='font-semibold text-[#737373] mb-3 text-[16px]'>{item.title}</h3>
                <p className='text-[#737373] text-[14px] leading-relaxed max-w-xs mx-auto'>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Frameworks;
