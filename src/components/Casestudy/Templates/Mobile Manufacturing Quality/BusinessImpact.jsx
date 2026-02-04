'use client';

import Image from 'next/image';

const impacts = [
  {
    icon: '/images/Templates/template3/bus1.svg',
    percentage: '35%',
    title: 'Faster Root Cause Analysis',
    desc: 'Through automated correlation',
  },
  {
    icon: '/images/Templates/template3/bus2.svg',
    percentage: '25%',
    title: 'Faster Defect Containment',
    desc: 'Improved response time',
  },
  {
    icon: '/images/Templates/template3/bus3.svg',
    percentage: '20%',
    title: 'Reduction in Recurring Defects',
    desc: 'Via early detection',
  },
  {
    icon: '/images/Templates/template3/bus4.svg',
    percentage: '100%',
    title: 'Traceability Coverage',
    desc: 'One-part-one-record coverage',
  },
];

const outcomes = [
  '35% faster Root Cause Analysis',
  '25% improvement in defect containment time',
  '20% reduction in recurring quality issues',
  'Complete traceability across all process stages',
  'Strengthened compliance with audit-ready digital records',
];

export default function BusinessImpact() {
  return (
    <section className='relative w-full py-20 overflow-hidden'>
      {/* Background Image with Gradient Overlay */}
      <div className='absolute inset-0 z-0'>
        <Image
          src='/images/Templates/template3/lastbg.png'
          alt='Impact Background'
          fill
          className='object-cover'
        />
        <div
          className='absolute inset-0'
          style={{
            background: 'linear-gradient(180deg, #CAD7CAE6 0%, #E8F1E9E6 100%)', // high opacity to match whiteness
          }}
        ></div>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <h2 className='text-3xl lg:text-4xl font-bold text-[#1D2530] mb-12'>Business Impact</h2>

        {/* Impact Cards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12'>
          {impacts.map((item, index) => (
            <div
              key={index}
              className='rounded-xl p-6 text-white shadow-lg transform hover:-translate-y-1 transition-transform'
              style={{
                background: 'linear-gradient(135deg, #149C46 0%, #35E375 100%)',
              }}
            >
              <div className='w-10 h-10 mb-4 relative'>
                {/* Fallback to text/default if icon missing, but using path provided */}
                <Image
                  src={item.icon}
                  alt='Icon'
                  fill
                  className='object-contain brightness-0 invert' // Make white if not already
                />
              </div>
              <div className='text-4xl font-bold mb-1'>{item.percentage}</div>
              <div className='font-bold text-lg leading-tight mb-2'>{item.title}</div>
              <div className='text-white/80 text-sm'>{item.desc}</div>
            </div>
          ))}
        </div>

        {/* Quantitative Outcomes White Card */}
        <div className='bg-white rounded-2xl p-8 lg:p-12 shadow-xl max-w-7xl'>
          <h3 className='text-2xl font-bold text-[#1D2530] mb-6'>Quantitative Outcomes</h3>
          <div className='flex flex-col gap-4'>
            {outcomes.map((outcome, idx) => (
              <div key={idx} className='flex items-start gap-4'>
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
                <p className='text-[#4B5563] text-lg font-medium'>{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
