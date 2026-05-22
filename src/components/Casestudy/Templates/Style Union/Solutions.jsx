'use client';

import Image from 'next/image';

export default function Solutions() {
  const departments = [
    'Retail Operations',
    'E-commerce',
    'Planning',
    'Inventory Management',
    'Supply Chain',
  ];

  const solutionSteps = [
    {
      id: '01',
      category: 'DATA COLLECTION',
      title: 'Automated Data Ingestion',
      description:
        'Automated pipelines integrating offline POS systems, supply chain platforms, e-commerce data sources, and Excel inputs through GCP.',
      icon: '/images/Templates/style_union/unionsvg7.svg',
    },
    {
      id: '02',
      category: 'DATA PROCESSING',
      title: 'ETL & Transformation',
      description:
        'Optimized Domo Magic ETL workflows to cleanse, standardize, and unify datasets from all retail channels.',
      icon: '/images/Templates/style_union/unionsvg8.svg',
    },
    {
      id: '03',
      category: 'DATA ARCHITECTURE',
      title: 'Unified Data Model',
      description:
        'Centralized omnichannel data model combining online and offline retail operations into a single source of truth.',
      icon: '/images/Templates/style_union/unionsvg9.svg',
    },
    {
      id: '04',
      category: 'VISUALIZATION',
      title: 'Department Dashboards',
      description:
        'Tailored dashboards for Retail Operations, Inventory Management, Planning, and E-commerce teams with role-specific views.',
      icon: '/images/Templates/style_union/unionsvg10.svg',
    },
    {
      id: '05',
      category: 'SECURITY',
      title: 'PDP Role-Based Security',
      description:
        'Implementation of Personalized Data Permissions ensuring secure, granular data access across all business functions.',
      icon: '/images/Templates/style_union/unionsvg11.svg',
    },
    {
      id: '06',
      category: 'ACCESSIBILITY',
      title: 'Mobile Dashboards',
      description:
        'Mobile-ready dashboards enabling store managers to access real-time performance metrics from any location.',
      icon: '/images/Templates/style_union/unionsvg12.svg',
    },
    {
      id: '07',
      category: 'INTELLIGENCE',
      title: 'Automated Alerts',
      description:
        'Proactive alerts for critical events such as low inventory levels, sudden sales spikes, or anomalous patterns.',
      icon: '/images/Templates/style_union/unionsvg13.svg',
    },
    {
      id: '08',
      category: 'DELIVERY',
      title: 'Scheduled Reports',
      description:
        'Automated executive reports delivered via email to support leadership decision-making on a recurring cadence.',
      icon: '/images/Templates/style_union/unionsvg14.svg',
    },
  ];

  return (
    <section className='relative w-full bg-[#F8FAFC] py-8 overflow-hidden'>
      {/* Top Overlapping Images Section */}
      <div className='relative max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 mb-12'>
        <div className='flex flex-col items-center relative z-10'>
          {/* Departments Impacted */}
          <div className='flex flex-wrap justify-center items-center gap-3 mb-16'>
            <span className='text-[#EF492B] font-semibold text-sm md:text-base mr-2'>
              Departments impacted:
            </span>
            {departments.map((dept, idx) => (
              <span
                key={idx}
                className='px-4 py-1.5 rounded-full border border-[#EF492B] text-[#131720] text-xs md:text-sm bg-white/50'
              >
                {dept}
              </span>
            ))}
          </div>

          {/* Heading */}
          <div className='text-center mb-12 relative z-20'>
            <h2 className='text-[#000000] font-bold text-lg md:text-2xl lg:text-4xl tracking-widest mb-8'>
              Solution Approach
            </h2>
            <h3 className='text-[#0F1729] text-lg md:text-xl lg:text-2xl mb-40'>
              End-to-End Analytics Architecture
            </h3>
            <p className='text-[#6A7181] text-sm md:text-base lg:text-lg max-w-5xl mx-auto leading-relaxed'>
              GWC Data.ai implemented a comprehensive omnichannel data warehouse and analytics
              solution powered by Domo, integrating all retail data sources into a unified platform.
            </p>
          </div>
        </div>

        {/* Floating Images (Left and Right) */}
        <div className='absolute top-10 -left-10 w-[200px] md:w-[300px] lg:w-[400px] h-[250px] z-0 opacity-80 pointer-events-none -translate-x-12 translate-y-12'>
          <Image
            src='/images/Templates/style_union/union2.png'
            alt=''
            fill
            className='object-cover rounded-[40px]'
          />
        </div>
        <div className='absolute top-20 -right-32 w-[200px] md:w-[300px] lg:w-[500px] h-[300px] z-0 opacity-100 pointer-events-none translate-x-12 -translate-y-8'>
          <Image
            src='/images/Templates/style_union/union3.png'
            alt=''
            fill
            className='object-cover'
          />
        </div>
      </div>

      {/* Solutions Grid with Center Line */}
      <div className='relative max-w-[1440px] mx-auto px-6 lg:px-0 py-12'>
        {/* Center Vertical Line */}
        <div className='absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#1E0BF1] hidden lg:block -translate-x-1/2' />

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10'>
          {solutionSteps.map((step, index) => (
            <div key={index} className='flex flex-col'>
              <div className='bg-white rounded-[24px] p-8 border-[2px] border-[#F5F5F5] shadow-md relative hover:shadow-lg transition-all'>
                {/* Top Row: Category Pill + Number */}
                <div className='flex justify-between items-center mb-6'>
                  <div className='px-4 py-1 rounded-full border border-[#F5F5F5] bg-[#259D911A] text-[#262626] text-[10px] md:text-xs font-bold uppercase tracking-wider'>
                    {step.category}
                  </div>
                  <div className='w-8 h-8 rounded-full border border-[#262626] flex items-center justify-center text-[#262626] text-sm font-bold'>
                    {step.id}
                  </div>
                </div>

                {/* Content */}
                <div className='flex gap-4 items-start mb-4'>
                  <div className='flex-shrink-0 mt-1'>
                    <Image
                      src={step.icon}
                      alt=''
                      width={24}
                      height={24}
                      className='object-contain'
                    />
                  </div>
                  <div>
                    <h4 className='font-bold text-lg md:text-xl mb-3'>{step.title}</h4>
                    <p className='text-[#6A7181] text-xs md:text-sm leading-relaxed'>
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
