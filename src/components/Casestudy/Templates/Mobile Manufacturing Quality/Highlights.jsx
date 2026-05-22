'use client';

import Image from 'next/image';

const highlights = [
  {
    bold: 'Unified Trace Data Model:',
    text: 'Connected operator, shift, machine, and fixture details for full genealogy tracking',
  },
  {
    bold: 'Stage-Wise Process Mapping:',
    text: 'Linked machining, assembly, and testing operations for cross-stage defect visibility',
  },
  {
    bold: 'Commonality Analytics:',
    text: 'Detected recurring defect sources across equipment, shifts, or operators',
  },
  {
    bold: 'Real-Time Production & Quality Monitoring:',
    text: 'Drill-down from final assembly defects to root cause at process level',
  },
  {
    bold: 'Automated System Integration:',
    text: 'Continuous data synchronization across MES, IPQC, and Trace platforms',
  },
];

export default function Highlights() {
  return (
    <section className='relative w-full py-20 bg-[#F3F4F780] overflow-visible'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='flex justify-between items-start mb-12'>
          <h2 className='text-3xl lg:text-4xl font-bold text-[#1D2530]'>
            Core Solution Highlights
          </h2>

          {/* Floating Illustration used as decoration */}
          <div className='hidden lg:block absolute right-0 -top-5 w-[350px] h-[250px] pointer-events-none z-20'>
            <Image
              src='/images/Templates/template3/rightimg.svg'
              alt='Solution Connection'
              fill
              className='object-contain'
            />
          </div>
        </div>

        <div className='flex flex-col gap-4 max-w-7xl relative z-10'>
          {highlights.map((item, index) => (
            <div
              key={index}
              className='bg-white rounded-lg p-6 border-2 border-[#F5F5F5] shadow-[0_4px_12px_rgba(0,0,0,0.08)]'
            >
              <p className='text-[#4B5563] text-[16px] lg:text-[16px]'>
                <span className='font-semibold text-[#1D2530]'>{item.bold}</span> {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
