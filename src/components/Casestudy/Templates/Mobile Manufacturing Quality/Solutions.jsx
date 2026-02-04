'use client';

import Image from 'next/image';

const solutions = [
  {
    icon: '/images/Templates/template3/solu1.svg',
    title: 'Traceability Framework',
    points: [
      'Establish unified traceability from raw material to final assembly',
      'Integrate operator, shift, machine, fixture, and line data into a single model',
    ],
  },
  {
    icon: '/images/Templates/template3/solu2.svg',
    title: 'Commonality Analytics',
    points: [
      'Identify recurring defect patterns across machines, fixtures, and operators',
      'Enable rapid containment through automated correlation insights',
    ],
  },
  {
    icon: '/images/Templates/template3/solu3.svg',
    title: 'Real-Time Monitoring',
    points: [
      'Implement drill-down dashboards from finished product → defect → process stage → root cause',
      'Enable real-time updates through automated MES and IPQC data sync',
    ],
  },
];

export default function Solutions() {
  return (
    <section className='relative w-full py-20 bg-[#F3F4F780]'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-3xl lg:text-4xl font-bold text-[#1D2530] text-center mb-16'>
          Strategic Solution Requirements
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {solutions.map((item, index) => (
            <div
              key={index}
              className='bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100'
            >
              {/* Icon Container with Gradient */}
              <div
                className='w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-md'
                style={{ background: 'linear-gradient(180deg, #3182ED 0%, #0E65D8 100%)' }}
              >
                <div className='relative w-8 h-8'>
                  <Image
                    src={item.icon}
                    alt={item.title}
                    fill
                    className='object-contain brightness-0 invert' // Ensuring icon is white if it wasn't
                  />
                </div>
              </div>

              <h3 className='text-xl font-bold text-[#1D2530] mb-6'>{item.title}</h3>

              <div className='flex flex-col gap-4'>
                {item.points.map((point, idx) => (
                  <div key={idx} className='flex items-start gap-3'>
                    <div className='flex-shrink-0 mt-1'>
                      <svg
                        width='20'
                        height='20'
                        viewBox='0 0 20 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <circle cx='10' cy='10' r='9' stroke='#22C55E' strokeWidth='2' />
                        <path
                          d='M6 10L9 13L14 7'
                          stroke='#22C55E'
                          strokeWidth='2'
                          strokeLinecap='round'
                        />
                      </svg>
                    </div>
                    <p className='text-[#4B5563] text-base leading-relaxed'>{point}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
