'use client';

import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const solutionSteps = [
  {
    step: 'STEP 01',
    title: 'Custom Web Application',
    description:
      'Purpose-built React application integrated with BigQuery and Salesforce for unified campaign management.',
  },
  {
    step: 'STEP 02',
    title: 'Automated Data Ingestion',
    description:
      'Seamless ingestion pipelines from TTD, Yahoo DSP via Adverity eliminating manual imports entirely.',
  },
  {
    step: 'STEP 03',
    title: 'Validation & Governance',
    description:
      'Predefined dropdowns, naming conventions, and validation logic enforced at the point of entry.',
  },
  {
    step: 'STEP 04',
    title: 'Bidirectional Sync',
    description:
      'Real-time two-way synchronization between BigQuery and Salesforce ensuring data consistency across platforms.',
  },
];

export default function SolutionSection() {
  return (
    <section
      className="relative w-full font-['Poppins'] overflow-hidden"
      style={{
        minHeight: '879px',
        background: '#FFFFFF',
        paddingTop: '60px',
      }}
    >
      {/* Header Content */}
      <div className='flex flex-col items-center text-center px-4 mb-16 relative z-20'>
        <h2 className='font-bold mb-4' style={{ fontSize: '42px', letterSpacing: '1.4px' }}>
          The Solution
        </h2>
        <h3
          className='font-bold text-[#0F1729]/80 mb-4'
          style={{
            fontSize: '30px',
            lineHeight: '36px',
            letterSpacing: '-0.75px',
            maxWidth: '567px',
          }}
        >
          End-to-End Campaign Infrastructure
        </h3>
        <p
          className='font-semibold text-[#575757]'
          style={{ fontSize: '16px', lineHeight: '26px', maxWidth: '1108px' }}
        >
          A modern, cloud-native platform designed to replace fragmented workflows with automated,
          governed processes.
        </p>
      </div>

      {/* RE-ENGINEERED WRAPPER */}
      <div className='relative w-full'>
        {/* Background Image Layer with light frosted fade */}
        <div
          className='absolute inset-0 z-0 overflow-hidden'
          style={{
            height: 'calc(100% + 60px)',
            top: '-40px',
          }}
        >
          <div className='relative w-full h-full'>
            <Image
              src='/images/Templates/templatez/nextsol.png'
              alt='bg'
              fill
              className='object-cover blur-[8px] scale-105'
            />
            {/* The Light Fade Overlay: High transparency to let image details show through */}
            <div
              className='absolute inset-0 z-10'
              style={{
                background: `linear-gradient(180deg,
  rgba(255, 255, 255, 0.7) 0%,
  rgba(210, 221, 249, 0.5) 50%,
  rgba(255, 255, 255, 0.4) 100%
)`,
                backdropFilter: 'blur(2px)',
              }}
            />
          </div>
        </div>

        {/* Cards and Timeline Container */}
        <div className='relative z-10 max-w-[1200px] mx-auto px-4 lg:px-20 pb-20'>
          <div className='relative'>
            {/* Vertical Timeline Line */}
            <div className='absolute left-[20px] top-10 bottom-10 w-[1px] bg-gray-300 hidden md:block' />

            <div className='flex flex-col gap-6'>
              {solutionSteps.map((item, index) => (
                <div key={index} className='flex items-center gap-8 relative'>
                  {/* Icon (Blue Check) */}
                  <div
                    className='flex-shrink-0 z-20 hidden md:flex items-center justify-center bg-[#1147BB] text-white'
                    style={{ width: '40px', height: '40px', borderRadius: '9999px' }}
                  >
                    <CheckCircle2 size={20} />
                  </div>

                  {/* Card with requested box-shadow */}
                  <div
                    className='bg-white p-6 md:p-8 w-full flex flex-col justify-center transition-all duration-300 shadow-[0px_4px_12px_rgba(0,0,0,0.08)] rounded-[12px] border-2 border-[#F5F5F5]'
                    style={{
                      maxWidth: '912px',
                      minHeight: '124.75px',
                    }}
                  >
                    <span className='text-[#0935E4] font-bold text-[12px] tracking-widest mb-1 uppercase'>
                      {item.step}
                    </span>
                    <h4 className='text-[#0F1729]/80 font-bold text-[20px] mb-1'>{item.title}</h4>
                    <p className='text-[#575757] text-[15px] leading-relaxed'>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
