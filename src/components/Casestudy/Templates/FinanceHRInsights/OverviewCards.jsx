import React from 'react';

const cards = [
  {
    icon: '/images/Templates/template15/industry.svg',
    label: 'Industry',
    value: 'Telecom',
  },
  {
    icon: '/images/Templates/template15/finance.svg',
    label: 'Focus Area',
    value: 'Finance & HR',
  },
  {
    icon: '/images/Templates/template15/scoop.svg',
    label: 'Scope',
    value: 'Global',
  },
  {
    icon: '/images/Templates/template15/impact.svg',
    label: 'Impact',
    value: 'Real-time',
  },
];

export default function OverviewCards() {
  return (
    <section className='relative bg-[#f8fafc] pt-14 pb-16 overflow-hidden'>
      <div className='max-w-[1140px] mx-auto px-4 md:px-6 relative'>
        {/* FULL SATELLITE IMAGE */}
        <img
          src='/images/Templates/template15/bg2.png'
          alt='Satellite'
          className='hidden xl:block absolute top-[120px] right-[-300px] w-[520px] rotate-[280deg] opacity-[0.55] pointer-events-none select-none z-0'
        />

        {/* CARDS */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10'>
          {cards.map((item, index) => (
            <div
              key={index}
              className='bg-white rounded-[14px] border-2 border-[#F5F5F5] shadow-[0_8px_12px_rgba(0,0,0,0.08)] p-6 min-h-[145px] flex flex-col justify-between'
            >
              {/* TOP */}
              <div className='flex items-center gap-3'>
                <div className='w-[48px] h-[48px] rounded-[14px] bg-[#0846AA]/40 flex items-center justify-center shadow-[0_6px_18px_rgba(99,102,241,0.25)]'>
                  <img
                    src={item.icon}
                    alt={item.label}
                    className='w-[22px] h-[22px] object-contain'
                  />
                </div>

                <span className='text-[15px] text-[#64748b] font-medium'>{item.label}</span>
              </div>

              {/* VALUE */}
              <div className='mt-6'>
                <h3 className='text-[20px] font-extrabold text-[#071326] leading-tight'>
                  {item.value}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
