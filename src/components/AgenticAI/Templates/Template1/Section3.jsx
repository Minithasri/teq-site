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
    <section className='w-full relative py-10 px-4 md:px-8 lg:px-16 xl:px-24 overflow-hidden'>
      {/* Background thumbnail image with overlay - hidden on mobile */}
      <div className='absolute inset-0 z-0 opacity-40 hidden md:block'>
        <Image src='/images/bgagent.png' alt='Background' fill className='object-cover' />
      </div>

      <div className='relative z-10 max-w-7xl mx-auto lg:mt-6 flex flex-col gap-10'>
        <div className='flex flex-col md:flex-row md:items-start gap-6'>
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
              className='rounded-2xl p-6 shadow-xl flex flex-col gap-3'
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid rgba(202,185,246,0.35)',
              }}
            >
              {/* Gradient Number — sits above the #E5E5E5 block */}
              <span
                className='text-5xl font-bold leading-none select-none'
                style={{
                  background:
                    'linear-gradient(106.63deg, rgba(112,48,177,0.26) 0%, rgba(181,109,211,0.26) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* Title + Description in #E5E5E5 block */}
              <div
                className='rounded-xl p-4 flex flex-col gap-2 h-full'
                style={{ backgroundColor: '#FAFAFA' }}
              >
                <h3 className='text-base font-semibold' style={{ color: '#262626' }}>
                  {cap.title}
                </h3>
                <p className='text-sm leading-relaxed' style={{ color: '#737373' }}>
                  {cap.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* end grid */}
      </div>
      {/* end relative z-10 */}
    </section>
  );
}
