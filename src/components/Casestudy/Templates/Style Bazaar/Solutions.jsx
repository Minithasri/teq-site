'use client';

import Image from 'next/image';

export default function Solutions() {
  const solutionSteps = [
    {
      icon: '/images/Templates/style_bazaar/stylesvg7.svg', // Assuming appropriate icons
      title: 'Secure SFTP Data Pipelines',
      description:
        'Automated ingestion of retail system data through secure SFTP pipelines into the centralized platform.',
    },
    {
      icon: '/images/Templates/style_bazaar/stylesvg8.svg',
      title: 'Magic ETL Workflows',
      description:
        'Optimized Domo Magic ETL workflows to cleanse, standardize, and transform datasets from multiple sources.',
    },
    {
      icon: '/images/Templates/style_bazaar/stylesvg9.svg',
      title: 'Unified Retail Data Model',
      description:
        'POS, inventory, and CRM datasets combined into a single, consistent analytics model.',
    },
    {
      icon: '/images/Templates/style_bazaar/stylesvg10.svg',
      title: 'Department-Level Dashboards',
      description:
        'Role-based dashboards deployed for CRM, Operations, Planning, and Supply Chain teams.',
    },
    {
      icon: '/images/Templates/style_bazaar/stylesvg11.svg',
      title: 'Automated Reporting',
      description:
        'Scheduled alerts and automated report distribution workflows for all stakeholders.',
    },
    {
      icon: '/images/Templates/style_bazaar/stylesvg12.svg',
      title: 'Executive Drill-Down Views',
      description:
        'Leadership dashboards with drill-down capabilities for store-level performance monitoring.',
    },
    {
      icon: '/images/Templates/style_bazaar/stylesvg13.svg',
      title: 'Data Quality Validation',
      description:
        'Automated validation checks to ensure reporting accuracy and flag data anomalies.',
    },
  ];

  return (
    <section className='relative w-full flex flex-col overflow-hidden'>
      {/* Top Header Section */}
      <div className='w-full bg-[#E9ECF9] py-16'>
        <div className='max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24'>
          <div className='mb-0'>
            <h2 className='font-semibold uppercase mb-4 tracking-[1.32px] text-4xl text-[#0A85FF]'>
              SOLUTION APPROACH
            </h2>
            <h3 className='font-medium mb-6 text-3xl md:text-4xl text-[#131720]'>
              Centralized Retail Analytics Platform
            </h3>
            <p className='max-w-9xl text-lg leading-relaxed text-[#6B7280]'>
              GWC Data.ai implemented a centralized retail analytics platform that unified
              operational and transactional data across systems enabling consistent KPI tracking and
              automated analytics delivery across the organization.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Content Section */}
      <div className='relative w-full py-16 md:py-20'>
        {/* Full-width Background Image */}
        <div className='absolute inset-0 z-0'>
          <Image
            src='/images/Templates/style_bazaar/style_i3.png'
            alt='Store background'
            fill
            className='object-cover opacity-20'
          />
        </div>

        <div className='relative z-10 max-w-[1000px] w-full mx-auto px-4 lg:px-0'>
          <div className='flex flex-col gap-6 items-center w-full'>
            {/* Solution Steps List */}
            <div className='flex flex-col gap-3 w-full'>
              {solutionSteps.map((step, index) => (
                <div
                  key={index}
                  className='bg-white border border-[#2260EC] rounded-xl p-5 flex items-start gap-5 shadow-sm w-full'
                >
                  <div className='flex-shrink-0 mt-1'>
                    <Image
                      src={step.icon}
                      alt=''
                      width={24}
                      height={24}
                      className='object-contain'
                    />
                  </div>
                  <div className='flex flex-col'>
                    <h4 className='text-[#131720] font-semibold text-sm md:text-base mb-1'>
                      {step.title}
                    </h4>
                    <p className='text-[#6B7280] text-xs md:text-sm leading-relaxed'>
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Architecture Visualization */}
            <div className='bg-white border-[3px] border-[#5869F1] rounded-3xl p-6 lg:p-8 w-full mt-8 shadow-sm'>
              <h3 className='text-left font-bold mb-8 uppercase tracking-wider text-2xl md:text-3xl text-[#0A85FF]'>
                DATA PLATFORM ARCHITECTURE
              </h3>

              <div className='flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 w-full'>
                {/* Source Systems */}
                <div className='flex flex-col gap-3 w-[220px] flex-shrink-0 mx-auto lg:mx-0'>
                  <span className='text-[#18C612] font-semibold text-sm mb-1 uppercase text-left'>
                    SOURCE SYSTEMS
                  </span>
                  <div className='bg-white border border-[#A78BFA] rounded-[12px] py-2.5 px-4 text-[#A78BFA] text-[13px] md:text-sm text-center w-[240px] shadow-sm'>
                    Retail POS Data
                  </div>
                  <div className='bg-white border border-[#A78BFA] rounded-[12px] py-2.5 px-4 text-[#A78BFA] text-[13px] md:text-sm text-center w-[240px] shadow-sm'>
                    CRM Platform
                  </div>
                  <div className='bg-white border border-[#A78BFA] rounded-[12px] py-2.5 px-4 text-[#A78BFA] text-[13px] md:text-sm text-center w-[240px] shadow-sm'>
                    Inventory Systems
                  </div>
                  <div className='bg-white border border-[#A78BFA] rounded-[12px] py-2.5 px-4 text-[#A78BFA] text-[13px] md:text-sm text-center w-[240px] shadow-sm'>
                    Supply Chain Feeds
                  </div>
                </div>

                {/* Arrow Left */}
                <div className='hidden lg:flex flex-col items-center justify-center w-12 flex-shrink-0'>
                  <Image
                    src='/images/Templates/style_bazaar/arrow.svg'
                    alt='arrow'
                    width={60}
                    height={12}
                    className='object-contain'
                  />
                </div>

                {/* Data Warehouse */}
                <div className='bg-[#0A85FF] text-white rounded-[20px] p-6 flex flex-col items-center justify-center shadow-lg w-[200px] h-[110px] flex-shrink-0 mx-auto lg:mx-0'>
                  <span className='text-[10px] uppercase text-[#1E2E52] mb-1 opacity-90 font-medium tracking-wide'>
                    DATA WAREHOUSE
                  </span>
                  <span className='text-base text-[#1E2E52] lg:text-lg'>Unified Model</span>
                </div>

                {/* Arrow Right */}
                <div className='hidden lg:flex flex-col items-center justify-center w-12 flex-shrink-0'>
                  <Image
                    src='/images/Templates/style_bazaar/arrow.svg'
                    alt='arrow'
                    width={60}
                    height={12}
                    className='object-contain'
                  />
                </div>

                {/* Outputs */}
                <div className='flex flex-col gap-3 w-[240px] flex-shrink-0 mx-auto lg:mx-0'>
                  <span className='text-[#18C612] font-semibold text-sm mb-1 uppercase text-left'>
                    OUTPUTS
                  </span>
                  <div className='bg-white border border-[#18C612] rounded-[12px] py-2.5 px-4 text-[#18C612] text-[13px] md:text-sm text-center w-[240px] shadow-sm'>
                    Executive Dashboards
                  </div>
                  <div className='bg-white border border-[#18C612] rounded-[12px] py-2.5 px-4 text-[#18C612] text-[13px] md:text-sm text-center w-[240px] shadow-sm'>
                    Department Reports
                  </div>
                  <div className='bg-white border border-[#18C612] rounded-[12px] py-2.5 px-4 text-[#18C612] text-[13px] md:text-sm text-center w-[240px] shadow-sm'>
                    Automated Alerts
                  </div>
                  <div className='bg-white border border-[#18C612] rounded-[12px] py-2.5 px-4 text-[#18C612] text-[13px] md:text-sm text-center w-[240px] shadow-sm'>
                    Store-Level Analytics
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
