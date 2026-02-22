'use client';

import Image from 'next/image';

export default function DrivenSolution() {
  const solutions = [
    {
      icon: '/images/Templates/template1/iconss1.svg',
      title: 'IoT + Cloud Integration',
      features: [
        'IoT Core to ingest telemetry from machine counters',
        'Low-latency device communication for continuous streaming',
      ],
    },
    {
      icon: '/images/Templates/template1/iconss2.svg',
      title: 'Real-Time Data Platform',
      features: [
        'GCP Cloud hosting pipelines and messaging services',
        'Streaming into Real-time DB for dashboard updates within seconds',
      ],
    },
    {
      icon: '/images/Templates/template1/iconss3.svg',
      title: 'Full-Stack Production Monitoring App',
      features: [
        'React + Node.js application for supervisors',
        'Live display of machine status (running, idle, breakdown)',
        'Color-coded alerting for deviations',
      ],
    },
    {
      icon: '/images/Templates/template1/iconss4.svg',
      title: 'Target vs Actual Shift Insights',
      features: [
        'Automatic tracking of hourly & shift KPIs',
        'Visual alerts for low-performing machines',
      ],
    },
    {
      icon: '/images/Templates/template1/iconss5.svg',
      title: 'Production Analytics Layer',
      features: [
        'Python + SQL data processing jobs',
        'Operator productivity and part-rejection visibility',
      ],
    },
    {
      icon: '/images/Templates/template1/iconss6.svg',
      title: '100% Automated Workflow',
      features: ['Zero manual effort required', 'Instant data capture and processing'],
    },
  ];

  return (
    <section
      className='relative w-full py-20 overflow-hidden'
      style={{
        background: 'linear-gradient(180deg, #FCF3F3 0%, #A9CEF3 50%, #7496B900 100%)',
      }}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Header */}
        <div className='mb-12'>
          <h2 className='text-[32px] md:text-[36px] font-bold text-[#1D2530] mb-4'>
            GWC's IoT-Driven Solution
          </h2>
          <p className='text-[16px] md:text-[18px] text-[#65758B] max-w-7xl leading-relaxed'>
            We deployed a Connected Factory Framework enabling automated live insights across the
            entire production floor.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 relative z-20'>
          {solutions.map((solution, index) => (
            <div
              key={index}
              className='bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300'
            >
              {/* Icon and Title */}
              <div className='flex items-center gap-3 mb-4'>
                <div className='flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center'>
                  <Image
                    src={solution.icon}
                    alt={solution.title}
                    width={24}
                    height={24}
                    className='w-6 h-6'
                  />
                </div>
                <h3 className='text-lg font-bold text-gray-900'>{solution.title}</h3>
              </div>

              {/* Features List */}
              <ul className='space-y-2'>
                {solution.features.map((feature, idx) => (
                  <li key={idx} className='flex items-start gap-2 text-[16px] text-[#65758B]'>
                    <span className='text-[#16A249] mt-1'>✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
