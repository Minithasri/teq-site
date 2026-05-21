'use client';

import { Database, ShieldCheck, LineChart } from 'lucide-react';

const outcomes = [
  {
    icon: <Database size={24} />,
    title: 'Real-Time Dashboards',
    description:
      'Reporting shifted from manual weekly Excel reports to automated, real-time dashboards with instant refresh.',
  },
  {
    icon: <ShieldCheck size={24} />,
    title: 'Standardized KPI Tracking',
    description:
      'Unified KPI definitions across the organization eliminated conflicting metrics and improved transparency.',
  },
  {
    icon: <LineChart size={24} />,
    title: 'Proactive Visibility',
    description:
      'Leadership gained proactive, live visibility into sales trends, customer behavior, and regional performance.',
  },
];

export default function BusinessImpact() {
  return (
    <section className="w-full mt-[-80px] py-16 md:py-24 bg-white font-['Poppins']">
      <div className='max-w-7xl mx-auto px-4 text-center'>
        {/* Header Section */}

        <h2
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 600,
            fontSize: '32px',
            lineHeight: '20px',
            letterSpacing: '1.4px',
            marginBottom: '28px',
          }}
        >
          Business Impact
        </h2>

        <h3
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 500,
            fontSize: '30px',
            lineHeight: '36px',
            letterSpacing: '-0.75px',
            color: '#1D2530',
            marginBottom: '48px',
          }}
        >
          Measurable Outcomes
        </h3>

        {/* Impact Cards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8'>
          {outcomes.map((item, index) => (
            <div
              key={index}
              className='bg-white border-2 border-[#F5F5F5] rounded-[15px] p-8 flex flex-col items-start text-left transition-all shadow-[0px_8px_22px_rgba(0,0,0,0.08)]'
              style={{ minHeight: '260px' }}
            >
              {/* Icon Container (Rounded Square) */}
              <div className='bg-[#0846AA]/60 text-white p-3 rounded-[12px] mb-6 flex items-center justify-center'>
                {item.icon}
              </div>

              {/* Title */}
              <h4 className='text-[#0F1729]/80 font-bold text-[22px] md:text-[24px] leading-tight mb-4'>
                {item.title}
              </h4>

              {/* Description */}
              <p className='text-[#1D2530] font-normal text-[15px] md:text-[16px] leading-relaxed opacity-90'>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
