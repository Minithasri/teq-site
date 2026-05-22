import Image from 'next/image';

export default function Architecture() {
  const steps = [
    {
      icon: '/images/Templates/template6/colour1.svg',
      bgColor: '#0846AA1A',
      title: 'ETL Automation (SSIS)',
      description: 'Extracted and cleansed data from MES, Trace, and manual Excel logs',
    },
    {
      icon: '/images/Templates/template6/colour2.svg',
      bgColor: '#3FA66E1A',
      title: 'Centralized SQL Repository',
      description: 'Stored standardized production and scrap tables with automated computations',
    },
    {
      icon: '/images/Templates/template6/colour3.svg',
      bgColor: '#F99E1F1A',
      title: 'Analytics & Visualization',
      description: 'Delivered dynamic Tableau dashboards with filters by line, machine, and shift',
    },
    {
      icon: '/images/Templates/template6/colour4.svg',
      bgColor: '#EF43431A',
      title: 'Alerts & Monitoring',
      description: 'Enabled threshold-based notifications for deviations beyond acceptable limits',
    },
  ];

  return (
    <section className='w-full py-16 bg-[#F9FAFB] relative'>
      {/* Decorative Top Right Image */}
      <div className='absolute -top-28 right-32 w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] pointer-events-none z-20'>
        <Image
          src='/images/Templates/template6/settings.png'
          alt='Settings Gear'
          fill
          className='object-contain opacity-50'
        />
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h2 className='text-3xl lg:text-4xl font-bold mb-4'>Architecture Overview</h2>
          <p className='text-[#64748B] text-lg lg:text-xl max-w-4xl mx-auto'>
            A comprehensive data pipeline from collection to actionable insights.
          </p>
        </div>

        {/* Steps Pipeline */}
        <div className='flex flex-col lg:flex-row items-center justify-center gap-3'>
          {steps.map((step, index) => (
            <div key={index} className='flex flex-col lg:flex-row items-center w-full'>
              {/* Card */}
              <div className='bg-white rounded-xl p-6 border-2 border-[#F5F5F5] shadow-[0px_8px_22px_rgba(0,0,0,0.08)] w-full lg:w-[290px] h-[230px] flex flex-col'>
                <div
                  className='w-14 h-14 rounded-xl flex items-center justify-center mb-6'
                  style={{ backgroundColor: step.bgColor }}
                >
                  <div className='relative w-8 h-8'>
                    <Image src={step.icon} alt={step.title} fill className='object-contain' />
                  </div>
                </div>
                <h3 className='text-lg font-bold text-[#0F1729]/80 mb-3 leading-snug'>
                  {step.title}
                </h3>
                <p className='text-[#64748B] text-sm leading-relaxed'>{step.description}</p>
              </div>

              {/* Arrow Connector (Visible on LG screens, between items) */}
              {index < steps.length - 1 && (
                <div className='hidden lg:flex items-center justify-center px-2'>
                  <div className='relative w-12 h-12'>
                    <Image
                      src='/images/Templates/template6/blackarrow.svg'
                      alt='Arrow'
                      fill
                      className='object-contain'
                    />
                  </div>
                </div>
              )}

              {/* Mobile Arrow (Bottom, between items) */}
              {index < steps.length - 1 && (
                <div className='lg:hidden flex items-center justify-center py-4'>
                  <div className='relative w-6 h-6 rotate-90'>
                    <Image
                      src='/images/Templates/template6/blackarrow.svg'
                      alt='Arrow'
                      fill
                      className='object-contain'
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
