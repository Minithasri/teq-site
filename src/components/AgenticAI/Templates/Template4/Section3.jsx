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
          'linear-gradient(255.71deg, rgba(153, 204, 238, 0.38) 12.13%, rgba(214, 169, 233, 0.38) 103.91%)',
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
              className='rounded-[16px] p-[12px] shadow-sm'
              style={{
                backgroundColor: '#FFFFFF',
              }}
            >
              {/* Inner Content Block */}
              <div
                className='rounded-[12px] p-6 md:p-8 flex flex-col gap-3 h-full'
                style={{ backgroundColor: '#FAFAFA' }}
              >
                <h3 className='text-lg font-bold' style={{ color: '#262626' }}>
                  {cap.title}
                </h3>
                <p className='text-sm md:text-[15px] leading-relaxed' style={{ color: '#737373' }}>
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
