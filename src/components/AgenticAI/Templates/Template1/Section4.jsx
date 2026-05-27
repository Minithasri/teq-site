'use client';

export default function Section4({ data }) {
  const {
    impactTitle = 'Measurable Impact',
    impactTitleItalic = 'Across Your Operations',
    impactDescription = 'Showcases the tangible business outcomes delivered through efficiency gains, accuracy improvements, cost optimization, and productivity growth.',
    metrics = [],
  } = data || {};

  const sectionBg =
    'linear-gradient(258.79deg, rgba(229,170,102,0.18) -13.56%, rgba(255,165,129,0.18) -13.56%, rgba(221,161,108,0.18) 18.23%, rgba(230,242,246,0.18) 53.64%, rgba(202,185,246,0.18) 91.85%, rgba(112,48,177,0.18) 119.62%)';

  return (
    <section
      className='w-full py-16 px-4 md:px-8 lg:px-16 xl:px-24'
      style={{ background: sectionBg }}
    >
      <div className='max-w-7xl mx-auto flex mt-10 flex-col gap-12'>
        {/* Heading */}
        <div className='flex flex-col items-center gap-3 text-center'>
          <h2 className='text-2xl md:text-4xl' style={{ color: '#262626' }}>
            <span className='font-bold'>Measurable Impact </span>
            <span className='font-light italic'>{impactTitleItalic}</span>
          </h2>
          <p className='text-sm md:text-[17px] max-w-2xl' style={{ color: '#1C1B26' }}>
            {impactDescription}
          </p>
        </div>

        {/* Metrics Row */}
        <div className='relative flex flex-col md:flex-row justify-evenly w-full rounded-2xl mt-10 mb-10'>
          {/* Gradient Border via Mask (supports rounded-2xl corners without breaking) */}
          <div
            className='absolute inset-0 pointer-events-none opacity-30 rounded-2xl'
            style={{
              padding: '0.5px',
              background: 'linear-gradient(106.63deg, #7030B1 0%, #B56DD3 100%)',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
            }}
          />
          {metrics.map((metric, i) => (
            <div key={i} className='flex flex-1 flex-col md:flex-row'>
              <div className='flex flex-1 items-center justify-center gap-4 py-8 px-4'>
                {/* Large Number */}
                <span
                  className='text-3xl md:text-5xl font-medium leading-none flex-shrink-0'
                  style={{ color: '#262626' }}
                >
                  {metric.value}
                </span>

                {/* Label block */}
                <div className='flex flex-col max-w-[160px]'>
                  <span className='text-sm font-medium leading-snug' style={{ color: '#737373' }}>
                    {metric.label}
                  </span>
                </div>
              </div>

              {/* Divider Line (doesn't touch edges due to my-6/mx-10) */}
              {i < metrics.length - 1 && (
                <>
                  {/* Desktop Vertical Divider */}
                  <div
                    className='hidden md:block w-[1px] my-6'
                    style={{
                      background:
                        'linear-gradient(106.63deg, rgba(112,48,177,0.3) 0%, rgba(181,109,211,0.3) 100%)',
                    }}
                  />
                  {/* Mobile Horizontal Divider */}
                  <div
                    className='md:hidden h-[1px] mx-10'
                    style={{
                      background:
                        'linear-gradient(106.63deg, rgba(112,48,177,0.3) 0%, rgba(181,109,211,0.3) 100%)',
                    }}
                  />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
