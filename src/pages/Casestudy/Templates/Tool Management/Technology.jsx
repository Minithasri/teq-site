import Image from 'next/image';

export default function Technology() {
  const techStack = [
    {
      icon: '/images/Templates/template8/ticon1.svg',
      title: 'Power Apps',
      description: 'Tool lifecycle management and user interface',
    },
    {
      icon: '/images/Templates/template8/ticon2.svg',
      title: 'Power Automate',
      description: 'Alerts, approvals, and maintenance workflows',
    },
    {
      icon: '/images/Templates/template8/ticon3.svg',
      title: 'SQL Server',
      description: 'Centralized data storage and integration',
    },
    {
      icon: '/images/Templates/template8/ticon4.svg',
      title: 'OCR Technology',
      description: 'Automated tool ID recognition and data capture',
    },
    {
      icon: '/images/Templates/template8/ticon5.svg',
      title: 'Power BI',
      description: 'Real-time dashboards and performance analytics',
    },
  ];

  return (
    <section className='w-full py-24 relative' style={{ backgroundColor: '#F9FAFB' }}>
      {/* Top Left Decorative Image (Motor) */}
      <div className='absolute -top-60 left-5 w-[500px] h-[500px] pointer-events-none z-20'>
        <Image
          src='/images/Templates/template8/motor.svg'
          alt='Motor Components'
          fill
          className='object-contain opacity-100'
        />
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>Technology Stack</h2>
          <p className='text-gray-500 text-lg'>Powered by Microsoft Power Platform</p>
        </div>

        {/* Grid */}
        <div className='flex flex-wrap justify-center gap-6'>
          {techStack.map((item, index) => (
            <div
              key={index}
              className='bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 flex flex-col items-start w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-1rem)]'
            >
              <div className='mb-6'>
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={48}
                  height={48}
                  className='object-contain'
                />
              </div>
              <h3 className='text-xl font-bold text-blue-600 mb-3'>{item.title}</h3>
              <p className='text-gray-600 text-sm leading-relaxed'>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
