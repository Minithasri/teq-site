'use client';

import Image from 'next/image';

const techStack = [
  {
    title: 'Microsoft Power BI',
    desc: 'Visualization and analytics dashboards',
  },
  {
    title: 'SQL Server / Data Lake',
    desc: 'Centralized trace data repository',
  },
  {
    title: 'MES & IPQC Systems',
    desc: 'Real-time production and inspection data sources',
  },
  {
    title: 'Power Automate / API Integrations',
    desc: 'Automated data sync and refresh',
  },
  {
    title: 'Python / DAX Models',
    desc: 'Defect correlation and commonality computation',
  },
];

export default function Technology() {
  return (
    <section className='relative w-full py-20 bg-[#22409880] overflow-visible z-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative'>
        {/* Header with Icons */}
        <div className='flex flex-wrap items-center gap-6 mb-12'>
          <h2 className='text-[28px] lg:text-[36px] font-bold text-white'>Technology Stack</h2>
          <div className='flex items-center ml-72 gap-4'>
            <div className='w-14 h-14 relative'>
              <Image
                src='/images/Templates/template2/iconnew4.svg'
                alt='Python'
                fill
                className='object-contain'
              />
            </div>
            <div className='w-14 h-14 ml-10 relative'>
              <Image
                src='/images/Templates/template2/iconnew1.svg'
                alt='Power BI'
                fill
                className='object-contain'
              />
            </div>
            <div className='w-14 h-14 ml-10 relative'>
              <Image
                src='/images/Templates/template2/iconnew2.svg'
                alt='Tech'
                fill
                className='object-contain'
              />
            </div>
          </div>
        </div>

        {/* Tech Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 lg:mb-32'>
          {techStack.map((item, index) => (
            <div
              key={index}
              className='bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all'
            >
              <h3 className='text-xl font-bold text-[#1D2530] mb-2'>{item.title}</h3>
              <p className='text-[#64748B] text-base'>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Floating Bottom Images - Overlapping into next section */}
        <div className='absolute -bottom-80 -right-10  w-full max-w-[800px] h-[500px] z-30 hidden lg:block pointer-events-none'>
          {/* Back Image */}
          <div className='absolute bottom-0 right-0 w-[550px] h-[400px]'>
            <Image
              src='/images/Templates/template3/rightimgs1.png'
              alt='Dashboard View 1'
              fill
              className='object-contain'
            />
          </div>
          {/* Front Image (Overlay) */}
          <div className='absolute -bottom-32 right-[5%] w-[400px] h-[500px]'>
            <Image
              src='/images/Templates/template3/rightimgs2.png'
              alt='Dashboard View 2'
              fill
              className='object-contain'
            />
          </div>
        </div>

        {/* Mobile Image */}
        <div className='lg:hidden w-full h-[250px] relative -mb-10'>
          <div className='absolute inset-0'>
            <Image
              src='/images/Templates/template3/rightimgs1.png'
              alt='Dashboard View Mobile'
              fill
              className='object-contain'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
