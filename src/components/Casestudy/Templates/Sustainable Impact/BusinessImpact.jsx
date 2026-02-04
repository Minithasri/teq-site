import Image from 'next/image';

export default function BusinessImpact() {
  const comparisonData = [
    {
      metric: 'Compliance Tracking',
      before: 'Manual logs',
      after: '100% real-time visibility',
    },
    {
      metric: 'Reporting Effort',
      before: '15+ hrs/week',
      after: '60% reduction through automation',
    },
    {
      metric: 'Data Accuracy',
      before: 'Manual entry errors',
      after: 'AI-driven precision',
    },
    {
      metric: 'Audit Readiness',
      before: 'Reactive',
      after: 'Instant access to audit data',
    },
    {
      metric: 'Environmental Risk',
      before: 'High',
      after: 'Minimized through proactive alerts',
    },
  ];

  const impactCards = [
    {
      icon: '/images/Templates/template7/newb1.svg',
      title: '100% Compliance Visibility',
      description: 'Centralized dashboard for all environmental metrics and deadlines',
    },
    {
      icon: '/images/Templates/template7/newb2.svg',
      title: '60% Reduction in Effort',
      description: 'AI and automation minimized manual reporting tasks',
    },
    {
      icon: '/images/Templates/template7/newb3.svg',
      title: 'AI-Driven Accuracy',
      description: 'Error-free data extraction from lab reports',
    },
    {
      icon: '/images/Templates/template7/newb4.svg',
      title: 'Improved Audit Readiness',
      description: 'Instant access to compliance documentation',
    },
    {
      icon: '/images/Templates/template7/newb5.svg',
      title: 'Reduced Environmental Risk',
      description: 'Real-time alerts for threshold breaches',
    },
    {
      icon: '/images/Templates/template7/newb6.svg',
      title: 'Enhanced Governance',
      description: 'Role-based access and traceability for all actions',
    },
  ];

  return (
    <section
      className='w-full py-16 lg:py-24 relative overflow-visible'
      style={{
        background:
          'linear-gradient(180deg, #F6F6F6 0%, #1E6C27B5 15%, #085E12D4 50%, #236F2CB6 100%)',
      }}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Decorative Bar Icon (Left) */}
        <div className='absolute top-14 left-0 lg:left-28 w-[100px] h-[150px] opacity-80 pointer-events-none'>
          <Image
            src='/images/Templates/template7/bar.svg'
            alt='Bar Graph'
            fill
            className='object-contain'
          />
        </div>

        {/* Decorative Dashboard Images (Right) */}
        <div className='absolute -top-20 right-0 lg:right-0 w-[300px] lg:w-[500px] h-[300px] hidden lg:block pointer-events-none'>
          <div className='relative w-full h-full'>
            {/* Back Image */}
            <div className='absolute -top-4 -right-32 w-[250px] h-[280px] z-10 opacity-90'>
              <Image
                src='/images/Templates/template7/business2.webp'
                alt='Dashboard Back'
                fill
                className='object-cover rounded-xl '
              />
            </div>
            {/* Front Image */}
            <div className='absolute -top-1 -right-24 w-[380px] h-[230px] z-0'>
              <Image
                src='/images/Templates/template7/business1.webp'
                alt='Dashboard Front'
                fill
                className='object-cover rounded-xl '
              />
            </div>
          </div>
        </div>

        {/* Section Title */}
        <h2 className='text-3xl lg:text-4xl font-bold text-white text-center mb-28 relative z-10'>
          Business Impact
        </h2>

        {/* Comparison Table */}
        <div
          className='mb-16 relative z-10 max-w-7xl mx-auto rounded-xl p-8 backdrop-blur-md border border-white/10'
          style={{ background: '#FFFFFF1A' }}
        >
          <div className='grid grid-cols-12 gap-4 mb-4 border-b border-white/20 pb-4'>
            <div className='col-span-4 lg:col-span-4 text-[20px] font-bold text-white'>Metric</div>
            <div className='col-span-4 lg:col-span-4 text-[20px] font-bold text-white'>Before</div>
            <div className='col-span-4 lg:col-span-4 text-[20px] font-bold text-white'>After</div>
          </div>

          <div>
            {comparisonData.map((item, index) => (
              <div
                key={index}
                className='grid grid-cols-12 gap-4 items-center py-6 border-b border-white/20 last:border-0'
              >
                <div className='col-span-4 lg:col-span-4 text-lg text-white font-medium'>
                  {item.metric}
                </div>
                <div className='col-span-4 lg:col-span-4 text-lg text-white/70'>{item.before}</div>
                <div className='col-span-4 lg:col-span-4'>
                  <span
                    className='inline-block px-4 py-2 rounded-full text-[14px] lg:text-[16px] font-semibold text-white'
                    style={{ background: '#FFFFFF4D' }}
                  >
                    {item.after}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Cards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10'>
          {impactCards.map((card, index) => (
            <div
              key={index}
              className='rounded-xl p-6 backdrop-blur-md border border-white/10'
              style={{ background: '#FFFFFF1A' }}
            >
              <div className='w-8 h-8 relative mb-4'>
                <Image
                  src={card.icon}
                  alt={card.title}
                  fill
                  className='object-contain brightness-0 invert'
                />
              </div>
              <h3 className='text-[20px] font-bold text-white mb-2'>{card.title}</h3>
              <p className='text-white/80 text-[16px] leading-relaxed'>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
