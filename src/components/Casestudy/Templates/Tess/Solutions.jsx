'use client';

import Image from 'next/image';

const cards = [
  {
    icon: '/images/Templates/tess/ttsvg1.svg',
    title: 'Power BI Dashboards',
    points: [
      'Production monitoring',
      'Quality tracking',
      'Supply chain visibility',
      'Real-time KPI tracking',
    ],
  },
  {
    icon: '/images/Templates/tess/ttsvg2.svg',
    title: 'Power Apps',
    points: ['Shop floor data entry', 'Quality inspections', 'Maintenance workflows'],
  },
  {
    icon: '/images/Templates/tess/ttsvg3.svg',
    title: 'Full-Stack Applications',
    points: ['Production tracking', 'Workflow automation', 'Machine & API integration'],
  },
];

export default function Solutions() {
  return (
    <section className='w-full' style={{ backgroundColor: '#F6F7F9' }}>
      <div className='w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-10 md:py-14'>
        {/* Title */}
        <h2
          className='text-xl md:text-2xl lg:text-3xl font-bold uppercase tracking-wide mb-5'
          style={{ color: '#0B64F4' }}
        >
          Our Solution
        </h2>

        {/* Description with bold highlights */}
        <p
          className='text-sm sm:text-[15px] md:text-[17px] leading-relaxed mb-8 md:mb-10 max-w-7xl'
          style={{ color: '#6A7181' }}
        >
          We designed and developed a comprehensive digital ecosystem combining{' '}
          <strong style={{ color: '#131720' }}>Power BI</strong>,{' '}
          <strong style={{ color: '#131720' }}>Power Apps</strong>, and{' '}
          <strong style={{ color: '#131720' }}>custom full-stack applications</strong> to centralize
          data, automate workflows, and deliver actionable insights.
        </p>

        {/* 3-column cards grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6'>
          {cards.map((card, i) => (
            <div
              key={i}
              className='rounded-2xl p-6 flex flex-col gap-4'
              style={{
                backgroundColor: '#FFFFFF',
                border: '1.5px solid #0B64F4',
              }}
            >
              {/* Icon + title row */}
              <div className='flex items-center gap-3'>
                <div className='flex-shrink-0 w-9 h-9 flex items-center justify-center'>
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={24}
                    height={24}
                    className='object-contain'
                  />
                </div>
                <h3
                  className='text-sm md:text-[15px] font-bold leading-snug'
                  style={{ color: '#131720' }}
                >
                  {card.title}
                </h3>
              </div>

              {/* Bullet points */}
              <ul className='space-y-2 pl-1'>
                {card.points.map((pt, j) => (
                  <li
                    key={j}
                    className='text-[13px] md:text-[14px] leading-snug flex items-start gap-2'
                    style={{ color: '#6A7181' }}
                  >
                    <span
                      className='mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full inline-block'
                      style={{ backgroundColor: '#6A7181' }}
                    />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
