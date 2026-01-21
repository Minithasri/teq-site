import Image from 'next/image';

const solutions = [
  {
    icon: '/images/Templates/template9/sol1.svg',
    title: 'Breakdown & Maintenance Management',
    points: [
      'Real-time logging of machine breakdowns with categorization by severity and root cause',
      'Integration with spare part inventory for quicker issue resolution',
      'Tracking of Mean Time to Repair (MTTR) and downtime patterns to predict recurring failures',
    ],
  },
  {
    icon: '/images/Templates/template9/sol2.svg',
    title: 'Preventive Maintenance Scheduling',
    points: [
      'Automated scheduling for periodic and condition-based maintenance',
      'Alerts and notifications to ensure on-time maintenance execution',
      'Centralized tracking of AMC renewals and vendor inspections',
    ],
  },
  {
    icon: '/images/Templates/template9/sol3.svg',
    title: 'Spare Parts & Inventory Management',
    points: [
      'Visibility into part usage, stock levels, and cost analysis to plan preventive replacements',
      'Repair/scrap decision workflows to reduce waste and optimize spare part utilization',
    ],
  },
  {
    icon: '/images/Templates/template9/sol4.svg',
    title: 'Predictive Analytics through Power BI',
    points: [
      'Dashboards built to monitor maintenance KPIs like MTBF, downtime, and cost variance',
      'Historical data analysis to identify failure patterns and predict potential breakdowns',
      'Trend forecasting that supports proactive decision-making and resource planning',
    ],
  },
  {
    icon: '/images/Templates/template9/sol5.svg',
    title: 'Obsolete and Holiday Management',
    points: [
      'Digital workflows for obsolete asset handling and internal/external sourcing logic',
      'Centralized holiday allocation process for smoother workforce planning',
    ],
  },
];

const Solution = () => {
  return (
    <section className='w-full py-16 md:py-20 px-4 md:px-12 bg-white relative overflow-hidden'>
      {/* Right Side Spanner Decoration */}
      <div className='absolute top-20 right-16 z-30 hidden xl:block w-[400px] h-[300px]'>
        <Image
          src='/images/Templates/template9/spanner.svg'
          alt='Spanner Decoration'
          width={400}
          height={300}
          className='object-contain'
        />
      </div>

      <div className='max-w-6xl mx-auto relative z-20'>
        {/* Header */}
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-[#1F1F1F] mb-4'>Solution Overview</h2>
          <div className='h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-[#F97415] to-[#FAA52E]'></div>
          <p className='text-[#505050] mt-6 max-w-4xl mx-auto text-base md:text-lg leading-relaxed'>
            A connected, intelligent, and analytics-driven maintenance system that supports both
            predictive and preventive maintenance strategies
          </p>
        </div>

        {/* Solutions List */}
        <div className='flex flex-col gap-6'>
          {solutions.map((item, index) => (
            <div
              key={index}
              className='bg-white rounded-2xl p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col md:flex-row gap-6 md:items-start group hover:shadow-lg transition-shadow duration-300'
            >
              {/* Icon */}
              <div className='w-14 h-14 rounded-xl flex items-center justify-center shrink-0 bg-gradient-to-r from-[#0A761E] to-[#12E93A] mt-2'>
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={28}
                  height={28}
                  className='object-contain'
                />
              </div>

              {/* Content */}
              <div className='flex-1'>
                <h3 className='text-xl font-bold text-[#1F1F1F] mb-4'>{item.title}</h3>
                <ul className='space-y-3'>
                  {item.points.map((point, idx) => (
                    <li key={idx} className='flex items-start gap-3 text-[#505050] text-[15px]'>
                      <span className='mt-2 w-1.5 h-1.5 rounded-full bg-[#f68f3b] shrink-0'></span>
                      <span className='leading-relaxed'>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
