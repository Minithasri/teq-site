const solutions = [
  {
    icon: '/images/Templates/template17/sales.svg',
    title: 'Sales Dashboards',
    text: 'Revenue, category performance, outlet comparisons.',
  },
  {
    icon: '/images/Templates/template17/operational.svg',
    title: 'Operational KPIs',
    text: 'Cost efficiency, order volumes, service-level performance.',
  },
  {
    icon: '/images/Templates/template17/out.svg',
    title: 'Outlet Benchmarking',
    text: 'Identified top-performing and underperforming outlets.',
  },
  {
    icon: '/images/Templates/template17/executive.svg',
    title: 'Executive Insights',
    text: 'Centralized view of sales and operations for leadership.',
  },
];

export default function SolutionSummary() {
  return (
    <section className='bg-[#eef5fa] py-16'>
      {/* Expanded section maximum scale boundaries to give cards proper wider structure */}
      <div className='max-w-[1140px] mx-auto px-6'>
        <div className='text-center mb-12'>
          <h2 className='text-[26px] font-extrabold text-[#091124] tracking-tight'>
            Solution Summary
          </h2>
          <p className='text-[13.5px] text-[#55607a] font-medium mt-2'>
            GWC designed and delivered a Sales & Operations Analytics Framework for Marrybrown
          </p>
        </div>

        {/* 2-Column Grid Row containing items */}
        <div className='grid md:grid-cols-2 gap-6'>
          {solutions.map((item, index) => (
            <div
              key={index}
              className='bg-white rounded-[16px] border-2 border-[#F5F5F5] shadow-[0_4px_12px_rgba(0,0,0,0.08)] p-7 flex gap-5 items-start'
            >
              {/* Vibrant neon-green icon block aligned neatly to the left side */}
              <div className='w-12 h-12 rounded-[12px] bg-[#0846AA]/60 flex items-center justify-center shrink-0 mt-0.5 shadow-sm'>
                <img src={item.icon} alt={item.title} className='w-6 h-6 invert-0 brightness-100' />
              </div>

              {/* Text contents grouped tightly to build a horizontal description layout */}
              <div className='pt-0.5'>
                <h3 className='text-[16px] font-extrabold text-[#0F1729]/80 leading-snug'>
                  {item.title}
                </h3>
                <p className='text-[13.5px] text-[#556175] font-medium leading-[1.5] mt-1.5'>
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
