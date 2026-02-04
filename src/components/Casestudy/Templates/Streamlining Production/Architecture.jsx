import Image from 'next/image';

export default function Architecture() {
  const layers = [
    {
      id: 1,
      title: 'Data Capture Layer',
      description: 'Real-time data input from machines, operators, and mobile applications',
    },
    {
      id: 2,
      title: 'Process Automation Layer',
      description: 'Power Automate workflows for scheduling, approvals, and notifications',
    },
    {
      id: 3,
      title: 'Data Management Layer',
      description:
        'Centralized storage of downtime events, maintenance logs, and asset records in SQL Server',
    },
    {
      id: 4,
      title: 'Analytics & Reporting Layer',
      description:
        'Power BI dashboards displaying downtime analysis, maintenance KPIs, and cost trends',
    },
  ];

  return (
    <section className='w-full py-16 bg-[#F6F6F6] relative overflow-visible'>
      {/* Decorative Background Image - Top Right (Gears) */}
      <div className='absolute -top-16 right-10 w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] pointer-events-none z-0'>
        <Image
          src='/images/Templates/template5/4right.png'
          alt='Gears Background'
          fill
          className='object-contain lg:object-right-top opacity-60'
        />
      </div>

      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Header */}
        <div className='flex items-center justify-center gap-4 mb-16'>
          <div className='w-10 h-10 relative flex-shrink-0 bg-blue-100/50 rounded-xl p-2'>
            <Image
              src='/images/Templates/template5/4arch.svg'
              alt='Architecture Icon'
              fill
              className='object-contain p-2'
            />
          </div>
          <h2 className='text-3xl lg:text-4xl font-bold text-[#1D2530]'>Architecture Overview</h2>
        </div>

        {/* Layers Stack */}
        <div className='bg-none space-y-4'>
          {layers.map((layer, index) => (
            <div
              key={layer.id}
              className='bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex items-center justify-between gap-4 transition-shadow hover:shadow-md'
            >
              <div className='flex items-center gap-6'>
                {/* Number Badge */}
                <div className='w-10 h-10 rounded-xl bg-[#0846AA1A] text-[#0846AA] font-bold flex items-center justify-center flex-shrink-0'>
                  {layer.id}
                </div>

                {/* Text Content */}
                <div>
                  <h3 className='text-[20px] font-bold text-[#1D2530] mb-1'>{layer.title}</h3>
                  <p className='text-[#64748B] text-[14px] lg:text-[16px]'>{layer.description}</p>
                </div>
              </div>

              {/* Arrow Icon */}
              <div className='w-5 h-5 relative flex-shrink-0 opacity-50'>
                <Image
                  src='/images/Templates/template5/4arch2.svg' // Using 4arch2.svg as confirmed existing arrow
                  alt='Flow Arrow'
                  fill
                  className='object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
