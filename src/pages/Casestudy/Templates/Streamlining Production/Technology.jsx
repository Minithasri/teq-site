import Image from 'next/image';

export default function Technology() {
  const techCards = [
    {
      title: 'Power Apps',
      description: 'Front-end application for maintenance tracking and technician execution',
    },
    {
      title: 'Power Automate',
      description: 'Workflow automation for approvals, PM scheduling, and notifications',
    },
    {
      title: 'SQL Server',
      description: 'Centralized database for downtime and maintenance data',
    },
    {
      title: 'Power BI',
      description: 'Downtime analytics and maintenance performance dashboards',
    },
    {
      title: 'Mobile Integration',
      description: 'Technician access for real-time task logging and status updates',
    },
  ];

  const floatingIcons = [
    '/images/Templates/template2/iconnew1.svg',
    '/images/Templates/template2/iconnew2.svg',
    '/images/Templates/template2/iconnew3.svg',
    '/images/Templates/template5/i4.png',
    '/images/Templates/template5/i5.png',
  ];

  return (
    <section className='w-full  bg-[#F6F6F6] overflow-visible'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header Area */}
        <div className='flex flex-col md:flex-row items-center justify-between mb-16 gap-8'>
          {/* Title */}
          <div className='flex items-center gap-4'>
            <div className='w-10 h-10 relative flex-shrink-0 bg-blue-100/50 rounded-xl p-2'>
              <Image
                src='/images/Templates/template5/stack.svg'
                alt='Stack Icon'
                fill
                className='object-contain p-2'
              />
            </div>
            <h2 className='text-3xl lg:text-4xl font-bold text-[#1D2530]'>Technology Stack</h2>
          </div>

          {/* Floating Icons Loop */}
          <div className='flex items-center gap-4 lg:gap-12'>
            {floatingIcons.map((icon, index) => (
              <div
                key={index}
                className='relative drop-shadow-sm transition-transform hover:-translate-y-1 w-10 h-10 lg:w-12 lg:h-12'
              >
                <Image src={icon} alt={`Tech ${index}`} fill className='object-contain' />
              </div>
            ))}
          </div>
        </div>

        {/* Tech Cards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-20'>
          {techCards.slice(0, 3).map((card, index) => (
            <div key={index} className='bg-white rounded-xl p-6 shadow-sm border border-gray-100'>
              <div className='flex items-center gap-3 mb-3'>
                <div className='w-2 h-2 rounded-full bg-[#0846AA]'></div>
                <h3 className='text-lg font-bold text-[#1D2530]'>{card.title}</h3>
              </div>
              <p className='text-[#64748B] text-sm leading-relaxed'>{card.description}</p>
            </div>
          ))}
          {/* Bottom centered row */}
          <div className='md:col-span-3 flex flex-wrap justify-center gap-6'>
            {techCards.slice(3, 5).map((card, index) => (
              <div
                key={index}
                className='bg-white rounded-xl p-6 shadow-sm border border-gray-100 w-full md:w-[calc(33.33%-1rem)]'
              >
                <div className='flex items-center gap-3 mb-3'>
                  <div className='w-2 h-2 rounded-full bg-[#0846AA]'></div>
                  <h3 className='text-lg font-bold text-[#1D2530]'>{card.title}</h3>
                </div>
                <p className='text-[#64748B] text-sm leading-relaxed'>{card.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Images (Overlapping) */}
        <div className='relative h-[300px] md:h-[400px] lg:h-[500px] w-full  max-w-4xl mx-auto'>
          {/* Main Back Image */}
          <div className='absolute top-0 left-0 right-0 h-full w-full rounded-2xl overflow-hidden'>
            <Image
              src='/images/Templates/template5/temp41.png'
              alt='Dashboard Main'
              fill
              className='object-cover'
            />
          </div>

          {/* Overlapping Front Image */}
          <div className='absolute bottom-[-20%] right-[-5%] lg:right-[-10%] w-[55%] h-[70%] rounded-2xl overflow-hidden drop-shadow-xl z-30'>
            <Image
              src='/images/Templates/template5/temp42.png'
              alt='Dashboard Detail'
              fill
              className='object-cover'
            />
          </div>
        </div>

        {/* Spacer for overlapping image */}
        <div className='h-16 lg:h-24'></div>
      </div>
    </section>
  );
}
