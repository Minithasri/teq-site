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

        {/* Cards - Vertical Layout like Image */}
        <div className='flex flex-col gap-5 md:gap-6 mt-4 w-full'>
          {capabilities.map((cap, i) => (
            <div
              key={i}
              className='flex flex-row items-stretch rounded-[16px] p-1.5 md:p-2'
              style={{
                background:
                  'linear-gradient(255.71deg, rgba(153, 204, 238, 0.38) 12.13%, rgba(214, 169, 233, 0.38) 103.91%)',
              }}
            >
              {/* Left side: Number */}
              <div className='flex items-center justify-center w-20 md:w-28 flex-shrink-0'>
                <span className='text-4xl md:text-[44px] font-bold text-white select-none'>
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Right side: Content */}
              <div
                className='flex-1 rounded-[12px] p-5 md:p-6 flex flex-col justify-center gap-1.5'
                style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E5E5' }}
              >
                <h3 className='text-[16px] md:text-[17px] font-bold' style={{ color: '#171717' }}>
                  {cap.title}
                </h3>
                <p
                  className='text-[14px] md:text-[15px] leading-relaxed'
                  style={{ color: '#737373' }}
                >
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
