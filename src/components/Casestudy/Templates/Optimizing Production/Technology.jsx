import Image from 'next/image';

export default function Technology() {
  const stack = [
    {
      icon: '/images/Templates/technologyicons/SQL server.png',
      title: 'SQL Server',
      description: 'Centralized database for scrap and production data',
    },
    {
      icon: '/images/Templates/template6/mail2.svg',
      title: 'SSIS',
      description: 'ETL automation for data integration and transformation',
    },
    {
      icon: '/images/Templates/template6/neww5.svg',
      title: 'Tableau',
      description: 'Interactive dashboards and KPI visualization',
    },
    {
      icon: '/images/Templates/template6/colour1.svg',
      title: 'MES & Trace Systems',
      description: 'Source systems for live production and quality data',
    },
    {
      icon: '/images/Templates/technologyicons/Power automate.png',
      title: 'Power Automate',
      description: 'Daily syncs and threshold-based notifications',
    },
    {
      icon: '/images/Templates/template6/neww6.svg',
      title: 'Azure Cloud',
      description: 'Scalable cloud infrastructure for data processing',
    },
  ];

  const floatingIcons = [
    '/images/Templates/technologyicons/Power automate.png',
    '/images/Templates/technologyicons/Azure Data Factory1.webp',
    '/images/Templates/technologyicons/SQL server.png',
    '/images/Templates/template6/tech4.webp',
  ];

  return (
    <section className='w-full pt-16 pb-32' style={{ backgroundColor: '#F0F2F54D' }}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-8 relative'>
          <h2 className='text-3xl lg:text-4xl font-bold text-[#1D2530] mb-3'>Technology Stack</h2>
          <p className='text-[#64748B] text-lg'>
            Enterprise-grade technologies powering real-time analytics
          </p>
        </div>
        {/* Header Area */}
        <div className='flex flex-col md:flex-row items-center justify-center mb-12 gap-8'>
          {/* Floating Icons */}
          <div className='flex items-center gap-12'>
            {floatingIcons.map((icon, index) => (
              <div
                key={index}
                className='relative w-12 h-12 lg:w-14 lg:h-14 drop-shadow-sm transition-transform hover:-translate-y-1'
              >
                <Image src={icon} alt={`Tech ${index}`} fill className='object-contain' />
              </div>
            ))}
          </div>
        </div>

        {/* Tech Cards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {stack.map((item, index) => (
            <div
              key={index}
              className='bg-white rounded-xl p-6 border-2 border-[#F5F5F5] shadow-[0px_8px_22px_rgba(0,0,0,0.08)] flex items-start gap-4'
            >
              <div className='w-14 h-14 relative flex-shrink-0 flex items-center justify-center'>
                <Image
                  src={item.icon}
                  alt={item.title}
                  fill
                  className='object-contain drop-shadow-[0_10px_20px_#00000054]'
                />
              </div>
              <div>
                <h3 className='text-lg font-bold text-[#0F1729]/80 mb-1'>{item.title}</h3>
                <p className='text-[#64748B] text-sm leading-relaxed'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
