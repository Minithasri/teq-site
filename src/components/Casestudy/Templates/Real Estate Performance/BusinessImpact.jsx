'use client';

import { CheckCircle2, DollarSign, Target, TrendingUp } from 'lucide-react';

const impactSections = [
  {
    title: 'Operational Impact',
    iconColor: '#22C55E',
    iconBg: '#0FDB20BF',
    icon: <TrendingUp size={24} className='text-[#FFFFFF]' />,
    points: [
      'Reduced reporting cycle from monthly → real-time',
      'Improved visibility into asset-level performance',
      'Enabled faster interventions for underperforming properties',
    ],
  },
  {
    title: 'Financial Impact',
    iconColor: '#22C55E',
    iconBg: '#0FDB20BF',
    icon: <DollarSign size={24} className='text-[#FFFFFF]' />,
    points: [
      'Optimized revenue by improving occupancy tracking',
      'Reduced operational costs with automated reporting',
    ],
  },
  {
    title: 'Strategic Impact',
    iconColor: '#3B82F6',
    iconBg: '#3B82F6BF',
    icon: <Target size={24} className='text-[#FFFFFF]' />,
    points: [
      "Strengthened ESR's ability to make data-driven investment decisions",
      'Positioned ESR as a digitally transformed player in the real estate sector',
    ],
  },
];

export default function BusinessImpact() {
  return (
    <section
      className="w-full bg-[#FAFBFC] py-10 md:py-12 px-4 sm:px-6 flex flex-col items-center font-['Poppins'] select-none"
      style={{ minHeight: '570px' }}
    >
      {/* Header Block */}
      <div className='max-w-[1200px] w-full px-2 sm:px-4 flex flex-col items-center text-center mb-10 md:mb-12'>
        <h2
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
            lineHeight: '40px',
            color: '#0F1729',
          }}
          className='mb-4 text-[28px] sm:text-[30px] md:text-[34px]'
        >
          Business Impact
        </h2>

        <p
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 400,
            lineHeight: '28px',
            color: '#6B7280',
          }}
          className='max-w-[850px] text-[15px] sm:text-[16px]'
        >
          Measurable results across operations, finance, and strategy
        </p>
      </div>

      {/* Core 3-Column Visual Card Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1140px] px-2 items-start'>
        {impactSections.map((section, idx) => (
          <div
            key={idx}
            className='bg-white p-5 sm:p-6 md:p-8 flex flex-col justify-start border border-[#F3F4F6] h-full min-h-[320px] md:min-h-[350px]'
            style={{
              borderRadius: '16px',
              boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.01), 0px 1px 3px rgba(0, 0, 0, 0.02)',
            }}
          >
            {/* Header Layout: Icon Box + Sub-section Title */}
            <div className='flex items-center gap-4 mb-6 md:mb-8'>
              <div
                className='flex items-center justify-center rounded-xl shrink-0'
                style={{
                  width: '48px',
                  height: '48px',
                  background: section.iconBg,
                }}
              >
                {section.icon}
              </div>

              <h3
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 700,
                  color: '#0F1729',
                  letterSpacing: '-0.5px',
                }}
                className='text-[20px] sm:text-[21px] md:text-[22px]'
              >
                {section.title}
              </h3>
            </div>

            {/* Content List Block */}
            <div className='flex flex-col gap-4'>
              {section.points.map((point, pIdx) => (
                <div key={pIdx} className='flex items-start gap-3'>
                  <CheckCircle2
                    size={20}
                    className='shrink-0 mt-0.5 rounded-full'
                    color='#FFFFFF'
                    style={{
                      backgroundColor: section.title === 'Strategic Impact' ? '#3B82F6' : '#22C55E',
                    }}
                  />

                  <span
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 400,
                      lineHeight: '24px',
                      color: '#374151',
                    }}
                    className='text-[15px] sm:text-[16px]'
                  >
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
