'use client';

const impacts = [
  {
    metric: '~60%',
    description: 'Improvement in real-time visibility across operations',
  },
  {
    metric: '50–70%',
    description: 'Faster decision-making through centralized dashboards',
  },
  {
    metric: '40–60%',
    description: 'Increase in operational efficiency via automation',
  },
  {
    metric: '~65%',
    description: 'Reduction in data errors and improved product quality',
  },
];

export default function BusinessImpact() {
  return (
    <section className='relative w-full overflow-hidden' style={{ minHeight: '320px' }}>
      {/* Background image */}
      <div
        className='absolute inset-0 bg-cover bg-center bg-no-repeat'
        style={{ backgroundImage: "url('/images/Templates/tess/tess4.png')" }}
      />

      {/* Light overlay to keep cards legible over image */}
      <div className='absolute inset-0' style={{ backgroundColor: 'rgba(255,255,255,0.18)' }} />

      {/* Content */}
      <div className='relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-10 md:py-14'>
        {/* Title */}
        <h2
          className='text-xl md:text-2xl lg:text-3xl font-bold tracking-wide mb-7 md:mb-8'
          style={{ color: '#262626' }}
        >
          Business Impact
        </h2>

        {/* 2×2 card grid — spans full content width on lg */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 w-full lg:max-w-4xl xl:max-w-5xl mx-auto'>
          {impacts.map((item, i) => (
            <div
              key={i}
              className='rounded-xl p-6 md:p-8 flex flex-col items-center text-center gap-3 shadow-md'
              style={{
                backgroundColor: '#FFFFFF',
                border: '2px solid #F5F5F5',
              }}
            >
              {/* Metric */}
              <span
                className='text-2xl md:text-3xl lg:text-4xl font-bold'
                style={{ color: '#30BF17' }}
              >
                {item.metric}
              </span>

              {/* Description */}
              <p className='text-sm md:text-[15px] leading-snug' style={{ color: '#6A7181' }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
