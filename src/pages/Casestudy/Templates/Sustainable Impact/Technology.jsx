import Image from 'next/image';

export default function Technology() {
  const technologies = [
    {
      icon: '/images/Templates/template7/image 299.png',
      name: 'Power Apps',
    },
    {
      icon: '/images/Templates/template7/image 299-1.png',
      name: 'Power Automate',
    },
    {
      icon: '/images/Templates/template7/image 299-2.png',
      name: 'AI Builder',
    },
    {
      icon: '/images/Templates/template7/image 299-3.png',
      name: 'SQL Server',
    },
    {
      icon: '/images/Templates/template7/image 299-4.png',
      name: 'Dataverse',
    },
    {
      icon: '/images/Templates/template7/image 299-5.png',
      name: 'Azure Data Factory',
    },
    {
      icon: '/images/Templates/template7/image 299-6.png',
      name: 'Power BI',
    },
    {
      icon: '/images/Templates/template7/image 299-7.png',
      name: 'SharePoint',
    },
  ];

  return (
    <section className='w-full relative' style={{ background: '#F6F6F6' }}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Header */}
        <h2 className='text-3xl lg:text-4xl font-bold text-[#1D2530] text-center mb-16'>
          Technology Stack
        </h2>

        {/* Technology Grid */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
          {technologies.map((tech, index) => (
            <div
              key={index}
              className='bg-white rounded-xl p-8 shadow-sm flex flex-col items-center justify-center hover:shadow-md transition-shadow h-[180px]'
            >
              <div className='relative w-12 h-12 mb-4'>
                <Image src={tech.icon} alt={tech.name} fill className='object-contain' />
              </div>
              <h3 className='text-lg font-bold text-[#1D2530] text-center'>{tech.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
