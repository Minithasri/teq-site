'use client';
import Image from 'next/image';

export default function Section3({ data }) {
  const {
    engineeredTitle = 'Engineered With',
    engineeredTitleBold = 'Enterprise Grade Intelligence',
    engineeredDescription = 'Highlights the AI architecture, integrations, automation capabilities, data handling, and deployment infrastructure powering the solution.',
    capabilities = [],
  } = data || {};

  return (
    <section
      className='w-full relative py-16 px-4 md:px-8 lg:px-16 xl:px-24'
      style={{
        background:
          'linear-gradient(258.79deg, rgba(229, 170, 102, 0.3) -13.56%, rgba(255, 165, 129, 0.3) -13.56%, rgba(221, 161, 108, 0.3) 18.23%, rgba(230, 242, 246, 0.3) 53.64%, rgba(202, 185, 246, 0.3) 91.85%, rgba(112, 48, 177, 0.3) 119.62%)',
      }}
    >
      <div className='relative z-10 max-w-7xl mx-auto flex flex-col gap-12'>
        <div className='flex flex-col md:flex-row md:items-start justify-between gap-6'>
          <h2
            className='text-2xl md:text-3xl font-light italic leading-snug md:max-w-[420px] flex-shrink-0'
            style={{ color: '#262626' }}
          >
            {engineeredTitle}{' '}
            <span className='font-bold not-italic'>{engineeredTitleBold.split(' ')[0]}</span>
            <br />
            <span className='font-bold not-italic'>
              {engineeredTitleBold.split(' ').slice(1).join(' ')}
            </span>
          </h2>
          {/* Description pushed to the far right */}
          <p
            className='text-sm md:text-[15px] leading-relaxed ml-auto text-left md:max-w-[380px]'
            style={{ color: '#737373' }}
          >
            {engineeredDescription}
          </p>
        </div>

        {/* 3 Cards */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {capabilities.map((cap, i) => (
            <div
              key={i}
              className='rounded-[24px] p-[10px] shadow-sm'
              style={{
                backgroundColor: '#FFFFFF',
              }}
            >
              {/* Inner Content Block */}
              <div
                className='rounded-[16px] p-8 md:p-12 flex flex-col gap-3 h-full'
                style={{ backgroundColor: '#FAFAFA' }}
              >
                <h3 className='text-xl font-semibold' style={{ color: '#F97316' }}>
                  {cap.title}
                </h3>
                <p className='text-[15px] leading-relaxed mt-2' style={{ color: '#737373' }}>
                  {cap.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
