import Image from 'next/image';

export default function Technology() {
  const technologies = [
    {
      icon: '/images/Templates/technologyicons/power apps.png',
      name: 'Power Apps',
    },
    {
      icon: '/images/Templates/technologyicons/Power automate.png',
      name: 'Power Automate',
    },
    {
      icon: '/images/Templates/technologyicons/AI Builder.png',
      name: 'AI Builder',
    },
    {
      icon: '/images/Templates/technologyicons/SQL server.png',
      name: 'SQL Server',
    },
    {
      icon: '/images/Templates/technologyicons/dataverse.png',
      name: 'Dataverse',
    },
    {
      icon: '/images/Templates/technologyicons/Azure Data Factory1.webp',
      name: 'Azure Data Factory',
    },
    {
      icon: '/images/Templates/technologyicons/power BI.png',
      name: 'Power BI',
    },
    {
      icon: '/images/Templates/technologyicons/Share point.png',
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
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  fill
                  className='object-contain drop-shadow-[0_10px_20px_#00000054]'
                />
              </div>
              <h3 className='text-lg font-bold text-[#1D2530] text-center'>{tech.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
