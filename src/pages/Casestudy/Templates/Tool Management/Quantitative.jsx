import Image from 'next/image';

export default function Quantitative() {
  const outcomes = [
    {
      text: '30% Increase in Productivity through automated processes and reduced downtime',
    },
    {
      text: '1:4 Workforce Efficiency Improvement via reduced manual intervention',
    },
    {
      text: 'Real-Time Operational Insights with instant visibility into tool health and usage metrics',
    },
    {
      text: 'Optimized Maintenance Cycles through predictive alerts preventing unexpected failures',
    },
    {
      text: 'Improved Governance with centralized, audit-ready tool management system',
    },
  ];

  return (
    <section className='w-full py-24 relative overflow-hidden'>
      {/* Background Image */}
      <div className='absolute inset-0 z-0'>
        <Image
          src='/images/Templates/template8/qobg.png'
          alt='Quantitative Background'
          fill
          className='object-cover'
        />
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>Quantitative Outcomes</h2>
        </div>

        {/* Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {outcomes.map((item, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl flex items-start gap-4 border border-[#69E0BB] backdrop-blur-sm ${
                index === 4 ? 'md:col-span-2 md:w-1/2 md:mx-auto' : ''
              }`}
              style={{
                backgroundColor: '#00B6A057',
                background: `linear-gradient(180deg, #00B6A057 0%, #397A6600 100%)`,
              }}
            >
              <div className='flex-shrink-0 mt-1'>
                <Image
                  src='/images/Templates/template8/qoicon.svg'
                  alt='Check Icon'
                  width={24}
                  height={24}
                />
              </div>
              <p className='text-white text-lg leading-relaxed'>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
