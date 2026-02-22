'use client';

import Image from 'next/image';

const detailedStats = [
  {
    icon: '/images/Templates/template2/secti1.svg',
    title: 'Production Throughput',
    before: 'Baseline',
    after: '+30% improvement',
    trend: 'up',
  },
  {
    icon: '/images/Templates/template2/secti2.svg',
    title: 'First-Pass Yield',
    before: '93.5%',
    after: '95.5%',
    trend: 'up',
  },
  {
    icon: '/images/Templates/template2/secti3.svg',
    title: 'Scrap Rate',
    before: 'High',
    after: '25% reduction',
    trend: 'down',
  },
  {
    icon: '/images/Templates/template2/secti4.svg',
    title: 'Reporting Errors',
    before: 'Frequent',
    after: '75% reduction',
    trend: 'down',
  },
  {
    icon: '/images/Templates/template2/secti5.svg',
    title: 'Decision-Making Speed',
    before: 'Manual',
    after: 'Real-time dashboards',
    trend: 'up',
  },
];

const outcomes = [
  '30% increase in production throughput',
  '2% improvement in first-pass yield',
  '25% reduction in scrap rate',
  '75% reduction in manual reporting errors',
  'Faster decision-making enabled by live insights',
];

export default function BusinessImpact() {
  return (
    <section className='relative w-full  pb-16 bg-[#F3F4F7]'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h2 className='text-[32px] md:text-[40px] font-bold text-[#1D2530] mb-4'>
            {' '}
            Business Impact
          </h2>
          <p className='text-[16px] md:text-[18px] text-[#65758B] leading-relaxed max-w-3xl mx-auto'>
            Measurable results across operations
          </p>
        </div>

        {/* Stats Grid */}
        <div className='flex flex-col gap-6 items-center mb-16'>
          {/* Row 1 */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 w-full'>
            {detailedStats.slice(0, 3).map((stat, index) => (
              <StatCard key={index} stat={stat} />
            ))}
          </div>
          {/* Row 2 */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full md:w-2/3'>
            {detailedStats.slice(3, 5).map((stat, index) => (
              <StatCard key={index} stat={stat} />
            ))}
          </div>
        </div>

        {/* Quantitative Outcomes */}
        <div className='bg-white rounded-xl p-8 shadow-sm border-l-4 border-[#21C45D]'>
          <h3 className='text-2xl font-bold text-[#1D2530] mb-6'>Quantitative Outcomes</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8'>
            {outcomes.map((item, index) => (
              <div key={index} className='flex items-center gap-3'>
                <div className='w-2 h-2 rounded-full bg-[#21C45D]'></div>
                <p className='text-[#65758B] font-medium'>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat }) {
  return (
    <div className='bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300'>
      <div className='flex justify-between items-start mb-6'>
        <div className='relative w-10 h-10'>
          <Image src={stat.icon} alt={stat.title} fill className='object-contain' />
        </div>
        <div className='relative w-5 h-5'>
          <Image
            src={
              stat.trend === 'up'
                ? '/images/Templates/template2/greenarrow.svg'
                : '/images/Templates/template2/redarrow.svg'
            }
            alt='trend'
            fill
            className='object-contain'
          />
        </div>
      </div>

      <h3 className='text-lg font-bold text-[#1D2530] mb-4'>{stat.title}</h3>

      <div className='space-y-2'>
        <div className='flex justify-between items-center text-sm'>
          <span className='text-[#9CA3AF]'>Before:</span>
          <span className='font-semibold text-[18px] text-[#1D2530]'>{stat.before}</span>
        </div>
        <div className='flex justify-between items-center text-sm'>
          <span className='text-[#9CA3AF]'>After:</span>
          <span className='font-semibold text-[18px] text-[#21C45D]'>{stat.after}</span>
        </div>
      </div>
    </div>
  );
}
