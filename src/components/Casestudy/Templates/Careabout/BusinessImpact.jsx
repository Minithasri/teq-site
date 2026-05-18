'use client';

const metrics = [
  {
    value: '40–50%',
    description: 'Reduction in development time for new payer projects',
  },
  {
    value: '3×',
    description: 'Improved scalability with AWS & Snowflake architecture',
  },
  {
    value: '60%+',
    description: 'Enhanced data consistency & reduced redundancy',
  },
  {
    value: '2×',
    description: 'Faster data processing & delivery for analytics',
  },
];

const bulletPoints = [
  '40–50% reduction in development time for new payer projects',
  'Improved scalability and performance with AWS and Snowflake architecture',
  'Enhanced data consistency and reduced redundancy across payer datasets',
  'Faster data processing and delivery for analytics and reporting',
  'Increased efficiency through reusable and modular ETL frameworks',
];

export default function BusinessImpact() {
  return (
    <section className='w-full bg-white'>
      <div className='w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-10 md:py-14'>
        {/* Title */}
        <h2 className='text-2xl md:text-3xl font-bold mb-7 md:mb-8' style={{ color: '#07D64F' }}>
          Business Impact
        </h2>

        {/* 4-col metric cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-8 md:mb-10'>
          {metrics.map((item, i) => (
            <div
              key={i}
              className='rounded-2xl p-5 md:p-6 flex flex-col gap-2 text-center'
              style={{
                backgroundColor: '#FFFFFF',
                border: '2px solid #07D64F',
              }}
            >
              {/* Metric */}
              <span className='text-2xl md:text-3xl font-bold' style={{ color: '#07D64F' }}>
                {item.value}
              </span>
              {/* Description */}
              <p className='text-[13px] md:text-[15px] leading-snug' style={{ color: '#000000' }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bullet points */}
        <ul className='space-y-3'>
          {bulletPoints.map((point, i) => (
            <li key={i} className='flex items-start gap-3'>
              <span
                className='flex-shrink-0 w-2.5 h-2.5 rounded-full mt-1.5'
                style={{ backgroundColor: '#07D64F' }}
              />
              <span className='text-sm md:text-[17px] leading-snug' style={{ color: '#000000' }}>
                {point}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
