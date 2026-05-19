import React from 'react';

const operational = [
  {
    icon: '/images/Templates/template16/inci.svg',
    title: 'Incident response time',
    metric: (
      <span className='font-extrabold text-[13px] tracking-tight'>
        <span className='text-[#ef4444]'>hours</span>
        <span className='text-gray-400 mx-1.5 font-normal'>→</span>
        <span className='text-[#00bdf2]'>minutes</span>
      </span>
    ),
    text: 'Reduced from hours to minutes',
  },
  {
    icon: '/images/Templates/template16/sys.svg',
    title: 'System visibility',
    text: 'Improved end-to-end data center performance tracking',
  },
  {
    icon: '/images/Templates/template16/alert.svg',
    title: 'Alert management',
    text: 'Automated prioritization and resolution of critical alerts',
  },
];

const financial = [
  {
    icon: '/images/Templates/template16/energy-op.svg',
    title: 'Energy optimization',
    text: '15–20% reduction in energy usage',
  },
  {
    icon: '/images/Templates/template16/cost.svg',
    title: 'Cost savings',
    text: 'Lowered costs from downtime and manual interventions',
  },
];

const strategic = [
  {
    icon: '/images/Templates/template16/market.svg',
    title: 'Market positioning',
    text: 'Positioned Fekki as an innovator in AI-driven data center management',
  },
  {
    icon: '/images/Templates/template16/scal.svg',
    title: 'Scalability',
    text: 'Foundation for scalable, multi-site data center intelligence',
  },
];

function ImpactCard({ item, highlighted }) {
  return (
    <div
      className={`rounded-[12px] p-5 transition-all duration-200 ${
        highlighted
          ? 'bg-[#e0f7ff] border border-[#00bdf2] shadow-[0_4px_20px_rgba(0,189,242,0.04)]'
          : 'bg-white border border-slate-200/50 shadow-[0_4px_20px_rgba(0,0,0,0.01)]'
      }`}
    >
      <div className='flex items-start gap-3.5'>
        {/* Soft Accent Square Icon Box */}
        <div className='w-9 h-9 rounded-[8px] bg-[#f1f5f9] flex items-center justify-center shrink-0 select-none pointer-events-none'>
          <img src={item.icon} alt='' className='w-4 h-4 object-contain' />
        </div>

        {/* Text Content Block */}
        <div className='flex flex-col text-left pt-0.5'>
          <h4 className='text-[14px] md:text-[15px] font-extrabold text-[#071326] tracking-tight leading-snug'>
            {item.title}
          </h4>

          {/* Colored inline metric text block */}
          {item.metric && <div className='mt-1 leading-none'>{item.metric}</div>}

          <p className='text-[12.5px] md:text-[13px] text-[#64748b] font-medium leading-relaxed mt-1.5 tracking-tight'>
            {item.text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ImpactDelivered() {
  return (
    <section className='bg-[#f4f7fb] py-16 md:py-20 w-full'>
      <div className='max-w-[1140px] mx-auto px-4 md:px-6'>
        {/* SECTION HEADER BLOCK */}
        <div className='text-center mb-12 md:mb-16'>
          <h2 className='text-[26px] md:text-[32px] font-extrabold text-[#071326] tracking-tight'>
            Impact Delivered
          </h2>
          <p className='text-[14px] md:text-[15.5px] text-[#64748b] font-medium mt-1.5 tracking-tight'>
            Measurable results across operations, finances, and strategy
          </p>
        </div>

        {/* 1. OPERATIONAL IMPACT BLOCK */}
        <div className='mb-10 text-left'>
          {/* FIXED: Removed the blue border accent line classes to match image 2 exactly */}
          <h3 className='text-[17px] md:text-[19px] font-extrabold text-[#071326] mb-4 tracking-tight select-none'>
            Operational Impact
          </h3>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6'>
            {operational.map((item, index) => (
              <ImpactCard key={index} item={item} />
            ))}
          </div>
        </div>

        {/* 2. FINANCIAL IMPACT BLOCK */}
        <div className='mb-10 text-left'>
          {/* FIXED: Removed the blue border accent line classes to match image 2 exactly */}
          <h3 className='text-[17px] md:text-[19px] font-extrabold text-[#071326] mb-4 tracking-tight select-none'>
            Financial Impact
          </h3>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6'>
            {financial.map((item, index) => (
              <ImpactCard key={index} item={item} highlighted={index === 0} />
            ))}
          </div>
        </div>

        {/* 3. STRATEGIC IMPACT BLOCK */}
        <div className='text-left'>
          {/* FIXED: Removed the blue border accent line classes to match image 2 exactly */}
          <h3 className='text-[17px] md:text-[19px] font-extrabold text-[#071326] mb-4 tracking-tight select-none'>
            Strategic Impact
          </h3>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6'>
            {strategic.map((item, index) => (
              <ImpactCard key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
