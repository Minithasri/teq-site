'use client';

const impacts = [
  {
    value: '~50%',
    title: 'Decision-Making Efficiency',
    description: 'Faster, evidence-based decisions across merchandising and operations.',
  },
  {
    value: '20–30%',
    title: 'Inventory Optimization',
    description: 'Reduced stockouts and overstock through demand-aligned planning.',
  },
  {
    value: '~60%',
    title: 'Reduction in Manual Reporting',
    description: 'Reclaimed analyst hours redirected to higher-value insight work.',
  },
  {
    value: '↑',
    title: 'Data Accuracy & Reliability',
    description: 'Enterprise-grade governance and validation across the data estate.',
  },
];

const BusinessImpactSection = () => {
  return (
    <section className='w-full overflow-hidden'>
      <div className='mx-auto max-w-7xl px-4 md:px-6 text-center'>
        {/* TITLE */}
        <h2 className='text-2xl md:text-5xl leading-none font-semibold tracking-[3px]'>
          <span className='mr-3'>04</span>— Business Impact
        </h2>

        {/* GRID */}
        <div className='mt-12 grid grid-cols-1 gap-5 md:grid-cols-2'>
          {impacts.map((item, index) => (
            <div
              key={index}
              className={`
                relative
                rounded-[6px]
                border-2
                border-[#F5F5F5]
                px-8
                md:px-10
                py-8
                md:py-10
                transition-all
                duration-300
                shadow-[0px_4px_12px_rgba(0,0,0,0.08)]
                bg-white
              `}
            >
              {/* VALUE */}
              <h3 className='text-2xl md:text-5xl leading-none font-semibold tracking-[-2px] text-[#0F1729]/80'>
                {item.value}
              </h3>

              {/* TITLE */}
              <h4 className='mt-7 text-[18px] md:text-[24px] leading-[1.4] font-medium tracking-[-0.5px] text-[#111827]'>
                {item.title}
              </h4>

              {/* DESCRIPTION */}
              <p
                className={`
                  mt-6
                  text-[14px]
                  md:text-[18px]
                  leading-[1.9]
                  text-[#6B7280]
                `}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessImpactSection;
