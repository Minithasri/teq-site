import Image from 'next/image';

export default function Technology() {
  const stack = [
    {
      icon: '/images/Templates/template6/mail1.svg',
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
      icon: '/images/Templates/template6/mail.svg',
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
    '/images/Templates/template6/tech1.png',
    '/images/Templates/template6/tech2.png',
    '/images/Templates/template5/i5.png', // 3rd icon
    '/images/Templates/template6/tech4.png',
  ];

  return (
    <section className='w-full pt-16 pb-32' style={{ backgroundColor: '#F0F2F54D' }}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header Area */}
        <div className='flex flex-col md:flex-row items-center justify-between mb-12 gap-8'>
          <div>
            <h2 className='text-3xl lg:text-4xl font-bold text-[#1D2530] mb-3'>Technology Stack</h2>
            <p className='text-[#64748B] text-lg max-w-2xl'>
              Enterprise-grade technologies powering real-time analytics
            </p>
          </div>

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
              className='bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow'
            >
              <div className='w-12 h-12 relative flex-shrink-0 bg-blue-50 rounded-lg flex items-center justify-center'>
                <div className='relative w-8 h-8'>
                  <Image src={item.icon} alt={item.title} fill className='object-contain' />
                </div>
              </div>
              <div>
                <h3 className='text-lg font-bold text-[#1D2530] mb-1'>{item.title}</h3>
                <p className='text-[#64748B] text-sm leading-relaxed'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
