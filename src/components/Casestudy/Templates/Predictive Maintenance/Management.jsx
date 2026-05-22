'use client';

import Image from 'next/image';

const features = [
  {
    icon: '/images/Templates/template4/i1.svg',
    title: 'Real-Time Asset Monitoring',
    desc: 'Continuous tracking of equipment parameters and maintenance schedules',
  },
  {
    icon: '/images/Templates/template4/i2.svg',
    title: 'Predictive Analytics',
    desc: 'Historical data modeling to forecast maintenance needs and failure probability',
  },
  {
    icon: '/images/Templates/template4/i3.svg',
    title: 'Workload Forecasting',
    desc: 'Technician scheduling optimization based on asset criticality and workload trends',
  },
  {
    icon: '/images/Templates/template4/i4.svg',
    title: 'Interactive Dashboards',
    desc: 'Visual insights into downtime patterns, MTTR, MTBF, and maintenance costs',
  },
  {
    icon: '/images/Templates/template4/i5.svg',
    title: 'Automated Alerts',
    desc: 'Notifications for overdue maintenance, performance anomalies & compliance breaches',
  },
];

export default function Management() {
  return (
    <section className=' relative w-full bg-[#F0F2F480]'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Header */}
        <div className='text-center max-w-4xl mx-auto mb-16'>
          <div className='inline-flex items-center justify-center mb-6'>
            <span className='inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[#16A2491A] text-[#16A249] font-bold text-sm'>
              <svg
                width='12'
                height='10'
                viewBox='0 0 12 10'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M1 5L4.5 8.5L11 1.5'
                  stroke='#16A249'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              Our Solution
            </span>
          </div>

          <h2 className='text-3xl lg:text-4xl font-bold text-[#1D2530] mb-6'>
            Predictive Maintenance
            <br />
            Management System
          </h2>
          <p className='text-[#64748B] text-lg leading-relaxed max-w-3xl mx-auto'>
            A comprehensive data-driven framework using Power BI and automated data modeling to
            enhance preventive maintenance planning, workload forecasting, and real-time performance
            tracking.
          </p>
        </div>

        {/* Features Grid - Centered Layout */}
        <div className='flex flex-wrap justify-center gap-6'>
          {features.map((item, index) => (
            <div
              key={index}
              className='bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow flex items-start gap-4 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]'
            >
              {/* Icon Container - Purple Gradient */}
              <div
                className='flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center'
                style={{ background: 'linear-gradient(180deg, #363FEC 0%, #B642F0 100%)' }}
              >
                <div className='relative w-7 h-7'>
                  <Image
                    src={item.icon}
                    alt={item.title}
                    fill
                    className='object-contain brightness-0 invert'
                  />
                </div>
              </div>

              <div>
                <h3 className='text-lg font-bold text-[#1D2530] mb-2'>{item.title}</h3>
                <p className='text-[#64748B] text-sm leading-relaxed'>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
