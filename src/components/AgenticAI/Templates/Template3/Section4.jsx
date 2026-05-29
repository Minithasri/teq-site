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
    <section className='w-full py-10 px-4 md:px-8 lg:px-16 xl:px-24 bg-white'>
      <div
        className='max-w-7xl mx-auto rounded-[24px] py-16 px-6 md:px-12 flex flex-col gap-12'
        style={{ background: sectionBg }}
      >
        {/* Heading */}
        <div className='flex flex-col items-center gap-3 text-center'>
          <h2 className='text-2xl md:text-4xl' style={{ color: '#262626' }}>
            <span className='font-bold'>Measurable Impact </span>
            <span className='font-light italic'>{impactTitleItalic}</span>
          </h2>
          <p className='text-sm md:text-[17px] max-w-2xl mt-2' style={{ color: '#1C1B26' }}>
            {impactDescription}
          </p>
        </div>

        {/* Metrics Row */}
        <div className='flex flex-col md:flex-row justify-evenly items-center w-full mt-4'>
          {metrics.map((metric, i) => (
            <div key={i} className='flex flex-col md:flex-row items-center flex-1'>
              <div className='flex flex-col items-center justify-center gap-2 py-4 px-4 w-full text-center'>
                {/* Large Number */}
                <span
                  className='text-4xl md:text-5xl font-medium leading-none'
                  style={{ color: '#262626' }}
                >
                  {metric.value}
                </span>

                {/* Label block */}
                <span
                  className='text-sm font-medium mt-2 max-w-[200px]'
                  style={{ color: '#737373' }}
                >
                  {metric.label}
                </span>
              </div>

              {/* Divider Line */}
              {i < metrics.length - 1 && (
                <>
                  {/* Desktop Vertical Divider */}
                  <div
                    className='hidden md:block w-[1px] h-16'
                    style={{
                      background:
                        'linear-gradient(106.63deg, rgba(112,48,177,0.15) 0%, rgba(181,109,211,0.15) 100%)',
                    }}
                  />
                  {/* Mobile Horizontal Divider */}
                  <div
                    className='md:hidden h-[1px] w-32 my-6'
                    style={{
                      background:
                        'linear-gradient(106.63deg, rgba(112,48,177,0.15) 0%, rgba(181,109,211,0.15) 100%)',
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
