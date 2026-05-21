'use client';

import Image from 'next/image';

const Solutions = () => {
  const solutions = [
    {
      icon: '/images/Templates/customdashboard/cdsvg2.svg',
      title: 'Data Integration & Processing',
      description:
        "Integrated data from the platform's PostgreSQL backend into Domo via APIs. Performed data flattening and preprocessing using Python to ensure analytical readiness.",
    },
    {
      icon: '/images/Templates/customdashboard/cdsvg3.svg',
      title: 'ETL Pipeline Development',
      description:
        'Developed robust data pipelines and transformations using Magic ETL, enabling consistent and reliable data flow across all dashboard components.',
    },
    {
      icon: '/images/Templates/customdashboard/cdsvg4.svg',
      title: 'Advanced Dashboard Design',
      description:
        'Created interactive, publication-quality dashboards using App Studio and Jupyter integrations purpose-built for safety analytics and compliance monitoring.',
    },
    {
      icon: '/images/Templates/customdashboard/csvg20.svg',
      title: 'Custom Application Development',
      description:
        'Built full-stack custom applications using React, JavaScript, and CSS with APP_DB backend delivering tailored experiences beyond out-of-the-box capabilities.',
    },
    {
      icon: '/images/Templates/customdashboard/cdsvg5.svg',
      title: 'AI-Powered Insights',
      description:
        'Enabled AI-generated summaries for quick insights and decision-making, surfacing critical risks and compliance gaps automatically.',
    },
    {
      icon: '/images/Templates/customdashboard/cdsvg6.svg',
      title: 'Personalization & Automation',
      description:
        'Implemented dynamic filters, user-level views, customizable dashboard components, drill-down capabilities, and automated validation for incomplete data.',
    },
  ];

  return (
    <section className='w-full px-6 md:px-16 lg:px-24 bg-white'>
      <div className='w-full mx-auto'>
        {/* Heading Section - Plain Background */}
        <div className='mb-8 text-center'>
          <h2 className='font-bold mt-12 mb-6' style={{ fontSize: '36px' }}>
            Solution Implemented
          </h2>
          <p className='' style={{ color: '#6A7181', fontSize: '18px' }}>
            A comprehensive analytics ecosystem combining advanced dashboards, custom applications,
            and AI - built to transform safety data into decisive action.
          </p>
        </div>

        {/* Grid Section - Full Width Background */}
        <div className='relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] p-8 md:p-12 lg:p-24 overflow-hidden'>
          {/* Background Image Container */}
          <div className='absolute inset-0 z-0'>
            <Image
              src='/images/Templates/customdashboard/cd3.png'
              alt='Solution Background'
              fill
              className='object-cover'
            />
            {/* Soft overlay if needed */}
          </div>

          {/* Solutions Grid - Centered Content */}
          <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10'>
            {solutions.map((item, index) => (
              <div
                key={index}
                className='bg-white/95 backdrop-blur-sm p-8 rounded-2xl flex flex-col gap-6 border-2 border-[#F5F5F5] shadow-[0px_4px_12px_rgba(0,0,0,0.05)]'
                style={{ minHeight: '300px' }}
              >
                <div className='flex items-center gap-4'>
                  <div className='w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#0846AA]/10'>
                    <Image src={item.icon} alt={item.title} width={28} height={28} />
                  </div>
                  <h3
                    className='font-bold leading-tight text-[#0F1729]/80'
                    style={{ fontSize: '18px' }}
                  >
                    {item.title}
                  </h3>
                </div>

                <p className='leading-relaxed' style={{ color: '#6A7181', fontSize: '15px' }}>
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

export default Solutions;
