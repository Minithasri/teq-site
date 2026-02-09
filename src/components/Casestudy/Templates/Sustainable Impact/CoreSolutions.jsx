import Image from 'next/image';

export default function CoreSolutions() {
  const leftCards = [
    {
      title: 'Waste & Disposal Management',
      description:
        'Digital tracking of hazardous/non-hazardous waste, threshold alerts, and automatic compliance summaries',
    },
    {
      title: 'Emission & Compliance Tracking',
      description:
        'Centralized logging of air, noise, and effluent parameters with auto-alerts for limit breaches',
    },
    {
      title: 'Sustainability Dashboards',
      description:
        'Power BI visualizations of key sustainability KPIs — water intensity, waste reduction, carbon footprint',
    },
  ];

  const rightCards = [
    {
      title: 'Water & Energy Monitoring',
      description:
        'Integrated monitoring of utilities via IoT meters and manual inputs with trend analysis dashboards',
    },
    {
      title: 'AI-Driven Lab Report Extraction',
      description:
        'Power Platform AI models extract data directly from third-party vendor lab reports',
    },
    {
      title: 'Audit & Corrective Action Management',
      description:
        'Digital workflows for environmental audits, non-conformity tracking, and closure monitoring',
    },
  ];

  return (
    <section className='w-full relative' style={{ background: '#F6F6F6' }}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Top Header Section with Overlapping Images */}
        <div className='flex flex-col lg:flex-row items-center justify-between mb-2 gap-10'>
          <h2 className='text-3xl lg:text-4xl font-bold text-[#1D2530] -mb-24 max-w-lg'>
            Core Solution Highlights
          </h2>

          <div className='relative w-full max-w-xl h-[250px]'>
            {/* Core 1 - Hand/Idea Image */}
            <div className='absolute -left-64 -bottom-20 w-[450px] h-[400px] z-0'>
              <Image
                src='/images/Templates/template7/core1.webp'
                alt='Concept'
                fill
                className='object-contain'
              />
            </div>
            {/* Core 2 - Dashboard Interface */}
            <div className='absolute right-0 top-8 w-[350px] lg:w-[450px] h-[220px] shadow-xl rounded-xl overflow-hidden border-2 border-white z-0'>
              <Image
                src='/images/Templates/template7/core2.webp'
                alt='Dashboard Interface'
                fill
                className='object-cover'
              />
            </div>
          </div>
        </div>

        {/* Two Column Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10'>
          {/* Left Column (Blue Gradients) */}
          <div className='space-y-6'>
            {leftCards.map((card, index) => (
              <div
                key={index}
                className='bg-white rounded-xl shadow-sm overflow-hidden group hover:shadow-md transition-shadow'
              >
                {/* Gradient Top Border */}
                <div
                  className='h-2 w-full'
                  style={{ background: 'linear-gradient(90deg, #3C83F6 0%, #6DA2F8 100%)' }}
                />
                <div className='p-8'>
                  <h3 className='text-xl font-bold text-[#1D2530] mb-3 group-hover:text-[#3C83F6] transition-colors'>
                    {card.title}
                  </h3>
                  <p className='text-[#64748B] text-base leading-relaxed'>{card.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column (Green Gradients) */}
          <div className='space-y-6'>
            {rightCards.map((card, index) => (
              <div
                key={index}
                className='bg-white rounded-xl shadow-sm overflow-hidden group hover:shadow-md transition-shadow'
              >
                {/* Gradient Top Border */}
                <div
                  className='h-2 w-full'
                  style={{ background: 'linear-gradient(90deg, #10B77F 0%, #14E6A0 100%)' }}
                />
                <div className='p-8'>
                  <h3 className='text-xl font-bold text-[#1D2530] mb-3 group-hover:text-[#10B77F] transition-colors'>
                    {card.title}
                  </h3>
                  <p className='text-[#64748B] text-base leading-relaxed'>{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
