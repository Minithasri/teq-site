import Image from 'next/image';

export default function Architecture() {
  const cards = [
    {
      icon: '/images/Templates/template7/arch1.svg',
      title: 'Power Apps Interface',
      description: 'Central hub for operators to log data or upload lab reports',
    },
    {
      icon: '/images/Templates/template7/arch2.svg',
      title: 'AI Builder',
      description: 'Extracts key parameters from uploaded lab documents',
    },
    {
      icon: '/images/Templates/template7/arch3.svg',
      title: 'SQL',
      description: 'Unified repository for environmental data',
    },
    {
      icon: '/images/Templates/template7/arch4.svg',
      title: 'Power Automate',
      description: 'Alerts for breaches, renewals, and audit follow-ups',
    },
    {
      icon: '/images/Templates/template7/arch5.svg',
      title: 'Azure Data Factory',
      description: 'Integrates IoT data from sensors and lab systems',
    },
    {
      icon: '/images/Templates/template7/arch6.svg',
      title: 'Power BI Dashboards',
      description: 'Real-time insights on sustainability KPIs',
    },
    {
      icon: '/images/Templates/template7/arch7.svg',
      title: 'SharePoint Repository',
      description: 'Stores certificates, manifests, and audit records',
    },
    {
      icon: '/images/Templates/template7/arch8.svg',
      title: 'Compliance Engine',
      description: 'Automated tracking and reporting workflows',
    },
  ];

  return (
    <section
      className='w-full py-16 lg:py-24 relative overflow-hidden'
      style={{ background: '#F6F6F6' }}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Header with Decorative Gear Icon */}
        <div className='flex items-center justify-center gap-4 mb-16 relative'>
          <h2 className='text-3xl lg:text-4xl font-bold text-[#1D2530] text-center'>
            Architecture Overview
          </h2>
          {/* Decorative Right Image */}
          <div className='absolute -top-16 right-[15%] hidden lg:block w-[220px] h-[220px] -z-10'>
            <Image
              src='/images/Templates/template7/archtitle.svg'
              alt='Gear Decoration'
              fill
              className='object-contain'
            />
          </div>
        </div>

        {/* Cards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {cards.map((card, index) => (
            <div
              key={index}
              className='bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow'
            >
              <div className='w-10 h-10 relative mb-4'>
                <Image src={card.icon} alt={card.title} fill className='object-contain' />
              </div>
              <h3 className='text-lg font-bold text-[#1D2530] mb-3'>{card.title}</h3>
              <p className='text-[#64748B] text-sm leading-relaxed'>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
