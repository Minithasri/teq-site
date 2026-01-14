import Image from 'next/image';

export default function Problem() {
  const problemPoints = [
    'Inconsistent and error-prone data entry',
    'Difficulty meeting Pollution Control Board and ISO 14001 compliance',
    'Limited visibility into waste generation and recycling patterns',
    'Inefficient audit coordination and documentation tracking',
    'No centralized carbon footprint or energy efficiency analytics',
  ];

  const gapItems = [
    {
      icon: '/images/Templates/template7/sec3.svg',
      text: 'Fragmented environmental logs across departments',
    },
    {
      icon: '/images/Templates/template7/sec4.svg',
      text: 'Manual compilation consuming 15+ hours/week',
    },
    {
      icon: '/images/Templates/template7/sec5.svg',
      text: 'No real-time threshold monitoring',
    },
    {
      icon: '/images/Templates/template7/sec6.svg',
      text: 'Reactive approach to audit readiness',
    },
    {
      icon: '/images/Templates/template7/sec7.svg',
      text: 'Limited benchmarking capabilities',
    },
  ];

  return (
    <section
      className='w-full py-16 lg:py-24 relative overflow-visible'
      style={{ background: '#F6F6F6' }}
    >
      {/* Decorative Top Right Image */}
      <div className='absolute -top-20 right-10 w-[400px] h-[250px] lg:w-[600px] lg:h-[350px] z-0'>
        <Image
          src='/images/Templates/template7/heroimg.svg'
          alt='Factory Illustration'
          fill
          className='object-contain object-right-top opacity-80'
        />
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Section Header */}
        <div className='flex items-center gap-3 mb-12'>
          <div className='relative w-10 h-10'>
            <Image
              src='/images/Templates/template7/sec1.svg'
              alt='Problem Icon'
              fill
              className='object-contain'
            />
          </div>
          <h2 className='text-3xl lg:text-4xl font-bold text-[#1D2530]'>Problem Statement</h2>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {/* Left Card: Problem Description */}
          <div className='bg-white rounded-3xl p-8 shadow-sm border border-gray-100'>
            <h3 className='text-[22px] font-bold text-[#1D2530] mb-4'>
              Manual, Fragmented Environmental Tracking
            </h3>
            <p className='text-[#64748B] text-[16px] leading-relaxed mb-8'>
              The client, a manufacturing enterprise, managed its environmental operations through
              manual registers, Excel sheets, and disconnected systems. This created silos in
              monitoring waste, water, and energy usage.
            </p>
            <ul className='space-y-4'>
              {problemPoints.map((point, index) => (
                <li key={index} className='flex items-start gap-3'>
                  <span className='w-2 h-2 rounded-full bg-[#EF4444] mt-2.5 flex-shrink-0' />
                  <span className='text-[#020817] text-[16px]'>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Card: Future State / Gaps */}
          <div className='bg-white rounded-3xl p-8 shadow-sm border border-gray-100'>
            <div className='flex items-center gap-3 mb-8'>
              <div className='relative w-6 h-6'>
                <Image
                  src='/images/Templates/template7/sec2.svg'
                  alt='Chart Icon'
                  fill
                  className='object-contain'
                />
              </div>
              <h3 className='text-[20px] lg:text-[22px] font-bold text-[#1D2530]'>
                Current State & Compliance Gaps
              </h3>
            </div>

            <div className='space-y-4'>
              {gapItems.map((item, index) => (
                <div
                  key={index}
                  className='flex items-center gap-4 p-4 rounded-xl transition-all hover:bg-opacity-80'
                  style={{ backgroundColor: '#F0E1DD80' }}
                >
                  <div className='relative w-6 h-6 flex-shrink-0'>
                    <Image
                      src={item.icon}
                      alt={`Icon ${index + 1}`}
                      fill
                      className='object-contain'
                    />
                  </div>
                  <p className='text-[#1D2530] font-medium text-[16px'>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
