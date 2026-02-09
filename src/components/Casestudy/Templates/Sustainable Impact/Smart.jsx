import Image from 'next/image';

export default function Smart() {
  const cards = [
    {
      icon: '/images/Templates/template7/sect1.svg',
      title: 'Digital Transformation',
      description: 'Replace manual logs with automated Power Platform system',
    },
    {
      icon: '/images/Templates/template7/sect2.svg',
      title: 'Data Centralization',
      description: 'Integrate water, energy, waste data into unified model',
    },
    {
      icon: '/images/Templates/template7/sect3.svg',
      title: 'Compliance & Governance',
      description: 'Support ISO 14001, PCB, and sustainability reporting',
    },
  ];

  return (
    <section className='w-full py-20 relative'>
      {/* Background */}
      <div
        className='absolute inset-0 z-0'
        style={{
          background: `linear-gradient(180deg, #10751AE8 0%, #10751AE8 100%), url('/images/Templates/template7/bg7.webp') center/cover no-repeat`,
        }}
      />

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Header content */}
        <div className='text-center mb-16'>
          <span
            className='inline-block px-4 py-1.5 rounded-full text-white text-sm font-bold mb-6'
            style={{ background: 'linear-gradient(90deg, #2BBD20 0%, #1A7F16 100%)' }}
          >
            Our Solution
          </span>
          <h2 className='text-3xl lg:text-4xl font-bold text-white mb-6'>
            Smart Sustainability Management Platform
          </h2>
          <p className='text-white/90 text-lg max-w-4xl mx-auto leading-relaxed'>
            A Power Platform-based system enabling manufacturers to digitally monitor, analyze, and
            manage environmental performance across facilities with real-time compliance visibility.
          </p>
        </div>

        {/* Cards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {cards.map((card, index) => (
            <div key={index} className='bg-white rounded-2xl p-8 text-center shadow-lg'>
              {/* Icon Circle */}
              <div
                className='w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center shadow-md'
                style={{
                  background: 'linear-gradient(180deg, #3C83F6 0%, #6DA2F8 100%)',
                }}
              >
                <div className='relative w-10 h-10'>
                  <Image
                    src={card.icon}
                    alt={card.title}
                    fill
                    className='object-contain brightness-0 invert'
                  />
                </div>
              </div>

              <h3 className='text-xl lg:text-2xl font-bold text-[#1D2530] mb-4'>{card.title}</h3>
              <p className='text-[#64748B] text-base leading-relaxed'>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
