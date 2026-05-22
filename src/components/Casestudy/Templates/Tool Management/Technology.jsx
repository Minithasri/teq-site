import Image from 'next/image';

export default function Technology() {
  const techStack = [
    {
      icon: '/images/Templates/technologyicons/power apps.png',
      title: 'Power Apps',
      description: 'Tool lifecycle management and user interface',
    },
    {
      icon: '/images/Templates/technologyicons/Power automate.png',
      title: 'Power Automate',
      description: 'Alerts, approvals, and maintenance workflows',
    },
    {
      icon: '/images/Templates/technologyicons/SQL server.png',
      title: 'SQL Server',
      description: 'Centralized data storage and integration',
    },
    {
      icon: '/images/Templates/technologyicons/OCR Technology.png',
      title: 'OCR Technology',
      description: 'Automated tool ID recognition and data capture',
    },
    {
      icon: '/images/Templates/technologyicons/power BI.png',
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
              className='bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 flex items-start gap-4 w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-1rem)]'
            >
              {/* Icon Container with Shadow Effect */}
              <div
                className={`shrink-0 relative flex items-center justify-center overflow-visible ${
                  index === 3 ? 'w-24 h-24' : 'w-12 h-12'
                }`}
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={index === 3 ? 96 : 64}
                  height={index === 3 ? 96 : 64}
                  className='object-contain drop-shadow-[0_10px_20px_#00000054]'
                />
              </div>

              {/* Content */}
              <div>
                <h3 className='text-xl font-bold text-[#262626] mb-2'>{item.title}</h3>
                <p className='text-gray-600 text-sm leading-relaxed'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
