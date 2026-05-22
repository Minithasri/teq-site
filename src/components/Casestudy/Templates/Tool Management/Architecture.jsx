import Image from 'next/image';

export default function Architecture() {
  const items = [
    {
      icon: '/images/Templates/template8/arc1.svg',
      title: 'Power Apps Interface',
      description: 'Central portal for tool tracking, issuance, return, and maintenance logging',
    },
    {
      icon: '/images/Templates/template8/arc2.svg',
      title: 'OCR Integration',
      description:
        'Scans tool markings and physical labels to automatically digitize and verify tool IDs',
    },
    {
      icon: '/images/Templates/template8/arc3.svg',
      title: 'SQL Server',
      description:
        'Centralized data store for tool details, movement history, and maintenance schedules',
    },
    {
      icon: '/images/Templates/template8/arc4.svg',
      title: 'Power Automate',
      description:
        'Triggers alerts for tool calibration, maintenance due dates, and approval workflows',
    },
    {
      icon: '/images/Templates/template8/arc5.svg',
      title: 'Advanced Calculation Hub',
      description:
        'Manages real-time calculations for tool utilization, life expectancy, and cost metrics',
    },
    {
      icon: '/images/Templates/template8/arc6.svg',
      title: 'Power BI Dashboards',
      description:
        'Provides interactive dashboards for lifecycle tracking, efficiency KPIs, and performance trends',
    },
  ];

  return (
    <section
      className='w-full py-20 relative overflow-hidden'
      style={{ backgroundColor: '#F9FAFB' }}
    >
      {/* Top Right Decorative Image */}
      <div className='absolute top-20 right-20 w-64 h-64 pointer-events-none z-20'>
        <Image
          src='/images/Templates/template8/setting.png'
          alt='Settings'
          fill
          className='object-contain opacity-100'
        />
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
            Architecture Overview
          </h2>
          <p className='text-gray-600 text-lg'>
            Integrated Tool Management Platform leveraging Microsoft Power Platform
          </p>
        </div>

        {/* Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {items.map((item, index) => (
            <div
              key={index}
              className='bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300'
            >
              <div
                className='w-14 h-14 rounded-xl flex items-center justify-center mb-6'
                style={{
                  background: '#286baeff',
                  boxShadow:
                    '0 4px 6px -1px rgba(21, 107, 193, 0.1), 0 2px 4px -1px rgba(21, 107, 193, 0.06)',
                }}
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={28}
                  height={28}
                  className='brightness-0 invert'
                />
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-3'>{item.title}</h3>
              <p className='text-gray-600 text-sm leading-relaxed'>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
