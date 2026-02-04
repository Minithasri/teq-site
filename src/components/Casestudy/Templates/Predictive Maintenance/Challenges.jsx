'use client';

import Image from 'next/image';

const challenges = [
  {
    icon: '/images/Templates/template4/sec4icon1.svg',
    title: 'Frequent Breakdowns',
    desc: 'High corrective maintenance costs due to reactive approach',
  },
  {
    icon: '/images/Templates/template4/sec4icon2.svg',
    title: 'Poor Forecasting',
    desc: 'Limited workload forecasting and uneven technician scheduling',
  },
  {
    icon: '/images/Templates/template4/sec4icon3.svg',
    title: 'Manual Tracking',
    desc: 'Manual tracking of maintenance logs & inspection records',
  },
  {
    icon: '/images/Templates/template4/sec4icon4.svg',
    title: 'Limited Insights',
    desc: 'No visibility into equipment performance trends',
  },
];

export default function Challenges() {
  return (
    <section className='relative w-full pt-20 pb-0 bg-[#F6F6F6] overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-20'>
        {/* Header */}
        <div className='text-center max-w-4xl mx-auto mb-16'>
          <h2 className='text-3xl lg:text-4xl font-bold text-[#1D2530] mb-6'>The Challenge</h2>
          <p className='text-[#64748B] text-lg leading-relaxed'>
            The client, an electronics components manufacturing and assembly company, had largely
            reactive maintenance operations with limited forecasting and visibility into asset
            health. The lack of data-driven insights led to frequent equipment breakdowns and
            operational inefficiencies.
          </p>
        </div>

        {/* Cards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16'>
          {challenges.map((item, index) => (
            <div
              key={index}
              className='bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all relative'
            >
              <div className='flex justify-between items-start mb-4'>
                <h3 className='text-xl font-bold text-[#1D2530] pr-12 leading-tight'>
                  {item.title}
                </h3>
                <div className='w-10 h-10 relative bg-[#FEF2F2] rounded-lg p-2'>
                  <Image src={item.icon} alt='Icon' fill className='object-contain p-1' />
                </div>
              </div>
              <p className='text-[#64748B] text-sm leading-relaxed'>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Image with Impact Box Overlay */}
      <div className='w-full h-[600px] relative mb-4 mt-0'>
        {/* Background Image */}
        <Image
          src='/images/Templates/template4/phonebg.webp'
          alt='Phones Background'
          fill
          className='object-cover'
        />

        {/* Impact Box Overlay */}
        <div className='absolute -top-12 left-0 w-full flex justify-center pt-12 px-4'>
          <div className='bg-[#EF434333] rounded-2xl p-8 max-w-2xl w-full text-center border border-[#EF434320] shadow-sm backdrop-blur-sm'>
            <h3 className='text-xl font-bold text-[#1D2530] mb-4'>Impact on Operations</h3>
            <ul className='text-left inline-block space-y-2'>
              <li className='flex items-start gap-2 text-[#4B5563] font-medium'>
                <span className='text-[#EF4343] mt-1'>•</span> Reduced asset availability and
                production interruptions
              </li>
              <li className='flex items-start gap-2 text-[#4B5563] font-medium'>
                <span className='text-[#EF4343] mt-1'>•</span> Higher maintenance costs and extended
                downtime
              </li>
              <li className='flex items-start gap-2 text-[#4B5563] font-medium'>
                <span className='text-[#EF4343] mt-1'>•</span> Inefficient resource allocation and
                technician utilization
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
