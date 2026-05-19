const rows = [
  { dimension: 'Sales Reporting', before: 'Weekly/Manual', after: 'Real-time' },
  { dimension: 'Outlet Benchmarking', before: 'Limited', after: 'Automated & Unified' },
  { dimension: 'Leadership Insights', before: 'Fragmented', after: 'Centralized' },
  { dimension: 'Operational KPIs', before: 'Tracked in silos', after: 'Integrated' },
];

const outcomes = [
  'Reporting cycle reduced from weekly → real-time',
  'Improved outlet benchmarking and sales comparisons',
  'Enabled faster decision-making for promotions and operations',
  'Strengthened leadership oversight with actionable KPIs',
];

export default function BusinessImpact() {
  return (
    <section className='bg-[#fcfdff] py-16'>
      <div className='max-w-[1040px] mx-auto px-6'>
        <h2 className='text-center text-[26px] font-extrabold text-[#091124] mb-10 tracking-tight'>
          Business Impact
        </h2>

        {/* Elevated Main Card Container housing the clean table structure */}
        <div className='bg-white rounded-[16px] border border-[#e2e8f0]/80 shadow-[0_4px_24px_rgba(0,0,0,0.02)] p-8 md:p-10 mb-8'>
          {/* 4-Column Balanced Grid Header row */}
          <div className='grid grid-cols-[1.5fr_1.2fr_0.4fr_1.2fr] text-[14px] font-extrabold text-[#091124] pb-4 border-b border-[#f1f5f9]'>
            <div>Dimension</div>
            <div>Before</div>
            <div></div> {/* Empty spacer cell for arrow alignment */}
            <div>After</div>
          </div>

          {/* Table Data Rows */}
          <div className='divide-y divide-[#f1f5f9]'>
            {rows.map((row, index) => (
              <div
                key={index}
                className='grid grid-cols-[1.5fr_1.2fr_0.4fr_1.2fr] text-[13.5px] items-center py-4 font-medium'
              >
                {/* Dimension Column */}
                <div className='text-[#091124] font-semibold'>{row.dimension}</div>

                {/* Before State */}
                <div className='text-[#ef4444]'>{row.before}</div>

                {/* Transition Arrow - Using your uploaded local asset */}
                <div className='flex justify-start items-center'>
                  <img
                    src='/images/Templates/template17/right-arrow.svg'
                    alt='to'
                    className='w-4 h-4 object-contain opacity-80'
                  />
                </div>

                {/* After State */}
                <div className='text-[#22c55e] font-bold'>{row.after}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Metrics Layout Row */}
        <div className='grid md:grid-cols-2 gap-5'>
          {outcomes.map((item, index) => (
            <div
              key={index}
              className='bg-[#edfdf0] border border-[#d1fad7]/60 rounded-[12px] px-5 py-4 flex gap-4 items-start shadow-[0_2px_8px_rgba(0,0,0,0.01)]'
            >
              <img
                src='/images/Templates/template17/tick.svg'
                alt='Success Check'
                className='w-[18px] h-[18px] shrink-0 mt-0.5'
              />
              <p className='text-[13.5px] text-[#14532d] font-medium leading-relaxed'>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
