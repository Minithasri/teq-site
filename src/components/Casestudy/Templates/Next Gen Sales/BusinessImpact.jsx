'use client';

import { Database, ShieldCheck, TrendingUp } from 'lucide-react';

const impacts = [
  {
    icon: <Database size={24} />,
    stat: '27 → 1',
    label: 'Centralized SSOT',
    description:
      'Replaced 27 Excel sheets with a single, governed source of truth for all campaign data.',
  },
  {
    icon: <ShieldCheck size={24} />,
    stat: '0',
    label: 'Manual Errors',
    description:
      'Eliminated manual data entry errors through automated validation and predefined rules.',
  },
  {
    icon: <TrendingUp size={24} />,
    stat: '100%',
    label: 'Campaign Governance',
    description:
      'Achieved full campaign governance and naming consistency across all teams and platforms.',
  },
];

export default function BusinessImpact() {
  return (
    <section
      className="relative w-full flex flex-col items-center font-['Poppins'] bg-white"
      style={{ padding: '80px 0' }}
    >
      <div className='max-w-[1200px] w-full mx-auto px-4 text-center'>
        {/* 1. Header Section */}
        <h2
          className='font-bold mb-6'
          style={{
            fontSize: '42px',
            letterSpacing: '1.4px',
            lineHeight: '20px',
          }}
        >
          Business Impact
        </h2>

        <h3
          className='font-bold text-[#0F1729]/80 mb-6'
          style={{ fontSize: '30px', lineHeight: '36px', letterSpacing: '-0.75px' }}
        >
          Measurable Outcomes
        </h3>

        <p
          className='text-[#65758B] font-normal mx-auto mb-16'
          style={{ fontSize: '16px', lineHeight: '26px', maxWidth: '1000px' }}
        >
          The transformation delivered quantifiable improvements across operational efficiency, data
          quality, and governance.
        </p>

        {/* 2. Cards Grid */}
        <div className='flex flex-wrap justify-center gap-6'>
          {impacts.map((item, index) => (
            <div
              key={index}
              className='flex flex-col items-start p-8 text-left border-2 border-[#F5F5F5] rounded-[12px] shadow-[0px_4px_12px_rgba(0,0,0,0.08)]'
              style={{
                width: '312px',
                minHeight: '207px',
              }}
            >
              {/* Card Header: Icon + Stat + Label */}
              <div className='flex items-start gap-4 mb-4'>
                <div
                  className='flex items-center justify-center rounded-xl bg-[#0846AA]/60 text-white'
                  style={{ width: '44px', height: '44px' }}
                >
                  {item.icon}
                </div>

                <div className='flex flex-col'>
                  <span className='font-bold text-[#1D2530] text-[24px] leading-tight'>
                    {item.stat}
                  </span>
                  <span className='font-bold text-[#0F1729]/80 text-[13px] uppercase'>
                    {item.label}
                  </span>
                </div>
              </div>

              {/* Card Description */}
              <p
                className='text-[#1D2530] font-normal'
                style={{
                  fontSize: '15px',
                  lineHeight: '22px',
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
