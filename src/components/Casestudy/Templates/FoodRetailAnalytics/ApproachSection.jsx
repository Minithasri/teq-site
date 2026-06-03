const steps = [
  {
    title: 'Requirement Analysis',
    text: 'Identified sales, outlet, and operational KPIs.',
  },
  {
    title: 'Data Integration',
    text: 'Connected POS and operational data sources into a unified model.',
  },
  {
    title: 'Dashboard Design',
    text: 'Built interactive dashboards for sales and outlet monitoring.',
  },
  {
    title: 'Executive Alignment',
    text: 'Delivered leadership summaries with drill-down capability.',
  },
  {
    title: 'Automation',
    text: 'Established scheduled refresh cycles to eliminate manual reporting.',
  },
];

export default function ApproachSection() {
  return (
    <section className='bg-white py-16'>
      <div className='max-w-[850px] mx-auto px-6'>
        <h2 className='text-center text-[26px] font-extrabold text-[#091124] mb-12 tracking-tight'>
          Our Approach
        </h2>

        {/* Timeline Wrapper Container */}
        <div className='relative space-y-8 pl-2 md:pl-6'>
          {/* Vertical Trace Line - Perfectly aligned directly beneath center of the 44px step bubbles */}
          <div className='absolute left-[24px] md:left-[44px] top-4 bottom-4 w-[1.5px] bg-[#dbe8fe] z-0' />

          {steps.map((item, index) => (
            <div key={index} className='flex gap-6 items-start relative z-10'>
              {/* Elevated Step Circle with deep professional accent shadow */}
              <div className='w-11 h-11 rounded-full bg-[#0d4eb9] text-white flex items-center justify-center text-[15px] font-extrabold shrink-0 shadow-[0_4px_12px_rgba(13,78,185,0.25)]'>
                {index + 1}
              </div>

              {/* Text Blocks aligning nicely with the bubble heights */}
              <div className='pt-1.5'>
                <h3 className='text-[16px] font-extrabold text-[#091124] leading-none'>
                  {item.title}
                </h3>
                <p className='text-[13.5px] text-[#6b7280] font-medium mt-1.5 leading-relaxed'>
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
