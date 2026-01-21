import Image from 'next/image';

const outcomes = [
  {
    icon: '/images/Templates/template9/last1.svg',
    percentage: '30%',
    title: 'Faster Breakdown Resolution',
    description: 'Automated workflows improved repair turnaround time',
  },
  {
    icon: '/images/Templates/template9/last2.svg',
    percentage: '95%',
    title: 'On-Time Preventive Maintenance',
    description: 'Schedules and notifications reduced maintenance delays',
  },
  {
    icon: '/images/Templates/template9/last3.svg',
    percentage: 'Reduced',
    title: 'Downtime',
    description: 'Predictive insights enabled proactive part replacement and repair planning',
  },
  {
    icon: '/images/Templates/template9/last4.svg',
    percentage: 'Optimized',
    title: 'Cost',
    description: 'Streamlined spare part management lowered maintenance overhead',
  },
  {
    icon: '/images/Templates/template9/last5.svg',
    percentage: 'Improved',
    title: 'Reliability',
    description: 'Data-driven decisions enhanced machine availability and lifecycle performance',
  },
  {
    icon: '/images/Templates/template9/last6.svg',
    percentage: 'Enhanced',
    title: 'Governance',
    description: 'Role-based access and audit trails ensured accountability',
  },
];

const KeyOutcomes = () => {
  return (
    <section className='w-full pt-16 pb-4 px-4 md:px-12 bg-white relative overflow-visible'>
      {/* Decorative Images */}
      <div className='absolute -top-5 left-28 z-10 w-[200px] lg:w-[300px]'>
        <Image
          src='/images/Templates/template9/left9.svg'
          alt='Decoration Left'
          width={300}
          height={300}
          className='object-contain'
        />
      </div>
      <div className='absolute -top-16 right-0 z-10 w-[200px] lg:w-[400px]'>
        <Image
          src='/images/Templates/template9/right9.svg'
          alt='Decoration Right'
          width={400}
          height={400}
          className='object-contain'
        />
      </div>

      <div className='max-w-7xl mx-auto relative z-20'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-[#1F1F1F] mb-4'>Key Outcomes</h2>
          <div className='h-1 w-24 mx-auto rounded-full bg-[#F97415]'></div>
          <p className='text-[#505050] mt-4 text-sm md:text-base'>
            Measurable improvements driving operational excellence
          </p>
        </div>

        {/* Outcomes Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {outcomes.map((item, index) => (
            <div
              key={index}
              className='bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300'
            >
              <div className='w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-gradient-to-r from-[#0A761E] to-[#12E93A]'>
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={32}
                  height={32}
                  className='object-contain brightness-0 invert'
                />
              </div>

              <h3
                className='text-3xl font-bold mb-2 tracking-tight'
                style={{
                  background: 'linear-gradient(90deg, #13760A 0%, #1556F9 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {item.percentage}
              </h3>

              <h4 className='text-xl font-bold text-[#1F1F1F] mb-4 leading-tight'>{item.title}</h4>

              <p className='text-[#505050] text-sm leading-relaxed'>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyOutcomes;
