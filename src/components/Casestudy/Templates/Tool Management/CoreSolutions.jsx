'use client';

import Image from 'next/image';

const solutions = [
  {
    icon: '/images/Templates/template8/newt1.svg',
    title: 'Tool Tracking & Lifecycle Management',
    description:
      'Real-time tracking of tool issuance, usage, and return across departments with centralized tool master data and lifecycle status updates.',
  },
  {
    icon: '/images/Templates/template8/newt2.svg',
    title: 'Maintenance & Calibration Scheduling',
    description:
      'Automated reminders for calibration and maintenance due dates with comprehensive tracking of maintenance history and downtime analytics.',
  },
  {
    icon: '/images/Templates/template8/newt3.svg',
    title: 'OCR-Based Digitization',
    description:
      'Automated reading of tool IDs through OCR technology, eliminating manual data entry errors and accelerating data capture.',
  },
  {
    icon: '/images/Templates/template8/newt4.svg',
    title: 'Automated Workflows',
    description:
      'Power Automate-driven alerts and approval chains for replacements, repairs, and purchases, ensuring timely action and accountability.',
  },
  {
    icon: '/images/Templates/template8/newt5.svg',
    title: 'Data Visualization Dashboards',
    description:
      'Power BI dashboards displaying tool utilization, availability, and cost trends for data-driven decision making.',
  },
  {
    icon: '/images/Templates/template8/newt6.svg',
    title: 'Centralized Repository & Audit Trail',
    description:
      'SharePoint-based storage for tool certificates, maintenance records, and comprehensive audit logs for compliance.',
  },
];

export default function CoreSolutions() {
  return (
    <section
      className='w-full py-20 relative overflow-hidden'
      style={{ backgroundColor: '#F9FAFB' }}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Decorative Bulb Image */}
        <div className='absolute -top-24 -left-10 w-96 h-64 hidden lg:block pointer-events-none'>
          <Image
            src='/images/Templates/template8/bulb.webp'
            alt='Idea Bulb'
            fill
            className='object-contain'
          />
        </div>

        {/* Header */}
        <div className='text-center mb-16'>
          <h2 className='text-3xl lg:text-4xl font-bold text-[#1D2530] mb-4'>
            Core Solution Highlights
          </h2>
          <p className='text-[#64748B] text-lg lg:text-xl'>
            Comprehensive features for complete tool lifecycle management
          </p>
        </div>

        {/* Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {solutions.map((item, index) => (
            <div
              key={index}
              className='rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300'
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #DADFE7',
              }}
            >
              {/* Icon Container */}
              <div
                className='w-14 h-14 rounded-xl flex items-center justify-center mb-6'
                style={{ backgroundColor: '#ECECEC' }}
              >
                <div className='relative w-8 h-8'>
                  <Image src={item.icon} alt={item.title} fill className='object-contain' />
                </div>
              </div>

              {/* Content */}
              <h3 className='text-xl font-bold text-[#1D2530] mb-4'>{item.title}</h3>
              <p className='text-[#64748B] text-sm leading-relaxed'>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
