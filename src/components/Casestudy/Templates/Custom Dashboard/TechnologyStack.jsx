'use client';

import Image from 'next/image';

const TechnologyStack = () => {
  const stack = {
    analytics: ['Domo', 'Magic ETL', 'App Studio', 'Dashboards', 'Jupyter', 'APP_DB'],
    development: ['React', 'JavaScript', 'CSS'],
    integration: ['PostgreSQL', 'Python', 'API-based Data Integration'],
  };

  const logos = [
    '/images/Templates/customdashboard/cdsvg12.svg',
    '/images/Templates/customdashboard/cdsvg13.svg',
    '/images/Templates/customdashboard/cdsvg14.svg',
    '/images/Templates/customdashboard/cdsvg15.svg',
    '/images/Templates/customdashboard/cdsvg16.svg',
    '/images/Templates/customdashboard/cdsvg17.svg',
    '/images/Templates/customdashboard/cdsvg18.svg',
    '/images/Templates/customdashboard/cdsvg19.svg',
  ];

  return (
    <section className='py-12 px-6 md:px-16 lg:px-24 bg-[#F0F1F5]'>
      <div className='max-w-7xl mx-auto'>
        {/* Technology Stack Heading */}
        <h2 className='font-bold mb-12' style={{ color: '#151C28', fontSize: '36px' }}>
          Technology Stack
        </h2>

        {/* Stack Categories */}
        <div className='flex flex-col gap-10 mb-20'>
          {/* Analytics Platform */}
          <div>
            <h3
              className='font-bold mb-6 uppercase tracking-wider'
              style={{ color: '#6A7181', fontSize: '18px' }}
            >
              ANALYTICS PLATFORM
            </h3>
            <div className='flex flex-wrap gap-3 items-center'>
              {stack.analytics.map((item, i) => (
                <div
                  key={i}
                  className='px-6 py-2.5 rounded-full font-medium'
                  style={{ backgroundColor: '#19202E', color: '#5AD8CC' }}
                >
                  {item}
                </div>
              ))}
              {/* Logos for this row */}
              <div className='flex gap-8 ml-8 items-center'>
                <Image
                  src={logos[0]}
                  alt='Domo'
                  width={140}
                  height={60}
                  className='object-contain'
                />
                <Image
                  src={logos[1]}
                  alt='Magic ETL'
                  width={100}
                  height={60}
                  className='object-contain'
                />
                <Image
                  src={logos[2]}
                  alt='Jupyter'
                  width={100}
                  height={60}
                  className='object-contain'
                />
              </div>
            </div>
          </div>

          {/* Custom Development */}
          <div>
            <h3
              className='font-bold mb-6 uppercase tracking-wider'
              style={{ color: '#6A7181', fontSize: '18px' }}
            >
              CUSTOM DEVELOPMENT
            </h3>
            <div className='flex flex-wrap gap-3 items-center'>
              {stack.development.map((item, i) => (
                <div
                  key={i}
                  className='px-6 py-2.5 rounded-full font-medium'
                  style={{ backgroundColor: '#19202E', color: '#5AD8CC' }}
                >
                  {item}
                </div>
              ))}
              {/* Logos for this row */}
              <div className='flex gap-8 ml-8 items-center'>
                <Image
                  src={logos[3]}
                  alt='React'
                  width={60}
                  height={60}
                  className='object-contain'
                />
                <Image src={logos[4]} alt='JS' width={60} height={60} className='object-contain' />
                <Image src={logos[5]} alt='CSS' width={60} height={60} className='object-contain' />
              </div>
            </div>
          </div>

          {/* Data & Integration */}
          <div>
            <h3
              className='font-bold mb-6 uppercase tracking-wider'
              style={{ color: '#6A7181', fontSize: '18px' }}
            >
              DATA & INTEGRATION
            </h3>
            <div className='flex flex-wrap gap-3 items-center'>
              {stack.integration.map((item, i) => (
                <div
                  key={i}
                  className='px-6 py-2.5 rounded-full font-medium'
                  style={{ backgroundColor: '#19202E', color: '#5AD8CC' }}
                >
                  {item}
                </div>
              ))}
              {/* Logos for this row */}
              <div className='flex gap-8 ml-8 items-center'>
                <Image
                  src={logos[6]}
                  alt='Postgres'
                  width={60}
                  height={60}
                  className='object-contain'
                />
                <Image
                  src={logos[7]}
                  alt='Python'
                  width={60}
                  height={60}
                  className='object-contain'
                />
              </div>
            </div>
          </div>
        </div>

        {/* Value Delivered Section */}
        <div className=''>
          <h2 className='font-bold mb-10' style={{ color: '#151C28', fontSize: '36px' }}>
            Value Delivered
          </h2>

          <div className='space-y-8 max-w-7xl'>
            <p className='leading-relaxed' style={{ color: '#151C28CC', fontSize: '20px' }}>
              By combining AI-powered analytics, custom-built dashboards, and intelligent
              automation, we transformed how this leading safety management platform provider
              understands and acts on their data.
            </p>

            <p className='leading-relaxed' style={{ color: '#151C28CC', fontSize: '20px' }}>
              Safety teams now make decisions up to 60% faster, with AI summaries surfacing critical
              risks before they escalate. Manual validation effort has been reduced by 50-65%,
              freeing teams to focus on proactive safety management rather than data wrangling.
            </p>

            <p className='leading-relaxed' style={{ color: '#151C28CC', fontSize: '20px' }}>
              The solution delivers a scalable, intuitive analytics ecosystem that grows with the
              client's needs supporting safer job sites, stronger compliance, and data-driven
              decision-making at every level of the organization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;
