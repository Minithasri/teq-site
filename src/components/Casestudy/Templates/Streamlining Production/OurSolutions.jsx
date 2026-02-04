import Image from 'next/image';

export default function OurSolutions() {
  const features = [
    {
      icon: '/images/Templates/template5/4ics1.svg',
      title: 'Digital Work Order Management',
      description:
        'Automated workflows for preventive and corrective maintenance with full lifecycle tracking',
    },
    {
      icon: '/images/Templates/template5/4ics2.svg',
      title: 'Real-Time Downtime Tracking',
      description: 'Live asset status updates with downtime reason codes and precise timestamps',
    },
    {
      icon: '/images/Templates/template5/4ics3.svg',
      title: 'Automated PM Scheduling',
      description: 'Intelligent scheduling based on runtime, usage hours, or calendar triggers',
    },
    {
      icon: '/images/Templates/template5/4ics4.svg',
      title: 'Mobile-Enabled Execution',
      description: 'On-the-go task logging, part usage updates, and work order completion',
    },
    {
      icon: '/images/Templates/template5/4ics5.svg',
      title: 'Downtime Analytics Dashboard',
      description: 'Centralized Power BI dashboard for root cause, frequency, and cost analysis',
    },
    {
      icon: '/images/Templates/template5/4ics6.svg',
      title: 'Performance KPIs',
      description: 'Tracking MTTR, MTBF, and maintenance compliance at asset and line levels',
    },
  ];

  return (
    <section className='w-full py-16 bg-[#F6F6F6] relative overflow-hidden'>
      {/* Decorative Background Image - Top Right */}
      <div className='absolute top-0 right-0 w-[500px] h-[400px] lg:w-[600px] lg:h-[500px] pointer-events-none z-0'>
        <Image
          src='/images/Templates/template5/bulbnew.svg'
          alt='Idea Background'
          fill
          className='object-contain lg:object-right-top opacity-80'
        />
      </div>

      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Header */}
        <div className='mb-12'>
          <div className='flex items-center gap-4 mb-2'>
            <div className='w-8 h-8 relative flex-shrink-0'>
              <Image
                src='/images/Templates/template5/4solu1.svg'
                alt='Solution Icon'
                fill
                className='object-contain'
              />
            </div>
            <h2 className='text-3xl lg:text-4xl font-bold text-[#1D2530]'>Our Solution</h2>
          </div>
          <p className='text-[#64748B] text-lg lg:text-xl ml-12'>
            Industrial Engineering Maintenance Application
          </p>
        </div>

        {/* Description Box */}
        <div className='bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-gray-100 mb-16 relative z-10'>
          <p className='text-[#1F2937] text-lg leading-relaxed mb-6'>
            We implemented an{' '}
            <span className='font-bold' style={{ color: '#0846AA' }}>
              Industrial Engineering (IE) Application
            </span>{' '}
            to digitize the complete maintenance lifecycle - from planning and execution to downtime
            tracking and performance analysis.
          </p>
          <p className='text-lg leading-relaxed' style={{ color: '#274F87' }}>
            The solution provided real-time visibility, mobile-enabled workflows, and data-driven
            decision-making to improve asset reliability and cost efficiency.
          </p>
        </div>

        {/* Highlights */}
        <div>
          <h3 className='text-2xl font-bold text-[#1D2530] mb-8'>Core Solution Highlights</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {features.map((item, index) => (
              <div
                key={index}
                className='bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col items-start'
              >
                <div
                  className='w-12 h-12 rounded-xl flex items-center justify-center mb-4'
                  style={{ backgroundColor: '#0846AA1A' }}
                >
                  <div className='relative w-6 h-6'>
                    <Image src={item.icon} alt={item.title} fill className='object-contain' />
                  </div>
                </div>
                <h4 className='text-lg font-bold text-[#1D2530] mb-3'>{item.title}</h4>
                <p className='text-[#64748B] text-sm leading-relaxed'>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
